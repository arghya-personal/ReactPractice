const qBank = [
  {
    qs: "What is the capital of Indonesia",
    ans: ["New Delhi", "Jakarta", "Baku"],
    correct: "Jakarta",
    qId: "100"
  },
  {
    qs: "Greenland is near by which continent",
    ans: ["North America", "Europe", "Asia"],
    correct: "North America",
    qId: "101"
  },
  {
    qs: "Who is the founder member of Pink Floyd",
    ans: ["Syd Barret", "Gilmore", "Nick Meson"],
    correct: "Syd Barret",
    qId: "102"
  },
  {
    qs: "Which is related to Automobile",
    ans: ["Aperature", "Alan key", "BS6"],
    correct: "BS6",
    qId: "103"
  },
  {
    qs: "Papua new Gunie in which continent",
    ans: ["South Africa", "Ocania", "Antarctica"],
    correct: "Ocania",
    qId: "104"
  },
  {
    qs: "Birth day of Baba AllaUdding Khan",
    ans: ["8th Oct", "8th Nov", "8th Dec"],
    correct: "8th Oct",
    qId: "105"
  }
];

export default (n = 6) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()));
