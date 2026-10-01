# "Coming Soon" Landing Page with React + Vite

## Description
This repository provides a fast template to create a "Coming Soon" landing page using **React** and **Vite**. Perfect for launching your website before its official release, customizable via environment variables.

## Prerequisites
- **Node.js** >= 18  
- **npm** >= 9  

## Quick Installation
```bash
# Clone the repository
git clone <REPOSITORY_URL>
cd <PROJECT_NAME>

# Install dependencies
npm install
```

## Configuration

Set up your landing page by editing the .env file in the project root:

```env
VITE_APP_NAME="Site Name"
VITE_APP_WEBSITE="site.com"
VITE_APP_EMAIL="example@email.com"
VITE_APP_PHONE="+34 666 666 666"
VITE_APP_ADDRESS="Street Dignissim Magna 53, 08273, Spain"
VITE_APP_TITLE="Coming Soon"
VITE_APP_DESCRIPTION="Our website will launch soon. Join the waiting list to test the beta before it goes public."
VITE_APP_SHOW_LOGO=true
VITE_APP_URL_LOGO="/logo.webp"
VITE_APP_SOCIAL_INSTAGRAM="https://instagram.com/example"
VITE_APP_SOCIAL_FACEBOOK="https://facebook.com/example"
VITE_APP_SOCIAL_TWITTER="https://x.com/example"
VITE_APP_COLOR="rgb(236 72 153)"
VITE_APP_TEMPLATE="modern" # options: default, minimal, modern, beauty, parallax
```

Upload your logo to the `public` folder if you plan to display it.

## Development

```bash
# Start development server
npm run dev
```
Open your browser at the URL shown in the terminal. Changes are reflected live.

## Production Build
```bash
# Generate a production-ready bundle
npm run build
```
This creates optimized assets in the dist/ folder ready for deployment.

## Project Structure

```
├─ public/ -> static files (logo.webp).
├─ src/
│  ├─ components/ -> shared pieces (Logo, ContactList, SocialLinks, Copyright).
│  ├─ templates/ -> one file per template, plus index.js registry.
│  ├─ App.jsx -> picks the template and sets the brand color.
│  ├─ config.js -> reads and normalizes every VITE_APP_* variable.
│  ├─ Icons.jsx
│  └─ main.jsx
├─ eslint.config.js
├─ index.html
└─ vite.config.js
```

## Configuration in code

`src/config.js` is the only place that reads `import.meta.env`. It converts `VITE_APP_SHOW_LOGO` to a boolean (the logo is exposed as `logoUrl`, only when enabled), falls back to a default color and groups the social links in a `socials` array. Each template receives that object as props.

`VITE_APP_COLOR` is exposed to Tailwind as the `brand` color, so templates use classes such as `text-brand`, `bg-brand` and `bg-brand/10`. Any valid CSS color works.

## Available Templates
- `default`
- `minimal`
- `modern`
- `beauty`
- `parallax`

Each template supports full customization with logo, colors, description, and social links.

To add a template, create it in `src/templates/` and register it in `src/templates/index.js`.

## Linting
```bash
npm run lint
```

## Contributing

Contributions are welcome. Open an issue or PR to collaborate.

## License

Open license. Check LICENSE for details.