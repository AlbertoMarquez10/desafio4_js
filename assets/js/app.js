const publicaciones = document.querySelector("#venta")
const propiedadesVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banios: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banios: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banios: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Tinyhouse con piscina de lujo',
        src: 'assets/img/venta1.jpg',
        descripcion: 'Casa con exclusiva piscina y ubicada en barrio residencial',
        ubicacion: 'Los alerces 2555, La Reina, Santiago',
        habitaciones: 3,
        banios: 1,
        costo: 7500,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Hermosa casa en exclusivo barrio residencial',
        src: 'assets/img/venta2.jpg',
        descripcion: 'Casa de construccion sólida con tejas chilenas',
        ubicacion: 'Los mañios 2236, Macul, Santiago',
        habitaciones: 4,
        banios: 3,
        costo: 10500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Exclusivo twinhouse con piscina incluida',
        src: 'assets/img/venta3.jpg',
        descripcion: 'Departamento con espacios diseñados para ti',
        ubicacion: 'La Serena 1587, La granja, Santiago',
        habitaciones: 3,
        banios: 2,
        costo: 6500,
        smoke: true,
        pets: false
    }
]

let plantillaVenta = ''

for (let venta of propiedadesVenta) {
    plantillaVenta += `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img
                src="${venta.src}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                ${venta.nombre}
                </h5>
                <p class="card-text">
                ${venta.descripcion}
                </p>
                <p>
                <i class="fas fa-map-marker-alt"></i> ${venta.costo}
                </p>
                <p>
                <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${venta.banios} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
                <p class="${venta.smoke == true ? "text-success" : "text-danger"}">
                <i class="${venta.smoke == true ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> ${venta.smoke == true ? "Permitido fumar" : "No se permite fumar"}
                </p>
                <p class="${venta.pets == true ? "text-success" : "text-danger"}">
                <i class="${venta.pets == true ? "fas fa-paw" : "fa-solid fa-ban"}"></i> ${venta.smoke == true ? "Mascotas permitidas" : "No se permiten mascotas"}
                </p>
            </div>
        </div>
    </div>
    `
    
}
if (publicaciones != null){
    publicaciones.innerHTML = plantillaVenta
}
console.log(publicaciones)



const arriendo = document.querySelector("#alquiler")
const propiedadesArriendo = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banios: 2,
        costo: 2000,
        smoke: false,
        pets: true
    }, 
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banios: 3,
        costo: 2500,
        smoke: true,
        pets: true
    }, 
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banios: 2,
        costo: 2200,
        smoke: false,
        pets: false
    }, 
    {
        nombre: 'Casa lujosa con estilo moderno',
        src: 'assets/img/arriendo1.jpg',
        descripcion: 'Expectacular casa construida por un importante arquitecto',
        ubicacion: 'La toma 59, Longotoma, Aconcagua',
        habitaciones: 3,
        banios: 3,
        costo: 1500,
        smoke: true,
        pets: true
    }, 
    {
        nombre: 'Arriendo de casa con moderna distribucion',
        src: 'assets/img/arriendo2.jpg',
        descripcion: 'Hermosa casa con arbol en el medio del jardin',
        ubicacion: 'Getafe 69, Quilicura, Santiago',
        habitaciones: 4,
        banios: 3,
        costo: 2500,
        smoke: false,
        pets: false
    }, 
    {
        nombre: 'Exclusivo arriendo en barrio residencial',
        src: 'assets/img/arriendo3.jpg',
        descripcion: 'Casa construida con hormigon armado y madera',
        ubicacion: 'El Acueducto 9854, Villa Solitaria, Peñalolen, Santiago',
        habitaciones: 5,
        banios: 4,
        costo: 2500,
        smoke: true,
        pets: false
    }]

    let plantillaArriendo = ''

for (let arriendo of propiedadesArriendo) {
    plantillaArriendo += `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img
                src="${arriendo.src}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                ${arriendo.nombre}
                </h5>
                <p class="card-text">
                ${arriendo.descripcion}
                </p>
                <p>
                <i class="fas fa-map-marker-alt"></i> ${arriendo.costo}
                </p>
                <p>
                <i class="fas fa-bed"></i> ${arriendo.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${arriendo.banios} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${arriendo.costo}</p>
                <p class="${arriendo.smoke == true ? "text-success" : "text-danger"}">
                <i class="${arriendo.smoke == true ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> ${arriendo.smoke == true ? "Permitido fumar" : "No se permite fumar"}
                </p>
                <p class="${arriendo.pets == true ? "text-success" : "text-danger"}">
                <i class="${arriendo.pets == true ? "fas fa-paw" : "fa-solid fa-ban"}"></i> ${arriendo.smoke == true ? "Mascotas permitidas" : "No se permiten mascotas"}
                </p>
            </div>
        </div>
    </div>
    `
    
}
console.log(arriendo)
if (arriendo != null) {
    arriendo.innerHTML = plantillaArriendo
}

const ventaHome = document.querySelector("#ventaHome")
plantillaVenta = ''

for (let i = 0; i < 3; i++) {
    plantillaVenta += `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img
                src="${propiedadesVenta[i].src}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                ${propiedadesVenta[i].nombre}
                </h5>
                <p class="card-text">
                ${propiedadesVenta[i].descripcion}
                </p>
                <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedadesVenta[i].costo}
                </p>
                <p>
                <i class="fas fa-bed"></i> ${propiedadesVenta[i].habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedadesVenta[i].banios} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadesVenta[i].costo}</p>
                <p class="${propiedadesVenta[i].smoke == true ? "text-success" : "text-danger"}">
                <i class="${propiedadesVenta[i].smoke == true ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> ${propiedadesVenta[i].smoke == true ? "Permitido fumar" : "No se permite fumar"}
                </p>
                <p class="${propiedadesVenta[i].pets == true ? "text-success" : "text-danger"}">
                <i class="${propiedadesVenta[i].pets == true ? "fas fa-paw" : "fa-solid fa-ban"}"></i> ${propiedadesVenta[i].smoke == true ? "Mascotas permitidas" : "No se permiten mascotas"}
                </p>
            </div>
        </div>
    </div>
    `
    
}
console.log(ventaHome)
if (ventaHome != null) {
    ventaHome.innerHTML = plantillaVenta
}


const alquilerHome = document.querySelector("#arriendoHome")
plantillaArriendo = ''

for (let i = 0; i < 3; i++) {
    plantillaArriendo += `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img
                src="${propiedadesArriendo[i].src}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                ${propiedadesArriendo[i].nombre}
                </h5>
                <p class="card-text">
                ${propiedadesArriendo[i].descripcion}
                </p>
                <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedadesArriendo[i].costo}
                </p>
                <p>
                <i class="fas fa-bed"></i> ${propiedadesArriendo[i].habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedadesArriendo[i].banios} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadesVenta[i].costo}</p>
                <p class="${propiedadesArriendo[i].smoke == true ? "text-success" : "text-danger"}">
                <i class="${propiedadesArriendo[i].smoke == true ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> ${propiedadesArriendo[i].smoke == true ? "Permitido fumar" : "No se permite fumar"}
                </p>
                <p class="${propiedadesArriendo[i].pets == true ? "text-success" : "text-danger"}">
                <i class="${propiedadesArriendo[i].pets == true ? "fas fa-paw" : "fa-solid fa-ban"}"></i> ${propiedadesArriendo[i].smoke == true ? "Mascotas permitidas" : "No se permiten mascotas"}
                </p>
            </div>
        </div>
    </div>
    `
    
}
console.log(alquilerHome)
if (alquilerHome != null) {
    alquilerHome.innerHTML = plantillaArriendo
}
