/**
 * فروش برتر (Froosh Bartar) - Core Interactive Engine
 * Vanilla JavaScript (Zero build step, Zero dependencies)
 * Fully compatible with GitHub Pages drag-and-drop deployment
 */

// Master Products Database
const PRODUCTS_DATA = [
  {
    id: 'sonic-pro',
    title: 'Sonic Pro',
    category: 'audio',
    categoryName: 'صوتی',
    badge: 'هدفون بی‌سیم پرچمدار',
    description: 'هدفون بی‌سیم نویزکنسلینگ حرفه‌ای با درایورهای تیتانیومی ۴۰ میلی‌متری و شارژدهی ۴۰ ساعته.',
    price: 4750000,
    formattedPrice: '۴,۷۵۰,۰۰۰ تومان',
    image: 'assets/images/sonic-pro.jpeg',
    specs: [
      'حذف نویز فعال هیبریدی (Hybrid ANC) تا منفی ۳۸ دسی‌بل',
      'درایورهای دینامیک تیتانیوم ۴۰ میلی‌متری با صدای های-رزولوشن',
      'شارژدهی باتری تا ۴۰ ساعت با یک بار شارژ کامل',
      'قابلیت اتصال همزمان به دو دستگاه (Multipoint)',
      'بدنه ساخته شده از آلومینیوم مات سری ۶۰۰۰ با بالشتک‌های مموری‌فوم'
    ]
  },
  {
    id: 'novapods-x2',
    title: 'NovaPods X2',
    category: 'audio',
    categoryName: 'ایرپاد',
    badge: 'اولترا لایت و ارگونومیک',
    description: 'هندزفری بی‌سیم اولترا لایت با فناوری وضوح مکالمه ENC، کیس شارژ فشرده و طراحی مینیمال.',
    price: 2890000,
    formattedPrice: '۲,۸۹۰,۰۰۰ تومان',
    image: 'assets/images/novapods-x2.jpeg',
    specs: [
      'وزن فوق‌العاده سبک ۴.۲ گرم برای هر ایرباد',
      '۴ میکروفون پیشرفته با پردازش نویز محیطی ENC برای مکالمه شفاف',
      'بلوتوث نسخه ۵.۳ با کمترین میزان تاخیر (Low Latency Gaming)',
      'مقاومت در برابر تعریق و پاشش آب با استاندارد IPX5',
      'مجموع شارژدهی تا ۳۰ ساعت همراه کیس هوشمند'
    ]
  },
  {
    id: 'pulse-s3',
    title: 'Pulse S3',
    category: 'wearable',
    categoryName: 'پوشیدنی',
    badge: 'ساعت هوشمند پرچمدار',
    description: 'ساعت هوشمند مجهز به سنسور پیشرفته سلامت، بدنه تیتانیومی و نمایشگر همیشه روشن AMOLED.',
    price: 4990000,
    formattedPrice: '۴,۹۹۰,۰۰۰ تومان',
    image: 'assets/images/pulse-s3.jpeg',
    specs: [
      'صفحه‌نمایش ۱.۴۳ اینچی AMOLED با روشنایی ۱۰۰۰ نیت و قابلیت Always-On',
      'بدنه آلیاژ تیتانیوم گرید هوانوردی با بند چرمی دست‌دوز طبیعی',
      'پایش ۲۴ ساعته ضربان قلب، سنجش اکسیژن خون (SpO2) و تحلیل خواب',
      'بیش از ۱۰۰ حالت ورزشی اختصاصی و پشتیبانی از موقعیت‌یاب GPS مستقل',
      'شارژدهی ۱۰ الی ۱۴ روزه با استفاده نرمال'
    ]
  },
  {
    id: 'gan-65w',
    title: 'GaN 65W Fast Charger',
    category: 'charger',
    categoryName: 'شارژر و کابل',
    badge: 'تکنولوژی نیترید گالیوم',
    description: 'شارژر دیواری فوق سریع ۶۵ واتی نسل سه GaN همراه کابل تایپ‌سی به تایپ‌سی روکش کنفی مقاوم.',
    price: 2490000,
    formattedPrice: '۲,۴۹۰,۰۰۰ تومان',
    image: 'assets/images/gan-65w.jpeg',
    specs: [
      'تکنولوژی پیشرفته GaN III با ۵۰٪ ابعاد کوچکتر و حرارت بسیار کمتر',
      'توان خروجی واقعی ۶۵ وات پشتیبان پروتکل‌های PD 3.0 و QC 4.0+',
      'سازگار با انواع مک‌بوک، لپ‌تاپ، تبلت و گوشی‌های آیفون و سامسونگ',
      'سیستم حفاظت هوشمند چندگانه در برابر نوسان ولتاژ و حرارت بیش از حد',
      'شامل کابل تایپ‌سی ۱۰۰ واتی کنفی ۱.۲ متری با مقاومت کششی بالا'
    ]
  },
  {
    id: 'magpower-10k',
    title: 'MagPower 10K Titanium',
    category: 'powerbank',
    categoryName: 'پاوربانک',
    badge: 'شارژ بی‌سیم مگ‌سیف',
    description: 'پاوربانک مگنتی فوق باریک با ظرفیت ۱۰,۰۰۰ میلی‌آمپر، بدنه آلومینیومی و خروجی فست‌شارژ.',
    price: 3150000,
    formattedPrice: '۳,۱۵۰,۰۰۰ تومان',
    image: 'assets/images/powerbank.png',
    specs: [
      'آهنرباهای نئودیمیوم بسیار قوی منطبق بر استاندارد MagSafe',
      'شارژ وایرلس سریع ۱۵ وات + خروجی پورت تایپ‌سی ۲۰ وات PD',
      'ضخامت فوق‌باریک فقط ۱۲ میلی‌متر با پوشش سیلیکونی نرم ضدخش',
      'نشانگر LED وضعیت شارژ و دمای سلول‌های باتری',
      'دارای تاییدیه حمل در سفرهای هوایی'
    ]
  },
  {
    id: 'studio-dock-7in1',
    title: 'Studio Hub 7-in-1',
    category: 'charger',
    categoryName: 'لوازم جانبی',
    badge: 'اتصال مالتی‌پورت آلومینیومی',
    description: 'هاب آلومینیومی ۷ کاره با خروجی HDMI 4K 60Hz، پورت PD 100W و درگاه‌های USB 3.2 پرسرعت.',
    price: 3850000,
    formattedPrice: '۳,۸۵۰,۰۰۰ تومان',
    image: 'assets/images/gan-65w.jpeg',
    specs: [
      'خروجی HDMI با رزولوشن 4K@60Hz بدون لگ',
      'درگاه Type-C Power Delivery با توان ۱۰۰ وات',
      '۲ درگاه USB-A 3.2 با سرعت انتقال ۵ گیگابیت بر ثانیه',
      'اسلات‌های کارت حافظه SD و TF پرسرعت',
      'بدنه یکپارچه آلومینیومی برای دفع حرارت بهینه'
    ]
  }
];

// Configuration
const TELEGRAM_USERNAME = 'FrooshBartar_Support'; // Easily changeable or fallback
const BASALAM_STORE_URL = 'https://www.basalam.com';

// Persian Number Converter
function toPersianDigits(num) {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
}

function formatPriceNumber(amount) {
  const formatted = amount.toLocaleString('en-US');
  return toPersianDigits(formatted) + ' تومان';
}

// Current Order State
let currentOrder = {
  product: null,
  quantity: 1,
  color: 'نقره‌ای تیتانیومی',
  customerName: '',
  customerPhone: '',
  customerCity: '',
  notes: ''
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  setupNavigationHighlights();
  setupModalDismissals();
  setupGlobalKeyboardShortcuts();
  setupDropdownDismissals();
});

function setupDropdownDismissals() {
  document.addEventListener('click', (e) => {
    document.querySelectorAll('details[open]').forEach(details => {
      if (!details.contains(e.target)) {
        details.removeAttribute('open');
      }
    });
  });
}

// Navigation Highlight based on current path
function setupNavigationHighlights() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  // Mobile bottom bar links
  const mobileLinks = document.querySelectorAll('nav[data-active-classes] a');
  mobileLinks.forEach(link => {
    const linkPath = link.getAttribute('data-path');
    if ((currentPath === '' || currentPath === 'index.html') && linkPath === 'home') {
      link.classList.add('text-primary', 'font-bold');
      link.classList.remove('text-on-surface-variant');
    } else if (currentPath.includes(linkPath)) {
      link.classList.add('text-primary', 'font-bold');
      link.classList.remove('text-on-surface-variant');
    }
  });

  // Desktop nav links if present
  const desktopLinks = document.querySelectorAll('header nav a');
  desktopLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
      link.classList.add('text-primary', 'font-semibold');
      link.classList.remove('text-on-surface-variant');
    }
  });
}

// Open Telegram Ordering Modal
function openOrderModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];
  currentOrder.product = product;
  currentOrder.quantity = 1;
  currentOrder.color = 'نقره‌ای تیتانیومی';
  
  const modal = document.getElementById('orderModal');
  if (!modal) return;

  // Populate data
  document.getElementById('orderModalImage').src = product.image;
  document.getElementById('orderModalImage').alt = product.title;
  document.getElementById('orderModalTitle').textContent = product.title;
  document.getElementById('orderModalCategory').textContent = product.categoryName;
  document.getElementById('orderModalPrice').textContent = product.formattedPrice;
  document.getElementById('orderQuantityText').textContent = toPersianDigits(currentOrder.quantity);
  
  updateOrderTotal();
  updateTelegramPreviewMessage();

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateOrderQuantity(delta) {
  currentOrder.quantity = Math.max(1, Math.min(10, currentOrder.quantity + delta));
  const el = document.getElementById('orderQuantityText');
  if (el) el.textContent = toPersianDigits(currentOrder.quantity);
  updateOrderTotal();
  updateTelegramPreviewMessage();
}

function updateOrderColor(color) {
  currentOrder.color = color;
  updateTelegramPreviewMessage();
}

function updateOrderTotal() {
  if (!currentOrder.product) return;
  const total = currentOrder.product.price * currentOrder.quantity;
  const totalEl = document.getElementById('orderModalTotalPrice');
  if (totalEl) totalEl.textContent = formatPriceNumber(total);
}

function buildTelegramMessage() {
  const p = currentOrder.product;
  const name = document.getElementById('orderCustomerName')?.value.trim() || 'ثبت نشده';
  const phone = document.getElementById('orderCustomerPhone')?.value.trim() || 'ثبت نشده';
  const city = document.getElementById('orderCustomerCity')?.value.trim() || 'تهران';
  const note = document.getElementById('orderCustomerNote')?.value.trim() || 'ندارد';
  const total = p ? formatPriceNumber(p.price * currentOrder.quantity) : '';

  return `سلام، درخواست خرید از وب‌سایت فروش برتر:\n\n` +
    `📦 محصول: ${p ? p.title : ''}\n` +
    `🏷 دسته‌بندی: ${p ? p.categoryName : ''}\n` +
    `🎨 رنگ/مدل انتخابی: ${currentOrder.color}\n` +
    `🔢 تعداد: ${toPersianDigits(currentOrder.quantity)} عدد\n` +
    `💰 مبلغ کل: ${total}\n\n` +
    `👤 خریدار: ${name}\n` +
    `📞 شماره تماس: ${phone}\n` +
    `📍 شهر مقصد: ${city}\n` +
    `📝 توضیحات تکمیلی: ${note}\n\n` +
    `لطفاً شماره کارت و مراحل نهایی تحویل را ارسال بفرمایید. باتشکر!`;
}

function updateTelegramPreviewMessage() {
  const previewEl = document.getElementById('orderTelegramPreview');
  if (previewEl) {
    previewEl.textContent = buildTelegramMessage();
  }
}

// Trigger Launch into Telegram
function submitOrderToTelegram() {
  const message = buildTelegramMessage();
  const encodedText = encodeURIComponent(message);
  const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}?text=${encodedText}`;
  
  // Show confirmation toast
  showToast('در حال انتقال به تلگرام جهت ثبت سفارش...');
  
  // Open Telegram
  window.open(telegramUrl, '_blank', 'noopener,noreferrer');
  
  // Close modal
  closeModal('orderModal');
}

// Copy Order Text to Clipboard
function copyOrderText() {
  const message = buildTelegramMessage();
  navigator.clipboard.writeText(message).then(() => {
    showToast('متن سفارش با موفقیت در کلیپ‌بورد کپی شد!');
  }).catch(() => {
    showToast('لطفاً متن سفارش را به صورت دستی کپی فرمایید.');
  });
}

// Product Quick View Modal
function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  if (!modal) return;

  document.getElementById('qvImage').src = product.image;
  document.getElementById('qvImage').alt = product.title;
  document.getElementById('qvTitle').textContent = product.title;
  document.getElementById('qvCategory').textContent = product.categoryName;
  document.getElementById('qvBadge').textContent = product.badge;
  document.getElementById('qvDescription').textContent = product.description;
  document.getElementById('qvPrice').textContent = product.formattedPrice;
  
  // Populate specifications
  const specsContainer = document.getElementById('qvSpecs');
  if (specsContainer) {
    specsContainer.innerHTML = product.specs.map(spec => `
      <li class="flex items-start gap-2 text-sm text-on-surface-variant">
        <span class="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
        <span>${spec}</span>
      </li>
    `).join('');
  }

  // Set action button
  const orderBtn = document.getElementById('qvOrderBtn');
  if (orderBtn) {
    orderBtn.onclick = () => {
      closeModal('quickViewModal');
      openOrderModal(product.id);
    };
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Quick Live Search Modal
function openSearchModal() {
  const modal = document.getElementById('searchModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  const input = document.getElementById('searchInput');
  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 100);
    renderSearchResults(PRODUCTS_DATA);
  }
}

function handleSearchInput(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    renderSearchResults(PRODUCTS_DATA);
    return;
  }
  
  const filtered = PRODUCTS_DATA.filter(p => 
    p.title.toLowerCase().includes(q) ||
    p.categoryName.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.badge.toLowerCase().includes(q)
  );
  renderSearchResults(filtered);
}

function renderSearchResults(items) {
  const container = document.getElementById('searchResultsContainer');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-on-surface-variant">
        <span class="material-symbols-outlined text-4xl text-outline mb-2">search_off</span>
        <p class="text-sm">محصولی با این مشخصات یافت نشد.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(p => `
    <div class="flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-low transition-colors border-b border-outline-variant/15 last:border-b-0">
      <div class="flex items-center gap-3">
        <img src="${p.image}" alt="${p.title}" class="w-12 h-12 object-contain rounded-lg bg-surface-container-lowest p-1 border border-outline-variant/20">
        <div>
          <h4 class="font-semibold text-on-surface text-sm">${p.title}</h4>
          <span class="text-xs text-on-surface-variant">${p.categoryName} · ${p.badge}</span>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-sm font-bold text-primary">${p.formattedPrice}</span>
        <button onclick="closeModal('searchModal'); openOrderModal('${p.id}')" class="px-3 py-1.5 bg-primary-container text-white text-xs font-medium rounded-lg hover:bg-primary transition-colors">
          سفارش
        </button>
      </div>
    </div>
  `).join('');
}

// User Profile / Quick Info Modal
function openProfileModal() {
  const modal = document.getElementById('profileModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close Any Modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Setup Backdrop Dismissal
function setupModalDismissals() {
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

// Keyboard shortcuts (Escape & Ctrl+K)
function setupGlobalKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active').forEach(modal => {
        modal.classList.remove('active');
      });
      document.body.style.overflow = '';
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearchModal();
    }
  });
}

// Toast Notification
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="material-symbols-outlined text-primary text-[18px]">verified</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  // Auto remove
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Contact Page Handler
function handleContactFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('contactName')?.value.trim() || 'کاربر وب‌سایت';
  const phone = document.getElementById('contactPhone')?.value.trim() || 'ثبت نشده';
  const topic = document.getElementById('contactTopic')?.value || 'مشاوره خرید کالا';
  const message = document.getElementById('contactMessage')?.value.trim() || '';

  if (!message) {
    showToast('لطفاً متن پیام خود را وارد نمایید.');
    return;
  }

  const formattedMsg = `📩 پیام جدید از بخش تماس با ما:\n\n` +
    `👤 فرستنده: ${name}\n` +
    `📞 شماره تماس / آیدی: ${phone}\n` +
    `📌 موضوع: ${topic}\n` +
    `📝 شرح پیام:\n${message}\n\n` +
    `ارسال شده از طریق وب‌سایت رسمی فروش برتر`;

  const encoded = encodeURIComponent(formattedMsg);
  const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}?text=${encoded}`;
  
  showToast('در حال انتقال به تلگرام برای ارسال مستقیم پیام...');
  window.open(telegramUrl, '_blank', 'noopener,noreferrer');
  
  // Reset form
  event.target.reset();
}
