import React from "react";
import Head from "next/head";
import Header from "./Header";

const App = ({ children }) => (
  <main>
    {/* <Header /> */}
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/purecss@2.1.0/build/pure-min.css"
        integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH"
        crossorigin="anonymous"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/purecss@2.1.0/build/grids-responsive-min.css"
      ></link>
    </Head>
    {children}
  </main>
);

export default App;
