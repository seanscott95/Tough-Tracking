import React from 'react'
import Navbar from '../components/Navbar'
import { Container } from '../components/styles/Container.styled'

export default function Mainlayout(props) {
  return (
    <div>
        {/* nav */}
        <Navbar></Navbar>
        <Container>
            {props.children}
        </Container>
        
        {/* footer */}
        

    </div>
  )
}
