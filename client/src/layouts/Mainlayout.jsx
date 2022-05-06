import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from '../components/styles/Container.styled'

export default function Mainlayout(props) {
  return (
    <>
        <Navbar />
        <Container>
            {props.children}
        </Container>
        <Footer />
    </>
  )
}
