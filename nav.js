class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
        <input
        type="image"
        width="64px"
        name="btnBack"
        id="btnBack"
        src="widgetback.webp"
        title="Click to go back a page."
        onclick="history.back(); return false;">

        <input
        type="image"
        width="64px"
        name="btnSearch"
        id="btnSearch"
        src="widgetsearch.webp"
        title="Click to search"
        onclick="">

        <a>
            MACROFAUNA
        </a>
        <a>
            SHITHUMANS
        </a>

        <input
        type="image"
        width="64px"
        name="btnContact"
        id="btnContact"
        src="widgetcontact.webp"
        title="Contact information"
        onclick="window.location.href='Contact.html'">
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);