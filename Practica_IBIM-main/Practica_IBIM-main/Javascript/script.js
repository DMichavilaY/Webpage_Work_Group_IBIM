class Project {
  constructor( projectCode, name, description, clientCode, contractCode, users, commits){
    this.projectCode = projectCode;
    this.name = name;
    this.description = description;
    this.clientCode = clientCode;
    this.contractCode = contractCode;
    this.users = users;
    this.commits = commits;
  }
}

class Table {
    constructor(){
       this.mainPanel = document.getElementById('mainPanel');
       this.tableProjectTbody = document.querySelector('#panelProjects tbody');
       this.tableProjectThead = document.querySelector('#panelProjects thead');
       this.projectList = [];
       this.commitList = null;
       this.loadData();
   
    
    }

    loadData(){
      fetch('data/response01Projects.json')
      .then(response => response.json())
      .then(dataProject => {

        

        fetch('data/response02Commits.json')
        .then(response => response.json())
        .then(dataCommit => {
          
          const tdList = [
            { label: 'logos', fieldName: 'PathLogos', isLogo: true},
            { label: 'Client', fieldName: 'CodigoCliente'},
            { label: 'Project code', fieldName: 'CodigoProyecto'},
            { label: 'Name', fieldName: 'Nombre'},
            { label: 'Description', fieldName: 'Descripcion' },
            { label: 'Contratista', fieldName: 'CodigoContratista' },
            { label: 'Users', fieldName: 'Users' },
            { label: 'Web App Modules Ids', fieldName: 'WebAppModulesIds' }
          ];

          this.addTrByLabel(this.tableProjectThead, tdList);

           dataProject.message.forEach( project => {

            this.addTrByFieldName(this.tableProjectTbody, project, tdList);
             if (project.IsActive === false){
             return;
             }
            const commitList = [];
            dataCommit.message.forEach(commit => {
              if(commit.CodeCommit.startsWith(project.CodigoProyecto)) {
                commitList.push(commit);
              }  
            });

            // constructor( projectCode, name, description, clientCode, contractCode, users, commits){
              const proy = new Project(
                project.CodigoProyecto, 
                project.Nombre,
                project.Descripcion,
                project.CodigoCliente,
                project.CodigoContratista,
                project.Users,
                commitList
                );
              this.projectList.push(proy);
           });
  
           console.log(this.projectList);

        });
      });
    }

    loadCommit(projectCode) {
      const commitList = [];
      fetch('data/response02Commits.json')
      .then(response => response.json())
      .then(data => {
         data.message.forEach(commit => {
            if(commit.CodeCommit.startsWith(projectCode)) {
              this.commitList.push(commit);
            }
         });
      });
    }
    
   addTrByLabel(tableThead, fieldList) {
      let tr = document.createElement('tr');

      fieldList.forEach(field => {
        let th = document.createElement('th');
        th.setAttribute('scope', 'col');
        th.innerText = field.label;
        tr.append(th);
      });

      tableThead.append(tr);
    }

    addTrByFieldName(tableTbody, rowData, fieldList) {
      let tr = document.createElement('tr');

      fieldList.forEach(field => {
        let td = document.createElement('td');
        if(field.isLogo === true) {
           rowData[field.fieldName].forEach( logo => {
           let img = document.createElement('img');
           img.setAttribute('src', logo);
           td.append(img);
          });

        } else {
          if(Array.isArray(rowData[field.fieldName])){
            let ul = document.createElement('ul');
            rowData[field.fieldName].forEach( item => {
              let li = document.createElement('li');
              li.innerText = item;
              ul.append(li);
            });
            td.append(ul);
          } else {
            td.innerText = rowData[field.fieldName];
          }
            
        }
        tr.append(td);
      });

      tableTbody.append(tr);
    } 

};
const table = new Table();

$(document).ready(function () {
  $('#tablax').DataTable({
      language: {
          processing: "Tratamiento en curso...",
          search: "Buscar&nbsp;:",
          lengthMenu: "Agrupar de _MENU_ items",
          info: "Mostrando del item _START_ al _END_ de un total de _TOTAL_ items",
          infoEmpty: "No existen datos.",
          infoFiltered: "(filtrado de _MAX_ elementos en total)",
          infoPostFix: "",
          loadingRecords: "Cargando...",
          zeroRecords: "No se encontraron datos con tu busqueda",
          emptyTable: "No hay datos disponibles en la tabla.",
          paginate: {
              first: "Primero",
              previous: "Anterior",
              next: "Siguiente",
              last: "Ultimo"
          },
          aria: {
              sortAscending: ": active para ordenar la columna en orden ascendente",
              sortDescending: ": active para ordenar la columna en orden descendente"
          }
      },
      scrollY: 400,
      lengthMenu: [ [10, 25, -1], [10, 25, "All"] ],
  });
});