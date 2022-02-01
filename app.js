const galary = document.querySelector('.galary')
const images = document.querySelectorAll('.image')
const showingImg = document.querySelector('.showing_img img')

images.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        showingImg.setAttribute('src', e.target.src)
    })
});