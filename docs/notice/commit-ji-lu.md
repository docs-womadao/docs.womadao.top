---
title: 文档修改记录
description: 文档修改记录归档
# hide_table_of_contents: true
---

# 文档修改记录归档

**仅仅记录 v1.0.0.1 及以后的版本**
仅记录修改者及更新时间，具体修改信息请移步**GitHub**
[docs-womadao/docs.womadao.top](https://github.com/docs-womadao/docs.womadao.top "请给我们一个免费的star吧qwq--柳柳")

## 版本号命名规范

- 版本号统一写在`/docs/notice/commit-ji-lu.md`文件内，别的地方就不要写了，影响观感
- 版本号格式为 v`w.x.y.z`
  - w: 文档模板版本号(一般由`音铃`)更改: 文档模板项目更改后+1
  - x: 文档主题版本号(一般由`音铃`)更改: 主页或者主题更换后+1
  - y: 文档增减版本号: 每增减一个 md 文档则+1
  - z: 文档修改版本号: 没有新增 md 文档但是修改了 md 文件则+1
  - w 变动后，x、y、z 归零。x 变动后，y、z 归零。y 变动后，z 归零
  - y,z 同时变动则采用 y 变动,x,y,x 同时变动则采用 x 变动,以此类推
- <span style={{ "color": "#ffae1a" }}>版本号新的写在最前面，旧的放后面</span>
- 版本号不是必须的，建议写上，方便以后查阅
- 版本号后可附加`by.{username}`与时间
- 如果上一个修改者没有更改版本号，你可以选择跳过，也可以选择从上面的版本号上新增
- 版本号格式为

  ```markdown
  ## 版本号 1.1

  ### 更新内容 [.by {username}]([]中内容可选)

  #### 更新(如果没有则省略)

  - 更新详细内容
    - 细节划分 1
    - 细节划分 2

  #### 修改

  - 修改详细内容
    **(空行)**

  ## 版本号 1.0

  ......
  ```

## v2.0.1.10
### 更新内容.by **橙息**
- 更新店员文档
  - 店员升级到4.0版本
  - 重构指令文档（自动化生成）

## v2.0.1.9
### 更新内容.by **橙息**
- 更新店员文档
  - 修改部分文档描述
  - 更新店员AI对图片的预处理的描述


## v2.0.1.8
### 更新内容.by **橙息**
- 更新店员文档
  - 新增“自动游戏队列”功能及其指令的介绍
  - 新增店员AI聊天锁机制的介绍
  - 新增店员AI聊天表情状态的介绍
  - 修复对大语言模型版本的描述 DeepSeek-V2 -> DeepSeek-V3
  - 对消息互通的补充：支持图片消息

---

## v2.0.1.7
### 更新内容.by **橙息**
- 店员补充新的指令和修改的指令

---

## v2.0.1.6

### 更新内容.by **柳柳**

- 增加 [cmi 插件指令](../Other/pluginsDocs/cmi-cha-jian-bang-zhu.md)
- 增加 [lwc 插件指令](../Other/pluginsDocs/lwc-cha-jian-bang-zhu.md)
- 修改 服务器常用指令列表/nick 颜色对照表
- 修改 页脚链接
- 修改 首页文字介绍以及文档 logo
- 修改 intro.md，抓虫子和增加服务器 ip

##### ~~夸奖： cx 真的很厉害~~

---

## v2.0.1.5

### 更新内容.by **橙息**

- 店员升级到 v3.0
- 删改大部分内容

---

## v2.0.1.4

### 更新内容.by **橙息**

- 优化店员指令“词云”的介绍

---

## v2.0.1.3

### 更新内容.by **橙息**

- 店员新增指令“词云”

---

## v2.0.1.2

### 文档模板更新.by **音铃**

#### 更新

- 更新了 katex 插件，现在可以使用 latex 公式了
- 加入思维导图绘制插件，可以使用 mermaid 绘制思维导图了

#### 修改

- 修改了下规范
- 修复了链接与锚点错误

---

## v2.0.1.1

### 店员文档更新.by **橙息**

#### 新增

- 新增了部分指令的介绍
- 补充了一些原有指令的介绍

#### 修改

- 改了一下指令表格的格式和顺序，新增了指令**别名**列

---

## v2.0.1.0

### 文档模板更新.by **音铃**

#### 新增

- 新增/blog 中的规范文件

#### 修改

- 修改了一些规范与归档日志

---

## v2.0.0.0

### 文档模板更新.by **音铃**

#### 更新

- 更新了文档的模板

#### 修复

- 修复了本地搜索搜索插件

---

## v1.0.2.1

### 更新内容.by **柳柳**

- 增加了 PCL2 启动器的整合包启动教程
- 修改了文档中网盘文件的下载地址
- 修改文档中的部分错误，更新过时内容
- 将店员的 MC 指令整合在一起
- 编辑了管理列表

---

## v1.0.1.9

### 更新内容.by **景冰**

- 在文档“java 版加入服务器”加入了 ipv6 连接方式与备用线路
- 在文档“欢迎来到沃玛频道服务器”加入了备用线路，把 ipv6 线路的端口号从链接中移到“端口”一栏中
- 修改店员文档中的病句
- ~~帮橙息写了公告区中的文档修改记录~~
- 将店员文档中的更新日志移动到页尾

## 修改时间：2024.8.1

---

## v1.0.1.8

### 更新内容.by **橙息**

- 在文档“欢迎来到沃玛频道服务器”加入了 ipv6 连接方式
- 新增店员文档

- 店员文档修改记录具体如下

  - 2024.07.10
    - 更新了\[扫雷](#扫雷小游戏)小游戏
    - 更新了\[游戏玩家队列系统](#游戏玩家队列系统)
    - 更新了\[防刷屏](#基本功能特性)
  - 2024.07.11

    - 更新了\[自动宵禁](#基本功能特性)

  - 2024.07.12

    - 更新了\[问卷审核系统](#七问卷审核系统)

  - 2024.07.15

    - 更新了\[生日提醒](#基本功能特性)

  - 2024.07.27
    - 更新了\[长期记忆](#长期记忆)

## 修改时间：2024.7.6 ~ 2024.7.27

---

## v1.0.1.7

### 更新内容.by **景冰**

- 修改了一个原指向**mcbbs**的链接
- 更新[皮肤站帮助文档](https://docs.in0.re/docs/First/Readme/pi-fu-zhan-wen-dang)中有关绑定账号相关内容
- 在页脚增加了 fanbook 频道，修改了 QQ 群的链接和说明文字
- ~~更新了文档修改记录归档~~

---

## v1.0.1.6

### 更新管理名单.by **柳柳**

- **liuchang20202**改名 →**宇宙编译器**
- 更新基岩版最高版本支持

---

**以下内容过旧，无参考意义**

## v1.0.0.1

### 更新内容.by **柳柳**

修改时间: 2023.7.27

## v1.0.0.2

### 更新内容.by **音铃**

- 上传了文档
- 给 ddz 修了路径错误
- 新增子服列表

修改时间: 2023.8.12

## v1.0.1.1

### 更新内容.by **DDZmumo**

- 更换了皮肤站帮助文档，PCL 启动器配置，基岩版帮助等板块的过时图片
- 修改了部分过时文本和错误文本
- 移除了 Him
- ~~写了三个不能 build 的东西~~

修改时间：2023.8.13

## v1.0.1.2

### 更新内容.by **水灵 Shuing**

- 8.13 更正了部分过时信息 [#commit f48de33](https://github.com/docs-womadao/docs.womadao.top/commit/f48de33bd05355bcc6dddab472556f6db86113ec)
- 8.14 增加了过往服务器存档下载 [#commit 45b4b59](https://github.com/docs-womadao/docs.womadao.top/commit/45b4b59078692bd3c6993cef840a68984adec91a)
- 8.14 完善了部分问答[#commit 055ab8f](https://github.com/docs-womadao/docs.womadao.top/commit/055ab8fed138f818ec303ded0ee25c18a3f3b40e)
- 8.14 修改页脚编辑链接[#commit 3bd406f](https://github.com/docs-womadao/docs.womadao.top/commit/3bd406fb3fed4eece243f2c2b5913ab0007bdfa7)
- 8.15 完善 changelog、存档文档和捉虫 [#commit 24aa3a1](https://github.com/docs-womadao/docs.womadao.top/commit/24aa3a17e15d0ec1c7e1624ba6adc8e128ad3458)[#commit 8468756](https://github.com/docs-womadao/docs.womadao.top/commit/84687563e7c90f72205b8e9b11b40bb03f0ac594)[#commit 6406ad6](https://github.com/docs-womadao/docs.womadao.top/commit/6406ad608fa3b073249768f11db13bef704c15ac)

修改时间：2023.8.13

## v1.0.1.3

### 更新内容.by **柳柳**

- 8.12 修正了文档里的链接和图片
- 8.13 更新了管理员名单
- 捉虫

修改时间：2023.8.14

## v1.0.1.4

### 更新内容.by **音铃**

- 修改了基岩版本进入服务器的版本说明

修改时间：2023.8.20

## v1.0.1.5

### 更新内容.by **柳柳**

- 捉虫，两只~~都是 ddz 犯得错~🎵~~

修改时间：2023.8.25
