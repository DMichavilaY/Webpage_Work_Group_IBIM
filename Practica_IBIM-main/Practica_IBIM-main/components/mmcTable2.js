class DataTable extends HTMLTableElement {
    constructor() { 
        super()
        console.info( 'data-table created' )
    }
} 

customElements.define( 'data-table', DataTable, { extends: 'table' } );

//cell
class DataCell extends HTMLTableCellElement {
    connectedCallback() { 
        console.info( 'cell connected' )
        if ( typeof this.renderContent === 'function' ) 
            this.renderContent('holaholahola')
    }
} 

//cell string
class StringCell extends DataCell {
    constructor() { 
        super();
        this.test = 'TESTTETSTET';
        this.myLogoPath = 'images/Logo_IBIM.png';
    }

    renderContent(a)
    {
        console.info( 'data-string render' )
        this.innerHTML = `
        ${a}
        <br>
        ${this.test}
        ${this.textContent.trim()}
        
        `;
    }
} 
customElements.define( 'data-string', StringCell, { extends: 'td' } )

//cell string
class LogoCell extends DataCell {
    constructor() { 
        super();
        this.test = 'TESTTETSTET';
        this.myLogoPath = 'images/Logo_IBIM.png';
    }

    renderContent(a)
    {
        console.info( 'data-string render' )
        this.innerHTML = `
        <img src="${this.myLogoPath}">
        `;
    }
} 
customElements.define( 'data-logo', LogoCell, { extends: 'td' } )