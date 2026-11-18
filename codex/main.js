/* =========================================================
   全站交互
   说明：作品、角色与阅读顺序数据集中放在这里，页面只负责渲染。
   ========================================================= */

(() => {
  "use strict";

  const works = {
    "hear-the-wind-sing": {
      title: "且听风吟",
      year: "1979",
      type: "长篇小说",
      level: "入门",
      short: "一部带着夏日、酒吧与未说出口的话的处女作。",
      summary:
        "小说以短暂回望的方式展开。叙述者在海边城市度过一个夏天，遇见几位难以真正靠近的人。故事并不急于解释关系，更多留下语气、距离和空白。",
      readingNote:
        "篇幅短，人物关系也不复杂，适合先感受村上早期叙述的节奏。若在意完整情节，可以先读《挪威的森林》。",
      context: "早期创作与“青春三部曲”的入口。"
    },
    "pinball-1973": {
      title: "1973年的弹子球",
      year: "1980",
      type: "长篇小说",
      level: "入门",
      short: "一台旧弹子机，牵出关于记忆和失去的寻找。",
      summary:
        "叙述者与“鼠”的生活继续向前，却都被过去留下的物件牵引。弹子机像一个私人坐标，让记忆有了可触摸的形状。",
      readingNote:
        "读完处女作再进入会更顺。它保留了轻盈的叙述，也开始把寻找写成推动故事的力量。",
      context: "“青春三部曲”的第二部。"
    },
    "a-wild-sheep-chase": {
      title: "寻羊冒险记",
      year: "1982",
      type: "长篇小说",
      level: "进阶",
      short: "一次寻找羊的行动，把日常带进陌生的北海道。",
      summary:
        "故事从一张旧照片开始，叙述者被卷入寻找一只特殊羊的旅程。现实中的地点、人物和超现实线索逐渐交叠，“我”、鼠、喜喜与羊男也因此聚到同一条关系线上。",
      readingNote:
        "建议在读过前两部后阅读。它既是青春三部曲的收束，也是村上以后反复书写“寻找”与“另一个世界”的明显起点。",
      context: "“青春三部曲”的第三部，也是角色关系最集中的一部。"
    },
    "hard-boiled-wonderland": {
      title: "世界尽头与冷酷仙境",
      year: "1985",
      type: "长篇小说",
      level: "长篇挑战",
      short: "两个世界轮换叙述，记忆与意识成为故事的核心。",
      summary:
        "小说在两条叙事线之间切换。一边接近技术化的城市与秘密任务，一边是围墙内的安静小镇。两条线彼此呼应，读者需要跟着结构慢慢拼合。",
      readingNote:
        "结构感很强，适合已经熟悉村上短句和第一人称叙述的读者。不必急着找出两个世界的对应关系。",
      context: "村上早期长篇中双线结构最醒目的一部。"
    },
    "norwegian-wood": {
      title: "挪威的森林",
      year: "1987",
      type: "长篇小说",
      level: "入门",
      short: "一段青春关系，写得直接，也保留了难以言明的部分。",
      summary:
        "渡边彻回望自己二十岁前后的生活。直子、绿子和木月让他停留在几段无法轻易放下的关系里。小说比村上的许多作品更贴近现实日常，也更容易从人物情感进入。",
      readingNote:
        "第一次读村上，可以从这一部开始。它不代表全部写作风格，却能先建立对人物、孤独和音乐氛围的认识。",
      context: "常被当作入门作品，也是村上作品中最直接书写青春关系的一部。"
    },
    "dance-dance-dance": {
      title: "舞！舞！舞！",
      year: "1988 / 1991",
      type: "长篇小说",
      level: "进阶",
      short: "叙述者回到海豚宾馆，也回到没有处理完的过去。",
      summary:
        "故事沿着《寻羊冒险记》留下的线索继续。都市、酒店、消费社会与记忆交错，喜喜和羊男的名字再次出现，推动叙述者面对过去。",
      readingNote:
        "最好接在《寻羊冒险记》之后读。它能看出村上如何把同一个角色线索延伸成更复杂的都市小说。",
      context: "与《寻羊冒险记》存在明显角色和情节上的延续。"
    },
    "south-of-the-border-west-of-the-sun": {
      title: "国境以南 太阳以西",
      year: "1992",
      type: "长篇小说",
      level: "进阶",
      short: "稳定的生活里，旧日记忆重新发出声音。",
      summary:
        "主人公拥有看似安稳的家庭与工作，却始终被童年时期的一段关系牵动。小说把日常秩序和无法补上的空缺并置，语言克制，情绪留得很长。",
      readingNote:
        "适合在读过几部村上作品后进入。它不依赖复杂设定，主要看人物怎样面对已经错过的过去。",
      context: "一部以都市生活、记忆和关系空缺为中心的长篇。"
    },
    "the-wind-up-bird-chronicle": {
      title: "奇鸟行状录",
      year: "1994–1995",
      type: "长篇小说",
      level: "长篇挑战",
      short: "从找猫、找妻子开始，慢慢走进历史与暴力的暗面。",
      summary:
        "冈田亨的生活因妻子久美子的离开而失去平衡。他在等待与调查中遇见越来越奇异的人，个人生活也和更久远的历史阴影接在一起。",
      readingNote:
        "体量大，结构复杂，几条线索需要耐心。可以先记住人物关系，不必在第一遍读完所有隐喻。",
      context: "村上作品中历史、暴力与个人生活最紧密交织的长篇之一。"
    },
    "kafka-on-the-shore": {
      title: "海边的卡夫卡",
      year: "2002",
      type: "长篇小说",
      level: "进阶",
      short: "少年出走与老人寻猫，两条线在想象中靠近。",
      summary:
        "田村卡夫卡离家前往四国，中田则带着自己的谜团上路。两条叙述线交替展开，图书馆、森林和记忆让现实边缘不断松动。",
      readingNote:
        "如果喜欢神话感、梦境和双线叙事，可以从这里进入。读的时候留意两个人物世界之间的物件与名字。",
      context: "双线叙事清楚，超现实气氛浓，是许多读者进入村上中后期的入口。"
    },
    "1q84": {
      title: "1Q84",
      year: "2009–2010",
      type: "长篇小说",
      level: "长篇挑战",
      short: "青豆与天吾的双线故事，在一个偏移的世界里靠近。",
      summary:
        "青豆和天吾各自生活，也被同一个异常世界牵动。小说铺开多条人物关系，在悬疑、爱情和超现实之间缓慢推进。",
      readingNote:
        "三部篇幅都不小。适合准备好连续阅读时进入，也适合按章节跟着两条人物线做简单笔记。",
      context: "以双主角结构组织的大型长篇。"
    },
    "the-city-and-its-uncertain-walls": {
      title: "小城与不确定性的墙",
      year: "2023",
      type: "长篇小说",
      level: "长篇挑战",
      short: "一座有墙的小城，继续追问记忆与自我的边界。",
      summary:
        "小说围绕一座被墙包围的小城展开。熟悉与陌生并存，人物的记忆和身份在阅读中不断被重新确认。",
      readingNote:
        "结构带有梦境感，适合已经习惯村上往返现实与隐喻的读者。初读可以先跟着叙述走。",
      context: "村上后期对“小城”意象的一次完整展开。"
    },
    kaho: {
      title: "夏帆",
      year: "2026",
      type: "长篇小说",
      level: "进阶",
      short: "一位绘本作家站在人生中途，重新整理自己的生活与想象。",
      summary:
        "夏帆是一位二十六岁的绘本作家，也是本页资料所列新作中的唯一主人公。故事从她当下的生活出发，沿着创作、关系与自我认识展开。",
      readingNote:
        "这是页面按给定资料收录的新作信息。正式出版内容与版本细节，请以出版方最终发布为准。",
      context: "按页面资料，这是村上首次以女性作为唯一主人公的长篇小说。"
    }
  };

  const workOrder = [
    "hear-the-wind-sing",
    "pinball-1973",
    "a-wild-sheep-chase",
    "hard-boiled-wonderland",
    "norwegian-wood",
    "dance-dance-dance",
    "south-of-the-border-west-of-the-sun",
    "the-wind-up-bird-chronicle",
    "kafka-on-the-shore",
    "1q84",
    "the-city-and-its-uncertain-walls",
    "kaho"
  ];

  const characters = [
    {
      slug: "narrator",
      name: "“我”",
      type: "cross",
      identity: "早期作品的相似叙述者",
      description:
        "一个常以第一人称出现的声音。几部早期小说里的“我”有相近的生活质地，却不宜简单看作同一个人的完整传记。",
      works: [
        "hear-the-wind-sing",
        "pinball-1973",
        "a-wild-sheep-chase",
        "dance-dance-dance"
      ]
    },
    {
      slug: "rat",
      name: "鼠",
      type: "cross",
      identity: "“我”的好友",
      description:
        "“我”年轻时的重要朋友。到了《寻羊冒险记》，他的去向与选择让这段关系变得沉重。",
      works: ["hear-the-wind-sing", "pinball-1973", "a-wild-sheep-chase"]
    },
    {
      slug: "xixi",
      name: "喜喜",
      type: "cross",
      identity: "旧日关系与再次出现的名字",
      description:
        "在《寻羊冒险记》中与“我”有旧日关系。到《舞！舞！舞！》，她的名字又推动叙述者回到海豚宾馆，面对过去。",
      works: ["a-wild-sheep-chase", "dance-dance-dance"]
    },
    {
      slug: "sheep-man",
      name: "羊男",
      type: "cross",
      identity: "现实与超现实之间的引路人",
      description:
        "一个难以用日常身份概括的角色。他让故事里的现实与另一层世界保持接触，也常把人物推向必须做出的选择。",
      works: ["a-wild-sheep-chase", "dance-dance-dance"]
    },
    {
      slug: "watanabe",
      name: "渡边彻",
      type: "single",
      identity: "《挪威的森林》叙述者",
      description:
        "以回望的口吻讲述青春关系。他在直子、绿子和木月之间辨认自己的位置，也在多年后重新理解那段日子。",
      works: ["norwegian-wood"]
    },
    {
      slug: "naoko",
      name: "直子",
      type: "single",
      identity: "《挪威的森林》重要角色",
      description:
        "与渡边彻和木月有着紧密的青春连接。她把一部分自己留在过去，也让他一直无法轻易离开那段记忆。",
      works: ["norwegian-wood"]
    },
    {
      slug: "midori",
      name: "绿子",
      type: "single",
      identity: "《挪威的森林》重要角色",
      description:
        "说话直接，带着生活里的热气。她让渡边看到另一种面对关系与日常的方式。",
      works: ["norwegian-wood"]
    },
    {
      slug: "kizuki",
      name: "木月",
      type: "single",
      identity: "渡边与直子的旧友",
      description:
        "三人青春关系的中心之一。即使他不在场，仍会影响渡边与直子看待自己的方式。",
      works: ["norwegian-wood"]
    },
    {
      slug: "reiko",
      name: "玲子",
      type: "single",
      identity: "直子在疗养院的同伴",
      description:
        "直子生活中的重要陪伴者，也听过渡边难以对别人说出口的困惑。",
      works: ["norwegian-wood"]
    },
    {
      slug: "kafka",
      name: "田村卡夫卡",
      type: "single",
      identity: "《海边的卡夫卡》少年叙述者",
      description:
        "十五岁离家的少年。他在四国的图书馆和森林之间寻找关于母亲、姐姐与自身命运的线索。",
      works: ["kafka-on-the-shore"]
    },
    {
      slug: "nakata",
      name: "中田",
      type: "single",
      identity: "能与猫交谈的老人",
      description:
        "与少年卡夫卡形成另一条叙述线。他的行动看似被动，却把故事带向无法预料的方向。",
      works: ["kafka-on-the-shore"]
    },
    {
      slug: "saeki",
      name: "佐伯",
      type: "single",
      identity: "甲村图书馆的负责人",
      description:
        "她收藏着一段旧日记忆，也让卡夫卡在图书馆里遇到理解自己处境的入口。",
      works: ["kafka-on-the-shore"]
    },
    {
      slug: "aomame",
      name: "青豆",
      type: "single",
      identity: "《1Q84》双主角之一",
      description:
        "冷静、自律，也始终保留自己的判断。她的行动世界与天吾的生活一点点靠近。",
      works: ["1q84"]
    },
    {
      slug: "tengo",
      name: "天吾",
      type: "single",
      identity: "《1Q84》双主角之一",
      description:
        "数学教师与写作者。一次编辑工作让他的日常偏离轨道，也让他重新遇见过去的牵挂。",
      works: ["1q84"]
    },
    {
      slug: "okada",
      name: "冈田亨",
      type: "single",
      identity: "《奇鸟行状录》主人公",
      description:
        "一个失去工作、又面对妻子离开的普通人。他在等待和寻找中，逐渐被卷入历史与暴力的暗流。",
      works: ["the-wind-up-bird-chronicle"]
    },
    {
      slug: "kumiko",
      name: "久美子",
      type: "single",
      identity: "冈田亨的妻子",
      description:
        "她的离开改变了冈田亨的生活轨迹，也让整部小说从家庭问题走向更复杂的记忆与历史。",
      works: ["the-wind-up-bird-chronicle"]
    },
    {
      slug: "kaho",
      name: "夏帆",
      type: "single",
      identity: "《夏帆》唯一主人公",
      description:
        "二十六岁的绘本作家。按页面资料，这是村上首次以女性作为唯一主人公的长篇小说角色。",
      works: ["kaho"]
    }
  ];

  const readingModes = {
    beginner: {
      label: "入门优先",
      description: "先建立人物与语气，再进入更复杂的结构。",
      steps: [
        {
          book: "norwegian-wood",
          reason: "情感线索清楚，适合第一次读村上。",
          roles: ["watanabe", "naoko", "midori", "kizuki", "reiko"]
        },
        {
          book: "hear-the-wind-sing",
          reason: "处女作篇幅轻，能看到最早的叙述声音。",
          roles: ["narrator", "rat"]
        },
        {
          book: "kafka-on-the-shore",
          reason: "双线叙事鲜明，想象力也很直接。",
          roles: ["kafka", "nakata", "saeki"]
        },
        {
          book: "a-wild-sheep-chase",
          reason: "青春系列的关键转折，开始出现超现实线索。",
          roles: ["narrator", "rat", "xixi", "sheep-man"]
        },
        {
          book: "dance-dance-dance",
          reason: "与《寻羊冒险记》相连，适合接着看角色回声。",
          roles: ["narrator", "xixi", "sheep-man"]
        },
        {
          book: "the-wind-up-bird-chronicle",
          reason: "体量和结构都更大，适合留出连续阅读时间。",
          roles: ["okada", "kumiko"]
        },
        {
          book: "1q84",
          reason: "三条线索并行，人物关系需要慢慢跟上。",
          roles: ["aomame", "tengo"]
        },
        {
          book: "kaho",
          reason: "一部以女性为主人公的新作，适合放在熟悉村上之后。",
          roles: ["kaho"]
        }
      ]
    },
    publication: {
      label: "按出版顺序",
      description: "沿着长篇出版轨迹，看叙述方式和题材怎样变化。",
      steps: [
        {
          book: "hear-the-wind-sing",
          reason: "从处女作开始，注意短句、距离和夏日气氛。",
          roles: ["narrator", "rat"]
        },
        {
          book: "pinball-1973",
          reason: "继续跟随“我”和鼠，观察记忆如何成为寻找的对象。",
          roles: ["narrator", "rat"]
        },
        {
          book: "a-wild-sheep-chase",
          reason: "青春系列收束，也是进入超现实线索的重要一步。",
          roles: ["narrator", "rat", "xixi", "sheep-man"]
        },
        {
          book: "hard-boiled-wonderland",
          reason: "双线结构与世界设定开始占据中心。",
          roles: []
        },
        {
          book: "norwegian-wood",
          reason: "从超现实转身回到更直接的青春关系。",
          roles: ["watanabe", "naoko", "midori", "kizuki", "reiko"]
        },
        {
          book: "dance-dance-dance",
          reason: "把《寻羊冒险记》的角色线索带进都市叙事。",
          roles: ["narrator", "xixi", "sheep-man"]
        },
        {
          book: "south-of-the-border-west-of-the-sun",
          reason: "篇幅适中，重心落在成年生活和旧日关系。",
          roles: []
        },
        {
          book: "the-wind-up-bird-chronicle",
          reason: "进入村上作品中历史与暴力议题最集中的阶段。",
          roles: ["okada", "kumiko"]
        },
        {
          book: "kafka-on-the-shore",
          reason: "双线叙述成熟，少年成长与超现实并行。",
          roles: ["kafka", "nakata", "saeki"]
        },
        {
          book: "1q84",
          reason: "大体量双主角故事，阅读时适合做人物笔记。",
          roles: ["aomame", "tengo"]
        },
        {
          book: "the-city-and-its-uncertain-walls",
          reason: "看“小城”与墙的意象怎样在后期作品中再次展开。",
          roles: []
        },
        {
          book: "kaho",
          reason: "按本页资料收录的2026年长篇。",
          roles: ["kaho"]
        }
      ]
    },
    character: {
      label: "按角色线索",
      description: "先记住人，再顺着他们的重逢进入作品。",
      steps: [
        {
          book: "hear-the-wind-sing",
          reason: "从“我”和鼠开始，记住早期叙述的声音。",
          roles: ["narrator", "rat"]
        },
        {
          book: "pinball-1973",
          reason: "继续跟随“我”和鼠，看旧物如何把过去带回眼前。",
          roles: ["narrator", "rat"]
        },
        {
          book: "a-wild-sheep-chase",
          reason: "“我”、鼠、喜喜和羊男在同一部作品里靠近。",
          roles: ["narrator", "rat", "xixi", "sheep-man"]
        },
        {
          book: "dance-dance-dance",
          reason: "“我”、喜喜和羊男再次连接，旧线索重新出现。",
          roles: ["narrator", "xixi", "sheep-man"]
        },
        {
          book: "norwegian-wood",
          reason: "转入渡边彻、直子、绿子和木月的青春关系。",
          roles: ["watanabe", "naoko", "midori", "kizuki", "reiko"]
        },
        {
          book: "kafka-on-the-shore",
          reason: "进入田村卡夫卡、中田和佐伯的世界。",
          roles: ["kafka", "nakata", "saeki"]
        },
        {
          book: "1q84",
          reason: "跟着青豆和天吾，在两套世界中寻找彼此。",
          roles: ["aomame", "tengo"]
        },
        {
          book: "kaho",
          reason: "进入夏帆作为唯一主人公的创作生活。",
          roles: ["kaho"]
        }
      ]
    }
  };

  const workBySlug = (slug) => works[slug];
  const characterBySlug = (slug) => characters.find((character) => character.slug === slug);

  const workUrl = (slug) => `work.html?work=${encodeURIComponent(slug)}`;
  const characterUrl = (slug) =>
    `characters.html?character=${encodeURIComponent(slug)}#character-universe`;
  const readingUrl = (slug, mode = "beginner") =>
    `reading.html?book=${encodeURIComponent(slug)}&mode=${encodeURIComponent(mode)}#reading`;

  const roleLinks = (roleSlugs) =>
    roleSlugs
      .map((slug) => {
        const character = characterBySlug(slug);
        return character
          ? `<a href="${characterUrl(slug)}">${character.name}</a>`
          : "";
      })
      .join("");

  const workTitles = (workSlugs) =>
    workSlugs
      .map((slug) => works[slug]?.title)
      .filter(Boolean)
      .join("、");

  function initNavigation() {
    const shell = document.querySelector(".nav-shell");
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("#primary-navigation");

    if (!shell || !toggle || !nav) {
      return;
    }

    const closeNavigation = () => {
      shell.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      const label = toggle.querySelector(".visually-hidden");
      if (label) {
        label.textContent = "打开导航";
      }
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      shell.classList.toggle("nav-open", !isOpen);
      toggle.setAttribute("aria-expanded", String(!isOpen));
      const label = toggle.querySelector(".visually-hidden");
      if (label) {
        label.textContent = isOpen ? "打开导航" : "关闭导航";
      }
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        closeNavigation();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        closeNavigation();
        toggle.focus();
      }
    });
  }

  function initCurrentYear() {
    document.querySelectorAll("[data-current-year]").forEach((node) => {
      node.textContent = String(new Date().getFullYear());
    });
  }

  function initRandomWork() {
    document.querySelectorAll("[data-random-work]").forEach((button) => {
      button.addEventListener("click", () => {
        const slug = workOrder[Math.floor(Math.random() * workOrder.length)];
        window.location.href = workUrl(slug);
      });
    });
  }

  function initCharacterUniverse() {
    const grid = document.querySelector("[data-character-grid]");
    const board = document.querySelector("[data-relationship-board]");
    const workIndex = document.querySelector("[data-work-index]");
    const filters = Array.from(document.querySelectorAll("[data-character-filter]"));
    const resultCount = document.querySelector("[data-character-count]");

    if (!grid || !board) {
      return;
    }

    let currentFilter = "all";
    let selectedCharacter = null;
    let selectedWork = null;

    grid.innerHTML = characters
      .map((character) => {
        const typeLabel = character.type === "cross" ? "跨作品关联" : "主要关联作品";
        return `
          <article class="character-card" data-character-card="${character.slug}">
            <button class="character-select" type="button" data-character="${character.slug}" aria-pressed="false">
              <span class="character-topline">
                <span class="character-tag">${typeLabel}</span>
                <span class="character-index">${character.works.length} 部作品</span>
              </span>
              <h3>${character.name}</h3>
              <p class="character-identity">${character.identity}</p>
              <p class="character-description">${character.description}</p>
            </button>
            <div class="character-works" aria-label="${character.name}关联作品">
              ${character.works
                .map(
                  (slug) =>
                    `<button class="work-chip" type="button" data-work="${slug}" aria-pressed="false">${works[slug].title}</button>`
                )
                .join("")}
            </div>
          </article>
        `;
      })
      .join("");

    if (workIndex) {
      workIndex.innerHTML = workOrder
        .map(
          (slug) =>
            `<button type="button" data-work="${slug}" aria-pressed="false">${works[slug].title}<span class="visually-hidden">，${works[slug].year}</span></button>`
        )
        .join("");
    }

    const setFilter = (filter) => {
      currentFilter = filter;
      filters.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.characterFilter === filter));
      });
      updateCardStates();
    };

    const updateCardStates = () => {
      let visibleCount = 0;
      const selectedCharacterData = selectedCharacter
        ? characterBySlug(selectedCharacter)
        : null;

      document.querySelectorAll("[data-character-card]").forEach((card) => {
        const slug = card.dataset.characterCard;
        const character = characterBySlug(slug);
        const visible = currentFilter === "all" || character.type === currentFilter;
        card.hidden = !visible;
        if (visible) {
          visibleCount += 1;
        }

        const cardSelect = card.querySelector(".character-select");
        const isSelected = selectedCharacter === slug;
        const sharesWork =
          selectedCharacterData &&
          slug !== selectedCharacter &&
          character.works.some((work) => selectedCharacterData.works.includes(work));
        const inSelectedWork = selectedWork && character.works.includes(selectedWork);

        card.classList.toggle("is-selected", isSelected);
        card.classList.toggle("is-related", Boolean(sharesWork || inSelectedWork));
        if (cardSelect) {
          cardSelect.setAttribute("aria-pressed", String(isSelected));
        }

        card.querySelectorAll("[data-work]").forEach((workButton) => {
          const active = selectedWork === workButton.dataset.work;
          workButton.classList.toggle("is-active", active);
          workButton.setAttribute("aria-pressed", String(active));
        });
      });

      if (workIndex) {
        workIndex.querySelectorAll("[data-work]").forEach((button) => {
          const active = selectedWork === button.dataset.work;
          button.classList.toggle("is-active", active);
          button.setAttribute("aria-pressed", String(active));
        });
      }

      if (resultCount) {
        resultCount.textContent = `当前显示 ${visibleCount} 位角色`;
      }
    };

    const renderCharacterSelection = (slug) => {
      const character = characterBySlug(slug);
      if (!character) {
        return;
      }

      const relatedCharacters = characters.filter(
        (candidate) =>
          candidate.slug !== character.slug &&
          candidate.works.some((work) => character.works.includes(work))
      );

      board.innerHTML = `
        <p class="eyebrow">当前角色</p>
        <h3><a href="${readingUrl(character.works[0], "character")}">${character.name}</a></h3>
        <p>${character.identity}。点选下方作品，可以继续查看同一部作品里的其他角色。</p>
        <div class="relationship-list" aria-label="${character.name}关联作品">
          ${character.works
            .map(
              (workSlug) =>
                `<button type="button" data-work="${workSlug}">${works[workSlug].title}<span>${works[workSlug].year}</span></button>`
            )
            .join("")}
        </div>
        <p class="eyebrow">共享作品的角色</p>
        <div class="relationship-list">
          ${
            relatedCharacters.length
              ? relatedCharacters
                  .map((related) => {
                    const shared = related.works.filter((work) =>
                      character.works.includes(work)
                    );
                    return `<button type="button" data-character="${related.slug}">${related.name}<span>${workTitles(shared)}</span></button>`;
                  })
                  .join("")
              : `<p>目前没有同一本书中的其他角色。</p>`
          }
        </div>
        <a class="button-link" href="${readingUrl(character.works[0], "character")}">沿角色线索阅读</a>
      `;
    };

    const renderWorkSelection = (slug) => {
      const work = workBySlug(slug);
      if (!work) {
        return;
      }

      const relatedCharacters = characters.filter((character) =>
        character.works.includes(slug)
      );

      board.innerHTML = `
        <p class="eyebrow">当前作品</p>
        <h3>${work.title}</h3>
        <p>${work.short}</p>
        <div class="relationship-list" aria-label="${work.title}相关角色">
          ${
            relatedCharacters.length
              ? relatedCharacters
                  .map(
                    (character) =>
                      `<button type="button" data-character="${character.slug}">${character.name}<span>${character.identity}</span></button>`
                  )
                  .join("")
              : `<p>这部作品目前没有收录在角色关系里的重点人物。</p>`
          }
        </div>
        <div class="button-row">
          <a class="button-link" href="${workUrl(slug)}">查看作品页</a>
          <a class="button-link" href="${readingUrl(slug, "publication")}">放进阅读顺序</a>
        </div>
      `;
    };

    const selectCharacter = (slug) => {
      selectedCharacter = slug;
      selectedWork = null;
      updateCardStates();
      renderCharacterSelection(slug);
    };

    const selectWork = (slug) => {
      selectedWork = slug;
      selectedCharacter = null;
      updateCardStates();
      renderWorkSelection(slug);
    };

    filters.forEach((button) => {
      button.addEventListener("click", () => {
        setFilter(button.dataset.characterFilter);
      });
    });

    grid.addEventListener("click", (event) => {
      const characterButton = event.target.closest("[data-character]");
      const workButton = event.target.closest("[data-work]");

      if (characterButton) {
        selectCharacter(characterButton.dataset.character);
      } else if (workButton) {
        selectWork(workButton.dataset.work);
      }
    });

    board.addEventListener("click", (event) => {
      const characterButton = event.target.closest("[data-character]");
      const workButton = event.target.closest("[data-work]");

      if (characterButton) {
        selectCharacter(characterButton.dataset.character);
      } else if (workButton) {
        selectWork(workButton.dataset.work);
      }
    });

    if (workIndex) {
      workIndex.addEventListener("click", (event) => {
        const workButton = event.target.closest("[data-work]");
        if (workButton) {
          selectWork(workButton.dataset.work);
        }
      });
    }

    const params = new URLSearchParams(window.location.search);
    const requestedCharacter = params.get("character");
    const requestedWork = params.get("work");

    if (requestedWork && works[requestedWork]) {
      selectWork(requestedWork);
    } else if (requestedCharacter && characterBySlug(requestedCharacter)) {
      selectCharacter(requestedCharacter);
    } else {
      selectCharacter("narrator");
    }
  }

  function initReadingGuide() {
    const tabs = Array.from(document.querySelectorAll("[data-reading-mode]"));
    const list = document.querySelector("[data-reading-steps]");
    const detail = document.querySelector("[data-reading-detail]");
    const modeDescription = document.querySelector("[data-mode-description]");
    const liveRegion = document.querySelector("[data-reading-live]");

    if (!tabs.length || !list || !detail) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const requestedBook = params.get("book");
    const requestedMode = params.get("mode");
    let activeMode = readingModes[requestedMode] ? requestedMode : "beginner";
    let selectedBook = null;

    if (requestedBook) {
      const modeWithBook = Object.keys(readingModes).find((mode) =>
        readingModes[mode].steps.some((step) => step.book === requestedBook)
      );
      if (modeWithBook) {
        activeMode = modeWithBook;
        selectedBook = requestedBook;
      }
    }

    const findStep = (mode, book) =>
      readingModes[mode].steps.find((step) => step.book === book);

    const renderDetail = (step) => {
      if (!step) {
        return;
      }
      const work = workBySlug(step.book);
      detail.innerHTML = `
        <p class="eyebrow">阅读提示</p>
        <h2>${work.title}</h2>
        <div class="detail-meta">
          <span>${work.year}</span>
          <span>${work.type}</span>
          <span>${work.level}</span>
        </div>
        <p>${work.short}</p>
        <div class="detail-block">
          <h3>这本书为什么放在这里</h3>
          <p>${step.reason}</p>
        </div>
        <div class="detail-block">
          <h3>阅读时留意</h3>
          <p>${work.readingNote}</p>
        </div>
        <div class="detail-block">
          <h3>关联角色</h3>
          ${
            step.roles.length
              ? `<div class="role-links">${roleLinks(step.roles)}</div>`
              : `<p>这一部以叙述、结构与主题见长，角色页暂未单独收录重点人物。</p>`
          }
        </div>
        <div class="detail-block">
          <div class="button-row">
            <a class="detail-link" href="${workUrl(step.book)}">查看作品页</a>
            <a class="text-link" href="characters.html?work=${encodeURIComponent(step.book)}#character-universe">在角色宇宙中查看</a>
          </div>
        </div>
      `;
    };

    const selectStep = (book) => {
      selectedBook = book;
      list.querySelectorAll("[data-reading-step]").forEach((button) => {
        const active = button.dataset.readingStep === book;
        button.setAttribute("aria-pressed", String(active));
      });
      const step = findStep(activeMode, book);
      renderDetail(step);
    };

    const renderSteps = (preferredBook) => {
      const mode = readingModes[activeMode];
      const selected =
        findStep(activeMode, preferredBook) ||
        findStep(activeMode, selectedBook) ||
        mode.steps[0];

      tabs.forEach((tab) => {
        const active = tab.dataset.readingMode === activeMode;
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
      });

      if (modeDescription) {
        modeDescription.textContent = mode.description;
      }

      list.innerHTML = mode.steps
        .map((step, index) => {
          const work = workBySlug(step.book);
          const roleNames = step.roles
            .map((slug) => characterBySlug(slug)?.name)
            .filter(Boolean)
            .join("、");
          return `
            <li class="reading-step">
              <button class="reading-step-button" type="button" data-reading-step="${step.book}" aria-pressed="false">
                <span class="step-number">${String(index + 1).padStart(2, "0")}</span>
                <span class="step-copy">
                  <span class="step-title">${work.title}</span>
                  <span class="step-year">${work.year}</span>
                  <span class="step-reason">${step.reason}</span>
                  <span class="step-roles">${roleNames ? `关联：${roleNames}` : "以主题与结构为主"}</span>
                </span>
                <span class="difficulty">${work.level}</span>
              </button>
            </li>
          `;
        })
        .join("");

      selectStep(selected.book);

      if (liveRegion) {
        liveRegion.textContent = `已切换到${mode.label}，共${mode.steps.length}步。`;
      }
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        activeMode = tab.dataset.readingMode;
        renderSteps(selectedBook);
      });

      tab.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
          return;
        }
        event.preventDefault();
        const currentIndex = tabs.indexOf(tab);
        let nextIndex = currentIndex;

        if (event.key === "ArrowRight") {
          nextIndex = (currentIndex + 1) % tabs.length;
        } else if (event.key === "ArrowLeft") {
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = tabs.length - 1;
        }

        tabs[nextIndex].focus();
        tabs[nextIndex].click();
      });
    });

    list.addEventListener("click", (event) => {
      const button = event.target.closest("[data-reading-step]");
      if (button) {
        selectStep(button.dataset.readingStep);
      }
    });

    renderSteps(selectedBook);
  }

  function initWorkPage() {
    const page = document.querySelector("[data-work-page]");
    if (!page) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const requestedWork = params.get("work");
    const slug = requestedWork && works[requestedWork] ? requestedWork : workOrder[0];
    const work = works[slug];
    const relatedCharacters = characters.filter((character) =>
      character.works.includes(slug)
    );

    const setText = (selector, value) => {
      const node = page.querySelector(selector);
      if (node) {
        node.textContent = value;
      }
    };

    document.title = `${work.title}｜村上春树：作家、作品与角色宇宙`;
    setText("[data-work-title]", work.title);
    setText("[data-work-cover-title]", work.title);
    setText("[data-work-cover-year]", work.year);
    setText("[data-work-year]", work.year);
    setText("[data-work-type]", work.type);
    setText("[data-work-level]", work.level);
    setText("[data-work-short]", work.short);
    setText("[data-work-summary]", work.summary);
    setText("[data-work-reading-note]", work.readingNote);
    setText("[data-work-context]", work.context);

    const roleContainer = page.querySelector("[data-work-roles]");
    if (roleContainer) {
      roleContainer.innerHTML = relatedCharacters.length
        ? relatedCharacters
            .map(
              (character) =>
                `<a href="${characterUrl(character.slug)}">${character.name}</a>`
            )
            .join("")
        : "<p>这部作品暂未收录单独的角色条目。</p>";
    }

    const readingLink = page.querySelector("[data-work-reading-link]");
    if (readingLink) {
      readingLink.href = readingUrl(slug, "publication");
    }

    const characterLink = page.querySelector("[data-work-character-link]");
    if (characterLink) {
      characterLink.href = `characters.html?work=${encodeURIComponent(slug)}#character-universe`;
    }

    const workList = page.querySelector("[data-work-choice-list]");
    if (workList) {
      workList.innerHTML = workOrder
        .map(
          (workSlug) => `
            <a href="${workUrl(workSlug)}" ${workSlug === slug ? 'aria-current="page"' : ""}>
              ${works[workSlug].title}
              <span>${works[workSlug].year}</span>
            </a>
          `
        )
        .join("");
    }
  }

  initNavigation();
  initCurrentYear();
  initRandomWork();
  initCharacterUniverse();
  initReadingGuide();
  initWorkPage();
})();
