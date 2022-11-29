import React, { useState } from 'react'
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";


function Question({title,info}) {
    const [show,setShow]=useState(true);
  return (
    <div>
   <header>
            <h2>{title}</h2>.
    <button onClick={()=>setShow(!show)}>{show?<AiOutlinePlus></AiOutlinePlus>:<AiOutlineMinus></AiOutlineMinus>}</button>

   </header>
          <p>{show?"":info}</p>

    </div>
  )
}

export default Question