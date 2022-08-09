import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Flowers from '../Flowers/Flowers';
import Main from '../Main/Main';
import './App.scss';
//import { useSelector, useDispatch } from 'react-redux'
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
import PopupCardProduct from '../PopupCardProduct/PopupCardProduct';
import { falseNavigation } from '../../store/counterSlise';
import { test } from '../../store/testState';
import { useAppSelector, useAppDispatch } from '../../../src/hooks'
function App() {

  const navigation: boolean = useAppSelector(state => state.counter.navigation);

  const dispatch = useAppDispatch();
  // const [basketStoreList, SetBasketStoreList] = React.useState(basketCard);

  // закрываем навигацию по esc
  React.useEffect(() => {
    if (navigation) {
      const closePopupEsc = (evt) => {
        if (evt.key === 'Escape') {
          document.removeEventListener('keydown', closePopupEsc);
          dispatch(falseNavigation())
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
          <Route path='/flowers' element={<Flowers path={'/flowers'} />} />
          <Route path='/balloons' element={<Balloons path={'/balloons'} />} />
          <Route path='/sweets' element={<Sweets path={'/sweets'} />} />
          <Route path='/frutsBasket' element={<FrutsBasket path={'/frutsBasket'} />} />
          <Route path='/plants' element={<RoomPlants path={'/plants'} />} />
          <Route path='/gifts' element={<Gifts path={'/gifts'} />} />
          <Route path='/services' element={<Services path={'/services'} />} />
          <Route path='/accessories' element={<Accessories path={'/accessories'} />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/order' element={<BasketOrderRegistration />} />
          <Route path='/:category/:id' element={<PopupCardProduct />} />
        </Routes>
      </div>
      <Footer />
      <Navigation isOpen={navigation} />
    </div>
  );
}

export default App;
