# 🚀 Setup Instructions for Vercel Deployment

## Current Issue
Your app is trying to connect to `http://localhost:5000` on Vercel, which doesn't work because:
- Localhost only works on your local machine
- Vercel servers cannot access your local computer

## ✅ Solution: 3 Steps

### Step 1: Deploy Your API Server

Your API server (currently running on localhost:5000) needs to be deployed to the internet.

**Recommended Options:**

#### Option A: Railway (Easiest, Free)
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your API repository
5. Railway will give you a URL like: `https://your-api.railway.app`

#### Option B: Render (Free)
1. Go to https://render.com
2. Sign up and create a new "Web Service"
3. Connect your API repository
4. Deploy and get URL like: `https://your-api.onrender.com`

#### Option C: Heroku
1. Go to https://heroku.com
2. Create new app
3. Deploy your API
4. Get URL like: `https://your-api.herokuapp.com`

---

### Step 2: Set Environment Variable in Vercel

Once your API is deployed and you have the URL:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your project

2. **Navigate to Settings**
   - Click "Settings" tab
   - Click "Environment Variables" in sidebar

3. **Add Environment Variable**
   ```
   Name:  NEXT_PUBLIC_API_URL
   Value: https://your-api.railway.app
   ```
   (Replace with your actual API URL)

4. **Select Environments**
   - ✅ Production
   - ✅ Preview  
   - ✅ Development

5. **Click "Save"**

---

### Step 3: Redeploy Your Vercel App

**IMPORTANT:** Changes only take effect after redeployment!

1. Go to "Deployments" tab
2. Click ⋯ (three dots) on latest deployment
3. Click "Redeploy"
4. Wait for deployment to complete

---

## 🧪 Verify It's Working

After redeployment, visit:
```
https://your-app.vercel.app/api-test
```

This page will show:
- ✅ If environment variable is set correctly
- ✅ If API connection is working
- ❌ Any errors with details

---

## 📝 Quick Reference

### What You Need:
1. ✅ API deployed to internet (not localhost)
2. ✅ API URL (e.g., https://your-api.railway.app)
3. ✅ Environment variable set in Vercel
4. ✅ Vercel app redeployed

### Common Mistakes:
- ❌ Using `http://localhost:5000` in Vercel
- ❌ Forgetting to redeploy after setting env variable
- ❌ Not deploying API server
- ❌ CORS not configured on API

---

## 🆘 Still Need Help?

### Check These:

1. **Is your API deployed?**
   - Test: `curl https://your-api-url.com/products`
   - Should return JSON data

2. **Is environment variable set?**
   - Check Vercel Settings → Environment Variables
   - Should see `NEXT_PUBLIC_API_URL`

3. **Did you redeploy?**
   - After setting env variable, you MUST redeploy

4. **Is CORS configured?**
   ```javascript
   // Add to your API server
   app.use(cors({
     origin: 'https://your-app.vercel.app'
   }));
   ```

---

## 📞 Contact

If you're still stuck:
1. Visit `/api-test` page on your deployed site
2. Take a screenshot of the error
3. Check Vercel deployment logs
4. Check your API server logs

---

## Example: Complete Working Setup

### Local (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Vercel (Environment Variables)
```
NEXT_PUBLIC_API_URL=https://my-api.railway.app
```

### API Server (CORS)
```javascript
const cors = require('cors');
app.use(cors({
  origin: [
    'https://my-app.vercel.app',
    'http://localhost:3000'
  ]
}));
```

That's it! Your app will now work on Vercel. 🎉
