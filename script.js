/* ============================================================================
   INDIGENOUS AMERICAS TIMELINE - JAVASCRIPT
   Hood Justice Educational Tool
   ============================================================================ */

/* TIMELINE DATA */
const timelineData = [
  {
    year: -2600000,
    period: "Pleistocene Epoch",
    peoples: "N/A",
    location: "Global",
    region: "Global",
    event: "Beginning of Pleistocene Epoch (Gelasian Stage) - characterized by glacial and interglacial cycles",
    citations: "[11]"
  },
  {
    year: -2400000,
    period: "Early Pleistocene",
    peoples: "N/A",
    location: "North Atlantic Region",
    region: "Global",
    event: "Possible first major glaciation in North Atlantic region",
    citations: "[12]"
  },
  {
    year: -120000,
    period: "Late Pleistocene",
    peoples: "Possible humans",
    location: "California",
    region: "North America",
    event: "Possible evidence of human activity uncovered at California site (evidence contested)",
    citations: "[12]"
  },
  {
    year: -80000,
    period: "Late Pleistocene",
    peoples: "Ancestors of Indigenous peoples",
    location: "Americas",
    region: "Multi-regional",
    event: "Broad window for ancestral entry into Americas; supported by genetics and oral history",
    citations: "[2][6][12]"
  },
  {
    year: -51000,
    period: "Late Pleistocene",
    peoples: "Pre-Clovis peoples",
    location: "South Carolina (Topper Site)",
    region: "North America",
    event: "Stone tools and burnt plant remains possibly found at Topper Site (contested evidence)",
    citations: "[12]"
  },
  {
    year: -24000,
    period: "Last Glacial Maximum",
    peoples: "Early Beringians",
    location: "Beringia/North America",
    region: "North America",
    event: "Glaciers lock up water, exposing Bering Land Bridge (Beringia); sea level drops ~425 feet; steppe-tundra environment with megafauna",
    citations: "[1][9][11]"
  },
  {
    year: -22000,
    period: "Last Glacial Maximum",
    peoples: "Pre-Clovis humans",
    location: "White Sands, New Mexico",
    region: "North America",
    event: "Teenagers and children leave footprints in muddy grasslands of ancient Lake Otero (White Sands National Park)",
    citations: "[2][12]"
  },
  {
    year: -19000,
    period: "Late Pleistocene",
    peoples: "Pre-Clovis peoples",
    location: "Meadowcroft Rockshelter (PA) and Monte Verde (Chile)",
    region: "North America",
    event: "Unbroken habitation record and village sites suggesting human presence well before Beringia land bridge formation",
    citations: "[12]"
  },
  {
    year: -18000,
    period: "Last Glacial Maximum",
    peoples: "Coastal migrants",
    location: "Pacific Coast",
    region: "North America",
    event: "Glaciers cover New England and Midwest; 'Kelp Highway' hypothesis suggests coastal maritime migration 20,000+ years ago",
    citations: "[1][2][12]"
  },
  {
    year: -16000,
    period: "Paleoindian Period",
    peoples: "Paleo-Indians/Paleoamericans",
    location: "Eastern Virginia (Cactus Hill); Idaho (Cooper's Ferry)",
    region: "North America",
    event: "Paleoamericans occupy Cactus Hill Archaeological Site; pre-dating Clovis; tool-making and animal butchering",
    citations: "[12][16]"
  },
  {
    year: -14500,
    period: "Paleoindian Period",
    peoples: "Asian migrants",
    location: "Bering Land Bridge",
    region: "North America",
    event: "Asian migrants cross Bering Land Bridge and enter North America; genetic evidence supports long Beringia residence",
    citations: "[1][3][6][10]"
  },
  {
    year: -14000,
    period: "Paleoarctic Tradition",
    peoples: "Paleoarctic/Eastern Beringian peoples",
    location: "Swan Point, Tanana Valley, Alaska",
    region: "Arctic/Subarctic",
    event: "Oldest undisputed Alaskan site (Swan Point); Paleoarctic tradition with microblade technology and bifacial stone tools",
    citations: "[9][10]"
  },
  {
    year: -12960,
    period: "Clovis Period",
    peoples: "Clovis people",
    location: "North America",
    region: "North America",
    event: "Anzick Boy infant (Clovis member) buried with artifacts; oldest and only known Clovis burial in North America",
    citations: "[5][12]"
  },
  {
    year: -12000,
    period: "Paleomarine Tradition",
    peoples: "Paleoarctic/Paleomarine peoples",
    location: "Alaska; Chile; Southeast Alaska",
    region: "North America",
    event: "Migrants reach Chile; Paleoarctic people begin exploiting coastal resources, developing Paleomarine tradition in Southeast Alaska",
    citations: "[3][6][9][10][12]"
  },
  {
    year: -6000,
    period: "Caribbean Lithic Age (Rouse I)",
    peoples: "Indigenous explorers (Arawakan/Lokono ancestors)",
    location: "Yucatán Peninsula to Caribbean; Orinoco lowlands",
    region: "Caribbean",
    event: "First indigenous explorers from Yucatán and Orinoco set sail to Caribbean; Rouse's Lithic Age first migration",
    citations: "[7][12][14]"
  },
  {
    year: -5600,
    period: "Archaic (Caribbean)",
    peoples: "Archaic peoples (Grenada)",
    location: "Grenada",
    region: "Caribbean",
    event: "Charcoal disturbances suggest human colonization; possibly 3,000–3,500 years earlier than traditional archaeological evidence",
    citations: "[12][14]"
  },
  {
    year: -200,
    period: "Ceramic Age Begins (Rouse)",
    peoples: "Saladoid agro-ceramists (ancestors of Taíno, Arawakan-speakers)",
    location: "Puerto Rico, Lesser Antilles",
    region: "Caribbean",
    event: "Saladoid agro-ceramists arrive in Caribbean (Irving Rouse's third migration); pottery-using, horticultural groups; beginning of Ceramic Age",
    citations: "[7][12][13][14]"
  },
  {
    year: -31,
    period: "Olmec Monument",
    peoples: "Olmecs",
    location: "Gulf Coast, Mexico",
    region: "Mesoamerica",
    event: "First dated Olmec monument and early glyph writing recorded in Mesoamerica",
    citations: "[3][12]"
  },
  {
    year: 0,
    period: "Classic Period",
    peoples: "Mesoamerican, South American peoples",
    location: "Mesoamerica, South America",
    region: "Mesoamerica",
    event: "Classic Period begins in Mesoamerica and South America; urban centers, complex hierarchies, monumental architecture, writing systems",
    citations: "[3][12]"
  }
];

/* REFLECTION QUESTIONS */
const reflectionQuestions = [
  "Whose migrations are framed as 'natural' (Indigenous from Asia) versus 'civilizing' (European)? How does language shape power?",
  "Archaeological 'visibility' ≠ human presence. What does absence of pottery mean? How does this bias archaeology toward agricultural societies?",
  "How do Indigenous oral histories of 'time immemorial' challenge archaeological timelines that begin with Clovis?",
  "What happened to Taíno, Kalinago, and other Caribbean peoples after 1492? Why does mainstream history claim they 'disappeared'?",
  "How can we honor Indigenous knowledge systems alongside Western archaeological data?"
];

/* SCHOLARLY CONFLICTS */
const conflicts = [
  "First Arrival: Conservative (14,500 B.C.) vs. Expansive (80,000+ B.C.) estimates reflect ongoing debate and Indigenous oral tradition claims.",
  "Caribbean Colonization: Traditional archaeology (Rouse 4000 B.C.) vs. paleoenvironmental data (Siegel 5600+ B.C.) – charcoal shows earlier presence than artifacts.",
  "Saladoid Origins: One migration (Rouse) vs. two/three migrations (Chanlatte, Haviser) – radiocarbon dates don't clearly resolve this.",
  "'Extinction' narrative: A.D. 1584 marks Rouse's archaeological endpoint for Taíno, but living descendants and identity movements continue today."
];

/* CARIBBEAN ENTRIES (Irving Rouse Framework) */
const caribbeanEntries = [
  {
    migration: "First Migration",
    period: "Lithic Age",
    years: "ca. 4000–3000 B.C.",
    description: "First maritime peoples from northern South America (Orinoco region) enter the Caribbean archipelago. Simple stone tools, no pottery, small mobile bands."
  },
  {
    migration: "Second Migration",
    period: "Archaic Age",
    years: "ca. 3000–1000 B.C.",
    description: "Archaic foragers from South America spread into Puerto Rico, Vieques, and Lesser Antilles. Non-ceramic, more developed stone-tool kits. Shellfish, fish, wild plants; small mobile bands."
  },
  {
    migration: "Third Migration",
    period: "Ceramic Age",
    years: "ca. 200 B.C.–1500 A.D.",
    description: "Saladoid agro-ceramists (pottery-using, horticultural peoples) arrive from Orinoco Valley. Ancestors of Taíno and Arawakan-speaking peoples. More permanent villages, agriculture (maize, manioc, cassava)."
  },
  {
    migration: "Fourth Migration",
    period: "Historic Age",
    years: "ca. A.D. 1492–1500s+",
    description: "European invasion, enslavement, and Indigenous resistance. Rouse framed this as a 'fourth migration,' but it represents colonial occupation, disease, and attempted genocide. Living Indigenous descendants continue today."
  }
];

/* ============================================================================
   INITIALIZATION
   ============================================================================ */

document.addEventListener('DOMContentLoaded', function() {
  renderTimeline();
  renderCaribbeanTimeline();
  renderReflectionQuestions();
  renderConflicts();
  setupEventListeners();
  setupTabs();  // <-- add this line
});

/* ============================================================================
   RENDER TIMELINE ENTRIES
   ============================================================================ */

function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  container.innerHTML = '';

  timelineData.forEach((entry, index) => {
    const entryEl = createTimelineEntry(entry, index);
    container.appendChild(entryEl);
  });
}

function createTimelineEntry(entry, index) {
  const div = document.createElement('div');
  div.className = 'timeline-entry';
  div.setAttribute('data-region', entry.region);
  div.setAttribute('data-period', entry.period);
  div.setAttribute('data-search', `${entry.peoples} ${entry.location} ${entry.event}`.toLowerCase());

  const yearClass = entry.year < 0 ? 'bc' : 'ad';
  const yearDisplay = Math.abs(entry.year).toLocaleString();

  div.innerHTML = `
    <div class="entry-header">
      <div class="entry-year ${yearClass}">${yearDisplay}</div>
      <div class="entry-toggle">+</div>
    </div>
    <div class="entry-meta">
      <span class="entry-badge entry-period">${entry.period}</span>
      <span class="entry-badge entry-region ${entry.region.toLowerCase().replace(/\s+/g, '-')}">${entry.region}</span>
    </div>
    <div class="entry-peoples"><strong>Peoples:</strong> ${entry.peoples}</div>
    <div class="entry-location"><strong>Location:</strong> ${entry.location}</div>
    <div class="entry-event">${entry.event}</div>
    <div class="entry-citations">${entry.citations}</div>
  `;

  div.addEventListener('click', function(e) {
    if (e.target.closest('.entry-toggle')) {
      this.classList.toggle('expanded');
      const toggle = this.querySelector('.entry-toggle');
      toggle.textContent = this.classList.contains('expanded') ? '−' : '+';
    }
  });

  return div;
}

/* ============================================================================
   RENDER CARIBBEAN TIMELINE (Irving Rouse)
   ============================================================================ */

function renderCaribbeanTimeline() {
  const container = document.getElementById('caribbeanTimeline');
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
  container.innerHTML = '';

  reflectionQuestions.forEach(question => {
    const div = document.createElement('div');
    div.className = 'reflection-item';
    div.textContent = question;
    container.appendChild(div);
  });
}

/* ============================================================================
   RENDER SCHOLARLY CONFLICTS
   ============================================================================ */

function renderConflicts() {
  const container = document.getElementById('conflictsContainer');
  container.innerHTML = '';

  conflicts.forEach(conflict => {
    const div = document.createElement('div');
    div.className = 'conflict-item';
    div.textContent = conflict;
    container.appendChild(div);
  });
}

/* ============================================================================
   EVENT LISTENERS & FILTERING
   ============================================================================ */

function setupEventListeners() {
  // Search functionality
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', filterTimeline);

  // Period filter
  const periodFilter = document.getElementById('periodFilter');
  periodFilter.addEventListener('change', filterTimeline);

  // Region toggles
  const regionToggles = document.querySelectorAll('.region-toggle');
  regionToggles.forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
      filterTimeline();
    });
  });
}

function filterTimeline() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const periodFilter = document.getElementById('periodFilter').value;
  
  const activeRegions = Array.from(document.querySelectorAll('.region-toggle.active'))
    .map(btn => btn.getAttribute('data-region'));

  const entries = document.querySelectorAll('.timeline-entry');

  entries.forEach(entry => {
    const matches = {
      search: !searchTerm || entry.getAttribute('data-search').includes(searchTerm),
      period: !periodFilter || entry.getAttribute('data-period') === periodFilter,
      region: activeRegions.length === 0 || activeRegions.includes(entry.getAttribute('data-region'))
    };

    entry.classList.toggle('hidden', !Object.values(matches).every(m => m));
  });
}

function setupTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabSections = document.querySelectorAll('.tab-section');

  // Show Full Timeline by default
  document.getElementById('full-timeline').classList.add('active');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-tab');

      // Update button active state
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Show only the matching section
      tabSections.forEach(sec => {
        if (sec.id === target) {
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });
    });
  });
}

/* ============================================================================
   END OF SCRIPT
   ============================================================================ */
