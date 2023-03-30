import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'materialize-css/dist/css/materialize.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import jordan from './imgs/jordan.webp'

function App() {
  return (
    <>

      <main className='mainPage'>

        <div className="landingPage">
        <NavBar />
          <h1 className='white-text center-align' style={{fontSize: 120}}>Sneaker Society</h1>
          <img src={jordan} alt="" className='responsive-img' />
          <div className="divisorLanding">
          </div>

        </div>
        <div className='container'>

          
        <ItemListContainer item="Prop de itemlistContainer" />
        </div>

      </main>
    </>
  );
}

export default App;
