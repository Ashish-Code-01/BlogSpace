# BlogSpace - Modern Next.js Blog Platform

A modern, responsive blog platform built with Next.js 15, TypeScript, and Tailwind CSS. Features server-side rendering, dynamic routing, and real-time search capabilities.

## Features

- 🚀 Built with Next.js 15 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🔍 Real-time search functionality
- 📱 Fully responsive design
- 💾 Local storage for likes and bookmarks
- 🔄 Dynamic routing for blog posts
- ⚡ Server-side rendering
- 💬 Comment system

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- React Icons
- ESLint
- PostCSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blogspace.git
cd blogspace
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── blog/
│   │   └── search/
│   │       └── page.tsx        # Search results page
│   └── blogpost/
│       └── [slug]/
│           └── page.tsx        # Individual blog post page
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── SearchBar.tsx
│   ├── BlogCard.tsx
│   └── Navbar.tsx
├── data/
│   └── blogPosts/             # JSON blog post content
└── utils/
    └── search.ts              # Search functionality
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- React Icons for the icon library

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/blogspace](https://github.com/yourusername/blogspace)