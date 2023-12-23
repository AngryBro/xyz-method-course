import { DATA } from "./DATA"
import { Level, SubLevel } from "./Level"
import { Title } from "./Title"
import { useLocation, useNavigate } from "./static-router"
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

    const nav = useNavigate()
    
    return <div>
        <Title>Тема {id}. {DATA[id].name}</Title>
        <div className="theme-levels-container">
            {
                subKeys(DATA[id]).map(key => 
                    <div key={key} className="theme-level-container">
                        <Level locked={DATA[id][key].locked} name={`${key}. ${DATA[id][key].name}`}>
                            {
                                subKeys(DATA[id][key]).map(subkey =>
                                    <SubLevel onClick={() => nav(`/lesson/${id}.${key}.${subkey}`)} locked={subkey>2} done={subkey < 3} key={subkey}>{key}.{subkey}. {DATA[id][key][subkey].name}</SubLevel>    
                                )
                            }
                        </Level>
                    </div>    
                )
            }
        </div>
    </div>
}