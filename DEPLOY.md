
# Deploying EduSphere to Netlify

Follow these steps to get your University Management System live:

1. **Upload Files**: Drag and drop the project folder into the Netlify "Sites" dashboard or connect your GitHub repository.
2. **Configure Environment Variables**:
   - Go to **Site Configuration** > **Environment variables**.
   - Click **Add a variable**.
   - Key: `API_KEY`
   - Value: `[Your-Gemini-API-Key]`
3. **Build Settings**:
   - If using manual upload: No settings needed (Publish directory is `.`).
   - If using Git: Set the "Publish directory" to the root of your project.

### Why these files were added:
- `_redirects`: Ensures that internal React routes like `/courses` don't result in a 404 when you refresh the page.
- `netlify.toml`: Optimizes headers for security and performance.
- `BrowserRouter`: Upgraded from HashRouter for standard web URLs.
