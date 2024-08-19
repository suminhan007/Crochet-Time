
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
    "cap_id": "0",
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
      },
      {
        id: '3',
        title: '滑针',
        imgList: [
          {
            img_src:'./images/knit/hzhen1.jpg',
          },
          {
            img_src:'./images/knit/hzhen2.jpg',
          },
          {
            img_src:'./images/knit/hzhen3.jpg',
          },
        ]
      },
      {
        id: '4',
        title: '空针',
        imgList: [
          {
            img_src:'./images/knit/kzhen1.jpg',
          },
          {
            img_src:'./images/knit/kzhen2.jpg',
          },
          {
            img_src:'./images/knit/kzhen3.jpg',
          },
          {
            img_src:'./images/knit/kzhen4.jpg',
          },
        ]
      },
      {
        id: '5',
        title: '左加针',
        imgList: [
          {
            img_src:'./images/knit/zjzhen1.jpg',
          },
          {
            img_src:'./images/knit/zjzhen2.jpg',
          },
          {
            img_src:'./images/knit/zjzhen3.jpg',
          },
        ]
      },
      {
        id: '6',
        title: '右加针',
        imgList: [
          {
            img_src:'./images/knit/yjzhen1.jpg',
          },
          {
            img_src:'./images/knit/yjzhen2.jpg',
          },
          {
            img_src:'./images/knit/yjzhen3.jpg',
          },
          {
            img_src:'./images/knit/yjzhen4.jpg',
          },
        ]
      },
      {
        id: '7',
        title: '左减针',
        imgList: [
          {
            img_src:'./images/knit/zjianzhen1.jpg',
          },
          {
            img_src:'./images/knit/zjianzhen2.jpg',
          },
          {
            img_src:'./images/knit/zjianzhen3.jpg',
          },
          {
            img_src:'./images/knit/zjianzhen4.jpg',
          },
          {
            img_src:'./images/knit/zjianzhen5.jpg',
          },
        ]
      },
      {
        id: '8',
        title: '右减针',
        imgList: [
          {
            img_src:'./images/knit/yjianzhen1.jpg',
          },
          {
            img_src:'./images/knit/yjianzhen2.jpg',
          },
          {
            img_src:'./images/knit/yjianzhen3.jpg',
          },
          {
            img_src:'./images/knit/yjianzhen4.jpg',
          },{
            img_src:'./images/knit/yjianzhen5.jpg',
          },
        ]
      },
      {
        id: '9',
        title: '3针并针',
        imgList: [
          {
            img_src:'./images/knit/djianzhen1.jpg',
          },
          {
            img_src:'./images/knit/djianzhen2.jpg',
          },
          {
            img_src:'./images/knit/djianzhen3.jpg',
          },
        ]
      },
      {
        id: '10',
        title: '加线',
        imgList: [
          {
            img_src:'./images/knit/jxian1.jpg',
          },
          {
            img_src:'./images/knit/jxian2.jpg',
          },
          {
            img_src:'./images/knit/jxian3.jpg',
          },
        ]
      }
    ]
  },
  {
    "cap_id": "1",
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
          "M114.001 30C111.001 30 110.001 31 110.001 34V52H158.001V34C158.001 31 157.001 30 154.001 30H114.001Z",
          "M116 166.5L110 153C106 146.5 104 142.009 96.0001 139.009L84.0001 135C86.3066 133.553 88.6955 132.01 91.0001 130.442L104 135C111 138 113 143.5 115 148L121 162.189C119.292 163.634 117.59 165.109 116 166.5ZM116 166.5L115.741 166.742C115.826 166.662 115.913 166.582 116 166.5ZM111.226 171L111.191 170.928M97.0001 126L97.1062 126.035M97.1062 126.035C98.9998 124.565 100.678 123.131 102 121.792L113 126C120 129 123.5 135.5 125 140L130 155.127L125.5 158.487L120 144C118 139.5 116 133 109 130L97.1062 126.035ZM111.191 170.928C109.576 172.352 108.129 173.513 106 175.067L99.0001 159C95.0001 152.5 93.0001 150 85.0001 147L72.0003 143.09L77.6376 139.009L91.0001 143C98.0001 146 100 149 104 156L111.191 170.928ZM158.001 104V95C139.394 97.1812 128.844 95.8138 110.001 94V101C128.737 104.86 139.261 107.697 158.001 104ZM162.007 119L132.001 124C133.142 134.529 135.014 140.821 140.001 150C137.979 150.752 136.172 151.557 134.5 152.429L130 136C127.5 128.5 126 124.711 117 120L107 115.652C107.769 114.458 108.435 113.243 109.001 112C109.462 110.584 109.711 109.391 109.845 108C127.438 114.64 139.28 118.633 160 113C160.374 114.5 160.955 115.932 162.007 119ZM94.0008 183L88.0003 169C84.238 161.539 81.21 159.444 72.0003 156L62.001 152L66.0312 148L78.0001 152C87.2098 155.444 90.2378 157.539 94.0001 165L100 179.191C98.1699 180.387 96.1975 181.633 94.0008 183ZM158.001 52H110.001V59H158.001V52ZM110.001 66H158.001V73H110.001V66ZM110.001 80H158.001V87H110.001V80Z",
          "M116 166.5L110 153C106 146.5 104 142.009 96.0001 139.009L84.0001 135L78.0001 139.009L91.0001 143C98.0001 146 100 149 104 156L111.191 170.928M116 166.5L115.741 166.742M116 166.5C115.913 166.582 115.826 166.662 115.741 166.742M111.226 171L111.191 170.928M97.0001 126L97.1062 126.035M97.1062 126.035C95.2354 127.488 93.1546 128.976 91.0001 130.442L104 135C111 138 113 143.5 115 148L121 162.189L125.5 158.487L120 144C118 139.5 116 133 109 130L97.1062 126.035ZM111.191 170.928C112.465 169.804 113.842 168.516 115.741 166.742M158.001 104C139.261 107.697 128.737 104.86 110.001 101V102C110.001 104.64 109.995 106.444 109.845 108C127.438 114.64 139.28 118.633 160 113C159.433 110.724 158.5 107.5 158.001 104ZM102 121.792L113 126C120 129 123.5 135.5 125 140L130 155.127C131.424 154.158 132.901 153.263 134.5 152.429L130 136C127.5 128.5 126 124.711 117 120L107 115.652C105.648 117.751 103.982 119.785 102 121.792ZM106 175.067L99.0001 159C95.0001 152.5 93.0001 150 85.0001 147L72.0004 143.09L66.0312 148L78.0001 152C87.2098 155.444 90.2378 157.539 94.0001 165L100 179.191C102.152 177.785 104.108 176.449 106 175.067ZM110.001 59H158.001V66H110.001V59ZM110.001 73H158.001V80H110.001V73ZM110.001 87H158.001V95C139.394 97.1812 128.844 95.8138 110.001 94V87Z",
          "M164 125L162.007 119L132.001 124C133.142 134.529 135.014 140.821 140.001 150L152 146C159.815 142.843 166.895 137.053 164 125Z",
          "M62.0005 182C70.0004 190.5 81.5561 190.748 94.0006 183L88.0002 169C84.2379 161.539 81.2099 159.444 72.0002 156L62.0009 152C54.5002 161 54.0007 172 62.0005 182Z"
        ],
  },
  {
    id: 3,
    img: 'https://ingenueland.online/crochet-time/images/color-fill/ct-color-fill-svg-sock-3.png',
    path: [       
      "M114.001 30C111.001 30 110.001 31 110.001 34V52H158.001V34C158.001 31 157.001 30 154.001 30H114.001Z",
      "M86.0011 134C76.1511 140.181 69.8151 143.678 62.001 152L72.0003 156C81.21 159.444 84.238 161.539 88.0003 169L94.0008 183C98.7809 180.026 102.499 177.624 106 175.067C109.883 172.232 113.499 169.207 118.001 165C122.583 160.991 126.095 157.783 130 155.127C132.913 153.146 136.045 151.471 140.001 150C135.014 140.821 133.142 134.529 132.001 124L162.007 119C160.218 113.784 158.001 109.693 158.001 102V52H110.001V102C110.001 107 109.978 109 109.001 112C107.441 115.43 105.109 118.645 102 121.792C97.975 125.868 92.6462 129.83 86.0011 134Z",
      "M148 61C148 64.866 144.866 68 141 68C137.134 68 134 64.866 134 61C134 57.134 137.134 54 141 54C144.866 54 148 57.134 148 61ZM111 74C114.866 74 118 70.866 118 67C118 63.134 114.866 60 111 60C110.66 60 110.326 60.0242 110 60.0709V73.9291C110.326 73.9758 110.66 74 111 74ZM155 90C151.134 90 148 86.866 148 83C148 79.134 151.134 76 155 76C156.073 76 157.09 76.2417 158 76.6736V89.3264C157.09 89.7583 156.073 90 155 90ZM134 86C134 89.866 130.866 93 127 93C123.134 93 120 89.866 120 86C120 82.134 123.134 79 127 79C130.866 79 134 82.134 134 86ZM123 105C123 108.866 119.866 112 116 112C113.453 112 111.224 110.64 110 108.608V101.392C111.224 99.3596 113.453 98 116 98C119.866 98 123 101.134 123 105ZM146 105C146 108.866 142.866 112 139 112C135.134 112 132 108.866 132 105C132 101.134 135.134 98 139 98C142.866 98 146 101.134 146 105ZM159 116C155.134 116 152 112.866 152 109C152 105.474 154.607 102.556 158 102.071C158.201 107.705 158.713 110.677 160.798 115.767C160.224 115.919 159.621 116 159 116ZM127 127C127 130.866 123.866 134 120 134C116.134 134 113 130.866 113 127C113 123.134 116.134 120 120 120C123.866 120 127 123.134 127 127ZM125 159C121.134 159 118 155.866 118 152C118 148.134 121.134 145 125 145C128.866 145 132 148.134 132 152C132 152.695 131.898 153.366 131.71 154C129.209 155.558 128.049 156.509 126.477 157.799L126.476 157.8C126.03 158.166 125.552 158.558 125 159ZM97.9996 134C101.866 134 105 130.866 105 127C105 124.769 103.956 122.782 102.33 121.5C98.5064 125.15 96.1781 127.045 91.7925 130.239C92.9614 132.474 95.3023 134 97.9996 134ZM97.9996 154C101.866 154 105 150.866 105 147C105 143.134 101.866 140 97.9996 140C94.1336 140 90.9996 143.134 90.9996 147C90.9996 150.866 94.1336 154 97.9996 154ZM71.9996 149C75.8656 149 78.9996 145.866 78.9996 142C78.9996 141.058 78.5627 140.16 78.1638 139.339C78.108 139.225 78.053 139.112 78 139C73.6273 141.622 71.4864 143.214 67.1006 147C68.3631 148.237 70.0923 149 71.9996 149ZM96.9996 172C96.9996 168.134 100.134 165 104 165C107.526 165 110.443 167.608 110.929 171C107.191 174.3 104.995 175.808 101 178.326C98.6346 177.203 96.9996 174.792 96.9996 172Z",
      "M164 125L162.007 119L132.001 124C133.142 134.529 135.014 140.821 140.001 150L152 146C159.815 142.843 166.895 137.053 164 125Z",
      "M62.0005 182C70.0004 190.5 81.5561 190.748 94.0006 183L88.0002 169C84.2379 161.539 81.2099 159.444 72.0002 156L62.0009 152C54.5002 161 54.0007 172 62.0005 182Z"
    ],
  },
  {
    id: 4,
    img: 'https://ingenueland.online/crochet-time/images/color-fill/ct-color-fill-svg-grid-1.png',
    path: [   
      "M189 31H31V53.5714H189V31ZM189 76.1406H31V98.7121H189V76.1406ZM31 121.289H189V143.86H31V121.289ZM189 166.43H31V189.001H189V166.43Z",
      "M31 53.5703H189V76.1417H31V53.5703ZM31 98.7109H189V121.282H31V98.7109ZM189 143.859H31V166.431H189V143.859Z"
    ],
  },
  {
    id: 5,
    img: 'https://ingenueland.online/crochet-time/images/color-fill/ct-color-fill-svg-grid-2.png',
    path: [   
      "M60 60H80V80H60V60ZM60 140H80V160H60V140ZM80 100H60V120H80V100ZM100 60H120V80H100V60ZM120 140H100V160H120V140ZM100 100H120V120H100V100ZM160 60H140V80H160V60ZM140 140H160V160H140V140ZM160 100H140V120H160V100Z",
      "M80 40H60V60H40V80H60V100H40V120H60V140H40V160H60V180H80V160H100V180H120V160H140V180H160V160H180V140H160V120H180V100H160V80H180V60H160V40H140V60H120V40H100V60H80V40ZM80 80V60H60V80H80ZM100 80V60H120V80H100ZM100 100V80H80V100H60V120H80V140H60V160H80V140H100V160H120V140H140V160H160V140H140V120H160V100H140V80H160V60H140V80H120V100H100ZM100 120H80V100H100V120ZM120 120H140V100H120V120ZM120 120H100V140H120V120Z",
      "M60 40H40V60H60V40ZM60 120H40V140H60V120ZM40 80H60V100H40V80ZM60 160H40V180H60V160ZM80 40H100V60H80V40ZM100 120H80V140H100V120ZM80 80H100V100H80V80ZM100 160H80V180H100V160ZM120 40H140V60H120V40ZM140 120H120V140H140V120ZM120 80H140V100H120V80ZM140 160H120V180H140V160ZM160 40H180V60H160V40ZM180 120H160V140H180V120ZM160 80H180V100H160V80ZM180 160H160V180H180V160Z",
    ],
  },
  {
    id: 6,
    img: 'https://ingenueland.online/crochet-time/images/color-fill/ct-color-fill-svg-grid-3.png',
    path: [   
      "M67 72C69.7614 72 72 69.7614 72 67C72 64.2386 69.7614 62 67 62C64.2386 62 62 64.2386 62 67C62 69.7614 64.2386 72 67 72ZM153 72C155.761 72 158 69.7614 158 67C158 64.2386 155.761 62 153 62C150.239 62 148 64.2386 148 67C148 69.7614 150.239 72 153 72ZM158 153C158 155.761 155.761 158 153 158C150.239 158 148 155.761 148 153C148 150.239 150.239 148 153 148C155.761 148 158 150.239 158 153ZM67 158C69.7614 158 72 155.761 72 153C72 150.239 69.7614 148 67 148C64.2386 148 62 150.239 62 153C62 155.761 64.2386 158 67 158Z",
      "M 58.2087 53.9445 C 56.5506 51.9965 57.935 49 60.4932 49 H 62 H 73.5068 C 76.065 49 77.4494 51.9965 75.7913 53.9445 L 70.6841 59.9445 C 70.1141 60.6142 69.279 61 68.3997 61 H 65.6003 C 64.721 61 63.8859 60.6142 63.3159 59.9445 L 59.1071 55 L 58.2087 53.9445 Z M 58.2087 80.0555 C 56.5506 82.0035 57.935 85 60.4932 85 H 73 H 73.5068 C 76.065 85 77.4494 82.0035 75.7913 80.0555 L 70.6841 74.0555 C 70.1141 73.3858 69.279 73 68.3997 73 H 65.6003 C 64.721 73 63.8859 73.3858 63.3159 74.0555 L 58.2087 80.0555 Z M 85 73.5068 C 85 76.065 82.0035 77.4494 80.0555 75.7913 L 74.0555 70.6841 C 73.3858 70.1141 73 69.279 73 68.3997 V 65.6003 C 73 64.721 73.3858 63.8859 74.0555 63.3159 L 80.0555 58.2087 C 82.0035 56.5506 85 57.935 85 60.4932 V 61 V 73.5068 Z M 53.9445 75.7913 C 51.9965 77.4494 49 76.065 49 73.5068 V 73 V 60.4932 C 49 57.935 51.9965 56.5506 53.9445 58.2087 L 59.9445 63.3159 C 60.6142 63.8859 61 64.721 61 65.6003 V 68.3997 C 61 69.279 60.6142 70.1141 59.9445 70.6841 L 53.9445 75.7913 Z M 144.209 53.9445 C 142.551 51.9965 143.935 49 146.493 49 H 147 H 159.507 C 162.065 49 163.449 51.9965 161.791 53.9445 L 156.684 59.9445 C 156.114 60.6142 155.279 61 154.4 61 H 151.6 C 150.721 61 149.886 60.6142 149.316 59.9445 L 144.209 53.9445 Z M 144.209 80.0555 C 142.551 82.0035 143.935 85 146.493 85 H 159.507 C 162.065 85 163.449 82.0035 161.791 80.0555 L 156.684 74.0555 C 156.114 73.3858 155.279 73 154.4 73 H 151.6 C 150.721 73 149.886 73.3858 149.316 74.0555 L 144.209 80.0555 Z M 171 73.5068 C 171 76.065 168.004 77.4494 166.055 75.7913 L 160.055 70.6841 C 159.386 70.1141 159 69.279 159 68.3997 V 65.6003 C 159 64.721 159.386 63.8859 160.055 63.3159 L 166.055 58.2087 C 168.004 56.5506 171 57.935 171 60.4932 V 73.5068 Z M 139.945 75.7913 C 137.996 77.4494 135 76.065 135 73.5068 V 60.4932 C 135 57.935 137.996 56.5506 139.945 58.2087 L 145.945 63.3159 C 146.614 63.8859 147 64.721 147 65.6003 V 68.3997 C 147 69.279 146.614 70.1141 145.945 70.6841 L 139.945 75.7913 Z M 146.493 135 C 143.935 135 142.551 137.996 144.209 139.945 L 149.316 145.945 C 149.886 146.614 150.721 147 151.6 147 H 154.4 C 155.279 147 156.114 146.614 156.684 145.945 L 161.791 139.945 C 163.449 137.996 162.065 135 159.507 135 H 146.493 Z M 146.493 171 C 143.935 171 142.551 168.004 144.209 166.055 L 149.316 160.055 C 149.886 159.386 150.721 159 151.6 159 H 154.4 C 155.279 159 156.114 159.386 156.684 160.055 L 161.791 166.055 C 163.449 168.004 162.065 171 159.507 171 H 146.493 Z M 166.055 161.791 C 168.004 163.449 171 162.065 171 159.507 V 146.493 C 171 143.935 168.004 142.551 166.055 144.209 L 160.055 149.316 C 159.386 149.886 159 150.721 159 151.6 V 154.4 C 159 155.279 159.386 156.114 160.055 156.684 L 166.055 161.791 Z M 135 159.507 C 135 162.065 137.996 163.449 139.945 161.791 L 145.945 156.684 C 146.614 156.114 147 155.279 147 154.4 V 151.6 C 147 150.721 146.614 149.886 145.945 149.316 L 139.945 144.209 C 137.996 142.551 135 143.935 135 146.493 V 159.507 Z M 58.2087 139.945 C 56.5506 137.996 57.935 135 60.4932 135 H 73.5068 C 76.065 135 77.4494 137.996 75.7913 139.945 L 70.6841 145.945 C 70.1141 146.614 69.279 147 68.3997 147 H 65.6003 C 64.721 147 63.8859 146.614 63.3159 145.945 L 58.2087 139.945 Z M 58.2087 166.055 C 56.5506 168.004 57.935 171 60.4932 171 H 73.5068 C 76.065 171 77.4494 168.004 75.7913 166.055 L 70.6841 160.055 C 70.1141 159.386 69.279 159 68.3997 159 H 65.6003 C 64.721 159 63.8859 159.386 63.3159 160.055 L 58.2087 166.055 Z M 85 159.507 C 85 162.065 82.0035 163.449 80.0555 161.791 L 74.0555 156.684 C 73.3858 156.114 73 155.279 73 154.4 V 151.6 C 73 150.721 73.3858 149.886 74.0555 149.316 L 80.0555 144.209 C 82.0035 142.551 85 143.935 85 146.493 V 159.507 Z M 53.9445 161.791 C 51.9965 163.449 49 162.065 49 159.507 V 146.493 C 49 143.935 51.9965 142.551 53.9445 144.209 L 59.9445 149.316 C 60.6142 149.886 61 150.721 61 151.6 V 154.4 C 61 155.279 60.6142 156.114 59.9445 156.684 L 53.9445 161.791 Z",
      "M 48.2419 37 C 45.7264 37 44.3278 39.9098 45.8993 41.8741 L 46 42 L 51 48 L 51.1213 48.1213 C 51.6839 48.6839 52.447 49 53.2426 49 H 54 H 56 H 56.7574 C 57.553 49 58.3161 48.6839 58.8787 48.1213 L 59 48 L 64 42 L 64.1007 41.8741 C 65.6722 39.9098 64.2736 37 61.7581 37 H 61 H 49 H 48.2419 Z M 70.1005 41.9205 C 68.4721 39.9666 69.8616 37 72.4051 37 H 73 H 85.5949 C 88.1384 37 89.5279 39.9666 87.8995 41.9206 L 82.8995 47.9206 C 82.3296 48.6045 81.4852 49 80.5949 49 H 77.4051 C 76.5148 49 75.6704 48.6045 75.1005 47.9206 L 70.1005 41.9205 Z M 70.1005 92.0795 C 68.4721 94.0334 69.8616 97 72.4051 97 H 85 H 85.5949 C 88.1384 97 89.5279 94.0334 87.8995 92.0794 L 82.8995 86.0794 C 82.3296 85.3955 81.4852 85 80.5949 85 H 77.4051 C 76.5148 85 75.6704 85.3955 75.1005 86.0794 L 70.1005 92.0795 Z M 46.1005 92.0795 C 44.4721 94.0334 45.8616 97 48.4051 97 H 61 H 61.5949 C 64.1384 97 65.5279 94.0334 63.8995 92.0794 L 58.8995 86.0794 C 58.3296 85.3955 57.4852 85 56.5949 85 H 53.4051 C 52.5148 85 51.6704 85.3955 51.1005 86.0794 L 46.1005 92.0795 Z M 97 61.5949 C 97 64.1384 94.0334 65.5279 92.0795 63.8995 L 86.0794 58.8995 C 85.3955 58.3296 85 57.4852 85 56.5949 V 53.4051 C 85 52.5148 85.3955 51.6704 86.0794 51.1005 L 92.0794 46.1005 C 94.0334 44.4721 97 45.8616 97 48.4051 V 61.5949 Z M 41.9205 63.8995 C 39.9666 65.5279 37 64.1384 37 61.5949 V 61 V 48.4051 C 37 45.8616 39.9666 44.4721 41.9206 46.1005 L 47.9206 51.1005 C 48.6045 51.6704 49 52.5148 49 53.4051 V 56.5949 C 49 57.4852 48.6045 58.3296 47.9206 58.8995 L 41.9205 63.8995 Z M 97 85.5949 C 97 88.1384 94.0334 89.5279 92.0795 87.8995 L 86.0794 82.8995 C 85.3955 82.3296 85 81.4852 85 80.5949 V 77.4051 C 85 76.5148 85.3955 75.6704 86.0794 75.1005 L 92.0794 70.1005 C 94.0334 68.4721 97 69.8616 97 72.4051 V 85.5949 Z M 41.9205 87.8995 C 39.9666 89.5279 37 88.1384 37 85.5949 V 85 V 72.4051 C 37 69.8616 39.9666 68.4721 41.9206 70.1005 L 47.9206 75.1005 C 48.6045 75.6704 49 76.5148 49 77.4051 V 80.5949 C 49 81.4852 48.6045 82.3296 47.9206 82.8995 L 41.9205 87.8995 Z M 134.405 37 C 131.862 37 130.472 39.9666 132.1 41.9205 L 137.1 47.9206 C 137.67 48.6045 138.515 49 139.405 49 H 142.595 C 143.485 49 144.33 48.6045 144.9 47.9206 L 149.9 41.9206 C 151.528 39.9666 150.138 37 147.595 37 H 134.405 Z M 156.1 41.9205 C 154.472 39.9666 155.862 37 158.405 37 H 171.595 C 174.138 37 175.528 39.9666 173.9 41.9206 L 168.9 47.9206 C 168.33 48.6045 167.485 49 166.595 49 H 163.405 C 162.515 49 161.67 48.6045 161.1 47.9206 L 156.1 41.9205 Z M 156.1 92.0795 C 154.472 94.0334 155.862 97 158.405 97 H 171 H 171.595 C 174.138 97 175.528 94.0334 173.9 92.0794 L 168.9 86.0794 C 168.33 85.3955 167.485 85 166.595 85 H 163.405 C 162.515 85 161.67 85.3955 161.1 86.0794 L 156.1 92.0795 Z M 132.1 92.0795 C 130.472 94.0334 131.862 97 134.405 97 H 147 H 147.595 C 150.138 97 151.528 94.0334 149.9 92.0794 L 144.9 86.0794 C 144.33 85.3955 143.485 85 142.595 85 H 139.405 C 138.515 85 137.67 85.3955 137.1 86.0794 L 132.1 92.0795 Z M 183 61.5949 C 183 64.1384 180.033 65.5279 178.079 63.8995 L 172.079 58.8995 C 171.395 58.3296 171 57.4852 171 56.5949 V 53.4051 C 171 52.5148 171.395 51.6704 172.079 51.1005 L 178.079 46.1005 C 180.033 44.4721 183 45.8616 183 48.4051 V 49 V 61.5949 Z M 127.921 63.8995 C 125.967 65.5279 123 64.1384 123 61.5949 V 61 V 48.4051 C 123 45.8616 125.967 44.4721 127.921 46.1005 L 133.921 51.1005 C 134.605 51.6704 135 52.5148 135 53.4051 V 56.5949 C 135 57.4852 134.605 58.3296 133.921 58.8995 L 127.921 63.8995 Z M 183 85.5949 C 183 88.1384 180.033 89.5279 178.079 87.8995 L 172.079 82.8995 C 171.395 82.3296 171 81.4852 171 80.5949 V 77.4051 C 171 76.5148 171.395 75.6704 172.079 75.1005 L 178.079 70.1005 C 180.033 68.4721 183 69.8616 183 72.4051 V 85.5949 Z M 127.921 87.8995 C 125.967 89.5279 123 88.1384 123 85.5949 V 72.4051 C 123 69.8616 125.967 68.4721 127.921 70.1005 L 133.921 75.1005 C 134.605 75.6704 135 76.5148 135 77.4051 V 80.5949 C 135 81.4852 134.605 82.3296 133.921 82.8995 L 127.921 87.8995 Z M 132.1 127.921 C 130.472 125.967 131.862 123 134.405 123 H 147.595 C 150.138 123 151.528 125.967 149.9 127.921 L 144.9 133.921 C 144.33 134.605 143.485 135 142.595 135 H 139.405 C 138.515 135 137.67 134.605 137.1 133.921 L 132.1 127.921 Z M 158.405 123 C 155.862 123 154.472 125.967 156.1 127.921 L 161.1 133.921 C 161.67 134.605 162.515 135 163.405 135 H 166.595 C 167.485 135 168.33 134.605 168.9 133.921 L 173.9 127.921 C 175.528 125.967 174.138 123 171.595 123 H 158.405 Z M 158.405 183 C 155.862 183 154.472 180.033 156.1 178.079 L 161.1 172.079 C 161.67 171.395 162.515 171 163.405 171 H 166.595 C 167.485 171 168.33 171.395 168.9 172.079 L 173.9 178.079 C 175.528 180.033 174.138 183 171.595 183 H 158.405 Z M 134.405 183 C 131.862 183 130.472 180.033 132.1 178.079 L 137.1 172.079 C 137.67 171.395 138.515 171 139.405 171 H 142.595 C 143.485 171 144.33 171.395 144.9 172.079 L 149.9 178.079 C 151.528 180.033 150.138 183 147.595 183 H 134.405 Z M 178.079 149.9 C 180.033 151.528 183 150.138 183 147.595 V 134.405 C 183 131.862 180.033 130.472 178.079 132.1 L 172.079 137.1 C 171.395 137.67 171 138.515 171 139.405 V 142.595 C 171 143.485 171.395 144.33 172.079 144.9 L 178.079 149.9 Z M 123 147.595 C 123 150.138 125.967 151.528 127.921 149.9 L 133.921 144.9 C 134.605 144.33 135 143.485 135 142.595 V 139.405 C 135 138.515 134.605 137.67 133.921 137.1 L 127.921 132.1 C 125.967 130.472 123 131.862 123 134.405 V 147.595 Z M 178.079 173.9 C 180.033 175.528 183 174.138 183 171.595 V 158.405 C 183 155.862 180.033 154.472 178.079 156.1 L 172.079 161.1 C 171.395 161.67 171 162.515 171 163.405 V 166.595 C 171 167.485 171.395 168.33 172.079 168.9 L 178.079 173.9 Z M 123 171.595 C 123 174.138 125.967 175.528 127.921 173.9 L 133.921 168.9 C 134.605 168.33 135 167.485 135 166.595 V 163.405 C 135 162.515 134.605 161.67 133.921 161.1 L 127.921 156.1 C 125.967 154.472 123 155.862 123 158.405 V 171.595 Z M 48.4051 123 C 45.8616 123 44.4721 125.967 46.1005 127.921 L 51.1005 133.921 C 51.6704 134.605 52.5148 135 53.4051 135 H 56.5949 C 57.4852 135 58.3296 134.605 58.8995 133.921 L 63.8995 127.921 C 65.5279 125.967 64.1384 123 61.5949 123 H 49 H 48.4051 Z M 70.1005 127.921 C 68.4721 125.967 69.8616 123 72.4051 123 H 85.5949 C 88.1384 123 89.5279 125.967 87.8995 127.921 L 82.8995 133.921 C 82.3296 134.605 81.4852 135 80.5949 135 H 77.4051 C 76.5148 135 75.6704 134.605 75.1005 133.921 L 70.1005 127.921 Z M 70.1005 178.079 C 68.4721 180.033 69.8616 183 72.4051 183 H 85.5949 C 88.1384 183 89.5279 180.033 87.8995 178.079 L 82.8995 172.079 C 82.3296 171.395 81.4852 171 80.5949 171 H 77.4051 C 76.5148 171 75.6704 171.395 75.1005 172.079 L 70.1005 178.079 Z M 46.1005 178.079 C 44.4721 180.033 45.8616 183 48.4051 183 H 61 H 61.5949 C 64.1384 183 65.5279 180.033 63.8995 178.079 L 58.8995 172.079 C 58.3296 171.395 57.4852 171 56.5949 171 H 53.4051 C 52.5148 171 51.6704 171.395 51.1005 172.079 L 46.1005 178.079 Z M 97 147.595 C 97 150.138 94.0334 151.528 92.0795 149.9 L 86.0794 144.9 C 85.3955 144.33 85 143.485 85 142.595 V 139.405 C 85 138.515 85.3955 137.67 86.0794 137.1 L 92.0794 132.1 C 94.0334 130.472 97 131.862 97 134.405 V 135 V 147.595 Z M 41.9205 149.9 C 39.9666 151.528 37 150.138 37 147.595 V 147 V 134.405 C 37 131.862 39.9666 130.472 41.9206 132.1 L 47.9206 137.1 C 48.6045 137.67 49 138.515 49 139.405 V 142.595 C 49 143.485 48.6045 144.33 47.9206 144.9 L 41.9205 149.9 Z M 97 171.595 C 97 174.138 94.0334 175.528 92.0795 173.9 L 86.0794 168.9 C 85.3955 168.33 85 167.485 85 166.595 V 163.405 C 85 162.515 85.3955 161.67 86.0794 161.1 L 92.0794 156.1 C 94.0334 154.472 97 155.862 97 158.405 V 171.595 Z M 41.9205 173.9 C 39.9666 175.528 37 174.138 37 171.595 V 171 V 158.405 C 37 155.862 39.9666 154.472 41.9206 156.1 L 47.9206 161.1 C 48.6045 161.67 49 162.515 49 163.405 V 166.595 C 49 167.485 48.6045 168.33 47.9206 168.9 L 41.9205 173.9 Z",
      "M 36.4051 25 C 33.8616 25 32.4721 27.9666 34.1005 29.9205 L 39.1005 35.9206 C 39.6704 36.6045 40.5148 37 41.4051 37 H 44.5949 C 45.4852 37 46.3296 36.6045 46.8995 35.9206 L 51.8995 29.9206 C 53.5279 27.9666 52.1384 25 49.5949 25 H 37 H 36.4051 Z M 60.4051 25 C 57.8616 25 56.4721 27.9666 58.1005 29.9205 L 63.1005 35.9206 C 63.6704 36.6045 64.5148 37 65.4051 37 H 68.5949 C 69.4852 37 70.3296 36.6045 70.8995 35.9206 L 75.8995 29.9206 C 77.5279 27.9666 76.1384 25 73.5949 25 H 61 H 60.4051 Z M 82.1005 29.9205 C 80.4721 27.9666 81.8616 25 84.4051 25 H 85 H 97.5949 C 100.138 25 101.528 27.9666 99.8995 29.9206 L 94.8995 35.9206 C 94.3296 36.6045 93.4852 37 92.5949 37 H 89.4051 C 88.5148 37 87.6704 36.6045 87.1005 35.9206 L 82.1005 29.9205 Z M 82.1005 104.079 C 80.4721 106.033 81.8616 109 84.4051 109 H 97.5949 C 100.138 109 101.528 106.033 99.8995 104.079 L 94.8995 98.0794 C 94.3296 97.3955 93.4852 97 92.5949 97 H 89.4051 C 88.5148 97 87.6704 97.3955 87.1005 98.0794 L 82.1005 104.079 Z M 58.1005 104.079 C 56.4721 106.033 57.8616 109 60.4051 109 H 73.5949 C 76.1384 109 77.5279 106.033 75.8995 104.079 L 70.8995 98.0794 C 70.3296 97.3955 69.4852 97 68.5949 97 H 65.4051 C 64.5148 97 63.6704 97.3955 63.1005 98.0794 L 58.1005 104.079 Z M 34.1005 104.079 C 32.4721 106.033 33.8616 109 36.4051 109 H 49.5949 C 52.1384 109 53.5279 106.033 51.8995 104.079 L 46.8995 98.0794 C 46.3296 97.3955 45.4852 97 44.5949 97 H 41.4051 C 40.5148 97 39.6704 97.3955 39.1005 98.0794 L 34.1005 104.079 Z M 109 49.5949 C 109 52.1384 106.033 53.5279 104.079 51.8995 L 98.0794 46.8995 C 97.3955 46.3296 97 45.4852 97 44.5949 V 41.4051 C 97 40.5148 97.3955 39.6704 98.0794 39.1005 L 104.079 34.1005 C 106.033 32.4721 109 33.8616 109 36.4051 V 49.5949 Z M 29.9205 51.8995 C 27.9666 53.5279 25 52.1384 25 49.5949 V 36.4051 C 25 33.8616 27.9666 32.4721 29.9206 34.1005 L 35.9206 39.1005 C 36.6045 39.6704 37 40.5148 37 41.4051 V 44.5949 C 37 45.4852 36.6045 46.3296 35.9206 46.8995 L 29.9205 51.8995 Z M 109 73.5949 C 109 76.1384 106.033 77.5279 104.079 75.8995 L 98.0794 70.8995 C 97.3955 70.3296 97 69.4852 97 68.5949 V 65.4051 C 97 64.5148 97.3955 63.6704 98.0794 63.1005 L 104.079 58.1005 C 106.033 56.4721 109 57.8616 109 60.4051 V 73.5949 Z M 29.9205 75.8995 C 27.9666 77.5279 25 76.1384 25 73.5949 V 60.4051 C 25 57.8616 27.9666 56.4721 29.9206 58.1005 L 35.9206 63.1005 C 36.6045 63.6704 37 64.5148 37 65.4051 V 68.5949 C 37 69.4852 36.6045 70.3296 35.9206 70.8995 L 29.9205 75.8995 Z M 109 97.5949 C 109 100.138 106.033 101.528 104.079 99.8995 L 98.0794 94.8995 C 97.3955 94.3296 97 93.4852 97 92.5949 V 89.4051 C 97 88.5148 97.3955 87.6704 98.0794 87.1005 L 104.079 82.1005 C 106.033 80.4721 109 81.8616 109 84.4051 V 97.5949 Z M 29.9205 99.8995 C 27.9666 101.528 25 100.138 25 97.5949 V 84.4051 C 25 81.8616 27.9666 80.4721 29.9206 82.1005 L 35.9206 87.1005 C 36.6045 87.6704 37 88.5148 37 89.4051 V 92.5949 C 37 93.4852 36.6045 94.3296 35.9206 94.8995 L 29.9205 99.8995 Z M 122.405 25 C 119.862 25 118.472 27.9666 120.1 29.9205 L 125.1 35.9206 C 125.67 36.6045 126.515 37 127.405 37 H 130.595 C 131.485 37 132.33 36.6045 132.9 35.9206 L 137.9 29.9206 C 139.528 27.9666 138.138 25 135.595 25 H 122.405 Z M 146.405 25 C 143.862 25 142.472 27.9666 144.1 29.9205 L 149.1 35.9206 C 149.67 36.6045 150.515 37 151.405 37 H 154.595 C 155.485 37 156.33 36.6045 156.9 35.9206 L 161.9 29.9206 C 163.528 27.9666 162.138 25 159.595 25 H 146.405 Z M 168.1 29.9205 C 166.472 27.9666 167.862 25 170.405 25 H 183.595 C 186.138 25 187.528 27.9666 185.9 29.9206 L 180.9 35.9206 C 180.33 36.6045 179.485 37 178.595 37 H 175.405 C 174.515 37 173.67 36.6045 173.1 35.9206 L 168.1 29.9205 Z M 168.1 104.079 C 166.472 106.033 167.862 109 170.405 109 H 183.595 C 186.138 109 187.528 106.033 185.9 104.079 L 180.9 98.0794 C 180.33 97.3955 179.485 97 178.595 97 H 175.405 C 174.515 97 173.67 97.3955 173.1 98.0794 L 168.1 104.079 Z M 144.1 104.079 C 142.472 106.033 143.862 109 146.405 109 H 159.595 C 162.138 109 163.528 106.033 161.9 104.079 L 156.9 98.0794 C 156.33 97.3955 155.485 97 154.595 97 H 151.405 C 150.515 97 149.67 97.3955 149.1 98.0794 L 144.1 104.079 Z M 120.1 104.079 C 118.472 106.033 119.862 109 122.405 109 H 135.595 C 138.138 109 139.528 106.033 137.9 104.079 L 132.9 98.0794 C 132.33 97.3955 131.485 97 130.595 97 H 127.405 C 126.515 97 125.67 97.3955 125.1 98.0794 L 120.1 104.079 Z M 195 49.5949 C 195 52.1384 192.033 53.5279 190.079 51.8995 L 184.079 46.8995 C 183.395 46.3296 183 45.4852 183 44.5949 V 41.4051 C 183 40.5148 183.395 39.6704 184.079 39.1005 L 190.079 34.1005 C 192.033 32.4721 195 33.8616 195 36.4051 V 49.5949 Z M 115.921 51.8995 C 113.967 53.5279 111 52.1384 111 49.5949 V 36.4051 C 111 33.8616 113.967 32.4721 115.921 34.1005 L 121.921 39.1005 C 122.605 39.6704 123 40.5148 123 41.4051 V 44.5949 C 123 45.4852 122.605 46.3296 121.921 46.8995 L 115.921 51.8995 Z M 195 73.5949 C 195 76.1384 192.033 77.5279 190.079 75.8995 L 184.079 70.8995 C 183.395 70.3296 183 69.4852 183 68.5949 V 65.4051 C 183 64.5148 183.395 63.6704 184.079 63.1005 L 190.079 58.1005 C 192.033 56.4721 195 57.8616 195 60.4051 V 73.5949 Z M 115.921 75.8995 C 113.967 77.5279 111 76.1384 111 73.5949 V 60.4051 C 111 57.8616 113.967 56.4721 115.921 58.1005 L 121.921 63.1005 C 122.605 63.6704 123 64.5148 123 65.4051 V 68.5949 C 123 69.4852 122.605 70.3296 121.921 70.8995 L 115.921 75.8995 Z M 195 97.5949 C 195 100.138 192.033 101.528 190.079 99.8995 L 184.079 94.8995 C 183.395 94.3296 183 93.4852 183 92.5949 V 89.4051 C 183 88.5148 183.395 87.6704 184.079 87.1005 L 190.079 82.1005 C 192.033 80.4721 195 81.8616 195 84.4051 V 97.5949 Z M 115.921 99.8995 C 113.967 101.528 111 100.138 111 97.5949 V 84.4051 C 111 81.8616 113.967 80.4721 115.921 82.1005 L 121.921 87.1005 C 122.605 87.6704 123 88.5148 123 89.4051 V 92.5949 C 123 93.4852 122.605 94.3296 121.921 94.8995 L 115.921 99.8995 Z M 120.1 115.921 C 118.472 113.967 119.862 111 122.405 111 H 135.595 C 138.138 111 139.528 113.967 137.9 115.921 L 132.9 121.921 C 132.33 122.605 131.485 123 130.595 123 H 127.405 C 126.515 123 125.67 122.605 125.1 121.921 L 120.1 115.921 Z M 144.1 115.921 C 142.472 113.967 143.862 111 146.405 111 H 159.595 C 162.138 111 163.528 113.967 161.9 115.921 L 156.9 121.921 C 156.33 122.605 155.485 123 154.595 123 H 151.405 C 150.515 123 149.67 122.605 149.1 121.921 L 144.1 115.921 Z M 170.405 111 C 167.862 111 166.472 113.967 168.1 115.921 L 173.1 121.921 C 173.67 122.605 174.515 123 175.405 123 H 178.595 C 179.485 123 180.33 122.605 180.9 121.921 L 185.9 115.921 C 187.528 113.967 186.138 111 183.595 111 H 170.405 Z M 170.405 195 C 167.862 195 166.472 192.033 168.1 190.079 L 173.1 184.079 C 173.67 183.395 174.515 183 175.405 183 H 178.595 C 179.485 183 180.33 183.395 180.9 184.079 L 185.9 190.079 C 187.528 192.033 186.138 195 183.595 195 H 170.405 Z M 146.405 195 C 143.862 195 142.472 192.033 144.1 190.079 L 149.1 184.079 C 149.67 183.395 150.515 183 151.405 183 H 154.595 C 155.485 183 156.33 183.395 156.9 184.079 L 161.9 190.079 C 163.528 192.033 162.138 195 159.595 195 H 146.405 Z M 122.405 195 C 119.862 195 118.472 192.033 120.1 190.079 L 125.1 184.079 C 125.67 183.395 126.515 183 127.405 183 H 130.595 C 131.485 183 132.33 183.395 132.9 184.079 L 137.9 190.079 C 139.528 192.033 138.138 195 135.595 195 H 122.405 Z M 190.079 137.9 C 192.033 139.528 195 138.138 195 135.595 V 122.405 C 195 119.862 192.033 118.472 190.079 120.1 L 184.079 125.1 C 183.395 125.67 183 126.515 183 127.405 V 130.595 C 183 131.485 183.395 132.33 184.079 132.9 L 190.079 137.9 Z M 111 135.595 C 111 138.138 113.967 139.528 115.921 137.9 L 121.921 132.9 C 122.605 132.33 123 131.485 123 130.595 V 127.405 C 123 126.515 122.605 125.67 121.921 125.1 L 115.921 120.1 C 113.967 118.472 111 119.862 111 122.405 V 135.595 Z M 190.079 161.9 C 192.033 163.528 195 162.138 195 159.595 V 146.405 C 195 143.862 192.033 142.472 190.079 144.1 L 184.079 149.1 C 183.395 149.67 183 150.515 183 151.405 V 154.595 C 183 155.485 183.395 156.33 184.079 156.9 L 190.079 161.9 Z M 111 159.595 C 111 162.138 113.967 163.528 115.921 161.9 L 121.921 156.9 C 122.605 156.33 123 155.485 123 154.595 V 151.405 C 123 150.515 122.605 149.67 121.921 149.1 L 115.921 144.1 C 113.967 142.472 111 143.862 111 146.405 V 159.595 Z M 190.079 185.9 C 192.033 187.528 195 186.138 195 183.595 V 170.405 C 195 167.862 192.033 166.472 190.079 168.1 L 184.079 173.1 C 183.395 173.67 183 174.515 183 175.405 V 178.595 C 183 179.485 183.395 180.33 184.079 180.9 L 190.079 185.9 Z M 111 183.595 C 111 186.138 113.967 187.528 115.921 185.9 L 121.921 180.9 C 122.605 180.33 123 179.485 123 178.595 V 175.405 C 123 174.515 122.605 173.67 121.921 173.1 L 115.921 168.1 C 113.967 166.472 111 167.862 111 170.405 V 183.595 Z M 36.4051 111 C 33.8616 111 32.4721 113.967 34.1005 115.921 L 39.1005 121.921 C 39.6704 122.605 40.5148 123 41.4051 123 H 44.5949 C 45.4852 123 46.3296 122.605 46.8995 121.921 L 51.8995 115.921 C 53.5279 113.967 52.1384 111 49.5949 111 H 36.4051 Z M 60.4051 111 C 57.8616 111 56.4721 113.967 58.1005 115.921 L 63.1005 121.921 C 63.6704 122.605 64.5148 123 65.4051 123 H 68.5949 C 69.4852 123 70.3296 122.605 70.8995 121.921 L 75.8995 115.921 C 77.5279 113.967 76.1384 111 73.5949 111 H 60.4051 Z M 82.1005 115.921 C 80.4721 113.967 81.8616 111 84.4051 111 H 97.5949 C 100.138 111 101.528 113.967 99.8995 115.921 L 94.8995 121.921 C 94.3296 122.605 93.4852 123 92.5949 123 H 89.4051 C 88.5148 123 87.6704 122.605 87.1005 121.921 L 82.1005 115.921 Z M 82.1005 190.079 C 80.4721 192.033 81.8616 195 84.4051 195 H 97.5949 C 100.138 195 101.528 192.033 99.8995 190.079 L 94.8995 184.079 C 94.3296 183.395 93.4852 183 92.5949 183 H 89.4051 C 88.5148 183 87.6704 183.395 87.1005 184.079 L 82.1005 190.079 Z M 58.1005 190.079 C 56.4721 192.033 57.8616 195 60.4051 195 H 73.5949 C 76.1384 195 77.5279 192.033 75.8995 190.079 L 70.8995 184.079 C 70.3296 183.395 69.4852 183 68.5949 183 H 65.4051 C 64.5148 183 63.6704 183.395 63.1005 184.079 L 58.1005 190.079 Z M 34.1005 190.079 C 32.4721 192.033 33.8616 195 36.4051 195 H 49.5949 C 52.1384 195 53.5279 192.033 51.8995 190.079 L 46.8995 184.079 C 46.3296 183.395 45.4852 183 44.5949 183 H 41.4051 C 40.5148 183 39.6704 183.395 39.1005 184.079 L 34.1005 190.079 Z M 109 135.595 C 109 138.138 106.033 139.528 104.079 137.9 L 98.0794 132.9 C 97.3955 132.33 97 131.485 97 130.595 V 127.405 C 97 126.515 97.3955 125.67 98.0794 125.1 L 104.079 120.1 C 106.033 118.472 109 119.862 109 122.405 V 135.595 Z M 29.9205 137.9 C 27.9666 139.528 25 138.138 25 135.595 V 122.405 C 25 119.862 27.9666 118.472 29.9206 120.1 L 35.9206 125.1 C 36.6045 125.67 37 126.515 37 127.405 V 130.595 C 37 131.485 36.6045 132.33 35.9206 132.9 L 29.9205 137.9 Z M 109 159.595 C 109 162.138 106.033 163.528 104.079 161.9 L 98.0794 156.9 C 97.3955 156.33 97 155.485 97 154.595 V 151.405 C 97 150.515 97.3955 149.67 98.0794 149.1 L 104.079 144.1 C 106.033 142.472 109 143.862 109 146.405 V 159.595 Z M 29.9205 161.9 C 27.9666 163.528 25 162.138 25 159.595 V 146.405 C 25 143.862 27.9666 142.472 29.9206 144.1 L 35.9206 149.1 C 36.6045 149.67 37 150.515 37 151.405 V 154.595 C 37 155.485 36.6045 156.33 35.9206 156.9 L 29.9205 161.9 Z M 109 183.595 C 109 186.138 106.033 187.528 104.079 185.9 L 98.0794 180.9 C 97.3955 180.33 97 179.485 97 178.595 V 175.405 C 97 174.515 97.3955 173.67 98.0794 173.1 L 104.079 168.1 C 106.033 166.472 109 167.862 109 170.405 V 183.595 Z M 29.9205 185.9 C 27.9666 187.528 25 186.138 25 183.595 V 170.405 C 25 167.862 27.9666 166.472 29.9206 168.1 L 35.9206 173.1 C 36.6045 173.67 37 174.515 37 175.405 V 178.595 C 37 179.485 36.6045 180.33 35.9206 180.9 L 29.9205 185.9 Z",
      "M 23 21 C 21.8954 21 21 21.8954 21 23 V 197 C 21 198.105 21.8954 199 23 199 H 197 C 198.105 199 199 198.105 199 197 V 23 C 199 21.8954 198.105 21 197 21 H 23 Z M 109 25 H 107 H 103 H 79 H 55 H 31 H 27 H 25 V 27 V 31 V 55 V 79 V 103 V 107 V 109 H 27 H 31 H 55 H 79 H 103 H 107 H 109 V 107 V 103 V 79 V 55 V 31 V 27 V 25 Z M 107 29 C 108.105 29 109 28.1046 109 27 C 109 25.8954 108.105 25 107 25 C 105.895 25 105 25.8954 105 27 C 105 25.8954 104.105 25 103 25 C 101.895 25 101 25.8954 101 27 C 101 28.1046 101.895 29 103 29 C 104.105 29 105 28.1046 105 27 C 105 28.1046 105.895 29 107 29 Z M 107 29 C 105.895 29 105 29.8954 105 31 C 105 32.1046 105.895 33 107 33 C 108.105 33 109 32.1046 109 31 C 109 29.8954 108.105 29 107 29 Z M 109 55 C 109 56.1046 108.105 57 107 57 C 105.895 57 105 56.1046 105 55 C 105 53.8954 105.895 53 107 53 C 108.105 53 109 53.8954 109 55 Z M 109 79 C 109 80.1046 108.105 81 107 81 C 105.895 81 105 80.1046 105 79 C 105 77.8954 105.895 77 107 77 C 108.105 77 109 77.8954 109 79 Z M 107 105 C 105.895 105 105 104.105 105 103 C 105 101.895 105.895 101 107 101 C 108.105 101 109 101.895 109 103 C 109 104.105 108.105 105 107 105 Z M 105 107 C 105 108.105 104.105 109 103 109 C 101.895 109 101 108.105 101 107 C 101 105.895 101.895 105 103 105 C 104.105 105 105 105.895 105 107 Z M 105 107 C 105 105.895 105.895 105 107 105 C 108.105 105 109 105.895 109 107 C 109 108.105 108.105 109 107 109 C 105.895 109 105 108.105 105 107 Z M 79 109 C 80.1046 109 81 108.105 81 107 C 81 105.895 80.1046 105 79 105 C 77.8954 105 77 105.895 77 107 C 77 108.105 77.8954 109 79 109 Z M 55 109 C 56.1046 109 57 108.105 57 107 C 57 105.895 56.1046 105 55 105 C 53.8954 105 53 105.895 53 107 C 53 108.105 53.8954 109 55 109 Z M 29 107 C 29 108.105 28.1046 109 27 109 C 25.8954 109 25 108.105 25 107 C 25 105.895 25.8954 105 27 105 C 28.1046 105 29 105.895 29 107 Z M 29 107 C 29 105.895 29.8954 105 31 105 C 32.1046 105 33 105.895 33 107 C 33 108.105 32.1046 109 31 109 C 29.8954 109 29 108.105 29 107 Z M 27 105 C 25.8954 105 25 104.105 25 103 C 25 101.895 25.8954 101 27 101 C 28.1046 101 29 101.895 29 103 C 29 104.105 28.1046 105 27 105 Z M 25 79 C 25 77.8954 25.8954 77 27 77 C 28.1046 77 29 77.8954 29 79 C 29 80.1046 28.1046 81 27 81 C 25.8954 81 25 80.1046 25 79 Z M 25 55 C 25 56.1046 25.8954 57 27 57 C 28.1046 57 29 56.1046 29 55 C 29 53.8954 28.1046 53 27 53 C 25.8954 53 25 53.8954 25 55 Z M 27 29 C 25.8954 29 25 29.8954 25 31 C 25 32.1046 25.8954 33 27 33 C 28.1046 33 29 32.1046 29 31 C 29 29.8954 28.1046 29 27 29 Z M 29 27 C 29 25.8954 28.1046 25 27 25 C 25.8954 25 25 25.8954 25 27 C 25 28.1046 25.8954 29 27 29 C 28.1046 29 29 28.1046 29 27 Z M 29 27 C 29 28.1046 29.8954 29 31 29 C 32.1046 29 33 28.1046 33 27 C 33 25.8954 32.1046 25 31 25 C 29.8954 25 29 25.8954 29 27 Z M 55 25 C 56.1046 25 57 25.8954 57 27 C 57 28.1046 56.1046 29 55 29 C 53.8954 29 53 28.1046 53 27 C 53 25.8954 53.8954 25 55 25 Z M 79 25 C 80.1046 25 81 25.8954 81 27 C 81 28.1046 80.1046 29 79 29 C 77.8954 29 77 28.1046 77 27 C 77 25.8954 77.8954 25 79 25 Z M 111 107 V 109 H 113 H 117 H 141 H 165 H 189 H 193 H 195 V 107 V 103 V 79 V 55 V 31 V 27 V 25 H 193 H 189 H 165 H 141 H 117 H 113 H 111 V 27 V 31 V 55 V 79 V 103 V 107 Z M 113 105 C 111.895 105 111 105.895 111 107 C 111 108.105 111.895 109 113 109 C 114.105 109 115 108.105 115 107 C 115 108.105 115.895 109 117 109 C 118.105 109 119 108.105 119 107 C 119 105.895 118.105 105 117 105 C 115.895 105 115 105.895 115 107 C 115 105.895 114.105 105 113 105 Z M 113 105 C 111.895 105 111 104.105 111 103 C 111 101.895 111.895 101 113 101 C 114.105 101 115 101.895 115 103 C 115 104.105 114.105 105 113 105 Z M 111 79 C 111 80.1046 111.895 81 113 81 C 114.105 81 115 80.1046 115 79 C 115 77.8954 114.105 77 113 77 C 111.895 77 111 77.8954 111 79 Z M 111 55 C 111 53.8954 111.895 53 113 53 C 114.105 53 115 53.8954 115 55 C 115 56.1046 114.105 57 113 57 C 111.895 57 111 56.1046 111 55 Z M 113 29 C 114.105 29 115 29.8954 115 31 C 115 32.1046 114.105 33 113 33 C 111.895 33 111 32.1046 111 31 C 111 29.8954 111.895 29 113 29 Z M 115 27 C 115 28.1046 115.895 29 117 29 C 118.105 29 119 28.1046 119 27 C 119 25.8954 118.105 25 117 25 C 115.895 25 115 25.8954 115 27 Z M 115 27 C 115 28.1046 114.105 29 113 29 C 111.895 29 111 28.1046 111 27 C 111 25.8954 111.895 25 113 25 C 114.105 25 115 25.8954 115 27 Z M 141 25 C 139.895 25 139 25.8954 139 27 C 139 28.1046 139.895 29 141 29 C 142.105 29 143 28.1046 143 27 C 143 25.8954 142.105 25 141 25 Z M 165 25 C 163.895 25 163 25.8954 163 27 C 163 28.1046 163.895 29 165 29 C 166.105 29 167 28.1046 167 27 C 167 25.8954 166.105 25 165 25 Z M 191 27 C 191 25.8954 191.895 25 193 25 C 194.105 25 195 25.8954 195 27 C 195 28.1046 194.105 29 193 29 C 191.895 29 191 28.1046 191 27 Z M 191 27 C 191 28.1046 190.105 29 189 29 C 187.895 29 187 28.1046 187 27 C 187 25.8954 187.895 25 189 25 C 190.105 25 191 25.8954 191 27 Z M 193 29 C 191.895 29 191 29.8954 191 31 C 191 32.1046 191.895 33 193 33 C 194.105 33 195 32.1046 195 31 C 195 29.8954 194.105 29 193 29 Z M 195 55 C 195 53.8954 194.105 53 193 53 C 191.895 53 191 53.8954 191 55 C 191 56.1046 191.895 57 193 57 C 194.105 57 195 56.1046 195 55 Z M 195 79 C 195 77.8954 194.105 77 193 77 C 191.895 77 191 77.8954 191 79 C 191 80.1046 191.895 81 193 81 C 194.105 81 195 80.1046 195 79 Z M 193 105 C 194.105 105 195 104.105 195 103 C 195 101.895 194.105 101 193 101 C 191.895 101 191 101.895 191 103 C 191 104.105 191.895 105 193 105 Z M 191 107 C 191 108.105 191.895 109 193 109 C 194.105 109 195 108.105 195 107 C 195 105.895 194.105 105 193 105 C 191.895 105 191 105.895 191 107 Z M 191 107 C 191 108.105 190.105 109 189 109 C 187.895 109 187 108.105 187 107 C 187 105.895 187.895 105 189 105 C 190.105 105 191 105.895 191 107 Z M 165 109 C 163.895 109 163 108.105 163 107 C 163 105.895 163.895 105 165 105 C 166.105 105 167 105.895 167 107 C 167 108.105 166.105 109 165 109 Z M 141 109 C 139.895 109 139 108.105 139 107 C 139 105.895 139.895 105 141 105 C 142.105 105 143 105.895 143 107 C 143 108.105 142.105 109 141 109 Z M 27 111 H 25 V 113 V 117 V 141 V 165 V 189 V 193 V 195 H 27 H 31 H 55 H 79 H 103 H 107 H 109 V 193 V 189 V 165 V 141 V 117 V 113 V 111 H 107 H 103 H 79 H 55 H 31 H 27 Z M 29 113 C 29 111.895 28.1046 111 27 111 C 25.8954 111 25 111.895 25 113 C 25 114.105 25.8954 115 27 115 C 25.8954 115 25 115.895 25 117 C 25 118.105 25.8954 119 27 119 C 28.1046 119 29 118.105 29 117 C 29 115.895 28.1046 115 27 115 C 28.1046 115 29 114.105 29 113 Z M 29 113 C 29 114.105 29.8954 115 31 115 C 32.1046 115 33 114.105 33 113 C 33 111.895 32.1046 111 31 111 C 29.8954 111 29 111.895 29 113 Z M 55 111 C 53.8954 111 53 111.895 53 113 C 53 114.105 53.8954 115 55 115 C 56.1046 115 57 114.105 57 113 C 57 111.895 56.1046 111 55 111 Z M 79 111 C 77.8954 111 77 111.895 77 113 C 77 114.105 77.8954 115 79 115 C 80.1046 115 81 114.105 81 113 C 81 111.895 80.1046 111 79 111 Z M 105 113 C 105 114.105 104.105 115 103 115 C 101.895 115 101 114.105 101 113 C 101 111.895 101.895 111 103 111 C 104.105 111 105 111.895 105 113 Z M 107 115 C 108.105 115 109 114.105 109 113 C 109 111.895 108.105 111 107 111 C 105.895 111 105 111.895 105 113 C 105 114.105 105.895 115 107 115 Z M 107 115 C 105.895 115 105 115.895 105 117 C 105 118.105 105.895 119 107 119 C 108.105 119 109 118.105 109 117 C 109 115.895 108.105 115 107 115 Z M 109 141 C 109 139.895 108.105 139 107 139 C 105.895 139 105 139.895 105 141 C 105 142.105 105.895 143 107 143 C 108.105 143 109 142.105 109 141 Z M 109 165 C 109 163.895 108.105 163 107 163 C 105.895 163 105 163.895 105 165 C 105 166.105 105.895 167 107 167 C 108.105 167 109 166.105 109 165 Z M 107 191 C 108.105 191 109 190.105 109 189 C 109 187.895 108.105 187 107 187 C 105.895 187 105 187.895 105 189 C 105 190.105 105.895 191 107 191 Z M 105 193 C 105 194.105 105.895 195 107 195 C 108.105 195 109 194.105 109 193 C 109 191.895 108.105 191 107 191 C 105.895 191 105 191.895 105 193 Z M 105 193 C 105 194.105 104.105 195 103 195 C 101.895 195 101 194.105 101 193 C 101 191.895 101.895 191 103 191 C 104.105 191 105 191.895 105 193 Z M 79 195 C 77.8954 195 77 194.105 77 193 C 77 191.895 77.8954 191 79 191 C 80.1046 191 81 191.895 81 193 C 81 194.105 80.1046 195 79 195 Z M 55 195 C 53.8954 195 53 194.105 53 193 C 53 191.895 53.8954 191 55 191 C 56.1046 191 57 191.895 57 193 C 57 194.105 56.1046 195 55 195 Z M 29 193 C 29 191.895 29.8954 191 31 191 C 32.1046 191 33 191.895 33 193 C 33 194.105 32.1046 195 31 195 C 29.8954 195 29 194.105 29 193 Z M 27 191 C 25.8954 191 25 191.895 25 193 C 25 194.105 25.8954 195 27 195 C 28.1046 195 29 194.105 29 193 C 29 191.895 28.1046 191 27 191 Z M 27 191 C 28.1046 191 29 190.105 29 189 C 29 187.895 28.1046 187 27 187 C 25.8954 187 25 187.895 25 189 C 25 190.105 25.8954 191 27 191 Z M 25 165 C 25 166.105 25.8954 167 27 167 C 28.1046 167 29 166.105 29 165 C 29 163.895 28.1046 163 27 163 C 25.8954 163 25 163.895 25 165 Z M 25 141 C 25 139.895 25.8954 139 27 139 C 28.1046 139 29 139.895 29 141 C 29 142.105 28.1046 143 27 143 C 25.8954 143 25 142.105 25 141 Z M 111 195 H 113 H 117 H 141 H 165 H 189 H 193 H 195 V 193 V 189 V 165 V 141 V 117 V 113 V 111 H 193 H 189 H 165 H 141 H 117 H 113 H 111 V 113 V 117 V 141 V 165 V 189 V 193 V 195 Z M 111 193 C 111 191.895 111.895 191 113 191 C 114.105 191 115 191.895 115 193 C 115 194.105 114.105 195 113 195 C 111.895 195 111 194.105 111 193 Z M 115 193 C 115 191.895 115.895 191 117 191 C 118.105 191 119 191.895 119 193 C 119 194.105 118.105 195 117 195 C 115.895 195 115 194.105 115 193 Z M 115 113 C 115 114.105 115.895 115 117 115 C 118.105 115 119 114.105 119 113 C 119 111.895 118.105 111 117 111 C 115.895 111 115 111.895 115 113 Z M 113 115 C 111.895 115 111 114.105 111 113 C 111 111.895 111.895 111 113 111 C 114.105 111 115 111.895 115 113 C 115 114.105 114.105 115 113 115 Z M 141 111 C 142.105 111 143 111.895 143 113 C 143 114.105 142.105 115 141 115 C 139.895 115 139 114.105 139 113 C 139 111.895 139.895 111 141 111 Z M 165 111 C 166.105 111 167 111.895 167 113 C 167 114.105 166.105 115 165 115 C 163.895 115 163 114.105 163 113 C 163 111.895 163.895 111 165 111 Z M 191 113 C 191 111.895 191.895 111 193 111 C 194.105 111 195 111.895 195 113 C 195 114.105 194.105 115 193 115 C 191.895 115 191 114.105 191 113 Z M 191 113 C 191 114.105 190.105 115 189 115 C 187.895 115 187 114.105 187 113 C 187 111.895 187.895 111 189 111 C 190.105 111 191 111.895 191 113 Z M 193 115 C 194.105 115 195 115.895 195 117 C 195 118.105 194.105 119 193 119 C 191.895 119 191 118.105 191 117 C 191 115.895 191.895 115 193 115 Z M 195 141 C 195 142.105 194.105 143 193 143 C 191.895 143 191 142.105 191 141 C 191 139.895 191.895 139 193 139 C 194.105 139 195 139.895 195 141 Z M 195 165 C 195 166.105 194.105 167 193 167 C 191.895 167 191 166.105 191 165 C 191 163.895 191.895 163 193 163 C 194.105 163 195 163.895 195 165 Z M 193 191 C 191.895 191 191 190.105 191 189 C 191 187.895 191.895 187 193 187 C 194.105 187 195 187.895 195 189 C 195 190.105 194.105 191 193 191 Z M 191 193 C 191 194.105 190.105 195 189 195 C 187.895 195 187 194.105 187 193 C 187 191.895 187.895 191 189 191 C 190.105 191 191 191.895 191 193 Z M 191 193 C 191 191.895 191.895 191 193 191 C 194.105 191 195 191.895 195 193 C 195 194.105 194.105 195 193 195 C 191.895 195 191 194.105 191 193 Z M 165 195 C 166.105 195 167 194.105 167 193 C 167 191.895 166.105 191 165 191 C 163.895 191 163 191.895 163 193 C 163 194.105 163.895 195 165 195 Z M 141 195 C 142.105 195 143 194.105 143 193 C 143 191.895 142.105 191 141 191 C 139.895 191 139 191.895 139 193 C 139 194.105 139.895 195 141 195 Z M 113 163 C 111.895 163 111 163.895 111 165 C 111 166.105 111.895 167 113 167 C 114.105 167 115 166.105 115 165 C 115 163.895 114.105 163 113 163 Z M 113 143 C 111.895 143 111 142.105 111 141 C 111 139.895 111.895 139 113 139 C 114.105 139 115 139.895 115 141 C 115 142.105 114.105 143 113 143 Z M 113 115 C 111.895 115 111 115.895 111 117 C 111 118.105 111.895 119 113 119 C 114.105 119 115 118.105 115 117 C 115 115.895 114.105 115 113 115 Z M 113 191 C 111.895 191 111 190.105 111 189 C 111 187.895 111.895 187 113 187 C 114.105 187 115 187.895 115 189 C 115 190.105 114.105 191 113 191 Z"
    ],
},
]


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

