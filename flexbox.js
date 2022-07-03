//firstElementChild

// const firstElementofList = document.getElementById('myList').firstElementChild.innerHTML;
// document.getElementById('firstEl').innerHTML = firstElementofList;
//-------------------------------------------

//first element child with tag name

// let tagNameEl = document.getElementById('myDiv').firstElementChild.tagName;
// document.getElementById('tagName').innerHTML = tagNameEl;

//--------------------------------------------

//first element child of the dropdown

// const firstElementofDropdown = document.getElementById('dropdown').firstElementChild.innerHTML;
// document.getElementById('firstEl').innerHTML = firstElementofDropdown;

//--------------------------------------------

/*----------------------------Canvas */

// let limit = document.getElementById('myCanvas')
// let showCanvas = limit.getContext('2d')
// showCanvas.moveTo(0,0);
// showCanvas.lineTo(200,100);
// showCanvas.stroke();

//-----------------//draw a circle in the middle of the ractangle

// showCanvas.beginPath()
// showCanvas.arc(95, 50, 40, 0, 2 * Math.PI)
// showCanvas.stroke();
// showCanvas.fill();

//-----------------//writing smth in canvas

// showCanvas.font = '30px Arial'
// showCanvas.strokeText('Hello world', 50, 100)

// const myCanvas = () => {
//     let c = document.getElementById('myCanvas')
//     let ctx = c.getContext('2d')
//     let img = document.getElementById('img')
//     ctx.drawImage(img, 10, 20)
//     c.style.width = '10%';
//     c.style.height = '10%';
// }


const input = document.getElementById('input')
function submit() {

    if (input.value.length == 0) {
        document.getElementById("p").innerHTML = 'Type smth';
    }
    else if (input.value < 1 || input.value > 10 && isNaN(!input.value)) {
        document.getElementById("p").innerHTML = 'YAYYYYY';
    }

    else if (input.value.length > 0 && isNaN(input.value)) {
        document.getElementById("p").innerHTML = 'Not a valid input';
    }
    else {
        document.getElementById("p").innerHTML = 'Now it is ok!';
    }

}