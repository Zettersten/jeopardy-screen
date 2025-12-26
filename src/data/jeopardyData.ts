export interface Question {
  points: number;
  question: string;
  answer: string;
  revealed: boolean;
}

export interface Category {
  name: string;
  questions: Question[];
}

export const categories: Category[] = [
  {
    name: "Men and Women",
    questions: [
      { points: 100, question: "These paired glands make sperm and most testosterone.", answer: "What are the testes?", revealed: false },
      { points: 200, question: "Fertilization most often occurs in this passageway between an ovary and the uterus.", answer: "What is the fallopian tube?", revealed: false },
      { points: 300, question: "Most home pregnancy tests detect this hormone in urine.", answer: "What is hCG (human chorionic gonadotropin)?", revealed: false },
      { points: 400, question: "This muscular canal connects the cervix to the outside of the body.", answer: "What is the vagina?", revealed: false },
      { points: 500, question: "During pregnancy, this temporary organ delivers oxygen and nutrients to a developing fetus.", answer: "What is the placenta?", revealed: false },
      { points: 600, question: "The monthly release of an egg from an ovary is called this.", answer: "What is ovulation?", revealed: false },
      { points: 700, question: "This gland behind the bladder adds a fructose-rich fluid that helps nourish sperm.", answer: "What is a seminal vesicle?", revealed: false },
      { points: 800, question: "This hormone helps drive uterine contractions in labor and also triggers milk letdown.", answer: "What is oxytocin?", revealed: false },
    ],
  },
  {
    name: "Jiz' The Season",
    questions: [
      { points: 100, question: "The most common “stocking stuffer” that also reduces STI risk is this thin barrier.", answer: "What is a condom?", revealed: false },
      { points: 200, question: "The “morning-after” pill’s active ingredient is this progestin.", answer: "What is levonorgestrel?", revealed: false },
      { points: 300, question: "Under the mistletoe, this concept means an enthusiastic, informed “yes.”", answer: "What is consent?", revealed: false },
      { points: 400, question: "This carol promises you’ll be “laughing all the way” as you ride a one-horse open sleigh.", answer: "What is “Jingle Bells”?", revealed: false },
      { points: 500, question: "A “holiday glow” isn’t always festive—this yeast overgrowth can cause itching and thick discharge.", answer: "What is a yeast infection?", revealed: false },
      { points: 600, question: "Hung in doorways for kisses, this winter plant’s tradition turns parties into awkward rom-com scenes.", answer: "What is mistletoe?", revealed: false },
      { points: 700, question: "Often recommended through age 26 (and sometimes later), this shot helps prevent certain cancer-linked strains.", answer: "What is the HPV vaccine (Gardasil)?", revealed: false },
      { points: 800, question: "In the Wham! holiday hit, the singer says he gave away this, and it was tossed aside the very next day.", answer: "What is his heart?", revealed: false },
    ],
  },
  {
    name: "Pen Is Mightier",
    questions: [
      { points: 100, question: "Elizabeth Bennet and Mr. Darcy spar their way toward romance in this Austen novel.", answer: "What is Pride and Prejudice?", revealed: false },
      { points: 200, question: "A future where books are outlawed follows fireman Guy Montag in this Bradbury classic.", answer: "What is Fahrenheit 451?", revealed: false },
      { points: 300, question: "Holden Caulfield narrates a few turbulent days after being expelled from prep school in this novel.", answer: "What is The Catcher in the Rye?", revealed: false },
      { points: 400, question: "A young scientist animates a creature and regrets it in this early sci-fi horror novel.", answer: "What is Frankenstein?", revealed: false },
      { points: 500, question: "Seven generations of the Buendía family live out their tangled fate in the town of Macondo in this novel.", answer: "What is One Hundred Years of Solitude?", revealed: false },
      { points: 600, question: "This mystery writer created Hercule Poirot and Miss Marple.", answer: "Who is Agatha Christie?", revealed: false },
      { points: 700, question: "A Danish prince stages a play to test his uncle’s guilt in this Shakespeare tragedy.", answer: "What is Hamlet?", revealed: false },
      { points: 800, question: "Raskolnikov’s crime and moral unraveling drive a famous psychological novel by this author.", answer: "Who is Fyodor Dostoevsky?", revealed: false },
    ],
  },
  {
    name: "Music and Movies",
    questions: [
      { points: 100, question: "Simba returns to Pride Rock after his father’s death and an uncle’s takeover in this Disney animated film.", answer: "What is The Lion King?", revealed: false },
      { points: 200, question: "This singer’s “Single Ladies” dance became a global meme long before TikTok.", answer: "Who is Beyoncé?", revealed: false },
      { points: 300, question: "Jack and Rose fall in love aboard a doomed 1912 ocean liner in this blockbuster romance.", answer: "What is Titanic?", revealed: false },
      { points: 400, question: "A thief infiltrates dreams within dreams, and a spinning top teases reality in this 2010 film.", answer: "What is Inception?", revealed: false },
      { points: 500, question: "This composer scored Interstellar, Gladiator, and the Pirates of the Caribbean theme.", answer: "Who is Hans Zimmer?", revealed: false },
      { points: 600, question: "A small Indiana town, a secret lab, and a girl with telekinesis anchor this Netflix hit.", answer: "What is Stranger Things?", revealed: false },
      { points: 700, question: "Lightsabers, Jedi, and a galaxy-spanning rebellion define this long-running film franchise.", answer: "What is Star Wars?", revealed: false },
      { points: 800, question: "A clown-faced villain taunts Gotham with “Why so serious?” in this 2008 superhero film.", answer: "What is The Dark Knight?", revealed: false },
    ],
  },
  {
    name: "Artificial Intelligence",
    questions: [
      { points: 100, question: "A calm-voiced ship computer refuses to open the pod bay doors in a classic sci-fi film.", answer: "What is HAL 9000?", revealed: false },
      { points: 200, question: "Say “Hey” plus this assistant’s name to set a timer on an iPhone.", answer: "What is Siri?", revealed: false },
      { points: 300, question: "In the Terminator movies, a defense network becomes self-aware and starts a nuclear war.", answer: "What is Skynet?", revealed: false },
      { points: 400, question: "Before FRIDAY, Iron Man’s mansion had a snarky voice assistant with this name.", answer: "What is JARVIS?", revealed: false },
      { points: 500, question: "A 1950s-style test asks whether a human judge can tell a person from a machine in text chat.", answer: "What is the Turing Test?", revealed: false },
      { points: 600, question: "Princess Leia’s recorded plea is carried by this small dome-topped droid that mostly speaks in beeps.", answer: "What is R2-D2?", revealed: false },
      { points: 700, question: "This OpenAI chatbot helped make “prompt engineering” dinner-table conversation.", answer: "What is ChatGPT?", revealed: false },
      { points: 800, question: "In WALL-E, the Axiom’s steering AI (named in all caps) refuses to let the captain return to Earth.", answer: "What is AUTO?", revealed: false },
    ],
  },
  {
    name: "History Buff",
    questions: [
      { points: 100, question: "Sealed in 1215, this charter forced an English king to accept limits on royal power.", answer: "What is the Magna Carta?", revealed: false },
      { points: 200, question: "After 27 years imprisoned, this anti-apartheid leader became South Africa’s president in 1994.", answer: "Who is Nelson Mandela?", revealed: false },
      { points: 300, question: "This concrete barrier split a major European city from 1961 until its 1989 fall.", answer: "What is the Berlin Wall?", revealed: false },
      { points: 400, question: "The last active pharaoh of Egypt formed political alliances with Julius Caesar and later Mark Antony.", answer: "Who is Cleopatra?", revealed: false },
      { points: 500, question: "A European “rebirth” of art and learning began in Italy during the 14th to 17th centuries.", answer: "What is the Renaissance?", revealed: false },
      { points: 600, question: "In 1620, the Pilgrims crossed the Atlantic on this ship to found Plymouth Colony.", answer: "What is the Mayflower?", revealed: false },
      { points: 700, question: "Thousands of life-size clay soldiers were buried near China’s first emperor to guard him in the afterlife.", answer: "What is the Terracotta Army?", revealed: false },
      { points: 800, question: "The 1919 agreement that imposed harsh terms on Germany after World War I was this treaty.", answer: "What is the Treaty of Versailles?", revealed: false },
    ],
  },
  {
    name: "Where's The Gym?",
    questions: [
      { points: 100, question: "A full-body move combining a squat, a plank, and a jump is this.", answer: "What is a burpee?", revealed: false },
      { points: 200, question: "A group of four shoulder-stabilizing muscles shares this collective name.", answer: "What is the rotator cuff?", revealed: false },
      { points: 300, question: "This lift starts with the bar on the floor and ends standing tall, engaging the posterior chain.", answer: "What is a deadlift?", revealed: false },
      { points: 400, question: "The muscle soreness that peaks 24–48 hours after a new workout is known by this acronym.", answer: "What is DOMS?", revealed: false },
      { points: 500, question: "This cast-iron weight looks like a cannonball with a handle.", answer: "What is a kettlebell?", revealed: false },
      { points: 600, question: "Gradually increasing training stress over time to keep making gains is called this.", answer: "What is progressive overload?", revealed: false },
      { points: 700, question: "Keeping a neutral spine while bending at the hips—common in swings and good mornings—is this pattern.", answer: "What is the hip hinge?", revealed: false },
      { points: 800, question: "A cardio fitness measure of maximum oxygen use during intense exercise is this metric.", answer: "What is VO2 max?", revealed: false },
    ],
  },
];
