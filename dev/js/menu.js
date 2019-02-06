// import { isString } from "util";

(function() {
    var container = document.getElementById( 'container' ),
        trigger = document.querySelector( '.trigger' );


    function toggleContent() {
        console.log('close');

        if(container.classList.contains('container--open')){
            container.classList.remove('container--open');
            // window.addEventListener( 'scroll', noscroll );
        } else {
            console.log('open');
            container.classList.add('container--open');
            // window.removeEventListener( 'scroll', noscroll );
        }
    }

    function noscroll() {
        window.scrollTo( 0, 0 );
    }

    // reset scrolling position
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    // disable scrolling
    // window.addEventListener( 'scroll', noscroll );

    trigger.addEventListener( 'click', toggleContent );

    // For Demo purposes only (prevent jump on click)
    //[].slice.call( document.querySelectorAll('.items-wrap a') ).forEach( function(el) { el.onclick = function() { return false; } } );
})();