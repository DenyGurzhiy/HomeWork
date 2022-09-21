fetch('https://catfact.ninja/facts?limit=7', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'text/plain;charset=UTF-8'
    },
})
    .then((response) => {
        return response.json();
    })
    .then((catfacts) => {
        getCatFacts(catfacts)
        function getCatFacts(catfacts) {
            for (catFact of catfacts.data) {
                const list = document.getElementById('catFactList');
                const listItem = document.createElement('li');
                const textNode = document.createTextNode(catFact.fact);
                const CatPic = document.createElement('img');
                getCatPictures().then(res => {
                    CatPic.setAttribute('src', res[0].url);
                    CatPic.setAttribute('id', 'CatPic');
                });
                listItem.appendChild(textNode);
                list.appendChild(CatPic);
                list.appendChild(listItem);
                const br = document.createElement('br');
                list.appendChild(br);
            }
        }
    });


function getCatPictures() {
    const res = fetch('https://api.thecatapi.com/v1/images/search', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'text/plain;charset=UTF-8'
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        });
    return res;
}

//import fetch from "node-fetch";

