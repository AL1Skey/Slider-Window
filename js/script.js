//SLIDE
const left = document.querySelector('.left-slide');
const right = document.querySelector('.right-slide');
//BUTTON
const upButton = document.querySelector('.btn-up');
const downButton = document.querySelector('.btn-down');

//SLIDE LENGTH
const length = left.querySelectorAll('div').length;

var counter = 0;
var temp = length - 1;
//POSITIONING SLIDE TO CORRECT ORDER
left.style.transform = `translateY(-${(length - 1) * 100}vh)`;
right.style.transform = 'transalateY(0vh)';
/*
DEFAULT VALUE FORM TRANSFORM
-)LEFT = (-(LENGTH - 1) * 100)VH
-)RIGHT = 0VH
*/
upButton.addEventListener('click',() => slide('up'));
downButton.addEventListener('click',() => slide('down'));

const slide = (direction) => {
    if(left.style.transition == ''){
        //ADD ANIMATION WHEN TRANSFORM TO LEFT SLIDE
        left.style.transition = 'transform 0.5s ease-in-out';
    }
    //SET CONSTANT
    const slideHeight = 100;
    //IF UP BUTTON PRESSED
    if(direction == 'up'){
        //COUNTER GOES UP
        counter++;
        //IF COUNTER BIGGER THAN LIMIT
        if(counter > length-1){
            //RESET COUNTER
            counter=0;
        }
    }
    //IF DOWN BUTTON PRESSED
    else if(direction == 'down'){
        //COUNTER GOES DOWN
        counter--;
        //IF COUNTER LESS THAN DEFAULT
        if(counter < 0){
            //RAISE COUNTER TO MAX
            counter= length - 1;
        }
    }

    //TRANSFORM POSITION LEFT AND RIGHT SLIDE
    left.style.transform =`translateY(-${(temp - counter) * slideHeight}vh)`;
    right.style.transform = `translateY(-${counter * slideHeight}vh)`;
    
}

/*
NOTE DIFFERENCE BETWEEN INTIALIZE FUNCTION AS FUNCTION AND AS VARIABLE
function(){}            vs          var something = () => {}
-)Execute when javascript run           -)Execute when called
*/