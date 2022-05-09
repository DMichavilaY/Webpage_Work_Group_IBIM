class MmcCard extends HTMLElement{
    constructor(){
        super();
        this.name;// = 'Demo Project Name';
        this.description;// = 'Demo Project Description: Lore ipsum...';
        this.myLogoPath = 'images/Logo_IBIM.png';
        this.attachShadow({mode: 'open'});
    }

    static get observedAttributes(){
        return ['name', "description"];
    }

    
    attributeChangedCallback(nameAttr, oldValue, newValue){
        switch(nameAttr){
            case "name":
                this.name = newValue;
            break;
            case "description":
                this.description = newValue;
            break;
            case "myLogoPath":
                this.myLogoPath = newValue;
            break;
        }
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <div id="mainPanel">
                <div class="my-card">
                    <div class="my-image">
                        <img src="${this.myLogoPath}">
                    </div>
                    <div class="my-name text-limit" title="${this.name}">
                    ${this.name}
                    </div>
                    <div class="my-description  text-limit-2" title="${this.description}">
                    ${this.description} 
                    </div>
                </div>
        </div>
        <style>
        #mainPanel{

        }
            #main-panel > div{
                display: inline-block;
            }
            .text-limit{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                display: block;
                text-align: center;
            }
            .text-limit-2{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: pre-line;
                display: block;
                text-align: center;
            }
            

            .my-card:hover{
                border: 1px solid black;
                cursor:pointer;
            }
            .my-card{
                margin:  .75rem;
                border-radius: 25px;
                box-shadow: 0px 0px 10px #00000029;
                transition: 0.3s;
                border-radius: 10 px;
                color: #707070;;
                width: 250px;
                height: 200px;
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                grid-auto-rows: minmax(50px, auto); 
            }
            .my-image{
                grid-column: 1;
                grid-row: 1/3;
                background-color: aliceblue;
                border-top-left-radius: 25px;
                border-top-right-radius: 25px;
            }   
            .my-image img{
                margin: 0 auto;
                display: flex;
            }
            .my-name{
                font-size: 1rem;
                font-weight: 600;
                padding: 2px;
                align-items: center;
                justify-content: center;
            }
            .my-description{
                font-size: .8rem;
                font-style: italic;
                padding: 10px;
                display: flex;
                align-items: center;
               text-overflow: ellipsis;
               overflow: hidden;
            }
            </style>
            `;
    }
    /* disconnectedCallback() {
        console.log('disconnected!');
    }
    adoptedCallback() {
        console.log('adopted!');
    }  */
}
window.customElements.define('mmc-card', MmcCard);