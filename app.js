const mainimage = document.getElementById("imageBank");
const imageBank = [
  {
    src: "images/senorloco.JPG",
    alt: "Graffiti of an unidentified figure in a suit.",
  },
  { src: "images/sagrada.JPG", alt: "Alt text here." },
  { src: "images/eighty.JPG", alt: "Alt text here." },
  { src: "images/nineteen.JPG", alt: "Alt text here." },
  { src: "images/murakami.JPG", alt: "Alt text here." },
  { src: "images/basquiat.JPG", alt: "Alt text here." },
  { src: "images/dali.JPG", alt: "Alt text here." },
  { src: "images/kaws.JPG", alt: "Alt text here." },
  { src: "images/gemroom.JPG", alt: "Alt text here." },
  { src: "images/figurines.JPG", alt: "Alt text here." },
];
let currentIndex = 0;

document.createElement("img");

document.getElementById("btNext").onclick = () => changeimg(1);
document.getElementById("btPrev").onclick = () => changeimg(-1);

function changeimg(direction) {
  currentIndex += direction;
  if (currentIndex >= imageBank.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = imageBank.length - 1;
  mainimage.src = imageBank[currentIndex].src;
  console.log(currentIndex);
}

// Small version of each picture on the page.
// Each needs an eventListener so they're clickable to change mainimage
// Add next and previous buttons
