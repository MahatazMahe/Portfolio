(function () {
  const d = PORTFOLIO_DATA;

  // ---------- HERO ----------
  document.getElementById('heroName').textContent = d.name;
  document.getElementById('heroRole').textContent = d.role;
  document.getElementById('heroTagline').textContent = d.tagline;
  document.title = `${d.name} — ${d.role}`;

  const resumeLink = document.getElementById('resumeLink');
  resumeLink.href = d.resumeUrl || '#';
  if (!d.resumeUrl || d.resumeUrl === '#') resumeLink.style.display = 'none';

  const statsEl = document.getElementById('heroStats');
  d.stats.forEach(s => {
    const div = document.createElement('div');
    div.className = 'stat';
    div.innerHTML = `<div class="stat__value">${escapeHtml(s.value)}</div><div class="stat__label">${escapeHtml(s.label)}</div>`;
    statsEl.appendChild(div);
  });

  // ---------- ABOUT ----------
  document.getElementById('aboutText').textContent = d.about.trim();
  const photoSlot = document.getElementById('photoSlot');
  if (d.photoUrl) {
    photoSlot.innerHTML = `<img src="${escapeAttr(d.photoUrl)}" alt="${escapeAttr(d.name)}" />`;
  } else {
    const initials = d.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    photoSlot.textContent = initials;
  }

  // ---------- SKILLS ----------
  const skillsGrid = document.getElementById('skillsGrid');
  d.skillGroups.forEach(group => {
    const wrap = document.createElement('div');
    wrap.className = 'skill-group';
    wrap.innerHTML = `
      <div class="skill-group__label">${escapeHtml(group.label)}</div>
      <div class="skill-group__list">
        ${group.skills.map(s => `<span class="skill-chip">${escapeHtml(s)}</span>`).join('')}
      </div>`;
    skillsGrid.appendChild(wrap);
  });

  // ---------- PROJECTS ----------
  const statusClass = { 'Live': 'status--live', 'In progress': 'status--progress', 'Planned': 'status--planned' };
  const projectsGrid = document.getElementById('projectsGrid');
  d.projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card';
    const links = [];
    if (p.githubUrl) links.push(`<a href="${escapeAttr(p.githubUrl)}" target="_blank" rel="noopener">Code ↗</a>`);
    if (p.liveUrl) links.push(`<a href="${escapeAttr(p.liveUrl)}" target="_blank" rel="noopener">Live ↗</a>`);
    card.innerHTML = `
      <div class="project-card__top">
        <div class="project-card__title">${escapeHtml(p.title)}</div>
        <span class="status ${statusClass[p.status] || 'status--planned'}">${escapeHtml(p.status)}</span>
      </div>
      <p class="project-card__desc">${escapeHtml(p.description)}</p>
      <div class="project-card__stack">${p.stack.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
      ${links.length ? `<div class="project-card__links">${links.join('')}</div>` : ''}
    `;
    projectsGrid.appendChild(card);
  });

  // ---------- CERTIFICATES ----------
  const certsGrid = document.getElementById('certsGrid');
  (d.certificates || []).forEach(c => {
    const a = document.createElement('a');
    a.className = 'cert-tile';
    a.href = c.url || '#';
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML = `
      <div class="cert-tile__thumb">
        <img src="${escapeAttr(c.thumbnail)}" alt="${escapeAttr(c.title)} certificate" loading="lazy" />
      </div>
      <div class="cert-tile__body">
        <div class="cert-tile__title">${escapeHtml(c.title)}</div>
        <div class="cert-tile__issuer">${escapeHtml(c.issuer)}</div>
      </div>
      <span class="cert-tile__arrow" aria-hidden="true">↗</span>
    `;
    certsGrid.appendChild(a);
  });

  // ---------- EXPERIENCE ----------
  const expList = document.getElementById('experienceList');
  d.experience.forEach(e => expList.appendChild(timelineItem(e)));

  const eduList = document.getElementById('educationList');
  d.education.forEach(e => eduList.appendChild(timelineItem({
    role: e.degree, org: e.org, period: e.period, bullets: []
  })));

  function timelineItem(item) {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.innerHTML = `
      <div class="timeline-item__period">${escapeHtml(item.period)}</div>
      <div>
        <div class="timeline-item__role">${escapeHtml(item.role)}</div>
        <div class="timeline-item__org">${escapeHtml(item.org)}</div>
        ${item.bullets && item.bullets.length ? `<ul class="timeline-item__bullets">${item.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('')}</ul>` : ''}
      </div>`;
    return div;
  }

  // ---------- CV ----------
  const cvPanel = document.getElementById('cvPanel');
  const cvUrl = (d.cv && d.cv.url) ? d.cv.url : ((d.resumeUrl && d.resumeUrl !== '#') ? d.resumeUrl : '');
  if (cvUrl) {
    const isPdf = /\.pdf($|\?)/i.test(cvUrl);
    cvPanel.innerHTML = `
      <div class="cv-card">
        <div class="cv-card__info">
          <div class="cv-card__title">Mahataz Mahe — CV</div>
          ${d.cv && d.cv.updated ? `<div class="cv-card__meta mono">${escapeHtml(d.cv.updated)}</div>` : ''}
          <div class="cv-card__actions">
            <a href="${escapeAttr(cvUrl)}" target="_blank" rel="noopener" class="btn btn--primary">View CV ↗</a>
            <a href="${escapeAttr(cvUrl)}" download class="btn btn--ghost">Download ↓</a>
          </div>
        </div>
        ${isPdf ? `<div class="cv-card__viewer"><iframe src="${escapeAttr(cvUrl)}" title="CV preview" loading="lazy"></iframe></div>` : ''}
      </div>`;
  } else {
    cvPanel.innerHTML = `<div class="cv-card cv-card--empty">Add your CV link in <code>data.js</code> (<span class="mono">cv.url</span>) to show it here.</div>`;
  }

  // ---------- CONTACT ----------
  const emailLink = document.getElementById('emailLink');
  emailLink.href = `mailto:${d.email}`;
  emailLink.textContent = d.email;

  const phoneLink = document.getElementById('phoneLink');
  phoneLink.href = `tel:${d.phone.replace(/\s+/g, '')}`;
  phoneLink.textContent = d.phone;

  const socialLinks = document.getElementById('socialLinks');
  d.socials.forEach(s => {
    const a = document.createElement('a');
    a.href = s.url; a.target = '_blank'; a.rel = 'noopener';
    a.textContent = s.label;
    socialLinks.appendChild(a);
  });

  document.getElementById('locationText').textContent = `Based in ${d.location}`;

  // ---------- NAV TOGGLE (mobile) ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // ---------- SCROLL REVEAL ----------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.section__head, .project-card, .timeline-item, .cert-tile, .cv-card').forEach(el => observer.observe(el));

  // ---------- helpers ----------
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function escapeAttr(str) { return escapeHtml(str); }
})();
