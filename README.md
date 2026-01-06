# Netflix Landing Page Clone 🎬

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A pixel-perfect, responsive replication of the Netflix landing page interface. This project moves beyond basic HTML/CSS by implementing **advanced CSS stacking contexts**, **interactive DOM manipulation**, and **component-based design patterns** without relying on external frameworks.

---

## 📸 Demo & Screenshots

### 🎥 Live Demo
**[🔴 View Live Site](https://mayank25k.github.io/netflix-showcase/)**

### 🖼️ UI Gallery
<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="assets/img/Screenshot 1.png" alt="Desktop Hero Section" width="100%">
</div>
<br>
<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="assets/img/Screenshot 2.png" alt="Trending Now_1" width="45%">
  <img src="assets/img/Screenshot 3.png" alt="Trending Now_2" width="45%">
  <img src="assets/img/Screenshot 4.png" alt="More reasons to join" width="45%">
  <img src="assets/img/Screenshot 5.png" alt="FAQ" width="45%">
  <img src="assets/img/Screenshot 6.png" alt="Footer" width="45%">
</div>

---

## ✨ Key Features

* **Cinematic Visual Layering:** Implemented a complex "Hero" section using advanced CSS background techniques.
    * **Multi-Layer Compositing:** Used `z-index` stacking to layer the background image, a **linear-gradient vignette overlay** (for text readability), and a **radial-gradient curved mask** at the bottom to create the signature Netflix "curve" effect.
* **Smart Accordion Engine:** Built a custom JavaScript controller for the FAQ section.
    * **Exclusive State Logic:** Unlike standard details/summary tags, this logic ensures that opening one question *automatically collapses* any other open question, maintaining a clean UI.
    * **Smooth Height Animation:** Utilizes `scrollHeight` calculation to dynamically animate the height of the answer box, regardless of the text length.
* **Horizontal "Infinity" Carousel:** Designed a scroll-snap-style slider for the "Trending Now" section.
    * **Hidden Scrollbars:** Used `scrollbar-width: none` and `::-webkit-scrollbar { display: none; }` to maintain functionality while keeping the visual design clean.
    * **Smooth Scrolling:** Implemented CSS `scroll-behavior: smooth` for a native app-like feel when navigating movies.
* **Responsive Typography System:** utilizing `rem` units and Media Queries (`@media (max-width: 960px)`) to ensure the massive Hero text scales down proportionally on mobile devices without breaking the layout.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (CSS Variables, Flexbox, Grid).
* **Logic:** Vanilla JavaScript (ES6+).
* **Design System:** CSS Variables (`:root`) for maintaining the strict Netflix color palette (`--primary-red`, `--dark-bg`).

---

## ⚠️ How to Run This Project

While this is a static site, it is best viewed using a local server to ensure all assets load correctly and to simulate a production environment.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/MAYANK25K/netflix-showcase.git](https://github.com/MAYANK25K/netflix-showcase.git)
    ```
2.  **Open in VS Code:**
    ```bash
    code netflix-showcase
    ```
3.  **Launch Server:**
    * Install the **"Live Server"** extension in VS Code.
    * Right-click `index.html` and select **"Open with Live Server"**.

---

## 💡 Lessons Learned

* **The "Stacking Context" Challenge:** I initially struggled with the background image covering the text. I learned how to effectively use `position: absolute` combined with `z-index` to create a 3-layer depth system (Image -> Gradient Overlay -> Text Content).
* **DOM Traversal:** instead of selecting every element individually, I learned to use `this.nextElementSibling` in my JavaScript. This allows the FAQ logic to be "component-agnostic"—I can add 100 more questions, and the code still works without changes.
* **CSS Variables for Maintenance:** I created a `:root` variable system for colors. This made it incredibly easy to tweak the specific "Netflix Red" (`#e50914`) across the entire site instantly, mimicking a real-world design system workflow.
* **Clean Scroll Architecture:** I learned that you don't need heavy libraries for carousels. Simple CSS `overflow-x: scroll` combined with JavaScript scroll buttons provides a much more performant and lightweight experience.

## 🔮 Future Improvements

* **API Integration:** Connect to the TMDB (The Movie Database) API to fetch real-time trending movies instead of hardcoded images.
* **Authentication UI:** Add a login modal that mimics the actual sign-in flow.
* **React Refactor:** *Current Goal:* I plan to rebuild this entire interface using **React and Tailwind CSS** to improve component reusability and manage state more efficiently.
