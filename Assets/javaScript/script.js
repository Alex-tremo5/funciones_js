function pintar(ele, color = '#2ae74c'){
    ele.style.backgroundColor = color
    } ;

    const ele = document.getElementById("ele1");
    pintar (ele);

    ele.addEventListener("click", function () {
    pintar (ele, "#f4f434")
    });