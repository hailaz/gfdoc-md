---
title: '接口文档-自定义UI'
sidebar_position: 1
---

## 基本介绍

`GoFrame` 的 `Server` 默认自带的 `OpenAPI` 接口文档UI是 `redoc` 开源组件，该组件不支持页面 `Try It Out` 功能的。很多同学都在问，能否使用 `SwaggerUI` 页面来展示 `OpenAPI` 接口文档？有的企业内部并不支持连接外网的部分资源，那么能否将内部的接口文档UI替换为内部可访问的资源呢？

了解 `OpenAPI` 这个东东的小伙伴应该都知道， `OpenAPI` 只是通用的接口定义规范，而展示的接口文档UI是可以随便替换的，并且这种UI界面以及平台还特别多！使用 `GoFrame Server` 来切换接口文档UI页面，或者将接口文档对接到第三方接口文档平台 - **非常简单！**

## 使用示例

咱们通过代码来展示一下，如果快速地将接口文档UI切换为 `SwaggerUI`。 `SwaggerUI` 的相关链接：

- [https://github.com/swagger-api/swagger-ui](https://github.com/swagger-api/swagger-ui)
- [https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/installation.md](https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/installation.md)

为了演示简便，这里将所有的代码都写到一个代码文件中，没有使用配置或页面文件。代码如下：

```
package main

import (
	"context"
	"fmt"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

const (
	swaggerUIPageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="SwaggerUI"/>
  <title>SwaggerUI</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@latest/swagger-ui.css" />
</head>
<body>
<div id="swagger-ui"></div>
<script src="https://unpkg.com/swagger-ui-dist@latest/swagger-ui-bundle.js" crossorigin></script>
<script>
	window.onload = () => {
		window.ui = SwaggerUIBundle({
			url:    '/api.json',
			dom_id: '#swagger-ui',
		});
	};
</script>
</body>
</html>
`
)

type HelloReq struct {
	g.Meta `path:"/hello" method:"get"`
	Name   string `v:"required" dc:"Your name"`
}
type HelloRes struct {
	Reply string `dc:"Reply content"`
}

type Hello struct{}

func (Hello) Say(ctx context.Context, req *HelloReq) (res *HelloRes, err error) {
	g.Log().Debugf(ctx, `receive say: %+v`, req)
	res = &HelloRes{
		Reply: fmt.Sprintf(`Hi %s`, req.Name),
	}
	return
}

func main() {
	s := g.Server()
 	s.Use(ghttp.MiddlewareHandlerResponse)
	s.Group("/", func(group *ghttp.RouterGroup) {
		group.GET("/swagger", func(r *ghttp.Request) {
			r.Response.Write(swaggerUIPageContent)
		})
		group.Bind(
			new(Hello),
		)
	})
	s.SetOpenApiPath("/api.json")
	s.SetPort(8199)
	s.Run()
}
```

我们这里只定义了一个 `Hello` 的接口。可以看到，我们通过一个接口来展示 `SwaggerUI` 的 `HTML` 页面，并且将 `OpenAPI` 的接口文件路径定义为 `/api.json`，没有启用 `Server` 自带的UI页面。执行后，终端输出：

```
2022-05-18 20:41:09.160 [INFO] openapi specification is serving at address: http://127.0.0.1:8199/api.json
2022-05-18 20:41:09.161 [INFO] pid[57888]: http server started listening on [:8199]

  ADDRESS | METHOD |   ROUTE   |                             HANDLER                             |    MIDDLEWARE
----------|--------|-----------|-----------------------------------------------------------------|--------------------
  :8199   | ALL    | /*        | github.com/gogf/gf/v2/net/ghttp.internalMiddlewareServerTracing | GLOBAL MIDDLEWARE
----------|--------|-----------|-----------------------------------------------------------------|--------------------
  :8199   | ALL    | /api.json | github.com/gogf/gf/v2/net/ghttp.(*Server).openapiSpec           |
----------|--------|-----------|-----------------------------------------------------------------|--------------------
  :8199   | GET    | /hello    | main.(*Hello).Say                                               |
----------|--------|-----------|-----------------------------------------------------------------|--------------------
  :8199   | GET    | /swagger  | main.main.func1.1                                               |
----------|--------|-----------|-----------------------------------------------------------------|--------------------
```

戳此链接访问： [http://127.0.0.1:8199/swagger/](http://127.0.0.1:8199/swagger/)

页面展示如下：

![](/markdown/c4942cfdd7b4a35c570e4e741619d6c0.png)

开发者自定义其他的接口文档UI类似如此。

提示

需要注释掉config.yaml文件中的 swaggerPath: "/swagger" 这一行，否则界面不会改变