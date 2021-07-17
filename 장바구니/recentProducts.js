//문서객체 선택
let contentA = document.querySelectorAll('#nameConInner>li>p');
let aside = document.getElementById('aside');

let localArr = [];

function setSrc() {
    localStorage.setItem("src", JSON.stringify(localArr));//로컬값을 각각의스트링으로 만들어줄거임(배열처럼)
}

function addHeart(localStr) {
    this.innerHTML = "🧡";
    console.log(this);
    let newImg = document.createElement("img");
    newImg.src = localStr.src;
    aside.appendChild(newImg);
}

function clickHeart() {
    let li = this.parentElement.firstElementChild.src;
    const localStr = {
        src: li,
        id: Date.now(),
    }
    localArr.push(localStr);
    console.log(localArr);
    if(this.innerHTML == "🤍"){
        addHeart(localStr);
        
    }else{
        this.innerHTML = "🤍";

    }
    setSrc()
}

//클릭이벤트
for(let i=0;i<contentA.length;i++){
    contentA[i].addEventListener('click',clickHeart);
}

const savedsrc = localStorage.getItem("src");
if(savedsrc){//로컬스토리지가 있다면
    const parsedSrc = JSON.parse(savedsrc);//배열로 만들어 줄것임
    localArr = parsedSrc;
    parsedSrc.forEach(addHeart);//배열의 아이템들에 한개의 함수을 실행시킴
}


