import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Navbar,    
    NavbarText
} from 'reactstrap'

function Header() {
    return (
        
        <Navbar color='dark' dark expand='sm'>
            <Container>
                <NavbarText className='ml-8'>
                    <Link to='/' style={{textDecoration: 'none'}}>Flickr Picture</Link>
                </NavbarText>
            </Container>           
        </Navbar>     
    )
}
export default Header