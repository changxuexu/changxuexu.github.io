# 脚本编程（Cocos Creator 3.8.8）

Cocos Creator 3.8.8 推荐使用 **TypeScript** 编写组件脚本。脚本类继承自 `Component`，通过装饰器注册为 Creator 组件，再挂载到场景节点上驱动游戏逻辑。

本章示例统一使用 Cocos Creator **3.8.8** API。所有引擎类型都从 `cc` 模块按需导入，不再使用 2.x 时代的 `cc.Class`、`cc.loader`、`node.runAction()` 等全局 API。

# 1 节点和组件

## 1.1 创建和使用脚本组件

在资源管理器中右键目标目录，选择 **创建 -> TypeScript -> NewComponent**。创建后的基础组件如下：

```ts
import { _decorator, Component } from 'cc';

const { ccclass } = _decorator;

@ccclass('NewComponent')
export class NewComponent extends Component {
    onLoad() {
        // 节点首次激活时执行初始化。
    }

    start() {
        // 第一次 update 前执行。
    }

    update(deltaTime: number) {
        // 每帧执行，deltaTime 的单位是秒。
    }
}
```

将脚本挂载到节点有两种常用方式：

- 选中节点，在属性检查器底部点击 **添加组件 -> 用户脚本组件**。
- 将脚本资源直接拖到节点的属性检查器中。

脚本文件名、类名和 `@ccclass()` 中的类名建议保持一致。已经挂载并保存到场景或预制体的组件不要随意修改 `@ccclass()` 名称，否则可能丢失序列化关联。

## 1.2 使用装饰器声明组件类

3.8.8 使用标准 TypeScript 类和 `_decorator` 装饰器，不再使用 `cc.Class({...})`。

```ts
import { _decorator, Component } from 'cc';

const { ccclass } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {
    private score = 0;

    addScore(value: number) {
        this.score += value;
    }
}
```

普通数据类也可以使用 TypeScript 类：

```ts
class Shape {
    area(): number {
        return 0;
    }
}

class Rect extends Shape {
    constructor(
        public width: number,
        public height: number,
    ) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

const rect = new Rect(10, 20);
console.log(rect instanceof Rect); // true
```

只有需要被 Creator 识别、序列化或挂载的类，才需要使用 `@ccclass()`。

## 1.3 声明自定义属性

使用 `@property` 可以把字段显示在属性检查器中，供策划和美术配置。

### 1.3.1 基础类型和引擎类型

```ts
import {
    _decorator,
    Component,
    Node,
    SpriteFrame,
    Vec2,
} from 'cc';

const { ccclass, property } = _decorator;

@ccclass('PropertyExample')
export class PropertyExample extends Component {
    @property
    height = 500;

    @property
    playerName = 'Player';

    @property
    isAlive = true;

    @property(Node)
    targetNode: Node | null = null;

    @property(Vec2)
    spawnPoint = new Vec2();

    @property(SpriteFrame)
    icon: SpriteFrame | null = null;
}
```

引用类型建议声明为 `类型 | null` 并初始化为 `null`。使用前要进行空值判断，避免属性检查器未绑定时发生运行时错误。

### 1.3.2 数组类型

```ts
import {
    _decorator,
    Component,
    CCBoolean,
    CCFloat,
    CCInteger,
    CCString,
    Node,
    SpriteFrame,
    Vec2,
} from 'cc';

const { ccclass, property } = _decorator;

@ccclass('ArrayPropertyExample')
export class ArrayPropertyExample extends Component {
    @property({ type: [CCBoolean] })
    flags: boolean[] = [];

    @property({ type: [CCString] })
    names: string[] = [];

    @property({ type: [CCFloat] })
    speeds: number[] = [];

    @property({ type: [CCInteger] })
    scores: number[] = [];

    @property({ type: [Vec2] })
    points: Vec2[] = [];

    @property({ type: [Node] })
    targets: Node[] = [];

    @property({ type: [SpriteFrame] })
    frames: SpriteFrame[] = [];
}
```

### 1.3.3 完整属性配置

```ts
@property({
    displayName: '初始得分',
    tooltip: '玩家进入关卡时拥有的分数',
    min: 0,
    step: 1,
})
score = 0;
```

常用参数如下：

- `type`：指定属性类型，尤其适用于引擎对象和数组。
- `displayName`：属性检查器中的显示名称。
- `tooltip`：鼠标悬停时显示的说明。
- `visible`：是否在属性检查器中显示。
- `serializable`：是否保存到场景或预制体。
- `readonly`：是否在属性检查器中只读。
- `min`、`max`、`step`、`range`：数值输入限制。

TypeScript 字段的初始值就是默认值，不需要再写 2.x 的 `default` 配置。

## 1.4 脚本生命周期

常用生命周期回调执行顺序为：

```text
onLoad -> onEnable -> start -> update/lateUpdate -> onDisable -> onDestroy
```

```ts
import { _decorator, Component } from 'cc';

const { ccclass } = _decorator;

@ccclass('LifecycleExample')
export class LifecycleExample extends Component {
    onLoad() {
        console.log('onLoad：初始化组件数据');
    }

    onEnable() {
        console.log('onEnable：注册事件或恢复逻辑');
    }

    start() {
        console.log('start：所有组件完成 onLoad 后开始运行');
    }

    update(deltaTime: number) {
        // 每帧更新游戏逻辑。
    }

    lateUpdate(deltaTime: number) {
        // 所有 update 完成后执行，常用于相机跟随。
    }

    onDisable() {
        console.log('onDisable：注销在 onEnable 中注册的事件');
    }

    onDestroy() {
        console.log('onDestroy：释放组件持有的资源或引用');
    }
}
```

### 1.4.1 onLoad

节点首次激活时调用，且一定早于任何组件的 `start()`。适合读取场景引用、缓存组件和初始化内部状态。

```ts
import { _decorator, Component, find, Node, SpriteFrame } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('Weapon')
export class Weapon extends Component {
    @property(SpriteFrame)
    bulletSprite: SpriteFrame | null = null;

    private gun: Node | null = null;

    onLoad() {
        this.gun = find('hand/weapon', this.node);
        const rect = this.bulletSprite?.rect;
        console.log('子节点：', this.gun, '子图区域：', rect);
    }
}
```

### 1.4.2 onEnable 和 onDisable

组件启用或节点激活时调用 `onEnable()`；组件禁用或节点失活时调用 `onDisable()`。成对注册和注销事件，可以避免重复监听与内存泄漏。

```ts
import { _decorator, Button, Component } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('ButtonHandler')
export class ButtonHandler extends Component {
    @property(Button)
    button: Button | null = null;

    onEnable() {
        this.button?.node.on(Button.EventType.CLICK, this.onClick, this);
    }

    onDisable() {
        this.button?.node.off(Button.EventType.CLICK, this.onClick, this);
    }

    private onClick() {
        console.log('按钮被点击');
    }
}
```

### 1.4.3 start、update 和 lateUpdate

`start()` 只在组件第一次启用、第一次 `update()` 之前调用。`update(deltaTime)` 每帧调用，应使用 `deltaTime` 保证不同帧率下速度一致。

```ts
import { _decorator, Component, Vec3 } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('MoveUp')
export class MoveUp extends Component {
    @property({ min: 0 })
    moveSpeed = 100;

    private readonly position = new Vec3();

    update(deltaTime: number) {
        this.node.getPosition(this.position);
        this.position.y += this.moveSpeed * deltaTime;
        this.node.setPosition(this.position);
    }
}
```

`lateUpdate()` 常用于必须在其他对象更新后执行的逻辑，例如相机跟随角色。

### 1.4.4 onDestroy

组件或节点调用 `destroy()` 后，引擎会在当前帧结束时销毁对象，并调用 `onDestroy()`。永久销毁与临时禁用不同：禁用对象可重新启用，销毁对象不可恢复。

## 1.5 访问节点和组件

### 1.5.1 当前节点和当前组件

```ts
const currentNode = this.node;
console.log(currentNode.name);

const label = this.getComponent(Label);
if (label) {
    label.string = `${this.node.name} started`;
}
```

所需类型需要从 `cc` 导入，例如：

```ts
import { Label } from 'cc';
```

### 1.5.2 获取其他节点上的组件

最稳定的方式是在属性检查器中直接绑定目标节点或组件：

```ts
import { _decorator, Component, Label, Node } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('TargetReference')
export class TargetReference extends Component {
    @property(Node)
    targetNode: Node | null = null;

    @property(Label)
    targetLabel: Label | null = null;

    start() {
        const label = this.targetLabel ?? this.targetNode?.getComponent(Label);
        if (label) {
            label.string = 'Hello Cocos Creator 3.8.8';
        }
    }
}
```

### 1.5.3 查找子节点和全局节点

```ts
import { find } from 'cc';

const directChild = this.node.getChildByName('Weapon');
const nestedChild = this.node.getChildByPath('Hand/Weapon');
const sceneNode = find('Canvas/HUD/ScoreLabel');
```

优先使用属性检查器引用。路径查找依赖节点名称和层级，场景调整后容易失效；频繁调用也会带来不必要的遍历开销。

## 1.6 常用节点和组件接口

### 1.6.1 激活、父子关系和子节点

```ts
// 激活或关闭节点。
this.node.active = true;
this.node.active = false;

// 设置父节点。
child.setParent(parent);
// 保持世界变换设置父节点。
child.setParent(parent, true);

// 添加和移除子节点。
parent.addChild(child);
child.removeFromParent();

// 访问子节点。
console.log(this.node.children);
console.log(this.node.children.length);
console.log(this.node.getChildByName('Player'));
```

`active` 是节点自身设置的状态，`activeInHierarchy` 表示节点在整个层级中是否真正处于激活状态。

### 1.6.2 位置、旋转和缩放

3.x 中节点使用三维变换接口，即使项目是 2D 游戏，也应使用 `Vec3`：

```ts
import { Vec3 } from 'cc';

this.node.setPosition(100, 50, 0);
this.node.setWorldPosition(100, 50, 0);

this.node.setScale(1.5, 1.5, 1);
this.node.setRotationFromEuler(0, 0, 45);

const localPosition = this.node.position;
const worldPosition = this.node.worldPosition;

const nextPosition = new Vec3(localPosition.x + 10, localPosition.y, localPosition.z);
this.node.setPosition(nextPosition);
```

不要再写 `node.x = 100`、`node.y += 1` 或 `node.rotation = 30`。3.x 使用 `setPosition()`、`setRotationFromEuler()` 等接口。

### 1.6.3 UI 尺寸和锚点

UI 节点的尺寸与锚点由 `UITransform` 管理：

```ts
import { UITransform } from 'cc';

const transform = this.node.getComponent(UITransform);
if (transform) {
    transform.setContentSize(200, 100);
    transform.setAnchorPoint(0.5, 0.5);
}
```

### 1.6.4 添加、获取和移除组件

```ts
import { Label, Sprite } from 'cc';

const sprite = this.node.getComponent(Sprite);
const labels = this.node.getComponents(Label);
const childLabels = this.node.getComponentsInChildren(Label);

const newLabel = this.node.addComponent(Label);
newLabel.string = 'Dynamic Label';

sprite?.destroy();
```

## 1.7 创建、克隆和销毁节点

### 1.7.1 创建新节点

```ts
import { Node, Sprite, UITransform } from 'cc';

const spriteNode = new Node('Sprite');
spriteNode.addComponent(UITransform).setContentSize(100, 100);
spriteNode.addComponent(Sprite);
this.node.addChild(spriteNode);
```

### 1.7.2 克隆已有节点

```ts
import { _decorator, Component, instantiate, Node } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('CloneExample')
export class CloneExample extends Component {
    @property(Node)
    target: Node | null = null;

    start() {
        if (!this.target) {
            return;
        }

        const clone = instantiate(this.target);
        clone.setParent(this.node);
        clone.setPosition(0, 0, 0);
    }
}
```

### 1.7.3 实例化预制体

```ts
import { _decorator, Component, instantiate, Prefab } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('PrefabSpawner')
export class PrefabSpawner extends Component {
    @property(Prefab)
    playerPrefab: Prefab | null = null;

    spawn() {
        if (!this.playerPrefab) {
            return;
        }

        const player = instantiate(this.playerPrefab);
        player.setParent(this.node);
        player.setPosition(0, 0, 0);
    }
}
```

### 1.7.4 销毁节点

```ts
import { isValid } from 'cc';

this.scheduleOnce(() => {
    if (isValid(this.node)) {
        this.node.destroy();
    }
}, 5);
```

`destroy()` 会在当前帧结束时完成销毁。`removeFromParent()` 只解除父子关系，不会销毁对象；需要永久删除时使用 `destroy()`，需要对象池复用时则暂时关闭节点并交由 `NodePool` 管理。

# 2 加载和切换场景

使用 `director` 加载场景。场景名不需要包含 `.scene` 后缀。

```ts
import { director } from 'cc';

director.loadScene('Game', (error, scene) => {
    if (error) {
        console.error('场景加载失败：', error);
        return;
    }

    console.log('场景加载成功：', scene?.name);
});
```

场景较大时可以提前预加载：

```ts
import { director } from 'cc';

director.preloadScene('Game', (error) => {
    if (error) {
        console.error('场景预加载失败：', error);
        return;
    }

    director.loadScene('Game');
});
```

创建跨场景常驻节点：

```ts
import { director } from 'cc';

director.addPersistRootNode(this.node);

const persistent = director.isPersistRootNode(this.node);
console.log('是否为常驻节点：', persistent);

// 不再需要常驻时：
director.removePersistRootNode(this.node);
```

常驻节点必须是场景的直接子节点。常见用途包括背景音乐、玩家全局数据和网络连接管理器。注意避免新场景中出现同名或重复的管理节点。

# 3 资源管理

## 3.1 在属性检查器中引用资源

```ts
import { _decorator, Component, Sprite, SpriteFrame } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('SpriteFrameReference')
export class SpriteFrameReference extends Component {
    @property(SpriteFrame)
    spriteFrame: SpriteFrame | null = null;

    onLoad() {
        const sprite = this.getComponent(Sprite);
        if (sprite) {
            sprite.spriteFrame = this.spriteFrame;
        }
    }
}
```

将图片资源展开后生成的 SpriteFrame 子资源拖到属性检查器即可。静态引用会随场景或预制体自动加载，是最简单、最稳定的资源引用方式。

## 3.2 动态加载 resources 目录中的资源

3.8.8 使用 `resources.load()`，不再使用 `cc.loader.loadRes()`。

### 加载 Prefab

```ts
import { instantiate, Prefab, resources } from 'cc';

resources.load('Player', Prefab, (error, prefab) => {
    if (error) {
        console.error('Player 预制体加载失败：', error);
        return;
    }

    const player = instantiate(prefab);
    this.node.addChild(player);
});
```

### 加载 SpriteFrame

图片导入后，Texture2D 和 SpriteFrame 是不同的子资源。加载 SpriteFrame 时路径通常需要添加 `/spriteFrame`：

```ts
import { resources, Sprite, SpriteFrame } from 'cc';

resources.load('images/sheep/spriteFrame', SpriteFrame, (error, frame) => {
    if (error) {
        console.error('SpriteFrame 加载失败：', error);
        return;
    }

    const sprite = this.getComponent(Sprite);
    if (sprite) {
        sprite.spriteFrame = frame;
    }
});
```

路径相对于 `assets/resources`，不要包含扩展名。大型项目更推荐使用 Asset Bundle，把资源按功能或关卡拆分，避免把大量内容都放进 `resources`。

## 3.3 加载 Asset Bundle

```ts
import { assetManager, instantiate, Prefab } from 'cc';

assetManager.loadBundle('game', (bundleError, bundle) => {
    if (bundleError) {
        console.error('Bundle 加载失败：', bundleError);
        return;
    }

    bundle.load('prefabs/Enemy', Prefab, (assetError, prefab) => {
        if (assetError) {
            console.error('Enemy 加载失败：', assetError);
            return;
        }

        this.node.addChild(instantiate(prefab));
    });
});
```

## 3.4 释放资源

资源释放需要考虑引用关系。仍被场景、组件或其他资源引用的对象不应强制释放。

```ts
import { resources, SpriteFrame } from 'cc';

resources.release('images/sheep/spriteFrame', SpriteFrame);
```

对于直接持有的资源，可以减少引用计数：

```ts
spriteFrame.decRef();
```

只有明确通过 `addRef()` 增加过引用计数时，才应与之配对调用 `decRef()`。通常应优先让场景和 Asset Bundle 管理依赖资源的生命周期，不要在不清楚引用关系时调用底层释放接口。

# 4 使用 Tween 系统

Cocos Creator 3.8.8 使用 Tween 系统完成移动、旋转、缩放、透明度变化和动作编排。不再使用 2.x 的 `cc.moveTo()`、`cc.sequence()`、`node.runAction()` 动作系统。

## 4.1 基本使用

```ts
import { tween, Vec3 } from 'cc';

tween(this.node)
    .to(2, { position: new Vec3(100, 100, 0) })
    .start();
```

停止目标上的所有 Tween：

```ts
import { Tween } from 'cc';

Tween.stopAllByTarget(this.node);
```

也可以保存 Tween 实例后单独停止：

```ts
const moveTween = tween(this.node)
    .to(2, { position: new Vec3(100, 100, 0) })
    .start();

moveTween.stop();
```

## 4.2 顺序、并行和重复

### 顺序执行

链式调用默认按顺序执行：

```ts
tween(this.node)
    .by(0.5, { position: new Vec3(200, 0, 0) })
    .by(0.5, { position: new Vec3(-200, 0, 0) })
    .start();
```

### 并行执行

```ts
tween(this.node)
    .parallel(
        tween().by(0.5, { position: new Vec3(0, 50, 0) }),
        tween().to(0.5, { scale: new Vec3(0.8, 1.4, 1) }),
    )
    .start();
```

### 重复执行

```ts
const once = tween(this.node)
    .by(0.5, { position: new Vec3(200, 0, 0) })
    .by(0.5, { position: new Vec3(-200, 0, 0) });

tween(this.node)
    .repeat(5, once)
    .start();
```

无限重复：

```ts
const loop = tween(this.node)
    .by(0.5, { position: new Vec3(200, 0, 0) })
    .by(0.5, { position: new Vec3(-200, 0, 0) });

tween(this.node)
    .repeatForever(loop)
    .start();
```

## 4.3 延迟、缓动和回调

```ts
import { tween, Vec3 } from 'cc';

tween(this.node)
    .to(0.3, { scale: new Vec3(1.2, 0.8, 1) }, { easing: 'quadOut' })
    .delay(0.5)
    .to(0.3, { scale: Vec3.ONE }, { easing: 'quadIn' })
    .call(() => {
        console.log('Tween 播放完成');
    })
    .start();
```

## 4.4 UI 透明度

3.x 的 UI 透明度由 `UIOpacity` 组件控制，不再直接修改节点 opacity：

```ts
import { tween, UIOpacity } from 'cc';

const opacity = this.getComponent(UIOpacity) ?? this.addComponent(UIOpacity);

tween(opacity)
    .to(1, { opacity: 0 })
    .call(() => this.node.active = false)
    .start();
```

## 4.5 完整跳跃示例

```ts
import { _decorator, Component, tween, Vec3 } from 'cc';

const { ccclass } = _decorator;

@ccclass('JumpAnimation')
export class JumpAnimation extends Component {
    play() {
        const jumpOnce = tween(this.node)
            .parallel(
                tween().to(0.1, { scale: new Vec3(0.8, 1.2, 1) }),
                tween().by(0.1, { position: new Vec3(0, 10, 0) }),
            )
            .parallel(
                tween().to(0.2, { scale: Vec3.ONE }),
                tween().by(0.2, { position: new Vec3(0, -10, 0) }),
            )
            .delay(0.5);

        tween(this.node)
            .repeat(5, jumpOnce)
            .call(() => console.log('跳跃结束'))
            .start();
    }
}
```

# 5 3.8.8 常用迁移对照

| Creator 2.x | Creator 3.8.8 |
| --- | --- |
| `cc.Class({ extends: cc.Component })` | `@ccclass()` + `class extends Component` |
| `properties: { ... }` | `@property` 字段 |
| `cc.Node`、`cc.Sprite` | `import { Node, Sprite } from 'cc'` |
| `cc.find(path, root)` | `find(path, root)` 或 `node.getChildByPath()` |
| `cc.instantiate(prefab)` | `instantiate(prefab)` |
| `cc.isValid(obj)` | `isValid(obj)` 或 `obj.isValid` |
| `node.x / node.y` | `node.position`、`node.setPosition()` |
| `node.rotation` | `node.setRotationFromEuler()` |
| `node.setContentSize()` | `UITransform.setContentSize()` |
| `cc.loader.loadRes()` | `resources.load()` |
| `cc.loader.releaseRes()` | `resources.release()` |
| `cc.director` | `import { director } from 'cc'` |
| `node.runAction()` | `tween(target).to(...).start()` |
| `cc.sequence / cc.spawn` | Tween 链式调用 / `parallel()` |
| `cc.fadeOut()` | 对 `UIOpacity.opacity` 执行 Tween |

迁移旧项目时，不要只做名称替换。Creator 3.x 的模块导入、节点三维变换、UITransform、资源系统和 Tween 系统都与 2.x 有结构性差异，应按新 API 的数据模型重新整理代码。
