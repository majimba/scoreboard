# 🏀 Basketball Scorecard

A modern, responsive basketball scorecard web application built with HTML, CSS, and JavaScript. Perfect for tracking basketball games with an intuitive interface and advanced scoring features.

## ✨ Features

### 🎯 Core Functionality
- **Real-time Score Tracking** - Instant score updates for both HOME and GUEST teams
- **Multiple Scoring Options** - +1, +2, and +3 point buttons for realistic basketball scoring
- **Professional Design** - Clean, modern interface matching the provided design mockup

### 🚀 Advanced Features
- **Undo/Redo System** - Correct scoring mistakes with full history tracking
- **Score Reset** - Start fresh games with one-click reset
- **Enhanced Animations** - Smooth button interactions and visual feedback
- **Mobile Optimized** - Responsive design that works perfectly on all devices

### 🎨 Design Highlights
- **Dark Blue Theme** - Professional basketball aesthetic (#1B244A)
- **Digital Score Displays** - Seven-segment style numbers with bright red highlights
- **Interactive Buttons** - Hover effects, animations, and touch-friendly sizing
- **Luminary Basketball Branding** - Custom team branding and styling

## 🖥️ Live Demo

**Coming Soon:** GitHub Pages deployment

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and accessibility
- **CSS3** - Modern styling with flexbox, animations, and responsive design
- **JavaScript (ES6+)** - Advanced functionality and state management
- **Git** - Version control and project management

## 📱 Responsive Design

The scorecard is fully responsive and optimized for:
- 📱 **Mobile phones** (320px+) - Vertical layout with touch-friendly buttons
- 📱 **Tablets** (768px+) - Horizontal layout with optimized spacing
- 💻 **Desktop** (1024px+) - Full design with enhanced animations
- 🖥️ **Large screens** (1440px+) - Optimal viewing experience

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:majimba/scoreboard.git
   cd scoreboard
   ```

2. Open `index.html` in your web browser
3. Start scoring basketball games!

### Usage
1. **Scoring**: Click +1, +2, or +3 buttons to add points to either team
2. **Undo**: Use the orange Undo button (↶) to reverse the last scoring action
3. **Redo**: Use the green Redo button (↷) to restore undone changes
4. **Reset**: Click the red Reset button to start a new game

## 📁 Project Structure

```
scoreboard/
├── index.html          # Main HTML structure
├── index.css           # Styles and responsive design
├── index.js            # JavaScript functionality
├── PRD.md              # Product Requirements Document
├── WORK_PLAN.md        # Development work plan
├── design.png          # Design mockup reference
├── requirements.png    # Project requirements
└── README.md           # This file
```

## 🎯 Key Features Explained

### Score Management
- **History Tracking**: Maintains last 20 scoring actions
- **Smart Undo**: Only allows undoing when history exists
- **State Persistence**: Scores maintained during browser session

### User Experience
- **Visual Feedback**: Score displays scale when updated
- **Button States**: Hover, active, and focus states for accessibility
- **Smooth Transitions**: 300ms animations for professional feel

### Accessibility
- **Keyboard Navigation**: Full keyboard support with focus indicators
- **Screen Reader Friendly**: Semantic HTML structure
- **Touch Optimized**: 44px+ minimum touch targets for mobile

## 🔧 Customization

### Colors
- **Primary Background**: `#1B244A` (Dark Blue)
- **Score Display**: `#080001` (Black) with `#F94F6D` (Bright Red) text
- **Buttons**: `#9AABD8` (Light Blue) borders and text
- **Reset Button**: `#F94F6D` (Bright Red)

### Styling
- **Fonts**: Arial for UI, Courier New for score displays
- **Border Radius**: 5px for score displays, 20px+ for buttons
- **Shadows**: Subtle shadows for depth and modern feel

## 🚀 Future Enhancements

### Planned Features
- [ ] **Period System** - Track quarters/halves
- [ ] **Team Customization** - Editable team names and colors
- [ ] **Game Statistics** - Field goals, free throws, fouls
- [ ] **Export Functionality** - Save game results
- [ ] **Sound Effects** - Basketball sounds for scoring

### Technical Improvements
- [ ] **Local Storage** - Persist scores between sessions
- [ ] **PWA Support** - Installable web app
- [ ] **Offline Functionality** - Work without internet connection

## 🤝 Contributing

This is a personal project for the Scrimba JavaScript course. Feel free to:
- ⭐ **Star the repository** if you find it useful
- 🐛 **Report issues** or bugs
- 💡 **Suggest improvements** via GitHub issues

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Majimba** - Built as part of the Scrimba JavaScript course

## 🙏 Acknowledgments

- **Scrimba** - For the excellent JavaScript course
- **Design Inspiration** - Based on the provided basketball scorecard mockup
- **Open Source Community** - For the tools and technologies used

---

**🏀 Ready to score some baskets? Open the scorecard and start tracking your basketball games!**

*Built with ❤️ and JavaScript*
