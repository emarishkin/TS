import { useState } from "react"
import { Button } from "./Button"

export function Header(){

    const [click,setclick]=useState(false)
    const [click2,setclick2]=useState(false)
 
 

    return(
        <> 
        {click?<Button onClick={()=>setclick(true)}>open</Button>:<Button onClick={()=>setclick(true)}>основная</Button>}
        {click2?<Button onClick={()=>setclick2(true)}>open2</Button>:<Button onClick={()=>setclick2(true)}>дополнительная</Button> }
        </>
       
    )
}