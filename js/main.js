const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.class = '';
lightbox.innerHTML = `<button onclick="hideImage()">X</button>`;
const displayImage = document.createElement('img');
const body = document.querySelector('body');

let images = document.querySelectorAll('img');
lightbox.appendChild(displayImage);
document.body.appendChild(lightbox);

images.forEach((image) => {
    image.addEventListener('click', () => {
        //console.log(`Imgae ${index}`);
        showImage(image);
    });
});

showImage = image => {

    //Image to display
    displayImage.setAttribute('src', image.src);

    //append image and child
    lightbox.style.display = "flex";

    //Locks the scrolling
    body.style.overflow = 'hidden';
}


hideImage = () => {
    const image = document.querySelector('#lightbox img');
    document.querySelector('#lightbox').setAttribute('src', '');
    lightbox.style.display = "none";
    //unlock the scroll
    body.style.overflow = 'scroll';
}