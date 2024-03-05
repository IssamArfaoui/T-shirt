
// cancel

let icon = document.getElementById('cancel');
let cancel = document.getElementsByTagName('p')

icon.addEventListener('click',function() {
    cancel[0].style.display='none'
    icon.style.display='none';
})

let menu = document.getElementsByClassName('menu') ;
let b = document.getElementsByClassName('b') ;
let span = document.getElementById('span');

menu[0].addEventListener('click',function() {
    if (span.classList.toggle('toggle')) {
        span.style.cssText=`
        transition: .8s;
        transform :translateY(100%)
        `
        b[0].style.cssText=`
        transform: rotate(45deg);
        top: 10px;
        transition: .8s;
        `
        b[1].style.cssText=`
        opacity: 0;
        transition: .8s;
        `
        b[2].style.cssText=`
        transform: rotate(-45deg);
        top: 10px;
        transition: .8s;
        `
    }
    else {
        span.style.cssText=`
        transition: .8s;
        `
        b[1].style.cssText=`
        transition: .8s;
        `
        b[0].style.cssText=`
        transition: .8s;
        `
        b[2].style.cssText=`
        transition: .8s;
        `
    }
})

let link = document.getElementsByClassName('link');
let sub = document.getElementsByClassName('sub');
let sub1 = document.getElementById('sub1');
let sub2 = document.getElementById('sub2');

link[1].addEventListener('click',function() {
    if (link[1].classList.toggle('open')) {
        sub[0].style.cssText=`       
        display :block;
        `
        sub1.style.cssText=`       
        transform: rotate(90deg);
        transition : .3s;
        `
    }
    else {
        sub[0].style.display='';
        sub1.style.cssText=`       
        transition : .3s;
        `
    }
})
link[2].addEventListener('click',function() {
    if (link[2].classList.toggle('open')) {
        sub[1].style.cssText=`       
        display :block;
        `
        sub2.style.cssText=`       
        transform: rotate(90deg);
        transition : .3s;
        `
    }
    else {
        sub[1].style.display='';
        sub2.style.cssText=`       
        transition : .3s;
        `
    }
})



// T-shirt


// 1
let image_1 = document.getElementById('img1');

image_1.addEventListener('mouseover' ,function() {
    image_1.src='images/prd-1/back1.png'

})
image_1.addEventListener('mouseout' ,function() {
    image_1.src='images/prd-1/front1.png'

})
// 2
let image_2 = document.getElementById('img2');

image_2.addEventListener('mouseover' ,function() {
    image_2.src='images/prd-2/back2.png'

})
image_2.addEventListener('mouseout' ,function() {
    image_2.src='images/prd-2/front2.png'

})
let image_3 = document.getElementById('img3');

image_3.addEventListener('mouseover' ,function() {
    image_3.src='images/prd-3/back3.png'

})
image_3.addEventListener('mouseout' ,function() {
    image_3.src='images/prd-3/front3.png'

})

