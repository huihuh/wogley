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
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Sky drill": "天空钻",
    "sky drill": "天空钻",
    "Stone": "石头",
    "Steel": "钢",
    "Limit:": "上限:",
    "mana": "法力",
    "Hold to speed up drill!": "长按可加速钻头！",
    "Gems": "宝石",
    "Gold": "黄金",
    "heat drill": "热力钻",
    "Iron": "铁",
    "Copper": "铜",
    "Costs:": "成本:",
    "coal.": "煤.",
    "Coal": "煤",
    "Carbide": "碳化物",
    "Breaking time left:": "剩余打碎时间：",
    "Brass": "黄铜",
    "(can mine": "(可以开采",
    "(max": "(最大",
    "Disable background": "禁用背景",
    "Enable auto-breaking": "启用自动打碎",
    "Disable auto-breaking": "禁用自动打碎",
    "Enable auto-smelting": "启用自动冶炼",
    "Disable auto-smelting": "禁用自动冶炼",
    "Find some gems to see them!": "找到一些宝石以看到他们!",
    "First reset always gives 3 mana!": "第一次重置总是给3法力值！",
    "gem": "宝石",
    "gain": "获得",
    "Granite": "花岗岩",
    "Gem finding probabilities are independent, so zero finds or multiple finds are possible per break!": "宝石的发现概率是独立的，所以每次发现都可能是零发现或多次发现！",
    "Hard reset": "硬重置",
    "In addition,": "此外,",
    "Large stone breaking": "大型破碎",
    "Mining time left:": "剩余开采时间：",
    "Ores": "矿石",
    "Power drill": "电钻",
    "power drill": "电钻",
    "Probabilities for this drill:": "这个钻头的概率：",
    "Resetting will reset your ores, drills, stone breakers and upgrades, but you will gain": "重置将重置你的矿石，钻头，破碎机和升级，但你将获得",
    "Rose gold": "玫瑰金",
    "Silver": "银",
    "silver": "银",
    "Tin": "锡",
    "Titanide": "钛化物",
    "Titanium": "钛",
    "Unlock": "解锁",
    "Tungsten": "钨",
    "Unlock gems": "解锁宝石",
    "Unlock smeltery": "解锁冶炼厂",
    "/smelt)": "/每次冶炼)",
    "Add 1 mana": "添加 1 法力",
    "Add custom": "添加自定义",
    "Add max mana": "添加最大法力",
    "Anthracite": "无烟煤",
    "Basic stone breaker": "基础碎石机",
    "Bronze": "青铜",
    "Decrease stone breaking time": "减少碎石时间",
    "Electrum": "银金矿",
    "Marble": "大理石",
    "Limit determines the max amount before auto-smelting stops. Set to 0 to disable.": "上限决定自动熔炼停止前的上限。设置为0则禁用。",
    "Multiply": "乘以",
    "ore gain": "矿石增益",
    "ores)": "矿石)",
    "Sandstone": "砂岩",
    "Slate": "板岩",
    "Medium stone breaking": "中型碎石",
    "Small stone breaking": "小型碎石",
    "Small stone breaking - 1-3 gems per find": "小型碎石 - 每次发现 1-3 宝石",
    "Medium stone breaking - 5-15 gems per find": "中型碎石 - 每次发现 5-15 宝石",
    "Large stone breaking - 25-75 gems per find": "大型碎石 - 每次发现 25-75 宝石",
    "stone": "石头",
    "Smelt!": "冶炼！",
    "Time played:": "游戏时长:",
    "Unlock the": "解锁",
    "Upgrade drill power": "升级钻头威力",
    "Upgrade drill speed": "升级钻头速度",
    "Yellow limits": "黄色上限",
    "Zinc": "锌",
    "Aluminium": "铝",
    "Andesite": "安山岩",
    "are endgame limits and will be raised for the next update.": "是终局限制，将在下次更新中提高。",
    "Basalt": "玄武岩",
    "basic drill": "基础钻",
    "Basic drill": "基础钻",
    "Max 2 different gems per break": "每次碎石最多得到2个不同的宝石",
    "Mine an ore to see it!": "开采矿石才能看到它！",
    "Background": "背景色",
    "Text": "文字",
    "Other": "其他",
    "Pin this drill's upgrades": "固定这个钻头的升级",
    "Probabilities for this stone breaker:": "这种破石机的概率：",
    "which can be used to upgrade rocks with mystical powers!": "可以用来升级具有神秘力量的岩石！",
    "Enable background": "启用背景",
    "Lead": "铅",
    "Nickel": "镍",
    "Pyrite": "黄铁矿",
    "Amber": "琥珀",
    "Cinnabar": "朱砂",
    "Bismuth": "铋",
    "Chromium": "铬",
    "Cobalt": "钴",
    "Fluorite": "萤石",
    "Heat drill": "热力钻",
    "Quartz": "石英",
    "(can find": "(可以找到",
    "gems)": "宝石)",
    "Platinum": "铂",
    "Power stone breaker": "动力碎石机",
    "tier": "层阶",
    "Fluorite,": "萤石，",
    "Found:": "发现:",
    "No gems found...": "没有发现宝石…",
    "": "",
    "Manganese": "锰",
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
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
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
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",

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
    'i': 'i',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
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
    "  ": " ",
    " ": " ",
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
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Break stone - Costs ": "打碎石头 - 成本 ",
    "Each break also produces ": "每次破碎都会产生 ",
    "Smeltery (tier ": "冶炼厂 (层阶 ",
    "Upgrade smeltery to tier ": "升级冶炼厂到层阶 ",
    "Ore tier display style: ": "矿石层阶显示风格：",
    "Basic drill ": "基础钻 ",
    "Power drill ": "电钻 ",
    "Sky drill ": "天空钻 ",
    "(tier ": "(层阶 ",
    "Fluorite, ": "萤石, ",
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
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
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
    "/sec)": "/秒)",
    " [": " [",
    " ore/mine)": " 矿石/每次开采)",
    ' I': ' I',
    ' II': ' II',
    ' III': ' III',
    ' IV': ' IV',
    ' V': ' V',
    ' VI': ' VI',
    ' VII': ' VII',
    ' VIII': ' VIII',
    ' X': ' X',
    ' XI': ' XI',
    ' XII': ' XII',
    ' XIII': ' XIII',
    ' XIV': ' XIV',
    ' XV': ' XV',
    ' XVI': ' XVI',
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+) fps$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^: ([\d\.]+)$/,
    /^: ([\d\.,]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^mana amount is capped at (.+) for now.$/, '法力值目前上限为 $1。'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Reset for (.+) mana$/, '重置得到 $1 法力'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^\(([\d\.]+)\/min\)$/, '\($1\/分钟\)'],
    [/^\(tier ([\d\.]+)\)$/, '\(层阶 $1\)'],
    [/^\(power ([\d\.]+), speed ([\d\.]+)\)$/, '\(威力 $1，速度 $2\)'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Mined ([\d\.,]+)$/, '已开采 $1'],
    [/^tier ([\d\.,]+)$/, '层阶 $1'],
    [/^Next: ([\d\.]+)\/s$/, '下一个: $1\/秒'],
    [/^Next: ([\d\.]+)s$/, '下一个: $1秒'],
    [/^Next: (.+) ore\/mine$/, '下一个: $1 矿石\/秒'],
    [/^Found: ([\d\.,]+)$/, '发现: $1'],
    [/^Drill speed: ([\d\.,]+)$/, '钻头速度: $1'],
    [/^Drill Speed: ([\d\.,]+)$/, '钻头速度: $1'],
    [/^Drill power: ([\d\.,]+)$/, '钻头威力: $1'],
    [/^Drill Power: ([\d\.,]+)$/, '钻头威力: $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);