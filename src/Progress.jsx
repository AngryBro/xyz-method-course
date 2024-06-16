export const Progress = ({children}) => {
    return <div className="progress">
        {Math.floor(children)}%
    </div>
}