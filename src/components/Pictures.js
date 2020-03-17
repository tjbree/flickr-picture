import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'reactstrap'
import PictureCard from './PictureCard'

function Pictures() {
    const pictures = useSelector(state => state['pictures'])
    const listedItems = pictures.map((value, index) => <PictureCard key={index} index={index} value={value} />)

    return (
        <Container className='py-3 m-0 mx-auto d-flex flex-wrap justify-content-center'>         
            {listedItems}  
        </Container>      
    )
}
export default Pictures