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


const username = document.getElementById('username')
const psw = document.getElementById('password')
const p = document.getElementById("p")

function submit() {
    if (username.value.length == 0 || psw.value.length == 0) {
        p.innerHTML = 'Please enter your credentials!';
    } else if (username.value.length !== 0 && psw.value.length < 8) {
        p.innerHTML = 'Password length must be greater than 8!';
    } else if (
        username.value.length > 0 &&
        psw.value.length > 8 &&
        psw.value.charAt(0) !== NaN &&
        psw.value.charAt(0) === psw.value.charAt(0).toUpperCase() &&
        /\d/.test(psw.value) && //contains at least 1 number
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(psw.value)   //contains at least special character
    ) {
        p.innerHTML = 'Your are logged in!';
    } else {
        p.innerHTML = 'Please check your credentials';
    }

}