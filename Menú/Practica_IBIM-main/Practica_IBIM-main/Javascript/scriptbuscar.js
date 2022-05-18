const proyectos = [
   myProject = new Project(
    project.CodigoProyecto,
    project.Nombre,
    project.Descripcion,
    project.CodigoCliente,
    project.CodigoContratista,
    project.Users,
    [],
    project.PathLogos
  );
]

const buscador = document.querySelector('#buscador');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado')

const filtrar = ()=>{
  //console.log(buscador.value);
  resultado.innerHTML = '';

  const texto = buscador.value.toLowerCase();

  for(let proyecto of proyectos){
      let nombre = proyecto.nombre.toLowerCase();
      if(nombre.indexOf(texto) !== -1){
        resultado.innerHTML += `<li>${proyecto.nombre}</li>`
      }
  }
}

if(resultado.innerHTML === ''){
    resultado.innerHTML +=`
    <li>Proyecto no encontrado...</li>`
}

boton.addEventListener('click', filtrar)
//buscador.addEventListener('keyup', filtrar)

//filtrar();