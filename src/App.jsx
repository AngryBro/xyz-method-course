import { useEffect, useMemo, useState } from "react"
import { Lesson } from "./Lesson"
import { Theme } from "./Theme"
import { Route, Routes } from "./static-router"


export const App = () => {

    const [_localData, _setLocalData] = useState(Number(localStorage.getItem("current")))

    const localData = useMemo(() => ({
        get: _localData,
        set: value => {
            localStorage.setItem("current", value)
            _setLocalData(Number(value))
        }
    }), [_localData])

    useEffect(() => {
        const init = () => {
            if(localData.get === 0) {
                localData.set(0)
            }
        }
        init()
    }, [localData])


    return <div className="container">
        <Routes>
            <Route path="/" element={<div>123</div>} />
            <Route path="/*" element={<Theme/>} />
            <Route path="/lesson/*" element={<Lesson localData={localData} />} />
        </Routes>
        <div className="container-footer"></div>
    </div>
}