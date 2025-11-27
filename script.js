/* ============================================================================
   INDIGENOUS AMERICAS TIMELINE - JAVASCRIPT
   Hood Justice Educational Tool
   ============================================================================ */

/* 1. TIMELINE DATA (SHORTENED SAMPLE – ADD THE REST OF YOUR ENTRIES HERE) */
const timelineData = [
  {
    year: -2600000,
    period: "Pleistocene Epoch",
    peoples: "N/A",
    location: "Global",
    region: "Global",
    event: "Beginning of Pleistocene Epoch (Gelasian Stage) - characterized by glacial and interglacial cycles.",
    citations: "[11]"
  },
  {
    year: -24000,
    period: "Last Glacial Maximum",
    peoples: "Early Beringians",
    location: "Beringia / North America",
    region: "North America",
    event: "Glaciers lock up water, exposing the Bering Land Bridge (Beringia); sea level drops and megafauna thrive.",
    citations: "[1][9][11]"
  },
  {
    year: -16000,
    period: "Paleoindian Period",
    peoples: "Paleo-Indians / Paleoamericans",
    location: "Eastern Virginia; Idaho",
    region: "North America",
    event: "Paleoamericans occupy Cactus Hill (Virginia) and Cooper’s Ferry (Idaho), predating classic Clovis.",
    citations: "[12][16]"
  },
  // TODO: paste the rest of your timelineData entries here
];

/* 2. CARIBBEAN ENTRIES (ROUSE FRAMEWORK) */
const caribbeanEntries = [
  {
    migration: "First Migration",
    period: "Lithic Age",
    years: "ca. 4000–3000 B.C.",
    description: "First maritime peoples from northern South America (Orinoco / Yucatán) enter the Caribbean; simple stone tools, no pottery."
  },
  {
    migration: "Second Migration",
    period: "Archaic Age",
    years: "ca. 3000–1000 B.C.",
    description: "Archaic foragers spread from South America into Trinidad, Lesser Antilles, Puerto Rico; non-ceramic, shellfish and fish focused."
  },
  {
    migration: "Third Migration",
    period: "Ceramic Age",
    years: "ca. 200 B.C.–1500 A.D.",
    description: "Saladoid agro-ceramists (ancestors of Taíno and other Arawakan-speakers) arrive from the Orinoco; pottery, horticulture, villages."
  },
  {
    migration: "Fourth Migration",
    period: "Historic Age",
    years: "A.D. 1492+",
    description: "European invasion, enslavement, and Indigenous resistance; demographic collapse, but Indigenous Caribbean peoples survive and persist."
  }
];

/* 3. REFLECTION QUESTIONS */
const reflectionQuestions = [
  "Whose migrations are framed as 'natural' (Indigenous from Asia) versus 'civilizing' (European)? How does language shape power?",
  "Archaeological 'visibility' ≠ human presence. How does focusing on pottery and monuments erase foragers and fishers?",
  "How do Indigenous oral histories of 'time immemorial' challenge archaeological timelines that begin with Clovis?",
  "What happened to Taíno, Kalinago, and other Caribbean peoples after 1492, and who benefits from saying they 'disappeared'?",
  "How can we center Indigenous knowledge systems alongside Western archaeological data in teaching this timeline?"
];

/* 4. SCHOLARLY CONFLICTS */
const conflicts = [
  "First Arrival: Conservative (14,500 B.C.) vs. expansive (80,000+ B.C.) estimates; newer data supports deeper time frames and oral histories.",
  "Caribbean Colonization: Rouse’s 4000–3000 B.C. vs. Siegel et al.’s 5600+ B.C. paleoenvironmental evidence pushing dates earlier.",
  "Saladoid Origins: Single migration (Rouse) vs. multiple migrations (Huecoid/Early Ceramic arguments) with radiocarbon dates in tension.",
  "‘Extinction’ Narrative: Archaeological endpoint around A.D. 1584 vs. living Taíno and other Indigenous Caribbean descendants today."
];

/* ============================================================================
   INITIALIZATION
   ============================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  renderCaribbeanTimeline();
  renderReflectionQuestions();
  renderConflicts();
  setupFilters();
  setupTabs();
});

/* ============================================================================
   RENDER TIMELINE
   ============================================================================ */

function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;
  container.innerHTML = '';

  // sort by year ascending
  const sorted = [...timelineData].sort((a, b) => a.year - b.year);

  sorted.forEach(entry => {
    const div = document.createElement('div');
    div.className = 'timeline-entry';
    div.dataset.region = entry.region;
    div.dataset.period = entry.period;
    div.dataset.search = (
      (entry.peoples || '') + ' ' +
      (entry.location || '') + ' ' +
      (entry.event || '')
    ).toLowerCase();

    const yearClass = entry.year < 0 ? 'bc' : 'ad';
    const yearDisplay = Math.abs(entry.year).toLocaleString();

    div.innerHTML = `
      <div class="entry-header">
        <div class="entry-year ${yearClass}">${yearDisplay}</div>
      </div>
      <div class="entry-meta">
        <span class="entry-badge entry-period">${entry.period}</span>
        <span class="entry-badge entry-region ${entry.region.toLowerCase().replace(/\s+/g, '-')}">
          ${entry.region}
        </span>
      </div>
      <div class="entry-peoples"><strong>Peoples:</strong> ${entry.peoples}</div>
      <div class="entry-location"><strong>Location:</strong> ${entry.location}</div>
      <div class="entry-event">${entry.event}</div>
      <div class="entry-citations">${entry.citations}</div>
    `;

    container.appendChild(div);
  });
}

/* ============================================================================
   RENDER CARIBBEAN DETAIL
   ============================================================================ */

function renderCaribbeanTimeline() {
  const container = document.getElementById('caribbeanTimeline');
  if (!container) return;
  container.innerHTML = '';

  caribbeanEntries.forEach(entry => {
    const div = document.createElement('div');
    div.className = 'caribbean-entry';
    div.innerHTML = `
      <h3>${entry.migration}: ${entry.period}</h3>
      <p><strong>Time Period:</strong> ${entry.years}</p>
      <p>${entry.description}</p>
    `;
    container.appendChild(div);
  });
}

/* ============================================================================
   RENDER REFLECTION QUESTIONS
   ============================================================================ */

function renderReflectionQuestions() {
  const container = document.getElementById('reflectionContainer');
  if (!container) return;
  container.innerHTML = '';

  reflectionQuestions.forEach(q => {
    const div = document.createElement('div');
    div.className = 'reflection-item';
    div.textContent = q;
    container.appendChild(div);
  });
}

/* ============================================================================
   RENDER CONFLICTS
   ============================================================================ */

function renderConflicts() {
  const container = document.getElementById('conflictsContainer');
  if (!container) return;
  container.innerHTML = '';

  conflicts.forEach(c => {
    const div = document.createElement('div');
    div.className = 'conflict-item';
    div.textContent = c;
    container.appendChild(div);
  });
}

/* ============================================================================
   FILTERS: SEARCH, PERIOD, REGION
   ============================================================================ */

function setupFilters() {
  const searchInput = document.getElementById('searchInput');
  const periodSelect = document.getElementById('periodFilter');
  const regionButtons = document.querySelectorAll('.region-toggle');

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
  if (periodSelect) {
    periodSelect.addEventListener('change', applyFilters);
  }
  regionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      applyFilters();
    });
  });
}

function applyFilters() {
  const searchInput = document.getElementById('searchInput');
  const periodSelect = document.getElementById('periodFilter');
  const regionButtons = document.querySelectorAll('.region-toggle');
  const entries = document.querySelectorAll('.timeline-entry');

  const term = searchInput ? searchInput.value.toLowerCase() : '';
  const period = periodSelect ? periodSelect.value : '';

  const activeRegions = Array.from(regionButtons)
    .filter(btn => btn.classList.contains('active'))
    .map(btn => btn.dataset.region);

  entries.forEach(entry => {
    const matchesSearch =
      !term || entry.dataset.search.includes(term);
    const matchesPeriod =
      !period || entry.dataset.period === period;
    const matchesRegion =
      activeRegions.length === 0 || activeRegions.includes(entry.dataset.region);

    if (matchesSearch && matchesPeriod && matchesRegion) {
      entry.style.display = '';
    } else {
      entry.style.display = 'none';
    }
  });
}

/* ============================================================================
   TABS: FULL TIMELINE / CARIBBEAN / HIGHLIGHTS / CITATIONS
   ============================================================================ */

function setupTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabSections = document.querySelectorAll('.tab-section');

  // Ensure only full timeline is visible on load
  tabSections.forEach(sec => sec.classList.remove('active'));
  const defaultSection = document.getElementById('full-timeline');
  if (defaultSection) defaultSection.classList.add('active');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.tab;

      // Update button active state
      tabButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');

      // Show only the matching section
      tabSections.forEach(sec => {
        if (sec.id === targetId) {
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });
    });
  });
}

/* ============================================================================ */  
