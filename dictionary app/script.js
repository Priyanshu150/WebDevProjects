// searchBtn
// searchInput

const dictionary = (word) => {
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c15067ca30mshcc1306608cab2a7p104fb1jsn600d4b6883b6',
            'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch(url + word, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            // console.log(response.word);
            // console.log(response.definition);
            wordHeading.innerHTML = response.word;
            definition.innerHTML = response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.");
        })
        .catch(err => console.log(err));
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log('pressed');
    dictionary(searchInput.value);
})