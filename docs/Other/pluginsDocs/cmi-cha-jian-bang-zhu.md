# cmi 插件指令

## INFO

这是一个功能多合一的插件，可代替一些功能分散的老旧插件并用于服务器管理，它完全可以替代

Essentials/EssentialsX 并且可以通过简单的指令操作把旧玩家数据从 ess 导入进本插件

它提供了很多超乎你想象的全新特性和实用的功能来让你创建拥有全新游戏风格的服务器

完全涵盖老插件的基础功能，比如/heal 治疗，同时给老功能添加了一些新的拓展。

比如游戏内编辑 kit 礼包，在所有容器中查找指定物品，传送门系统，动态牌

等等！为什么这插件要卖 15 欧？说实话我觉得它值 150 欧，只是对你们来说太贵了=\_=
##### 转载自(https://www.17wmc.cn/937.html)

## TRANSLATOR

嘤鹉 @z1224748848 字数: 20029 字 \[贼长的感言]\
@longlongz 字数: 7461 字\
特别鸣谢: @秋风残叶 #CMI 插件搬运者

## Wiki

### 权限 | Permission

在大多数情况下把鼠标放在错误提示信息上会显示缺失的权限节点. 如果想要这样的效果, 你需要拥有 **cmi.permisiononerror**权限.

所有命令都拥有对应的权限节点, 如果下方的列表没有你想要的权限,   
你可以根据 **cmi.command.&lt;命令&gt;** 这个格式来匹配 **/cmi &lt;命令&gt;.**

**使用特定指令的权限节点基本规律**是 **cmi.command.\[命令名字]**(例子: cmi.command.heal) 并且有一些指令如果作用对象不是你自己的话, 需要额外的权限节点来使用: **cmi.command.\[命令名字].others**(例子:\cmi.command.heal.others)

**可以通过 /cmi checkperm (关键词) 命令来在游戏内查看权限节点, 并且永远都是最新的插件权限列表.**

**C**– 命令

- cmi.command – 允许使用基础命令

**A**

- cmi.command.afk.auto – 自动使玩家进入 AFK 模式
- cmi.command.afk.kickbypass – 当 AFK 模式触发事件时阻止玩家被踢出服务器
- cmi.command.afk.staffinform – 使用不同的 AFK 模式自动回复消息
- cmi.command.alert.inform – 玩家将会在某玩家伴随警告加入服务器的时候收到通知
- cmi.command.armorstand.\[updateitems plate size visible arms gravity glow invulnerable name interactable head body leftarm rightarm leftleg rightleg pos] – 允许使用特定盔甲架编辑器的功能
- cmi.command.armorstand.movebypass – 允许在不可以建造的地方移动盔甲架. 有时候有助于绕过反\
  作弊插件的限制
- cmi.command.attachcommand.cc – 允许将控制台命令绑定到物品上
- cmi.command.attachcommand.silent – 允许在绑定命令的时候使用 !silent! 变量

**B**

- cmi.command.back.ondeath – 允许在死亡后使用 Back 命令返回死亡地点
- cmi.command.ban.bypass – 阻止玩家被 Ban
- cmi.command.bossbarmsg.admin – 允许在 BossBar 自动消息中使用命令
- cmi.command.broadcast.colors – 允许在公告信息中使用颜色代码

**C**

- cmi.command.charges.edit – 允许编辑玩家的重生能量(! 不确定翻译)
- cmi.command.checkaccount.showip – 允许在检查账户时查看对应的 IP 地址
- cmi.command.clearchat.bypass – 绕过聊天清屏(拥有权限的玩家的消息将不会被清空)
- cmi.command.commandspy.bypass – 允许绕过命令间谍的命令黑名单
- cmi.command.commandspy.hide – 隐藏来自命令间谍的已执行命令
- cmi.command.\[命令名字].cooldownbypass – 允许绕过命令冷却时间
- cmi.command.\[命令名字].others – 允许对其他玩家执行命令
- cmi.command.\[命令名字].others.\[extra] – 允许对其他玩家执行命令
- cmi.command.\[命令名字].warmupbypass – 允许绕过特定的 CMI 命令预热
- cmi.command.counter.autojoin – 玩家将在进入服务器后自动加入计数器
- cmi.command.counter.center – 允许设置计数器的中心
- cmi.command.counter.force – 允许强制范围内所有玩家显示计数消息
- cmi.command.counter.time – 允许设置计数器的时间范围
- cmi.command.counter.range – 允许设置计数器的半径
- cmi.command.counter.msg – 允许设置计数器的提示信息
- cmi.command.ctext.\[自定义消息名字] – 允许看见 Custom Text 文件夹内的自定义提示消息
- cmi.command.cuff.bypass – 允许受限制时使用命令

**E**

- cmi.command.enchant.bypasslimit – 允许绕过附魔限制
- cmi.command.enchant.bypassinvalid – 允许给物品附魔上默认不适用于此物品的附魔
- cmi.command.ender.preventmodify – 阻止其他人修改末影箱
- cmi.command.ender.preventmodify.bypass – 绕过上一个权限节点
- cmi.command.editwarnings – 允许管理玩家的警告记录

**F**

- cmi.command.fixchunk.speed – 允许调整损坏区块修复速度
- cmi.command.flightcharge.admin – 允许编辑玩家的飞行能量
- cmi.command.fly.safelogin – 登录时若玩家在空中, 让玩家安全着陆
- cmi.command.flyspeed.\[1\~10] – 决定玩家可以设置的最大飞行速度

**G**

- cmi.command.give.max.\[数值] – 限制玩家可以使用 Give 命令生成物品的数量
- cmi.command.glow\.color.\[颜色代码] – 允许改变发光效果的颜色
- cmi.command.gm.\[游戏模式] – 允许改变游戏模式为特定模式

**H**

- cmi.command.head.othersource – 允许获取其他玩家的头颅
- cmi.command.home.bypassprivate – 允许传送到其他玩家的私人 Home 位置

**I**

- cmi.command.ignore.bypass – 允许对屏蔽你的人使用命令
- cmi.command.info.deathlocation – 允许在信息页面中查看死亡位置
- cmi.command.info.ip – 允许在信息页面中查看玩家 IP 地址
- cmi.command.invcheck.edit – 允许编辑已保存的背包
- cmi.command.inv.preventmodify – 阻止其他人修改背包
- cmi.command.inv.preventmodify.bypass – 绕过上一个权限节点

**J**

- cmi.command.jail.bypass – 阻止玩家被关进监狱
- cmi.command.jail.bypasscmd – 允许在被监禁时使用命令
- cmi.command.jail.maxtime.\[秒数] – 决定玩家可以监禁其他人的最大时长
- cmi.command.jump.\[距离] – 决定最大跳跃距离

**K**

- cmi.command.kick.bypass – 阻止玩家被踢出服务器

**L**

- cmi.command.lfix.admin – 允许修复视野外区域的光照
- cmi.command.list.admin – 将玩家放入列表中的管理员组
- cmi.command.list.group.\[组序号] – 将玩家分配到指定的组
- cmi.command.list.hidden – 允许在玩家列表中查看隐藏的玩家
- cmi.command.list.staff – 将玩家放入列表中的 Staff 组

**M**

- cmi.command.maintenance.bypass – 允许绕过”正在制作”模式
- cmi.command.money.admin – 允许修改玩家的资金
- cmi.command.money.betweenworldgroups – 允许跨世界资金转账
- cmi.command.more.oversize – 允许物品堆叠超过默认最大数
- cmi.command.msg.clean – 允许通过在消息前带上 ! 来发送不带名字的消息(公告?)
- cmi.command.msg.noreply – 允许使用 /cmi msg \[玩家名字] !-内容!
- cmi.command.msg.vanish – 允许向隐身玩家发送私人消息
- cmi.command.msg.togglebypass – 允许向关闭私人消息接收的玩家发送私人消息
- cmi.command.mute.bypass – 绕过个人禁言
- cmi.command.mutechat.bypass – 绕过拒收公共聊天消息

**N**

- cmi.command.near.max.\[方块数]- 决定 Near 命令的最大距离
- cmi.command.nick.bypassblacklist – 允许绕过昵称黑名单
- cmi.command.nick.bypass.length – 允许绕过昵称长度限制
- cmi.command.nick.bypassinuse – 允许使用已被使用的昵称
- cmi.command.nick.different – 允许将昵称设置为与原始名称不同的昵称
- cmi.command.note.remove – 允许清除或删除便签
- cmi.command.note.add – 允许添加便签

**P**

- cmi.command.patrol.bypass – 拥有权限节点的玩家不会被列入巡逻名单
- cmi.command.point.\[特定种类] – 允许修改特定种类

**R**

- cmi.command.repair.\[hand/armor/all] – 允许修复特定区域的装备
- cmi.command.repair.repairshare.bypass – 允许在共享修复应用到物品前绕过它
- cmi.command.replaceblock.speed – 允许调整方块替换速度
- cmi.command.ride.\[实体种类] – 允许骑乘特定实体
- cmi.command.removewarp.bypass – 允许删除属于其他玩家的地标

**S**

- cmi.command.scan.speed – 允许修改物品扫描速度
- cmi.command.sell.\[blocks/all/gui] – 允许通过其他方式来出售物品
- cmi.command.sendall.bypass – 阻止玩家被传送到指定服务器
- cmi.command.sethome.bypass – 允许玩家在没有建造权限的地方设置 Home 位置
- cmi.command.sethome.unlimited – 允许设置无限个 Home
- cmi.command.sethome.\[任意正数] – 允许设置指定数量个 Home
- cmi.command.sethome.\[组名] – 允许根据组配置设置指定数量个 Home
- cmi.command.sethome.overwrite – 允许覆写已有 Home
- cmi.command.signspy.hide – 将不会被牌子间谍记录
- cmi.command.silent – 允许在命令里面使用 -s 变量以避免向目标玩家发送反馈消息
- cmi.command.sit.stairs – 允许自动坐在椅子上
- cmi.command.silence.bypass – 绕过消息屏蔽
- cmi.command.spawner.\[实体种类] – 允许通过命令来更改刷怪笼为指定类型
- cmi.command.spawner.shiftclick – 允许潜行点击刷怪笼来打开设置界面
- cmi.command.sudo.bypass – 阻止其他玩家对拥有此权限的玩家使用 Sudo
- cmi.command.setwarp.unlimited – 允许设置无限个地标
- cmi.command.setwarp.\[数量] – 允许设置指定数量个地标

**T**

- cmi.command.tempban.bypass – 阻止玩家被临时封禁
- cmi.command.tempban.max.unlimited – 允许临时封禁超过配置的数量
- cmi.command.tempban.max.\[任意正数] – 允许临时封禁的最大时长
- cmi.command.tfly.give – 允许给其它玩家临时飞行
- cmi.command.tfly.maxtime.\[数量] – 设置玩家可以给其他玩家临时飞行的最大时长. 如果玩家超过了这个限制, tfly 将不会被改动.
- cmi.command.tgod.give – 允许给其它玩家临时上帝模式
- cmi.command.time.edit – 允许设置时间
- cmi.command.toggleshiftedit – 允许使用 /cmi toggleshiftedit
- cmi.command.tpa.warmupbypass – 允许绕过 Tpa 命令预热
- cmi.command.tpahere.warmupbypass – 允许绕过 Tpahere 命令预热
- cmi.command.tptoggle.bypass – 允许传送到禁用远程传送的玩家身边

**W**

- cmi.command.walkspeed.\[0-10] – 决定玩家可以设置的最大移动速度
- cmi.command.warn.bypass – 允许绕过警告
- cmi.command.warnings – 列出玩家收到的警告列表及其过期时间
- cmi.command.warp.\[地标名字] – 当一个地标需要权限节点的时候, 添加此权限允许使用指定的地标
- cmi.command.warp.redefine – 要求覆写现有的地标点. 如果你想让普通玩家创建地标点, 则此权限节点非常有用
- cmi.command.world.\[世界名字] – 通过当前的位置传送到指定的世界

---

**A**

- cmi.actionbar.colors – 允许在 actionbarmsg 命令中使用颜色代码
- cmi.anvil.colors – 允许在重命名物品的时候使用颜色代码
- cmi.anvil.itemrename.bypass – 允许绕过重命名黑名单
- cmi.anvil.nolimits – 允许无等级限制修复物品
- cmi.armorstand.arms – 允许生成带手臂的盔甲架
- cmi.armorstand.offhand – 允许完全操作盔甲架的副手物品
- cmi.autorespawn – 允许自动重生

**B**

- cmi.bedhome – 允许点击床来设置 Home 位置
- cmi.book.colors – 允许在编辑书时使用颜色代码
- cmi.bossbar.colors – 允许在 bossbarmsg 命令中使用颜色代码
- cmi.bossbar.hpbar – 允许显示生命值 Boss Bar, 默认自动启用. 如果你想隐藏的话就给予负权限
- cmi.bungee.publicmessages.\[服务器名字] – 允许跨服发送大喇叭消息
- cmi.buttonteleport – 允许在点击背包编辑界面的位置按钮的时候传送到目标位置

**C**

- cmi.chat.bypassrange – 允许无视常规聊天范围
- cmi.chatfilter.bypass.\[组名] – 允许绕过特定的聊天过滤器配置组
- cmi.chatfilter.inform – 当玩家违反聊天过滤规则时通知玩家
- cmi.chatfilter.spambypass – 允许绕过聊天刷屏过滤器
- cmi.chatgroup.\[组名] – 由自定义聊天组决定玩家的公共消息格式
- cmi.chorusteleport – 允许使用 chorus 来传送到周围(随机传送?)
- cmi.colors.\[种类].\* – 允许在特定消息范围内使用所有颜色代码
- cmi.colors.\[种类].\[颜色] – 允许在特定消息范围内使用指定颜色代码. 消息范围种类: publicmessage,privatemessage, nickname, signs, me
- cmi.commandfilter.bypass – 允许绕过刷命令过滤器
- cmi.customalias.\[指令简写] – 限定自定义指令简写的使用(拥有权限才可使用)

**D**

- cmi.damagecontrol.\[组名] – 按组配置来决定伤害倍数
- cmi.deathlocation – 允许在死后看见死亡位置
- cmi.dropspawner – 允许在挖掉刷怪笼后掉落它
- cmi.dropspawner.\[实体种类] – 允许在挖掉特定种类的刷怪笼后掉落它
- cmi.dropspawner.nosilk – 不需要精准采集就可以掉落刷怪笼
- cmi.dynmap.hidden – 在网页地图中隐藏玩家

**E**

- cmi.egginteract.\[实体种类] – 允许通过手持刷怪蛋点击刷怪笼来改变刷怪种类
- cmi.elevator.use – 允许使用基于牌子的电梯
- cmi.elevator.create – 允许创建电梯
- cmi.elytra – 允许装备鞘翅
- cmi.elytra.boost – 允许使用基础鞘翅加速器. (右键)
- cmi.elytralaunch – 允许使用鞘翅的发射功能
- cmi.elytra.freeflight – 允许免费使用鞘翅加速器
- cmi.elytra.speedometer – 允许在鞘翅飞行时看到速度仪表盘
- cmi.elytra.superboost – 允许使用超级鞘翅加速器. (潜行点击)
- cmi.enderedit – 允许编辑他人的末影箱

**F**

- cmi.fullserver.bypass – 允许加入一个满人的服务器

**I**

- cmi.informDurability – 当耐久度接近 0 时通知玩家
- cmi.interactivesign.\[交互指令名称] – 允许当使用 \[ic:\[交互指令名称]] 为牌子的第一行时创建可交互的牌子
- cmi.invedit – 允许编辑玩家的背包
- cmi.inventoryhat – 允许将背包中的方块戴在头上

K

- cmi.keepinventory – 允许死亡后保留背包
- cmi.keepexp – 允许死亡后保留经验值
- cmi.kit.\[礼包名] – 允许使用礼包
- cmi.kit.\[礼包名].preview – 允许预览礼包
- cmi.kit.bypass.money – 无视礼包的金钱购买价格
- cmi.kit.bypass.exp – 无视礼包的经验值购买价格
- cmi.kit.bypass.time – 无视礼包的使用次数限制
- cmi.kit.bypass.onetimeuse – 无视礼包的一次性限制

M

- cmi.messages.disablelogin – 禁用登录信息
- cmi.messages.disablequit – 禁用退出登录信息
- cmi.minecart.change.\[矿车类型] – 允许在使用有效物品交互矿车时更改为其不同类型.

N

- cmi.namehistory – 允许查看玩家的曾用名
- cmi.netherportalbypass – 当配置文件禁用时也可创建地狱传送门

**O**

- cmi.openshulker – 允许将潜影盒作为背包使用
- cmi.openshulker.shift – 允许潜行右击潜影盒时将其作为背包使用

**P**

- cmi.permisiononerror – 允许在错误信息中查看缺失的权限节点. 注意拼写.
- cmi.placespawner – 允许放置刷怪笼并且保持正确的刷怪类型
- cmi.placespawner.\[实体种类] – 允许放置特定种类的刷怪笼并且保持正确的刷怪类型
- cmi.prewards.notification – 为没获取到的奖励显示游戏时间奖励提醒

**R**

- cmi.rank.\[Rank 级别] – 决定玩家的默认 Rank
- cmi.respawngroup.\[重生组配置] – 决定玩家的个人重生点

**S**

- cmi.safeteleport – 阻止传送至不安全的位置
- cmi.safeteleport.bypass.\[lava/void/suffocation/unknown/plugin] – 允许不二次确认来传送到不安全的位置
- cmi.scheduler.exclude – 不把玩家列入定时任务的随机玩家列表
- cmi.saveinv – 在玩家死亡时保存背包以备日后需要回档
- cmi.seevanished – 允许看到隐身的人
- cmi.select – 允许使用圈地工具来选定范围
- cmi.scrollpainting – 允许修改画
- cmi.signs.shiftedit – 允许潜行右击牌子来编辑它
- cmi.signs.shifteditbypass – 允许编辑受保护区域内的牌子
- cmi.silentchest.editing – 允许在静默开箱模式下编辑箱子
- cmi.spawners.charge.bypass – 允许无视能量限制
- cmi.spawners.charge.\[组名] – 决定所使用的能量组配置
- cmi.spawners.proximity.bypass – 无视刷怪笼的放置范围限制
- cmi.spawngroup.\[出生组配置] – 决定玩家的个人出生点

**T**

- cmi.tablist.\[组序号] – 决定玩家的自定义 Tab 列表组
- cmi.tag.color – 艾特的人的名字会变成彩色
- cmi.teleport.bypassblacklist – 允许无视黑名单物品传送保护
- cmi.teleport.currentlocation – 允许传送到最新位置而不是 Tpa 被接受的位置.
- cmi.teleport.with.\[实体种类] – 允许与特定的坐骑一起传送
- cmi.title.colors – 允许在 titlemsg 命令中使用颜色代码

**V**

- cmi.versioncheck – 允许在登录时看到新版本信息
- cmi.viewrange – 允许自定义视距范围
- cmi.viewrange.\[1-15] – 决定视距范围

**W**

- cmi.worldlimit.fly.aboveroof – 防止飞过世界建造高度. 这个特性应该在配置文件内启用
- cmi.worldlimit.fly.bypass – 允许无视世界的飞行模式限制
- cmi.worldlimit.gamemode.bypass – 允许无视世界的游戏模式限制
- cmi.worldlimit.god.bypass – 允许无视世界的上帝模式限制

---

## **特殊命令格式 | Specialized Commands**

**与这些功能共同使用: Ranks, 计划任务, 传送门, EventCommands, 可交互命令 和 礼包.**

- 仅使用一个动作变量, 否则, 只会使用最后一个动作变量.
- 如果命令包含 **\[playerName]**,如果可行的话将会作为目标玩家的名字. 这对**定时任务**不起作用, 因为不知道在这种情况下应该指向哪个玩家.
- 如果命令以 **msg!**开头并且指定了玩家名字, 如果玩家在线将会发送一条信息. 例子: **msg! Zrips 你\*\***好啊!\*\*
- 如果命令以 **broadcast!**开头, 信息将以简单的格式被发送至服务器的所有在线玩家, 没有任何前缀. 如果命令以 actionbar! 开头, 所有玩家将收到一条 ActionBar 消息
- 如果命令以 **title!**开头, 所有玩家将收到一条 Title 消息
- 如果命令以 **subtitle!**开头, 所有玩家将收到一条 SubTitle 消息
- 如果命令以 **kickall!**开头, 所有玩家将被以指定消息踢出服务器. 在服务器关闭时特别好用.
- 如果命令以 **asPlayer!**开头, 命令将以发送初始化命令玩家的身份执行.
- 如果命令以 **asConsole!**开头, 命令将以控制台的身份执行. 这个可以在类似**自定义命令简写**这种如果不特殊指定, 默认以玩家身份执行的地方用.
- 如果命令以 **cooldown:\[秒数]!**开头, 那一行(如果指定)或下方的所有行将在重复使用之前有冷却时间. 例子: **cooldown:5! cmi heal \[playerName]**将会治疗玩家, 但是不会在 5 秒之内再治疗玩家.
- 如果命令以 **perm:\[权限节点]!**开头, 如果玩家有权限节点, 才会执行命令. 当未指定目标玩家时, 这将不起作用. 例子: **perm:cmi.announce.vip! broadcast! 你好鸭, VIP 们**
- 如果命令以 **moneycost:\[数值]!**开头, 当玩家有足够的钱时, 才会执行命令.
- 如果命令以 **hasmoney:\[数值]!**开头, 如果玩家有足够的钱, 则会继续执行下方代码, 若没有则在这停止.
- 如果命令以 **expcost:\[数值]!**开头, 当玩家有足够的经验值时, 才会执行命令.
- 如果命令以 **hasexp:\[数值]!**开头, 如果玩家有足够的经验值, 则会继续执行下方代码, 若没有则在这停止.
- 如果命令以**item:\[(物品:附加值)(-数量)]!**开头, 当玩家有指定的物品时, 才会执行命令. 例子: **item:stone:1-12!**将需要 12 个花岗岩来执行命令.
- 如果命令以 **hasitem:\[(物品:附加值)(-数量)]!**开头, 当玩家有指定的物品时, 才会执行命令. 这不会在执行命令的时候消耗物品.
- 如果命令以 **ifonline:\[玩家名]!**开头, 当指定玩家在线时才会执行命令. 固定名称或者变量名称(**\[玩家名]**)都可以用, 取决于你想要什么样的效果.
- 如果命令以**ifoffline:\[玩家名]!**开头, 当指定玩家离线时才会执行命令. 固定名称或者变量名称(**\[玩家\*\***名]\*\*)都可以用, 取决于你想要什么样的效果.
- 如果命令以 **votes:\[数量]!**开头, 命令将在有足够的票数时执行.(Votifier)
- 在命令中间插入 **delay! 5**在触发 5 秒后执行命令. 这可以让你在服务器关闭前创建一个示例计数器.
  ```
  - cmi launch [playerName]
  - delay! 2
  - cmi launch [playerName]
  ```
- **\[randomPlayer]**占位符可以用来随机获取一个没有 **cmi.scheduler.exclude**权限的在线玩家. 这可以用来在特定时间随机抽一个玩家送奖励. 举个例子: **cmi give \[randomPlayer] diamond \*\***%rand/1-5%\*\* 将会随机给在线玩家送 1\~5 个钻石
- 如果命令以 **allPlayers!**开头, 将对所有在线玩家执行命令. 在需要填入玩家名的地方写 **\[allPlayers]**. 举个例子: **allPlayers! cmi heal \[allPlayers]**治疗所有在线的玩家.
- 支持 PlaceHolderAPI 变量.

### 附加内容 | EXTRA

- **perm:\[权限节点]!, moneycost:\[数值]!, hasmoney:\[数值]!, hasexp:\[数值]! 和 expcost:\[数值]!**都是条件判断. 这代表如果玩家没有权限节点或者足够的钱/经验值, 下方的代码将不会执行. 举个例子:**perm:cmi.testperm! cmi heal \[playerName]**

- 如果你想通知玩家他没有该命令所需的权限节点或足够的钱/经验值, 那么在条件判断变量上加 **?**. 例子: **perm:cmi.testperm?! cmi heal \[playerName]**这样的话如果玩家没有 **cmi.testperm**权限, 他们会得到关于此权限的通知消息, 并且不会执行该命令.

- 如果玩家不符合要求的话你想要取消所有命令, 那么在条件判断变量上加 **#.**例子:

  ```
  - moneycost:150#! cmi heal [playerName]
  - cmi feed [playerName]
  ```

  这样写的话, 如果玩家的账户里面没有 150 元, 他既不会被 Heal 也不会被 Feed.

- 同时写上两个额外条件可用于通知玩家并在需要时取消执行其他命令.

---

## BossBar 命令用法 | BossBar Usage

CMI 提供了一个为一个或所有在线玩家发送完全可自定义 BossBar 信息, 颜色, 以及其他内容的方法. 命令可以通过指定名字来发送给一个特定玩家, 或者将 **all**作为名字来发送给所有玩家.

**用法和变量示例:**

```
cmi bossbarmsg Zrips &2嘿!
cmi bossbarmsg all &2嘿!
```

向 Zrips 发送内容为”嘿”的 BossBar 消息, 并在 3 秒后消失.

```
cmi bossbarmsg Zrips &2嘿! -t:5
```

向 Zrips 发送内容为”嘿”的 BossBar 消息, 并在 5 秒后消失

```
cmi bossbarmsg Zrips &2嘿! -c:red
```

向 Zrips 发送内容为红色(默认为绿色)的”嘿”的 BossBar 消息, 并在 5 秒后消失.

```
cmi bossbarmsg Zrips &2嘿! -s:1
```

设置 BossBar 样式. 可用选项有: **1, 6, 10, 12, 20**. 这会将 BossBar 分成特定数量的多个部分. 所以如果填 1 你将会看到一条连续的 Boss 血条, 如果填 20 你将会看到被分成 20 个部分的 Boss 血条.

```
cmi bossbarmsg Zrips &2嘿! -n:bossBarName
```

决定 BossBar 的名字, 它可以被设置为你想要的任何内容并且将用于识别相同的老 BossBar. 如果需要将会更新其为最新内容. 所以先运行 **cmi bossbarmsg Zrips &2 嘿! -n:myBar**然后再运行 **cmi bossbarmsg Zrips &2 怎么了? -n:myBar**, 名字相同的 BossBar 将会直接更新为新内容, 而不是重新创建一个新的. 如果不设定名字, 那么每次执行命令的时候都会创建一个新的 BossBar.

```
cmi bossbarmsg Zrips &2嘿! -p:100/23
```

决定 BossBar 显示的进度条. 这个示例 BossBar 将会被填充 23%. 可以用一些 PlaceHolderAPI 变量, 比如 **-p:%server_max_players%/%server_online%**

可以像这样来设置成进度条自增自减的间隔: **cmi bossbarmsg Zrips &2 嘿! -p:+1**, 这表示进度条将逐渐提高百分比. 如果未设置初始值, 它将会以 0 开始. 如果写成这样: **cmi bossbarmsg Zrips &2 嘿! -p:-1**, 然后 BossBar 将会以 100 开始并且会逐渐减少百分比.

如果进度条自减/自增到了百分之 0 或 100(取决于进度条的类型), 那么 BossBar 将会在-t 计时器结束后消失. 这功能可以用于任何类型的计数器.

```
cmi bossbarmsg Zrips &2嘿! -cmd:"msg [playerName] hey;;cmi heal [playerName]"
```

决定进度条自增/自减到 0 或 100 后执行的命令. 可以通过 ;; 来分隔多个命令并且它允许使用特殊命令格式. 你可以在这里[(英文版)](https://www.17wmc.cn/?golink=aHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMTkwNzI2MDg1MTM2L2h0dHA6Ly93d3cubWNiYnMubmV0L3BsdWdpbi5waHA/aWQ9bGlua19yZWRpcmVjdCZhbXA7dGFyZ2V0PWh0dHBzJTNBJTJGJTJGd3d3LnNwaWdvdG1jLm9yZyUyRndpa2klMkZjbWktc3BlY2lhbGl6ZWQtY29tbWFuZHMlMkY=)查阅更多信息. 玩家需要拥有 **cmi.command.bossbarmsg.admin**权限节点来在 BossBar 信息中附带命令

```
cmi bossbarmsg Zrips &2嘿! -a:20
```

设置 BossBar 的自动更新间隔. 可用于每隔 x 游戏刻自动更新 BossBar 信息. 要记得 20 游戏刻才是 1 秒.

```
cmi bossbarmsg Zrips -cancel:testbar
```

所有变量都是可选选项, 除了消息文本本身. 可以组合使用任何变量来获得最佳的期望效果.

```
cmi bossbarmsg all -a:1 医疗援助将在[autoTimeLeft]后到达! -t:2 -p:1 -cmd:"msg [playerName] &2医生治疗了你!;;cmi heal [playerName] -s" -n:test -c:red
```

上面所示代码将会使 BossBar 每 Tick 自动+1(每秒 20 次), 从 0 到 100. 并且同时显示内容为:”**医疗援助将在 5sec 后到达!**“(计时器将自动更新)的 Title 信息. 在其达到 100 后所有在线玩家将会收到消息:”**医生治疗了你!**“并且被治疗, 而 BossBar 将在两秒后消失.

---

## 飞行能量 | Flight Charge

这个功能其实是另一种可选的限制飞行模式.是的, 我们已经有了 tfly(临时飞行)模式, 但是那个功能只是简单的基于时间计算.

这个功能(指飞行能量)使用起来更强大, 也更有趣

- 这个功能 **默认禁用**因为我们必须额外检查玩家的移动方式, 所以如果你对这个功能并不感兴趣, 最好还是避免做那些对你来说没用的检查.

- 玩家可以使用钱或者经验值来 **购买飞行能量**(未来更新中可能可以用物品购买).

- 默认情况下玩家可以购买 1000 点能量. 可以使玩家飞行 1000 个方块.

- 如果玩家一直悬浮在一个地方, 那么也会每秒扣 1 点能量来防止这种行为的出现.

- 为了防止从很高的地方摔下来却无伤害, 就像原版飞行模式会防止你受到任何摔落伤害, 玩家可能遭受两个或两个处理方式中的一个:

  - 玩家将会损失**摔落高度 x2**的飞行能量. 例如, 如果从 7 格高的地方跌落, 那么将会扣除**(7-3)\*2=8**点飞行能量, 因为你只有在从高于 3 格的地方摔落时才会受到摔落伤害. 可以自行配置.
  - 第二种处理方式是玩家将受到他实际应该受到的伤害. 模拟相同数值的伤害, 就好像你没有飞行模式一样. 默认情况下, 这仅在从悬崖信仰之跃时生效, 并不会在飞行中突然关掉飞行模式而生效. 可以自行配置.
  - 默认情况下, 即使你从 200 高度跳下来, 你也不会死, 但是你会只剩下 1 颗心. 这个也可以自行配置.

- 有一个内置的 GUI 来重充能飞行能量, 所以输入 **/recharge**然后你就准备好出发啦

- 默认情况下, 通过花费 1 点经验值/金钱, 你就能获得 1 点飞行能量. 这可以在配置文件中调整.

- 因为我们有 Bossbar 引擎, 所以玩家会看到非常漂亮的 BossBar 信息来显示他们已经使用了多少飞行能量. 这包括显示你当前的剩余能量, 和上次检查相比你损失/获得了多少飞行能量和你的最大飞行能量点数.

- BossBar 血条栏将自动更新数值并根据你剩余的飞行能量来改变颜色. 》50% 绿色, 》30% 黄色, 《30%红色

- **/cmi flightcharge (add/take/set/show/expcharge/moneycharge/recharge) (玩家名字)(数量)**可以在需要的时候使用, 但是简单的重新充能只需要输入 **/recharge**命令.

- 目前, 如果玩家在空中用光了他的所有飞行能量, 那么他会被传送到地面, 为了防止”事故”.

---

## 交互式命令 | Interactive Command

交互式命令功能允许你创建一些在交互后可以执行命令的方块或者实体.

那么如何创建一个交互式命令呢:

1 | 运行命令 **/cmi ic new \[名字]**, 比如 **/cmi ic new healer**你会在聊天栏中得到这样的窗口.

2 | 点击一个 **+**号来添加你指针指向一个方块(第一个+号)或者一个实体(第二个)给这个特定的交互式命令.

3 | 这将向你发送确认消息, 之后你可以给此交互式命令添加更多方块或实体, 或添加需要执行的命令.

4 | 只需要点击**!**号来查看这个交互式命令的命令执行列表.

5 | 点击**+**号来添加新命令, 插件将等待你在聊天窗口中输入新命令. 不要像常规命令一样以/开始, 只需书写命令内容. **\[playerName]**变量可用于指向交互它的玩家.

6 | 在聊天中输入新命令，然后按 Enter 键.

7 | 在此之后, 你可以右键单击方块或实体, 并看看交互的结果.

你可以根据需求添加任意数量的方块/实体.\
你可以根据需求添加任意数量的命令, 并可以使用特殊命令格式. 看看关于它(指特殊命令格式)的 Wiki 吧.

交互式命令可以设置为公共模式. 这代表着只要玩家拥有 **cmi.interactivesign**权限节点, 就可以通过在牌子的第一行写\[ic:\[交互式指令名称]]来自动将牌子添加到指定交互式命令的方块列表中. 牌子内容将被自动替换为特定交互式指令配置的内容. 可以使用游戏内编辑器来管理它们.

为了”本地化”运行 **!asconsole**命令, 比如 PvP 倒计时, 必须定义世界范围, 以便让服务器”知道”命令的运行位置. 下面是一个示例, 在玩家单击交互式指令的方块/牌子后运行这个交互式方块的 Commands 部分启动了一个计数器.

**c:world**是世界的名字, 并且坐标是该方块/牌子的世界坐标.

```
pvp:
    Location:
    - ==: org.bukkit.Location
        world: world
            x: -1204.0
            y: 90.0
            z: 1120.0
            pitch: 0.0
            yaw: 0.0
        Commands:
        - asConsole! cmi counter start c:world:-1204:90:1120 t:5 -f r:100 msg:PvP_Start!
    SignLines:
    - pvp
    - ' '
    - ' '
    - ' '
    Public: false
```

---

## 自定义命令简写 | Custom Alias

CMI 提供了一个为任何命令创建输入一条命令就可以运行一个或者多个命令的方法(简写命令).

自定义命令简写支持特殊命令格式.

创建简单的单一命令简写只需要使用 **/cmi aliaseditor new \[简写]-\[原始命令]**. 举个例子, 我想把 **/h**设置为**/cmi heal**的命令简写, 需要输入 **/cmi aliaseditor new h-cmi heal \*\***\[playerName] $1.\*\*

- **\[playerName]**将会被替换为执行简写命令的人.
- **$1**– 代表添加到简写命令后的任何额外变量将写在这里. 举个例子:**/h zrips 10**实际上将会执行

你可以使用内置编辑器添加多个命令.

只需要执行**/cmi aliaseditor**并向下滚动找到你想要修改的命令简写, 点击它然后你就能获取它的命令列表. 你可以编辑, 删除, 改变顺序, 或者新加一个命令.

这里有一个运行 2 个命令的命令简写:

**– fromConsole! moneycost:20#?! cmi heal \[playerName] -s**

**– fromConsole! msg \[playerName] !&2You just been healed by God’s of minecraft!**

- 运行它将会从玩家的账户中扣除 20 元. 如果他没有足够的钱, 那他会收到有关此消息的提示信息.
- 这是(指没钱收到提示信息)使用 **?**符号达到的效果. 你可以去特殊命令格式章节来阅读更多关于这个符号的信息.
- 并且如果他没有足够的钱, 第二个命令也不会运行, 这是因为使用了 **#**这个条件判断变量结尾符号. 条件判断变量总是以 **!**结尾, 而 **?**和 **#**是可选的符号.
- 如果玩家有足够的钱, 那么将会以控制台身份静默行**/cmi heal Zrips -s**这个命令, 然后将会执行第二个命令, 发送一条指定消息给玩家.

这里有一个带有延迟执行的命令简写:

**– fromConsole! cmi launch \[playerName]**

**– delay! 3**

**– fromConsole! cmi launch \[playerName]**

- 玩家将会朝在他正在看的方向被发射出去, 然后 3 秒后会被再发射一次.

应该在命令简写中尽量使用 **?**(可能)变量, 主要用于在玩家输入错误的子命令时显示出帮助页面. 举个例子:

**– /cmi aliaseditot new tipi sub-asConsole! cmi msg \[playerName] apple**

**– /cmi aliaseditot new tipi ?-asConsole! cmi msg \[playerName] carrot**

- 当玩家执行**/tipi**时他收到的结果是 **carrot, /tipi bla**的结果也是 **carrot**, 但是 **/tipi su**b 的结果是**apple.**

---

## 自定义文本 | Custom Text

自定义文本功能允许你创建要为玩家显示的任何文本.

它可以是简单的纯色文本, 亦或是复杂的悬停显示更多信息和可点击的高级文本.

- PlaceHolderAPI 支持自动替换占位符. 并且允许为每个玩家自定义文本.
- 如果你用过 Essentials 的自定义文本功能, 就是你可以设置一些执行特定命令就显示的文本的功能, 那么 CMI 的这个功能和它很像, 就像 10 倍可自定义化版本, 并且更强大.
- 首先. 每个命令都被分成单独的文件, 以便更简单地控制你要使用或拥有的自定义文本.
- 然后. 你可以通过简单地点击聊天窗口里的 **\&lt;newPage&gt;**决定哪里是新一页的开始, 而不是数 7 行… 所以你可以创建一个有 100 行的页面, 或者 1 行, 这是你的决定.
- 第三. 它拥有自动分页功能, 所以如果你有多页自定义文本, 你将自动看到下一页按钮来查看下一页. 如果你出于一些原因并不想看到它这样, 那么这个功能可以为单独的自定义文本手动禁用.
- 第四. 它会自动将新的自定义文本收录为具有相同名称的新命令. 举个例子, 默认情况下 rules 文件将会拥有一个**/rules**命令来在被执行时显示规则列表. 正式命令为**/cmi ctext \[自定义文本名字] (页)**
- 第五. 你可以创建 Raw 消息. 什么是 Raw 消息? 你把鼠标放在上面, 可以显示更多信息; 你点击一下, 就可以执行一个命令; 你点击一下, 就可以在聊天中粘贴一些文本, 这就是 Raw 消息. 创建方法很简单:

```
&lt;T&gt;Text&lt;/T&gt; &lt;H&gt;Hover text&lt;/H&gt; &lt;C&gt;cmi heal&lt;/C&gt; &lt;SC&gt;Suggested text&lt;/SC&gt;
```

- - **\&lt;T&gt;Text\&lt;/T&gt;**– 代表要显示的文字
  - **\&lt;H&gt;Hover text\&lt;/H&gt;**– 代表将鼠标悬停在文本上时显示的文本
  - **\&lt;C&gt;cmi heal\&lt;/C&gt;**– 代表单击文本时要执行的命令
  - **\&lt;SC&gt;Suggested text\&lt;/SC&gt;**– 是为命令准备的替换功能, 它会在单击时将文本粘贴到聊天框中
  - 要在一行中包含多条 Raw 信息, 使用 **\&lt;Next&gt;**将他们分开
  - Raw 消息应该永远以 **\&lt;T&gt;**开头

- 第六. 所有这些都可以在 **游戏内**编辑. 指令是 **/cmi editctext**, 你可以创建新的自定义文本, 编辑它的任意一行, 添加新的一页, 删除旧的, 启用/禁用简写名或者自动分页. 只需单击特殊的箭头即可更改行顺序. 也就是说, 完全支持游戏中创建和编辑自定义文本, 而无需编辑它们的文件. 因此, 任何管理员/Staff 无需直接访问您的服务器文件就可以轻松编辑或创建外观非常漂亮的帮助页面.

- 此功能将帮助你使用一些特殊的可点击文本, 或悬停在它们上面以显示额外信息来为自己的服务器创建充满特色的帮助页面, 并且可以通过一个简单的简写系统来方便的读取.

- 并且这个功能支持将自定义文本转化为成书, 只需要 **/cmi getbook \[自定义文本名字] (玩家名)**并且内容还包括所有悬停和可点击的消息.

---

## 命令绑定 | Attached Commands

任何物品都可以被绑定一个及其以上的命令, 并且当交互物品的时候执行它.

- 选项: 物品使用次数, 决定可以使用该物品的次数, 达到次数之后物品将消失. 目前, 它只是计算使用**/cmi attachcommand**绑定上去的命令的次数. 举个例子: **/cmi attachcommand !limiteduse:5!**将会设置物品有 5 个使用次数. 使用物品时将会在 Lore 和 ActionBar 显示剩余次数.
- 选项: 从控制台执行命令举个例子. **/cmi attachcommand !cc!cmi fly \[playerName].**是的, 你可以通过变量来插入玩家名字.

这里有一些例子:

- **/cmi attachcommand !limiteduse:3!;;!cc!cmi fly \[playerName] true**将会启用玩家的飞行模式.
- **/cmi attachcommand !limiteduse:3!;;!cc!cmi tfly \[playerName] 60**将会给玩家提供一个 60 秒的临时飞行模式, 并且只能使用三次.
- **/cmi attachcommand !limiteduse:3!;;!cc!cmi heal \[playerName]**可以治疗玩家 3 次, 然后物品就会消失. 如果物品堆叠在一起, 那么在堆叠内的物品将会一个一个被消耗使用次数, 当前一个使用次数没了再计算下一个巫婆的. 所以如果有 5 个可以使用 3 次的物品堆叠在一起, 一共可以使用 15 次.
- **/cmi attachcommand !left!cmi heal;;!right!cmi feed**将会在左键时治疗玩家, 右键时回复玩家的饱食度.
- **/cmi attachcommand cmi launch \[interactedPlayer] a:45**将会在持有此物品且尝试交互时将玩家发射出去.
- 如果你不想点击物品的同时在后台刷屏, 使用**!silent!**变量, 比如**/cmi attachcommand!left!!silent!cmi heal;;!right!!silent!cmi feed.**

---

## KillAll 用法 | Killall

**/cmi kill all**命令给你提供了一个按照可自定义的筛选规则来清除当前加载的实体的方法.

- 默认情况下拥有自定义名字的实体不会被清除.
- 矿车或者船里面的实体会被忽略.
- 可以设定一个范围以做到只在近距离范围内清除实体.

可用的筛选规则:

- **-monsters**清除所有怪物实体. 一般包括僵尸, 骷髅, 凋零以及其他怪物.
- **-pets**清除所有可以被驯服的实体, 比如马或者狼.
- **-npc**清除所有包含元数据(MetaData)的 NPC 实体, 比如 Citizen 插件创造的实体.
- **-animals**清除所有动物实体, 比如猪或者牛.
- **-ambient**像蝙蝠这样的实体.
- **-named**任何拥有自定义名字的实体.
- **\[mobType]**清除特定种类的实体.
- **-f**把怪物, 可驯服生物, NPC, 傀儡生物, 动物, 环境生物, 载具整合成了一个筛选符.
- **-lightning**在实体被移除的地方召唤天雷.
- **-list**列出符合筛选条件的实体.

这里有一些例子:

- **/cmi killall**– 将会清除所有怪物.
- **/cmi killall 60**– 将会清除 60 格内的怪物.
- **/cmi killall zombie**– 将会清除所有僵尸.
- **/cmi killall zombie skeleton**– 将会清除所有僵尸和骷髅.
- **/cmi killall -list**– 将会列出所有实体.
- **/cmi killall -monsters -lightning**– 将会清除所有怪物并且在移除它们的地方劈一道闪电.

---

## 扫描 | Scan

扫描功能允许你在整个地图上查找包含某物品的任意种类的容器. 如果你正在寻找丢失的 OP 之剑或被偷走的东西, 你就可以用这个功能来找了.

- 插件将会扫描以下容器:

  - 箱子
  - 陷阱箱
  - 潜影盒
  - 漏斗
  - 盔甲架
  - 物品展示框
  - 熔炉
  - 投掷器
  - 酿造台
  - 马箱(驴/骡身上的箱子, 应该还有羊驼)
  - 箱子矿车
  - 漏斗矿车

- 可以选择扫描到物品后马上删除该物品. 扫描完成后, 你将获得容器的位置列表, 你可以点击相应的坐标来传送到那个地方或者通过点击 **编辑 **按钮编辑该容器的内容(如果可用, 比如你要怎么”打开”一个物品展示框?).

- 可以随时暂停扫描并稍后继续.**/scan pause**(暂停) 和**/scan continue**(继续扫描)输入**/scan stop**来停止扫描

- 插件会自动优化该功能的工作方式来避免卡服. 因此扫描速度将自动适配当前服务器的状态, 以使 TPS 保持在阈值以上.

- 扫描 15000×15000 格的范围大约需要 45min, 这有大约 6GB 去扫描. 全地图扫描只适用于\*\*情况, 比如你不想给熊孩子任何藏匿的机会

扫描指令可用变量:

- **id \[ID:附加值]**– 通过 ID 或数据值来识别物品.
- **q \[最低数量]**– 扫描到物品的容器, 物品高于此最低数量才会呈递结果.
- **r \[半径(单位区块)]**– 可选项目:范围扫描, 填入 g 代表扫描整张地图.
- **n \[物品名字]**– 可选项目: 查找显示名, 忽略颜色符号. 使用下划线表示空格, 比如 中间\_空格\_的名字
- **l \[物品 Lore]**– 可选项目: 查找 Lore. 使用下划线表示空格, 比如 中间\_空格\_的 Lore
- **h**– 将手持的物品作为扫描目标.
- **e \[附魔名字]**– 查找拥有指定附魔的物品.
- **elvl \[附魔最低等级]**– 查找具有等于或大于指定附魔等级的物品.
- **oversize**– 查找过量堆叠的物品.
- **purge**– 删除找到的物品, 这个功能应该先在配置文件中启动并且出于安全性原因默认禁用.

命令示例:

- **/scan id 52 r 30**– 寻找以你为中心 30 区块范围内的所有刷怪笼(物品).
- **/scan id diamond_block r g q 32**– 全地图查找堆叠数量超过 32 的钻石块.
- **/scan id 276 r 30 n power_sword e sharpness elvl 10**– 在 30 区块范围内查找名字为”powersword”并且锋利附魔等级大于等于 10 的钻石剑.

---

## Tab 列表 | Tab List

- 支持多行显示
- 以 **异步**模式运行, 以避免在主线程上操作导致过载.
- 完全支持**PlaceHolderAPI**的任何变量.
- 还支持 CMI 自己的变量.
- 可自定义的页眉和页脚(就是 Tab 列表中玩家列表上方/下方显示的内容).
- 支持以特定间隔自动刷新内容(举个简单例子使用时钟变量的时候, 可以每分钟更新一次), 或者在特定事件触发时刷新内容, 比如在玩家登录时刷新在线玩家数之类的.
- 可自定义列表中玩家名称的显示格式.
- 将不会把隐身玩家计入在线玩家数内. 下方的图片示例就是一个例子.
- 支持为不同玩家设定不同的显示格式. 在下方的图片示例中, 管理员看到的内容与常规格式不同, 并且管理员的名称显示格式也不一样.
- 你可以创建的格式配置组的数量没有限制(默认有 2 个配置组).
- 如果需要, 可以禁用权限节点检查来获得更好的运行性能.
- 通过**cmi.tablist.\[组序号]**权限节点来使玩家看到不同的 Tab 列表格式, 比如 **cmi.tablist.1**或者其他数字, 数字越大, 显示优先级越高.
- 设置 Tab 列表的自动刷新间隔时, 请把它尽量设置为最高值, 你使用的占位符变量也是. 请避免低于 5 秒的刷新间隔甚至设置为-1 和仅在事件更新时刷新.

想要创建一个有动画的 Tab 列表, 你需要一帧一帧地写内容. 举个例子:

```
Header:
  '1':
  - '&f------------------------------------'
  - '&7在线人数 &f%server_online%&7/&f%server_max_players%'
  - '&f------------------------------------'
  '2':
  - '&7------------------------------------'
  - '&7在线人数 &f%server_online%&7/&f%server_max_players%'
  - '&7------------------------------------'
  '3':
  - '&8------------------------------------'
  - '&7在线人数 &f%server_online%&7/&f%server_max_players%'
  - '&8------------------------------------'
```

这将在每个 Tab 列表刷新时不停变换颜色.

同一个 Tab 列表可以有不同数量的页眉/页脚动画帧

---

## 游戏时间奖励 | PlayTime Rewards

游戏时间奖励系统可以在玩家积累到了一定时长的游戏时间后执行一段命令.\
你可以设置每过 X 秒或游戏时长共 X 秒后执行命令.

所以你可以设置每小时给予一次常规奖励, 然后游戏时长达 6 小时甚至 24 小时后, 发一个大一点的奖励.默认命令 **/cmi prewards**的命令简写默认启用, 并且它的其中一个命令简写**/prewards**将会显示游戏时间奖励列表, 你看到下一个奖励并领取一些奖励.

```
hourly1:
  DisplayName: "&7Hourly reward"
  AutoClaim: true
  Description:

- "&2Get reward for every hour you are online"
- "&2Free heal and 20 bucks into your pocket"
  PayEvery: 3600
    Commands:
- asConsole! cmi heal [playerName] -s
- asConsole! cmi money give [playerName] 20
  daily1:
    DisplayName: "&7Daily reward"
    AutoClaim: true
    Description:
- "&2Get reward for every 24 hours of playtime"
- "&22000 bucks into your pocket!"
  PayEvery: 86400
    Commands:
- asConsole! cmi money give [playerName] 2000
  1hour:
    DisplayName: "&fOne hour reward"
    AutoClaim: false
    Description:
- "&2Get reward for 1 hour you have been online"
- "&2500 bucks into your pocket!"
  PayFor: 3600
    Commands:
- asConsole! cmi money give [playerName] 500
  6hour:
    DisplayName: "&f6 hour reward"
    AutoClaim: false
    Description:
- "&2Get reward for 6 hour's you have been online"
- "&22 000 bucks into your pocket!"
  PayFor: 21600
    Commands:
- asConsole! cmi money give [playerName] 2000
  12hour:
    DisplayName: "&f12 hour reward"
    AutoClaim: false
    Description
- "&2Get reward for 12 hour's you have been online"
- "&25 000 bucks into your pocket!"
  PayFor: 43200
    Commands:
- asConsole! cmi money give [playerName] 5000
  24hour:
    DisplayName: "&f24 hour reward"
    AutoClaim: false
    Description:
- "&2Get reward for 24 hour's you have been online"
- "&215 000 bucks into your pocket!"
  PayFor: 86400
    Commands:
- asConsole! cmi money give [playerName] 15000
  7days:
    DisplayName: "&f7 day reward"
    AutoClaim: false
    Description:
- "&2Get reward for 7 days you have been online"
- "&250 000 bucks into your pocket!"
  PayFor: 604800
    Commands:
- asConsole! cmi money give [playerName] 50000
  30days:
    DisplayName: "&f30 day reward"
    AutoClaim: false
    Description:
- "&2Get reward for 30 days you have been online"
- "&2500 000 bucks into your pocket!"
  PayFor: 2592000
    Commands:
- asConsole! cmi money give [playerName] 500000
```

在这个例子中,**“hourly1”**是该游戏时间奖励配置组的唯一标识 (下面被称为 PTR). 你可以随心所欲写任何内容, 但是每个 PTR 之间不能重复.

- **DisplayName**– 决定显示在列表中的奖励名字. 你可以使用颜色代码来把它们区分开. 可以写你想写的任何东西.
- **AutoClaim**– 决定当玩家达到目标时是否自动发放奖励, 否则他就得手动领取奖励.\
  如果选择奖励需要手动领取, 那么玩家每 X 分钟都会收到一次提醒(可在配置文件中自定义): 他有未领取的奖励.只有拥有 **cmi.prewards.notification**权限节点才可以收到提示信息.
- **Description**– 决定当鼠标悬浮在奖励名字上面时显示的详细信息. 你可以根据需要添加任意行文本, 并根据需要使用颜色代码.
- **PayFor**– 决定游戏时长达到多少秒后发放奖励. 当玩家的游戏总时长达到指定数值时发放并且只会发放一次奖励.
- **PayEvery**– 是会重复发放的奖励, 玩家每在服务器在线一定时长发放一次奖励.
- **StackRewards**– 填 True 或 False. 如果不写默认为 True. 决定是否可以积累奖励, 然后玩家在领取奖励时可以一次性领到很多奖励.
- **Commands**– 当领取奖励时执行的命令. 支持特殊命令格式.

---

## 不死图腾 | Totem

原版 Minecraft 1.11+后允许你死亡时手持不死图腾来避免死亡.然而你并不知道你到底什么时候会死亡, 所以这个功能并不是很好用.\
这个功能将使不死图腾成为你服务器上最有用的东西之一, 而不会显得太无敌或成为无用的新噱头.

现在不死图腾有了三个新功能:

- **功能 1**: 不死图腾不需要持有在手上, 只需要放入背包, 便会在受到致命伤害时自动生效
- **功能 2**: 为了避免功能 1 使得不死图腾过于无敌, 比如玩家带了一背包的不死图腾出去玩. 新添加了冷却系统, 你可以决定玩家每隔多久才能再使用一次不死图腾. 默认情况下是 10 分钟.BossBar 将显示冷却剩余时间, 直到你可以再次使用不死图腾. 你可以使用和**/cmi totemtoggle**命令来开关 BossBar 信息提醒
- **功能 3**: 如果你想通过这种方式来使用不死图腾, 你需要把它拿出来然后消耗掉它. 使用不死图腾后, 你将有 10 秒钟(默认值)的无敌时间, 在此期间如果你死亡了, 然后你就会原地复活. 不死图腾在进入无敌时间后就马上被消耗掉, 就算玩家并没有在无敌时间内死亡也不会返还. 这个功能比单纯把不死图腾塞背包里更加需要战略.

---

## 全息字 | Holograms

CMI 全息字功能提供了以全息方式显示任何自定义文本的方法.

- 它的数据包和悬浮物品仅存在于客户端会话上, 以防止被第三方清理插件清掉.
- 你可以用游戏内编辑器来添加新的一行文本, 删除旧的一行, 把全息字移到你所在位置或者精确调整到你想展示的地方, 改变全息字的激活范围甚至行间距.
- 它支持 PlaceholderAPI 插件的变量来根据不同玩家显示不同的信息.
- 它支持按指定时间间隔自动刷新文本.
- 如果你离它太远, 为了最小化客户端的负载, 它会自动隐藏, 直到你靠近它来使它刷新一次.
- 具有显示悬浮物品或静态图标的功能, 适用于大多数自定义需求.
- 使用**/cmi hologram new \[名字]**来创建一个新的全息字.
- 只需要输入 **/cmi hologram**就可以根据全息字和你的距离列出一个列表, 离你最近的全息字永远在列表第一个, 点击要修改的全息字来编辑它.
- 可以在某一行写上**ICON:\[物品名字/ID]:\[附加值]**来创建一个图标, 举个例子: **ICON:Stone**将会创建一个石头的悬浮物, 而**ICON:Stone:3**将会创建闪长岩的悬浮物.
- 如果要像示例中的那用将当前手持的物品作为为图标, 像这样写:**ICON:%iteminhand%**. 此功能仅适用于 7.6.0.1+ 以上的版本.
- 同样的, 你也可以用这个方法来设置静态图标, 唯一的不同之处是变量要写成 **SICON.**
- 你可以使用 CMI 或 PlaceHolderAPI 提供的任何变量来显示玩家的当前信息. 每个玩家都能根据变量看到不同的, 他们自己的信息.
- **Update range**决定由玩家靠近导致开始自动更新所需要的距离.
- **Show range**决定玩家靠近显示或隐藏全息字所需要的距离. 这不会触发全息字自我更新.
- 如果你想要它静态显示(不更新内容), 设置 **update interval**为-1.
- **Line spacing**可以在你需要把行与行压缩在一起或者分开时起作用(行间距). 默认情况下, 它们(指各行之间)将尽可能接近而不重叠
- **Icon spacing**将决定为图标所留下的空行, 因为显示图标需要大约 2 行文字
- 使用**\&u**颜色代码来在每次更新内容时随机一个颜色.

---

## 传送门 | Portals

此 CMI 功能使你可以创建当玩家穿越它们时执行命令的传送门. 并且支持特殊命令格式.

要创建一个传送门, 你需要一把**木锄(默认选区工具)**, 还需要拥有 **cmi.command.portals**和 **cmi.select**权限节点.

1. 现在你选择了一片你想创建传送门的区域(就像 worldedit 一样). 选区会通过粒子效果来高亮显示.
2. 选完了? 你需要运行这个命令: **/cmi portals new \[名字]**. 举个例子: **/cmi portals new Test1**
3. 到这一步你需要设置目的地了, 就是玩家会被传送到的地方.
4. 当上一步完成后, 我们就可以自定义我们的传送门了. 只需要在聊天栏输入 /cmi portals edit Test1 然后就会打开编辑 GUI, 可以操作以下内容:

- 启用/禁用传送门
- 从当前选区中重新启动传送门
- 启用/禁用粒子特效
- 粒子特效种类(又 36 种不同种类)
- 粒子特效数量
- Percentage of sides shrieked particles
- 粒子特效的有效范围
- 传送到传送门位置
- 传送到传送门的目的地
- 决定是否在没有有效传送目的地位置时执行命令
- 编辑传送门要执行的命令
- 设置传送目的地
- 保存更改到文件
- 删除传送门

以下是传送门保存到 **Portals.yml**文件的格式. 我更喜欢通过文件管理传送门命令.

```
Test1:
   Loc: 358.0:64.0:77.0:358.0:67.0:81.0
   enabled: true
   effect: reddust
   showParticles: true
   Tp:
     ==: org.bukkit.Location
     world: world
     x: 370.6645173225757
     y: 64.0
     z: 79.38387030052189
     pitch: 2.5499883
     yaw: -268.79987
   particleAmount: 20
   particleHide: 0
   activationRange: 16
   commandsWithoutTp: false
   commands:
     - cmi effect [playerName] blindness 2 1 -s
     - cmi fly [playerName] false
```

### 请注意 | ATTENTION

根据配置文件, 创建传送门时会自动填入**cmi effect \[playerName] blindness 2 1 -s**这条命令, 如果你想删掉它, 就把这一项设置为空.

```
Portals:
  # Defines in milliseconds how often to check if player entered portal or not
  # Bigger numbers can help slightly lower server load but small portals, 1 block depth without backwall can be passed throw without teleportations if player moves fast enought
  CheckInterval: 300
  # Defines in milliseconds how often to check if player entered portal range for particles to apear
  CheckParticleInterval: 500
  # Perform commands on teleport or not
  PerformCommands: true
  # Commands to be performed on teleport event
  Commands:
    - cmi effect [playerName] blindness 2 1 -s
```

### 附加内容 | EXTRA

- 传送门可以跨 Bungeecord 网络工作, 也就是你可以跨服传送你的玩家. 如果设置这样的传送门? 有了 CMI 它不能再更简单了. 创建一个传送门, 打开编辑器 UI, 点击设置传送目的地按钮, 你将会在聊天栏收到一条信息. 前往你想要传送到的位置, 同一子服内或者蹦极跨服(两个子服都应安装 CMI)然后点击一下刚刚发的提示信息. 你就完成了. 就这样而已… 前往你所想的目的地, 然后点击一下聊天消息. 不需要命令, 啥都不需要. 就是这么简单.
- 传送门命令也可以跨 Bungeecord 网络运行，并将在玩家被传送后执行
- 想要在当玩家进入传送门时播放自定义声音, 在**portal.yml**的 command 节添加如下内容即可.

```
commands:
  - cmi effect [playerName] blindness 2 1 -s
  - execute [playerName] ~ ~ ~ /playsound ENTITY.ENDERMEN.TELEPORT player [playerName]
```

请注意: 声音名称可能因 Minecraft 版本而异.

- 你可以通过**/cmi portals**命令按照离你远近的顺序列出所有传送门.
- 你可以根据需要添加任意数量的命令，并可以使用特殊命令格式.

---

## 出生点与地标 | Spawn & Warp

以下是对其主要功能和特点的解释:

### 出生点 | SPAWN

参数: **cmi setspawn (玩家名) (true/false) (-g:\[组名]) (-rng:\[半径]) (-w:world,world_nether)**使用此指令所需的权限节点: **cmi.command.setspawn**

为 **/cmi spawn**命令设置传送的位置或者是玩家复活的位置.\
如果想要设置出生点, 你需要**cmi.command.setspawn**权限节点.

```
cmi set spawn
```

**(true/false) –**如果设置为 true, 运行**/cmi spawn**命令将会为玩家设置复活点.

```
cmi setspawn true
```

**(-g:\[组名])**– 如果设置为 true, 运行**/cmi spawn**命令将会为特定组的玩家设置复活点. 在这种情况下有必要给予相关组的权限节点.\
**– cmi.spawngroup.\[组名]\
– cmi.respawngroup.\[组名] (此权限决定是否遵从特定组的重生点. 如果没有此权限, 将会在主重生点重生)**

```
cmi setspawn true -g:Moderator
```

**(-rng:\[半径])**– 根据定义的范围，将玩家的出生点随机化.\
这会使玩家在区域内散开出生从而避免玩家出生在一起.

```
cmi setspawn true -g:Moderator -rng:5
```

**(-w:world,world_nether)**– 根据玩家所处的世界定义出生点\
在这个示例中, 此出生点只有在玩家处于**world**或者 **world_nether**世界时才被使用.\
这可以与组出生点配合使用.

```
cmi setspawn true -rng:5 -w:world,world_nether
```

### 额外内容 | EXTRA

- 你是否厌倦了点击死亡屏幕上的重生按钮? 此权限节点使你可以立即重生: **cmi.autorespawn**. 如果要将其他玩家传送到出生点, 你需要**cmi.command.spawn.others**权限节点.
- 你可以从配置文件中激活黑名单物品功能. (一个能在玩家背包发现黑名单物品时取消传送的可选选项. 可以通过 **cmi.teleport.bypassblacklist**权限节点来绕过检查)
- 你可以在配置文件中定义玩家在第一次进入服务器时的初始重生点.\
  _(译注: 这个功能可以用来做 RPG 服初次进入服务器选择职业后再进入服务器时在别的地方传送这样的效果)_

```
FirstSpawn:
  Use: true
  World: None
  X: 0.0
  Y: 0.0
  Z: 0.0
  Pitch: 0.0
  Yaw: 0.0
```

- 你可以定义一个全局重生点顺序, 当没有给具体世界定义重生点顺序的时候将使用此顺序.
- 可用的重生点: spawn, bedLocation, homeLocation, worldSpawn, warp!\[地标名].\*\*\*\*
- **warp!\[地标名]**可指代任何可用的有效地标点, 被重生的玩家将绕过任何传送到此地标点的限制

```
PriorityOrder:
  - spawn
  - bedLocation
  - homeLocation
  - worldSpawn
  # Defines respawn order for defines worlds
  # Remove world if you want to leave respawn handling for server or 3rd party plugin
  Specific:
    world:
      - spawn
      - bedLocation
      - homeLocation
      - worldSpawn
```

### 地标点 | WARPS

参数: **cmi setwarp \[地标点名] (true/false) (hand) (slot)**使用此命令所需的权限节点**: cmi.command.warp**

为**/cmi warp**(列出地标点)命令设置地标点.\
如果想要设置地标点, 你需要 **cmi.command.setwarp**权限节点.

一个简单的地标点.

```
cmi setwarp test
```

创建一个需要 **cmi.command.warp**.\[地标点名] 权限节点才能传送的地标点.\
这个示例中所需要的权限节点为 **cmi.command.warp.test**

```
cmi setwarp test true
```

创建一个将以手持物品作为 GUI 上图标的地标点.

```
cmi setwarp test hand
```

创建一个在 GUI 的指定位置显示的地标点 (1-54).

```
cmi setwarp test 13
```

将上述操作一步到位.

```
cmi setwarp test true hand 13
```

下面是 Warp5 的配置代码, 最大程度自定义化的地标点示例:

```
Warp5:
  Location: world;398.72;64.0;34.06;176.83;5.99
  ReqPerm: true
  Slot: 4
  Item:
    type: COBBLESTONE
    amount: 1
    meta:
      ==: ItemMeta
      meta-type: UNSPECIFIC
      display-name: ??6Warp5
      lore:
      - ??5Lore 1
      - ??5Lore 2
      enchants:
        DURABILITY: 10
      ItemFlags:
      - HIDE_ENCHANTS
```

### 额外内容 | EXTRA

- 如果要将其他玩家传送到地标点, 你需要**cmi.command.warp.others**权限节点.
- 你可以从配置文件中激活黑名单物品功能. (此功能上文介绍过)
- 你可以将地标点作为一个可选重生点.
- 你可以将地标点作为一个预热选项的条件.
- 你可以在拥有**cmi.command.removewarp**权限节点的情况下删除地标点. 参数: **cmiremovewarp (地标点名)**.
- 你可以在配置文件中更改地标点设置

```
Warps:
  # When set to true, warps list will be shown in GUI instead of chat list
  GUI: false
  # How many warps to show in each page
  perPage: 50
  # Do you want to save warp creator
  saveCreator: false
  # Do you want to show creator in warp list
  showCreator: false
```

---

## 盔甲架编辑器 | Armor Stand Editor

这个功能可以做些什么呢?

- 可用于傻瓜式编辑的 GUI 菜单
- 编辑盔甲架手中物品, 包括副手
- 旋转盔甲架基座
- 操作头部方向
- 操作双手和双腿的方向
- 在一定范围内移动盔甲架, 所以你就可以将盔甲架放置得更紧凑
- 开启/关闭显示盔甲架基座
- 更改盔甲架大小, 从普通盔甲架到小号盔甲架
- 开启/关闭隐身效果
- 开启/关闭重力效果, 此效果可以让你同时抬高或降低手臂或基座
- 开启/关闭显示手臂
- 开启/关闭显示自定义名称
- 开启/关闭发光模式
- 开启/关闭无敌效果
- 开启/关闭可交互效果

所有这些都可以通过内置 GUI 进行编辑

- 这些都没什么需要解释的. 比如可以通过用鼠标左键或右键单击对应的按钮来调整身体部位. 并且按住 Shift 点击时调整数值将放大 10 倍.

- 这里有 17 种可用的操作, 每个都有对应的权限节点, 这样就有 17 个权限节点:

  - cmi.command.armorstand.updateitems
  - cmi.command.armorstand.plate
  - cmi.command.armorstand.size
  - cmi.command.armorstand.visible
  - cmi.command.armorstand.arms
  - cmi.command.armorstand.gravity
  - cmi.command.armorstand.glow
  - cmi.command.armorstand.invulnerable
  - cmi.command.armorstand.name
  - cmi.command.armorstand.interactable
  - cmi.command.armorstand.head
  - cmi.command.armorstand.body
  - cmi.command.armorstand.leftArm
  - cmi.command.armorstand.rightArm
  - cmi.command.armorstand.leftLeg
  - cmi.command.armorstand.rightLeg
  - cmi.command.armorstand.pos

- 基本权限节点一如既往的是 **cmi.command.armorstand**

- 你有 2 个选择来编辑盔甲架. 看向盔甲架然后执行**/cmi armorstand**命令, 或者简单地对着它 按住**shift + 右键.**

- 如果你想要在编辑盔甲架的同时看到你对它做出的修改. 将视野移到一边(使盔甲架在你的视野一侧)然后执行 **/cmi armorstand last**命令来编辑你上一个编辑过的盔甲架.

- 出于安全考虑. 你不能将盔甲架移动到你没有建筑权限的地方. 所以如果无法建造, 也就没有移动盔甲架到此区域的方法.

- 你不能编辑正由其他人编辑中的盔甲架.

---

## 变量 | Placeholder

可以在语言文件中使用**PlaceholderAPI**变量来使 CMI 发送信息的时候显示一些东西.只有以 **%cmi\_**开头的变量会被**PlaceHolderAPI**识别到, 但是在大多数地方的 CMI 本体也可以使用它们.

以下是一些**自定义/非静态**变量:

- **%cmi_user_meta\_\[键]%**用来与自定义元数据功能一起使用.

  - 通过**/cmi usermeta \[玩家名] \[add/remove/clear/list/increment] (键) (值) (-s)**命令来添加元数据给变量显示.
  - e.g. 执行 **/cmi usermeta Zrips add testkey Coffee**命令后, 通过 CMI 或者其他插件来显示**%cmi_user_meta_testkey%**变量, 你得到的结果为
  - 一个玩家可附加上无限个元数据, 但强烈建议保持合理的数量.
  - **Increment**选项可以用来增减数字值. 举个例子:**/cmi usermeta Zrips incrementcounting +0.5**的运行结果为 0.5, 但是当第二次运行时结果为 1. 负数可用于降低值.

- **%cmi_user_kitcd\_\[礼包名]%**将显示礼包的剩余冷却时间. 当礼包结束冷却时将显示短杠(-).

- **%cmi_jail_time\_\[监|狱名]\_\[牢|房 ID]%**将显示特定监|狱|牢|房的禁|闭剩余时间. 如果有超过 1 个玩家呆在同一个牢|房中, 将会显示剩余的最大时间.

- **%cmi_jail_username\_\[监|狱名]\_\[牢|房 ID]%**将显示在特定监|狱|牢|房中禁|闭的玩家名. 如果有超过 1 个玩家呆在同一个牢|房中, 将会显示最近被关禁|闭的玩家.

- **%cmi_jail_reason\_\[监|狱名]\_\[牢|房 ID]%**将显示特定监|狱|牢|房中玩家的禁|闭原因(如果在关禁|闭时写了原因). 如果有超过 1 个玩家呆在同一个牢|房中, 将会显示最近被关禁|闭的玩家的原因.

- **%cmi_worth_sell\_\[物品英文 ID:附加值]%**将显示指定物品在价值文件中设定出售价格.

- **%cmi_worth_buy\_\[物品英文 ID:附加值]%**将显示指定物品在价值文件中设定购买价格.

静态变量可以在游戏中通过**/cmi placeholders**命令查看, 还会显示带有可能输出值的示例:

**CMI 玩家信息**

- **%cmi_user_charges_left%**
- **%cmi_user_charges_max%**
- **%cmi_user_charges_time%**
- **%cmi_user_charges_cooldown%**
- **%cmi_user_display_name%**
- **%cmi_user_nickname%**
- **%cmi_user_name%**
- **%cmi_user_cuffed%**
- **%cmi_user_god%**
- **%cmi_user_afk%**
- **%cmi_user_afk_symbol%**
- **%cmi_user_joinedcounter%**
- **%cmi_user_banned%**
- **%cmi_user_maxhomes%**
- **%cmi_user_homeamount%**
- **%cmi_user_vanished_symbol%**
- **%cmi_user_balance_formatted%**
- **%cmi_user_balance%**
- **%cmi_user_prefix%**
- **%cmi_user_suffix%**
- **%cmi_user_group%**
- **%cmi_user_tfly%**
- **%cmi_user_tfly_formatted%**
- **%cmi_user_tgod%**
- **%cmi_user_tgod_formatted%**
- **%cmi_user_votecount%**
- **%cmi_user_rank%**
- **%cmi_user_nextranks%**
- **%cmi_user_nextrankpercent%**
- **%cmi_user_nextvalidranks%**
- **%cmi_user_canrankup%**
- **%cmi_user_country%**
- **%cmi_user_country_code%**
- **%cmi_user_city%**
- **%cmi_user_jailname%**
- **%cmi_user_jailcell%**
- **%cmi_user_jailtime%**
- **%cmi_user_jailreason%**
- **%cmi_user_bungeeserver%**
- **%cmi_user_playtime_days%**
- **%cmi_user_playtime_dayst%**
- **%cmi_user_playtime_hours%**
- **%cmi_user_playtime_hoursf%**
- **%cmi_user_playtime_hourst%**
- **%cmi_user_playtime_minutes%**
- **%cmi_user_playtime_minutest%**
- **%cmi_user_rank_percent\_\[rankName]%**
- **%cmi_user_meta\_\[key]%**
- **%cmi_user_kitcd\_\[kitName]%**

**物品**

- **%cmi_iteminhand_displayname%**
- **%cmi_iteminhand_realname%**
- **%cmi_iteminhand_type%**
- **%cmi_iteminhand_itemdata%**
- **%cmi_iteminhand_amount%**
- **%cmi_iteminhand_worth%**

**定时任务**

- **%cmi_schedule_nextin\_\[定时任务名]%**

**经济**

- **%cmi_baltop_name\_\[1-10]%**
- **%cmi_baltop_money\_\[1-10]%**
- **%vault_eco_balance_formatted%**

**物品价值**

- **%cmi_worth_buy\_\[物品英文 ID:(附加值)]%**
- **%cmi_worth_sell\_\[物品英文 ID:(附加值)]%**

**蹦极网络**

- **%cmi_bungee_total\_\[服务器名]%**
- **%cmi_bungee_current\_\[服务器名]%**
- **%cmi_bungee_motd\_\[服务器名]%**
- **%cmi_bungee_onlinestatus\_\[服务器名]%**

**玩家**

- **%player_world%%player_x%**
- **%player_y%%player_z%**
- **%player_biome%**

**服务器**

- **%server_online%**
- **%server_max_players%**
- **%server_unique_joins%**
- **%server_time\_\[时间格式]%**

**在线玩家**

- **%onlineplayers_names%**
- **%onlineplayers_displaynames%**

**随机值**

- **%cmi_random_player_name%**
- **%cmi_random\_\[from]\_\[to]%**

**监|狱**

- **%cmi_jail_time\_\[监|狱名]\_\[牢|房 ID]%**
- **%cmi_jail_username\_\[监|狱名]\_\[牢|房 ID]%**
- **%cmi_jail_reason\_\[监|狱名]\_\[牢|房 ID]%**

---

## Ranks 等级 | Ranks

使用前请检查服务端根目录下的 **spigot.yml**中的统计数据保存拦截已被设置为 false.**stats-&gt;disable-saving:false**

此功能具有以下特性:

- 玩家将会根据所给予的权限节点自动获取一个默认 Rank 等级组: **cmi.defaultrank.\[等级组名]**
- 未启用的 Rank 等级组将被忽略.
- **DisplayName**是一个用来在游戏中表示 Rank 等级的可选选项. 它**不**决定你需要给予玩家的权限节点内容(即它并不是你所需要填写的\[等级组名]), 并且你仍然需要通过给予权限节点来提升这个等级组的显示优先级.
- **DefaultRank**决定当玩家没有其他等级组的权限节点时, 默认拥有的等级组. 可以拥有多个默认等级组, 并且取决于权限节点, 优先级最高的等级将在需要时分配给该玩家.
- **AutoRankup**决定如果条件达到, 玩家是否可以自动升级到此等级组. 请注意, 如果达到多个等级组的升级条件, 玩家将会需要确认他想升级到哪一个等级.
- **RankupConfirmation**决定是否在可升级时添加其他确认信息. 有助于防止玩家不知不觉升级到别的等级. 请注意, 即使只有一个合法的升级选项, **autorankup**也会要求确认升级到此等级.
- **NextRanks**是此等级可升级到的的下一个等级列表. 可以是一个或很多个. 请注意, 每个等级的升级要求都会在聊天中显示, 如果有一堆排在一起可能会很混乱.
- **MoneyCost**决定玩家需要支付多少钱来升级到此等级.
- **ExpCost**决定玩家需要支付多少经验之来升级到此等级.
- **Commands**是会在升级时执行的命令列表. 可以是其他行动, 比如全服公告一下或者是其他东西
- **CommandsOnRankDown**是会在降级时执行的命令列表. 命令将将会在你 掉出这个等级 的时候执行.
- 此功能的主要配置节点是**StatsRequirements**,它可以有很多不同的值:\
  这个配置节点的一般格式看起来是这样的: **\[主条件]\(:可选子条件):数值**举个例子, **MonsterKills:100**需要玩家击杀 **100 只怪物**而 **MonsterKills:Zombie:100**需要玩家击杀 **100 只僵尸(怪物).**可用的条件要求如下表:

以块为单位的”距离”:

- **Travel**– 总旅行距离
- **Walk**– 行走行进距离
- **Sneak**– 潜行行进距离
- **Sprint**– 疾跑行进距离
- **Swim**– 游泳行进距离
- **Fall**– 下坠距离
- **Climb**– 攀爬距离
- **Fly**– 飞行距离
- **Dive**– 水下行走行进距离
- **MinecartTravel**– 矿车行进距离
- **BoatTravel**– 船行进距离
- **PigTravel**– 骑猪行进距离
- **HorseTravel**– 骑马行进距离
- **ElytraTravel**– 鞘翅飞行距离

以秒为单位的”时间”:

- **PlayTime**– 总游戏时长
- **AccountAge**– 从玩家注册到现在的时间
- **FromLastDeath**– 从上一次死亡到现在的时间
- **SneakTime**– 潜行时间

数值:

- **GameQuit**– 退出游戏次数
- **Jump**– 跳跃次数
- **DamageDealt**– 造成伤害总值
- **DamageTaken**– 受到伤害总值
- **Deaths**– 死亡次数
- **MobKills**– 击杀怪物次数
- **PlayerKills**– 击杀玩家次数. 间接击杀不计数
- **ItemEnchanted**– 附魔物品次数
- **AnimalsBred**– 繁殖动物次数
- **FishCaught**– 钓到鱼次数
- **TalkedToVillager**– 与村民对话次数
- **TradedWithWillager**– 与村民交易次数
- **CakeSlicesEaten**– 吃的蛋糕片数
- **CauldronFilled**– 填满炼药锅次数
- **CouldronUsed**– 使用炼药锅次数
- **ArmorCleaned**– 清洗有色皮革甲次数
- **BannerCleaned**– 清洗有色旗帜次数
- **BrewingstandInteractions**– 与酿造台互动次数
- **BeaconInteractions**– 与信标交互次数
- **CraftingTableInteractions**– 与合成台交互次数
- **FurnaceInteractions**– 与熔炉交互次数
- **DispenserInspected**– 检查(打开)发射器次数
- **DropperInspected**– 检查(打开)投掷器次数
- **HopperInspected**– 检查(打开)漏斗次数
- **ChestOpen**– 箱子打开次数
- **TrappedChestTriggered**– 陷阱箱触发次数
- **EnderchestOpened**– 末影箱打开次数
- **NoteblockPlayed**– 音符盒激活次数
- **NoteblockTuned**– 音符盒调音次数
- **FlowerPotted**– 花盆栽花次数
- **RecordPlayed**– 播放唱片次数
- **SleeptInBed**– 床上睡觉次数
- **ShulkerBoxOpened**– 潜影盒打开次数
- **ItemDropped**– 定义丢弃某物品的次数要求. 如果没有指定物品, 将会使用总物品丢弃次数
- **ItemPickups**– 定义捡起某物品的次数要求. 如果没有指定物品, 将会使用总物品捡起次数
- **BlocksMined**– 定义挖破某方块的次数要求. 如果没有指定方块, 将会使用总方块挖破次数
- **ItemBreaks**– 定义用爆某物品的次数要求. 如果没有指定物品, 将会使用总物品用爆次数
- **ItemCrafts**– 定义合成某物品的次数要求. 如果没有指定物品, 将会使用总物品合成次数
- **ItemsUsed**– 定义使用某物品的次数要求. 比如使用稿子挖掘. 如果没有指定物品, 将会使用总物品使用次数
- **MonsterKills**– 定义击杀某怪物的次数要求. 如果没有指定怪物种类, 将会使用总怪物击杀次数
- **KilledBy**– 定义被某怪物击杀的次数要求. 如果没有指定怪物种类, 将会使用总被怪物击杀次数

默认配置文件示例.

```
Newbie:
  Enabled: true
  DisplayName: "&2Newbie"
  DefaultRank: true
  AutoRankup: true
  NextRanks:
  - Branch1
  - Branch2
  Branch1:
    Enabled: true
    DisplayName: "&2Branch1"
    AutoRankup: true
    RankupConfirmation: true
    Votes: 5
    PermissionRequirement:
  - "cmi.command.fly:Fly"
      McMMORequirement:
  - "woodcutting:10"
  - "power:20"
      JobsRequirement:
  - "miner:10"
  - "totallevel:20"
      ItemRequirement:
  - "stone:10"
  - "stone:1:20"
  - "book:20"
      NextRanks:
  - Branch1Rank1
      MoneyCost: 100
        Commands:
  - "broadcast! &6[playerDisplayName] &eleveled up to Branch1 rank!"
      StatsRequirements:
  - "PlayTime:3600"
  - "travel:1000"
  - "MonsterKills:zombie:10"
  - "MonsterKills:slime:5"
  - "MonsterKills:wolf:5"
  - "AccountAge:1209600"
  Branch1Rank1:
    Enabled: true
    DisplayName: "&2Branch1Rank1"
    DefaultRank: false
    AutoRankup: true
    RankupConfirmation: false
    PermissionRequirement:
  - "cmi.command.heal:Heal"
      NextRanks:
  - Last
      MoneyCost: 300
        ExpCost: 350
        Commands:
  - "broadcast! &6[playerDisplayName] &eleveled up to Branch1Rank1 rank!"
      CommandsOnRankDown:
  - "broadcast! &6[playerDisplayName] &eleveled down to Branch1 rank!"
      StatsRequirements:
  - "travel:10000"
  - "blocksmined:3000"
  - "blocksmined:diamond_ore:30"
  - "MonsterKills:1000"
  - "AccountAge:1209600"
      McMMORequirement:
  - "taming:10"
  - "unarmed:30"
  Branch2:
    Enabled: true
    DisplayName: "&2Branch2"
    AutoRankup: true
    RankupConfirmation: true
    MoneyCost: 150
    NextRanks:
  - Branch2Rank1
      Commands:
  - "broadcast! &6[playerDisplayName] &eleveled up to Branch2 rank!"
      PermissionRequirement:
  - "cmi.command.tp:Teleport"
      StatsRequirements:
  - "PlayTime:3600"
  - "travel:2000"
  - "MonsterKills:zombie:15"
  - "MonsterKills:slime:10"
  Branch2Rank1:
    Enabled: true
    DisplayName: "&2Branch2Rank1"
    AutoRankup: true
    RankupConfirmation: false
    MoneyCost: 100
    ExpCost: 150
    NextRanks:
  - Branch2Rank2
      Commands:
  - "broadcast! &6[playerDisplayName] &eleveled up to Branch1Rank1 rank!"
      StatsRequirements:
  - "PlayTime:4600"
  - "Swim:1000"
  - "SneakTime:180"
  - "MonsterKills:100"
  Branch2Rank2:
    Enabled: true
    DisplayName: "&2Branch2Rank2"
    AutoRankup: true
    RankupConfirmation: false
    MoneyCost: 100
    ExpCost: 150
    NextRanks:
  - Last
      Commands:
  - "broadcast! &6[playerDisplayName] &eleveled up to Branch2Rank2 rank!"
      StatsRequirements:
  - "walk:15000"
  - "HorseTravel:1000"
  - "ItemsUsed:10000"
  - "PlayerKills:10"
  Last:
    Enabled: true
    DisplayName: "&2Last"
    AutoRankup: true
    StatsRequirements:
  - "PlayTime:21600"
  - "walk:30000"
  - "MonsterKills:1000"
  - "blocksmined:30000"
      Commands:
  - "broadcast! &6[playerDisplayName] &eleveled up to Last rank!"
  - "cmi heal [playerName]"
  - "money give [playerName] 100"
```

---

## 礼包 | Kits

**_1.Kits 功能可以干啥?_**

- **启用/禁用**某个礼包
- 给礼包添加物品. (最底为物品栏内的物品).
- 为护甲槽添加物品.
- 为副手添加物品.
- 直接 **克隆**你背包内的物品为礼包物品.

物品名或者 Lore 包含**&#123;USERNAME&#125; &#123;DISPLAYNAME&#125; &#123;KITNAME&#125; &#123;WORLDNAME&#125;&#123;RANDOMPLAYER&#125;**变量时, 在玩家领取礼包时会自动替换为合适的值.

**_2. 怎样创建一个礼包?_**

- 首先执行下面命令然后 直接跳到 5 步:

```
/cmi kiteditor new [礼包名]
```

- **如果你想通过聊天栏创建礼包, 执行下面命令:**

```
/cmi kiteditor
```

- 点击绿色的 + 号来创建一个礼包.
- 现在将提示你输入礼包名 (不用担心, 你以后可以修改它).
- 输入礼包名称后, 你现在可以修改礼包内容，如下面几节所示.

**_3. 如何编辑礼包的高级设置?_**

如果要修改礼包设置, 点击名叫**设置(settings)**的工作台按钮. 它将打开另一个可以编辑的 GUI:

- 以 “**延迟时间(Delay)**” 的形式编辑 **冷却时间(cool-down)**.

- 编辑礼包的**名字**(包括本地显示和配置文件中) 和 **礼包介绍**.

- 礼包的**组**和 **组权重**.

  - 玩家将会获得 **礼包组内最高权重礼包**的领取权限.
  - **请注意**: CMI 将会自动从用户拥有的权限中收集权重信息.\
    你所要做的就是让用户拥有你希望他们有权领取的礼包的权限.\
    CMI 将会通过 **将礼包组权重与权限节点进行比较**自动确定玩家可以使用哪个礼包

- 当礼包 **可用/不可用**时在 GUI 内显示的图标.

- 购买礼包花费的 **经验值/金币**.

- 使用/kit 命令时礼包在 GUI 中显示的**位置(槽位)**.

- 当领取礼包时执行的

- 领取礼包需要的**条件**.

**_4. 常见问题解答:_**

- 为什么我看不到礼包?

  - 检查你是否已给予玩家正确的权限, 可用权限如第 5 节所示.
  - 确定礼包已启用, GUI 的右上方是绿色的彩色玻璃板吗?

- 我怎么打开礼包编辑器?

  - 执行**/cmi kiteditor**并单击要编辑的礼包.

- 如何设置组权重?

  - 首先, 打开礼包设置
  - 点击 礼包组**(Kit group)**
  - 然后, 系统将提示你在聊天栏中输入礼包组名.
  - 完成此操作后, 该礼包将位于您指定的组中.
  - 要向此组添加其他工具包, 重复此过程.
  - 改变礼包的权重, 在设置 GUI 中找到 **礼包组权重(Group Weight)**(有关权重如何运作的信息, 请参阅第 3 节)\*\*\*\*

**_5. 权限节点:_**

- **cmi.kit.\[礼包名]**– 允许领取指定的礼包
- **cmi.kit.bypass.exp**– 无视礼包的经验值需求
- **cmi.kit.bypass.money**– 无视礼包的金币需求
- **cmi.kit.bypass.time**– 无视礼包的冷却时间

对于大部分指令来说，玩家的在线状态对指令并没有影响\
**\[] – 必须**\
**() – 可选**有一些指令会有附加信息，包括但不限于当使用 ?标识的权限节点，例如**/cmi alert ?**会显示需要的权限节点与用法。\
有一些指令会有特殊变量**-s**，用来防止输入指令后会会有消息输出，如果你需要的话你可以使用。需要权限**cmi.command.silent**。
## 权限节点

## A

/cmi actionbarmsg \[玩家名] \[消息] – 对指定的玩家显示 Actionbar 消息

/cmi afk (玩家名) (原因) – 切换 Afk(挂机)模式

/cmi afkcheck (玩家名) – 查看玩家 Afk 状态

/cmi air \[玩家名] (数量) (-s) – 显示玩家潜水状态所剩的氧气或将其改为特定的数量

/cmi alert \[玩家名] (原因) – 对指定玩家设置警报消息，在拥有指定权限的玩家上线时可以看到警报。

/cmi aliaseditor (新指令) (原指令) 显示所有激活的自定义指令并允许你添加或删除指令

/cmi armorstand (last) – 面向盔甲架并打开盔甲架编辑，如果在指令最后添加 last 将会显示上一个编辑的盔甲架。

/cmi attachcommand (指令) – 为你手上的物品添加指令。指令会一直保存在物品中。

## B

/cmi back (玩家名) (-s) – 传送到原坐标点。如果玩家名被填写，将会将指定玩家送回原坐标点。需要权限。

/cmi balance (金钱) – 检查金钱数量

/cmi baltop (金钱) – 查看金钱排行/cmi ban \[玩家名] (原因) (-s) – 封禁玩家

/cmi blockcycling (forward/backward) – 当方块被放置的时候循环扔出所有可能的方块状态

/cmi blockinfo – 显示方块信息，包括真实名字

/cmi blocknbt – 显示方块 NBT 信息

/cmi book \[Author(作者)/Title(标题)/Unlock(解锁)] \[内容] – 允许编辑已经锁定的书

/cmi bossbarmsg \[玩家名/all] (-t:\[时长]) (-n:名称/ID) (-p:\[最大值/当前值]) (-c:\[颜色]) \[消息] 发送 Boss 血条消息

\[玩家名/all(所有玩家)] 用于发送给一个或全部在线玩家 Boss 血条信息，（-t:\[timeToKeepFor]）定义了 Boss 血条信息持续的时间，格式为 5m = 5 分钟，以此类推。或你可以直接使用-t:5 来保持 5 秒钟。如果时间没有被定义，则默认 3 秒钟。(-n:nameOfBar) 定义了 Boss 血条的名称，不要和文本搞混了。这个是作为 Boss 血条 ID 并可以为任何的字符。为什么需要呢？如果你不想要重复输入同样的东西，你可以使用这个名称 ID 然后可以发送之前保存的文本。(-p:\[最大值/当前值]) 定义了血条所剩的血量，例如-p:50/100 则是保留 50%也就是一半的血量。Boss 血条支持 PlaceHolderAPI 变量动态更新, 像在线人数数量等。-p::%server_max_players%/%server_online%记住占位符一般会返回数字数值。(-c:\[颜色]) 决定了血条的颜色: red(红色),green(绿色), pink(粉色), purple(紫色), white(白色), yellow(黄色) \[消息] 自行摸索\
/cmi broadcast \[消息] – 发送广播消息。如果广播消息由“!”开始，则前缀失效。\
/cmi burn (玩家名) (时长) (-s) – 燃烧一个玩家

## C

/cmi charges (玩家名) \[add/set/take/clear/reset] (-f) – 允许查看当前刷怪笼的充能状态，如果拥有权限 cmi.command.charges.edit 将可以编辑刷怪笼

/cmi chat \[玩家名/off] – 开始或关闭聊天模式

/cmi checkaccount (玩家名/ip) – 查看玩家或 IP 拥有的账号数量。

/cmi checkban (玩家名) – 检查被封禁的玩家

/cmi checkcommand (关键词) – 靠关键词寻找指定命令

/cmi checkexp (玩家名) – 检查玩家的等级与经验

/cmi checkperm (关键词) – 显示整个权限列表或者使用关键词寻找相关的权限

/cmi cheque (玩家名) \[数量] – 拿取定义的金钱并创建定义金额的纸质支票。如果玩家名呗填写并且指令执行者拥有 cmi.command.cheque.admin 权限则执行者不会被扣除金钱

/cmi clear (玩家名) (-s) – 清除玩家的背包

/cmi clearchat (self) – 清屏。如果你在指令末端添加 self 的话就只有你的聊天版会被清理。cmi.comnmad.clearchat.bypassClears 会防止屏幕清理。

/cmi clearender (玩家名) (-s) – 清除玩家末影箱.

/cmi colorlimits (玩家名) – 显示玩家聊天/昵称不可使用的颜色代码

/cmi colors (玩家名) – 显示所有颜色代码

/cmi commandspy (玩家名) – 切换指令间谍模式(查看指定玩家使用过的指令)

/cmi compass \[玩家名] (目标名) (x) (z) (世界名) (-s) – 设置指南针目标来标注玩家的位置或世界内指定的位置。例如: /cmicompass Zhax, /cmi compass Zrips Zhax, /cmi compass LT_Craft 0 0 Zrips -s

/cmi condense (物品名) – 压缩物品成一个更加紧实的形式

/cmi counter \[join/leave/start] (t:时间) (r:范围) (msg:自定义消息) (c:\[world:x:y:z]) (-f) – 管理计数功能。允许对使用/cmicounter join 加入奇数骑玩家显示倒计时或使用-f 来强制所有在范围内的玩家。例如: /cmi counter t:5 r:50 -fc:Lt_craft:0:120:0

/cmi cplaytime (玩家名) – 打开 GUI 界面查看更加详细的玩家游戏时间信息

/cmi ctext (cTextName) – 显示所有或部分自定义信息

/cmi cuff \[玩家名] – 检查嫌疑玩家的活动。可以被 cmi.command.cuff.bypass 防止

/cmi customrecipe – 打开 GUI 允许你创建自己的工作台/熔炉配方，需要权限(cmi.command.customrecipe)??

## D

/cmi dback (玩家名) (-s) – 回到上次死亡点，需要指定权限

/cmi disableenchant – 打开 GUI 关闭任何的附魔

/cmi dispose (玩家名) – 打开垃圾桶

/cmi dsign (new) – 创建一个新的动态告示牌或打开已存在的告示牌显示编辑器

/cmi dye (玩家名) (red,gree,blue/hexCode/colorName/random/clear/rainbow/biome/health/day) (-s) – 修改皮革装备的颜色

## E

/cmi editctext – 显示所有已创建的自定义文本并可以添加/移除/编辑自定义文本

/cmi editplaytime (玩家名) \[add/take/set] \[amount] (-s) – 编辑玩家的游玩时间

/cmi editwarnings (玩家名/clearall) (clear) – 管理特定/所有玩家的警告信息

/cmi editwarp \[地标名] – 打开地标编辑菜单/cmi effect \[玩家名] \[效果/clear] (时长) (等级) – 为玩家添加/清除药水效果

/cmi enchant (玩家名) \[附魔名] \[登记] (-o) (-onlyvalid) (-inform) (-s) (-i:\[物品 ID:子 ID]) – 为手中的物品附魔指定等级与条目的附魔。-o 允许附魔物品为副手物品-onlyvalid 会查物品是否适合该附魔-inform 会对被附魔道具的玩家发送消息. -i:\[itemName:data] 会限制指定物品的附魔数量

/cmi ender (玩家名) – O 打开末影箱或查看其它玩家的末影箱。你需要 cmi.enderedit 权限节点才能查看与编辑其他玩家的末影箱

/cmi entityinfo – 检查玩家面对的生物的信息/cmi entitynbt – 检查玩家面对的生物的 NBT 信息/cmi exp (玩家名) \[add/set/take/clear] \[数量] (-s) – 编辑玩家的经验点数 例如: /exp 10, /exp add 10, /exp set 10L,/exp take 10, /exp Zrips clear, /exp Zrips add 10

/cmi ext (玩家名) (-s) – 惩罚一个玩家

## F

/cmi feed (玩家名) – 将玩家饱食度调满

/cmi fixchunk w \[世界名] r \[范围] c \[x:z] – 尝试寻找损坏的模块并修复他们。例子：/fixchunk w LT_Craft, /fixchunk wLT_Craft r 50 c 1024:-2048, /fixchunk w LT_Craft r g, /fixchunk fix

/cmi flightcharge (add/take/set/show/expcharge/moneycharge/recharge) (玩家名) (数量) – 操作玩家的飞行蓄力。重新蓄力可使用/recharge。检查蓄力氪使用/fcharge

/cmi fly (玩家名) (true/false) – 切换飞行模式

/cmi flyspeed (玩家名) \[amount] (-s) – 修改飞行速度(0-10)

## G

/cmi getbook \[cText] (玩家名) – 切换自定义问道到梳理并将书给予目标玩家

/cmi give (玩家名) \[物品名] (数量) – 给玩家指定的物品。特殊标签可以被使用。

/cmi giveall \[物品名] (数量) (e|l|n|offline) – 给所有的在线/离线玩家指定的物品

/cmi glow (玩家名) \[true/false/color] (-s) –设置玩家的发光状态，例如: /glow Zrips red 权限: cmi.command.glow.\[颜色] –允许设置特定的颜色

/cmi gm \[玩家名] \[游戏模式] (-s) – 修改玩家的游戏模式

/cmi god \[玩家名] (true/false) (-s) – 切换玩家的无敌状态

/cmi groundclean (+cb) (+cm) (+ci) (+b) – 移除所有的掉落物

## H

/cmi haspermission (玩家名) \[权限节点] – 显示玩家是否有目标权限

/cmi hat (玩家名) (-s) – 将手上的物品放置到头上

/cmi head \[资源名] (目标名) (-s) – 创建一个目标玩家皮肤的头颅

/cmi heal (玩家名) (healamount/healpercent) (-s) – 治疗玩家到满血/指定血量/百分比。例如/cmi heal zrips, /cmi healzrips 10, /cmi heal zrips 10%

/cmi helpop \[消息] – 发送消息到帮助频道，任何拥有 cmi.command.helpop.inform 权限的玩家会看见消息

/cmi hideflags (玩家名) \[flag 属性/clear] – 隐藏定义物品的旗帜 Flag 或清除 flag。例子/cmi hideflags Zrips hide_placed_on

/cmi hologram (new) – 显示所有创建的全息字或创建一个新的全息字

/cmi home (名称) (玩家名) – 传送到家里

/cmi homes (玩家名) – 查看所有的家

/cmi hunger \[玩家名] \[数量] (-s) – 设置玩家饥饿值

## I

/cmi ic (new) (名称) – 创建一个可点击的方块或生物

/cmi ifoffline \[玩家名] (指令) – 如果玩家不在线的话，运行此指令

/cmi ifonline \[玩家名] (指令) – 如果玩家在线的话，运行此指令

/cmi ignore (玩家名/uuid/all) – 将玩家添加到你的黑名单内

/cmi importfrom \[essentials] \[home/warp/nick/logoutlocation/money]- 导入 Essential 中的用户数据达到 CMI 中。可重复使用。

/cmi importoldusers – 从 playerdata 文件中导入玩家信息

/cmi info \[玩家名/uuid] – 显示玩家的详细信息。需要 cmi.command.info.ip 权限查看玩家 IP. 查看玩家所在国家你需要这个文件放入到你的 CMI 文件夹内/cmi inv \[玩家名] – 打开玩家的物品背包。需要 Cmi.invedit 权限才能编辑玩家的背包 cmi.buttonteleport 权限可以点击 GUI 内的按钮传送到玩家身边

/cmi invcheck (玩家名) \[id] (-e) – 检查保存的背包。-e 决定了是否可以编辑背包。需要 cmi.command.invcheck.edit 权限使用

/cmi invlist (玩家名) – 显示所有已记录的背包信息

/cmi invload (sourceName) (targetName) \[id/last] – 载入一个背包的记录到指定玩家上

/cmi invremove (玩家名) \[id/all/last] – 移除一个/全部/最后一个记录的背包

/cmi invremoveall \[confirmed] – 移除所有已记录的背包

/cmi invsave (玩家名) (-s) – 记录玩家的背包

/cmi ipban \[ip/玩家名] (原因) (-s) – 封禁玩家 IP。同时也会封禁填写的玩家名。如果填写了 IP 则禁止玩家使用这个 IP 访问游戏

/cmi ipbanlist – 查看所有被封禁的 ip 和相关的账号

/cmi iteminfo (玩家名) – 显示手中物品信息

/cmi itemlore (玩家名) \[行数] \[remove/insert/new lore line] – 管理物品描述

/cmi itemname (玩家名) \[remove/新物品名称]- 管理物品名称

/cmi itemnbt (玩家名) – 显示所有物品的 NBT 标签

## J

/cmi jail \[玩家名] (时间) (监狱名) (监狱房间 ID) (r:原因) – 将玩家送进监狱。时间格式 5s = 5 秒, 5m = 5 分钟, 5h = 5 小时, 5d = 5 天

/cmi jailedit -编辑监狱

/cmi jump – 跳跃到你看着的位置

## K

/cmi kick \[玩家名/all] (消息) (-s) – 将玩家提出服务器

/cmi killall (-monsters/-pets/-npc/-animals/-ambient/-named/-f/-lightning/-list/\[mobType]) (range) (-s) – 击杀所有世界/范围内的特定生物。更多信息请查看 WIKI 页面

/cmi kit (礼包名) (玩家名) – 显示所有/指定的礼包

/cmi kitcdreset (礼包名) (玩家名) – 允许重置礼包的冷却时间/cmi kiteditor – 打开礼包编辑器。可以在游戏内编辑任何的礼包。

## L

/cmi lastonline \[timeRange/list/stop] \[页数] – 显示最后一个在指定时间登录游戏的玩家。包括现在在线的玩家

/cmi launch (玩家名) (p:\[能量]) (a:\[角度]) (d:\[方向])- 将玩家推送指定的地方

/cmi lfix (范围) (玩家名) – 修复玩家周围的光源错误

/cmi list – 显示在线玩家，使用权限排序

/cmi lockip \[玩家] \[add/remove/list/clear] \[ip] – 防止玩家从另外一个 IP 登录账号

## M

/cmi mail \[send/clear/read] \[玩家名] (消息) – 发送/编辑一个邮件

/cmi mailall \[send/clear/remove] \[message] – 对所有 7 天内登录过得玩家发送右键（可配置）

/cmi maintenance (消息) – 使服务器进入维修模式并防止无 cmi.command.maintenance.bypass 权限的玩家加入游戏，显示在加入时默认或自定义的提示消息。可使用 PlaceHolderAPI 变量

/cmi maxhp \[set/add/take/clear] \[玩家名] \[数量] (-s) – 管理玩家的生命上限/cmi maxplayer \[数量] – 修改服务器最大人数，无需重启

/cmi me \[消息] – 发送公告类消息. 需要 cmi.me.colors 来添加颜色代码

/cmi merchant \[type] \[玩家名] – 打开一个被定义的商人的 GUI 进行交易

/cmi migratedatabase – 修改数据库类型，从 SqLite 到 MySQL 或 vice versa.

/cmi mirror (start/stop) – 打开 GUI 设置防止方块的镜像

/cmi money \[pay/set/give/take] \[玩家名/all/alloffline] \[数量] – 允许修改玩家的金钱. 设置/给予/拿走和 all(所有)需要 cmi.command.money.admin 权限节点?

/cmi more (玩家名) (-clone/\[数量]) – 翻倍物品最大叠加数，定义一个物品最多可以在一格背包内叠加多少个。

/cmi msg \[玩家名] \[消息/!-消息!] – 发送私人消息给目标玩家。如果消息由“！”开始则清晰地消息会被现实。发送者需要 cmi.command.msg.clean 才能使用“!”.

/cmi msgtoggle (玩家名) – 切换私人消息模式。可以使用 cmi.command.msg.togglebypass 权限无视此功能。

/cmi mute \[玩家名] (时长) (原因) (-s) – 禁言指定玩家，防止玩家在一定时间内发送公共消息。如果没写填写时长则默认 1 小时。权限 cmi.command.mute.bypass 可以无视禁言限制

/cmi mutechat (时长) (-s) – 禁言所有玩家，如果没有定义时长则默认 1 小时。需要 cmi.command.mutechat.bypass 无视禁言限制

## N

/cmi nameplate (玩家名) (-pref:\[前缀]) (-suf:\[后缀]) – 修改/添加玩家的前缀与后缀

/cmi near (距离) – 显示离你较近的玩家

/cmi nick \[newNickName] (玩家名) – 修改玩家的昵称。使用 Off 可以关闭昵称

/cmi notarget (玩家名) (true/false) (-s) –开启后怪物不会攻击你/cmi note (玩家名) \[add/remove/clear/list] (id/note) – 添加给其他玩家添加标签

## O

/cmi oplist – 查看所有有 OP 权限的玩家

## P

/cmi patrol – 传送到下一个在列表中等待检查的玩家

/cmi ping (玩家名) – 显示玩家帧数 Ping

/cmi placeholders (parse) (变量) – 显示所有可用的 PlaceholderAPI 变量/CMI 内置变量。可以显示部分的变量并了解变量的出处/cmi playtime (玩家名) – 显示玩家游玩时间

/cmi playtimetop – 显示玩家游玩时间排行榜

/cmi playercollision (玩家名) \[true/false] – 开启/关闭物体碰撞体积

/cmi point (粒子效果) (玩家名) (-self) (时间) (-s:\[速度]) – 画一条线到玩家所看的方块并默认标记方块 5 秒钟。“玩家名”节点定义了对应的玩家所看的方块。“时间”节点决定了标记方块的时长。-s 决定了粒子的速度

/cmi portals (new/nearest) (传送门名) – 显示所有的已创建传送门，并可以新建一个传送门/cmi pos (玩家名) – 显示玩家当前的坐标，世界，灯光等级与合理的地狱世界坐标

/cmi preview \[范围] (内部范围) – 加载玩家周围的模块，可以加载最大 32 的范围的模块

/cmi ptime (time/playername/Freeze/unfreeze/realtime/reset) \[time] – 修改玩家的个人时间或定义一个

/cmi purge – 根据离线时长清除玩家数据

/cmi pweather (玩家名) \[sun/rain/reset] – 设置个人的天气

## R

/cmi rankdown (阶级) (confirm) – 将玩家降阶

/cmi rankinfo (阶级) – 显示指定的阶级信息

/cmi ranklist – prints out all possible ranks

/cmi rankset (玩家名) \[阶级] (-cmd) (-cost) – 设置玩家的阶级。-cost 会扣除玩家的金钱，经验或物品。玩家如果没有足够的材料，他仍然可以升到你设置的阶级. -cmd 会设置设置阶级会执行的指令.

/cmi rankup (阶级) (confirm) – 升阶到下一个阶级或被定义的阶级

/cmi realname (玩家名/昵称) – 查看玩家的真实用户名/cmi recipe (物品名) – 显示手中物品/提供物品的配方。可设置点击配方列表 GUI 任何物品显示其配方

/cmi reload – 重载配置文件

/cmi removehome (家名称) (玩家名) – 移除玩家的家

/cmi removeuser \[uuid/duplicates] – 从数据库中移除特定 uuid 或玩家

/cmi removewarp (地标名) – 移除地标点

/cmi repair (玩家名) \[hand/armor/all] – 修复物品

/cmi repaircost (玩家名) \[数量] – 设置修复物品所需的金币

/cmi replaceblock id \[方块 ID:子 ID] \[方块 ID:子 ID] r \[范围] y \[最高高度] – 替换范围内的方块

/cmi reply \[消息] – 回复最后一个给你发消息的玩家/cmi ride – 允许你骑在你看着的生物上。需要 cmi.command.ride.\[生物名] 权限节点. 你无法控制生物的走向如果生物没有被驯服

/cmi rt (玩家名) (世界名) – 传送玩家到一个随机地点

## S

/cmi saturation (玩家名) \[数量] – 设置玩家的饥饿值

/cmi saveall (时间范围) – 保存所有玩家的装备. 离线玩家也在内.

/cmi saveditems \[save/get/remove/list] (保存物品名称) (-t: 玩家名) (-s) – 保存物品到配置文件中/cmi sc – 开始告示牌复制进程

/cmi scan – 扫描一个定义的范围或全地图来寻找特定的物品

/cmi schedule \[目标名] – 触发目标/cmi se \[行数] \[文本] – 设置告示牌内容

/cmi search – 在所有玩家的背包/末影箱/玩家账户中搜索指定的物品或者\*\*player state\*\*

/cmi seen \[玩家名/uuid] – 查看玩家最近登录时间

/cmi sell (all/blocks/Hand/gui/same) – 出售手中物品/整个背包的物品/仅可出售的方块

/cmi sendall \[子服名] – 发送所有在线玩家到指定子服. 可以通过 cmi.command.sendall.bypass 权限节点忽略传送.

/cmi server \[子服名] (玩家名) – 通过跨服网络传送自身或者指定玩家到指定子服

/cmi servertime – 显示包括时区信息的服务器时间

/cmi setfirstspawn (玩家名) – 设置自身或者指定玩家的首次重生点

/cmi sethome (Home 名) (玩家名) – 设置自身或指定玩家的 Home 位置, 如果不指定 Home 名即设置为默认 Home. 为其他玩家设置 Home 位置时, 必须指定 Home 名.

/cmi setmotd \[新 Motd] – 不需要重启就可以为服务器设置新的 MOTD. 使用 Tab 键来获取当前的 MOTD.

/cmi setspawn (玩家名) (true/false) (-g:\[组名]) (-rng:\[半径]) – 设置自身或指定玩家的出生点. 如果参数填 true, 那么此位置将被设置为死亡后的重生点.

/cmi setwarp \[地标名] (权限节点要求(true/false) (hand) (slot) (autoLore) – 创建地标. 所有可选变参数可以在此后通过地标点 GUI 编辑器修改. 如果填入 Hand 参数, 手中的物品将会在地标点 GUI 中作为此地标点的显示物品. 如果权限节点要求参数填入 ture, 那么玩家需要 cmi.command.warp.\[地标名] 权限节点来传送. 如果填入格位参数(1-54), 那么此地标将在地标点 GUI 中的指定位置显示.

/cmi setworth – 打开一个可以设置物品出售/购买价格的 GUI.

/cmi (物品英文 ID) \[价格] – 设置一个物品在 sell 命令中的价格

/cmi shakeitoff – 将所有附身于你的观察者弹出你的身体.

/cmi shoot (玩家名) (-t:目标玩家) (种类) (速度) – 射出子弹. -t 可以指定射击目标通常使用潜影贝子弹, 可以在不朝向目标玩家时射击对方.

/cmi signspy (玩家名) – 开关牌子间谍模式. 此功能将会在玩家创建牌子时反馈给你牌子内容和位置.

/cmi silence (one/off) – 阻止玩家收到任何提示信息.

/cmi silentchest – 开关静音开箱模式.

/cmi sit – 原地坐下.

/cmi skin \[皮肤名/off/update] (玩家名) – 改变玩家皮肤. Update 参数将会从 Mojang 拉去最新皮肤信息.

/cmi smite (玩家名) – 重击(Smite)你看向的方块或玩家.

/cmi socialspy (玩家名) – 开关全局间谍(social spy)模式.

/cmi sound \[声音] (-p:\[音调]) (-v:\[音量]) (玩家名) (世界) (x) (z) – 向指定玩家或位置播放声音.

/cmi spawn (玩家名) – 传送自身或者指定玩家到出生点.

/cmi spawner (实体种类) – 设置刷怪笼为指定种类. 如果未指定种类, 将会打开一个可以选择实体种类的 GUI. 玩家需要 cmi.command.spawner.\[实体种类] 权限节点来更改为指定类型.

/cmi spawnmob – 根据实体种类或者额外参数来生成怪物.

/cmi staffmsg \[消息] – 将会向管理员频道发送信息并且只有可以运行此指令的人才可收到信息.

/cmi staffchat \[消息/toggle/on/off] – 主动开关管理员聊天模式, 在管理员聊天模式下允许你向公共频道发送信息.

/cmi stats (玩家名) – 显示玩家的完整统计信息.

/cmi statsedit (玩家名) \[add/take/set\\]\[统计信息] (子分类) \[数值] (-s) – 编辑玩家的统计信息.

/cmi status – 显示服务器实时状态.

/cmi sudo \[玩家名] (command/c:\[命令]) – 强制玩家执行指定命令或者在公屏发送信息.

/cmi suicide (玩家名) (-s) – 自杀或令其他人自杀

## T

/cmi tablistupdate (玩家名) – 强制更新所有/指定玩家的 TAB 列表

/cmi tagtoggle (玩家名) – 开/关公共聊天音效标签

/cmi tempban \[玩家名] \[时长/秒] (原因) (-s) – 限时封禁玩家

/cmi tempipban \[ip/玩家名] \[时长] (原因) (-s) – 显示封禁 IP。玩家名被提供则一起封禁。如果只有 IP 被提供则封禁 IP。时长格式: 5s – 5 秒, 5m – 5 分种, 5h – 5 小时, 5d – 5 天?

/cmi tfly \[玩家名] (时长/秒) (-s) – 设置玩家在一定时间内可以飞行.

/cmi tgod \[玩家名] (时长/秒) (-s) – 设置玩家在一定时间内可以无敌

/cmi time (time/add/take/freeze/unfreeze/realtime/autorealtime) \[时间] \[world/all] 修改世界时间

/cmi titlemsg \[玩家名/all] \[title %subtitle% subtitle] – 对玩家发送标题类消息

/cmi toggleshiftedit – 开/关 Shift 编辑告示牌

/cmi toggletotem – 开/关图腾 Boss 血条冷却显示

/cmi top (玩家名) (-s) – 传送玩家到他所在的位置的最高点

/cmi tp \[玩家名] (玩家名) – 传送玩家到其他玩家/指定的点

/cmi tpa \[玩家名] (-c) – 发送传送申请给目标玩家并传送到目标玩家所在的位置。-c 会决定你传送到目标玩家在收到申请时的坐标还是准备传送时的目标。需要权限 cmi.teleport.currentlocation 使用-c

/cmi tpaall – 对所有玩家发起传送到你所在的位置的申请

/cmi tpaccept (玩家名) – 接受传送申请

/cmi tpahere \[玩家名] (-c) – 发送传送申请给目标玩家让目标玩家传送到你所在的位置。-c 会决定你传送到目标玩家在收到申请时的坐标还是准备传送时的目标。需要权限 cmi.teleport.currentlocation 使用-c

/cmi tpall (玩家名) – 传送所有的在线玩家到你的或指定玩家的位置

/cmi tpallworld \[世界名] – 传送所有玩家到一个特定的世界，包括离线的玩家/cmi tpbypass (用户名) – 开/关安全传送保护模式/cmi tpdeny (玩家名) – 拒绝传送申请

/cmi tphere \[玩家名] (玩家名) – 传送玩家到你的身边

/cmi tpo \[玩家名] (玩家名) – 会忽略任何第三方组队插件保护并甚至不检查安全地点，直接将玩家传送到目标玩家的位置.

/cmi tpohere \[玩家名] (玩家名) – 会忽略任何第三方组队插件保护并甚至不检查安全地点，直接将目标玩家传送到操作玩家所在的位置的位置

/cmi tppos (玩家名) \[x] \[y] \[z] (world) (pitch) (yaw) (-rng:\[range]) (-s) – 传送万家到一个特定的点。如果-rng 被定义，则玩家会被传送到范围内的随机一个点/cmi tps – 显示服务器 TPS

/cmi tptoggle (玩家名) – 切换玩家的传送状态，是否可以传送

/cmi tree (树类型) – 在你看的地方生成一棵树

## U

/cmi unban (玩家名/ip) – 解除封禁一个玩家/IP

/cmi unbreakable (玩家名) (true/false) – 使物品变得无法破坏（无限耐久/cmi uncondense (itemName) –转换方块到初始状态

/cmi unjail \[玩家名] – 将玩家释放出监狱

/cmi unloadchunks (-f) – 尽量卸载最多的模块来优化服务器内存。添加-f 会时操作一次性全部完成，然而正常会缓慢操作来防止卡顿

/cmi usermeta \[玩家名] \[add/remove/clear/list/increment] (key) (value) (-s)- 使用占位符的帮助来设置玩家显示自定义 meta。支持 PlaceholderAPI。%cmiuser_meta\[key]%增量可以改变数字的数值。例如/cmi usermeta Zrips incrementcounting +0.5 会有 0.5 的答案，当执行第二次时则变为 1，负数同样也可以使用来扣除数值

/cmi unmute \[玩家名] (-s) – 为目标玩家解除禁言/cmi util removeseats – 移除所有出错的隐形盔甲架

## V

/cmi vanish (玩家名/list(显示所有隐身玩家)) (on/off) – 将玩家设置为隐藏状态或查看所有隐身中的玩家

/cmi vanishedit (玩家名) – 打开隐身模式编辑器

/cmi version – 显示插件版本。主要用于反馈错误。

/cmi viewrange \[距离] (玩家名) – 设置目标玩家的可视距离。需要 ProtocolLib 作为前置

/cmi voteedit \[玩家名] \[add/set/take/clear] \[数量] (-s) – 调整玩家投票数量

/cmi votes (玩家名) – 查看自己或指定玩家的投票次数/cmi votetop (玩家名) – 查看投票次数排行

## W

/cmi walkspeed (玩家名) \[数量] – 设置玩家的行走速度

/cmi warn \[玩家名] (类型) (原因) (-s) 警告玩家，所有拥有特定权限的管理员都能看到警告

/cmi warnings (玩家名) – 显示所有被警告的玩家的警告时间和过期时间

/cmi warp (地标名) (玩家名) – 传送到一个指定的地标，若没填地标名则会显示传送菜单

/cmi weather (sun/rain/storm) (lock(锁定)/时长) (世界名/all) – 设置一个世界/所有世界的天气

/cmi whowas \[玩家名] – 显示玩家曾经使用过的用户名

/cmi workbench (玩家名) – 打开远程工作台

/cmi world (normal/nether/end/1/2/3…) (玩家名) (-s) – 传送到指定的世界

/cmi worth (all/blocks/hand) – 显示你的物品的价格
