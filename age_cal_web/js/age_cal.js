function calc() {
    let now = new Date();
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth()+1;
    let currentDay = now.getDate();
    var Year = 0
    var Month = 0
    var Day = 0
    var birthDay = prompt("태어난 생년월일를 입력하세요.","YYYYMMDD");
    var Year = birthDay.slice(0,4)
    var Month = birthDay.slice(4,6)
    var Day = birthDay.slice(6)
    console.log(Year)
    console.log(currentMonth)
    console.log(Day)
    var age = 0;
    age = currentYear - Year;
    if (Month > currentMonth) {
        age -= 1;
    } else if (Month == currentMonth) {
        if (Day < currentDay) {
            age -= 1;
        }
    }
    document.querySelector("#result").innerHTML = "당신의 나이는 만 " + age + "세 입니다.";
}
