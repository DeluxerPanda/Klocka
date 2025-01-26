window.onload = function () {
    const klocka = document.getElementById("klocka");
    const title =  document.getElementById("title");
    const dayBG = document.getElementById("DayBG");
    const nightBG = document.getElementById("NightBG");

  update();
  setInterval(update, 1000);

  function update(){
    let hours = new Date().getHours();
    let isDayTime = hours > 6 && hours < 20;
    let time = new Date().toLocaleTimeString('sv-SE', { timeZone: 'Europe/Stockholm', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    klocka.innerText = time;
    title.innerText = "Klockan är: "+ time;
  if (isDayTime) {
    dayBG.style.display = "block";
    nightBG.style.display = "none";
  }else{
    dayBG.style.display = "none";
    nightBG.style.display = "block";
  }
  } 
  } 