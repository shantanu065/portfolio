# 🚀 Portfolio Update & Deployment Guide

Welcome to your portfolio! This guide explains exactly how to run your site, edit your information, and publish updates to the live internet.

---

## 1️⃣ How to Run the Site Locally (Testing)

Before you push changes to the live internet, always test them on your own computer first.

1. Open a terminal in the `portfolio` folder (e.g., using VS Code terminal).
2. Type the following command and press **Enter**:
   ```bash
   npm run dev
   ```
3. A local server will start. Look for a link like `http://localhost:5173/` and click it to view the live preview of your site on your machine.
4. Any changes you make to the code will **automatically update** in this browser window!

---

## 2️⃣ How to Make Changes

Here is where to go to change specific parts of your website:

### 📝 Changing Text (Projects, Bio, Education)
- All the text data is stored right inside the React files located in your `src/components/` folder.
- **Hero/Bio:** Open `src/components/Hero.jsx`.
- **Projects:** Open `src/components/Projects.jsx` and look for the `projects` array at the top. You can safely change the `title`, `description`, or `tags`.
- **Education/Experience:** Open `src/components/Education.jsx` and find the data array at the top.

### 🖼️ Adding or Changing Images
1. Any image you want to use must be placed in the `public/` folder.
2. In your code, you must reference it by adding `import.meta.env.BASE_URL` in front of the filename so GitHub Pages finds it properly.
    - Example: `image: import.meta.env.BASE_URL + 'new_image.png'`

### 🎥 Changing the Hero Video
- The main background video is stored in `src/assets/cd20-19_hmz.mp4`.
- If you want a new video, place it in `src/assets/`, then open `Hero.jsx` and change the import statement at the top to point to your new file: `import heroVideo from '../assets/your_new_video.mp4';`

---

## 3️⃣ How to Deploy Updates to the Live Site

Once you are happy with how your changes look locally, it is time to deploy them! **You must do both steps.**

### Step A: Save your code to GitHub (Version Control)
Run these commands one by one to save your code to your `main` branch safely:
```bash
git add .
git commit -m "Describe what you updated here"
git push origin main
```

### Step B: Build and Publish to GitHub Pages
This is the command that actually pushes the visual updates to the live site link:
```bash
npm run deploy
```
*Note: This command automatically bundles your code and pushes it to a hidden branch called `gh-pages` which serves your website.*

---

## ⚠️ Important Note About Caching!
When you deploy an update, GitHub Pages can take anywhere from **1 to 5 minutes** to process the changes on their servers.

If you don't see your changes immediately on your live site:
1. Wait a couple of minutes.
2. Do a **Hard Refresh** on your browser to clear old data cache:
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`
