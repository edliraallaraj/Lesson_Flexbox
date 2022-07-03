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

let limit = document.getElementById('myCanvas')
let showCanvas = limit.getContext('2d')
// showCanvas.moveTo(0,0);
// showCanvas.lineTo(200,100);
// showCanvas.stroke();

//draw a circle in the middle of the ractangle

showCanvas.beginPath()
showCanvas.arc(95, 50, 40, 0, 2 * Math.PI)
showCanvas.stroke();
showCanvas.fill();