// ============================================
// 1. MOBILE MENU TOGGLE
// ============================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');
  // Keep aria-expanded in sync for screen readers
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close menu automatically when a link is clicked (mobile UX)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================
// 2. SEARCH + CATEGORY FILTER
// ============================================
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
const noResults = document.getElementById('noResults');

let activeCategory = 'all';

function applyFilters() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const category = card.dataset.category;

    const matchesSearch = title.includes(searchTerm);
    const matchesCategory = activeCategory === 'all' || category === activeCategory;

    const shouldShow = matchesSearch && matchesCategory;
    card.style.display = shouldShow ? '' : 'none';
    if (shouldShow) visibleCount++;
  });

  // Show a friendly message if nothing matches
  noResults.hidden = visibleCount !== 0;
}

// Re-filter every time the user types
searchInput.addEventListener('input', applyFilters);

// Handle category button clicks
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.filter;
    applyFilters();
  });
});
