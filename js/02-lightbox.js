import { galleryItems } from './gallery-items.js'


const ulImg  = document.querySelector(".gallery");

const createImgMarkp = ( array ) => {
  const markup = array.map((el) => {
    return`<li class="gallery__item">
    <a class="gallery__link" 
    href="${el.original}">
       <img class="gallery__image" 
       src="${el.preview}" 
       alt="${el.description}"
      
    </a>
 </li>`
  }).join("")

  ulImg.innerHTML=markup
}

createImgMarkp(galleryItems )

lightbox = new SimpleLightbox('.gallery a', { 250});
// const handleGaleryClick= (event)=>{
//   event.preventDefault()
//   const imgSrc = event.target.getAttribute("data-source")
//   const instance = basicLightbox.create(`
// 	<div><img src="${imgSrc}" width = "800" height="600"></div>`)

// instance.show()}