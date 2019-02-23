$(document).ready(function(){
    setCurrentTime();
    setInterval(function(){ setCurrentTime();},1000);
});

let setCurrentTime = () => {
    let date = new Date();
    document.getElementById('currentTime').innerHTML = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
}