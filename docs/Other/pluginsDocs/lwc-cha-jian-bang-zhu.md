# lwc插件帮助
## 常用命令
(我们更推荐你使用缩写/别名,因为好记)
- **/lock** 直接上锁你交互的的方块
- **/unlock** 解锁你交互的方块
- **/lwc -c _(密码)_** 创建一个受密码保护的方块
- **/lwc mode persist** 打开持久模式(现在可以连续上锁啦,记得再打一次关上哦)
- **/lwc -info** 查看这个方块的保护信息  

## 保护创建

### /cpublic - 创建一个公共保护
别名：`/lwc -create public` 或 `/lwc -c public`

任何人都可以使用公共保护，但只有拥有者可以解锁它。

### /cprivate - 创建一个私人保护（/lock）
别名：`/lock`，`/lwc -create private` 或 `/lwc -c private`

私人保护是私密的：只有你能访问此保护，除非你在命令末尾添加其他用户或组来授予他们访问权限。  
你可以在一个命令中添加多个用户和/或组。  
当你在用户或组前添加一个 `@` 时，此用户/组将能够修改保护以添加或移除其他用户，但不能禁止拥有者修改保护。

#### 示例：
- `/lock` - 为你自己创建一个私人保护
- `/cprivate cxchency g:moderator` - 为你自己、cxchency 和moderator**组**创建一个私人保护
- `/lwc -c private @NayaCcR` - 为你自己和 NayaCcR 创建一个私人保护，NayaCcR 也可以修改此保护

### /cpassword - 用密码保护一个方块
别名：`/lwc -create password` 或 `/lwc -c password`

每次登录时，你都需要重新输入密码才能访问此保护。任何知道密码的人都可以访问此保护。

### /cdonation - 创建一个捐赠保护
别名：`/lwc -create donation` 或 `/lwc -c donation`

任何人都可以将物品放入保护中，但**不能**取回。~~就像你给慈善基金会捐款那样~~

### /cdisplay - 创建一个展示保护
别名：`/lwc -create display` 或 `/lwc -c display`

任何人都可以查看保护的内容，但不能修改它们。

### /cdefault - 为所有未来的保护指定一个默认玩家
你在此命令中指定的玩家将始终被自动添加到所有未来创建的保护中。  
为你的好朋友/好兄弟/xql添加一个默认的权限叭！

---

## 保护管理

### /cmodify - 修改现有保护
别名：`/lwc -modify` 或 `/lwc -m`

每次修改要么授予访问权限（默认），要么移除访问权限（使用 `-`），要么授予管理员访问权限（使用 `@`）。修改的目标可以是玩家、组（使用 `g:`），或区域（使用 `t:`）。多个修改可以通过用空格分隔的方式在一个命令中完成。

#### 示例：
- `/lwc -m NayaCcR @cxchency` - 添加 NayaCcR 到保护中，并将 cxchency 设置为保护管理员
- `/cmodify -cxchency -NayaCcR -MeGoesRawr` - 移除 cxchency、NayaCcR 和 MeGoesRawr 对此保护的访问权限
- `/cmodify -g:member` - 移除 "member" 组对保护的访问权限（已通过 Vault 测试）
- `/cmodify t:berlin` - 授予区域 "berlin" 所有成员对保护的访问权限（已通过 Towny 测试）

### /cremove - 移除方块的保护
别名：`/unlock`，`/lwc -remove` 或 `/lwc -r`

### /cunlock - 解锁一个密码保护的方块
别名：`/lwc -unlock` 或 `/lwc -u`

### /cinfo - 点击一个保护以查看其信息
别名：`/lwc -info` 或 `/lwc -i`

### /climits - 查看你拥有的保护数量，以及你允许创建的保护数量
别名：`/lwc -info limits` 或 `/lwc -i limits`

---

## 保护属性

### /credstone - 切换是否允许红石影响保护
别名：`/lwc flag redstone`

### /cmagnet - 将附近掉落的物品吸入受保护的容器（或其他有物品的容器）
别名：`/lwc flag magnet`

### /cautoclose - 自动关闭一个受保护的门（如果它被打开）
别名：`/lwc flag autoclose`

### /callowexplosions - 允许保护的方块被爆炸摧毁
别名：`/lwc flag allowexplosions`

### /chopper - 控制是否允许漏斗与受保护的方块交互
别名：`/lwc flag hopper`

**注意：** 此标志功能相当于同时添加 `hopperin` 和 `hopperout` 标志。

#### /lwc flag hopperin - 控制是否允许漏斗将物品放入受保护的方块
**注意：** 当使用替代的漏斗保护时，此标志不受支持。

#### /lwc flag hopperout - 控制是否允许漏斗从受保护的方块中取出物品
**注意：** 当使用替代的漏斗保护时，此标志不受支持。

### /cexempt (仅限管理员) - 保护不受 LWC 自动移除的影响
别名：`/lwc flag exemption`

更多信息请阅读 [保护tags](#保护tags)。

---

## 用户模式

### 持久模式
持久模式允许你在多个方块上执行最后一个操作，而无需重新输入命令。

#### /cpersist - 打开/关闭持久模式
别名：`/lwc mode persist`

### 掉落物转移模式
掉落物转移模式会让掉落的物品自动进入指定的箱子。

#### /cdroptransfer
别名：`/lwc mode droptransfer`

- `/cdroptransfer select` - 选择掉落物进入的箱子
- `/cdroptransfer <on/off>` - 启用/禁用掉落物转移
- `/cdroptransfer status` - 显示掉落物转移的状态

### 无锁模式
无锁模式将禁用自动保护创建。

#### /cnolock - 打开/关闭无锁模式
别名：`/lwc mode nolock`

### 无消息模式
无消息模式将禁用保护创建信息。

#### /cnospam - 打开/关闭无消息模式
别名：`/lwc mode nospam`

---

## 管理员访问

- `/lwc admin view` - 通过保护的 ID 查看保护的库存，就像你站在它旁边一样
- `/lwc admin find` - 查看玩家创建的所有保护
- `/lwc admin forceowner` - 更改保护的拥有者
- `/lwc admin forceownerall` - 更改玩家所有保护的拥有者
- `/lwc admin remove` - 使用 ID 移除保护
- `/lwc admin purge` - 移除玩家的所有保护
- `/lwc admin cleanup` - 尝试清理数据库
- `/lwc admin version` - 查看已加载的 LWC 版本和最新可用版本
- `/lwc admin update` - 更新到最新版本的 LWC
- `/lwc admin report` - 查看 LWC 性能报告
- `/lwc admin convert` - 将其他插件的数据库转换为 LWC
- `/lwc admin clear` - 移除所有保护或所有权限
- `/lwc admin reload` - 重新加载 LWC 配置

---

## 其他

- `/lwc history <玩家名>` - 搜索历史记录
- `/lwc details <历史 ID>` - 显示从 `/lwc history` 获得的“历史 ID”的详细信息

---

## 保护tags


LWC 提供了多种保护标志，可在非常特定的方式下增强保护。除非另有说明，否则默认情况下这些标志可以被任何人使用。

要为保护分配标志，可以使用 `/cFLAG on|off` 或 `/lwc flag FLAG on|off`。其中 `FLAG` 应替换为标志的名称（如果标志名称中有空格，则去掉空格）。

当提到权限时，这些权限默认会赋予玩家，除非另有说明。

无需修改任何配置即可使这些标志正常工作——它们开箱即用。

### 磁铁（Magnet）
**权限**：`lwc.flag.magnet`

箱子和其他带有库存的方块可以被磁化，以便它们能够吸引周围的物品。可以通过编辑文件 `plugins/LWC/magnet.yml` 来配置（甚至禁用）此标志。

这个标志在自动农场和“怪物陷阱”中最为有用，在这些地方你可以收集物品，而无需实际拾取它们或在整个过程中站在陷阱或农场旁边。

### 红石（Redstone）
**权限**：`lwc.flag.redstone`

红石标志可以根据服务器的配置禁用或启用红石在保护上的使用。

默认情况下，此标志将禁用保护上的红石。如果服务器被配置为全局禁用保护上的红石，则此标志会改为启用保护上的红石。

这个标志对于防止红石被用于你的门上最为有用。在 Minecraft 中查看谁触发了红石并不容易，所以它必须是启用或禁用。然而，如果你将压力板连接到你的门上，你可以安全地禁用红石，这样只有你才能使用压力板打开门。

### 自动关闭（Auto Close）
**权限**：`lwc.flag.autoclose`

默认情况下，当你点击铁门时，LWC 会将其打开。然而，LWC 还可以在配置的时间值后自动关闭门（默认情况下为 3 秒）。

这个标志适用于服务器管理员不希望全局更改门自动关闭的情况。这允许你通过为门标记此标志，使你的门自动关闭。

### 允许爆炸（Allow Explosions）
**权限**：`lwc.flag.allowexplosions`

主要是一个新奇的标志，它允许爆炸摧毁保护并移除它。实际上并不太有用，但它确实存在。

### 漏斗（Hopper）
**权限**：`lwc.flag.hopper`

此标志设置漏斗在插入/提取物品时的行为，特别是从受保护的库存方块（如箱子）中插入/提取物品。默认情况下，为防止破坏行为，漏斗**不能**与保护进行交互。默认设置可以从配置文件 `plugins/LWC/core.yml` 中进行配置。

### 免除（Exemption）
**权限**：`lwc.flag.exemption`

**注意**：此标志默认情况下仅可由 LWC 管理员使用。它**不会**被授予所有人。

此标志允许你将保护标记为免于大多数保护移除命令的影响，例如 `/lwc admin expire` 和 `/lwc admin purge`。

这对于喜欢使用 `/lwc admin expire` 的服务器来说特别有用——如果你有由 LWC 保护的重要标志，它们可能会因为从未被使用而被 expire 命令错误地移除。如果它们被赋予了免除标志，这些命令将不会移除它们。

---