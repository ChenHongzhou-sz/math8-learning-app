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
  const token = syncState.session?.access_token || appConfig.supabaseAnonKey;
  const response = await fetch(`${appConfig.supabaseUrl}${path}`, {
    ...options,
    headers: {
      apikey: appConfig.supabaseAnonKey,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
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
      <div id="interactiveMount"></div>
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
  const quiz = quizState(lesson);
  const item = lesson.practices[quiz.index];
  const checked = quiz.checked[quiz.index];
  const selected = quiz.selected[quiz.index];

  $("#studyContent").innerHTML = `
    <article class="quiz-card">
      <div class="module-head">
        <div>
          <h3>第 ${quiz.index + 1} 题 / ${lesson.practices.length}</h3>
          <p>${item.prompt}</p>
        </div>
        <span class="result-pill">即时反馈</span>
      </div>
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
    quiz.index = (quiz.index - 1 + lesson.practices.length) % lesson.practices.length;
    render();
  });

  $("#nextQuestion").addEventListener("click", () => {
    quiz.index = (quiz.index + 1) % lesson.practices.length;
    render();
  });

  bindNavigator();
}

function renderMaster(lesson) {
  const correct = countCorrect(lesson);
  $("#studyContent").innerHTML = `
    <article class="module">
      <div class="module-head">
        <div>
          <h3>通关前，自己讲一遍</h3>
          <p>会做题还不够。能说出“为什么”，才是真的掌握。</p>
        </div>
        <span class="result-pill">${correct}/${lesson.practices.length} 题正确</span>
      </div>
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
  return lesson.practices.reduce((sum, item, index) => {
    return sum + (quiz.checked[index] && quiz.selected[index] === item.answer ? 1 : 0);
  }, 0);
}

function renderCoach() {
  const lesson = currentLesson();
  $("#coachPanel").classList.toggle("open", appState.coachOpen);
  $("#coachContent").innerHTML = `
    <div class="coach-content">
      <section class="coach-card">
        <h3>本课目标</h3>
        <p>${lesson.objective}</p>
      </section>
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
