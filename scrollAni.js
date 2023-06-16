let imgData = [ // []는 배열
        "img/magenta.png",
        "img/deep.png",
        "img/hotpink.png",
        "img/lightpipnk.png",
        "img/pinkcode.png",
        "img/lilac.png",
        "img/lightcoral.png",
        "img/coral.png",
        "img/salmon.png",
        "img/indianpink.png",
        "img/azalea.png",
        "img/watermelon.png"
       
];

let imgName = [
        "#ff00ff",
        "#ff0d90",
        "#fe68b3",
        "#ffb6c1",
        "#ddcbe0",
        "#f08080",
        "#fc7e4f",
        "#f87c4e",
        "#e67669",
        "#9f5257",
        "#de537e",
        "#fc6785"

];

let myThumbnails = document.querySelectorAll(".thumbnail");

let imgTags = document.querySelectorAll(".imageTag");
let thumbTexts = document.querySelectorAll(".textField");

for(let i = 0; i < myThumbnails.length; i++)
{
    imgTags[i].src = imgData[i];
    thumbTexts[i].textContent = imgName[i];

    myThumbnails[i].addEventListener('mouseover', overFn);
    myThumbnails[i].addEventListener('mouseout', outFn);
}

function overFn(e)
{
    //console.log(e.composedPath()[1].querySelector(".imageTag"));
    e.composedPath()[1].querySelector(".imageTag").classList.add('on');
    e.composedPath()[0].classList.add('on');
}

function outFn(e)
{
    //console.log("out");
    e.composedPath()[1].querySelector(".imageTag").classList.remove('on');
    e.composedPath()[0].classList.remove('on');
}

document.addEventListener('DOMContentLoaded',setVal);

var targetScrollPos;
var scrollPos=0;
var nowScrollPos = pageYOffset;
var scrollInterval;


function setVal()
{

    console.log("loaded!");
    var menu= document.querySelectorAll('#menus ul li');
    var contents= document.querySelectorAll('#contents > section') 

    for(var i =0;i < menu.length; i++)
    {
        menu[i].addEventListener('click', menuClick);
      
        function menuClick()
        {
            clearInterval(scrollInterval);
            var index = this.getAttribute('clickVal');
            targetScrollPos = contents[index].offsetTop;
           
            //console.log(targetScrollPos);

           // window.scroll(0,targetScrollPos);

            scrollInterval = setInterval(moveTo,50);
        }
    }

}
window.addEventListener('scroll',scrollFn);

function scrollFn()
{
    nowScrollPos = pageYOffset;
    scrollPos = nowScrollPos;
}

function moveTo()
{
      scrollPos += (targetScrollPos - nowScrollPos) * 0.05;
      window.scroll(0, Math.round( scrollPos));
      

      if(Math.abs( targetScrollPos - scrollPos) <= 1)
      {
            window.scroll(0, targetScrollPos);
            nowScrollPos = targetScrollPos;
           clearInterval(scrollInterval);
      }
      else
      {
            scrollAni = requestAnimationFrame(moveTo);
      }
}
