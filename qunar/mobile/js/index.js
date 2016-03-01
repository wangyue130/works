var num = 1 / window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale='+num+',minimum-scale='+num+',maximum-scale='+num+'" />');
document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 16 + "px";