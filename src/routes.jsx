import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from"./pages/inicio.jsx"



export default function Navegacao(){
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Inicio/>} />
            </Routes>
        </BrowserRouter>
    )
}