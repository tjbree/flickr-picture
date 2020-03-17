import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,    
    Badge
} from 'reactstrap'

function PictureCard({ index, value }) {    
    const searchInput = useSelector(state => state['searchInput'])
    const alt = `picture of ${searchInput}`
    const picAuthor = value.author.replace(/^.*\("(.*)"\)$/, '$1')   
    const picTakenDate = value.date_taken.substr(0, 10)
    const picTags1 = searchInput.split(',')
    const picTags2 = value.tags.split(' ').filter(tag => tag.length <= 10).filter(value => picTags1.indexOf(value) === -1).filter((tag, ind)=>ind <= 4)
    const picTags = picTags1.concat(picTags2)
    const picSrc = value.media.m
         
    return (
        <div>
            <Card className='m-2 bg-light' style={{width: 300, height: 450}}>
                <Link to={`/${index}`}>
                    <CardImg 
                        top 
                        width='100%' 
                        height='180' 
                        src={picSrc} 
                        alt={alt}
                        style={{objectFit: 'cover'}}
                    />
                </Link>
                <CardBody className='p-3'>                    
                    <CardText className='mb-0 font-weight-bold'>Author:</CardText>
                    <CardText className='mb-2 pl-2'>{picAuthor}</CardText>

                    <CardText className='mb-0 font-weight-bold'>Taken on:</CardText>
                    <CardText className='mb-2 pl-2'>{picTakenDate}</CardText>

                    <CardText className='mb-1 font-weight-bold'>Tags:</CardText>
                    <CardText className='mb-3 pl-2'>
                        {picTags.map((tag, index)=>
                            <Badge 
                                key={index} 
                                className='mx-1 pb-1'
                                color='dark'
                            >{tag}</Badge>
                        )}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

PictureCard.propTypes = {
    index: PropTypes.oneOf([...Array(20).keys()]).isRequired,
    value: PropTypes.shape({
        picAuthor: PropTypes.string,
        picTakenDate: PropTypes.string,
        picTags: PropTypes.string,
        picSrc: PropTypes.string,
        source: PropTypes.string
    })
}

export default PictureCard