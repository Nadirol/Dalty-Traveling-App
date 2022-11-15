import Header from "./components/Header";
import Main from "./components/Main";
import Details from "./components/Details";
import Error from "./components/Error";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="bg-light-yellow">
        <Header />
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/destination/:id' element={<Details/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App;
