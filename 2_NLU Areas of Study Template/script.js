/* ── CAROUSEL ─────────────────────────────────────────────── */
let currentSlide = 0;
const totalSlides = 3;
const track = document.getElementById('testi-track');
const dots = document.querySelectorAll('.dot');

function goToSlide(n) {
  currentSlide = (n + totalSlides) % totalSlides;
  track.style.transform = `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 8}px))`;
  dots.forEach(d => d.classList.remove('active'));
  void dots[currentSlide].offsetWidth;
  dots[currentSlide].classList.add('active');
}

const carousel = document.querySelector('.testimonial-carousel');

if (window.innerWidth > 768) {
  document.getElementById('prev-btn').addEventListener('click', () => goToSlide(currentSlide - 1));
  document.getElementById('next-btn').addEventListener('click', () => goToSlide(currentSlide + 1));

  let isPaused = false;
  let autoAdvance = setInterval(() => goToSlide(currentSlide + 1), 8000);

  const pauseBtn = document.getElementById('pause-btn');
  const pauseIcon = `<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="4" height="18"/><rect x="15" y="3" width="4" height="18"/></svg>`;
  const playIcon  = `<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;

  pauseBtn.addEventListener('click', () => {
    isPaused = !isPaused;
    if (isPaused) {
      clearInterval(autoAdvance);
      carousel.classList.add('paused');
      pauseBtn.innerHTML = playIcon;
      pauseBtn.setAttribute('aria-label', 'Resume slideshow');
    } else {
      autoAdvance = setInterval(() => goToSlide(currentSlide + 1), 8000);
      carousel.classList.remove('paused');
      pauseBtn.innerHTML = pauseIcon;
      pauseBtn.setAttribute('aria-label', 'Pause slideshow');
    }
  });

  // Pause on photo hover
  document.querySelectorAll('.testi-photo').forEach(photo => {
    photo.addEventListener('mouseenter', () => {
      if (!isPaused) { clearInterval(autoAdvance); carousel.classList.add('hover-paused'); }
    });
    photo.addEventListener('mouseleave', () => {
      if (!isPaused) { autoAdvance = setInterval(() => goToSlide(currentSlide + 1), 8000); carousel.classList.remove('hover-paused'); }
    });
  });

  // Touch/swipe support (desktop only — mobile uses native scroll)
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goToSlide(currentSlide + (diff > 0 ? 1 : -1));
  });
}

/* ── VIDEO MODAL ──────────────────────────────────────────── */
function openVideoModal(e) {
  if (e) e.preventDefault();
  const modal = document.getElementById('video-modal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('nlu-story-video').play();
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('nlu-story-video');
  modal.classList.remove('open');
  video.pause();
  video.currentTime = 0;
  document.body.style.overflow = '';
}

function closeVideoModalOnBackdrop(e) {
  if (e.target === document.getElementById('video-modal')) closeVideoModal();
}

/* ── VIDEO SLIDE (Slide 3) ────────────────────────────────── */
const videoPhoto    = document.getElementById('testi-photo-3');
const videoEl       = document.getElementById('testi-video-3');
const mobilePlayBtn = document.getElementById('testi-mobile-play');

if (videoPhoto && videoEl && window.innerWidth > 768) {
  const vidPlayIcon  = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><polygon points="6,3 20,12 6,21" fill="#0072CE"/></svg>`;
  const vidCloseIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0072CE" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

  const playCursor = document.createElement('div');
  playCursor.className = 'testi-play-cursor';
  playCursor.innerHTML = vidPlayIcon;
  document.body.appendChild(playCursor);

  videoPhoto.addEventListener('mouseenter', () => playCursor.classList.add('visible'));
  videoPhoto.addEventListener('mouseleave', () => playCursor.classList.remove('visible'));
  videoPhoto.addEventListener('mousemove', e => {
    playCursor.style.left = e.clientX + 'px';
    playCursor.style.top  = e.clientY + 'px';
  });

  let videoExpanded = false;
  videoPhoto.addEventListener('click', () => {
    const slide = videoPhoto.closest('.testimonial-slide');
    if (!videoExpanded) {
      slide.classList.add('photo-expanded');
      carousel.classList.add('video-expanded');
      videoEl.play();
      playCursor.innerHTML = vidCloseIcon;
      videoExpanded = true;
    } else {
      slide.classList.remove('photo-expanded');
      carousel.classList.remove('video-expanded');
      videoEl.pause();
      videoEl.currentTime = 0;
      playCursor.innerHTML = vidPlayIcon;
      videoExpanded = false;
    }
  });
}

if (mobilePlayBtn) {
  mobilePlayBtn.addEventListener('click', () => {
    const modalVideo = document.getElementById('nlu-story-video');
    modalVideo.src = 'video/alum-anna.mp4';
    const modal = document.getElementById('video-modal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalVideo.play();
  });
}

// Mobile: sync dots with native scroll position
if (window.innerWidth <= 768) {
  track.addEventListener('scroll', () => {
    const slideWidth = track.scrollWidth / totalSlides;
    const index = Math.round(track.scrollLeft / slideWidth);
    if (index !== currentSlide) {
      currentSlide = index;
      dots.forEach(d => d.classList.remove('active'));
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }
  });
}


/* ── MODAL ────────────────────────────────────────────────── */
function openModal(e) {
  if (e) e.preventDefault();
  document.getElementById('form-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('form-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOnBackdrop(e) {
  if (e.target === document.getElementById('form-modal')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });


/* ── FLOATING LABEL INPUTS ───────────────────────────────── */
document.querySelectorAll('.form-group input').forEach(input => {
  input.addEventListener('focus', () => {
    input.closest('.form-group').classList.add('active');
  });
  input.addEventListener('blur', () => {
    input.closest('.form-group').classList.remove('active');
    if (input.value.trim()) {
      input.closest('.form-group').classList.add('filled');
    } else {
      input.closest('.form-group').classList.remove('filled');
    }
  });
  // Pre-fill state on page load
  if (input.value.trim()) input.closest('.form-group').classList.add('filled');
});


/* ── CUSTOM SELECT ───────────────────────────────────────── */
function initCustomSelect(groupId, customId, nativeId) {
  const group     = document.getElementById(groupId);
  const customSel = document.getElementById(customId);
  const nativeSel = document.getElementById(nativeId);
  if (!group || !customSel || !nativeSel) return;

  const valueEl = customSel.querySelector('.custom-select-value');
  const options = customSel.querySelectorAll('.custom-select-options li');

  function open()  { customSel.classList.add('open');    customSel.setAttribute('aria-expanded','true');  group.classList.add('active'); }
  function close() { customSel.classList.remove('open'); customSel.setAttribute('aria-expanded','false'); group.classList.remove('active'); }
  function toggle() { customSel.classList.contains('open') ? close() : open(); }

  customSel.addEventListener('click', e => { e.stopPropagation(); toggle(); });
  customSel.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    if (e.key === 'Escape') close();
  });

  options.forEach(opt => {
    opt.addEventListener('click', e => {
      e.stopPropagation();
      const val = opt.dataset.value;
      valueEl.textContent = val;
      nativeSel.value = val;
      nativeSel.dispatchEvent(new Event('change'));
      options.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      close();
      group.classList.add('filled');
    });
  });

  document.addEventListener('click', close);
}

initCustomSelect('h-interest-group', 'h-interest-custom', 'h-interest');
initCustomSelect('m-interest-group', 'm-interest-custom', 'm-interest');


/* ── FORM SUBMIT ──────────────────────────────────────────── */
function handleFormSubmit(e, formId) {
  e.preventDefault();
  const form = document.getElementById(formId);
  const successId = formId === 'hero-form' ? 'hero-success' : 'modal-success';
  form.style.display = 'none';
  document.getElementById(successId).style.display = 'block';
  // In production: submit form data to your CRM / marketing automation here
}


/* ── COUNTDOWN TIMER ─────────────────────────────────────── */
(function() {
  const target = new Date('2026-09-01T00:00:00');
  const elD = document.getElementById('cd-days');
  const elH = document.getElementById('cd-hours');
  const elM = document.getElementById('cd-minutes');
  const elS = document.getElementById('cd-seconds');
  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) { elD.textContent = elH.textContent = elM.textContent = elS.textContent = '00'; return; }
    elD.textContent = Math.floor(diff / 86400000);
    elH.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0');
    elM.textContent = String(Math.floor((diff % 3600000)  / 60000)).padStart(2,'0');
    elS.textContent = String(Math.floor((diff % 60000)    / 1000)).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);
})();

// Sync urgency tiles width to button width (mobile only)
(function() {
  if (window.innerWidth > 768) return;
  const btn   = document.querySelector('.urgency-banner .btn');
  const tiles = document.querySelector('.urgency-tiles');
  if (btn && tiles) tiles.style.width = btn.offsetWidth + 'px';
})();


/* ── HOW IT WORKS — STEP HIGHLIGHT ──────────────────────── */
const stepCards = document.querySelectorAll('.step-card');
const howSticky = document.querySelector('.how-sticky');
const stepCtaBtn = document.querySelector('.step-cta .btn');
const lastStep   = stepCards[stepCards.length - 1];

function updateActiveStep() {
  if (!howSticky) return;
  const isMobile   = window.innerWidth <= 768;
  const stickyRect = howSticky.getBoundingClientRect();
  const stickyMid  = isMobile
    ? window.innerHeight / 2
    : stickyRect.top + stickyRect.height / 2;

  let closest  = null;
  let minDist  = Infinity;

  stepCards.forEach(card => {
    const rect    = card.getBoundingClientRect();
    const cardMid = rect.top + rect.height / 2;
    const dist    = Math.abs(cardMid - stickyMid);
    if (dist < minDist) { minDist = dist; closest = card; }
  });

  stepCards.forEach(card => card.classList.remove('active'));
  if (closest) closest.classList.add('active');

  if (stepCtaBtn && closest === lastStep) {
    stepCtaBtn.classList.add('visible');
  }
}

window.addEventListener('scroll', updateActiveStep, { passive: true });
updateActiveStep();


/* ── STAT COUNT-UP ───────────────────────────────────────── */
const countEls = document.querySelectorAll('.stat-number[data-count]');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (!el.isIntersecting) return;
    countObserver.unobserve(el.target);
    const delay    = +el.target.dataset.delay || 0;
    const target   = +el.target.dataset.count;
    const prefix   = el.target.dataset.prefix || '';
    const suffix   = el.target.dataset.suffix || '';
    const duration = 1200;
    setTimeout(() => {
      const start = performance.now();
      function tick(now) {
        const elapsed  = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease     = 1 - Math.pow(1 - progress, 3);
        const value    = Math.round(ease * target);
        const formatted = value >= 1000 ? value.toLocaleString() : value;
        el.target.textContent = prefix + formatted + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, delay);
  });
}, { threshold: 0, rootMargin: '0px 0px -180px 0px' });
countEls.forEach((el, i) => {
  el.dataset.delay = i * 150;
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  el.textContent = prefix + '0' + suffix;
  countObserver.observe(el);
});


/* ── STATS PHOTO PARALLAX ───────────────────────────────── */
(function () {
  const section = document.getElementById('proof-points');
  const img     = section && section.querySelector('.stats-photo img');
  if (!img) return;

  function onScroll() {
    if (window.innerWidth <= 768) return;
    const rect     = section.getBoundingClientRect();
    const vh       = window.innerHeight;
    const progress = 1 - (rect.bottom / (vh + rect.height));
    img.style.transform = `translateX(${progress * 40}px)`;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* ── NAV CTA VISIBILITY + STUCK STATE ────────────────────── */
const navCtaEl  = document.getElementById('nav-cta');
const heroEl    = document.getElementById('hero');
const visualNav = document.getElementById('visual-nav');

function isPastHero() {
  return window.scrollY >= heroEl.offsetTop + heroEl.offsetHeight;
}

const footerCtaBtnNav = document.querySelector('#footer-cta .btn');
function updateNavCta() {
  const past = isPastHero();
  if (window.innerWidth <= 768 && footerCtaBtnNav) {
    const rect = footerCtaBtnNav.getBoundingClientRect();
    navCtaEl.classList.toggle('visible', past && rect.top >= window.innerHeight);
  } else {
    navCtaEl.classList.toggle('visible', past);
  }
}
window.addEventListener('scroll', updateNavCta, { passive: true });
updateNavCta();

function updateNavStuck() {
  visualNav.classList.toggle('is-stuck', isPastHero());
}
window.addEventListener('scroll', updateNavStuck, { passive: true });
updateNavStuck();


/* ── ACTIVE NAV HIGHLIGHT ─────────────────────────────────── */
const navLinks = document.querySelectorAll('.visual-nav-list a');
const sections = ['why-nlu', 'testimonials', 'how-it-works', 'programs', 'faq']
  .map(id => document.getElementById(id));

const navList = document.querySelector('.visual-nav-list');

function updateActiveNav() {
  if (!visualNav.classList.contains('is-stuck')) {
    navLinks.forEach(a => a.classList.remove('active'));
    return;
  }
  let current = '';
  sections.forEach(s => {
    if (s && window.scrollY >= s.offsetTop - 130) current = s.id;
  });
  navLinks.forEach(a => {
    const isActive = a.getAttribute('href') === `#${current}`;
    a.classList.toggle('active', isActive);
    if (isActive && navList) {
      const listRect = navList.getBoundingClientRect();
      const linkRect = a.getBoundingClientRect();
      const offset = linkRect.left - listRect.left - (listRect.width / 2) + (linkRect.width / 2);
      navList.scrollBy({ left: offset, behavior: 'smooth' });
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });


/* ── MOBILE STICKY CTA VISIBILITY ────────────────────────── */
const stickyCta = document.getElementById('sticky-cta');

if (stickyCta && window.innerWidth <= 768) {
  const footerCtaBtn = document.querySelector('#footer-cta .btn');
  function updateStickyCta() {
    if (!isPastHero()) { stickyCta.style.display = 'none'; return; }
    if (footerCtaBtn) {
      const rect = footerCtaBtn.getBoundingClientRect();
      stickyCta.style.display = rect.top < window.innerHeight ? 'none' : 'block';
    } else {
      stickyCta.style.display = 'block';
    }
  }
  window.addEventListener('scroll', updateStickyCta, { passive: true });
  updateStickyCta();
}


/* ── SCROLL-DRIVEN WORD COLOR ───────────────────────────── */
function initScrollWords(selector) {
  const para = document.querySelector(selector);
  if (!para) return;

  const walker = document.createTreeWalker(para, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) textNodes.push(node);

  textNodes.forEach(tn => {
    const parts = tn.textContent.split(/(\s+)/);
    const frag  = document.createDocumentFragment();
    parts.forEach(part => {
      if (/\S/.test(part)) {
        const span = document.createElement('span');
        span.className = 'scroll-word';
        span.textContent = part;
        frag.appendChild(span);
      } else {
        frag.appendChild(document.createTextNode(part));
      }
    });
    tn.parentNode.replaceChild(frag, tn);
  });

  const words = Array.from(para.querySelectorAll('.scroll-word'));
  const n = words.length;

  function update() {
    const rect      = para.getBoundingClientRect();
    const vh        = window.innerHeight;
    const startTop  = vh - rect.height;
    const endTop    = vh * 0.2;
    const progress  = Math.max(0, Math.min(1, (startTop - rect.top) / (startTop - endTop)));
    const activeCount = Math.round(progress * n);
    words.forEach((w, i) => {
      w.style.color = i < activeCount ? 'var(--navy-dark)' : '';
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

initScrollWords('#why-nlu .section-header p:not(.eyebrow)');
initScrollWords('#programs .study-header p:not(.eyebrow)');


/* ── PROGRAMS SLIDER ─────────────────────────────────────── */
(function() {
  const slider = document.querySelector('.study-slider');
  if (!slider) return;
  if (window.innerWidth <= 768) return;
  const cards = Array.from(slider.querySelectorAll('.study-card'));
  const GAP   = 8;
  let active  = 0;
  let baseWidths = [];

  function computeWidths() {
    const weights = cards.map((_, i) => {
      if (i === active) return 2.5;
      const dist = Math.abs(i - active);
      return 0.3 * Math.pow(0.8, dist - 1);
    });
    const total     = weights.reduce((a, b) => a + b, 0);
    const available = slider.offsetWidth - GAP * (cards.length - 1);
    return cards.map((_, i) => Math.round(available * weights[i] / total));
  }

  function setWidths(widths) {
    cards.forEach((c, i) => {
      c.style.flexBasis  = widths[i] + 'px';
      c.style.flexGrow   = '0';
      c.style.flexShrink = '0';
    });
  }

  function applyWidths() {
    baseWidths = computeWidths();
    setWidths(baseWidths);
  }

  function setActive(idx) {
    active = (idx + cards.length) % cards.length;
    cards.forEach((c, i) => {
      c.classList.toggle('active', i === active);
    });
    applyWidths();
  }

  cards.forEach((card, i) => {
    card.addEventListener('click', () => { if (i !== active) setActive(i); });
    card.addEventListener('mouseenter', () => {
      if (i === active || !baseWidths.length) return;
      const hovered = [...baseWidths];
      const gain    = Math.round(baseWidths[i] * 0.3);
      hovered[i]   += gain;
      const hasLeft  = i - 1 >= 0;
      const hasRight = i + 1 < cards.length;
      if (hasLeft && hasRight) {
        hovered[i - 1] -= Math.round(gain / 2);
        hovered[i + 1] -= gain - Math.round(gain / 2);
      } else if (hasLeft) {
        hovered[i - 1] -= gain;
      } else {
        hovered[i + 1] -= gain;
      }
      setWidths(hovered);
    });
    card.addEventListener('mouseleave', () => {
      if (i === active) return;
      setWidths(baseWidths);
    });
  });

  const prev = document.querySelector('.study-prev');
  const next = document.querySelector('.study-next');
  if (prev) prev.addEventListener('click', () => setActive(active - 1));
  if (next) next.addEventListener('click', () => setActive(active + 1));

  applyWidths();
  window.addEventListener('resize', applyWidths, { passive: true });
})();


/* ── FAQ ACCORDION ───────────────────────────────────────── */
function toggleFaq(qEl) {
  const item = qEl.closest('.faq-item');
  const answer = item.querySelector('.faq-a');
  const inner  = item.querySelector('.faq-a-inner');
  const isOpen = item.classList.contains('open');

  // Close all open items first
  document.querySelectorAll('.faq-item.open').forEach(openItem => {
    if (openItem !== item) {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-a').style.height = '0';
    }
  });

  if (isOpen) {
    item.classList.remove('open');
    answer.style.height = '0';
  } else {
    item.classList.add('open');
    answer.style.height = inner.offsetHeight + 'px';
  }
}

// Initialize open FAQ items on load
document.querySelectorAll('.faq-item.open').forEach(item => {
  const answer = item.querySelector('.faq-a');
  const inner  = item.querySelector('.faq-a-inner');
  answer.style.height = inner.offsetHeight + 'px';
});
