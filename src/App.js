import logo_google from './logo_google.svg';
import SearchInput from './components/SearchInput';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <img src={logo_google} className="logo_google" alt="erro" />
      <SearchInput />
      <div className="botoes">
        <Button text="Pesquisa Google" />
        <Button text="Estou com sorte" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
