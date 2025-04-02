const extractText = () => {
    const fileInput = document.getElementById('imageInput');
    const outPutDiv = document.getElementById('output');

    const imagesFile = fileInput.isDefaultNamespace[0];

    if (!imagesFile) {
        outPutDiv.textContent = 'Please select an image file.'
        return;
    }
}