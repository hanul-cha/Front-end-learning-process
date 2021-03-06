let date = new Date();

const renderCalendar = () => {
    const viewYear = date.getFullYear(); 
    const viewMonth = date.getMonth();

    document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

    const prevLast = new Date(viewYear, viewMonth, 0);/*지난달 마지막 날짜와 요일  */
    const thisLast = new Date(viewYear, viewMonth + 1, 0);/* 이번달 마지막 날짜와 요일 */

    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    const prevDates = [];/* 상황에 따라 들어갈수도 아닐수도 있어 비워놓음 */
    const thisDates = [...Array(TLDate +1).keys()].slice(1);
    /* 
    1. 조금 특이한 이배열은 Array의 인자로 전달해준 길이만큼 배열이 생성됨
    2. 하지만 요소가 비어있기 때문에 keys로 값을 넣어줌(keys로 0~n-1까지의 배열이 생성)
    3. 원하는 원하는 날짜는 0부터 시작하지 않으니 인자로 넘겨줄때 뒤에날자가 잘리지않게 +1로 넘겨줌
    4. 앞에 0을 노출시키지 않기 위해 잘라줌
    */
    const nextDates = [];/* 상황에 따라 들어갈수도 아닐수도 있어 비워놓음 */

    if (PLDay !== 6) { //토요일이라면 이번달이 1행1열 에서 시작해서 넣어준 조건문
        for (let i = 0; i<PLDay+1; i++) {
            prevDates.unshift(PLDate - i);
        }
    }

    console.log(PLDate)

    for (let i = 1; i<7 - TLDay; i++) {
        nextDates.push(i);
    }

    const dates = prevDates.concat(thisDates, nextDates);

    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);
    /* 
    첫날의 index
    마지막날 index
    */

    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1
                      ? 'this'
                      : 'other';
        dates[i] = `<div class="date"><span class="${condition}">${date}<span></div>`;
    })

    document.querySelector('.dates').innerHTML = dates.join('');

};


renderCalendar();

const prevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}
  
const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}
  
const goToday = () => {
  date = new Date();
  renderCalendar();
}



