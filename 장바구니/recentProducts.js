//문서객체 선택
let contentA = document.querySelectorAll('#nameConInner>li>p');
let aside = document.getElementById('aside');
let contentliImg = document.querySelectorAll('#nameConInner>li>img');
let localArr = [];

function setSrc() {
    localStorage.setItem("src", JSON.stringify(localArr));//로컬값을 각각의스트링으로 만들어줄거임(배열처럼)
}

function addHeart(localStr,tagP) {
    let newImg = document.createElement("img");
    newImg.id = localStr.id;
    newImg.src = localStr.src;
    aside.appendChild(newImg);

    console.log(tagP);
    tagP.innerHTML = "🧡";
    for(let j=0;j<contentliImg.length;j++){
        if(localStr.src == contentliImg[j].src){
            contentliImg[j].parentElement.querySelector('p').innerHTML = "🧡";
        }
    }
    
}


function clickHeart() {
    let li = this.parentElement.firstElementChild.src;
    
    const localStr = {
        src: li,
        id: Date.now(),
    }
    localArr.push(localStr);
    if(this.innerHTML == "🤍"){
        addHeart(localStr,this);
        
        /* this.innerHTML = "🧡"; */
    }else{
        this.innerHTML = "🤍";

    }
    setSrc();
    console.log(this);
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


