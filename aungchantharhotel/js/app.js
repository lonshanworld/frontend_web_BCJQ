// Start jQuery Area
$(document).ready(function(){

    // Start room section 
    $('.test-popup-link').magnificPopup({
        type: 'image'
    });
    // End room section

});











// Start javascript Area
// Start Header 

// start navbar 
function dropbtn(e){
    // document.getElementById("mydropdown").classList.toggle("show");
    // console.log(this.nextElementSibling);  => undefined
    // console.log(e.target.nextElementSibling);
    e.target.nextElementSibling.classList.toggle("show")
}

function dropfilter(){
    var getsearch, filter, getdropdiv, getlinks, linkvalue;

    getsearch = document.getElementById("search");
    filter = getsearch.value.toUpperCase();
    // getdropdiv = document.getElementById("mydropdown");
    // getlinks = document.getElementsByTagName("a");
    getlinks = document.querySelectorAll(".mydropdowns a")

    for(var x = 0; x < getlinks.length; x++){
        linkvalue = getlinks[x].textContent || getlinks[x].innerText;
        // console.log(linkvalue);

        if(linkvalue.toUpperCase().indexOf(filter) > -1){
            getlinks[x].style.display ="block";
        }else{
            getlinks[x].style.display ="none";
        }
    }

    // console.log(filter);
}

// end navbar


// Start autobackground 
function* genfun(){
    var index = 8;
    while(true){
        yield index++;

        if(index > 13){
            index = 8;
        }
    }
}

var getgen = genfun();


var getheader = document.querySelector("header");
getheader.style.backgroundImage = `url("./img/banner/banner${getgen.next().value}.jpg")`;

function autoload(){
    // console.log(getgen.next().value);
    getheader.style.backgroundImage = `url("./img/banner/banner${getgen.next().value}.jpg")`;

}

setInterval(autoload,2500);
// End autobackground

// End Header



// Start testimonial section 
const getcompanyname = document.querySelector(".companyname");
const getrole = document.querySelector(".role");
const gettestimonial = document.querySelector(".testimonial");
const testimonialdatas = [
    {
        name: "Rich Star Restaurent",
        position: "Our Outlet",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.  Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        name: "48 Sky Barcafe",
        position: "Our Partner",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.  Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        name: "52 beach hotel",
        position: "Our Branch",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.  Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        name: "Cool and Swimming Pool",
        position: "Our Client",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.  Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        name: "Chaung Thar SPA",
        position: "Our Businesss",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.  Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
];

let index = 0;
function updateTestimonial(){
    // getcompanyname.textContent = testimonialdatas[index].name;
    // getrole.textContent = testimonialdatas[index].position;
    // gettestimonial.textContent = testimonialdatas[index].text;

    const {name,position,text} = testimonialdatas[index];
    getcompanyname.textContent = name;
    getrole.textContent = position;
    gettestimonial.textContent = text;

    index++;

    if(index > testimonialdatas.length-1){
        index=0;
    }
}
updateTestimonial();
setInterval(updateTestimonial, 10000);
// End testimonial section


filterby("all");

// Start property section 
function filterby(keyword){
    // console.log(keyword);
    var getfilters = document.getElementsByClassName("filters");
    // console.log(getfilters);

    if(keyword === "all"){
        keyword = "";
    }

    for (var z = 0; z < getfilters.length; z++){

        removeShowClass(getfilters[z],"show");
        if(getfilters[z].className.indexOf(keyword) > -1){
            addShowClass(getfilters[z],"show");
        }
    }
}

function addShowClass(ele, cls){
    var getfilters = ele.className.split(" ");
    var getcls = cls.split(" ");
    for (var y = 0 ; y < getcls.length; y ++){
        if(getfilters.indexOf(getcls[y]) === -1){
            // ele.classList.add(getcls[y]);
            ele.className += " " + getcls[y];
        }
    }
}

function removeShowClass(ele, cls){
    var getfilters = ele.className.split(" ");
    var getcls = cls.split(" ");

    for(var k=0; k < getfilters.length; k++){

        while(getfilters.indexOf(getfilters[k]) > -1){
            getfilters.splice(getfilters.indexOf(getcls[k]),1);
        }
    }
    // console.log(getfilters.join(' '));
    ele.className = getfilters.join(' ');
    console.log(ele.className);
}

var getftcontrol = document.getElementById("filtercontrol");
var getlis = getftcontrol.getElementsByClassName("list-inline-item");

for(var i = 0; i < getlis.length; i++){
    getlis[i].addEventListener("click",function(){
        var curractives = document.querySelector(".activeitems");
        curractives.className = curractives.className.replace("activeitems","");
        this.className += "activeitems";
    });
}
// End property section



// Start contact section
function tabbox(link, evt, clr){
    var gettabcontent = document.getElementsByClassName("tabcontents");
    var getbtntabs = document.getElementsByClassName("btn-tabs");
    for(var i = 0; i < gettabcontent.length; i++){
        gettabcontent[i].style.display = "none";
        getbtntabs[i].style.backgroundColor = "";
        
    }

    document.getElementById(link).style.display = "block";
    evt.style.backgroundColor = clr;
} 

document.getElementById("autoclick").click();
// End contact section


// 1RM