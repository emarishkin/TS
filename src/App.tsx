import { useState } from "react"
import { Header } from "./components/header"
import { Feetbacksection } from "./Feetback"
import { Tabsection } from "./Tabsection"



export function App(){
    const [tab,setTab]=useState('feetback')
    return(
        <>
        <Tabsection onChange={(current)=>setTab(current)}/>

        {tab==='header'&&<Header/>}
        {tab==='feetback'&&<Feetbacksection/>}
        
        </>
    )
}