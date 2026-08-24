# SahayaOn Landing Page

A modern Next.js landing page for **SahayaOn** — Enterprise IT Service Management platform by KriaSol Technologies LLP.

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 2. Build for Production
```bash
npm run build
npm run start
```

## 📁 Project Structure

```
.
├── app/
│   ├── globals.css      # Custom modern styling & responsive design system
│   ├── layout.js       # Root layout with metadata and fonts
│   └── page.js         # SahayaOn Hero Landing Page component
├── public/
│   ├── dashboard.png   # IT Operations Dashboard preview mockup
│   └── favicon.ico
├── package.json
└── README.md
```

## 🌐 Deploy to Vercel

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - SahayaOn landing page"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Next.js** framework settings.
5. Click **Deploy**.
