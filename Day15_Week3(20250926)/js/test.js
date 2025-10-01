document.addEventListener("DOMContentLoaded" , ()=> {

    //fade 슬라이드 (opacity)
    const $slide_a = document.querySelectorAll('#slide a');//NodeList
    let i = 0;
    const fading = ()=> {
        $slide_a.forEach( i=> i.style.opacity = 0 );
        $slide_a[i].style.opacity = 1;
        i = ( i + 1) % 3;
    }    
    setInterval( fading , 2800 );

    //(공지사항 / 갤러리 ) 탭 전환하여 콘텐츠 보이기
    const $nogel_btn = document.querySelectorAll('#nogel button'); //NodeList
    const $notice =   document.getElementById('notice');
    const $gallery =  document.getElementById('gallery');

    $nogel_btn.forEach( (i,j)=> {
        i.addEventListener('click' , ()=> {
            $nogel_btn.forEach( b=> b.classList.remove('active'));
            i.classList.add('active');

            if( j === 0) {               
                $notice.style.display = 'block';
                $gallery.style.display = 'none';
            } else {
                $notice.style.display = 'none';
                $gallery.style.display = 'flex';
            }
        });
    });

    //공지사항 팝업모달
    const $notice_a = document.querySelectorAll('#notice a');
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

    //웹접근성 향상 (팝업모달)
    document.addEventListener('keyup' , e =>{
        if( e.key === 'Escape')  $popup.style.display = 'none';
    });


});////////////////////// 아래부분에 코딩하지 말자