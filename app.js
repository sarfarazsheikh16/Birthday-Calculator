document.getElementById("btn").addEventListener("click", calculate);

// calculation function
function calculate() {
  let previousyear = document.getElementById("year").value;
  let previousmonth = document.getElementById("month").value;
  let previousDate = document.getElementById("date").value;

  // current date
  let currentyear = new Date().getFullYear();
  let currentmonth = new Date().getMonth() + 1;
  let currentDate = new Date().getDate();
  console.log(currentyear, currentmonth, currentDate);

  // output box
  let dayBox = document.getElementById("sp-date");
  let monthBox = document.getElementById("sp-month");
  let yearBox = document.getElementById("sp-year");

  // calculation
  var d;
  var m;
  var y;
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (previousyear <= currentyear && previousmonth <= 12 && previousDate <= 31) {
    // main logic
    if (previousDate > currentDate) {
      currentDate = currentDate + month[ currentmonth- 1];
    currentmonth = currentmonth - 1;
    }
    if (previousmonth > currentmonth) {
      currentmonth = currentmonth + 12;
      currentmonth = currentmonth - previousmonth;
    }

    m = currentmonth - previousmonth;
    d = currentDate - previousDate;
    y = currentyear - previousyear;
    dayBox.textContent = d;
    monthBox.textContent = m;
    yearBox.textContent = y;
  } else {
    let inputs = document.getElementsByClassName("birth-inp");
    Array.from(inputs).forEach((e)=>{
      e.value = "";
    });
    alert("please Enter Valid Date");
  }
}
