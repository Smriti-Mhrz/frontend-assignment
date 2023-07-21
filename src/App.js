import './App.scss';
import { Footer, NavBar } from './layouts';
import { Homepage } from './pages';

function App() {
  return (
    <>
      <NavBar/>
    <div className="container">
      <Homepage/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
