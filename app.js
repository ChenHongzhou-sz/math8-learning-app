const NAV_ITEMS = [
  { id: "today", label: "今天", icon: "⌂" },
  { id: "learn", label: "学习", icon: "□" },
  { id: "practice", label: "练习", icon: "✎" },
  { id: "mistakes", label: "错题", icon: "×" },
  { id: "profile", label: "我的", icon: "☆" }
];

const STAGES = [
  { id: "knowledge", label: "知识" },
  { id: "example", label: "例题" },
  { id: "practice", label: "练习" },
  { id: "misconception", label: "易错" },
  { id: "test", label: "测试" }
];

const TRACKS = [
  {
    id: "course",
    label: "课内学习",
    desc: "八年级上册主线内容，优先完成这里。",
    active: true
  },
  {
    id: "extension",
    label: "能力提高",
    desc: "适合主线稳定后做拓展题。",
    active: false
  },
  {
    id: "amc",
    label: "AMC 8 挑战",
    desc: "竞赛内容与课内学习分开，不混入主路径。",
    active: false
  }
];

const CHAPTERS = [
  {
    id: "g8-c13-triangles",
    track: "course",
    number: "13",
    title: "三角形",
    desc: "从边、线、角到多边形，把几何证明的第一块地基搭稳。",
    concepts: ["tri-basic", "tri-sides", "tri-lines", "tri-angle-sum", "tri-exterior", "tri-polygon"]
  },
  {
    id: "g8-c14-congruence",
    track: "course",
    number: "14",
    title: "全等三角形",
    desc: "下一阶段会重做为可点选对应边角的证明训练。",
    concepts: []
  },
  {
    id: "g8-c15-symmetry",
    track: "course",
    number: "15",
    title: "轴对称",
    desc: "后续重点加入拖动点与对称轴的动态演示。",
    concepts: []
  },
  {
    id: "g8-c16-polynomial",
    track: "course",
    number: "16",
    title: "整式的乘法",
    desc: "后续用面积模型解释公式，而不是只背公式。",
    concepts: []
  },
  {
    id: "g8-c17-factorization",
    track: "course",
    number: "17",
    title: "因式分解",
    desc: "后续和整式乘法互逆，用图形与结构感连接。",
    concepts: []
  },
  {
    id: "g8-c18-fraction",
    track: "course",
    number: "18",
    title: "分式",
    desc: "后续重做为概念、运算、方程和应用题闭环。",
    concepts: []
  }
];

const CONCEPTS = [
  {
    id: "tri-basic",
    chapterId: "g8-c13-triangles",
    number: "13.1",
    title: "三角形的基本概念",
    subtitle: "什么样的图形才叫三角形？",
    minutes: 18,
    core: "三角形由不在同一直线上的三条线段首尾顺次相接组成。三角形 ABC 记作 △ABC，它有 3 个顶点、3 条边、3 个内角。",
    memory: "三条线段首尾接，不能躺成一条线。",
    english: "A triangle is made of three line segments joined end to end, and the three vertices are not collinear.",
    diagram: "triangle-basic",
    folds: {
      why: "如果三个点在同一直线上，三条线段只能压成一条线，围不出内部区域，所以不是三角形。",
      derivation: "识别三角形时按顺序问三件事：是不是三条线段？是不是首尾相接？三个点是否不在同一直线上？",
      try: "看图时先标顶点，再读边：△ABC 的边是 AB、BC、CA，角是 ∠A、∠B、∠C。",
      trap: "不要把有三条线的开放图形、交叉图形或三点共线图形当成三角形。",
      life: "屋顶架、路标支架、桥梁桁架都常用三角形，因为它的结构稳定。"
    },
    example: {
      title: "判断一个图形是否是三角形",
      prompt: "图中 A、B、C 三点不在同一直线上，线段 AB、BC、CA 首尾相接。这个图形是不是三角形？",
      steps: [
        { title: "看线段数量", text: "有 AB、BC、CA 三条线段。", highlight: "edges" },
        { title: "看连接方式", text: "三条线段首尾顺次相接，形成封闭图形。", highlight: "closed" },
        { title: "看是否共线", text: "A、B、C 不在同一直线上，所以能围成三角形。", highlight: "area" }
      ]
    },
    practice: [
      {
        id: "tri-basic-p1",
        type: "choice",
        prompt: "下面哪个说法最准确？",
        options: ["三条线段就是三角形", "三条线段首尾顺次相接且三个顶点不共线，才是三角形", "三个角合起来就是三角形"],
        answer: 1,
        hints: ["三角形必须是封闭图形。", "还要排除三点在同一直线上的情况。"],
        explanation: "三角形的定义要同时满足三条线段、首尾顺次相接、不在同一直线。"
      },
      {
        id: "tri-basic-p2",
        type: "choice",
        prompt: "△ABC 的边不包括哪一个？",
        options: ["AB", "BC", "AC", "AD"],
        answer: 3,
        hints: ["只看 A、B、C 三个顶点之间的线段。", "三角形 ABC 只有三条边。"],
        explanation: "△ABC 的三条边是 AB、BC、AC，没有 AD。"
      }
    ],
    misconception: [
      {
        id: "tri-basic-m1",
        type: "choice",
        prompt: "A、B、C 三点在同一直线上，连接 AB、BC、CA 后，可以叫 △ABC 吗？",
        options: ["可以，因为有三条线段", "不可以，因为三点共线，围不成三角形", "可以，因为有三个点"],
        answer: 1,
        hints: ["想象这三个点都在尺子边上。", "三角形要有内部区域。"],
        explanation: "三点共线时图形被压成线段，不能围成三角形。"
      }
    ],
    test: [
      {
        id: "tri-basic-t1",
        type: "choice",
        prompt: "如果一个图形可以记作 △PQR，那么它的顶点是哪些？",
        options: ["P、Q、R", "PQ、QR、PR", "∠P、∠Q、∠R"],
        answer: 0,
        hints: ["顶点是点，不是边或角。", "△PQR 的字母就是三个顶点。"],
        explanation: "△PQR 的顶点是 P、Q、R。"
      }
    ]
  },
  {
    id: "tri-sides",
    chapterId: "g8-c13-triangles",
    number: "13.2",
    title: "三角形三边关系",
    subtitle: "三根线段什么时候围得成？",
    minutes: 25,
    core: "三角形任意两边之和大于第三边。等价地，第三边必须大于两边之差，小于两边之和。",
    memory: "两边之和大于第三边，两边之差小于第三边。",
    english: "Triangle inequality: the sum of any two sides is greater than the third side.",
    diagram: "triangle-sides",
    folds: {
      why: "两点之间线段最短。如果从 B 到 C 直接走是 BC，那么绕过 A 走 AB+AC 必须更长，才可能形成真正的折线。",
      derivation: "判断三条线段能否成三角形时，只要找最长边。最长边小于另外两边之和，就能围成；相等会压成直线。",
      try: "拖动三条边：试一试 3、4、8；6、6、12；5、6、10。观察临界情况。",
      trap: "相等不行。比如 6+6=12 时，三条线段只能躺成一条直线。",
      life: "搭帐篷支架、做三角木架时，最长杆太长就无法合拢。"
    },
    example: {
      title: "第三边范围怎么求",
      prompt: "已知三角形两边长为 5 和 8，第三边为 x，求 x 的范围。",
      steps: [
        { title: "先想上限", text: "第三边不能达到两边之和，所以 x < 5+8，即 x < 13。", highlight: "sum" },
        { title: "再想下限", text: "第三边还要大于两边之差，所以 x > 8-5，即 x > 3。", highlight: "diff" },
        { title: "合起来", text: "所以 3 < x < 13。如果 x 是整数，可以是 4 到 12。", highlight: "range" }
      ]
    },
    practice: [
      {
        id: "tri-sides-p1",
        type: "choice",
        prompt: "3、4、8 能组成三角形吗？",
        options: ["能，因为有三条线段", "不能，因为 3+4<8", "能，因为 8 最大"],
        answer: 1,
        hints: ["先找最长边。", "比较另外两边和与最长边。"],
        explanation: "最长边是 8，另外两边和是 7，小于 8，所以围不成。"
      },
      {
        id: "tri-sides-p2",
        type: "choice",
        prompt: "三角形两边为 5 和 8，第三边 x 是整数。x 不可能是哪个？",
        options: ["4", "9", "13"],
        answer: 2,
        hints: ["写出范围 3<x<13。", "注意端点不能取。"],
        explanation: "第三边范围是 3<x<13，所以整数 13 不可能。"
      },
      {
        id: "tri-sides-p3",
        type: "choice",
        prompt: "等腰三角形两边长为 4 和 9，它的周长是多少？",
        options: ["17", "22", "17 或 22"],
        answer: 1,
        hints: ["等腰题要分类讨论：4 是腰，或 9 是腰。", "检查三边关系。"],
        explanation: "4、4、9 不成立；9、9、4 成立，周长为 22。"
      }
    ],
    misconception: [
      {
        id: "tri-sides-m1",
        type: "choice",
        prompt: "6、6、12 不能组成三角形，最关键的原因是？",
        options: ["12 太大，不是偶数问题", "6+6=12，会压成直线", "两条边相等一定不行"],
        answer: 1,
        hints: ["相等不是大于。", "想象两根 6 从 12 的两端伸出。"],
        explanation: "两边之和必须大于第三边，相等时图形退化成直线。"
      },
      {
        id: "tri-sides-m2",
        type: "choice",
        prompt: "判断 2、9、10 能否成三角形，最快检查什么？",
        options: ["2+9 是否大于 10", "2+10 是否大于 9", "9+10 是否大于 2"],
        answer: 0,
        hints: ["先找最长边 10。", "只要最短两边之和大于最长边，另外两组自然成立。"],
        explanation: "最长边是 10，检查 2+9>10 即可。"
      }
    ],
    test: [
      {
        id: "tri-sides-t1",
        type: "choice",
        prompt: "已知三角形两边为 7 和 11，第三边 x 是整数，x 的最小值是？",
        options: ["3", "4", "5"],
        answer: 2,
        hints: ["第三边要大于 11-7。", "x 是整数。"],
        explanation: "第三边范围是 4<x<18，整数最小是 5。"
      },
      {
        id: "tri-sides-t2",
        type: "choice",
        prompt: "下面哪组三条线段能组成三角形？",
        options: ["2、3、5", "4、6、9", "1、8、10"],
        answer: 1,
        hints: ["逐组只看最长边。", "相等也不行。"],
        explanation: "4+6>9，能组成三角形；2+3=5 不行；1+8<10 不行。"
      }
    ]
  },
  {
    id: "tri-lines",
    chapterId: "g8-c13-triangles",
    number: "13.3",
    title: "高、中线、角平分线",
    subtitle: "同样从顶点出发，证据不同",
    minutes: 28,
    core: "高看垂直，中线看中点，角平分线看等角。三角形三条中线交于一点，这个点叫重心。",
    memory: "高是 90°，中线分边，角平分线分角。",
    english: "Altitude gives perpendicularity, median gives midpoint, angle bisector gives equal angles.",
    diagram: "triangle-lines",
    folds: {
      why: "这些线段的名字不是看长得像不像，而是看它带来的数学证据。",
      derivation: "从顶点 A 到对边 BC：如果 AD⊥BC，AD 是高；如果 D 是 BC 中点，AD 是中线；如果 ∠BAD=∠DAC，AD 是角平分线。",
      try: "切换图中的高、中线、角平分线，只说它给了你哪个证据。",
      trap: "中线不一定垂直，角平分线也不一定平分对边。只有特殊三角形中才可能重合。",
      life: "重心能帮助理解物体平衡；三角形纸片三条中线交点附近可以找到平衡点。"
    },
    example: {
      title: "从条件判断是哪条特殊线",
      prompt: "在 △ABC 中，D 在 BC 上。如果 BD=DC，那么 AD 是什么线？",
      steps: [
        { title: "看条件", text: "BD=DC 说明 D 是 BC 的中点。", highlight: "midpoint" },
        { title: "套定义", text: "从顶点 A 连到对边 BC 的中点，这条线叫中线。", highlight: "median" },
        { title: "别多想", text: "题目没有给垂直，也没有给等角，所以不能说它是高或角平分线。", highlight: "avoid" }
      ]
    },
    practice: [
      {
        id: "tri-lines-p1",
        type: "choice",
        prompt: "AD 是 BC 边上的中线，BC=14，则 BD 等于？",
        options: ["7", "14", "不能确定"],
        answer: 0,
        hints: ["中线连到对边中点。", "中点把线段分成相等两段。"],
        explanation: "D 是 BC 的中点，所以 BD=DC=7。"
      },
      {
        id: "tri-lines-p2",
        type: "choice",
        prompt: "AD 平分 ∠A，∠A=68°，则 ∠BAD 等于？",
        options: ["34°", "68°", "90°"],
        answer: 0,
        hints: ["角平分线把一个角分成两半。", "68°÷2。"],
        explanation: "∠BAD=∠DAC=34°。"
      }
    ],
    misconception: [
      {
        id: "tri-lines-m1",
        type: "choice",
        prompt: "看到 AD 是中线，可以直接推出什么？",
        options: ["AD⊥BC", "BD=DC", "∠BAD=∠DAC"],
        answer: 1,
        hints: ["中线的关键词是中点。", "不要把三种线混在一起。"],
        explanation: "中线只直接给出对边被平分，即 BD=DC。"
      },
      {
        id: "tri-lines-m2",
        type: "choice",
        prompt: "钝角三角形的高有时落在三角形外面，原因是？",
        options: ["高要垂直到对边所在直线", "高必须经过中点", "高必须平分角"],
        answer: 0,
        hints: ["定义里是对边所在直线。", "钝角时可能需要延长对边。"],
        explanation: "高要求从顶点向对边所在直线作垂线，所以可能落在外部。"
      }
    ],
    test: [
      {
        id: "tri-lines-t1",
        type: "choice",
        prompt: "如果 AD⊥BC，那么 AD 最可能是 △ABC 的哪种线？",
        options: ["BC 边上的高", "BC 边上的中线", "∠A 的角平分线"],
        answer: 0,
        hints: ["看到 90°，先想到高。", "高的核心证据是垂直。"],
        explanation: "从顶点向对边所在直线作垂线，得到高。"
      }
    ]
  },
  {
    id: "tri-angle-sum",
    chapterId: "g8-c13-triangles",
    number: "13.4",
    title: "三角形内角和",
    subtitle: "为什么一定是 180°？",
    minutes: 30,
    core: "三角形三个内角的和等于 180°。测量能发现规律，平行线证明能确认所有情况都成立。",
    memory: "三角形三角和，拼成一个平角。",
    english: "The sum of the three interior angles of a triangle is 180 degrees.",
    diagram: "triangle-angle-sum",
    folds: {
      why: "量角器会有误差，剪拼也只能说明直观。数学证明要说明任意三角形都成立。",
      derivation: "过顶点 A 作 BC 的平行线。利用平行线的内错角或同位角相等，把 ∠B、∠C 搬到 A 点附近，三个角组成一个平角。",
      try: "拖动顶点改变三角形形状，观察三个角怎么变，但总和仍是 180°。",
      trap: "不要把测量结果当证明；证明题要写出用了平行线和平角。",
      life: "三角形角度关系是很多几何题的起点，尤其是求角和证明平行。"
    },
    example: {
      title: "已知两角求第三角",
      prompt: "△ABC 中，∠A=52°，∠B=68°，求 ∠C。",
      steps: [
        { title: "找到所在三角形", text: "三个角都在同一个 △ABC 中。", highlight: "triangle" },
        { title: "用内角和", text: "∠A+∠B+∠C=180°。", highlight: "sum" },
        { title: "计算", text: "∠C=180°-52°-68°=60°。", highlight: "answer" }
      ]
    },
    practice: [
      {
        id: "tri-angle-p1",
        type: "choice",
        prompt: "三角形两个角是 40° 和 75°，第三个角是？",
        options: ["55°", "65°", "75°"],
        answer: 1,
        hints: ["三角形三个内角和为 180°。", "180-40-75。"],
        explanation: "第三角为 180°-40°-75°=65°。"
      },
      {
        id: "tri-angle-p2",
        type: "choice",
        prompt: "一个三角形三个角的比是 2:3:4，最大角是多少？",
        options: ["60°", "80°", "100°"],
        answer: 1,
        hints: ["总份数是 9。", "180°÷9=20°。"],
        explanation: "最大角是 4 份，4×20°=80°。"
      }
    ],
    misconception: [
      {
        id: "tri-angle-m1",
        type: "choice",
        prompt: "证明三角形内角和时，过一个顶点作平行线的主要目的是什么？",
        options: ["让图更好看", "把角转移到一个平角上", "让三角形变大"],
        answer: 1,
        hints: ["平行线能得到相等角。", "最后要拼成 180°。"],
        explanation: "作平行线是为了用角相等把三个内角拼到一条直线上。"
      }
    ],
    test: [
      {
        id: "tri-angle-t1",
        type: "choice",
        prompt: "已知 ∠A=50°，AD 平分 ∠A，∠B=60°，则 △ABD 中 ∠ADB 是？",
        options: ["70°", "85°", "95°"],
        answer: 2,
        hints: ["先求 ∠BAD。", "在 △ABD 中用内角和。"],
        explanation: "∠BAD=25°，所以 ∠ADB=180°-60°-25°=95°。"
      }
    ]
  },
  {
    id: "tri-exterior",
    chapterId: "g8-c13-triangles",
    number: "13.5",
    title: "直角三角形与外角",
    subtitle: "外角等于哪两个角的和？",
    minutes: 26,
    core: "直角三角形两个锐角互余。三角形的一个外角等于与它不相邻的两个内角之和。",
    memory: "直角三角形锐角和 90°；外角看远处两个内角。",
    english: "An exterior angle of a triangle equals the sum of the two non-adjacent interior angles.",
    diagram: "triangle-exterior",
    folds: {
      why: "外角与相邻内角拼成平角，而相邻内角又等于 180° 减去另外两个内角，所以外角等于两个远内角之和。",
      derivation: "设外角为 ∠ACD，相邻内角是 ∠ACB。因为 ∠ACD+∠ACB=180°，又 ∠A+∠B+∠ACB=180°，所以 ∠ACD=∠A+∠B。",
      try: "先指出外角旁边的相邻内角，再指出两个不相邻内角。",
      trap: "外角不是等于任意两个内角之和，只等于两个不相邻内角之和。",
      life: "转弯、折线和方向角问题里，外角可以帮助快速看出角度变化。"
    },
    example: {
      title: "用外角一步求角",
      prompt: "△ABC 中，∠A=45°，∠B=70°，延长 BC 到 D，求外角 ∠ACD。",
      steps: [
        { title: "找外角", text: "∠ACD 是 C 点处的外角。", highlight: "exterior" },
        { title: "找远内角", text: "与它不相邻的两个内角是 ∠A 和 ∠B。", highlight: "remote" },
        { title: "相加", text: "∠ACD=∠A+∠B=45°+70°=115°。", highlight: "answer" }
      ]
    },
    practice: [
      {
        id: "tri-ext-p1",
        type: "choice",
        prompt: "直角三角形一个锐角是 35°，另一个锐角是？",
        options: ["45°", "55°", "65°"],
        answer: 1,
        hints: ["直角三角形两个锐角互余。", "90°-35°。"],
        explanation: "另一个锐角为 90°-35°=55°。"
      },
      {
        id: "tri-ext-p2",
        type: "choice",
        prompt: "三角形一个外角是 120°，一个远内角是 45°，另一个远内角是？",
        options: ["65°", "75°", "85°"],
        answer: 1,
        hints: ["外角等于两个远内角之和。", "120°-45°。"],
        explanation: "另一个远内角为 120°-45°=75°。"
      }
    ],
    misconception: [
      {
        id: "tri-ext-m1",
        type: "choice",
        prompt: "外角和它相邻的内角之间是什么关系？",
        options: ["相等", "互补", "互余"],
        answer: 1,
        hints: ["它们拼成一条直线。", "平角是多少度？"],
        explanation: "外角和相邻内角组成平角，所以互补。"
      }
    ],
    test: [
      {
        id: "tri-ext-t1",
        type: "choice",
        prompt: "如果三角形一个外角是 100°，那么与它相邻的内角是？",
        options: ["80°", "90°", "100°"],
        answer: 0,
        hints: ["相邻内角与外角互补。", "180°-100°。"],
        explanation: "相邻内角是 180°-100°=80°。"
      }
    ]
  },
  {
    id: "tri-polygon",
    chapterId: "g8-c13-triangles",
    number: "13.6",
    title: "多边形与内角和",
    subtitle: "公式里的 n-2 从哪里来？",
    minutes: 32,
    core: "n 边形从一个顶点出发可画 n-3 条对角线，分成 n-2 个三角形，所以内角和是 (n-2)×180°。多边形外角和恒为 360°。",
    memory: "多边形切三角形：n-2 个三角形，外角转一圈。",
    english: "The interior angle sum of an n-gon is (n-2)×180°, and the exterior angle sum is 360°.",
    diagram: "polygon-sum",
    folds: {
      why: "一个多边形的角度问题，常常可以转回三角形。三角形内角和是 180°，所以切成几个三角形就有几个 180°。",
      derivation: "从一个顶点连向不相邻顶点。不能连自己和相邻两个顶点，所以对角线有 n-3 条，把多边形分成 n-2 个三角形。",
      try: "试着画五边形和六边形，从一个顶点出发分别切成几个三角形。",
      trap: "普通多边形不能把内角和平均分。只有正多边形才可以求每个内角。",
      life: "地砖铺设、标志设计、蜂窝结构都会用到多边形角度和对称。"
    },
    example: {
      title: "求八边形内角和",
      prompt: "八边形的内角和是多少？",
      steps: [
        { title: "确定 n", text: "八边形的 n=8。", highlight: "n" },
        { title: "切三角形", text: "它可以分成 n-2=6 个三角形。", highlight: "triangles" },
        { title: "乘 180°", text: "内角和为 6×180°=1080°。", highlight: "answer" }
      ]
    },
    practice: [
      {
        id: "poly-p1",
        type: "choice",
        prompt: "五边形从一个顶点出发可以画几条对角线？",
        options: ["1 条", "2 条", "3 条"],
        answer: 1,
        hints: ["从一个顶点不能连自己和相邻两个点。", "n-3。"],
        explanation: "五边形从一个顶点出发可画 5-3=2 条对角线。"
      },
      {
        id: "poly-p2",
        type: "choice",
        prompt: "八边形内角和是多少？",
        options: ["900°", "1080°", "1260°"],
        answer: 1,
        hints: ["公式是 (n-2)×180°。", "n=8。"],
        explanation: "(8-2)×180°=1080°。"
      },
      {
        id: "poly-p3",
        type: "choice",
        prompt: "正五边形每个内角是多少？",
        options: ["90°", "108°", "120°"],
        answer: 1,
        hints: ["正多边形才能平均分。", "五边形内角和 540°。"],
        explanation: "正五边形每个内角为 540°÷5=108°。"
      }
    ],
    misconception: [
      {
        id: "poly-m1",
        type: "choice",
        prompt: "一个普通六边形内角和是 720°，能否直接说每个内角都是 120°？",
        options: ["能", "不能，只有正六边形才平均", "不能，六边形没有内角"],
        answer: 1,
        hints: ["普通多边形角不一定相等。", "正多边形要求各边各角都相等。"],
        explanation: "普通六边形只能确定内角和，不能确定每个内角。"
      }
    ],
    test: [
      {
        id: "poly-t1",
        type: "choice",
        prompt: "一个多边形内角和为 1260°，它是几边形？",
        options: ["八边形", "九边形", "十边形"],
        answer: 1,
        hints: ["令 (n-2)×180°=1260°。", "1260÷180=7。"],
        explanation: "n-2=7，所以 n=9。"
      }
    ]
  }
];

const ERROR_REASONS = ["概念不会", "公式记错", "方法不会", "计算错误", "看错条件", "粗心"];
const STORAGE_KEY = "math8_self_learning_state_v3";
const SESSION_KEY = "math8_self_learning_supabase_session_v1";
const GLOBAL_ROW_ID = "_global_state_v3";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const appConfig = window.MATH8_APP_CONFIG || {};
const syncState = {
  session: loadSession(),
  busy: false
};

let appState = loadState();

const CHAPTER_BY_ID = Object.fromEntries(CHAPTERS.map((chapter) => [chapter.id, chapter]));
const CONCEPT_BY_ID = Object.fromEntries(CONCEPTS.map((concept) => [concept.id, concept]));
applyUrlState();

function loadState() {
  const fallback = {
    section: "today",
    track: "course",
    chapterId: "g8-c13-triangles",
    conceptId: "tri-sides",
    stage: "knowledge",
    progress: {},
    runs: {},
    mistakes: [],
    settings: {
      language: "zh",
      startedOn: todayKey()
    }
  };
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return deepMerge(fallback, stored);
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  renderSyncMini();
}

function applyUrlState() {
  const params = new URLSearchParams(location.search);
  const section = params.get("section");
  const conceptId = params.get("concept");
  const stage = params.get("stage");
  if (section && NAV_ITEMS.some((item) => item.id === section)) appState.section = section;
  if (conceptId && CONCEPTS.some((concept) => concept.id === conceptId)) {
    appState.conceptId = conceptId;
    appState.chapterId = CONCEPT_BY_ID?.[conceptId]?.chapterId || appState.chapterId;
  }
  if (stage && STAGES.some((item) => item.id === stage)) appState.stage = stage;
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
  renderSyncMini();
}

function deepMerge(base, extra) {
  const result = { ...base, ...extra };
  result.progress = { ...(base.progress || {}), ...(extra.progress || {}) };
  result.runs = { ...(base.runs || {}), ...(extra.runs || {}) };
  result.settings = { ...(base.settings || {}), ...(extra.settings || {}) };
  result.mistakes = Array.isArray(extra.mistakes) ? extra.mistakes : base.mistakes;
  return result;
}

function render() {
  ensureValidState();
  renderShell();
  if (appState.section === "today") renderToday();
  if (appState.section === "learn") renderLearn();
  if (appState.section === "practice") renderPracticeHub();
  if (appState.section === "mistakes") renderMistakesPage();
  if (appState.section === "profile") renderProfile();
  saveState();
}

function ensureValidState() {
  if (!CHAPTER_BY_ID[appState.chapterId]) appState.chapterId = "g8-c13-triangles";
  if (!CONCEPT_BY_ID[appState.conceptId]) appState.conceptId = "tri-sides";
  if (!STAGES.some((stage) => stage.id === appState.stage)) appState.stage = "knowledge";
  if (!NAV_ITEMS.some((item) => item.id === appState.section)) appState.section = "today";
}

function renderShell() {
  const page = {
    today: ["今天", "继续把数学学明白"],
    learn: ["学习", "按知识点一步一步推进"],
    practice: ["练习", "一题一屏，做完再前进"],
    mistakes: ["错题", "把不会变成会"],
    profile: ["我的", "看见自己的掌握情况"]
  }[appState.section];
  $("#pageEyebrow").textContent = page[0];
  $("#pageTitle").textContent = page[1];
  const navHtml = NAV_ITEMS.map((item) => navButtonHtml(item)).join("");
  $("#sideNav").innerHTML = navHtml;
  $("#bottomNav").innerHTML = navHtml;
  $$(".nav-button").forEach((button) => {
    button.addEventListener("click", () => {
      appState.section = button.dataset.section;
      render();
    });
  });
  renderSyncMini();
}

function navButtonHtml(item) {
  return `
    <button class="nav-button ${appState.section === item.id ? "active" : ""}" data-section="${item.id}" type="button">
      <span class="nav-icon">${item.icon}</span>
      <span>${item.label}</span>
    </button>
  `;
}

function renderSyncMini() {
  const target = $("#syncMini");
  if (!target) return;
  target.innerHTML = syncState.session?.user?.email
    ? `<p>已登录</p><strong>${escapeHtml(syncState.session.user.email)}</strong>`
    : `<p>本地进度</p><strong>可开启云同步</strong>`;
}

function renderToday() {
  const target = getContinueTarget();
  const concept = CONCEPT_BY_ID[target.conceptId];
  const chapter = CHAPTER_BY_ID[concept.chapterId];
  const progress = getConceptProgress(concept.id);
  const activeMistakes = getActiveMistakes();
  const weakConcepts = getWeakConcepts().slice(0, 4);
  const tasks = todayTasks(concept);

  $("#screen").innerHTML = `
    <div class="today-grid">
      <section class="hero-panel">
        <div class="hero-copy">
          <p class="eyebrow">继续学习</p>
          <h3>第${chapter.number}章 ${chapter.title}</h3>
          <h2>${concept.number} ${concept.title}</h2>
          <p>${concept.subtitle}</p>
          <div class="progress-line" aria-label="当前知识点掌握度">
            <span style="width:${masteryOf(concept.id)}%"></span>
          </div>
          <div class="hero-meta">
            <span>掌握度 ${masteryOf(concept.id)}%</span>
            <span>${statusLabel(progress.status)}</span>
          </div>
          <button class="primary-button" data-open-concept="${concept.id}" data-stage="${target.stage}" type="button">继续学习</button>
        </div>
        <div class="hero-visual" aria-hidden="true">${diagramFor(concept, "today")}</div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">今日任务</p>
            <h3>约 ${tasks.minutes} 分钟</h3>
          </div>
          <span class="status-pill">${tasks.done}/${tasks.items.length}</span>
        </div>
        <div class="task-list">
          ${tasks.items.map((task) => `
            <button class="task-row" data-open-concept="${concept.id}" data-stage="${task.stage}" type="button">
              <span class="task-check ${task.done ? "done" : ""}">${task.done ? "✓" : "○"}</span>
              <span>${task.label}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">我的薄弱点</p>
            <h3>优先补这里</h3>
          </div>
        </div>
        ${weakConcepts.length ? `
          <div class="weak-list">
            ${weakConcepts.map((item) => `
              <button class="weak-card" data-open-concept="${item.id}" data-stage="practice" type="button">
                <strong>${item.title}</strong>
                <span>${statusLabel(getConceptProgress(item.id).status)} · ${masteryOf(item.id)}%</span>
              </button>
            `).join("")}
          </div>
        ` : `<p class="empty-note">目前没有明显薄弱点。继续完成今天的学习任务。</p>`}
      </section>

      <section class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">最近错题</p>
            <h3>${activeMistakes.length ? "需要复习" : "暂时没有"}</h3>
          </div>
          <button class="ghost-button small" data-section-link="mistakes" type="button">去错题</button>
        </div>
        ${activeMistakes.length ? `
          <div class="recent-mistakes">
            ${activeMistakes.slice(0, 4).map((mistake) => mistakeMiniHtml(mistake)).join("")}
          </div>
        ` : `<p class="empty-note">做错的题会自动放到这里，复习做对后会进入已掌握错题。</p>`}
      </section>
    </div>
  `;
  bindCommonActions();
}

function renderLearn() {
  const chapter = CHAPTER_BY_ID[appState.chapterId];
  const concept = CONCEPT_BY_ID[appState.conceptId];
  $("#screen").innerHTML = `
    <div class="learning-layout">
      <aside class="learning-map">
        <section class="track-box">
          <p class="eyebrow">学习路径</p>
          <div class="track-tabs">
            ${TRACKS.map((track) => `
              <button class="track-tab ${appState.track === track.id ? "active" : ""}" data-track="${track.id}" type="button">
                <strong>${track.label}</strong>
                <span>${track.active ? "主路径" : "待开放"}</span>
              </button>
            `).join("")}
          </div>
        </section>
        <section class="chapter-list">
          ${CHAPTERS.filter((item) => item.track === appState.track).map((item) => chapterButtonHtml(item)).join("")}
        </section>
      </aside>

      <section class="lesson-workspace">
        <div class="chapter-summary">
          <div>
            <p class="eyebrow">第${chapter.number}章</p>
            <h3>${chapter.title}</h3>
            <p>${chapter.desc}</p>
          </div>
          <span class="status-pill">${chapterProgress(chapter.id)}%</span>
        </div>
        ${chapter.concepts.length ? renderConceptWorkspace(concept) : renderComingSoon(chapter)}
      </section>
    </div>
  `;
  bindLearnActions();
  bindCommonActions();
}

function chapterButtonHtml(chapter) {
  const active = chapter.id === appState.chapterId;
  const percent = chapterProgress(chapter.id);
  return `
    <button class="chapter-button ${active ? "active" : ""}" data-chapter="${chapter.id}" type="button">
      <span class="chapter-number">${chapter.number}</span>
      <span class="chapter-copy">
        <strong>${chapter.title}</strong>
        <small>${chapter.concepts.length ? `${percent}% 完成` : "待整理"}</small>
      </span>
    </button>
  `;
}

function renderConceptWorkspace(concept) {
  return `
    <div class="concept-layout">
      <aside class="concept-list">
        ${CHAPTER_BY_ID[concept.chapterId].concepts.map((id) => conceptButtonHtml(CONCEPT_BY_ID[id])).join("")}
      </aside>
      <article class="lesson-card">
        <div class="lesson-head">
          <div>
            <p class="eyebrow">${concept.number}</p>
            <h2>${concept.title}</h2>
            <p>${concept.subtitle}</p>
          </div>
          <div class="mastery-badge">
            <strong>${masteryOf(concept.id)}%</strong>
            <span>${statusLabel(getConceptProgress(concept.id).status)}</span>
          </div>
        </div>
        <div class="stage-tabs">
          ${STAGES.map((stage) => stageTabHtml(concept, stage)).join("")}
        </div>
        <div class="stage-body">${renderStage(concept, appState.stage)}</div>
      </article>
    </div>
  `;
}

function conceptButtonHtml(concept) {
  const progress = getConceptProgress(concept.id);
  return `
    <button class="concept-button ${concept.id === appState.conceptId ? "active" : ""}" data-concept="${concept.id}" type="button">
      <span>${concept.number}</span>
      <strong>${concept.title}</strong>
      <small>${statusLabel(progress.status)} · ${masteryOf(concept.id)}%</small>
    </button>
  `;
}

function stageTabHtml(concept, stage) {
  const progress = getConceptProgress(concept.id);
  const done = progress.stages?.[stage.id];
  return `
    <button class="stage-tab ${appState.stage === stage.id ? "active" : ""}" data-stage-tab="${stage.id}" type="button">
      <span>${done ? "✓" : ""}</span>${stage.label}
    </button>
  `;
}

function renderStage(concept, stage) {
  if (stage === "knowledge") return renderKnowledgeStage(concept);
  if (stage === "example") return renderExampleStage(concept);
  if (stage === "practice") return renderQuestionStage(concept, "practice", concept.practice);
  if (stage === "misconception") return renderQuestionStage(concept, "misconception", concept.misconception);
  if (stage === "test") return renderQuestionStage(concept, "test", concept.test);
  return "";
}

function renderKnowledgeStage(concept) {
  const progress = getConceptProgress(concept.id);
  return `
    <section class="knowledge-grid">
      <div class="knowledge-main">
        <div class="core-card">
          <p class="eyebrow">核心结论</p>
          <h3>${concept.core}</h3>
        </div>
        <div class="memory-card">
          <span>一句话记忆</span>
          <strong>${concept.memory}</strong>
          ${appState.settings.language === "bilingual" ? `<small>${concept.english}</small>` : ""}
        </div>
        <div class="fold-list">
          ${foldHtml("为什么？", concept.folds.why, true)}
          ${foldHtml("查看推导", concept.folds.derivation)}
          ${foldHtml("动手试试", concept.folds.try)}
          ${foldHtml("易错提醒", concept.folds.trap)}
          ${foldHtml("生活中的数学", concept.folds.life)}
        </div>
        <button class="primary-button" data-complete-stage="knowledge" type="button">
          ${progress.stages.knowledge ? "已完成知识学习" : "我理解了，进入例题"}
        </button>
      </div>
      <div class="diagram-panel">
        ${diagramFor(concept, "knowledge")}
        ${concept.id === "tri-sides" ? sideLabHtml() : ""}
      </div>
    </section>
  `;
}

function foldHtml(title, content, open = false) {
  return `
    <details class="fold-card" ${open ? "open" : ""}>
      <summary>${title}</summary>
      <p>${content}</p>
    </details>
  `;
}

function sideLabHtml() {
  const lab = getLabState();
  const longest = Math.max(lab.a, lab.b, lab.c);
  const rest = lab.a + lab.b + lab.c - longest;
  const ok = rest > longest;
  return `
    <div class="side-lab">
      <p class="eyebrow">动手验证</p>
      ${rangeHtml("第一根", "a", lab.a, 2, 14)}
      ${rangeHtml("第二根", "b", lab.b, 2, 14)}
      ${rangeHtml("第三根", "c", lab.c, 2, 14)}
      <div class="lab-result ${ok ? "ok" : "bad"}">
        <strong>${ok ? "能围成三角形" : rest === longest ? "会压成直线" : "围不成三角形"}</strong>
        <span>最长边 ${longest}，另外两边和 ${rest}</span>
      </div>
    </div>
  `;
}

function rangeHtml(label, key, value, min, max) {
  return `
    <label class="range-row">
      <span>${label}</span>
      <input data-lab-range="${key}" type="range" min="${min}" max="${max}" value="${value}" />
      <strong>${value}</strong>
    </label>
  `;
}

function renderExampleStage(concept) {
  const run = getRun(concept.id, "example");
  const visible = Math.min(run.revealed || 0, concept.example.steps.length);
  return `
    <section class="example-grid">
      <div class="example-card">
        <p class="eyebrow">分步例题</p>
        <h3>${concept.example.title}</h3>
        <p class="question-text">${concept.example.prompt}</p>
        <div class="think-box">先自己想 30 秒：这题最先应该看什么条件？</div>
        <div class="step-list">
          ${concept.example.steps.slice(0, visible).map((step, index) => `
            <div class="solution-step">
              <span>${index + 1}</span>
              <div>
                <strong>${step.title}</strong>
                <p>${step.text}</p>
              </div>
            </div>
          `).join("")}
        </div>
        <div class="example-actions">
          ${visible < concept.example.steps.length
            ? `<button class="primary-button" data-reveal-step type="button">查看第 ${visible + 1} 步</button>`
            : `<button class="primary-button" data-complete-stage="example" type="button">例题学完，进入练习</button>`}
          ${visible > 0 ? `<button class="ghost-button" data-reset-example type="button">重新分步看</button>` : ""}
        </div>
      </div>
      <div class="diagram-panel example-visual">
        ${diagramFor(concept, concept.example.steps[Math.max(0, visible - 1)]?.highlight || "example")}
      </div>
    </section>
  `;
}

function renderQuestionStage(concept, stage, sourceQuestions) {
  const questions = activeQuestions(sourceQuestions);
  const run = getRun(concept.id, stage);
  if (run.index >= questions.length) run.index = 0;
  const done = run.completed?.length || 0;
  if (questions.length && done >= questions.length) {
    return completionHtml(concept, stage, questions);
  }
  const question = questions[run.index];
  if (!question) return `<p class="empty-note">这一部分题目正在整理。</p>`;
  const submitted = run.submitted?.[question.id];
  const selected = run.answers?.[question.id];
  const correct = submitted && isCorrect(question, selected);
  const wrong = submitted && !correct;
  const hintLevel = run.hints?.[question.id] || 0;
  const revealed = run.revealed?.[question.id];

  return `
    <section class="question-screen">
      <div class="question-card">
        <div class="question-head">
          <div>
            <p class="eyebrow">${stageLabel(stage)}</p>
            <h3>第 ${run.index + 1} / ${questions.length} 题</h3>
          </div>
          <span class="status-pill">${done}/${questions.length}</span>
        </div>
        <p class="question-text">${question.prompt}</p>
        ${answerInputHtml(question, selected, submitted)}
        ${hintLevel > 0 ? `<div class="hint-card"><strong>提示 ${hintLevel}</strong><p>${question.hints[Math.min(hintLevel, question.hints.length) - 1]}</p></div>` : ""}
        ${wrong ? wrongFeedbackHtml(question, revealed) : ""}
        ${correct ? `<div class="feedback good"><strong>正确</strong><p>${question.explanation}</p></div>` : ""}
        <div class="question-actions">
          ${!submitted ? `<button class="primary-button" data-submit-answer type="button">提交</button>` : ""}
          ${wrong && hintLevel < question.hints.length ? `<button class="ghost-button" data-show-hint type="button">提示 ${hintLevel + 1}</button>` : ""}
          ${wrong && !revealed ? `<button class="ghost-button" data-reveal-answer type="button">查看解析</button>` : ""}
          ${(correct || revealed) ? `<button class="primary-button" data-next-question type="button">${run.index + 1 === questions.length ? "完成本部分" : "下一题"}</button>` : ""}
        </div>
      </div>
      <div class="diagram-panel question-visual">${diagramFor(concept, stage)}</div>
    </section>
  `;
}

function answerInputHtml(question, selected, submitted) {
  if (question.type === "choice") {
    return `
      <div class="option-list">
        ${question.options.map((option, index) => {
          const cls = [
            selected === index ? "selected" : "",
            submitted && index === question.answer ? "correct" : "",
            submitted && selected === index && index !== question.answer ? "wrong" : ""
          ].join(" ");
          return `<button class="option-button ${cls}" data-answer="${index}" ${submitted ? "disabled" : ""} type="button">${option}</button>`;
        }).join("")}
      </div>
    `;
  }
  return `
    <input class="answer-input" data-text-answer value="${escapeHtml(selected || "")}" ${submitted ? "disabled" : ""} placeholder="输入答案" />
  `;
}

function wrongFeedbackHtml(question, revealed) {
  return `
    <div class="feedback bad">
      <strong>再想一想</strong>
      <p>${revealed ? question.explanation : "先别急着看完整答案，试着用提示重新判断。也请选一下这次错因。"}</p>
      <div class="reason-row">
        ${ERROR_REASONS.map((reason) => `<button class="reason-chip" data-error-reason="${reason}" type="button">${reason}</button>`).join("")}
      </div>
    </div>
  `;
}

function completionHtml(concept, stage, questions) {
  const correct = correctCount(concept.id, stage, questions);
  const ratio = questions.length ? Math.round(correct / questions.length * 100) : 0;
  const next = nextStageAfter(stage);
  const low = stage === "test" && ratio < 80;
  return `
    <section class="completion-card">
      <p class="eyebrow">完成</p>
      <h3>${stageLabel(stage)}完成：${correct}/${questions.length}</h3>
      <p>${low ? "这个知识点还有一点不稳定，建议先做强化练习。" : "这一部分已经完成，继续下一步会更顺。"}
      </p>
      <div class="completion-actions">
        ${low ? `<button class="primary-button" data-restart-stage="practice" type="button">做 5 题强化训练</button>` : ""}
        ${next ? `<button class="primary-button" data-go-stage="${next}" type="button">继续 ${stageLabel(next)}</button>` : nextConceptButtonHtml(concept)}
        <button class="ghost-button" data-review-stage="${stage}" type="button">重新做本部分</button>
      </div>
    </section>
  `;
}

function nextConceptButtonHtml(concept) {
  const chapter = CHAPTER_BY_ID[concept.chapterId];
  const index = chapter.concepts.indexOf(concept.id);
  const nextId = chapter.concepts[index + 1];
  if (!nextId) {
    return `<button class="primary-button" data-section-link="today" type="button">回到今天</button>`;
  }
  const next = CONCEPT_BY_ID[nextId];
  return `<button class="primary-button" data-open-concept="${next.id}" data-stage="knowledge" type="button">下一步：${next.number}</button>`;
}

function renderComingSoon(chapter) {
  return `
    <section class="coming-card">
      <p class="eyebrow">待重构</p>
      <h3>第${chapter.number}章 ${chapter.title}</h3>
      <p>${chapter.desc}</p>
      <p>当前先按任务书完成第13章完整样板，确认体验后再复制到本章。</p>
    </section>
  `;
}

function renderPracticeHub() {
  const weak = getWeakConcepts();
  $("#screen").innerHTML = `
    <div class="hub-grid">
      <section class="panel wide">
        <div class="panel-head">
          <div>
            <p class="eyebrow">专项训练</p>
            <h3>先补薄弱，再做新题</h3>
          </div>
        </div>
        <div class="concept-card-grid">
          ${CONCEPTS.map((concept) => practiceConceptHtml(concept)).join("")}
        </div>
      </section>
      <section class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">推荐</p>
            <h3>${weak.length ? "优先练这些" : "按顺序练习"}</h3>
          </div>
        </div>
        <div class="weak-list">
          ${(weak.length ? weak : CONCEPTS.slice(0, 3)).map((concept) => `
            <button class="weak-card" data-open-concept="${concept.id}" data-stage="practice" type="button">
              <strong>${concept.number} ${concept.title}</strong>
              <span>${masteryOf(concept.id)}% · ${statusLabel(getConceptProgress(concept.id).status)}</span>
            </button>
          `).join("")}
        </div>
      </section>
    </div>
  `;
  bindCommonActions();
}

function practiceConceptHtml(concept) {
  return `
    <article class="concept-practice-card">
      <p>${concept.number}</p>
      <h3>${concept.title}</h3>
      <div class="mini-progress"><span style="width:${masteryOf(concept.id)}%"></span></div>
      <div class="card-actions">
        <button class="ghost-button small" data-open-concept="${concept.id}" data-stage="practice" type="button">基础练习</button>
        <button class="ghost-button small" data-open-concept="${concept.id}" data-stage="misconception" type="button">易错训练</button>
        <button class="primary-button small" data-open-concept="${concept.id}" data-stage="test" type="button">小测试</button>
      </div>
    </article>
  `;
}

function renderMistakesPage() {
  const active = getActiveMistakes();
  const mastered = appState.mistakes.filter((item) => item.status === "mastered");
  const current = active[0];
  $("#screen").innerHTML = `
    <div class="mistake-layout">
      <section class="panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">错题本</p>
            <h3>${active.length} 道待复习</h3>
          </div>
          <span class="status-pill">${mastered.length} 已掌握</span>
        </div>
        ${active.length ? `
          <div class="mistake-list">
            ${active.map((mistake, index) => mistakeListItemHtml(mistake, index === 0)).join("")}
          </div>
        ` : `<p class="empty-note">目前没有待复习错题。继续做练习，系统会自动记录。</p>`}
      </section>
      <section class="lesson-card">
        ${current ? renderMistakeReview(current) : renderMistakeEmpty(mastered)}
      </section>
    </div>
  `;
  bindMistakeActions();
  bindCommonActions();
}

function mistakeListItemHtml(mistake, active) {
  const concept = CONCEPT_BY_ID[mistake.conceptId];
  return `
    <button class="mistake-list-item ${active ? "active" : ""}" data-select-mistake="${mistake.id}" type="button">
      <strong>${concept?.number || ""} ${concept?.title || "未知知识点"}</strong>
      <span>${mistake.reason || "未选择错因"} · 错 ${mistake.wrongCount} 次 · ${mistakeStatusLabel(mistake.status)}</span>
    </button>
  `;
}

function mistakeMiniHtml(mistake) {
  const concept = CONCEPT_BY_ID[mistake.conceptId];
  return `
    <button class="mistake-mini" data-section-link="mistakes" type="button">
      <strong>${concept?.title || "错题"}</strong>
      <span>${truncate(stripHtml(mistake.prompt), 34)}</span>
    </button>
  `;
}

function renderMistakeReview(mistake) {
  const question = mistake.question;
  const run = getMistakeRun(mistake.id);
  const selected = run.answer;
  const submitted = run.submitted;
  const correct = submitted && isCorrect(question, selected);
  return `
    <div class="lesson-head">
      <div>
        <p class="eyebrow">错题复习</p>
        <h2>${CONCEPT_BY_ID[mistake.conceptId]?.title || "知识点"}</h2>
        <p>${mistake.reason || "还没有标记错因"}</p>
      </div>
      <div class="mastery-badge">
        <strong>${mistake.wrongCount}</strong>
        <span>错误次数</span>
      </div>
    </div>
    <div class="question-card embedded">
      <p class="question-text">${question.prompt}</p>
      ${answerInputHtml(question, selected, submitted)}
      ${submitted ? `
        <div class="feedback ${correct ? "good" : "bad"}">
          <strong>${correct ? "复习正确" : "还没稳定"}</strong>
          <p>${correct ? "这道错题会进入下一轮复习。" : question.explanation}</p>
        </div>
      ` : ""}
      <div class="question-actions">
        ${!submitted ? `<button class="primary-button" data-submit-mistake="${mistake.id}" type="button">提交复习</button>` : ""}
        ${submitted ? `<button class="primary-button" data-next-mistake type="button">下一道错题</button>` : ""}
      </div>
    </div>
  `;
}

function renderMistakeEmpty(mastered) {
  return `
    <section class="completion-card">
      <p class="eyebrow">错题清空</p>
      <h3>暂时没有待复习错题</h3>
      <p>已掌握错题 ${mastered.length} 道。继续学习时，新的错题会自动进入这里。</p>
      <button class="primary-button" data-section-link="practice" type="button">去做练习</button>
    </section>
  `;
}

function renderProfile() {
  const chapter = CHAPTER_BY_ID["g8-c13-triangles"];
  const mastered = CONCEPTS.filter((concept) => getConceptProgress(concept.id).status === "mastered");
  const learning = CONCEPTS.filter((concept) => ["learning", "basic"].includes(getConceptProgress(concept.id).status));
  const review = getWeakConcepts();
  const totalMastery = Math.round(CONCEPTS.reduce((sum, concept) => sum + masteryOf(concept.id), 0) / CONCEPTS.length);
  const activeMistakes = getActiveMistakes();
  $("#screen").innerHTML = `
    <div class="profile-grid">
      <section class="profile-hero">
        <p class="eyebrow">我的数学</p>
        <h3>本周已学习 ${studyDays()} 天</h3>
        <div class="profile-current">
          <span>当前：第${chapter.number}章 ${chapter.title}</span>
          <strong>${totalMastery}%</strong>
        </div>
        <div class="progress-line large"><span style="width:${totalMastery}%"></span></div>
      </section>
      <section class="panel">
        <div class="panel-head"><h3>已掌握</h3><span class="status-pill">${mastered.length}</span></div>
        ${profileList(mastered, "还没有完全掌握的知识点。")}
      </section>
      <section class="panel">
        <div class="panel-head"><h3>学习中</h3><span class="status-pill">${learning.length}</span></div>
        ${profileList(learning, "当前没有学习中的知识点。")}
      </section>
      <section class="panel">
        <div class="panel-head"><h3>需要复习</h3><span class="status-pill">${review.length}</span></div>
        ${profileList(review, "现在没有明显需要复习的知识点。")}
      </section>
      <section class="panel">
        <div class="panel-head"><h3>学习记录</h3></div>
        <div class="metric-grid">
          <div><span>最近练习正确率</span><strong>${overallAccuracy()}%</strong></div>
          <div><span>待复习错题</span><strong>${activeMistakes.length}</strong></div>
          <div><span>已完成知识点</span><strong>${mastered.length}/${CONCEPTS.length}</strong></div>
        </div>
      </section>
      <section class="panel">
        <div class="panel-head">
          <div>
            <h3>设置</h3>
            <p>默认中文学习，可切换中英双语。</p>
          </div>
        </div>
        <div class="segmented">
          <button class="${appState.settings.language === "zh" ? "active" : ""}" data-language="zh" type="button">中文</button>
          <button class="${appState.settings.language === "bilingual" ? "active" : ""}" data-language="bilingual" type="button">中英双语</button>
        </div>
        <button class="ghost-button full" id="profileSyncButton" type="button">打开云同步</button>
      </section>
    </div>
  `;
  bindProfileActions();
  bindCommonActions();
}

function profileList(items, empty) {
  if (!items.length) return `<p class="empty-note">${empty}</p>`;
  return `
    <div class="profile-list">
      ${items.map((concept) => `
        <button data-open-concept="${concept.id}" data-stage="knowledge" type="button">
          <strong>${concept.number} ${concept.title}</strong>
          <span>${masteryOf(concept.id)}%</span>
        </button>
      `).join("")}
    </div>
  `;
}

function bindLearnActions() {
  $$("[data-track]").forEach((button) => {
    button.addEventListener("click", () => {
      const track = TRACKS.find((item) => item.id === button.dataset.track);
      appState.track = button.dataset.track;
      const chapter = CHAPTERS.find((item) => item.track === appState.track);
      if (chapter) {
        appState.chapterId = chapter.id;
        if (chapter.concepts[0]) appState.conceptId = chapter.concepts[0];
      }
      if (track && !track.active) showToast("能力提高和 AMC 8 会与课内学习分开整理");
      render();
    });
  });
  $$("[data-chapter]").forEach((button) => {
    button.addEventListener("click", () => {
      const chapter = CHAPTER_BY_ID[button.dataset.chapter];
      appState.chapterId = chapter.id;
      if (chapter.concepts[0]) {
        appState.conceptId = chapter.concepts[0];
        appState.stage = "knowledge";
      }
      render();
    });
  });
  $$("[data-concept]").forEach((button) => {
    button.addEventListener("click", () => openConcept(button.dataset.concept, "knowledge"));
  });
  $$("[data-stage-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.stage = button.dataset.stageTab;
      visitCurrentConcept();
      render();
    });
  });
  bindStageActions();
}

function bindStageActions() {
  $$("[data-complete-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      markStageComplete(appState.conceptId, button.dataset.completeStage);
      const next = nextStageAfter(button.dataset.completeStage);
      if (next) appState.stage = next;
      visitCurrentConcept();
      render();
    });
  });
  $$("[data-lab-range]").forEach((input) => {
    input.addEventListener("input", () => {
      const lab = getLabState();
      lab[input.dataset.labRange] = Number(input.value);
      render();
    });
  });
  const reveal = $("[data-reveal-step]");
  if (reveal) {
    reveal.addEventListener("click", () => {
      const run = getRun(appState.conceptId, "example");
      run.revealed = Math.min((run.revealed || 0) + 1, CONCEPT_BY_ID[appState.conceptId].example.steps.length);
      render();
    });
  }
  const reset = $("[data-reset-example]");
  if (reset) {
    reset.addEventListener("click", () => {
      getRun(appState.conceptId, "example").revealed = 0;
      render();
    });
  }
  bindQuestionActions();
}

function bindQuestionActions() {
  $$("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const run = getRun(appState.conceptId, appState.stage);
      const question = currentQuestion(appState.conceptId, appState.stage);
      run.answers[question.id] = Number(button.dataset.answer);
      render();
    });
  });
  const submit = $("[data-submit-answer]");
  if (submit) {
    submit.addEventListener("click", () => submitCurrentAnswer());
  }
  const hint = $("[data-show-hint]");
  if (hint) {
    hint.addEventListener("click", () => {
      const run = getRun(appState.conceptId, appState.stage);
      const question = currentQuestion(appState.conceptId, appState.stage);
      run.hints[question.id] = (run.hints[question.id] || 0) + 1;
      render();
    });
  }
  const reveal = $("[data-reveal-answer]");
  if (reveal) {
    reveal.addEventListener("click", () => {
      const run = getRun(appState.conceptId, appState.stage);
      const question = currentQuestion(appState.conceptId, appState.stage);
      run.revealed[question.id] = true;
      render();
    });
  }
  const next = $("[data-next-question]");
  if (next) {
    next.addEventListener("click", () => goNextQuestion());
  }
  $$("[data-error-reason]").forEach((button) => {
    button.addEventListener("click", () => {
      const question = currentQuestion(appState.conceptId, appState.stage);
      setMistakeReason(question.id, button.dataset.errorReason);
      showToast("错因已记录");
      render();
    });
  });
  $$("[data-go-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.stage = button.dataset.goStage;
      render();
    });
  });
  $$("[data-restart-stage], [data-review-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      const stage = button.dataset.restartStage || button.dataset.reviewStage;
      appState.stage = stage;
      resetRun(appState.conceptId, stage);
      render();
    });
  });
}

function bindCommonActions() {
  $$("[data-open-concept]").forEach((button) => {
    button.addEventListener("click", () => openConcept(button.dataset.openConcept, button.dataset.stage || "knowledge"));
  });
  $$("[data-section-link]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.section = button.dataset.sectionLink;
      render();
    });
  });
}

function bindMistakeActions() {
  $$("[data-select-mistake]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.selectMistake;
      const index = appState.mistakes.findIndex((item) => item.id === id);
      if (index > 0) {
        const [item] = appState.mistakes.splice(index, 1);
        appState.mistakes.unshift(item);
      }
      render();
    });
  });
  $$("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const mistake = getActiveMistakes()[0];
      const run = getMistakeRun(mistake.id);
      run.answer = Number(button.dataset.answer);
      render();
    });
  });
  $$("[data-submit-mistake]").forEach((button) => {
    button.addEventListener("click", () => submitMistakeReview(button.dataset.submitMistake));
  });
  const next = $("[data-next-mistake]");
  if (next) next.addEventListener("click", () => render());
}

function bindProfileActions() {
  $$("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.settings.language = button.dataset.language;
      render();
    });
  });
  const sync = $("#profileSyncButton");
  if (sync) sync.addEventListener("click", openSyncDialog);
}

function openConcept(conceptId, stage = "knowledge") {
  const concept = CONCEPT_BY_ID[conceptId];
  if (!concept) return;
  appState.section = "learn";
  appState.track = "course";
  appState.chapterId = concept.chapterId;
  appState.conceptId = concept.id;
  appState.stage = stage;
  visitCurrentConcept();
  render();
}

function visitCurrentConcept() {
  const progress = getConceptProgress(appState.conceptId);
  progress.lastVisitedAt = new Date().toISOString();
  if (progress.status === "not-started") progress.status = "learning";
  recomputeConceptProgress(appState.conceptId);
}

function submitCurrentAnswer() {
  const concept = CONCEPT_BY_ID[appState.conceptId];
  const question = currentQuestion(concept.id, appState.stage);
  const run = getRun(concept.id, appState.stage);
  const answer = run.answers[question.id];
  if (answer === undefined || answer === "") {
    showToast("先选择一个答案");
    return;
  }
  run.submitted[question.id] = true;
  run.attempts[question.id] = (run.attempts[question.id] || 0) + 1;
  const progress = getConceptProgress(concept.id);
  progress.attempts += 1;
  if (isCorrect(question, answer)) {
    progress.correct += 1;
    addUnique(run.correct, question.id);
  } else {
    recordMistake(question, answer, concept.id, appState.stage);
  }
  recomputeConceptProgress(concept.id);
  render();
}

function goNextQuestion() {
  const concept = CONCEPT_BY_ID[appState.conceptId];
  const questions = activeQuestions(concept[appState.stage]);
  const run = getRun(concept.id, appState.stage);
  const question = questions[run.index];
  addUnique(run.completed, question.id);
  if (run.completed.length >= questions.length) {
    markStageComplete(concept.id, appState.stage);
  } else {
    run.index = Math.min(run.index + 1, questions.length - 1);
  }
  render();
}

function submitMistakeReview(mistakeId) {
  const mistake = appState.mistakes.find((item) => item.id === mistakeId);
  if (!mistake) return;
  const run = getMistakeRun(mistake.id);
  if (run.answer === undefined) {
    showToast("先选择一个答案");
    return;
  }
  run.submitted = true;
  if (isCorrect(mistake.question, run.answer)) {
    mistake.reviewCount += 1;
    mistake.status = mistake.reviewCount >= 2 ? "mastered" : "reviewing";
  } else {
    mistake.wrongCount += 1;
    mistake.status = "learning";
    mistake.lastWrongAt = new Date().toISOString();
  }
  recomputeConceptProgress(mistake.conceptId);
  render();
}

function getRun(conceptId, stage) {
  const key = `${conceptId}:${stage}`;
  if (!appState.runs[key]) {
    appState.runs[key] = {
      index: 0,
      revealed: 0,
      answers: {},
      submitted: {},
      hints: {},
      correct: [],
      completed: [],
      attempts: {},
      revealedAnswer: {}
    };
  }
  return appState.runs[key];
}

function getMistakeRun(mistakeId) {
  const key = `mistake:${mistakeId}`;
  if (!appState.runs[key]) appState.runs[key] = { answer: undefined, submitted: false };
  return appState.runs[key];
}

function resetRun(conceptId, stage) {
  delete appState.runs[`${conceptId}:${stage}`];
}

function currentQuestion(conceptId, stage) {
  const concept = CONCEPT_BY_ID[conceptId];
  const questions = activeQuestions(concept[stage]);
  const run = getRun(conceptId, stage);
  return questions[run.index];
}

function activeQuestions(questions = []) {
  return questions.filter((question) => question.status !== "disabled");
}

function isCorrect(question, answer) {
  if (question.type === "choice") return Number(answer) === question.answer;
  return normalize(answer) === normalize(question.answer);
}

function correctCount(conceptId, stage, questions) {
  const run = getRun(conceptId, stage);
  return questions.reduce((sum, question) => sum + (run.correct.includes(question.id) ? 1 : 0), 0);
}

function recordMistake(question, answer, conceptId, stage) {
  const existing = appState.mistakes.find((item) => item.questionId === question.id && item.status !== "mastered");
  const readableAnswer = question.type === "choice" ? question.options[answer] : answer;
  const correctAnswer = question.type === "choice" ? question.options[question.answer] : question.answer;
  if (existing) {
    existing.userAnswer = readableAnswer;
    existing.wrongCount += 1;
    existing.status = existing.status === "new" ? "learning" : existing.status;
    existing.lastWrongAt = new Date().toISOString();
    return;
  }
  appState.mistakes.unshift({
    id: `${question.id}-${Date.now()}`,
    questionId: question.id,
    chapterId: CONCEPT_BY_ID[conceptId].chapterId,
    conceptId,
    sourceStage: stage,
    prompt: question.prompt,
    userAnswer: readableAnswer,
    correctAnswer,
    wrongCount: 1,
    lastWrongAt: new Date().toISOString(),
    reviewCount: 0,
    status: "new",
    reason: "",
    question
  });
}

function setMistakeReason(questionId, reason) {
  const mistake = appState.mistakes.find((item) => item.questionId === questionId && item.status !== "mastered");
  if (mistake) mistake.reason = reason;
}

function getConceptProgress(conceptId) {
  if (!appState.progress[conceptId]) {
    appState.progress[conceptId] = {
      stages: {},
      attempts: 0,
      correct: 0,
      mastery: 0,
      status: "not-started",
      lastVisitedAt: null
    };
  }
  if (!appState.progress[conceptId].stages) appState.progress[conceptId].stages = {};
  return appState.progress[conceptId];
}

function markStageComplete(conceptId, stage) {
  const progress = getConceptProgress(conceptId);
  progress.stages[stage] = true;
  progress.lastVisitedAt = new Date().toISOString();
  recomputeConceptProgress(conceptId);
}

function recomputeConceptProgress(conceptId) {
  const progress = getConceptProgress(conceptId);
  const completedStages = STAGES.filter((stage) => progress.stages[stage.id]).length;
  if (!progress.lastVisitedAt && completedStages === 0 && progress.attempts === 0) {
    progress.mastery = 0;
    progress.status = "not-started";
    return;
  }
  const practiceScore = ["practice", "misconception", "test"].reduce((sum, stage) => {
    const concept = CONCEPT_BY_ID[conceptId];
    const questions = activeQuestions(concept[stage]);
    if (!questions.length) return sum;
    return sum + correctCount(conceptId, stage, questions) / questions.length;
  }, 0);
  const stageScore = completedStages / STAGES.length * 45;
  const questionScore = practiceScore / 3 * 45;
  const activeMistakes = getActiveMistakes().filter((item) => item.conceptId === conceptId).length;
  const penalty = Math.min(18, activeMistakes * 6);
  progress.mastery = Math.max(0, Math.min(100, Math.round(stageScore + questionScore + 10 - penalty)));
  if (activeMistakes > 0 && progress.mastery < 85) progress.status = "review";
  else if (progress.mastery >= 90 && completedStages === STAGES.length) progress.status = "mastered";
  else if (progress.mastery >= 70) progress.status = "basic";
  else progress.status = "learning";
}

function masteryOf(conceptId) {
  recomputeConceptProgress(conceptId);
  return getConceptProgress(conceptId).mastery || 0;
}

function chapterProgress(chapterId) {
  const chapter = CHAPTER_BY_ID[chapterId];
  if (!chapter.concepts.length) return 0;
  return Math.round(chapter.concepts.reduce((sum, id) => sum + masteryOf(id), 0) / chapter.concepts.length);
}

function getActiveMistakes() {
  return appState.mistakes.filter((item) => item.status !== "mastered");
}

function getWeakConcepts() {
  return CONCEPTS
    .filter((concept) => {
      const progress = getConceptProgress(concept.id);
      return progress.status === "review" || (progress.lastVisitedAt && progress.mastery < 75);
    })
    .sort((a, b) => masteryOf(a.id) - masteryOf(b.id));
}

function getContinueTarget() {
  const chapter = CHAPTER_BY_ID["g8-c13-triangles"];
  for (const conceptId of chapter.concepts) {
    const progress = getConceptProgress(conceptId);
    const incomplete = STAGES.find((stage) => !progress.stages[stage.id]);
    if (incomplete) return { conceptId, stage: incomplete.id };
  }
  return { conceptId: chapter.concepts[0], stage: "knowledge" };
}

function todayTasks(concept) {
  const progress = getConceptProgress(concept.id);
  const items = [
    { label: "知识学习", stage: "knowledge", done: Boolean(progress.stages.knowledge) },
    { label: "例题 1 道", stage: "example", done: Boolean(progress.stages.example) },
    { label: `基础训练 ${activeQuestions(concept.practice).length} 题`, stage: "practice", done: Boolean(progress.stages.practice) },
    { label: `易错题 ${activeQuestions(concept.misconception).length} 题`, stage: "misconception", done: Boolean(progress.stages.misconception) },
    { label: `小测试 ${activeQuestions(concept.test).length} 题`, stage: "test", done: Boolean(progress.stages.test) }
  ];
  return {
    minutes: concept.minutes + 10,
    done: items.filter((item) => item.done).length,
    items
  };
}

function nextStageAfter(stage) {
  const index = STAGES.findIndex((item) => item.id === stage);
  return STAGES[index + 1]?.id || null;
}

function statusLabel(status) {
  return {
    "not-started": "未学习",
    learning: "学习中",
    basic: "基本掌握",
    mastered: "已掌握",
    review: "需要复习"
  }[status] || "学习中";
}

function stageLabel(stage) {
  return STAGES.find((item) => item.id === stage)?.label || stage;
}

function mistakeStatusLabel(status) {
  return {
    new: "新错题",
    learning: "再练中",
    reviewing: "复习中",
    mastered: "已掌握"
  }[status] || "错题";
}

function getLabState() {
  if (!appState.settings.sideLab) appState.settings.sideLab = { a: 5, b: 7, c: 10 };
  return appState.settings.sideLab;
}

function diagramFor(concept, mode) {
  const id = typeof concept === "string" ? concept : concept.diagram;
  if (id === "triangle-basic") return triangleBasicSvg(mode);
  if (id === "triangle-sides") return triangleSidesSvg(mode);
  if (id === "triangle-lines") return triangleLinesSvg(mode);
  if (id === "triangle-angle-sum") return triangleAngleSumSvg(mode);
  if (id === "triangle-exterior") return triangleExteriorSvg(mode);
  if (id === "polygon-sum") return polygonSumSvg(mode);
  return "";
}

function svgWrap(content, label = "数学图形") {
  return `<svg class="math-diagram" viewBox="0 0 520 360" role="img" aria-label="${label}">${content}</svg>`;
}

function triangleBasicSvg(mode) {
  const fill = mode === "area" ? "#dff0ed" : "#eef5f8";
  return svgWrap(`
    <polygon points="260,56 96,292 440,292" fill="${fill}" stroke="#263746" stroke-width="6" stroke-linejoin="round"></polygon>
    <circle cx="260" cy="56" r="10" fill="#1d7a73"></circle>
    <circle cx="96" cy="292" r="10" fill="#1d7a73"></circle>
    <circle cx="440" cy="292" r="10" fill="#1d7a73"></circle>
    <text x="260" y="36" text-anchor="middle" class="svg-label">A</text>
    <text x="72" y="324" class="svg-label">B</text>
    <text x="450" y="324" class="svg-label">C</text>
    <text x="250" y="320" text-anchor="middle" class="svg-note">三条边首尾相接，围成内部区域</text>
  `);
}

function triangleSidesSvg(mode) {
  const lab = getLabState();
  const longest = Math.max(lab.a, lab.b, lab.c);
  const rest = lab.a + lab.b + lab.c - longest;
  const ok = rest > longest;
  if (!ok) {
    return svgWrap(`
      <line x1="70" y1="110" x2="${70 + lab.a * 24}" y2="110" stroke="#3b6ea8" stroke-width="8" stroke-linecap="round"></line>
      <line x1="70" y1="180" x2="${70 + lab.b * 24}" y2="180" stroke="#d6802f" stroke-width="8" stroke-linecap="round"></line>
      <line x1="70" y1="250" x2="${70 + lab.c * 24}" y2="250" stroke="#d94f45" stroke-width="8" stroke-linecap="round"></line>
      <text x="70" y="88" class="svg-label">${lab.a}</text>
      <text x="70" y="158" class="svg-label">${lab.b}</text>
      <text x="70" y="228" class="svg-label">${lab.c}</text>
      <text x="70" y="326" class="svg-note">${rest === longest ? "相等时压成直线，不是三角形" : "另外两边够不到最长边，围不成"}</text>
    `);
  }
  const bc = lab.c;
  const ab = lab.a;
  const ac = lab.b;
  const scale = Math.min(30, 320 / Math.max(ab, ac, bc));
  const base = bc * scale;
  const bx = (520 - base) / 2;
  const by = 286;
  const cx = bx + base;
  const rawX = (ab * ab + bc * bc - ac * ac) / (2 * bc);
  const h = Math.sqrt(Math.max(0, ab * ab - rawX * rawX));
  const ax = bx + rawX * scale;
  const ay = by - h * scale;
  return svgWrap(`
    <polygon points="${ax},${ay} ${bx},${by} ${cx},${by}" fill="#eaf5f4" stroke="#263746" stroke-width="6" stroke-linejoin="round"></polygon>
    <line x1="${ax}" y1="${ay}" x2="${bx}" y2="${by}" stroke="#3b6ea8" stroke-width="8" stroke-linecap="round"></line>
    <line x1="${ax}" y1="${ay}" x2="${cx}" y2="${by}" stroke="#d6802f" stroke-width="8" stroke-linecap="round"></line>
    <line x1="${bx}" y1="${by}" x2="${cx}" y2="${by}" stroke="#1d7a73" stroke-width="8" stroke-linecap="round"></line>
    <text x="${ax}" y="${ay - 20}" text-anchor="middle" class="svg-label">A</text>
    <text x="${bx - 24}" y="${by + 30}" class="svg-label">B</text>
    <text x="${cx + 14}" y="${by + 30}" class="svg-label">C</text>
    <text x="72" y="58" class="svg-note">最长边 ${longest} < 另外两边和 ${rest}</text>
  `);
}

function triangleLinesSvg(mode) {
  const A = { x: 260, y: 58 };
  const B = { x: 90, y: 296 };
  const C = { x: 446, y: 296 };
  const D = mode === "midpoint" || mode === "median" ? { x: 268, y: 296 } : { x: 260, y: 296 };
  const mark = mode === "midpoint" || mode === "median"
    ? `<line x1="180" y1="308" x2="192" y2="324" stroke="#d6802f" stroke-width="4"></line><line x1="342" y1="324" x2="354" y2="308" stroke="#d6802f" stroke-width="4"></line>`
    : mode === "avoid"
      ? `<text x="78" y="52" class="svg-note">没有垂直或等角条件时，不要乱推出</text>`
      : `<path d="M260 270 h26 v26" fill="none" stroke="#d6802f" stroke-width="4"></path>`;
  return svgWrap(`
    <polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}" fill="#eef5f8" stroke="#263746" stroke-width="6" stroke-linejoin="round"></polygon>
    <line x1="${A.x}" y1="${A.y}" x2="${D.x}" y2="${D.y}" stroke="${mode === "avoid" ? "#d94f45" : "#1d7a73"}" stroke-width="7" stroke-linecap="round"></line>
    ${mark}
    <text x="260" y="36" text-anchor="middle" class="svg-label">A</text>
    <text x="66" y="328" class="svg-label">B</text>
    <text x="456" y="328" class="svg-label">C</text>
    <text x="${D.x + 14}" y="${D.y - 14}" class="svg-label">D</text>
  `);
}

function triangleAngleSumSvg(mode) {
  const proof = mode === "sum" || mode === "answer" || mode === "knowledge";
  return svgWrap(`
    ${proof ? `<line x1="64" y1="82" x2="456" y2="82" stroke="#d6802f" stroke-width="5" stroke-dasharray="9 9"></line>` : ""}
    <polygon points="260,82 92,292 440,292" fill="#eef5f8" stroke="#263746" stroke-width="6" stroke-linejoin="round"></polygon>
    <path d="M226 82 Q260 118 294 82" fill="none" stroke="#d94f45" stroke-width="5"></path>
    <path d="M120 260 Q142 286 176 292" fill="none" stroke="#3b6ea8" stroke-width="5"></path>
    <path d="M408 292 Q426 266 404 240" fill="none" stroke="#1d7a73" stroke-width="5"></path>
    <text x="260" y="58" text-anchor="middle" class="svg-label">A</text>
    <text x="66" y="326" class="svg-label">B</text>
    <text x="450" y="326" class="svg-label">C</text>
    <text x="84" y="42" class="svg-note">${proof ? "平行线把三个角拼成平角" : "∠A+∠B+∠C=180°"}</text>
  `);
}

function triangleExteriorSvg(mode) {
  return svgWrap(`
    <polygon points="92,292 238,72 392,292" fill="#eef5f8" stroke="#263746" stroke-width="6" stroke-linejoin="round"></polygon>
    <line x1="392" y1="292" x2="470" y2="292" stroke="#d94f45" stroke-width="7" stroke-linecap="round"></line>
    <path d="M350 254 Q408 220 456 270" fill="none" stroke="#d94f45" stroke-width="5"></path>
    <path d="M116 262 Q142 292 184 292" fill="none" stroke="#3b6ea8" stroke-width="5"></path>
    <path d="M222 104 Q238 132 256 104" fill="none" stroke="#1d7a73" stroke-width="5"></path>
    <text x="72" y="324" class="svg-label">A</text>
    <text x="238" y="50" text-anchor="middle" class="svg-label">B</text>
    <text x="400" y="324" class="svg-label">C</text>
    <text x="430" y="246" class="svg-note">外角</text>
    <text x="74" y="48" class="svg-note">外角 = 两个远内角之和</text>
  `);
}

function polygonSumSvg(mode) {
  const points = [
    [260, 48],
    [398, 116],
    [432, 252],
    [318, 320],
    [176, 300],
    [78, 180]
  ];
  return svgWrap(`
    <polygon points="${points.map((p) => p.join(",")).join(" ")}" fill="#eef5f8" stroke="#263746" stroke-width="6" stroke-linejoin="round"></polygon>
    <line x1="260" y1="48" x2="432" y2="252" stroke="#1d7a73" stroke-width="5"></line>
    <line x1="260" y1="48" x2="318" y2="320" stroke="#1d7a73" stroke-width="5"></line>
    <line x1="260" y1="48" x2="176" y2="300" stroke="#1d7a73" stroke-width="5"></line>
    <text x="74" y="50" class="svg-note">n 边形切成 n-2 个三角形</text>
    <text x="92" y="332" class="svg-note">内角和 = (n-2)×180°</text>
  `);
}

function addUnique(list, value) {
  if (!list.includes(value)) list.push(value);
}

function normalize(value) {
  return String(value || "").replace(/\s+/g, "").toLowerCase();
}

function stripHtml(value) {
  const div = document.createElement("div");
  div.innerHTML = value;
  return div.textContent || div.innerText || "";
}

function truncate(value, length) {
  return value.length > length ? `${value.slice(0, length)}...` : value;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function studyDays() {
  const started = appState.settings.startedOn || todayKey();
  const elapsed = Math.floor((Date.now() - new Date(started).getTime()) / 86400000) + 1;
  return Math.max(1, Math.min(elapsed, 7));
}

function overallAccuracy() {
  const totals = CONCEPTS.reduce((acc, concept) => {
    const p = getConceptProgress(concept.id);
    acc.correct += p.correct || 0;
    acc.attempts += p.attempts || 0;
    return acc;
  }, { correct: 0, attempts: 0 });
  if (!totals.attempts) return 0;
  return Math.round(totals.correct / totals.attempts * 100);
}

function supabaseEnabled() {
  return Boolean(appConfig.supabaseUrl && appConfig.supabaseAnonKey);
}

async function supabaseFetch(path, options = {}) {
  if (!supabaseEnabled()) throw new Error("还没有配置 Supabase。");
  const headers = {
    apikey: appConfig.supabaseAnonKey,
    "Content-Type": "application/json",
    ...(options.headers || {})
  };
  if (syncState.session?.access_token) headers.Authorization = `Bearer ${syncState.session.access_token}`;
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
  const rows = CONCEPTS.map((concept) => {
    const progress = getConceptProgress(concept.id);
    return {
      user_id: userId,
      lesson_id: concept.id,
      step_id: appState.conceptId === concept.id ? appState.stage : null,
      mastered: progress.status === "mastered",
      correct_count: progress.correct || 0,
      recap: statusLabel(progress.status),
      payload: {
        progress,
        runs: Object.fromEntries(Object.entries(appState.runs).filter(([key]) => key.startsWith(`${concept.id}:`)))
      }
    };
  });
  rows.push({
    user_id: userId,
    lesson_id: GLOBAL_ROW_ID,
    step_id: appState.section,
    mastered: false,
    correct_count: getActiveMistakes().length,
    recap: "global state",
    payload: {
      mistakes: appState.mistakes,
      settings: appState.settings,
      section: appState.section,
      chapterId: appState.chapterId,
      conceptId: appState.conceptId,
      stage: appState.stage
    }
  });
  return rows;
}

async function uploadProgress() {
  const rows = progressRowsForUpload();
  if (!rows.length) throw new Error("请先登录。");
  await supabaseFetch("/rest/v1/learning_progress?on_conflict=user_id,lesson_id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify(rows)
  });
}

async function downloadProgress() {
  if (!syncState.session?.access_token) throw new Error("请先登录。");
  const rows = await supabaseFetch("/rest/v1/learning_progress?select=lesson_id,step_id,payload,updated_at");
  rows.forEach((row) => {
    if (row.lesson_id === GLOBAL_ROW_ID) {
      if (Array.isArray(row.payload?.mistakes)) appState.mistakes = row.payload.mistakes;
      if (row.payload?.settings) appState.settings = { ...appState.settings, ...row.payload.settings };
      return;
    }
    if (CONCEPT_BY_ID[row.lesson_id] && row.payload?.progress) {
      appState.progress[row.lesson_id] = {
        ...getConceptProgress(row.lesson_id),
        ...row.payload.progress
      };
    }
    if (row.payload?.runs) {
      appState.runs = { ...appState.runs, ...row.payload.runs };
    }
  });
}

async function syncProgress() {
  await uploadProgress();
  await downloadProgress();
  saveState();
}

function syncCredentials() {
  return {
    email: $("#syncEmail").value.trim(),
    password: $("#syncPassword").value
  };
}

function setSyncStatus(message) {
  $("#syncStatus").textContent = message;
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
    setSyncStatus("还没有配置 Supabase。");
  } else if (syncState.session?.user?.email) {
    setSyncStatus(`已登录：${syncState.session.user.email}。可以同步当前学习进度。`);
  } else {
    setSyncStatus("登录后可以把学习进度同步到云端。");
  }
  const dialog = $("#syncDialog");
  if (dialog.showModal) dialog.showModal();
  else dialog.setAttribute("open", "open");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

$("#syncOpenButton").addEventListener("click", openSyncDialog);

$("#resetProgress").addEventListener("click", () => {
  if (!confirm("确定要重置本地学习进度吗？云端数据不会自动删除。")) return;
  localStorage.removeItem(STORAGE_KEY);
  appState = loadState();
  showToast("本地进度已重置");
  render();
});

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
      showToast("同步完成");
    } else {
      setSyncStatus("注册请求已提交。如果开启邮箱确认，请先去邮箱确认。");
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

$("#syncNowButton").addEventListener("click", () => {
  runSyncAction("同步", async () => {
    await syncProgress();
    setSyncStatus("同步完成。");
    showToast("同步完成");
  });
});

$("#signOutButton").addEventListener("click", () => {
  runSyncAction("退出", async () => {
    await signOut();
    setSyncStatus("已退出，当前设备仍保留本地进度。");
    showToast("已退出");
  });
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

render();
