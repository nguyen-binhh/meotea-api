// ─── Categories ───────────────────────────────────────────────────────────────

export const categoryData = [
  { name: 'Trà Sữa',      slug: 'tra-sua',       icon: '🧋', color: '#F48FB1', sortOrder: 1 },
  { name: 'Trà Trái Cây', slug: 'tra-trai-cay',  icon: '🍓', color: '#F06292', sortOrder: 2 },
  { name: 'Cà Phê',       slug: 'ca-phe',         icon: '☕', color: '#A1887F', sortOrder: 3 },
  { name: 'Đặc Biệt',     slug: 'dac-biet',       icon: '✨', color: '#CE93D8', sortOrder: 4 },
  { name: 'Topping',      slug: 'topping',        icon: '🔮', color: '#80DEEA', sortOrder: 5 },
];

// ─── Shared defaults ──────────────────────────────────────────────────────────

const ALL_TOPPINGS = [
  { name: 'Trân châu đen',   price: 5000, sortOrder: 1 },
  { name: 'Trân châu trắng', price: 5000, sortOrder: 2 },
  { name: 'Thạch cà phê',    price: 5000, sortOrder: 3 },
  { name: 'Pudding trứng',   price: 7000, sortOrder: 4 },
  { name: 'Nata de coco',    price: 5000, sortOrder: 5 },
  { name: 'Kem cheese',      price: 8000, sortOrder: 6 },
];

const FRUIT_TOPPINGS = [
  { name: 'Trân châu đen', price: 5000, sortOrder: 1 },
  { name: 'Thạch cà phê',  price: 5000, sortOrder: 2 },
  { name: 'Nata de coco',  price: 5000, sortOrder: 3 },
];

const LYCHEE_TOPPINGS = [
  { name: 'Trân châu đen', price: 5000, sortOrder: 1 },
  { name: 'Nata de coco',  price: 5000, sortOrder: 2 },
];

const COFFEE_TOPPINGS = [
  { name: 'Pudding trứng', price: 7000, sortOrder: 1 },
  { name: 'Kem cheese',    price: 8000, sortOrder: 2 },
];

const DEFAULT_SIZES = [
  { sizeCode: 'M', name: 'Vừa (M) – 500ml', priceModifier: 0,    sortOrder: 1 },
  { sizeCode: 'L', name: 'Lớn (L) – 700ml', priceModifier: 7000, sortOrder: 2 },
];

const DEFAULT_SWEETNESS = [0, 30, 50, 70, 100];
const DEFAULT_ICE       = ['Không đá', 'Ít đá', 'Bình thường', 'Nhiều đá'];

// ─── Products ─────────────────────────────────────────────────────────────────

export const productData = [
  // ── Trà Sữa ──────────────────────────────────────────────────────────────
  {
    name:            'Trà Sữa Trân Châu Đen',
    slug:            'tra-sua-tran-chau-den',
    categorySlug:    'tra-sua',
    price:           45000,
    description:     'Trà sữa thơm ngon kết hợp cùng trân châu đen dai mềm. Vị trà đậm đà, sữa béo ngậy – món uống kinh điển không thể thiếu.',
    rating:          4.8,
    reviews:         256,
    isBestseller:    true,
    isNew:           false,
    tags:            ['bestseller', 'classic'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        ALL_TOPPINGS,
    sortOrder:       1,
  },
  {
    name:            'Trà Sữa Matcha Nhật',
    slug:            'tra-sua-matcha-nhat',
    categorySlug:    'tra-sua',
    price:           52000,
    description:     'Matcha Nhật Bản thượng hạng pha cùng sữa tươi tạo nên hương vị đắng ngọt tinh tế, thơm mùi trà xanh đặc trưng.',
    rating:          4.9,
    reviews:         180,
    isBestseller:    true,
    isNew:           false,
    tags:            ['bestseller', 'premium'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        ALL_TOPPINGS,
    sortOrder:       2,
  },
  {
    name:            'Trà Sữa Oolong Kem Cheese',
    slug:            'tra-sua-oolong-kem-cheese',
    categorySlug:    'tra-sua',
    price:           58000,
    description:     'Trà Oolong thanh thoát bên dưới, lớp kem cheese béo mịn phủ bên trên. Kết hợp hoàn hảo giữa đắng và béo.',
    rating:          4.7,
    reviews:         142,
    isBestseller:    false,
    isNew:           true,
    tags:            ['new', 'trending'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        ALL_TOPPINGS,
    sortOrder:       3,
  },
  {
    name:            'Trà Sữa Taro Khoai Môn',
    slug:            'tra-sua-taro-khoai-mon',
    categorySlug:    'tra-sua',
    price:           49000,
    description:     'Khoai môn Taro mịn màng quyện cùng sữa tươi tạo nên màu tím đặc trưng và vị ngọt béo tự nhiên.',
    rating:          4.7,
    reviews:         167,
    isBestseller:    false,
    isNew:           false,
    tags:            ['popular'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        ALL_TOPPINGS,
    sortOrder:       4,
  },

  // ── Trà Trái Cây ─────────────────────────────────────────────────────────
  {
    name:            'Trà Đào Cam Sả',
    slug:            'tra-dao-cam-sa',
    categorySlug:    'tra-trai-cay',
    price:           48000,
    description:     'Hương đào ngọt ngào kết hợp cam tươi và sả thơm tạo nên thức uống giải nhiệt cực kỳ sảng khoái.',
    rating:          4.6,
    reviews:         210,
    isBestseller:    false,
    isNew:           false,
    tags:            ['fruity', 'refreshing'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        FRUIT_TOPPINGS,
    sortOrder:       5,
  },
  {
    name:            'Trà Vải Lychee Soda',
    slug:            'tra-vai-lychee-soda',
    categorySlug:    'tra-trai-cay',
    price:           50000,
    description:     'Vải thiều tươi ngọt kết hợp soda tạo nên bong bóng vui mắt, thanh mát và thơm ngát hương vải.',
    rating:          4.5,
    reviews:         98,
    isBestseller:    false,
    isNew:           true,
    tags:            ['new', 'fruity'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        LYCHEE_TOPPINGS,
    sortOrder:       6,
  },

  // ── Cà Phê ───────────────────────────────────────────────────────────────
  {
    name:            'Bạc Xỉu Đặc Biệt',
    slug:            'bac-xiu-dac-biet',
    categorySlug:    'ca-phe',
    price:           40000,
    description:     'Cà phê phin truyền thống pha cùng sữa đặc và sữa tươi, ngọt nhẹ thơm ngon theo phong cách Sài Gòn.',
    rating:          4.8,
    reviews:         320,
    isBestseller:    true,
    isNew:           false,
    tags:            ['bestseller', 'classic'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        COFFEE_TOPPINGS,
    sortOrder:       7,
  },

  // ── Đặc Biệt ─────────────────────────────────────────────────────────────
  {
    name:            'Mèo Trà Đặc Biệt',
    slug:            'meo-tra-dac-biet',
    categorySlug:    'dac-biet',
    price:           65000,
    description:     'Thức uống signature của Mèo Trà – pha trộn bí quyết từ trà đặc biệt, kem tươi và topping siêu phẩm. Chỉ có tại Mèo Trà!',
    rating:          5.0,
    reviews:         89,
    isBestseller:    true,
    isNew:           true,
    tags:            ['signature', 'special'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        ALL_TOPPINGS,
    sortOrder:       8,
  },
];
