
export const Nav_Data = [
  {
    key: 11,
    title: "编织基础",
    open: true,
    dropData: [
      { key: 11, title: "线材" },
      { key: 12, title: "器材" },
    ],
  },
  {
    key: 1,
    title: "插图教程",
    open: true,
    dropData: [
      { key: 1, title: "钩针" },
      { key: 2, title: "棒针" },
    ],
  },
  {
    key: 21,
    title: "辅助工具",
    open: true,
    dropData: [
      { key: 21, title: "取色" },
      { key: 22, title: "配色" },
      { key: 23, title: "像素格" },
    ],
  },
  { key: 31, title: "图解收录" },
]

export const Crochet_Course_Data = [
  {
    "cap_id": "0",
    "select": "0",
    "cap": "基础针法",
    "contentMenuList": [
      {
        id: "1",
        "title": "锁针/辫子针",
        desc: "锁针常用于起针，也可以独立应用。",
        "imgList": [
          {
            "img_src": "./images/crochet/szhen1.jpg"
          },
          {
            "img_src": "./images/crochet/szhen2.jpg",
            "img_des": "1、打一个活结并按图示持线"
          },
          {
            "img_src": "./images/crochet/szhen3.jpg",
            "img_des": "2、钩针穿入活结线圈内、绕线按箭头方向钩出（即为1个锁针）"
          },
          {
            "img_src": "./images/crochet/szhen4.jpg",
            "img_des": "3、同理重复前面的动作再次绕线、继续钩织锁针（如图为5个锁针、最开始与最后钩针上的线圈不计入）"
          },
          {
            "img_src": "./images/crochet/szhen5.jpg",
            "img_des": "4、提示：锁针起针方法中挑针的对象为锁针的里山（倒 n ch表示从倒数第n个里山开始起针、与引拔作用相同）"
          }
        ]
      },
      {
        id: "2",
        "title": "引拔针",
        desc: "引拔针是一种过渡针法，常见于环形结构的织物，用于环钩结尾处。也可用于织片边缘，加上一圈引拔针后更加平整。",
        "imgList": [
          {
            "img_src": "./images/crochet/ybzhen1.jpg"
          },
          {
            "img_src": "./images/crochet/ybzhen2.jpg",
            "img_des": "1、如图所示为短针环钩的结尾处"
          },
          {
            "img_src": "./images/crochet/ybzhen3.jpg",
            "img_des": "2、将钩针从第一个针目穿过、绕线钩出、并按箭头方向直接从钩针上的线圈中钩出"
          },
          {
            "img_src": "./images/crochet/ybzhen4.jpg",
            "img_des": "3、拉紧即完成连接"
          },
          {
            "img_src": "./images/crochet/ybzhen5.jpg",
            "img_des": "4、接着根据针法选择引拔的锁针高度、参考下图"
          }
        ]
      },
      {
        id: "3",
        "title": "短针",
        desc: "短针是非常基础的针法，短针钩法为钩针穿入针目、绕线钩出、再次绕线从钩针上2个线圈中钩出。引拔时高度为1个锁针。",
        "imgList": [
          {
            "img_src": "./images/crochet/dzhen1.jpg"
          },
          {
            "img_src": "./images/crochet/dzhen2.jpg",
            "img_des": "1、按箭头方向穿过锁针里山（或其他针目）"
          },
          {
            "img_src": "./images/crochet/dzhen3.jpg",
            "img_des": "2、绕线钩出、此时钩针上有2个线圈、再次绕线从两个线圈中钩出，即完成1个短针"
          },
          {
            "img_src": "./images/crochet/dzhen4.jpg",
            "img_des": "3、同理重复前面的动作、穿过下一个里山、继续钩织短针"
          },
          {
            "img_src": "./images/crochet/dzhen5.jpg",
            "img_des": "4、如图为钩织3个短针、接下来按照图解继续完成钩织"
          },
        ]
      },
      {
        id: "4",
        "title": "中长针",
        desc: "中长针在入针目前绕线1圈、每次绕线从钩针上3个线圈中一次性钩出。引拔时高度等于2个锁针。",
        "imgList": [
          {
            "img_src": "./images/crochet/zczhen1.jpg"
          },
          {
            "img_src": "./images/crochet/zczhen2.jpg",
            "img_des": "1、绕线、按箭头方向穿过锁针里山（或其他针目）"
          },
          {
            "img_src": "./images/crochet/zczhen3.jpg",
            "img_des": "2、绕线钩出、此时钩针上有3个线圈、再次绕线从3个线圈中一次性钩出，即完成1个中长针"
          },
          {
            "img_src": "./images/crochet/zczhen4.jpg",
            "img_des": "3、同理重复前面的动作、穿过下一个里山、继续钩织中长针"
          },

        ]
      },
      {
        id: "5",
        "title": "长针",
        desc: "长针在入针目前绕线1圈、每次绕线从前2个线圈中钩出。引拔时高度等于3个锁针。",
        "imgList": [
          {
            "img_src": "./images/crochet/czhen1.jpg"
          },
          {
            "img_src": "./images/crochet/czhen2.jpg",
            "img_des": "1、绕线、按箭头方向穿过锁针里山（或其他针目）"
          },
          {
            "img_src": "./images/crochet/czhen3.jpg",
            "img_des": "2、绕线钩出、此时钩针上有3个线圈、再次绕线从前2个线圈中钩出、此时钩针上还有2个线圈"
          },
          {
            "img_src": "./images/crochet/czhen4.jpg"
          },
          {
            "img_src": "./images/crochet/czhen5.jpg",
            "img_des": "3、绕线从这2个线圈中钩出，即完成一个长针"
          },
        ]
      },
      {
        id: "6",
        "title": "长长针",
        desc: "长长针即在入针目前绕线2圈、每次绕线从前2个线圈中钩出。引拔时高度等于4个锁针。",
        "imgList": [
          {
            "img_src": "./images/crochet/cczhen1.jpg"
          },
          {
            "img_src": "./images/crochet/cczhen2.jpg",
            "img_des": "1、如图所示在钩针上绕线3圈后穿入针目"
          },
          {
            "img_src": "./images/crochet/cczhen3.jpg",
            "img_des": "2、绕线钩出、此时钩针上有5个线圈绕线每次从前2个线圈中钩出"
          },
          {
            "img_src": "./images/crochet/cczhen4.jpg"
          },
          {
            "img_src": "./images/crochet/cczhen5.jpg"
          },
          {
            "img_src": "./images/crochet/cczhen6.jpg",
            "img_des": "3、钩针上只有一个线圈时即完成一个三卷长针"
          },
        ]
      },
      {
        id: "7",
        "title": "N卷长针",
        desc: "N卷长针即在入针目前绕线N圈（长针绕线1圈、长长针绕线2圈）、穿入针目、绕线钩出、此时钩针上有N+2个线圈、绕线每次穿过2个线圈、直到钩针上只剩1个线圈即完成一个N卷长针。（钩法参考长针、此处不再演示）。\nN卷长针引拔时高度等于N个锁针。\nN卷长针常用于植物钩织。",
        "imgList": [
          {
            "img_src": "./images/crochet/jczhen.jpg"
          }
        ]
      },
      {
        id: "8",
        "title": "加针/分针",
        desc: "加针即在同一个针目中钩多针，一般情况下加针表示一个针目中钩2针（最常用）、其他加针数量需说明。以下图示为短针加针演示，其他针法类似。",
        "imgList": [
          {
            "img_src": "./images/crochet/jiazhen.jpg"
          },
          {
            "img_src": "./images/crochet/dzjvzhen1.jpg",
            "img_des": "1、如图所示在一个针目中已经钩好1个短针、下一针依然从同一针目入针"
          },
          {
            "img_src": "./images/crochet/dzjvzhen2.jpg",
            "img_des": "2、在同一针目中钩2个短针即为短针加针。同理短针加3针即在同一针目中钩3个短针、以此类推"
          },
        ]
      },
      {
        id: "9",
        "title": "减针/并针",
        desc: "减针即将多针合并为一针，一般情况下减针表示2针合并为1针（最常用）、其他减针数量需说明。",
        "imgList": [
          {
            "img_des": "短针减针：",
            "img_src": "./images/crochet/dzjazhen1.jpg"
          },
          {
            "img_src": "./images/crochet/dzjazhen2.jpg",
            "img_des": "1、如图所示为短针的最后一步、此时不绕线钩出、钩针穿过下一个针目（不饶线直接穿入）"
          },
          {
            "img_src": "./images/crochet/dzjazhen3.jpg",
            "img_des": "2、穿过针目后绕线钩出、此时钩针上有3个线圈"
          },
          {
            "img_src": "./images/crochet/dzjazhen4.jpg",
            "img_des": "3、绕线从3个线圈中一次性钩出，即完成一个短针减针"
          },
          {
            "img_des": "短针减三针：",
            "img_src": "./images/crochet/dzjmzhen1.jpg"
          },
          {
            "img_src": "./images/crochet/dzjmzhen2.jpg",
            "img_des": "1、如图所示为短针的最后一步、此时不绕线钩出、钩针穿过下一个针目（不饶线直接穿入）"
          },
          {
            "img_src": "./images/crochet/dzjmzhen3.jpg",
            "img_des": "2、穿过针目后绕线钩出、此时钩针上有3个线圈"
          },
          {
            "img_src": "./images/crochet/dzjmzhen4.jpg",
            "img_des": "3、继续穿过下一个针目后绕线钩出、此时钩针上有4个线圈"
          },
          {
            "img_src": "./images/crochet/dzjmzhen5.jpg",
            "img_des": "4、绕线从4个线圈中一次性钩出，即完成一个短针减三针"
          },
          {
            "img_des": "中长针减针：",
            "img_src": "./images/crochet/zczjtazhen1.jpg"
          },
          {
            "img_src": "./images/crochet/zczjtazhen2.jpg",
            "img_des": "1、如图所示为中长针的最后一步。接下来钩针穿过下一个针目（不饶线直接穿入）"
          },
          {
            "img_src": "./images/crochet/zczjtazhen3.jpg",
            "img_des": "2、穿过针目后绕线钩出、此时钩针上有4个线圈、绕线从前3个线圈中钩出"
          },
          {
            "img_src": "./images/crochet/zczjtazhen4.jpg"
          },
          {
            "img_src": "./images/crochet/zczjtazhen5.jpg",
            "img_des": "3、钩出后钩针上有2个线圈、绕线从这2个线圈中钩出，即完成一个中长针减针"
          },
          {
            "img_des": "长针减针：",
            "img_src": "./images/crochet/czjfazhen1.jpg"
          },
          {
            "img_src": "./images/crochet/czjfazhen2.jpg",
            "img_des": "1、如图所示为长针的最后一步。接下来钩针穿过下一个针目（不饶线直接穿入）"
          },
          {
            "img_src": "./images/crochet/czjfazhen3.jpg",
            "img_des": "2、穿过后绕线钩出、此时钩针上有4个线圈"
          },
          {
            "img_src": "./images/crochet/czjfazhen4.jpg",
            "img_des": "3、绕线从前2个线圈中钩出、相当于完成第二个半长针、此时钩针上有3个线圈"
          },
          {
            "img_src": "./images/crochet/czjfazhen5.jpg",
            "img_des": "4、绕线从这3个线圈中一次性钩出，即完成一个长针减针"
          },
          {
            "img_des": "长针、长长针、N卷长针的减针钩法类似(步骤总结)：\n1、停留在对应针法的最后一步（即未完成的N卷长针）、绕线（绕线圈数于对应针法一致、例如三卷长针绕三圈）穿入下一个针目\n2、绕线从针目中钩出、钩织第2个未完成的N卷长针\n3、减几针就钩织几个未完成的N卷长针、此时钩针上有N+1个线圈\n4、绕线从这些个线圈中一次性钩出"
          }
        ]
      },
      {
        id: "10",
        "title": "内半针",
        desc: "内半针指织片反面一侧的针目、即手持织片时远离自己的一侧。内半针可钩织出’边线‘效果，常用于包袋不同面之间的过渡。",
        "imgList": [
          {
            "img_src": "./images/crochet/nbzhen1.jpg"
          },
          {
            "img_src": "./images/crochet/nbzhen2.jpg",
            "img_des": "短针内半针："
          }
        ]
      },
      {
        id: "11",
        "title": "外半针",
        desc: "外半针指织片正面一侧的针目、即手持织片时靠近自己的一侧。在外半针上减针可使织物更平整，根据实际钩织情况选择。",
        "imgList": [
          {
            "img_src": "./images/crochet/wbzhen1.jpg"
          },
          {
            "img_src": "./images/crochet/wbzhen2.jpg",
            "img_des": "短针外半针："
          }
        ]
      }
    ]
  },
  {
    "cap_id": "2",
    "select": "0",
    "cap": "起针方法",
    "contentMenuList": [
      {
        id: "21",
        "title": "手势",
        desc: "钩织时有一定的绕线方式、拿线方式与拿针方式。",
        "imgList": [
          {
            "img_src": "./images/crochet/sshi1.jpg",
            "img_des": "绕线方式：\n1、如图绕线"
          },
          {
            "img_src": "./images/crochet/sshi2.jpg",
            "img_des": "2、左手拇指与中指按住线头/织物、食指与小指配合带线"
          },
          {
            "img_src": "./images/crochet/sshi3.jpg",
            "img_des": "拿针方式："
          },
          {
            "img_src": "./images/crochet/sshi4.jpg"
          }
        ]
      },
      {
        id: "22",
        "title": "环起",
        desc: "通常说的环起即在一个线圈中钩织而起针。钩织到每圈结尾处需要连接引拔、螺旋环钩不需要引拔。\n环起钩织的织物底面大致为圆形。",
        "imgList": [
          {
            "img_src": "./images/crochet/dzhqi.jpg",
            "img_des": "短针环起："
          },
          {
            "img_src": "./images/crochet/zczhqi.jpg",
            "img_des": "中长针环起："
          },
          {
            "img_src": "./images/crochet/czhqi.jpg",
            "img_des": "长针环起："
          },
          {
            "img_des": "提示：环起详细教程请前往笔记页面观看视频教程。"
          }
        ]
      },
      {
        id: "23",
        "title": "片起",
        desc: "片起即在辫子针的基础上来回钩织。钩织到每排结尾处需要引拔并翻转织片继续钩织下一排。",
        "imgList": [
          {
            "img_src": "./images/crochet/dzpqi.jpg",
            "img_des": "短针片起："
          },
          {
            "img_src": "./images/crochet/zczpqi.jpg",
            "img_des": "中长针片起："
          },
          {
            "img_src": "./images/crochet/czpqi.jpg",
            "img_des": "长针片起："
          },
          {
            "img_des": "提示：片起详细教程请前往笔记页面观看视频教程。"
          }
        ]
      },
      {
        id: "24",
        "title": "辫子针环起",
        desc: "辫子针环起即围绕辫子针边缘进行环钩。钩织到每圈结尾处需要连接引拔、螺旋环钩不需要引拔。\n辫子针环起钩织的织物底面大致为圆角矩形。",
        "imgList": [
          {
            "img_src": "./images/crochet/dzbzzhqi.jpg",
            "img_des": "短针-辫子针环起："
          },
          {
            "img_src": "./images/crochet/zczbzzhqi.jpg",
            "img_des": "中长针-辫子针环起："
          },
          {
            "img_src": "./images/crochet/czbzzhqi.jpg",
            "img_des": "长针-辫子针环起："
          },
          {
            "img_des": "提示：辫子针-环起详细教程请前往笔记页面观看视频教程。"
          }
        ]
      },
      {
        id: "25",
        title: "花片环起",
        desc: '花片环形起针即在已有轮廓的基础上通过锁针起针，再环绕钩织，通常用于花片、发夹、花边等。',
        imgList: [
          {
            img_src: './images/crochet/hbqz01.jpg',
          }
        ]
      }
    ]
  },
  // {
  //   "cap_id": "4",
  //   "select": "0",
  //   "cap": "钩织技巧",
  //   "contentMenuList": [
  //     {
  //       id: "41",
  //       "title": "无痕引拔",
  //       desc: "普通引拔方式钩织的织片在引拔的地方会有痕迹，影响织物的平整与美观，可通过如下两种方式优化。",
  //       "imgList": [
  //         {
  //           "img_src": "https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/whyb01.gif",
  //           "img_des": "方法1：引拔时尽量拉紧"
  //         },
  //         {
  //           "img_src": "https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/whyb02.gif",
  //           "img_des": "方法2：反向引拔"
  //         }
  //       ]
  //     },
  //     {
  //       id: "42",
  //       "title": "隐形加减针",
  //       desc: "普通加减针方式钩织的织片在加减针的地方会有痕迹，影响织物的平整与美观，可通过在外半针钩织的方法优化。",
  //       "imgList": [
  //         {
  //           "img_src": "https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/yxjiaz.gif",
  //           "img_des": "隐形加针：第一针钩内半针，第二针钩整个针目。"
  //         },
  //         {
  //           "img_src": "https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/yxjianz.gif",
  //           "img_des": "隐形减针：两针均钩外半针。"
  //         }
  //       ]
  //     },
  //     {
  //       id: "43",
  //       "title": "隐形换线",
  //       desc: "普通引拔方式钩织的织片在引拔的地方会有痕迹，影响织物的平整与美观，可通过如下两种方式优化。",
  //       "imgList": [
  //         {
  //           "img_src": "https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/yxhx01.gif",
  //           "img_des": "接线：停留在最后一步，此时钩针上有两个线圈，换另一个颜色的线钩出。"
  //         },
  //         {
  //           "img_src": "https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/yxhx02.gif",
  //           "img_des": "换线：从针目穿入时绕原始线钩出，然后绕所换线钩出。"
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    "cap_id": "6",
    "select": "0",
    "cap": "附录",
    "contentMenuList": [
      {
        id: "61",
        "title": "钩针符号合集",
        "imgList": [
          {
            "img_src": "./images/crochet/zmfhao.jpg"
          }
        ]
      },
      {
        id: "62",
        "title": "英文符号合集",
        "imgList": [
          {
            "img_src": "./images/crochet/ywfhao.jpg"
          }
        ]
      }
    ]
  }
]

export const Knit_Course_Data = [
  {
    "cap_id": "1",
    "select": "0",
    "cap": "基础针法",
    "contentMenuList": [
      {
        id: '1',
        title: '上针',
        decs:'上针在织物纹样中对应月牙形。',
        imgList: [
          {
            img_src: './images/knit/szhen1.jpg',
          },
          {
            img_src: './images/knit/szhen2.jpg',
          },
          {
            img_src: './images/knit/szhen3.jpg',
          },
          {
            img_src: './images/knit/szhen4.jpg',
          },
          {
            img_src: './images/knit/szhen5.jpg',
          }
        ]
      },
      {
        id: '2',
        title: '下针',
        decs: '下针在织物纹样中对应 V 形。',
        imgList: [
          {
            img_src: './images/knit/xzhen1.jpg',
          },
          {
            img_src: './images/knit/xzhen2.jpg',
          },
          {
            img_src: './images/knit/xzhen3.jpg',
          },
          {
            img_src: './images/knit/xzhen4.jpg',
          },
          {
            img_src: './images/knit/xzhen5.jpg',
          }
        ]
      }
    ]
  },
  {
    "cap_id": "2",
    "select": "0",
    "cap": "起针与收针",
    "contentMenuList": [
      {
        id: "21",
        "title": "手势",
        desc: "棒织时有一定的带线、绕线方式与持针方式，主要包括右手带线和左手带线两种",
        "imgList": [
          {
            "img_src": "./images/knit/ysdxian1.jpg",
            "img_des": "右手带线：右手如图绕线，在编织时通过右手食指前伸，带线绕过针头。右手带线是最常见的带线方式。"
          },
          {
            "img_src": "./images/knit/sshi2.jpg",
            "img_des": "左手带线：左手如图绕线，在编织时左手食指带线绕过针头。左手带线难于右手带线，但熟练后编织速度更快。"
          }
        ]
      },
      {
        id: "22",
        "title": "基础起针",
        "imgList": [
          {
            "img_src": "./images/knit/qzhen1.jpg",
            "img_des": "1、将毛线打一个活结，并传入一根棒针。"
          },
          {
            "img_src": "./images/knit/qzhen2.jpg",
            "img_des": "2、右手持针，左手如图绕线，如图用棒针挑线带出，左手拉紧线圈，即起好一针。"
          }
        ]
      },
      {
        id: "23",
        "title": "基础收针",
        "imgList": [
          {
            "img_src": "./images/knit/shouzhen1.jpg",
            "img_des": "方式1: 收针即右手棒针每织两针，则用左手棒针穿入右手棒针上的前一个线圈，右手棒针将后一个线圈从中带出，以此类推，知道右手剩最后一个线圈。"
          },
          {
            "img_src": "./images/knit/shouzhen2.jpg",
            "img_des": "方式2: 用线穿入所有线圈，收紧即可。"
          }
        ]
      },
    ]
  }
]

export const XC_List_Data = [
  {
    id: 1,
    title: "线材总述",
    desc: "纱线由纤维制成，可以由羊毛等单一纤维制成，也可以与其他纤维混合以增强其性能，另外出于美学原因，很多各具特色的混合纱线应势而生。毛线通常指羊毛纺成的纱，也有不同种类化纤材质纺成的线。此处整理常见的线材种类供大家参考。",
    img: "./images/xc/xc.jpg",
    detailList: [
      {
        desc: " \n1、毛线的粗细：编织线根据其粗细、材质、形状等分为不同种类，具有相应的特点。\n【特细线】编织毛线中最细的一种，轻盈柔软、富有弹力。一般不用单根特细线进行编织，而是将2-3根合成1股，合成后的线材大致与细线或中细线等粗，但更具弹力。\n【极细线】比特细线略粗，一般用于编织披肩。\n【中细线】是最普遍被使用的毛线品种，容易编织，结实耐用，适用范围广。\n【中粗线】是编织衣物最常见的一种，常用于手工编织。\n【高粗线】是编织防寒衣物用品的最佳毛线。"
      },
      {
        desc: "\n2、线材用量的估算方法：\n（1）按照与实物1:4的比例制图，以10cm为单位切分，计算出织物包含多少个单位（不足取整）\n（2）以同样的花样编织10cm*10cm织片，测量出单位用量/重量\n（3）线材用量 = 单位个数 x 单位用量/重量",
        img: "./images/xc/xc01.jpg"
      },
      {
        desc: "3、线材的常见缠线方式：线球、团、绞、束、筒",
        img: "./images/xc/xc02.jpg"
      },
      {
        desc: "4、手缠线方法：市场上常见的编织线都是成卷的，但是也存在需要自己绕线成卷的情况。如果没有绕线机，可参考图示手缠线的方法整理散线。",
        img: "./images/xc/xc03.jpg"
      },
      {
        desc: '5、毛线保养提示：',
        img: './images/xc/xc04.jpg'
      },
      {
        desc: "\n新手贴示：入门时使用5/0号（3.00mm）钩针搭配四股牛奶棉学习。\n\n"
      }
    ]
  },
  {
    id: 2,
    title: "棉线",
    desc: "棉线是用棉花纤维搓纺而成的线。棉花是在棉花植物种子周围生长的蓬松物质。大多数棉纱都很容易清洗，如果保养得当，可以非常结实，使用几十年。因此，它是家庭用品、针织袋和包袋的良好纤维。市场上的棉线名称各异，并非均为纯棉线。此处介绍几种常见的棉线。",
    img: "./images/xc/mx.jpg",
    detailList: [
      {
        desc: "\n1、纯棉线：未经处理的纯棉非常适合手工染色。",
        img: "./images/xc/cmx.jpg"
      },
      {
        desc: "2、牛奶棉：牛奶棉也称牛奶丝，牛奶蛋白纤维制品属于纺织材料的一种，属于动植物蛋白纤维系列，是将液状牛奶脱脂、去水后所得到的牛奶蛋白质，加上柔和剂，制成牛奶浆液，然后通过湿纺工艺及科学处理，纺制成牛奶蛋白纤维，再经湿纺工艺及科技处理成牛奶丝。市场上牛奶棉通常使用棉+牛奶纤维合成。\n牛奶棉是新手入门最常用的线材。根据股数分为不同粗细，最常见的有4股牛奶棉、5股牛奶棉、8股牛奶棉。",
        img: "./images/xc/nnm.jpg"
      },
      {
        desc: "【4股牛奶棉】常用于编织玩偶，搭配2-3mm钩针、2.5-3mm棒针",
        img: "./images/xc/nnm01.jpg"
      },
      {
        desc: "【5股牛奶棉】常用于玩偶、衣物、毯子等，搭配3-4mm钩针、4-4.5mm棒针",
        img: "./images/xc/nnm02.jpg"
      },
      {
        desc: "【8股牛奶棉】常用于围巾、衣物，搭配5-5.5mm棒针",
        img: "./images/xc/nnm03.jpg"
      },
      {
        desc: "3、丝光棉：棉纱可以进行丝光处理，在此过程中，它经过机械和化学处理以压缩它，将其转变为具有反光光泽且不会掉毛的超强纱线。丝光棉通常是更昂贵的选择，但它非常适合需要坚固和保持形状的，例如闪亮的晚装包、长款夏季开衫或需要定期洗涤的外套。",
        img: "sgm"
      },
      {
        desc: "4、竹棉：用于手工针织纱线的竹纤维是通过压碎茎以生产类似亚麻的纤维或通过化学处理制浆植物而生产的，在这种情况下，它被称为“竹粘胶”。 这种纤维具有类似于丝绸的光泽和手感，与其他纤维混合时编织效果最佳。竹子提高了纯棉的透气性和弹性，是夏季衣服和披肩的理想选择。",
        img: "./images/xc/zm.jpg"
      }
    ]
  },
  {
    id: 3,
    title: "羊毛线",
    desc: "羊毛源自各种绵羊品种，例如设得兰绵羊和青面莱斯特绵羊，制成纯毛纱或与其他纤维混合。 它是非常温暖耐用，非常理想用于冬季穿着。粗感羊毛含有短而粗的纤维，可能刺激，针织时选用较软的类型。",
    img: "./images/xc/ym.jpg",
    detailList: [
      {
        img: './images/xc/ym01.jpg'
      },
      {
        desc: "\n1、美利奴羊毛：这种特殊的羊毛来自美利奴绵羊，拥有绵羊品种中最好的羊毛之一。 长而有光泽的纤维产生柔软的纱线，是贴身穿着的物品的绝佳选择。 它通常与其他纤维混合，并经常进行处理以使其可机洗。",
        img: "./images/xc/mln.jpg"
      },
      {
        desc: "2、设得兰羊毛：也称雪莱毛。设得兰是英国绵羊品种中最小的，主要分布在英国苏格兰的设得兰群岛。",
        img: "./images/xc/sdl.jpg"
      }
    ]
  },
  {
    id: 4,
    title: "羊绒线",
    desc: "羊绒是出自山羊身上的绒，即山羊绒，俗称开司米（Cashmere）。羊绒是生长在山羊外表皮层，掩在山羊粗毛根部的一层薄薄的细绒，入冬寒冷时长出，抵御风寒，开春转暖后脱落，自然适应气候，属于稀有的特种动物纤维。",
    img: "./images/xc/yrx.jpg",
    detailList: [
      {
        desc: "\n1、开司米：这种纤维是山羊的柔软底毛，可制成超奢华、天鹅绒般柔软的纱线。 它重量轻但强度高，通常比其他纤维中的同等纱线提供更多的每克码数。 羊绒是一种生产成本高昂的纤维，通常与其他纤维混合以增加柔软度和奢华感。这种纤维只能手洗。",
        img: "./images/xc/ksm.jpg"
      },
      {
        desc: "2、马海毛：安哥拉山羊的毛，编织起来会产生独特的天然“光环”。 使用马海毛编织具有一定挑战性，因为带有细绒使得很难看到针织结构。不建议将其用于婴儿服装，因为它在新制作时可能会掉毛，如果吸入可能会造成危险。",
        img: "./images/xc/mhm.jpg"
      }
    ]
  },
  {
    id: 5,
    title: "羊驼毛",
    desc: "羊驼毛(alpaca),又名阿尔帕卡.属于骆驼毛纤维。它比马海毛更细，更柔软，其色泽为白色、棕色、淡黄褐色或黑色，其强力和保暖性均远高于羊毛，非常适合制作滑雪帽、厚实舒适的毛衣和袜子。羊驼毛具有奢华的感觉，是可用于针织的最温暖的天然纤维之一。",
    img: "./images/xc/ytm.jpg",
    detailList: [
      {
        img: "./images/xc/ytm01.jpg"
      },
      {
        desc: "拓展（羊驼）：\n羊驼有骆马、阿尔帕卡、维口纳和干纳柯四个纯种——\n【骆马】羊驼毛中最粗最长，弹性较差。\n【阿尔帕卡】又称秘鲁羊驼，是羊驼毛中最主要的一种，毛质柔软，长度长，有白色、灰色、黑色和褐色，光泽介于马海毛和驼毛之间，属混合毛类型。可分为两个品种：\n(1)霍加耶(Huacayo或Huacaya)：体形较大，与骆马外形相似，其毛呈银光，产量较高，约占秘鲁羊驼的85%左右\n(2)苏力(Suri)：体形较小，纤维顺直，毛细密而光滑，与安哥拉山羊相似，具有马海毛般的光泽\n【维口纳】野生羊驼，属于混合毛，在羊驼毛中是最细的，品质接近于羊绒，强力与羊绒相似。维口纳羊躯体各部位毛的颜色不同，具有良好的光泽、柔软性和卷曲性，可制造高档的机织物、针织物和礼帽。其数量稀少，较为名贵。\n【干纳柯】与维口纳毛相似，但毛略粗。\n\n"
      }
    ]
  },
  {
    id: 6,
    title: "安哥拉兔毛",
    desc: "安哥拉兔茂密的背毛产生柔软而长的纤维。它通常与其他纤维混纺，制成具有类似于马海毛的毛茸茸“光环”效果的纱线。安哥拉兔毛编织的物品非常精致，保养讲究。",
    img: "./images/xc/agltm.jpg",
    detailList: [
      {
        img: "./images/xc/agltm01.jpg"
      }
    ]
  },
  {
    id: 7,
    title: "蚕丝",
    desc: "蚕丝是熟蚕结茧时所分泌丝液凝固而成的连续长纤维，也称天然丝，是一种天然纤维。 由于其非凡的来源，蚕丝纤维一直很昂贵。 其奢华的质地使其成为婚礼和洗礼礼物以及奢华合身针织品的理想之选。",
    img: "./images/xc/cs.jpg",
    detailList: [
      {
        img: "./images/xc/cs01.jpg"
      },
      {
        desc: "拓展（桑蚕丝与柞蚕丝）：\n【桑蚕丝】桑蚕由人工养殖，一般产于南方，手感柔软、光滑，色泽典雅，纤维细，细腻柔美，主要用作服装面料。\n【柞蚕丝】柞蚕是野生蚕，一般产于北方，强伸度强、耐腐蚀性，耐光性，吸湿性、色泽天然，纤维粗吸湿透气，蓬松保暖好。\n\n"
      }
    ]
  },
  {
    id: 8,
    title: "麻线",
    desc: "此处介绍亚麻线、大麻线和苎麻线三种类型。",
    img: "./images/xc/max.jpg",
    detailList: [
      {
        desc: "\n1、亚麻线:这种纤维通常来自亚麻植物。 结实，表面油腻、蜡质，但能制出光滑、柔软、透气的纱线，非常适合编织成轻质开衫和上衣，在温暖的天气里穿着。",
        img: "./images/xc/ymx.jpg"
      },
      {
        desc: "2、大麻线:大麻植物的用途特别广泛，将其纤维用于针织纱线是其不太常见的应用之一。 大麻具有泥土般的粗糙感，会随着年龄和磨损而软化。 它通常以环保方式生产，强度高的纤维有利于编织镂空购物袋、餐垫和杯垫等家居用品。",
        img: "./images/xc/dmx.jpg"
      },
      {
        desc: "3、苎麻线:荨麻科的一种植物产生称为苎麻的纤维。植物的内皮被加工成有光泽但有点脆的纤维，所以它们通常在纺成纱线之前与其他纤维混合。 与其他植物纤维一样，苎麻不能很好地隔热，但能生产出透气、耐用的面料。",
        img: "./images/xc/zmx.jpg"
      }
    ]
  },
  {
    id: 9,
    title: "腈纶",
    desc: "腈纶纤维由乙烯制成，乙烯是从石油中提炼出来的，制造成本非常低廉。 腈纶纱线比其他合成纤维略粗糙，并且通常具有非常明亮和明亮的色调，而这些色调很难用天然纤维制成。腈纶纱线比较坚固，是玩具、新颖针织品和预算项目的理想选择。腈纶容易积聚静电。",
    img: "./images/xc/jl.jpg",
    detailList: [
      {
        img: "./images/xc/jl01.jpg"
      }
    ]
  },
  {
    id: 10,
    title: "尼龙",
    desc: "聚酰胺（俗称尼龙）是一种非常坚固且轻便的纤维。它的弹性使其非常适合针织面料，通常用于增强可能遭受严重磨损的物品的混纺纱。 与其他人造纤维一样，尼龙通过防止收缩和毡化来提高与之混合的纤维的耐洗性。",
    img: "./images/xc/nl.jpg",
    detailList: [
      {
        img: "nl01"
      }
    ]
  },
  {
    id: 11,
    title: "雪尼尔",
    desc: "雪尼尔通常由棉和合成纤维组成，中间为一根结实的芯子。 雪尼尔织物将具有奢华、天鹅绒般的感觉。 雪尼尔非常适合平纹针迹，但不太适合复杂图案和蕾丝和绳索等工作，因为它表面带绒，可以隐藏细节。",
    img: "./images/xc/xne.jpg",
    detailList: [
      {
        img: "./images/xc/xne01.jpg"
      }
    ]
  },
  {
    id: 12,
    title: "毛圈纱",
    desc: "毛圈纱也被称为“贵宾犬”纱线，其卷曲外观是由附着在实心纱线上的柔软纤维的漩涡形成的。 针织时，这些纤维环突出并营造出贵宾犬毛皮效果。这种纱线非常适合制作形状非常简单的服装，或为平纹长袜针迹针织物增添有趣的质感。",
    img: "./images/xc/mqs.jpg",
    detailList: [
      {
        img: "./images/xc/mqs01.jpg"
      }
    ]
  },
  {
    id: 13,
    title: "粗花呢",
    desc: "“粗花呢”描述了一种由羊毛制成的经典机织布，通常在布中带有对比色的斑点。原始粗花呢由来自各种彩色绵羊的未染色羊毛制成，但现在它们有多种颜色，并带有从明亮到微妙的各种斑点。 粗花呢纱线可能具有“杂色”或泥灰底色，并且在纺丝时添加了标志性的斑点，增加了纹理和颜色的趣味。",
    img: "./images/xc/chn.jpg",
    detailList: [
      {
        img: "./images/xc/chn01.jpg"
      }
    ]
  },
  {
    id: 14,
    title: "灌芯线",
    desc: "灌芯线也称为“绳”纱，通常以柔软的纤维（如羊毛或棉花）制成的纱线为芯，然后包裹在更细的纱线中，如金属线或尼龙。 弹力纱线通常以这种方式纺制，带有弹性纤维芯，包覆纱通常包裹得非常密集。",
    img: "./images/xc/gxx.jpg",
    detailList: [
      {
        img: "./images/xc/gxx01.jpg"
      }
    ]
  },
  {
    id: 15,
    title: "扁带线",
    desc: "扁带线类似于带状，通常都由合成纤维或植物纤维混纺制成，以赋予它们强度和光泽。很多扁带纱线很滑，必须特别注意针距和处理。",
    img: "./images/xc/bdx.jpg",
    detailList: [
      {
        desc: "\n1、扁带线：扁带线的主要特征是其扁平的轮廓。",
        img: "./images/xc/bdx01.jpg"
      },
      {
        desc: "2、缎带纱：带状纱的形状类似于带状纱，但通常更宽一些。 丝带纱线特别适合制作漂亮的配饰。",
        img: "./images/xc/dds.jpg"
      }
    ]
  },
  {
    id: 16,
    title: "布条线",
    desc: "布条线即织物条。 传统上，旧衣服和其他纺织品的织物通常制成条带绑在一起制成门垫和地毯。即也可以考虑使用织物条进行编织。针的大小将取决于条带的厚度。布条线非常流行的织法是钩织布条包。",
    img: "./images/xc/btx.jpg",
    detailList: [
      {
        desc: "\n布条线的花纹或图案由织物条而定：",
        img: "./images/xc/btx01.jpg"
      },
      {
        desc: "新手贴示：选购布条线时侧重线材是否”起球”的问题！\n\n"
      }
    ]
  },
  {
    id: 17,
    title: "弹力纱",
    desc: "弹力纱含有少量弹性弹性纤维，可增强所得织物的自然回弹。 主要纤维可以是天然的（例如棉），也可以是混纺的或全合成的。弹力纱是夏季沙滩装和运动装的理想选择。",
    img: "./images/xc/tls.jpg",
    detailList: [
      {
        img: "./images/xc/tls01.jpg"
      }
    ]
  },
  {
    id: 18,
    title: "反光纱",
    desc: "弹力纱含有少量弹性弹性纤维，可增强所得织物的自然回弹。 主要纤维可以是天然的（例如棉），也可以是混纺的或全合成的。弹力纱是夏季沙滩装和运动装的理想选择。",
    img: "./images/xc/fgs.jpg",
    detailList: [
      {
        img: "./images/xc/fgs01.jpg"
      }
    ]
  },
  {
    id: 19,
    title: "蕾丝线",
    desc: "蕾丝线即100%纯棉强捻的线，是微钩主要线材。蕾丝线捻度高、有骨感、通过丝光烧毛处理后色彩更光亮，硬度更大，不容易起毛起球。",
    img: "./images/xc/lsx.jpg",
    detailList: [
      {
        desc: "\n蕾丝线号数：通常号数越大线越细。常用的蕾丝线主要有3#、8#、80#等。",
        img: "./images/xc/lsx01.jpg"
      }
    ]
  },
  {
    id: 20,
    title: "冰条线",
    desc: "冰条线带有毛绒质感，是钩织围巾、毛线鞋等保暖物品很好的选择。",
    img: "./images/xc/bingtx.jpg",
    detailList: [
      {
        img: "./images/xc/bingtx01.jpg"
      },
      {
        desc: "新手贴士：使用冰条线钩织时可借助棉线起针、收圈。\n\n"
      }
    ]
  },
  {
    id: 21,
    title: "软纺纱",
    desc: "软纺纱通常比普通纱线更透气，密度更小，多股轻柔捻合的纤维松散地合在一起制成。 它可以由棉、羊毛或混合纤维制成，针织时轻盈、有弹性且非常柔软。 通常以这种方式纺出非常粗的纱线，以防止针织服装过重或随后变形。这些粗纱适合制作厚实的、快速编织的配饰。",
    img: "./images/xc/rfs.jpg",
    detailList: [
      {
        desc: "\n1、冰岛毛：冰岛毛原为冰岛羊的毛。但由于冰岛羊毛价格高昂，且并不坚韧，逐步被腈纶冰岛毛所替代。如今市场上所说的冰岛毛，大部分为腈纶冰岛毛。 \n拓展（冰岛羊）：冰岛羊的历史已经超过了一千多年，它是当年北欧海盗从斯堪第纳维亚和爱尔兰带来的羊的后代，基本上没有和其它羊种杂交，是一种纯种羊。在一千多年的独特环境中，冰岛羊形成了独特的耐寒抗病的能力。冰岛羊和其它绵羊的明显区别是冰岛羊终年披着厚厚的羊毛，外面是一层厚厚的长达十几厘米的普通毛，里面则是软绒绒的绒毛。",
        img: "./images/xc/bdm.jpg"
      },
      {
        desc: "2、羊毛粗纱：具有毛茸茸、蓬松的特点，纤维沿其长度方向相互平行。 粗纱是在纤维加工的早期阶段生产的，即在加捻形成纱线之前。 因此，羊毛粗纱在纵向拉扯时往往会被拉开；，也会脱落纤维并可能起球。 合成粗纱的纤维较长，因此具有更高的固有强度。",
        img: "./images/xc/ymcs.jpg"
      }
    ]
  },
  {
    id: 22,
    title: "长绒线",
    desc: "此处将各种表面带有绒毛、编织难度较大的线材统称为长绒线。",
    img: "./images/xc/crx.jpg",
    detailList: [
      {
        desc: "\n1、珊瑚绒",
        img: "./images/xc/shr.jpg"
      },
      {
        desc: "2、皮草绒",
        img: "./images/xc/pcr.jpg"
      },
      {
        desc: "3、长毛水貂绒",
        img: "./images/xc/sdr.jpg"
      },
      {
        desc: "长绒线织物示例：",
        img: "./images/xc/crx01.jpg"
      }
    ]
  },
  {
    id: 23,
    title: "仿羊毛毡线",
    desc: "仿羊毛毡线指表面带有微绒，针织成品类似羊毛毡效果的线材。",
    img: "./images/xc/fymzx.jpg",
    detailList: [
      {
        desc: "\n织物示例：",
        img: "./images/xc/fymzx01.jpg"
      },
      {
        desc: "新手贴士：使用仿羊毛毡线钩织时多使用记号扣！\n\n"
      }
    ]
  },
  {
    id: 24,
    title: "合股线/混合线",
    desc: "合股线是将多股单纱捻合而成。\n混合线指将多根线材混合编织以形成不同的花纹，同时增加厚度。",
    img: "./images/xc/hgx.jpg",
    detailList: [
      {
        desc: "\n1、合股线：一方面，大多数用于手编的纱线都是合股的，可以增加稳定性和厚度；另一方面，将几种颜色混合在一起形成的合股纱线会产生不同的纹理。",
        img: "./images/xc/hgx01.jpg"
      },
      {
        desc: "2、混合线：通过将混线的方式编织可以得到很多各具特色的花纹。",
        img: "./images/xc/hhx.jpg"
      }
    ]
  },
  {
    id: 25,
    title: "合成线材",
    desc: "冰条线源自废石油渣，带有毛绒质感，是钩织围巾、毛线鞋等保暖物品很好的选择。",
    img: "./images/xc/hcx.jpg",
    detailList: [
      {
        desc: "\n1、羊毛和棉：棉的强度和柔软性为羊毛非常保暖（有时会有点扎）的特性增加了光滑度、透气性和耐洗性。该混合物非常适合皮肤敏感的人和婴儿。",
        img: "./images/xc/hcx01.jpg"
      },
      {
        desc: "2、天然纤维和合成纤维：人造纤维通常与天然纤维混合，以带来结构、强度和耐洗性；或者出于审美原因，例如添加光泽。它们有助于将其他纱线（如马海毛和羊毛）粘合在一起，并防止脱落，还可以防止动物纤维收缩。",
        img: "./images/xc/hcx01.jpgg"
      },
      {
        desc: "3、纯合成线：制造商可以混合人造纤维以创造各种质地的线材。尽管与动物纤维相比，它们的保暖性不高，但大多数纯合成纤维混合物可以经常洗涤，有些还可以烘干。",
        img: "./images/xc/hcx03.jpg"
      }
    ]
  },
  {
    id: 26,
    title: "特殊线材",
    desc: "生活中许多材料都可作为钩织线材，此处简单举几例。",
    img: "./images/xc/tsx.jpg",
    detailList: [
      {
        desc: "\n1、塑料线：",
        img: "./images/xc/slx.jpg"
      },
      {
        desc: "2、塑料绳：",
        img: "./images/xc/sls.jpg"
      },
      {
        desc: "3、胶制线：",
        img: "./images/xc/jzx.jpg"
      },
      {
        desc: "4、金属线：",
        img: "./images/xc/jsx.jpg"
      }
    ]
  }
]

export const QC_List_Data = [
  {
    id: 1,
    title: "新手必备",
    desc: "此处列出新手入门学习钩针编织/棒针编织的必备工具套装。其他器材可后期根据自己的需要准备。",
    img: "./images/qc/xsbbei.jpg",
    detailList: [
      {
        desc: "\n1、钩针入门必备：钩针+记号扣+缝合针+剪刀",
        img: "./images/qc/xsbbei01.jpg"
      },
      {
        desc: "2、棒针入门必备：棒针+剪刀+缝合针+卷尺/密度尺",
        img: "./images/qc/xsbbei02.jpg"
      },
      {
        desc: "新手贴士：以上工具指入门学习针法时必备工具，其他工具需要根据自己参照的具体织物选择，例如学习玩偶钩织时需准备填充棉。\n\n"
      }
    ]
  },
  {
    id: 2,
    title: "钩针",
    desc: "钩针是钩织必备工具。钩针有单头和双头之分，按材质大致分为金属制、塑料制、木制和竹制（其中最常用的为金属制钩针）。钩针有多种尺寸以满足不同类型的线材和规格。",
    img: "./images/qc/gzhen.jpg",
    detailList: [
      {
        desc: "\n1、钩针结构图示：如图，钩针由尖端、喉部、柄部、头部、拇指托、手柄几个基本部分组成。更尖的尖端可以更容易地进入紧密的针迹，而更圆的尖端不会分裂纱线，适合绒线与粗线钩织。拇指托帮助控制和旋转钩子，手柄有助于在钩针编织时平衡钩子。",
        img: "./images/qc/gzhen01.jpg"
      },
      {
        desc: "2、钩针材质：钩针通常由金属或塑料制成，也存在由木头或竹子制成的钩针。\n【金属钩针】光滑、坚固且经久耐用，但握感可能冰冷和僵硬。\n【木制钩针】感觉温暖而有弹性，但需要精心加工才能使其表面光滑。\n【塑料钩针】光滑且价格低廉，但与某些纱线一起使用时会发出吱吱声，并且相对容易弯曲或断裂。竹制钩针轻巧灵活，但容易碎裂或折断，尤其是较小的尺寸。",
        img: "./images/qc/gzhen02.jpg"
      },
      {
        desc: "3、钩针粗细度：一般用型号表示，普通钩针从2/0号（针轴直径2.0mm）到10/0号（针轴直径6.0mm），除此之外还有更细或更粗的钩针。\n新手贴士：钩针型号与线材大致对应，购买毛线时可查看或咨询其对应的钩针型号以作参考。",
        img: "./images/qc/gzhen03.jpg"
      },
      {
        desc: "粗型钩针：",
        img: "./images/qc/gzhen04.jpg"
      },
      {
        desc: "4、钩针图例：",
        img: "./images/qc/gzhen05.jpg"
      },
      {
        desc: "新手贴示：入门时使用4/0号（2.5mm）钩针搭配四股牛奶棉学习。\n\n"
      }
    ]
  },
  {
    id: 3,
    title: "棒针",
    desc: "棒针是棒针编织必备工具。",
    img: "./images/qc/bzhen.jpg",
    detailList: [
      {
        desc: "\n1、棒针类型：棒针包括双头棒针、单头棒针、环形针、袖口针等。\n【双头棒针】最常用的棒针，编织衣物的传统选择。针数较多时可能会在针头滑线，可使用堵头解决。\n【单头棒针】单头棒针可以帮助固定织片线圈不易从针头滑下。\n【环形针】一根软线连接两个针尖，制成一对环形针。\n【袖口针】袖口针用于编织袜子等环形织物。",
        img: "./images/qc/bzhen01.jpg"
      },
      {
        desc: "2、棒针材质：棒针通常有金属针、塑料针、竹针、木针。\n【金属棒针】光滑耐用。 如果发现自己编织得太紧，使用光滑的金属棒针会帮助编织者的张力松弛。\n【塑料棒针】表面平滑度介于金属和竹子之间。塑料棒针在使用过程中保持稳定的温度，这可能适合患有关节炎的人。\n【竹制棒针】竹子是一种轻巧、灵活的材料，可以制作出色的织针。它有助于保持针迹有规律地间隔，从而形成具有良好张力的均匀针织面料。竹针非常适合丝绸、丝光棉和竹纱等光滑纤维。竹针会随着使用而逐渐轻微翘曲，以适合您的手部曲率。\n【木制棒针】木针会选用品质较好的木料制成，使用起来感觉很豪华，价格较贵。木针通常具有蜡质表面，磨损后会变得光滑，从而形成柔软且有触感的表面。像竹针一样，它们有助于产生均匀的张力。",
        img: "./images/qc/bzhen02.jpg"
      },
      {
        desc: "3、棒针粗细度：（新手贴士：棒针型号与线材大致对应，购买毛线时可查看或咨询其对应的棒针型号以作参考）",
        img: "./images/qc/bzhen03.jpg"
      },
      {
        desc: "4、棒针图例：",
        img: "./images/qc/bzhen04.jpg"
      }
    ]
  },
  {
    id: 4,
    title: "记号扣",
    desc: "记号扣也称记号别针，用于挂在针脚处，便于确认起始针目或确认行数。记号扣材质主要分为塑料和金属，最常用的为普通的塑料记号扣。",
    img: "./images/qc/jhkou.jpg",
    detailList: [
      {
        desc: "\n1、记号扣类型（左图最常见、新手必备）",
        img: "./images/qc/jhkou01.jpg"
      },
      {
        desc: "2、使用示例:标记每一圈第一针的针目。",
        img: "./images/qc/jhkou02.jpg"
      }
    ]
  },
  {
    id: 5,
    title: "缝合针",
    desc: "缝合针在缝合织片、缝合编织主体（例如玩偶的不同部分）或藏线头时使用。缝合针按材质分为塑料和金属（钢针）",
    img: "./images/qc/fhzhen.jpg",
    detailList: [
      {
        desc: "\n1、缝合针材质：缝合针通常有金属和塑料两种材质。\n【塑料缝合针】针孔通常较大，适合较粗毛线的缝合。\n【金属缝合针】金属针较细，缝合时不会影响织物的结构。",
        img: "./images/qc/fhzhen01.jpg"
      },
      {
        desc: "2、使用示例：",
        img: "./images/qc/fhzhen02.jpg"
      },
      {
        desc: "\n新手贴士：可准备钢针和塑料针各一根以适用不同场景。\n\n"
      }
    ]
  },
  {
    id: 6,
    title: "剪刀",
    desc: "钩织过程中推荐准备中型剪刀（处理常规线材）和U型剪刀（前端较尖、处理较细线材）两种类型，适用于不同场景。",
    img: "./images/qc/jdao.jpg",
    detailList: [
      {
        img: "./images/qc/jdao01.jpg"
      }
    ]
  },
  {
    id: 7,
    title: "卷尺",
    desc: "卷尺用于测量织物尺寸，计算线材用量等。",
    img: "./images/qc/jchi.jpg",
    detailList: [
      {
        img: "./images/qc/jchi01.jpg"
      }
    ]
  },
  {
    id: 8,
    title: "密度尺",
    desc: "密度尺有两个作用，一是测量织片的密度，二是用于测量棒针的针号。",
    img: "./images/qc/mdchi.jpg",
    detailList: [
      {
        desc: "\n1、密度尺图例：密度尺可以是直接整体测量的正方形，也可以是单边测量的长条形。",
        img: "./images/qc/mdchi01.jpg"
      },
      {
        desc: "2、使用示例：",
        img: "./images/qc/mdchi02.jpg"
      }
    ]
  },
  {
    id: 9,
    title: "麻花针",
    desc: "借助麻花针可以在棒针编织中织出各式各样的“麻花”花纹。",
    img: "./images/qc/mhzhen.jpg",
    detailList: [
      {
        desc: "\n1、麻花针种类",
        img: "./images/qc/mhzhen01.jpg"
      },
      {
        desc: "2、麻花针花纹示例：",
        img: "./images/qc/mhzhen02.jpg"
      }
    ]
  },
  {
    id: 10,
    title: "针帽/堵头",
    desc: "针帽套在棒针针头处防止线圈滑落。",
    img: "./images/qc/zmao.jpg",
    detailList: [
      {
        desc: "\n针帽种类:",
        img: "h./images/qc/zmao01.jpg"
      }
    ]
  },
  {
    id: 11,
    title: "计数器",
    desc: "计数器套在棒针针头处记录行数。",
    img: "./images/qc/jsqi.jpg",
    detailList: [
      {
        desc: "\n常见计数器即左图所示，另外市场上还有用于计数的计数戒指，如右图所示，可以戴在编织者手上实时计数。",
        img: "./images/qc/jsqi.jpg"
      }
    ]
  },
  {
    id: 12,
    title: "绕线工具",
    desc: "绕线工具用于将散线缠绕成团。根据线材的多少选择不同的绕线器材。",
    img: "./images/qc/rxgju.jpg",
    detailList: [
      {
        desc: "\n1、伞架：将散线整理成绞或直接将绞线套在伞架上，搭配绕线器将散线绕成团。",
        img: "./images/qc/rxgju01.jpg"
      },
      {
        desc: "2、绕线板：散线较少时可以使用绕线板简单绕线。",
        img: "./images/qc/rxgju02.jpg"
      },
      {
        desc: "3、手摇绕线器：散线较多时可以使用手摇绕线器进行绕线。",
        img: "./images/qc/rxgju03.jpg"
      }
    ]
  },
  {
    id: 13,
    title: "定位针",
    desc: "定位针原多用于立体剪裁，在编织中可以帮助固定织物形状及位置，便于缝合。",
    img: "./images/qc/dwzhen.jpg",
    detailList: [
      {
        desc: "\n定位针种类:最常见的定位针主要有T型针和大头珠针两种，当然市场上还存在各式各样的定位针，其用途一致。",
        img: "./images/qc/dwzhen01.jpg"
      }
    ]
  },
  {
    id: 14,
    title: "镊子",
    desc: "镊子可以用于往织物中塞填充棉、粘贴玩偶眼睛配件等。在微钩时镊子也常用于粘贴各种细微配件或在染色时使用。",
    img: "https://s2.loli.net/2022/01/25/O9pGiAseXYDP7r2.png",
    detailList: [
      {
        img: "https://s2.loli.net/2022/01/26/djTCY6w3AU1xOSQ.png"
      }
    ]
  },
  {
    id: 15,
    title: "填充棉",
    desc: "填充棉用于填充织物，钩织玩偶、抱枕等需要用到。",
    img: "./images/qc/tcmian.jpg",
    detailList: [
      {
        desc: "\n1、填充棉种类：常见的填充棉有珍珠棉和PP棉两种类型。\n【珍珠棉】高弹耐压，饱满厚实，颗粒状。\n【PP棉】蓬松柔软",
        img: "./images/qc/tcmian01.jpg"
      },
      {
        desc: "2、填充方法：织物即将钩完时留1-2圈，使用镊子或剪刀尖部向内塞填充棉。",
        img: "./images/qc/tcmian02.jpg"
      },
      {
        desc: "新手贴示：用量参考45cm*45cm抱枕的用量约为500克，实际情况根据个人对织物的柔软度喜好而异。\n\n"
      }
    ]
  },
  {
    id: 16,
    title: "镊子",
    desc: "镊子用于塞填充棉，或者辅助微钩。",
    img: "./images/qc/nzi.jpg",
    detailList: [
      {
        img: "./images/qc/nzi01.jpg"
      }
    ]
  },
  {
    id: 17,
    title: "染料",
    desc: "染料常用于微钩中对原色织物染色，比如微钩水果、花卉等，燃料浓度较高，通常按照一定比例搭配稀释剂或清水使用。",
    img: "./images/qc/rliao.jpg",
    detailList: [
      {
        img: "./images/qc/rliao01.jpg"
      }
    ]
  },
  {
    id: 18,
    title: "尖钳",
    desc: "尖钳用于用到金属配件的织物，比如挂件、钥匙扣、需要定型的花卉、玩偶等。",
    img: "./images/qc/jqian.jpg",
    detailList: [
      {
        img: "./images/qc/jqian01.jpg"
      }
    ]
  },
  {
    id: 19,
    title: "热熔胶枪",
    desc: "热熔胶枪用于黏贴织物与配件，使用时待其冷却方可粘牢。",
    img: "./images/qc/jqiang.jpg",
    detailList: [
      {
        img: "./images/qc/jqiang01.jpg"
      }
    ]
  }
]

export const TJ_List_Data = [
  {
    id: 1,
    title: "雪花熊",
    desc: "钩针：4.0-6.0mm\n线材：绒线200g(具体因线材而异)\n填充棉：珍珠棉\n成品高度：40cm",
    img: "https://s2.loli.net/2022/01/26/ij7pRsyKQxeHZUa.png",
    detail: "https://ingenueland.online/crochet-time/images/tujie/xuehuaxiong.jpg"
  },
  {
    id: 2,
    title: "粉茶兔",
    desc: "钩针：4.0-6.0mm\n线材：绒线150g(鼻子：粉色4股牛奶棉)\n填充棉：pp棉\n成品高度：30cm(加上耳朵40cm)",
    img: "https://s2.loli.net/2022/01/26/NmheaOdnLIlZV5C.png",
    detail: "https://ingenueland.online/crochet-time/images/tujie/fenchatu.jpg"
  },
  {
    id: 3,
    title: "灰色长绒兔",
    desc: "钩针：4.0-6.0mm\n线材：绒线300g\n填充棉：pp棉\n成品高度：30cm(加上耳朵45cm)",
    img: "https://s2.loli.net/2022/01/26/GQnk54AXeqSULpE.png",
    detail: "https://ingenueland.online/crochet-time/images/tujie/huisechangrongtu.jpg"
  },
  {
    id: 101,
    title: "水蜜桃耳环",
    desc: "钩针：0.5mm\n线材：DMC80\n染色：Rosti红色\n成品大小：直径0.8cm 高度1.2cm",
    img: "https://s2.loli.net/2022/01/26/eMVlaK1LfspUE2G.png",
    detail: "https://ingenueland.online/crochet-time/images/tujie/shuimitaoerhuan.jpg"
  },
  {
    id: 102,
    title: "水蜜桃挂件",
    desc: "钩针：0.75mm\n线材：8号蕾丝线\n染色：Rosti红色\n成品大小：直径2.5cm 高度2cm",
    img: "https://s2.loli.net/2022/01/26/3L9fRdEloyXOk2H.png",
    detail: "https://ingenueland.online/crochet-time/images/tujie/shuimitaoguajian.jpg"
  },
  {
    id: 201,
    title: "白熊眼罩",
    desc: "钩针：4.0mm\n线材：仿羊毛毡",
    img: "https://s2.loli.net/2022/01/26/q81UFXKWIGSlYMZ.png",
    detail: "https://ingenueland.online/crochet-time/images/tujie/baixiongyanzhao.jpg"
  },
  {
    id: 202,
    title: "熊猫卡衣",
    desc: "钩针：3.0mm\n线材：雪兰娇中粗羊毛线\n配件：塑料卡包内芯、18mm磁扣",
    img: "https://s2.loli.net/2022/01/26/nYe3KQg4kMc7IGR.png",
    detail: "https://ingenueland.online/crochet-time/images/tujie/xiongmaokayi.jpg"
  }
]

export const ColorFill_Path_List_Data = [
  {
    id: 1,
    img: 'https://ingenueland.online/crochet-time/images/color-fill/ct-color-fill-svg-sock-1.png',
    path: [
      "M110.41 35C110.41 34.2374 110.411 33.6534 110.48 33.1816C110.547 32.7203 110.672 32.4299 110.872 32.2218C111.076 32.01 111.418 31.8225 112.043 31.6927C112.669 31.5625 113.532 31.5 114.725 31.5H154.725C156.323 31.5 156.85 31.7659 157.09 32.1437C157.226 32.3571 157.316 32.6698 157.363 33.1574C157.41 33.6438 157.41 34.2416 157.41 35V52.5H110.41V35Z",
      "M157.411 53.5V103C157.411 108.959 158.732 112.251 160.141 115.758C160.512 116.681 160.888 117.618 161.248 118.623L131.985 124.475L109.513 112.751C110.393 109.88 110.41 107.772 110.41 103V53.5H157.411Z",
      "M132.457 125.4L161.575 119.577L163.428 125.138C164.839 131.033 163.805 135.335 161.518 138.546C159.215 141.779 155.599 143.969 151.737 145.531L140.15 149.393C135.411 140.622 133.579 135.416 132.457 125.4Z",
      "M94.1402 182.268L88.3691 168.803L88.363 168.789L88.356 168.775C86.4589 165.013 84.7215 162.552 82.263 160.602C79.8185 158.663 76.6946 157.256 72.09 155.534L62.7794 151.809C69.4398 144.836 75.07 141.336 82.9589 136.43C83.9902 135.789 85.0602 135.124 86.176 134.424C92.8365 130.244 98.2014 126.258 102.265 122.144C102.485 121.921 102.701 121.703 102.914 121.489C105.556 118.823 107.658 116.702 109.14 113.684L131.442 125.32C132.572 135.553 134.429 140.888 139.198 149.735C135.454 151.171 132.44 152.801 129.628 154.713C126.219 157.033 123.105 159.77 119.365 163.058C118.786 163.566 118.193 164.088 117.581 164.624L117.575 164.629L117.569 164.635C113.078 168.831 109.478 171.842 105.615 174.663C102.25 177.12 98.6808 179.436 94.1402 182.268Z",
      "M71.7245 156.464L71.7244 156.464L71.735 156.468C76.3371 158.189 79.3307 159.552 81.6422 161.385C83.9378 163.206 85.5944 165.52 87.4567 169.211L93.2808 182.801C87.2472 186.485 81.4256 188.243 76.1647 188.093C70.8156 187.941 66.0103 185.817 62.1021 181.672C58.1732 176.754 56.3985 171.622 56.5044 166.636C56.6083 161.747 58.5209 156.954 62.0638 152.6L71.7245 156.464Z",
    ],
    },
    {
        id: 2,
        img: 'https://ingenueland.online/crochet-time/images/color-fill/ct-color-fill-svg-sock-2.png',
        path: [
          "M110.41 35C110.41 34.2374 110.411 33.6534 110.48 33.1816C110.547 32.7203 110.672 32.4299 110.872 32.2218C111.076 32.01 111.418 31.8225 112.043 31.6927C112.669 31.5625 113.532 31.5 114.725 31.5H154.725C156.323 31.5 156.85 31.7659 157.09 32.1437C157.226 32.3571 157.316 32.6698 157.363 33.1574C157.41 33.6438 157.41 34.2416 157.41 35V52.5H110.41V35Z",
          "M157.411 53.5V103C157.411 108.959 158.732 112.251 160.141 115.758C160.512 116.681 160.888 117.618 161.248 118.623L131.985 124.475L109.513 112.751C110.393 109.88 110.41 107.772 110.41 103V53.5H157.411Z",
          "M132.457 125.4L161.575 119.577L163.428 125.138C164.839 131.033 163.805 135.335 161.518 138.546C159.215 141.779 155.599 143.969 151.737 145.531L140.15 149.393C135.411 140.622 133.579 135.416 132.457 125.4Z",
          "M94.1402 182.268L88.3691 168.803L88.363 168.789L88.356 168.775C86.4589 165.013 84.7215 162.552 82.263 160.602C79.8185 158.663 76.6946 157.256 72.09 155.534L62.7794 151.809C69.4398 144.836 75.07 141.336 82.9589 136.43C83.9902 135.789 85.0602 135.124 86.176 134.424C92.8365 130.244 98.2014 126.258 102.265 122.144C102.485 121.921 102.701 121.703 102.914 121.489C105.556 118.823 107.658 116.702 109.14 113.684L131.442 125.32C132.572 135.553 134.429 140.888 139.198 149.735C135.454 151.171 132.44 152.801 129.628 154.713C126.219 157.033 123.105 159.77 119.365 163.058C118.786 163.566 118.193 164.088 117.581 164.624L117.575 164.629L117.569 164.635C113.078 168.831 109.478 171.842 105.615 174.663C102.25 177.12 98.6808 179.436 94.1402 182.268Z",
          "M71.7245 156.464L71.7244 156.464L71.735 156.468C76.3371 158.189 79.3307 159.552 81.6422 161.385C83.9378 163.206 85.5944 165.52 87.4567 169.211L93.2808 182.801C87.2472 186.485 81.4256 188.243 76.1647 188.093C70.8156 187.941 66.0103 185.817 62.1021 181.672C58.1732 176.754 56.3985 171.622 56.5044 166.636C56.6083 161.747 58.5209 156.954 62.0638 152.6L71.7245 156.464Z",
        ],
        },
]

// <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M62.0005 182C70.0004 190.5 81.5561 190.748 94.0006 183L88.0002 169C84.2379 161.539 81.2099 159.444 72.0002 156L62.0009 152C54.5002 161 54.0007 172 62.0005 182Z" fill="#DDDDDD" stroke="#F6F6F6"/>
// <path d="M164 125L162.007 119L132.001 124C133.142 134.529 135.014 140.821 140.001 150L152 146C159.815 142.843 166.895 137.053 164 125Z" fill="#DDDDDD" stroke="#F6F6F6"/>
// <path d="M158.001 59H110.001V66H158.001V59Z" fill="#DDDDDD"/>
// <path d="M158.001 73H110.001V80H158.001V73Z" fill="#DDDDDD"/>
// <path d="M158.001 87H110.001V94C128.844 95.8138 139.394 97.1812 158.001 95V87Z" fill="#DDDDDD"/>
// <path d="M110.001 101V102C110.001 104.64 109.995 106.444 109.845 108C127.438 114.64 139.28 118.633 160 113C159.433 110.724 158.5 107.5 158.001 104C139.261 107.697 128.737 104.86 110.001 101Z" fill="#DDDDDD"/>
// <path d="M107 115.652C105.648 117.751 103.982 119.785 102 121.792L113 126C120 129 123.5 135.5 125 140L130 155.127C131.424 154.158 132.901 153.263 134.5 152.429L130 136C127.5 128.5 126 124.711 117 120L107 115.652Z" fill="#DDDDDD"/>
// <path d="M104 156C100 149 98.0001 146 91.0001 143L78.0001 139.009L84.0001 135L96.0001 139.009C104 142.009 106 146.5 110 153L116 166.5L115.741 166.742C113.842 168.516 112.465 169.804 111.191 170.928L104 156Z" fill="#DDDDDD"/>
// <path d="M100 179.191L94.0001 165C90.2378 157.539 87.2098 155.444 78.0001 152L66.0312 148L72.0004 143.09L85.0001 147C93.0001 150 95.0001 152.5 99.0001 159L106 175.067C104.108 176.449 102.152 177.785 100 179.191Z" fill="#DDDDDD"/>
// <path d="M121 162.189L115 148C113 143.5 111 138 104 135L91.0001 130.442C93.1546 128.976 95.2354 127.488 97.1062 126.035L109 130C116 133 118 139.5 120 144L125.5 158.487L121 162.189Z" fill="#DDDDDD"/>
// <path d="M116 166.5L110 153C106 146.5 104 142.009 96.0001 139.009L84.0001 135L78.0001 139.009L91.0001 143C98.0001 146 100 149 104 156L111.191 170.928M116 166.5L115.741 166.742M116 166.5C115.913 166.582 115.826 166.662 115.741 166.742M111.226 171L111.191 170.928M97.0001 126L97.1062 126.035M97.1062 126.035C95.2354 127.488 93.1546 128.976 91.0001 130.442L104 135C111 138 113 143.5 115 148L121 162.189L125.5 158.487L120 144C118 139.5 116 133 109 130L97.1062 126.035ZM111.191 170.928C112.465 169.804 113.842 168.516 115.741 166.742M158.001 104C139.261 107.697 128.737 104.86 110.001 101V102C110.001 104.64 109.995 106.444 109.845 108C127.438 114.64 139.28 118.633 160 113C159.433 110.724 158.5 107.5 158.001 104ZM102 121.792L113 126C120 129 123.5 135.5 125 140L130 155.127C131.424 154.158 132.901 153.263 134.5 152.429L130 136C127.5 128.5 126 124.711 117 120L107 115.652C105.648 117.751 103.982 119.785 102 121.792ZM106 175.067L99.0001 159C95.0001 152.5 93.0001 150 85.0001 147L72.0004 143.09L66.0312 148L78.0001 152C87.2098 155.444 90.2378 157.539 94.0001 165L100 179.191C102.152 177.785 104.108 176.449 106 175.067ZM110.001 59H158.001V66H110.001V59ZM110.001 73H158.001V80H110.001V73ZM110.001 87H158.001V95C139.394 97.1812 128.844 95.8138 110.001 94V87Z" stroke="#F6F6F6"/>
// <path d="M158.001 52H110.001V59H158.001V52Z" fill="#DDDDDD"/>
// <path d="M158.001 66H110.001V73H158.001V66Z" fill="#DDDDDD"/>
// <path d="M158.001 80H110.001V87H158.001V80Z" fill="#DDDDDD"/>
// <path d="M158.001 95C139.394 97.1812 128.844 95.8138 110.001 94V101C128.737 104.86 139.261 107.697 158.001 104V95Z" fill="#DDDDDD"/>
// <path d="M132.001 124L162.007 119C160.955 115.932 160.374 114.5 160 113C139.28 118.633 127.438 114.64 109.845 108C109.711 109.391 109.462 110.584 109.001 112C108.435 113.243 107.769 114.458 107 115.652L117 120C126 124.711 127.5 128.5 130 136L134.5 152.429C136.172 151.557 137.979 150.752 140.001 150C135.014 140.821 133.142 134.529 132.001 124Z" fill="#DDDDDD"/>
// <path d="M116 166.5C117.59 165.109 119.292 163.634 121 162.189L115 148C113 143.5 111 138 104 135L91.0001 130.442C88.6955 132.01 86.3066 133.553 84.0001 135L96.0001 139.009C104 142.009 106 146.5 110 153L116 166.5Z" fill="#DDDDDD"/>
// <path d="M125.5 158.487L120 144C118 139.5 116 133 109 130L97.1062 126.035C98.9998 124.565 100.678 123.131 102 121.792L113 126C120 129 123.5 135.5 125 140L130 155.127L125.5 158.487Z" fill="#DDDDDD"/>
// <path d="M106 175.067L99.0001 159C95.0001 152.5 93.0001 150 85.0001 147L72.0003 143.09L77.6376 139.009L91.0001 143C98.0001 146 100 149 104 156L111.191 170.928C109.576 172.352 108.129 173.513 106 175.067Z" fill="#DDDDDD"/>
// <path d="M94.0008 183L88.0003 169C84.238 161.539 81.21 159.444 72.0003 156L62.001 152L66.0312 148L78.0001 152C87.2098 155.444 90.2378 157.539 94.0001 165L100 179.191C98.1699 180.387 96.1975 181.633 94.0008 183Z" fill="#DDDDDD"/>
// <path d="M116 166.5L110 153C106 146.5 104 142.009 96.0001 139.009L84.0001 135C86.3066 133.553 88.6955 132.01 91.0001 130.442L104 135C111 138 113 143.5 115 148L121 162.189C119.292 163.634 117.59 165.109 116 166.5ZM116 166.5L115.741 166.742C115.826 166.662 115.913 166.582 116 166.5ZM111.226 171L111.191 170.928M97.0001 126L97.1062 126.035M97.1062 126.035C98.9998 124.565 100.678 123.131 102 121.792L113 126C120 129 123.5 135.5 125 140L130 155.127L125.5 158.487L120 144C118 139.5 116 133 109 130L97.1062 126.035ZM111.191 170.928C109.576 172.352 108.129 173.513 106 175.067L99.0001 159C95.0001 152.5 93.0001 150 85.0001 147L72.0003 143.09L77.6376 139.009L91.0001 143C98.0001 146 100 149 104 156L111.191 170.928ZM158.001 104V95C139.394 97.1812 128.844 95.8138 110.001 94V101C128.737 104.86 139.261 107.697 158.001 104ZM162.007 119L132.001 124C133.142 134.529 135.014 140.821 140.001 150C137.979 150.752 136.172 151.557 134.5 152.429L130 136C127.5 128.5 126 124.711 117 120L107 115.652C107.769 114.458 108.435 113.243 109.001 112C109.462 110.584 109.711 109.391 109.845 108C127.438 114.64 139.28 118.633 160 113C160.374 114.5 160.955 115.932 162.007 119ZM94.0008 183L88.0003 169C84.238 161.539 81.21 159.444 72.0003 156L62.001 152L66.0312 148L78.0001 152C87.2098 155.444 90.2378 157.539 94.0001 165L100 179.191C98.1699 180.387 96.1975 181.633 94.0008 183ZM158.001 52H110.001V59H158.001V52ZM110.001 66H158.001V73H110.001V66ZM110.001 80H158.001V87H110.001V80Z" stroke="#F6F6F6"/>
// <path d="M114.001 30C111.001 30 110.001 31 110.001 34V52H158.001V34C158.001 31 157.001 30 154.001 30H114.001Z" fill="#DDDDDD" stroke="#F6F6F6"/>
// </svg>


export const ColorFill_Color_List_Data = [
  {
    id: 1,
    title: '萌4',
    colors: [
      {
        name: '#01',
        value: '#F3F2F0'
      },
      {
        name: '#02',
        value: '#F5F6F1'
      },
      {
        name: '#03',
        value: '#F3EADB'
      },
      {
        name: '#04',
        value: '#FAE9E1'
      },
      {
        name: '#01',
        value: '#FED5DD'
      },
      {
        name: '#02',
        value: '#FBA3C9'
      },
      {
        name: '#01',
        value: '#F67B97'
      },
      {
        name: '#02',
        value: '#FF6CBC'
      },
      {
        name: '#03',
        value: '#C52D2C'
      },
      {
        name: '#04',
        value: '#F0E4BC'
      },
      {
        name: '#01',
        value: '#FCE281'
      },
      {
        name: '#02',
        value: '#F2E15D'
      },
      {
        name: '#01',
        value: '#F6B453'
      },
      {
        name: '#02',
        value: '#DF5F3C'
      },
      {
        name: '#03',
        value: '#D5B6DC'
      },
      {
        name: '#04',
        value: '#D08BDE'
      },
      {
        name: '#01',
        value: '#E2FAE6'
      },
      {
        name: '#02',
        value: '#98CAFA'
      },
      {
        name: '#01',
        value: '#83A0E7'
      },
      {
        name: '#02',
        value: '#3850B0'
      },
      {
        name: '#03',
        value: '#272954'
      },
      {
        name: '#04',
        value: '#AEE5E2'
      },
      {
        name: '#01',
        value: '#59A3BA'
      },
      {
        name: '#02',
        value: '#DCFAD3'
      },
      {
        name: '#01',
        value: '#98BC44'
      },
      {
        name: '#02',
        value: '#415B2E'
      },
      {
        name: '#03',
        value: '#048C62'
      },
      {
        name: '#04',
        value: '#EAE1D0'
      },
      {
        name: '#01',
        value: '#F0C892'
      },
      {
        name: '#02',
        value: '#D5A268'
      },
      {
        name: '#01',
        value: '#9B734C'
      },
      {
        name: '#02',
        value: '#6D473C'
      },
      {
        name: '#03',
        value: '#A4A4A4'
      },
      {
        name: '#04',
        value: '#000000'
      },
      {
        name: '#01',
        value: '#E8CEA2'
      },
      {
        name: '#02',
        value: '#E4E4E4'
      },
      {
        name: '#01',
        value: '#FAB6AA'
      },
      {
        name: '#02',
        value: '#D5A7BE'
      },
      {
        name: '#03',
        value: '#FD780F'
      },
      {
        name: '#04',
        value: '#DAD46A'
      },
      {
        name: '#01',
        value: '#81C7C7'
      },
      {
        name: '#02',
        value: '#6783A1'
      },
      {
        name: '#01',
        value: '#F2DDD5'
      },
      {
        name: '#02',
        value: '#EEC3C4'
      },
      {
        name: '#03',
        value: '#70B8BE'
      },
      {
        name: '#04',
        value: '#196182'
      },
      {
        name: '#01',
        value: '#BDCE9E'
      },
      {
        name: '#02',
        value: '#D3B358'
      },
      {
        name: '#01',
        value: '#6A447A'
      },
      {
        name: '#02',
        value: '#7F2735'
      },
      {
        name: '#03',
        value: '#F8F8F1'
      },
      {
        name: '#04',
        value: '#F49CB7'
      },
      {
        name: '#01',
        value: '#E4AFCF'
      },
      {
        name: '#02',
        value: '#02937E'
      },
      {
        name: '#01',
        value: '#7F9351'
      },
      {
        name: '#02',
        value: '#C5B7D3'
      },
      {
        name: '#03',
        value: '#A58CBB'
      },
      {
        name: '#04',
        value: '#04A4C5'
      },
      {
        name: '#01',
        value: '#1F6F5F'
      },
      {
        name: '#02',
        value: '#995920'
      },
      {
        name: '#01',
        value: '#7D5121'
      },
      {
        name: '#02',
        value: '#944928'
      },
      {
        name: '#03',
        value: '#F5C73D'
      },
      {
        name: '#04',
        value: '#EABE8D'
      },
      {
        name: '#01',
        value: '#EEA48F'
      },
      {
        name: '#02',
        value: '#99282D'
      },
      {
        name: '#02',
        value: '#B15249'
      },
    ]
  },
  {
    id: 2,
    title: 'lifeyarn 羽',
    colors: [
      {
        name: '01',
        value: '#F3EBE0',
      },
      {
        name: '01',
        value: '#F1E5E7',
      },
      {
        name: '01',
        value: '#E4E2E0',
      },
      {
        name: '01',
        value: '#F7BFA9',
      },
      {
        name: '01',
        value: '#ADADAD',
      },
      {
        name: '01',
        value: '#2C5238',
      },
      {
        name: '01',
        value: '#86718E',
      },
      {
        name: '01',
        value: '#CCD2BC',
      },
      {
        name: '01',
        value: '#90A77D',
      },
      {
        name: '01',
        value: '#DC7D45',
      },
      {
        name: '01',
        value: '#F3CCA4',
      },
      {
        name: '01',
        value: '#FFC459',
      },
      {
        name: '01',
        value: '#AF2728',
      },
      {
        name: '01',
        value: '#72323C',
      },
      {
        name: '01',
        value: '#D0CB8A',
      },
      {
        name: '01',
        value: '#73C26E',
      },
      {
        name: '01',
        value: '#D1E4EB',
      },
      {
        name: '01',
        value: '#78BEE8',
      },
      {
        name: '01',
        value: '#8FAEDF',
      },
      {
        name: '01',
        value: '#13193A',
      },
      {
        name: '01',
        value: '#518F7F',
      },
      {
        name: '01',
        value: '#B39FCC',
      },
      {
        name: '01',
        value: '#B19F9E',
      },
      {
        name: '01',
        value: '#6A4F49',
      },
      {
        name: '01',
        value: '#EFE5AB',
      },
      {
        name: '01',
        value: '#E7DECB',
      },
      {
        name: '01',
        value: '#CD8893',
      },
      {
        name: '01',
        value: '#E3A286',
      },
    ]
  },
  {
    id: 3,
    title: 'superwash merino',
    colors: [
      {
        name: '01',
        value: '#FBF6F4',
      },
      {
        name: '01',
        value: '#D1CB6B',
      },
      {
        name: '01',
        value: '#6F784B',
      },
      {
        name: '01',
        value: '#61A3D2',
      },
      {
        name: '01',
        value: '#3E4B82',
      },
      {
        name: '01',
        value: '#AD251F',
      },
      {
        name: '01',
        value: '#59342E',
      },
      {
        name: '01',
        value: '#C0C0C3',
      }
    ]
  }
]

