import  Header  from './Component/Header/Header'
import MainPage from './pages/mainPage/MainPage'
import { DataProvider } from './Context/DataContext'
import { ModalProvider } from './Context/ModalContext'
import  ModalManager  from './Modal/ModalManager'
import './App.css';

function App() {
  return (
    <ModalProvider>
      <DataProvider>
        <ModalManager />
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <div className="main">
            <MainPage />
          </div>
          
          
        </div>
      </DataProvider>
    </ModalProvider>
  );
}

export default App;
