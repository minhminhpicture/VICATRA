const translations = {
  vi: {
    navProducts: "Sản phẩm",
    navContact: "Liên hệ",
    quoteCta: "Báo giá sỉ",
    heroEyebrow: "Catalog sản phẩm chay Việt",
    heroTitle: "Thế Giới Chay cho kênh bán lẻ Campuchia.",
    heroLead:
      "Catalog sản phẩm đơn lẻ để khách xem mẫu nhanh. Chọn sản phẩm cần quan tâm và liên hệ VICATRA qua Zalo hoặc Telegram để nhận báo giá sỉ.",
    viewCatalog: "Xem catalog",
    singleProducts: "sản phẩm đơn lẻ",
    heroNote: "Catalog tập trung vào từng SKU để khách dễ chọn mẫu và hỏi giá sỉ",
    searchLabel: "Tìm sản phẩm",
    searchPlaceholder: "Nhập tên, SKU hoặc nhóm hàng...",
    catalogEyebrow: "Danh mục",
    catalogTitle: "Sản phẩm đơn lẻ, dễ xem mẫu và hỏi giá sỉ.",
    contactTitle: "Cần báo giá sỉ hoặc tư vấn phân phối?",
    zaloQuote: "Zalo 0907 215 521",
    telegramQuote: "Telegram 0907 215 521",
    wholesalePrice: "Giá sỉ: Liên hệ",
    zaloProduct: "Zalo 0907 215 521",
    telegramProduct: "Telegram 0907 215 521",
    empty: "Không tìm thấy sản phẩm phù hợp.",
    result: (shown, total) => `${shown} / ${total} sản phẩm`,
    description: (group, unit) =>
      `${group}. Quy cách: ${unit || "đang cập nhật"}. Liên hệ VICATRA để nhận báo giá sỉ theo số lượng.`,
    categories: {
      all: "Tất cả",
      1: "Nước chấm chay",
      2: "Gia vị tiện lợi",
      3: "Gia vị khô",
      4: "Sốt chấm",
      5: "Ăn vặt",
    },
  },
  km: {
    navProducts: "ផលិតផល",
    navContact: "ទំនាក់ទំនង",
    quoteCta: "ស្នើសុំតម្លៃបោះដុំ",
    heroEyebrow: "កាតាឡុកផលិតផលវេជ្ជ",
    heroTitle: "Thế Giới Chay សម្រាប់បណ្តាញលក់រាយកម្ពុជា.",
    heroLead:
      "កាតាឡុកផលិតផលឯកតាសម្រាប់មើលគំរូបានរហ័ស។ ជ្រើសផលិតផលដែលចាប់អារម្មណ៍ ហើយទាក់ទង VICATRA តាម Zalo ឬ Telegram ដើម្បីទទួលបានតម្លៃបោះដុំ។",
    viewCatalog: "មើលកាតាឡុក",
    singleProducts: "ផលិតផលឯកតា",
    heroNote: "កាតាឡុកផ្តោតលើ SKU នីមួយៗ ដើម្បីងាយស្រួលជ្រើសគំរូ និងសួរតម្លៃបោះដុំ",
    searchLabel: "ស្វែងរកផលិតផល",
    searchPlaceholder: "បញ្ចូលឈ្មោះ SKU ឬក្រុមផលិតផល...",
    catalogEyebrow: "បញ្ជីផលិតផល",
    catalogTitle: "ផលិតផលឯកតា ងាយមើលគំរូ និងសួរតម្លៃបោះដុំ.",
    contactTitle: "ត្រូវការតម្លៃបោះដុំ ឬប្រឹក្សាការចែកចាយ?",
    zaloQuote: "Zalo 0907 215 521",
    telegramQuote: "Telegram 0907 215 521",
    wholesalePrice: "តម្លៃបោះដុំ: សូមទាក់ទង",
    zaloProduct: "Zalo 0907 215 521",
    telegramProduct: "Telegram 0907 215 521",
    empty: "រកមិនឃើញផលិតផលសមស្រប។",
    result: (shown, total) => `${shown} / ${total} ផលិតផល`,
    description: (group, unit) =>
      `${group}. ទម្រង់វេចខ្ចប់: ${unit || "កំពុងធ្វើបច្ចុប្បន្នភាព"}. សូមទាក់ទង VICATRA ដើម្បីទទួលតម្លៃបោះដុំតាមបរិមាណ។`,
    categories: {
      all: "ទាំងអស់",
      1: "ទឹកជ្រលក់វេជ្ជ",
      2: "គ្រឿងទេសងាយប្រើ",
      3: "គ្រឿងទេសស្ងួត",
      4: "ទឹកជ្រលក់",
      5: "អាហារសម្រន់",
    },
  },
  en: {
    navProducts: "Products",
    navContact: "Contact",
    quoteCta: "Wholesale quote",
    heroEyebrow: "Vietnamese vegan product catalog",
    heroTitle: "Thế Giới Chay for Cambodia retail channels.",
    heroLead:
      "A single-SKU product catalog for quick sampling review. Select the products you are interested in and contact VICATRA via Zalo or Telegram for wholesale pricing.",
    viewCatalog: "View catalog",
    singleProducts: "single products",
    heroNote: "The catalog focuses on individual SKUs so buyers can review samples and ask for wholesale pricing",
    searchLabel: "Find products",
    searchPlaceholder: "Search by name, SKU, or category...",
    catalogEyebrow: "Catalog",
    catalogTitle: "Single products for sample review and wholesale quotes.",
    contactTitle: "Need wholesale pricing or distribution support?",
    zaloQuote: "Zalo 0907 215 521",
    telegramQuote: "Telegram 0907 215 521",
    wholesalePrice: "Wholesale price: Contact us",
    zaloProduct: "Zalo 0907 215 521",
    telegramProduct: "Telegram 0907 215 521",
    empty: "No matching products found.",
    result: (shown, total) => `${shown} / ${total} products`,
    description: (group, unit) =>
      `${group}. Pack size: ${unit || "updating"}. Contact VICATRA for volume-based wholesale pricing.`,
    categories: {
      all: "All",
      1: "Vegan sauces",
      2: "Convenient seasonings",
      3: "Dry seasonings",
      4: "Dipping sauces",
      5: "Snacks",
    },
  },
};

const categoryOrder = ["all", "1", "2", "3", "4", "5"];

const products = [
  ["1", "NCC01", "Nước Mắm Chay Nấm Đông Cô", "1", "Chai 500 ml", "https://d24rsy7fvs79n4.cloudfront.net/thegioichay.com.vn/20260326155501_6103_1774515301.0114.webp"],
  ["2", "NCC02", "Nước Mắm Chay Trái Điều", "1", "Chai 500 ml", "https://d24rsy7fvs79n4.cloudfront.net/thegioichay.com.vn/20260326153005_6103_1774513805.6612.webp"],
  ["3", "NCC03", "Nước Mắm Chay Trái Thơm", "1", "Chai 500 ml", "https://d24rsy7fvs79n4.cloudfront.net/thegioichay.com.vn/20260326154053_6103_1774514453.0555.webp"],
  ["4", "GVD01", "Kho Quẹt Nấm", "2", "Hũ 200 g", "https://d24rsy7fvs79n4.cloudfront.net/thegioichay.com.vn/20260512082759_6103_1778549279.2921.webp"],
  ["5", "GVD02", "Mắm Ruốc Nấm", "2", "Hũ 180 g", "https://d24rsy7fvs79n4.cloudfront.net/thegioichay.com.vn/20260512084956_6103_1778550596.7783.webp"],
  ["6", "NSL01", "Muối Tắc", "4", "Hũ 200 g", "https://d24rsy7fvs79n4.cloudfront.net/thegioichay.com.vn/20260512081809_6103_1778548689.5305.webp"],
  ["15", "GVD04", "Mắm Ruốc Chay", "2", "Hũ 180 g", "https://d24rsy7fvs79n4.cloudfront.net/thegioichay.com.vn/20260512090904_6103_1778551744.4142.webp"],
  ["16", "NSL03", "Sốt Muối Nấm", "4", "Hũ 250 g", "https://d24rsy7fvs79n4.cloudfront.net/thegioichay.com.vn/20260512091011_6103_1778551811.0598.webp"],
  ["17", "GVK01", "Muối Nấm Đông Cô", "3", "Hũ 150 g", "https://d24rsy7fvs79n4.cloudfront.net/thegioichay.com.vn/20260512091117_6103_1778551877.1687.webp"],
  ["18", "NCC04", "Nước Tương Hảo Hạng", "1", "Chai 300 ml", "https://d24rsy7fvs79n4.cloudfront.net/thegioichay.com.vn/20260506104915_6103_1778039355.6266.webp"],
  ["19", "NSL02", "Giấm Mãng Cầu", "1", "Chai 300 ml", "https://d24rsy7fvs79n4.cloudfront.net/thegioichay.com.vn/20260507161737_6103_1778145457.833.webp"],
  ["20", "DAV01", "Bánh Tráng Cô Hai Tây Ninh", "5", "Bịch 115 g", "https://d24rsy7fvs79n4.cloudfront.net/thegioichay.com.vn/20260506095605_6103_1778036165.8073.webp"],
].map(([id, sku, title, category, unit, image]) => ({
    id,
    sku,
    title,
    category,
    unit,
    image,
  }));

const state = {
  category: "all",
  lang: "vi",
};

const zaloQuoteUrl = "https://zalo.me/0907215521";
const telegramQuoteUrl = "https://t.me/0907215521";

const categoryTabs = document.querySelector("#categoryTabs");
const searchInput = document.querySelector("#searchInput");
const productGrid = document.querySelector("#productGrid");
const resultCount = document.querySelector("#resultCount");
const productCount = document.querySelector("#productCount");
const langButtons = document.querySelectorAll("[data-lang]");

function dictionary() {
  return translations[state.lang] || translations.vi;
}

function translate(key) {
  return dictionary()[key] || translations.vi[key] || key;
}

function categoryLabel(key) {
  return dictionary().categories[key] || translations.vi.categories[key] || key;
}

function renderStaticText() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  searchInput.placeholder = translate("searchPlaceholder");
  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
}

function renderTabs() {
  categoryTabs.innerHTML = categoryOrder
    .map(
      (key) =>
        `<button type="button" class="${state.category === key ? "active" : ""}" data-category="${key}">${categoryLabel(key)}</button>`,
    )
    .join("");
}

function productDescription(product) {
  return dictionary().description(categoryLabel(product.category), product.unit);
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchCategory = state.category === "all" || product.category === state.category;
    const haystack =
      `${product.title} ${product.sku} ${categoryLabel(product.category)} ${product.unit}`.toLowerCase();
    return matchCategory && (!query || haystack.includes(query));
  });

  resultCount.textContent = dictionary().result(filtered.length, products.length);
  productCount.textContent = products.length;

  if (!filtered.length) {
    productGrid.innerHTML = `<div class="empty">${translate("empty")}</div>`;
    return;
  }

  productGrid.innerHTML = filtered
    .map((product) => {
      return `
        <article class="product-card">
          <div class="product-media">
            <img src="${product.image}" alt="${product.title}" loading="lazy" />
          </div>
          <div class="product-body">
            <div class="product-meta">
              <span>${categoryLabel(product.category)}</span>
              <span>${product.sku}</span>
            </div>
            <h3>${product.title}</h3>
            <p class="product-desc">${productDescription(product)}</p>
            <div class="price-row">
              <span class="price">${translate("wholesalePrice")}</span>
            </div>
            <div class="product-actions">
              <a class="source-link" href="${zaloQuoteUrl}" target="_blank" rel="noopener">${translate("zaloProduct")}</a>
              <a class="source-link secondary-link" href="${telegramQuoteUrl}" target="_blank" rel="noopener">${translate("telegramProduct")}</a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderTabs();
  renderProducts();
});

searchInput.addEventListener("input", (event) => {
  renderProducts();
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    renderStaticText();
    renderTabs();
    renderProducts();
  });
});

renderStaticText();
renderTabs();
renderProducts();
