// 30 L'Oreal Products
const products = [
    { id: 1, name: "CeraVe Hydrating Cleanser", brand: "CeraVe", category: "skincare", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop", description: "Gentle, non-foaming cleanser with hyaluronic acid and ceramides for normal to dry skin." },
    { id: 2, name: "CeraVe Foaming Cleanser", brand: "CeraVe", category: "skincare", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop", description: "Refreshing foaming cleanser with niacinamide and ceramides for normal to oily skin." },
    { id: 3, name: "Revitalift Moisturizer", brand: "L'Oreal Paris", category: "skincare", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop", description: "Anti-aging day cream with Pro-Retinol and Centella Asiatica for 24-hour hydration." },
    { id: 4, name: "Advanced Génifique Serum", brand: "Lancôme", category: "skincare", image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop", description: "Youth-activating concentrate with prebiotic and probiotic fractions." },
    { id: 5, name: "Triple Nutrition Shampoo", brand: "Garnier", category: "haircare", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&h=400&fit=crop", description: "Nourishing shampoo with avocado, olive, and almond oils for dry hair." },
    { id: 6, name: "Elixir Ultime Oil", brand: "Kérastase", category: "haircare", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=400&fit=crop", description: "Versatile beautifying elixir with camellia and argan oils for all hair types." },
    { id: 7, name: "Infallible Foundation", brand: "L'Oreal Paris", category: "makeup", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop", description: "24-hour foundation with medium-to-full coverage and SPF 25 protection." },
    { id: 8, name: "Teint Idole Ultra Wear", brand: "Lancôme", category: "makeup", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop", description: "24-hour wear foundation with SPF 15, transfer-resistant and waterproof." },
    { id: 9, name: "Excellence Crème", brand: "L'Oreal Paris", category: "haircolor", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=400&h=400&fit=crop", description: "Triple protection hair color with Pro-Keratin complex for 100% gray coverage." },
    { id: 10, name: "Nutrisse Nourishing Color", brand: "Garnier", category: "haircolor", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop", description: "Permanent color infused with avocado, olive, and shea oils." },
    { id: 11, name: "Elnett Satin Hairspray", brand: "L'Oreal Paris", category: "styling", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&h=400&fit=crop", description: "Legendary micro-diffusion hairspray with strong, brushable hold." },
    { id: 12, name: "Discipline Blow-Dry Milk", brand: "Kérastase", category: "styling", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=400&fit=crop", description: "Anti-frizz blow-dry milk with heat protection up to 450°F." },
    { id: 13, name: "Hydra Energetic Moisturizer", brand: "L'Oreal Men Expert", category: "mens", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop", description: "Anti-fatigue moisturizer with vitamin C and caffeine for 24-hour hydration." },
    { id: 14, name: "Facial Fuel Scrub", brand: "Kiehl's", category: "mens", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop", description: "Revitalizing scrub with caffeine and menthol for smoother skin." },
    { id: 15, name: "Anthelios SPF 50", brand: "La Roche-Posay", category: "suncare", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop", description: "Broad spectrum SPF 50 with Cell-Ox Shield technology for sensitive skin." },
    { id: 16, name: "Mineral Sunscreen", brand: "CeraVe", category: "suncare", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop", description: "100% mineral sunscreen with zinc oxide, titanium dioxide, and ceramides." },
    { id: 17, name: "La Vie Est Belle", brand: "Lancôme", category: "fragrance", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop", description: "Iconic gourmand fragrance with iris, patchouli, and spun sugar." },
    { id: 18, name: "Black Opium", brand: "YSL", category: "fragrance", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop", description: "Addictive gourmand fragrance with coffee, vanilla, and white flowers." },
    { id: 19, name: "Pure Vitamin C Serum", brand: "L'Oreal Paris", category: "skincare", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop", description: "Brightening serum with 10% pure vitamin C for radiant skin." },
    { id: 20, name: "Effaclar Duo+", brand: "La Roche-Posay", category: "skincare", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop", description: "Dual-action acne treatment with salicylic acid and niacinamide." },
    { id: 21, name: "Lash Paradise Mascara", brand: "L'Oreal Paris", category: "makeup", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop", description: "Volumizing mascara with intense length and full lash fringe." },
    { id: 22, name: "Teint Miracle Foundation", brand: "Lancôme", category: "makeup", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop", description: "Natural light creator foundation for a bare skin effect." },
    { id: 23, name: "Colorista Spray", brand: "L'Oreal Paris", category: "haircolor", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=400&h=400&fit=crop", description: "1-day temporary color spray for instant vibrant looks." },
    { id: 24, name: "Olaplex No. 3", brand: "Olaplex", category: "haircare", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&h=400&fit=crop", description: "Hair perfector treatment that repairs and strengthens bonds." },
    { id: 25, name: "Matte Pomade", brand: "L'Oreal Men Expert", category: "styling", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop", description: "Strong hold matte pomade for defined styles without shine." },
    { id: 26, name: "After Shave Balm", brand: "Kiehl's", category: "mens", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop", description: "Soothing after-shave moisturizer with aloe vera and vitamin E." },
    { id: 27, name: "Anthelios Mineral", brand: "La Roche-Posay", category: "suncare", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop", description: "Gentle mineral sunscreen with titanium dioxide for sensitive skin." },
    { id: 28, name: "Libre EDP", brand: "YSL", category: "fragrance", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop", description: "Lavender and orange blossom fragrance for the free-spirited." },
    { id: 29, name: "Midnight Serum", brand: "L'Oreal Paris", category: "skincare", image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop", description: "Night serum with retinol and hyaluronic acid for skin renewal." },
    { id: 30, name: "Voluminous Mascara", brand: "L'Oreal Paris", category: "makeup", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop", description: "Classic volumizing mascara for up to 5x fuller lashes." }
];

// Cloudflare Worker Endpoint
const AI_ENDPOINT = 'https://loreal.ld6057a.workers.dev/';

// Translations
const i18n = {
    en: {
        productsTitle: "Curated Collection",
        selectedTitle: "Your Selection",
        emptyText: "No products selected yet. Tap products to build your routine.",
        generateText: "Create My Routine",
        clearText: "Clear All",
        searchPlaceholder: "Search products...",
        chatPlaceholder: "Ask me anything about beauty...",
        welcomeMessage: "Hello beautiful! I'm your L'Oreal Beauty Consultant. Select your favorite products above, and I'll craft a personalized routine just for you.",
        langButton: "العربية",
        aiError: "Sorry, I'm having trouble connecting. Please try again!"
    },
    ar: {
        productsTitle: "مجموعة مختارة",
        selectedTitle: "اختياراتك",
        emptyText: "لم يتم اختيار أي منتجات بعد. انقر على المنتجات لبناء روتينك.",
        generateText: "إنشاء روتيني",
        clearText: "مسح الكل",
        searchPlaceholder: "البحث في المنتجات...",
        chatPlaceholder: "اسأليني أي شيء عن الجمال...",
        welcomeMessage: "مرحباً جميلة! أنا مستشار الجمال من لوريال. اختر منتجاتك المفضلة أعلاه، وسأصنع روتيناً مخصصاً لك.",
        langButton: "English",
        aiError: "عذراً، أواجه مشكلة في الاتصال. يرجى المحاولة مرة أخرى!"
    }
};

// State
let selected = new Set();
let lang = 'en';
let filterCat = '';
let searchQuery = '';
let chatHistory = [];

// DOM Elements
const grid = document.getElementById('productsGrid');
const selectedList = document.getElementById('selectedList');
const searchInput = document.getElementById('searchInput');
const catFilter = document.getElementById('categoryFilter');
const generateBtn = document.getElementById('generateBtn');
const clearBtn = document.getElementById('clearBtn');
const countBadge = document.getElementById('selectedCount');
const chatWindow = document.getElementById('chatWindow');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateSelection();

    searchInput.addEventListener('input', function(e) {
        searchQuery = e.target.value.toLowerCase();
        renderProducts();
    });

    catFilter.addEventListener('change', function(e) {
        filterCat = e.target.value;
        renderProducts();
    });

    document.getElementById('langToggle').addEventListener('click', toggleLang);
    clearBtn.addEventListener('click', clearAll);
    generateBtn.addEventListener('click', generateRoutine);
    chatForm.addEventListener('submit', handleChat);
});

function toggleLang() {
    lang = lang === 'en' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    document.getElementById('productsTitle').textContent = i18n[lang].productsTitle;
    document.getElementById('selectedTitle').textContent = i18n[lang].selectedTitle;
    document.getElementById('emptyText').textContent = i18n[lang].emptyText;
    document.getElementById('generateText').textContent = i18n[lang].generateText;
    document.getElementById('clearText').textContent = i18n[lang].clearText;
    document.getElementById('searchInput').placeholder = i18n[lang].searchPlaceholder;
    document.getElementById('chatInput').placeholder = i18n[lang].chatPlaceholder;
    document.getElementById('welcomeMessage').textContent = i18n[lang].welcomeMessage;
    document.getElementById('langText').textContent = i18n[lang].langButton;

    renderProducts();
    updateSelection();
}

function renderProducts() {
    let filtered = products.filter(function(p) {
        var matchesCat = !filterCat || p.category === filterCat;
        var matchesSearch = !searchQuery || 
            p.name.toLowerCase().indexOf(searchQuery) !== -1 ||
            p.brand.toLowerCase().indexOf(searchQuery) !== -1;
        return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="empty-state">No products found</div>';
        return;
    }

    grid.innerHTML = filtered.map(function(p) {
        var isSelected = selected.has(p.id);
        var btnText = lang === 'ar' ? 'المزيد' : 'Details';
        return '<div class="product-card ' + (isSelected ? 'selected' : '') + '" data-id="' + p.id + '">' +
            '<img src="' + p.image + '" alt="' + p.name + '" class="product-img">' +
            '<div class="product-info">' +
                '<div class="product-brand">' + p.brand + '</div>' +
                '<h3 class="product-name">' + p.name + '</h3>' +
                '<span class="product-cat">' + p.category + '</span>' +
                '<div class="product-desc">' + p.description + '</div>' +
                '<button class="expand-btn" onclick="toggleDesc(event, ' + p.id + ')">' +
                    '<i class="fas fa-chevron-down"></i> ' + btnText +
                '</button>' +
            '</div>' +
        '</div>';
    }).join('');

    grid.querySelectorAll('.product-card').forEach(function(card) {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.expand-btn')) return;
            toggleSelect(parseInt(card.dataset.id));
        });
    });
}

function toggleDesc(e, id) {
    e.stopPropagation();
    var card = document.querySelector('.product-card[data-id="' + id + '"]');
    card.classList.toggle('expanded');
    var btn = card.querySelector('.expand-btn');
    var isExpanded = card.classList.contains('expanded');
    var text = isExpanded ? (lang === 'ar' ? 'أقل' : 'Less') : (lang === 'ar' ? 'المزيد' : 'Details');
    var icon = isExpanded ? 'up' : 'down';
    btn.innerHTML = '<i class="fas fa-chevron-' + icon + '"></i> ' + text;
}

function toggleSelect(id) {
    if (selected.has(id)) {
        selected.delete(id);
    } else {
        selected.add(id);
    }
    renderProducts();
    updateSelection();
}

function updateSelection() {
    countBadge.textContent = selected.size;

    if (selected.size === 0) {
        selectedList.innerHTML = '<span class="empty-msg" id="emptyText">' + i18n[lang].emptyText + '</span>';
        generateBtn.disabled = true;
        clearBtn.style.display = 'none';
    } else {
        var items = products.filter(function(p) { return selected.has(p.id); });
        selectedList.innerHTML = items.map(function(p) {
            return '<div class="selected-tag">' +
                '<span>' + p.name + '</span>' +
                '<button onclick="removeItem(' + p.id + ')" aria-label="Remove"><i class="fas fa-times"></i></button>' +
            '</div>';
        }).join('');
        generateBtn.disabled = false;
        clearBtn.style.display = 'flex';
    }
}

function removeItem(id) {
    selected.delete(id);
    renderProducts();
    updateSelection();
}

function clearAll() {
    selected.clear();
    renderProducts();
    updateSelection();
}

function generateRoutine() {
    var items = products.filter(function(p) { return selected.has(p.id); });
    var msg = lang === 'ar' ? 'إليك روتينك الشخصي:' : "Here's your personalized routine:";

    var routine = '**' + msg + '**<br><br>';

    var skincare = items.filter(function(p) { return p.category === 'skincare'; });
    var makeup = items.filter(function(p) { return p.category === 'makeup'; });
    var hair = items.filter(function(p) { return ['haircare', 'haircolor', 'styling'].indexOf(p.category) !== -1; });

    if (skincare.length) {
        routine += lang === 'ar' ? '**العناية بالبشرة:**<br>' : '**Skincare:**<br>';
        skincare.forEach(function(p, i) {
            routine += (i+1) + '. ' + p.name + '<br>';
        });
        routine += '<br>';
    }
    if (makeup.length) {
        routine += lang === 'ar' ? '**المكياج:**<br>' : '**Makeup:**<br>';
        makeup.forEach(function(p, i) {
            routine += (i+1) + '. ' + p.name + '<br>';
        });
        routine += '<br>';
    }
    if (hair.length) {
        routine += lang === 'ar' ? '**العناية بالشعر:**<br>' : '**Hair:**<br>';
        hair.forEach(function(p, i) {
            routine += (i+1) + '. ' + p.name + '<br>';
        });
    }

    addMessage(routine, 'assistant', true);
}

// NEW: Handle chat with Cloudflare Worker + OpenAI
async function handleChat(e) {
    e.preventDefault();
    var text = chatInput.value.trim();
    if (!text) return;

    // Add user message
    addMessage(text, 'user');
    chatInput.value = '';
    
    // Add to history
    chatHistory.push({ role: 'user', content: text });

    showTyping();

    try {
        // Get selected products context
        var selectedProducts = products.filter(function(p) { return selected.has(p.id); });
        var productContext = '';
        
        if (selectedProducts.length > 0) {
            productContext = 'Customer has selected these products: ' + 
                selectedProducts.map(function(p) { return p.name + ' (' + p.brand + ')'; }).join(', ') + '. ';
        }

        // System prompt for beauty consultant
        var systemPrompt = lang === 'ar' 
            ? 'أنت مستشار جمال خبير من لوريال. أجب بإيجاز ودية باللغة العربية. قدم نصائح مخصصة بناءً على المنتجات المختارة.'
            : 'You are an expert L\'Oreal Beauty Consultant. Be friendly, concise, and helpful. Provide personalized advice based on selected products.';

        // Prepare messages
        var messages = [
            { role: 'system', content: systemPrompt + ' ' + productContext },
            ...chatHistory.slice(-6) // Keep last 6 messages for context
        ];

        // Call Cloudflare Worker
        var response = await fetch(AI_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: messages,
                language: lang
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        var data = await response.json();
        var aiResponse = data.choices?.[0]?.message?.content || data.response || data.text;

        if (!aiResponse) {
            throw new Error('Invalid response format');
        }

        // Add to history and display
        chatHistory.push({ role: 'assistant', content: aiResponse });
        removeTyping();
        addMessage(aiResponse, 'assistant');

    } catch (error) {
        console.error('AI Error:', error);
        removeTyping();
        // Fallback to local response
        var fallbackResponse = getFallbackResponse(text.toLowerCase());
        addMessage(fallbackResponse, 'assistant');
    }
}

// Fallback responses if AI fails
function getFallbackResponse(text) {
    if (text.indexOf('routine') !== -1 || text.indexOf('order') !== -1) {
        return lang === 'ar' 
            ? 'الترتيب المثالي: منظف → مصل → مرطب → واقي شمس.'
            : 'Ideal order: Cleanser → Serum → Moisturizer → Sunscreen.';
    }
    if (text.indexOf('skin') !== -1 || text.indexOf('dry') !== -1 || text.indexOf('oily') !== -1) {
        return lang === 'ar'
            ? 'للبشرة الجافة: رطبي بكثرة. للدهنية: استخدمي منظفات تحتوي على حمض الساليسيليك.'
            : 'For dry skin: moisturize generously. For oily: use salicylic acid cleansers.';
    }
    if (text.indexOf('hair') !== -1) {
        return lang === 'ar'
            ? 'اغسلي شعرك 2-3 مرات أسبوعياً واستخدمي بلسم على الأطراف فقط.'
            : 'Wash hair 2-3 times weekly and condition only the ends.';
    }
    return lang === 'ar'
        ? 'كيف يمكنني مساعدتك في روتين الجمال الخاص بك؟'
        : 'How can I help with your beauty routine?';
}

function addMessage(text, sender, isRoutine) {
    var div = document.createElement('div');
    div.className = 'chat-msg ' + sender;
    var time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    var formatted = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/<br>/g, '<br>');

    var style = isRoutine ? 'style="border-left: 3px solid var(--red);"' : '';

    div.innerHTML = 
        '<div class="avatar"><i class="fas ' + (sender === 'user' ? 'fa-user' : 'fa-gem') + '"></i></div>' +
        '<div class="bubble" ' + style + '>' +
            '<p>' + formatted + '</p>' +
            '<span class="time">' + time + '</span>' +
        '</div>';
    chatWindow.appendChild(div);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function showTyping() {
    var div = document.createElement('div');
    div.className = 'typing';
    div.id = 'typing';
    div.innerHTML = '<span></span><span></span><span></span>';
    chatWindow.appendChild(div);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function removeTyping() {
    var t = document.getElementById('typing');
    if (t) t.remove();
}