import Header from './components/Header'
import Content from './components/Content'
import './App.css';
import { LanguageContextProvider } from './contexts/LanguageContext';


function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <Header />
        <Content />
      </LanguageContextProvider>
    </div >
  );
}

export default App;
