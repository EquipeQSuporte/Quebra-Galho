/* ===== DADOS MOCKADOS ===== */

const CATEGORIES = [
  { id: 'hidraulica',  name: 'Hidráulica',  icon: 'fa-droplet',     color: '#1E88E5', bg: '#E3F2FD' },
  { id: 'eletrica',   name: 'Elétrica',     icon: 'fa-bolt',        color: '#FF8F00', bg: '#FFF8E1' },
  { id: 'pintura',    name: 'Pintura',      icon: 'fa-paint-roller', color: '#8E24AA', bg: '#F3E5F5' },
  { id: 'reformas',   name: 'Reformas',     icon: 'fa-hammer',      color: '#6D4C41', bg: '#EFEBE9' },
  { id: 'idosos',     name: 'Cuidados',     icon: 'fa-heart',       color: '#E53935', bg: '#FFEBEE' },
  { id: 'transporte', name: 'Transporte',   icon: 'fa-car',         color: '#00BFA5', bg: '#E0F7F4' },
  { id: 'limpeza',    name: 'Limpeza',      icon: 'fa-broom',       color: '#43A047', bg: '#E8F5E9' },
  { id: 'digital',    name: 'Digital',      icon: 'fa-laptop-code', color: '#546E7A', bg: '#ECEFF1' },
];

const SUBCATEGORIES = {
  hidraulica:  ['Vazamento', 'Instalação de Torneira', 'Desentupimento', 'Aquecedor', 'Caixa d\'água', 'Conserto de Vaso'],
  eletrica:    ['Tomada / Interruptor', 'Instalação de Luminária', 'Disjuntor', 'Chuveiro Elétrico', 'Câmeras de Segurança', 'Rede Elétrica'],
  pintura:     ['Pintura Interna', 'Pintura Externa', 'Pintura de Teto', 'Pintura de Muro', 'Textura / Grafiato', 'Impermeabilização'],
  reformas:    ['Piso / Cerâmica', 'Drywall / Gesso', 'Janelas / Portas', 'Telhado', 'Calçada / Muro', 'Reforma Completa'],
  idosos:      ['Acompanhamento Médico', 'Passeio / Compras', 'Medicamentos', 'Fisioterapia em Casa', 'Cuidado Noturno', 'Lazer / Companhia'],
  transporte:  ['Escolar (Crianças)', 'Aeroporto / Rodoviária', 'Médico / Hospital', 'Compras Pesadas', 'Passeios', 'Moto Express'],
  limpeza:     ['Limpeza Residencial', 'Limpeza Pós-obra', 'Limpeza Comercial', 'Lavanderia', 'Passadoria', 'Dedetização'],
  digital:     ['Criação de Site', 'Design Gráfico', 'Gestão de Redes Sociais', 'Suporte de TI', 'Edição de Vídeo', 'Planilhas / Excel'],
};

const PROFESSIONALS = [
  {
    id: 1,
    name: 'Roberto Alves',
    specialty: 'Hidráulico',
    category: 'hidraulica',
    rating: 4.9,
    reviews: 127,
    services: 312,
    price: 'R$ 80–150',
    priceUnit: '/serviço',
    distance: '1.2 km',
    badge: 'Top Pro',
    badgeType: 'badge-primary',
    bio: 'Hidráulico com 15 anos de experiência em residências e comércios. Atendimento rápido e garantia de 3 meses em todos os serviços. Trabalho com materiais de qualidade e preço justo.',
    skills: ['Vazamentos', 'Instalações', 'Desentupimento', 'Aquecedores', 'Caixa d\'água'],
    avatar: 'https://ui-avatars.com/api/?name=Roberto+Alves&background=1565C8&color=fff&size=128&bold=true',
    photos: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1607472586893-edb60bdc0f48?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531648556494-01c5dc7e7cdb?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484154265728-2e81f88a4e1a?w=300&h=300&fit=crop&q=80',
    ],
    responseTime: 'Responde em ~15 min',
    completionRate: '98%',
  },
  {
    id: 2,
    name: 'Marina Santos',
    specialty: 'Eletricista',
    category: 'eletrica',
    rating: 4.8,
    reviews: 89,
    services: 204,
    price: 'R$ 100–200',
    priceUnit: '/serviço',
    distance: '2.1 km',
    badge: 'Top Pro',
    badgeType: 'badge-primary',
    bio: 'Eletricista certificada com NR-10. Especialista em instalações residenciais, iluminação e automação. Orçamento sem compromisso.',
    skills: ['Instalações', 'Disjuntores', 'Tomadas', 'Iluminação', 'CFTV'],
    avatar: 'https://ui-avatars.com/api/?name=Marina+Santos&background=AD1457&color=fff&size=128&bold=true',
    photos: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560472355-536de3962603?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=300&h=300&fit=crop&q=80',
    ],
    responseTime: 'Responde em ~10 min',
    completionRate: '99%',
  },
  {
    id: 3,
    name: 'Carlos Ferreira',
    specialty: 'Pintor',
    category: 'pintura',
    rating: 4.7,
    reviews: 63,
    services: 145,
    price: 'R$ 50–120',
    priceUnit: '/m²',
    distance: '3.4 km',
    badge: 'Verificado',
    badgeType: 'badge-info',
    bio: 'Pintor profissional com experiência em pintura interna, externa, textura e grafiato. Materiais de primeira linha incluídos.',
    skills: ['Pintura Interna', 'Pintura Externa', 'Textura', 'Grafiato', 'Impermeabilização'],
    avatar: 'https://ui-avatars.com/api/?name=Carlos+Ferreira&background=6A1B9A&color=fff&size=128&bold=true',
    photos: [
      'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571266752807-bc24f8d38cd2?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572452473896-0ab9fbcc1b30?w=300&h=300&fit=crop&q=80',
    ],
    responseTime: 'Responde em ~30 min',
    completionRate: '95%',
  },
  {
    id: 4,
    name: 'Ana Rodrigues',
    specialty: 'Cuidadora de Idosos',
    category: 'idosos',
    rating: 5.0,
    reviews: 42,
    services: 98,
    price: 'R$ 60–90',
    priceUnit: '/hora',
    distance: '0.8 km',
    badge: 'Top Pro',
    badgeType: 'badge-primary',
    bio: 'Técnica de enfermagem com 8 anos de experiência no cuidado de idosos. Carinhosa, responsável e com todas as documentações em dia.',
    skills: ['Acompanhamento Médico', 'Medicamentos', 'Higiene', 'Fisioterapia', 'Companhia'],
    avatar: 'https://ui-avatars.com/api/?name=Ana+Rodrigues&background=C62828&color=fff&size=128&bold=true',
    photos: [
      'https://images.unsplash.com/photo-1576765608622-067973a79f53?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop&q=80',
    ],
    responseTime: 'Responde em ~5 min',
    completionRate: '100%',
  },
  {
    id: 5,
    name: 'João Pedro Lima',
    specialty: 'Motorista / Transporte',
    category: 'transporte',
    rating: 4.6,
    reviews: 211,
    services: 540,
    price: 'R$ 25–80',
    priceUnit: '/corrida',
    distance: '0.4 km',
    badge: 'Verificado',
    badgeType: 'badge-info',
    bio: 'CNH E, antecedentes verificados, veículo higienizado. Especialista em transporte escolar e acompanhamento de idosos.',
    skills: ['Escolar', 'Aeroporto', 'Hospital', 'Compras', 'Passeios'],
    avatar: 'https://ui-avatars.com/api/?name=Joao+Lima&background=00695C&color=fff&size=128&bold=true',
    photos: [
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&h=300&fit=crop&q=80',
    ],
    responseTime: 'Responde em ~3 min',
    completionRate: '97%',
  },
  {
    id: 6,
    name: 'Fernanda Costa',
    specialty: 'Diarista / Limpeza',
    category: 'limpeza',
    rating: 4.9,
    reviews: 178,
    services: 430,
    price: 'R$ 150–300',
    priceUnit: '/diária',
    distance: '1.9 km',
    badge: 'Top Pro',
    badgeType: 'badge-primary',
    bio: 'Diarista experiente com referências comprovadas. Limpeza geral, pós-obra, e organização de ambientes com produtos profissionais.',
    skills: ['Limpeza Geral', 'Pós-obra', 'Organização', 'Passadoria', 'Escritórios'],
    avatar: 'https://ui-avatars.com/api/?name=Fernanda+Costa&background=2E7D32&color=fff&size=128&bold=true',
    photos: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&h=300&fit=crop&q=80',
    ],
    responseTime: 'Responde em ~20 min',
    completionRate: '99%',
  },
  {
    id: 7,
    name: 'Lucas Mendes',
    specialty: 'Desenvolvedor Web / TI',
    category: 'digital',
    rating: 4.8,
    reviews: 54,
    services: 120,
    price: 'R$ 80–250',
    priceUnit: '/hora',
    distance: 'Remoto',
    badge: 'Verificado',
    badgeType: 'badge-info',
    bio: 'Desenvolvedor full-stack com experiência em sites, landing pages, e-commerces e sistemas web. Entrega rápida com suporte pós-entrega.',
    skills: ['Sites', 'Landing Pages', 'E-commerce', 'WordPress', 'Suporte TI'],
    avatar: 'https://ui-avatars.com/api/?name=Lucas+Mendes&background=37474F&color=fff&size=128&bold=true',
    photos: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop&q=80',
    ],
    responseTime: 'Responde em ~2 horas',
    completionRate: '96%',
  },
  {
    id: 8,
    name: 'Paulo Henrique',
    specialty: 'Pedreiro / Reformas',
    category: 'reformas',
    rating: 4.7,
    reviews: 91,
    services: 210,
    price: 'R$ 200–600',
    priceUnit: '/diária',
    distance: '4.1 km',
    badge: 'Verificado',
    badgeType: 'badge-info',
    bio: 'Pedreiro e reformador com 20 anos no mercado. Trabalhos de piso, cerâmica, gesso, e reformas completas. Equipe própria disponível.',
    skills: ['Piso', 'Cerâmica', 'Gesso', 'Alvenaria', 'Reforma Completa'],
    avatar: 'https://ui-avatars.com/api/?name=Paulo+Henrique&background=4E342E&color=fff&size=128&bold=true',
    photos: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=300&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=300&h=300&fit=crop&q=80',
    ],
    responseTime: 'Responde em ~40 min',
    completionRate: '93%',
  },
];

const REVIEWS = [
  { id: 1, proId: 1, name: 'Marcela T.', avatar: 'https://ui-avatars.com/api/?name=Marcela+T&background=E91E63&color=fff&size=80', rating: 5, date: 'há 2 dias', text: 'Roberto foi incrível! Resolveu o vazamento rapidinho, mandou fotos em tempo real e o preço ficou dentro do combinado. Super recomendo!' },
  { id: 2, proId: 1, name: 'André S.', avatar: 'https://ui-avatars.com/api/?name=Andre+S&background=1976D2&color=fff&size=80', rating: 5, date: 'há 1 semana', text: 'Profissional exemplar. Chegou no horário, trabalho limpo e me deixou informado de tudo. Vai para a lista de favoritos!' },
  { id: 3, proId: 1, name: 'Claudia M.', avatar: 'https://ui-avatars.com/api/?name=Claudia+M&background=7B1FA2&color=fff&size=80', rating: 4, date: 'há 2 semanas', text: 'Muito bom profissional, resolveu o problema da caixa d\'água. Só demorou um pouco mais do esperado, mas o resultado foi ótimo.' },
  { id: 4, proId: 2, name: 'Renata P.', avatar: 'https://ui-avatars.com/api/?name=Renata+P&background=C2185B&color=fff&size=80', rating: 5, date: 'há 3 dias', text: 'Marina é excelente! Instalou toda a iluminação do meu apartamento com perfeição. Muito caprichosa e organizada.' },
  { id: 5, proId: 4, name: 'Sônia A.', avatar: 'https://ui-avatars.com/api/?name=Sonia+A&background=BF360C&color=fff&size=80', rating: 5, date: 'há 1 dia', text: 'Contratei a Ana para cuidar da minha mãe e foi perfeito. Ela mandou fotos, ficou em contato o tempo todo. Minha mãe adorou!' },
];

/* ===== UTILITÁRIOS ===== */

function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function storeData(key, val) {
  try { localStorage.setItem('qg_' + key, JSON.stringify(val)); } catch {}
}

function loadData(key) {
  try { return JSON.parse(localStorage.getItem('qg_' + key)); } catch { return null; }
}

function getPro(id) {
  return PROFESSIONALS.find(p => p.id === parseInt(id));
}

function getCat(id) {
  return CATEGORIES.find(c => c.id === id);
}

function renderStars(rating, size = '') {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < full; i++) html += '<i class="fa-solid fa-star"></i>';
  if (half) html += '<i class="fa-solid fa-star-half-stroke"></i>';
  return `<div class="stars ${size}">${html}</div>`;
}

function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/* ===== TEMA ===== */

function initTheme() {
  const saved = localStorage.getItem('qg_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.classList.toggle('active', saved === 'dark');
  const icon = document.getElementById('themeIcon');
  if (icon) icon.className = saved === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
}

function toggleTheme() {
  const curr = document.documentElement.getAttribute('data-theme');
  const next = curr === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('qg_theme', next);
  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.classList.toggle('active', next === 'dark');
  const icon = document.getElementById('themeIcon');
  if (icon) icon.className = next === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
}

/* ===== NAVBAR ===== */

function setActiveNav(page) {
  document.querySelectorAll('.nav-item[data-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });
}

/* ===== PAGAMENTO ===== */

function selectPayment(el) {
  document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  storeData('payment', el.dataset.method);
}

/* ===== INIT ===== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
});

// Registra service worker em todas as páginas
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
