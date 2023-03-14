
var anchors = document.querySelectorAll(".nav-menu a");
// console.log(anchors);
// console.log(anchors.length);
for (var i = 0; i < anchors.length-1; i++) {
    anchors[i].addEventListener("click", function (event) {
        event.preventDefault();
        var targetId = this.textContent.trim().toLowerCase(); // this to for getting the targetId .......
        var targetSection = document.getElementById(targetId);
        console.log(targetSection);

        // console.log(axis);

        var interval = setInterval(function () {
            var axis = targetSection.getBoundingClientRect();
            // console.log(axis);
            if (axis.top <= 0) {
                clearInterval(interval);
                return;
            }

            window.scrollBy(0, 50);

        }, 25);
    });
} 


var targetPos = 2861;
var curPos = 0;

anchors[5].addEventListener("click",function(event){
    event.preventDefault();

    var intervalId = setInterval(function(){
        if(curPos >= targetPos)
        {
            clearInterval(intervalId);
            return;
        }
        curPos +=50;
        window.scrollBy(0,50);

    }, 25);
});

