// $(window).scroll(function(){
//     console.log('hi');
// });

var animation = bodymovin.loadAnimation({
    container: document.getElementById('book-1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data-book1.json'
});

var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('book-2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data-book2.json'
})


//tab
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabContent, tabLink;
  
    // Get all elements with class="tabContent" and hide them
    tabContent = document.getElementsByClassName("result__tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tabLink = document.getElementsByClassName("result__tab-link");
    for (i = 0; i < tabLink.length; i++) {
      tabLink[i].className = tabLink[i].className.replace(" active", "");
      
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

  }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
    
