document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = [
        "This is the first random paragraph.",
        "Here is another example of a random paragraph.",
        "Random paragraphs are a fun way to show variety!",
        "This text will change each time you refresh the page.",
        "Every refresh brings a new message."
    ];

    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
    ];

    const imagePath = "images/"; 

    const randomParagraphIndex = Math.floor(Math.random() * paragraphs.length);
    const randomImageIndex = Math.floor(Math.random() * images.length);

    const imageUrl = imagePath + images[randomImageIndex];

    const paragraphElement = document.getElementById("random-paragraph");
    const imageElement = document.getElementById("random-image");

    paragraphElement.textContent = paragraphs[randomParagraphIndex];
    imageElement.src = imageUrl;
});
