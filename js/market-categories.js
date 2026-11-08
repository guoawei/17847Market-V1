// 市集「招商類別」與攤商「攤商類別」共用的類別清單
// 使用頁面：market-create-event.html、vendor-booth-profile.html、market-search.html
// isFood：食品相關類別，用於提醒「食品業者登錄」
const CATEGORIES = [
    { value: 'food',        label: '美食',            icon: 'fa-utensils',             isFood: true },
    { value: 'drink',       label: '飲品/咖啡',       icon: 'fa-mug-hot',              isFood: true },
    { value: 'dessert',     label: '甜點烘焙',        icon: 'fa-cake-candles',         isFood: true },
    { value: 'farm',        label: '小農/農產品',     icon: 'fa-carrot',               isFood: true },
    { value: 'apparel',     label: '服飾',            icon: 'fa-shirt' },
    { value: 'accessory',   label: '飾品配件',        icon: 'fa-gem' },
    { value: 'handmade',    label: '手工文創',        icon: 'fa-palette' },
    { value: 'select',      label: '選物/品牌選品',   icon: 'fa-bag-shopping' },
    { value: 'beauty',      label: '美妝保養/香氛',   icon: 'fa-spray-can-sparkles' },
    { value: 'secondhand',  label: '二手',            icon: 'fa-recycle' },
    { value: 'kids',        label: '親子',            icon: 'fa-children' },
    { value: 'pet',         label: '寵物生活',        icon: 'fa-paw' },
    { value: 'plant',       label: '植栽花藝',        icon: 'fa-seedling' },
    { value: 'healing',     label: '心靈療癒',        icon: 'fa-spa' },
    { value: 'diy',         label: 'DIY體驗/手作課',  icon: 'fa-scissors' },
    { value: 'interactive', label: '互動服務',        icon: 'fa-handshake' },
    { value: 'performer',   label: '街頭藝人',        icon: 'fa-guitar' },
    { value: 'toys',        label: '玩具收藏',        icon: 'fa-puzzle-piece' },
    { value: 'npo',         label: '公益/NPO',        icon: 'fa-hand-holding-heart' },
    { value: 'other',       label: '其他',            icon: 'fa-ellipsis' },
];
