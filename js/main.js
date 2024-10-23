
window.onload = function() {

    const header = document.querySelector('header');
    const prevScrollTop = 0;

    if($(window).scrollTop() != 0) {
        header.classList.toggle("active", true);
    }

    document.addEventListener("scroll", function(){
        const nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장
        
        // 스크롤 방향 내리고올릴때 -> 헤더에 active 클래스 추가, 다시 맨위도달 -> active 클래스 삭제
        if (nowScrollTop > prevScrollTop) { 
            header.classList.add("active");
        } 
        else if (prevScrollTop < prevScrollTop) { 
            header.classList.add("active");
        }
        else {
            header.classList.remove("active");
        }
    });  

    //햄버거버튼 toggle
    const mBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const mWrap = document.querySelector(".m-wrap");
    mBtn.addEventListener("click", function() {
        mWrap.classList.add("active");
        if(mWrap.classList.contains("active")) {
            document.body.style.overflow = 'hidden'; //뒷배경 비활성화
        }
    });
    closeBtn.addEventListener("click", function() {
        mWrap.classList.remove("active");
        document.body.style.overflow = 'auto'; //뒷배경 활성화
    });

    const mMenus = document.querySelectorAll(".m-menu li");
    mMenus.forEach((li) => {
        li.addEventListener("click", function() {
            mWrap.classList.remove("active");
            document.body.style.overflow = 'auto'; //뒷배경 활성화
        });
    });


    // main-sec
    const content = "Welcome \n HanSeo's Portfolio";
    const text = document.querySelector(".text");
    let i = 0;

    function typing(){
        if (i < content.length) {
            let txt = content.charAt(i);
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
            i++;
            }
    }
    setInterval(typing, 130);


    // modal
    const addBtns = document.querySelectorAll(".add-btn");
    const modals = document.querySelectorAll(".modal-bg");
    const modalClose = document.querySelectorAll(".modal-btn");
    addBtns.forEach((addBtn, index) => {
        addBtn.addEventListener("click", function() {
            modals[index].classList.add("open");
            document.body.style.overflow = 'hidden';
        });
    });
    modalClose.forEach((close, index) => {
        close.addEventListener("click", function() {
            modals[index].classList.remove("open");
            document.body.style.overflow = 'auto';
        });
    });
    modals.forEach((modal) => {
        modal.addEventListener('click', function(e) {
            e.target;
            e.currentTarget;
            e.preventDefault();
            e.stopPropagation();
            if (e.target == this) {
                this.classList.remove("open");
                document.body.style.overflow = 'auto';
              };
          });
    });
}

 