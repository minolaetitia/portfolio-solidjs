/* @refresh reload */
import './styles/tailwind.scss';
import './styles/main.scss';
import { render } from 'solid-js/web';

// import './index.css';
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

// Ajouter la classe 'dark' au chargement de la page
if (typeof window !== 'undefined') {
  document.documentElement.classList.add('dark'); // Active le dark mode par défaut
}

render(() => <App />, root!);
