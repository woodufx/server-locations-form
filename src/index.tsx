import ReactDOM from 'react-dom/client';
import App from './App';
import { store, storeContext } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <storeContext.Provider value={store}>
    <App />
  </storeContext.Provider>,
);
