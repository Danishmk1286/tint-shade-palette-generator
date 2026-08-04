# 🎨 Tint & Shade Palette Generator

![Repo Size](https://img.shields.io/github/repo-size/Danishmk1286/tint-shade-palette-generator)
![Stars](https://img.shields.io/github/stars/Danishmk1286/tint-shade-palette-generator?style=social)
![License](https://img.shields.io/github/license/Danishmk1286/tint-shade-palette-generator)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![Built With](https://img.shields.io/badge/Built%20with-React%20%2B%20TypeScript-blue)

Generate consistent, production-ready **50–900 tint and shade scales** from a single base colour.

🌐 Live Demo: https://tintandshadesgenerator.com/  
💻 GitHub: https://github.com/Danishmk1286/tint-shade-palette-generator  

---

## ✨ Preview

Tint & Shade Generator Preview

<img width="1032" height="893" alt="image" src="https://github.com/user-attachments/assets/e656e672-d2f3-4ab4-9c75-35af4faf426e" />


---

## 🤔 Why This Tool

Creating colour palettes manually is slow and inconsistent.

Designers need predictable steps.  
Developers need structured output.  
Teams need repeatable systems.

Without structure:
- Inconsistent colour states  
- Weak visual hierarchy  
- Time wasted on trial and error  
- Harder accessibility checks  

This generator creates harmonious, structured scales in seconds.

---

## 🚀 Features

- 🎯 Structured **50–900** tint and shade scales  
- 🎚 Adjustable tint and shade intensity  
- 🎨 Base HEX input with instant preview  
- 📋 One-click copy for swatches  
- 🧩 Copy CSS custom properties  
- 🪙 Export JSON (design token format)  
- 🌙 Dark mode support  
- 📱 Responsive layout  
- 🔒 Fully client-side, no backend  

---

## 👥 Who It’s For

- UI/UX designers building design systems  
- Front-end developers implementing consistent UI states  
- Teams working with design tokens  
- Product teams scaling brand systems  

---

## 🧠 How It Works

- Converts base HEX into HSL  
- Preserves hue for colour harmony  
- Adjusts lightness to create smooth tint (lighter) and shade (darker) steps  
- Outputs production-ready structured scale  

Scale format:

50   100   200   300   400   500 (base)   600   700   800   900

---

## 📦 Output Examples

### CSS Variables

```css
:root {
  --color-primary-50: #f5faff;
  --color-primary-100: #e6f2ff;
  --color-primary-500: #3b82f6;
  --color-primary-900: #1e3a8a;
}
```

### JSON (Design Token Style)

```json
{
  "primary": {
    "50": "#f5faff",
    "100": "#e6f2ff",
    "500": "#3b82f6",
    "900": "#1e3a8a"
  }
}
```

---

## ⚡ Quick Start

### Prerequisites
- Node.js (LTS recommended)

### Installation

```bash
git clone https://github.com/Danishmk1286/tint-shade-palette-generator.git
cd tint-shade-palette-generator
npm install
npm run dev
```

### Build for Production

```bash
npm run build
```

Production files are generated inside the `dist` folder.

---

## 📁 Project Structure

```
src/
  components/    # UI components
  utils/         # Colour generation and export logic
  hooks/         # Custom hooks
  App.tsx
  main.tsx
```

---

## 🔐 Privacy & Performance

- Runs entirely in the browser  
- No data storage  
- No external API calls  
- Static build, zero backend dependency  

---

## 🗺 Roadmap

- [ ] Tailwind config export  
- [ ] Style Dictionary export  
- [ ] Brand preset templates  
- [ ] Unit tests for colour utilities  
- [ ] Figma plugin documentation  

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository  
2. Create a branch:

```bash
git checkout -b feature/your-feature
```

3. Commit changes:

```bash
git commit -m "Add feature: description"
```

4. Push:

```bash
git push origin feature/your-feature
```

5. Open a Pull Request  

---

## 📜 License

MIT License. See the `LICENSE` file for details.

---

## ⭐ Support

If this project helps you, consider giving it a ⭐ on GitHub.
