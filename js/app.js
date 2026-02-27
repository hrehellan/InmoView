// ========================================
// BASE DE DATOS DE PROPIEDADES
// ========================================

const propiedades = [
    {
        id: 1,
        nombre: "Casa Moderna en Polanco",
        ubicacion: "Polanco, CDMX",
        tipo: "casa",
        precio: 8500000,
        m2: 350,
        recamaras: 4,
        banos: 3,
        estacionamiento: 2,
        anio: 2022,
        descripcion: "Hermosa casa moderna en una de las zonas más exclusivas de la ciudad. Cuenta con acabados de lujo, amplios espacios y diseño contemporáneo. Jardín privado y terraza. Sistema de seguridad avanzado, cocina gourmet con electrodomésticos de última generación, y sistema de automatización inteligente.",
        imagenes: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800"
        ],
        badge: "Nuevo"
    },
    {
        id: 2,
        nombre: "Departamento Luxury en Santa Fe",
        ubicacion: "Santa Fe, CDMX",
        tipo: "departamento",
        precio: 4200000,
        m2: 180,
        recamaras: 3,
        banos: 2,
        estacionamiento: 2,
        anio: 2023,
        descripcion: "Departamento de lujo con vista panorámica. Edificio con amenidades premium: gimnasio, alberca, salón de eventos y seguridad 24/7. Ubicación privilegiada cerca de centros comerciales y corporativos. Acabados de primera calidad.",
        imagenes: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
        ],
        badge: "Oferta"
    },
    {
        id: 3,
        nombre: "Terreno en Cuernavaca",
        ubicacion: "Cuernavaca, Morelos",
        tipo: "terreno",
        precio: 2500000,
        m2: 1000,
        recamaras: 0,
        banos: 0,
        estacionamiento: 0,
        anio: 2024,
        descripcion: "Excelente terreno plano listo para construir. Ubicado en zona residencial con todos los servicios: agua, luz, drenaje. Vista espectacular y clima privilegiado. Ideal para desarrollo residencial o casa de descanso.",
        imagenes: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800"
        ],
        badge: "Nuevo"
    },
    {
        id: 4,
        nombre: "Casa Residencial en Interlomas",
        ubicacion: "Interlomas, Estado de México",
        tipo: "casa",
        precio: 12000000,
        m2: 450,
        recamaras: 5,
        banos: 4,
        estacionamiento: 3,
        anio: 2021,
        descripcion: "Impresionante residencia en fraccionamiento privado. Amplios jardines, alberca, sala de cine y cuarto de juegos. Seguridad 24 horas y cercanía a las mejores escuelas. Diseño arquitectónico excepcional con espacios luminosos.",
        imagenes: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
        ],
        badge: ""
    },
    {
        id: 5,
        nombre: "Departamento Céntrico en Condesa",
        ubicacion: "Condesa, CDMX",
        tipo: "departamento",
        precio: 3800000,
        m2: 120,
        recamaras: 2,
        banos: 2,
        estacionamiento: 1,
        anio: 2020,
        descripcion: "Departamento tipo loft con diseño industrial moderno. Ubicación inmejorable en el corazón de la Condesa. A pasos de parques, restaurantes y vida nocturna. Techos altos y excelente iluminación natural.",
        imagenes: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
            "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800"
        ],
        badge: "Oferta"
    },
    {
        id: 6,
        nombre: "Penthouse Exclusivo en Pedregal",
        ubicacion: "Pedregal, CDMX",
        tipo: "departamento",
        precio: 18500000,
        m2: 420,
        recamaras: 4,
        banos: 4,
        estacionamiento: 3,
        anio: 2023,
        descripcion: "Penthouse de ultra lujo con terraza privada de 200m². Acabados importados, domótica completa, jacuzzi y asador. Vista de 360 grados de la ciudad. Sistema de climatización inteligente y bodega de vinos.",
        imagenes: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
        ],
        badge: "Nuevo"
    },
    {
        id: 7,
        nombre: "Casa de Playa en Acapulco",
        ubicacion: "Acapulco, Guerrero",
        tipo: "casa",
        precio: 9800000,
        m2: 380,
        recamaras: 4,
        banos: 3,
        estacionamiento: 2,
        anio: 2022,
        descripcion: "Hermosa casa frente al mar con acceso directo a la playa. Amplias terrazas, alberca infinity y palapa para eventos. Perfecta para inversión o casa de descanso. Sistema de paneles solares incluido.",
        imagenes: [
            "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
            "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
        ],
        badge: ""
    },
    {
        id: 8,
        nombre: "Departamento Familiar en Del Valle",
        ubicacion: "Del Valle, CDMX",
        tipo: "departamento",
        precio: 2900000,
        m2: 95,
        recamaras: 2,
        banos: 1,
        estacionamiento: 1,
        anio: 2018,
        descripcion: "Departamento funcional en una de las colonias más tradicionales de la ciudad. Cerca de transporte público, escuelas y comercios. Edificio con elevador y vigilancia. Excelente inversión.",
        imagenes: [
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
            "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800"
        ],
        badge: "Oferta"
    },
    {
        id: 9,
        nombre: "Terreno Comercial en Querétaro",
        ubicacion: "Querétaro, Querétaro",
        tipo: "terreno",
        precio: 5200000,
        m2: 2500,
        recamaras: 0,
        banos: 0,
        estacionamiento: 0,
        anio: 2024,
        descripcion: "Terreno comercial sobre avenida principal con alto flujo vehicular. Ideal para plaza comercial, hotel o desarrollo mixto. Todos los servicios disponibles. Excelente oportunidad de inversión.",
        imagenes: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
        ],
        badge: "Nuevo"
    },
    {
        id: 10,
        nombre: "Casa Campestre en Valle de Bravo",
        ubicacion: "Valle de Bravo, Estado de México",
        tipo: "casa",
        precio: 6500000,
        m2: 320,
        recamaras: 3,
        banos: 3,
        estacionamiento: 2,
        anio: 2020,
        descripcion: "Acogedora casa de campo con vista al lago. Chimenea, jardín amplio y ambiente rústico-moderno. Perfecta para fines de semana y vacaciones en familia. Construcción sustentable con materiales ecológicos.",
        imagenes: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
            "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800",
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800"
        ],
        badge: ""
    },
    {
        id: 11,
        nombre: "Departamento Estudiantil en CU",
        ubicacion: "Ciudad Universitaria, CDMX",
        tipo: "departamento",
        precio: 1850000,
        m2: 55,
        recamaras: 1,
        banos: 1,
        estacionamiento: 0,
        anio: 2019,
        descripcion: "Departamento compacto ideal para estudiantes o inversión. A minutos de CU y con fácil acceso a transporte. Incluye cocina equipada y área de lavandería. Muy buen retorno de inversión.",
        imagenes: [
            "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
            "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800"
        ],
        badge: "Oferta"
    },
    {
        id: 12,
        nombre: "Residencia Colonial en San Miguel de Allende",
        ubicacion: "San Miguel de Allende, Guanajuato",
        tipo: "casa",
        precio: 15000000,
        m2: 500,
        recamaras: 6,
        banos: 5,
        estacionamiento: 3,
        anio: 1890,
        descripcion: "Residencia colonial restaurada con arquitectura original del siglo XIX. Techos altos, cantera, patio central con fuente. Ubicada en el centro histórico. Perfecta combinación de historia y lujo moderno.",
        imagenes: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
            "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
        ],
        badge: "Nuevo"
    }
];

// ========================================
// FUNCIONES DE UTILIDAD
// ========================================

function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0
    }).format(precio);
}

function obtenerPropiedadPorId(id) {
    return propiedades.find(prop => prop.id === parseInt(id));
}

// ========================================
// MANEJO DE LOCALSTORAGE
// ========================================

function obtenerFavoritos() {
    const favoritos = localStorage.getItem('favoritos');
    return favoritos ? JSON.parse(favoritos) : [];
}

function guardarFavorito(idPropiedad) {
    let favoritos = obtenerFavoritos();
    if (!favoritos.includes(idPropiedad)) {
        favoritos.push(idPropiedad);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        actualizarBadges();
        return true;
    }
    return false;
}

function eliminarFavorito(idPropiedad) {
    let favoritos = obtenerFavoritos();
    favoritos = favoritos.filter(id => id !== idPropiedad);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    actualizarBadges();
}

function esFavorito(idPropiedad) {
    const favoritos = obtenerFavoritos();
    return favoritos.includes(idPropiedad);
}

function obtenerComparador() {
    const comparador = localStorage.getItem('comparador');
    return comparador ? JSON.parse(comparador) : [];
}

function agregarAComparador(idPropiedad) {
    let comparador = obtenerComparador();
    if (comparador.length >= 4) {
        alert('Solo puedes comparar hasta 4 propiedades');
        return false;
    }
    if (!comparador.includes(idPropiedad)) {
        comparador.push(idPropiedad);
        localStorage.setItem('comparador', JSON.stringify(comparador));
        actualizarBadges();
        return true;
    }
    return false;
}

function eliminarDeComparador(idPropiedad) {
    let comparador = obtenerComparador();
    comparador = comparador.filter(id => id !== idPropiedad);
    localStorage.setItem('comparador', JSON.stringify(comparador));
    actualizarBadges();
}

function estaEnComparador(idPropiedad) {
    const comparador = obtenerComparador();
    return comparador.includes(idPropiedad);
}

function actualizarBadges() {
    const badgeFavoritos = document.querySelectorAll('#badgeFavoritos');
    const badgeComparador = document.querySelectorAll('#badgeComparador');

    const numFavoritos = obtenerFavoritos().length;
    const numComparador = obtenerComparador().length;

    badgeFavoritos.forEach(badge => {
        badge.textContent = numFavoritos;
    });

    badgeComparador.forEach(badge => {
        badge.textContent = numComparador;
    });
}

// ========================================
// CATÁLOGO (INDEX.HTML)
// ========================================

function renderizarPropiedades(propiedadesFiltradas = propiedades) {
    const catalogoGrid = document.getElementById('catalogoGrid');
    const sinResultados = document.getElementById('sinResultados');
    const resultadosCount = document.getElementById('resultadosCount');

    if (!catalogoGrid) return;

    catalogoGrid.innerHTML = '';

    if (propiedadesFiltradas.length === 0) {
        sinResultados.classList.remove('d-none');
        catalogoGrid.classList.add('d-none');
        resultadosCount.textContent = '0';
        return;
    }

    sinResultados.classList.add('d-none');
    catalogoGrid.classList.remove('d-none');
    resultadosCount.textContent = propiedadesFiltradas.length;

    propiedadesFiltradas.forEach(propiedad => {
        const card = crearCardPropiedad(propiedad);
        catalogoGrid.appendChild(card);
    });
}

function crearCardPropiedad(propiedad) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 fade-in';

    const esFav = esFavorito(propiedad.id);
    const enComparador = estaEnComparador(propiedad.id);

    col.innerHTML = `
        <div class="producto-card">
            <div class="producto-card__imagen-container">
                <img src="${propiedad.imagenes[0]}" alt="${propiedad.nombre}" class="producto-card__imagen">
                ${propiedad.badge ? `<span class="producto-card__badge">${propiedad.badge}</span>` : ''}
                <button class="producto-card__favorito ${esFav ? 'activo' : ''}" data-id="${propiedad.id}" onclick="toggleFavorito(${propiedad.id})">
                    <i class="bi bi-heart${esFav ? '-fill' : ''}"></i>
                </button>
            </div>
            <div class="producto-card__contenido">
                <h3 class="producto-card__titulo">${propiedad.nombre}</h3>
                <p class="producto-card__ubicacion">
                    <i class="bi bi-geo-alt"></i>
                    ${propiedad.ubicacion}
                </p>
                <div class="producto-card__caracteristicas">
                    ${propiedad.recamaras > 0 ? `
                        <div class="caracteristica">
                            <i class="bi bi-door-closed"></i>
                            <span>${propiedad.recamaras} rec</span>
                        </div>
                    ` : ''}
                    <div class="caracteristica">
                        <i class="bi bi-arrows-angle-expand"></i>
                        <span>${propiedad.m2} m²</span>
                    </div>
                </div>
                <p class="producto-card__precio">${formatearPrecio(propiedad.precio)}</p>
                <div class="producto-card__acciones">
                    <button class="btn-comparar ${enComparador ? 'activo' : ''}" onclick="toggleComparador(${propiedad.id})">
                        <i class="bi bi-bar-chart"></i>
                        ${enComparador ? 'En comparador' : 'Comparar'}
                    </button>
                    <a href="detalle.html?id=${propiedad.id}" class="btn btn-primary btn-ver-detalle">
                        Ver detalle
                    </a>
                </div>
            </div>
        </div>
    `;

    return col;
}

function toggleFavorito(idPropiedad) {
    const btnFavorito = document.querySelector(`.producto-card__favorito[data-id="${idPropiedad}"]`);

    if (esFavorito(idPropiedad)) {
        eliminarFavorito(idPropiedad);
        btnFavorito.classList.remove('activo');
        btnFavorito.querySelector('i').classList.remove('bi-heart-fill');
        btnFavorito.querySelector('i').classList.add('bi-heart');
    } else {
        guardarFavorito(idPropiedad);
        btnFavorito.classList.add('activo');
        btnFavorito.querySelector('i').classList.remove('bi-heart');
        btnFavorito.querySelector('i').classList.add('bi-heart-fill');
    }
}

function toggleComparador(idPropiedad) {
    const btnComparador = document.querySelector(`.btn-comparar[onclick="toggleComparador(${idPropiedad})"]`);

    if (estaEnComparador(idPropiedad)) {
        eliminarDeComparador(idPropiedad);
        btnComparador.classList.remove('activo');
        btnComparador.innerHTML = `<i class="bi bi-bar-chart"></i> Comparar`;
    } else {
        if (agregarAComparador(idPropiedad)) {
            btnComparador.classList.add('activo');
            btnComparador.innerHTML = `<i class="bi bi-bar-chart"></i> En comparador`;
        }
    }
}

function filtrarPropiedades() {
    const busqueda = document.getElementById('busqueda').value.toLowerCase();
    const tipo = document.getElementById('filtroTipo').value;
    const recamaras = document.getElementById('filtroRecamaras').value;
    const rangoPrecio = document.getElementById('filtroPrecio').value;

    let propiedadesFiltradas = propiedades;

    if (busqueda) {
        propiedadesFiltradas = propiedadesFiltradas.filter(prop =>
            prop.nombre.toLowerCase().includes(busqueda) ||
            prop.ubicacion.toLowerCase().includes(busqueda)
        );
    }

    if (tipo) {
        propiedadesFiltradas = propiedadesFiltradas.filter(prop => prop.tipo === tipo);
    }

    if (recamaras) {
        propiedadesFiltradas = propiedadesFiltradas.filter(prop => prop.recamaras >= parseInt(recamaras));
    }

    if (rangoPrecio) {
        const [min, max] = rangoPrecio.split('-').map(Number);
        propiedadesFiltradas = propiedadesFiltradas.filter(prop =>
            prop.precio >= min && prop.precio <= max
        );
    }

    renderizarPropiedades(propiedadesFiltradas);
}

function inicializarCatalogo() {
    renderizarPropiedades();

    document.getElementById('busqueda')?.addEventListener('input', filtrarPropiedades);
    document.getElementById('filtroTipo')?.addEventListener('change', filtrarPropiedades);
    document.getElementById('filtroRecamaras')?.addEventListener('change', filtrarPropiedades);
    document.getElementById('filtroPrecio')?.addEventListener('change', filtrarPropiedades);
}

// ========================================
// DETALLE (DETALLE.HTML)
// ========================================

function inicializarDetalle() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (!id) {
        window.location.href = 'index.html';
        return;
    }

    const propiedad = obtenerPropiedadPorId(id);

    if (!propiedad) {
        window.location.href = 'index.html';
        return;
    }

    renderizarDetalle(propiedad);
}

function renderizarDetalle(propiedad) {
    const detalleContenido = document.getElementById('detalleContenido');

    const esFav = esFavorito(propiedad.id);
    const enComparador = estaEnComparador(propiedad.id);

    detalleContenido.innerHTML = `
        <div class="col-lg-7">
            <div id="carouselDetalle" class="carousel slide carousel-detalle" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    ${propiedad.imagenes.map((img, index) => `
                        <button type="button" data-bs-target="#carouselDetalle" data-bs-slide-to="${index}" 
                                class="${index === 0 ? 'active' : ''}" aria-label="Imagen ${index + 1}"></button>
                    `).join('')}
                </div>
                <div class="carousel-inner">
                    ${propiedad.imagenes.map((img, index) => `
                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                            <img src="${img}" class="d-block w-100" alt="${propiedad.nombre}">
                        </div>
                    `).join('')}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselDetalle" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselDetalle" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
        
        <div class="col-lg-5">
            <div class="detalle-info">
                ${propiedad.badge ? `<span class="badge bg-danger mb-3">${propiedad.badge}</span>` : ''}
                <h1 class="detalle-titulo">${propiedad.nombre}</h1>
                <p class="detalle-precio">${formatearPrecio(propiedad.precio)}</p>
                <p class="detalle-ubicacion">
                    <i class="bi bi-geo-alt-fill"></i>
                    ${propiedad.ubicacion}
                </p>
                
                <div class="detalle-caracteristicas">
                    ${propiedad.recamaras > 0 ? `
                        <div class="caracteristica-item">
                            <i class="bi bi-door-closed-fill"></i>
                            <h5>Recámaras</h5>
                            <p>${propiedad.recamaras}</p>
                        </div>
                    ` : ''}
                    ${propiedad.banos > 0 ? `
                        <div class="caracteristica-item">
                            <i class="bi bi-droplet-fill"></i>
                            <h5>Baños</h5>
                            <p>${propiedad.banos}</p>
                        </div>
                    ` : ''}
                    <div class="caracteristica-item">
                        <i class="bi bi-arrows-angle-expand"></i>
                        <h5>Área</h5>
                        <p>${propiedad.m2} m²</p>
                    </div>
                    ${propiedad.estacionamiento > 0 ? `
                        <div class="caracteristica-item">
                            <i class="bi bi-car-front-fill"></i>
                            <h5>Estacionamiento</h5>
                            <p>${propiedad.estacionamiento}</p>
                        </div>
                    ` : ''}
                    <div class="caracteristica-item">
                        <i class="bi bi-calendar-check"></i>
                        <h5>Año</h5>
                        <p>${propiedad.anio}</p>
                    </div>
                    <div class="caracteristica-item">
                        <i class="bi bi-house-fill"></i>
                        <h5>Tipo</h5>
                        <p>${propiedad.tipo.charAt(0).toUpperCase() + propiedad.tipo.slice(1)}</p>
                    </div>
                </div>
                
                <div class="detalle-descripcion">
                    <h3>Descripción</h3>
                    <p>${propiedad.descripcion}</p>
                </div>
                
                <div class="detalle-acciones">
                    <button class="btn ${esFav ? 'btn-danger' : 'btn-outline-danger'}" id="btnFavoritoDetalle">
                        <i class="bi bi-heart${esFav ? '-fill' : ''}"></i>
                        ${esFav ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
                    </button>
                    <button class="btn ${enComparador ? 'btn-primary' : 'btn-outline-primary'}" id="btnComparadorDetalle">
                        <i class="bi bi-bar-chart"></i>
                        ${enComparador ? 'Quitar de comparador' : 'Agregar a comparador'}
                    </button>
                </div>
            </div>
        </div>
    `;

    // Event listeners para botones
    document.getElementById('btnFavoritoDetalle').addEventListener('click', () => {
        toggleFavoritoDetalle(propiedad.id);
    });

    document.getElementById('btnComparadorDetalle').addEventListener('click', () => {
        toggleComparadorDetalle(propiedad.id);
    });
}

function toggleFavoritoDetalle(idPropiedad) {
    const btn = document.getElementById('btnFavoritoDetalle');

    if (esFavorito(idPropiedad)) {
        eliminarFavorito(idPropiedad);
        btn.className = 'btn btn-outline-danger';
        btn.innerHTML = '<i class="bi bi-heart"></i> Agregar a favoritos';
    } else {
        guardarFavorito(idPropiedad);
        btn.className = 'btn btn-danger';
        btn.innerHTML = '<i class="bi bi-heart-fill"></i> Eliminar de favoritos';
    }
}

function toggleComparadorDetalle(idPropiedad) {
    const btn = document.getElementById('btnComparadorDetalle');

    if (estaEnComparador(idPropiedad)) {
        eliminarDeComparador(idPropiedad);
        btn.className = 'btn btn-outline-primary';
        btn.innerHTML = '<i class="bi bi-bar-chart"></i> Agregar a comparador';
    } else {
        if (agregarAComparador(idPropiedad)) {
            btn.className = 'btn btn-primary';
            btn.innerHTML = '<i class="bi bi-bar-chart"></i> Quitar de comparador';
        }
    }
}

// ========================================
// FAVORITOS (FAVORITOS.HTML)
// ========================================

function inicializarFavoritos() {
    renderizarFavoritos();
}

function renderizarFavoritos() {
    const favoritosBody = document.getElementById('favoritosBody');
    const sinFavoritos = document.getElementById('sinFavoritos');
    const tablaFavoritosCard = document.getElementById('tablaFavoritosCard');

    const idsFavoritos = obtenerFavoritos();

    if (idsFavoritos.length === 0) {
        sinFavoritos.classList.remove('d-none');
        tablaFavoritosCard.classList.add('d-none');
        return;
    }

    sinFavoritos.classList.add('d-none');
    tablaFavoritosCard.classList.remove('d-none');

    favoritosBody.innerHTML = '';

    idsFavoritos.forEach(id => {
        const propiedad = obtenerPropiedadPorId(id);
        if (!propiedad) return;

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>
                <img src="${propiedad.imagenes[0]}" alt="${propiedad.nombre}" class="tabla-imagen">
            </td>
            <td><strong>${propiedad.nombre}</strong></td>
            <td>${propiedad.ubicacion}</td>
            <td>${propiedad.tipo.charAt(0).toUpperCase() + propiedad.tipo.slice(1)}</td>
            <td>${propiedad.recamaras || 'N/A'}</td>
            <td>${propiedad.m2} m²</td>
            <td><strong>${formatearPrecio(propiedad.precio)}</strong></td>
            <td>
                <a href="detalle.html?id=${propiedad.id}" class="btn btn-sm btn-primary me-2">
                    <i class="bi bi-eye"></i>
                </a>
                <button class="btn btn-sm btn-danger" onclick="eliminarFavoritoTabla(${propiedad.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        favoritosBody.appendChild(fila);
    });
}

function eliminarFavoritoTabla(idPropiedad) {
    eliminarFavorito(idPropiedad);
    renderizarFavoritos();
}

// ========================================
// COMPARADOR (COMPARADOR.HTML)
// ========================================

function inicializarComparador() {
    renderizarComparador();
}

function renderizarComparador() {
    const tablaComparador = document.getElementById('tablaComparador');
    const sinComparaciones = document.getElementById('sinComparaciones');
    const tablaComparadorCard = document.getElementById('tablaComparadorCard');
    const exportarContainer = document.getElementById('exportarContainer');

    const idsComparador = obtenerComparador();

    if (idsComparador.length === 0) {
        sinComparaciones.classList.remove('d-none');
        tablaComparadorCard.classList.add('d-none');
        exportarContainer.style.display = 'none';
        return;
    }

    sinComparaciones.classList.add('d-none');
    tablaComparadorCard.classList.remove('d-none');
    exportarContainer.style.display = 'block';

    const propiedadesComparar = idsComparador.map(id => obtenerPropiedadPorId(id)).filter(p => p);

    tablaComparador.innerHTML = `
        <thead class="table-light">
            <tr>
                <th>Característica</th>
                ${propiedadesComparar.map(prop => `<th class="text-center">${prop.nombre}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Imagen</strong></td>
                ${propiedadesComparar.map(prop => `
                    <td class="text-center">
                        <img src="${prop.imagenes[0]}" alt="${prop.nombre}" class="tabla-imagen">
                    </td>
                `).join('')}
            </tr>
            <tr>
                <td><strong>Ubicación</strong></td>
                ${propiedadesComparar.map(prop => `<td class="text-center">${prop.ubicacion}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Tipo</strong></td>
                ${propiedadesComparar.map(prop => `<td class="text-center">${prop.tipo.charAt(0).toUpperCase() + prop.tipo.slice(1)}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Precio</strong></td>
                ${propiedadesComparar.map(prop => `<td class="text-center"><strong>${formatearPrecio(prop.precio)}</strong></td>`).join('')}
            </tr>
            <tr>
                <td><strong>Área (m²)</strong></td>
                ${propiedadesComparar.map(prop => `<td class="text-center">${prop.m2} m²</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Recámaras</strong></td>
                ${propiedadesComparar.map(prop => `<td class="text-center">${prop.recamaras || 'N/A'}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Baños</strong></td>
                ${propiedadesComparar.map(prop => `<td class="text-center">${prop.banos || 'N/A'}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Estacionamiento</strong></td>
                ${propiedadesComparar.map(prop => `<td class="text-center">${prop.estacionamiento || 'N/A'}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Año</strong></td>
                ${propiedadesComparar.map(prop => `<td class="text-center">${prop.anio}</td>`).join('')}
            </tr>
            <tr>
                <td><strong>Acciones</strong></td>
                ${propiedadesComparar.map(prop => `
                    <td class="text-center">
                        <a href="detalle.html?id=${prop.id}" class="btn btn-sm btn-primary me-1">
                            <i class="bi bi-eye"></i>
                        </a>
                        <button class="btn btn-sm btn-danger" onclick="eliminarComparadorTabla(${prop.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                `).join('')}
            </tr>
        </tbody>
    `;

    document.getElementById('btnExportar').addEventListener('click', exportarComparacion);
}

function eliminarComparadorTabla(idPropiedad) {
    eliminarDeComparador(idPropiedad);
    renderizarComparador();
}

function exportarComparacion() {
    const idsComparador = obtenerComparador();
    const propiedadesComparar = idsComparador.map(id => obtenerPropiedadPorId(id)).filter(p => p);

    let contenido = 'COMPARACION DE PROPIEDADES - InmoView\n';
    contenido += '='.repeat(80) + '\n\n';

    propiedadesComparar.forEach((prop, index) => {
        contenido += `PROPIEDAD ${index + 1}:\n`;
        contenido += `-`.repeat(40) + '\n';
        contenido += `Nombre: ${prop.nombre}\n`;
        contenido += `Ubicación: ${prop.ubicacion}\n`;
        contenido += `Tipo: ${prop.tipo}\n`;
        contenido += `Precio: ${formatearPrecio(prop.precio)}\n`;
        contenido += `Área: ${prop.m2} m²\n`;
        contenido += `Recámaras: ${prop.recamaras || 'N/A'}\n`;
        contenido += `Baños: ${prop.banos || 'N/A'}\n`;
        contenido += `Estacionamiento: ${prop.estacionamiento || 'N/A'}\n`;
        contenido += `Año: ${prop.anio}\n`;
        contenido += `\n`;
    });

    contenido += '='.repeat(80) + '\n';
    contenido += `Generado el: ${new Date().toLocaleDateString('es-MX')}\n`;

    const blob = new Blob([contenido], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'comparacion_propiedades.txt';
    a.click();
    URL.revokeObjectURL(url);
}

// ========================================
// CONTACTO (CONTACTO.HTML)
// ========================================

function inicializarContacto() {
    const formulario = document.getElementById('formularioContacto');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!formulario.checkValidity()) {
            e.stopPropagation();
            formulario.classList.add('was-validated');
            return;
        }

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;

        const alertExito = document.getElementById('alertExito');
        alertExito.classList.remove('d-none');

        formulario.reset();
        formulario.classList.remove('was-validated');

        setTimeout(() => {
            alertExito.classList.add('d-none');
        }, 5000);
    });
}

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    actualizarBadges();

    const path = window.location.pathname;

    if (path.includes('index.html') || path === '/' || path.endsWith('/')) {
        inicializarCatalogo();
    } else if (path.includes('detalle.html')) {
        inicializarDetalle();
    } else if (path.includes('favoritos.html')) {
        inicializarFavoritos();
    } else if (path.includes('comparador.html')) {
        inicializarComparador();
    } else if (path.includes('contacto.html')) {
        inicializarContacto();
    }
});