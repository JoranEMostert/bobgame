const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const image = new Image();
image.src = './img/bomb.png';
const img = new Image();
img.src = './img/arrow.png';

let tekenbom = () => {
    c.drawImage(image, 0, 0, image.width, image.height,(innerWidth/2)-100,(innerHeight/2)-100, 200, 200);
}
let tekenarrow = () => {
    c.drawImage(img, (innerWidth/2)-img.width/2,(innerHeight/2)-img.height/2, img.width, img.height);
}

(window.onresize = () => {
    canvas.width = innerWidth, canvas.height = innerHeight;
    tekenarrow();
    tekenbom();
})();

image.addEventListener('load', e => {
    tekenbom();
});

img.addEventListener('load', e => {
    tekenarrow();
});


// const image = new Image(60, 45);
// image.onload = drawImageActualSize;
// image.src = 'img/bomb.png';
//
// function drawImageActualSize() {
//     canvas.width = this.naturalWidth;
//     canvas.height = this.naturalHeight;
//     c.drawImage(this, 0, 0);
//     c.drawImage(this, 0, 0, this.width, this.height);
// }