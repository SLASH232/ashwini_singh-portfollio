import './App.scss';
import {About,Footer,Header,Skills,Testimonial,Work,Home} from './container';
import {Navbar} from './components'
function App() {
  return (
    <div className="app">
        <Navbar />
        <Home />
        {/* <Header /> */}
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
    </div>
  );
}

export default App;
