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
import { basketCard } from '../../utils/constantsBasketPage';
import Balloons from '../Balloons/Balloons';
import Sweets from '../Sweets/Sweets';
import FrutsBasket from '../FrutsBasket/FrutsBasket';
import RoomPlants from '../RoomPlants/RoomPlants';
import Gifts from '../Gifts/Gifts';
import Services from '../Services/Services';
import Accessories from '../Accessories/Accessories';

function App() {

  const navigation: boolean = useSelector(state => state['navigation']);

  const dispatch = useDispatch();

  const [basketStoreList, SetBasketStoreList] = React.useState(basketCard);

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


  return (
    <div className="App">
      <div className='App__container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/flowers' element={<Flowers />} />
          <Route path='/balloons' element={<Balloons />} />
          <Route path='/sweets' element={<Sweets />} />
          <Route path='/frutsBasket' element={<FrutsBasket />} />
          <Route path='/plants' element={<RoomPlants />} />
          <Route path='/gifts' element={<Gifts />} />
          <Route path='/services' element={<Services />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/basket' element={<Basket basketStoreList={basketStoreList} />} />
          <Route path='/order' element={<BasketOrderRegistration />} />
        </Routes>
      </div>
      <Footer />
      <Navigation isOpen={navigation} />
    </div>
  );
}

export default App;
