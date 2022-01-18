import Intro from "./components/intro/Intro.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
// import Works from "./components/works/Works.jsx";
// import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contacts from "./components/contacts/Contacts.jsx";

import "./App.scss";
// import { useState } from "react";
import Topbar from "./components/topbar/Topbar.jsx";

function App() {
  // const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
