import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="formato">
        <Navbar></Navbar>
        <Container customClass="min-height">
          <Home></Home>
        </Container>
        <Footer></Footer>  
    </div>
  )
}

export default App;
