import Country from "./ Component/Country";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Header from "./ Component/header";
import CountryInfo from "./ Component/CountryInfo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/:index" element={<CountryInfo />} />
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
