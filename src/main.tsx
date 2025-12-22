import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Amplify } from 'aws-amplify';
import awsExports from "./aws-exports";

Amplify.configure({
  ...awsExports,
  API:{
    GraphQL: {
      endpoint: import.meta.env.VITE_AMPLIFY_GRAPHQL_ENDPOINT,
      region: import.meta.env.VITE_AMPLIFY_REGION,
      defaultAuthMode: "userPool",
    },
  }
});

createRoot(document.getElementById('root')!).render(
  <App />
);
