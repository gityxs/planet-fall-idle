/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "collect biomass": "收集生物质",
    "landing zone": "着陆区",
    "options": "选项",
    "biomass": "生物质",
    "cost": "成本",
    "harvest arboraceous xenoflora": "收获木本异种植物",
    "output": "输出",
    "resources": "资源",
    "second": "秒",
    "*no power, progress stalled": "*没有电力，进度停滞",
    "change research target": "更改研究目标",
    "databanks": "数据库",
    "generate electrical potential from exothermic, self-perpetuating reaction": "从放热的、自我延续的反应中产生电力",
    "of": "/",
    "pause research": "暂停研究",
    "power": "电力",
    "power while active": "动力当激活时",
    "run generator": "运行发电机",
    "s": "",
    "subject to heat and pressure, biomass becomes an arboraceous material suitable for construction": "受热和压力的影响，生物质变成了一种适合建筑的树状材料",
    "the ship wants power. it says it can help.": "这艘船需要电力。 它说它可以提供帮助。",
    "to what end should ship turn its contemplation?": "飞船应该把目光转向什么目的？",
    "demand": "要求",
    "lumber": "木材",
    "production": "生产",
    "research complete": "研究完成",
    "rudimentary applied xenobotany": "初步应用异种植物学",
    "ship": "飞船",
    "storage": "存储",
    "subject biomass to heat and pressure": "使生物质经受热量和压力",
    "compress biomass": "压缩生物质",
    "satisfaction": "满足",
    "copied to clipboard!": "已复制到剪贴板！",
    "export save to clipboard": "导出存档到剪贴板",
    "import save from clipboard": "从剪贴板导入存档",
    "reset game": "重置游戏",
    "a triumph of xenobotany": "异种植物学的胜利",
    "crashed ship": "坠毁的飞船",
    "effects": "效果",
    "ship detects mineral deposits beneath the planet's surface": "飞船探测到行星表面下的矿藏",
    "primitive protection from the elements": "元素的原始保护",
    "outpost": "前哨",
    "nutrients": "营养素",
    "in the wreckage, thousands sleep in suspended animation. ship says it can wake them": "在残骸中，成千上万的人在假死中沉睡。 飞船说它可以唤醒他们",
    "a bulwark against our ruin": "防止我们毁灭的堡垒",
    "alloy": "合金",
    "awaken a worker from suspended animation. may starve if no food available": "将工人从假死状态中唤醒。 如果没有食物可能会饿死",
    "might the ore yield a useful alloy?": "矿石可能会产生有用的合金吗？",
    "ore": "矿石",
    "protection from the elements for one colonist": "保护一名殖民者不受自然因素影响",
    "rock": "石头",
    "facilities for long-term warehousing": "长期仓储设施",
    "delve for a lithoid substance and small quantities of metalliferous ore": "挖掘石质物质和少量金属矿石",
    "colonists": "殖民者",
    "capacity": "容量",
    "sustainable cultivation of arboriform xenoflora": "乔木状异种植物的可持续栽培",
    "/sec": "/s",
    "/s": "/s",
    "uses endothermic reduction to extract a malleable alloy from the ore": "使用吸热还原从矿石中提取可锻合金",
    "arborist": "树艺师",
    "harvests and replants arboriform xenoflora": "收获和重新种植树状异种植物",
    "no new tech": "没有新技术",
    "the ship sleeps": "飞船在沉睡",
    "unassigned": "未分配",
    "°cost is storage-constrained, cannot build": "°成本受存储限制，无法建造",
    "allow the construction of additional generators": "允许建造额外的发电机",
    "delve deeper for useful mineral ores": "深入挖掘有用的矿石",
    "power: +": "电力: +",
    "consumption": "消耗",
    "extract subsurface mineral deposits": "开采地下矿藏",
    "dark mode": "深色模式",
    "changelog": "更新日志",
    "close": "关闭",
    "import failed": "导入失败",
    "base effects": "基础效果",
    "food": "食物",
    "capacity:": "容量：",
    "protection from the elements": "元素保护",
    "sustainably cultivate arboraceous xenoflora": "可持续培育树栖异种植物",
    "with some training in xenobiology, colonists can increase food production": "通过一些外源生物学培训，殖民者可以增加粮食产量",
    "with training in the biology of arboriform xenoflora, colonists can increase tree farm productivity": "通过树形异种植物的生物学培训，殖民者可以提高林场的生产力",
    "collect unharvested waste biomass": "收集未收获的废生物质",
    "gleaners": "拾取者",
    "* operating at": "* 当前 ",
    "% capacity; inputs not satisfied or no storage available": "％ 容量; 输入不满足或没有可用存储",
    "a structure for stockpiling resources": "一个储存资源的结构",
    "ᶜ cost is storage-constrained; will never be affordable": "ᶜ 成本受存储限制； 永远买不起",
    "modifiers": "附加",
    "increase food output of farms": "增加农场的粮食产量",
    "increase tree farm output. speaks for the trees.": "增加林场产量。 为树木说话。",
    "outpost improvements": "前哨改进",
    "ship proposes a means to make lasting improvements to the settlement": "船舶提出了一种对解决方案进行持久改进的方法",
    "with some training in mining geology, colonists can increase mine productivity": "通过一些采矿地质学方面的培训，殖民者可以提高矿山生产力",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    " can modify production": "可以修改生产",
    "add changelogs to options menu": "将变更日志添加到选项菜单",
    "add dark mode to options menu": "将深色模式添加到选项菜单",
    "add upgrade tab": "添加升级选项卡",
    "colonist food consumption shown in colonist tooltip": "殖民者工具提示中显示的殖民者食物消耗",
    "early game rebalance": "早期游戏再平衡",
    "fix: consumption modifiers apply to already-constructed buildings": "修复：消耗修正适用于已建成的建筑物",
    "fix: jobs tab does not overlap resources on very narrow screens": "修复：作业选项卡在非常窄的屏幕上不会与资源重叠",
    "fix: rounding error in storage cap calculation": "修复：存储上限计算中的舍入错误",
    "fix: tab bar scrolls on mobile": "修复：标签栏在移动设备上滚动",
    "more jobs - there's new jobs and new tech for them": "更多的工作——他们有新的工作和新技术",
    "options modal and tech modal restyled on desktop": "选项模式和技术模式在桌面上重新设计",
    "reduce initial cost for cache and dynamo": "降低缓存和发电机的初始成本",
    "save migration system": "保存迁移系统",
    "simplify color scheme / set up theming": "简化配色方案/设置主题",
    "tech tree reorganization": "科技树重组",
    "tooltips show prorated production": "工具提示显示按比例生产",
    "tooltips show why production is constrained": "工具提示显示生产受限的原因",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "biomass compression": "压缩生物质",
    "cultivation": "栽培",
    "compress biomass": "压缩生物质",
    "farm": "农场",
    "habitat": "栖息地",
    "shelter": "庇护所",
    "repair excavator": "修理挖掘机",
    "repair cryosuite": "修理冷冻室",
    "cache": "存储",
    "excavate": "挖掘",
    "matter storage": "物质储存",
    "metallurgy": "冶金学",
    "thaw colonist": "解冻殖民者",
    "agroforestry": "农林业",
    "furnace": "熔炉",
    "jobs": "工作",
    "electromagnetism": "电磁学",
    "dynamo": "发电机2",
    "subsurface mining": "地下开采",
    "mine": "矿井",
    "forestry": "林业",
    "agronomy": "农艺学",
    "arboriculture": "树艺学",
    "tree farm": "林场",
    " base biomass production: +": "基础生物质产量：+",
    " lumber production: +": "木材生产：+",
    " food production: +": "食物生产：+",
    "agronomists": "农学师",
    "arborists": "树艺师",
    "geology": "地质学",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    " food production (gleaners)": "食物生产（拾取者）",
    " lumber production (gleaners)": "木材生产（拾取者）",
    " base biomass production (gleaners)": "基础生物质生产（拾取者）",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+) \/$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);