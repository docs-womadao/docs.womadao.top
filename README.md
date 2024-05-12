**以下不是沃频服务器的readme**

# 网站

网站基于 **[Docusaurus 2](https://docusaurus.io/)** 搭建, Docusaurus, 一款时尚的静态网站生成器.

### 安装

```
$ yarn
```

### 本地开发

```
$ yarn start
```

此命令启动本地开发服务器并打开浏览器窗口。  
大多数更改都是实时反映的，而无需重新启动服务器。

### 编译

```
$ yarn build
```

此命令将静态内容生成到`build`目录中，并且可以使用任何静态内容托管服务提供服务。

### Github支持

使用 SSH:  

```
$ USE_SSH=true yarn deploy
```

如果没有 SSH:  

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

如果您使用GitHub页面进行托管，则此命令是构建网站并推送到`gh-pages`分支的便捷方法。
