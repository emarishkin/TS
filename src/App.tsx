import { useState } from "react"
import { Header } from "./components/header"
import { Feetbacksection } from "./Feetback"
import { Tabsection } from "./Tabsection"
import { MainSayt } from "./Mainsayt"



export function App(){
    const [tab,setTab]=useState('feetback')
    return(
        <>
        <Tabsection onChange={(current)=>setTab(current)}/>

        {tab==='header'&&(
            <Header/>,
            <MainSayt/>
        )}
        {tab==='feetback'&&<Feetbacksection/>}
        
        </>
    )
}