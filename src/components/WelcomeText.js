import React from 'react'
import { Container } from 'reactstrap'

function WelcomeText() {
    return (
        <Container className='py-5 my-5 text-center'>
            <h1 className='mb-5'>Welcome to Flickr-Picture</h1>
            <h2 className='mb-5'>Enter the keywords to find your inspiration</h2>
        </Container>
    )
}
export default WelcomeText