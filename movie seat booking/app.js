const movieList = document.getElementById('movieList');
const container = document.querySelector('.container');
const seatCount = document.querySelector('.seatCount');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const totalPrice = document.querySelector('.totalPrice');
let moviePrice = 9;


updatedSeatCount = ()=>{
        const selectedSeats = document.querySelectorAll('.row .seat.selected');
        // const selectedSeatInd2ex = [...selectedSeats].map(seats=> [...seat].indexOf(seats)); for localStorgae

        seatCount.innerText = selectedSeats.length;
        totalPrice.innerText = selectedSeats.length * moviePrice;
}


movieList.addEventListener('change', (e) => {
    moviePrice = e.target.value;
    console.log(moviePrice);
    updatedSeatCount();
})

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updatedSeatCount();
    }
})