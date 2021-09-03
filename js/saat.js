
let saat = document.querySelector("#saat");

function updateTime(){
    let timeNow = new Date();
    
    let dateTime = `Saat:
                    ${timeNow.getHours() < 10 ? "0" +timeNow.getHours() : timeNow.getHours()} :
                    ${timeNow.getMinutes() < 10 ? "0" +timeNow.getMinutes() : timeNow.getMinutes()}  : 
                    ${timeNow.getSeconds() < 10 ? "0" +timeNow.getSeconds() : timeNow.getSeconds()}`; 
    saat.innerHTML = `${dateTime}`;
}
updateTime();
setInterval(updateTime,1000); // her 1 sn de bir saat bilgisi guncellenir

