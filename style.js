



let upcomingMovie = null;


let apiKey = 'ff73598636b772c5fca88d178c32f1a4'
let imageFullUrl = 'https://image.tmdb.org/t/p/original';
let imageUrl = 'https://image.tmdb.org/t/p/w500';
let path = "https://api.themoviedb.org/3/movie/upcoming"
let movieArray = null;
let page = 1
let headerBgSrc = document.querySelector('.header-bg')

let namesOfMovie = [];
let overviewOfMovie = [];
let movieId = [];
let headerBg = ``;


let moviestitle = document.querySelectorAll('.films-card__text h3');
let moviesoverview = document.querySelectorAll('.films-card__text p');
let imageDirectory = document.querySelectorAll('.films-card__img')
let time = document.querySelectorAll('.time')
let header = document.querySelector('.header')
let headerTitle = document.querySelector('.header-content h1')
let headerOverview = document.querySelector('.header-content p')
let btnRight = document.querySelector('.btnRight')
async function getMovie() {
    try {
        const response = await fetch(`${path}?api_key=${apiKey}&language=en-US&page=${page}`)
        const res = await response.json()
        const data = res.results
        movieArray = data
        console.log(movieArray);
        headerBgSrc.src = `${imageFullUrl}${data[0].backdrop_path}`

    } catch (error) {
        console.log(error);
    }
}

getMovie();
setTimeout(() => {





    for (let j = 0; j < 4; j++) {
        // console.log(movieArray[j]);
        namesOfMovie.push(movieArray[j].title);
        overviewOfMovie.push(movieArray[j].overview);
        movieId.push(movieArray[j].id)

    }




    headerBgSrc.src = `${imageFullUrl}${movieArray[0].backdrop_path}`
    headerTitle.innerHTML = movieArray[0].title
    headerOverview.innerHTML = movieArray[0].overview


    moviestitle.forEach((element, index) => {
        for (let i = 0; i < 4; i++) {

            moviestitle[i].innerHTML = `${namesOfMovie[i]}`
            moviesoverview[i].innerHTML = `${overviewOfMovie[i]}`
            imageDirectory[i].src = `${imageFullUrl}${movieArray[i].poster_path}`
            time[i].innerHTML = `${movieArray[i].release_date}`
        }
    });
}, 500);


let i = 0; // Initialize the index outside of the function
btnRight.addEventListener('click', (e) => {
   if(i == 19){
        i=0
   }else {
    i++
   }
})

function slideMove() {
    setInterval(() => {
        header.style.opacity = 0.2
        console.log(header);
        setTimeout(() => {

            headerBgSrc.src = `${imageFullUrl}${movieArray[i].backdrop_path}`;
            headerTitle.innerHTML = movieArray[i].title;
            headerOverview.innerHTML = movieArray[i].overview;
            setTimeout(() => {
                header.style.opacity = 1

            }, 800);
        }, 800)

        i++; 
        if (i >= 19) {
            i = 0; 
        }
    }, 9000);
}

slideMove();