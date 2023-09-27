import React from "react";
import "./App.css";
import ReactJSX from "./components/ReactJSX";
import CompAndProps from "./components/CompAndProps";
import Button from "./elements/Button";
import TextInput from "./elements/TextInput";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactJSX />
        <div className="Components">
          <CompAndProps
            bgColor1="#EBE4D1"
            bgColor2="#B4B4B3"
            bgColor3="#3085C3"
            bgColor4="#E55604"
          />

          <form action="">
            <TextInput border="green" placeholder="Masukkan Nama" />
            <Button background="black">Kirim</Button>
          </form>
        </div>
      </header>
    </div>
  );
}
export default App;
