import { DATA } from "./DATA"
import { Level } from "./Level"
import { Title } from "./Title"
import { useLocation } from "./static-router"
import "./css/Theme.css"

export const Theme = () => {

    const id = Number(useLocation().split("/")[1])

    const subKeys = (obj) => {
        let keys = []
        for(let key in obj) {
            if(!isNaN(key)) {
                keys.push(key)
            }
        }
        return keys
    }
    
    return <div>
        <Title>Тема {id}. {DATA[id].name}</Title>
        <div className="theme-levels-container">
            {
                subKeys(DATA[id]).map(key => 
                    <Level locked={DATA[id][key].locked} key={key} name={`${key}. ${DATA[id][key].name}`}>
                        {[]}
                    </Level>    
                )
            }
        </div>
    </div>
}