(function () {
  "use strict";

  // ---------- i18n ----------

  const I18N = {
    zh: {
      htmlLang: "zh-CN",
      brand: "慢",
      tagline: "做得少一些，就好。做得更少，也好。",

      sitTitle: "坐一会",      sitSub: "什么都不做。",
      observeTitle: "看一看",   observeSub: "问自己一句。",
      undoTitle: "不做",       undoSub: "今天不去做的事。",
      readTitle: "念几句",     readSub: "慢慢读，不必读完。",
      enoughTitle: "够了",     enoughSub: "今日的一张许可。",

      footA: "这里没有数据，没有打卡，没有提醒。",
      footB: "用完关掉就好。",

      affirmTrigger: "对我说一次",
      affirmLines: ["你已足够。", "就此刻。", "如你所是。"],

      timeNotes: {
        morning:   ["今天不必活得多了不起。就这样过着，也是一天。",
                    "早。今天还没有人在替你打分。"],
        afternoon: ["你一直在追的那些事，让它们自己先跑一会儿。",
                    "下午了。不必每一刻都在往前赶。"],
        evening:   ["今天没做完的，明天还在。不必带着它去睡。",
                    "可以慢慢停下来了。今天，你做的已经够多。"],
        night:     ["夜深了。其实，可以就这样去睡。",
                    "这么晚还醒着，可以原谅自己一下。"]
      },

      leaveLabel: "返回",

      sitHint: "跟着圆一起呼吸。",
      sitNudges: [
        { atMs:  90 * 1000, text: "在这里就好。不必赶着去哪里。" },
        { atMs: 240 * 1000, text: "外面的人都在赶路。你不必跟着赶。" },
        { atMs: 420 * 1000, text: "心里若冒出「该做点别的」的念头，看一眼，再让它走。" },
        { atMs: 600 * 1000, text: "你此刻正在「落后」——这也只是一种站着的方式。" },
        { atMs: 780 * 1000, text: "够了。可以关掉这个页面了。" },
        { atMs: 960 * 1000, text: "真的够了。这里没有更多东西在等你。" }
      ],

      observeMeta: "今天的问题",
      observeNote: "想写什么都行，不写也可以。这里的字不会保存——这段时间，本不必留痕。",
      scratchPlaceholder: "…",
      observeAnother: "换一题",
      observeLetGo: "放下吧",
      observeClose: "关掉",

      undoMeta: "今天我不去做的事",
      undoEmpty: "（空着也很好）",
      undoPlaceholder: "比如：不把今天的散步写成一篇东西。",
      undoNote: "明早醒来，这张清单就空了。它不替你存下什么。",
      undoRemove: "移除",

      readNext: "下一段",
      readEnough: "够了",

      enoughMeta: "今日许可",
      enoughAnother: "换一张",
      enoughClose: "收下了",
      enoughNote: "这张许可不会保存，也不必保存。读一遍——记不记得，都不要紧。",

      prompts: [
        "今天，你有多少时间是没有目的的？",
        "你为什么这么急？这股急是从哪儿来的？",
        "如果你今天不去证明自己，会怎样？",
        "你的哪个「身份」，今天又让你说了一句不太真的话？",
        "为了「以后」，你今天牺牲了多少「现在」？",
        "你什么时候最怕「空白」？空白里，你在躲什么？",
        "你心里那把审判时间的尺子，是谁递给你的？",
        "如果「够」真的存在，你愿意从哪里开始停下？",
        "今天有什么事你做了，但没打算拿去发表、写下、或当成经验？",
        "没有掌声，也没有进度条——你能不能做完一件对自己好的事？",
        "此刻你的身体在说什么？你听见了吗？",
        "你身体里哪个地方最累？它累了多久了？",
        "你最近一次真正尝到食物的味道，是什么时候？",
        "今天你听过自己呼吸吗？此刻，再听一次。",
        "如果今晚就是你的最后一晚，今天最要紧的事，还是那些吗？",
        "如果只剩一千天可活，你今天会安排得不一样吗？",
        "二十年后回头看，你今天放在心上的哪些事，还重要？",
        "你最近一次什么都不做，是什么时候？是什么感觉？",
        "你的「忙」，有多少是真的事，又有多少是在躲什么？",
        "如果你现在停下来一周，这世界会真的塌吗？",
        "你最舍不得「浪费」的，是时间，还是别的什么？",
        "你以为你在追的，是不是其实在追你？",
        "在谁面前，你觉得不必演？",
        "你最近一次为别人做的、算不上「投资」的事，是什么？",
        "你身边那些让你觉得「活着真好」的人——他们身上有什么是共同的？",
        "你「想做」的事和「应该做」的事，差得有多远？",
        "如果没有人在看，你现在最想做什么？",
        "今天有没有一刻，你只是在那里——而不是在赶去哪里？",
        "你最近一次坐下来什么都不看——连手机也不看——是多久以前？",
        "如果不是「为以后」，你今天会怎么过？",
        "今天，你跟谁较了一下劲？较出了什么？",
        "你以为自己「落后」了——落在了什么的后面？是谁划的那条线？",
        "你最近一次因为别人「更好」而难受，是想证明给谁看？",
        "那个让你觉得自己「不够」的人，他自己「够」了吗？",
        "你最近一次被「忽视」，是不是其实只是一段没人盯着你的安静？",
        "如果今天没有人比较、没有人评分，你最想先做什么？",
        "此刻你心里最不愿被人看见的那种感觉，叫什么？",
        "今天，你有没有为「别人在前进」而难受？这股难受，是你自己的——还是跟着别人一起来的？",
        "如果你允许自己今天「不够好」，会怎样？真的会怎样吗？"
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
        { tag: "伯克曼", text: "一辈子大约只有四千个星期。承认这件事让人窒息，但也让人解脱：既然不可能什么都做，那你终于可以选了。" },
        { tag: "庄子", text: "鹪鹩巢于深林，不过一枝；偃鼠饮河，不过满腹。所谓「够」，自古就没有很大。" },
        { tag: "庄子", text: "井蛙不可以语于海。但井蛙的井，对它来说，也是它的整个世界。每个人的「够」，原本就不一样。" },
        { tag: "禅家语", text: "比较是一切痛苦的开始。山不和山比高，海不和海比深。它们只是各自地，是它们自己。" },
        { tag: "本居宣长", text: "「物の哀れ」——能为一片落叶动心的人，并不比那些「成就大业」的人少活了什么。" },
        { tag: "佛家语", text: "嫉妒来了，不必赶它走——只用看着它，知道它叫嫉妒。能被认出来的烦恼，已经少了一半。" },
        { tag: "费曼", text: "学会不在意别人怎么看你，这件事释放出来的力气，远比你以为的多。" }
      ],

      slips: [
        "今天，可以做一个普通人。普通本来就是大多数。",
        "今天，你不必赢。让一次又何妨——反正也没人发奖。",
        "今天，可以是慢的那一个。慢不是毛病——急才是。",
        "今天，可以不被看见。没人看你的时候，你才真正在那里。",
        "今天，你的存在不需要任何理由。你已经在这里了。",
        "今天，你不必比昨天更好。昨天的你，已经替你把昨天过完了。",
        "今天，你可以不证明任何事。证明是做给别人看的，不是为自己活的。",
        "今天，你可以不知道答案。也可以连问题是什么都不知道。",
        "今天，落在别人后头也没事。你本来就不和他们走一条路。",
        "今天，你不必有一份「了不起」的人生。普通已经够珍贵了。",
        "今天，你不必让自己有用。无用的木头，活到了它本该有的年岁。",
        "你已经够了。就算此刻什么也没做。",
        "你的休息，不欠任何人一个解释。",
        "今天，你不必去做「更好的自己」。眼前这个你，已经把你扛到了这里。",
        "今天，可以让别人先到。终点不只一个，也不一定要有终点。",
        "你今天没产出，世界也没在等你产出。",
        "今天，你不必「成为」任何人。你已经是了。",
        "今天，你不需要被理解。被理解，不是活着的前提。",
        "今天，可以让心里那个「应该」安静一下——它已经吵得太久。",
        "你不必是最强、最快、最忙的那一个。这里本来就没人发奖牌。",
        "今天，你的「够」，不由别人来定。",
        "今天，可以承认你累了。承认，本身就是一种休息。",
        "今天，可以爱你平凡的样子——那才是真的你。",
        "你今天还在，本身就是一份贡献。哪怕没人收到。",
        "今天，你不必「赶上」任何人。这从来就不是一场比赛。",
        "今天，做到一半就停下，也行。半，也是一种完整。",
        "今天，可以让自己被打败。这不叫失败，这叫放下。",
        "今天，那条没回的消息，可以再让它等等。没人会因此少活一寸。",
        "今天，可以不优秀。优秀，也是一种忙。",
        "在某个角落，不被人知道，也是一种好好活着。",
        "今天，可以放心地让这个世界把你遗忘几个小时。",
        "今天，你可以是错的——关于你自己，关于你过去做过的某个判断。",
        "今天，可以放下一件你已经扛了很久的事。放下，是把手腾出来。",
        "今天，可以做个初学者。所有的本事，先放到一边。",
        "今天，可以软一点。这世界不缺再多一个变硬的人。",
        "今天，可以承认你在嫉妒——也不必拿它去做什么。",
        "今天，可以不在乎自己的「形象」。形象是给别人看的——今天不开门。",
        "今天，可以「一事无成」。今天本来就不是为了被记住的。",
        "今天，可以反悔。昨天答应过自己的话，今天可以重新再看一眼。",
        "今天，可以「不够」——就这样过完一天，也没事。",
        "今天，可以对一件事没意见。沉默不是怯懦——是省力。",
        "今天，身体说累，就让它累。它对你诚实，你也请对它诚实。",
        "今天，可以让人看见你不在状态。这一面，也是你的一部分。",
        "终有一天，你会变老、变慢、跟不上——那也只是另一种活法。可以提前一点接受。",
        "今天，可以放过自己的某一个错。它已经过去了。",
        "今天，你不必把自己的人生「讲成一个故事」。它就那样发生着——已经在了。",
        "我们多数人，都是别人眼里的「不够好」。欢迎入伙。",
        "此时此刻，世上还有许多人也在选择慢下来。你不是一个人。",
        "我们都做过自己后来想撤回的决定。这不丢人，也没什么了不起。",
        "「够了」这件事，我们都不擅长。可以一起练。",
        "今天，可以让人看见你的慢。被看见慢，比假装快要省力得多。",
        "今天，可以是聚会里那个「最近没什么进展」的人。这也是一种活法。",
        "今天，可以承认：有些人确实会觉得你「不够」。他们怎么觉得，是他们的事——不是你要扛的。",
        "今天，可以不解释自己为什么慢。解释，常常是讲给一个根本不在场的法官听。",
        "今天，可以放过自己。不是因为你今天做得好——而是因为「做得好」，从来不是你存在的入场券。你已经在了。",
        "今天，可以承认：你曾经追的那条标准，是别人随手画的一条线——上面从来没有你的签名。"
      ]
    },

    en: {
      htmlLang: "en",
      brand: "slow",
      tagline: "Doing less is enough. So is doing much less.",

      sitTitle: "Sit awhile",   sitSub: "Do nothing.",
      observeTitle: "Notice",   observeSub: "Ask yourself something.",
      undoTitle: "Not-doing",   undoSub: "What you're choosing not to do today.",
      readTitle: "Read a line", readSub: "Slowly. You don't have to finish.",
      enoughTitle: "It's enough", enoughSub: "A small permission for today.",

      footA: "No data, no streaks, no notifications.",
      footB: "Close it when you're done.",

      affirmTrigger: "say it once",
      affirmLines: ["You are enough.", "Right now.", "As you are."],

      timeNotes: {
        morning:   ["You don't have to make today 'remarkable.' You can just live it.",
                    "Morning. The day isn't keeping score on you yet."],
        afternoon: ["Whatever you've been chasing — let it run on without you for a while.",
                    "It's afternoon. You don't have to be 'moving forward' every minute."],
        evening:   ["Whatever you didn't finish today, it will still be there tomorrow.",
                    "You can let yourself come down now. You've done enough."],
        night:     ["It's late. Bed is a real option.",
                    "Up this late, you can probably let yourself off the hook."]
      },

      leaveLabel: "leave",

      sitHint: "Breathe with the circle.",
      sitNudges: [
        { atMs:  90 * 1000, text: "It's enough to just be here. You don't need to get anywhere." },
        { atMs: 240 * 1000, text: "Out there, people are rushing. You can let them rush." },
        { atMs: 420 * 1000, text: "If a thought like 'I should be doing something else' shows up — see it, then let it pass." },
        { atMs: 600 * 1000, text: "You are 'falling behind' right now — but that's only another way of standing still." },
        { atMs: 780 * 1000, text: "That's enough. You can close this tab now." },
        { atMs: 960 * 1000, text: "Really, enough. Nothing more is waiting here for you." }
      ],

      observeMeta: "Today's question",
      observeNote: "Write whatever, or nothing at all. Nothing here is saved. This is a stretch of time that doesn't need to leave a trace.",
      scratchPlaceholder: "…",
      observeAnother: "another question",
      observeLetGo: "let it go",
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
        "If you weren't doing it 'for later', how would today look?",
        "Who were you measuring yourself against today? What came of it?",
        "You think you're 'behind' — behind what, exactly? Who drew the line?",
        "When you most recently felt small because someone else was 'doing better,' who were you trying to prove yourself to?",
        "That person whose life makes you feel inadequate — do they feel adequate?",
        "That recent moment when you felt 'ignored' — what if it was just a stretch of quiet when no one was watching you?",
        "If no one were comparing or scoring today, what would you do first?",
        "The feeling you most don't want anyone to see right now — what is its name?",
        "Did you feel something today because 'someone else is moving forward'? Is that feeling yours, or did it come in with them?",
        "If you let yourself be 'not good enough' today, what would actually happen? Would anything?"
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
        { tag: "Russell",         text: "Immense harm is caused by the belief that work is virtuous. The road to a sane life lies in an organized diminution of work." },
        { tag: "Zhuangzi",        text: "The wren in the deepest woods needs only a single branch. The mole drinking at the river drinks only its fill. 'Enough' has never been very large." },
        { tag: "Zhuangzi",        text: "You can't tell a frog in a well about the sea — it is bound by its space. But to the frog, its well is its whole world. What is 'enough' was never meant to be the same for everyone." },
        { tag: "Zen saying",      text: "Comparison is where all suffering begins. Mountains do not compete with mountains for height. Seas do not compete with seas for depth. They simply, each in their own place, are what they are." },
        { tag: "Motoori Norinaga", text: "Mono no aware — the one who can be moved by a falling leaf has not lived any less than the one who 'accomplished great things.'" },
        { tag: "Buddhist saying",  text: "When envy arrives, you don't have to send it away. Just see it, and know it by name. A trouble that can be recognized is already half its size." },
        { tag: "Feynman",          text: "Learning not to care what other people think of you releases more energy than you'd believe." }
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
        "Today, you can let the world forget about you for a few hours. It's allowed.",
        "Today, you can be wrong — about yourself, about some judgment you made long ago.",
        "Today, you can put down one thing you've been carrying too long. Putting it down is freeing your hands, not failing.",
        "Today, you can be a beginner. Let the old skills sit somewhere else for an afternoon.",
        "Today, you can be soft. The world is not short on hardened people.",
        "Today, you can admit you are envious — and not do anything with it.",
        "Today, you can stop curating your 'image.' Image is for others. The door is closed today.",
        "Today, you can have 'accomplished nothing.' Today wasn't meant to be remembered.",
        "Today, you can change your mind. What you promised yourself yesterday can be looked at again.",
        "Today, you can be 'not enough' — and live the whole day like that, and it will still have been a day.",
        "Today, you can have no opinion on something. Silence isn't cowardice. It's conservation.",
        "Today, when your body says 'tired,' let it be tired. It is honest with you. Try to be honest with it.",
        "Today, you can let someone see you off your game. That side of you is also part of the whole picture.",
        "Someday you will get older, slower, less able to keep up. That, too, is only another way of being alive. You can start letting that be okay early.",
        "Today, you can let yourself off the hook for one mistake. It has already passed.",
        "Today, you don't have to tell your life as a story. It is happening already, story or no.",
        "Most of us are 'not enough' in someone's eyes. You're in good company.",
        "Right now on this planet, many other people are also choosing to slow down. You aren't doing this alone.",
        "We all make decisions we later wish we could take back. That's not impressive or shameful — just human.",
        "None of us is very good at 'enough.' We can practice it together.",
        "Today, you can let people see you being slow. Being seen slow is less tiring than faking fast.",
        "Today, you can be the one at the gathering who 'hasn't been up to much lately.' That's also a way of being there.",
        "Today, you can accept that some people will indeed find you 'not enough.' Their finding is theirs to carry — not yours.",
        "Today, you don't have to explain why you're slow. Explanation is usually a defence in front of a judge who isn't even in the room.",
        "Today, you can let yourself off the hook. Not because today went well — but because 'going well' was never the price of admission for your existing. You're already in.",
        "Today, you can admit: the standard you've been chasing was a line someone else casually drew. Your name is not on it."
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

  function pickTimeNote() {
    const hour = new Date().getHours();
    let phase;
    if (hour >= 22 || hour < 5) phase = "night";
    else if (hour < 11)         phase = "morning";
    else if (hour < 17)         phase = "afternoon";
    else                        phase = "evening";
    const list = t.timeNotes[phase];
    // Two variants per phase; pick deterministically per day so revisits in
    // the same window are stable, but a different day surfaces the other.
    return list[hashOfDay() % list.length];
  }
  function applyTimeNote() {
    const el = document.getElementById("time-note");
    if (!el) return;
    el.textContent = pickTimeNote();
  }

  function applyLang() {
    document.documentElement.lang = t.htmlLang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.dataset.i18n;
      if (t[k] != null) el.textContent = t[k];
    });
    applyTimeNote();

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
    const letGoBtn = document.getElementById("let-go");
    letGoBtn.onclick = letGo;
    // Reset scratch on entry — content is never saved.
    const ta = document.getElementById("scratch");
    ta.value = "";
    ta.classList.remove("releasing");
    letGoBtn.classList.remove("has-content");
    // Show 'let it go' only when there's something to release. Keeps the
    // action row quiet when the user is just looking at the question.
    ta.oninput = () => {
      letGoBtn.classList.toggle("has-content", !!ta.value.trim());
    };
  }
  function letGo() {
    const ta = document.getElementById("scratch");
    if (!ta.value.trim()) return;
    ta.classList.add("releasing");
    const btn = document.getElementById("let-go");
    if (btn) btn.classList.remove("has-content");
    // After the drift-down completes, quietly clear and restore the textarea
    // so the user can write something else.
    setTimeout(() => {
      ta.value = "";
      ta.classList.remove("releasing");
    }, 1800);
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
  let slipSettleTimer = null;
  // Slight per-slip rotation gives the cards a hand-placed feel rather than
  // a stamped-out-of-a-template feel. Eight values, picked deterministically
  // by slip index.
  const SLIP_ROTATIONS = ["-0.6deg", "0.5deg", "-0.4deg", "0.7deg", "-0.7deg", "0.3deg", "-0.5deg", "0.6deg"];
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

    slip.style.setProperty("--slip-rot", SLIP_ROTATIONS[slipIdx % SLIP_ROTATIONS.length]);
    // Re-trigger the settling animation by toggling the class off and on.
    slip.classList.remove("settled");
    slip.classList.add("fading");
    // Hold the action buttons at a softer opacity while the slip is arriving,
    // so the user feels invited to read it rather than reach immediately for
    // "another".
    const actions = document.querySelector(".enough-actions");
    if (actions) actions.classList.add("settling");
    if (slipSettleTimer) clearTimeout(slipSettleTimer);
    setTimeout(() => {
      text.textContent = list[slipIdx];
      slip.classList.remove("fading");
      slip.classList.add("settled");
    }, 500);
    slipSettleTimer = setTimeout(() => {
      if (actions) actions.classList.remove("settling");
    }, 2800);
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

  // ---------- Affirmation overlay ----------

  let affirmTimers = [];
  function clearAffirmTimers() {
    affirmTimers.forEach(clearTimeout);
    affirmTimers = [];
  }
  function showAffirm() {
    const overlay = document.getElementById("affirm-overlay");
    if (!overlay) return;
    const lines = overlay.querySelectorAll(".affirm-line");
    lines.forEach((el, i) => {
      el.textContent = (t.affirmLines && t.affirmLines[i]) || "";
      el.classList.remove("visible");
    });
    clearAffirmTimers();
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
    // Stagger the lines so the affirmation lands in three breaths.
    function reveal(i) {
      const el = lines[i];
      if (el) el.classList.add("visible");
    }
    affirmTimers.push(setTimeout(() => reveal(0),  500));
    affirmTimers.push(setTimeout(() => reveal(1), 1700));
    affirmTimers.push(setTimeout(() => reveal(2), 2900));
    // Then fade everything back. The user can also tap to dismiss early.
    affirmTimers.push(setTimeout(() => hideAffirm(), 5400));
  }
  function hideAffirm() {
    const overlay = document.getElementById("affirm-overlay");
    if (!overlay) return;
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
    clearAffirmTimers();
  }
  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "affirm-trigger") {
      e.preventDefault();
      showAffirm();
      return;
    }
    const overlay = document.getElementById("affirm-overlay");
    if (overlay && overlay.classList.contains("active") && overlay.contains(e.target)) {
      hideAffirm();
    }
  }, true);
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const overlay = document.getElementById("affirm-overlay");
    if (overlay && overlay.classList.contains("active")) {
      hideAffirm();
    }
  });

  // ---------- Boot ----------
  applyLang();
  show(initialView());

  // Handle browser back/forward and direct hash navigation.
  window.addEventListener("hashchange", () => {
    const next = initialView();
    if (next !== currentView) show(next);
  });
})();
