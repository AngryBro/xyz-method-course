import { MathComponent } from "mathjax-react";
import { TexAlias } from "./TexAlias";


export const TEX = ({children}) => {

    const replace = raw => {
        for(let i in TexAlias) {
            raw = raw.replace(new RegExp(`${i}`, "g"), TexAlias[i])
        }
        return raw
    }
    return <MathComponent tex={replace(children)} display={false} />
}