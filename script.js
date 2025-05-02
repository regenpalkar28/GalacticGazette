const modal = document.getElementById("planetModal");
const closeBtn = document.querySelector(".close-btn");

const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalText = document.getElementById("modalText");

const cardData = [
  {
    title: "The Mystery of Dark Matter",
    date: "April 10, 2025",
    fullText: "Dark matter doesn't emit, absorb, or reflect light. It's invisible and detected by gravitational effects. Scientists believe it makes up 27% of the universe, yet we don’t know what it’s made of!"
  },
  {
    title: "Journey to Mars: What’s Next?",
    date: "April 8, 2025",
    fullText: "Mars missions are getting real! NASA's Artemis program and SpaceX's Starship could make human Mars landings possible by the late 2030s. The challenges? Radiation, fuel, food—and a safe return."
  },
  {
    title: "Black Holes and Time Travel",
    date: "April 5, 2025",
    fullText: "Some theories suggest that if you enter a rotating black hole (Kerr black hole), you might access a 'wormhole'. This could link two distant points in spacetime, opening the door to theoretical time travel!"
  }
];

document.querySelectorAll(".card button").forEach((button, index) => {
  button.addEventListener("click", () => {
    modalTitle.textContent = cardData[index].title;
    modalDate.textContent = cardData[index].date;
    modalText.textContent = cardData[index].fullText;
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
