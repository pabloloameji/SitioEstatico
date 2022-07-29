function openTab(evt, tabname) {
    var i, tab, tablinks;
  
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}