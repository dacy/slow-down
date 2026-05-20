(function () {
  "use strict";

  // ---------- i18n ----------

  const I18N = {
    zh: {
      htmlLang: "zh-CN",
      brand: "慢",
      tagline: "不是少做一点事，是少被不重要的东西驱动。",

      sitTitle: "坐一会",      sitSub: "什么都不做。",
      observeTitle: "观察一下", observeSub: "问自己一个问题。",
      undoTitle: "不做",       undoSub: "今天你选择不做的事。",
      readTitle: "念几句",     readSub: "慢慢读，不必读完。",

      footA: "这里没有数据、没有打卡、没有提醒。",
      footB: "用完关掉就好。",

      leaveLabel: "返回",

      sitHint: "跟着圆呼吸。",
      sitNudges: [
        { atMs: 90 * 1000,  text: "在这里就好。不必赶着回到什么地方。" },
        { atMs: 240 * 1000, text: "如果心里冒出「该做点别的」的念头，看看它，然后让它走。" },
        { atMs: 480 * 1000, text: "够了。可以关掉这个页面了。" },
        { atMs: 720 * 1000, text: "真的够了。这里没有更多东西在等你。" }
      ],

      observeMeta: "今天的问题",
      observeNote: "下面写什么都行。也可以什么都不写。这里的字不会被保存。这是一段不必留下痕迹的时间。",
      scratchPlaceholder: "…",
      observeAnother: "换一个问题",
      observeClose: "关掉",

      undoMeta: "今天我选择不做",
      undoEmpty: "（空着也很好）",
      undoPlaceholder: "比如：不必把今天的散步变成一篇文章。",
      undoNote: "明天起床时，这个清单会清空。它不为你积累什么。",
      undoRemove: "移除",

      readNext: "下一段",
      readEnough: "够了",

      prompts: [
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
      ],

      passages: [
        { tag: "起点", text: "如果让我做一个 role model，我可能更想成为一个不 productive 的 role model。" },
        { tag: "起点", text: "我可以做事，可以赚钱，可以有专攻，可以用工具，但我不想让「我很 productive」变成我的牢笼。" },
        { tag: "时间", text: "你开始无法单纯地度过一个小时。这个小时有没有产出？有没有推进项目？有没有产生内容？如果没有，它就会显得可疑。" },
        { tag: "时间", text: "在这种逻辑里，今天总是为明天服务。当下总是作为未来收益的燃料存在。" },
        { tag: "不器", text: "君子不器。一个人不能最终被某一种功能吃掉。" },
        { tag: "不器", text: "专攻是必要的，但专攻之后，人要重新获得不被专攻定义的能力。" },
        { tag: "无相", text: "凡所有相，皆是虚妄。它最开始让你被看见，后来让你持续表演一个固定答案。" },
        { tag: "够了", text: "钱在不够的时候非常重要。但过了某个阈值之后，钱的性质会发生变化——继续赚钱可以成为一种逃避。" },
        { tag: "工具", text: "如果 AI 最后的结果只是让每个人做更多工作、更快产出，那么 AI 只是把旧世界加速了。它把原来的焦虑换了一层更先进的皮。" },
        { tag: "工具", text: "我更关心的是：AI 能不能帮我少做一些本来就不值得做的事。" },
        { tag: "降伏", text: "降服其心更像是看见自己的自动反应：我为什么这么急？我为什么不能待在一个没有产出的时间里？" },
        { tag: "降伏", text: "我能不能允许一段时间没有被利用？我能不能允许一些体验不被提炼成观点？" },
        { tag: "尾声", text: "少工作的高级形态，不是少做事，而是少被不重要的东西驱动。" },
        { tag: "尾声", text: "工作服务于生活，工具服务于人，成功服务于自由。顺序不能反过来。" }
      ]
    },

    en: {
      htmlLang: "en",
      brand: "slow",
      tagline: "Not about doing less. About being driven less by what doesn't matter.",

      sitTitle: "Sit awhile",   sitSub: "Do nothing.",
      observeTitle: "Notice",   observeSub: "Ask yourself something.",
      undoTitle: "Not-doing",   undoSub: "What you're choosing not to do today.",
      readTitle: "Read a line", readSub: "Slowly. You don't have to finish.",

      footA: "No data, no streaks, no notifications.",
      footB: "Close it when you're done.",

      leaveLabel: "leave",

      sitHint: "Breathe with the circle.",
      sitNudges: [
        { atMs: 90 * 1000,  text: "It's enough to just be here. You don't need to get anywhere." },
        { atMs: 240 * 1000, text: "If a thought like 'I should be doing something else' shows up — see it, then let it pass." },
        { atMs: 480 * 1000, text: "That's enough. You can close this tab now." },
        { atMs: 720 * 1000, text: "Really, enough. Nothing more is waiting here for you." }
      ],

      observeMeta: "Today's question",
      observeNote: "Write whatever, or nothing at all. Nothing here is saved. This is a stretch of time that doesn't need to leave a trace.",
      scratchPlaceholder: "…",
      observeAnother: "another question",
      observeClose: "close",

      undoMeta: "Today I am choosing not to",
      undoEmpty: "(empty is fine too)",
      undoPlaceholder: "e.g. don't turn today's walk into an essay.",
      undoNote: "This list will be empty tomorrow. It doesn't accumulate for you.",
      undoRemove: "remove",

      readNext: "next",
      readEnough: "enough",

      prompts: [
        "Was there any stretch of today you allowed yourself to produce nothing?",
        "What did you do today that wasn't for a future payoff?",
        "What is your body saying right now? Are you listening?",
        "Why are you in such a hurry? Where is the hurry coming from?",
        "If you didn't try to prove yourself today, what would happen?",
        "When was the last time you did nothing at all? How did it feel?",
        "Did you do something today you don't intend to tell anyone about?",
        "Which of your personas had you say something not quite true today?",
        "If 'enough' were really true, where would you start stopping?",
        "Is there something you did that doesn't need to become a take, a post, or a lesson?",
        "Who handed you the ruler you use to judge your time?",
        "How much of 'now' did you sacrifice today for 'later'?",
        "If no one were watching, what would you most want to do right now?",
        "When was the last time you let yourself waste time? How did it feel?",
        "Is there something on your schedule only because you could do it?",
        "Can you do something good for yourself with no applause and no progress bar?",
        "When are you most afraid of the empty space? What are you hiding from inside it?",
        "Was there a moment today when you were just there, not on your way somewhere?"
      ],

      passages: [
        { tag: "to begin",    text: "If I were to be a role model, I'd rather be a not-productive role model." },
        { tag: "to begin",    text: "I can work, earn, specialize, use tools — but I don't want 'I'm so productive' to become my cage." },
        { tag: "on time",     text: "You stop being able to simply spend an hour. Did the hour produce anything? Push a project forward? Generate content? If not, it starts to feel suspect." },
        { tag: "on time",     text: "In this logic, today is always in service of tomorrow. The present exists only as fuel for future returns." },
        { tag: "not a tool",  text: "Junzi bu qi — the noble person is not a tool. A person should not, in the end, be devoured by a single function." },
        { tag: "not a tool",  text: "Specialization is necessary. But after it, one must regain the capacity not to be defined by it." },
        { tag: "no fixed form", text: "All forms are illusion. A persona first lets you be seen — then asks you to keep performing a fixed answer." },
        { tag: "enough",      text: "Money matters a great deal when you don't have enough. But past a threshold its nature shifts — making more becomes a way of hiding." },
        { tag: "tools",       text: "If AI just makes everyone work more and produce faster, it has only sped up the old world. It puts a more advanced skin on the same old anxiety." },
        { tag: "tools",       text: "What I care about more: can AI help me do less of what wasn't worth doing in the first place?" },
        { tag: "subdue",      text: "Subduing the restless heart is more like seeing your own reflexes: why am I in such a hurry? Why can't I sit inside a stretch of time that produces nothing?" },
        { tag: "subdue",      text: "Can I allow a stretch of time to go un-used? Can I allow an experience to not be refined into a take?" },
        { tag: "to end",      text: "The mature form of 'working less' isn't doing less. It's being driven less by what doesn't matter." },
        { tag: "to end",      text: "Work serves life. Tools serve people. Success serves freedom. The order cannot be reversed." }
      ]
    }
  };

  const LANG_KEY = "slow-down:lang";
  let lang = pickInitialLang();
  let t = I18N[lang];

  function pickInitialLang() {
    try {
      const stored = localStorage.getItem(LANG_KEY);
      if (stored && I18N[stored]) return stored;
    } catch (e) { /* ignore */ }
    const nav = (navigator.language || navigator.userLanguage || "").toLowerCase();
    return nav.startsWith("zh") ? "zh" : "en";
  }

  function setLang(next) {
    if (!I18N[next] || next === lang) return;
    lang = next;
    t = I18N[lang];
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
    applyLang();
    // Reset content tied to language
    promptShownKey = null;
    readIdx = -1;
    const ta = document.getElementById("scratch");
    if (ta) ta.value = "";
    // Re-run current view to refresh dynamic strings
    onEnter(currentView);
  }

  function applyLang() {
    document.documentElement.lang = t.htmlLang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.dataset.i18n;
      if (t[k] != null) el.textContent = t[k];
    });

    // Inputs / textareas
    const scratch = document.getElementById("scratch");
    if (scratch) scratch.placeholder = t.scratchPlaceholder;
    const undoInput = document.getElementById("undo-input");
    if (undoInput) undoInput.placeholder = t.undoPlaceholder;
    const undoNote = document.getElementById("undo-note");
    if (undoNote) undoNote.textContent = t.undoNote;
    const observeNote = document.getElementById("observe-note");
    if (observeNote) observeNote.innerHTML = escapeHtmlWithBreak(t.observeNote);

    // Leave buttons
    document.querySelectorAll(".leave").forEach(el => el.setAttribute("aria-label", t.leaveLabel));

    // Lang toggle current state
    document.querySelectorAll(".lang-toggle button").forEach(b => {
      if (b.dataset.lang === lang) b.setAttribute("aria-current", "true");
      else b.removeAttribute("aria-current");
    });
  }

  function escapeHtmlWithBreak(s) {
    // We only need to render text with possible line breaks; keep it strict.
    const div = document.createElement("div");
    div.textContent = s;
    return div.innerHTML;
  }

  // ---------- Utilities ----------

  function todayKey() {
    const d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }

  function hashOfDay() {
    const d = new Date();
    return d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate();
  }

  function pickPromptForToday() {
    const list = t.prompts;
    return list[hashOfDay() % list.length];
  }

  function pickRandom(arr, exclude) {
    if (arr.length <= 1) return arr[0];
    let i;
    do { i = Math.floor(Math.random() * arr.length); }
    while (arr[i] === exclude);
    return arr[i];
  }

  // ---------- Routing ----------

  const views = document.querySelectorAll(".view");
  let currentView = "home";

  function show(name) {
    currentView = name;
    views.forEach(v => { v.hidden = v.dataset.view !== name; });
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
    const langBtn = e.target.closest("[data-lang]");
    if (langBtn) {
      e.preventDefault();
      setLang(langBtn.dataset.lang);
      return;
    }
    const goBtn = e.target.closest("[data-go]");
    if (goBtn) {
      e.preventDefault();
      show(goBtn.dataset.go);
    }
  });

  // ---------- Sit ----------

  let sitTimers = [];
  function startSit() {
    stopSit();
    const nudge = document.getElementById("sit-nudge");
    nudge.classList.remove("show");
    nudge.textContent = "";
    t.sitNudges.forEach(n => {
      const timer = setTimeout(() => {
        nudge.textContent = n.text;
        nudge.classList.add("show");
      }, n.atMs);
      sitTimers.push(timer);
    });
  }
  function stopSit() {
    sitTimers.forEach(clearTimeout);
    sitTimers = [];
    const nudge = document.getElementById("sit-nudge");
    if (nudge) nudge.classList.remove("show");
  }

  // ---------- Observe ----------

  let promptShownKey = null;
  function loadPrompt(forceRandom) {
    const el = document.getElementById("prompt-text");
    const newPrompt = forceRandom
      ? pickRandom(t.prompts, el.textContent)
      : pickPromptForToday();
    el.style.opacity = "0";
    setTimeout(() => {
      el.textContent = newPrompt;
      el.style.opacity = "1";
    }, 600);
    promptShownKey = todayKey() + ":" + lang;
  }
  function setupObserve() {
    document.getElementById("another-prompt").onclick = () => loadPrompt(true);
    // Reset scratch on entry — content is never saved.
    document.getElementById("scratch").value = "";
  }

  // ---------- Not-doing ----------

  const UNDO_KEY = "slow-down:undo";
  function readUndo() {
    try {
      const raw = localStorage.getItem(UNDO_KEY);
      if (!raw) return { day: todayKey(), items: [] };
      const parsed = JSON.parse(raw);
      if (parsed.day !== todayKey()) return { day: todayKey(), items: [] };
      return parsed;
    } catch (e) {
      return { day: todayKey(), items: [] };
    }
  }
  function writeUndo(state) {
    try { localStorage.setItem(UNDO_KEY, JSON.stringify(state)); }
    catch (e) { /* ignore */ }
  }
  function renderUndo() {
    const state = readUndo();
    const ul = document.getElementById("undo-list");
    ul.innerHTML = "";
    ul.setAttribute("data-empty", t.undoEmpty);
    if (state.items.length === 0) {
      ul.classList.add("is-empty");
    } else {
      ul.classList.remove("is-empty");
    }
    state.items.forEach((text, idx) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.className = "text";
      span.textContent = text;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = t.undoRemove;
      btn.setAttribute("aria-label", t.undoRemove + ": " + text);
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
    input.placeholder = t.undoPlaceholder;
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

  // ---------- Read ----------

  let readIdx = -1;
  function nextPassage() {
    const el = document.getElementById("passage");
    const meta = document.getElementById("read-meta");
    const list = t.passages;
    let nextIdx;
    do { nextIdx = Math.floor(Math.random() * list.length); }
    while (nextIdx === readIdx && list.length > 1);
    readIdx = nextIdx;

    el.classList.add("fading");
    setTimeout(() => {
      const p = list[readIdx];
      el.textContent = p.text;
      meta.textContent = "— " + p.tag;
      el.classList.remove("fading");
    }, 500);
  }
  function setupRead() {
    document.getElementById("read-next").onclick = nextPassage;
    if (readIdx === -1) nextPassage();
  }

  // ---------- View lifecycle ----------

  function onEnter(name) {
    if (name !== "sit") stopSit();
    if (name === "sit") startSit();
    if (name === "observe") {
      setupObserve();
      loadPrompt(false);
    }
    if (name === "undo") setupUndo();
    if (name === "read") {
      // Force a fresh passage when language changes; otherwise just keep showing.
      setupRead();
    }
  }

  // ---------- Boot ----------
  applyLang();
  show(initialView());
})();
