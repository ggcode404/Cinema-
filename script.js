var container = document.querySelector('.container');
var seats = document.querySelectorAll(' .row .seat:not(.occupied)');
var count = document.getElementById('count');
var total = document.getElementById('total');
var movieSelect = document.getElementById('movie');
var countSeat = document.getElementById ('count-seat');
var countRow = document.getElementById ('count-row');

var ticketPrice = +movieSelect.value








function updateSelectedCount(){
    
    
    var selectedSeats = document.querySelectorAll('.row .seat.selected');
   
    
    var seatsIndex = [...selectedSeats].map(function(el){
        return [...seats].indexOf(el) + 1;
    });

    
    
    
    var selectedSeatsCount = selectedSeats.length;  //seatsIndex.
    
    count.textContent = selectedSeatsCount;
    total.innerText = '&'  + ticketPrice * selectedSeatsCount;
    
    
    countSeat.textContent = seatsIndex;
    
    countRow.innerText = Math.ceil(seatsIndex /10);

    if(selectedSeats.length <=6){
        updateSelectedCount
    }

    
    
    
    

    
    
      

}




        
    


movieSelect.addEventListener('change', function(e){
    ticketPrice = e.target.value;
    
    
        updateSelectedCount();
    
    
    
    
})


container.addEventListener('click', function(event){
    if(event.target.classList.contains('seat')  && 
    !event.target.classList.contains('occupied')){
        event.target.classList.toggle('selected')
    }


    
        updateSelectedCount();
    
    
    

})








