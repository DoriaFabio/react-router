//? importo le pagine da utilizzare e le proprietà
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import HomePage from './pages/HomePage'
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import DefaultLayout from './pages/DefaultLayout'
import Blog from './pages/post'
import PostPage from './pages/PostPage'
import AddPost from './pages/AddPost'
//? importo i context
import { GlobalContext } from './context/GlobalContext'
import { AlertProvider } from './context/AlertContext'
//? importo l'Url della api tramite il file .env
const apiUrl = import.meta.env.VITE_API_URL;

//? Funzione App
function App() {
  const [tagsList, setTagsList] = useState([]);

  useEffect(() => {
    getTags();
  }, []);

  //!Chiamata Axios per prendere la lista dei tags
  function getTags() {
    axios.get(apiUrl + "/tags").then((res) => {
      console.log(res.data);
      setTagsList(res.data.data);
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finito");
      });
  }


  return (
    //todo Struttura della pagina con i provider
    <GlobalContext.Provider value={{ tagsList }}>
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path='/' Component={HomePage} />
              <Route path='/about' Component={AboutUs} />
              <Route path='/contact' Component={Contact} />
              <Route path='/posts'>
                <Route index Component={Blog}></Route>
                <Route path=':id' Component={PostPage}></Route>
                <Route path='create' Component={AddPost}></Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </GlobalContext.Provider>
  )
}

export default App;
