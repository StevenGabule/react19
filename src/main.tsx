import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App'
// import AppRepoFinder from './apps/repo-finder/AppRepoFinder';
// import VoterApp from './apps/voters/VoterApp';
// import TimerTrackingApp from './apps/time-tracking/TimerTrackingApp';
// import TrelloApp from './apps/trello/TrelloApp';
import { EcomApp } from './apps/ecommerce/EcomApp';

const rootElement = document.getElementById('root')!;
createRoot(rootElement).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AppRepoFinder /> */}
    {/* <VoterApp /> */}
    {/* <TimerTrackingApp /> */}
    {/* <TrelloApp /> */}
    <EcomApp />
  </StrictMode>,
)
