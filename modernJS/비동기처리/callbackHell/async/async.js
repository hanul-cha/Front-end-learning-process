//async & await
//콜백지옥을 프로미스로 풀어도 무분별한 프로미스의 then은 콜백 지옥처럼 보여질수 있음
//그걸 한번더 깔끔하게 표현한게 async 와 await 임

//1. async
/* function fetchUser() {
    return new Promise((resolve, reject) => {
        resolve( 'hanul' );
    })
}

const user = fetchUser();
user.then(console.log);
console.log(user); */

async function fetchUser() { //자동으로 프로미스로 인식함
    return 'hanul';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


//2. await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000); //await을 사용하면 delay(2000)가 수행을 끝낼때까지 기다려줌
    return '🍎'; //위에것이 끝나면 리턴함
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}


/* 
    프로미스만을 사용하면 밑에 처럼 나옴
    function getBanana() {
        return delay(3000)
        .then(() => '🍌');
    }
*/


//사과와 바나나를 전부 따오는 함수
/* 
    function pickFruits() {
        return getApple()
            .then(apple => {
                return getBanana()
                .then(banana => `${apple} + ${banana}`);
            })
    } 
*/

async function pickFruits() {
    /* const apple = await getApple();
    const banana = await getBanana(); */
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
    //이방식으로 동시 실행가능
}

pickFruits().then(console.log);

//3.
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+'));
}
pickAllFruits()
.then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
