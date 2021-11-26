import Navbar from "./Components/Navbar";
import Div1 from "./Components/Div1";
import Div2 from "./Components/Div2";
import Div3 from "./Components/Div3";
import Div4 from "./Components/Div4";
import Footer from "./Components/Footer";
import Pp from "./Components/Pp";
import Contact from "./Components/Contact";
import {LanguageContext} from"./Components/Context";
import React, {useState} from 'react';
function App() {
const [Language, SetLanguage]=useState(true);
  return (
    <LanguageContext.Provider value={{Language, SetLanguage}}>
    
      <Navbar />

      <Div1 />
      <Div2 />

      <Div3 />
      <Div4 />
      <Contact />
      <Footer />
      <Pp />
    </LanguageContext.Provider>
  );
}

export default App;
