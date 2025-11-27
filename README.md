# Indigenous Americas Timeline: 2.6M B.C. – 1 A.D.
## A Hood Justice Educational Tool

---

## 📋 Project Overview

This is a fully interactive, research-backed timeline of Indigenous peoples of the Americas from 2.6 Million B.C. to 1 A.D., with deep focus on Irving Rouse's Caribbean colonization framework and scholarly conflicts in archaeological data.

**Features:**
- ✅ 80+ timeline entries with full citations
- ✅ 5 regional color-coded tracks (North America, Caribbean, Mesoamerica, South America, Arctic)
- ✅ 4 navigation tabs (Full Timeline, Caribbean Detail, Civilizations, Citations & Conflicts)
- ✅ Search & filter functionality by region, period, and keywords
- ✅ Expand/collapse entries with full descriptions
- ✅ Hood Justice reflection questions
- ✅ Scholarly conflicts panel (data conflicts in archaeology)
- ✅ Print-friendly layout
- ✅ Mobile responsive design
- ✅ Dark mode compatible
- ✅ No external dependencies (pure HTML/CSS/JS)

---

## 📁 File Structure

```
hood-justice-timeline/
├── index.html              # Main HTML structure
├── css/
│   └── styles.css         # All styling (editable in CSS editors)
├── js/
│   └── script.js          # All interactivity & data logic
├── data/
│   └── timeline.json      # (Optional) External timeline data
├── README.md              # This file
└── .gitignore             # GitHub configuration
```

---

## 🚀 Quick Start

### Option 1: Local Development

1. **Clone or download this repository:**
   ```bash
   git clone https://github.com/yourusername/hood-justice-timeline.git
   cd hood-justice-timeline
   ```

2. **Open index.html in your browser:**
   - Double-click `index.html`, or
   - Use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (if you have http-server installed)
     npx http-server
     ```
   - Visit `http://localhost:8000` in your browser

### Option 2: GitHub Pages Deployment

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add Hood Justice timeline"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/" (root) folder
   - Save

3. **Your site is now live at:** `https://yourusername.github.io/hood-justice-timeline/`

---

## 🎨 Customization

### Edit Colors

Open `css/styles.css` and modify the CSS variables at the top:

```css
:root {
  /* Regional Colors */
  --color-north-america: #8B6F47;    /* Brown */
  --color-caribbean: #32B8C6;        /* Turquoise */
  --color-mesoamerica: #D4AF37;      /* Gold */
  --color-south-america: #A23B4A;    /* Burgundy */
  --color-arctic: #C0C0C0;           /* Silver */
}
```

### Add Timeline Entries

Edit `js/script.js` and add to `timelineData` array:

```javascript
{
  year: -15000,
  period: "Your Period",
  peoples: "Specific Indigenous Nation",
  location: "Location Name",
  region: "North America",  // Must match existing regions
  event: "Description of the event",
  citations: "[1][2]"
}
```

### Edit Reflection Questions

In `js/script.js`, modify `reflectionQuestions` array:

```javascript
const reflectionQuestions = [
  "Your custom question #1?",
  "Your custom question #2?",
  "Your custom question #3?"
];
```

### Change Title & Subtitle

Edit `index.html`:

```html
<h1>Your Custom Title</h1>
<p class="subtitle">Your custom subtitle</p>
```

### Update Citations

In `index.html`, scroll to the "Citations" section and update the `<li>` items:

```html
<li>[1] Your Source Title - Author/Publisher</li>
<li>[2] Another Source - Author/Publisher</li>
```

---

## 🔧 Using CSS Editors

### CodePen

1. Go to [CodePen.io](https://codepen.io)
2. Create a new Pen
3. Copy:
   - **HTML** from `index.html` → CodePen HTML panel
   - **CSS** from `css/styles.css` → CodePen CSS panel
   - **JavaScript** from `js/script.js` → CodePen JS panel
4. Edit and save!

### JSFiddle

1. Go to [JSFiddle.net](https://jsfiddle.net)
2. Paste code in respective panels
3. Edit and test

---

## 📱 Mobile Responsiveness

The timeline is fully responsive. Test on:
- Desktop (1024px+)
- Tablet (768px–1023px)
- Mobile (320px–767px)

All features work on mobile, including search, filters, and expand/collapse.

---

## 🖨️ Print Version

Click the **"Print Timeline"** button to generate a print-friendly PDF. Print styles are included in `css/styles.css` and automatically hide:
- Search bars
- Tab buttons
- Footer navigation

---

## 🎓 Educational Use

### For Teachers

1. **Share the link** with students
2. **Customize** with your own timeline entries
3. **Use reflection questions** as discussion starters
4. **Print** for classroom handouts

### For Researchers

1. **Fork and modify** for academic projects
2. **Add your own data** to the `timelineData` array
3. **Include citations** for transparency
4. **Version control** with Git for collaborative research

---

## 📚 Data Sources

This timeline is built on rigorous academic research:

- [1] The Bering Land Bridge Theory - National Park Service
- [2] Archeology This Month: Native American Heritage - National Park Service
- [3] 1848 Timeline of Indian and Latin America
- [4] Taíno: Indigenous Caribbeans - Black History Month 2025
- [5] Paleo-Indians in North America - EBSCO Research Starters
- [6] First Americans Timeline - Digital History Project
- [7] Siegel (1991): Migration Research in Saladoid Archaeology
- [8] Escobar (2010): Latin America at a Crossroads
- [9] Gillispie: An Overview of Alaskan Prehistoric Cultures
- [10] NPS: A Survey of Human Migration in Alaska's National Parks
- [11] Pleistocene Epoch - Britannica
- [12] Brown: American Indian History Timeline
- [13] Taínos: Caribbean Indigenous Peoples - ORIAS (UC Berkeley)
- [14] Siegel et al. (2015): Paleoenvironmental Evidence - Eastern Caribbean
- [15] Manning (2021): Decolonial Feminist Theory
- [16] Paleoindian Period - Encyclopedia Virginia

---

## 🚨 Hood Justice Methodology

This timeline centers **Indigenous peoples and nations**, documents **scholarly conflicts** in archaeological data, and reframes the "Historic Age" (A.D. 1492+) as **European invasion and Indigenous resistance**—not neutral migration.

### Key Principles

1. **Indigenous peoples are named and centered** (not just "cultures" or "traditions")
2. **Archaeological conflicts are made visible** (why dates differ, whose knowledge counts)
3. **Colonialism is named** (invasion, enslavement, genocide—not "exploration")
4. **Survival and continuity are documented** (Taíno, Kalinago, and other peoples live today)
5. **Critical reflection is encouraged** (questions about epistemology, power, and knowledge)

---

## 🤝 Contributing

### How to Contribute

1. **Fork the repository**
2. **Create a branch** (`git checkout -b feature/your-contribution`)
3. **Make your edits** (add entries, improve design, fix bugs)
4. **Commit** (`git commit -m "Add: description of contribution"`)
5. **Push** (`git push origin feature/your-contribution`)
6. **Open a Pull Request**

### Types of Contributions

- 📝 **Add new timeline entries** with proper citations
- 🎨 **Improve design** (colors, layout, typography)
- 🐛 **Fix bugs** (broken links, typos, errors)
- 🔍 **Improve accuracy** (correct dates, citations, descriptions)
- ❓ **Add reflection questions** or scholarly conflicts
- 📱 **Improve responsiveness** for mobile/tablet

---

## 🐛 Troubleshooting

### Timeline entries not showing?
- Check `script.js` — make sure `timelineData` is properly formatted
- Open browser console (F12) for error messages
- Ensure `js/script.js` is linked correctly in `index.html`

### Styles not applying?
- Verify `css/styles.css` is linked in `<head>` of `index.html`
- Check browser cache — try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Ensure CSS file path is correct relative to `index.html`

### Search/filters not working?
- Check browser console for JavaScript errors
- Verify region names match exactly in `timelineData`
- Ensure form elements have correct `id` attributes

### GitHub Pages not working?
- Wait 1–2 minutes for GitHub to rebuild
- Check repository Settings → Pages
- Verify `index.html` is in the root folder (not in a subfolder)
- Try accessing `https://yourusername.github.io/hood-justice-timeline/` directly

---

## 📄 License

This project is open-source and available under the **MIT License**. Feel free to use, modify, and share for educational purposes.

---

## ✊🏾 Hood Justice Vision

This timeline is built in service of **Hood Justice**—a framework that:

- Centers **community knowledge** and **lived experience**
- Critiques **institutional power** and **erasure**
- Honors **Indigenous sovereignty** and **resistance**
- Demands **accountability** and **transparency**
- Builds **liberatory pedagogy** for all students

By creating, sharing, and modifying this timeline, you participate in the work of making **truth visible** and **justice real**.

---

## 📞 Contact & Support

- **Have questions?** Open an issue on GitHub
- **Found a bug?** Report it with steps to reproduce
- **Want to collaborate?** Reach out!

---

## 🙏 Acknowledgments

This timeline honors the generations of Indigenous peoples whose descendants keep their stories alive. It is also built on the research of countless archaeologists, anthropologists, and Indigenous scholars who have dedicated their work to centering Indigenous knowledge and challenging colonial narratives.

**Special thanks to:**
- Irving Rouse (Caribbean archaeology pioneer)
- Siegel et al. (paleoenvironmental research)
- The National Park Service (public education)
- Indigenous historians and knowledge keepers who keep these stories alive

---

**Last Updated:** November 2025  
**Version:** 1.0  
**Status:** Active & Open for Contributions ✊🏾

---

## 🔗 Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [HTML/CSS/JavaScript Tutorial](https://www.w3schools.com/)
- [Archaeological Data Standards](https://www.tdar.org/)
- [Indigenous Knowledge Systems](https://www.un.org/en/chronicle/article/towards-paradigm-shift-how-indigenous-knowledge-can-help-us-combat-climate-change)

---

**Made with ❤️ for Indigenous futures and Hood Justice education.**
