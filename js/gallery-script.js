'use stict';

let i = 0; // Start point
let images = []; // Images Array
let time = 3000; // Time Between Switch


// Image list
images[0] = 'images/tokyo/tokyo-banner-1.png';
images[1] = 'images/tokyo/tokyo-banner-2.png';
images[2] = 'images/tokyo/tokyo-banner-3.png';
images[3] = 'images/tokyo/tokyo-banner-4.png';

// Change Image

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
};

window.onload = changeImg;