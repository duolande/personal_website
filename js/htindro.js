//自动轮播函数
window.onload = function () {
    var index = 0;
    var picture = document.getElementsByClassName("img-carousel");
    var dot = document.getElementsByClassName("li-dot");
    var s = document.getElementById("car-dot")
    function htind() {
        var k = index;
        index++;
        index %= picture.length;
        changeIToJ(k, index);
    }

    function changeIToJ(i, j) {
        picture[i].style.display = 'none';
        dot[i].className = "li-dot";
        picture[j].style.display = 'block';
        dot[j].className = "li-dot select";
    }
    ap = setInterval(htind, 2000);


    //鼠标相关操作
    s.onmouseover = function () {
        clearInterval(ap);
    }

    s.onmouseout = function () {
        ap = setInterval(htind, 2000);
    }

    //定义图片切换函数
    for (var i = 0; i < dot.length; i++) {
        dot[i].onmouseover = function () {
            clearInterval(ap);
            var current = index;
            index = this.innerHTML;
            changeIToJ(current, index);
        }
    }
}

