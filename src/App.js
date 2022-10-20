
import './App.css';
import { About } from './Component/About';
import { Adress } from './Component/Adress';
import { Amenities } from './Component/Amenities';
import { Contact } from './Component/Contact';
import { Container } from './Component/Container';
import { Container2 } from './Component/Container2';
import { Gallery } from './Component/Gallery';
import { Header } from './Component/Header';
import { Home } from './Component/Home';

function App() {
  return (
   <div>
      <Header />
      <Home />
      <Container />
      <Container2 />
      <Amenities />
      <Adress />
      <Gallery />
      <About />
      <Contact />
   </div>
  );
}

export default App;
