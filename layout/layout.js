var i = 0;
var images = [];
var text = [];
var text_secondary = [];
var time = 3000;

var h4_1=0;
var h4_2=0;
var h4_3=0;
var h4_4=0;

images[0] = "https://fastwpdemo.com/newwp/immigo/wp-content/uploads/2022/02/banner-3.jpg";
images[1] = "https://fastwpdemo.com/newwp/immigo/wp-content/uploads/2022/02/banner-1.jpg";
images[2] = "https://fastwpdemo.com/newwp/immigo/wp-content/uploads/2022/02/banner-2.jpg";
images[3] = "https://fastwpdemo.com/newwp/immigo/wp-content/uploads/2022/02/banner-4.jpg";

text[0] = "Your student VISA process starts here!";
text[1] = "Let's plan the Journey of your dreams!";
text[2] = "Study in the Recognized Universities!..";
text[3] = "Step into your dream world..";

text_secondary[0] = "Fly to your dream destination with us.";


function changeImg() {
    if (document.slide) {
        document.slide.src = images[i];
        document.getElementById("slide_heading").innerHTML = text[i];
        document.getElementById("slide_text").innerHTML = text_secondary[0];

        if (i == 2)
        {
            document.getElementById("slide_heading").style.right = "20px";
            document.getElementById("slide_text").style.right = "20px";
            document.getElementById("slide_heading").style.left = "auto";
            document.getElementById("slide_text").style.left = "auto";
            i++;
        }
        
        else if (i < images.length - 1 || i == 3) {
            document.getElementById("slide_heading").style.right = "auto";
            document.getElementById("slide_text").style.right = "auto";
            document.getElementById("slide_heading").style.left = "20px";
            document.getElementById("slide_text").style.left = "20px";
            i++;
        }
        
        else {
            i = 0;
        }

        setTimeout("changeImg()", time);
    }
}

var cards = document.getElementsByClassName("swiper-slide");


window.onload = function () {
    changeImg();
    loadNavBar();
    loadFooter();
    openTab('','Australia');
    delay();
    document.getElementsByClassName("tablinks1")[0].classList.add("active");
};


function delay(){
    setInterval(function(){
        if(h4_1 != 4000)
        {
            h4_1++;
        }
       
        document.getElementById("fourThousand").innerHTML=h4_1 + "+";
       
    },10);

    setInterval(function(){
       
        if(h4_2 != 150)
        {
            h4_2++;
        }
        if(h4_3 != 18)
        {
            h4_3++;
        }
        if(h4_4 != 99)
        {
            h4_4++;
        }
        document.getElementById("oneFifty").innerHTML=h4_2 + "+";
        document.getElementById("eighteen").innerHTML=h4_3 + "+";
        document.getElementById("ninetyNine").innerHTML=h4_4 + "%";
    },100);

    
}

function openNewTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    if(evt)
    {
        evt.currentTarget.className += " active";
    }
}

function activeTab(activeTab){

    let allTabs=document.querySelectorAll("[id='navBartab']");
    for(let i=0;i<allTabs.length;i++)
    {
        allTabs[i].classList.remove('active');
    }

    allTabs[activeTab].classList.add("active");


}

function loadNavBar() {
    var nav = document.getElementById("nav");
    var footer = document.getElementById("footer");

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                nav.innerHTML = this.responseText;
            }
            if (this.status == 404) {
                nav.innerHTML = "Page not found";
            }
        }
    }

    xhttp.open("GET", "../shared/navbar.html", true);
    xhttp.send();
    return;
}

function loadFooter() {
    var footer = document.getElementById("footer");

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                footer.innerHTML = this.responseText;
            }
            if (this.status == 404) {
                footer.innerHTML = "Page not found";
            }
        }
    }

    xhttp.open("GET", "../shared/footer.html", true);
    xhttp.send();
    return;
}

window.onscroll = function () {
    if (window.scrollY >= 100) {
        document.getElementsByClassName("topnav")[0].classList.add("stickyNav");
    }
    else {
        document.getElementsByClassName("topnav")[0].classList.remove("stickyNav");
    }
}