if (CookieAssistant === undefined) {
  var CookieAssistant = {};
}

if (typeof CCSE == "undefined") {
  Game.LoadMod(
      "https://klattmose.github.io/CookieClicker/SteamMods/CCSE/main.js"
  );
}

CookieAssistant.name = "Cookie Assistant";
CookieAssistant.version = "0.8.0";
CookieAssistant.GameVersion = "2.053";

CookieAssistant.launch = function () {
  CookieAssistant.localeId = locId;

  CookieAssistant.i18n = {
      JA: {
          // modes
          spell_0: "最低限のMP",
          spell_1: "MPがフル",
          spell_buff_0: "バフが1つ",
          spell_buff_1: "バフが2つ以上",
          upgrades_0: "全てのアップグレード(研究を含む)",
          upgrades_1: "研究を除く全てのアップグレード",
          upgrades_2: "ババアポカリプスが起きない全てのアップグレード",
          buildings_0: "10個単位で購入する",
          buildings_1: "50個単位で購入する",
          buildings_2: "100個単位で購入する",
          golden_0: "怒りのクッキーもクリックする",
          golden_1: "怒りのクッキーは無視する",
          sell_buildings_0: "バフが1つ",
          sell_buildings_1: "バフが2つ以上",
          sell_buildings_2: "クリック系のバフ",
          sell_buildings_3: "クリック系を含めて2つ以上のバフ",
          sell_buildings_4: "自動詠唱の後",
          sell_buildings_5: "常に",
          sell_buildings_6: "バフが3つ以上",
          sell_buildings_after_0: "売った分だけ買い戻す",
          sell_buildings_after_1: "詠唱してから買い戻す",
          sell_buildings_after_2: "何もしない",
          wrinkler_0: "全てのタイプ",
          wrinkler_1: "ピカピカのシワシワ虫を除く",
          bigCookie_0: "常に",
          bigCookie_1: "クリック系バフ中",
          bigCookie_2: "バフが1つ",
          bigCookie_3: "バフが2つ以上",
          goldenSwitch_enable_0: "バフが1つ",
          goldenSwitch_enable_1: "バフが2つ以上",
          goldenSwitch_enable_2: "クリック系のバフ",
          goldenSwitch_enable_3: "クリック系を含めて2つ以上のバフ",
          goldenSwitch_disable_0: "バフがない",
          goldenSwitch_disable_1: "クリックバフが無いとき",
          season_0: "なし",
          season_1: "クリスマス",
          season_2: "イースター",
          season_3: "ハロウィン",
          season_4: "バレンタイン",

          // notify
          notify_0: "CookieAssistant が起動しました！",
          notify_1: "グリモア解放前のため、呪文の発動に失敗しました。",
          notify_2: "クッキーが足りず建物を買い戻せませんでした。",
          notify_3: "建物が少ないため売却に失敗しました。",
          notify_4: "チョコの卵の購入に失敗しました。",
          notify_5: "最新版です",
          notify_6: "アップデートがあります",
          notify_7: "ここからダウンロードしてください。",

          // I just know a little Japanese. If you find a mistake, please fix it.

          // menu
          menu_header: "基本アシスト",
          menu_header_1: "高度なアシスト",
          menu_header_2: "特別なアシスト",
          menu_header_3: "その他",
          menu_autoClickBigCookie_play_SE: "クリック音を再生",
          menu_autoClickBigCookie_mute_SE: "クリック音をミュート",

          // menu words
          autoClick: "自動クリック",
          autoBuy: "自動購入",
          autoHarvest: "自動収穫",
          autoSpellCast: "自動呪文詠唱",
          autoSwitchSeasons: "シーズンの自動切り替え",
          autoSetSpirits: "精霊の自動設定",
          autoTrainDragon: "ドラゴンの自動育成",
          autoSellBuildings: "建物の自動売却",
          autoHireBrokers: "ブローカーの自動雇用",
          autoToggle: "自動切り替え",
          bigCookie: "大クッキー",
          fortuneNews: "フォーチュンニュース",
          interval: "間隔",
          mode: "モード",
          aura: "オーラ",
          diamond: "ダイヤモンド",
          ruby: "ルビー",
          jade: "ジェイド",
          enableWhen: "有効条件",
          disableWhen: "無効条件",
          showAllIntervalSettings: "すべての間隔設定を表示",
          hideIntervalSettings: "間隔設定を隠す",
          restoreDefault: "デフォルトに戻す",
          checkUpdate: "更新を確認",
          getMoreInfo: "詳細情報を取得",
          sell: "売る",
          addConfig: "設定を追加",
          removeLast: "最後を削除",

          // menu texts
          menu_text_0:
              "※この機能はアップグレードの生贄用めん棒も自動で購入するようになります。",
          menu_text_1: "完了後の切り替え先",
          menu_text_2:
              "アップグレードが残っているシーズンに自動的に切り替えます。",
          menu_text_3:
              "⚠️パンテオンがロックされています。アンロックするまでこの機能は使えません。",
          menu_text_4: "発動後にやること",
          menu_text_5:
              "⚠️ゴジャモックがセットされていないため、有効化しても恩恵が無い可能性があります。",
      },
      EN: {
          // modes
          spell_0: "Minimum MP to cast",
          spell_1: "MP is full",
          spell_buff_0: "Have one buff",
          spell_buff_1: "Have two or more buffs",
          upgrades_0: "All Upgrades (includes Researches)",
          upgrades_1: "All Upgrades except Researches",
          upgrades_2: `All Upgrades that don't cause "Grandmapocalypse"`,
          buildings_0: "Buy every 10 pieces",
          buildings_1: "Buy every 50 pieces",
          buildings_2: "Buy every 100 pieces",
          golden_0: "Golden Cookie including Wrath Cookie",
          golden_1: "Ignore Wrath Cookie",
          sell_buildings_0: "Have one buff",
          sell_buildings_1: "Have two or more buffs",
          sell_buildings_2: "Have click buff",
          sell_buildings_3: "Have two or more buffs including click buff",
          sell_buildings_4: "After auto-spellcast",
          sell_buildings_5: "Always",
          sell_buildings_6: "Have three or more buffs",
          sell_buildings_after_0: "Buy back the amount sold",
          sell_buildings_after_1: "Spellcast if can, and buy back",
          sell_buildings_after_2: "Do nothing",
          wrinkler_0: "All Type",
          wrinkler_1: "Except Shiny Wrinkler",
          bigCookie_0: "Always",
          bigCookie_1: "Have any click buff",
          bigCookie_2: "Have one buff",
          bigCookie_3: "Have two or more buffs",
          goldenSwitch_enable_0: "Have one buff",
          goldenSwitch_enable_1: "Have two or more buffs",
          goldenSwitch_enable_2: "Have click buff",
          goldenSwitch_enable_3:
              "Have two or more buffs including click buff",
          goldenSwitch_disable_0: "No buffs",
          goldenSwitch_disable_1: "No click buffs",
          season_0: "None",
          season_1: "Christmas",
          season_2: "Easter",
          season_3: "Halloween",
          season_4: "Valentines",

          // notify
          notify_0: "CookieAssistant has been launched!",
          notify_1:
              "You have not unlocked the Grimoire yet, so failed to spellcast.",
          notify_2: "Not have enough cookies to buy back",
          notify_3: "Could not sell buildings due to not enough.",
          notify_4: "Failed to buy Chocolate Egg.",
          notify_5: "This is the latest version",
          notify_6: "There is an update",
          notify_7: "Download here",

          // menu
          menu_header: "Basic Assits",
          menu_header_1: "Advanced Assits",
          menu_header_2: "Special Assits",
          menu_header_3: "Misc",
          menu_autoClickBigCookie_play_SE: "Play Click SE",
          menu_autoClickBigCookie_mute_SE: "Mute Click SE",

          // menu words
          autoClick: "AutoClick",
          autoBuy: "AutoBuy",
          autoHarvest: "AutoHarvest",
          autoSpellCast: "AutoSpellCast",
          autoSwitchSeasons: "AutoSwitchSeasons",
          autoSetSpirits: "AutoSet Spirits",
          autoTrainDragon: "AutoTrain Dragon",
          autoSellBuildings: "AutoSell Buildings",
          autoHireBrokers: "AutoHire Brokers",
          autoToggle: "AutoToggle",
          bigCookie: "BigCookie",
          fortuneNews: "FortuneNews",
          interval: "Interval",
          mode: "Mode",
          aura: "Aura",
          diamond: "Diamond",
          ruby: "Ruby",
          jade: "Jade",
          enableWhen: "Enable When",
          disableWhen: "Disable When",
          showAllIntervalSettings: "Show All Interval Settings",
          hideIntervalSettings: "Hide Interval Settings",
          restoreDefault: "Restore Default",
          checkUpdate: "Check Update",
          getMoreInfo: "Get More Information",
          sell: "Sell",
          addConfig: "Add Config",
          removeLast: "Remove Last",

          // menu texts
          menu_text_0:
              'This feature will also automatically purchase "Sacrificial rolling pins".',
          menu_text_1: "Switch to after complete",
          menu_text_2:
              "Automatically switch to seasons in which the upgrade is still remained.",
          menu_text_3:
              "⚠️You have not unlocked the Pantheon yet. This feature will not be available until it is unlocked.",
          menu_text_4: "Do After Activated",
          menu_text_5:
              "⚠️Godzamok is not set, so there may be no benefit from enabling this.",
      },
      "ZH-CN": {
          // modes
          spell_0: "施法所需最低魔能",
          spell_1: "魔能充满",
          spell_buff_0: "拥有一个增益效果",
          spell_buff_1: "拥有两个或更多增益效果",
          upgrades_0: "所有升级（包括研究）",
          upgrades_1: "所有升级（不包括研究）",
          upgrades_2: "不会引发“老奶奶天启”的所有升级",
          buildings_0: "每次购买10个",
          buildings_1: "每次购买50个",
          buildings_2: "每次购买100个",
          golden_0: "点击愤怒饼干",
          golden_1: "忽略愤怒饼干",
          sell_buildings_0: "拥有一个增益效果",
          sell_buildings_1: "拥有两个或更多增益效果",
          sell_buildings_2: "拥有点击增益效果",
          sell_buildings_3: "拥有两个或更多增益（包括点击增益效果）",
          sell_buildings_4: "自动施法后",
          sell_buildings_5: "总是",
          sell_buildings_6: "拥有三个或更多增益效果",
          sell_buildings_after_0: "卖出后买回相同数量",
          sell_buildings_after_1: "施法后买回",
          sell_buildings_after_2: "什么都不做",
          wrinkler_0: "所有类型",
          wrinkler_1: "除了闪光饼干虫",
          bigCookie_0: "总是",
          bigCookie_1: "拥有任何点击增益状态",
          bigCookie_2: "拥有一个增益状态",
          bigCookie_3: "拥有两个或更多增益状态",
          goldenSwitch_enable_0: "拥有一个增益状态",
          goldenSwitch_enable_1: "拥有两个或更多增益状态",
          goldenSwitch_enable_2: "拥有点击增益状态",
          goldenSwitch_enable_3: "拥有两个或更多增益状态（包括点击增益）",
          goldenSwitch_disable_0: "没有增益状态",
          goldenSwitch_disable_1: "没有点击增益",
          season_0: "无",
          season_1: "圣诞节",
          season_2: "复活节",
          season_3: "万圣节",
          season_4: "情人节",

          // notify
          notify_0: "CookieAssistant 已启动！",
          notify_1: "尚未解锁魔法书，施法失败。",
          notify_2: "无法买回建筑，饼干不足。",
          notify_3: "建筑数量不足，无法出售。",
          notify_4: "购买巧克力蛋失败。",
          notify_5: "这是最新版本。",
          notify_6: "有可用更新。",
          notify_7: "点击此处下载。",

          // menu
          menu_header: "基本辅助",
          menu_header_1: "高级辅助",
          menu_header_2: "特殊辅助",
          menu_header_3: "其他",
          menu_autoClickBigCookie_play_SE: "播放点击音效",
          menu_autoClickBigCookie_mute_SE: "静音点击音效",

          // menu words
          autoClick: "自动点击",
          autoBuy: "自动购买",
          autoHarvest: "自动收获",
          autoSpellCast: "自动施法",
          autoSwitchSeasons: "自动切换季节",
          autoSetSpirits: "自动设置神庙",
          autoTrainDragon: "自动训练龙",
          autoSellBuildings: "自动出售建筑",
          autoHireBrokers: "自动雇佣经纪人",
          autoToggle: "自动切换",
          bigCookie: "大饼干",
          fortuneNews: "幸运新闻",
          interval: "间隔",
          mode: "模式",
          aura: "光环",
          diamond: "钻石",
          ruby: "红宝石",
          jade: "玉石",
          enableWhen: "启用条件",
          disableWhen: "禁用条件",
          showAllIntervalSettings: "显示所有间隔设置",
          hideIntervalSettings: "隐藏间隔设置",
          restoreDefault: "恢复默认",
          checkUpdate: "检查更新",
          getMoreInfo: "获取更多信息",
          sell: "出售",
          addConfig: "添加配置",
          removeLast: "移除最后一个",

          // menu texts
          menu_text_0: "此功能还会自动购买“牺牲擀面杖”。",
          menu_text_1: "完成后切换到",
          menu_text_2: "自动切换到仍有升级剩余的季节。",
          menu_text_3: "⚠️尚未解锁万神殿。解锁后此功能才可用。",
          menu_text_4: "激活后执行的操作",
          menu_text_5: "⚠️未设置哥斯马克（毁灭之灵），启用可能没有收益。",
      },
  };

  if (CookieAssistant.i18n[CookieAssistant.localeId] === undefined) {
      CookieAssistant.i18n[CookieAssistant.localeId] =
          CookieAssistant.i18n["EN"];
  }

  CookieAssistant.texts = CookieAssistant.i18n[CookieAssistant.localeId];

  CookieAssistant.defaultConfig = function () {
      var conf = {
          //各機能の有効/無効のフラグ
          flags: {
              autoClickBigCookie: 0,
              autoClickGoldenCookie: 0,
              autoClickReindeer: 0,
              autoClickFortuneNews: 0,
              autoClickWrinklers: 0,
              autoSpellonBuff: 0,
              autoBuyElderPledge: 0,
              autoBuyUpgrades: 0,
              autoBuyBuildings: 0,
              autoSwitchSeason: 0,
              autoTrainDragon: 0,
              autoSetSpirits: 0,
              autoHarvestSugarlump: 0,
              autoSellBuilding: 0,
              autoToggleGoldenSwitch: 0,
              autoChocolateEgg: 0,
              autoHireBrokers: 0,
          },
          //各機能の実行間隔
          intervals: {
              autoClickBigCookie: 1,
              autoClickGoldenCookie: 1,
              autoClickReindeer: 100,
              autoClickFortuneNews: 100,
              autoClickWrinklers: 60000,
              autoSpellonBuff: 1000,
              autoBuyElderPledge: 1000,
              autoBuyUpgrades: 1000,
              autoBuyBuildings: 1000,
              autoSwitchSeason: 1000,
              autoTrainDragon: 1000,
              autoSetSpirits: 10000,
              autoHarvestSugarlump: 60000,
              autoSellBuilding: 500,
              autoToggleGoldenSwitch: 500,
              autoHireBrokers: 1000,
          },
          //各機能の特殊設定　CheckConfigでの限界があるのでこれ以上深くしない
          particular: {
              dragon: {
                  aura1: 0,
                  aura2: 0,
              },
              spell: {
                  mode: 0, //mp condition
                  mode2: 0, //buff count condition
              },
              upgrades: {
                  mode: 0,
              },
              buildings: {
                  mode: 0,
              },
              spirits: {
                  slot1: 0,
                  slot2: 1,
                  slot3: 2,
              },
              golden: {
                  mode: 0,
              },
              bigCookie: {
                  isMute: 1,
              },
              sell: {
                  isAfterSell: [], //売却後かどうかのフラグ保持(作動中にゲームを落としても動作するように)
                  target: [],
                  amount: [],
                  activate_mode: [],
                  after_mode: [],
              },
              wrinkler: {
                  mode: 0,
              },
              bigCookie: {
                  mode: 0,
              },
              goldenSwitch: {
                  enable: 0,
                  disable: 0,
              },
              season: {
                  afterComplete: 0, //シーズン全部終わった後どうするか
              },
          },
      };

      return conf;
  };

  CookieAssistant.init = function () {
      CookieAssistant.isLoaded = 1;
      CookieAssistant.restoreDefaultConfig(1);
      CookieAssistant.ReplaceGameMenu();

      //大クッキーのSEミュート
      CCSE.SpliceCodeIntoFunction(
          "Game.playCookieClickSound",
          2,
          "if (CookieAssistant.config.particular.bigCookie.isMute) { return; }"
      );

      //建物売買のSEミュート
      for (const objectName of Object.keys(Game.Objects)) {
          CCSE.ReplaceCodeIntoFunction(
              "Game.Objects['" + objectName + "'].sell",
              "PlaySound('snd/sell'+choose([1,2,3,4])+'.mp3',0.75);",
              "if (!CookieAssistant.config.flags.autoSellBuilding) {PlaySound('snd/sell'+choose([1,2,3,4])+'.mp3',0.75);}",
              0
          );
          CCSE.ReplaceCodeIntoFunction(
              "Game.Objects['" + objectName + "'].buy",
              "PlaySound('snd/buy'+choose([1,2,3,4])+'.mp3',0.75);",
              "if (!CookieAssistant.config.flags.autoSellBuilding) {PlaySound('snd/buy'+choose([1,2,3,4])+'.mp3',0.75);}",
              0
          );
      }

      //ChocolateEgg自動購入
      CCSE.SpliceCodeIntoFunction(
          "Game.Ascend",
          5,
          "CookieAssistant.OnPreAscend();"
      );

      CookieAssistant.showAllIntervals = false;
      CookieAssistant.isAfterSpellcast = false;

      CookieAssistant.intervalHandles = {
          autoClickBigCookie: null,
          autoClickGoldenCookie: null,
          autoClickReindeer: null,
          autoClickFortuneNews: null,
          autoClickWrinklers: null,
          autoSpellonBuff: null,
          autoBuyElderPledge: null,
          autoBuyUpgrades: null,
          autoBuyBuildings: null,
          autoSwitchSeason: null,
          autoTrainDragon: null,
          autoSetSpirits: null,
          autoHarvestSugarlump: null,
          autoSellBuilding: null,
          autoToggleGoldenSwitch: null,
      };

      CookieAssistant.modes = {
          spell: {
              0: {
                  desc: CookieAssistant.texts.spell_0,
              },
              1: {
                  desc: CookieAssistant.texts.spell_1,
              },
          },
          spell_buff: {
              0: {
                  count: 1,
                  desc: CookieAssistant.texts.spell_buff_0,
              },
              1: {
                  count: 2,
                  desc: CookieAssistant.texts.spell_buff_1,
              },
          },
          upgrades: {
              0: {
                  desc: CookieAssistant.texts.upgrades_0,
              },
              1: {
                  desc: CookieAssistant.texts.upgrades_1,
              },
              2: {
                  desc: CookieAssistant.texts.upgrades_2,
              },
          },
          buildings: {
              0: {
                  amount: 10,
                  desc: CookieAssistant.texts.buildings_0,
              },
              1: {
                  amount: 50,
                  desc: CookieAssistant.texts.buildings_1,
              },
              2: {
                  amount: 100,
                  desc: CookieAssistant.texts.buildings_2,
              },
          },
          golden: {
              0: {
                  desc: CookieAssistant.texts.golden_0,
              },
              1: {
                  desc: CookieAssistant.texts.golden_1,
              },
          },
          //建物自動売却の発動条件
          sell_buildings: {
              0: {
                  desc: CookieAssistant.texts.sell_buildings_0,
              },
              1: {
                  desc: CookieAssistant.texts.sell_buildings_1,
              },
              2: {
                  desc: CookieAssistant.texts.sell_buildings_2,
              },
              3: {
                  desc: CookieAssistant.texts.sell_buildings_3,
              },
              4: {
                  desc: CookieAssistant.texts.sell_buildings_4,
              },
              5: {
                  desc: CookieAssistant.texts.sell_buildings_5,
              },
              6: {
                  desc: CookieAssistant.texts.sell_buildings_6,
              },
          },
          //建物自動売却を行った後の動作
          sell_buildings_after: {
              0: {
                  desc: CookieAssistant.texts.sell_buildings_after_0,
              },
              1: {
                  desc: CookieAssistant.texts.sell_buildings_after_1,
              },
              2: {
                  desc: CookieAssistant.texts.sell_buildings_after_2,
              },
          },
          wrinkler: {
              0: {
                  desc: CookieAssistant.texts.wrinkler_0,
              },
              1: {
                  desc: CookieAssistant.texts.wrinkler_1,
              },
          },
          bigCookie: {
              0: {
                  desc: CookieAssistant.texts.bigCookie_0,
              },
              1: {
                  desc: CookieAssistant.texts.bigCookie_1,
              },
              2: {
                  desc: CookieAssistant.texts.bigCookie_2,
              },
              3: {
                  desc: CookieAssistant.texts.bigCookie_3,
              },
          },
          goldenSwitch_enable: {
              0: {
                  desc: CookieAssistant.texts.goldenSwitch_enable_0,
              },
              1: {
                  desc: CookieAssistant.texts.goldenSwitch_enable_1,
              },
              2: {
                  desc: CookieAssistant.texts.goldenSwitch_enable_2,
              },
              3: {
                  desc: CookieAssistant.texts.goldenSwitch_enable_3,
              },
          },
          goldenSwitch_disable: {
              0: {
                  desc: CookieAssistant.texts.goldenSwitch_disable_0,
              },
              1: {
                  desc: CookieAssistant.texts.goldenSwitch_disable_1,
              },
          },
          season: {
              0: {
                  desc: CookieAssistant.texts.season_0,
                  season: "",
              },
              1: {
                  desc: CookieAssistant.texts.season_1,
                  season: "christmas",
              },
              2: {
                  desc: CookieAssistant.texts.season_2,
                  season: "easter",
              },
              3: {
                  desc: CookieAssistant.texts.season_3,
                  season: "halloween",
              },
              4: {
                  desc: CookieAssistant.texts.season_4,
                  season: "valentines",
              },
          },
      };

      CookieAssistant.actions = {
          autoClickBigCookie: () => {
              CookieAssistant.intervalHandles.autoClickBigCookie =
                  setInterval(() => {
                      //BGMがおかしくなるので最初の1秒は実行しない
                      if (Game.T < Game.fps) {
                          return;
                      }
                      //転生中は動作を止める
                      if (Game.OnAscend) {
                          return;
                      }

                      let buffCount = 0;
                      let cliclBuffCount = 0;
                      for (let i in Game.buffs) {
                          switch (Game.buffs[i].type.name) {
                              case "dragonflight":
                              case "click frenzy":
                                  cliclBuffCount++;
                                  buffCount++;
                                  break;
                              case "dragon harvest":
                              case "frenzy":
                              case "blood frenzy": //elder frenzy (x666)
                              case "sugar frenzy":
                              case "building buff":
                              case "devastation":
                                  buffCount++;
                                  break;
                              case "cursed finger":
                              default:
                                  break;
                          }
                      }
                      let mode =
                          CookieAssistant.config.particular.bigCookie.mode;
                      let isMode0 = mode == 0;
                      let isMode1 = mode == 1 && cliclBuffCount >= 1;
                      let isMode2 = mode == 2 && buffCount >= 1;
                      let isMode3 = mode == 3 && buffCount >= 2;
                      if (isMode0 || isMode1 || isMode2 || isMode3) {
                          bigCookie.click();
                          Game.lastClick = 0;
                      }
                  }, CookieAssistant.config.intervals.autoClickBigCookie);
          },
          autoClickGoldenCookie: () => {
              CookieAssistant.intervalHandles.autoClickGoldenCookie =
                  setInterval(() => {
                      Game.shimmers
                          .filter((shimmer) => shimmer.type == "golden")
                          .filter(
                              (shimmer) =>
                                  !(
                                      CookieAssistant.config.particular.golden
                                          .mode == 1 && shimmer.wrath != 0
                                  )
                          )
                          .forEach((shimmer) => shimmer.pop());
                  }, CookieAssistant.config.intervals.autoClickGoldenCookie);
          },
          autoClickReindeer: () => {
              CookieAssistant.intervalHandles.autoClickReindeer = setInterval(
                  () => {
                      Game.shimmers
                          .filter((shimmer) => shimmer.type == "reindeer")
                          .forEach((shimmer) => shimmer.pop());
                  },
                  CookieAssistant.config.intervals.autoClickReindeer
              );
          },
          autoClickFortuneNews: () => {
              CookieAssistant.intervalHandles.autoClickFortuneNews =
                  setInterval(() => {
                      if (
                          Game.TickerEffect &&
                          Game.TickerEffect.type == "fortune"
                      ) {
                          Game.tickerL.click();
                      }
                  }, CookieAssistant.config.intervals.autoClickFortuneNews);
          },
          autoSpellonBuff: () => {
              CookieAssistant.intervalHandles.autoSpellonBuff = setInterval(
                  () => {
                      var buffCount = 0;
                      for (var i in Game.buffs) {
                          switch (Game.buffs[i].type.name) {
                              case "frenzy":
                              case "blood frenzy": //elder frenzy (x666)
                              case "dragon harvest":
                              case "click frenzy":
                              case "dragonflight":
                              case "sugar frenzy":
                              case "building buff":
                                  buffCount++;
                                  break;
                              case "cursed finger": //ポジティブなバフだが、バフ同士によって相性が悪いため無視する
                              case "devastation": //DevastationはMOD側で起こしたいのでユーザーが自発的に起こしたものについては無視する
                              default:
                                  break;
                          }
                      }
                      var grimoire = Game.ObjectsById[7].minigame;
                      var spell = grimoire.spells["hand of fate"];
                      var cost = 0;
                      switch (CookieAssistant.config.particular.spell.mode) {
                          case 0: //必要最低限のMP
                              cost = Math.floor(
                                  spell.costMin +
                                      grimoire.magicM * spell.costPercent
                              );
                              break;
                          case 1: //MP完全回復
                          default:
                              cost = grimoire.magicM;
                              break;
                      }
                      if (
                          cost <= Math.floor(grimoire.magic) &&
                          buffCount >=
                              CookieAssistant.modes.spell_buff[
                                  CookieAssistant.config.particular.spell
                                      .mode2
                              ].count
                      ) {
                          grimoire.castSpell(spell);
                          CookieAssistant.isAfterSpellcast = true;
                          setTimeout(() => {
                              if (CookieAssistant.isAfterSpellcast) {
                                  CookieAssistant.isAfterSpellcast = false;
                              }
                          }, 3000);
                      }
                  },
                  CookieAssistant.config.intervals.autoSpellonBuff
              );
          },
          autoClickWrinklers: () => {
              CookieAssistant.intervalHandles.autoClickWrinklers =
                  setInterval(() => {
                      Game.wrinklers.forEach((wrinkler) => {
                          if (wrinkler.close == 1) {
                              if (
                                  CookieAssistant.config.particular.wrinkler
                                      .mode == 1 &&
                                  wrinkler.type == 1
                              ) {
                                  return;
                              }
                              wrinkler.hp = 0;
                          }
                      });
                  }, CookieAssistant.config.intervals.autoClickWrinklers);
          },
          autoBuyElderPledge: () => {
              CookieAssistant.intervalHandles.autoBuyElderPledge =
                  setInterval(() => {
                      if (
                          Game.UpgradesInStore.indexOf(
                              Game.Upgrades["Elder Pledge"]
                          ) != -1
                      ) {
                          Game.Upgrades["Elder Pledge"].buy();
                      }
                      //ElderPledgeを自動購入してるんだったら生贄用めん棒も買ってほしいはずなのでこっちでも見る
                      if (
                          Game.UpgradesInStore.indexOf(
                              Game.Upgrades["Sacrificial rolling pins"]
                          ) != -1
                      ) {
                          Game.Upgrades["Sacrificial rolling pins"].buy(1);
                      }
                  }, CookieAssistant.config.intervals.autoBuyElderPledge);
          },
          autoBuyUpgrades: () => {
              CookieAssistant.intervalHandles.autoBuyUpgrades = setInterval(
                  () => {
                      for (var i in Game.UpgradesInStore) {
                          var upgrade = Game.UpgradesInStore[i];
                          //保管庫に入っているアップグレードは無視する
                          if (upgrade.isVaulted()) {
                              continue;
                          }
                          //スイッチ類を除いて購入(ElderPledgeもToggle扱いなので考えなくてよい)
                          //生贄用めん棒はこっちでも勝手に買われる
                          if (upgrade.pool != "toggle") {
                              //研究を除くモードの時
                              if (
                                  CookieAssistant.config.particular.upgrades
                                      .mode == 1 &&
                                  upgrade.pool == "tech"
                              ) {
                                  continue;
                              }
                              //ババアポカリプスに入りたくないモードの時
                              if (
                                  CookieAssistant.config.particular.upgrades
                                      .mode == 2 &&
                                  upgrade.name == "One mind"
                              ) {
                                  continue;
                              }
                              //チョコの卵モードがONの時
                              if (
                                  CookieAssistant.config.flags
                                      .autoChocolateEgg &&
                                  upgrade.name == "Chocolate egg"
                              ) {
                                  continue;
                              }
                              upgrade.buy(1);
                          }
                      }
                  },
                  CookieAssistant.config.intervals.autoBuyUpgrades
              );
          },
          autoSwitchSeason: () => {
              CookieAssistant.intervalHandles.autoSwitchSeason = setInterval(
                  () => {
                      var winterSantaRate =
                          Game.GetHowManySantaDrops() /
                          Game.santaDrops.length;
                      var winterReindeerRate =
                          Game.GetHowManyReindeerDrops() /
                          Game.reindeerDrops.length;
                      var halloweenRate =
                          Game.GetHowManyHalloweenDrops() /
                          Game.halloweenDrops.length;
                      var easterRate =
                          Game.GetHowManyEggs() / Game.easterEggs.length;
                      var valentinesRate =
                          Game.GetHowManyHeartDrops() /
                          Game.heartDrops.length;

                      if (Game.season == "") {
                          CookieAssistant.SwitchNextSeason();
                      } else if (Game.season == "valentines") {
                          if (valentinesRate >= 1) {
                              CookieAssistant.SwitchNextSeason();
                          }
                      } else if (Game.season == "christmas") {
                          if (winterSantaRate < 1 || Game.santaLevel < 14) {
                              Game.specialTab = "santa";
                              Game.ToggleSpecialMenu(true);
                              Game.UpgradeSanta();
                              Game.ToggleSpecialMenu(false);
                          }
                          if (
                              winterReindeerRate >= 1 &&
                              winterSantaRate >= 1 &&
                              Game.santaLevel >= 14
                          ) {
                              CookieAssistant.SwitchNextSeason();
                          }
                      } else if (Game.season == "easter") {
                          if (
                              easterRate >= 1 ||
                              (Game.GetHowManyEggs() ==
                                  Game.easterEggs.length - 1 &&
                                  !Game.Has("Chocolate egg"))
                          ) {
                              CookieAssistant.SwitchNextSeason();
                          }
                      } else if (Game.season == "halloween") {
                          //エルダー宣誓の自動購入がONのときは強制OFFにする
                          if (
                              CookieAssistant.config.flags
                                  .autoBuyElderPledge == 1
                          ) {
                              CookieAssistant.config.flags.autoBuyElderPledge = 0;
                              clearInterval(
                                  CookieAssistant.intervalHandles
                                      .autoBuyElderPledge
                              );
                              CookieAssistant.intervalHandles.autoBuyElderPledge =
                                  null;
                          }
                          //エルダー宣誓の時間が残っている場合はエルダー誓約を発動する(エルダー宣誓の時間リセットのため)
                          if (
                              Game.pledgeT >= 1 &&
                              Game.UpgradesInStore.indexOf(
                                  Game.Upgrades["Elder Covenant"]
                              ) != -1
                          ) {
                              Game.Upgrades["Elder Covenant"].buy();
                          }
                          //エルダー誓約の撤回が出来る場合はする（Wrinklerをスポーンさせる必要があるため）
                          if (
                              Game.UpgradesInStore.indexOf(
                                  Game.Upgrades["Revoke Elder Covenant"]
                              ) != -1
                          ) {
                              Game.Upgrades["Revoke Elder Covenant"].buy();
                          }
                          if (halloweenRate >= 1) {
                              //エルダー誓約を購入してババアポカリプスを終了させてから次に行く
                              Game.Upgrades["Elder Covenant"].buy(1);
                              CookieAssistant.SwitchNextSeason();
                          }
                      }
                  },
                  CookieAssistant.config.intervals.autoSwitchSeason
              );
          },
          autoBuyBuildings: () => {
              CookieAssistant.intervalHandles.autoBuyBuildings = setInterval(
                  () => {
                      if (Game.AscendTimer > 0 || Game.OnAscend) {
                          return;
                      }
                      var amountPerPurchase =
                          CookieAssistant.modes.buildings[
                              CookieAssistant.config.particular.buildings.mode
                          ].amount;
                      for (const objectName in Game.Objects) {
                          var amount =
                              Game.Objects[objectName].amount %
                                  amountPerPurchase ==
                              0
                                  ? amountPerPurchase
                                  : amountPerPurchase -
                                    (Game.Objects[objectName].amount %
                                        amountPerPurchase);
                          var isMaxDragon =
                              Game.dragonLevel >=
                              Game.dragonLevels.length - 1;
                          //ドラゴンの自動育成がONの場合は建物の自動購入を制限する
                          if (
                              !isMaxDragon &&
                              CookieAssistant.config.flags.autoTrainDragon &&
                              Game.Objects[objectName].amount >=
                                  350 - amountPerPurchase
                          ) {
                              amount = 350 - Game.Objects[objectName].amount;
                              if (amount <= 0) {
                                  continue;
                              }
                          }
                          if (
                              Game.cookies >=
                              Game.Objects[objectName].getSumPrice(amount)
                          ) {
                              //売却モードだったら強制的に購入モードにする
                              if (Game.buyMode < 0) {
                                  Game.buyMode = 1;
                              }
                              Game.Objects[objectName].buy(amount);
                          }
                      }
                  },
                  CookieAssistant.config.intervals.autoBuyBuildings
              );
          },
          autoTrainDragon: () => {
              CookieAssistant.intervalHandles.autoTrainDragon = setInterval(
                  () => {
                      Math.seedrandom(Game.seed + "/dragonTime");
                      let drops = [
                          "Dragon scale",
                          "Dragon claw",
                          "Dragon fang",
                          "Dragon teddy bear",
                      ];
                      drops = shuffle(drops);
                      Math.seedrandom();
                      let currentDrop =
                          drops[
                              Math.floor(
                                  (new Date().getMinutes() / 60) *
                                      drops.length
                              )
                          ];

                      let canTrain =
                          Game.dragonLevel < Game.dragonLevels.length - 1 &&
                          Game.dragonLevels[Game.dragonLevel].cost();
                      let canPet =
                          Game.dragonLevel >= 8 &&
                          Game.Has("Pet the dragon") &&
                          !Game.Has(currentDrop) &&
                          !Game.HasUnlocked(currentDrop);

                      if (canTrain || canPet) {
                          Game.specialTab = "dragon";
                          Game.ToggleSpecialMenu(true);
                          //育成
                          if (canTrain) {
                              Game.UpgradeDragon();
                              if (
                                  Game.dragonLevel ==
                                  Game.dragonLevels.length - 1
                              ) {
                                  Game.SetDragonAura(
                                      CookieAssistant.config.particular.dragon
                                          .aura1,
                                      0
                                  );
                                  Game.ConfirmPrompt();
                                  Game.SetDragonAura(
                                      CookieAssistant.config.particular.dragon
                                          .aura2,
                                      1
                                  );
                                  Game.ConfirmPrompt();
                              }
                          }
                          //なでる
                          if (canPet) {
                              Game.ClickSpecialPic();
                          }
                          Game.ToggleSpecialMenu(false);
                      }
                  },
                  CookieAssistant.config.intervals.autoTrainDragon
              );
          },
          autoSetSpirits: () => {
              CookieAssistant.intervalHandles.autoSetSpirits = setInterval(
                  () => {
                      if (
                          Game.Objects["Temple"].minigame == undefined ||
                          !Game.Objects["Temple"].minigameLoaded
                      ) {
                          return;
                      }
                      var pantheon = Game.Objects["Temple"].minigame;
                      if (pantheon.slot[0] == -1) {
                          pantheon.dragGod(
                              pantheon.godsById[
                                  CookieAssistant.config.particular.spirits
                                      .slot1
                              ]
                          );
                          pantheon.hoverSlot(0);
                          pantheon.dropGod();
                          pantheon.hoverSlot(-1);
                      }
                      if (pantheon.slot[1] == -1) {
                          pantheon.dragGod(
                              pantheon.godsById[
                                  CookieAssistant.config.particular.spirits
                                      .slot2
                              ]
                          );
                          pantheon.hoverSlot(1);
                          pantheon.dropGod();
                          pantheon.hoverSlot(-1);
                      }
                      if (pantheon.slot[2] == -1) {
                          pantheon.dragGod(
                              pantheon.godsById[
                                  CookieAssistant.config.particular.spirits
                                      .slot3
                              ]
                          );
                          pantheon.hoverSlot(2);
                          pantheon.dropGod();
                          pantheon.hoverSlot(-1);
                      }
                  },
                  CookieAssistant.config.intervals.autoSetSpirits
              );
          },
          autoHarvestSugarlump: () => {
              CookieAssistant.intervalHandles.autoHarvestSugarlump =
                  setInterval(() => {
                      //砂糖玉がアンロックされているかチェック
                      if (!Game.canLumps()) {
                          return;
                      }
                      var age = Date.now() - Game.lumpT;
                      if (
                          age > Game.lumpRipeAge &&
                          age < Game.lumpOverripeAge
                      ) {
                          Game.clickLump();
                      }
                  }, CookieAssistant.config.intervals.autoHarvestSugarlump);
          },
          autoSellBuilding: () => {
              CookieAssistant.intervalHandles.autoSellBuilding = setInterval(
                  () => {
                      for (
                          var i = 0;
                          i <
                          CookieAssistant.config.particular.sell.isAfterSell
                              .length;
                          i++
                      ) {
                          var target =
                              CookieAssistant.config.particular.sell.target[
                                  i
                              ];
                          var amount =
                              CookieAssistant.config.particular.sell.amount[
                                  i
                              ];
                          var activate_mode =
                              CookieAssistant.config.particular.sell
                                  .activate_mode[i];
                          var after_mode =
                              CookieAssistant.config.particular.sell
                                  .after_mode[i];
                          var isSold = CookieAssistant.sellBuildings(
                              i,
                              target,
                              amount,
                              activate_mode,
                              after_mode
                          );
                      }
                  },
                  CookieAssistant.config.intervals.autoSellBuilding
              );
          },
          autoToggleGoldenSwitch: () => {
              CookieAssistant.intervalHandles.autoToggleGoldenSwitch =
                  setInterval(() => {
                      let off = Game.UpgradesInStore.find(
                          (x) => x.name == "Golden switch [off]"
                      );
                      let on = Game.UpgradesInStore.find(
                          (x) => x.name == "Golden switch [on]"
                      );
                      let enableMode =
                          CookieAssistant.config.particular.goldenSwitch
                              .enable;
                      let disableMode =
                          CookieAssistant.config.particular.goldenSwitch
                              .disable;
                      let buffCount = 0;
                      let cliclBuffCount = 0;
                      for (let i in Game.buffs) {
                          switch (Game.buffs[i].type.name) {
                              case "dragonflight":
                              case "click frenzy":
                                  cliclBuffCount++;
                                  buffCount++;
                                  break;
                              case "dragon harvest":
                              case "frenzy":
                              case "blood frenzy": //elder frenzy (x666)
                              case "sugar frenzy":
                              case "building buff":
                              case "devastation":
                                  buffCount++;
                                  break;
                              case "cursed finger":
                              default:
                                  break;
                          }
                      }
                      //スイッチがOFFのとき
                      if (off != undefined) {
                          let isMode0 = enableMode == 0 && buffCount >= 1;
                          let isMode1 = enableMode == 1 && buffCount >= 2;
                          let isMode2 =
                              enableMode == 2 && cliclBuffCount >= 1;
                          let isMode3 =
                              enableMode == 3 &&
                              buffCount >= 2 &&
                              cliclBuffCount >= 1;

                          if (isMode0 || isMode1 || isMode2 || isMode3) {
                              off.buy();
                          }
                      }
                      //スイッチがONのとき
                      if (on != undefined) {
                          let isMode0 = disableMode == 0 && buffCount == 0;
                          let isMode1 =
                              disableMode == 1 && cliclBuffCount == 0;

                          if (isMode0 || isMode1) {
                              on.buy();
                          }
                      }
                  }, CookieAssistant.config.intervals.autoToggleGoldenSwitch);
          },
          autoHireBrokers: () => {
              CookieAssistant.intervalHandles.autoHireBrokers = setInterval(
                  () => {
                      let market = Game.Objects["Bank"].minigame;
                      if (
                          market == undefined ||
                          !Game.Objects["Bank"].minigameLoaded
                      ) {
                          return;
                      }
                      //Hire
                      if (
                          market.brokers < market.getMaxBrokers() &&
                          Game.cookies >= market.getBrokerPrice()
                      ) {
                          l("bankBrokersBuy").click();
                      }
                      //Upgrade
                      let currentOffice = market.offices[market.officeLevel];
                      if (
                          currentOffice.cost &&
                          Game.Objects["Cursor"].amount >=
                              currentOffice.cost[0] &&
                          Game.Objects["Cursor"].level >=
                              currentOffice.cost[1]
                      ) {
                          l("bankOfficeUpgrade").click();
                      }
                  },
                  CookieAssistant.config.intervals.autoHireBrokers
              );
          },
      };

      Game.Notify(CookieAssistant.texts.notify_0, "", "", 1, 1);
      CookieAssistant.CheckUpdate();
  };

  CookieAssistant.sellBuildings = function (
      index,
      target,
      amount,
      activate_mode,
      after_mode
  ) {
      var objectName = Game.ObjectsById[target].name;
      var amount = parseInt(amount);
      if (amount <= 0) {
          return;
      }
      if (CookieAssistant.config.particular.sell.isAfterSell[index]) {
          if (after_mode == 2) {
              //Do nothing
              CookieAssistant.config.particular.sell.isAfterSell[index] = 0;
              return false;
          }
          if (after_mode == 1) {
              //Spellcast and buy back
              var grimoire = Game.ObjectsById[7].minigame;
              if (grimoire == undefined) {
                  Game.Notify(
                      CookieAssistant.name,
                      CookieAssistant.texts.notify_1,
                      "",
                      3
                  );
                  CookieAssistant.config.particular.sell.isAfterSell[
                      index
                  ] = 0;
                  return false;
              }
              var spell = grimoire.spells["hand of fate"];
              var cost = Math.floor(
                  spell.costMin + grimoire.magicM * spell.costPercent
              );
              if (cost <= Math.floor(grimoire.magic)) {
                  grimoire.castSpell(spell);
              }
          }
          if (Game.cookies >= Game.Objects[objectName].getSumPrice(amount)) {
              if (Game.buyMode < 0) {
                  Game.buyMode = 1;
              }
              Game.Objects[objectName].buy(amount);
          } else {
              Game.Notify(
                  CookieAssistant.name,
                  CookieAssistant.texts.notify_2
              );
          }
          CookieAssistant.config.particular.sell.isAfterSell[index] = 0;
          return false;
      }

      var buffCount = 0;
      var cliclBuffCount = 0;
      for (var i in Game.buffs) {
          switch (Game.buffs[i].type.name) {
              case "dragonflight":
              case "click frenzy":
                  cliclBuffCount++;
                  buffCount++;
                  break;
              case "dragon harvest":
              case "frenzy":
              case "blood frenzy": //elder frenzy (x666)
              case "sugar frenzy":
              case "building buff":
                  buffCount++;
                  break;
              case "devastation":
              case "cursed finger":
              default:
                  break;
          }
      }

      var isMode0 = activate_mode == 0 && buffCount >= 1;
      var isMode1 = activate_mode == 1 && buffCount >= 2;
      var isMode2 = activate_mode == 2 && cliclBuffCount >= 1;
      var isMode3 =
          activate_mode == 3 && buffCount >= 2 && cliclBuffCount >= 1;
      var isMode4 = activate_mode == 4 && CookieAssistant.isAfterSpellcast;
      var isMode5 = activate_mode == 5;
      var isMode6 = activate_mode == 6 && buffCount >= 3;
      if (
          isMode0 ||
          isMode1 ||
          isMode2 ||
          isMode3 ||
          isMode4 ||
          isMode5 ||
          isMode6
      ) {
          if (Game.Objects[objectName].amount < amount) {
              Game.Notify(
                  CookieAssistant.name,
                  CookieAssistant.texts.notify_3
              );
              return false;
          }
          Game.Objects[objectName].sell(amount);
          CookieAssistant.config.particular.sell.isAfterSell[index] = 1;
          CookieAssistant.isAfterSpellcast = false;
          return true;
      }
  };

  CookieAssistant.restoreDefaultConfig = function (mode) {
      CookieAssistant.config = CookieAssistant.defaultConfig();
      if (mode == 2) {
          CookieAssistant.save(CookieAssistant.config);
      }
  };

  CookieAssistant.SwitchNextSeason = function () {
      let seasons = ["valentines", "christmas", "easter", "halloween"];
      let isCompletes = [
          Game.GetHowManyHeartDrops() / Game.heartDrops.length >= 1,
          Game.GetHowManySantaDrops() / Game.santaDrops.length >= 1 &&
              Game.GetHowManyReindeerDrops() / Game.reindeerDrops.length >=
                  1 &&
              Game.santaLevel >= 14,
          Game.GetHowManyEggs() / Game.easterEggs.length >= 1,
          Game.GetHowManyHalloweenDrops() / Game.halloweenDrops.length >= 1,
      ];

      if (CookieAssistant.config.flags.autoChocolateEgg && !isCompletes[2]) {
          isCompletes[2] =
              Game.GetHowManyEggs() == Game.easterEggs.length - 1 &&
              !Game.Has("Chocolate egg");
      }

      let targetSeason = "";
      let afterCompleteSeason =
          CookieAssistant.modes.season[
              CookieAssistant.config.particular.season.afterComplete
          ].season;

      for (let i in seasons) {
          if (!isCompletes[i]) {
              targetSeason = seasons[i];
              break;
          }
      }
      if (targetSeason == "" && afterCompleteSeason != "") {
          targetSeason = afterCompleteSeason;
      }
      //全シーズンのアップグレードが完了していて現在どこかのシーズンになっている
      if (Game.season != "" && targetSeason == "") {
          //シーズン終了
          Game.seasonT = -1;
      }
      if (targetSeason != "" && targetSeason != Game.season) {
          if (
              Game.UpgradesInStore.indexOf(
                  Game.Upgrades[Game.seasons[targetSeason].trigger]
              ) != -1
          ) {
              Game.Upgrades[Game.seasons[targetSeason].trigger].buy(1);
          }
      }
  };

  CookieAssistant.OnPreAscend = function () {
      if (CookieAssistant.config.flags.autoChocolateEgg) {
          CookieAssistant.BuyChocolateEgg();
      }
  };

  CookieAssistant.BuyChocolateEgg = function () {
      let egg = Game.UpgradesInStore.find((x) => x.name == "Chocolate egg");
      if (egg == undefined) {
          Game.Notify(CookieAssistant.name, CookieAssistant.texts.notify_4);
          return;
      }
      if (Game.dragonLevel >= 8 && !Game.hasAura("Earth Shatterer")) {
          Game.SetDragonAura(5, 0);
          Game.ConfirmPrompt();
      }
      for (let objectName in Game.Objects) {
          let building = Game.Objects[objectName];
          if (building.amount > 0) {
              building.sell(building.amount);
          }
      }
      egg.buy();
  };

  //コンフィグのチェック
  //アプデ時に新規項目がundefinedになって1ms周期の実行になってしまうのを防止
  CookieAssistant.CheckConfig = function () {
      var defaultConfig = CookieAssistant.defaultConfig();
      for (const [key, value] of Object.entries(defaultConfig.flags)) {
          if (CookieAssistant.config.flags[key] == undefined) {
              CookieAssistant.config.flags[key] = value;
          }
      }
      for (const [key, value] of Object.entries(defaultConfig.intervals)) {
          if (CookieAssistant.config.intervals[key] == undefined) {
              CookieAssistant.config.intervals[key] = value;
          }
      }
      if (CookieAssistant.config.particular == undefined) {
          CookieAssistant.config.particular = defaultConfig.particular;
      }

      for (const [key, value] of Object.entries(defaultConfig.particular)) {
          if (CookieAssistant.config.particular[key] == undefined) {
              CookieAssistant.config.particular[key] = value;
          }
          for (const [key_p, value_p] of Object.entries(
              defaultConfig.particular[key]
          )) {
              if (
                  CookieAssistant.config.particular[key][key_p] == undefined
              ) {
                  CookieAssistant.config.particular[key][key_p] = value_p;
              }
          }
      }
  };

  //オプション&統計の追加
  CookieAssistant.ReplaceGameMenu = function () {
      Game.customOptionsMenu.push(function () {
          CCSE.AppendCollapsibleOptionsMenu(
              CookieAssistant.name,
              CookieAssistant.getMenuString()
          );
      });

      Game.customStatsMenu.push(function () {
          CCSE.AppendStatsVersionNumber(
              CookieAssistant.name,
              CookieAssistant.version
          );
      });
  };

  CookieAssistant.getMenuString = function () {
      const intervalLabel = `<label>${CookieAssistant.texts.interval}(ms) : </label>`;
      const modeLabel = `<label>${CookieAssistant.texts.mode} : </label>`;
      let m = CCSE.MenuHelper;
      str = m.Header(CookieAssistant.texts.menu_header);
      //大クッキークリック
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoClickBigCookie",
              "CookieAssistant_autoClickBigCookieButton",
              `${
                  CookieAssistant.texts.autoClick +
                  " " +
                  CookieAssistant.texts.bigCookie
              } ON`,
              `${
                  CookieAssistant.texts.autoClick +
                  " " +
                  CookieAssistant.texts.bigCookie
              } OFF`,
              "CookieAssistant.Toggle"
          ) +
          intervalLabel +
          m.InputBox(
              "CookieAssistant_Interval_autoClickBigCookie",
              40,
              CookieAssistant.config.intervals.autoClickBigCookie,
              "CookieAssistant.ChangeInterval('autoClickBigCookie', this.value)"
          ) +
          '<label></label><a class="option" ' +
          Game.clickStr +
          "=\" CookieAssistant.config.particular.bigCookie.isMute++; if(CookieAssistant.config.particular.bigCookie.isMute >= 2){CookieAssistant.config.particular.bigCookie.isMute = 0;} Game.UpdateMenu(); PlaySound('snd/tick.mp3');\">" +
          (CookieAssistant.config.particular.bigCookie.isMute
              ? CookieAssistant.texts.menu_autoClickBigCookie_mute_SE
              : CookieAssistant.texts.menu_autoClickBigCookie_play_SE) +
          "</a><br />" +
          '<div class="listing">' +
          modeLabel +
          '<a class="option" ' +
          Game.clickStr +
          "=\" CookieAssistant.config.particular.bigCookie.mode++; if(CookieAssistant.config.particular.bigCookie.mode >= Object.keys(CookieAssistant.modes.bigCookie).length){CookieAssistant.config.particular.bigCookie.mode = 0;} Game.UpdateMenu(); PlaySound('snd/tick.mp3');\">" +
          CookieAssistant.modes.bigCookie[
              CookieAssistant.config.particular.bigCookie.mode
          ].desc +
          "</a><br />" +
          "</div>" +
          "</div>";
      //黄金クッキークリック
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoClickGoldenCookie",
              "CookieAssistant_autoClickGoldenCookieButton",
              `${CookieAssistant.texts.autoClick} ` +
                  loc("Golden cookie") +
                  " ON",
              `${CookieAssistant.texts.autoClick} ` +
                  loc("Golden cookie") +
                  " OFF",
              "CookieAssistant.Toggle"
          ) +
          intervalLabel +
          m.InputBox(
              "CookieAssistant_Interval_autoClickBigCookie",
              40,
              CookieAssistant.config.intervals.autoClickGoldenCookie,
              "CookieAssistant.ChangeInterval('autoClickGoldenCookie', this.value)"
          ) +
          '<div class="listing">' +
          modeLabel +
          '<a class="option" ' +
          Game.clickStr +
          "=\" CookieAssistant.config.particular.golden.mode++; if(CookieAssistant.config.particular.golden.mode >= Object.keys(CookieAssistant.modes.golden).length){CookieAssistant.config.particular.golden.mode = 0;} Game.UpdateMenu(); PlaySound('snd/tick.mp3');\">" +
          CookieAssistant.modes.golden[
              CookieAssistant.config.particular.golden.mode
          ].desc +
          "</a><br />" +
          "</div>" +
          "</div>";
      //虫撃破
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoClickWrinklers",
              "CookieAssistant_autoClickWrinklers",
              `${CookieAssistant.texts.autoClick} ` + loc("wrinkler") + " ON",
              `${CookieAssistant.texts.autoClick} ` +
                  loc("wrinkler") +
                  " OFF",
              "CookieAssistant.Toggle"
          ) +
          intervalLabel +
          m.InputBox(
              "CookieAssistant_Interval_autoClickWrinklers",
              40,
              CookieAssistant.config.intervals.autoClickWrinklers,
              "CookieAssistant.ChangeInterval('autoClickWrinklers', this.value)"
          ) +
          '<div class="listing">' +
          modeLabel +
          '<a class="option" ' +
          Game.clickStr +
          "=\" CookieAssistant.config.particular.wrinkler.mode++; if(CookieAssistant.config.particular.wrinkler.mode >= Object.keys(CookieAssistant.modes.wrinkler).length){CookieAssistant.config.particular.wrinkler.mode = 0;} Game.UpdateMenu(); PlaySound('snd/tick.mp3');\">" +
          CookieAssistant.modes.wrinkler[
              CookieAssistant.config.particular.wrinkler.mode
          ].desc +
          "</a><br />" +
          "</div>" +
          "</div>";
      //トナカイクリック
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoClickReindeer",
              "CookieAssistant_autoClickReindeerButton",
              `${CookieAssistant.texts.autoClick} ` + loc("Reindeer") + " ON",
              `${CookieAssistant.texts.autoClick} ` +
                  loc("Reindeer") +
                  " OFF",
              "CookieAssistant.Toggle"
          );
      if (CookieAssistant.showAllIntervals) {
          str +=
              intervalLabel +
              m.InputBox(
                  "CookieAssistant_Interval_autoClickReindeer",
                  40,
                  CookieAssistant.config.intervals.autoClickReindeer,
                  "CookieAssistant.ChangeInterval('autoClickReindeer', this.value)"
              );
      }
      str += "</div>";
      //FortuneNewsクリック
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoClickFortuneNews",
              "CookieAssistant_autoClickFortuneNewsButton",
              `${
                  CookieAssistant.texts.autoClick +
                  " " +
                  CookieAssistant.texts.fortuneNews
              } ON`,
              `${
                  CookieAssistant.texts.autoClick +
                  " " +
                  CookieAssistant.texts.fortuneNews
              } OFF`,
              "CookieAssistant.Toggle"
          );
      if (CookieAssistant.showAllIntervals) {
          str +=
              intervalLabel +
              m.InputBox(
                  "CookieAssistant_Interval_autoClickFortuneNews",
                  40,
                  CookieAssistant.config.intervals.autoClickFortuneNews,
                  "CookieAssistant.ChangeInterval('autoClickFortuneNews', this.value)"
              );
      }
      str += "</div>";
      //ElderPedge自動購入
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoBuyElderPledge",
              "CookieAssistant_autoBuyElderPledge",
              `${CookieAssistant.texts.autoBuy} ` +
                  loc("[Upgrade name 74]Elder Pledge") +
                  " ON",
              `${CookieAssistant.texts.autoBuy} ` +
                  loc("[Upgrade name 74]Elder Pledge") +
                  " OFF",
              "CookieAssistant.Toggle"
          );
      if (CookieAssistant.showAllIntervals) {
          str +=
              intervalLabel +
              m.InputBox(
                  "CookieAssistant_Interval_autoBuyElderPledge",
                  40,
                  CookieAssistant.config.intervals.autoBuyElderPledge,
                  "CookieAssistant.ChangeInterval('autoBuyElderPledge', this.value)"
              );
      }
      str +=
          '<div class="listing">' +
          `<label>${CookieAssistant.texts.menu_text_0}</label>` +
          "</div>" +
          "</div>";
      //アップグレード自動購入
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoBuyUpgrades",
              "CookieAssistant_autoBuyUpgrades",
              `${CookieAssistant.texts.autoBuy} ` + loc("upgrade") + " ON",
              `${CookieAssistant.texts.autoBuy} ` + loc("upgrade") + " OFF",
              "CookieAssistant.Toggle"
          );
      if (CookieAssistant.showAllIntervals) {
          str +=
              intervalLabel +
              m.InputBox(
                  "CookieAssistant_Interval_autoBuyUpgrades",
                  40,
                  CookieAssistant.config.intervals.autoBuyUpgrades,
                  "CookieAssistant.ChangeInterval('autoBuyUpgrades', this.value)"
              );
      }
      str +=
          '<div class="listing">' +
          modeLabel +
          '<a class="option" ' +
          Game.clickStr +
          "=\" CookieAssistant.config.particular.upgrades.mode++; if(CookieAssistant.config.particular.upgrades.mode >= Object.keys(CookieAssistant.modes.upgrades).length){CookieAssistant.config.particular.upgrades.mode = 0;} Game.UpdateMenu(); PlaySound('snd/tick.mp3');\">" +
          CookieAssistant.modes.upgrades[
              CookieAssistant.config.particular.upgrades.mode
          ].desc +
          "</a><br />" +
          "</div>" +
          "</div>";
      //建物自動購入
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoBuyBuildings",
              "CookieAssistant_autoBuyBuildings",
              `${CookieAssistant.texts.autoBuy} ` + loc("building") + " ON",
              `${CookieAssistant.texts.autoBuy} ` + loc("building") + " OFF",
              "CookieAssistant.Toggle"
          );
      if (CookieAssistant.showAllIntervals) {
          str +=
              intervalLabel +
              m.InputBox(
                  "CookieAssistant_Interval_autoBuyBuildings",
                  40,
                  CookieAssistant.config.intervals.autoBuyBuildings,
                  "CookieAssistant.ChangeInterval('autoBuyBuildings', this.value)"
              );
      }
      str +=
          '<div class="listing">' +
          modeLabel +
          '<a class="option" ' +
          Game.clickStr +
          "=\" CookieAssistant.config.particular.buildings.mode++; if(CookieAssistant.config.particular.buildings.mode >= Object.keys(CookieAssistant.modes.buildings).length){CookieAssistant.config.particular.buildings.mode = 0;} Game.UpdateMenu(); PlaySound('snd/tick.mp3');\">" +
          CookieAssistant.modes.buildings[
              CookieAssistant.config.particular.buildings.mode
          ].desc +
          "</a><br />" +
          "</div>" +
          "</div>";
      //砂糖玉自動収穫
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoHarvestSugarlump",
              "CookieAssistant_autoHarvestSugarlump",
              `${CookieAssistant.texts.autoHarvest} ` +
                  loc("sugar lump") +
                  " ON",
              `${CookieAssistant.texts.autoHarvest} ` +
                  loc("sugar lump") +
                  " OFF",
              "CookieAssistant.Toggle"
          );
      if (CookieAssistant.showAllIntervals) {
          str +=
              intervalLabel +
              m.InputBox(
                  "CookieAssistant_Interval_autoHarvestSugarlump",
                  40,
                  CookieAssistant.config.intervals.autoHarvestSugarlump,
                  "CookieAssistant.ChangeInterval('autoHarvestSugarlump', this.value)"
              );
      }
      str += "</div>";

      str += "<br>";

      str += m.Header(CookieAssistant.texts.menu_header_1);

      //自動詠唱
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoSpellonBuff",
              "CookieAssistant_autoSpellonBuff",
              `${CookieAssistant.texts.autoSpellCast} ` +
                  loc("Force the Hand of Fate") +
                  " ON",
              `${CookieAssistant.texts.autoSpellCast} ` +
                  loc("Force the Hand of Fate") +
                  " OFF",
              "CookieAssistant.Toggle"
          );
      if (CookieAssistant.showAllIntervals) {
          str +=
              intervalLabel +
              m.InputBox(
                  "CookieAssistant_Interval_autoSpellonBuff",
                  40,
                  CookieAssistant.config.intervals.autoSpellonBuff,
                  "CookieAssistant.ChangeInterval('autoSpellonBuff', this.value)"
              );
      }
      str +=
          '<div class="listing">' +
          modeLabel +
          '<a class="option" ' +
          Game.clickStr +
          "=\" CookieAssistant.config.particular.spell.mode++; if(CookieAssistant.config.particular.spell.mode >= Object.keys(CookieAssistant.modes.spell).length){CookieAssistant.config.particular.spell.mode = 0;} Game.UpdateMenu(); PlaySound('snd/tick.mp3');\">" +
          CookieAssistant.modes.spell[
              CookieAssistant.config.particular.spell.mode
          ].desc +
          "</a>" +
          "<label> AND </label>" +
          '<a class="option" ' +
          Game.clickStr +
          "=\" CookieAssistant.config.particular.spell.mode2++; if(CookieAssistant.config.particular.spell.mode2 >= Object.keys(CookieAssistant.modes.spell_buff).length){CookieAssistant.config.particular.spell.mode2 = 0;} Game.UpdateMenu(); PlaySound('snd/tick.mp3');\">" +
          CookieAssistant.modes.spell_buff[
              CookieAssistant.config.particular.spell.mode2
          ].desc +
          "</a>" +
          "</div>" +
          "</div>";

      //シーズン自動切換え
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoSwitchSeason",
              "CookieAssistant_autoSwitchSeason",
              `${CookieAssistant.texts.autoSwitchSeasons} ON`,
              `${CookieAssistant.texts.autoSwitchSeasons} OFF`,
              "CookieAssistant.Toggle"
          );
      if (CookieAssistant.showAllIntervals) {
          str +=
              intervalLabel +
              m.InputBox(
                  "CookieAssistant_Interval_autoSwitchSeason",
                  40,
                  CookieAssistant.config.intervals.autoSwitchSeason,
                  "CookieAssistant.ChangeInterval('autoSwitchSeason', this.value)"
              );
      }
      str +=
          '<div class="listing">' +
          `<label>${CookieAssistant.texts.menu_text_1} : </label>` +
          '<a class="option" ' +
          Game.clickStr +
          "=\" CookieAssistant.config.particular.season.afterComplete++; if(CookieAssistant.config.particular.season.afterComplete >= Object.keys(CookieAssistant.modes.season).length){CookieAssistant.config.particular.season.afterComplete = 0;} Game.UpdateMenu(); PlaySound('snd/tick.mp3');\">" +
          CookieAssistant.modes.season[
              CookieAssistant.config.particular.season.afterComplete
          ].desc +
          "</a><br />" +
          "</div>";
      str +=
          '<div class="listing">' +
          `<label>${CookieAssistant.texts.menu_text_2}</label>` +
          "</div>" +
          "</div>";

      //ドラゴン自動育成
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoTrainDragon",
              "CookieAssistant_autoTrainDragon",
              `${CookieAssistant.texts.autoTrainDragon} ON`,
              `${CookieAssistant.texts.autoTrainDragon} OFF`,
              "CookieAssistant.Toggle"
          );
      if (CookieAssistant.showAllIntervals) {
          str +=
              intervalLabel +
              m.InputBox(
                  "CookieAssistant_Interval_autoTrainDragon",
                  40,
                  CookieAssistant.config.intervals.autoTrainDragon,
                  "CookieAssistant.ChangeInterval('autoTrainDragon', this.value)"
              );
      }
      str +=
          '<div class="listing">' +
          `<label>${CookieAssistant.texts.aura} 1 : </label>` +
          `<select class="option" style="background-color: black; color: white; border-color: #ece2b6 #875526 #733726 #dfbc9a; border: 1px solid; outline: none;" onchange="CookieAssistant.config.particular.dragon.aura1 = parseInt(this.value); Game.UpdateMenu();">` +
          Object.keys(Game.dragonAuras)
              .map(
                  (id) =>
                      `<option value="${id}" ${
                          id == CookieAssistant.config.particular.dragon.aura1
                              ? "selected"
                              : ""
                      }>${Game.dragonAuras[id].dname}</option>`
              )
              .join("") +
          "</select>" +
          `<label>${CookieAssistant.texts.aura} 2 : </label>` +
          `<select class="option" style="background-color: black; color: white; border-color: #ece2b6 #875526 #733726 #dfbc9a; border: 1px solid; outline: none;" onchange="CookieAssistant.config.particular.dragon.aura2 = parseInt(this.value); Game.UpdateMenu();">` +
          Object.keys(Game.dragonAuras)
              .map(
                  (id) =>
                      `<option value="${id}" ${
                          id == CookieAssistant.config.particular.dragon.aura2
                              ? "selected"
                              : ""
                      }>${Game.dragonAuras[id].dname}</option>`
              )
              .join("") +
          "</select><br />" +
          "</div>" +
          "</div>";

      //パンテオンのスロット自動セット
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoSetSpirits",
              "CookieAssistant_autoSetSpirits",
              `${CookieAssistant.texts.autoSetSpirits} ON`,
              `${CookieAssistant.texts.autoSetSpirits} OFF`,
              "CookieAssistant.Toggle"
          );
      if (CookieAssistant.showAllIntervals) {
          str +=
              intervalLabel +
              m.InputBox(
                  "CookieAssistant_Interval_autoSetSpirits",
                  40,
                  CookieAssistant.config.intervals.autoSetSpirits,
                  "CookieAssistant.ChangeInterval('autoSetSpirits', this.value)"
              );
      }
      str += '<div class="listing">';

      if (
          Game.Objects["Temple"].minigame != undefined &&
          Game.Objects["Temple"].minigameLoaded
      ) {
          str +=
              `<label style="color: white;">${CookieAssistant.texts.diamond} : </label>` +
              `<select class="option" style="background-color: black; color: white; border-color: #ece2b6 #875526 #733726 #dfbc9a; border: 1px solid;" onchange="CookieAssistant.config.particular.spirits.slot1 = parseInt(this.value); Game.UpdateMenu();">` +
              Object.keys(Game.Objects["Temple"].minigame.gods)
                  .map(
                      (id, index) =>
                          `<option value="${index}" ${
                              index ==
                              CookieAssistant.config.particular.spirits.slot1
                                  ? "selected"
                                  : ""
                          }>${
                              Game.Objects["Temple"].minigame.godsById[index]
                                  .name
                          }</option>`
                  )
                  .join("") +
              "</select>" +
              `<label style="color: white;">${CookieAssistant.texts.ruby} : </label>` +
              `<select class="option" style="background-color: black; color: white; border-color: #ece2b6 #875526 #733726 #dfbc9a; border: 1px solid;" onchange="CookieAssistant.config.particular.spirits.slot2 = parseInt(this.value); Game.UpdateMenu();">` +
              Object.keys(Game.Objects["Temple"].minigame.gods)
                  .map(
                      (id, index) =>
                          `<option value="${index}" ${
                              index ==
                              CookieAssistant.config.particular.spirits.slot2
                                  ? "selected"
                                  : ""
                          }>${
                              Game.Objects["Temple"].minigame.godsById[index]
                                  .name
                          }</option>`
                  )
                  .join("") +
              "</select>" +
              `<label style="color: white;">${CookieAssistant.texts.jade} : </label>` +
              `<select class="option" style="background-color: black; color: white; border-color: #ece2b6 #875526 #733726 #dfbc9a; border: 1px solid;" onchange="CookieAssistant.config.particular.spirits.slot3 = parseInt(this.value); Game.UpdateMenu();">` +
              Object.keys(Game.Objects["Temple"].minigame.gods)
                  .map(
                      (id, index) =>
                          `<option value="${index}" ${
                              index ==
                              CookieAssistant.config.particular.spirits.slot3
                                  ? "selected"
                                  : ""
                          }>${
                              Game.Objects["Temple"].minigame.godsById[index]
                                  .name
                          }</option>`
                  )
                  .join("") +
              "</select>";
      } else {
          str += `<label>${CookieAssistant.texts.menu_text_3}</label>`;
      }
      str += "</div></div>";

      //建物自動売却
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoSellBuilding",
              "CookieAssistant_autoSellBuilding",
              `${CookieAssistant.texts.autoSellBuildings} ON`,
              `${CookieAssistant.texts.autoSellBuildings} OFF`,
              "CookieAssistant.Toggle"
          );
      str +=
          intervalLabel +
          m.InputBox(
              "CookieAssistant_Interval_autoSellBuilding",
              40,
              CookieAssistant.config.intervals.autoSellBuilding,
              "CookieAssistant.ChangeInterval('autoSellBuilding', this.value)"
          );
      str +=
          '<div class="listing"><ol style="list-style: inside;list-style-type: decimal;">';
      for (
          var i_sellconf = 0;
          i_sellconf <
          CookieAssistant.config.particular.sell.isAfterSell.length;
          i_sellconf++
      ) {
          str +=
              `<li><label>${CookieAssistant.texts.sell} </label>` +
              '<a class="option" ' +
              Game.clickStr +
              '="CookieAssistant.config.particular.sell.target[' +
              i_sellconf +
              "]++; if(CookieAssistant.config.particular.sell.target[" +
              i_sellconf +
              "] >= Object.keys(Game.Objects).length){CookieAssistant.config.particular.sell.target[" +
              i_sellconf +
              "] = 0;} Game.UpdateMenu(); PlaySound('snd/tick.mp3');\">" +
              Game.ObjectsById[
                  CookieAssistant.config.particular.sell.target[i_sellconf]
              ].dname +
              "</a>" +
              "<label> for </label>" +
              m.InputBox(
                  "CookieAssistant_Amount_autoSellBuilding",
                  40,
                  CookieAssistant.config.particular.sell.amount[i_sellconf],
                  "CookieAssistant.config.particular.sell.amount[" +
                      i_sellconf +
                      "] = this.value;"
              ) +
              "<label>When </label>" +
              '<a class="option" ' +
              Game.clickStr +
              '=" CookieAssistant.config.particular.sell.activate_mode[' +
              i_sellconf +
              "]++; if(CookieAssistant.config.particular.sell.activate_mode[" +
              i_sellconf +
              "] >= Object.keys(CookieAssistant.modes.sell_buildings).length){CookieAssistant.config.particular.sell.activate_mode[" +
              i_sellconf +
              "] = 0;} Game.UpdateMenu(); PlaySound('snd/tick.mp3');\">" +
              CookieAssistant.modes.sell_buildings[
                  CookieAssistant.config.particular.sell.activate_mode[
                      i_sellconf
                  ]
              ].desc +
              "</a><br />" +
              `<label>${CookieAssistant.texts.menu_text_4} : </label>` +
              '<a class="option" ' +
              Game.clickStr +
              '=" CookieAssistant.config.particular.sell.after_mode[' +
              i_sellconf +
              "]++; if(CookieAssistant.config.particular.sell.after_mode[" +
              i_sellconf +
              "] >= Object.keys(CookieAssistant.modes.sell_buildings_after).length){CookieAssistant.config.particular.sell.after_mode[" +
              i_sellconf +
              "] = 0;} Game.UpdateMenu(); PlaySound('snd/tick.mp3');\">" +
              CookieAssistant.modes.sell_buildings_after[
                  CookieAssistant.config.particular.sell.after_mode[
                      i_sellconf
                  ]
              ].desc +
              "</a><br /></li>";
      }
      str += "</ol>";
      str +=
          '<a class="option" ' +
          Game.clickStr +
          `="CookieAssistant.addSellConfig(); Game.UpdateMenu(); PlaySound(\'snd/tick.mp3\');">${CookieAssistant.texts.addConfig}</a>`;
      if (CookieAssistant.config.particular.sell.isAfterSell.length > 0) {
          str +=
              '<a class="option" ' +
              Game.clickStr +
              `="CookieAssistant.removeSellConfig(); Game.UpdateMenu(); PlaySound(\'snd/tick.mp3\');">${CookieAssistant.texts.removeLast}</a>`;
      }
      str += "</div></div>";

      if (CookieAssistant.config.flags.autoSellBuilding) {
          var temple = Game.Objects["Temple"].minigame;
          if (
              temple == undefined ||
              !Game.Objects["Temple"].minigameLoaded ||
              !temple.slot.includes(2)
          ) {
              str += `<label><b style='color: #ff3705'>${CookieAssistant.texts.menu_text_5}</b></label>`;
          }
      }

      //ゴールデンスイッチ自動切換え
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoToggleGoldenSwitch",
              "CookieAssistant_autoToggleGoldenSwitch",
              `${CookieAssistant.texts.autoToggle} ` +
                  loc("[Upgrade name 327]Golden switch") +
                  " ON",
              `${CookieAssistant.texts.autoToggle} ` +
                  loc("[Upgrade name 327]Golden switch") +
                  " OFF",
              "CookieAssistant.Toggle"
          ) +
          '<div class="listing">' +
          `<label>${CookieAssistant.texts.enableWhen} : </label>` +
          '<a class="option" ' +
          Game.clickStr +
          "=\" CookieAssistant.config.particular.goldenSwitch.enable++; if(CookieAssistant.config.particular.goldenSwitch.enable >= Object.keys(CookieAssistant.modes.goldenSwitch_enable).length){CookieAssistant.config.particular.goldenSwitch.enable = 0;} Game.UpdateMenu(); PlaySound('snd/tick.mp3');\">" +
          CookieAssistant.modes.goldenSwitch_enable[
              CookieAssistant.config.particular.goldenSwitch.enable
          ].desc +
          "</a><br />" +
          `<label>${CookieAssistant.texts.disableWhen} : </label>` +
          '<a class="option" ' +
          Game.clickStr +
          "=\" CookieAssistant.config.particular.goldenSwitch.disable++; if(CookieAssistant.config.particular.goldenSwitch.disable >= Object.keys(CookieAssistant.modes.goldenSwitch_disable).length){CookieAssistant.config.particular.goldenSwitch.disable = 0;} Game.UpdateMenu(); PlaySound('snd/tick.mp3');\">" +
          CookieAssistant.modes.goldenSwitch_disable[
              CookieAssistant.config.particular.goldenSwitch.disable
          ].desc +
          "</a><br />" +
          "</div>" +
          "</div>";

      //ブローカー自動雇用
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoHireBrokers",
              "CookieAssistant_autoHireBrokers",
              `${CookieAssistant.texts.autoHireBrokers} ON`,
              `${CookieAssistant.texts.autoHireBrokers} OFF`,
              "CookieAssistant.Toggle"
          );
      if (CookieAssistant.showAllIntervals) {
          str +=
              intervalLabel +
              m.InputBox(
                  "CookieAssistant_Interval_autoHireBrokers",
                  40,
                  CookieAssistant.config.intervals.autoHireBrokers,
                  "CookieAssistant.ChangeInterval('autoHireBrokers', this.value)"
              );
      }
      str += "</div>";

      str += "<br />";
      str += m.Header(CookieAssistant.texts.menu_header_2);

      //ChocolateEgg
      str +=
          '<div class="listing">' +
          m.ToggleButton(
              CookieAssistant.config.flags,
              "autoChocolateEgg",
              "CookieAssistant_autoChocolateEgg",
              `${CookieAssistant.texts.autoBuy} ` +
                  loc("[Upgrade name 227]Chocolate egg") +
                  " ON",
              `${CookieAssistant.texts.autoToggle} ` +
                  loc("[Upgrade name 227]Chocolate egg") +
                  " OFF",
              "CookieAssistant.Toggle"
          ) +
          "</div>";

      str += "<br />";
      str += m.Header(CookieAssistant.texts.menu_header_3);
      str +=
          '<div class="listing">' +
          m.ActionButton(
              "CookieAssistant.showAllIntervals = !CookieAssistant.showAllIntervals; Game.UpdateMenu();",
              CookieAssistant.showAllIntervals
                  ? `${CookieAssistant.texts.hideIntervalSettings}`
                  : `${CookieAssistant.texts.showAllIntervalSettings}`
          ) +
          m.ActionButton(
              "CookieAssistant.restoreDefaultConfig(2); CookieAssistant.DoAction(); Game.UpdateMenu();",
              CookieAssistant.texts.restoreDefault
          ) +
          m.ActionButton(
              "CookieAssistant.CheckUpdate();",
              CookieAssistant.texts.checkUpdate
          ) +
          m.ActionButton(
              "Steam.openLink('https://steamcommunity.com/sharedfiles/filedetails/?id=2596469882');",
              CookieAssistant.texts.getMoreInfo
          ) +
          "<label>Version : " +
          CookieAssistant.version +
          "</label>" +
          "</div>";

      str += "<br />";

      return str;
  };

  CookieAssistant.Toggle = function (prefName, button, on, off, invert) {
      if (CookieAssistant.config.flags[prefName]) {
          l(button).innerHTML = off;
          CookieAssistant.config.flags[prefName] = 0;
      } else {
          l(button).innerHTML = on;
          CookieAssistant.config.flags[prefName] = 1;
      }
      l(button).className =
          "option" +
          (CookieAssistant.config.flags[prefName] ^ invert ? "" : " off");
      CookieAssistant.DoAction();
  };

  CookieAssistant.ChangeInterval = function (prefName, value) {
      CookieAssistant.config.intervals[prefName] = value;
      CookieAssistant.DoAction();
  };

  CookieAssistant.DoAction = function () {
      for (const [key, isClick] of Object.entries(
          CookieAssistant.config.flags
      )) {
          if (CookieAssistant.actions[key] == undefined) {
              continue;
          }
          if (isClick) {
              if (CookieAssistant.intervalHandles[key] == null) {
                  CookieAssistant.actions[key]();
              } else {
                  clearInterval(CookieAssistant.intervalHandles[key]);
                  CookieAssistant.intervalHandles[key] = null;
                  CookieAssistant.actions[key]();
              }
          } else if (CookieAssistant.intervalHandles[key] != null) {
              clearInterval(CookieAssistant.intervalHandles[key]);
              CookieAssistant.intervalHandles[key] = null;
          }
      }
  };

  CookieAssistant.addSellConfig = function () {
      CookieAssistant.config.particular.sell.isAfterSell.push(0);
      CookieAssistant.config.particular.sell.target.push(0);
      CookieAssistant.config.particular.sell.amount.push(0);
      CookieAssistant.config.particular.sell.activate_mode.push(0);
      CookieAssistant.config.particular.sell.after_mode.push(0);
      return;
  };

  CookieAssistant.removeSellConfig = function () {
      CookieAssistant.config.particular.sell.isAfterSell.pop();
      CookieAssistant.config.particular.sell.target.pop();
      CookieAssistant.config.particular.sell.amount.pop();
      CookieAssistant.config.particular.sell.activate_mode.pop();
      CookieAssistant.config.particular.sell.after_mode.pop();
      return;
  };

  CookieAssistant.save = function () {
      return JSON.stringify(CookieAssistant.config);
  };

  CookieAssistant.load = function (str) {
      CookieAssistant.config = JSON.parse(str);
      CookieAssistant.CheckConfig();
      CookieAssistant.DoAction();
  };

  CookieAssistant.CheckUpdate = async function () {
      var res = await fetch(
          "https://api.github.com/repos/EurFelux/CookieAssistant/releases/latest"
      );
      var json = await res.json();

      if (json.tag_name == CookieAssistant.version) {
          Game.Notify(
              CookieAssistant.name,
              CookieAssistant.texts.notify_5,
              "",
              3
          );
          return;
      }

      Game.Notify(
          CookieAssistant.name,
          `<b style="color: #ff8000">${CookieAssistant.texts.notify_6}</b><br><a ${Game.clickStr}="Steam.openLink('${json.assets[0].browser_download_url}')" target="_brank">${CookieAssistant.texts.notify_7}</a>`
      );
      Game.UpdateMenu();
  };

  if (
      CCSE.ConfirmGameVersion(
          CookieAssistant.name,
          CookieAssistant.version,
          CookieAssistant.GameVersion
      )
  ) {
      Game.registerMod(CookieAssistant.name, CookieAssistant);
  }
};

if (!CookieAssistant.isLoaded) {
  if (CCSE && CCSE.isLoaded) {
      CookieAssistant.launch();
  } else {
      if (!CCSE) var CCSE = {};
      if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
      CCSE.postLoadHooks.push(CookieAssistant.launch);
  }
}