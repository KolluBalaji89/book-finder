# 📚 Book Finder – Problem Solving with ChatGPT

## 🔗 GitHub Repository:
[https://github.com/KolluBalaji89/book-finder](https://github.com/KolluBalaji89/book-finder)

---

## 🎯 Project Goal
To build a responsive **Book Finder** web application using **React** and the **Open Library API**, with a clean UI, fallback handling, and no external CSS frameworks.

---

## 🧠 Problem-Solving Process with ChatGPT

### ❓ Challenges Faced:
- Creating a modern, responsive layout using **plain CSS**
- Handling API responses including:
  - Books with no cover image
  - Searches with no results
- Styling for:
  - Responsive grids
  - Input fields and buttons with hover/focus effects
- Fixing a bug where I used an invalid selector `container` instead of `.container`

---

### ✅ ChatGPT Helped Me:
- Correct CSS selector mistake (`container` → `.container`)
- Improve color contrast and add hover transitions
- Use `auto-fill` and `minmax()` for a responsive book grid
- Conditionally render loading, no-result, and result states in JSX
- Use fallback UI for books with missing cover images
- Recommended accessibility and responsive design improvements
- Suggested how to document this problem-solving process

---

## 📘 Example Code Improved via ChatGPT:
### ✅ Before:
```css
container {
  max-width: 1000px;
}
