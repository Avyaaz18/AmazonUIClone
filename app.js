document.querySelector('.right-arr').addEventListener('click',
    function (event) {
        console.log('hi');

        const slider = document.querySelector('.products-sec');
        slider.scrollLeft += 1200;
        event.preventDefault();
    }
);

document.querySelector('.left-arr').addEventListener("click",
    function (event) {
        const slider = document.querySelector('.products-sec');
        slider.scrollLeft -= 1200;
        event.preventDefault();
    }
);

document.querySelector('.rht').addEventListener('click',
    function (event) {
        console.log('hi');
        const slider1 = document.querySelector('.one');
        slider1.scrollLeft += 1200;
        event.preventDefault();
    }
);

document.querySelector('.lft').addEventListener("click",
    function (event) {
        const slider1 = document.querySelector('.one');
        slider1.scrollLeft -= 1200;
        event.preventDefault();
    }
);

document.querySelector('.rht-1').addEventListener('click',
    function (event) {
        console.log('hi');
        const slider1 = document.querySelector('.two');
        slider1.scrollLeft += 1200;
        event.preventDefault();
    }
);

document.querySelector('.lft-1').addEventListener("click",
    function (event) {
        const slider1 = document.querySelector('.two');
        slider1.scrollLeft -= 1200;
        event.preventDefault();
    }
);

document.querySelector('.rht-2').addEventListener('click',
    function (event) {
        console.log('hi');
        const slider1 = document.querySelector('.three');
        slider1.scrollLeft += 1200;
        event.preventDefault();
    }
);

document.querySelector('.lft-2').addEventListener("click",
    function (event) {
        const slider1 = document.querySelector('.three');
        slider1.scrollLeft -= 1200;
        event.preventDefault();
    }
);


const goTop = document.querySelector(".top-btn");
goTop.addEventListener("click",() => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})

const sidebar = document.querySelector(".side-bar");
const closemark = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".All");

sidebtn.addEventListener("click",()=>{
    sidebar.classList.add("active");
    closemark.classList.add("active");
    black.classList.add("active");
    document.body.classList.add(".stop-scroll");
})

closemark.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    closemark.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove(".stop-scroll");
})

const sign = document.querySelector(".item1");
const popup1 = document.querySelector(".down-pop");
const signin = document.querySelector(".hidden");

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    popup1.classList.toggle("active");
    document.body.classList.toggle(".stop-scroll");
})





