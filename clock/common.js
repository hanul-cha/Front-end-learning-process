/* 
시계구현 : 10의자리 이하면 0을 붙이는 형식
*/



function clock(){
    

    //날짜 객체 선언
    var today = new Date();


    //문자열로 시간,분,초 등등 단위로 변수대입
    //(변경)if문으로 줄이기 위해 배열에 할당

    var dates = [today.getFullYear(),today.getMonth()+1,today.getDate()];
    var times = [today.getHours(),today.getMinutes(),today.getSeconds()];
    //getDay는 다른 배열을 선언해서 연결해줘야 해서 빼주었음

    

    
    
    
    
    var day = today.getDay();
    var week = ['SUNDAY','MONDAY','TUESDAY','Wednesday','WEDNESDAY','THURSDAY','FRIDAY'];
    

    //문서객체를 선택(배열로 배정)
    var dateObject = document.getElementsByTagName('h3');//복수의 배열로 선택
    var timeObject = document.getElementsByTagName('h2');
    var dayObject = document.getElementById('weekday');

    //태그안에 삽입
    //(변경)for문으로 대입
    

    //한자리수일때 작동 길이로 조건을 걸지 않고 10이하일때로 조건 변경
    for(var i in dates){
        if(dates[i] <10){
          dates[i] = '0' + dates[i];
        }
        if(times[i] <10){
          times[i] = '0' + times[i];
        }
    
    }
    

    dayObject.textContent = week[day];

    //for문으로 좀더 간결하게 바꿔보았음
    for(var i in dateObject){
        dateObject[i].textContent = dates[i];
        timeObject[i].textContent = times[i];
    }   

}

clock();

setInterval(clock,1000);



