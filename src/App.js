import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Header from './components/Header'
import Pictures from './components/Pictures'
import Picture from './components/Picture'
import SearchBar from './components/SearchBar'
import LoadingText from './components/LoadingText'
import WelcomeText from './components/WelcomeText'
import NoResultText  from './components/NoResultText'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const pictures = useSelector(state => state['pictures'])
    const isLoading = useSelector(state => state['isLoading'])
    const searchInput = useSelector(state => state['searchInput'])
    return (
        <div className='App'>
            <Header />
            <SearchBar />
                {isLoading ?
                    <LoadingText /> :                    
                    (!pictures.length ?
                        (!searchInput.length ? <WelcomeText /> : <NoResultText />) :
                        <Switch>
                            <Route exact path='/'>
                                <Pictures />
                            </Route>                    
                            <Route path='/:index'>
                                <Picture />
                            </Route> 
                        </Switch>
                    )
                }
        </div>
    )
}
export default App