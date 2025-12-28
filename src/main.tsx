import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Amplify } from 'aws-amplify';
import awsExports from "./aws-exports";
import { BrowserRouter } from 'react-router-dom';
import'./color.css';
import'./../src/styles/fonts.css';
import'./applayout.css'
import { LoaderProvider } from './assets/utilits/LoaderContext.tsx';

Amplify.configure({
  ...awsExports,
  DataStore: {
    lazyLoading: false,
  },
  API: {
    GraphQL: {
      endpoint: import.meta.env.VITE_AMPLIFY_GRAPHQL_ENDPOINT,
      region: import.meta.env.VITE_AMPLIFY_REGION,
      defaultAuthMode: "userPool",
    },
  }
});

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <LoaderProvider>
      <App />
    </LoaderProvider>
  </BrowserRouter>
);
