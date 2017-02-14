# v2ex

> clone v2ex

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

###核心技术框架
- vue
- vue-resource
- vue-router
- bootstrap
- v2ex api
- proxy 反向代理技术

###实现功能
- 基本克隆[www.v2ex.com](www.v2ex.com)的功能
- 自适应功能
- 利用反向代理跨域访问v2ex api

###随记
　　克隆[www.v2ex.com](www.v2ex.com)的页面样子并不困难，主要是在使用v2ex的api的时候遇到了不少问题，由于不同域的原因，就必须使用跨域解决，vue-resource提供了很好的跨域访问工具，在以前我用它来访问豆瓣的api的时候是没有问题的，但在这里就返回了`ok=false`d的结果，而在f12下的network的status是200，并有正确的返回结果，这就让我很郁闷了。
　　最后查了不少资料，最可恨的是对于v2ex api的介绍少之又少，不过天无绝人之路，况且以前克隆郭v2ex的大有人在，最终被我发现了一个大招，vue-cli提供的proxyTable的配置，即反向代理。
###反向代理
　　反向代理（Reverse Proxy）方式是指以代理服务器来接受Internet上的连接请求，然后将请求转发给内部网络上的服务器；并将从服务器上得到的结果返回给Internet上请求连接的客户端，此时代理服务器对外就表现为一个服务器。
　　在vue-cli中只需在config/index.js中配置
```
	proxyTable: {
      '/api': {
        target: 'https://www.v2ex.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
```
`changeOrigin`参数，接收一个布尔值，如果设置为`true`,那么本地会虚拟一个服务端接收你的请求并代你发送该请求，这样就不会有跨域问题了，不过只适用于开发环境。
　　然后在使用`this.$http.get('/api/xxxx/xxx')`即可获取数据。
###发布
　　由于我的服务器是使用apache2，我就按照apache2的配置教程来配置对于v2ex的api的反向代理，然而又发现了一个问题，由于v2ex的api是使用https来进行传输的，最后怎么配置也没法配对，都会显示500错误，这是待解决问题。
　　之后我选择了nginx作为网站服务器，发现nginx的配置真是简单多了，先安装
- `sudo apt-get install nginx`
-  修改`/etc/nginx/sites-enabled/default`,增加
```vim
location ^~ /static/ {
    gzip_static on;
    expires max;
    add_header Cache-Control public;
}

location / {
    try_files $uri $uri/ /index.html;
}

location /api { 
    proxy_pass https://www.v2ex.com;
    proxy_buffers 16 4k;
    proxy_buffer_size 2k;
}
```
　　github:[vue-clone-v2ex](https://github.com/1364137942/vue-clone-vex2)
　　demo:[v2ex.alispace0.com](v2ex.alispace0.com)
参考资料：
　　[v2ex-frontend](https://github.com/liuzhenangel/v2ex_frontend)
　　[v2ex-api](https://gist.github.com/fanzeyi/6951803)					

