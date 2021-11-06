// local storage

export function readFromLS(key) {
    let ls = JSON.parse(localStorage.getItem(key));     
    return ls;          
}

export function writeToLS(key, data) {
    let text = JSON.stringify(data);        
    localStorage.setItem(key, text);        
}