document.addEventListener("DOMContentLoaded", ()=> {

    //상단 메뉴에 마우스를 델때
    const header_ul = document.querySelector('header ul');
    const whiteBg  =  document.getElementById('whiteBg');    

    header_ul.addEventListener('mouseenter' , ()=> {
        whiteBg.style.height = "150px";
    });
    header_ul.addEventListener('mouseleave' , ()=> {
        whiteBg.style.height = 0;
    });

    //왼쪽으로 자동이동하는 슬라이드
    const leftMove = ()=> {
        const slide = document.getElementById('slide');
        slide.style.left = "-1000px";
        slide.style.transition = 'left 1s';
        setTimeout( ()=> {
            slide.style.left = 0;
            slide.style.transition = 'none';
            slide.append( slide.firstElementChild );
        } , 1000 );
    }

    setInterval( leftMove , 2800 );
    
    //공지사항의 <a>를 클릭하면 팝업이 보인다
    const notice_a = document.querySelectorAll('#notice a');//NodeList
    const popup = document.getElementById('popup');
    const popup_btn = document.querySelector("#popup button");

    notice_a.forEach( i=> {
        i.addEventListener('click' , ()=>{
            popup.style.display= 'block';   
        });
    });
    popup_btn.addEventListener('click' , ()=> {
        popup.style.display= 'none';
    });



});//이 아래로는 작업하지 말것!!!