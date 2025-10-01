document.addEventListener("DOMContentLoaded" , ()=>{

    //fade 슬라이드 (opacity)
    const $slide_a = document.querySelectorAll('#slide a');//NodeList
    let i = 0; //[0,1,2]
    const fading =  ()=> {
        //현재는 마지막 3번 이미지(궁중문화축전)가 보이는 상태.
        //모든 <a>를 안보이게 한다
        $slide_a.forEach( j=> j.style.opacity = 0 ) ;
        //2,8초후에 장미가 보이게 된다.
        $slide_a[i].style.opacity = 1; //보이는 <a> 이미지를 결정한다.
        i = (i + 1) % 3 ; //i는 0,1,2,0... 재당할되야 한다.
    }
    setInterval( fading, 2800);

    //공지사항 팝업
    const $notice_a = document.querySelectorAll('#notice a');//NodeList
    const $popup  =   document.getElementById('popup');
    const $popup_btn =document.querySelector('#popup button');

    $notice_a.forEach( i=> {
        i.addEventListener('click' , ()=> {
            $popup.style.display = 'block';
        });
    });

    $popup_btn.addEventListener('click' , ()=> {
        $popup.style.display = 'none';
    });
    //웹접근성 향상
    document.addEventListener('keyup' , e=> {
        if(  e.key === 'Escape')   $popup.style.display = 'none';
    });


}); ////////////// js는 끝났다