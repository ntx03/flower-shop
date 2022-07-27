import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Flowers from '../Flowers/Flowers';
import Main from '../Main/Main';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux'
import Basket from '../Basket/Basket';
import BasketOrderRegistration from '../BasketOrderRegistration/BasketOrderRagistration';

function App() {

  const navigation: boolean = useSelector(state => state['navigation']);

  const dispatch = useDispatch();

  // закрываем навигацию по esc
  React.useEffect(() => {
    if (navigation) {
      const closePopupEsc = (evt) => {
        if (evt.key === 'Escape') {
          document.removeEventListener('keydown', closePopupEsc);
          dispatch({ type: 'navigation_false', payload: false })
        }
      }
      document.addEventListener('keydown', closePopupEsc);
    }
  }, [dispatch, navigation]);

  // function openNavigation() {
  //   setNavigation(true);
  // }

  return (
    <div className="App">
      <div className='App__container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/flowers' element={<Flowers />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/order' element={<BasketOrderRegistration />} />
        </Routes>
      </div>
      <Footer />
      <Navigation isOpen={navigation} />
    </div>
  );
}

export default App;
