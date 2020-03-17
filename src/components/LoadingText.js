import React from 'react'
import { Container, Spinner } from 'reactstrap'

function LoadingText() {
    return (
        <Container className='text-center pt-5'>
            <Spinner color='dark' />
        </Container>
    )
}
export default LoadingText