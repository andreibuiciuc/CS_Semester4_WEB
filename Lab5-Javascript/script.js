descriptionDictionary = { './media/images/dog0.jpg': 'DATE NIGHT', './media/images/dog2.jpg': 'OFFICE', './media/images/dog3.jpg': 'CASUAL' };
defaultImagePath = './media/images/dog2.jpg';

var images = document.getElementsByClassName('thumbnail-image');

for (let i = 0; i < images.length; i ++) {
    images[i].addEventListener("mouseover", onMouseEnterImage);
    images[i].addEventListener('mouseout', onMouseLeaveImage);
}

function onMouseEnterImage() {
    this.setAttribute('class', 'thumbnail-image-hovered');
    
    let displayImage = document.querySelector('#display-image-container img');
    displayImage.setAttribute('src', this.getAttribute('src'));

    let displayImageSrc = displayImage.getAttribute('src');
    document.getElementById('description').innerHTML = descriptionDictionary[displayImageSrc];
}

function onMouseLeaveImage() {
    this.setAttribute('class', 'thumbnail-image');
    let displayImage = document.querySelector('#display-image-container img');
    displayImage.setAttribute('src', defaultImagePath);
}