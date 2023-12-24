// import { MathJaxFormula, MathJaxProvider } from "mathjax3-react"
// import { TEX } from "./TEX"
import MathJax from "mathjax3-react"

export const Test = () => {
    return <div>
        <MathJax.Provider>
            <MathJax.Html html="x^2" />
        </MathJax.Provider>
</div>
}