var time = 0;
var timer = setInterval(function () {
    time += 2;
    console.log(time + " seconds have passed !");
    if (time > 5) {
        clearInterval(timer);
        console.log("serInterval closed! after 7");
        console.log(__dirname);
        console.log(__filename);
    }
}, 2000);