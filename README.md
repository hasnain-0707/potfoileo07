# Rao Hasnain - Portfolio Website

A professional portfolio website built with HTML, CSS, JavaScript, and Bootstrap.

## 📁 Project Structure

```
portfolio/
├── public/                          # All static files served to clients
│   ├── index.html                  # Home page (main portfolio)
│   ├── potifoile2about.html        # About page
│   ├── potifoile2contant.html      # Contact & Projects page
│   ├── potifoile2skill.html        # Skills page
│   ├── css/                        # Stylesheets
│   │   ├── bootstrap.min.css       # Bootstrap framework
│   │   └── style.css               # Custom styles
│   ├── js/                         # JavaScript files
│   │   └── main.js                 # Main JavaScript (formerly java.js)
│   ├── images/                     # Image assets
│   │   └── pick/                   # Portfolio images
│   └── bootstrap-icons/            # Icon library
│       └── bootstrap-icons.min.css # Icon styles
├── server.js                        # Node.js server file
├── package.json                     # Project configuration
└── README.md                        # This file

```

## 🚀 How to Run

### Prerequisites
- Node.js v12 or higher installed

### Steps

1. **Navigate to project directory:**
   ```bash
   cd "f:\rao hasnain\potfoileo"
   ```

2. **Start the server:**
   ```bash
   node server.js
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Server Output
You should see:
```
╔════════════════════════════════════════════════════╗
║   🚀 Portfolio Server Running Successfully!        ║
║                                                    ║
║   📍 Server Address:                               ║
║      http://localhost:3000                         ║
║                                                    ║
║   📁 Serving from: ./public                        ║
║   ⌚ Waiting for connections...                    ║
║   Press Ctrl+C to stop the server                 ║
╚════════════════════════════════════════════════════╝
```

## 📄 Pages

- **Home** (`/`) - Hero section with introduction
- **About** (`/about`) - About me section with skills
- **Skills** (`/skills`) - Technical skills with proficiency levels
- **Projects** (`/projects`) - Portfolio projects showcase
- **Contact** (`/contact`) - Contact form and information

## 🎨 Features

- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Dark/Light theme toggle
- ✅ Bootstrap Icons integration
- ✅ Professional UI with animations
- ✅ Smooth scrolling and transitions
- ✅ Optimized image loading
- ✅ Clean file structure

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Framework:** Bootstrap 5
- **Icons:** Bootstrap Icons
- **Backend:** Node.js (HTTP)
- **Server:** Built-in Node.js HTTP module (no external dependencies)

## 📝 Notes

- All static files are served from the `public/` directory
- Server runs on port 3000 by default (can be changed with PORT environment variable)
- No external npm dependencies required - uses only Node.js built-in modules

## 🚨 Troubleshooting

### Port Already in Use
If you see "EADDRINUSE" error:
```bash
# Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
PORT=3001 node server.js
```

### Images Not Loading
Check that all image files are in `public/images/pick/` directory

## 📧 Contact
- Email: hasnanrao50@gmail.com
- Phone: +92 341 35008388
- Location: Bhakkar, Pakistan

---

**Created by:** Rao Hasnain  
**Last Updated:** May 2026
