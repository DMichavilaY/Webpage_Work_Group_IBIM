// console.log('correcto')

document.querySelector('button').addEventListener('click', traerDatos);

function traerDatos(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'response01Projects.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

           // console.log(this.responseText);
            let proyectos = JSON.parse(this.responseText);
            // console.log(proyectos);
            let res = document.querySelector('#res');
            res.innerHTML = '';


            for(let item of proyectos){
               // console.log(item)
               res.innerHTML += `
                <tr>
                    <td>${item.CodigoProyecto}</td>
                    <td>${item.Nombre}</td>
                    <td>${item.Descripcion}</td>
                </tr>
               `
            }
        }
        
    }
}