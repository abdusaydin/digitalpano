// SAAT + TARİH
function updateClock() {
  let now = new Date();

  let time = now.toLocaleTimeString("tr-TR");

  let date = now.toLocaleDateString("tr-TR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  document.getElementById("clock").innerText = time;
  document.getElementById("date").innerText = date;
}

setInterval(updateClock, 1000);
updateClock();


// VERİ YÜKLE
function loadData() {
  let data = JSON.parse(localStorage.getItem("panoData"));

  if (!data) return;

  document.getElementById("quote").innerText = data.quote;
  document.getElementById("tickerText").innerText = data.ticker;

  let list = document.getElementById("teachers");
  list.innerHTML = "";

  data.teachers.forEach(t => {
    let li = document.createElement("li");
    li.innerText = t;
    list.appendChild(li);
  });
}

window.onload = loadData;
