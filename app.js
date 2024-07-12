const mainimage = document.getElementById("imageBank");
document.querySelectorAll("#thumbnails");
const imageBank = [
  {
    src: "./images/senorloco.JPG",
    alt: "Graffiti of an unidentified figure in a suit.",
  },
  { src: "./images/sagrada.JPG", alt: "Alt text here." },
  { src: "./images/eighty.JPG", alt: "Alt text here." },
  { src: "./images/nineteen.JPG", alt: "Alt text here." },
  {
    src: "./images/murakami.JPG",
    alt: "A small section of the painting Pink River by Takashi Murakami, showing a print-dot circle of black atop a polychromatic fruit tree.",
  },
  {
    src: "./images/basquiat.JPG",
    alt: "The painting Untitled Bracco di Ferro by Jean-Michel Basquiat, a black and yellow canvas depicting a muscular male torso with exposed bone.",
  },
  {
    src: "./images/dali.JPG",
    alt: "The sculpture Woman Aflame by Salvador Dalí, a faceless woman shrouded in fabric with drawers emerging from her chest and left side. Two people are standing to its left, viewing another work.",
  },
  { src: "./images/kaws.JPG", alt: "Alt text here." },
  { src: "./images/gemroom.JPG", alt: "Alt text here." },
  { src: "./images/figurines.JPG", alt: "Alt text here." },
];
let currentIndex = 0;

document.createElement("img");

document.getElementById("btNext").onclick = () => changeimg(1);
document.getElementById("btPrev").onclick = () => changeimg(-1);

function changeimg(cycle) {
  currentIndex += cycle;
  if (currentIndex >= imageBank.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = imageBank.length - 1;
  mainimage.src = imageBank[currentIndex].src;
  console.log(currentIndex);
}
// Small version of each picture on the page.
// Each needs an eventListener so they're clickable to change mainimage
// Add next and previous buttons
