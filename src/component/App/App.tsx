import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Flowers from '../Flowers/Flowers';
import Main from '../Main/Main';
import './App.scss';

function App() {

  const [navigation, setNavigation] = React.useState(false);

  // закрываем навигацию по esc
  React.useEffect(() => {
    if (navigation) {
      const closePopupEsc = (evt) => {
        if (evt.key === 'Escape') {
          document.removeEventListener('keydown', closePopupEsc);
          setNavigation(false);
        }
      }
      document.addEventListener('keydown', closePopupEsc);
    }
  }, [navigation]);

  function openNavigation() {
    setNavigation(true);
  }

  return (
    <div className="App">
      <div className='App__container'>
        <Routes>
          <Route path='/' element={<Main openNavigation={openNavigation} />} />
          <Route path='/flowers' element={<Flowers openNavigation={openNavigation} />} />
        </Routes>
      </div>
      <Footer />
      <Navigation isOpen={navigation} isClose={() => setNavigation(false)} />
    </div>
  );
}

export default App;
