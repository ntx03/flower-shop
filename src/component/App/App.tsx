import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='App__container'>
        <Header />
        <Main />

      </div>
      <Footer />
    </div>
  );
}

export default App;
