const STEPS = [
  { id: "discover", label: "观察", icon: "◎" },
  { id: "understand", label: "命名", icon: "◇" },
  { id: "practice", label: "图题", icon: "✓" },
  { id: "master", label: "通关", icon: "★" }
];

const CHAPTERS = [
  { id: "ch11", title: "第十一章 三角形", shortTitle: "三角形", range: "1-8" },
  { id: "ch12", title: "第十二章 全等三角形", shortTitle: "全等三角形", range: "9-15" }
];

const LESSONS = [
  {
    id: "edges",
    no: 1,
    title: "三角形的边",
    subtitle: "三根线段什么时候围得成？",
    objective: "会判断三条线段能否组成三角形，会处理等腰三角形的分类讨论。",
    interaction: "triangleInequality",
    discoverTitle: "先试着围三角形",
    discoverPrompt: "拖动三条边长。观察：哪种情况能围成三角形？哪种情况会摊成一条线？",
    principles: [
      "三角形由不在同一直线上的三条线段首尾顺次相接组成。",
      "判断三条线段能否组成三角形，只要看最长边是否小于另外两边之和。",
      "相等也不行，因为三条线段会压成一条直线，不能围成封闭的三角形。",
      "等边三角形是特殊的等腰三角形；等腰题常要分“已知边是腰还是底边”。"
    ],
    mistakes: [
      "只检查一组两边和，漏看最长边。",
      "把“两边之和大于第三边”误写成“大于或等于”。",
      "等腰三角形题不分类讨论，直接把给定边当成底边或腰。"
    ],
    parentFocus: [
      "让孩子先说“为什么最长边不能太长”，再讲两点之间线段最短。",
      "等腰三角形题要追问：这条边有没有可能是腰？有没有可能是底边？"
    ],
    parentQuestions: [
      "如果 6+6=12，为什么还不是三角形？",
      "为什么判断时只看最长边就够了？"
    ],
    mastery: [
      "用一句话解释三角形三边关系的来源。",
      "能独立判断 3 组线段是否能组成三角形。",
      "遇到等腰三角形边长题，会主动分情况。"
    ],
    practices: [
      {
        prompt: "3、4、8 能组成三角形吗？",
        options: ["能，因为有三条线段", "不能，因为 3+4<8", "能，因为 8 最大"],
        answer: 1,
        feedback: "最长边是 8，另外两边和是 7，7<8，围不起来。"
      },
      {
        prompt: "5、6、11 能组成三角形吗？",
        options: ["能", "不能，因为 5+6=11", "不能，因为 11 不是偶数"],
        answer: 1,
        feedback: "相等时会压成一条直线，不是三角形。"
      },
      {
        prompt: "等腰三角形两边为 4 和 9，它的周长是多少？",
        options: ["17", "22", "两种都可以"],
        answer: 1,
        feedback: "4、4、9 不成立，只有 9、9、4 成立，周长 22。"
      }
    ]
  },
  {
    id: "special-lines",
    no: 2,
    title: "高、中线、角平分线",
    subtitle: "同样从顶点出发，凭什么名字不同？",
    objective: "会画、会认、会使用高、中线、角平分线带来的垂直、等长、等角关系。",
    interaction: "lineExplorer",
    discoverTitle: "点选一条特殊线",
    discoverPrompt: "切换“高 / 中线 / 角平分线”，观察同一顶点出发的线段有什么不同依据。",
    principles: [
      "高看垂直：从顶点向对边所在直线作垂线。",
      "中线看中点：从顶点连到对边中点，所以对边被分成相等两段。",
      "角平分线看等角：从顶点出发，把这个角分成两个相等角。",
      "钝角三角形的高可能落在三角形外面，因为高要垂直到“对边所在直线”。",
      "三条中线交于一点，这个点叫三角形的重心。"
    ],
    mistakes: [
      "把中线当成角平分线，以为中点一定带来等角。",
      "把角平分线当成中线，以为等角一定带来等边。",
      "画钝角三角形的高时，不敢延长对边所在直线。"
    ],
    parentFocus: [
      "让孩子每画一条线都说依据：垂直、中点、还是等角。",
      "多用反例提醒：中线不一定垂直，角平分线不一定平分对边。"
    ],
    parentQuestions: [
      "看到 90°，这条线更可能是什么？",
      "看到对边被分成两段相等，这条线叫什么？"
    ],
    mastery: [
      "能在任意三角形中画指定边上的高。",
      "能说出中线、角平分线分别带来什么等量关系。",
      "能区分“线段看起来像”和“数学依据”。"
    ],
    practices: [
      {
        prompt: "AD 是 BC 边上的中线，BC=14，则 BD 等于多少？",
        options: ["7", "14", "不能确定"],
        answer: 0,
        feedback: "中线连到对边中点，所以 BD=DC=7。"
      },
      {
        prompt: "AD 平分 ∠A，∠A=68°，则 ∠BAD 等于多少？",
        options: ["34°", "68°", "90°"],
        answer: 0,
        feedback: "角平分线把角分成两个相等角。"
      },
      {
        prompt: "AD 是 BC 边上的高，最直接得到什么？",
        options: ["BD=DC", "∠BAD=∠DAC", "AD⊥BC"],
        answer: 2,
        feedback: "高的关键词是垂直。"
      }
    ]
  },
  {
    id: "stability",
    no: 3,
    title: "三角形的稳定性",
    subtitle: "为什么建筑喜欢三角形？",
    objective: "会解释三角形稳定性和四边形不稳定性，并能用“分成三角形”分析斜撑。",
    interaction: "stability",
    discoverTitle: "推一推木架",
    discoverPrompt: "拖动变形滑块，观察四边形为什么会变；打开斜撑，看看它如何变成两个三角形。",
    principles: [
      "三角形三边长度确定后，形状也被确定，因此具有稳定性。",
      "四边形即使四条边长度不变，角也能改变，所以没有稳定性。",
      "四边形加一条对角线后，被分成两个三角形，形状就稳定了。",
      "n 边形木架要稳定，可从一个顶点加斜撑分成三角形，至少需要 n-3 根。"
    ],
    mistakes: [
      "把四边形不稳定性当成纯缺点，其实伸缩门正是利用它。",
      "以为随便加一根木条都能稳定，关键是要把图形分成三角形。"
    ],
    parentFocus: [
      "追问孩子：加这根斜撑后，图形里面出现了几个三角形？",
      "联系生活：屋顶钢架、桥梁、伸缩门，各自利用了什么性质？"
    ],
    parentQuestions: [
      "四边形边长不变，为什么形状还能变？",
      "五边形至少加几根斜撑可以分成三角形？"
    ],
    mastery: [
      "能说出三角形稳定性的含义。",
      "能解释斜钉木条的作用。",
      "能求四边形、五边形、六边形木架至少加几根斜撑。"
    ],
    practices: [
      {
        prompt: "四边形木架至少加几根斜撑可以稳定？",
        options: ["1 根", "2 根", "3 根"],
        answer: 0,
        feedback: "一条对角线把四边形分成两个三角形。"
      },
      {
        prompt: "六边形木架至少加几根斜撑？",
        options: ["2 根", "3 根", "4 根"],
        answer: 1,
        feedback: "n 边形至少需要 n-3 根，六边形是 3 根。"
      },
      {
        prompt: "伸缩门主要利用了什么？",
        options: ["三角形稳定性", "四边形不稳定性", "多边形内角和"],
        answer: 1,
        feedback: "伸缩门需要能变形，利用的是四边形不稳定性。"
      }
    ]
  },
  {
    id: "angle-sum",
    no: 4,
    title: "三角形内角和",
    subtitle: "为什么一定是 180°？",
    objective: "会用平行线证明三角形内角和定理，并能用定理求角。",
    interaction: "angleSum",
    discoverTitle: "拖动顶点，看角度总和",
    discoverPrompt: "拖动 A 点改变三角形形状。再打开证明线，观察如何把三个角放到一个平角上。",
    principles: [
      "测量和剪拼能发现规律，但不能证明所有三角形都成立。",
      "证明三角形内角和时，常过一个顶点作对边的平行线。",
      "用平行线性质把另外两个角转移到同一条直线上，三个角组成平角。",
      "平角是 180°，所以三角形三个内角和是 180°。"
    ],
    mistakes: [
      "只背结论，不会说为什么要作平行线。",
      "在大三角形和小三角形之间混用角。",
      "把量角器测出来的 180° 当成数学证明。"
    ],
    parentFocus: [
      "让孩子口头复述证明，不要求一开始就写得很正式。",
      "追问每一步理由：用了平行线的哪个性质？用了平角的哪个定义？"
    ],
    parentQuestions: [
      "为什么测量 100 个三角形也不能代替证明？",
      "作平行线的目的是什么？"
    ],
    mastery: [
      "能用 4 句话说出三角形内角和证明思路。",
      "能在角平分线题中选对所在三角形。",
      "能区分“发现规律”和“证明确认”。"
    ],
    practices: [
      {
        prompt: "三角形两个角为 52°、68°，第三角是多少？",
        options: ["50°", "60°", "70°"],
        answer: 1,
        feedback: "180°-52°-68°=60°。"
      },
      {
        prompt: "∠A=50°，AD 平分 ∠A，∠B=60°，则 ∠ADB 是多少？",
        options: ["85°", "95°", "110°"],
        answer: 1,
        feedback: "∠BAD=25°，∠ADB=180°-60°-25°=95°。"
      },
      {
        prompt: "证明内角和时，作平行线最主要是为了什么？",
        options: ["让图更好看", "把角转移到一个平角上", "让三角形变大"],
        answer: 1,
        feedback: "平行线让内错角相等，从而把角“搬”到一条直线上。"
      }
    ]
  },
  {
    id: "exterior",
    no: 5,
    title: "直角三角形与外角",
    subtitle: "外角为什么等于两个远内角之和？",
    objective: "会用直角三角形锐角互余、三角形外角性质快速求角。",
    interaction: "exteriorAngle",
    discoverTitle: "调两个远内角",
    discoverPrompt: "改变两个不相邻内角，观察外角怎样跟着变化。",
    principles: [
      "直角三角形的两个锐角互余，和为 90°。",
      "如果一个三角形有两个角互余，那么第三个角就是 90°，它是直角三角形。",
      "三角形外角是一边和另一边延长线组成的角。",
      "一个外角等于与它不相邻的两个内角的和。",
      "每个顶点各取一个外角，三角形三个外角和是 360°。"
    ],
    mistakes: [
      "把外角说成等于任意两个内角之和。",
      "忘记外角与相邻内角互补。",
      "方位角题里没有先找平行的南北方向线。"
    ],
    parentFocus: [
      "让孩子先找外角的相邻内角，再找两个不相邻内角。",
      "方位角题让孩子先画方向线，不急着算。"
    ],
    parentQuestions: [
      "外角和哪个内角相邻？和哪两个内角不相邻？",
      "为什么外角比任意一个远内角都大？"
    ],
    mastery: [
      "能用外角性质一步求角。",
      "能用互余判断直角三角形。",
      "能说明外角和相邻内角的关系。"
    ],
    practices: [
      {
        prompt: "直角三角形一个锐角是 37°，另一个锐角是多少？",
        options: ["43°", "53°", "63°"],
        answer: 1,
        feedback: "两个锐角互余，90°-37°=53°。"
      },
      {
        prompt: "三角形两个内角为 45°、80°，与第三角相邻的外角是多少？",
        options: ["115°", "125°", "135°"],
        answer: 1,
        feedback: "这个外角等于两个不相邻内角之和：45°+80°=125°。"
      },
      {
        prompt: "三角形一个外角是 128°，一个远内角是 53°，另一个远内角是多少？",
        options: ["65°", "75°", "85°"],
        answer: 1,
        feedback: "另一个远内角是 128°-53°=75°。"
      }
    ]
  },
  {
    id: "polygon-basics",
    no: 6,
    title: "多边形基本概念",
    subtitle: "边、角、对角线怎么认？",
    objective: "会识别多边形、内角、外角、对角线、凸多边形和正多边形。",
    interaction: "polygonBasics",
    discoverTitle: "从一个顶点画对角线",
    discoverPrompt: "改变边数，看从一个顶点能画几条对角线，以及它们把图形分成几个三角形。",
    principles: [
      "多边形是在平面内由一些线段首尾顺次相接组成的封闭图形。",
      "连接不相邻两个顶点的线段叫对角线，相邻顶点连起来的是边。",
      "凸多边形的任意一条边所在直线，都让整个多边形在同一侧。",
      "正多边形必须各边都相等、各角也都相等。"
    ],
    mistakes: [
      "把边当成对角线。",
      "只看到边相等就认为是正多边形，忘记角也要相等。",
      "没有注意本章讨论的是凸多边形。"
    ],
    parentFocus: [
      "让孩子边画边数：从一个顶点不能连自己和相邻两个点。",
      "用正方形说明正多边形的两个条件：边相等，角也相等。"
    ],
    parentQuestions: [
      "五边形从一个顶点出发，为什么不是 4 条对角线？",
      "只要边都相等，就一定是正多边形吗？"
    ],
    mastery: [
      "能画出五边形全部对角线。",
      "能解释 n 边形从一个顶点可画 n-3 条对角线。",
      "能说出正多边形的两个条件。"
    ],
    practices: [
      {
        prompt: "五边形从一个顶点出发可以画几条对角线？",
        options: ["1 条", "2 条", "3 条"],
        answer: 1,
        feedback: "不能连自己，也不能连相邻两个点，所以是 5-3=2 条。"
      },
      {
        prompt: "正多边形必须满足什么？",
        options: ["各边相等", "各角相等", "各边相等且各角相等"],
        answer: 2,
        feedback: "两个条件缺一不可。"
      },
      {
        prompt: "连接多边形两个相邻顶点的线段叫什么？",
        options: ["边", "对角线", "外角"],
        answer: 0,
        feedback: "对角线连接的是不相邻的两个顶点。"
      }
    ]
  },
  {
    id: "polygon-sum",
    no: 7,
    title: "多边形内角和、外角和",
    subtitle: "为什么公式里有 n-2？",
    objective: "会推导并使用 n 边形内角和公式和多边形外角和。",
    interaction: "polygonFormula",
    discoverTitle: "把多边形切成三角形",
    discoverPrompt: "改变边数，观察它被切成几个三角形，内角和怎样变化。",
    principles: [
      "n 边形从一个顶点出发可以画 n-3 条对角线。",
      "这些对角线把 n 边形分成 n-2 个三角形。",
      "所以 n 边形内角和是 (n-2)×180°。",
      "多边形外角和等于 360°，与边数无关。",
      "正 n 边形每个外角是 360°÷n，每个内角是 180°-每个外角。"
    ],
    mistakes: [
      "把内角和公式写成 n×180°。",
      "普通多边形不能把内角和平均分，只有正多边形才可以。",
      "误以为边越多，外角和越大。"
    ],
    parentFocus: [
      "孩子忘公式时，让他重新画对角线切三角形。",
      "反复强调外角和是走一圈转过的角，总是一周 360°。"
    ],
    parentQuestions: [
      "为什么是 n-2 个三角形？",
      "正十边形可以用外角先求内角吗？"
    ],
    mastery: [
      "能推导 n 边形内角和公式。",
      "能由内角和求边数。",
      "能求正多边形的每个内角和外角。"
    ],
    practices: [
      {
        prompt: "八边形内角和是多少？",
        options: ["900°", "1080°", "1260°"],
        answer: 1,
        feedback: "(8-2)×180°=1080°。"
      },
      {
        prompt: "一个多边形内角和等于外角和，它是几边形？",
        options: ["三边形", "四边形", "五边形"],
        answer: 1,
        feedback: "外角和 360°，内角和也 360°，所以是四边形。"
      },
      {
        prompt: "正五边形每个内角是多少？",
        options: ["90°", "108°", "120°"],
        answer: 1,
        feedback: "内角和 540°，平均分成 5 个，每个 108°。"
      }
    ]
  },
  {
    id: "review",
    no: 8,
    title: "章节复习与综合",
    subtitle: "把边、角、证明连起来",
    objective: "能综合使用三边关系、特殊线段、内角和、外角、多边形公式。",
    interaction: "reviewMap",
    discoverTitle: "本章知识路线",
    discoverPrompt: "按路线复盘：先边，再线，再角，最后把多边形切成三角形。",
    principles: [
      "边的问题先找最长边，等腰题先分类讨论。",
      "线段问题先辨认：高看垂直，中线看中点，角平分线看等角。",
      "角度题先找三角形，再找内角和、外角、平行线、角平分线。",
      "多边形题先看是否正多边形，再决定能不能平均分。",
      "证明题每一步都要说理由：已知、定义、定理或等量代换。"
    ],
    mistakes: [
      "会算但说不出理由。",
      "图形中没有标清角的位置，导致用错三角形。",
      "综合题中漏掉分类讨论。"
    ],
    parentFocus: [
      "复习时少让孩子背定义，多让他解释“为什么”。",
      "错题按错因归类：概念、图形、公式、分类、计算、证明表达。"
    ],
    parentQuestions: [
      "这一步用的是哪个定理？",
      "如果换一个图形，这个结论还成立吗？"
    ],
    mastery: [
      "能说清本章 6 个核心结论的来源。",
      "能完成章末综合题并写出理由。",
      "能把错题归类到具体错因。"
    ],
    practices: [
      {
        prompt: "遇到三条线段能否组成三角形，第一步最好做什么？",
        options: ["先找最长边", "先画外角", "先求面积"],
        answer: 0,
        feedback: "判断三边关系时，先找最长边最省力。"
      },
      {
        prompt: "多边形内角和公式的来源是什么？",
        options: ["把它切成三角形", "量角器测量", "外角相等"],
        answer: 0,
        feedback: "从一个顶点画对角线，切成 n-2 个三角形。"
      },
      {
        prompt: "孩子会背“三角形内角和 180°”，但不会证明，说明什么？",
        options: ["已经完全掌握", "还需要补证明思路", "不用管"],
        answer: 1,
        feedback: "本章重点之一就是从观察走向证明。"
      }
    ]
  },
  {
    id: "congruence-basic",
    no: 9,
    chapter: "第十二章 全等三角形",
    title: "全等三角形",
    subtitle: "能完全重合，字母也要对齐",
    objective: "理解全等形和全等三角形的含义，会找对应顶点、对应边、对应角，并会用全等性质得到边角相等。",
    interaction: "congruenceTransform",
    discoverTitle: "移动、翻折、旋转后还一样吗？",
    discoverPrompt: "切换变换方式，观察三角形的位置变了，但形状和大小没有变；再按字母顺序找对应关系。",
    principles: [
      "能够完全重合的两个图形叫做全等形；能够完全重合的两个三角形叫做全等三角形。",
      "平移、翻折、旋转只改变位置，不改变形状和大小，所以变换前后的图形全等。",
      "记全等三角形时，表示对应顶点的字母要写在对应位置上。",
      "全等三角形的对应边相等，对应角相等。证明线段或角相等时，常把它们放进一对全等三角形里。"
    ],
    mistakes: [
      "只看图形靠得近不近，忘记全等的关键是能完全重合。",
      "写△ABC≌△DEF 时字母顺序乱写，导致对应边、对应角全乱。",
      "看到全等后只说“相等”，没有说明是哪一组对应元素相等。"
    ],
    parentFocus: [
      "让孩子把一个三角形沿桌面平移、翻面或转一转，再说哪里变了、哪里没变。",
      "每写一个全等式，都追问：A 对谁？B 对谁？C 对谁？"
    ],
    parentQuestions: [
      "全等和面积相等是一回事吗？",
      "如果△ABC≌△DEF，那么 AB 对应哪条边，∠C 对应哪个角？"
    ],
    mastery: [
      "能用“完全重合”解释全等。",
      "能根据全等式说出全部对应边和对应角。",
      "能由全等三角形推出指定线段或角相等。"
    ],
    practices: [
      {
        prompt: "△ABC≌△DEF，下面哪组边一定相等？",
        options: ["AB=DE", "AB=EF", "AC=DE"],
        answer: 0,
        feedback: "字母顺序对应：A 对 D，B 对 E，C 对 F，所以 AB 对 DE。"
      },
      {
        prompt: "一个三角形经过平移后，得到的新三角形与原三角形是什么关系？",
        options: ["面积相等但不一定全等", "全等", "只有角相等"],
        answer: 1,
        feedback: "平移不改变形状和大小，前后图形可以完全重合。"
      },
      {
        prompt: "△OCA≌△OBD，且 C 对 B，A 对 D。下面哪个角相等？",
        options: ["∠OAC=∠ODB", "∠OCA=∠ODB", "∠CAO=∠OBD"],
        answer: 0,
        feedback: "A 对 D，C 对 B，O 对 O，所以∠OAC 对应∠ODB。"
      }
    ]
  },
  {
    id: "sss",
    no: 10,
    chapter: "第十二章 全等三角形",
    title: "边边边 SSS",
    subtitle: "三条边锁住一个三角形",
    objective: "理解三边分别相等可以判定三角形全等，会找公共边、中点带来的等边，并能用 SSS 写出证明。",
    interaction: "conditionBuilder",
    conditionMode: "sss",
    discoverTitle: "只给三条边，三角形还会变吗？",
    discoverPrompt: "观察三条边定下来后，顶点只能落在两个镜像位置上；翻过去仍然能完全重合。",
    principles: [
      "三边分别相等的两个三角形全等，简写为“边边边”或 SSS。",
      "三条边的长度确定后，三角形的形状和大小就确定了，这和三角形稳定性相通。",
      "证明 SSS 时常见第三条边是公共边，例如 AD=AD。",
      "中点会带来两段相等，例如 D 是 BC 的中点，则 BD=CD。"
    ],
    mistakes: [
      "找到了两组边相等就急着判定全等，SSS 必须三组边。",
      "忘记公共边可以直接写相等。",
      "把“看起来一样长”当作证明依据。"
    ],
    parentFocus: [
      "让孩子先圈出三组边的来源：已知、中点、公共边。",
      "证明时要求孩子按“在两个三角形中 - 三个条件 - 所以全等”的格式说完整。"
    ],
    parentQuestions: [
      "公共边为什么可以作为一组相等边？",
      "D 是 BC 的中点，能立刻得到哪一组线段相等？"
    ],
    mastery: [
      "能说出 SSS 的条件。",
      "能在等腰三角形带中点的图中证明两个小三角形全等。",
      "能用全等推出对应角或对应边相等。"
    ],
    practices: [
      {
        prompt: "AB=AC，D 是 BC 的中点，要证△ABD≌△ACD，第三组相等边是什么？",
        options: ["AD=AD", "BD=AD", "AB=BD"],
        answer: 0,
        feedback: "AD 是两个三角形的公共边，可以直接写 AD=AD。"
      },
      {
        prompt: "三边分别相等的两个三角形全等，简写是什么？",
        options: ["SAS", "SSS", "ASA"],
        answer: 1,
        feedback: "Side-Side-Side，对应“边边边”。"
      },
      {
        prompt: "用 SSS 证明两个三角形全等后，能推出什么？",
        options: ["只有周长相等", "对应边和对应角都相等", "只有面积相等"],
        answer: 1,
        feedback: "全等三角形的对应边相等、对应角相等。"
      }
    ]
  },
  {
    id: "sas",
    no: 11,
    chapter: "第十二章 全等三角形",
    title: "边角边 SAS",
    subtitle: "夹角在中间才锁得住",
    objective: "理解两边及夹角分别相等可以判定三角形全等，会辨认 SAS 和不能判定全等的边边角情况。",
    interaction: "conditionBuilder",
    conditionMode: "sas",
    discoverTitle: "两根木棍夹住一个角",
    discoverPrompt: "改变夹角，看第三边跟着确定；再切到“边边角陷阱”，观察为什么它可能摆出两个不同三角形。",
    principles: [
      "两边和它们的夹角分别相等的两个三角形全等，简写为“边角边”或 SAS。",
      "“夹角”必须是这两条已知边中间的角。",
      "两边和其中一边的对角分别相等，不能保证两个三角形全等，这就是边边角的陷阱。",
      "池塘测距这类题常用 SAS：延长两条线段制造 CA=CD、CB=CE，再用对顶角相等。"
    ],
    mistakes: [
      "看到两边一角就直接写 SAS，没有确认这个角是不是夹角。",
      "忘记对顶角相等可以提供 SAS 中的夹角。",
      "证明完全等后，没有写“对应边相等”来得到目标结论。"
    ],
    parentFocus: [
      "让孩子用手指按住两条边，再指出中间夹着哪个角。",
      "遇到两边一角时，先问：这个角夹在两条边之间吗？"
    ],
    parentQuestions: [
      "为什么边边角不一定全等？",
      "池塘测距中，∠1=∠2 的理由是什么？"
    ],
    mastery: [
      "能区分 SAS 和边边角。",
      "能在含对顶角的图中找出 SAS 条件。",
      "能用“先证全等，再推对应边相等”解决测距问题。"
    ],
    practices: [
      {
        prompt: "AB=DE，AC=DF，∠A=∠D。若 ∠A 和 ∠D 都夹在两条已知边之间，可用什么判定？",
        options: ["SSS", "SAS", "AAS"],
        answer: 1,
        feedback: "两边和夹角分别相等，是 SAS。"
      },
      {
        prompt: "两边和其中一边的对角分别相等，能一定判定全等吗？",
        options: ["能", "不能", "只要图看起来像就能"],
        answer: 1,
        feedback: "教材用转动木棍说明：边边角可能出现两个不同三角形。"
      },
      {
        prompt: "两条直线相交时，SAS 证明里常用哪类角相等？",
        options: ["对顶角相等", "邻补角相等", "任意角相等"],
        answer: 0,
        feedback: "相交线产生对顶角相等，常作为夹角条件。"
      }
    ]
  },
  {
    id: "asa-aas",
    no: 12,
    chapter: "第十二章 全等三角形",
    title: "角边角与角角边",
    subtitle: "两个角加一条边，也能定位",
    objective: "理解 ASA、AAS 的条件来源，会用三角形内角和把 AAS 转化为 ASA。",
    interaction: "conditionBuilder",
    conditionMode: "angles",
    discoverTitle: "两束光线夹住一条边",
    discoverPrompt: "固定一条边和两个角，观察两条射线只有一个交点；再看 AAS 为什么也能变成 ASA。",
    principles: [
      "两角和它们的夹边分别相等的两个三角形全等，简写为“角边角”或 ASA。",
      "两角分别相等且其中一组等角的对边相等的两个三角形全等，简写为“角角边”或 AAS。",
      "AAS 的理由来自三角形内角和：两个角相等，第三个角也相等，于是可以转化为 ASA。",
      "三角分别相等只能说明形状相同，不一定全等，因为大小还可能缩放。"
    ],
    mistakes: [
      "把 AAA 当成全等判定，忘记还需要一条边确定大小。",
      "没有分清 ASA 的边是夹边，AAS 的边是一组等角的对边。",
      "证明 AAS 时跳过“第三角相等”的理由。"
    ],
    parentFocus: [
      "让孩子画两条射线，看固定夹边后交点为什么唯一。",
      "追问 AAS 的关键转化：第三角为什么相等？"
    ],
    parentQuestions: [
      "三个角都相等，为什么还不一定全等？",
      "AAS 最终是怎么借 ASA 完成判定的？"
    ],
    mastery: [
      "能准确说出 ASA 与 AAS 的区别。",
      "能用三角形内角和解释 AAS。",
      "能判断 AAA 不是全等判定方法。"
    ],
    practices: [
      {
        prompt: "∠A=∠D，AB=DE，∠B=∠E，这条边夹在两个角之间，可用什么判定？",
        options: ["ASA", "SAS", "HL"],
        answer: 0,
        feedback: "两角和夹边分别相等，是 ASA。"
      },
      {
        prompt: "两个三角形三角分别相等，一定全等吗？",
        options: ["一定", "不一定，可能只是形状相同大小不同", "一定不全等"],
        answer: 1,
        feedback: "AAA 不能确定大小，所以不是全等判定。"
      },
      {
        prompt: "AAS 能成立的重要理由是什么？",
        options: ["三角形内角和", "外角和 360°", "边越长角越大"],
        answer: 0,
        feedback: "两个角相等时，第三个角也相等，再配合一条边判定全等。"
      }
    ]
  },
  {
    id: "hl",
    no: 13,
    chapter: "第十二章 全等三角形",
    title: "直角三角形 HL",
    subtitle: "斜边和一条直角边够用了",
    objective: "理解直角三角形全等的特殊判定 HL，会找斜边、直角边和公共斜边。",
    interaction: "rightTriangleHL",
    discoverTitle: "直角固定后，还需要什么？",
    discoverPrompt: "拖动直角边长度，观察当斜边和一条直角边确定时，另一直角边也被确定。",
    principles: [
      "斜边和一条直角边分别相等的两个直角三角形全等，简写为“斜边、直角边”或 HL。",
      "HL 只能用于直角三角形，先写出两个直角是必要步骤。",
      "斜边是直角所对的边，不能把普通边误当斜边。",
      "含两个垂直条件的题，常先证明两个三角形都是直角三角形，再找公共斜边或已知直角边。"
    ],
    mistakes: [
      "没有说明三角形是直角三角形就直接写 HL。",
      "把直角边和斜边配错。",
      "看到一条边和一个直角就以为够了，HL 还需要斜边相等。"
    ],
    parentFocus: [
      "让孩子先用手指出直角，再指出直角对面的斜边。",
      "证明时检查格式：Rt△... 和 Rt△... 中，斜边相等，直角边相等。"
    ],
    parentQuestions: [
      "HL 里的 H 指哪条边？L 指哪条边？",
      "为什么普通三角形不能直接用 HL？"
    ],
    mastery: [
      "能正确辨认斜边和直角边。",
      "能判断何时可以使用 HL。",
      "能用 HL 证明线段相等。"
    ],
    practices: [
      {
        prompt: "使用 HL 前，必须先确认什么？",
        options: ["两个三角形都是直角三角形", "两个三角形都是等边三角形", "两个角都很小"],
        answer: 0,
        feedback: "HL 是直角三角形的特殊判定，先有直角三角形才谈 HL。"
      },
      {
        prompt: "Rt△ABC 中 ∠C=90°，哪条边是斜边？",
        options: ["AB", "AC", "BC"],
        answer: 0,
        feedback: "斜边是直角所对的边，∠C 对面是 AB。"
      },
      {
        prompt: "两个直角三角形斜边相等、一条直角边相等，可以判定什么？",
        options: ["全等", "只有面积相等", "只有一个锐角相等"],
        answer: 0,
        feedback: "这正是 HL 判定。"
      }
    ]
  },
  {
    id: "angle-bisector-property",
    no: 14,
    chapter: "第十二章 全等三角形",
    title: "角的平分线的性质",
    subtitle: "到两边的距离相等",
    objective: "会作角平分线，理解角平分线上的点到角两边距离相等及其逆命题，并能用全等三角形证明。",
    interaction: "angleBisector",
    discoverTitle: "点在角平分线上，会离两边一样远吗？",
    discoverPrompt: "拖动角平分线上的点 P，观察到两边的垂线段 PD、PE 始终相等；再切换逆命题看点的位置。",
    principles: [
      "角的平分线上的点到角的两边的距离相等。",
      "角内部到角的两边距离相等的点在角的平分线上。",
      "距离指点到直线的垂线段长度，所以证明前要先作垂线。",
      "证明几何命题的一般步骤是：明确已知和求证，画图并符号化，分析路径，写出证明。"
    ],
    mistakes: [
      "把点到边上一点的斜线长度当成距离，忘记距离必须垂直。",
      "只记性质，不会说它来自两个直角三角形全等。",
      "使用逆命题时忘记点必须在角的内部。"
    ],
    parentFocus: [
      "让孩子先画 PD⊥OA、PE⊥OB，再说 PD 和 PE 为什么叫距离。",
      "追问证明中两个直角三角形用的是 AAS、HL 还是别的判定。"
    ],
    parentQuestions: [
      "点到角两边的距离，为什么要画垂线？",
      "角平分线性质和它的逆命题分别怎么说？"
    ],
    mastery: [
      "能按尺规作图步骤作出角平分线。",
      "能证明角平分线上的点到两边距离相等。",
      "能用逆命题解决选址问题。"
    ],
    practices: [
      {
        prompt: "P 在∠AOB 的平分线上，PD⊥OA，PE⊥OB，可以得到什么？",
        options: ["PD=PE", "OD=OE", "OP=PD"],
        answer: 0,
        feedback: "角平分线上的点到角两边的距离相等，距离就是垂线段 PD、PE。"
      },
      {
        prompt: "点到直线的距离指什么？",
        options: ["任意连线长度", "垂线段长度", "沿直线走的长度"],
        answer: 1,
        feedback: "点到直线的距离必须沿垂直方向量。"
      },
      {
        prompt: "一个点在角内部，且到角两边距离相等，它在哪里？",
        options: ["角平分线上", "任意一边上", "角外部"],
        answer: 0,
        feedback: "这是角平分线性质的逆命题。"
      }
    ]
  },
  {
    id: "congruence-review",
    no: 15,
    chapter: "第十二章 全等三角形",
    title: "全等证明综合",
    subtitle: "先找三角形，再选判定",
    objective: "能综合使用全等性质、SSS、SAS、ASA、AAS、HL 和角平分线性质解决证明与应用题。",
    interaction: "proofRoute",
    discoverTitle: "把证明拆成四步",
    discoverPrompt: "跟着路线卡，把“目标 - 三角形 - 条件 - 判定 - 结论”连起来，形成证明题的稳定方法。",
    principles: [
      "证明线段或角相等，常先寻找它们所在的两个三角形。",
      "全等判定要从已知、公共边或公共角、对顶角、平行线角、中点、垂直这些证据中拼出条件。",
      "证明格式要写清楚：在两个三角形中，列条件，写判定方法，最后用对应边或对应角相等得到结论。",
      "角平分线选址问题本质是到两条边或三条边距离相等，常落在角平分线或三角形角平分线交点上。"
    ],
    mistakes: [
      "拿到题就选判定方法，没有先确定要证明哪两个三角形全等。",
      "条件够了但对应顺序写错，导致最后推出错的边角。",
      "证明到三角形全等就停下，没有回到原题的求证。"
    ],
    parentFocus: [
      "让孩子每道证明题先说目标：我要证明哪条边或哪个角相等。",
      "再问：这两个目标分别在哪两个三角形里？三个条件分别从哪里来？"
    ],
    parentQuestions: [
      "这道题最终要证明什么？",
      "你选的判定方法是哪一个，三个条件分别是什么依据？"
    ],
    mastery: [
      "能背出并区分 SSS、SAS、ASA、AAS、HL。",
      "能独立写出一段完整全等证明。",
      "能用角平分线性质解释到三条道路距离相等的选址问题。"
    ],
    practices: [
      {
        prompt: "证明 AB=DE，最常见的思路是什么？",
        options: ["先证明它们是两个全等三角形的对应边", "直接量长度", "只看图形是否对称"],
        answer: 0,
        feedback: "全等证明的核心用途就是推出对应边或对应角相等。"
      },
      {
        prompt: "全等证明中，“公共角”属于哪类证据？",
        options: ["可直接使用的相等角", "不能使用", "只能用于 HL"],
        answer: 0,
        feedback: "同一个角当然等于它自己，可以作为一组相等角。"
      },
      {
        prompt: "到三条公路距离都相等的点，通常在哪里找？",
        options: ["三角形三条角平分线的交点", "任意一条边的中点", "最长边上"],
        answer: 0,
        feedback: "到两边距离相等的点在角平分线上；到三边距离相等，要找三条角平分线的交点。"
      }
    ]
  }
];

const LESSON_ENRICHMENT = {
  edges: {
    sceneTitle: "三根木条能不能搭成一个架子？",
    sceneText: "把最长的那根想象成地面，另外两根要从两端伸出来并碰到同一个点。碰得到，才有三角形；刚好碰成一条直线，也不算。",
    sceneBullets: ["先找最长边", "比较另外两边和", "相等时是压扁，不是三角形"],
    exploreTasks: [
      { label: "摆一摆", text: "先点 3,4,8，再点 5,6,10，对比为什么一个封不住，一个能封住。" },
      { label: "说一说", text: "不用公式解释：为什么最长边不能太长？" },
      { label: "换一换", text: "把 6,6,12 调成 6,6,11，观察从直线变成三角形的瞬间。" }
    ],
    reasoning: [
      { title: "看见", text: "最长边固定后，另外两边像两只手臂，从两端往中间伸。" },
      { title: "发现", text: "两只手臂合起来还够不到，图形就断开；刚好够到，只能躺成一条直线。" },
      { title: "写成数学", text: "最长边 < 另外两边之和。只要检查最长边这一条最省力。" }
    ],
    application: ["判断三条线段能否围成三角形", "等腰三角形边长题要分类讨论", "求第三边范围时记住：两边差 < 第三边 < 两边和"],
    extraPractices: [
      {
        prompt: "三角形两边长为 5 和 8，第三边 x 是整数。下面哪个 x 可以？",
        options: ["3", "12", "13"],
        answer: 1,
        feedback: "第三边要大于 8-5=3，小于 8+5=13，所以 12 可以，3 和 13 都不行。",
        hint: "先写范围：两边差 < 第三边 < 两边和。"
      },
      {
        prompt: "等腰三角形周长 20，底边是 8，每条腰是多少？",
        options: ["5", "6", "12"],
        answer: 1,
        feedback: "两条腰相等，(20-8)÷2=6。",
        hint: "底边已确定，剩下两条就是相等的腰。"
      }
    ]
  },
  "special-lines": {
    sceneTitle: "同一条线，凭什么叫不同名字？",
    sceneText: "从顶点画到对边，看起来都是一条线。数学不按样子取名，而按它带来的证据取名：垂直、中点、等角。",
    sceneBullets: ["高：证明垂直", "中线：证明中点", "角平分线：证明等角"],
    exploreTasks: [
      { label: "找证据", text: "每切换一条线，只说它带来的一个证据，不急着背定义。" },
      { label: "反例眼", text: "问自己：中线一定垂直吗？角平分线一定平分对边吗？" },
      { label: "画钝角", text: "想象三角形变钝时，高为什么可能落在外面。" }
    ],
    reasoning: [
      { title: "高", text: "核心是 90°。它服务于面积、距离和垂直关系。" },
      { title: "中线", text: "核心是中点。它把对边分成相等两段。" },
      { title: "角平分线", text: "核心是等角。它把一个角分成两个相等的角。" }
    ],
    application: ["看到 90°，优先想到高", "看到 BD=DC，优先想到中线或中点", "看到两个小角相等，优先想到角平分线"],
    extraPractices: [
      {
        prompt: "如果 AD 是 BC 边上的高，最直接能得到什么？",
        options: ["AD⊥BC", "BD=DC", "∠BAD=∠CAD"],
        answer: 0,
        feedback: "高的关键词是垂直，所以 AD⊥BC。",
        hint: "不要看线的位置，先问它的定义给了什么证据。"
      },
      {
        prompt: "如果 ∠BAD=∠CAD，可以判断 AD 是什么？",
        options: ["∠A 的角平分线", "BC 边上的中线", "BC 边上的高"],
        answer: 0,
        feedback: "把一个角分成两个相等的角，就是角平分线。",
        hint: "等角对应角平分线。"
      }
    ]
  },
  stability: {
    sceneTitle: "为什么门框要加斜撑？",
    sceneText: "四边形像可以被推歪的框。加一条斜撑后，它被切成两个三角形，形状就被锁住了。",
    sceneBullets: ["四边形边长不变，角可变", "一条对角线切成两个三角形", "n 边形至少加 n-3 根斜撑"],
    exploreTasks: [
      { label: "推一推", text: "先不加斜撑，拖动滑块，看框架怎样歪。" },
      { label: "锁一锁", text: "打开斜撑，再拖动，观察为什么滑块失效。" },
      { label: "数一数", text: "五边形、六边形分别需要几根斜撑才能全切成三角形？" }
    ],
    reasoning: [
      { title: "不稳定", text: "四条边长度固定，角还可以变，所以四边形可以变形。" },
      { title: "稳定", text: "三条边长度固定时，第三个顶点的位置也被固定。" },
      { title: "会应用", text: "给多边形加斜撑，本质是把它分割成一个个三角形。" }
    ],
    application: ["桥梁桁架", "屋顶框架", "伸缩门利用四边形容易变形"],
    extraPractices: [
      {
        prompt: "七边形木架至少加几根斜撑可以分成三角形？",
        options: ["3 根", "4 根", "5 根"],
        answer: 1,
        feedback: "n 边形至少加 n-3 根斜撑，7-3=4。",
        hint: "从一个顶点向不相邻顶点连线。"
      },
      {
        prompt: "给四边形加一条对角线后，它被分成几个三角形？",
        options: ["1 个", "2 个", "3 个"],
        answer: 1,
        feedback: "一条对角线把四边形切成两个三角形。",
        hint: "画一条从一个顶点到对面顶点的线。"
      }
    ]
  },
  "angle-sum": {
    sceneTitle: "把三个角撕下来，能拼成什么？",
    sceneText: "量角器能发现三角形内角和接近 180°，但证明要说明所有三角形都这样。平行线的作用，就是把分散的角搬到一条直线上。",
    sceneBullets: ["测量是发现", "剪拼是感受", "平行线证明是确认"],
    exploreTasks: [
      { label: "拖一拖", text: "拖动 A 点，看三个角改变时，总和是否仍然稳定。" },
      { label: "开证明线", text: "打开证明线，找出被平行线搬过来的两个角。" },
      { label: "讲四句", text: "用四句话复述证明：作平行线、角相等、拼平角、得 180°。" }
    ],
    reasoning: [
      { title: "为什么要证明", text: "测量会有误差，而且不能测完所有三角形。" },
      { title: "为什么作平行线", text: "平行线能制造相等角，把 B、C 两个角搬到 A 点附近。" },
      { title: "为什么是 180°", text: "搬来的两个角和原来的 A 角排在一条直线上，组成平角。" }
    ],
    application: ["已知两角求第三角", "角平分线题先锁定所在三角形", "证明题要写理由，不只写算式"],
    extraPractices: [
      {
        prompt: "一个三角形三个角的比是 2:3:4，最大的角是多少？",
        options: ["60°", "80°", "100°"],
        answer: 1,
        feedback: "总份数 9，每份 20°，最大角 4 份是 80°。",
        hint: "三角形三个内角一共 180°。"
      },
      {
        prompt: "证明三角形内角和时，量 100 个三角形够不够？",
        options: ["够，因为样本多", "不够，因为测量不能代替证明", "够，只要都接近 180°"],
        answer: 1,
        feedback: "测量只能帮助发现规律，证明才说明所有情况都成立。",
        hint: "本章从直观走向证明，这是重点。"
      }
    ]
  },
  exterior: {
    sceneTitle: "外角像一次转弯",
    sceneText: "走到三角形的一个顶点，如果沿一边继续向外走，转出来的那个角就是外角。它同时和相邻内角互补，又等于两个远内角之和。",
    sceneBullets: ["先找相邻内角", "再找两个远内角", "外角 = 远内角和"],
    exploreTasks: [
      { label: "调角度", text: "改变两个远内角，观察外角怎样跟着变。" },
      { label: "找邻居", text: "指出外角旁边那个内角，它们加起来是多少？" },
      { label: "一题两解", text: "同一个外角，试着用互补和远内角和分别求一次。" }
    ],
    reasoning: [
      { title: "互补关系", text: "外角和相邻内角拼成一条直线，所以和为 180°。" },
      { title: "远内角关系", text: "相邻内角 = 180° - 两个远内角，所以外角 = 两个远内角和。" },
      { title: "大小判断", text: "外角等于两个正角的和，所以它大于任何一个远内角。" }
    ],
    application: ["一步求外角", "由外角反求远内角", "判断角度大小关系"],
    extraPractices: [
      {
        prompt: "三角形一个外角是 120°，一个远内角是 45°，另一个远内角是多少？",
        options: ["65°", "75°", "85°"],
        answer: 1,
        feedback: "外角等于两个远内角之和，120°-45°=75°。",
        hint: "不要用相邻内角，先找不相邻的两个内角。"
      },
      {
        prompt: "一个外角和它相邻的内角之和是多少？",
        options: ["90°", "180°", "360°"],
        answer: 1,
        feedback: "外角和相邻内角组成平角，所以是 180°。",
        hint: "它们在同一条直线上。"
      }
    ]
  },
  "polygon-basics": {
    sceneTitle: "多边形不是只数边，还要看连接关系",
    sceneText: "从一个顶点出发，不能连自己，也不能连相邻两个顶点。剩下能连的，才是对角线。",
    sceneBullets: ["边连接相邻顶点", "对角线连接不相邻顶点", "正多边形要边等且角等"],
    exploreTasks: [
      { label: "数禁区", text: "从亮起来的顶点出发，先数不能连的 3 个点。" },
      { label: "数能连", text: "把边数 n 调大，观察对角线条数为什么是 n-3。" },
      { label: "辨正形", text: "只边相等还不够，还要每个角也相等。" }
    ],
    reasoning: [
      { title: "边", text: "相邻顶点之间的线段是边，不叫对角线。" },
      { title: "对角线", text: "连接不相邻两个顶点的线段才是对角线。" },
      { title: "凸多边形", text: "本章讨论公式时默认凸多边形，凹进去的图形要先看清内角位置。" }
    ],
    application: ["从一个顶点数对角线", "判断边、对角线、外角", "辨认正多边形"],
    extraPractices: [
      {
        prompt: "六边形一共有多少条对角线？",
        options: ["6 条", "9 条", "12 条"],
        answer: 1,
        feedback: "每个顶点能画 3 条，共 18 次，但每条被数了两次，所以 18÷2=9。",
        hint: "从一个顶点是 n-3 条，全图要除以 2。"
      },
      {
        prompt: "只满足各边相等的多边形一定是正多边形吗？",
        options: ["一定", "不一定，还要各角相等", "不一定，还要边数是偶数"],
        answer: 1,
        feedback: "正多边形要求各边相等、各角也相等。",
        hint: "正多边形有两个条件。"
      }
    ]
  },
  "polygon-sum": {
    sceneTitle: "公式里的 n-2 从哪里来？",
    sceneText: "不是硬背公式。把 n 边形从一个顶点切开，会出现 n-2 个三角形，所以内角和就是 n-2 个 180°。",
    sceneBullets: ["先切三角形", "再乘 180°", "外角和永远一圈 360°"],
    exploreTasks: [
      { label: "切一切", text: "拖动边数，看每多一条边，三角形数量怎样变化。" },
      { label: "转一圈", text: "把外角想成沿多边形走一圈时每次转弯的角。" },
      { label: "辨条件", text: "只有正多边形才能把内角和平均分到每个角。" }
    ],
    reasoning: [
      { title: "内角和", text: "n 边形被分成 n-2 个三角形，所以是 (n-2)×180°。" },
      { title: "外角和", text: "沿多边形绕一圈，方向总共转过 360°，与边数无关。" },
      { title: "正多边形", text: "每个外角 = 360°÷n，每个内角 = 180° - 每个外角。" }
    ],
    application: ["由边数求内角和", "由内角和反求边数", "求正多边形每个内角和外角"],
    extraPractices: [
      {
        prompt: "一个多边形内角和是 1260°，它是几边形？",
        options: ["八边形", "九边形", "十边形"],
        answer: 1,
        feedback: "(n-2)×180°=1260°，n-2=7，所以 n=9。",
        hint: "先把 1260° 除以 180°。"
      },
      {
        prompt: "正十二边形每个外角是多少？",
        options: ["30°", "60°", "150°"],
        answer: 0,
        feedback: "正 n 边形每个外角是 360°÷n，360°÷12=30°。",
        hint: "外角比内角更容易先求。"
      }
    ]
  },
  review: {
    sceneTitle: "把本章知识变成一张解题路线图",
    sceneText: "第十一章不是很多零散公式，而是一条路线：边决定能否成形，线给出证据，角用三角形和外角，多边形最后仍回到三角形。",
    sceneBullets: ["边：先最长边", "线：看证据", "角：找所在三角形", "多边形：切成三角形"],
    exploreTasks: [
      { label: "归类", text: "拿一道错题，先判断它主要错在边、线、角、形哪一类。" },
      { label: "说理由", text: "每一步计算后补一句理由：定义、定理、已知还是等量代换。" },
      { label: "反问", text: "把图形稍微改变，原结论是否还成立？" }
    ],
    reasoning: [
      { title: "概念线", text: "三角形、多边形、边、角、对角线这些词要说准。" },
      { title: "计算线", text: "内角和、外角、正多边形角度计算要熟。" },
      { title: "证明线", text: "能解释为什么，不把测量当证明。" }
    ],
    application: ["章末复习", "错题整理", "家长口头追问"],
    extraPractices: [
      {
        prompt: "角度综合题卡住时，第一件事通常是什么？",
        options: ["找这个角在哪个三角形里", "直接套多边形公式", "先求周长"],
        answer: 0,
        feedback: "角度题先找所在三角形，再看内角和、外角或平行线。",
        hint: "先定位图形，再选定理。"
      },
      {
        prompt: "证明题里只写“所以相等”，最大的问题是什么？",
        options: ["字太少", "没有写理由", "计算太慢"],
        answer: 1,
        feedback: "证明的核心是每一步都有依据：定义、已知、定理或等量代换。",
        hint: "证明不是答案列表，是理由链。"
      }
    ]
  },
  "congruence-basic": {
    sceneTitle: "两张同尺寸照片可以完全盖住",
    sceneText: "全等不是“差不多像”，而是可以一点不差地叠在一起。三角形被平移、翻折、旋转后，位置变了，对应边和对应角没有变。",
    sceneBullets: ["完全重合", "对应字母对齐", "对应边角相等"],
    exploreTasks: [
      { label: "换变换", text: "依次点平移、翻折、旋转，观察三角形是否仍能盖回原图。" },
      { label: "读字母", text: "看全等式时从左到右配对：第 1 个字母对第 1 个字母。" },
      { label: "推相等", text: "由△ABC≌△DEF，说出 AB、BC、AC 分别对应哪条边。" }
    ],
    reasoning: [
      { title: "看见", text: "形状和大小完全一样的图形，叠上去能一一重合。" },
      { title: "命名", text: "重合的顶点、边、角分别叫对应顶点、对应边、对应角。" },
      { title: "会用", text: "先写正确全等式，再用对应边相等、对应角相等推出结论。" }
    ],
    application: ["读全等式", "找对应关系", "由全等推出边角相等"],
    extraPractices: [
      {
        prompt: "△ABC≌△DCE，A 对 D，B 对 C，C 对 E。∠B 对应哪个角？",
        options: ["∠D", "∠C", "∠E"],
        answer: 1,
        feedback: "第二个字母 B 对第二个字母 C，所以∠B 对应∠C。",
        hint: "按全等式中的字母位置配对。"
      },
      {
        prompt: "两个图形面积相等，就一定全等吗？",
        options: ["一定", "不一定", "只要都是三角形就一定"],
        answer: 1,
        feedback: "面积相等不代表形状、大小完全相同。",
        hint: "全等要求能完全重合。"
      }
    ]
  },
  sss: {
    sceneTitle: "三根钢条钉好后，架子就不会变形",
    sceneText: "三边长度确定后，第三个顶点的位置也被锁住。教材里的三角形钢架例题，就是用 AB=AC、中点带来的 BD=CD、公共边 AD=AD 拼出 SSS。",
    sceneBullets: ["三边确定", "公共边可用", "中点给等边"],
    exploreTasks: [
      { label: "圈三边", text: "在图中找三组相等边：已知一组，中点一组，公共边一组。" },
      { label: "补理由", text: "每写一组边相等，都说它来自已知、中点还是公共边。" },
      { label: "推结论", text: "全等后再说能推出哪一组对应角相等。" }
    ],
    reasoning: [
      { title: "条件", text: "SSS 要三组对应边分别相等。" },
      { title: "来源", text: "题目常把条件藏在中点、等腰、公共边里。" },
      { title: "出口", text: "证明全等不是终点，终点是对应边或对应角相等。" }
    ],
    application: ["钢架稳定", "等腰三角形分成两个小三角形", "作一个角等于已知角的原理"],
    geoGebra: {
      title: "三边锁形实验",
      text: "拖动顶点，观察三条边长一旦固定，三角形形状就被锁住。"
    },
    extraPractices: [
      {
        prompt: "C 是 AB 的中点，能得到什么？",
        options: ["AC=CB", "AC=AB", "∠A=∠B"],
        answer: 0,
        feedback: "中点把线段分成相等两段。",
        hint: "中点只直接给线段相等。"
      },
      {
        prompt: "SSS 证明中，AD 是两个三角形共同的边，应该写成什么？",
        options: ["AD=AD", "AD=AB", "AD=CD"],
        answer: 0,
        feedback: "公共边等于它自己。",
        hint: "同一条线段在两个三角形中同时出现。"
      }
    ]
  },
  sas: {
    sceneTitle: "池塘测距：把够不到的 AB 复制到 DE",
    sceneText: "从 C 出发把 CA、CB 分别延长同样长，利用 CA=CD、CB=CE 和对顶角相等，可以用 SAS 证明两个三角形全等，再量 DE 得 AB。",
    sceneBullets: ["两边", "夹角", "对顶角"],
    exploreTasks: [
      { label: "找夹角", text: "指出两条已知边夹着的角，确认它不是旁边随便一个角。" },
      { label: "看反例", text: "切换边边角，观察短木棍转动时会出现两个不同三角形。" },
      { label: "说测距", text: "用一句话解释为什么 DE 的长度就是池塘两端 AB 的距离。" }
    ],
    reasoning: [
      { title: "SAS", text: "两边和中间夹角分别相等，三角形被唯一确定。" },
      { title: "陷阱", text: "如果角不是夹角，短边可能摆在不同位置，不一定全等。" },
      { title: "应用", text: "够不到的线段，可以构造全等三角形把它转移到能量的位置。" }
    ],
    application: ["池塘测距", "对顶角证明", "辨认边边角反例"],
    geoGebra: {
      title: "SAS 夹角实验",
      text: "保留两条边和夹角，再对比“角不在中间”时为什么可能失效。"
    },
    extraPractices: [
      {
        prompt: "SAS 中的 A 必须是什么角？",
        options: ["任意一个角", "两条已知边的夹角", "最长边的对角"],
        answer: 1,
        feedback: "SAS 的角必须夹在两条已知边之间。",
        hint: "边-角-边，角在中间。"
      },
      {
        prompt: "CA=CD，CB=CE，∠ACB=∠DCE，可判定哪两个三角形全等？",
        options: ["△ABC 和 △DEC", "△ACD 和 △BCE", "△ABE 和 △DCE"],
        answer: 0,
        feedback: "两组边都围绕点 C，夹角也是 C 处的对顶角。",
        hint: "按 C 两侧的两条线段配对。"
      }
    ]
  },
  "asa-aas": {
    sceneTitle: "两束射线相交，第三个顶点就出现了",
    sceneText: "固定一条边，再固定两端的角，两条射线只能相交在一个点。AAS 看起来不是夹边，但可先用内角和补出第三角，再回到 ASA。",
    sceneBullets: ["ASA：夹边", "AAS：补第三角", "AAA：只能定形"],
    exploreTasks: [
      { label: "夹边定位", text: "把底边固定，再看两个端点射线的交点为什么唯一。" },
      { label: "补角", text: "给两个角相等时，口算第三个角为什么也相等。" },
      { label: "缩放反例", text: "观察 AAA 时，三角形可以放大缩小，所以不一定全等。" }
    ],
    reasoning: [
      { title: "ASA", text: "两个角和它们中间的边确定一个三角形。" },
      { title: "AAS", text: "两个角相等推出第三角相等，再配合一条边判定。" },
      { title: "AAA", text: "三个角只确定形状，不能确定大小。" }
    ],
    application: ["公共角证明", "平行线角证明", "用内角和补条件"],
    extraPractices: [
      {
        prompt: "已知两个角分别相等，还能推出第三个角相等，依据是什么？",
        options: ["三角形内角和", "全等定义", "外角和"],
        answer: 0,
        feedback: "第三角都等于 180° 减去另外两个角。",
        hint: "三角形三个内角和为 180°。"
      },
      {
        prompt: "ASA 与 AAS 的共同点是什么？",
        options: ["都有两组角和一组边", "都有三组边", "都只能用于直角三角形"],
        answer: 0,
        feedback: "它们都使用两角一边，只是这条边的位置不同。",
        hint: "看字母：A 和 S 各出现几次。"
      }
    ]
  },
  hl: {
    sceneTitle: "直角三角形多了一个固定条件",
    sceneText: "直角已经把一个角固定为 90°。当斜边和一条直角边也相等时，另一直角边被迫确定，两个直角三角形全等。",
    sceneBullets: ["先确认直角", "找斜边", "找一条直角边"],
    exploreTasks: [
      { label: "认斜边", text: "先找 90°，再找它对面的边，这条才是斜边。" },
      { label: "拖直角边", text: "改变一条直角边，观察斜边固定时另一个顶点的位置。" },
      { label: "写 Rt", text: "证明里把两个三角形写成 Rt△，提醒自己正在用 HL。" }
    ],
    reasoning: [
      { title: "限制", text: "HL 只属于直角三角形，普通三角形不能直接用。" },
      { title: "条件", text: "一组斜边相等，一组直角边相等。" },
      { title: "结论", text: "全等后继续推出目标边或目标角相等。" }
    ],
    application: ["垂直条件题", "公共斜边题", "距离相等证明"],
    extraPractices: [
      {
        prompt: "两个直角三角形只有一条直角边相等，够用 HL 吗？",
        options: ["够", "不够，还要斜边相等", "不够，还要三个角相等"],
        answer: 1,
        feedback: "HL 需要斜边和一条直角边分别相等。",
        hint: "H 是斜边，L 是直角边。"
      },
      {
        prompt: "∠C=∠D=90°，AB=BA，AC=BD，可用 HL 证明哪两个三角形全等？",
        options: ["Rt△ABC 和 Rt△BAD", "△ACD 和 △BCD", "△ABC 和 △ABD 但不能用 HL"],
        answer: 0,
        feedback: "AB 和 BA 是公共斜边，AC、BD 是一组直角边。",
        hint: "先找直角，再找直角对面的斜边。"
      }
    ]
  },
  "angle-bisector-property": {
    sceneTitle: "市场选址：离两条路一样近",
    sceneText: "如果一个点到角两边的距离相等，它就落在角平分线上。三条公路围成区域时，到三条公路距离都相等的位置，就是三条角平分线的交点。",
    sceneBullets: ["距离要垂直", "性质和逆命题", "选址应用"],
    exploreTasks: [
      { label: "拖 P 点", text: "移动角平分线上的 P，比较 PD 和 PE 是否始终相等。" },
      { label: "画垂线", text: "指出 PD、PE 为什么是距离，而不是随便连的线。" },
      { label: "反过来", text: "想象一个点到两边距离相等，它应该落在哪条线上。" }
    ],
    reasoning: [
      { title: "已知", text: "P 在角平分线上，且 PD、PE 分别垂直两边。" },
      { title: "判定", text: "两个小直角三角形有一组直角、一组角平分线角和公共边 OP，可用 AAS。" },
      { title: "结论", text: "全等后得到 PD=PE，也就是到两边距离相等。" }
    ],
    application: ["尺规作角平分线", "点到边距离", "道路或市场选址"],
    geoGebra: {
      title: "角平分线距离实验",
      text: "拖动角平分线上的点 P，观察到两边的垂直距离是否始终相等。"
    },
    extraPractices: [
      {
        prompt: "证明点到角两边距离相等时，通常先作什么辅助线？",
        options: ["过点向两边作垂线", "连接两边任意点", "画中线"],
        answer: 0,
        feedback: "距离必须用垂线段表示。",
        hint: "点到直线的距离是垂线段。"
      },
      {
        prompt: "到三角形三边距离相等的点，是哪三条线的交点？",
        options: ["三条中线", "三条高", "三条角平分线"],
        answer: 2,
        feedback: "到两边距离相等在角平分线上，到三边都相等就是三条角平分线交点。",
        hint: "用角平分线性质的逆命题。"
      }
    ]
  },
  "congruence-review": {
    sceneTitle: "证明题不是猜判定，是搭证据链",
    sceneText: "先看目标边角分别在哪两个三角形里，再从图中收集证据，最后选择 SSS、SAS、ASA、AAS 或 HL。全等只是桥，目标结论才是终点。",
    sceneBullets: ["目标", "三角形", "条件", "判定", "结论"],
    exploreTasks: [
      { label: "定目标", text: "先把题目要求证明的边或角圈出来。" },
      { label: "找载体", text: "再找它们分别属于哪两个三角形。" },
      { label: "拼条件", text: "从已知、公共量、对顶角、平行线、中点、垂直里收集三组条件。" }
    ],
    reasoning: [
      { title: "找对象", text: "目标边角必须成为两个三角形中的对应元素。" },
      { title: "选判定", text: "根据手上的证据决定用 SSS、SAS、ASA、AAS 或 HL。" },
      { title: "回题目", text: "写出三角形全等后，还要补一句对应边或对应角相等。" }
    ],
    application: ["章末复习题", "证明题书写", "几何应用题"],
    extraPractices: [
      {
        prompt: "证明题中，写完△ABC≌△DEF 后，下一步通常是什么？",
        options: ["回到求证，写对应边或对应角相等", "立刻结束", "重新画图"],
        answer: 0,
        feedback: "全等是为了推出目标结论，不能停在全等本身。",
        hint: "问自己：题目原来要证什么？"
      },
      {
        prompt: "下面哪一个不是三角形全等判定？",
        options: ["SAS", "AAA", "HL"],
        answer: 1,
        feedback: "AAA 只能确定形状，不能确定大小。",
        hint: "全等要形状和大小都确定。"
      }
    ]
  }
};

const STORAGE_KEY = "math8_learning_state_v3";
const SESSION_KEY = "math8_supabase_session_v1";

const $ = (selector) => document.querySelector(selector);

const appState = loadState();
const appConfig = window.MATH8_APP_CONFIG || {};
const syncState = {
  session: loadSession(),
  busy: false
};
let geoGebraScriptPromise = null;
const uiMemory = {
  triangle: { ab: 7, ac: 7, bc: 5 },
  lineType: "height",
  stability: { skew: 38, brace: false },
  anglePoint: { x: 260, y: 88 },
  angleProof: false,
  exterior: { a: 62, b: 48 },
  polygonN: 5,
  formulaN: 8,
  congruenceMode: "translate",
  conditionTrap: false,
  hlLeg: 120,
  bisector: { distance: 155, inverse: false }
};

function loadState() {
  const fallback = {
    chapterId: "ch11",
    lessonId: "edges",
    stepId: "discover",
    progress: {},
    quiz: {},
    railOpen: false,
    coachOpen: false
  };
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return fallback;
  }
}

function loadSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
  } catch {
    return null;
  }
}

function saveSession(session) {
  syncState.session = session;
  if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  else localStorage.removeItem(SESSION_KEY);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function supabaseEnabled() {
  return Boolean(appConfig.supabaseUrl && appConfig.supabaseAnonKey);
}

async function supabaseFetch(path, options = {}) {
  if (!supabaseEnabled()) throw new Error("还没有配置 Supabase URL 和 anon key。");
  const headers = {
    apikey: appConfig.supabaseAnonKey,
    "Content-Type": "application/json",
    ...(options.headers || {})
  };
  if (syncState.session?.access_token) {
    headers.Authorization = `Bearer ${syncState.session.access_token}`;
  }
  const response = await fetch(`${appConfig.supabaseUrl}${path}`, {
    ...options,
    headers
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const message = data?.msg || data?.message || data?.error_description || data?.error || "Supabase 请求失败";
    throw new Error(message);
  }
  return data;
}

async function signUp(email, password) {
  const data = await supabaseFetch("/auth/v1/signup", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });
  if (data?.access_token) saveSession(data);
  return data;
}

async function signIn(email, password) {
  const data = await supabaseFetch("/auth/v1/token?grant_type=password", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });
  saveSession(data);
  return data;
}

async function signOut() {
  if (syncState.session?.access_token) {
    await supabaseFetch("/auth/v1/logout", { method: "POST", body: "{}" }).catch(() => {});
  }
  saveSession(null);
}

function progressRowsForUpload() {
  const userId = syncState.session?.user?.id;
  if (!userId) return [];
  return LESSONS.map((lesson) => {
    const progress = appState.progress[lesson.id] || {};
    return {
      user_id: userId,
      lesson_id: lesson.id,
      step_id: lesson.id === appState.lessonId ? appState.stepId : null,
      mastered: Boolean(progress.mastered),
      correct_count: Number(progress.correct || 0),
      recap: progress.recap || null,
      payload: progress
    };
  });
}

async function uploadProgress() {
  const rows = progressRowsForUpload();
  if (!rows.length) throw new Error("请先登录 Supabase。");
  await supabaseFetch("/rest/v1/learning_progress?on_conflict=user_id,lesson_id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify(rows)
  });
}

async function downloadProgress() {
  if (!syncState.session?.access_token) throw new Error("请先登录 Supabase。");
  const rows = await supabaseFetch("/rest/v1/learning_progress?select=lesson_id,step_id,mastered,correct_count,recap,payload,updated_at");
  rows.forEach((row) => {
    appState.progress[row.lesson_id] = {
      ...(appState.progress[row.lesson_id] || {}),
      ...(row.payload || {}),
      mastered: row.mastered,
      correct: row.correct_count,
      recap: row.recap || row.payload?.recap || ""
    };
  });
  saveState();
}

async function syncProgress() {
  await uploadProgress();
  await downloadProgress();
}

function currentLesson() {
  return LESSONS.find((lesson) => lesson.id === appState.lessonId) || LESSONS[0];
}

function chapterForLesson(lesson) {
  if (lesson?.chapter) {
    return CHAPTERS.find((chapter) => chapter.title === lesson.chapter) || CHAPTERS[0];
  }
  return lesson?.no >= 9 ? CHAPTERS[1] : CHAPTERS[0];
}

function currentChapter() {
  const lessonChapter = chapterForLesson(currentLesson());
  const savedChapter = CHAPTERS.find((chapter) => chapter.id === appState.chapterId);
  if (!savedChapter || savedChapter.id !== lessonChapter.id) {
    appState.chapterId = lessonChapter.id;
    return lessonChapter;
  }
  return savedChapter;
}

function currentStepIndex() {
  return Math.max(0, STEPS.findIndex((step) => step.id === appState.stepId));
}

function render() {
  renderShell();
  renderLessonList();
  renderStepTabs();
  renderStudyPanel();
  renderCoach();
  saveState();
}

function renderShell() {
  $("#appGrid").classList.toggle("rail-collapsed", !appState.railOpen);
  $("#appGrid").classList.toggle("coach-collapsed", !appState.coachOpen);
  $("#toggleRail").textContent = appState.railOpen ? "‹" : "☰";
  $("#toggleRail").title = appState.railOpen ? "收起学习地图" : "展开学习地图";
  $("#toggleRail").setAttribute("aria-label", appState.railOpen ? "收起学习地图" : "展开学习地图");
  $("#toggleCoach").textContent = appState.coachOpen ? "›" : "?";
  $("#toggleCoach").title = appState.coachOpen ? "收起家长驾驶舱" : "展开家长驾驶舱";
  $("#toggleCoach").setAttribute("aria-label", appState.coachOpen ? "收起家长驾驶舱" : "展开家长驾驶舱");
  $("#closeCoach").textContent = appState.coachOpen ? "×" : "?";
  $("#closeCoach").title = appState.coachOpen ? "收起家长驾驶舱" : "展开家长驾驶舱";
  $("#closeCoach").setAttribute("aria-label", appState.coachOpen ? "收起家长驾驶舱" : "展开家长驾驶舱");
}

function renderLessonList() {
  const chapter = currentChapter();
  const visibleLessons = LESSONS.filter((lesson) => chapterForLesson(lesson).id === chapter.id);
  const chapterDone = visibleLessons.filter((lesson) => appState.progress[lesson.id]?.mastered).length;
  const totalDone = LESSONS.filter((lesson) => appState.progress[lesson.id]?.mastered).length;
  $("#progressText").textContent = `${chapterDone}/${visibleLessons.length}`;
  $("#overallProgress").style.width = `${(chapterDone / visibleLessons.length) * 100}%`;

  $("#lessonList").innerHTML = `
    <div class="map-mini" aria-label="精简学习地图">
      ${CHAPTERS.map((item) => `
        <button class="mini-button ${item.id === chapter.id ? "active" : ""}" data-chapter="${item.id}" type="button" title="${item.title}" aria-label="${item.title}">
          ${item.id === "ch11" ? "11" : "12"}
        </button>
      `).join("")}
      <div class="mini-divider"></div>
      ${visibleLessons.map((lesson) => `
        <button class="mini-button ${lesson.id === appState.lessonId ? "active" : ""} ${appState.progress[lesson.id]?.mastered ? "done" : ""}" data-lesson="${lesson.id}" type="button" title="${lesson.title}" aria-label="${lesson.title}">
          ${lesson.no}
        </button>
      `).join("")}
    </div>
    <div class="map-full">
      <div class="chapter-tabs" aria-label="章节选择">
      ${CHAPTERS.map((item) => {
        const active = item.id === chapter.id;
        const lessons = LESSONS.filter((lesson) => chapterForLesson(lesson).id === item.id);
        const done = lessons.filter((lesson) => appState.progress[lesson.id]?.mastered).length;
        return `
          <button class="chapter-tab ${active ? "active" : ""}" data-chapter="${item.id}" type="button">
            <span>${item.shortTitle}</span>
            <strong>${done}/${lessons.length}</strong>
          </button>
        `;
      }).join("")}
      </div>
      <p class="rail-subtext">${chapter.title} · 第 ${chapter.range} 课 · 总进度 ${totalDone}/${LESSONS.length}</p>
      <div class="chapter-lesson-list">
      ${visibleLessons.map((lesson) => {
    const done = appState.progress[lesson.id]?.mastered;
    const active = lesson.id === appState.lessonId;
    return `
      <button class="lesson-button ${active ? "active" : ""} ${done ? "done" : ""}" data-lesson="${lesson.id}" type="button">
        <span class="lesson-number">${lesson.no}</span>
        <span class="lesson-copy">
          <strong>${lesson.title}</strong>
          <span>${lesson.subtitle}</span>
        </span>
        <span class="lesson-check">${done ? "✓" : ""}</span>
      </button>
    `;
      }).join("")}
      </div>
    </div>
  `;

  document.querySelectorAll("[data-chapter]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.chapterId = button.dataset.chapter;
      const firstLesson = LESSONS.find((lesson) => chapterForLesson(lesson).id === appState.chapterId);
      if (firstLesson && chapterForLesson(currentLesson()).id !== appState.chapterId) {
        appState.lessonId = firstLesson.id;
        appState.stepId = "discover";
      }
      render();
    });
  });

  document.querySelectorAll("[data-lesson]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.lessonId = button.dataset.lesson;
      appState.chapterId = chapterForLesson(currentLesson()).id;
      appState.stepId = "discover";
      render();
    });
  });
}

function renderStepTabs() {
  $("#stepTabs").innerHTML = STEPS.map((step) => `
    <button class="step-tab ${step.id === appState.stepId ? "active" : ""}" data-step="${step.id}" type="button" role="tab">
      <span aria-hidden="true">${step.icon}</span>
      <strong>${step.label}</strong>
    </button>
  `).join("");

  document.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.stepId = button.dataset.step;
      render();
    });
  });
}

function renderStudyPanel() {
  const lesson = currentLesson();
  const chapter = chapterForLesson(lesson);
  appState.chapterId = chapter.id;
  $("#chapterTitle").textContent = chapter.title;
  $("#lessonKicker").textContent = `第 ${lesson.no} 课`;
  $("#lessonTitle").textContent = lesson.title;
  $("#lessonStatus").textContent = appState.progress[lesson.id]?.mastered ? "已通关" : "学习中";

  if (appState.stepId === "discover") renderDiscover(lesson);
  if (appState.stepId === "understand") renderUnderstand(lesson);
  if (appState.stepId === "practice") renderPractice(lesson);
  if (appState.stepId === "master") renderMaster(lesson);
}

function renderDiscover(lesson) {
  $("#studyContent").innerHTML = `
    <article class="module">
      <div class="module-head">
        <div>
          <h3>${lesson.discoverTitle}</h3>
          <p>${lesson.discoverPrompt}</p>
        </div>
        <span class="result-pill">动手发现</span>
      </div>
      ${sceneHtml(lesson)}
      <div id="interactiveMount"></div>
      ${exploreTasksHtml(lesson)}
      ${geoGebraHtml(lesson)}
      ${navigatorHtml()}
    </article>
  `;
  mountInteraction(lesson);
  bindGeoGebra(lesson);
  bindNavigator();
}

function renderUnderstand(lesson) {
  $("#studyContent").innerHTML = `
    <article class="module">
      <div class="module-head">
        <div>
          <h3>看懂后再命名</h3>
          <p>只抓关键词：图形、条件、结论。</p>
        </div>
        <span class="result-pill">原理</span>
      </div>
      <ul class="principle-list">${lesson.principles.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
    ${reasoningHtml(lesson)}
    <article class="module">
      <div class="module-head">
        <div>
          <h3>容易看错</h3>
          <p>先看图，再排除。</p>
        </div>
      </div>
      <ul class="mistake-list">${lesson.mistakes.map((item) => `<li>${item}</li>`).join("")}</ul>
      ${navigatorHtml()}
    </article>
  `;
  bindNavigator();
}

function renderPractice(lesson) {
  const practices = lessonPractices(lesson);
  const quiz = quizState(lesson);
  if (quiz.index >= practices.length) quiz.index = 0;
  const item = practices[quiz.index];
  const checked = quiz.checked[quiz.index];
  const selected = quiz.selected[quiz.index];
  const visual = practiceVisualHtml(lesson, item, selected, checked);

  $("#studyContent").innerHTML = `
    <article class="quiz-card">
      <div class="module-head">
        <div>
          <h3>图形题 ${quiz.index + 1}/${practices.length}</h3>
          <p>${visual ? "看图，点答案。" : item.prompt}</p>
        </div>
        <span class="result-pill">即时反馈</span>
      </div>
      ${visual}
      ${practiceHintHtml(item)}
      <div class="quiz-options">
        ${item.options.map((option, index) => {
          let cls = selected === index ? "selected" : "";
          if (checked && index === item.answer) cls = "correct";
          if (checked && selected === index && index !== item.answer) cls = "wrong";
          return `
            <button class="option-button ${cls}" data-option="${index}" type="button">
              <span class="option-key">${String.fromCharCode(65 + index)}</span>
              <strong>${option}</strong>
            </button>
          `;
        }).join("")}
      </div>
      <div class="feedback ${checked ? (selected === item.answer ? "good" : "bad") : ""}">
        ${checked ? item.feedback : "先点一个答案。"}
      </div>
      <div class="quiz-actions">
        <button class="ghost-button" id="prevQuestion" type="button">上一题</button>
        <button class="primary-button" id="checkQuestion" type="button">${checked ? "再检查" : "检查答案"}</button>
        <button class="ghost-button" id="nextQuestion" type="button">下一题</button>
      </div>
      ${navigatorHtml()}
    </article>
  `;

  document.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => {
      quiz.selected[quiz.index] = Number(button.dataset.option);
      quiz.checked[quiz.index] = false;
      render();
    });
  });

  $("#checkQuestion").addEventListener("click", () => {
    if (quiz.selected[quiz.index] === undefined) {
      showToast("先选一个答案");
      return;
    }
    quiz.checked[quiz.index] = true;
    if (quiz.selected[quiz.index] === item.answer) {
      appState.progress[lesson.id] = {
        ...appState.progress[lesson.id],
        correct: Math.max(appState.progress[lesson.id]?.correct || 0, countCorrect(lesson))
      };
    }
    render();
  });

  $("#prevQuestion").addEventListener("click", () => {
    quiz.index = (quiz.index - 1 + practices.length) % practices.length;
    render();
  });

  $("#nextQuestion").addEventListener("click", () => {
    quiz.index = (quiz.index + 1) % practices.length;
    render();
  });

  bindNavigator();
}

function renderMaster(lesson) {
  const correct = countCorrect(lesson);
  const practices = lessonPractices(lesson);
  $("#studyContent").innerHTML = `
    <article class="module">
      <div class="module-head">
        <div>
          <h3>通关前，自己讲一遍</h3>
          <p>会做题还不够。能说出“为什么”，才是真的掌握。</p>
        </div>
        <span class="result-pill">${correct}/${practices.length} 题正确</span>
      </div>
      ${applicationHtml(lesson)}
      <div class="recap-box">
        ${lesson.mastery.map((item) => `<div class="recap-prompt">${item}</div>`).join("")}
        <textarea class="recap-input" id="recapInput" placeholder="把最重要的结论用自己的话写下来。可以很短，但要说清楚理由。">${appState.progress[lesson.id]?.recap || ""}</textarea>
        <button class="primary-button" id="markMastered" type="button">我会了，标记通关</button>
      </div>
      ${navigatorHtml()}
    </article>
  `;

  $("#recapInput").addEventListener("input", (event) => {
    appState.progress[lesson.id] = {
      ...appState.progress[lesson.id],
      recap: event.target.value
    };
    saveState();
  });

  $("#markMastered").addEventListener("click", () => {
    appState.progress[lesson.id] = {
      ...appState.progress[lesson.id],
      mastered: true,
      masteredAt: new Date().toISOString()
    };
    showToast(`${lesson.title} 已通关`);
    render();
  });

  bindNavigator();
}

function lessonDetail(lesson) {
  return LESSON_ENRICHMENT[lesson.id] || {};
}

function lessonPractices(lesson) {
  const detail = lessonDetail(lesson);
  return [...lesson.practices, ...(detail.extraPractices || [])];
}

function sceneHtml(lesson) {
  const detail = lessonDetail(lesson);
  if (!detail.sceneTitle) return "";
  return `
    <section class="scene-card">
      <div class="scene-art" aria-hidden="true">${sceneSvg(lesson.id)}</div>
      <div class="scene-copy">
        <p class="eyebrow">生活情境</p>
        <h4>${detail.sceneTitle}</h4>
        <p>${detail.sceneText}</p>
        <div class="scene-bullets">
          ${(detail.sceneBullets || []).map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function sceneSvg(id) {
  if (id === "edges") {
    return `
      <svg viewBox="0 0 220 150">
        <path d="M35 118 L110 32 L185 118" fill="#e7f3f1" stroke="#324250" stroke-width="8" stroke-linejoin="round"></path>
        <line x1="35" y1="118" x2="185" y2="118" stroke="#2563a9" stroke-width="8" stroke-linecap="round"></line>
        <line x1="28" y1="132" x2="88" y2="132" stroke="#b35f12" stroke-width="6" stroke-linecap="round"></line>
        <line x1="98" y1="132" x2="198" y2="132" stroke="#d94f45" stroke-width="6" stroke-linecap="round"></line>
      </svg>
    `;
  }
  if (id === "special-lines") {
    return `
      <svg viewBox="0 0 220 150">
        <polygon points="110,24 38,124 184,124" fill="#eef5f4" stroke="#324250" stroke-width="7" stroke-linejoin="round"></polygon>
        <line x1="110" y1="24" x2="110" y2="124" stroke="#16756f" stroke-width="6"></line>
        <line x1="110" y1="24" x2="78" y2="124" stroke="#b35f12" stroke-width="5"></line>
        <line x1="110" y1="24" x2="142" y2="124" stroke="#2563a9" stroke-width="5"></line>
      </svg>
    `;
  }
  if (id === "stability") {
    return `
      <svg viewBox="0 0 220 150">
        <polygon points="52,32 172,40 188,122 36,116" fill="#f4f7fa" stroke="#324250" stroke-width="8" stroke-linejoin="round"></polygon>
        <line x1="52" y1="32" x2="188" y2="122" stroke="#16756f" stroke-width="8" stroke-linecap="round"></line>
        <text x="52" y="142" fill="#16756f" font-size="17" font-weight="800">切成三角形</text>
      </svg>
    `;
  }
  if (id === "angle-sum") {
    return `
      <svg viewBox="0 0 220 150">
        <polygon points="108,30 42,120 184,120" fill="#eef5f4" stroke="#324250" stroke-width="7" stroke-linejoin="round"></polygon>
        <line x1="30" y1="42" x2="190" y2="42" stroke="#b35f12" stroke-width="5" stroke-dasharray="8 7"></line>
        <path d="M62 42 Q86 20 110 42 Q134 64 158 42" fill="none" stroke="#d94f45" stroke-width="5"></path>
        <text x="71" y="141" fill="#324250" font-size="18" font-weight="800">拼成平角</text>
      </svg>
    `;
  }
  if (id === "exterior") {
    return `
      <svg viewBox="0 0 220 150">
        <polygon points="44,120 108,34 164,120" fill="#eef5f4" stroke="#324250" stroke-width="7" stroke-linejoin="round"></polygon>
        <line x1="164" y1="120" x2="204" y2="120" stroke="#d94f45" stroke-width="7" stroke-linecap="round"></line>
        <path d="M144 102 Q174 86 199 112" fill="none" stroke="#d94f45" stroke-width="5"></path>
        <text x="128" y="92" fill="#d94f45" font-size="18" font-weight="800">外角</text>
      </svg>
    `;
  }
  if (id === "polygon-basics") {
    return `
      <svg viewBox="0 0 220 150">
        <polygon points="110,20 178,58 162,124 58,124 42,58" fill="#f4f7fa" stroke="#324250" stroke-width="7" stroke-linejoin="round"></polygon>
        <line x1="110" y1="20" x2="162" y2="124" stroke="#16756f" stroke-width="5"></line>
        <line x1="110" y1="20" x2="58" y2="124" stroke="#16756f" stroke-width="5"></line>
        <circle cx="110" cy="20" r="9" fill="#16756f"></circle>
      </svg>
    `;
  }
  if (id === "polygon-sum") {
    return `
      <svg viewBox="0 0 220 150">
        <polygon points="110,18 172,48 184,110 132,134 68,134 36,82" fill="#eef5f4" stroke="#324250" stroke-width="7" stroke-linejoin="round"></polygon>
        <line x1="110" y1="18" x2="184" y2="110" stroke="#16756f" stroke-width="5"></line>
        <line x1="110" y1="18" x2="132" y2="134" stroke="#16756f" stroke-width="5"></line>
        <line x1="110" y1="18" x2="68" y2="134" stroke="#16756f" stroke-width="5"></line>
      </svg>
    `;
  }
  if (id === "congruence-basic") {
    return `
      <svg viewBox="0 0 220 150">
        <polygon points="34,118 90,28 142,118" fill="#eef5f4" stroke="#324250" stroke-width="7" stroke-linejoin="round"></polygon>
        <polygon points="78,118 134,28 186,118" fill="#fff8ee" stroke="#16756f" stroke-width="6" stroke-linejoin="round" opacity="0.86"></polygon>
        <path d="M64 132 H164" stroke="#b35f12" stroke-width="5" stroke-dasharray="8 7"></path>
      </svg>
    `;
  }
  if (id === "sss" || id === "sas" || id === "asa-aas") {
    return `
      <svg viewBox="0 0 220 150">
        <polygon points="48,122 116,24 180,122" fill="#eef5f4" stroke="#324250" stroke-width="7" stroke-linejoin="round"></polygon>
        <line x1="48" y1="122" x2="116" y2="24" stroke="#16756f" stroke-width="6"></line>
        <line x1="116" y1="24" x2="180" y2="122" stroke="#2563a9" stroke-width="6"></line>
        <path d="M94 56 q22 22 44 0" fill="none" stroke="#b35f12" stroke-width="5"></path>
        <text x="64" y="142" fill="#324250" font-size="17" font-weight="800">${id === "sss" ? "SSS" : id === "sas" ? "SAS" : "ASA / AAS"}</text>
      </svg>
    `;
  }
  if (id === "hl") {
    return `
      <svg viewBox="0 0 220 150">
        <polygon points="42,124 178,124 178,34" fill="#eef5f4" stroke="#324250" stroke-width="7" stroke-linejoin="round"></polygon>
        <path d="M154 124 v-24 h24" fill="none" stroke="#b35f12" stroke-width="5"></path>
        <line x1="42" y1="124" x2="178" y2="34" stroke="#16756f" stroke-width="7"></line>
        <text x="72" y="144" fill="#324250" font-size="17" font-weight="800">HL</text>
      </svg>
    `;
  }
  if (id === "angle-bisector-property") {
    return `
      <svg viewBox="0 0 220 150">
        <line x1="34" y1="76" x2="188" y2="28" stroke="#324250" stroke-width="7" stroke-linecap="round"></line>
        <line x1="34" y1="76" x2="188" y2="124" stroke="#324250" stroke-width="7" stroke-linecap="round"></line>
        <line x1="34" y1="76" x2="192" y2="76" stroke="#16756f" stroke-width="6" stroke-dasharray="8 7"></line>
        <circle cx="128" cy="76" r="9" fill="#16756f"></circle>
        <line x1="128" y1="76" x2="116" y2="40" stroke="#2563a9" stroke-width="5"></line>
        <line x1="128" y1="76" x2="116" y2="112" stroke="#2563a9" stroke-width="5"></line>
      </svg>
    `;
  }
  if (id === "congruence-review") {
    return `
      <svg viewBox="0 0 220 150">
        <rect x="28" y="28" width="164" height="94" rx="8" fill="#f4f7fa" stroke="#324250" stroke-width="5"></rect>
        <path d="M52 58 H88 H124 H168" stroke="#16756f" stroke-width="6" stroke-linecap="round"></path>
        <path d="M52 92 H96 H142 H168" stroke="#b35f12" stroke-width="6" stroke-linecap="round"></path>
        <circle cx="52" cy="58" r="7" fill="#16756f"></circle>
        <circle cx="168" cy="92" r="7" fill="#b35f12"></circle>
        <text x="54" y="142" fill="#324250" font-size="16" font-weight="800">证明路线</text>
      </svg>
    `;
  }
  return `
    <svg viewBox="0 0 220 150">
      <path d="M30 112 C66 62 102 64 132 92 S178 122 198 48" fill="none" stroke="#16756f" stroke-width="8" stroke-linecap="round"></path>
      <circle cx="48" cy="100" r="16" fill="#e7f3f1" stroke="#324250" stroke-width="5"></circle>
      <circle cx="112" cy="82" r="16" fill="#fff7e8" stroke="#324250" stroke-width="5"></circle>
      <circle cx="178" cy="60" r="16" fill="#eaf1fb" stroke="#324250" stroke-width="5"></circle>
    </svg>
  `;
}

function exploreTasksHtml(lesson) {
  const tasks = lessonDetail(lesson).exploreTasks || [];
  if (!tasks.length) return "";
  return `
    <section class="task-grid" aria-label="动手任务">
      ${tasks.map((task) => `
        <div class="task-card">
          <strong>${task.label}</strong>
          <p>${task.text}</p>
        </div>
      `).join("")}
    </section>
  `;
}

function reasoningHtml(lesson) {
  const detail = lessonDetail(lesson);
  const steps = detail.reasoning || [];
  if (!steps.length) return "";
  return `
    <article class="module">
      <div class="module-head">
        <div>
          <h3>从图形到原理</h3>
          <p>先看到现象，再把它变成能做题的语言。</p>
        </div>
        <span class="result-pill">会解释</span>
      </div>
      <div class="reasoning-steps">
        ${steps.map((step, index) => `
          <div class="reason-step">
            <span>${index + 1}</span>
            <strong>${step.title}</strong>
            <p>${step.text}</p>
          </div>
        `).join("")}
      </div>
      ${applicationHtml(lesson)}
    </article>
  `;
}

function applicationHtml(lesson) {
  const items = lessonDetail(lesson).application || [];
  if (!items.length) return "";
  return `
    <div class="application-strip">
      <span>会用在</span>
      ${items.map((item) => `<strong>${item}</strong>`).join("")}
    </div>
  `;
}

function geoGebraHtml(lesson) {
  const geo = geoGebraConfig(lesson);
  return `
    <section class="geogebra-card">
      <div>
        <p class="eyebrow">GeoGebra</p>
        <h4>${geo.title}</h4>
        <p>${geo.text}</p>
      </div>
      <button class="icon-button" id="loadGeoGebra" type="button" title="打开 GeoGebra 实验板" aria-label="打开 GeoGebra 实验板">↗</button>
    </section>
  `;
}

function geoGebraConfig(lesson) {
  return lessonDetail(lesson).geoGebra || {
    title: `${lesson.title}实验板`,
    text: "打开后拖动点，观察图形里什么在变化、什么保持不变。"
  };
}

function bindGeoGebra(lesson) {
  const button = $("#loadGeoGebra");
  if (!button) return;
  button.addEventListener("click", async () => {
    const mount = ensureGeoGebraOverlay();
    button.disabled = true;
    mount.classList.add("open");
    mount.innerHTML = `
      <div class="geo-shell">
        <div class="geo-top">
          <strong>${geoGebraConfig(lesson).title}</strong>
          <button class="icon-button compact" id="closeGeoGebra" type="button" title="关闭 GeoGebra" aria-label="关闭 GeoGebra">×</button>
        </div>
        <div class="geo-body" id="geoGebraApplet"><div class="geo-loading">正在加载 GeoGebra...</div></div>
      </div>
    `;
    $("#closeGeoGebra").addEventListener("click", () => {
      mount.classList.remove("open");
      mount.innerHTML = "";
      button.disabled = false;
    });
    try {
      await loadGeoGebraScript();
      const appletMount = $("#geoGebraApplet");
      const width = Math.min(1120, Math.max(360, appletMount.clientWidth || window.innerWidth - 80));
      const height = Math.min(720, Math.max(460, window.innerHeight - 150));
      const applet = new window.GGBApplet({
        appName: "geometry",
        width,
        height,
        language: "zh-CN",
        perspective: "G",
        showToolBar: false,
        showAlgebraView: false,
        showAlgebraInput: false,
        showMenuBar: false,
        showResetIcon: true,
        enableRightClick: false,
        enableShiftDragZoom: false,
        appletOnLoad(api) {
          geoGebraCommands(lesson.id).forEach((command) => api.evalCommand(command));
        }
      }, true);
      appletMount.innerHTML = "";
      applet.inject("geoGebraApplet");
    } catch (error) {
      button.disabled = false;
      const appletMount = $("#geoGebraApplet");
      if (appletMount) {
        appletMount.innerHTML = `
          <p class="small-note">GeoGebra 暂时没有加载成功。上面的互动图仍可继续使用，稍后再试即可。</p>
        `;
      }
    }
  });
}

function ensureGeoGebraOverlay() {
  let overlay = document.querySelector("#geoGebraOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "geoGebraOverlay";
    overlay.className = "geogebra-mount";
    overlay.setAttribute("aria-live", "polite");
    document.body.appendChild(overlay);
  }
  return overlay;
}

function loadGeoGebraScript() {
  if (window.GGBApplet) return Promise.resolve();
  if (!geoGebraScriptPromise) {
    geoGebraScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://www.geogebra.org/apps/deployggb.js";
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  return geoGebraScriptPromise;
}

function geoGebraCommands(id) {
  if (id === "edges") {
    return [
      "A=(0,0)",
      "B=(5,0)",
      "c=Circle(A,3)",
      "d=Circle(B,4)",
      "C=Intersect(c,d,1)",
      "Polygon(A,B,C)"
    ];
  }
  if (id === "special-lines") {
    return [
      "A=(2,4)",
      "B=(0,0)",
      "C=(6,0)",
      "Polygon(A,B,C)",
      "M=Midpoint(B,C)",
      "Segment(A,M)",
      "h=PerpendicularLine(A,Line(B,C))"
    ];
  }
  if (id === "stability") {
    return [
      "A=(0,0)",
      "B=(5,0)",
      "C=(6,3)",
      "D=(1,3)",
      "Polygon(A,B,C,D)",
      "Segment(A,C)"
    ];
  }
  if (id === "angle-sum") {
    return [
      "A=(2,4)",
      "B=(0,0)",
      "C=(6,0)",
      "Polygon(A,B,C)",
      "Angle(A,B,C)",
      "Angle(B,C,A)",
      "Angle(C,A,B)"
    ];
  }
  if (id === "exterior") {
    return [
      "A=(2,4)",
      "B=(0,0)",
      "C=(5,0)",
      "D=(7,0)",
      "Polygon(A,B,C)",
      "Ray(C,D)",
      "Angle(A,C,D)"
    ];
  }
  if (id === "polygon-basics") {
    return [
      "A=(1,4)",
      "B=(5,4)",
      "C=(6,1)",
      "D=(3,-1)",
      "E=(0,1)",
      "Polygon(A,B,C,D,E)",
      "Segment(A,C)",
      "Segment(A,D)"
    ];
  }
  if (id === "polygon-sum") {
    return [
      "A=(1,4)",
      "B=(5,4)",
      "C=(6,1)",
      "D=(3,-1)",
      "E=(0,1)",
      "Polygon(A,B,C,D,E)",
      "Segment(A,C)",
      "Segment(A,D)"
    ];
  }
  if (id === "review") {
    return [
      "A=(1,4)",
      "B=(0,0)",
      "C=(6,0)",
      "Polygon(A,B,C)",
      "D=Midpoint(B,C)",
      "Segment(A,D)",
      "Angle(A,B,C)"
    ];
  }
  if (id === "sss") {
    return [
      "A=(0,0)",
      "B=(5,0)",
      "c=Circle(A,3)",
      "d=Circle(B,4)",
      "C=Intersect(c,d,1)",
      "Polygon(A,B,C)",
      "Segment(A,B)",
      "Segment(A,C)",
      "Segment(B,C)"
    ];
  }
  if (id === "sas") {
    return [
      "A=(0,0)",
      "B=(5,0)",
      "C=(2.2,3)",
      "D=(0,-4)",
      "E=(5,-4)",
      "F=(2.2,-1)",
      "Polygon(A,B,C)",
      "Polygon(D,E,F)",
      "Angle(B,A,C)",
      "Angle(E,D,F)"
    ];
  }
  if (id === "angle-bisector-property") {
    return [
      "O=(0,0)",
      "A=(5,2)",
      "B=(5,-2)",
      "l=Ray(O,A)",
      "m=Ray(O,B)",
      "n=AngleBisector(A,O,B)",
      "P=(3,0)",
      "D=ClosestPoint(l,P)",
      "E=ClosestPoint(m,P)",
      "Segment(P,D)",
      "Segment(P,E)"
    ];
  }
  if (id === "congruence-basic") {
    return [
      "A=(0,0)",
      "B=(4,0)",
      "C=(1,3)",
      "D=(6,0)",
      "E=(10,0)",
      "F=(7,3)",
      "Polygon(A,B,C)",
      "Polygon(D,E,F)"
    ];
  }
  if (id === "asa-aas") {
    return [
      "A=(0,0)",
      "B=(5,0)",
      "C=(2,3)",
      "D=(7,0)",
      "E=(12,0)",
      "F=(9,3)",
      "Polygon(A,B,C)",
      "Polygon(D,E,F)",
      "Angle(C,A,B)",
      "Angle(A,B,C)"
    ];
  }
  if (id === "hl") {
    return [
      "A=(0,0)",
      "B=(5,0)",
      "C=(5,3)",
      "D=(7,0)",
      "E=(12,0)",
      "F=(12,3)",
      "Polygon(A,B,C)",
      "Polygon(D,E,F)",
      "Angle(A,B,C)",
      "Angle(D,E,F)"
    ];
  }
  if (id === "congruence-review") {
    return [
      "A=(0,0)",
      "B=(4,0)",
      "C=(1,3)",
      "D=(6,0)",
      "E=(10,0)",
      "F=(7,3)",
      "Polygon(A,B,C)",
      "Polygon(D,E,F)",
      "Segment(A,D)",
      "Segment(B,E)",
      "Segment(C,F)"
    ];
  }
  return [];
}

function practiceHintHtml(item) {
  if (!item.hint) return "";
  return `
    <div class="practice-hint">
      <span>解题抓手</span>
      <strong>${item.hint}</strong>
    </div>
  `;
}

function practiceVisualHtml(lesson, item, selected, checked) {
  const outcome = checked ? (selected === item.answer ? "good" : "bad") : selected !== undefined ? "selected" : "";
  const caption = item.prompt;
  const svg = practiceVisualSvg(lesson.id);
  if (!svg) return "";
  return `
    <figure class="practice-visual ${outcome}">
      ${svg}
      <figcaption>${caption}</figcaption>
    </figure>
  `;
}

function visualAngleArc(vertex, p1, p2, radius, label = "", labelRadius = radius + 24, cls = "visual-angle") {
  let start = Math.atan2(p1.y - vertex.y, p1.x - vertex.x);
  let end = Math.atan2(p2.y - vertex.y, p2.x - vertex.x);
  let delta = end - start;
  while (delta < 0) delta += Math.PI * 2;
  if (delta > Math.PI) {
    [start, end] = [end, start];
    delta = Math.PI * 2 - delta;
  }
  const from = {
    x: round(vertex.x + Math.cos(start) * radius),
    y: round(vertex.y + Math.sin(start) * radius)
  };
  const to = {
    x: round(vertex.x + Math.cos(start + delta) * radius),
    y: round(vertex.y + Math.sin(start + delta) * radius)
  };
  const mid = start + delta / 2;
  const labelPoint = {
    x: round(vertex.x + Math.cos(mid) * labelRadius),
    y: round(vertex.y + Math.sin(mid) * labelRadius)
  };
  return `
    <path d="M${from.x} ${from.y} A${radius} ${radius} 0 0 1 ${to.x} ${to.y}" fill="none" class="${cls}"></path>
    ${label ? `<text x="${labelPoint.x}" y="${labelPoint.y}" class="visual-degree">${label}</text>` : ""}
  `;
}

function practiceVisualSvg(id) {
  if (id === "edges") {
    return `
      <svg viewBox="0 0 560 260" role="img" aria-label="三边关系图形题">
        <line x1="74" y1="206" x2="246" y2="206" class="visual-mark blue"></line>
        <line x1="74" y1="148" x2="190" y2="148" class="visual-mark green"></line>
        <line x1="74" y1="90" x2="160" y2="90" class="visual-mark amber"></line>
        <path d="M326 206 L410 74 L506 206 Z" fill="#effaff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></path>
        <path d="M74 44 h172" stroke="#ef6b5b" stroke-width="5" stroke-linecap="round"></path>
        <text x="72" y="232" class="visual-label">最长边</text>
        <text x="310" y="236" class="visual-badge">两短边和 > 最长边</text>
      </svg>
    `;
  }
  if (id === "special-lines") {
    return `
      <svg viewBox="0 0 560 260" role="img" aria-label="高中线角平分线图形题">
        <polygon points="116,208 282,208 204,52" fill="#effaff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
        <line x1="204" y1="52" x2="204" y2="208" class="visual-mark blue"></line>
        <path d="M184 208 v-20 h20" fill="none" stroke="#ef6b5b" stroke-width="4"></path>
        <line x1="204" y1="52" x2="282" y2="208" class="visual-mark green" stroke-dasharray="12 8"></line>
        ${visualAngleArc({ x: 204, y: 52 }, { x: 116, y: 208 }, { x: 282, y: 208 }, 36, "等角", 58)}
        <g transform="translate(244 0)">
          <polygon points="116,208 282,208 204,52" fill="#f8fcff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
          <line x1="204" y1="52" x2="199" y2="208" class="visual-mark amber"></line>
          <circle cx="199" cy="208" r="7" fill="#d49a2a"></circle>
        </g>
        <text x="112" y="238" class="visual-badge">垂直 · 中点 · 等角</text>
      </svg>
    `;
  }
  if (id === "stability") {
    return `
      <svg viewBox="0 0 560 260" role="img" aria-label="三角形稳定性图形题">
        <polygon points="72,70 224,86 244,206 52,190" fill="#f8fcff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
        <path d="M72 70 L244 206" class="visual-mark coral"></path>
        <polygon points="332,70 490,70 490,206 332,206" fill="#effaff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
        <line x1="332" y1="70" x2="490" y2="206" class="visual-mark green"></line>
        <text x="72" y="236" class="visual-badge">加斜撑 → 切成三角形</text>
      </svg>
    `;
  }
  if (id === "angle-sum") {
    return `
      <svg viewBox="0 0 560 260" role="img" aria-label="三角形内角和图形题">
        <polygon points="104,204 272,204 190,58" fill="#effaff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
        ${visualAngleArc({ x: 104, y: 204 }, { x: 272, y: 204 }, { x: 190, y: 58 }, 42, "52°", 68)}
        ${visualAngleArc({ x: 272, y: 204 }, { x: 190, y: 58 }, { x: 104, y: 204 }, 42, "68°", 68)}
        ${visualAngleArc({ x: 190, y: 58 }, { x: 104, y: 204 }, { x: 272, y: 204 }, 36, "60°", 60)}
        <line x1="332" y1="132" x2="506" y2="132" class="visual-mark blue"></line>
        <path d="M346 132 q38 -52 76 0 q38 52 76 0" fill="none" stroke="#d49a2a" stroke-width="7" stroke-linecap="round"></path>
        <text x="348" y="176" class="visual-badge">180°</text>
      </svg>
    `;
  }
  if (id === "exterior") {
    return `
      <svg viewBox="0 0 560 260" role="img" aria-label="三角形外角图形题">
        <polygon points="108,204 274,204 190,62" fill="#effaff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
        <line x1="274" y1="204" x2="448" y2="204" class="visual-mark coral"></line>
        ${visualAngleArc({ x: 274, y: 204 }, { x: 190, y: 62 }, { x: 448, y: 204 }, 48, "125°", 78)}
        ${visualAngleArc({ x: 108, y: 204 }, { x: 274, y: 204 }, { x: 190, y: 62 }, 34, "45°", 58)}
        ${visualAngleArc({ x: 190, y: 62 }, { x: 108, y: 204 }, { x: 274, y: 204 }, 34, "80°", 58)}
        <text x="320" y="238" class="visual-badge">外角 = 两个远内角和</text>
      </svg>
    `;
  }
  if (id === "polygon-basics") {
    return `
      <svg viewBox="0 0 560 260" role="img" aria-label="多边形对角线图形题">
        <polygon points="180,48 290,86 270,204 96,204 72,88" fill="#effaff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
        <circle cx="180" cy="48" r="10" fill="#24a67a"></circle>
        <line x1="180" y1="48" x2="270" y2="204" class="visual-mark blue"></line>
        <line x1="180" y1="48" x2="96" y2="204" class="visual-mark blue"></line>
        <line x1="180" y1="48" x2="290" y2="86" class="visual-mark amber"></line>
        <text x="330" y="118" class="visual-badge">不相邻顶点</text>
        <text x="330" y="154" class="visual-label">连起来才叫对角线</text>
      </svg>
    `;
  }
  if (id === "polygon-sum") {
    return `
      <svg viewBox="0 0 560 260" role="img" aria-label="多边形内角和图形题">
        <polygon points="166,38 282,82 282,188 166,232 64,188 64,82" fill="#effaff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
        <line x1="166" y1="38" x2="282" y2="188" class="visual-mark green"></line>
        <line x1="166" y1="38" x2="166" y2="232" class="visual-mark green"></line>
        <line x1="166" y1="38" x2="64" y2="188" class="visual-mark green"></line>
        <text x="332" y="118" class="visual-badge">n - 2 个三角形</text>
        <text x="332" y="154" class="visual-label">再乘 180°</text>
      </svg>
    `;
  }
  if (id === "review") {
    return `
      <svg viewBox="0 0 560 260" role="img" aria-label="第十一章复习路线图形题">
        ${[
          ["边", 88, 102],
          ["线", 190, 102],
          ["角", 292, 102],
          ["形", 394, 102],
          ["证", 496, 102]
        ].map(([label, x, y]) => `
          <g>
            <circle cx="${x}" cy="${y}" r="34" fill="#effaff" stroke="#172033" stroke-width="4"></circle>
            <text x="${x}" y="${y + 8}" class="visual-node">${label}</text>
          </g>
        `).join("")}
        <path d="M122 102 H156 M224 102 H258 M326 102 H360 M428 102 H462" stroke="#24a67a" stroke-width="6" stroke-linecap="round"></path>
        <text x="166" y="188" class="visual-badge">先定位图形，再选定理</text>
      </svg>
    `;
  }
  if (id === "congruence-basic") {
    return `
      <svg viewBox="0 0 560 260" role="img" aria-label="两个全等三角形的对应关系">
        <polygon points="78,196 164,58 246,196" fill="#effaff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
        <polygon points="326,196 412,58 494,196" fill="#f8fcff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
        <line x1="78" y1="196" x2="164" y2="58" class="visual-mark coral"></line>
        <line x1="326" y1="196" x2="412" y2="58" class="visual-mark coral"></line>
        <line x1="78" y1="196" x2="246" y2="196" class="visual-mark blue"></line>
        <line x1="326" y1="196" x2="494" y2="196" class="visual-mark blue"></line>
        <text x="56" y="222" class="visual-label">A</text><text x="156" y="44" class="visual-label">B</text><text x="250" y="222" class="visual-label">C</text>
        <text x="306" y="222" class="visual-label">D</text><text x="404" y="44" class="visual-label">E</text><text x="498" y="222" class="visual-label">F</text>
        <path d="M270 126 h34" stroke="#24a67a" stroke-width="6" stroke-linecap="round"></path>
        <path d="M294 112 l16 14 -16 14" fill="none" stroke="#24a67a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    `;
  }
  if (id === "sss") {
    return `
      <svg viewBox="0 0 560 260" role="img" aria-label="SSS 三组边相等">
        <polygon points="84,198 180,52 276,198" fill="#effaff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
        <line x1="84" y1="198" x2="180" y2="52" class="visual-mark blue"></line>
        <line x1="180" y1="52" x2="276" y2="198" class="visual-mark green"></line>
        <line x1="84" y1="198" x2="276" y2="198" class="visual-mark amber"></line>
        <g transform="translate(286 0)">
          <polygon points="84,198 180,52 276,198" fill="#f8fcff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
          <line x1="84" y1="198" x2="180" y2="52" class="visual-mark blue"></line>
          <line x1="180" y1="52" x2="276" y2="198" class="visual-mark green"></line>
          <line x1="84" y1="198" x2="276" y2="198" class="visual-mark amber"></line>
        </g>
        <text x="232" y="236" class="visual-badge">三边</text>
      </svg>
    `;
  }
  if (id === "sas") {
    return `
      <svg viewBox="0 0 560 260" role="img" aria-label="SAS 两边和夹角">
        <polygon points="86,198 194,64 282,198" fill="#effaff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
        <line x1="86" y1="198" x2="194" y2="64" class="visual-mark blue"></line>
        <line x1="194" y1="64" x2="282" y2="198" class="visual-mark green"></line>
        ${visualAngleArc({ x: 194, y: 64 }, { x: 86, y: 198 }, { x: 282, y: 198 }, 34, "夹角", 58)}
        <g transform="translate(284 0)">
          <polygon points="86,198 194,64 282,198" fill="#f8fcff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
          <line x1="86" y1="198" x2="194" y2="64" class="visual-mark blue"></line>
          <line x1="194" y1="64" x2="282" y2="198" class="visual-mark green"></line>
          ${visualAngleArc({ x: 194, y: 64 }, { x: 86, y: 198 }, { x: 282, y: 198 }, 34, "夹角", 58)}
        </g>
        <text x="218" y="236" class="visual-badge">边-夹角-边</text>
      </svg>
    `;
  }
  if (id === "asa-aas") {
    return `
      <svg viewBox="0 0 560 260" role="img" aria-label="两角一边确定三角形">
        <line x1="88" y1="198" x2="270" y2="198" class="visual-mark blue"></line>
        <line x1="88" y1="198" x2="178" y2="62" stroke="#172033" stroke-width="5" stroke-linecap="round"></line>
        <line x1="270" y1="198" x2="178" y2="62" stroke="#172033" stroke-width="5" stroke-linecap="round"></line>
        ${visualAngleArc({ x: 88, y: 198 }, { x: 270, y: 198 }, { x: 178, y: 62 }, 36, "50°", 62)}
        ${visualAngleArc({ x: 270, y: 198 }, { x: 178, y: 62 }, { x: 88, y: 198 }, 36, "65°", 62)}
        <g transform="translate(286 0)">
          <line x1="88" y1="198" x2="270" y2="198" class="visual-mark blue"></line>
          <line x1="88" y1="198" x2="178" y2="62" stroke="#172033" stroke-width="5" stroke-linecap="round"></line>
          <line x1="270" y1="198" x2="178" y2="62" stroke="#172033" stroke-width="5" stroke-linecap="round"></line>
          ${visualAngleArc({ x: 88, y: 198 }, { x: 270, y: 198 }, { x: 178, y: 62 }, 36, "50°", 62)}
          ${visualAngleArc({ x: 270, y: 198 }, { x: 178, y: 62 }, { x: 88, y: 198 }, 36, "65°", 62)}
        </g>
        <text x="212" y="236" class="visual-badge">两角一边</text>
      </svg>
    `;
  }
  if (id === "hl") {
    return `
      <svg viewBox="0 0 560 260" role="img" aria-label="HL 直角三角形斜边和直角边">
        <polygon points="92,204 268,204 268,62" fill="#effaff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
        <path d="M240 204 v-28 h28" fill="none" stroke="#ef6b5b" stroke-width="5"></path>
        <text x="238" y="170" class="visual-degree">90°</text>
        <line x1="92" y1="204" x2="268" y2="62" class="visual-mark green"></line>
        <line x1="268" y1="204" x2="268" y2="62" class="visual-mark blue"></line>
        <g transform="translate(262 0)">
          <polygon points="92,204 268,204 268,62" fill="#f8fcff" stroke="#172033" stroke-width="5" stroke-linejoin="round"></polygon>
          <path d="M240 204 v-28 h28" fill="none" stroke="#ef6b5b" stroke-width="5"></path>
          <text x="238" y="170" class="visual-degree">90°</text>
          <line x1="92" y1="204" x2="268" y2="62" class="visual-mark green"></line>
          <line x1="268" y1="204" x2="268" y2="62" class="visual-mark blue"></line>
        </g>
        <text x="218" y="238" class="visual-badge">斜边 + 直角边</text>
      </svg>
    `;
  }
  if (id === "angle-bisector-property") {
    return `
      <svg viewBox="0 0 560 260" role="img" aria-label="角平分线上点到两边距离相等">
        <line x1="78" y1="132" x2="494" y2="38" stroke="#172033" stroke-width="6" stroke-linecap="round"></line>
        <line x1="78" y1="132" x2="494" y2="226" stroke="#172033" stroke-width="6" stroke-linecap="round"></line>
        <line x1="78" y1="132" x2="504" y2="132" class="visual-mark green" stroke-dasharray="12 10"></line>
        <circle cx="314" cy="132" r="10" fill="#24a67a"></circle>
        <line x1="314" y1="132" x2="292" y2="84" class="visual-mark blue"></line>
        <line x1="314" y1="132" x2="292" y2="180" class="visual-mark blue"></line>
        <path d="M280 88 l-18 8 8 18" fill="none" stroke="#ef6b5b" stroke-width="4"></path>
        <path d="M280 176 l-18 -8 8 -18" fill="none" stroke="#ef6b5b" stroke-width="4"></path>
        <text x="324" y="122" class="visual-label">P</text>
        <text x="244" y="80" class="visual-label">D</text>
        <text x="244" y="194" class="visual-label">E</text>
        <text x="346" y="238" class="visual-badge">PD = PE</text>
      </svg>
    `;
  }
  if (id === "congruence-review") {
    return `
      <svg viewBox="0 0 560 260" role="img" aria-label="全等证明路线">
        ${[
          ["目标", 72, 90],
          ["三角形", 176, 90],
          ["条件", 296, 90],
          ["判定", 408, 90],
          ["结论", 488, 90]
        ].map(([label, x, y], index) => `
          <g>
            <circle cx="${x}" cy="${y}" r="34" fill="${index === 2 ? "#fff4d9" : "#effaff"}" stroke="#172033" stroke-width="4"></circle>
            <text x="${x}" y="${y + 7}" class="visual-node">${label}</text>
          </g>
        `).join("")}
        <path d="M106 90 H142 M210 90 H262 M330 90 H374 M442 90 H454" fill="none" stroke="#24a67a" stroke-width="6" stroke-linecap="round"></path>
        <text x="152" y="180" class="visual-badge">先找图，再选判定</text>
      </svg>
    `;
  }
  return "";
}

function navigatorHtml() {
  return `
    <div class="navigator-row">
      <button class="ghost-button" id="prevStep" type="button">上一步</button>
      <button class="primary-button" id="nextStep" type="button">下一步</button>
    </div>
  `;
}

function bindNavigator() {
  const prev = $("#prevStep");
  const next = $("#nextStep");
  if (prev) prev.addEventListener("click", () => {
    const index = currentStepIndex();
    if (index > 0) appState.stepId = STEPS[index - 1].id;
    render();
  });
  if (next) next.addEventListener("click", () => {
    const index = currentStepIndex();
    if (index < STEPS.length - 1) appState.stepId = STEPS[index + 1].id;
    else goNextLesson();
    render();
  });
}

function goNextLesson() {
  const index = LESSONS.findIndex((lesson) => lesson.id === appState.lessonId);
  const next = LESSONS[(index + 1) % LESSONS.length];
  appState.lessonId = next.id;
  appState.chapterId = chapterForLesson(next).id;
  appState.stepId = "discover";
}

function quizState(lesson) {
  if (!appState.quiz[lesson.id]) {
    appState.quiz[lesson.id] = { index: 0, selected: {}, checked: {} };
  }
  return appState.quiz[lesson.id];
}

function countCorrect(lesson) {
  const quiz = quizState(lesson);
  return lessonPractices(lesson).reduce((sum, item, index) => {
    return sum + (quiz.checked[index] && quiz.selected[index] === item.answer ? 1 : 0);
  }, 0);
}

function renderCoach() {
  const lesson = currentLesson();
  const detail = lessonDetail(lesson);
  $("#coachPanel").classList.toggle("open", appState.coachOpen);
  $("#coachContent").innerHTML = `
    <div class="coach-content">
      <section class="coach-card">
        <h3>本课目标</h3>
        <p>${lesson.objective}</p>
      </section>
      ${detail.exploreTasks?.length ? `
        <section class="coach-card">
          <h3>观察孩子</h3>
          <ul>${detail.exploreTasks.map((item) => `<li>${item.text}</li>`).join("")}</ul>
        </section>
      ` : ""}
      <section class="coach-card">
        <h3>今天重点看</h3>
        <ul>${lesson.parentFocus.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="coach-card">
        <h3>追问孩子</h3>
        <ul>${lesson.parentQuestions.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="coach-card">
        <h3>掌握标准</h3>
        <ul>${lesson.mastery.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
    </div>
  `;
}

function mountInteraction(lesson) {
  const mount = $("#interactiveMount");
  if (lesson.interaction === "triangleInequality") renderTriangleInequality(mount);
  if (lesson.interaction === "lineExplorer") renderLineExplorer(mount);
  if (lesson.interaction === "stability") renderStability(mount);
  if (lesson.interaction === "angleSum") renderAngleSum(mount);
  if (lesson.interaction === "exteriorAngle") renderExteriorAngle(mount);
  if (lesson.interaction === "polygonBasics") renderPolygonBasics(mount);
  if (lesson.interaction === "polygonFormula") renderPolygonFormula(mount);
  if (lesson.interaction === "reviewMap") renderReviewMap(mount);
  if (lesson.interaction === "congruenceTransform") renderCongruenceTransform(mount);
  if (lesson.interaction === "conditionBuilder") renderConditionBuilder(mount, lesson.conditionMode);
  if (lesson.interaction === "rightTriangleHL") renderRightTriangleHL(mount);
  if (lesson.interaction === "angleBisector") renderAngleBisector(mount);
  if (lesson.interaction === "proofRoute") renderProofRoute(mount);
}

function renderTriangleInequality(mount) {
  const s = uiMemory.triangle;
  mount.innerHTML = `
    <div class="interaction-grid">
      <div class="visual-stage"><svg id="triangleSvg" viewBox="0 0 520 340" aria-label="三角形边长互动图"></svg></div>
      <div class="control-panel">
        ${rangeControl("AB", "ab", s.ab, 2, 12)}
        ${rangeControl("AC", "ac", s.ac, 2, 12)}
        ${rangeControl("BC", "bc", s.bc, 2, 12)}
        <div class="control-group">
          <div class="control-label"><span>试试这些</span></div>
          <div class="chip-row">
            <button class="chip" data-preset="3,4,8" type="button">3,4,8</button>
            <button class="chip" data-preset="6,6,12" type="button">6,6,12</button>
            <button class="chip" data-preset="5,6,10" type="button">5,6,10</button>
          </div>
        </div>
        <div class="control-group" id="triangleMetrics"></div>
      </div>
    </div>
  `;

  mount.querySelectorAll("input[type='range']").forEach((input) => {
    input.addEventListener("input", () => {
      s[input.dataset.key] = Number(input.value);
      renderTriangleInequality(mount);
    });
  });

  mount.querySelectorAll("[data-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      const [ab, ac, bc] = button.dataset.preset.split(",").map(Number);
      Object.assign(s, { ab, ac, bc });
      renderTriangleInequality(mount);
    });
  });

  updateTriangleSvg();
}

function updateTriangleSvg() {
  const svg = $("#triangleSvg");
  const metrics = $("#triangleMetrics");
  const { ab, ac, bc } = uiMemory.triangle;
  const longest = Math.max(ab, ac, bc);
  const rest = ab + ac + bc - longest;
  const valid = rest > longest;
  const boundary = rest === longest;
  const pill = valid ? `<span class="result-pill">能围成</span>` : `<span class="result-pill warn">${boundary ? "压成直线" : "围不成"}</span>`;

  metrics.innerHTML = `
    <div class="metric-row"><span>最长边</span><strong>${longest}</strong></div>
    <div class="metric-row"><span>另外两边和</span><strong>${rest}</strong></div>
    <div class="metric-row"><span>判断</span>${pill}</div>
    <p class="small-note">最长边必须小于另外两边之和。</p>
  `;

  if (!valid) {
    const scale = 24;
    const start = 68;
    svg.innerHTML = `
      <line class="svg-line" x1="${start}" y1="118" x2="${start + ab * scale}" y2="118"></line>
      <line class="svg-help" x1="${start}" y1="182" x2="${start + ac * scale}" y2="182"></line>
      <line class="svg-accent" x1="${start}" y1="246" x2="${start + bc * scale}" y2="246"></line>
      <text class="svg-label" x="${start}" y="92">AB=${ab}</text>
      <text class="svg-label" x="${start}" y="156">AC=${ac}</text>
      <text class="svg-label" x="${start}" y="220">BC=${bc}</text>
      <text x="68" y="310" fill="#d94f45" font-size="18" font-weight="800">最长边太长时，三条线段不能封闭成三角形。</text>
    `;
    return;
  }

  const scale = Math.min(34, 330 / Math.max(ab, ac, bc));
  const base = bc * scale;
  const bx = (520 - base) / 2;
  const by = 270;
  const cx = bx + base;
  const rawX = (ab * ab + bc * bc - ac * ac) / (2 * bc);
  const height = Math.sqrt(Math.max(0, ab * ab - rawX * rawX));
  const ax = bx + rawX * scale;
  const ay = by - height * scale;

  svg.innerHTML = `
    <polygon points="${ax},${ay} ${bx},${by} ${cx},${by}" fill="#e7f3f1" stroke="#324250" stroke-width="4" stroke-linejoin="round"></polygon>
    <circle class="svg-point" cx="${ax}" cy="${ay}" r="8"></circle>
    <circle class="svg-point" cx="${bx}" cy="${by}" r="8"></circle>
    <circle class="svg-point" cx="${cx}" cy="${by}" r="8"></circle>
    <text class="svg-label" x="${ax - 8}" y="${ay - 16}">A</text>
    <text class="svg-label" x="${bx - 28}" y="${by + 30}">B</text>
    <text class="svg-label" x="${cx + 12}" y="${by + 30}">C</text>
    <text x="${(ax + bx) / 2 - 38}" y="${(ay + by) / 2}" fill="#16756f" font-size="18" font-weight="800">AB=${ab}</text>
    <text x="${(ax + cx) / 2 + 8}" y="${(ay + by) / 2}" fill="#b35f12" font-size="18" font-weight="800">AC=${ac}</text>
    <text x="${(bx + cx) / 2 - 28}" y="${by + 42}" fill="#2563a9" font-size="18" font-weight="800">BC=${bc}</text>
  `;
}

function renderLineExplorer(mount) {
  const labels = { height: "高", median: "中线", bisector: "角平分线" };
  mount.innerHTML = `
    <div class="interaction-grid">
      <div class="visual-stage"><svg id="lineSvg" viewBox="0 0 520 340" aria-label="高、中线、角平分线互动图"></svg></div>
      <div class="control-panel">
        <div class="control-group">
          <div class="control-label"><span>选择线段</span></div>
          <div class="chip-row">
            ${Object.entries(labels).map(([key, label]) => `<button class="chip ${uiMemory.lineType === key ? "active" : ""}" data-line="${key}" type="button">${label}</button>`).join("")}
          </div>
        </div>
        <div class="control-group" id="lineExplain"></div>
      </div>
    </div>
  `;

  mount.querySelectorAll("[data-line]").forEach((button) => {
    button.addEventListener("click", () => {
      uiMemory.lineType = button.dataset.line;
      renderLineExplorer(mount);
    });
  });
  updateLineSvg();
}

function updateLineSvg() {
  const svg = $("#lineSvg");
  const explain = $("#lineExplain");
  const A = { x: 250, y: 58 };
  const B = { x: 82, y: 282 };
  const C = { x: 448, y: 282 };
  let D = { x: 250, y: 282 };
  let text = "高看垂直：AD 垂直 BC。";
  let marks = `<path d="M250 260 h22 v22" fill="none" stroke="#b35f12" stroke-width="3"></path>`;

  if (uiMemory.lineType === "median") {
    D = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 };
    text = "中线看中点：D 是 BC 的中点，BD=DC。";
    marks = `
      <line x1="${B.x + 76}" y1="${B.y + 12}" x2="${B.x + 90}" y2="${B.y + 28}" stroke="#b35f12" stroke-width="3"></line>
      <line x1="${C.x - 90}" y1="${C.y + 28}" x2="${C.x - 76}" y2="${C.y + 12}" stroke="#b35f12" stroke-width="3"></line>
    `;
  }

  if (uiMemory.lineType === "bisector") {
    const ab = distance(A, B);
    const ac = distance(A, C);
    D = {
      x: (ac * B.x + ab * C.x) / (ab + ac),
      y: (ac * B.y + ab * C.y) / (ab + ac)
    };
    text = "角平分线看等角：∠BAD=∠DAC。";
    marks = `
      <path d="M225 90 Q250 112 275 90" fill="none" stroke="#b35f12" stroke-width="3"></path>
      <path d="M213 108 Q250 142 286 108" fill="none" stroke="#b35f12" stroke-width="3"></path>
    `;
  }

  svg.innerHTML = `
    <polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}" fill="#eef5f4" stroke="#324250" stroke-width="4" stroke-linejoin="round"></polygon>
    <line class="svg-help" x1="${A.x}" y1="${A.y}" x2="${D.x}" y2="${D.y}"></line>
    ${marks}
    ${pointLabel(A, "A", -4, -18)}
    ${pointLabel(B, "B", -28, 30)}
    ${pointLabel(C, "C", 14, 30)}
    ${pointLabel(D, "D", 8, -12)}
  `;
  explain.innerHTML = `
    <div class="metric-row"><span>当前线段</span><strong>${{ height: "高", median: "中线", bisector: "角平分线" }[uiMemory.lineType]}</strong></div>
    <p class="small-note">${text}</p>
  `;
}

function renderStability(mount) {
  const s = uiMemory.stability;
  mount.innerHTML = `
    <div class="interaction-grid">
      <div class="visual-stage"><svg id="stabilitySvg" viewBox="0 0 520 340" aria-label="三角形稳定性互动图"></svg></div>
      <div class="control-panel">
        <div class="control-group">
          <label>推动木架 <span>${s.skew}</span></label>
          <input data-skew type="range" min="0" max="80" value="${s.skew}">
        </div>
        <div class="control-group">
          <button class="primary-button" id="toggleBrace" type="button">${s.brace ? "移除斜撑" : "加一根斜撑"}</button>
          <p class="small-note">${s.brace ? "斜撑把四边形分成两个三角形，形状稳定。" : "没有斜撑时，四边形可以被推歪。"}</p>
        </div>
      </div>
    </div>
  `;
  $("[data-skew]").addEventListener("input", (event) => {
    s.skew = Number(event.target.value);
    renderStability(mount);
  });
  $("#toggleBrace").addEventListener("click", () => {
    s.brace = !s.brace;
    renderStability(mount);
  });
  updateStabilitySvg();
}

function updateStabilitySvg() {
  const { skew, brace } = uiMemory.stability;
  const dx = brace ? 0 : skew - 40;
  const A = { x: 136 + dx, y: 78 };
  const B = { x: 388 + dx, y: 78 };
  const C = { x: 438 - dx, y: 260 };
  const D = { x: 156 - dx, y: 260 };
  $("#stabilitySvg").innerHTML = `
    <polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}" fill="#f4f7fa" stroke="#324250" stroke-width="8" stroke-linejoin="round"></polygon>
    ${brace ? `<line x1="${A.x}" y1="${A.y}" x2="${C.x}" y2="${C.y}" stroke="#16756f" stroke-width="8" stroke-linecap="round"></line>` : ""}
    <text x="68" y="318" fill="${brace ? "#2f855a" : "#d94f45"}" font-size="18" font-weight="800">${brace ? "斜撑出现：四边形被分成两个三角形" : "没有斜撑：边长不变，角还能变"}</text>
  `;
}

function renderAngleSum(mount) {
  mount.innerHTML = `
    <div class="interaction-grid">
      <div class="visual-stage"><svg id="angleSvg" viewBox="0 0 520 340" aria-label="三角形内角和互动图"></svg></div>
      <div class="control-panel">
        <div class="control-group" id="angleMetrics"></div>
        <div class="control-group">
          <button class="primary-button" id="toggleProof" type="button">${uiMemory.angleProof ? "隐藏证明线" : "显示证明线"}</button>
          <p class="small-note">拖动 A 点。证明线与 BC 平行，用来把角搬到一条直线上。</p>
        </div>
      </div>
    </div>
  `;
  $("#toggleProof").addEventListener("click", () => {
    uiMemory.angleProof = !uiMemory.angleProof;
    renderAngleSum(mount);
  });
  updateAngleSvg();
}

function updateAngleSvg() {
  const svg = $("#angleSvg");
  const metrics = $("#angleMetrics");
  const A = uiMemory.anglePoint;
  const B = { x: 86, y: 276 };
  const C = { x: 442, y: 276 };
  const angleA = angleAt(B, A, C);
  const angleB = angleAt(A, B, C);
  const angleC = angleAt(A, C, B);
  const sum = angleA + angleB + angleC;
  const proofLine = uiMemory.angleProof ? `
    <line x1="60" y1="${A.y}" x2="468" y2="${A.y}" stroke="#b35f12" stroke-width="4" stroke-dasharray="8 9"></line>
    <path d="M${A.x - 64} ${A.y} q34 30 76 0" fill="none" stroke="#b35f12" stroke-width="4"></path>
    <text x="68" y="44" fill="#b35f12" font-size="17" font-weight="800">过 A 作 BC 的平行线，三个角组成一个平角。</text>
  ` : "";

  svg.innerHTML = `
    ${proofLine}
    <polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}" fill="#eef5f4" stroke="#324250" stroke-width="4" stroke-linejoin="round"></polygon>
    <circle id="dragA" class="svg-point" cx="${A.x}" cy="${A.y}" r="13"></circle>
    <circle class="svg-point" cx="${B.x}" cy="${B.y}" r="8"></circle>
    <circle class="svg-point" cx="${C.x}" cy="${C.y}" r="8"></circle>
    ${pointLabel(A, "A", -4, -20)}
    ${pointLabel(B, "B", -28, 30)}
    ${pointLabel(C, "C", 14, 30)}
    <text x="${A.x + 18}" y="${A.y + 24}" fill="#16756f" font-size="17" font-weight="800">${round(angleA)}°</text>
    <text x="${B.x + 24}" y="${B.y - 12}" fill="#2563a9" font-size="17" font-weight="800">${round(angleB)}°</text>
    <text x="${C.x - 66}" y="${C.y - 12}" fill="#b35f12" font-size="17" font-weight="800">${round(angleC)}°</text>
  `;

  metrics.innerHTML = `
    <div class="metric-row"><span>∠A</span><strong>${round(angleA)}°</strong></div>
    <div class="metric-row"><span>∠B</span><strong>${round(angleB)}°</strong></div>
    <div class="metric-row"><span>∠C</span><strong>${round(angleC)}°</strong></div>
    <div class="metric-row"><span>总和</span><strong>${round(sum)}°</strong></div>
  `;

  const handle = $("#dragA");
  handle.addEventListener("pointerdown", (event) => {
    handle.setPointerCapture(event.pointerId);
    handle.dataset.dragging = "true";
  });
  handle.addEventListener("pointermove", (event) => {
    if (handle.dataset.dragging !== "true") return;
    const pt = svg.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    const local = pt.matrixTransform(svg.getScreenCTM().inverse());
    uiMemory.anglePoint.x = clamp(local.x, 130, 390);
    uiMemory.anglePoint.y = clamp(local.y, 56, 210);
    updateAngleSvg();
  });
  handle.addEventListener("pointerup", () => {
    handle.dataset.dragging = "false";
  });
}

function renderExteriorAngle(mount) {
  const s = uiMemory.exterior;
  mount.innerHTML = `
    <div class="interaction-grid">
      <div class="visual-stage"><svg id="exteriorSvg" viewBox="0 0 520 340" aria-label="三角形外角互动图"></svg></div>
      <div class="control-panel">
        ${rangeControl("远内角 A", "a", s.a, 20, 120)}
        ${rangeControl("远内角 B", "b", s.b, 20, 120)}
        <div class="control-group" id="exteriorMetrics"></div>
      </div>
    </div>
  `;
  mount.querySelectorAll("input[type='range']").forEach((input) => {
    input.addEventListener("input", () => {
      s[input.dataset.key] = Number(input.value);
      if (s.a + s.b >= 170) s[input.dataset.key] = Number(input.value) - 10;
      renderExteriorAngle(mount);
    });
  });
  updateExteriorSvg();
}

function updateExteriorSvg() {
  const { a, b } = uiMemory.exterior;
  const third = 180 - a - b;
  const exterior = a + b;
  const A = { x: 110, y: 284 };
  const C = { x: 330, y: 284 };
  const base = C.x - A.x;
  const ab = base * Math.sin(third * Math.PI / 180) / Math.sin(b * Math.PI / 180);
  const B = {
    x: A.x + Math.cos(a * Math.PI / 180) * ab,
    y: A.y - Math.sin(a * Math.PI / 180) * ab
  };
  const extension = { x: 462, y: C.y };
  $("#exteriorSvg").innerHTML = `
    <polygon points="${A.x},${A.y} ${round(B.x)},${round(B.y)} ${C.x},${C.y}" fill="#eef5f4" stroke="#324250" stroke-width="5" stroke-linejoin="round"></polygon>
    <line x1="${C.x}" y1="${C.y}" x2="${extension.x}" y2="${extension.y}" stroke="#d94f45" stroke-width="6" stroke-linecap="round"></line>
    ${visualAngleArc(A, C, B, 40, `${a}°`, 66, "visual-angle blue")}
    ${visualAngleArc(B, A, C, 34, `${b}°`, 58, "visual-angle green")}
    ${visualAngleArc(C, B, A, 36, `${third}°`, 60, "visual-angle dark")}
    ${visualAngleArc(C, extension, B, 56, `${exterior}°`, 88, "visual-angle coral")}
    ${pointLabel(A, "A", -26, 30)}
    ${pointLabel(B, "B", -5, -18)}
    ${pointLabel(C, "C", 14, 30)}
    <text x="${C.x + 50}" y="${C.y - 46}" fill="#d94f45" font-size="18" font-weight="900">外角</text>
  `;
  $("#exteriorMetrics").innerHTML = `
    <div class="metric-row"><span>远内角和</span><strong>${a}+${b}=${exterior}°</strong></div>
    <div class="metric-row"><span>相邻内角</span><strong>${third}°</strong></div>
    <div class="metric-row"><span>外角</span><strong>${exterior}°</strong></div>
    <p class="small-note">外角 = 两个不相邻内角之和，也和相邻内角互补。</p>
  `;
}

function renderPolygonBasics(mount) {
  mount.innerHTML = `
    <div class="interaction-grid">
      <div class="visual-stage"><svg id="polygonBasicSvg" viewBox="0 0 520 340" aria-label="多边形对角线互动图"></svg></div>
      <div class="control-panel">
        <div class="control-group">
          <label>边数 n <span>${uiMemory.polygonN}</span></label>
          <input id="polygonN" type="range" min="4" max="9" value="${uiMemory.polygonN}">
        </div>
        <div class="control-group" id="polygonBasicMetrics"></div>
      </div>
    </div>
  `;
  $("#polygonN").addEventListener("input", (event) => {
    uiMemory.polygonN = Number(event.target.value);
    renderPolygonBasics(mount);
  });
  updatePolygonBasicSvg();
}

function updatePolygonBasicSvg() {
  const n = uiMemory.polygonN;
  const points = regularPolygon(n, 250, 172, 118);
  const diagonals = [];
  for (let i = 2; i <= n - 2; i++) {
    diagonals.push(`<line x1="${points[0].x}" y1="${points[0].y}" x2="${points[i].x}" y2="${points[i].y}" stroke="#16756f" stroke-width="4" stroke-linecap="round"></line>`);
  }
  $("#polygonBasicSvg").innerHTML = `
    <polygon points="${points.map((p) => `${p.x},${p.y}`).join(" ")}" fill="#f4f7fa" stroke="#324250" stroke-width="4" stroke-linejoin="round"></polygon>
    ${diagonals.join("")}
    ${points.map((p, i) => `<circle class="svg-point" cx="${p.x}" cy="${p.y}" r="${i === 0 ? 10 : 7}"></circle>`).join("")}
    <text x="54" y="312" fill="#16756f" font-size="18" font-weight="800">从一个顶点出发：${n - 3} 条对角线，分成 ${n - 2} 个三角形。</text>
  `;
  $("#polygonBasicMetrics").innerHTML = `
    <div class="metric-row"><span>多边形</span><strong>${n} 边形</strong></div>
    <div class="metric-row"><span>对角线</span><strong>n-3=${n - 3}</strong></div>
    <div class="metric-row"><span>三角形</span><strong>n-2=${n - 2}</strong></div>
    <p class="small-note">不能连自己，也不能连相邻两个顶点，所以从一个顶点少 3 个点。</p>
  `;
}

function renderPolygonFormula(mount) {
  mount.innerHTML = `
    <div class="interaction-grid">
      <div class="visual-stage"><svg id="polygonFormulaSvg" viewBox="0 0 520 340" aria-label="多边形内角和互动图"></svg></div>
      <div class="control-panel">
        <div class="control-group">
          <label>边数 n <span>${uiMemory.formulaN}</span></label>
          <input id="formulaN" type="range" min="3" max="12" value="${uiMemory.formulaN}">
        </div>
        <div class="control-group" id="polygonFormulaMetrics"></div>
      </div>
    </div>
  `;
  $("#formulaN").addEventListener("input", (event) => {
    uiMemory.formulaN = Number(event.target.value);
    renderPolygonFormula(mount);
  });
  updatePolygonFormulaSvg();
}

function updatePolygonFormulaSvg() {
  const n = uiMemory.formulaN;
  const points = regularPolygon(n, 250, 164, 112);
  const diagonals = [];
  for (let i = 2; i <= n - 2; i++) {
    diagonals.push(`<line x1="${points[0].x}" y1="${points[0].y}" x2="${points[i].x}" y2="${points[i].y}" stroke="#16756f" stroke-width="3" stroke-linecap="round"></line>`);
  }
  const inner = (n - 2) * 180;
  const eachExterior = round(360 / n);
  const eachInterior = round(180 - 360 / n);
  $("#polygonFormulaSvg").innerHTML = `
    <polygon points="${points.map((p) => `${p.x},${p.y}`).join(" ")}" fill="#eef5f4" stroke="#324250" stroke-width="4" stroke-linejoin="round"></polygon>
    ${diagonals.join("")}
    ${points.map((p, i) => `<circle class="svg-point" cx="${p.x}" cy="${p.y}" r="${i === 0 ? 10 : 6}"></circle>`).join("")}
    <text x="58" y="298" fill="#324250" font-size="18" font-weight="800">${n} 边形 → ${n - 2} 个三角形 → ${inner}°</text>
  `;
  $("#polygonFormulaMetrics").innerHTML = `
    <div class="formula-row"><span>内角和</span><span class="formula">(${n}-2)×180°=${inner}°</span></div>
    <div class="metric-row"><span>外角和</span><strong>360°</strong></div>
    <div class="metric-row"><span>正 ${n} 边形每个外角</span><strong>${eachExterior}°</strong></div>
    <div class="metric-row"><span>正 ${n} 边形每个内角</span><strong>${eachInterior}°</strong></div>
  `;
}

function renderReviewMap(mount) {
  mount.innerHTML = `
    <div class="visual-stage">
      <svg viewBox="0 0 760 360" aria-label="第十一章知识路线图">
        ${roadNode(90, 72, "边", "三边关系")}
        ${roadNode(270, 72, "线", "高 / 中线 / 角平分线")}
        ${roadNode(450, 72, "角", "内角和 / 外角")}
        ${roadNode(630, 72, "形", "多边形公式")}
        <path d="M150 72 H210 M330 72 H390 M510 72 H570" stroke="#16756f" stroke-width="6" stroke-linecap="round"></path>
        <path d="M90 150 C130 240 250 250 310 172 C365 104 454 168 430 246 C405 326 572 324 630 170" fill="none" stroke="#d9a33a" stroke-width="5" stroke-linecap="round" stroke-dasharray="10 10"></path>
        <text x="72" y="322" fill="#324250" font-size="22" font-weight="800">复习口令：先找边，再认线；角度题找三角形，多边形切成三角形。</text>
      </svg>
    </div>
  `;
}

function renderCongruenceTransform(mount) {
  const modes = {
    translate: { label: "平移", note: "所有点朝同一方向移动，大小和形状不变。" },
    flip: { label: "翻折", note: "像把纸片翻到另一边，对应点隔着折痕重合。" },
    rotate: { label: "旋转", note: "绕一个点转动，边长和角度都不改变。" }
  };
  mount.innerHTML = `
    <div class="interaction-grid">
      <div class="visual-stage"><svg id="congruenceSvg" viewBox="0 0 520 340" aria-label="全等变换互动图"></svg></div>
      <div class="control-panel">
        <div class="control-group">
          <div class="control-label"><span>变换方式</span></div>
          <div class="chip-row">
            ${Object.entries(modes).map(([key, item]) => `<button class="chip ${uiMemory.congruenceMode === key ? "active" : ""}" data-congruence="${key}" type="button">${item.label}</button>`).join("")}
          </div>
        </div>
        <div class="control-group" id="congruenceExplain"></div>
      </div>
    </div>
  `;
  mount.querySelectorAll("[data-congruence]").forEach((button) => {
    button.addEventListener("click", () => {
      uiMemory.congruenceMode = button.dataset.congruence;
      renderCongruenceTransform(mount);
    });
  });
  updateCongruenceSvg(modes);
}

function updateCongruenceSvg(modes) {
  const base = [{ x: 118, y: 238, label: "A" }, { x: 230, y: 238, label: "B" }, { x: 162, y: 112, label: "C" }];
  let next = base.map((p) => ({ ...p, x: p.x + 190, label: { A: "D", B: "E", C: "F" }[p.label] }));
  let guide = `<path d="M248 176 h72" stroke="#b35f12" stroke-width="4" stroke-dasharray="8 8"></path>`;
  if (uiMemory.congruenceMode === "flip") {
    next = [{ x: 410, y: 238, label: "D" }, { x: 298, y: 238, label: "E" }, { x: 366, y: 112, label: "F" }];
    guide = `<line x1="264" y1="70" x2="264" y2="286" stroke="#b35f12" stroke-width="4" stroke-dasharray="8 8"></line>`;
  }
  if (uiMemory.congruenceMode === "rotate") {
    next = [{ x: 330, y: 250, label: "D" }, { x: 426, y: 192, label: "E" }, { x: 306, y: 116, label: "F" }];
    guide = `<path d="M270 238 q70 -98 158 -54" fill="none" stroke="#b35f12" stroke-width="4" stroke-dasharray="8 8"></path>`;
  }
  const polygon = (pts, fill) => `<polygon points="${pts.map((p) => `${p.x},${p.y}`).join(" ")}" fill="${fill}" stroke="#324250" stroke-width="4" stroke-linejoin="round"></polygon>`;
  const labels = [...base, ...next].map((p) => pointLabel(p, p.label, -5, -14)).join("");
  $("#congruenceSvg").innerHTML = `
    ${guide}
    ${polygon(base, "#eef5f4")}
    ${polygon(next, "#fff8ee")}
    ${labels}
    <text x="68" y="306" fill="#324250" font-size="18" font-weight="800">△ABC≌△DEF：A↔D，B↔E，C↔F</text>
  `;
  const item = modes[uiMemory.congruenceMode];
  $("#congruenceExplain").innerHTML = `
    <div class="metric-row"><span>当前</span><strong>${item.label}</strong></div>
    <p class="small-note">${item.note}</p>
    <p class="small-note">对应边：AB=DE，BC=EF，AC=DF。对应角：∠A=∠D，∠B=∠E，∠C=∠F。</p>
  `;
}

function renderConditionBuilder(mount, mode) {
  const copy = {
    sss: {
      title: "SSS：三边分别相等",
      result: "能判定全等",
      note: "三条边的长度固定，三角形的形状和大小被锁住。",
      formula: "AB=DE，BC=EF，AC=DF"
    },
    sas: {
      title: uiMemory.conditionTrap ? "边边角：不一定全等" : "SAS：两边和夹角",
      result: uiMemory.conditionTrap ? "不能判定" : "能判定全等",
      note: uiMemory.conditionTrap ? "角不在两条已知边中间时，短边可以摆出另一个位置。" : "夹角在两条已知边中间，第三边也随之确定。",
      formula: uiMemory.conditionTrap ? "AB=AB，AC=AD，∠B=∠B" : "CA=CD，CB=CE，∠ACB=∠DCE"
    },
    angles: {
      title: "ASA / AAS：两角一边",
      result: "能判定全等",
      note: "ASA 用夹边；AAS 可先用内角和补出第三角，再转成 ASA。",
      formula: "∠A=∠D，∠B=∠E，再配一组对应边"
    }
  }[mode];
  mount.innerHTML = `
    <div class="interaction-grid">
      <div class="visual-stage"><svg id="conditionSvg" viewBox="0 0 520 340" aria-label="三角形全等判定互动图"></svg></div>
      <div class="control-panel">
        ${mode === "sas" ? `
          <div class="control-group">
            <button class="primary-button" id="toggleTrap" type="button">${uiMemory.conditionTrap ? "切回 SAS" : "查看边边角陷阱"}</button>
            <p class="small-note">教材用转动木棍说明：两边和其中一边的对角不一定全等。</p>
          </div>
        ` : ""}
        <div class="control-group" id="conditionExplain"></div>
      </div>
    </div>
  `;
  if (mode === "sas") {
    $("#toggleTrap").addEventListener("click", () => {
      uiMemory.conditionTrap = !uiMemory.conditionTrap;
      renderConditionBuilder(mount, mode);
    });
  }
  updateConditionSvg(mode, copy);
}

function updateConditionSvg(mode, copy) {
  const svg = $("#conditionSvg");
  const explain = $("#conditionExplain");
  if (mode === "sss") {
    svg.innerHTML = `
      <polygon points="116,252 246,252 176,96" fill="#eef5f4" stroke="#324250" stroke-width="4" stroke-linejoin="round"></polygon>
      <polygon points="306,252 436,252 366,96" fill="#fff8ee" stroke="#324250" stroke-width="4" stroke-linejoin="round"></polygon>
      <line x1="116" y1="252" x2="246" y2="252" stroke="#2563a9" stroke-width="7"></line>
      <line x1="116" y1="252" x2="176" y2="96" stroke="#16756f" stroke-width="7"></line>
      <line x1="246" y1="252" x2="176" y2="96" stroke="#b35f12" stroke-width="7"></line>
      <line x1="306" y1="252" x2="436" y2="252" stroke="#2563a9" stroke-width="7"></line>
      <line x1="306" y1="252" x2="366" y2="96" stroke="#16756f" stroke-width="7"></line>
      <line x1="436" y1="252" x2="366" y2="96" stroke="#b35f12" stroke-width="7"></line>
      <text x="72" y="312" fill="#324250" font-size="18" font-weight="800">三组边对应相等，两个三角形全等。</text>
    `;
  } else if (mode === "sas" && uiMemory.conditionTrap) {
    svg.innerHTML = `
      <line x1="86" y1="258" x2="430" y2="258" stroke="#324250" stroke-width="4"></line>
      <line x1="130" y1="258" x2="280" y2="92" stroke="#16756f" stroke-width="7" stroke-linecap="round"></line>
      <line x1="130" y1="258" x2="280" y2="258" stroke="#2563a9" stroke-width="7" stroke-linecap="round"></line>
      <line x1="130" y1="258" x2="278" y2="172" stroke="#d94f45" stroke-width="7" stroke-linecap="round"></line>
      <polygon points="130,258 280,92 280,258" fill="rgba(22,117,111,0.14)" stroke="#324250" stroke-width="3"></polygon>
      <polygon points="130,258 278,172 280,258" fill="rgba(217,79,69,0.12)" stroke="#d94f45" stroke-width="3"></polygon>
      <text x="74" y="314" fill="#d94f45" font-size="18" font-weight="800">同样两边和一个对角，可能有两个不同三角形。</text>
    `;
  } else if (mode === "sas") {
    svg.innerHTML = `
      <polygon points="104,254 248,254 168,94" fill="#eef5f4" stroke="#324250" stroke-width="4" stroke-linejoin="round"></polygon>
      <polygon points="284,254 430,254 366,94" fill="#fff8ee" stroke="#324250" stroke-width="4" stroke-linejoin="round"></polygon>
      <line x1="168" y1="94" x2="104" y2="254" stroke="#16756f" stroke-width="7"></line>
      <line x1="168" y1="94" x2="248" y2="254" stroke="#2563a9" stroke-width="7"></line>
      <path d="M150 132 q18 20 42 2" fill="none" stroke="#b35f12" stroke-width="5"></path>
      <line x1="366" y1="94" x2="284" y2="254" stroke="#16756f" stroke-width="7"></line>
      <line x1="366" y1="94" x2="430" y2="254" stroke="#2563a9" stroke-width="7"></line>
      <path d="M344 132 q18 20 42 2" fill="none" stroke="#b35f12" stroke-width="5"></path>
      <text x="72" y="314" fill="#324250" font-size="18" font-weight="800">两边和夹角对应相等，第三边被确定。</text>
    `;
  } else {
    svg.innerHTML = `
      <line x1="102" y1="258" x2="250" y2="258" stroke="#2563a9" stroke-width="7" stroke-linecap="round"></line>
      <path d="M102 258 L178 96 L250 258 Z" fill="#eef5f4" stroke="#324250" stroke-width="4" stroke-linejoin="round"></path>
      <line x1="290" y1="258" x2="438" y2="258" stroke="#2563a9" stroke-width="7" stroke-linecap="round"></line>
      <path d="M290 258 L366 96 L438 258 Z" fill="#fff8ee" stroke="#324250" stroke-width="4" stroke-linejoin="round"></path>
      <path d="M122 258 q18 -24 42 -22" fill="none" stroke="#16756f" stroke-width="5"></path>
      <path d="M208 236 q24 -2 42 22" fill="none" stroke="#b35f12" stroke-width="5"></path>
      <path d="M310 258 q18 -24 42 -22" fill="none" stroke="#16756f" stroke-width="5"></path>
      <path d="M396 236 q24 -2 42 22" fill="none" stroke="#b35f12" stroke-width="5"></path>
      <text x="66" y="314" fill="#324250" font-size="18" font-weight="800">两端角固定后，两条射线交出唯一顶点。</text>
    `;
  }
  explain.innerHTML = `
    <div class="metric-row"><span>条件</span><strong>${copy.title}</strong></div>
    <div class="metric-row"><span>结论</span><span class="result-pill ${copy.result === "不能判定" ? "warn" : ""}">${copy.result}</span></div>
    <p class="small-note">${copy.formula}</p>
    <p class="small-note">${copy.note}</p>
  `;
}

function renderRightTriangleHL(mount) {
  const s = uiMemory;
  mount.innerHTML = `
    <div class="interaction-grid">
      <div class="visual-stage"><svg id="hlSvg" viewBox="0 0 520 340" aria-label="直角三角形 HL 互动图"></svg></div>
      <div class="control-panel">
        <div class="control-group">
          <label>一条直角边 <span>${s.hlLeg}</span></label>
          <input id="hlLeg" type="range" min="78" max="154" value="${s.hlLeg}">
        </div>
        <div class="control-group" id="hlExplain"></div>
      </div>
    </div>
  `;
  $("#hlLeg").addEventListener("input", (event) => {
    s.hlLeg = Number(event.target.value);
    renderRightTriangleHL(mount);
  });
  updateRightTriangleHL();
}

function updateRightTriangleHL() {
  const hyp = 184;
  const leg = uiMemory.hlLeg;
  const other = Math.sqrt(hyp * hyp - leg * leg);
  const left = { x: 102, y: 260 };
  const right = { x: 342, y: 260 };
  $("#hlSvg").innerHTML = `
    <polygon points="${left.x},${left.y} ${left.x + leg},${left.y} ${left.x + leg},${left.y - other}" fill="#eef5f4" stroke="#324250" stroke-width="4" stroke-linejoin="round"></polygon>
    <polygon points="${right.x},${right.y} ${right.x + leg},${right.y} ${right.x + leg},${right.y - other}" fill="#fff8ee" stroke="#324250" stroke-width="4" stroke-linejoin="round"></polygon>
    <path d="M${left.x + leg - 22} ${left.y} v-22 h22" fill="none" stroke="#b35f12" stroke-width="4"></path>
    <path d="M${right.x + leg - 22} ${right.y} v-22 h22" fill="none" stroke="#b35f12" stroke-width="4"></path>
    <line x1="${left.x}" y1="${left.y}" x2="${left.x + leg}" y2="${left.y - other}" stroke="#16756f" stroke-width="7"></line>
    <line x1="${right.x}" y1="${right.y}" x2="${right.x + leg}" y2="${right.y - other}" stroke="#16756f" stroke-width="7"></line>
    <line x1="${left.x + leg}" y1="${left.y}" x2="${left.x + leg}" y2="${left.y - other}" stroke="#2563a9" stroke-width="7"></line>
    <line x1="${right.x + leg}" y1="${right.y}" x2="${right.x + leg}" y2="${right.y - other}" stroke="#2563a9" stroke-width="7"></line>
    <text x="66" y="316" fill="#324250" font-size="18" font-weight="800">斜边相等，一条直角边相等，两个直角三角形全等。</text>
  `;
  $("#hlExplain").innerHTML = `
    <div class="metric-row"><span>斜边 H</span><strong>${hyp}</strong></div>
    <div class="metric-row"><span>直角边 L</span><strong>${leg}</strong></div>
    <div class="metric-row"><span>另一直角边</span><strong>${round(other)}</strong></div>
    <p class="small-note">先确认两个三角形都是直角三角形，再用 HL。</p>
  `;
}

function renderAngleBisector(mount) {
  const s = uiMemory.bisector;
  mount.innerHTML = `
    <div class="interaction-grid">
      <div class="visual-stage"><svg id="bisectorSvg" viewBox="0 0 520 340" aria-label="角平分线性质互动图"></svg></div>
      <div class="control-panel">
        <div class="control-group">
          <label>P 点位置 <span>${s.distance}</span></label>
          <input id="bisectorDistance" type="range" min="92" max="218" value="${s.distance}">
        </div>
        <div class="control-group">
          <button class="primary-button" id="toggleInverse" type="button">${s.inverse ? "看性质" : "看逆命题"}</button>
          <p class="small-note">${s.inverse ? "到两边距离相等的角内点，落在角平分线上。" : "角平分线上的点，到两边距离相等。"}</p>
        </div>
        <div class="control-group" id="bisectorExplain"></div>
      </div>
    </div>
  `;
  $("#bisectorDistance").addEventListener("input", (event) => {
    s.distance = Number(event.target.value);
    renderAngleBisector(mount);
  });
  $("#toggleInverse").addEventListener("click", () => {
    s.inverse = !s.inverse;
    renderAngleBisector(mount);
  });
  updateAngleBisector();
}

function updateAngleBisector() {
  const theta = 32 * Math.PI / 180;
  const O = { x: 96, y: 176 };
  const p = { x: O.x + uiMemory.bisector.distance, y: O.y };
  const upperEnd = { x: 458, y: O.y - Math.tan(theta) * (458 - O.x) };
  const lowerEnd = { x: 458, y: O.y + Math.tan(theta) * (458 - O.x) };
  const d = footOnLine(p, O, upperEnd);
  const e = footOnLine(p, O, lowerEnd);
  const dist = distance(p, d);
  $("#bisectorSvg").innerHTML = `
    <line x1="${O.x}" y1="${O.y}" x2="${upperEnd.x}" y2="${upperEnd.y}" stroke="#324250" stroke-width="5" stroke-linecap="round"></line>
    <line x1="${O.x}" y1="${O.y}" x2="${lowerEnd.x}" y2="${lowerEnd.y}" stroke="#324250" stroke-width="5" stroke-linecap="round"></line>
    <line x1="${O.x}" y1="${O.y}" x2="462" y2="${O.y}" stroke="#16756f" stroke-width="5" stroke-dasharray="9 8"></line>
    <line x1="${p.x}" y1="${p.y}" x2="${d.x}" y2="${d.y}" stroke="#2563a9" stroke-width="5"></line>
    <line x1="${p.x}" y1="${p.y}" x2="${e.x}" y2="${e.y}" stroke="#2563a9" stroke-width="5"></line>
    ${pointLabel(O, "O", -28, 6)}
    ${pointLabel(p, "P", -5, -16)}
    ${pointLabel(d, "D", 10, -8)}
    ${pointLabel(e, "E", 10, 20)}
    <text x="62" y="314" fill="#324250" font-size="18" font-weight="800">PD⊥OA，PE⊥OB，所以 PD、PE 才是点到两边的距离。</text>
  `;
  $("#bisectorExplain").innerHTML = `
    <div class="metric-row"><span>PD</span><strong>${round(dist)}</strong></div>
    <div class="metric-row"><span>PE</span><strong>${round(distance(p, e))}</strong></div>
    <div class="metric-row"><span>结论</span><span class="result-pill">PD=PE</span></div>
    <p class="small-note">${uiMemory.bisector.inverse ? "逆命题用于选址：到两边距离相等，就找角平分线。" : "性质用于证明距离相等：点在角平分线上，就有 PD=PE。"}</p>
  `;
}

function renderProofRoute(mount) {
  mount.innerHTML = `
    <div class="visual-stage">
      <svg viewBox="0 0 760 360" aria-label="全等证明路线图">
        ${roadNode(92, 84, "目标", "证边或角")}
        ${roadNode(240, 84, "三角形", "找对应")}
        ${roadNode(388, 84, "条件", "拼三组")}
        ${roadNode(536, 84, "判定", "SSS/SAS/ASA/AAS/HL")}
        ${roadNode(684, 84, "结论", "对应相等")}
        <path d="M160 84 H172 M308 84 H320 M456 84 H468 M604 84 H616" stroke="#16756f" stroke-width="6" stroke-linecap="round"></path>
        <rect x="52" y="188" width="656" height="86" rx="8" fill="#eef5f4" stroke="#d9e0e7" stroke-width="2"></rect>
        <text x="78" y="224" fill="#16756f" font-size="22" font-weight="900">证 AB=DE：</text>
        <text x="78" y="258" fill="#324250" font-size="20" font-weight="800">先证△ABC≌△DEF，再写 AB、DE 是对应边，所以 AB=DE。</text>
        <text x="72" y="326" fill="#687381" font-size="18" font-weight="800">检查口令：目标有没有回收？对应顺序有没有对齐？每个条件有没有理由？</text>
      </svg>
    </div>
  `;
}

function rangeControl(label, key, value, min, max) {
  return `
    <div class="control-group">
      <label>${label} <span>${value}</span></label>
      <input data-key="${key}" type="range" min="${min}" max="${max}" step="1" value="${value}">
    </div>
  `;
}

function pointLabel(point, label, dx, dy) {
  return `
    <circle class="svg-point" cx="${point.x}" cy="${point.y}" r="8"></circle>
    <text class="svg-label" x="${point.x + dx}" y="${point.y + dy}">${label}</text>
  `;
}

function roadNode(x, y, title, subtitle) {
  return `
    <rect x="${x - 68}" y="${y - 46}" width="136" height="92" rx="8" fill="#ffffff" stroke="#d9e0e7" stroke-width="2"></rect>
    <text x="${x}" y="${y - 4}" text-anchor="middle" fill="#16756f" font-size="30" font-weight="900">${title}</text>
    <text x="${x}" y="${y + 28}" text-anchor="middle" fill="#687381" font-size="15" font-weight="700">${subtitle}</text>
  `;
}

function regularPolygon(n, cx, cy, radius) {
  const points = [];
  for (let i = 0; i < n; i++) {
    const angle = -Math.PI / 2 + (Math.PI * 2 * i) / n;
    points.push({
      x: round(cx + Math.cos(angle) * radius),
      y: round(cy + Math.sin(angle) * radius)
    });
  }
  return points;
}

function footOnLine(point, a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const t = ((point.x - a.x) * dx + (point.y - a.y) * dy) / (dx * dx + dy * dy);
  return {
    x: a.x + t * dx,
    y: a.y + t * dy
  };
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function angleAt(p1, vertex, p2) {
  const v1 = { x: p1.x - vertex.x, y: p1.y - vertex.y };
  const v2 = { x: p2.x - vertex.x, y: p2.y - vertex.y };
  const dot = v1.x * v2.x + v1.y * v2.y;
  const len = Math.hypot(v1.x, v1.y) * Math.hypot(v2.x, v2.y);
  return Math.acos(clamp(dot / len, -1, 1)) * 180 / Math.PI;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function round(value) {
  return Math.round(value * 10) / 10;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function setSyncStatus(message) {
  $("#syncStatus").textContent = message;
}

function syncCredentials() {
  return {
    email: $("#syncEmail").value.trim(),
    password: $("#syncPassword").value
  };
}

async function runSyncAction(label, action) {
  if (syncState.busy) return;
  syncState.busy = true;
  setSyncStatus(`${label}中...`);
  try {
    await action();
    render();
  } catch (error) {
    setSyncStatus(error.message);
    showToast(error.message);
  } finally {
    syncState.busy = false;
  }
}

function openSyncDialog() {
  if (!supabaseEnabled()) {
    setSyncStatus("还没有配置 Supabase。请先在 config.js 填入 Project URL 和 anon public key。");
  } else if (syncState.session?.user?.email) {
    setSyncStatus(`已登录：${syncState.session.user.email}。可以把本地进度同步到 Supabase。`);
  } else {
    setSyncStatus("已配置 Supabase。请注册或登录后同步学习进度。");
  }
  const dialog = $("#syncDialog");
  if (dialog.showModal) dialog.showModal();
  else dialog.setAttribute("open", "open");
}

$("#toggleCoach").addEventListener("click", () => {
  appState.coachOpen = !appState.coachOpen;
  render();
});

$("#closeCoach").addEventListener("click", () => {
  appState.coachOpen = !appState.coachOpen;
  render();
});

$("#toggleRail").addEventListener("click", () => {
  appState.railOpen = !appState.railOpen;
  render();
});

$("#resetProgress").addEventListener("click", () => {
  if (!confirm("确定要重置本地学习进度吗？")) return;
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(appState, loadState());
  showToast("进度已重置");
  render();
});

$("#syncButton").addEventListener("click", openSyncDialog);

$("#signUpButton").addEventListener("click", () => {
  const { email, password } = syncCredentials();
  if (!email || password.length < 6) {
    setSyncStatus("请输入邮箱和至少 6 位密码。");
    return;
  }
  runSyncAction("注册", async () => {
    const data = await signUp(email, password);
    if (data?.access_token) {
      await syncProgress();
      setSyncStatus("注册成功，学习进度已同步。");
      showToast("注册并同步成功");
    } else {
      setSyncStatus("注册请求已提交。如果 Supabase 开启了邮箱确认，请先到邮箱确认后再登录。");
      showToast("请查看邮箱确认");
    }
  });
});

$("#signInButton").addEventListener("click", () => {
  const { email, password } = syncCredentials();
  if (!email || password.length < 6) {
    setSyncStatus("请输入邮箱和至少 6 位密码。");
    return;
  }
  runSyncAction("登录", async () => {
    await signIn(email, password);
    await syncProgress();
    setSyncStatus("登录成功，学习进度已同步。");
    showToast("同步完成");
  });
});

$("#signOutButton").addEventListener("click", () => {
  runSyncAction("退出", async () => {
    await signOut();
    setSyncStatus("已退出 Supabase，同步功能暂停，本地进度仍保留。");
    showToast("已退出");
  });
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

render();
