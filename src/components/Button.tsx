
interface Button{
    children:string
    onClick:any
}

export function Button({children,onClick}:Button){
    return <button onClick={onClick}>{children}</button>
    
}