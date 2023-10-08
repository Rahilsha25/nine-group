function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    if(evt)
    {
        evt.currentTarget.className += " active";
    }
}

function openVeritcalTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("verticalTabs");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("vertical_tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    if(evt)
    {
        evt.currentTarget.className += " active";
    }
}

window.addEventListener("load", init);

function init(){
    openTab('','Immigration');
    openVeritcalTab('','freeConsultation');
    document.getElementsByClassName("tablinks")[0].classList.add("active");
    document.getElementsByClassName("vertical_tab")[0].classList.add("active");
};