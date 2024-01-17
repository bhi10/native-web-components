class MyElement extends HTMLElement {
  constructor() {
    super();

    this.renderRoot = this.attachShadow({ mode: "open" });

    this.counter = 0;
  }

  connectedCallback() {
    const initialValue = this.getAttribute("initial-value");
    if (initialValue) this.counter = initialValue;

    this.applyStyle();
    this.render();
    this.startCounter();
  }

  applyStyle() {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(
      ":host{ flex: 1; display: flex; justify-content: center; font-size: 24px; } "
    );
    this.renderRoot.adoptedStyleSheets = [sheet];
  }

  render() {
    // Counter span
    const counterSpan = document.createElement("span");
    counterSpan.textContent = this.counter;

    counterSpan.addEventListener('click', this._onCounterClick.bind(this))

    this.shadowRoot.appendChild(counterSpan);
  }

  startCounter() {
    this.interval = setInterval(() => {
      this.counter++;
      this.updateCounter();
    }, 1000);
  }

  updateCounter() {
    const counterSpan = this.shadowRoot.querySelector("span");
    counterSpan.textContent = this.counter;
  }

  _onCounterClick() {
    console.log("current value: ", this.counter);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.interval);
  }
}

customElements.define("my-element", MyElement);
