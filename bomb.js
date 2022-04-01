const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const image = new Image();
image.src = './img/bomb.png';
const img = new Image();
img.src = './img/arrow.png';
//
(window.onresize = () => {
    canvas.width = innerWidth, canvas.height = innerHeight;
})();
//
let angle = 0;
let anime = () => {
    requestAnimationFrame(() => anime());
    angle = (angle + 1) % 360
    c.clearRect(0, 0, innerWidth, innerHeight);

    const xd = {
        get dx() {
            return innerWidth/2-this.width/2;
        },
        get dy() {
            return innerHeight/2-this.height/2;
        },
        get width() {
            return img.width;
        },
        get height() {
            return img.height;
        }
    };

    c.save()
    let offset = 50;
    let xTransform = innerWidth / 2;
    let yTransform = innerHeight/2 + offset;
    c.translate(xTransform, yTransform - offset);
    c.rotate( angle*Math.PI/180 ); // Then do the actual rotation.
    c.translate(-xTransform, -yTransform);
    drawImage(img, xd)
    c.restore()

    drawImage(image, {
        get dx() {
            return innerWidth/2-this.width/2;
        },
        get dy() {
            return innerHeight/2-this.height/2;
        },
        get width() {
            return 160;
        },
        get height() {
            return 160;
        }
    })
    setInterval(let = beep = () =>{

    }, 5);
}

let drawImage = (imgsource, obj) => {
    c.drawImage(imgsource, 0, 0, imgsource.width, imgsource.height, obj.dx,obj.dy, obj.width, obj.height);
}

anime()
// let angle = 0;
// window.setInterval(function(){
//     angle = (angle + 1) % 360;
//     dc.clearRect(0, 0, canvas.width, canvas.height);
//
//     dc.save();
//     dc.fillStyle = "#FF0000";
//
//     dc.translate(100,200); // First translate the context to the center you wish to rotate around.
//     dc.rotate( angle*Math.PI/180 ); // Then do the actual rotation.
//     dc.translate(-100,-200); // Then translate the context back.
//
//     dc.beginPath();
//     dc.moveTo(100, 100);
//     dc.lineTo(200, 100);
//     dc.lineTo(200,300);
//     dc.lineTo(100,300);
//     dc.closePath();
//     dc.fill();
//
//     dc.restore();
// }, 5);

// let drawimg = (imgsource, sx, sy, imagewith, imageheight,dx, dy, heightimg, withimg) => {
//     imgsource.addEventListener('load', e => {
//         c.drawImage(imgsource, sx, sy, imagewith, imageheight,dx,dy, heightimg, withimg);
//     })
//
//     (window.onresize = () => {
//         c.drawImage(imgsource, sx, sy, imagewith, imageheight,dx,dy, heightimg, withimg);
//     })();
// }

// const drawImage = (img, obj) => {
//     imgsource.addEventListener('load', e => {
//         c.drawImage(img, sx, sy, imagewith, imageheight,dx,dy, heightimg, withimg);
//     })
//
//     (window.onresize = () => {
//         c.drawImage(imgsource, sx, sy, imagewith, imageheight,dx,dy, heightimg, withimg);
//     })();
// }
//
// drawImage(image)
//
// const obj = {
//     get sx() {
//         return;
//     }
// }


// let tekenbom = () => {
//     c.drawImage(image, 0, 0, image.width, image.height,(innerWidth/2)-100,(innerHeight/2)-100, 200, 200);
// }
// let tekenarrow = () => {
//     c.drawImage(img, (innerWidth/2)-img.width/2,(innerHeight/2)-img.height/2, img.width, img.height);
// }



// image.addEventListener('load', e => {
//     tekenbom();
// });
//
// img.addEventListener('load', e => {
//     tekenarrow();
// });
