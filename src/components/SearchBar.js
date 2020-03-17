import React, { useRef, useEffect } from 'react'
import debounce from 'lodash.debounce'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { searchInput } from '../actions/searchAction'
import { getPictures } from '../actions/picturesAction'
import {
    Container,
    Form, 
    FormGroup, 
    Label, 
    Input
} from 'reactstrap'

function SearchBar() {
    const isLoading = useSelector(state => state['isLoading'])
    const inputRef = useRef()
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        inputRef.current.focus()
    }, [])
 
    const handlerDebounce = debounce(value => {             
        dispatch(searchInput(value))
        history.push('/')
        dispatch(getPictures())
    }, 1000)
    
    const handleChange = e => {
        e.persist()        
        handlerDebounce(e.target.value)        
    }

    const selectAll = e => {
        e.target.setSelectionRange(0, e.target.value.length)
    }

    return (
        <Container className='mt-5 mb-3'>
            <Form onSubmit={e => e.preventDefault()}>           
                <FormGroup className='mb-0'>
                    <Label for='search-bar' hidden>Search</Label>
                    <Input 
                        type='text' 
                        id='search-bar' 
                        name='search-bar'
                        placeholder='Enter keywords' 
                        bsSize='lg'      
                        onChange={handleChange}
                        onClick={selectAll}
                        ref={inputRef}
                        disabled={isLoading}
                    />                    
                </FormGroup>               
            </Form>
        </Container>         
    )
}
export default SearchBar