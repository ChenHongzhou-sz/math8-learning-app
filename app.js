const STEPS = [
  { id: "discover", label: "观察" },
  { id: "understand", label: "领悟" },
  { id: "practice", label: "练习" },
  { id: "master", label: "通关" }
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
  "polygon-basic": {
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
  }
};

const STORAGE_KEY = "math8_ch11_learning_state_v1";
const SESSION_KEY = "math8_ch11_supabase_session_v1";

const $ = (selector) => document.querySelector(selector);

const appState = loadState();
const appConfig = window.MATH8_APP_CONFIG || {};
const syncState = {
  session: loadSession(),
  busy: false
};
const uiMemory = {
  triangle: { ab: 7, ac: 7, bc: 5 },
  lineType: "height",
  stability: { skew: 38, brace: false },
  anglePoint: { x: 260, y: 88 },
  angleProof: false,
  exterior: { a: 62, b: 48 },
  polygonN: 5,
  formulaN: 8
};

function loadState() {
  const fallback = {
    lessonId: "edges",
    stepId: "discover",
    progress: {},
    quiz: {},
    coachOpen: window.innerWidth > 1120
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

function currentStepIndex() {
  return Math.max(0, STEPS.findIndex((step) => step.id === appState.stepId));
}

function render() {
  renderLessonList();
  renderStepTabs();
  renderStudyPanel();
  renderCoach();
  saveState();
}

function renderLessonList() {
  const completed = LESSONS.filter((lesson) => appState.progress[lesson.id]?.mastered).length;
  $("#progressText").textContent = `${completed}/${LESSONS.length}`;
  $("#overallProgress").style.width = `${(completed / LESSONS.length) * 100}%`;

  $("#lessonList").innerHTML = LESSONS.map((lesson) => {
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
  }).join("");

  document.querySelectorAll("[data-lesson]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.lessonId = button.dataset.lesson;
      appState.stepId = "discover";
      render();
    });
  });
}

function renderStepTabs() {
  $("#stepTabs").innerHTML = STEPS.map((step) => `
    <button class="step-tab ${step.id === appState.stepId ? "active" : ""}" data-step="${step.id}" type="button" role="tab">
      ${step.label}
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
      ${navigatorHtml()}
    </article>
  `;
  mountInteraction(lesson);
  bindNavigator();
}

function renderUnderstand(lesson) {
  $("#studyContent").innerHTML = `
    <article class="module">
      <div class="module-head">
        <div>
          <h3>把发现变成数学语言</h3>
          <p>${lesson.objective}</p>
        </div>
        <span class="result-pill">原理</span>
      </div>
      <ul class="principle-list">${lesson.principles.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
    ${reasoningHtml(lesson)}
    <article class="module">
      <div class="module-head">
        <div>
          <h3>常见误区</h3>
          <p>错题不只改答案，要知道自己错在哪一类。</p>
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

  $("#studyContent").innerHTML = `
    <article class="quiz-card">
      <div class="module-head">
        <div>
          <h3>第 ${quiz.index + 1} 题 / ${practices.length}</h3>
          <p>${item.prompt}</p>
        </div>
        <span class="result-pill">即时反馈</span>
      </div>
      ${practiceHintHtml(item)}
      <div class="quiz-options">
        ${item.options.map((option, index) => {
          let cls = selected === index ? "selected" : "";
          if (checked && index === item.answer) cls = "correct";
          if (checked && selected === index && index !== item.answer) cls = "wrong";
          return `<button class="option-button ${cls}" data-option="${index}" type="button">${option}</button>`;
        }).join("")}
      </div>
      <div class="feedback ${checked ? (selected === item.answer ? "good" : "bad") : ""}">
        ${checked ? item.feedback : "先选一个答案。做错也没关系，重点是看提示。"}
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
  if (id === "polygon-basic") {
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

function practiceHintHtml(item) {
  if (!item.hint) return "";
  return `
    <div class="practice-hint">
      <span>解题抓手</span>
      <strong>${item.hint}</strong>
    </div>
  `;
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
  const A = { x: 98, y: 260 };
  const C = { x: 386, y: 260 };
  const B = { x: 230, y: 92 };
  $("#exteriorSvg").innerHTML = `
    <polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}" fill="#eef5f4" stroke="#324250" stroke-width="4" stroke-linejoin="round"></polygon>
    <line x1="${C.x}" y1="${C.y}" x2="472" y2="${C.y}" stroke="#d94f45" stroke-width="4" stroke-linecap="round"></line>
    <path d="M${C.x - 58} ${C.y - 5} q28 -36 75 -22" fill="none" stroke="#d94f45" stroke-width="4"></path>
    ${pointLabel(A, "A", -26, 30)}
    ${pointLabel(B, "B", -4, -18)}
    ${pointLabel(C, "C", 14, 30)}
    <text x="90" y="232" fill="#2563a9" font-size="18" font-weight="800">${a}°</text>
    <text x="240" y="120" fill="#16756f" font-size="18" font-weight="800">${b}°</text>
    <text x="332" y="236" fill="#324250" font-size="18" font-weight="800">${third}°</text>
    <text x="392" y="214" fill="#d94f45" font-size="18" font-weight="800">外角 ${exterior}°</text>
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
  appState.coachOpen = false;
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
