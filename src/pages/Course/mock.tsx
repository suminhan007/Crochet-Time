import getRandomRgbaColor from "../../utils/getRandomRgba.ts";

export const CourseHomeData = [
    {
        id: ' material&tool',
        title: '认识编织',
        title_en: 'Learn about Wave',
        desc: '认识常见的毛线、钩织、棒织工具，了解其他与编织相关的故事。',
        desc_en: 'Get to know common yarn, crochet, and stick knitting tools, and learn other knitting-related stories.',
        color: getRandomRgbaColor(1),
        cards: [
            {
                id: '2025-2',
                title: '纱线种类及特性',
                title_en: 'Yarn types and characteristics',
                desc: '适用于钩针编织或棒针编织的常见纱线种类及其特点。',
                desc_en:'Common types of yarns suitable for crochet or stick knitting and their characteristics.',
                href:'/#/type=course-wire',
                details: '列举常见线材的原料、物理及使用特性、使用场景、环保性、优缺点、常用钩针或棒针型号等。',
                details_en: 'List the raw materials, physical and usage characteristics, usage scenarios, environmental protection, advantages and disadvantages of common wires, commonly used crochet or stick needle models, etc.'
            },
            {
                id: '2025-4',
                title: '编织工具与配材',
                title_en: 'Knitting tools and accessories',
                desc: '钩针或棒针编织时用到的除毛线与针以外的其他工具、配材',
                desc_en: 'Other tools and accessories other than wool and needles used in crochet or stick knitting',
                href:'/#/type=course-tool',
                details: '此处列出新手入门学习钩针编织/棒针编织的必备工具套装。其他器材可后期根据自己的需要准备。',
                details_en: 'Here is a list of essential tool sets for beginners to learn crochet/stick knitting. Other equipment can be prepared later according to your own needs.',
            },
            {
                id: '2025-2',
                title: '编织发展史',
                title_en: 'Weaving development history',
                desc: '介绍编织发展到现在的过程',
                href:'/#/type=course-wire',
                details: '纱线由纤维制成，可以由羊毛等单一纤维制成，也可以与其他纤维混合以增强其性能。毛线通常指羊毛纺成的纱。',
            },
            // {
            //     id: '2025-4',
            //     title: '了解机器编织',
            //     desc: '',
            //     href:'/#/type=course-tool',
            //     details: '此处列出新手入门学习钩针编织/棒针编织的必备工具套装。其他器材可后期根据自己的需要准备。',
            // },
            // {
            //     id: '2025-4',
            //     title: '编织的应用',
            //     desc: '',
            //     href:'/#/type=course-tool',
            //     details: '此处列出新手入门学习钩针编织/棒针编织的必备工具套装。其他器材可后期根据自己的需要准备。',
            // },
        ],
    },
    {
        id: 'illustration',
        title: '钩针教程',
        title_en:'Crochet Courses',
        desc: '通过插图的方式',
        desc_en: 'by way of illustration',
        color: getRandomRgbaColor(1),
        cards: [
            {
                id: 'illustration-crochet',
                title: '钩针针法（初阶）',
                desc: '2024年度文章',
                href:'/#/type=course-crochet',
                details: ''
            },
            {
                id: 'illustration-crochet',
                title: '钩针针法（高阶）',
                desc: '2024年度文章',
                href:'/#/type=course-crochet',
                details: ''
            },
            {
                id: 'illustration-crochet',
                title: '钩针符号表',
                desc: '2024年度文章',
                href:'/#/type=course-crochet',
                details: ''
            },
            {
                id: 'illustration-crochet',
                title: '钩针案例（初阶）',
                desc: '2024年度文章',
                href:'/#/type=course-crochet',
                details: ''
            },
            {
                id: 'illustration-crochet',
                title: '钩针案例（高阶）',
                desc: '2024年度文章',
                href:'/#/type=course-crochet',
                details: ''
            },
        ],
    },
    {
        id: 'illustration',
        title: '棒针教程',
        desc: '通过插图的方式',
        color: getRandomRgbaColor(1),
        cards: [
            {
                id: 'illustration-knit',
                title: '棒针插图教程',
                desc: '2024年度文章',
                href:'/#/type=course-knit',
                details: ''
            },
        ]
    }
]

export const YarnTypeData = [
    {
        id:'0',
        label:'毛线参数',
        img_url: "https://croknittime.com/images/xc/mx.jpg",
        types: ['newer','doll'],
        material: '棉花??cotton',
        origin:'中国、印度??China, India',
        physical_properties: '中等粗细，强度高，无弹性，光泽柔和??Medium thickness, high strength, inelastic, soft luster',
        usage_features:'吸湿透气，柔软，易染色，耐热??Moisture-absorbing, breathable, soft, easy to dye, heat-resistant',
        crochet_size: '2.5-4.5mm',
        knit_size: '3.5-5mm',
        applicable:'夏季衣物、婴儿用品、家居装饰??Summer Clothes, Baby Products, Home Decor',
        maintainance:'可机洗，耐高温??Machine washable, high temperature resistant',
        sustainability:'天然可再生，但种植耗水量大??Naturally renewable, but cultivation consumes a lot of water',
        advantages:'柔软、吸湿??Soft and hygroscopic',
        disadvantages:'易皱、弹性差??Easy to wrinkle, poor elasticity',
        details: '纯棉线由棉花经过采摘、清理、纺纱等工艺制成。??Pure cotton thread is made from cotton through picking, cleaning, spinning and other processes.'
    },
    {
        id:'1',
        label:'纯棉线??Pure cotton yarn',
        img_url: "https://croknittime.com/images/xc/mx.jpg",
        types: ['newer','doll'],
        material: '棉花??cotton',
        origin:'中国、印度??China, India',
        physical_properties: '中等粗细，强度高，无弹性，光泽柔和??Medium thickness, high strength, inelastic, soft luster',
        usage_features:'吸湿透气，柔软，易染色，耐热??Moisture-absorbing, breathable, soft, easy to dye, heat-resistant',
        crochet_size: '2.5-4.5mm',
        knit_size: '3.5-5mm',
        applicable:'夏季衣物、婴儿用品、家居装饰??Summer Clothes, Baby Products, Home Decor',
        maintainance:'可机洗，耐高温??Machine washable, high temperature resistant',
        sustainability:'天然可再生，但种植耗水量大??Naturally renewable, but cultivation consumes a lot of water',
        advantages:'柔软、吸湿??Soft and hygroscopic',
        disadvantages:'易皱、弹性差??Easy to wrinkle, poor elasticity',
        details: '纯棉线由棉花经过采摘、清理、纺纱等工艺制成。??Pure cotton thread is made from cotton through picking, cleaning, spinning and other processes.'
    },
    {
        id:'1-1',
        label:'牛奶棉??Milk cotton',
        nickname:'牛奶纤维纱??Milk fiber yarn',
        img_url: "https://croknittime.com/images/xc/lsx.jpg",
        types: ['newer','doll'],
        material: '棉、牛奶蛋白纤维??Cotton、Milk protein fiber',
        origin:'常见于中国、日本品牌??Commonly found in Chinese and Japanese brands',
        physical_properties:'中等粗细（如20支），强度适中，弹性一般，光泽柔和??Medium thickness (such as 20 pieces), moderate strength, average elasticity, soft luster',
        usage_features:'吸湿透气，轻盈舒适，适合贴身穿着。??Moisture-absorbent and breathable, lightweight and comfortable, suitable for close-fitting wear.',
        crochet_size: '3.5-4.5mm',
        knit_size: '3.5-4.5mm',
        applicable:'婴儿、敏感肌肤人群、编织爱好者。??Babies, people with sensitive skin, and knitting enthusiasts.',
        maintainance:'手洗或机洗（轻柔模式），冷水，平铺晾干。??Hand or machine wash (delicate cycle) in cold water and lay flat to dry.',
        sustainability:'部分可生物降解，生产过程环保。??Partly biodegradable, the production process is environmentally friendly.',
        advantages:'柔软亲肤、环保??Soft, skin-friendly and environmentally friendly',
        disadvantages:'强度较低、价格较高??Lower strength, higher price',
        details: '牛奶棉也称牛奶丝，是将液状牛奶脱脂、去水后所得到的牛奶蛋白质，加上柔和剂，制成牛奶浆液，然后通过湿纺工艺及科学处理，纺制成牛奶蛋白纤维，再经湿纺工艺及科技处理成牛奶丝。市场上牛奶棉通常使用棉+牛奶纤维合成。\n牛奶棉是新手入门最常用的线材。根据股数分为不同粗细，最常见的有4股牛奶棉、5股牛奶棉、8股牛奶棉。??Milk cotton is also called milk silk. Milk protein fiber products are a kind of textile material. They belong to the animal and plant protein fiber series. They are milk proteins obtained by defatting and removing water from liquid milk, and adding softeners to make milk slurry. Then through wet spinning technology and scientific treatment, milk protein fiber is spun into milk protein fiber, and then wet spinning technology and technology are used to process it into milk silk. Milk cotton on the market is usually synthesized from cotton + milk fiber.\n' +
            'Milk cotton is the most commonly used wire for beginners. According to the number of strands, it is divided into different thicknesses. The most common ones are 4-strand milk cotton, 5-strand milk cotton, and 8-strand milk cotton.'
    },
    {
        id:'2',
        label:'羊毛纱??Wool yarn',
        img_url: "https://croknittime.com/images/xc/tsx.jpg",
        types: ['newer','doll'],
        material: '羊毛??wool',
        origin:'澳大利亚、新西兰??Australia, New Zealand',
        physical_properties: '中等粗细，弹性好，蓬松??Medium thickness, good elasticity, fluffy',
        usage_features:'保暖，吸湿，抗皱??Warmth, moisture absorption, anti-wrinkle',
        crochet_size: '4-6mm',
        knit_size: '5-7mm',
        applicable:'毛衣、围巾、帽子??Sweaters, scarves, hats',
        maintainance:'手洗，平铺晾干??Hand wash, lay flat to dry',
        sustainability:'天然可再生，但羊毛生产可能涉及动物福利问题。??Naturally renewable, but wool production may involve animal welfare issues.',
        advantages:'保暖、弹性好??Warmth and good elasticity',
        disadvantages:'易起球??Easy to pill',
        details: '羊毛通过剪毛、清洗、梳理、纺纱等工艺制成。??Wool is made through shearing, cleaning, carding, spinning and other processes.'
    },
    {
        id:'3',
        label:'羊绒纱??Cashmere yarn',
        img_url: "https://croknittime.com/images/xc/tsx.jpg",
        types: ['newer','doll'],
        material: '山羊绒??Cashmere',
        origin:'中国、蒙古??China, Mongolia',
        physical_properties: '细腻，轻盈，弹性好??Delicate, light and elastic',
        usage_features:'极其柔软，保暖性强??Extremely soft and warm',
        crochet_size: '3-4.5mm',
        knit_size: '4-5.5mm',
        applicable:'高档毛衣、围巾、披肩??High-end sweaters, scarves and shawls',
        maintainance:'手洗，平铺晾干??Hand wash, lay flat to dry',
        sustainability:'天然可再生，但产量低，价格高。??Naturally renewable, but yields are low and prices are high.',
        advantages:'柔软、保暖??Soft and warm',
        disadvantages:'价格高??expensive',
        details: '山羊绒通过梳理、清洗、纺纱等工艺制成。??Cashmere is made through carding, cleaning, spinning and other processes.'
    },
    {
        id:'4',
        label:'腈纶纱??Acrylic yarn',
        img_url: "https://croknittime.com/images/xc/yrx.jpg",
        types: ['newer','doll'],
        material: '丙烯腈??Acrylonitrile',
        origin:'中国、美国??China, United States',
        physical_properties: '中等粗细，弹性好，蓬松??Medium thickness, good elasticity, fluffy',
        usage_features:'柔软，保暖，耐光??Soft, warm, lightfast',
        crochet_size: '4-6mm',
        knit_size: '5-7mm',
        applicable:'毛衣、帽子、围巾??Sweaters, hats, scarves',
        maintainance:'可机洗，易干??Machine washable and easy to dry',
        sustainability:'合成纤维，不可降解，生产能耗高。??Synthetic fibers are non-degradable and require high energy consumption for production.',
        advantages:'价格低、易护理??Low price and easy care',
        disadvantages:'透气性差??poor breathability',
        details: '丙烯腈通过聚合、纺丝等工艺制成。??Acrylonitrile is made through polymerization, spinning and other processes.'
    },
    {
        id:'5',
        label:'混纺纱??Blended yarn',
        img_url: "https://croknittime.com/images/xc/yrx.jpg",
        types: ['newer','doll'],
        material: '两种或以上纤维（棉/腈纶、羊毛/腈纶等）混合??Mixing of two or more fibers(cotton/acrylic, wool/acrylic, etc.)',
        origin:'全球广泛生产??Widely produced globally',
        physical_properties: '根据混合比例不同，特性各异??Characteristics vary depending on the mixing ratio',
        usage_features:'综合多种纤维优点??Comprehensive advantages of various fibers',
        crochet_size: '3-5mm',
        knit_size: '4-6mm',
        applicable:'日常衣物、家居用品??Daily clothing, household items',
        maintainance:'根据成分选择清洗方式??Choose a cleaning method based on ingredients',
        sustainability:'取决于混合成分，天然纤维部分可再生。??Depending on the mix ingredients, natural fibers are partially renewable.',
        advantages:'多功能性??Versatility',
        disadvantages:'特性受混合比例影响??Properties affected by mix ratio',
        details: ''
    },
    {
        id:'6',
        label:'丝线??Silk yarn',
        img_url: "https://croknittime.com/images/xc/yrx.jpg",
        types: ['newer','doll'],
        material: '蚕丝??silk',
        origin:'中国、印度??China, India',
        physical_properties: '细腻，光泽好，弹性适中??Delicate, good gloss, moderate elasticity',
        usage_features:'柔软，吸湿，透气??Soft, moisture absorbent, breathable',
        crochet_size: '1-3mm',
        knit_size: '2-4.5mm',
        applicable:'高档围巾、披肩??High-end scarves and shawls',
        maintainance:'手洗，平铺晾干??Hand wash, lay flat to dry',
        sustainability:'天然可再生。??Naturally renewable.',
        advantages:'光泽好、柔软??Good gloss and soft',
        disadvantages:'价格高、易勾丝??High price, easy to snag',
        details: '蚕丝通过缫丝、捻丝等工艺制成。??Silk is made through reeling, twisting and other processes.'
    },
    {
        id:'7',
        label:'竹纤维纱??Bamboo fiber yarn',
        img_url: "https://croknittime.com/images/xc/yrx.jpg",
        types: ['newer','doll'],
        material: '竹子??bamboo',
        origin:'中国、日本??China, Japan',
        physical_properties: '中等粗细，柔软，光泽柔和??Medium thickness, soft, soft luster',
        usage_features:'抗菌，吸湿，透气??Antibacterial, hygroscopic, breathable',
        crochet_size: '3-4.5mm',
        knit_size: '4-5.5mm',
        applicable:'夏季衣物、家居用品??Summer clothing and household items',
        maintainance:'可机洗，耐高温??Machine washable, high temperature resistant',
        sustainability:'天然可再生，竹资源生长快，环保。??Naturally renewable, bamboo resources grow quickly and are environmentally friendly.',
        advantages:'环保、抗菌??Environmentally friendly, antibacterial',
        disadvantages:'强度较低??Less intense',
        details: '竹子通过粉碎、蒸煮、纺丝等工艺制成。??Bamboo is made through processes such as crushing, cooking, and spinning.'
    },
    {
        id:'8',
        label:'莫代尔纱??Modal yarn',
        img_url: "https://croknittime.com/images/xc/yrx.jpg",
        types: ['newer','doll'],
        material: '木浆??wood pulp',
        origin:'中国、奥地利??China, Austria',
        physical_properties: '细腻，柔软，光泽好??Delicate, soft and glossy',
        usage_features:'吸湿，透气，环保??Hygroscopic, breathable, environmentally friendly',
        crochet_size: '3-4.5mm',
        knit_size: '4-5.5mm',
        applicable:'内衣、家居服、夏季衣物??Underwear, home wear, summer clothing',
        maintainance:'可机洗，耐高温??Machine washable, high temperature resistant',
        sustainability:'再生纤维素纤维，生产过程中使用化学溶剂。??Regenerated cellulose fiber, which uses chemical solvents in the production process.',
        advantages:'柔软、环保??Soft and environmentally friendly',
        disadvantages:'易变形??Easy to deform',
        details: '莫代尔纱由木浆通过湿法纺丝工艺制成。??Modal yarn is made from wood pulp through a wet spinning process.'
    },
    {
        id:'9',
        label:'天丝纱（Lyocell）??Tencel yarn(Lyocell)',
        img_url: "https://croknittime.com/images/xc/yrx.jpg",
        types: ['newer','doll'],
        material: '再生纤维素纤维??regenerated cellulose fiber',
        origin:'中国、奥地利??China, Austria',
        physical_properties: '细腻，柔软，光泽好??Delicate, soft and glossy',
        usage_features:'吸湿，透气，环保??Hygroscopic, breathable, environmentally friendly',
        crochet_size: '3-4.5mm',
        knit_size: '4-5.5mm',
        applicable:'高档衣物、家居用品??High-end clothing and household items',
        maintainance:'可机洗，耐高温??Machine washable, high temperature resistant',
        sustainability:'再生纤维素纤维，使用环保溶剂，可生物降解。??Regenerated cellulose fiber, using environmentally friendly solvents, is biodegradable.',
        advantages:'柔软、环保??Soft and environmentally friendly',
        disadvantages:'价格较高??higher price',
        details: '天丝纱由木浆通过溶剂纺丝工艺制成。??Tencel yarn is made from wood pulp through a solvent spinning process'
    },
    {
        id:'10',
        label:'马海毛纱??Mohair yarn',
        img_url: "https://croknittime.com/images/xc/mhm.jpg",
        types: ['newer','doll'],
        material: '安哥拉山羊毛??Angora goat hair',
        origin:'土耳其、南非??Türkiye, South Africa',
        physical_properties: '蓬松，光泽好，弹性适中??Fluffy, good gloss, moderate elasticity',
        usage_features:'柔软，保暖，轻盈??Soft, warm and lightweight',
        crochet_size: '4-6mm',
        knit_size: '5-7mm',
        applicable:'毛衣、围巾、披肩??Sweaters, scarves, shawls',
        maintainance:'手洗，平铺晾干??Hand wash, lay flat to dry',
        sustainability:'天然可再生，但产量低，价格高。??Naturally renewable, but yields are low and prices are high.',
        advantages:'蓬松、保暖??Fluffy and warm',
        disadvantages:'易掉毛??Easy to shed',
        details: '马海毛纱由安哥拉山羊毛通过剪毛、清洗、纺纱等工艺制成。??Mohair yarn is made from Angora goat hair through shearing, cleaning, spinning and other processes.'
    },
    {
        id:'11',
        label:'羊驼毛纱??Alpaca yarn',
        img_url: "https://croknittime.com/images/xc/ytm.jpg",
        types: ['newer','doll'],
        material: '羊驼毛??alpaca wool',
        origin:'秘鲁、玻利维亚??Peru, Bolivia',
        physical_properties: '细腻，柔软，蓬松??Delicate, soft and fluffy',
        usage_features:'保暖，轻盈，抗静电??Warm, lightweight, antistatic',
        crochet_size: '4-6mm',
        knit_size: '5-7mm',
        applicable:'毛衣、围巾、帽子??Sweaters, scarves, hats',
        maintainance:'手洗，平铺晾干??Hand wash, lay flat to dry',
        sustainability:'天然可再生，羊驼毛采集对动物无害。??Naturally renewable, alpaca wool is harvested in an animal-friendly way.',
        advantages:'柔软、保暖??Fluffy and warm',
        disadvantages:'价格较高??higher price',
        details: '羊驼毛通过梳理、清洗、纺纱等工艺制成。??Alpaca wool is made through carding, cleaning, spinning and other processes.'
    },
    {
        id:'12',
        label:'亚克力纱??Acrylic yarn',
        img_url: "https://croknittime.com/images/xc/ytm.jpg",
        types: ['newer','doll'],
        material: '丙烯腈??acrylonitrile',
        origin:'中国、美国??China, United States',
        physical_properties: '中等粗细，弹性好，蓬松??Medium thickness, good elasticity, fluffy',
        usage_features:'柔软，保暖，耐光??Soft, warm, lightfast',
        crochet_size: '4-6mm',
        knit_size: '5-7mm',
        applicable:'毛衣、帽子、围巾??Sweaters, hats, scarves',
        maintainance:'可机洗，易干??Machine washable and easy to dry',
        sustainability:'合成纤维，不可降解，生产能耗高。??Synthetic fibers are non-degradable and require high energy consumption for production.',
        advantages:'价格低、易护理??Low price and easy care',
        disadvantages:'透气性差??Poor breathability',
        details: '丙烯腈通过聚合、纺丝等工艺制成。??Acrylonitrile is made through polymerization, spinning and other processes.'
    },
    {
        id:'13',
        label:'蕾丝线??Lace thread',
        img_url: "https://croknittime.com/images/xc/lsx.jpg",
        types: ['newer','doll'],
        material: '棉或化纤??cotton or chemical fiber',
        origin:'全球广泛生产??Widely produced globally',
        physical_properties: '极细，强度高，无弹性??Extremely thin, high strength, inelastic',
        usage_features:'细腻，轻盈，适合精细编织??Delicate and light, suitable for fine weaving',
        crochet_size: '0.5-2.5mm',
        applicable:'蕾丝花边、桌布、装饰品??Lace, tablecloths, decorations',
        maintainance:'手洗，平铺晾干??Hand wash, lay flat to dry',
        sustainability:'取决于原材料，棉为天然，化纤为合成。??Depends on the raw material, cotton is natural and chemical fiber is synthetic.',
        advantages:'细腻、轻盈??Delicate and light',
        disadvantages:'强度较低??Less intense',
        details: '棉或化纤通过高捻纺纱工艺制成。??Cotton or chemical fiber is made through high twist spinning process.'
    },
    {
        id:'14',
        label:'蕾丝棉线??Lace cotton thread',
        img_url: "https://croknittime.com/images/xc/ytm.jpg",
        types: ['newer','doll'],
        material: '棉??cotton',
        origin:'全球广泛生产??Widely produced globally',
        physical_properties: '极细，强度高，无弹性??Extremely thin, high strength, inelastic',
        usage_features:'细腻，轻盈，适合精细编织??Delicate and light, suitable for fine weaving',
        crochet_size: '1.5-2.5mm',
        applicable:'蕾丝花边、桌布、装饰品??Lace, tablecloths, decorations',
        maintainance:'手洗，平铺晾干??Hand wash, lay flat to dry',
        sustainability:'天然可再生，但种植耗水量大。??Naturally renewable, but cultivation consumes a lot of water.',
        advantages:'细腻、轻盈??Delicate and light',
        disadvantages:'强度较低??Less intense',
        details: '棉花通过高捻纺纱工艺制成。??Cotton is produced through a high-twist spinning process'
    },
    {
        id:'15',
        label:'粗纺毛线??woolen yarn',
        img_url: "https://croknittime.com/images/xc/ytm.jpg",
        types: ['newer','doll'],
        material: '羊毛、羊绒等??wool, cashmere, etc.',
        origin:'冰岛、新西兰??Iceland, New Zealand',
        physical_properties: '粗犷，蓬松，弹性好??Rough, fluffy, good elasticity',
        usage_features:'保暖，适合冬季??Warm, suitable for winter',
        crochet_size: '5-8mm',
        knit_size: '6-9mm',
        applicable:'厚重毛衣、围巾、帽子??Heavy sweaters, scarves, hats',
        maintainance:'手洗，平铺晾干??Hand wash, lay flat to dry',
        sustainability:'天然可再生，但羊毛生产可能涉及动物福利问题。??Naturally renewable, but wool production may involve animal welfare issues.',
        advantages:'保暖、蓬松??Warm and fluffy',
        disadvantages:'易起球??Easy to pill',
        details: '羊毛通过粗梳、纺纱等工艺制成。??Wool is made through processes such as carding and spinning.'
    },
    {
        id:'16',
        label:'冰岛毛线??Iceland yarn',
        img_url: "https://croknittime.com/images/xc/bdx.jpg",
        types: ['newer','doll'],
        material: '冰岛羊毛??Icelandic wool',
        origin:'冰岛??Iceland',
        physical_properties: '粗犷，蓬松，弹性适中??Rough, fluffy, moderately elastic',
        usage_features:'保暖??Warm',
        crochet_size: '5-8mm',
        knit_size: '6-9mm',
        applicable:'毛衣、围巾、帽子??Sweaters, scarves, hats',
        maintainance:'手洗，平铺晾干??Hand wash, lay flat to dry',
        sustainability:'天然可再生，冰岛羊毛资源独特。??Naturally renewable, Icelandic wool resources are unique.',
        advantages:'保暖、风格独特??Warmth and unique style',
        disadvantages:'较粗糙??Rougher',
        details: '冰岛羊毛通过剪毛、清洗、纺纱等工艺制成。??Icelandic wool is made through shearing, cleaning, spinning and other processes.',
        example: "https://croknittime.com/images/xc/bdx01.jpg",
    },
    {
        id:'17',
        label:'丝光棉线??Mercerized cotton thread',
        img_url: "https://croknittime.com/images/xc/ytm.jpg",
        types: ['newer','doll'],
        material: '棉??cotton',
        origin:'中国、印度??China, India',
        physical_properties: '中等粗细，光泽好，强度高??Medium thickness, good gloss, high strength',
        usage_features:'柔软，吸湿，透气??Soft, moisture absorbent, breathable',
        crochet_size: '2.5-4.5mm',
        knit_size: '3.5-5mm',
        applicable:'夏季衣物、家居用品??Summer clothing and household items',
        maintainance:'可机洗，耐高温??Machine washable, high temperature resistant',
        sustainability:'天然可再生，但丝光处理涉及化学工艺。??Naturally renewable, but mercerization involves a chemical process.',
        advantages:'光泽好、柔软??Good gloss and soft',
        disadvantages:'易变形??Easy to deform',
        details: '棉花经过丝光处理（碱液处理）后纺纱制成。??Cotton is mercerized (lye treated) and then spun.'
    },
    {
        id:'18',
        label:'弹力纱??Stretch yarn',
        img_url: "https://croknittime.com/images/xc/ytm.jpg",
        types: ['newer','doll'],
        material: '棉、涤纶等 + 氨纶??Cotton, polyester, etc. + spandex',
        origin:'全球广泛生产??Widely produced globally',
        physical_properties: '中等粗细，弹性好??Medium thickness, good elasticity',
        usage_features:'贴合身体，舒适??Fits the body and is comfortable',
        crochet_size: '2-4.5mm',
        knit_size: '4-5.5mm',
        applicable:'袜子、手套、贴身衣物??Socks, gloves, underwear',
        maintainance:'可机洗，易干??Machine washable and easy to dry',
        sustainability:'合成纤维，不可降解，生产能耗高。??Synthetic fibers are non-degradable and require high energy consumption for production.',
        advantages:'弹性好、舒适??Good elasticity and comfort',
        disadvantages:'易松散??Easy to loosen',
        details: '棉或涤纶与氨纶通过包芯纺纱工艺制成。??Made of cotton or polyester and spandex through core spinning process.'
    },
    {
        id:'19',
        label:'粗花呢纱??Tweed yarn',
        img_url: "https://croknittime.com/images/xc/chn.jpg",
        types: ['newer','doll'],
        material: '羊毛、混纺??Wool, blended',
        origin:'英国、爱尔兰??UK, Ireland',
        physical_properties: '粗犷，纹理丰富??Rugged, rich texture',
        usage_features:'保暖，适合秋冬??Warm, suitable for autumn and winter',
        crochet_size: '5-7mm',
        knit_size: '6-8mm',
        applicable:'外套、围巾、帽子??Coats, scarves, hats',
        maintainance:'手洗，平铺晾干??Hand wash, lay flat to dry',
        sustainability:'取决于成分，羊毛为天然，混纺可能含合成纤维。??Depending on the ingredients, wool is natural and blends may contain synthetic fibers.',
        advantages:'风格独特、保暖??Unique style and warmth',
        disadvantages:'较厚重??thicker',
        details: '羊毛或混纺纤维通过混色纺纱工艺制成。??Wool or blended fibers produced through a melange spinning process'
    },
    {
        id:'20',
        label:'蕾丝麻线??Linen yarn',
        img_url: "https://croknittime.com/images/xc/ytm.jpg",
        types: ['newer','doll'],
        material: '亚麻??flax',
        origin:'中国、法国、比利时??China, France, Belgium',
        physical_properties: '细，强度高，无弹性??Thin, high strength, inelastic',
        usage_features:'透气，吸湿，适合夏季??Breathable, moisture absorbent, suitable for summer',
        crochet_size: '1.5-3mm',
        applicable:'夏季衣物、家居装饰??Summer clothing, home decor',
        maintainance:'手洗，平铺晾干??Hand wash, lay flat to dry',
        sustainability:'天然可再生，麻类植物生长快，环保。??Naturally renewable, hemp plants grow quickly and are environmentally friendly.',
        advantages:'透气、吸湿??Breathable and moisture absorbent',
        disadvantages:'较硬??Harder',
        details: '亚麻通过高捻纺纱工艺制成。??Linen is produced through a high-twist spinning process'
    },
    {
        id:'21',
        label:'塑料线??Plastic wire',
        img_url: "https://croknittime.com/images/xc/ytm.jpg",
        types: ['newer','doll'],
        material: '聚酯（涤纶）、聚酰胺（尼龙）、聚丙烯等??Polyester (polyester), polyamide (nylon), polypropylene, etc.',
        origin:'中国、美国、日本??China, United States, Japan',
        physical_properties: '高强度，耐磨、弹性根据原料而异（尼龙弹性适中、聚丙烯无弹性）、光泽度可调节、蓬松度较低??High strength, wear resistance, elasticity varies according to raw materials (nylon has moderate elasticity, polypropylene has no elasticity), glossiness is adjustable, and fluffiness is low',
        usage_features:'较硬、低透气性、低保暖性、耐磨、抗起球、固色??Harder, low breathability, low warmth retention, wear resistance, anti-pilling, color fixation',
        crochet_size: '2-8mm',
        knit_size: '3-8mm',
        applicable:'编织袋??woven bag',
        maintainance:'可机洗、悬挂晾干??Machine washable, hang dry',
        sustainability:'不可降解，部分可回收、生产过程中碳排放较高??Non-degradable, partially recyclable, high carbon emissions during production',
        advantages:'高强度、耐磨、易清洗??High strength, wear-resistant, easy to clean',
        disadvantages:'不透气??airtight',
        details: '塑料线别名尼龙线、涤纶线、聚丙烯线等。??Plastic thread is also known as nylon thread, polyester thread, polypropylene thread, etc.'
    },
    {
        id:'22',
        label:'金属线??Metal wire',
        img_url: "https://croknittime.com/images/xc/ytm.jpg",
        types: ['newer','doll'],
        material: '铝、铜、银、金等??Aluminum, copper, silver, gold, etc.',
        origin:'中国、美国、日本??China, United States, Japan',
        physical_properties: '极细，中等强度，无弹性、易断裂、高光泽、低蓬松度??Very fine, medium strength, inelastic, easy to break, high gloss, low bulk',
        usage_features:'较硬、无保暖性、不起球、光泽??Harder, no warmth retention, no pilling, glossy',
        crochet_size: '1-4mm',
        knit_size: '2-5mm',
        applicable:'服饰、发饰、编织袋??Clothing, hair accessories, woven bags',
        maintainance:'手洗，平铺晾干??Hand wash, lay flat to dry',
        sustainability:'可回收，但开采和提炼过程环境影响大。??It is recyclable, but the mining and refining process has a high environmental impact.',
        advantages:'闪亮、装饰性强??Shiny and decorative',
        disadvantages:'易断裂、不透气??Easy to break, airtight',
        details: '金属线由金属纤维提炼制成，可能添加涂层（如聚酯）以增强耐用性。??Metal wire is made from refined metal fibers and may have a coating (such as polyester) added for durability.',
        example: "https://croknittime.com/images/xc/jsx.jpg",
    },
]
export const ToolTypeData = [
    {
        "id": '5',
        "title": "缝合针",
        "desc": "缝合针在缝合织片、缝合编织主体（例如玩偶的不同部分）或藏线头时使用。缝合针按材质分为塑料和金属（钢针）",
        img_url: "./images/qc/fhzhen.jpg",
        frequency: 9,
        "detailList": [
            {
                "desc": "\n1、缝合针材质：缝合针通常有金属和塑料两种材质。\n【塑料缝合针】针孔通常较大，适合较粗毛线的缝合。\n【金属缝合针】金属针较细，缝合时不会影响织物的结构。",
                img_url: "./images/qc/fhzhen01.jpg"
            },
            {
                "desc": "2、使用示例：",
                img_url: "./images/qc/fhzhen02.jpg"
            },
            {
                "desc": "\n新手贴士：可准备钢针和塑料针各一根以适用不同场景。\n\n"
            }
        ]
    },
    {
        "id": '9',
        "title": "麻花针",
        "desc": "借助麻花针可以在棒针编织中织出各式各样的“麻花”花纹。",
        img_url: "./images/qc/mhzhen.jpg",
        frequency: 6,
        "detailList": [
            {
                "desc": "\n1、麻花针种类",
                img_url: "./images/qc/mhzhen01.jpg"
            },
            {
                "desc": "2、麻花针花纹示例：",
                img_url: "./images/qc/mhzhen02.jpg"
            }
        ]
    },
    {
        "id": '6',
        "title": "剪刀",
        "desc": "钩织过程中推荐准备中型剪刀（处理常规线材）和U型剪刀（前端较尖、处理较细线材）两种类型，适用于不同场景。",
        img_url: "./images/qc/jdao.jpg",
        frequency: 10,
        "detailList": [
            {
                img_url: "./images/qc/jdao01.jpg"
            }
        ]
    },
    {
        "id":'7',
        "title": "卷尺",
        "desc": "卷尺用于测量织物尺寸，计算线材用量等。",
        img_url: "./images/qc/jchi.jpg",
        frequency: 8,
        "detailList": [
            {
                img_url: "./images/qc/jchi01.jpg"
            }
        ]
    },
    {
        "id": '10',
        "title": "针帽/堵头",
        "desc": "针帽套在棒针针头处防止线圈滑落。",
        img_url: "./images/qc/zmao.jpg",
        frequency: 5,
        "detailList": [
            {
                "desc": "\n针帽种类:",
                img_url: "h./images/qc/zmao01.jpg"
            }
        ]
    },
    {
        "id": '11',
        "title": "计数器",
        "desc": "计数器套在棒针针头处记录行数。",
        img_url: "./images/qc/jsqi.jpg",
        frequency: 6,
        "detailList": [
            {
                "desc": "\n常见计数器即左图所示，另外市场上还有用于计数的计数戒指，如右图所示，可以戴在编织者手上实时计数。",
                img_url: "./images/qc/jsqi.jpg"
            }
        ]
    },
    {
        "id": '2',
        "title": "钩针",
        "desc": "钩针是钩织必备工具。钩针有单头和双头之分，按材质大致分为金属制、塑料制、木制和竹制（其中最常用的为金属制钩针）。钩针有多种尺寸以满足不同类型的线材和规格。",
        img_url: "./images/qc/gzhen.jpg",
        frequency: 10,
        "detailList": [
            {
                "desc": "\n1、钩针结构图示：如图，钩针由尖端、喉部、柄部、头部、拇指托、手柄几个基本部分组成。更尖的尖端可以更容易地进入紧密的针迹，而更圆的尖端不会分裂纱线，适合绒线与粗线钩织。拇指托帮助控制和旋转钩子，手柄有助于在钩针编织时平衡钩子。",
                img_url: "./images/qc/gzhen01.jpg"
            },
            {
                "desc": "2、钩针材质：钩针通常由金属或塑料制成，也存在由木头或竹子制成的钩针。\n【金属钩针】光滑、坚固且经久耐用，但握感可能冰冷和僵硬。\n【木制钩针】感觉温暖而有弹性，但需要精心加工才能使其表面光滑。\n【塑料钩针】光滑且价格低廉，但与某些纱线一起使用时会发出吱吱声，并且相对容易弯曲或断裂。竹制钩针轻巧灵活，但容易碎裂或折断，尤其是较小的尺寸。",
                img_url: "./images/qc/gzhen02.jpg"
            },
            {
                "desc": "3、钩针粗细度：一般用型号表示，普通钩针从2/0号（针轴直径2.0mm）到10/0号（针轴直径6.0mm），除此之外还有更细或更粗的钩针。\n新手贴士：钩针型号与线材大致对应，购买毛线时可查看或咨询其对应的钩针型号以作参考。",
                img_url: "./images/qc/gzhen03.jpg"
            },
            {
                "desc": "粗型钩针：",
                img_url: "./images/qc/gzhen04.jpg"
            },
            {
                "desc": "4、钩针图例：",
                img_url: "./images/qc/gzhen05.jpg"
            },
            {
                "desc": "新手贴示：入门时使用4/0号（2.5mm）钩针搭配四股牛奶棉学习。\n\n"
            }
        ]
    },
    {
        "id": '12',
        "title": "绕线工具",
        "desc": "绕线工具用于将散线缠绕成团。根据线材的多少选择不同的绕线器材。",
        img_url: "./images/qc/rxgju.jpg",
        frequency: 5,
        "detailList": [
            {
                "desc": "\n1、伞架：将散线整理成绞或直接将绞线套在伞架上，搭配绕线器将散线绕成团。",
                img_url: "./images/qc/rxgju01.jpg"
            },
            {
                "desc": "2、绕线板：散线较少时可以使用绕线板简单绕线。",
                img_url: "./images/qc/rxgju02.jpg"
            },
            {
                "desc": "3、手摇绕线器：散线较多时可以使用手摇绕线器进行绕线。",
                img_url: "./images/qc/rxgju03.jpg"
            }
        ]
    },
    {
        "id": '3',
        "title": "棒针",
        "desc": "棒针是棒针编织必备工具。",
        img_url: "./images/qc/bzhen.jpg",
        frequency: 10,
        "detailList": [
            {
                "desc": "\n1、棒针类型：棒针包括双头棒针、单头棒针、环形针、袖口针等。\n【双头棒针】最常用的棒针，编织衣物的传统选择。针数较多时可能会在针头滑线，可使用堵头解决。\n【单头棒针】单头棒针可以帮助固定织片线圈不易从针头滑下。\n【环形针】一根软线连接两个针尖，制成一对环形针。\n【袖口针】袖口针用于编织袜子等环形织物。",
                img_url: "./images/qc/bzhen01.jpg"
            },
            {
                "desc": "2、棒针材质：棒针通常有金属针、塑料针、竹针、木针。\n【金属棒针】光滑耐用。 如果发现自己编织得太紧，使用光滑的金属棒针会帮助编织者的张力松弛。\n【塑料棒针】表面平滑度介于金属和竹子之间。塑料棒针在使用过程中保持稳定的温度，这可能适合患有关节炎的人。\n【竹制棒针】竹子是一种轻巧、灵活的材料，可以制作出色的织针。它有助于保持针迹有规律地间隔，从而形成具有良好张力的均匀针织面料。竹针非常适合丝绸、丝光棉和竹纱等光滑纤维。竹针会随着使用而逐渐轻微翘曲，以适合您的手部曲率。\n【木制棒针】木针会选用品质较好的木料制成，使用起来感觉很豪华，价格较贵。木针通常具有蜡质表面，磨损后会变得光滑，从而形成柔软且有触感的表面。像竹针一样，它们有助于产生均匀的张力。",
                img_url: "./images/qc/bzhen02.jpg"
            },
            {
                "desc": "3、棒针粗细度：（新手贴士：棒针型号与线材大致对应，购买毛线时可查看或咨询其对应的棒针型号以作参考）",
                img_url: "./images/qc/bzhen03.jpg"
            },
            {
                "desc": "4、棒针图例：",
                img_url: "./images/qc/bzhen04.jpg"
            }
        ]
    },
    {
        "id": '13',
        "title": "定位针",
        "desc": "定位针原多用于立体剪裁，在编织中可以帮助固定织物形状及位置，便于缝合。",
        img_url: "./images/qc/dwzhen.jpg",
        frequency: 5,
        "detailList": [
            {
                "desc": "\n定位针种类:最常见的定位针主要有T型针和大头珠针两种，当然市场上还存在各式各样的定位针，其用途一致。",
                img_url: "./images/qc/dwzhen01.jpg"
            }
        ]
    },
    {
        "id": '14',
        "title": "镊子",
        "desc": "镊子可以用于往织物中塞填充棉、粘贴玩偶眼睛配件等。在微钩时镊子也常用于粘贴各种细微配件或在染色时使用。",
        img_url: "https://s2.loli.net/2022/01/25/O9pGiAseXYDP7r2.png",
        frequency: 6,
        "detailList": [
            {
                img_url: "./images/qc/nzi01.jpg"
            }
        ]
    },
    {
        "id": '15',
        "title": "填充棉",
        "desc": "填充棉用于填充织物，钩织玩偶、抱枕等需要用到。",
        img_url: "./images/qc/tcmian.jpg",
        frequency: 6,
        "detailList": [
            {
                "desc": "\n1、填充棉种类：常见的填充棉有珍珠棉和PP棉两种类型。\n【珍珠棉】高弹耐压，饱满厚实，颗粒状。\n【PP棉】蓬松柔软",
                img_url: "./images/qc/tcmian01.jpg"
            },
            {
                "desc": "2、填充方法：织物即将钩完时留1-2圈，使用镊子或剪刀尖部向内塞填充棉。",
                img_url: "./images/qc/tcmian02.jpg"
            },
            {
                "desc": "新手贴示：用量参考45cm*45cm抱枕的用量约为500克，实际情况根据个人对织物的柔软度喜好而异。\n\n"
            }
        ]
    },
    {
        "id": '8',
        "title": "密度尺",
        "desc": "密度尺有两个作用，一是测量织片的密度，二是用于测量棒针的针号。",
        img_url: "./images/qc/mdchi.jpg",
        frequency: 5,
        "detailList": [
            {
                "desc": "\n1、密度尺图例：密度尺可以是直接整体测量的正方形，也可以是单边测量的长条形。",
                img_url: "./images/qc/mdchi01.jpg"
            },
            {
                "desc": "2、使用示例：",
                img_url: "./images/qc/mdchi02.jpg"
            }
        ]
    },
    {
        "id": '4',
        "title": "记号扣",
        "desc": "记号扣也称记号别针，用于挂在针脚处，便于确认起始针目或确认行数。记号扣材质主要分为塑料和金属，最常用的为普通的塑料记号扣。",
        img_url: "./images/qc/jhkou.jpg",
        frequency: 9,
        "detailList": [
            {
                "desc": "\n1、记号扣类型（左图最常见、新手必备）",
                img_url: "./images/qc/jhkou01.jpg"
            },
            {
                "desc": "2、使用示例:标记每一圈第一针的针目。",
                img_url: "./images/qc/jhkou02.jpg"
            }
        ]
    },
    {
        "id": '17',
        "title": "染料",
        "desc": "染料常用于微钩中对原色织物染色，比如微钩水果、花卉等，燃料浓度较高，通常按照一定比例搭配稀释剂或清水使用。",
        img_url: "./images/qc/rliao.jpg",
        frequency: 5,
        "detailList": [
            {
                img_url: "./images/qc/rliao01.jpg"
            }
        ]
    },
    {
        "id": '18',
        "title": "尖钳",
        "desc": "尖钳用于用到金属配件的织物，比如挂件、钥匙扣、需要定型的花卉、玩偶等。",
        img_url: "./images/qc/jqian.jpg",
        frequency: 5,
        "detailList": [
            {
                img_url: "./images/qc/jqian01.jpg"
            }
        ]
    },
    {
        "id": '19',
        "title": "热熔胶枪",
        "desc": "热熔胶枪用于黏贴织物与配件，使用时待其冷却方可粘牢。",
        img_url: "./images/qc/jqiang.jpg",
        frequency: 6,
        "detailList": [
            {
                img_url: "./images/qc/jqiang01.jpg"
            }
        ]
    }
]