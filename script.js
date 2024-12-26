let i = 0, imgArr = new Array();
imgArr[0] = "https://static.wikia.nocookie.net/txt/images/f/f5/Bamgeut_Icon.jpg";
imgArr[1] = "https://img.kpopdata.com/upload/content/216/231/22416704092d26793206.jpg";
imgArr[2] = "https://cdn2.ettoday.net/images/3914/d3914661.jpg";

function showImg() {
  let ico = document.getElementById("ico");
  ico.src = imgArr[i];  //指定img的src
  ico.classList.remove("fadeIn");
  void ico.offsetWidth; // 觸發重新計算，並清除動畫
  ico.classList.add("fadeIn");
  i = (i + 1) % 3;
}

function show() {
  setInterval(showImg, 2000); //每隔2秒呼叫一次showImg函數
}