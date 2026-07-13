# AI Tools & Resources Hub

A responsive, mobile-first web application that curates AI/ML tools, courses, and learning roadmaps for students and developers. The platform provides free access to world-class AI resources with an intuitive interface and real-time search/filter functionality.

## Description

This project is a single-page web application designed to help students in Pakistan and developing countries discover and access curated AI/ML resources at zero cost. It features a clean, modern design with responsive layouts that adapt seamlessly across mobile, tablet, and desktop devices.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints at 768px (tablet) and 1024px (desktop)
- **Dynamic Search**: Real-time search functionality to find resources by title
- **Category Filtering**: Filter resources by type (All, Tools, Courses, Roadmaps)
- **Interactive Navigation**: Collapsible hamburger menu for mobile devices
- **Resource Cards**: Six curated AI/ML resources including:
  - AI Tools (ChatGPT/Claude, Hugging Face)
  - Courses (fast.ai, Andrew Ng's ML Specialization)
  - Learning Roadmaps (AI/ML Learning Path, Agentic AI Projects)
- **Smooth Animations**: Hover effects and transitions for enhanced user experience
- **Accessibility**: ARIA labels and semantic HTML for screen reader compatibility
- **Sticky Navigation**: Fixed header that remains visible while scrolling

## Tech Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and CSS Variables
  - Custom color palette (Mocha Mousse, Ethereal Blue, Moonlit Grey)
  - Fluid typography using `clamp()`
  - Mobile-first responsive design with media queries
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity
  - DOM manipulation
  - Event listeners
  - Dynamic filtering and search logic

## Project Structure

```
P1.frontend/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── script.js           # Interactive functionality (menu, search, filters)
├── LICENSE             # MIT License
└── README.md           # Project documentation
```

## Installation & Setup

This is a static web application that requires no build process or dependencies. Follow these steps to run it locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/sohaib25225-gif/Responsive-AI-Tools-Resources-Hub.git
   cd P1.frontend
   ```

2. **Open in browser**

   Simply open the `index.html` file in any modern web browser:

   - **Option A**: Double-click `index.html` in your file explorer
   - **Option B**: Right-click `index.html` → Open with → Your preferred browser
   - **Option C**: Use a local development server (optional):
     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js (if http-server is installed)
     npx http-server
     ```
     Then navigate to `http://localhost:8000` in your browser

3. **No dependencies required**: This project uses pure HTML, CSS, and JavaScript with no external libraries or frameworks.

## Usage

Once the application is running in your browser:

1. **Navigation**:
   - Click on navigation links (Home, Resources, About, Contact) to scroll to sections
   - On mobile devices, tap the hamburger menu icon to toggle the navigation menu

2. **Search Resources**:
   - Type keywords into the search bar to filter resources by title
   - Results update in real-time as you type

3. **Filter by Category**:
   - Click category buttons (All, Tools, Courses, Roadmaps) to filter resources
   - Active filters are highlighted with the primary color

4. **Explore Resources**:
   - Browse resource cards displaying AI tools, courses, and roadmaps
   - Hover over cards to see subtle animation effects

5. **Contact**:
   - Scroll to the footer to find contact information

## Browser Compatibility

This application works on all modern browsers including:
- Chrome/Edge (version 88+)
- Firefox (version 78+)
- Safari (version 14+)
- Opera (version 74+)

## Author

**Sohaib Ahmad**

- **GitHub**: [github.com/sohaib25225-gif](https://github.com/sohaib25225-gif)
- **LinkedIn**: [linkedin.com/in/sohaib-ahmad-181478367](https://www.linkedin.com/in/sohaib-ahmad-181478367)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*© 2026 AI Employee Dev. Built to democratize access to AI/ML education.*
