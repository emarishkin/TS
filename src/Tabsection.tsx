import { Button } from "./components/Button"

interface Tabsection{
    onChange:any
    
}

export function Tabsection({onChange}:Tabsection){
    return(
        <section>
            <Button onClick={()=>onChange('header')}>главная</Button>
            <Button onClick={()=>onChange('feetback')}>не главная</Button>
        </section>
    )
}