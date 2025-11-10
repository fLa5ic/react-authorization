## React Authorization Flow

This project demonstrates a two-step sign-in experience built with React. It showcases how to combine **react-hook-form** for form state management and validation with **@tanstack/react-query** for handling mutations, optimistic UI, and server-state caching.

### Key Features

- Email/password form with live validation and helpful error messages.
- Password field validation that ensures minimum length and checks for both letters and numbers.
- React Query mutation for the primary sign-in flow, including loading and error states.
- Two-factor authentication step backed by a dedicated React Query mutation.
- Prefetching of the authenticated user profile after a successful sign-in.
- React Query Devtools ready for debugging server-state.

### Tech Stack

- React 18
- react-hook-form
- @tanstack/react-query
- Sass modules

### Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm start
   ```

3. The app is available at `http://localhost:3000`.

### Project Structure (Highlights)

- `src/App.js` – application shell, form provider, and mutation wiring.
- `src/api/authApi.js` – mocked API calls for sign-in, 2FA, and user info.
- `src/components/LogInForm` – main login form with email and password inputs.
- `src/components/TwoFactorAuthForm` – verification step with code inputs and timer.
- `src/components/UserInfo` – consumer of the prefetched user query (optional showcase).

### Working with Git Branches

All React Query changes live on the `react-query` branch. To create or switch to it locally:

```bash
git checkout -b react-query
```

After pushing to GitHub:

```bash
git push -u origin react-query
```

### Available Scripts

In addition to `npm start`, the project supports the default Create React App scripts:

- `npm test`
- `npm run build`
- `npm run eject`

### License

This project is provided as-is for learning purposes. Customize and reuse it for your own experiments or interviews.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
