import { Spoiler } from "../spoiler"


const BirdButton = ({opened = false, children}) => <div>
    <div>{children}</div>
    <div className={`button-bird ${opened?"__opened":""}`}>{">"}</div>
</div>


export const SpoilerButton = ({opened = undefined, children, text}) => {
    return <Spoiler>
        <BirdButton opened={false}>{text}</BirdButton>
        {children}
        <BirdButton opened={true}>{text}</BirdButton>
    </Spoiler>
}