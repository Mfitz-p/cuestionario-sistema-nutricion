
import './App.css';

import InicioBienvenida from './components/InicioBienvenida';
import { FormHistorialMedico } from './components/FormHistorialMedico';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    
    <InicioBienvenida />

    <FormHistorialMedico />

    </>
  );
}

export default App;
