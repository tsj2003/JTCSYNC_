# Netlify Deployment Guide

## Prerequisites

1. **Convex Production Deployment**: Deploy your Convex functions to production
2. **Environment Variables**: Set up all required environment variables in Netlify

## Step 1: Deploy Convex to Production

```bash
# Deploy to production
npx convex deploy --prod

# This will give you a production URL like:
# https://your-production-deployment.convex.cloud
```

## Step 2: Set Environment Variables in Netlify

In your Netlify dashboard, go to **Site settings > Environment variables** and add:

### Required Environment Variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key
CLERK_WEBHOOK_SECRET=whsec_your_webhook_secret

# Convex Database
NEXT_PUBLIC_CONVEX_URL=https://your-production-deployment.convex.cloud

# Stream Video API
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key
```

### Important Notes:

1. **Use Production Convex URL**: Make sure `NEXT_PUBLIC_CONVEX_URL` points to your production Convex deployment, not the development one.

2. **Clerk Webhook**: Set up the webhook in Clerk dashboard pointing to:
   ```
   https://your-netlify-site.netlify.app/convex/clerk-webhook
   ```

3. **Environment Variable Names**: All environment variables starting with `NEXT_PUBLIC_` will be available in the browser.

## Step 3: Deploy to Netlify

1. **Connect your repository** to Netlify
2. **Set build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Deploy**

## Step 4: Verify Deployment

1. **Check Convex Functions**: Ensure all Convex functions are deployed to production
2. **Test Authentication**: Verify Clerk authentication works
3. **Test Meeting Creation**: Try creating a new meeting
4. **Check Console**: Look for any errors in browser console

## Common Issues and Solutions

### Issue: "Start Meeting" button not working
**Solution**: 
- Check if `NEXT_PUBLIC_CONVEX_URL` is set correctly
- Verify Convex functions are deployed to production
- Check browser console for errors

### Issue: Authentication not working
**Solution**:
- Verify Clerk environment variables are set correctly
- Check if Clerk webhook is configured properly
- Ensure domain is added to Clerk allowed origins

### Issue: Video calls not working
**Solution**:
- Verify Stream API keys are set correctly
- Check if Stream domain is configured for your Netlify domain

### Issue: Build failures
**Solution**:
- Check if all dependencies are installed
- Verify Node.js version is 18+
- Check build logs for specific errors

## Testing Checklist

- [ ] Authentication works (sign in/sign up)
- [ ] User roles are assigned correctly
- [ ] Meeting creation works
- [ ] Meeting joining works
- [ ] Video calls function properly
- [ ] Code editor works
- [ ] Meeting links are generated correctly
- [ ] All environment variables are set

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify all environment variables are set
3. Ensure Convex functions are deployed to production
4. Check Netlify function logs
