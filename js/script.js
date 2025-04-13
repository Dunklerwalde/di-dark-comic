
const pages = Array.from({ length: 25 }, (_, i) => `img/page${i + 1}.png`);

let currentPage = 0;
const mainScreen = document.getElementById("main-screen");
const comicScreen = document.getElementById("comic-screen");
const comicPage = document.getElementById("comic-page");
const soundtrack = new Audio("audio/soundtrack.mp3");
soundtrack.loop = true;

function startComic() {
  mainScreen.style.display = "none";
  comicScreen.style.display = "block";
  currentPage = 0;
  updatePage();
  soundtrack.play();
}

function updatePage() {
  comicPage.classList.remove("fade-in");
  void comicPage.offsetWidth;
  comicPage.src = pages[currentPage];
  comicPage.alt = `Страница ${currentPage + 1}`;
  comicPage.classList.add("fade-in");
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  } else {
    goHome(); // если на первой странице — вернуться на главную
  }
}

function goHome() {
  comicScreen.style.display = "none";
  mainScreen.style.display = "block";
  soundtrack.pause();
  soundtrack.currentTime = 0;
}
