
const pages = Array.from({ length: 26 }, (_, i) => `img/page${i + 1}.png`);
let currentPage = 0;

const mainScreen = document.getElementById("main-screen");
const comicScreen = document.getElementById("comic-screen");
const comicPage = document.getElementById("comic-page");

const soundtrack = new Audio("audio/soundtrack.mp3");
soundtrack.loop = true;
soundtrack.volume = 0.2; 

function startComic() {
  mainScreen.style.display = "none";
  comicScreen.style.display = "block";
  currentPage = 0;
  updatePage(true);
  setTimeout(() => soundtrack.play().catch(() => {}), 200);
}

function updatePage(fade = false) {
  if (fade) {
    comicPage.style.opacity = 0;
    setTimeout(() => {
      comicPage.src = pages[currentPage];
      comicPage.alt = `Страница ${currentPage + 1}`;
      comicPage.onload = () => {
        comicPage.style.opacity = 1;
      };
    }, 150);
  } else {
    comicPage.src = pages[currentPage];
    comicPage.alt = `Страница ${currentPage + 1}`;
  }
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePage(true);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    updatePage(true);
  } else {
    goHome();
  }
}

function goHome() {
  comicScreen.style.display = "none";
  mainScreen.style.display = "block";
  soundtrack.pause();
  soundtrack.currentTime = 0;
}
