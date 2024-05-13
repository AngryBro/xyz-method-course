import {prism4} from "./geogebra/prism4.html"
import {pyramid4} from "./geogebra/pyramid4.html"
import {prism3} from "./geogebra/prism3.html"
import {pyramid3} from "./geogebra/pyramid3.html"
import {prism6} from "./geogebra/prism6.html"
import {pyramid6} from "./geogebra/pyramid6.html"
import {cone} from "./geogebra/cone.html"
import {cylinder} from "./geogebra/cylinder.html"
import {sphere} from "./geogebra/sphere.html"
import { useEffect, useRef, useState } from "react"


const Models = {
    "prism4": prism4,
    "pyramid4": pyramid4,
    "prism3": prism3,
    "pyramid3": pyramid3,
    "prism6": prism6,
    "pyramid6": pyramid6,
    "cone": cone,
    "cylinder": cylinder,
    "sphere": sphere
}


export const Geogebra = ({name}) => {


    const ref = useRef()
    const [height, setHeight] = useState(0)
    useEffect(() => {
        if(ref.current !== undefined) {
            setHeight(ref.current.clientWidth * 72 / 128)
        }
    }, [ref])

    return <div ref={ref}>
        <iframe width={"100%"} height={`${height}px`} title="geogebramodel" src={`data:text/html, ${Models[name]}`} frameborder="0"></iframe>
    </div>
}


export const GEOGERBA = {
    PRISM4: "prism4",
    PYRAMID4: "pyramid4",
    PRISM3: "prism3",
    PYRAMID3: "pyramid3",
    PRISM6: "prism6",
    PYRAMID6: "pyramid6",
    CONE: "cone",
    CYLINDER: "cylinder",
    SPHERE: "sphere"
}