# Waku Template App

Things to change after using this template:

run `bun ./setup.ts name-of-app`

This will update the following:

- `package.json` `"name"`
- `wrangler.jsonc` `"name"`
- `src/pages/_root.tsx` `<title>`

Then finally update this readme with more details!

Get started with:

- `bun i` to install deps
- `bun run dev` to start the development server

## Automated Deployments:

For the GitHub Actions deployment workflow to work, you'll need to do the following:

- Go to Repo settings
- Go to Secrets and Variables
- Go to Actions
- Add a New Repository Secret for each of the following:

- `CLOUDFLARE_ACCOUNT_ID`
  - This can sometimes be found on the right hand sidebar on the account overview Cloudflare Dashboard page
  - Should also be possible to find it under the right hand sidebar on the Workers dashboard page
- `CLOUDFLARE_API_TOKEN`
  - This needs to be generated using the Workers read/write permissions
  - If you go to your profile (top right dropdown in dashboard pages), then go to API Keys, then create a new key, and use the Workers template
