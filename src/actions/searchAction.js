export function searchInput(userinput) {
    const string = userinput.replace(/[\s,.]+/gi, ',').trimLeft(',').trimRight(',')
    return {
        type: 'SEARCH_INPUT',
        payload: string
    }
}