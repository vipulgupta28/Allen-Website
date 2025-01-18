import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Form from "./components/form";
import Admission from "./components/admissions";
import Test from "./components/testimonial";
import Faq from "./components/faq";
import Footer from "./components/footer";


function App() {
  return (
    <div className="landing-page">
      <Navbar />
      <Banner />
      <Form />
      <Admission/>

      <div className="cards">
        <Test />
      </div>

      <Faq/>
      <Footer/>
    </div>
    
  );
}


export default App;
