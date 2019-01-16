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

