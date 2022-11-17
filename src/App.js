import Header from "./components/Header";
import Main from "./pages/Main";
import Details from "./pages/Details";
import Error from "./pages/Error";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse";
const App = () => {
  return (
    <div className="bg-light-yellow">
        <Header />
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/destination/:id' element={<Details/>}/>
          <Route path='browse/:id' element={<Browse/>} />
          <Route path='/*' element={<Error/>}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App;
