import React from 'react'
import Navbar from '../components/Navbar'

export default function Mainlayout(props) {
  return (
    <div>
        
        {/* nav */}
        <Navbar></Navbar>

        {props.children}


        {/* footer */}
        

    </div>
  )
}
