// 슬라이드 js
    
        function autoSlide(){
            banner.style.transition = "transform 0.5s"
            // 마지막 슬라이드일 때
            // 6번 뒤에 1번 배치시킨다.
            // 6번에서 1번으로 슬라이드 진행
            // 0s를 줘서 원래 1번 위치로 이동(슬라이드 효과는 안보임)
            count ++;
            if(count == 6){
                buttons[count - 1].style.backgroundColor = "#f0f0f0";
                banner.style.transform = "translate(-" + 100* (count + 1) + "vw)";
                setTimeout(function(){
                    banner.style.transition = "transform 0s"
                    banner.style.transform = "translate(-100vw)";
                }, 500);
                count = 0;
                buttons[count].style.backgroundColor = "black";
            }else{
                buttons[count - 1].style.backgroundColor = "#f0f0f0";
                buttons[count].style.backgroundColor = "black";
                banner.style.transform = "translate(-" + 100 * (count + 1) + "vw)";
            }
            temp = buttons[count];
        }

    // 무한 반복
    const banner = document.querySelector("div.banner");
    const buttons = document.querySelectorAll("div.buttons button");
    var count = 0, temp = buttons[count];
    let firstDiv = document.createElement("div");
    let lastDiv = document.createElement("div");

    firstDiv.innerHTML = '<img src="banner/001.png">';
    banner.appendChild(firstDiv);
    
    lastDiv.innerHTML = '<img src="banner/006.png">';
    banner.insertBefore(lastDiv, document.querySelector("div.banner div"));
    
    buttons[count].style.backgroundColor = "black";

    banner.style.transform = "translate(-100vw)";

    
    var inter = setInterval(autoSlide, 4000);

    // 원하는 번호의 배너 보기
    // 각 버튼마다 클릭 이벤트 적용
    var numberButtonCheck = true;
    buttons.forEach((v, i, btns) => {
        btns[i].addEventListener("click", function(){
            banner.style.transition = "transform 0.5s"
            if(numberButtonCheck){
                numberButtonCheck = false;
                clearInterval(inter);
                count = i;
                temp.style.backgroundColor = "#f0f0f0";
                buttons[count].style.backgroundColor = "black";
                banner.style.transform = "translate(-" + 90 * (count + 1) + "vw)";
                temp = buttons[count];
                inter = setInterval(autoSlide, 4000);
                setTimeout(function(){
                    numberButtonCheck = true;
                }, 500);
            }
        });
    });

    // 이전 버튼, 다음 버튼 구현
    const arrows = document.querySelectorAll("div.arrow");
    var arrowButtonCheck = true;
    arrows.forEach(arrow => {
        arrow.addEventListener("click", function(){
            if(arrowButtonCheck){
                arrowButtonCheck = false;
                clearInterval(inter);
                banner.style.transition = "transform 0.5s"
                let arrowType = arrow.classList[2];
                if(arrowType == 'prev'){
                    count--;
                    if(count == -1){
                        banner.style.transform = "translate(0vw)";
                        setTimeout(function(){
                            banner.style.transition = "transform 0s"
                            banner.style.transform = "translate(-600vw)";
                        }, 500);
                        count = 5;
                    }else{
                        banner.style.transform = "translate(-" + 100 * (count + 1) + "vw)";
                    }
                }else{
                    count++;
                    if(count == 6) {
                        banner.style.transform = "translate(-" + 100 * (count + 1) + "vw)";
                        setTimeout(function(){
                            banner.style.transition = "transform 0s"
                            banner.style.transform = "translate(-100vw)";
                        }, 500);
                        count = 0;
                    }else{
                        banner.style.transform = "translate(-" + 100 * (count + 1) + "vw)";
                    }
                }
                temp.style.backgroundColor = "#f0f0f0";
                temp = buttons[count];
                buttons[count].style.backgroundColor = "black";
                inter = setInterval(autoSlide, 4000);
                setTimeout(function(){
                    arrowButtonCheck = true;
                }, 500);
            }
        });
    });

    // 하트에 커서 올리면 색변환
    // 카트에 커서 올리면 색변환 ( 쪽지? )
    // 입양 페이지 이동
    // 봉사 페이지 이동
    // 입양후기 페이지 이동
    // 이벤트 페이지 이동
