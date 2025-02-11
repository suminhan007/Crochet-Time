import getRandomRgbaColor from "../../utils/getRandomRgba.ts";

export const CourseHomeData = [
    {
        id: ' material&tool',
        title: '认识毛线和工具',
        desc: '认识常见的毛线、钩织、棒织工具',
        color: getRandomRgbaColor(1),
        cards: [
            {
                id: '2025-2',
                title: '毛线',
                desc: '',
                href:'/#/type=course-wire',
                details: '纱线由纤维制成，可以由羊毛等单一纤维制成，也可以与其他纤维混合以增强其性能。毛线通常指羊毛纺成的纱。',
            },
            {
                id: '2025-4',
                title: '器材',
                desc: '',
                href:'/#/type=course-tool',
                details: '此处列出新手入门学习钩针编织/棒针编织的必备工具套装。其他器材可后期根据自己的需要准备。',
            },
        ],
    },
    {
        id: 'illustration',
        title: '插图教程',
        desc: '通过插图的方式',
        color: getRandomRgbaColor(1),
        cards: [
            {
                id: 'illustration-crochet',
                title: '钩针插图教程',
                desc: '2024年度文章',
                href:'/#/type=course-crochet',
                details: ''
            },
            {
                id: 'illustration-knit',
                title: '棒针插图教程',
                desc: '2024年度文章',
                href:'/#/type=course-knit',
                details: ''
            }
        ],
    },
]