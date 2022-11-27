import Header from "./components/Header";
import Main from "./pages/Main";
import Details from "./pages/Details";
import Auth from "./pages/Auth";
import Discover from "./pages/Discover";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createContext } from "react";
import { useState } from "react";

const queryClient = new QueryClient()

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={` ${theme}`}>
          <div className="bg-light-yellow dark:bg-extra-dark-gray">
              <Routes>
                <Route index element={
                  <>
                    <Header 
                      theme={theme}
                      toggleTheme={toggleTheme}                   
                    />
                    <Main/>
                    <Footer theme={theme}/>
                  </>
                }/>
                <Route path='/home' element={
                  <>
                    <Header 
                      theme={theme}
                      toggleTheme={toggleTheme} 
                    />
                    <Main/>
                    <Footer theme={theme}/>
                  </>
                }/>
                <Route path='/destination/:id' element={
                  <>
                    <Header 
                      theme={theme}
                      toggleTheme={toggleTheme} 
                    />
                    <Details key={window.location.pathname}/>
                    <Footer theme={theme}/>
                  </>
                }/>
                <Route path='discover' element={<Discover theme={theme} toggleTheme={toggleTheme}/>} />
                <Route path='discover/:filter' element={<Discover theme={theme} toggleTheme={toggleTheme}/>} />
                <Route path='auth/:type' element={<Auth theme={theme}/>} />
                <Route path='/*' element={<Error/>}/>
              </Routes>
          </div>
        </div>
      </ThemeContext.Provider>
    </QueryClientProvider>

  )
}

export default App;
