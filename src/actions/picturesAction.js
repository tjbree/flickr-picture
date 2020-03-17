import fetchJsonp from 'fetch-jsonp'
import { isLoading, isLoaded } from './loadingAction'

export function getPictures() {   
    return (dispatch, getState) => {
        const searchInput = getState().searchInput
        if(searchInput){
            dispatch(isLoading())
            
            const url = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=${searchInput}`               
            fetchJsonp(url, {
                jsonpCallbackFunction: 'jsonFlickrFeed',
                timeout: 8000
            })
                .then(res => res.json())
                .then(pictures => dispatch({
                    type: 'FETCH',
                    payload: pictures.items
                }))
                .then(() => dispatch(isLoaded()) )
                .catch(error => console.log('error', error))
        } else {
            dispatch({
                type: 'FETCH',
                payload: []
            })
        }  
    }
}