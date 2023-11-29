import { useState, createContext } from 'react';
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Events from './pages/Events';
import Ministries from './pages/Ministries';


<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

const App = () => {

  const [theme, setTheme] = useState('light')

  const ThemeColor = createTheme({
    palette: {
      primary: {
        main: '#de0000'
      },
      mode: theme,
    },
  });

  return (
    <>
      <ThemeProvider theme={ThemeColor}>
        {/* <NavBar setTheme={setTheme}/> */}
  {/* 
        <h1>Hello World!</h1>
        <div>
          <iframe style={{height: 500, width: 1000}} src="https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/f6e692d5-2134-4804-8854-28709cdb69c2/cid-9F7A273B986A512A/index.html" title="Events"></iframe>
        </div> */}
      

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar  setTheme={setTheme} theme={theme}/>}>
              <Route path="home" element={<Home />} />
              <Route path="events" element={<Events />} />
              <Route path="donate" element={<Donate />} />
              <Route path="ministries" element={<Ministries />} />
              <Route path="About" element={<About />} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>

        <Outlet />

      </ThemeProvider>
    </>
  )
}

export default App
