import React from "react";
import Properties from "./components/Properties";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/Aboutus";
import ContactUs from "./components/Contactus";

function App() {
  return (
    <div>
      <header>
        <h1>Inframantra</h1>
      </header>
      <main>
        <Properties />
        <Services />
        <Testimonials />
        <AboutUs />
        <ContactUs />
      </main>
    </div>
  );
}

export default App;
