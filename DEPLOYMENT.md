# Deployment Guide

## 🚀 Deploying to Vercel

### Step 1: Prepare Your Code

All API calls now use environment variables. Make sure you've committed all changes:

```bash
git add .
git commit -m "Configure environment variables for deployment"
git push
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings

### Step 3: Configure Environment Variables

In the Vercel project settings, add this environment variable:

**Environment Variable:**
- **Key:** `NEXT_PUBLIC_API_URL`
- **Value:** `https://your-production-api-url.com`
- **Environments:** Production, Preview, Development

**Example:**
```
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

### Step 4: Deploy

Click **"Deploy"** and wait for the build to complete.

---

## 🔧 API Server Requirements

Your API server must:

### 1. Enable CORS
Allow requests from your Vercel domain:

```javascript
// Express.js example
const cors = require('cors');

app.use(cors({
  origin: [
    'https://your-app.vercel.app',
    'http://localhost:3000'
  ],
  credentials: true
}));
```

### 2. Use HTTPS
Production APIs should use HTTPS for security.

### 3. Handle Cookies Properly
If using authentication:

```javascript
res.cookie('auth-token', token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'none', // Required for cross-origin
  maxAge: 86400000 // 24 hours
});
```

---

## 📋 Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Environment variable `NEXT_PUBLIC_API_URL` set in Vercel
- [ ] API server is accessible from the internet
- [ ] CORS configured on API server
- [ ] API uses HTTPS in production
- [ ] Test deployment on Vercel preview URL

---

## 🐛 Troubleshooting

### Products Not Loading

**Problem:** API data not showing after deployment

**Solutions:**
1. Check environment variable is set correctly in Vercel
2. Verify API URL is accessible from the internet
3. Check browser console for CORS errors
4. Ensure API server is running

### CORS Errors

**Problem:** "Access to fetch has been blocked by CORS policy"

**Solution:** Add your Vercel domain to API CORS configuration:
```javascript
origin: ['https://your-app.vercel.app']
```

### Authentication Issues

**Problem:** Login works locally but not in production

**Solutions:**
1. Set cookie `secure: true` in production
2. Set cookie `sameSite: 'none'` for cross-origin
3. Ensure API uses HTTPS

---

## 🔄 Updating Deployment

After making changes:

```bash
git add .
git commit -m "Your changes"
git push
```

Vercel will automatically redeploy your application.

---

## 📊 Monitoring

After deployment, monitor:
- Vercel deployment logs
- API server logs
- Browser console for errors
- Network tab for failed requests

---

## 🌐 Custom Domain (Optional)

To add a custom domain:
1. Go to Vercel project settings
2. Navigate to "Domains"
3. Add your domain
4. Update DNS records as instructed
5. Update CORS configuration with new domain
