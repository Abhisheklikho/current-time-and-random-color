let hours = document.getElementById("hour");
let minuts = document.getElementById("minut");
let seceonds = document.getElementById("seceond");
let amPmElement = document.getElementById("am-pm");
let heading = document.querySelectorAll(".heading1")



const getRandomColor = () => {
    
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + letter[Math.floor(Math.random() * 16)];
        
    }
    return color;
}

const changeHeadingColor = () => {
    const color = getRandomColor();
    heading.forEach((headings)=>{headings.style.color = color;})
};

changeHeadingColor();
setInterval(changeHeadingColor,1000)
 
 


const count = ()=>{
  
    const currentDate = new Date();

   let hour = currentDate.getHours();
   let minut = currentDate.getMinutes();
    let seceond = currentDate.getSeconds();
    
    amPmElement.innerText = hour >= 12 ? "PM" : "AM"; //Determine if it's AM or PM

    hour = (hour % 12) || 12;

  hour = hour.toString().padStart(2,"0")
  minut =  minut.toString().padStart(2,"0")
  seceond = seceond.toString().padStart(2,"0")

    hours.innerText = hour;
    minuts.innerText = minut;
    seceonds.innerText = seceond;

    seceonds.style.color = getRandomColor();
    
};



count();

setInterval(count, 1000);