document.addEventListener("DOMContentLoaded" , function() {
    
    function zzz() {
        const x = document.querySelector('#slide');
        x.style.left = "-600px" ;
        x.style.transition = "left 1s";
        setTimeout( function(){
            x.style.left = 0 ;
            x.style.transition = "none";
            x.append( x.firstElementChild );
        } , 1000  );
    }

    setInterval( zzz , 2300 );


});// 이부분은 삭제하면 안됨. 이부분 아래로 코딩하면 안됨.