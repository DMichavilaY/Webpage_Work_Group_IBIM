class MmcTable extends HTMLElement{
    constructor(){
        super();
        this.name;// = 'Demo Project Name';
        this.description;// = 'Demo Project Description: Lore ipsum...';
        this.code;
        this.myLogoPath = 'images/Logo_IBIM.png';
        this.projects;
        this.attachShadow({mode: 'open'});
    }

    static get observedAttributes(){
        return ['name', "description", "code", "projects"];
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
            case "code":
                this.code = newValue;
            break;
            case "projects":
                this.projects = JSON.parse(newValue);
                
            break;
        }
    }
    connectedCallback() {
        console.log(this.projects);
        this.shadowRoot.innerHTML = `
        <div id="table">
            <table>
                <thead>
                    <tr>
                        <th>logo</th>
                        <th>codigo</th>
                        <th>nombre</th>
                        <th>descripcion</th>  
                    </tr> 
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
        <style>
        #table{
            max-height: calc(100vh - 100px);
            overflow: auto;
        }
        table {
            width: 90%;
            max-height: calc(100vh - 100px);
            overflow: auto;


            padding: 10px;
            /* border: 1px solid #000; */
         }
         th, td {
            width: 20s%;
            text-align: left;
            vertical-align: top;
            
            padding: 0.3em;
            caption-side: bottom;
         }
         caption {
            padding: 0.3em;
         }
         tr:hover {
            background-color: blanchedalmond;
           
        }
        </style>
        `;

        console.log(this.shadowRoot.querySelector('tbody'));
        let tbody = this.shadowRoot.querySelector('tbody');
        this.projects.forEach(project => {
            let tr = document.createElement('tr');

            let logo = document.createElement('td');
            logo.innerHTML =  `<img src="${this.myLogoPath}"> `;
            let nombre = document.createElement('td');
            nombre.innerText = project.Nombre;
            let descripcion = document.createElement('td');
            descripcion.innerText = project.Descripcion;
            let codigoProyecto = document.createElement('td');
            codigoProyecto.innerText = project.CodigoProyecto;
            tr.appendChild(logo);
            tr.appendChild(codigoProyecto);
            tr.appendChild(nombre);
            tr.appendChild(descripcion); 
            tbody.append(tr);
        });
    }
    /* disconnectedCallback() {
        console.log('disconnected!');
    }
    adoptedCallback() {
        console.log('adopted!');
    }  */
}
window.customElements.define('mmc-table', MmcTable);