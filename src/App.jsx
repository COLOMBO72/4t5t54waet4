import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Catalog from './Pages/Catalog/Catalog';
import NotFound from './Pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Catalog />,
  },
  {
    path: '/catalog',
    element: <Catalog />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <div className="General">
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
