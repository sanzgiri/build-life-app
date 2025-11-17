# Build the Life You Want - 6 Week Program

A web application for the 6-week happiness program based on Arthur Brooks & Oprah Winfrey's framework "Build the Life You Want".

## Features

- **6-Week Structured Program**: Daily lessons covering emotional self-management and the four pillars of happiness
- **Four Pillars Framework**: Family, Friendship, Work, and Faith
- **Daily Reflections**: Journaling and self-assessment for each day
- **Progress Tracking**: Visual progress indicators and statistics
- **Cross-Device Sync**: Your progress persists across browsers and devices using Netlify Blobs
- **Export Data**: Download your journey as JSON

## Setup

### Prerequisites

- Netlify account
- GitHub repository connected to Netlify

### Netlify Configuration

1. **Deploy to Netlify**
   - Connect your GitHub repository
   - Netlify will auto-deploy when you push to main

2. **Add Environment Variables**
   
   Go to your Netlify site settings → Environment variables and add:
   
   - **`SITE_ID`**: Your Netlify site ID (found in Site configuration → General → Site information)
   - **`NETLIFY_TOKEN`**: Personal access token from https://app.netlify.com/user/applications#personal-access-tokens

3. **Install Dependencies**
   ```bash
   npm install
   ```

### Local Development

```bash
npm run dev
```

This starts Netlify Dev which simulates the Netlify environment locally.

## How It Works

### Storage

The app uses **Netlify Blobs** for persistent, cross-device storage:

- User data is identified by a UUID stored in localStorage
- Progress, notes, and assessments sync to Netlify Blobs
- Data persists across browsers and devices using the same UUID

### Program Structure

**Weeks 1-2**: Emotional foundations and introduction to the four pillars
- Metacognition and emotional substitution
- The satisfaction formula
- Overview of Family, Friendship, Work, Faith

**Weeks 3-6**: Deep dives into each pillar
- Week 3: Family relationships
- Week 4: Friendship and connection
- Week 5: Meaningful work
- Week 6: Faith and integration

## Based On

"Build the Life You Want: The Art and Science of Getting Happier" by Arthur C. Brooks and Oprah Winfrey

## Tech Stack

- Vanilla JavaScript (no frameworks)
- Netlify Functions (serverless)
- Netlify Blobs (persistent storage)
- CSS Custom Properties
