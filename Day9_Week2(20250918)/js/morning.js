document.addEventListener("DOMContentLoaded", ()=> {

    //왼쪽방향 자동슬라이드
    function x() {
        const y = document.querySelector("#slide");
        y.style.left = '-1200px';
        y.style.transition = 'left 1s';
        setTimeout( function () {
           y.style.left = 0; 
           y.style.transition = 'none';
           y.append( y.firstElementChild  );
        } , 1000);
    }
    //setInterval( x , 2800);

    const notice_a = document.querySelectorAll('#notice a');
    
    const popup = document.querySelector("#popup");
    const popup_btn = document.querySelector('#popup button');

    notice_a.forEach( i => {
        i.addEventListener('click', function(){
            popup.style.display = 'block';
        }
    )

    popup_btn.addEventListener('click',function(){
        popup.style.display ='none';

    }
)



    });



}); //이부분 아래로는 코드를 작성금지!!!