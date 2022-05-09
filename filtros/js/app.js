
let searchParamsObj = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: ""
};
const METHODS = {
  elements() {
    const utilElements = {
      container: document.getElementById("app")
    };
    return utilElements;
  },
  cartsData() {
    return (data = [
      {
        marca: "BMW",
        modelo: "Serie 3",
        year: 2012,
        precio: 30000,
        puertas: 4,
        color: "Blanco",
        transmision: "automatico"
      },
      {
        marca: "Audi",
        modelo: "A4",
        year: 2018,
        precio: 40000,
        puertas: 4,
        color: "Negro",
        transmision: "automatico"
      },
      {
        marca: "Ford",
        modelo: "Mustang",
        year: 2015,
        precio: 20000,
        puertas: 2,
        color: "Blanco",
        transmision: "automatico"
      },
      {
        marca: "Audi",
        modelo: "A6",
        year: 2011,
        precio: 35000,
        puertas: 4,
        color: "Negro",
        transmision: "automatico"
      },
      {
        marca: "BMW",
        modelo: "Serie 5",
        year: 2016,
        precio: 70000,
        puertas: 4,
        color: "Rojo",
        transmision: "automatico"
      },
      {
        marca: "Mercedes Benz",
        modelo: "Clase C",
        year: 2015,
        precio: 25000,
        puertas: 4,
        color: "Blanco",
        transmision: "automatico"
      },
      {
        marca: "Chevrolet",
        modelo: "Camaro",
        year: 2018,
        precio: 60000,
        puertas: 2,
        color: "Rojo",
        transmision: "manual"
      },
      {
        marca: "Ford",
        modelo: "Mustang",
        year: 2019,
        precio: 80000,
        puertas: 2,
        color: "Rojo",
        transmision: "manual"
      },
      {
        marca: "Dodge",
        modelo: "Challenger",
        year: 2017,
        precio: 40000,
        puertas: 4,
        color: "Blanco",
        transmision: "automatico"
      },
      {
        marca: "Audi",
        modelo: "A3",
        year: 2017,
        precio: 55000,
        puertas: 2,
        color: "Negro",
        transmision: "manual"
      },
      {
        marca: "Dodge",
        modelo: "Challenger",
        year: 2012,
        precio: 25000,
        puertas: 2,
        color: "Rojo",
        transmision: "manual"
      },
      {
        marca: "Mercedes Benz",
        modelo: "Clase C",
        year: 2018,
        precio: 45000,
        puertas: 4,
        color: "Azul",
        transmision: "automatico"
      },
      {
        marca: "BMW",
        modelo: "Serie 5",
        year: 2019,
        precio: 90000,
        puertas: 4,
        color: "Blanco",
        transmision: "automatico"
      },
      {
        marca: "Ford",
        modelo: "Mustang",
        year: 2017,
        precio: 60000,
        puertas: 2,
        color: "Negro",
        transmision: "manual"
      },
      {
        marca: "Dodge",
        modelo: "Challenger",
        year: 2015,
        precio: 35000,
        puertas: 2,
        color: "Azul",
        transmision: "automatico"
      },
      {
        marca: "BMW",
        modelo: "Serie 3",
        year: 2018,
        precio: 50000,
        puertas: 4,
        color: "Blanco",
        transmision: "automatico"
      },
      {
        marca: "BMW",
        modelo: "Serie 5",
        year: 2017,
        precio: 80000,
        puertas: 4,
        color: "Negro",
        transmision: "automatico"
      },
      {
        marca: "Mercedes Benz",
        modelo: "Clase C",
        year: 2018,
        precio: 40000,
        puertas: 4,
        color: "Blanco",
        transmision: "automatico"
      },
      {
        marca: "Audi",
        modelo: "A4",
        year: 2016,
        precio: 30000,
        puertas: 4,
        color: "Azul",
        transmision: "automatico"
      }
    ]);
  },
  selectOptionsArray() {
    let options = {
      marca: document.querySelector("#marca"),
      year: document.querySelector("#year"),
      minimo: document.querySelector("#minimo"),
      maximo: document.querySelector("#maximo"),
      puertas: document.querySelector("#puertas"),
      transmision: document.querySelector("#transmision"),
      color: document.querySelector("#color")
    };
    return options;
  },

  showNoResult(){
    METHODS.clearResults()
    const { container } = METHODS.elements();
    const noResultHtml = document.createElement('div')
    noResultHtml.classList.add('alerta', 'error')
    noResultHtml.innerHTML = `
    <p>Sin resultados para tu búsqueda :( </p>`
    container.appendChild(noResultHtml)
  },
  clearResults(){
    const { container } = METHODS.elements();
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  },
  showCart(carts) {
    // let cartData = METHODS.cartsData();
    const { container } = METHODS.elements();
    METHODS.clearResults()
    carts.forEach(cart => {
      const cartName = document.createElement("p");
      cartName.innerHTML = `
			<p> Marca: ${cart.marca} - Modelo: ${cart.modelo} - Año: ${cart.year} - Color ${cart.color} - Puertas ${cart.puertas} - Transmision: ${cart.transmision} - Precio ${cart.precio} </p>
			`;
      container.appendChild(cartName);
    });
  },

  filterBrandAction(auto) {
    if (searchParamsObj.marca) {
      return auto.marca === searchParamsObj.marca;
    } else {
      return auto;
    }
  },
  filterYearAction(auto) {
    if (searchParamsObj.year) {
      return auto.year === searchParamsObj.year;
    } else return auto;
  },
  filterByMinPrice(auto) {
    if (searchParamsObj.minimo) {
      return auto.precio >= searchParamsObj.minimo;
    } else return auto;
  },
  filterByMaxPrice(auto){
    if (searchParamsObj.maximo) {
      return auto.precio <= searchParamsObj.maximo;
    } else return auto;
  },
  filterByDoorsQuantity(auto){
    debugger
    if (searchParamsObj.puertas){
      return auto.puertas === searchParamsObj.puertas
    } else return auto
  },
  filterByTransmision(auto){
    if(searchParamsObj.transmision){
      return auto.transmision === searchParamsObj.transmision
    } else return auto
  },
  filterByColor(auto){
    if(searchParamsObj.color){
    return auto.color === searchParamsObj.color
    } else return auto
  },
  filterByBrandCall() {
    const result = METHODS.cartsData()
      .filter(METHODS.filterBrandAction)
      .filter(METHODS.filterYearAction)
      .filter(METHODS.filterByMinPrice)
      .filter(METHODS.filterByMaxPrice)
      .filter(METHODS.filterByDoorsQuantity)
      .filter(METHODS.filterByTransmision)
      .filter(METHODS.filterByColor)
    console.log(result, "resultado");
    if (result.length) {
      METHODS.showCart(result);
    } else {
      METHODS.showNoResult();
    }
  },
  filterByBrandInit(e) {
    e.preventDefault();
    let targetId = e.target.id;
    let caseValue = e.target.value;
    // debugger;
    if (targetId === "marca") {
      searchParamsObj.marca = caseValue;
      METHODS.filterByBrandCall();
      return;
    } else if (targetId === "year") {
      searchParamsObj.year = Number(caseValue);
      METHODS.filterByBrandCall();
      return;
    } else if (targetId === "minimo") {
      searchParamsObj.minimo = caseValue;
      METHODS.filterByBrandCall();
    } else if (targetId === "maximo") {
      searchParamsObj.maximo = caseValue;
      METHODS.filterByBrandCall();
    }
    else if (targetId === "puertas") {
      searchParamsObj.puertas = Number(puertas.value);
      METHODS.filterByBrandCall();
    }
    else if (targetId === "transmision") {
      searchParamsObj.transmision = caseValue;
      METHODS.filterByBrandCall();
    }
    else if (targetId === 'color'){
      searchParamsObj.color = caseValue
      METHODS.filterByBrandCall()
    }
    else {
      return searchParamsObj;
    }
  }
};
const LISTENERS = {
  init() {
    METHODS.showCart(METHODS.cartsData());
    LISTENERS.brandFilterListener();
    // LISTENERS.yearFilterListener();
  },

  optionsToFilter() {
    const options = {
      marca: document.querySelector("#marca"),
      year: document.querySelector("#year"),
      minimo: document.querySelector("#minimo"),
      maximo: document.querySelector("#maximo"),
      puertas: document.querySelector("#puertas"),
      transmision: document.querySelector("#transmision"),
      color: document.querySelector("#color")
    };
    return options;
  },
  brandFilterListener(e) {
    const optionsToFilter = Object.values(METHODS.selectOptionsArray());
    console.log('op',optionsToFilter[4])
    optionsToFilter.forEach(element => {
      element.addEventListener("input", METHODS.filterByBrandInit);
    });
  }
};
document.addEventListener("DOMContentLoaded", LISTENERS.init);
