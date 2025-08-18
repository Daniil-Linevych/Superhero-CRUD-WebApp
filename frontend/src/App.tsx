import {BrowserRouter, Routes, Route} from "react-router-dom"

import SuperheroesPage from "./pages/SuperheroesPage"
import SuperheroPage from "./pages/SuperheroPage"
import SuperheroCreatePage from "./pages/SuperheroCreatePage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SuperheroesPage />}/>
          <Route path='/superheroes' element={<SuperheroesPage />}/>
          <Route path="/superheroes/new" element={<SuperheroCreatePage />} />
          <Route path="/superheroes/:id" element={<SuperheroPage />} />
          <Route path="/superheroes/:id/edit" element={<SuperheroCreatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
