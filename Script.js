// let person = {
//     name: 'Ezhil',
//     age: 25
// }

// //Dot notation

// console.log(person.name);

// let selectedColors = ['Red', 'blue', 'green'];
// selectedColors[3] = 'yellow';
// console.log(selectedColors.length)

// function great(name, lastName){
//     console.log("Welcome "+name +lastName);
// }
// great("Ezhil", "arasan");

// function squre(number){
//     return number*number;
// }
// console.log(squre(2));

// let points = 100;
// let type = points >=100 ? 'gold' : 'silver';
// console.log(type);

// let hightIncome = false;
// let goodScore = false;

// let isElibale = hightIncome && goodScore;
// console.log(isElibale);
/*don't have color it will take defaultColor*/
// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(currentColor);
// alert("welcome");

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()

// document.querySelector()
// document.querySelectorAll()


//HTMLCollection

// let li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li.length);

// let element = document.createElement("li");
// element.innerHTML = "Javascript";

// li[0].parentNode.appendChild(element);

// let li = document.getElementsByTagName("li");
// console.log(li);

// let element = document.createElement("li");
// element.innerHTML = "Javascript";

// li[0].parentNode.appendChild(element);

// console.log(element);
// console.log(li);


// const h1 = document.getElementsByTagName("h1");
// console.log(h1);

// const parent_h1 = h1[0].parentNode;
// parent_h1.style.background = "red";


/*
Style
innerHTML
innerText

cloneNode()
setInterval()
*/


// const h1 = document.querySelector("h1");
// h1.style.color = "white";
// h1.style.backgroundColor = "green";
// h1.innerText = "Ezhilarasan Manjula"
// h1.innerHTML = "<i>vip</i>Ezhilarasan Manjula";


// const body = document.querySelector("body");
// let cloneH1 = h1.cloneNode(true);
// let cloneH2 = h1.cloneNode(false);
// body.appendChild(cloneH1);
// body.appendChild(cloneH2);

// function sayHello(){
//     let clone = h1.cloneNode(true);
//     body.appendChild(clone);
// }

// setInterval(sayHello, 2000);

// const h1 = document.querySelector("h1");
// h1.style.color = "white";
// h1.style.backgroundColor = "green";
// h1.innerText = "Ezhilarasan Manjula"
// h1.innerHTML = "<i>vip</i>Ezhilarasan Manjula";


// const body = document.querySelector("body");
// let cloneH1 = h1.cloneNode(true);
// let cloneH2 = h1.cloneNode(false);
// body.appendChild(cloneH1);
// body.appendChild(cloneH2);



// let divclock = document.querySelector(".devclock");
// divclock.style.fontSize = "50px";

//  function currentTime(){
//     let date = new Date()
//     let hours = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
//     divclock.innerHTML = hours;
//  }
// setInterval(currentTime, 1000);



// classList.add()
// classList.remove()
// classList.toggle()
// setAttribute() 
//getAttribite()


//  


// const btnClick = document.querySelector("#btnClick");
// const input = document.querySelector("input")

// btnClick.addEventListener("click", function (){
//     const attri = input.getAttribute("type");
//     if (attri == "text") {
//         input.setAttribute("type", "password");
//     } else{
//         input.setAttribute("type", "text");
//     }
// });


// // hasAttribute()
// console.log(btnClick.hasAttribute("class"));
// // getAttribute()
// // removeAttribute()


/*
Event Handlers
    Inline event listeners
    Inline properties
    Event listenners.
*/


// const ala = document.querySelector(".alert");

// // ala.addEventListener("click", function() {
// //     alert("Welcome to Ezhilarasan");
// // })

// ala.addEventListener("mousedown", function(){
//     this.style.backgroundColor = "red";
// });

// ala.addEventListener("mouseout", function(){
//     this.style.backgroundColor = "blue";
// });

// ala.addEventListener("mouseover", function(){
//     this.style.backgroundColor = "yellow";
// });

/*
Event
    1.Mouse
        click
        dblclick
        mousedown
        mouseout
        mouseup
        mouseover
    2.keyboard
        keydonw
        keypress
        keyup
        keycode
        code
    3. form
        focus
        submit
        blur
        change
    4.Touch
        touchstart
        touchmove
        touchend
        touchcancel
    5.window
        scroll
        resize
        load
        haschange

*/


// const input = document.getElementById("input-num");
// const msg = document.getElementById("error");

// input.addEventListener("keydown", function(event){
//     const key = event.key;
//     if(isNaN(key)){
//         msg.textContent = "Please Enter Number only";
//     }else{
//         msg.textContent = "";
//     }
// })

/*
Form Events in JavaScript
    submit
    reset
    checked
    blur
    focus
    change
*/



