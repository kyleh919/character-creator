import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

import styles from "./components/CharacterEditor/CharacterEditor.module.css";

function App() {
  return (
    <>
      <CharacterEditor />
      <div className={styles.perspectiveDecoration} />
      <Footer />
    </>
  );
}

export default App;
