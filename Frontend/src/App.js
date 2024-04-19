import React,{useState} from 'react';
import DisRegistor from './register/DisRegistr';
import Home1 from './register/Home1';
import OKyrsah from './register/OKyrsah';
import Contacts from './register/Contacts';
import Podrobnee from './register/Podrobnee';
import Zapisatsa from './register/Zapisatsa';
import Home2 from './register/Home2';


function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const openModal = (language) => {
    setSelectedLanguage(language);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedLanguage('');
    setModalOpen(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <DisRegistor/>  
        <Podrobnee isOpen={modalOpen} onClose={closeModal} language={selectedLanguage} />
        <Home1 openModal={openModal} />
       {/*<OKyrsah/>
       <Contacts/>
       <Zapisatsa/>
       <Home2/>*/}
      </header>
    </div>
  );
}

export default App;
