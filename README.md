# Victor Ose Iyayi - Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Backend Engineer and DevOps Engineer.

## Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Beautiful gradient color scheme
- 🚀 Fast loading - No build tools required
- 💼 Comprehensive experience showcase including AI chatbot integration at Turbham
- 🛠️ Technical skills and certifications
- 📧 Contact information and social links

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox/grid, animations, and gradients
- **JavaScript (Vanilla)** - Interactive features and animations
- **Font Awesome** - Icons

## Running Locally

### Option 1: Python HTTP Server (Recommended - No npm needed!)

```bash
# Navigate to the portfolio folder
cd /Users/macbook/Desktop/portfolio

# Run with Python 3
python3 -m http.server 8000
```

Then open your browser and visit: `http://localhost:8000`

### Option 2: Using the included server script

```bash
# Navigate to the portfolio folder
cd /Users/macbook/Desktop/portfolio

# Run the server script
python3 server.py
```

Then open your browser and visit: `http://localhost:8000`

### Option 3: Simply open the file

Double-click `index.html` to open it directly in your browser!

## Deploying to Render

### Static Site Deployment (Easiest)

1. Push your code to a GitHub repository
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" and select "Static Site"
4. Connect your GitHub repository
5. Set the following:
   - **Build Command:** Leave empty (no build needed!)
   - **Publish Directory:** `.` (current directory)
6. Click "Create Static Site"

Your site will be live in a few minutes!

### Alternative: Web Service with Python

If you prefer using the Python server:

1. Push your code to a GitHub repository
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository
5. Set the following:
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `python server.py`
6. Click "Create Web Service"

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── server.py           # Simple Python HTTP server (optional)
├── requirements.txt    # Python dependencies for Render (optional)
├── render.yaml         # Render configuration (optional)
└── README.md          # This file
```

## Customization

Feel free to customize:
- Colors in `styles.css` (check the `:root` variables)
- Content in `index.html`
- Animations and interactions in `script.js`

## Contact

- **Email:** Iyayi.ose.victor@gmail.com
- **LinkedIn:** [linkedin.com/in/victoriyayi](https://linkedin.com/in/victoriyayi)
- **Location:** Lagos, Nigeria

## License

© 2026 Victor Ose Iyayi. All rights reserved.
