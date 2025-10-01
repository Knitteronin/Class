document.addEventListener("DOMContentLoaded" , ()=> {

    //위에서 아래로 자동이동하는 슬라이드
    const $slide = document.getElementById('slide'); //HTMLDivElement
    
    const toBottom = ()=> {
        $slide.style.transition= "top 1s";
        $slide.style.top = '-300px';

        setTimeout( ()=> {
            $slide.style.transition= "none"; //순간작동함.
            $slide.style.top = '-600px';
            $slide.prepend( $slide.lastElementChild );
        } , 1000 );
    }

    setInterval( toBottom, 2800 );

    // 공지사항, 갤러리 전환하기
    const $nogel_btn = document.querySelectorAll("#nogel button"); //NodeList
    const $notice =   document.getElementById('notice');
    const $gallery  = document.getElementById("gallery");

    $nogel_btn.forEach( (i,j)=> {
        i.addEventListener('click' , ()=> {
            
            $nogel_btn.forEach( b=> b.classList.remove('active'));
            i.classList.add('active');           

           if(j === 0) {
                $notice.style.display= 'block';
                $gallery.style.display = 'none';
           } else {
                $notice.style.display= 'none';
                $gallery.style.display = 'block';
           }
        });
    });

    // 공지사항 팝업창 켜기/끄기
    const $notice_a = document.querySelectorAll('#notice a');
    const $popup = document.getElementById('popup');
    const $button = document.querySelector('#popup button');

    //클릭해야할 대상이 여러개 일때 forEach
    $notice_a.forEach( i => {
        i.addEventListener('click' , () => {
            $popup.style.display ='block';
        });
    });

    // 팝업모달 닫기
    // 클릭할 대상이 한개일때.
    $popup_btn.addEventListener('click', () => {
        $popup.style.display = 'none';
    });

}); ///////////////////이 밑으로 작업하지 말기