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
      enoughTitle: "够了",     enoughSub: "今天的一张许可证。",

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

      enoughMeta: "今日许可",
      enoughAnother: "换一张",
      enoughClose: "收下了",
      enoughNote: "这张许可证不会被保存，也无需被保存。读一遍，记不记得，都没关系。",

      prompts: [
        "今天你给了多少时间，是没有目的的？",
        "你为什么这么急？这股急是从哪里来的？",
        "如果你今天不证明自己，会发生什么？",
        "你身上的哪个「身份」，今天又让你说了一句不太真实的话？",
        "今天为了「以后」，你牺牲了多少「现在」？",
        "什么时候你最害怕「空白」？空白里你在躲什么？",
        "你心里那把审判时间的尺子，是谁递给你的？",
        "如果「够了」是真的，你愿意从哪里开始停下来？",
        "有什么事，你做了，但不打算把它转化成观点、内容、或经验？",
        "你能不能在没有掌声、没有进度条的情况下，做完一件对你自己有益的事？",
        "此刻你的身体在说什么？你听见了吗？",
        "你身体里哪个部位最累？它累了多久了？",
        "你最近一次真的尝过食物的味道，是什么时候？",
        "今天你听过自己呼吸吗？此刻，再听一次。",
        "如果今晚就是你最后一晚，今天的优先级会怎么变？",
        "如果生命只剩下一千天，你今天会安排得不一样吗？",
        "二十年后，你今天放在心上的哪些事，还重要？",
        "你最近一次什么都不做，是什么时候？感觉如何？",
        "你的「忙」，有多少是真的有事，又有多少是用来回避什么？",
        "如果你现在停下来一周，世界会真的塌吗？",
        "你最舍不得「浪费」的，是时间，还是别的什么？",
        "你以为你在追的，是不是其实在追你？",
        "在谁面前，你觉得不必表演？",
        "你最近一次为别人做的、不能被算成「投资」的事，是什么？",
        "你身边那些让你觉得「活着真好」的人，他们身上有什么共同点？",
        "你「想做」的事和「应该做」的事，差了多远？",
        "如果没有人在看，你现在最想做什么？",
        "今天有没有一刻，你只是单纯地在那里，而不是在赶往哪里？",
        "你最近一次坐下来什么都不看——连手机也不看——是多久之前？",
        "如果不是「为以后」的话，你今天会怎么过？"
      ],

      passages: [
        { tag: "庄子", text: "无用之木，因不成材，得以活到它本该有的年岁。要小心：在某些时刻，「有用」恰恰是一种危险。" },
        { tag: "庄子", text: "至人之用心若镜——来了不迎，去了不送。它照见一切，却不留下任何痕迹。" },
        { tag: "老子", text: "知足者富，知止者安。再多走一步，可能就出了「够」的那条线。" },
        { tag: "老子", text: "为学日益，为道日损。学问是加法，而活出自己，要靠减法。" },
        { tag: "孔子", text: "饭疏食，饮水，曲肱而枕之，乐亦在其中矣。两千五百年前的安心，今天依然成立。" },
        { tag: "孔子", text: "逝者如斯夫，不舍昼夜。河水从来不焦虑，自己流得够不够远。" },
        { tag: "陶渊明", text: "归去来兮，田园将芜胡不归。既自以心为形役，奚惆怅而独悲？——你的心，是不是又在替你的身份打工？" },
        { tag: "苏轼", text: "莫听穿林打叶声，何妨吟啸且徐行。一场不大不小的雨里，他一边走一边唱。" },
        { tag: "苏轼", text: "长恨此身非我有，何时忘却营营。千年以前的他，已经在问这个问题。" },
        { tag: "王维", text: "行到水穷处，坐看云起时。走到尽头，未必是事——可能只是一段坐下来的时间。" },
        { tag: "心经", text: "心无挂碍，无挂碍故，无有恐怖。许多怕，其实是「挂着」太多东西。" },
        { tag: "王阳明", text: "破山中贼易，破心中贼难。你最难对付的那个人，恰好住在你这里。" },
        { tag: "帕斯卡", text: "人类所有的不幸，几乎都源于一件事：无法安静地一个人待在一间屋子里。——而他写这句话的时候，世界上还没有手机。" },
        { tag: "塞涅卡", text: "我们的生命并不短，是我们浪费了太多。生命足够长——如果你知道怎么用它。" },
        { tag: "马可·奥勒留", text: "把自己限制在此刻这件正在做的事里。未来还没属于你，过去已经不归你管——它们暂时不该被你扛着。" },
        { tag: "梭罗", text: "我之所以走入森林，是因为我希望从容地活着，只面对生命里真正本质的事。" },
        { tag: "里尔克", text: "请对你心里那些悬而未决的事保持耐心。试着去爱这些问题本身，就像爱一间上了锁的房间。" },
        { tag: "玛丽·奥利弗", text: "告诉我，你打算用你这一次的，狂野的，珍贵的生命，做些什么？" },
        { tag: "迪拉德", text: "我们如何度过每一天，当然，就是我们如何度过这一生。" },
        { tag: "默顿", text: "过度劳作，是这个时代一种常见到我们已经认不出来的暴力。激进的忙碌，本身就抵消了你想要为之奋斗的那种安宁。" },
        { tag: "黑塞", text: "悉达多被问：你会什么？他答：我能等待，我能思考，我能斋戒。——这三件事，足以让一个人不被这个世界拉着跑。" },
        { tag: "韩炳哲", text: "我们已经不再需要别人来剥削自己——最严厉的那个工头，已经搬进了我们脑子里。" },
        { tag: "皮科·艾耶", text: "在一个加速度的世界里，慢下来不再是一种特权。它越来越像一种必需。" },
        { tag: "伯克曼", text: "一辈子大约只有四千个星期。承认这件事让人窒息，但也让人解脱：既然不可能什么都做，那你终于可以选了。" }
      ],

      slips: [
        "今天，你可以做一个普通人。普通本来就是大多数。",
        "今天，你不必赢。让一次也没关系——本来也没有奖。",
        "今天，你可以是慢的那一个。慢，不是问题；急，才是。",
        "今天，你可以不被看见。不被看见的时候，你才真正地在场。",
        "今天，你的存在不需要任何理由。你已经在这里了。",
        "今天，你不必比昨天更好。昨天的你，已经替你走完了昨天。",
        "今天，你可以不证明任何事。证明，是给评审看的，不是给自己活的。",
        "今天，你可以不知道答案。也可以不知道问题是什么。",
        "今天，落在别人后面是可以的。你不在他们的路上。",
        "今天，你不必有一份「了不起」的人生。普通的，已经够珍贵了。",
        "今天，你不必让自己有用。无用的木头，活到了它本该有的年岁。",
        "你已经够了。即便此刻什么也没做。",
        "你的休息不欠任何人一个解释。",
        "今天，你可以不去成为一个「更好的版本」。这个版本，已经把你扛到了这里。",
        "今天，你可以让别人先到达。终点不只一个；也不一定要有终点。",
        "你今天没产出，世界也没在等你产出。",
        "今天，你不必「成为」任何人。你已经是了。",
        "今天，你不需要被理解。被理解不是活着的前提。",
        "今天，你可以让心里那个「应该」安静一下。它已经吵了太久。",
        "你不必是最强、最快、最忙的那一个。本来也没人发奖牌。",
        "今天，你的「够」，不由别人来定。",
        "今天，你可以承认你累了。承认，本身就是一种休息。",
        "今天，你可以爱你平凡的样子——那才是真的你。",
        "你今天的存在，本身就是一份贡献。哪怕没有人收到。",
        "今天，你不必「赶上」任何人。这不是一场比赛，从来都不是。",
        "今天，你可以做完一半就停下。半，也是一种完整。",
        "今天，你可以让自己被打败。这不是失败，这是放下。",
        "今天，你可以让那条没回的消息再等等。没人会因此少一寸生命。",
        "今天，你可以不优秀。优秀，也是一种忙。",
        "在某个角落不被知道，也是一种好好活着的方式。",
        "今天，你可以放心地，被这个世界遗忘几个小时。"
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
      enoughTitle: "It's enough", enoughSub: "A small permission for today.",

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

      enoughMeta: "today's permission",
      enoughAnother: "another",
      enoughClose: "I'll take it",
      enoughNote: "This permission slip isn't saved, and doesn't need to be. Read it once. Remembering it isn't required.",

      prompts: [
        "How much of today did you give to nothing in particular?",
        "Why are you in such a hurry? Where is the hurry coming from?",
        "If you didn't try to prove yourself today, what would happen?",
        "Which of your identities had you say something not quite true today?",
        "How much of 'now' did you sacrifice today for 'later'?",
        "When are you most afraid of empty space? What are you hiding from inside it?",
        "Who handed you the ruler you use to judge your time?",
        "If 'enough' were really true, where would you start stopping?",
        "Is there something you did that doesn't need to become a take, a post, or a lesson?",
        "Can you do something good for yourself with no applause and no progress bar?",
        "What is your body saying right now? Are you listening?",
        "Where in your body lives the oldest tiredness? How long has it been there?",
        "When did you last actually taste your food?",
        "Have you listened to your own breath today? Try it once more, now.",
        "If tonight were your last, how would today's priorities shift?",
        "If you had only a thousand days left, would today look different?",
        "Twenty years from now, which of today's worries will still matter?",
        "When was the last time you did nothing at all? How did it feel?",
        "How much of your busyness is real, and how much is a way of avoiding something?",
        "If you stopped completely for a week, would the world actually collapse?",
        "What are you most reluctant to waste? Time, or something else underneath?",
        "What you think you're chasing — what if it has been chasing you?",
        "In whose presence do you feel you don't need to perform?",
        "Whom did you recently do something for that can't be counted as an investment?",
        "The people who make you feel glad to be alive — what do they have in common?",
        "How far apart are 'what I want to do' and 'what I should do'?",
        "If no one were watching, what would you most want to do right now?",
        "Was there a moment today when you were just there, not on your way somewhere?",
        "When did you last sit and look at nothing — not even a screen?",
        "If you weren't doing it 'for later', how would today look?"
      ],

      passages: [
        { tag: "Zhuangzi",        text: "The crooked tree, useless to the carpenter, lived out the full span of its natural years. Sometimes the price of being useful is the only life you had." },
        { tag: "Zhuangzi",        text: "The mind of the sage is a mirror — it greets nothing, sees nothing off. It receives, and lets things go." },
        { tag: "Laozi",           text: "He who knows he has enough is rich. He who knows when to stop, escapes harm. One more step might be the step past 'enough'." },
        { tag: "Laozi",           text: "In learning, every day add. In the Way, every day let go. The hardest arithmetic is subtraction." },
        { tag: "Confucius",       text: "With coarse rice for food, water for drink, and a bent arm for a pillow — joy can still live there. Twenty-five centuries on, the line still holds." },
        { tag: "Confucius",       text: "It passes like this, day and night, without stopping. The river never worries whether it is moving fast enough." },
        { tag: "Tao Yuanming",    text: "Come back. The fields are going to weeds. Why does your heart keep working for the body's reputation?" },
        { tag: "Su Shi",          text: "Never mind the sound of rain through the trees. I might as well hum a tune, and walk along, slowly." },
        { tag: "Wang Wei",        text: "I walk until the stream runs out. Then I sit, and watch the clouds rise." },
        { tag: "Heart Sutra",     text: "With nothing held in the mind, there is no fear. It is the things we are gripping that frighten us." },
        { tag: "Wang Yangming",   text: "It is easy to defeat the bandits in the mountains. It is hard to defeat the bandits inside one's own heart." },
        { tag: "Pascal",          text: "All of humanity's problems stem from one thing: man's inability to sit quietly, alone, in a room. He wrote this before phones." },
        { tag: "Seneca",          text: "It is not that we have a short time to live, but that we waste a lot of it. Life is long enough — if you know how to use it." },
        { tag: "Marcus Aurelius", text: "Confine yourself to the present. The future does not yet belong to you. The past no longer does. Both, for now, are someone else's problem." },
        { tag: "Thoreau",         text: "I went to the woods because I wished to live deliberately, to front only the essential facts of life." },
        { tag: "Rilke",           text: "Be patient toward everything unresolved in your heart. Try to love the questions themselves, as you would love a locked room." },
        { tag: "Mary Oliver",     text: "Tell me, what is it you plan to do with your one wild and precious life?" },
        { tag: "Annie Dillard",   text: "How we spend our days is, of course, how we spend our lives." },
        { tag: "Merton",          text: "There is a pervasive form of contemporary violence: overwork. The frenzy of the activist neutralizes the very peace they are working for." },
        { tag: "Hesse",           text: "Siddhartha was asked: what can you do? He said: I can wait, I can think, I can fast. Three skills, and the world cannot rush you." },
        { tag: "Byung-Chul Han",  text: "We no longer need external exploiters. The most demanding foreman has moved into our own heads." },
        { tag: "Pico Iyer",       text: "In an age of acceleration, going slow has stopped being a privilege. It is becoming a necessity." },
        { tag: "Burkeman",        text: "A human lifespan is around four thousand weeks. Admitting this feels suffocating — and then, surprisingly, freeing. You cannot do everything, which is why you finally get to choose." },
        { tag: "Russell",         text: "Immense harm is caused by the belief that work is virtuous. The road to a sane life lies in an organized diminution of work." }
      ],

      slips: [
        "Today, you have permission to be ordinary. Ordinary is, after all, what most of us are.",
        "Today, you don't have to win. Letting someone go ahead is fine — there was no prize anyway.",
        "Today, you can be the slow one. Slow isn't the problem. Hurry is.",
        "Today, you can go unseen. Unseen is when you actually get to be here.",
        "Today, your existence doesn't need a reason. You are already here.",
        "Today, you don't have to be better than yesterday. Yesterday-you walked yesterday's miles already.",
        "Today, you don't have to prove anything. Proof is for an audience you don't owe.",
        "Today, you can not know the answer. You can also not know the question.",
        "Today, it's okay to be behind everyone. You are not on their road.",
        "Today, you don't have to have a remarkable life. An ordinary one is already rare.",
        "Today, you don't have to make yourself useful. The crooked tree, useless to the carpenter, lived out its full years.",
        "You are already enough. Even right now, having done nothing.",
        "Your rest owes no one an explanation.",
        "Today, you don't have to become a 'better version' of yourself. This version got you here.",
        "Today, you can let others arrive first. There isn't only one finish line. There may be none at all.",
        "You produced nothing today. The world was not waiting for you to.",
        "Today, you don't have to 'become' anyone. You already are.",
        "Today, you don't need to be understood. Being understood is not a prerequisite for being alive.",
        "Today, you can let the 'should' inside you go quiet. It has been loud for a long time.",
        "You don't have to be the strongest, fastest, busiest one. No one was handing out medals.",
        "Today, what's 'enough' for you is not for anyone else to decide.",
        "Today, you can admit you are tired. Admitting is itself a kind of rest.",
        "Today, you can love your ordinary self. That's the real one.",
        "Your being here today is itself a contribution. Even if no one receives it.",
        "Today, you don't have to catch up to anyone. This was never a race.",
        "Today, you can stop halfway. Half is also a kind of whole.",
        "Today, you can let yourself be defeated. That isn't failure. It's letting go.",
        "Today, that unanswered message can keep waiting. No one loses an hour of life because of it.",
        "Today, you don't have to be excellent. Excellence is also a kind of busyness.",
        "Being unknown in some quiet corner is also a way of living a good life.",
        "Today, you can let the world forget about you for a few hours. It's allowed."
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
    slipIdx = -1;
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
    const valid = ["sit", "observe", "undo", "read", "enough"];
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

  // ---------- Enough (permission slips) ----------

  let slipIdx = -1;
  function showSlip(forceRandom) {
    const slip = document.getElementById("slip");
    const text = document.getElementById("slip-text");
    const list = t.slips;
    let nextIdx;
    if (forceRandom) {
      do { nextIdx = Math.floor(Math.random() * list.length); }
      while (nextIdx === slipIdx && list.length > 1);
    } else {
      nextIdx = hashOfDay() % list.length;
    }
    slipIdx = nextIdx;

    slip.classList.remove("settled");
    slip.classList.add("fading");
    setTimeout(() => {
      text.textContent = list[slipIdx];
      slip.classList.remove("fading");
      // Tiny delay before "settling" so the stamp lands after the slip appears.
      requestAnimationFrame(() => {
        setTimeout(() => slip.classList.add("settled"), 80);
      });
    }, 500);
  }
  function setupEnough() {
    document.getElementById("enough-next").onclick = () => showSlip(true);
    const note = document.getElementById("enough-note");
    if (note) note.textContent = t.enoughNote;
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
    if (name === "enough") {
      setupEnough();
      // First visit of the day shows today's slip; revisits keep what's there
      // unless the user taps "another".
      if (slipIdx === -1) showSlip(false);
    }
  }

  // ---------- Boot ----------
  applyLang();
  show(initialView());

  // Handle browser back/forward and direct hash navigation.
  window.addEventListener("hashchange", () => {
    const next = initialView();
    if (next !== currentView) show(next);
  });
})();
