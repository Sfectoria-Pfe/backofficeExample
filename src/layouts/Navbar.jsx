import React from 'react'
import { FaBars } from "react-icons/fa";
export default function Navbar({isOpen,setIsOpen}) {
  return (
    <div className='bg-black text-white' style={{position:'fixed',width:'100%',paddingLeft:isOpen ? 300 : 0,height:70,}} >
    {isOpen !==true && <button className='btn btn-light' onClick={()=>setIsOpen(true)}><FaBars /></button>} 
    </div>
  )
}
