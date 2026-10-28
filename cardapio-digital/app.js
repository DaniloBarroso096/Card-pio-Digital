// ==================== CONFIGURAÇÃO ====================
const WHATSAPP_NUMBER = '5533999787955'; // Número da pizzaria

// Preços de borda recheada
const BORDER_PRICES = {
  none: 0,
  cheddar: 5.00,
  cheddar_bacon: 8.00
};

const BORDER_LABELS = {
  none: 'Sem borda',
  cheddar: 'Borda Cheddar (+R$ 5,00)',
  cheddar_bacon: 'Borda Cheddar & Bacon (+R$ 8,00)'
};

// Preços por tamanho de cerveja
const SIZE_PRICES = {
  '473ml': 0,
  '600ml': 2.00
};

const SIZE_LABELS = {
  '473ml': 'Lata 473ml',
  '600ml': 'Garrafa 600ml'
};

// ==================== DADOS DOS PRODUTOS ====================
const products = [
  // Pizzas
  { id: 'p1', name: 'Margherita', desc: 'Molho de tomate, muçarela, manjericão e azeite', price: 34.90, category: 'pizzas', image: 'https://share.google/AeOzhukiAWnHHtwHt', badge: 'Vegetariana' },
  { id: 'p2', name: 'Calabresa', desc: 'Molho, muçarela, calabresa, cebola e orégano', price: 38.90, category: 'pizzas', image: 'https://share.google/8PnSNf2Hz6vevv3UH', badge: 'Mais pedido' },
  { id: 'p3', name: 'Quatro Queijos', desc: 'Muçarela, provolone, gorgonzola e parmesão', price: 42.90, category: 'pizzas', image: 'https://share.google/hIYEY3zCvIsyM8Skh', badge: '' },
  { id: 'p4', name: 'Frango com Catupiry', desc: 'Molho, muçarela, frango desfiado e catupiry', price: 41.90, category: 'pizzas', image: 'https://share.google/TuNimpWuxaH7MxVqx', badge: '' },
  { id: 'p5', name: 'Portuguesa', desc: 'Molho, muçarela, presunto, ovos, ervilha e cebola', price: 40.90, category: 'pizzas', image: 'https://share.google/De88NeDSYkzvV8qAH', badge: '' },
  { id: 'p6', name: 'Napoletana', desc: 'Molho, muçarela, tomate fresco, alho e orégano', price: 36.90, category: 'pizzas', image: 'https://share.google/mFHZW0E5FomLEtwjp', badge: 'Vegetariana' },
  { id: 'p7', name: 'A Moda', desc: 'Molho, muçarela, calabresa, linguiça, ovos e ervilha', price: 43.90, category: 'pizzas', image: 'https://share.google/rZlijgnss58AtPPJS', badge: '' },
  { id: 'p8', name: '4 Estações', desc: 'Molho, muçarela, calabresa, palmito, tomate e cogumelos', price: 44.90, category: 'pizzas', image: 'https://share.google/v42xr9kUKWEWvRdTU', badge: '' },

  // Hambúrgueres
  { id: 'h1', name: 'X-tudo', desc: 'Carne 180g, queijo, alface, tomate, cebola, ovo, milho, ervilha, batata palha e maionese', price: 34.90, category: 'hamburgueres', image: 'https://share.google/71HW8YaIDDlX4X5k1', badge: 'Mais pedido' },
  { id: 'h2', name: 'X-bacon', desc: 'Carne 180g, queijo e bacon crocante', price: 32.90, category: 'hamburgueres', image: 'https://share.google/jnbUOe4mN0NI4eYxT', badge: '' },
  { id: 'h3', name: 'X-egg-bacon', desc: 'Carne 180g, queijo, bacon e ovo frito', price: 36.90, category: 'hamburgueres', image: 'https://share.google/jnbUOe4mN0NI4eYxT', badge: '' },
  { id: 'h4', name: 'X-salada', desc: 'Carne 180g, queijo, alface, tomate, cebola e maionese', price: 29.90, category: 'hamburgueres', image: 'https://share.google/LimvSAaCdq33LcbRk', badge: '' },

  // Bebidas
  { id: 'b1', name: 'Coca-Cola 350ml', desc: 'Refrigerante lata', price: 5.50, category: 'bebidas', image: 'https://share.google/UNqSOKyrYvV5kEDPs', badge: '' },
  { id: 'b2', name: 'Guaraná 350ml', desc: 'Refrigerante lata', price: 5.50, category: 'bebidas', image: 'https://share.google/AprCv8HUyCXijLYdQ', badge: '' },
  { id: 'b3', name: 'Água 500ml', desc: 'Água mineral sem gás', price: 3.50, category: 'bebidas', image: 'https://share.google/4Vdkki3AAbO33tH2o', badge: '' },
  { id: 'b4', name: 'Suco de Laranja 300ml', desc: 'Suco natural', price: 7.50, category: 'bebidas', image: 'https://share.google/cSn2rB3fIWq57Cquo', badge: '' },
  { id: 'b5', name: 'Cerveja Original', desc: 'Escolha o tamanho', price: 8.90, category: 'bebidas', image: 'https://share.google/gfoHfpvLx5RmgO3su', badge: '', sizes: true },
  { id: 'b6', name: 'Cerveja Brahma', desc: 'Escolha o tamanho', price: 8.90, category: 'bebidas', image: 'https://share.google/OntetA35mCDXKgMKz', badge: '', sizes: true },
  { id: 'b7', name: 'Cerveja Heineken', desc: 'Escolha o tamanho', price: 9.90, category: 'bebidas', image: 'https://share.google/ZG6LZKXqPQZesY3Eo', badge: '', sizes: true },
  { id: 'b8', name: 'Cerveja Amstel', desc: 'Escolha o tamanho', price: 9.90, category: 'bebidas', image: 'https://share.google/rrRG4KasjcrIIi7YY', badge: '', sizes: true },

  // Sobremesas
  { id: 's1', name: 'Pudim', desc: 'Pudim de leite condensado caseiro', price: 12.90, category: 'sobremesas', image: 'https://share.google/TagIfgfXX6wJVmaVy', badge: '' },
  { id: 's2', name: 'Brownie com Sorvete', desc: 'Brownie de chocolate com bola de baunilha', price: 18.90, category: 'sobremesas', image: 'https://share.google/syGvVenirEgRPTAab', badge: '' },
  { id: 's3', name: 'Torta de Limão', desc: 'Torta de limão siciliano com merengue', price: 15.90, category: 'sobremesas', image: 'https://share.google/Koy6t31dZTAVmk1x8', badge: '' },
  { id: 's4', name: 'Mousse de Maracujá', desc: 'Mousse fresca de maracujá', price: 14.90, category: 'sobremesas', image: 'https://share.google/Af5RXS40SMciUx49W', badge: '' },
];

// ==================== ESTADO ====================
let cart = [];
let currentCategory = 'todos';
let borderSelection = 'none';
let sizeSelection = '473ml';

// ==================== ELEMENTOS ====================
const productsGrid = document.getElementById('productsGrid');
const sectionTitle = document.getElementById('sectionTitle');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutSummary = document.getElementById('checkoutSummary');

const btnChat = document.getElementById('btnChat');
const fabChat = document.getElementById('fabChat');
const chatOverlay = document.getElementById('chatOverlay');
const chatWindow = document.getElementById('chatWindow');
const btnCloseChat = document.getElementById('btnCloseChat');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const btnSendChat = document.getElementById('btnSendChat');

const btnCart = document.getElementById('btnCart');
const cartOverlay = document.getElementById('cartOverlay');
const cartPanel = document.getElementById('cartPanel');
const btnCloseCart = document.getElementById('btnCloseCart');
const btnCheckout = document.getElementById('btnCheckout');

const checkoutOverlay = document.getElementById('checkoutOverlay');
const checkoutPanel = document.getElementById('checkoutPanel');
const btnCloseCheckout = document.getElementById('btnCloseCheckout');
const checkoutForm = document.getElementById('checkoutForm');
const inputName = document.getElementById('inputName');
const inputPhone = document.getElementById('inputPhone');
const inputAddress = document.getElementById('inputAddress');
const inputNotes = document.getElementById('inputNotes');
const inputPayment = document.getElementById('inputPayment');

const successOverlay = document.getElementById('successOverlay');
const successPanel = document.getElementById('successPanel');
const btnNewOrder = document.getElementById('btnNewOrder');
const btnWhatsApp = document.getElementById('btnWhatsApp');

const toast = document.getElementById('toast');

// ==================== UTILITÁRIOS ====================
function formatMoney(value) {
  return 'R$ ' + value.toFixed(2).replace('.', ',');
}

function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function openLink(url) {
  try { window.location.href = url; } catch (e) { window.open(url, '_blank'); }
}

// ==================== INICIALIZAÇÃO ====================
function init() {
  renderProducts();
  renderCart();
  setupCategoryButtons();
  setupChat();
  setupCart();
  setupCheckout();
  setupSuccess();
  initPhoneMask();
}

function initPhoneMask() {
  if (!inputPhone) return;
  inputPhone.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 10) v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    else if (v.length > 6) v = v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    else if (v.length > 2) v = v.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    e.target.value = v;
  });
}

// ==================== PRODUTOS ====================
function setupCategoryButtons() {
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category || 'todos';
      renderProducts();
    });
  });
}

function renderProducts() {
  if (!productsGrid) return;
  productsGrid.innerHTML = '';
  const filtered = currentCategory === 'todos'
    ? products
    : products.filter(p => p.category === currentCategory);

  if (filtered.length === 0) {
    productsGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:#94A3B8;">Nenhum produto encontrado.</div>';
    return;
  }

  filtered.forEach(p => {
    const inCart = cart.find(c => c.id === p.id && (!c.border || c.border === 'none') && (!c.size || c.size === '473ml'));
    const isPizza = p.category === 'pizzas';
    const hasSizes = p.sizes === true;
    const card = document.createElement('div');
    card.className = `product-card ${inCart ? 'product-selected' : ''}`;

    let borderHtml = '';
    if (isPizza) {
      borderHtml = `
        <div class="border-selector">
          <button type="button" class="border-btn ${borderSelection === 'none' ? 'active' : ''}" onclick="window.setBorderSelection('none','${p.id}')">Sem</button>
          <button type="button" class="border-btn ${borderSelection === 'cheddar' ? 'active' : ''}" onclick="window.setBorderSelection('cheddar','${p.id}')">Cheddar +R$5</button>
          <button type="button" class="border-btn ${borderSelection === 'cheddar_bacon' ? 'active' : ''}" onclick="window.setBorderSelection('cheddar_bacon','${p.id}')">Cheddar Bacon +R$8</button>
        </div>
      `;
    }

    let sizeHtml = '';
    if (hasSizes) {
      sizeHtml = `
        <div class="size-selector">
          <button type="button" class="size-btn ${sizeSelection === '473ml' ? 'active' : ''}" onclick="window.setSizeSelection('473ml','${p.id}')">473ml</button>
          <button type="button" class="size-btn ${sizeSelection === '600ml' ? 'active' : ''}" onclick="window.setSizeSelection('600ml','${p.id}')">600ml</button>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="product-image-wrapper">
        <img src="${p.image}" alt="${p.name}" class="product-image" onerror="this.src='https://share.google/AeOzhukiAWnHHtwHt'">
        ${p.badge ? `<div class="badge">${p.badge}</div>` : ''}
        <div class="product-overlay"></div>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        ${isPizza ? borderHtml : ''}
        ${hasSizes ? sizeHtml : ''}
        <div class="product-footer">
          <div class="product-price">${formatMoney(p.price)}</div>
          <button class="btn-add" type="button" onclick="window.addToCart('${p.id}', '${borderSelection}', '${sizeSelection}')">+</button>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

window.setBorderSelection = function(type, productId) {
  borderSelection = type;
  renderProducts();
};

window.setSizeSelection = function(type, productId) {
  sizeSelection = type;
  renderProducts();
};

function addToCart(id, border = 'none', size = '473ml') {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const borderPrice = BORDER_PRICES[border] || 0;
  const sizePrice = SIZE_PRICES[size] || 0;
  const finalPrice = product.price + borderPrice + sizePrice;

  const existing = cart.find(c => c.id === id && c.border === border && c.size === size);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: finalPrice,
      basePrice: product.price,
      border: border,
      size: size,
      borderPrice: borderPrice,
      sizePrice: sizePrice,
      qty: 1
    });
  }

  borderSelection = 'none';
  sizeSelection = '473ml';
  renderProducts();
  renderCart();
  showToast('Item adicionado ao carrinho!');
}

function removeFromCart(id, border = 'none', size = '473ml') {
  cart = cart.filter(c => !(c.id === id && c.border === border && c.size === size));
  renderProducts();
  renderCart();
}

function changeQty(id, delta, border = 'none', size = '473ml') {
  const item = cart.find(c => c.id === id && c.border === border && c.size === size);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id, border, size);
  renderCart();
}

function renderCart() {
  if (cartCount) {
    const totalQty = cart.reduce((sum, c) => sum + c.qty, 0);
    cartCount.textContent = totalQty;
    cartCount.style.display = totalQty > 0 ? 'flex' : 'none';
  }
  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  if (cartTotal) cartTotal.textContent = formatMoney(total);
  if (!cartItems) return;
  cartItems.innerHTML = '';
  if (cart.length === 0) {
    cartItems.innerHTML = '<div style="text-align:center;padding:40px;color:#94A3B8;">Carrinho vazio</div>';
    return;
  }
  cart.forEach(item => {
    const borderText = item.border && item.border !== 'none' ? ` [${BORDER_LABELS[item.border]}]` : '';
    const sizeText = item.size && item.size !== '473ml' ? ` [${SIZE_LABELS[item.size]}]` : '';
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="cart-item-img">
        <img src="${getImageById(item.id)}" alt="${item.name}" class="cart-item-img-tag" onerror="this.src='https://share.google/AeOzhukiAWnHHtwHt'">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}${borderText}${sizeText}</div>
        <div class="cart-item-price">${formatMoney(item.price)}</div>
        <div class="cart-item-controls">
          <button class="btn-qty" type="button" onclick="window.changeQty('${item.id}', -1, '${item.border||'none'}', '${item.size||'473ml'}')">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="btn-qty" type="button" onclick="window.changeQty('${item.id}', 1, '${item.border||'none'}', '${item.size||'473ml'}')">+</button>
          <button class="btn-remove" type="button" onclick="window.removeFromCart('${item.id}', '${item.border||'none'}', '${item.size||'473ml'}')">Remover</button>
        </div>
      </div>
    `;
    cartItems.appendChild(el);
  });
}

function getImageById(id) {
  const p = products.find(pr => pr.id === id);
  return p ? p.image : '';
}

// ==================== CART MODAL ====================
function openCart() { if(cartOverlay)cartOverlay.style.display='block'; if(cartPanel)cartPanel.style.display='flex'; }
function closeCart() { if(cartOverlay)cartOverlay.style.display='none'; if(cartPanel)cartPanel.style.display='none'; }
function setupCart() {
  if(btnCart) btnCart.addEventListener('click', openCart);
  if(btnCloseCart) btnCloseCart.addEventListener('click', closeCart);
  if(cartOverlay) cartOverlay.addEventListener('click', (e)=>{ if(e.target===cartOverlay) closeCart(); });
}

// ==================== CHECKOUT ====================
function renderCheckoutSummary() {
  const total = cart.reduce((sum,c)=>sum+c.price*c.qty,0);
  if(!checkoutSummary) return;
  checkoutSummary.innerHTML = `<h3>Resumo do Pedido</h3>
    ${cart.map(item=>{
      const bt = item.border && item.border!=='none'?` [${BORDER_LABELS[item.border]}]`:'';
      const st = item.size && item.size!=='473ml'?` [${SIZE_LABELS[item.size]}]`:'';
      return `<div class="checkout-item"><span>${item.name}${bt}${st} <span class="item-qty">x${item.qty}</span></span><span class="item-total">${formatMoney(item.price*item.qty)}</span></div>`;
    }).join('')}
    <div class="checkout-item" style="border-top:2px solid #2A3240;padding-top:12px;margin-top:8px;"><span>Total</span><span class="item-total">${formatMoney(total)}</span></div>`;
}

function openCheckout(){ if(checkoutOverlay)checkoutOverlay.style.display='block'; if(checkoutPanel)checkoutPanel.style.display='flex'; }
function closeCheckout(){ if(checkoutOverlay)checkoutOverlay.style.display='none'; if(checkoutPanel)checkoutPanel.style.display='none'; }
function setupCheckout(){
  if(btnCheckout) btnCheckout.addEventListener('click',()=>{
    if(cart.length===0){ showToast('Adicione itens ao carrinho primeiro.'); return; }
    renderCheckoutSummary();
    closeCart();
    openCheckout();
  });
  if(btnCloseCheckout) btnCloseCheckout.addEventListener('click', closeCheckout);
  if(checkoutOverlay) checkoutOverlay.addEventListener('click',(e)=>{ if(e.target===checkoutOverlay) closeCheckout(); });
  if(checkoutForm) checkoutForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=inputName?inputName.value.trim():'';
    const phone=inputPhone?inputPhone.value.trim():'';
    const address=inputAddress?inputAddress.value.trim():'';
    const notes=inputNotes?inputNotes.value.trim():'';
    const payment=inputPayment?inputPayment.value:'dinheiro';
    if(!name||!phone||!address){ showToast('Preencha nome, telefone e endereço.'); return; }
    const total=cart.reduce((sum,c)=>sum+c.price*c.qty,0);
    const msg=`*Novo Pedido - Sabor & Cia*\n\n*Cliente:* ${name}\n*Telefone:* ${phone}\n*Endereço:* ${address}\n*Pagamento:* ${payment}\n${notes?`*Observações:* ${notes}\n`:''}*Itens:*\n${cart.map(c=>{const bt=c.border&&c.border!=='none'?` [${BORDER_LABELS[c.border]}]`:'';const st=c.size&&c.size!=='473ml'?` [${SIZE_LABELS[c.size]}]`:'';return `• ${c.name}${bt}${st} x${c.qty} - ${formatMoney(c.price*c.qty)}`;}).join('\n')}\n\n*Total:* ${formatMoney(total)}`;
    closeCheckout();
    openSuccess(total);
    setTimeout(()=>{ const url=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`; openLink(url); },600);
  });
}

// ==================== SUCESSO ====================
function openSuccess(total){
  const etaEl=document.getElementById('etaTime');
  const payEl=document.getElementById('successPayment');
  if(etaEl) etaEl.textContent='40-50 min';
  if(payEl) payEl.textContent=inputPayment?inputPayment.value:'-';
  if(successOverlay)successOverlay.style.display='block';
  if(successPanel)successPanel.style.display='block';
  cart=[];
  renderCart();
}
function setupSuccess(){
  if(btnNewOrder) btnNewOrder.addEventListener('click',()=>{ if(successOverlay)successOverlay.style.display='none'; if(successPanel)successPanel.style.display='none'; });
  if(btnWhatsApp) btnWhatsApp.addEventListener('click',()=>{ const url=`https://wa.me/${WHATSAPP_NUMBER}`; openLink(url); });
  if(successOverlay) successOverlay.addEventListener('click',(e)=>{ if(e.target===successOverlay){ successOverlay.style.display='none'; successPanel.style.display='none'; } });
}

// ==================== CHAT IA ====================
const iaResponses={
  'menu':'Nosso cardápio tem Pizzas, Hambúrgueres, Bebidas e Sobremesas. Use os filtros no topo para ver cada categoria!',
  'pizza':'Temos Margherita, Calabresa, Quatro Queijos, Frango com Catupiry, Portuguesa, Napoletana, A Moda e 4 Estações. Todas com opção de borda recheada!',
  'hamburguer':'Temos X-tudo, X-bacon, X-egg-bacon e X-salada.',
  'bebida':'Temos Coca-Cola, Guaraná, Água, Suco de Laranja e cervejas Original, Brahma, Heineken e Amstel (473ml e 600ml).',
  'sobremesa':'Temos Pudim, Brownie com Sorvete, Torta de Limão e Mousse de Maracujá.',
  'preço':'Os preços variam de R$ 3,50 (água) a R$ 44,90 (4 Estações). Pizzas com borda recheada têm acréscimo.',
  'preços':'Os preços variam de R$ 3,50 (água) a R$ 44,90 (4 Estações). Pizzas com borda recheada têm acréscimo.',
  'entrega':'Fazemos delivery para toda a região. O tempo médio é de 40 a 50 minutos.',
  'pagamento':'Aceitamos Dinheiro, Cartão (crédito/débito) e PIX.',
  'ajuda':'Posso ajudar com o cardápio, preços, ingredientes, entrega e pagamento. É só perguntar!',
  'oi':'Olá! Sou a IA da Sabor & Cia. Como posso ajudar você hoje?',
  'olá':'Olá! Sou a IA da Sabor & Cia. Como posso ajudar você hoje?',
  'tudo bem':'Tudo ótimo, obrigado! E você? Em que posso ajudar?',
  'obrigado':'Por nada! Estou aqui para ajudar.',
  'valores':'Confira os preços diretamente nos cards dos produtos no cardápio.',
  'endereço':'Preciso do seu endereço completo para calcular a entrega e finalizar o pedido.',
  'whatsapp':'Nosso WhatsApp é (33) 99978-7955.',
  'tel':'Nosso WhatsApp é (33) 99978-7955.',
  'borda':'Todas as pizzas podem ter borda recheada: Cheddar (+R$ 5,00) ou Cheddar & Bacon (+R$ 8,00).',
  'cerveja':'Temos Original, Brahma, Heineken e Amstel em latas de 473ml e garrafas de 600ml.'
};

function getIAResponse(text){
  const t=text.toLowerCase().trim();
  for(const key of Object.keys(iaResponses)){ if(t.includes(key)) return iaResponses[key]; }
  return 'Desculpe, não entendi bem. Pode reformular? Posso ajudar com cardápio, preços, entrega, pagamento e mais.';
}

function addBotMessage(text){
  if(!chatMessages) return;
  const div=document.createElement('div');
  div.className='message bot';
  div.innerHTML=`<div class="message-bubble">${text}</div>`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop=chatMessages.scrollHeight;
}
function addUserMessage(text){
  if(!chatMessages) return;
  const div=document.createElement('div');
  div.className='message user';
  div.innerHTML=`<div class="message-bubble">${text}</div>`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop=chatMessages.scrollHeight;
}
function openChat(){ if(chatOverlay)chatOverlay.style.display='block'; if(chatWindow)chatWindow.style.display='flex'; }
function closeChat(){ if(chatOverlay)chatOverlay.style.display='none'; if(chatWindow)chatWindow.style.display='none'; }
function setupChat(){
  if(btnChat) btnChat.addEventListener('click',openChat);
  if(fabChat) fabChat.addEventListener('click',openChat);
  if(btnCloseChat) btnCloseChat.addEventListener('click',closeChat);
  if(chatOverlay) chatOverlay.addEventListener('click',(e)=>{ if(e.target===chatOverlay) closeChat(); });
  if(btnSendChat){
    btnSendChat.addEventListener('click',()=>{
      const text=chatInput?chatInput.value.trim():'';
      if(!text) return;
      addUserMessage(text);
      if(chatInput) chatInput.value='';
      setTimeout(()=>addBotMessage(getIAResponse(text)),600);
    });
  }
  if(chatInput){
    chatInput.addEventListener('keypress',(e)=>{
      if(e.key==='Enter'){
        const text=chatInput.value.trim();
        if(!text) return;
        addUserMessage(text);
        chatInput.value='';
        setTimeout(()=>addBotMessage(getIAResponse(text)),600);
      }
    });
  }
}

init();
window.addToCart=addToCart;
window.changeQty=changeQty;
window.removeFromCart=removeFromCart;
window.setBorderSelection=setBorderSelection;
window.setSizeSelection=setSizeSelection;
