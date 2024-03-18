class LoadingPage extends HTMLElement {
  connectedCallback() {
    const backgroundImage = document.createElement('div');
    this.appendChild(backgroundImage);
    this.innerHTML = 
    `<img src="./image/LoadingGif.gif" alt="Loading">`;
  }
}

customElements.define('loading-page', LoadingPage);
export default LoadingPage;