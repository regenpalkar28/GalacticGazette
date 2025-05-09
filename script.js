const modal = document.getElementById("planetModal");
const closeBtn = document.querySelector(".close-btn");

const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalText = document.getElementById("modalText");

const cardData = [
  {
    title: "The Mystery of Dark Matter",
    date: "April 10, 2025",
    fullText: "Dark matter doesn't emit, absorb, or reflect light. It's invisible and detected by gravitational effects. Scientists believe it makes up 27% of the universe, yet we don’t know what it’s made of! Dark matter is one of the biggest mysteries in modern science. It refers to an invisible substance that makes up about 27% of the universe, yet it cannot be seen or directly detected with current instruments. Scientists discovered dark matter by observing that galaxies rotate much faster than expected based on the visible matter they contain. This suggests there’s an unseen mass providing extra gravity to hold them together. Unlike ordinary matter, dark matter does not emit, absorb, or reflect light, which is why it's 'dark.' Its presence is known only through its gravitational effects on stars, galaxies, and even the large-scale structure of the universe. Many theories suggest dark matter could be made up of unknown particles, such as WIMPs (Weakly Interacting Massive Particles) or axions, but no conclusive evidence has been found yet.Researchers around the world are conducting experiments deep underground and in space to try and detect dark matter directly. Understanding this mysterious substance is crucial because it plays a key role in how galaxies form and evolve. Solving the puzzle of dark matter could lead to a deeper understanding of the universe and the fundamental laws of physics."
  },
  {
    title: "Journey to Mars: What’s Next?",
    date: "April 8, 2025",
    fullText: "Mars missions are getting real! NASA's Artemis program and SpaceX's Starship could make human Mars landings possible by the late 2030s. The challenges? Radiation, fuel, food—and a safe return.The journey to Mars is one of humanity’s most ambitious goals, and exciting developments are shaping what comes next. Space agencies like NASA and private companies like SpaceX are actively working on missions to send humans to the Red Planet within the next couple of decades. NASA’s Artemis program, which aims to return humans to the Moon first, is seen as a stepping stone for Mars missions. Meanwhile, SpaceX is developing its Starship rocket, designed for deep-space travel and capable of carrying large crews and cargo to Mars. The next steps include testing life support systems, building sustainable habitats, and developing technologies to produce water, oxygen, and fuel using Martian resources — a concept called in-situ resource utilization. Robotic missions, like NASA’s Perseverance rover, are already collecting valuable data to prepare for human arrival. Challenges remain, such as protecting astronauts from cosmic radiation, surviving long-duration space travel, and ensuring safe landing and return. Despite the hurdles, international interest is growing, with countries like China and the UAE also eyeing Mars missions. If progress continues, we could see the first humans set foot on Mars in the 2030s or 2040s, marking the start of a new era in space exploration."
  },
  {
    title: "Black Holes and Time Travel",
    date: "April 5, 2025",
    fullText: "Some theories suggest that if you enter a rotating black hole (Kerr black hole), you might access a 'wormhole'. This could link two distant points in spacetime, opening the door to theoretical time travel! A black hole, formed when a massive star collapses, has such strong gravity that not even light can escape. Near its boundary, called the event horizon, time slows down due to intense gravity — a phenomenon known as time dilation. This means that spending time near a black hole could let someone experience hours while years pass elsewhere, effectively enabling travel into the future. Traveling back in time is more speculative. Theoretical concepts like wormholes, which could connect different points in space and time, suggest it's possible, but they require exotic matter and face logical problems like the famous grandfather paradox. While black holes and time dilation are real, actual time travel, especially to the past, remains a theory and a popular theme in science fiction."
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
