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

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/avalon-blog.git
cd avalon-blog
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── components/     # Reusable components
│   ├── post/          # Post-related pages
│   ├── user/          # User-related pages
│   ├── globals.css    # Global styles
│   └── layout.tsx     # Root layout
├── lib/
│   ├── types.ts       # TypeScript interfaces
│   └── utils.ts       # Utility functions
```

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
