let input=document.getElementById('search');
input.addEventListener('keyup',e=>{
    if(e.keyCode===13){
        let value=e.target.value;
        console.log(value);
        searchMovie(value)
    }
})

function searchMovie(searchText) {
    //console.log(searchText);
    window.fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=f4a64f5c`)
        .then(data => {
            data.json().then(movies => {
                let moviesData = movies.Search;
                let output = [];
                for (let movie of moviesData) {
                   // console.log(movie);
                    output += `
                      <div>
                          <img src=${movie.Poster} alt=${movie.Title} />
                          <h1>${movie.Title}</h1>
                          <p>${movie.Type}</p>
                          <p>${movie.Year}</p>
                      </div>
                      `;
                }
                document.getElementById("template").innerHTML = output;
            }).catch(err => console.log(err));
            // // convert response body into JSON object


        })
        .catch(err => console.log(err));
}