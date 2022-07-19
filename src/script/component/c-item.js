class CItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set c(c) {
        this._c = c;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }

               .fan-art-c {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }

               .c-info {
                   padding: 24px;
               }

               .c-info > h2 {
                   font-weight: lighter;
               }

               .c-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }

           </style>
           <img class="fan-art-c" src="${this._c.strDrinkThumb}" alt="Fan Art">
           <div class="c-info">
               <h2>${this._c.strDrink}</h2>
               <p>${this._c.strInstructions}</p>
           </div>`;
    }
}

customElements.define("c-item", CItem);
