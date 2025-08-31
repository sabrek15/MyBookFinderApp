# MyBookFinderApp

A modern web application to search for books using the Open Library API. Built with React and Vite, styled using Bootstrap and custom CSS.

---

## Features

- Search for books by title
- Responsive, mobile-friendly interface
- Paginated search results
- Book cover images and details overlay
- Built with React (Vite), Bootstrap 5, and custom styling

---

## Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

---

### 2. Installation

Clone this repository:

```bash
git clone https://github.com/sabrek15/MyBookFinderApp.git
cd MyBookFinderApp
```

Install dependencies:

```bash
npm install
# or
yarn install
```

---

### 3. Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173/` (or another port if 5173 is occupied).

---

### 4. Building for Production

To build the optimized production bundle:

```bash
npm run build
# or
yarn build
```

You can preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

---

### 5. Project Structure

```
MyBookFinderApp/
├── public/            # Static assets (if any)
├── src/
│   ├── components/    # React components (SearchBar, BookList, BookCard, Pagination, etc.)
│   ├── index.css      # Base styles
│   ├── custom.css     # Custom and Bootstrap overrides
│   ├── App.jsx        # Main React app
│   └── main.jsx       # React entry point
├── index.html         # HTML template (includes Bootstrap CDN)
├── vite.config.js     # Vite config
├── package.json
└── README.md
```

---

## Usage

1. **Search** – Enter a book title and hit "Search".
2. **Browse Results** – Scroll through paginated results with cover images and details.
3. **Book Details** – Hover over a book card for more info.

---

## Technologies Used

- **React** (with functional components and hooks)
- **Vite** (fast front-end build tool)
- **Bootstrap 5** (via CDN in `index.html`)
- **Open Library API** (for fetching book data)

---

## Customization

- **Styling:** Modify `src/custom.css` or `src/index.css` for UI tweaks.
- **API:** The book data is fetched from [Open Library Search API](https://openlibrary.org/dev/docs/api/search).

---

## Troubleshooting

- If you run into issues with dependencies, ensure Node.js is up-to-date (`node -v`).
- For port conflicts, Vite will suggest and use the next available port.
- If you see CORS/network errors, ensure you are connected to the internet (Open Library API is public).


## Credits

- [Open Library](https://openlibrary.org/developers/api) for their free book data API
- Bootstrap for rapid UI development