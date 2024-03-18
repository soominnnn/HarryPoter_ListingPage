import LoadingPage from "./pages/LoadingPage.js";
import MainPage from "./pages/MainPage.js";

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const Loading = new LoadingPage();
  const Main = new MainPage();
  app.appendChild(Main);
});