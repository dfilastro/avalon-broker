# Avalon Blog

A modern blog application built with Next.js 15, TypeScript, and Tailwind CSS. This project demonstrates best practices in React development, including server-side rendering, static site generation, and responsive design.

## Features

- 📱 Responsive design that works on all devices
- 🔍 Real-time post search functionality
- ♿ Accessibility features including keyboard navigation
- 🎨 Modern UI with smooth animations
- 📊 Reading time estimation
- 👤 User profiles with avatar support
- 💬 Post comments system
- 🔄 Infinite scroll for posts

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Bricolage Grotesque
- **API**: JSONPlaceholder (for demo data)
- **Images**: Avatar API integration

## Technical Decisions

### Server-Side Rendering (SSR) and Static Site Generation (SSG)

1. **Hybrid Rendering Approach**

   - Used SSG for static content (posts, user profiles) with `generateStaticParams`
   - Implemented revalidation every hour (`revalidate: 3600`) to keep content fresh
   - Benefits:
     - Fast initial page load
     - Better SEO
     - Reduced server load
     - Improved user experience

2. **Project Structure**

   ```
   src/
   ├── app/                  # Next.js 15 App Router
   │   ├── components/       # Reusable components
   │   ├── post/             # Post-related pages
   │   ├── user/             # User-related pages
   │   ├── globals.css       # Global styles
   │   └── layout.tsx        # Root layout
   ├── lib/
   │   ├── types.ts          # TypeScript interfaces
   │   └── utils.ts          # Utility functions
   ```

   Benefits:

   - Clear separation of concerns
   - Easy to maintain and scale
   - Type safety with centralized types
   - Reusable components and utilities

3. **TypeScript Implementation**

   - Centralized types in `lib/types.ts`
   - Strict type checking enabled
   - Benefits:
     - Better code quality
     - Improved developer experience
     - Easier refactoring
     - Better documentation

4. **Error Handling**

   - Implemented error handling using Next.js `error.tsx` at the app level
   - Added error checks in API requests to throw appropriate errors
   - Benefits:
     - Graceful error recovery
     - Better user experience during errors
     - Clear error messages for debugging
     - Improved error tracking

5. **Accessibility Features**
   - Keyboard navigation support
   - ARIA labels
   - Focus management
   - Semantic HTML
   - Benefits:
     - Better user experience
     - Compliance with accessibility standards
     - Improved SEO

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dfilastro/avalon-broker.git
cd avalon-blog
```

2. Install dependencies:

```bash
npm i
# or
yarn
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key Features Implementation

### Infinite Scroll

The posts list implements infinite scroll using the Intersection Observer API, loading more posts as the user scrolls down.

### Search Functionality

Real-time search that filters posts based on title and content, with keyboard navigation support.

### Accessibility

- Keyboard navigation support
- ARIA labels
- Focus management
- Semantic HTML structure

### Performance Optimizations

- Image optimization with Next.js Image component
- Font optimization with next/font
- Proper caching strategies
- Efficient data fetching

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [Avatar API](https://avatar.iran.liara.run/)
