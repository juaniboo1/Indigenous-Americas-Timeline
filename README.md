# Indigenous Americas Timeline: Transferrable Files

## Overview

This is a **three-file, fully customizable interactive timeline** about Indigenous peoples of the Americas from 2.6 Million B.C. to 1 A.D., grounded in Hood Justice pedagogy.

**Files:**
- `index.html` — HTML structure (timeline entries, layout)
- `styles.css` — All styling (colors, fonts, spacing)
- `script.js` — All interactivity (search, filters, expand/collapse)

---

## Quick Start

### Option 1: Use Locally (Your Computer)

1. **Download all three files** to a folder on your computer
2. **Open `index.html`** in any web browser
3. **Edit freely** using any text editor (VS Code, Sublime Text, Notepad, etc.)
4. **Save and refresh** your browser to see changes

### Option 2: Use on Codepen

1. Go to **https://codepen.io/pen/**
2. Create a new Pen
3. In the **HTML** section, copy-paste contents of `index.html` (skip the `<link rel="stylesheet" href="styles.css">` line)
4. In the **CSS** section, copy-paste contents of `styles.css`
5. In the **JavaScript** section, copy-paste contents of `script.js`
6. **Save & customize**

### Option 3: Use on GitHub

1. Create a new GitHub repository
2. Upload all three files
3. Enable GitHub Pages in repository settings
4. Access at `https://yourusername.github.io/repository-name/`

### Option 4: Self-Host on Your Website

Upload all three files to your web server in the same folder. That's it!

---

## File Structure Explained

### index.html
Contains:
- Page structure (header, navigation, sections)
- Links to external CSS and JavaScript files
- IDs and classes for styling and interactivity
- No styling or logic (clean separation)

**Key sections:**
- `<link rel="stylesheet" href="styles.css">` — Links to CSS
- `<script src="script.js"></script>` — Links to JavaScript
- `id="timelineContainer"` — Where timeline entries render
- `id="caribbeanTimeline"` — Where Caribbean entries render

### styles.css
Contains:
- All colors, fonts, spacing
- Layout rules (flexbox, grid)
- Responsive design
- Print styles

**Customize here:**
- Change colors at the top (`:root` section)
- Modify fonts
- Adjust spacing
- Add dark mode

### script.js
Contains:
- Timeline data (all 80+ entries)
- Reflection questions
- Scholarly conflicts
- Caribbean framework entries
- All filtering and search logic

**Customize here:**
- Add/edit timeline entries
- Change reflection questions
- Modify conflicts
- Update Caribbean migrations

---

## How to Customize

### 1. Change Colors

**File:** `styles.css`

Find the `:root` section at the top:

```css
:root {
  --color-background: var(--color-cream-50);
  --region-north-america: #8B6F47;
  --region-caribbean: #32B8C6;
  /* ... etc */
}
```

Change hex codes:
- `#8B6F47` → Brown (North America)
- `#32B8C6` → Turquoise (Caribbean)
- `#D4AF37` → Gold (Mesoamerica)
- `#A23B4A` → Burgundy (South America)
- `#C0C0C0` → Silver (Arctic)

### 2. Change Title

**File:** `index.html`

Find:
```html
<h1>Indigenous Americas Timeline</h1>
<p class="subtitle">2.6 Million B.C. to 1 A.D. | A Hood Justice Educational Tool</p>
```

Replace with your title.

### 3. Add Timeline Entries

**File:** `script.js`

Find the `timelineData` array. Add entries:

```javascript
const timelineData = [
  // ... existing entries ...
  {
    year: -5000,
    period: "Your Period",
    peoples: "Indigenous Nation Name",
    location: "Specific Location",
    region: "North America",  // Must be: North America, Caribbean, Mesoamerica, South America, Arctic/Subarctic
    event: "Description of the event",
    citations: "[1][2]"  // Reference your sources
  },
];
```

### 4. Edit Reflection Questions

**File:** `script.js`

Find `reflectionQuestions` array and edit:

```javascript
const reflectionQuestions = [
  "Your custom question here?",
  "Another reflection question?",
];
```

### 5. Edit Scholarly Conflicts

**File:** `script.js`

Find `conflicts` array and edit:

```javascript
const conflicts = [
  "Your scholarly conflict here",
  "Another conflict",
];
```

### 6. Change Fonts

**File:** `styles.css`

Find:
```css
--font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

Change to:
```css
--font-family-base: 'Georgia', serif;  /* For serif */
--font-family-base: 'Arial', sans-serif;  /* For sans-serif */
```

### 7. Enable Dark Mode

**File:** `styles.css`

Add at the bottom:

```css
/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #1a1a1a;
    --color-surface: #2a2a2a;
    --color-text: #FFFFFF;
    --color-text-secondary: rgba(255, 255, 255, 0.7);
  }
}
```

---

## Citation Key

**File:** `index.html`

Find the citations section and update:

```html
<li><strong>[1]</strong> Your Source Title - Author/Publisher</li>
<li><strong>[2]</strong> Another Source - Author/Publisher</li>
```

---

## Troubleshooting

### Timeline doesn't load
- Make sure all three files are in the **same folder**
- Check that `index.html` correctly links to `styles.css` and `script.js`
- Open browser console (F12) to check for errors

### Colors don't change
- Make sure you're editing `styles.css` (not `index.html`)
- Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Refresh the page

### Timeline entries don't appear
- Make sure the `timelineData` array in `script.js` is properly formatted
- Check that `region` values match: "North America", "Caribbean", "Mesoamerica", "South America", or "Arctic/Subarctic"
- Verify proper JSON syntax (commas, brackets, quotes)

### Search/filters not working
- Make sure `script.js` is loading (check browser console)
- Verify that HTML IDs match JavaScript references

---

## Uploading to Codepen

1. Create account at https://codepen.io
2. Click "Create" → "Pen"
3. Copy `index.html` content to **HTML** tab (without `<html>`, `<head>`, `<body>` tags)
4. Copy `styles.css` content to **CSS** tab
5. Copy `script.js` content to **JavaScript** tab
6. Click "Save"
7. Share your Pen link

---

## Uploading to GitHub

1. Create GitHub account at https://github.com
2. Create new repository called `indigenous-timeline`
3. Upload all three files
4. Go to repository **Settings** → **Pages**
5. Set **Source** to "main branch"
6. Your site will be live at: `https://yourusername.github.io/indigenous-timeline/`

---

## Best Practices

✅ **Do:**
- Keep all three files in the same folder
- Use consistent naming conventions
- Test changes in your browser after saving
- Keep backups of original files
- Use a text editor with syntax highlighting (VS Code recommended)

❌ **Don't:**
- Delete or rename files without updating links
- Mix different versions of files
- Edit directly on a web server without testing locally first
- Change the script structure unless you know JavaScript

---

## Advanced Customizations

### Add a Timeline Filter by Date Range

**File:** `script.js`

Modify the `filterTimeline()` function to add date filtering.

### Change Layout to Vertical Timeline

**File:** `styles.css`

Modify `.timeline-container` to use `flex-direction: column;`

### Add Dark Mode Toggle Button

**File:** `index.html`

Add button before `<div class="container">`

**File:** `script.js`

Add toggle functionality

---

## Support & Questions

For help customizing:
1. Check the comments in each file
2. Refer to CSS/JavaScript documentation
3. Test one change at a time
4. Use browser developer tools (F12) to debug

---

## License & Attribution

This timeline is based on research from:
- U.S. National Park Service
- Academic journals on Caribbean and Mesoamerican archaeology
- Indigenous knowledge systems and oral histories

Use and customize freely for educational and community purposes. ✊🏾

---

## Hood Justice Reminder

This timeline centers Indigenous peoples and nations. Use it to:
- Challenge erasure narratives
- Highlight archaeological conflicts and debates
- Honor Indigenous sovereignty and continuity
- Support decolonial pedagogy in your classroom or community

**"Time immemorial. We have always been here. We are still here."**