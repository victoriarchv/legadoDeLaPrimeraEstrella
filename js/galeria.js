//DATA PIEZAS
let piezas = [
    {
        id: "pieza1",
        img1: "p1 (1).jpg",
        img2: "p1 (2).jpg",
        img3: "p1 (3).jpg",
        img4: "p1 (4).jpg",
        nombre: "Medalla aros",
        desc: "Descripción"
    },
    {
        id: "pieza2",
        img1: "p2 (1).jpg",
        img2: "p2 (2).jpg",
        img3: "p2 (3).jpg",
        img4: "p2 (4).jpg",
        nombre: "Medalla inicial",
        desc: "Descripción"
    },
    {
        id: "pieza3",
        img1: "p3 (1).jpg",
        img2: "p3 (2).jpg",
        img3: "p3 (3).jpg",
        img4: "p3 (4).jpg",
        nombre: "Medalla juegos",
        desc: "Descripción"
    },
    {
        id: "pieza4",
        img1: "p4 (1).jpg",
        img2: "p4 (2).jpg",
        img3: "p4 (3).jpg",
        img4: "p4 (4).jpg",
        nombre: "Todos con Pain",
        desc: "Descripción"
    },
    {
        id: "pieza5",
        img1: "p5 (1).jpg",
        img2: "p5 (2).jpg",
        img3: "p5 (3).jpg",
        img4: "p5 (4).jpg",
        nombre: "Medalla aros g",
        desc: "Descripción"
    },
    {
        id: "pieza6",
        img1: "p6 (1).jpg",
        img2: "p6 (2).jpg",
        img3: "p6 (3).jpg",
        img4: "p6 (4).jpg",
        nombre: "nota de prensa",
        desc: "Descripción"
    },
    {
        id: "pieza7",
        img1: "p7 (1).jpg",
        img2: "p7 (2).jpg",
        img3: "p7 (3).jpg",
        img4: "p7 (4).jpg",
        nombre: "plantel campeón",
        desc: "Descripción"
    },
    {
        id: "pieza8",
        img1: "p8 (1).jpg",
        img2: "p8 (2).jpg",
        img3: "p8 (3).jpg",
        img4: "p8 (4).jpg",
        nombre: "diploma",
        desc: "Descripción"
    }

]

//ELEMENTOS
let galeriaContainer = document.querySelector("#elemGaleria");
console.log(galeriaContainer);

//GENERACION DE PIEZAS
piezas.forEach((e) => {
    console.log(e);

    galeriaContainer.innerHTML += `
    <article class="pieza" id="${e.id}">
                   <div class="piezaGrid">
                        <div class="piezaGridItem item1 animarDetalle animarDetalleOculto">
                            <img src="media/piezas/${e.img1}" alt="">
                        </div>
                        <div class="piezaGridItem item2 animarDetalle animarDetalleOculto">
                            <img src="media/piezas/${e.img2}" alt="">
                        </div>
                        <div class="piezaGridItem item3 animarDetalle animarDetalleOculto">
                            <img src="media/piezas/${e.img3}" alt="">
                        </div>
                        <div class="piezaGridItem item4 animarDetalle animarDetalleOculto">
                            <img src="media/piezas/${e.img4}" alt="">
                        </div>
                    </div>
                    <div class="piezaAbout">
                        <h2 class="animarDetalle animarDetalleOculto">${e.nombre}</h2>
                        <p class="animarDetalle animarDetalleOculto">${e.desc}</p>
                    </div>
                </article>
    `
})


//INTERACCION DE CADA PIEZA
//get each pieza article
let piezasArticles = document.querySelectorAll("article");

// Índices independientes por galería
let galleryIndices = {};

//CREACION DE GALERIA
/* let piezaImgs = document.querySelectorAll(".piezaGridItem img"); //AJUSTAR SELECTOR PARA QUE SEA UNO PARA CADA PIEZA

let piezaImgsIndex;
let piezaImgSrc; */

// get images src onclick
/* piezaImgs.forEach((img, i) => {
    img.addEventListener("click", (e) => {
        piezaImgSrc = e.target.src;
        //run modal function
        imgModal(piezaImgSrc);
        //index of the current image
        piezaImgsIndex = i;
    });
});
 */

// Configura las galerías
piezasArticles.forEach((article, galleryIndex) => {
    const galleryImages = article.querySelectorAll(".piezaGridItem img"); // Imágenes de la galería actual
    galleryIndices[galleryIndex] = 0; // Inicializa el índice de la galería

    galleryImages.forEach((img, imgIndex) => {
        img.addEventListener("click", (e) => {
            const imgSrc = e.target.src;
            galleryIndices[galleryIndex] = imgIndex; // Actualiza el índice de la galería actual
            imgModal(imgSrc, galleryIndex, galleryImages); // Pasa la referencia de la galería
        });
    });
});

// Función de modal para mostrar imágenes
const imgModal = (src, galleryIndex, galleryImages) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");

    document.querySelector("#s_piezas").append(modal);

    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    modal.append(newImage);

    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "close-btn");
    closeBtn.onclick = () => modal.remove();
    modal.append(closeBtn);

    // Botón de siguiente
    const nextBtn = document.createElement("i");
    nextBtn.setAttribute("class", "next-btn");
    nextBtn.onclick = () => {
        galleryIndices[galleryIndex]++; // Incrementa el índice de la galería actual
        if (galleryIndices[galleryIndex] >= galleryImages.length) {
            galleryIndices[galleryIndex] = 0; // Cicla al inicio
        }
        newImage.setAttribute("src", galleryImages[galleryIndices[galleryIndex]].src);
    };

    // Botón de anterior
    const prevBtn = document.createElement("i");
    prevBtn.setAttribute("class", "prev-btn");
    prevBtn.onclick = () => {
        galleryIndices[galleryIndex]--; // Decrementa el índice de la galería actual
        if (galleryIndices[galleryIndex] < 0) {
            galleryIndices[galleryIndex] = galleryImages.length - 1; // Cicla al final
        }
        newImage.setAttribute("src", galleryImages[galleryIndices[galleryIndex]].src);
    };

    modal.append(nextBtn, prevBtn);
};


//FUNCIONES
//creating the modal
/* const imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");

    //add the modal to the main section or the parent element
    document.querySelector("#s_piezas").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    modal.append(newImage)

    //creating the close button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "close-btn");
    //close function
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImage, closeBtn);

    //next and previous buttons
    const nextBtn = document.createElement("i");
    nextBtn.setAttribute("class", "next-btn");
    // change the src of current image to the src of next image
    nextBtn.onclick = () => {
        newImage.setAttribute("src", nextImg())
    };
    const prevBtn = document.createElement("i");
    prevBtn.setAttribute("class", "prev-btn");
    // change the src of current image to the src of pevious image
    prevBtn.onclick = () => {
        newImage.setAttribute("src", prevImg())
    }
    modal.append(newImage, closeBtn, nextBtn, prevBtn);
};

//next image function
let nextImg = () => {
    piezaImgsIndex++;
    //check if it is the the last image
    if (piezaImgsIndex >= piezaImgs.length) {
        piezaImgsIndex = 0
    }
    //return src of the new image
    return piezaImgs[piezaImgsIndex].src;
};
//previous image function
let prevImg = () => {
    piezaImgsIndex--;
    console.log(piezaImgsIndex);
    //check if it is the first image
    if (piezaImgsIndex < 0) {
        piezaImgsIndex = piezaImgs.length - 1
    }
    //return src of previous image
    return piezaImgs[piezaImgsIndex].src
} */

// Configurar el Intersection Observer
const options = {
    root: null, // Observa respecto al viewport.
    rootMargin: "0px", // Sin margen adicional.
    threshold: 0.3 // 20% del elemento debe estar visible (equivale al 80% del viewport restante).
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // El elemento está visible en el viewport
            entry.target.classList.remove("animarDetalleOculto");
        } else {
            // El elemento está fuera del viewport
            entry.target.classList.add("animarDetalleOculto");
        }
    });
}, options);

// Seleccionar todos los elementos con la clase 'animarDetalle'
const elementos = document.querySelectorAll(".animarDetalle");

// Observar cada elemento
elementos.forEach(elemento => {
    observer.observe(elemento);
});