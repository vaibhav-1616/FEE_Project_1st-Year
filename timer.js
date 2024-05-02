// const days = document.getElementById('days');
// const hours = document.getElementById('hours');
// const minutes = document.getElementById('minutes');
// const seconds = document.getElementById('seconds');

// const currentYear = new Date().getFullYear();  // gives the current year 

// const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// // Update countdown time
// function updateCountdown() {
// 	const currentTime = new Date();
// 	const diff = newYearTime - currentTime;

// 	const d = Math.floor(diff / 1000 / 60 / 60 / 24);
// 	const h = Math.floor(diff / 1000 / 60 / 60) % 24;
// 	const m = Math.floor(diff / 1000 / 60) % 60;
// 	const s = Math.floor(diff / 1000) % 60;

// 	days.innerHTML = d;
// 	hours.innerHTML = h < 10 ? '0' + h : h;
// 	minutes.innerHTML = m < 10 ? '0' + m : m;
// 	seconds.innerHTML = s < 10 ? '0' + s : s;
// }

// setInterval(updateCountdown, 1000);


const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


function clock(){
    let endtime = document.getElementById('show').value;
    const end = new Date(endtime)
    const now = new Date()
    const diff = (end - now) /1000;     // milliseconds converted to secs.
    // console.log(diff)
    // const day = Math.floor(diff/60/60/24);   // converts the seconds into days.
    // console.log(day);
    if (diff < 0) return ('00:00:00');
    const d = Math.floor(diff / 60/60/24);
    const h = Math.floor(diff / 60 / 60) %24;
    const m = Math.floor(diff / 60) % 60;
    const s = Math.floor(diff) % 60;

    days.value = d < 10 ? '0' + d : d ;
    hours.value = h < 10 ? '0' + h : h;
    minutes.value = m < 10 ? '0' + m : m;
    seconds.value = s < 10 ? '0' + s : s;
}


// document.getElementById('submit_btn') = function djj(){
//     document.getElementById('submit_btn').innerHTML = 'Till - ' + endtime;
// }

function timer(){
    var endtime = document.getElementById('show').value;
    document.getElementById('write').innerHTML = 'Till &rightarrow; ' + endtime;
    // document.getElementById('show').style.color = 'transparent';
    // document.getElementById('show').style.backgroundColor = 'transparent';
    document.getElementById('btn').style.color = 'transparent';
    document.getElementById('btn').style.backgroundColor = 'transparent';
    document.getElementById('btn').style.border = 'transparent';
    document.getElementById('write').style.letterSpacing = '5px';
    document.getElementById('show').style.backgroundColor = 'transparent';
    document.getElementById('show').style.color = 'white';

}

clock()

setInterval(clock, 1000)




