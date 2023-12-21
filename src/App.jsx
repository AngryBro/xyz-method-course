import { Theme } from "./Theme"
import { Route, Routes } from "./static-router"

export const App = () => {


    return <div className="container">
        <Routes>
            <Route path="/" element={<div>123</div>} />
            <Route path="/1" element={<Theme/>} />
        </Routes>
    </div>
}