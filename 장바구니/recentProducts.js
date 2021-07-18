//문서객체 선택
let contentA = document.querySelectorAll('#nameConInner>li>p');
let aside = document.getElementById('aside');
let contentliImg = document.querySelectorAll('#nameConInner>li>img');

let localArr = [];// 비어있는 객체선언

//로컬에 할당
function setSrc() {
    localStorage.setItem("src", JSON.stringify(localArr));//로컬값을 각각의스트링으로 만들어줄거임(배열처럼)
}

//하트색을 채우는 구문
function addHeart(localStr,tagP) {
    let newImg = document.createElement("img");
    
    newImg.src = localStr.src;
    newImg.id = localStr.id;
    aside.appendChild(newImg);

    tagP.innerHTML = "🧡";
    for(let j=0;j<contentliImg.length;j++){
        if(localStr.src == contentliImg[j].src){
            contentliImg[j].parentElement.querySelector('p').innerHTML = "🧡";
            contentliImg[j].parentElement.id = localStr.id;
        }
    }
}


//로컬, aside삭제
function deleteHeart(deletTagP) {
    let newAsideImg = document.querySelectorAll('#aside>img');
    for(let k=0;k<newAsideImg.length;k++){
        if(newAsideImg[k].id == deletTagP.parentElement.id){
            newAsideImg[k].remove();
        }
    }
    const deletLi = deletTagP.parentElement;
    localArr = localArr.filter(lA => lA.id !== parseInt(deletLi.id));
    setSrc();
}


//클릭 이벤트 핸들러
function clickHeart() {
    if(this.innerHTML == "🤍"){
        let li = this.parentElement.firstElementChild.src;
    
        const localStr = {
            src: li,
            id: Date.now(),
        }

        localArr.push(localStr);
        addHeart(localStr,this);
    }else{
        this.innerHTML = "🤍";
        deleteHeart(this);
    }
    setSrc();
}

//클릭이벤트
for(let i=0;i<contentA.length;i++){
    contentA[i].addEventListener('click',clickHeart);
}


//첫동작구문
const savedsrc = localStorage.getItem("src");
if(savedsrc){//로컬스토리지가 있다면
    const parsedSrc = JSON.parse(savedsrc);//배열로 만들어 줄것임
    localArr = parsedSrc;
    parsedSrc.forEach(addHeart);//배열의 아이템들에 한개의 함수을 실행시킴
}


