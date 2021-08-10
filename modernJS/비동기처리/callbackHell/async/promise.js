'use strict';

// 프로미스 : 자바스크립트 안에 내장되있는 오브젝트
/* 
    state: 프로미스가 만들어져서 오퍼레이션을 수행중일땐 pending상태 -> 오퍼레이션이 끝나면
    fulfilled상태 파일을 못찾거나 네트워크에 문제가 있다면 rejected

    producer: 우리가 원하는 기능을 수행해서 해당하는 데이터를 만들어냄
    consumer: 우리가 원하는 데이터를 소비하함

*/

//producer

//새로운 피로미스가 만들어질땐 전달한 executor 가 자동적으로 바로 실행됨
const promise = new Promise((resolve, reject) => {//  (resolve, reject): executor
    //네트워크 통신같이 무거운일들은 프로미스를 만들어서 비동기 처리하는게 좋음(일을끝낼때까지 다음줄의 명령은 하지않기때문)
    console.log('test');
    setTimeout(() => {
        //resolve('ok'); // 성공적으로 기능을 수행하고 나서 수행될 함수
        reject(new Error('no network'));
    },2000);
}); 

//consumers : then, catch, finally
promise
    .then((value) => { //값이 정상적으로 잘 수행이 된다면, 20번시트의 reslve의 값이 여기 할당
        console.log(value);
    }) // 체이닝 - then을 호출하면 똑같은 promise를 리턴해서 catch를 사용가능
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    })

//promis chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1),1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1),1000);
        });
    })
    .then(num => console.log(num));

//error hendling

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`🐓`),1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`),1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🐣`),1000);
    });

/* getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal)); */
getHen().then(getEgg).then(cook).then(console.log);
//인자를 하나만 받는경우 이렇게 줄여 쓸수 있다