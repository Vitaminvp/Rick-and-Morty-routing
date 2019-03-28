export const getData = url => {
    return fetch(`https://rickandmortyapi.com/api/character/${url}`).then(res => {
        if(!res.ok) {
            return;
        }
        return res.json();
    })
};