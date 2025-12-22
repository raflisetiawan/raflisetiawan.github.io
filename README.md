# Rafli Setiawan - Portfolio

[![Nuxt UI](https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://raflisetiawan.github.io/Portfolio/)

Personal portfolio website built with Nuxt 3 and Nuxt UI, featuring a modern "Cosmic Gradient" design with glassmorphism effects.

🔗 **Live Demo**: [raflisetiawan.github.io/Portfolio](https://raflisetiawan.github.io/Portfolio/)

## ✨ Features

- 🎨 **Cosmic Gradient Theme** - Vibrant violet/purple color palette
- 🌟 **Glassmorphism Effects** - Modern glass-like UI elements
- 🎭 **Animated Background** - Floating gradient blobs
- 📱 **Fully Responsive** - Works on all devices
- 🌙 **Dark/Light Mode** - Smooth theme switching
- ⚡ **Fast Performance** - Static site generation
- 🔍 **SEO Optimized** - Meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/)
- **UI Library**: [Nuxt UI](https://ui.nuxt.com/)
- **Styling**: Tailwind CSS
- **Content**: [@nuxt/content](https://content.nuxt.com/)
- **Animations**: [Motion-V](https://motion.vueuse.org/)
- **Deployment**: GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/raflisetiawan/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Generate static site
npm run generate

# Preview production build
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── components/     # Vue components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── assets/css/     # Global styles
├── content/            # Markdown/YAML content
│   ├── index.yml       # Homepage content
│   ├── about.yml       # About page
│   ├── projects/       # Project entries
│   └── blog/           # Blog posts
├── public/             # Static assets
└── nuxt.config.ts      # Nuxt configuration
```

## 📝 Customization

### Update Personal Info

Edit `content/index.yml` for homepage content:
- Name and title
- About section
- Work experience
- FAQ

Edit `app/app.config.ts` for:
- Profile picture
- Email and contact links
- Social media links

### Add Projects

Create new `.yml` files in `content/projects/`:

```yaml
title: Project Name
description: Project description
image: https://example.com/image.jpg
url: https://project-url.com
tags: ["Tag1", "Tag2"]
date: "2024"
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Rafli Setiawan**
- GitHub: [@raflisetiawan](https://github.com/raflisetiawan)
- LinkedIn: [rafli-setiawan](https://linkedin.com/in/rafli-setiawan-820b62227)
- Email: raflisetiawan006@mail.com

---

⭐ If you like this project, please give it a star!
