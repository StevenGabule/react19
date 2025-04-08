import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App'
import AppRepoFinder from './apps/repo-finder/AppRepoFinder';

const rootElement = document.getElementById('root')!;
createRoot(rootElement).render(
  <StrictMode>
    {/* <App /> */}
    <AppRepoFinder />
  </StrictMode>,
)
