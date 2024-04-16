import DisRegistor from './register/DisRegistr'
import './App.css' 
import Home1 from './register/Home1'
import OKyrsah from './register/OKyrsah';
import Contacts from './register/Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisRegistor/>  
       {/* <Home1/> 
       <OKyrsah/>*/}
       <Contacts/>
      </header>
    </div>
  );
}

export default App;
