# Vercel Deployment Setup Guide

## 🚨 Issue: Products Not Loading After Deployment

If your products aren't loading on Vercel, follow these steps:

---

## Step 1: Set Environment Variable in Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings** tab
3. Click on **Environment Variables** in the left sidebar
4. Add a new variable:
   - **Key:** `NEXT_PUBLIC_API_URL`
   - **Value:** Your production API URL (e.g., `https://your-api.com`)
   - **Environments:** Check all three: Production, Preview, Development

5. Click **Save**

⚠️ **IMPORTANT:** After adding environment variables, you MUST redeploy:
- Go to **Deployments** tab
- Click the three dots (...) on the latest deployment
- Click **Redeploy**

---

## Step 2: Verify Your API Server

Your API server must be:

### ✅ Accessible from the Internet
- **NOT** `http://localhost:5000` (this only works locally)
- **YES** `https://your-api-domain.com` or your server's public IP

### ✅ Using HTTPS (Recommended)
- Use a service like Heroku, Railway, Render, or DigitalOcean
- Or deploy to a VPS with SSL certificate

### ✅ CORS Configured
Your API must allow requests from your Vercel domain:

```javascript
// Express.js example
const cors = require('cors');

app.use(cors({
  origin: [
    'https://your-app.vercel.app',
    'https://your-custom-domain.com',
    'http://localhost:3000' // for local development
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

---

## Step 3: Test Your Setup

### Option A: Use the API Test Page
1. Visit: `https://your-app.vercel.app/api-test`
2. Click "Test API Connection"
3. Check the results

### Option B: Manual Test
Open browser console on your Vercel site and run:

```javascript
fetch(process.env.NEXT_PUBLIC_API_URL + '/products')
  .then(r => r.json())
  .then(console.log)
  .catch(console.error)
```

---

## Common Issues & Solutions

### Issue 1: Environment Variable Not Set
**Symptom:** API URL shows as "NOT SET" or "http://localhost:5000"

**Solution:**
1. Add `NEXT_PUBLIC_API_URL` in Vercel settings
2. Redeploy the application
3. Clear browser cache

### Issue 2: CORS Error
**Symptom:** Console shows "blocked by CORS policy"

**Solution:**
```javascript
// Add to your API server
app.use(cors({
  origin: 'https://your-app.vercel.app',
  credentials: true
}));
```

### Issue 3: API Not Accessible
**Symptom:** "Failed to fetch" or "Network error"

**Solution:**
- Ensure API server is running
- Check if API URL is correct
- Verify API is accessible from internet (not localhost)
- Test API directly: `curl https://your-api.com/products`

### Issue 4: Mixed Content Error
**Symptom:** "Mixed Content" error in console

**Solution:**
- Use HTTPS for your API (not HTTP)
- Vercel uses HTTPS, so your API should too

---

## Deployment Checklist

Before deploying, ensure:

- [ ] API server is deployed and accessible from internet
- [ ] API uses HTTPS (recommended)
- [ ] CORS is configured to allow Vercel domain
- [ ] `NEXT_PUBLIC_API_URL` is set in Vercel
- [ ] Environment variable includes full URL with protocol (https://)
- [ ] Redeployed after setting environment variables
- [ ] Tested using `/api-test` page

---

## Quick Deploy Options for Your API

If you don't have a deployed API yet, here are quick options:

### 1. **Railway** (Recommended)
- Free tier available
- Automatic HTTPS
- Easy deployment from GitHub
- [railway.app](https://railway.app)

### 2. **Render**
- Free tier available
- Automatic HTTPS
- Deploy from GitHub
- [render.com](https://render.com)

### 3. **Heroku**
- Free tier (with limitations)
- Automatic HTTPS
- [heroku.com](https://heroku.com)

### 4. **DigitalOcean App Platform**
- $5/month
- Automatic HTTPS
- [digitalocean.com](https://www.digitalocean.com/products/app-platform)

---

## Example: Complete Setup

### Local Development (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Vercel Production
```
NEXT_PUBLIC_API_URL=https://my-api.railway.app
```

### API Server (Express.js)
```javascript
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: [
    'https://my-app.vercel.app',
    'http://localhost:3000'
  ],
  credentials: true
}));

app.get('/products', (req, res) => {
  // Your products logic
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## Still Having Issues?

1. Check Vercel deployment logs for errors
2. Check browser console for error messages
3. Use the `/api-test` page to diagnose
4. Verify API is responding: `curl https://your-api.com/products`
5. Check that environment variable is set correctly in Vercel

---

## Need Help?

Common error messages and what they mean:

| Error | Meaning | Solution |
|-------|---------|----------|
| `Failed to fetch` | Can't reach API | Check API URL and server status |
| `CORS policy` | CORS not configured | Add Vercel domain to CORS |
| `Mixed Content` | HTTP API on HTTPS site | Use HTTPS for API |
| `404 Not Found` | Wrong API endpoint | Verify API URL is correct |
| `500 Server Error` | API server error | Check API server logs |
