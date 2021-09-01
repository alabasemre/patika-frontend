let time = document.querySelector(".time");
let header = document.querySelector("#hello");
let guest = prompt("Adınızı girin:", "") || "Ziyaretci";
header.innerHTML += guest;

function getTime() {
  let date = new Date();
  let day = "";
  switch (date.getDay()) {
    case 1:
      day = "Pazartesi";
      break;
    case 2:
      day = "Salı";
      break;
    case 3:
      day = "Çarşamba";
      break;
    case 4:
      day = "Perşembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
      break;
    case 7:
      day = "Pazar";
      break;
  }

  time.innerHTML = `${date.toLocaleTimeString()} ${day}`;
  setTimeout(getTime, 1000);
}

getTime();


