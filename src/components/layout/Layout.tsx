import 'tailwindcss/tailwind.css';
import Footer from './Footer';
import Header from './Header';
import { M } from 'vite/dist/node/types.d-aGj9QkWt';
import Main from './Main';

const Layout = () => {
  return (
    <div class="app bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col justify-between">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
