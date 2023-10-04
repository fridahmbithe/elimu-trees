import React from 'react'
import './App.css';
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Routes from './Routes'
// import {useRoutes} from "react-router";
import Navbar from './Components/Pages/Navbar'

import Footer from './Components/Pages/Footer'

function App() {
  
      // const routing = useRoutes(routes);
      
        return (
          <>
            {/* <Router> */}
              {/* <Routes> */}
               {/* {routing} */}
                {/* <Route exact path="/" component={Home} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/About" component={About} />
                <Route path="/sign-up" component={SignUp} />
                <Route exact path="/src/components/pages/Login.js" component={Login} /> */}
                {/* {routing} */}
              {/* </Routes> */}
              {/* <HeroSection /> */}
              <Navbar />
              <Footer />
            {/* </Router> */}
          </>
        );
      }


export default App;
