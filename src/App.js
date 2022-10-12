import NavBar from '../src/components/NavBar';
import About from '../src/components/About';
import Main from '../src/components/Main';
import SideBar from '../src/components/SideBar';
import Footer from '../src/components/Footer';
import CopyRight from './components/CopyRight';
import ScrollTop from './components/ScrollTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function App() {
  return (

    
    <div className="container-fluid">
      <div className='row '>
        <NavBar />
      </div>
      <div className='row mt-5'>
        <SideBar />
        <Main />
      </div>
        <About />
        <Footer />
        <ScrollTop/>
        <CopyRight/>
    </div>
  );
}

export default App;
