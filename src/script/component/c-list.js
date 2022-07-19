import './c-item.js';

class CList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set cs(cs) {
        this._cs = cs;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._cs.forEach(c => {
            const cItemElement = document.createElement("c-item");
            cItemElement.c = c;
            this.shadowDOM.appendChild(cItemElement);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("c-list", CList);
