nginx
	https://blog.csdn.net/zhishiqi15836010823/article/details/100569635
	https://www.cnblogs.com/wcwnina/p/8728391.html#!comments
	https://blog.csdn.net/kk68171930/article/details/79001631?utm_medium=distribute.pc_relevant.none-task-blog-OPENSEARCH-2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-OPENSEARCH-2

	http://tengine.taobao.org/

	跨域：
		add_header 'Access-Control-Allow-Origin' '*';
		add_header 'Access-Control-Allow-Credentials' 'true';
		add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
		add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';

	反向代理：
		server {
			listen 80;
			location / {
				proxy_pass http://192.168.20.1:8080; # 应用服务器HTTP地址
			}
		}

	负载均衡：
		upstream myapp {
			server 192.168.20.1:8080; # 应用服务器1
			server 192.168.20.2:8080; # 应用服务器2
		}

		server {
			listen 80;
			location / {
				proxy_pass http://myapp;
			}
		}

	虚拟主机：将多个网站部署在同一台服务器上
		server {
			listen 80 default_server;
			server_name _;
			return 444; # 过滤其他域名的请求，返回444状态码
		}
		server {
			listen 80;
			server_name www.aaa.com; # www.aaa.com域名
			location / {
				proxy_pass http://localhost:8080; # 对应端口号8080
			}
		}
		server {
			listen 80;
			server_name www.bbb.com; # www.bbb.com域名
			location / {
				proxy_pass http://localhost:8081; # 对应端口号8081
			}
		}
	

Redis 官网：https://redis.io/
Redis 在线测试：http://try.redis.io/

Redis优势
	高性能的key-value数据库
		1.Redis支持数据的持久化，可以将内存中的数据保存在磁盘中，重启的时候可以再次加载进行使用
		2.Redis不仅仅支持简单的key-value类型的数据，同时还提供list，set，zset，hash等数据结构的存储。
		3.Redis支持数据的备份，即master-slave模式的数据备份。
		4.性能极高 – Redis能读的速度是110000次/s,写的速度是81000次/s 
		5.原子 – Redis的所有操作都是原子性的，意思就是要么成功执行要么失败完全不执行。单个操作是原子性的。多个操作也支持事务，即原子性，通过MULTI和EXEC指令包起来。
		6.丰富的特性 – Redis还支持 publish/subscribe, 通知, key 过期等等特性。
	
	window安装：
		https://github.com/microsoftarchive/redis/releases
		https://www.cnblogs.com/liuqingzheng/p/9831331.html