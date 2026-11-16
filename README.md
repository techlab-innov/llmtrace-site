# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Project Structure

The project uses Vite as the build tool and is configured for deployment to GitHub Pages with automatic base path handling.

## How can I deploy this project?

### Deploy to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

**Prerequisites:**
1. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

**Automatic Deployment:**
The site will automatically deploy when you push to the `main` branch. The GitHub Actions workflow will:
1. Install dependencies
2. Build the project
3. Deploy to GitHub Pages

Your site will be available at: `https://llmtrace.io/`

**Manual Deployment:**
You can also trigger a deployment manually:
1. Go to the "Actions" tab in your repository
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"

### Deploy with Lovable

Alternatively, you can open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share → Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)


## Marketing identity and canonical URL

The canonical LLMTrace marketing page is `https://setloop.io/llmtrace`. Keep the HTML canonical and Open Graph URL aligned with it. The legal identity in the footer is Setloop, a trading brand of Techlab Innovative Ltd, registered in Scotland under company number SC785625. Current engine images use Elastic License 2.0; public integration components use MIT.

The existing GitHub Actions workflow publishes `dist/` to GitHub Pages. A successful workflow verifies the Pages deployment, but custom-domain routing must also be checked before treating it as proof that the public domains serve the current release.

Both `llmtrace.io` and `setloop.io` use Cloudflare authoritative DNS. Inspect the Cloudflare zone records, Pages custom domains and Worker routes to establish the intended marketing deployment. Public DNS has pointed `llmtrace.setloop.io` at `cname.vercel-dns.com`, but that record alone does not establish the intended hosting configuration or a project connected to this repository. Dashboard and login applications are separate from this marketing canonical.
