## Getting Started

To get started with a Next.js application, follow the steps below:

1. Clone this repository onto your local machine.
2. Run `yarn install` to install the necessary dependencies.
3. Run `yarn dev` to start the application in development mode.

## Development Mode

To run the application in development mode, simply run the following command:

```bash
yarn dev
```

This will start the application on http://localhost:3000. You can now begin making changes to the application and see the changes live in the browser.

## Production Mode

To run the application in production mode, first create a production build by running the following command:

```bash
yarn build
```

This will create a production build of the application in the `/.next` directory. You can now start the application in production mode by running the following command:

```bash
yarn start
```

This will start the application in production mode on http://localhost:3000.

## Creating a Build for Deployment

To create a build for deployment, run the following command:

```bash
yarn build
```

This will create a production build of the application in the `/.next` directory. You can now deploy this build to your hosting provider of choice.
