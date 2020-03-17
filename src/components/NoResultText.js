import React from 'react'
import { Container } from 'reactstrap'

function NoResultText() {
    return (
        <Container className='pt-5 mt-5 text-center'>
            <h1 className='mb-5'>Sorry, no results.</h1>    
        </Container>
    )
}
export default NoResultText