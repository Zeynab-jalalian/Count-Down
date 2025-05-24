let target = new Date("Sept 7,2070 0:0:0").getTime();

function timer() {
    let now = new Date().getTime();
    let diff = Math.floor((target - now) / 1000);

    let day = Math.floor(diff / (3600 * 24));
    let hour = Math.floor(diff % (3600 * 24) / 3600);
    let minute = Math.floor(diff % 3600 / 60);
    let second = Math.floor(diff % 60);

    document.querySelector("#day").innerHTML=day;
    document.querySelector("#hour").innerHTML=hour;
    document.querySelector("#minute").innerHTML=minute;
    document.querySelector("#second").innerHTML=second;
}
timer();
setInterval(timer,1000);