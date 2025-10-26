import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Timeline />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;