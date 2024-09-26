function changeImage(imageSrc) {
    document.getElementById('productImage').src = imageSrc;
}

const increaseBtn = document.querySelector('.btn-increase');
const decreaseBtn = document.querySelector('.btn-decrease');
const quantityInput = document.getElementById('quantidade');

increaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});

decreaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});