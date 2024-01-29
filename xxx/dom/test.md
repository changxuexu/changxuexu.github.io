DOM优化
1.Dom与Javascript
  (a)浏览器会把dom与js独立实现；类似两个独立的小岛；
  (b)js操作dom；类似从一个岛到另一个岛;
  (c)dom的性能；类型岛于岛之间的桥，每次通过都要收取“过桥费”，因此只能尽量减少过桥的次数来减少支出费用。
  (d)innerHTML与dom方法对比

2.减少Dom操作
  节点克隆
    -cloneNode
  访问元素集合
    -尽量用局部变量
  元素节点
    -尽量用只获取元素的节点方法
  选择器 API
    -利用querySelector、querySelectorAl
  
3.Dom与浏览器
  重排:改变页面的内容

  重绘:浏览器显示内容

  添加顺序
    -尽量在appendchild前添加操作

  合并dom操作
    -利用cssText

  缓存布局信息

  文档碎片
    -createDocumentFragment()
  
4.Dom与事件
  事件委托
  
5.Dom与前端模版
  能更好的对逻辑和视图分离，MVC架构的基础