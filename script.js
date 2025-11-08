const API_phimGhibli = 'https://ghibliapi.vercel.app/films';

// khi web tai xong , tự động gọi hàm taiPhim() để lấy dử liệu API
window.onload = function(){
    taiPhim();
}

async function taiPhim() {
    try {
        document.getElementById('listOfMovies').innerHTML = '<p>Loading...</p>';
        const response = await fetch(API_phimGhibli);
        if (!response.ok) throw new Error("không thể tải dữ liệu");
        const data = await response.json();
        renderFilms(data);
    } catch(Error) {
        document.getElementById('listOfMovies').innerHTML = '<p> Không thể tải dữ liệu từ API.</p>'
    }
}

function renderFilms(films) {
    const html = films.map(phim =>
        `<div class="movie-card">
        <img src="${phim.image}" alt="${phim.title}">
        <h3>${phim.title}</h3>
        <p><strong>Release year: </strong> ${phim.release_date}</p>
        <p><strong>Director: </strong> ${phim.director}</p>
        <p><strong>Rate: </strong> ${phim.score}</p>
        <p><strong>Discription: </strong> ${phim.description}</p>
        </div>`).join('');
    document.getElementById('listOfMovies').innerHTML = html;
}