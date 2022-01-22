let message = document.getElementById('message');

let userImageLink =
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png";
let time_start, end_time;
let downloadSize = 5616998;
let downloadImgSrc = new Image();

downloadImgSrc.onload = function () {
  end_time = new Date().getTime();
  speed = displaySpeed();
  messageOnline(speed)
};
time_start = new Date().getTime();
downloadImgSrc.src = userImageLink;

function displaySpeed() {
  let timeDuration = (end_time - time_start) / 1000;
  let loadedBits = downloadSize * 8;
  
  let bps = (loadedBits / timeDuration).toFixed(2);
  let speedInKbps = (bps / 1024).toFixed(2);
  let speedInMbps = (speedInKbps / 1024).toFixed(2);
  return speedInMbps;
}

let messageOnline = (speed) => {
  console.log(speed);
  message.textContent = `Internet Connection Available - ${speed} Mbps` 
  message.style.cssText = "background-color: #e7f6d5; color: #689f38"
}

let messageOffline = () => {
  message.textContent = "No Internet Connection";
  message.style.cssText = "background-color: #ffdde0; color: #d32f2f"
}

if (window.navigator.onLine) {
  messageOnline();
}else {
  messageOffline();
}

window.addEventListener("online", messageOnline);
window.addEventListener("offline", messageOffline);