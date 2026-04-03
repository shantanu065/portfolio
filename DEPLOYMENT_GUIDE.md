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

---

## 4️⃣ How to Undo a Previous Push and Force Update (Linux Commands)

If you made a mistake on your last commit/push and want to "delete" that old push to replace it with a new one entirely, use these Linux terminal commands:

1. **Undo the last commit** (this moves the files back to your working directory without losing any typed data):
   ```bash
   git reset --soft HEAD~1
   ```
   *(If you want to completely discard your changes and go exactly back to the previous version, use `git reset --hard HEAD~1` instead)*

2. **Make your new changes** and save your files.

3. **Add and commit the new corrected update**:
   ```bash
   git add .
   git commit -m "Your new corrected update message"
   ```

4. **Force push to GitHub** (this overrides and deletes the old push from GitHub, replacing it with the new one):
   ```bash
   git push origin main --force
   ```

5. **Redeploy the live site**:
   ```bash
   npm run deploy
   ```

---

## 5️⃣ How to Delete a File/Folder Already Pushed to GitHub

If you accidentally pushed a file or folder (like `public/`) to GitHub and want to remove it from GitHub **but keep it on your computer**, follow these Linux/Terminal steps:

1. **Remove a File from Git tracking**:
   ```bash
   git rm --cached filename.ext
   ```
   *(Replace `filename.ext` with your actual file name)*

2. **Remove an entire Folder from Git tracking**:
   ```bash
   git rm -r --cached foldername/
   ```

3. **Ignore the file** so it never gets pushed again:
   Open your `.gitignore` file and type the name of the file/folder on a new line.

4. **Commit and Push the deletion**:
   ```bash
   git add .
   git commit -m "Removed file/folder from git tracking"
   git push origin main
   ```

---

## 🚀 One-Click Automated Deployment (Linux / macOS)

If you are using Linux instead of Windows, here are the pure Linux bash commands to automatically deploy your project in one go using a script.

1. **Create a file** named `deploy.sh` in your project folder.
2. **Add this exact code** inside it:
   ```bash
   #!/bin/bash
   echo "Adding changes to git..."
   git add .

   echo "Committing changes..."
   git commit -m "Automated update via linux script"

   echo "Pushing to GitHub main branch..."
   git push origin main

   echo "Deploying to live website..."
   npm run deploy

   echo "Deployment complete! Check your live site in a few minutes."
   ```
3. **Make the script executable** (run this once in your Linux terminal):
   ```bash
   chmod +x deploy.sh
   ```
4. **Run it** every time you want to push & deploy updates:
   ```bash
   ./deploy.sh
   ```
