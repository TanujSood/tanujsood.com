import './App.css';
import Navbar from './Pages/Components/Navbar';
import Header from './Pages/Components/Header';
import Projects from './Pages/Components/Projects';
import Contact from './Pages/Components/Contact';
import { Layout } from 'antd';

const { Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Contact />
      <Footer style={{ textAlign: 'center' }}> ©2022 Created with ♥ by Tanuj Sood</Footer>
    </div>
  );
}

export default App;
