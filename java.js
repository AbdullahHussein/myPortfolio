$(document).ready(function() {
  // page elements animation ScrollReveal library
  window.sr = ScrollReveal();
  sr.reveal(".socialMedia", {
    origin: "right",
    distance: "100px",
    delay: 2500,
    opacity: 1,
    easing: "linear"
  });
  sr.reveal(".first", {
    origin: "left",
    distance: "500px",
    delay: 200,
    duration: 1000,
    easing: "ease",
    interval: 100
  });
  sr.reveal(".second", {
    origin: "left",
    distance: "500px",
    delay: 200,
    duration: 1000,
    easing: "ease",
    interval: 100
  });
  sr.reveal(".second-span-lang", {
    origin: "left",
    distance: "110%",
    delay: 200,
    duration: 800,
    easing: "ease",
    opacity: 1,
    interval: 400
  });
  sr.reveal(".dci-img, .uni-img ", {
    delay: 0,
    duration: 2000,
    opacity: 0,
    scale: 0,
    rotate: {
      y: 180
    },
    easing: "ease"
  });
  sr.reveal("#ooops", {
    delay: 0,
    duration: 10000,
    opacity: 0,
    scale: 0,
    rotate: {
      y: 180
    },
    easing: "ease"
  });
  sr.reveal(".message-icon", {
    origin: "top",
    distance: "100%",
    delay: 200,
    duration: 1000,
    easing: "ease"
  });
  sr.reveal("#ooops", {
    origin: "top",
    distance: "300px",
    delay: 200,
    duration: 1000,
    easing: "ease"
  });
  sr.reveal(".download-cv", {
    delay: 0,
    duration: 1000,
    opacity: 0,
    scale: 0,
    easing: "ease"
  });
  sr.reveal(".download-cv-01", {
    delay: 0,
    duration: 1000,
    opacity: 0,
    scale: 0,
    easing: "ease"
  });
});

// control scroll event in the page from SweetScroll
document.addEventListener(
  "DOMContentLoaded",
  () => {
    const sweetScroll = new SweetScroll({
      trigger: "[data-scroll]",
      header: "[data-scroll-header]",
      duration: 750,
      easing: "easeOutQuint",
      offset: 0,
      vertical: true,
      horizontal: false,
      cancellable: true,
      updateURL: false,
      preventDefault: true,
      stopPropagation: true,
      quickMode: false
    });
  },
  false
);

// change nav color when its active
const element = document.getElementById("header");
const ms = new MenuSpy(element, {
  menuItemSelector: 'a[href^="#"]',
  activeClass: "active-nav",
  threshold: 5,
  enableLocationHash: true,
  hashTimeout: 400
});

// Matrix Canvas
var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");
var fontSize = 15;
var chars = generateChars();
var columns;
var drops;
var drawnToBottom;
function generateChars() {
  var chars = "0123456789";
  for (var i = 0; i <= 55; i++) {
    chars += String.fromCharCode(i + 65382);
  }
  return chars.split("");
}
function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.round(canvas.width / fontSize);
  drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }
  drawnToBottom = false;
}
window.onresize = function() {
  initCanvas();
};
function draw() {
  ctx.fillStyle = "rgb(255, 255, 255,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgb(32, 50, 66, 0.2)";
  ctx.font = "bold " + fontSize + "px monospace";
  var dropCount = drops.length;
  var charCount = chars.length;
  for (var i = 0; i < dropCount; i++) {
    var text = chars[Math.floor(Math.random() * charCount)];
    var rowNum = drops[i] * fontSize;
    ctx.fillText(text, i * fontSize, rowNum);
    if (rowNum > canvas.height) drawnToBottom = true;
    if (
      (!drawnToBottom && Math.random() > 0.925) ||
      (drawnToBottom && Math.random() > 0.95)
    )
      drops[i] = 0;
    drops[i]++;
  }
}
initCanvas();
setInterval(draw, 45);

var clock = document.getElementById('clock');
function colorfulClock(){
var time = new Date(),
hours = time.getHours(),
minutes = time.getMinutes(),
seconds = time.getSeconds();
if(hours <= 9){
hours = '0' + hours;
}
if(minutes <= 9){
minutes = '0' + minutes;
}
if(seconds <= 9){
seconds = '0' + seconds;
}
if(hours >= 12){
seconds = seconds + ' PM';
}else if(hours < 12){
seconds = seconds + ' AM';
}
if(hours > 12){
hours = hours - 12;
if(hours <= 9){
  hours = '0' + hours;
  }
	}
clock.textContent = hours + ':' + minutes + '.' + seconds;
}
setInterval(colorfulClock , 1000 );
var day = document.getElementById('day'),  
    t = new Date(),
    d = t.getDay();
   switch(true){
        case d == 0:
    day.textContent = 'Sunday,';
        break;
        case d == 1:
    day.textContent = 'Monday,';
        break;
        case d == 2:
    day.textContent = 'Tuesday,';
        break;
        case d == 3:
    day.textContent = 'Wednesday,';
        break;
        case d == 4:
    day.textContent = 'Thursday,';
        break;
        case d == 5:
    day.textContent = 'Friday,';
        break;
        case d == 6:
    day.textContent = 'Saturday,';
   }

   // Media Screen in JS Part..

   var max960 = window.matchMedia("(max-width:960px)");
   function fun960(max960){
     if(max960.matches){
        document.body.style.background = "#203242";
        var ooops = document.getElementById("ooops");
        var alert = document.createTextNode("Ooops!");
        ooops.appendChild(alert);
        ooops.style.color ="#d4af37";
        ooops.style.fontSize = "9vw";
        ooops.style.fontWeight = "lighter";
        ooops.style.fontFamily = "Montserrat, sans-serif";
        ooops.style.position = "absolute";
        ooops.style.left = "50%";
        ooops.style.top = "48%";
        ooops.style.transform = "translate(-50%, -50%)";
        // ooops.style.textShadow = "2px 2px rgb(212, 175, 55, 0.3)";

        var para = document.getElementById("para");
        var alertText = document.createTextNode("To view my portfolio, you should open it from a large device  such as your laptop or your computer etc.");
        para.appendChild(alertText);
        para.style.color = "#d4af37";
        para.style.fontSize = "3vw";
        para.style.fontWeight = "lighter";
        para.style.textAlign = "center";
        para.style.fontFamily = "Montserrat, sans-serif";
        para.style.position = "absolute";
        para.style.left = "5%";
        para.style.top = "55%";
        para.style.transform = "translate(0%, 0%)";

        var para01 = document.getElementById("para01");
        var alertText01 = document.createTextNode("such as your laptop or your computer etc.(min-width:960px)");
        para01.appendChild(alertText01);
        para01.style.color = "#d4af37";
        para01.style.fontSize = "3vw";
        para01.style.fontWeight = "lighter";
        para01.style.textAlign = "center";
        para01.style.fontFamily = "Montserrat, sans-serif";
        para01.style.position = "absolute";
        para01.style.left = "5%";
        para01.style.top = "57.5%";
        para01.style.transform = "translate(0%, 0%)";

        var canvas = document.getElementById("matrix01");
        var ctx = canvas.getContext("2d");
        var fontSize = 7;
        var chars = generateChars();
        var columns;
        var drops;
        var drawnToBottom;
        function generateChars() {
          var chars = "0123456789";
          for (var i = 0; i <= 55; i++) {
            chars += String.fromCharCode(i + 65382);
          }
          return chars.split("");
        }
        function initCanvas() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          columns = Math.round(canvas.width / fontSize);
          drops = [];
          for (var i = 0; i < columns; i++) {
            drops[i] = 1;
          }
          drawnToBottom = false;
        }
        window.onresize = function() {
          initCanvas();
        };
        function draw() {
          ctx.fillStyle = "rgb(32, 50, 66,0.05)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = "rgb(212, 175, 55,0.8)";
          ctx.font = "bold " + fontSize + "px monospace";
          var dropCount = drops.length;
          var charCount = chars.length;
          for (var i = 0; i < dropCount; i++) {
            var text = chars[Math.floor(Math.random() * charCount)];
            var rowNum = drops[i] * fontSize;
            ctx.fillText(text, i * fontSize, rowNum);
            if (rowNum > canvas.height) drawnToBottom = true;
            if (
              (!drawnToBottom && Math.random() > 0.925) ||
              (drawnToBottom && Math.random() > 0.95)
            )
              drops[i] = 0;
            drops[i]++;
          }
        }
        initCanvas();
        setInterval(draw, 45);
     }
   }
   fun960(max960);
   max960.addListener(fun960);


   var min1920 = window.matchMedia("(min-width:1920px)");
   function fun1920(min1920){
      if(min1920.matches){
        var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");
var fontSize = 20;
var chars = generateChars();
var columns;
var drops;
var drawnToBottom;
function generateChars() {
  var chars = "0123456789";
  for (var i = 0; i <= 55; i++) {
    chars += String.fromCharCode(i + 65382);
  }
  return chars.split("");
}
function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.round(canvas.width / fontSize);
  drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }
  drawnToBottom = false;
}
window.onresize = function() {
  initCanvas();
};
function draw() {
  ctx.fillStyle = "rgb(255, 255, 255,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgb(32, 50, 66, 0.2)";
  ctx.font = "bold " + fontSize + "px monospace";
  var dropCount = drops.length;
  var charCount = chars.length;
  for (var i = 0; i < dropCount; i++) {
    var text = chars[Math.floor(Math.random() * charCount)];
    var rowNum = drops[i] * fontSize;
    ctx.fillText(text, i * fontSize, rowNum);
    if (rowNum > canvas.height) drawnToBottom = true;
    if (
      (!drawnToBottom && Math.random() > 0.925) ||
      (drawnToBottom && Math.random() > 0.95)
    )
      drops[i] = 0;
    drops[i]++;
  }
}
initCanvas();
setInterval(draw, 45);
      }
   }
   fun1920(min1920);
   min1920.addListener(fun1920);


   var min2560 = window.matchMedia("(min-width:2560px)");
   function fun2560(min2560){
      if(min2560.matches){
        var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");
var fontSize = 25;
var chars = generateChars();
var columns;
var drops;
var drawnToBottom;
function generateChars() {
  var chars = "0123456789";
  for (var i = 0; i <= 55; i++) {
    chars += String.fromCharCode(i + 65382);
  }
  return chars.split("");
}
function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.round(canvas.width / fontSize);
  drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }
  drawnToBottom = false;
}
window.onresize = function() {
  initCanvas();
};
function draw() {
  ctx.fillStyle = "rgb(255, 255, 255,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgb(32, 50, 66, 0.2)";
  ctx.font = "bold " + fontSize + "px monospace";
  var dropCount = drops.length;
  var charCount = chars.length;
  for (var i = 0; i < dropCount; i++) {
    var text = chars[Math.floor(Math.random() * charCount)];
    var rowNum = drops[i] * fontSize;
    ctx.fillText(text, i * fontSize, rowNum);
    if (rowNum > canvas.height) drawnToBottom = true;
    if (
      (!drawnToBottom && Math.random() > 0.925) ||
      (drawnToBottom && Math.random() > 0.95)
    )
      drops[i] = 0;
    drops[i]++;
  }
}
initCanvas();
setInterval(draw, 45);
      }
   }
   fun2560(min2560);
   min2560.addListener(fun2560);


   var min3000 = window.matchMedia("(min-width:3000px)");
   function fun3000(min3000){
      if(min3000.matches){
        var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");
var fontSize = 28;
var chars = generateChars();
var columns;
var drops;
var drawnToBottom;
function generateChars() {
  var chars = "0123456789";
  for (var i = 0; i <= 55; i++) {
    chars += String.fromCharCode(i + 65382);
  }
  return chars.split("");
}
function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.round(canvas.width / fontSize);
  drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }
  drawnToBottom = false;
}
window.onresize = function() {
  initCanvas();
};
function draw() {
  ctx.fillStyle = "rgb(255, 255, 255,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgb(32, 50, 66, 0.2)";
  ctx.font = "bold " + fontSize + "px monospace";
  var dropCount = drops.length;
  var charCount = chars.length;
  for (var i = 0; i < dropCount; i++) {
    var text = chars[Math.floor(Math.random() * charCount)];
    var rowNum = drops[i] * fontSize;
    ctx.fillText(text, i * fontSize, rowNum);
    if (rowNum > canvas.height) drawnToBottom = true;
    if (
      (!drawnToBottom && Math.random() > 0.925) ||
      (drawnToBottom && Math.random() > 0.95)
    )
      drops[i] = 0;
    drops[i]++;
  }
}
initCanvas();
setInterval(draw, 45);
      }
   }
   fun3000(min3000);
   min3000.addListener(fun3000);