class MainPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<img src="./image/HogwartsLogo.png">`
  }
}

customElements.define('main-page', MainPage);
export default MainPage;