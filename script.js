  // Timeline data
    const timelineData = [
      {year:-2600000,period:"Pleistocene Epoch",peoples:"N/A",location:"Global",region:"Global",event:"Beginning of Pleistocene Epoch (Gelasian Stage) - characterized by glacial and interglacial cycles",citations:"[11]"},
      {year:-2400000,period:"Early Pleistocene",peoples:"N/A",location:"North Atlantic Region",region:"Global",event:"Possible first major glaciation in North Atlantic region",citations:"[12]"},
      {year:-120000,period:"Late Pleistocene",peoples:"Possible humans",location:"California",region:"North America",event:"Possible evidence of human activity uncovered at California site (evidence contested)",citations:"[12]"},
      {year:-80000,period:"Late Pleistocene",peoples:"Ancestors of Indigenous peoples",location:"Americas",region:"Multi-regional",event:"Broad window for ancestral entry into Americas; supported by genetics and oral history",citations:"[2][6][12]"},
      {year:-51000,period:"Late Pleistocene",peoples:"Pre-Clovis peoples",location:"South Carolina (Topper Site)",region:"North America",event:"Stone tools and burnt plant remains possibly found at Topper Site (contested evidence)",citations:"[12]"},
      {year:-24000,period:"Last Glacial Maximum",peoples:"Early Beringians",location:"Beringia/North America",region:"North America/Arctic",event:"Glaciers lock up water, exposing Bering Land Bridge (Beringia); sea level drops ~425 feet; steppe-tundra environment with megafauna",citations:"[1][9][11]"},
      {year:-22000,period:"Last Glacial Maximum",peoples:"Pre-Clovis humans",location:"White Sands, New Mexico",region:"North America",event:"Teenagers and children leave footprints in muddy grasslands of ancient Lake Otero (White Sands National Park)",citations:"[2][12]"},
      {year:-19000,period:"Late Pleistocene",peoples:"Pre-Clovis peoples",location:"Meadowcroft Rockshelter (PA) and Monte Verde (Chile)",region:"North America/South America",event:"Unbroken habitation record and village sites suggesting human presence well before Beringia land bridge formation",citations:"[12]"},
      {year:-18000,period:"Last Glacial Maximum",peoples:"Coastal migrants",location:"Pacific Coast",region:"North America",event:"Glaciers cover New England and Midwest; 'Kelp Highway' hypothesis suggests coastal maritime migration 20,000+ years ago",citations:"[1][2][12]"},
      {year:-16000,period:"Paleoindian Period",peoples:"Paleo-Indians/Paleoamericans",location:"Eastern Virginia (Cactus Hill); Idaho (Cooper's Ferry)",region:"North America",event:"Paleoamericans occupy Cactus Hill Archaeological Site; pre-dating Clovis; tool-making and animal butchering",citations:"[12][16]"},
      {year:-14500,period:"Paleoindian Period",peoples:"Asian migrants",location:"Bering Land Bridge",region:"Arctic",event:"Asian migrants cross Bering Land Bridge and enter North America; genetic evidence supports long Beringia residence",citations:"[1][3][6][10]"},
      {year:-14000,period:"Paleoarctic Tradition",peoples:"Paleoarctic/Eastern Beringian peoples",location:"Swan Point, Tanana Valley, Alaska",region:"Arctic/Subarctic",event:"Oldest undisputed Alaskan site (Swan Point); Paleoarctic tradition with microblade technology and bifacial stone tools",citations:"[9][10]"},
      {year:-12960,period:"Clovis Period",peoples:"Clovis people",location:"North America",region:"North America",event:"Anzick Boy infant (Clovis member) buried with artifacts; oldest and only known Clovis burial in North America",citations:"[5][12]"},
      {year:-12000,period:"Paleomarine Tradition",peoples:"Paleoarctic/Paleomarine peoples",location:"Alaska; Chile; Southeast Alaska",region:"Arctic/North America/South America",event:"Migrants reach Chile; Paleoarctic people begin exploiting coastal resources, developing Paleomarine tradition in Southeast Alaska",citations:"[3][6][9][10][12]"},
      {year:-12000,period:"Post-Glacial Epoch",peoples:"N/A",location:"Global",region:"Global",event:"Glaciers and polar ice retreat; sea levels rise; Bering Land Bridge drowns; Alaska isolated from North America",citations:"[9][10]"},
      {year:-10900,period:"Late Paleoindian",peoples:"Clovis and Folsom peoples",location:"North America",region:"North America",event:"Large mammals (mammoth, mastodon, giant sloth) begin extinction; end of Clovis tradition; shift to diverse foraging",citations:"[5][6][12]"},
      {year:-10000,period:"Paleoindian Period",peoples:"Paleo-Indians",location:"North America",region:"North America",event:"Sophisticated Clovis technology appears; fluted spear points used in big-game hunting",citations:"[6][12]"},
      {year:-9500,period:"Paleo-Indian Tradition",peoples:"Paleo-Indians",location:"Eastern and Central North America",region:"North America",event:"Paleo-Indian tradition emerges; hunting large wild mammals; includes Clovis and Folsom complexes",citations:"[5][6][12][16]"},
      {year:-9000,period:"Old Cordilleran Culture",peoples:"Early Northwest peoples (ancestors of Cayuse, Chinook, Klamath)",location:"Northwest (Columbia River valley, Washington, Oregon)",region:"North America",event:"Old Cordilleran culture develops with varied subsistence strategies (hunting, fishing, foraging)",citations:"[12]"},
      {year:-9000,period:"Archaic/Early Agricultural",peoples:"Proto-Mesoamerican peoples",location:"Central Mexico",region:"Mesoamerica",event:"Plant cultivation begins in central Mexico; experimentation with beans, pumpkins, peppers, gourds",citations:"[6][12]"},
      {year:-8500,period:"Folsom Culture",peoples:"Folsom peoples",location:"Great Plains and Southwest",region:"North America",event:"Folsom culture develops; based on bison hunting; perhaps most skilled stone workers in ancient North America",citations:"[5][12]"},
      {year:-8000,period:"Paleo-Indian/Archaic",peoples:"Paleo-Indians; Folsom peoples; early Caribbean Archaic",location:"Southern South America; Colorado; Trinidad",region:"South America/North America/Caribbean",event:"Immigrants reach southernmost South America; Folsom occupation at Lindermeier (CO); earliest Trinidad human activity (Banwari Trace)",citations:"[3][6][12][14]"},
      {year:-8000,period:"Archaic Tradition",peoples:"Archaic peoples",location:"North America",region:"North America",event:"Archaic tradition replaces Paleo-Indian lifestyle; flexible hunter-gatherer subsistence with wild plants, fishing, hunting",citations:"[6][12][16]"},
      {year:-7060,period:"Early Archaic (Caribbean)",peoples:"Archaic peoples (Trinidad)",location:"Trinidad (Nariva Swamp)",region:"Caribbean",event:"Charcoal evidence shows human landscape modification via deliberate burning; early environmental management",citations:"[12][14]"},
      {year:-7000,period:"Archaic/Athabascan",peoples:"Athabascan ancestors",location:"Pacific Northwest",region:"North America",event:"Athabascan ancestors settle Pacific Northwest; ancestral to later Dene-speaking peoples",citations:"[6][12]"},
      {year:-7000,period:"Cochise Desert Culture",peoples:"Southwestern peoples",location:"Arizona, New Mexico",region:"North America",event:"Cochise Desert culture emerges in American Southwest; gathering wild plants; later sites show maize and projectile points",citations:"[12]"},
      {year:-6800,period:"Early Maritime Settlement",peoples:"Fishermen and sea mammal hunters",location:"Anangula, Aleutian Islands",region:"Arctic/Subarctic",event:"Anangula settled as first known permanent settlement for fishermen and sea mammal hunters in North Pacific",citations:"[12]"},
      {year:-6500,period:"Early Agricultural",peoples:"Mesoamerican peoples",location:"Mesoamerica",region:"Mesoamerica",event:"Beginnings of agriculture including maize production in Mesoamerica",citations:"[3][6][12]"},
      {year:-6400,period:"Early Archaic Tradition",peoples:"Koster site peoples (Illinois)",location:"Illinois (Koster site)",region:"North America",event:"Koster site occupied; begins as temporary camp, grows into permanent village subsisting on game, fish, plants",citations:"[12]"},
      {year:-6000,period:"Caribbean Lithic Age (Rouse I)",peoples:"Indigenous explorers (Arawakan/Lokono ancestors)",location:"Yucatán Peninsula to Caribbean; Orinoco lowlands",region:"Caribbean",event:"First indigenous explorers from Yucatán and Orinoco set sail to Caribbean; Rouse's Lithic Age first migration",citations:"[7][12][14]"},
      {year:-5890,period:"Archaic (Caribbean)",peoples:"Archaic peoples (Barbuda)",location:"Barbuda",region:"Caribbean",event:"Earliest available date for human colonization of Barbuda (Strombus line)",citations:"[12][14]"},
      {year:-5600,period:"Archaic (Caribbean)",peoples:"Archaic peoples (Grenada)",location:"Grenada",region:"Caribbean",event:"Charcoal disturbances suggest human colonization; possibly 3,000–3,500 years earlier than traditional archaeological evidence",citations:"[12][14]"},
      {year:-5300,period:"Archaic (Caribbean)",peoples:"Archaic peoples (Puerto Rico)",location:"Puerto Rico",region:"Caribbean",event:"Paleoenvironmental data documents human colonization of Puerto Rico",citations:"[12][14]"},
      {year:-5200,period:"Archaic (Caribbean)",peoples:"Archaic peoples (Tobago)",location:"Tobago",region:"Caribbean",event:"Milford 1 site shows earliest recorded Archaic occupation",citations:"[12][14]"},
      {year:-5150,period:"Archaic (Caribbean)",peoples:"Archaic peoples (Curaçao)",location:"Curaçao",region:"Caribbean",event:"Rooi Rincon site shows earliest recorded Archaic occupation",citations:"[12][14]"},
      {year:-5140,period:"Archaic (Caribbean)",peoples:"Archaic peoples (Antigua)",location:"Antigua",region:"Caribbean",event:"Birgits site shows earliest recorded Archaic occupation",citations:"[12][14]"},
      {year:-5000,period:"Arctic Small Tool Tradition",peoples:"Paleoeskimo/Paleomarine peoples",location:"Bering Strait to coastal Alaska",region:"Arctic/Subarctic",event:"Arctic Small Tool tradition migrates across Bering Strait by boat; spreads across coastal Alaska",citations:"[9][10][12]"},
      {year:-5000,period:"Early Agricultural/Archaic (Caribbean)",peoples:"Mesoamerican peoples; early Caribbean peoples",location:"Mexico; Martinique; Marie-Galante",region:"Mesoamerica/Caribbean",event:"Mexico Indians begin growing maize as crop; earliest human activity in Martinique and Marie-Galante",citations:"[12][14]"},
      {year:-4960,period:"Archaic (Caribbean)",peoples:"Archaic peoples (Marie-Galante)",location:"Marie-Galante",region:"Caribbean",event:"Earliest available date for human colonization of Marie-Galante (Vieux Fort)",citations:"[12][14]"},
      {year:-4540,period:"Archaic (Caribbean)",peoples:"Archaic peoples (Barbados)",location:"Barbados",region:"Caribbean",event:"Earliest available date for human colonization of Barbados (Heywoods site)",citations:"[12][14]"},
      {year:-4000,period:"Archaic (Northwest)",peoples:"Northwest Coast peoples",location:"Pacific Northwest",region:"North America",event:"Northwest Indians learn fish preservation and storage; shift from hunting to fishing reliance; more sedentary settlements",citations:"[6][12]"},
      {year:-3000,period:"Old Copper Culture",peoples:"Great Lakes Archaic Indians",location:"Great Lakes region",region:"North America",event:"Old Copper culture develops; mining native copper and shaping into tools, weapons, ornaments (early metalworking)",citations:"[12]"},
      {year:-3000,period:"Paleoeskimo/Inuit-Aleut",peoples:"Ancestors of Aleut and Inuit",location:"Bering Strait region",region:"Arctic/Subarctic",event:"Ancestors of Aleut and Inuit arrive in North America crossing Bering Strait by boat; cultures begin to diverge",citations:"[9][10][12]"},
      {year:-2000,period:"Southwestern Agriculture",peoples:"Southwestern Indigenous peoples (Mogollon, Hohokam, Puebloan)",location:"Arizona, New Mexico",region:"North America",event:"Southwestern peoples begin planting maize; shift toward settled permanent villages; development of agricultural societies",citations:"[6][12]"},
      {year:-2000,period:"Proto-Maya/Huastecas",peoples:"Huastecas and proto-Maya",location:"Eastern and southeastern Mexico",region:"Mesoamerica",event:"Huastecas and other proto-Maya cultures emerge in Mexico; contributing to later Mesoamerican diversity",citations:"[3][12]"},
      {year:-1800,period:"Poverty Point Culture",peoples:"Poverty Point peoples",location:"Louisiana (Lower Mississippi Valley)",region:"North America",event:"Poverty Point settlement built; massive earthwork complex and major trading center; often called America's first city",citations:"[2][12]"},
      {year:-1500,period:"Olmec Civilization",peoples:"Olmecs",location:"Gulf Coast, southern Mexico (San Lorenzo, La Venta)",region:"Mesoamerica",event:"Olmec civilization emerges; 'mother civilization' of Mesoamerica; monumental stone heads; influence on later cultures",citations:"[3][12]"},
      {year:-1300,period:"Olmec Florescence",peoples:"Olmecs",location:"Gulf Coast, Mexico",region:"Mesoamerica",event:"Olmecs flourish; extensive trade networks; monumental art and iconography influencing wider Mesoamerica",citations:"[3][12]"},
      {year:-1200,period:"Chavín Culture",peoples:"Chavín peoples",location:"Andean highlands (Chavín de Huántar, Peru)",region:"South America",event:"Chavín culture flourishes in Andean South America; religious and artistic center influencing later Andean civilizations",citations:"[3][12]"},
      {year:-1000,period:"Adena Culture",peoples:"Adena peoples",location:"Ohio River Valley and surrounding areas",region:"North America",event:"Adena culture evolves; primarily hunters-gatherers; known for burial mounds (e.g., Great Serpent Mound) and long-distance trade",citations:"[12]"},
      {year:-1000,period:"Woodland Tradition",peoples:"Woodland peoples (Adena, Hopewell, Mississippian)",location:"Eastern North America",region:"North America",event:"Woodland tradition spreads; characterized by agriculture, pottery, funerary mounds; includes multiple cultures over 2,600 years",citations:"[12]"},
      {year:-1000,period:"Saladoid Migration (Rouse III)",peoples:"Saladoid peoples (ancestors of Taíno, Arawakan-speakers)",location:"Lesser Antilles from South America",region:"Caribbean",event:"Saladoid group begins migration into Lesser Antilles from South America; Rouse's third migration; agro-ceramists with pottery",citations:"[7][12]"},
      {year:-800,period:"Dorset Culture",peoples:"Dorset peoples",location:"Eastern Canada, Greenland",region:"Arctic/Subarctic",event:"Dorset culture develops; descended from Arctic Small Tool tradition; marine mammal hunters with sophisticated tools",citations:"[9][10][12]"},
      {year:-750,period:"Klallam (Northwest Coast)",peoples:"Klallam people",location:"Port Angeles, Washington (Tse-whit-zen village)",region:"North America",event:"Ancient village či̕xʷícən (Tse-whit-zen) founded by Klallam people; flourishes for 2,700+ years; Indigenous continuity",citations:"[12]"},
      {year:-500,period:"Southwestern Agriculture",peoples:"Southwestern farmers",location:"Southwest (Arizona, New Mexico)",region:"North America",event:"Southwestern farmers begin growing beans alongside maize and squash; increased protein; stable agricultural communities",citations:"[6][12]"},
      {year:-500,period:"Zapotec Culture",peoples:"Zapotec peoples",location:"Monte Alban (Oaxaca, Mexico)",region:"Mesoamerica",event:"Zapotec culture emerges at Monte Alban; ruled by divine kings; military conquests recorded in carvings",citations:"[12]"},
      {year:-400,period:"Zapotec & Nazca",peoples:"Zapotecs; Nazca peoples",location:"Monte Alban/Mixtla (Mexico); western South America (Peru coast)",region:"Mesoamerica/South America",event:"Zapotecs flourish at Monte Alban and Mixtla; Nazca coastal culture flourishes in western South America",citations:"[3][12]"},
      {year:-300,period:"Hopewell Culture",peoples:"Hopewell peoples",location:"Ohio River Valley, Midwest",region:"North America",event:"Hopewell cultural tradition develops; large ceremonial centers, burial mounds with elaborate goods, vast trade networks",citations:"[12]"},
      {year:-200,period:"Ceramic Age Begins (Rouse)",peoples:"Saladoid agro-ceramists (ancestors of Taíno, Arawakan-speakers)",location:"Puerto Rico, Lesser Antilles",region:"Caribbean",event:"Saladoid agro-ceramists arrive in Caribbean (Irving Rouse's third migration); pottery-using, horticultural groups; beginning of Ceramic Age",citations:"[7][12][13][14]"},
      {year:-200,period:"Teotihuacán & Anasazi",peoples:"Teotihuacán peoples; Basketmaker (Anasazi) peoples",location:"Teotihuacán (Mexico); Four Corners (AZ, NM, UT, CO)",region:"Mesoamerica/North America",event:"Teotihuacán emerges as largest urban center in Mesoamerica; Basketmaker (Ancestral Puebloan) tradition begins; pit houses; maize reliance",citations:"[3][12]"},
      {year:-200,period:"Southwestern Pottery",peoples:"Southwestern Indigenous peoples",location:"Arizona, New Mexico",region:"North America",event:"Southwestern Indians begin making pottery; enables cooking of dried corn/beans; crop storage and village permanence",citations:"[12]"},
      {year:-31,period:"Olmec Monument",peoples:"Olmecs",location:"Gulf Coast, Mexico",region:"Mesoamerica",event:"First dated Olmec monument and early glyph writing recorded in Mesoamerica",citations:"[3][12]"},
      {year:0,period:"Classic Period",peoples:"Mesoamerican, South American peoples",location:"Mesoamerica, South America",region:"Mesoamerica/South America",event:"Classic Period begins in Mesoamerica and South America; urban centers, complex hierarchies, monumental architecture, writing systems",citations:"[3][12]"}
    ];

    // Major civilizations data
    const civilizations = [
      {
        name: "Olmec Civilization",
        timeframe: "1500–400 B.C.",
        location: "Gulf Coast, southern Mexico (San Lorenzo, La Venta)",
        region: "Mesoamerica",
        description: "The Olmec civilization is often called the 'mother civilization' of Mesoamerica. They created massive stone heads weighing up to 50 tons, developed early writing systems, and established extensive trade networks.",
        significance: "The Olmecs profoundly influenced all later Mesoamerican civilizations including the Maya and Aztec. Their artistic iconography, religious symbolism, and urban planning shaped the region for millennia.",
        citations: "[3][12]"
      },
      {
        name: "Chavín Culture",
        timeframe: "1200–200 B.C.",
        location: "Andean highlands (Chavín de Huántar, Peru)",
        region: "South America",
        description: "The Chavín culture was a major religious and artistic center in the Andean highlands. Their temple complex at Chavín de Huántar featured sophisticated stone carvings and underground galleries.",
        significance: "Chavín served as a pilgrimage site and cultural nexus, spreading artistic styles and religious practices throughout the Andes. They influenced later Andean civilizations including the Moche and Inca.",
        citations: "[3][12]"
      },
      {
        name: "Poverty Point Culture",
        timeframe: "1800–1000 B.C.",
        location: "Louisiana (Lower Mississippi Valley)",
        region: "North America",
        description: "Poverty Point was a massive earthwork complex and major trading center, often called America's first city. The site features concentric semi-circular ridges spanning over 1 mile in diameter.",
        significance: "Poverty Point demonstrates sophisticated pre-agricultural urban planning and long-distance trade networks extending across North America. It challenges assumptions that cities require agriculture.",
        citations: "[2][12]"
      },
      {
        name: "Adena Culture",
        timeframe: "1000–100 B.C.",
        location: "Ohio River Valley and surrounding areas",
        region: "North America",
        description: "The Adena culture built elaborate burial mounds including the famous Great Serpent Mound. They were primarily hunter-gatherers with emerging horticulture and extensive trade networks.",
        significance: "Adena mound-building traditions established cultural patterns that lasted over 2,000 years in Eastern North America. Their trade networks connected peoples from the Great Lakes to the Gulf Coast.",
        citations: "[12]"
      },
      {
        name: "Hopewell Culture",
        timeframe: "300 B.C.–500 A.D.",
        location: "Ohio River Valley, Midwest",
        region: "North America",
        description: "The Hopewell built large ceremonial centers and burial mounds filled with elaborate grave goods. They maintained vast trade networks bringing materials from across North America.",
        significance: "Hopewell exchange networks were among the most extensive in pre-Columbian North America, moving copper from Lake Superior, mica from Appalachia, and shells from the Gulf Coast.",
        citations: "[12]"
      },
      {
        name: "Taíno Peoples (Saladoid Ancestors)",
        timeframe: "200 B.C.–1492 A.D. (and continuing)",
        location: "Greater Antilles (Puerto Rico, Hispaniola, Cuba, Jamaica)",
        region: "Caribbean",
        description: "The Taíno descended from Saladoid agro-ceramists who migrated from South America. They developed sophisticated agricultural systems (conuco farming), elaborate pottery, and complex social hierarchies.",
        significance: "Taíno peoples were the first Indigenous Americans encountered by Columbus. Despite colonial narratives of 'extinction,' Taíno descendants and cultural practices continue throughout the Caribbean today.",
        citations: "[4][7][12][13][14]"
      },
      {
        name: "Zapotec Culture",
        timeframe: "500 B.C.–800 A.D.",
        location: "Monte Albán (Oaxaca, Mexico)",
        region: "Mesoamerica",
        description: "The Zapotec built Monte Albán, one of Mesoamerica's earliest urban centers. They developed early writing systems and maintained military conquests recorded in stone carvings.",
        significance: "Zapotec writing and astronomical observations contributed to Mesoamerican intellectual traditions. Monte Albán demonstrates early urban planning and state-level political organization.",
        citations: "[12]"
      },
      {
        name: "Teotihuacán",
        timeframe: "200 B.C.–750 A.D.",
        location: "Teotihuacán (Mexico)",
        region: "Mesoamerica",
        description: "Teotihuacán was the largest urban center in Mesoamerica, with a population reaching 100,000–200,000. The city featured massive pyramids, sophisticated urban planning, and multi-ethnic neighborhoods.",
        significance: "Teotihuacán's influence extended throughout Mesoamerica through trade, diplomacy, and cultural exchange. Its architectural and artistic styles shaped the region for centuries.",
        citations: "[3][12]"
      },
      {
        name: "Ancestral Puebloans (Anasazi)",
        timeframe: "200 B.C.–1300 A.D.",
        location: "Four Corners region (Arizona, New Mexico, Utah, Colorado)",
        region: "North America",
        description: "The Ancestral Puebloans (formerly called Anasazi) developed the Basketmaker tradition, building pit houses and later spectacular cliff dwellings. They cultivated maize, beans, and squash.",
        significance: "Ancestral Puebloans created sophisticated architectural complexes like Mesa Verde and Chaco Canyon. Modern Pueblo peoples are their direct descendants, maintaining continuous cultural traditions.",
        citations: "[3][12]"
      }
    ];

    // App state
    let currentTab = 'timeline';
    let visibleRegions = new Set(['north-america', 'caribbean', 'mesoamerica', 'south-america', 'arctic', 'global']);
    let searchQuery = '';
    let periodFilter = 'all';

    // Helper functions
    function formatYear(year) {
      if (year < 0) {
        const absYear = Math.abs(year);
        if (absYear >= 1000000) {
          return `${(absYear / 1000000).toFixed(1)}M B.C.`;
        } else if (absYear >= 1000) {
          return `${(absYear / 1000).toFixed(1)}K B.C.`;
        }
        return `${absYear} B.C.`;
      } else if (year === 0) {
        return '1 A.D.';
      }
      return `${year} A.D.`;
    }

    function normalizeRegion(region) {
      const regionMap = {
        'Global': 'global',
        'North America': 'north-america',
        'Caribbean': 'caribbean',
        'Mesoamerica': 'mesoamerica',
        'South America': 'south-america',
        'Arctic': 'arctic',
        'Arctic/Subarctic': 'arctic',
        'North America/Arctic': 'north-america',
        'South America/North America/Caribbean': 'south-america',
        'Multi-regional': 'north-america',
        'North America/South America': 'north-america',
        'Mesoamerica/Caribbean': 'caribbean',
        'Mesoamerica/North America': 'mesoamerica',
        'Mesoamerica/South America': 'mesoamerica'
      };
      return regionMap[region] || 'north-america';
    }

    function createTimelineEntry(entry) {
      const div = document.createElement('div');
      div.className = 'timeline-entry';
      div.dataset.year = entry.year;
      div.dataset.period = entry.period;
      div.dataset.region = normalizeRegion(entry.region);
      
      div.innerHTML = `
        <div class="entry-header">
          <span class="entry-year">${formatYear(entry.year)}</span>
        </div>
        <div class="entry-period">${entry.period}</div>
        <div class="entry-peoples">${entry.peoples}</div>
        <div class="entry-location">${entry.location}</div>
        <div class="entry-event preview">${entry.event}</div>
        <div class="entry-citations">${entry.citations}</div>
      `;
      
      div.addEventListener('click', () => {
        const wasExpanded = div.classList.contains('expanded');
        document.querySelectorAll('.timeline-entry.expanded').forEach(e => {
          e.classList.remove('expanded');
          e.querySelector('.entry-event').classList.add('preview');
        });
        
        if (!wasExpanded) {
          div.classList.add('expanded');
          div.querySelector('.entry-event').classList.remove('preview');
        }
      });
      
      return div;
    }

    function renderTimeline() {
      const tracksContainer = document.getElementById('timeline-tracks');
      tracksContainer.innerHTML = '';
      
      const regions = [
        { id: 'global', label: 'Global Events', class: 'track-global' },
        { id: 'north-america', label: 'North America', class: 'track-north-america' },
        { id: 'caribbean', label: 'Caribbean', class: 'track-caribbean' },
        { id: 'mesoamerica', label: 'Mesoamerica', class: 'track-mesoamerica' },
        { id: 'south-america', label: 'South America/Andean', class: 'track-south-america' },
        { id: 'arctic', label: 'Arctic/Subarctic', class: 'track-arctic' }
      ];
      
      regions.forEach(regionInfo => {
        const track = document.createElement('div');
        track.className = `timeline-track ${regionInfo.class}`;
        track.dataset.region = regionInfo.id;
        
        if (!visibleRegions.has(regionInfo.id)) {
          track.classList.add('hidden');
        }
        
        track.innerHTML = `
          <div class="track-label">${regionInfo.label}</div>
          <div class="track-entries"></div>
        `;
        
        const entriesContainer = track.querySelector('.track-entries');
        
        const filteredData = timelineData.filter(entry => {
          const normalizedRegion = normalizeRegion(entry.region);
          const matchesRegion = normalizedRegion === regionInfo.id;
          const matchesSearch = searchQuery === '' || 
            entry.peoples.toLowerCase().includes(searchQuery.toLowerCase()) ||
            entry.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
            entry.location.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesPeriod = periodFilter === 'all' || entry.period.includes(periodFilter);
          
          return matchesRegion && matchesSearch && matchesPeriod;
        });
        
        filteredData.forEach(entry => {
          entriesContainer.appendChild(createTimelineEntry(entry));
        });
        
        tracksContainer.appendChild(track);
      });
    }

    function renderCaribbean() {
      const container = document.getElementById('caribbean-entries');
      container.innerHTML = '';
      
      const caribbeanData = timelineData.filter(entry => 
        entry.region === 'Caribbean' || entry.region.includes('Caribbean')
      );
      
      caribbeanData.forEach(entry => {
        container.appendChild(createTimelineEntry(entry));
      });
    }

    function renderCivilizations() {
      const container = document.getElementById('civilization-grid');
      container.innerHTML = '';
      
      civilizations.forEach(civ => {
        const card = document.createElement('div');
        card.className = 'civilization-card';
        card.innerHTML = `
          <h3>${civ.name}</h3>
          <div class="timeframe">${civ.timeframe}</div>
          <div class="location">${civ.location}</div>
          <div class="description">${civ.description}</div>
          <div class="significance"><strong>Significance:</strong> ${civ.significance}</div>
          <div class="citations">${civ.citations}</div>
        `;
        container.appendChild(card);
      });
    }

    // Tab navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const tabName = tab.dataset.tab;
        
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        document.querySelectorAll('.tab-content').forEach(content => {
          content.classList.remove('active');
        });
        
        document.getElementById(`${tabName}-tab`).classList.add('active');
        currentTab = tabName;
      });
    });

    // Region toggles
    document.querySelectorAll('.region-toggle').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const region = checkbox.dataset.region;
        if (checkbox.checked) {
          visibleRegions.add(region);
        } else {
          visibleRegions.delete(region);
        }
        renderTimeline();
      });
    });

    // Search
    document.getElementById('search-input').addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderTimeline();
    });

    // Period filter
    document.getElementById('period-filter').addEventListener('change', (e) => {
      periodFilter = e.target.value;
      renderTimeline();
    });

    // Initialize
    renderTimeline();
    renderCaribbean();
    renderCivilizations();
  </script>
</body>
</html>
