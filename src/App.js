import React, { useEffect } from "react";

import scrollreveal from "scrollreveal";
import Myroutes from "./Myroutes";

const App = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <>
   <Myroutes/>
    </>
  )
}

export default App