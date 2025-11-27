/* ============================================
   INDIGENOUS AMERICAS TIMELINE
   JavaScript: All Interactivity & Data Logic
   ============================================ */

// Timeline Data (can be moved to timeline.json for external data management)
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
    region: "Global",
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
    region: "Arctic/Subarctic",
    event: "Glaciers lock up water, exposing Bering Land Bridge (Beringia); sea level drops ~425 feet",
    citations: "[1][9][11]"
  },
  {
    year: -22000,
    period: "Last Glacial Maximum",
    peoples: "Pre-Clovis humans",
    location: "White Sands, New Mexico",
    region: "North America",
    event: "Teenagers and children leave footprints in muddy grasslands of ancient Lake Otero",
    citations: "[2][12]"
  },
  {
    year: -19000,
    period: "Late Pleistocene",
    peoples: "Pre-Clovis peoples",
    location: "Meadowcroft & Monte Verde",
    region: "North America",
    event: "Unbroken habitation record suggesting human presence well before Beringia formation",
    citations: "[12]"
  },
  {
    year: -14500,
    period: "Paleoindian Period",
    peoples: "Asian migrants",
    location: "Bering Land Bridge",
    region: "Arctic/Subarctic",
    event: "Asian migrants cross Bering Land Bridge and enter North America",
    citations: "[1][3][6][10]"
  },
  {
    year: -14000,
    period: "Paleoarctic Tradition",
    peoples: "Paleoarctic peoples",
    location: "Swan Point, Alaska",
    region: "Arctic/Subarctic",
    event: "Oldest undisputed Alaskan site; Paleoarctic tradition with microblade technology",
    citations: "[9][10]"
  },
  {
    year: -12000,
    period: "Paleomarine Tradition",
    peoples: "Paleoarctic/Paleomarine peoples",
    location: "Alaska; Chile",
    region: "Arctic/Subarctic",
    event: "Migrants reach Chile; Paleoarctic people begin exploiting coastal resources",
    citations: "[3][6][9][10][12]"
  },
  {
    year: -10000,
    period: "Paleoindian Period",
    peoples: "Paleo-Indians",
    location: "North America",
    region: "North America",
    event: "Sophisticated Clovis technology appears; fluted spear points used in big-game hunting",
    citations: "[6][12]"
  },
  {
    year: -8000,
    period: "Archaic Tradition",
    peoples: "Archaic peoples",
    location: "North America",
    region: "North America",
    event: "Archaic tradition replaces Paleo-Indian lifestyle across continent",
    citations: "[6][12][16]"
  },
  {
    year: -8000,
    period: "Caribbean Archaic",
    peoples: "Early Caribbean Archaic",
    location: "Trinidad",
    region: "Caribbean",
    event: "Earliest Trinidad human activity (Banwari Trace site); first Caribbean colonization",
    citations: "[14]"
  },
  {
    year: -6000,
    period: "Caribbean Lithic Age (Rouse I)",
    peoples: "Indigenous explorers",
    location: "Yucatán to Caribbean",
    region: "Caribbean",
    event: "First indigenous explorers from Yucatán and Orinoco set sail to Caribbean",
    citations: "[7][12][14]"
  },
  {
    year: -5000,
    period: "Arctic Small Tool Tradition",
    peoples: "Paleoeskimo peoples",
    location: "Bering Strait to Alaska",
    region: "Arctic/Subarctic",
    event: "Arctic Small Tool tradition migrates across Bering Strait by boat",
    citations: "[9][10][12]"
  },
  {
    year: -3000,
    period: "Old Copper Culture",
    peoples: "Great Lakes Archaic",
    location: "Great Lakes",
    region: "North America",
    event: "Old Copper culture develops; mining native copper for tools and ornaments",
    citations: "[12]"
  },
  {
    year: -2000,
    period: "Proto-Maya",
    peoples: "Huastecas and proto-Maya",
    location: "Mexico",
    region: "Mesoamerica",
    event: "Huastecas and proto-Maya cultures emerge in Mexico",
    citations: "[3][12]"
  },
  {
    year: -1800,
    period: "Poverty Point Culture",
    peoples: "Poverty Point peoples",
    location: "Louisiana",
    region: "North America",
    event: "Poverty Point settlement built; major trading center; often called America's first city",
    citations: "[2][12]"
  },
  {
    year: -1500,
    period: "Olmec Civilization",
    peoples: "Olmecs",
    location: "Gulf Coast, Mexico",
    region: "Mesoamerica",
    event: "Olmec civilization emerges; 'mother civilization' of Mesoamerica",
    citations: "[3][12]"
  },
  {
    year: -1200,
    period: "Chavín Culture",
    peoples: "Chavín peoples",
    location: "Andean highlands, Peru",
    region: "South America",
    event: "Chavín culture flourishes; religious and artistic center influencing Andean civilizations",
    citations: "[3][12]"
  },
  {
    year: -1000,
    period: "Adena Culture",
    peoples: "Adena peoples",
    location: "Ohio River Valley",
    region: "North America",
    event: "Adena culture evolves; known for burial mounds and long-distance trade",
    citations: "[12]"
  },
  {
    year: -1000,
    period: "Saladoid Migration",
    peoples: "Saladoid peoples",
    location: "Lesser Antilles",
    region: "Caribbean",
    event: "Saladoid migration begins into Lesser Antilles from South America (Rouse III)",
    citations: "[7][12]"
  },
  {
    year: -200,
    period: "Ceramic Age Begins",
    peoples: "Saladoid agro-ceramists",
    location: "Puerto Rico, Caribbean",
    region: "Caribbean",
    event: "Saladoid agro-ceramists arrive; beginning of Ceramic Age in Caribbean",
    citations: "[7][12][13][14]"
  },
  {
    year: 0,
    period: "Classic Period",
    peoples: "Mesoamerican peoples",
    location: "Mesoamerica",
    region: "Mesoamerica",
    event: "Classic Period begins in Mesoamerica; urban centers, complex hierarchies",
    citations: "[3][12]"
  }
];

// Scholarly Conflicts
const conflicts = [
  {
    title: "First Arrival: Conservative vs. Expansive Dates",
    description: "Conservative (14,500 B.C. Clovis-first) vs. Expansive (80,000+ B.C. pre-Clovis). Recent evidence from White Sands, Meadowcroft, and genetics supports earlier dates, vindicating Indigenous oral histories.",
    source: "[2][6][12]"
  },
  {
    title: "Caribbean Colonization: Traditional vs. Paleoenvironmental Data",
    description: "Traditional archaeology (Rouse 4000 B.C.) vs. paleoenvironmental data (Siegel 5600+ B.C.). Charcoal evidence shows Indigenous presence 3,000–3,500 years earlier than ceramic artifacts.",
    source: "[14]"
  },
  {
    title: "Saladoid Origins: One Migration or Two?",
    description: "One migration with internal diversification (Rouse) vs. two/three separate migrations (Chanlatte, Haviser). Radiocarbon dates are inconclusive; scholarly debate continues.",
    source: "[7]"
  },
  {
    title: "Route of Entry: Land Bridge vs. Coastal/Kelp Highway",
    description: "Bering Land Bridge (overland) vs. Kelp Highway (coastal/maritime). Evidence increasingly supports multiple routes and waves of migration, not a single entry point.",
    source: "[1][2][12]"
  },
  {
    title: "'Extinction' Narrative: Archaeological Endpoint vs. Living Continuity",
    description: "Rouse's A.D. 1584 marks archaeological endpoint for Taíno, but living descendants and identity movements continue today. 'Extinction' serves colonial erasure; survival is documented.",
    source: "[4][13]"
  }
];

// Reflection Questions
const reflectionQuestions = [
  "Whose migrations are framed as 'natural' (Indigenous from Asia) versus 'civilizing' (European)? How does language shape power?",
  "Archaeological 'visibility' ≠ human presence. What does absence of pottery mean? How does this bias archaeology toward agricultural societies?",
  "How do Indigenous oral histories of 'time immemorial' challenge archaeological timelines that begin with Clovis?",
  "What happened to Taíno, Kalinago, and other Caribbean peoples after 1492? Why does mainstream history claim they 'disappeared'?",
  "How can we honor Indigenous knowledge systems alongside Western archaeological data?",
  "What does it mean to frame a timeline as 'Hood Justice'? Whose perspective are we centering?"
];

// Civilizations Data
const civilizationsData = [
  {
    name: "Poverty Point",
    period: "1800–500 B.C.",
    location: "Louisiana",
    region: "North America",
    description: "Massive earthwork complex in the Lower Mississippi Valley, often called America's first city. Required sophisticated social organization and engineering."
  },
  {
    name: "Olmec Civilization",
    period: "1500–300 B.C.",
    location: "Gulf Coast, Mexico",
    region: "Mesoamerica",
    description: "'Mother civilization' of Mesoamerica. Created monumental stone heads, sophisticated art, and influenced later Maya and Aztec cultures."
  },
  {
    name: "Chavín Culture",
    period: "1200–400 B.C.",
    location: "Andean highlands, Peru",
    region: "South America",
    description: "Religious and artistic center at Chavín de Huántar that shaped later Andean civilizations through trade and cultural influence."
  },
  {
    name: "Adena Culture",
    period: "1000 B.C.–200 A.D.",
    location: "Ohio River Valley",
    region: "North America",
    description: "Known for elaborate burial mounds (e.g., Great Serpent Mound) and participation in long-distance trade networks across eastern North America."
  },
  {
    name: "Hopewell Culture",
    period: "300 B.C.–400 A.D.",
    location: "Ohio River Valley, Midwest",
    region: "North America",
    description: "Developed large ceremonial centers and burial mounds containing elaborate goods obtained through vast continental trade networks."
  },
  {
    name: "Taíno Chiefdoms",
    period: "600 A.D.–1492 A.D.",
    location: "Caribbean (Greater Antilles)",
    region: "Caribbean",
    description: "Descendants of Saladoid peoples. Complex chiefdoms with sophisticated agriculture, trade, and political organization. Central to Caribbean pre-Columbian history."
  }
];

// DOM Elements
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const timelineContainer = document.getElementById('timeline-container');
const caribbeanTimelineContainer = document.getElementById('caribbean-timeline-container');
const civilizationsContainer = document.getElementById('civilizations-container');
const conflictsContainer = document.getElementById('conflicts-container');
const reflectionQuestions_el = document.getElementById('reflection-questions');
const searchInput = document.getElementById('search-input');
const regionFilters = document.querySelectorAll('.region-filter');
const periodSelect = document.getElementById('period-select');
const zoomOutBtn = document.getElementById('zoom-out');
const zoomInBtn = document.getElementById('zoom-in');
const printBtn = document.getElementById('print-btn');

let zoomLevel = 'years'; // 'years' for detail, 'millennia' for overview

// ============================================
// TAB SWITCHING
// ============================================

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabName = button.getAttribute('data-tab');
    
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked button and corresponding content
    button.classList.add('active');
    document.getElementById(tabName).classList.add('active');
  });
});

// ============================================
// RENDER TIMELINE ENTRIES
// ============================================

function renderTimelineEntries(data, container) {
  container.innerHTML = '';
  
  data.forEach((entry, index) => {
    const entryEl = document.createElement('div');
    entryEl.className = `timeline-entry ${entry.region.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-')}`;
    
    const yearDisplay = entry.year < 0 
      ? Math.abs(entry.year).toLocaleString() + ' B.C.' 
      : entry.year.toLocaleString() + ' A.D.';
    
    entryEl.innerHTML = `
      <div class="timeline-entry-header">
        <div>
          <div class="timeline-entry-year">${yearDisplay}</div>
          <div class="timeline-entry-period">${entry.period}</div>
        </div>
        <button class="expand-btn" aria-label="Toggle details">▼</button>
      </div>
      <div class="timeline-entry-peoples">${entry.peoples}</div>
      <div class="timeline-entry-location"><strong>Location:</strong> ${entry.location}</div>
      <div class="timeline-entry-expanded" style="display: none;">
        <div class="timeline-entry-description">${entry.event}</div>
        <div class="timeline-entry-citations">${entry.citations}</div>
      </div>
    `;
    
    const expandBtn = entryEl.querySelector('.expand-btn');
    const expandedContent = entryEl.querySelector('.timeline-entry-expanded');
    
    expandBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = expandedContent.style.display !== 'none';
      expandedContent.style.display = isExpanded ? 'none' : 'block';
      expandBtn.classList.toggle('open');
    });
    
    container.appendChild(entryEl);
  });
}

// ============================================
// SEARCH & FILTER
// ============================================

function filterTimelineData() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedRegions = Array.from(regionFilters)
    .filter(filter => filter.checked)
    .map(filter => filter.value);
  const selectedPeriod = periodSelect.value;
  
  let filtered = timelineData.filter(entry => {
    const matchesSearch = searchTerm === '' || 
      entry.peoples.toLowerCase().includes(searchTerm) ||
      entry.location.toLowerCase().includes(searchTerm) ||
      entry.event.toLowerCase().includes(searchTerm);
    
    const matchesRegion = selectedRegions.includes(entry.region);
    const matchesPeriod = selectedPeriod === '' || entry.period.includes(selectedPeriod);
    
    return matchesSearch && matchesRegion && matchesPeriod;
  });
  
  renderTimelineEntries(filtered, timelineContainer);
}

searchInput.addEventListener('input', filterTimelineData);
regionFilters.forEach(filter => filter.addEventListener('change', filterTimelineData));
periodSelect.addEventListener('change', filterTimelineData);

// ============================================
// ZOOM
// ============================================

zoomOutBtn.addEventListener('click', () => {
  zoomLevel = 'millennia';
  // Group data by millennia (could implement visual grouping here)
  alert('Zoom to millennia view activated. Showing broader timeline overview.');
  // You can enhance this with visual grouping
});

zoomInBtn.addEventListener('click', () => {
  zoomLevel = 'years';
  alert('Zoom to year view activated. Showing detailed timeline entries.');
});

// ============================================
// PRINT
// ============================================

printBtn.addEventListener('click', () => {
  window.print();
});

// ============================================
// RENDER CARIBBEAN TIMELINE
// ============================================

function renderCaribbeanTimeline() {
  const caribbeanEntries = timelineData.filter(entry => entry.region === 'Caribbean');
  renderTimelineEntries(caribbeanEntries, caribbeanTimelineContainer);
}

// ============================================
// RENDER CIVILIZATIONS
// ============================================

function renderCivilizations() {
  civilizationsContainer.innerHTML = '';
  
  civilizationsData.forEach(civ => {
    const civCard = document.createElement('div');
    civCard.className = 'civilization-card';
    civCard.innerHTML = `
      <h3>${civ.name}</h3>
      <p><strong>Period:</strong> ${civ.period}</p>
      <p><strong>Location:</strong> ${civ.location}</p>
      <p><strong>Region:</strong> ${civ.region}</p>
      <p>${civ.description}</p>
    `;
    civilizationsContainer.appendChild(civCard);
  });
}

// ============================================
// RENDER CONFLICTS
// ============================================

function renderConflicts() {
  conflictsContainer.innerHTML = '';
  
  conflicts.forEach(conflict => {
    const conflictCard = document.createElement('div');
    conflictCard.className = 'conflict-card';
    conflictCard.innerHTML = `
      <h4>${conflict.title}</h4>
      <p>${conflict.description}</p>
      <p><strong>Sources:</strong> ${conflict.source}</p>
    `;
    conflictsContainer.appendChild(conflictCard);
  });
}

// ============================================
// RENDER REFLECTION QUESTIONS
// ============================================

function renderReflectionQuestions() {
  reflectionQuestions_el.innerHTML = '';
  
  reflectionQuestions.forEach((q, index) => {
    const qCard = document.createElement('div');
    qCard.className = 'reflection-card';
    qCard.innerHTML = `<p>${index + 1}. ${q}</p>`;
    reflectionQuestions_el.appendChild(qCard);
  });
}

// ============================================
// INITIALIZATION
// ============================================

function init() {
  renderTimelineEntries(timelineData, timelineContainer);
  renderCaribbeanTimeline();
  renderCivilizations();
  renderConflicts();
  renderReflectionQuestions();
}

// Run on page load
document.addEventListener('DOMContentLoaded', init);
