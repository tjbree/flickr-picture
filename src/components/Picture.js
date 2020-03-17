import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { 
    Container,
    Row,
    Col,
    Badge,
} from 'reactstrap'

function Picture () {
    const { index } = useParams()
    const picture = useSelector(state => state['pictures'][index])
    const searchInput = useSelector(state => state['searchInput'])

    const alt = `picture of ${searchInput}`
    const picAuthor = picture.author.replace(/^.*\("(.*)"\)$/, '$1')   
    const picTakenDate = picture.date_taken.substr(0, 10)
    const picTags1 = searchInput.split(',')
    const picTags2 = picture.tags.split(' ').filter(tag => tag.length <= 10).filter(value => picTags1.indexOf(value) === -1).filter((tag, ind)=>ind <= 4)
    const picTags = picTags1.concat(picTags2)
    const bigPicSrc = picture.media.m.replace(/_m\./, '_b.')
    const source = picture.link

    return (
        <>
            <Container className='mb-4 px-0'>
                <img src={bigPicSrc} alt={alt} max-width='900px' style={{display: 'block', margin: 'auto'}}/>
            </Container>
            <Container className='mb-5'>
                <Row className='mt-3'>
                    <Col sm='4'>
                        <p className='mb-0 text-sm-right font-weight-bold'>Author:</p>
                    </Col>
                    <Col sm='8' className='pl-sm-2 pl-5'>
                        <p>{picAuthor}</p>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col sm='4'>
                        <p className='mb-0 text-sm-right font-weight-bold'>Taken on:</p>
                    </Col>
                    <Col sm='8' className='pl-sm-2 pl-5'>
                        <p>{picTakenDate}</p>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col sm='4'>
                        <p className='mb-0 text-sm-right font-weight-bold'>Flickr address:</p>
                    </Col>
                    <Col sm='8' className='pl-sm-2 pl-5'>
                        <p><a href={source}>{source}</a></p>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col sm='4'>
                        <p className='mb-0 text-sm-right font-weight-bold'>Tags:</p>
                    </Col>
                    <Col sm='8' className='pl-sm-2 pl-5'>
                        <p>{picTags.map((tag, index) =>
                                <Badge 
                                    key={index} 
                                    className='mx-1 pb-1'
                                    color='dark'
                                >{tag}</Badge>
                            )}</p>
                    </Col>
                </Row>
            </Container>          
        </>
    )
}
export default Picture