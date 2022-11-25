import Header from "./components/Header";
import Main from "./pages/Main";
import Details from "./pages/Details";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Discover from "./pages/Discover";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-light-yellow">
          <Routes>
            <Route index element={<><Header/><Main/><Footer/></>}/>
            <Route path='/home' element={<><Header/><Main/><Footer/></>}/>
            <Route path='/destination/:id' element={
              <>
                <Header/>
                <Details key={window.location.pathname}/>
                <Footer/>
              </>
            }/>
            <Route path='discover' element={<Discover/>} />
            <Route path='discover/:filter' element={<Discover/>} />
            <Route path='/*' element={<Error/>}/>
          </Routes>
          
      </div>
    </QueryClientProvider>

  )
}

export default App;
