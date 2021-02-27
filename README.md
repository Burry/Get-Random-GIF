# 🔀 Get Random GIF

**Redirect to a random GIF on GIPHY.** Supports all request parameters from the [GIPHY API Random Endpoint](https://developers.giphy.com/docs/api/endpoint#random) as well as an additional [`rendition` parameter](https://developers.giphy.com/docs/optional-settings/#rendition-guide).

[![Random GIF](https://gif.burry.dev)](https://gif.burry.dev)

## 🛠 Development

You'll need [Node.js](https://nodejs.org/) and [Yarn](https://classic.yarnpkg.com/en/docs/install) installed in your local development environment. Run `yarn` inside the repository root to install dependencies before proceeding.

### ⚙️ Environment Variables

Set the following environment variables in [`.env`](.env) and in your production environment:

```sh
GIPHY_API_KEY
GIPHY_TAG
GIPHY_RATING
GIPHY_RENDITION
```

Defaults are set for all but the [API Key](https://support.giphy.com/hc/en-us/articles/360020283431-Request-A-GIPHY-API-Key). See the [GIPHY API documentation](https://developers.giphy.com/docs/api/endpoint#random) for more info. All variables can be overwritten in the URL query string parameters (e.g. append `?tag=cat` to the URL to request a random GIF tagged with a cat).

### [📜 Scripts](package.json)

#### `yarn dev`

Runs the development server. Changes will automatically refresh the page.

#### `yarn build`

Builds the app for production.

#### `yarn start`

Starts the production server.

## 📦 Deploy Your Own

Deploy using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/Burry/Get-Random-GIF/tree/main/&project-name=get-random-gif&repository-name=get-random-gif)

[Documentation](https://nextjs.org/docs/deployment)
