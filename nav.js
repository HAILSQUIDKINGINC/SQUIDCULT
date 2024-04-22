class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header>
      <div id="navback" class="navbarbutton" onclick="history.back(); return false;">
          <picture>
              <source srcset="widgetback.webp" type="image/webp">
              <source srcset="widgetback.gif" type="image/gif">
              <img src="widgetback.gif" data-gallery="false">
          </picture>
      </div>



      <div id="navcontact" class="navbarbutton" onclick="window.location.href='Contact.html'">
          <picture>
              <source srcset="widgetcontact.webp" type="image/webp">
              <source srcset="widgetcontact.gif" type="image/gif">
              <img src="widgetcontact.gif" data-gallery="false">
          </picture>
      </div>
      
      <a>
          MACROFAUNA
      </a>
      <a>
          SHITHUMANS
      </a>


      </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);