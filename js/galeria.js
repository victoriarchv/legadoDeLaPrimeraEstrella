//DATA PIEZAS
let piezas = [
    {
        id: "pieza1",
        img1: "example.jfif",
        img2: "example2.jpg",
        img3: "example3.jpg",
        img4: "example4.jpg",
        nombre: "Nombre",
        desc: "Descripción"
    },

    {
        id: "pieza2",
        img1: "example4.jpg",
        img2: "example2.jpg",
        img3: "example3.jpg",
        img4: "example.jfif",
        nombre: "Nombre",
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
                        <div class="piezaGridItem item1">
                            <img src="media/piezas/${e.img1}" alt="">
                        </div>
                        <div class="piezaGridItem item2">
                            <img src="media/piezas/${e.img2}" alt="">
                        </div>
                        <div class="piezaGridItem item3">
                            <img src="media/piezas/${e.img3}" alt="">
                        </div>
                        <div class="piezaGridItem item4">
                            <img src="media/piezas/${e.img4}" alt="">
                        </div>
                    </div>
                    <div class="piezaAbout">
                        <h2>${e.nombre}</h2>
                        <p>${e.desc}</p>
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