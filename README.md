# Repon – Personal Portfolio Frontend

This is the **frontend** of my personal portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It showcases my blogs, projects, and personal information while providing a secure dashboard for content management.

---

## Features

### Public Features (Accessible to All Users)

- **Blog Management**
  - View all blogs and individual blog pages
  - Uses **ISR** (Incremental Static Regeneration) for fast loading and dynamic updates
- **About Me**
  - Static personal information including bio, skills, and work experience
  - Rendered with **SSG** (Static Site Generation) for optimal performance
- **Projects Showcase**
  - Display personal projects with thumbnail, live link, description, features, and technologies
  - Uses **ISR** for dynamic updates without rebuilding the entire site
- **Responsive Design**
  - Fully responsive layout optimized for desktop, tablet, and mobile devices
- **SEO Optimized**
  - Dynamic meta tags with `generateMetadata` for blogs and projects

### Private Features (Portfolio Owner Only)

- **Dashboard**
  - Owner-only access using JWT-based authentication
  - Manage blogs, projects, and other content
- **Rich Text Editor**
  - Create, edit, and format blog/project content
  - Options include bold, italic, links, and images
- **Notifications**
  - User-friendly success/error notifications using `react-hot-toast`

### General Enhancements

- Interactive UI components: cards, hover effects, skeleton loaders
- Lazy-loading of heavy assets
- Accessible and semantic HTML
- Strict error handling and form validation

---

## Tech Stack

- **Frontend:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Notifications:** react-hot-toast
- **Rich Text Editor:** React Quill (for blog/project content)

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/codeWith-Repon/Portfolio-frontend
cd portfolio-frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Create a .env.local file in the root directory:

```env
NODE_ENV=
NEXT_PUBLIC_BASE_API=
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 to view the app.

## Authentication

- JWT-based authentication stored in cookies
- Protected dashboard routes using Next.js middleware
- Only the owner can access admin pages and perform create/update/delete actions

## Next.js Rendering Strategies Used

| Page/Component          | Strategy                     |
| ----------------------- | ---------------------------- |
| All Blogs               | ISR (`revalidate: 60`)       |
| Individual Blog Pages   | ISR + `generateStaticParams` |
| About Me                | SSG                          |
| Projects Listing        | ISR (`revalidate: 3600`)     |
| Individual Project      | ISR + `generateStaticParams` |
| Dashboard / Owner Pages | SSR / `no-store`             |

📞 Contact

- Portfolio Owner: Repon
- Email: repon7253@gmail.com
- Website: 
