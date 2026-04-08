# 🛒 Ecommerce Web (Furni)

<p align="center">
  <img src="main-pic.png" alt="Main view" width="420" />
  <img src="mobile-view.png" alt="Mobile view" width="420" />
</p>

A responsive multi-page e-commerce website built with **vanilla JavaScript**, HTML5, and CSS3. This project is a strong example of a framework-free shopping experience with reusable components and data-driven content rendering.

## 🚀 Live Demo
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open%20Store-2ea44f?style=for-the-badge&logo=netlify)](https://sofastorewebsite321.netlify.app/)

## 📌 Project Overview
This e-commerce template is ideal for front-end developers, UI/UX designers, and startups that need a fast, lightweight online store.

## 🔍 SEO Keywords
e-commerce website, shopping template, product catalog, responsive storefront, JavaScript e-commerce, vanilla JS web app.

## ✨ Features

- **Dynamic Content Rendering**: Products, services, blogs, and testimonials are injected dynamically via JavaScript, keeping the HTML clean.
- **Component Architecture**: Reusable `navbar` and `footer` components are loaded asynchronously, ensuring consistency across all pages.
- **Smart Routing Logic**: The application detects the current page (e.g., Home vs. Shop) and adapts content display accordingly—showing featured items on the homepage and full catalogs on dedicated pages.
- **Data-Driven UI**: All content is managed through a central `json.js` file, making updates and maintenance effortless.
- **Responsive Design**: Optimized for a seamless shopping experience on desktop and mobile devices.

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and templates.
- **CSS3**: Custom styling and responsive layouts.
- **JavaScript (ES6+)**:
  - `fetch` API for asynchronous component loading.
  - DOM manipulation for rendering templates.
  - ES6 Modules for organized data management.
- **JSON**: Structured data storage for products, team members, and blogs.

## 📂 Project Structure

```text
Ecommerce web/
├── components/
│   ├── navbar.html      # Shared navigation header
│   └── footer.html      # Shared footer section
├── js/
│   ├── sync.js          # Core logic for rendering and component loading
│   └── json.js          # Data source (Products, Services, Testimonials, etc.)
├── index.html           # Homepage (Featured content)
├── shop.html            # Full product listing
├── services.html        # Services page
├── blog.html            # Blog posts
└── README.md            # Project documentation
```

## 🚀 Getting Started

Follow these steps to run the project locally:

1.  **Clone the Repository**
    ```bash
    git clone <your-repo-url>
    ```
2.  **Navigate to the Project Directory**
    ```bash
    cd "Ecommerce web"
    ```
3.  **Launch the Project**
    ⚠️ **Note:** Because this project uses ES6 Modules (`import`/`export`) and the `fetch` API to load components, simply opening the HTML file will result in CORS errors. You must use a local server.

    - **VS Code**: Install the **Live Server** extension, right-click `index.html`, and select "Open with Live Server".
    - **Python**: Run `python -m http.server` in your terminal.
    - **Node.js**: Use `npx http-server`.

## 📝 How It Works

### Component Loader
The `sync.js` file utilizes an asynchronous `loadComponent` function to fetch HTML fragments (like the header and footer) and inject them into the DOM. This eliminates the need to copy-paste navigation code into every HTML file.

### Dynamic Templates
Instead of hardcoding items, the site uses HTML `<template>` tags. JavaScript iterates through the data arrays (imported from `json.js`), clones the template, populates it with data (images, text, prices), and appends it to the page.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---
*Happy Coding! 💻✨*
