(function () {
  "use strict";

  // ---------- 内容池 ----------

  // 从文章里提炼出来、可以单独成立的反思问题。
  // 每天按本地日期取一个，所以同一天打开看到的是同一题。
  const PROMPTS = [
    "今天有哪段时间，你允许自己什么都没产出？",
    "你今天做的哪件事，不是为了未来的回报？",
    "此刻你的身体在说什么？你听见了吗？",
    "你为什么这么急？这股急，是从哪里来的？",
    "如果你今天不证明自己，会发生什么？",
    "你最近一次什么都不做，是什么时候？那时候你是什么感觉？",
    "你今天有没有做一件，做完之后不打算讲给任何人听的事？",
    "你身上的哪个「人设」，今天又让你说了一句不太真实的话？",
    "如果「够了」是真的，你愿意从哪里开始停下来？",
    "有什么事，你做了，但并不需要把它转化成观点、内容、或经验？",
    "你心里那把审判时间的尺子，是谁递给你的？",
    "今天为了「以后」，你牺牲了多少「现在」？",
    "如果没有人在看，你现在最想做什么？",
    "你最近一次允许自己浪费时间，是什么时候？感觉如何？",
    "有没有一件事，你只是因为「可以做」就把它塞进了行程？",
    "你能不能在没有掌声、没有进度条的情况下，做完一件对你自己有益的事？",
    "什么时候你最害怕「空白」？空白里你在躲什么？",
    "今天有没有一刻，你只是单纯地在那里，而不是在抵达哪里？"
  ];

  // 文章里几段值得慢慢读的话，每段都能独立成立。
  const PASSAGES = [
    {
      text: "如果让我做一个 role model，我可能更想成为一个不 productive 的 role model。",
      tag: "起点"
    },
    {
      text: "我可以做事，可以赚钱，可以有专攻，可以用工具，但我不想让「我很 productive」变成我的牢笼。",
      tag: "起点"
    },
    {
      text: "你开始无法单纯地度过一个小时。这个小时有没有产出？有没有推进项目？有没有产生内容？如果没有，它就会显得可疑。",
      tag: "时间"
    },
    {
      text: "在这种逻辑里，今天总是为明天服务。当下总是作为未来收益的燃料存在。",
      tag: "时间"
    },
    {
      text: "君子不器。一个人不能最终被某一种功能吃掉。",
      tag: "不器"
    },
    {
      text: "专攻是必要的，但专攻之后，人要重新获得不被专攻定义的能力。",
      tag: "不器"
    },
    {
      text: "凡所有相，皆是虚妄。它最开始让你被看见，后来让你持续表演一个固定答案。",
      tag: "无相"
    },
    {
      text: "钱在不够的时候非常重要。但过了某个阈值之后，钱的性质会发生变化——继续赚钱可以成为一种逃避。",
      tag: "够了"
    },
    {
      text: "如果 AI 最后的结果只是让每个人做更多工作、更快产出，那么 AI 只是把旧世界加速了。它把原来的焦虑换了一层更先进的皮。",
      tag: "工具"
    },
    {
      text: "我更关心的是：AI 能不能帮我少做一些本来就不值得做的事。",
      tag: "工具"
    },
    {
      text: "降服其心更像是看见自己的自动反应：我为什么这么急？我为什么不能待在一个没有产出的时间里？",
      tag: "降伏"
    },
    {
      text: "我能不能允许一段时间没有被利用？我能不能允许一些体验不被提炼成观点？",
      tag: "降伏"
    },
    {
      text: "少工作的高级形态，不是少做事，而是少被不重要的东西驱动。",
      tag: "尾声"
    },
    {
      text: "工作服务于生活，工具服务于人，成功服务于自由。顺序不能反过来。",
      tag: "尾声"
    }
  ];

  // 「坐一会」里温柔的几句话，会按时间慢慢出现。
  const SIT_NUDGES = [
    { atMs: 90 * 1000,  text: "在这里就好。不必赶着回到什么地方。" },
    { atMs: 240 * 1000, text: "如果心里冒出「该做点别的」的念头，看看它，然后让它走。" },
    { atMs: 480 * 1000, text: "够了。可以关掉这个页面了。" },
    { atMs: 720 * 1000, text: "真的够了。这里没有更多东西在等你。" }
  ];

  // ---------- 简易工具 ----------

  function todayKey() {
    const d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }

  function hashOfDay() {
    // 简单地用 day 数字做 hash，让每天稳定取到同一个 prompt
    const d = new Date();
    return d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate();
  }

  function pickPromptForToday() {
    return PROMPTS[hashOfDay() % PROMPTS.length];
  }

  function pickRandom(arr, exclude) {
    if (arr.length <= 1) return arr[0];
    let i;
    do { i = Math.floor(Math.random() * arr.length); }
    while (arr[i] === exclude);
    return arr[i];
  }

  // ---------- 路由 ----------

  const views = document.querySelectorAll(".view");
  function show(name) {
    views.forEach(v => {
      const match = v.dataset.view === name;
      v.hidden = !match;
    });
    // 同步 hash，方便刷新回到同一页面（但不暴露成"功能"）
    if (name === "home") {
      history.replaceState(null, "", location.pathname);
    } else {
      history.replaceState(null, "", "#" + name);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    onEnter(name);
  }

  function initialView() {
    const h = (location.hash || "").replace("#", "");
    const valid = ["sit", "observe", "undo", "read"];
    return valid.includes(h) ? h : "home";
  }

  document.addEventListener("click", function (e) {
    const t = e.target.closest("[data-go]");
    if (t) {
      e.preventDefault();
      show(t.dataset.go);
    }
  });

  // ---------- 各页 ----------

  // 坐一会：定时提示
  let sitTimers = [];
  function startSit() {
    stopSit();
    const nudge = document.getElementById("sit-nudge");
    nudge.classList.remove("show");
    nudge.textContent = "";
    SIT_NUDGES.forEach(n => {
      const t = setTimeout(() => {
        nudge.textContent = n.text;
        nudge.classList.add("show");
      }, n.atMs);
      sitTimers.push(t);
    });
  }
  function stopSit() {
    sitTimers.forEach(clearTimeout);
    sitTimers = [];
    const nudge = document.getElementById("sit-nudge");
    if (nudge) nudge.classList.remove("show");
  }

  // 观察一下
  function loadPrompt(forceRandom) {
    const el = document.getElementById("prompt-text");
    const newPrompt = forceRandom
      ? pickRandom(PROMPTS, el.textContent)
      : pickPromptForToday();
    el.style.transition = "opacity 600ms ease";
    el.style.opacity = "0";
    setTimeout(() => {
      el.textContent = newPrompt;
      el.style.opacity = "1";
    }, 600);
  }
  function setupObserve() {
    document.getElementById("another-prompt").onclick = () => loadPrompt(true);
    // 离开时清空 scratch
    const ta = document.getElementById("scratch");
    ta.value = "";
  }

  // 不做
  const UNDO_KEY = "slow-down:undo";
  function readUndo() {
    try {
      const raw = localStorage.getItem(UNDO_KEY);
      if (!raw) return { day: todayKey(), items: [] };
      const parsed = JSON.parse(raw);
      if (parsed.day !== todayKey()) {
        // 第二天自动清空
        return { day: todayKey(), items: [] };
      }
      return parsed;
    } catch (e) {
      return { day: todayKey(), items: [] };
    }
  }
  function writeUndo(state) {
    try {
      localStorage.setItem(UNDO_KEY, JSON.stringify(state));
    } catch (e) { /* ignore */ }
  }
  function renderUndo() {
    const state = readUndo();
    const ul = document.getElementById("undo-list");
    ul.innerHTML = "";
    state.items.forEach((text, idx) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.className = "text";
      span.textContent = text;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = "移除";
      btn.setAttribute("aria-label", "移除：" + text);
      btn.onclick = () => {
        const s = readUndo();
        s.items.splice(idx, 1);
        writeUndo(s);
        renderUndo();
      };
      li.appendChild(span);
      li.appendChild(btn);
      ul.appendChild(li);
    });
  }
  function setupUndo() {
    const form = document.getElementById("undo-form");
    const input = document.getElementById("undo-input");
    form.onsubmit = (e) => {
      e.preventDefault();
      const v = input.value.trim();
      if (!v) return;
      const s = readUndo();
      s.day = todayKey();
      s.items.push(v);
      writeUndo(s);
      input.value = "";
      renderUndo();
    };
    renderUndo();
  }

  // 念几句
  let readIdx = -1;
  function nextPassage() {
    const el = document.getElementById("passage");
    const meta = document.getElementById("read-meta");
    let nextIdx;
    do { nextIdx = Math.floor(Math.random() * PASSAGES.length); }
    while (nextIdx === readIdx && PASSAGES.length > 1);
    readIdx = nextIdx;

    el.classList.add("fading");
    setTimeout(() => {
      const p = PASSAGES[readIdx];
      el.textContent = p.text;
      meta.textContent = "— " + p.tag;
      el.classList.remove("fading");
    }, 500);
  }
  function setupRead() {
    document.getElementById("read-next").onclick = nextPassage;
    if (readIdx === -1) nextPassage();
  }

  // 每次进入一个 view 时调用
  function onEnter(name) {
    if (name !== "sit") stopSit();
    if (name === "sit") startSit();
    if (name === "observe") {
      loadPrompt(false);
      setupObserve();
    }
    if (name === "undo") setupUndo();
    if (name === "read") setupRead();
  }

  // ---------- 启动 ----------
  show(initialView());

  // 防止用户点击 [data-go] 时被默认行为打扰
  document.querySelectorAll("button[data-go]").forEach(b => {
    b.setAttribute("type", "button");
  });
})();
