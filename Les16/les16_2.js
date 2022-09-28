fetch('https://catfact.ninja/breeds?limit=10', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'text/plain;charset=UTF-8'
    },
})
    .then((response) => {
        return response.json();
    })
    .then((catbreeds) => {
        let breedList = catbreeds.data.concat();
        createBreedList(breedList);
    });

function createBreedList(breedList) {
    for (breed of breedList) {
        const Sel = document.getElementById('breed_select');
        const SelOpt = document.createElement('option');
        const SelOptTxt = document.createTextNode(breed.breed);
        SelOpt.setAttribute('value', breed.breed);
        SelOpt.appendChild(SelOptTxt);
        Sel.appendChild(SelOpt);
    }
}