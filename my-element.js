class MyElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.counter = 0;
  }

  connectedCallback() {
    const initialValue = this.getAttribute("counter");
    if (initialValue) this.counter = initialValue;

    this.applyStyle();
    this.render();
    this.startCounter();
  }

  applyStyle() {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync("div { display: block }");
  }

  render() {
    const link = document.createElement("link");
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    link.rel = "stylesheet";
    this.shadowRoot.appendChild(link);
    const container = document.createElement("div");
    container.classList.add("container");

    const counterSpan = document.createElement("span");
    counterSpan.textContent = this.counter;
    counterSpan.classList.add("fs-4", "text-primary", "d-flex", "justify-content-center");

    const slotElement = document.createElement('slot');

    container.appendChild(counterSpan);
    container.appendChild(slotElement);

    this.shadowRoot.appendChild(container);
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

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.interval);
  }
}

customElements.define("my-element", MyElement);
