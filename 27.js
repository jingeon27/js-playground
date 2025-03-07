const PVLastDate = new Date(2023, 2 - 1, 0).getDate();
const PVLastDay = new Date(2023, 2 - 1, 0).getDay();

//해당 월의 마지막 주의 날짜를 계산.
const ThisLasyDay = new Date(2023, 2, 0).getDay();
const ThisLasyDate = new Date(2023, 0, 0).getMonth();

const now = new Date().toISOString().substring(0, 10);
console.log(new Date(now).getFullYear());
console.log(new Date("2023-05-23").getDate.toString);
// .toISOString().substring(0, 10)
