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
      { points: 100, question: "The external anatomy that many people incorrectly call ‘the vagina’ is actually this.", answer: "What is the vulva?", revealed: false },
      { points: 200, question: "This is the medical term for the body part commonly called the ‘ball sack.’", answer: "What is the scrotum?", revealed: false },
      { points: 300, question: "Typically, ovulation happens about this many days before a period starts (in an average cycle).", answer: "What is about 14 days?", revealed: false },
      { points: 400, question: "This is the gland (in people with testes) that produces most testosterone.", answer: "What are the testes?", revealed: false },
      { points: 500, question: "This is the name of the lower part of the uterus that dilates during labor—and gets checked at OB visits.", answer: "What is the cervix?", revealed: false },
      { points: 600, question: "In aroused bodies, this structure fills with blood and becomes erect in all sexes—not just the one people joke about.", answer: "What is erectile tissue (corpora cavernosa)?", revealed: false },
      { points: 700, question: "Name the four main phases of the menstrual cycle.", answer: "What are menstrual, follicular, ovulation, and luteal?", revealed: false },
      { points: 800, question: "In most cases, pee comes out of this opening—not the same one involved in menstruation.", answer: "What is the urethra?", revealed: false },
    ],
  },
  {
    name: "Jiz' The Season",
    questions: [
      { points: 100, question: "Santa's sleigh isn't the only thing that needs a 'landing strip'—this is the body part where sperm typically ends up in unprotected intercourse.", answer: "What is the vagina?", revealed: false },
      { points: 200, question: "This holiday 'wrapper' is also a real-world barrier method that helps prevent pregnancy and reduce STI risk.", answer: "What is a condom?", revealed: false },
      { points: 300, question: "After the 'North Pole visit,' sperm cells can sometimes survive inside the reproductive tract for up to about this many days.", answer: "What is about 5 days?", revealed: false },
      { points: 400, question: "In the song where you hear about chestnuts roasting and Jack Frost, name that Christmas classic.", answer: "What is 'The Christmas Song (Chestnuts Roasting on an Open Fire)'?", revealed: false },
      { points: 500, question: "This Christmas word also describes the body's slippery assist during arousal (not a mood—physics).", answer: "What is lubrication?", revealed: false },
      { points: 600, question: "This is the hormone that tends to spike after orgasm and cuddly bonding—your body's 'silent night' chemical.", answer: "What is oxytocin?", revealed: false },
      { points: 700, question: "In the song where the singer says they don't care about presents and only want one thing, name the song.", answer: "What is 'All I Want for Christmas Is You'?", revealed: false },
      { points: 800, question: "In the song where you're told to not let it snow but it does anyway, name that song.", answer: "What is 'Let It Snow! Let It Snow! Let It Snow!'?", revealed: false },
    ],
  },
  {
    name: "Pen Is Mightier",
    questions: [
      { points: 100, question: "This author wrote the Harry Potter series.", answer: "Who is J.K. Rowling?", revealed: false },
      { points: 200, question: "In The Lion, the Witch and the Wardrobe, this is the enchanted land the Pevensie children enter.", answer: "What is Narnia?", revealed: false },
      { points: 300, question: "In The Hunger Games, this is the name of the protagonist who volunteers as tribute for her sister.", answer: "Who is Katniss Everdeen?", revealed: false },
      { points: 400, question: "In Fifty Shades of Grey, this is the first name of Mr. Grey.", answer: "Who is Christian?", revealed: false },
      { points: 500, question: "This bestselling psychological thriller by Gillian Flynn centers on the disappearance of Amy Dunne.", answer: "What is Gone Girl?", revealed: false },
      { points: 600, question: "This novel by Dan Brown begins with a murder in the Louvre and features symbologist Robert Langdon.", answer: "What is The Da Vinci Code?", revealed: false },
      { points: 700, question: "This Jane Austen novel opens with the idea that a wealthy single man must be in want of a wife.", answer: "What is Pride and Prejudice?", revealed: false },
      { points: 800, question: "This Delia Owens bestseller follows Kya, known as the 'Marsh Girl,' in coastal North Carolina.", answer: "What is Where the Crawdads Sing?", revealed: false },
    ],
  },
  {
    name: "Music and Movies",
    questions: [
      { points: 100, question: "This 1990 holiday comedy traps burglars with booby traps after being left behind.", answer: "What is Home Alone?", revealed: false },
      { points: 200, question: "1993's dinosaur blockbuster set in a theme park with a very bad safety record.", answer: "What is Jurassic Park?", revealed: false },
      { points: 300, question: "This 1994 Tom Hanks film teaches us that life is like a box of chocolates.", answer: "What is Forrest Gump?", revealed: false },
      { points: 400, question: "This 1994 crime film features hitmen, a mysterious briefcase, and a dance contest.", answer: "What is Pulp Fiction?", revealed: false },
      { points: 500, question: "This 1995 Pixar film introduced Woody and Buzz Lightyear.", answer: "What is Toy Story?", revealed: false },
      { points: 600, question: "In this 1997 sci-fi comedy, agents protect Earth from aliens while wearing black suits.", answer: "What is Men in Black?", revealed: false },
      { points: 700, question: "This 1999 film asks you to choose between a red pill and a blue pill.", answer: "What is The Matrix?", revealed: false },
      { points: 800, question: "This 1991 thriller features Hannibal Lecter and the line about 'putting the lotion in the basket'.", answer: "What is The Silence of the Lambs?", revealed: false },
    ],
  },
  {
    name: "Artificial Intelligence",
    questions: [
      { points: 100, question: "This 1950s computer scientist proposed the 'imitation game,' now known as this test.", answer: "What is the Turing Test?", revealed: false },
      { points: 200, question: "This chatbot from OpenAI became a household name in the 2020s.", answer: "What is ChatGPT?", revealed: false },
      { points: 300, question: "This is the term for when an AI confidently makes up false details.", answer: "What is a hallucination?", revealed: false },
      { points: 400, question: "This is the name for AI that generates new text, images, or audio.", answer: "What is generative AI?", revealed: false },
      { points: 500, question: "In 2001: A Space Odyssey, this is the name of the ship's AI.", answer: "What is HAL 9000?", revealed: false },
      { points: 600, question: "This 2013 sci-fi film features an AI assistant named Samantha, voiced by Scarlett Johansson.", answer: "What is Her?", revealed: false },
      { points: 700, question: "This is the word for a fake video or audio clip made using AI to mimic someone.", answer: "What is a deepfake?", revealed: false },
      { points: 800, question: "In Blade Runner, the bioengineered humans hunted by Deckard are called this.", answer: "What are replicants?", revealed: false },
    ],
  },
  {
    name: "History Buff",
    questions: [
      { points: 100, question: "The year World War II ended.", answer: "What is 1945?", revealed: false },
      { points: 200, question: "This Cold War event in 1962 brought the U.S. and the USSR close to nuclear war.", answer: "What is the Cuban Missile Crisis?", revealed: false },
      { points: 300, question: "In 1969, this NASA mission first landed humans on the Moon.", answer: "What is Apollo 11?", revealed: false },
      { points: 400, question: "In 1989, this symbol of the Cold War came down, signaling major change in Europe.", answer: "What is the Berlin Wall?", revealed: false },
      { points: 500, question: "This event led to NATO invoking Article 5 for the first time in its history.", answer: "What are the September 11 attacks (9/11)?", revealed: false },
      { points: 600, question: "The September 2008 collapse of this investment bank is often treated as a flashpoint of the global financial crisis.", answer: "What is Lehman Brothers?", revealed: false },
      { points: 700, question: "This is the name of the virus (not the disease) responsible for the global pandemic that began in 2020.", answer: "What is SARS-CoV-2?", revealed: false },
      { points: 800, question: "In 2022, this country invaded Ukraine, escalating a major European war.", answer: "What is Russia?", revealed: false },
    ],
  },
  {
    name: "Where's The Gym?",
    questions: [
      { points: 100, question: "This machine with a moving belt is the go-to for indoor running and walking.", answer: "What is a treadmill?", revealed: false },
      { points: 200, question: "This shoulder muscle shares its name with a Greek letter.", answer: "What is the deltoid?", revealed: false },
      { points: 300, question: "This long thigh bone is the largest bone in the human body.", answer: "What is the femur?", revealed: false },
      { points: 400, question: "This muscle group on the front of your thigh is the prime mover in many leg extensions.", answer: "What are the quadriceps?", revealed: false },
      { points: 500, question: "This free-weight bar used for heavy compound lifts is typically 45 pounds in the U.S.", answer: "What is an Olympic barbell?", revealed: false },
      { points: 600, question: "Burn Boot Camp markets a joint-friendly, shock-absorbing training surface under this two-word name.", answer: "What is the floating floor?", revealed: false },
      { points: 700, question: "This powerhouse muscle is the primary mover in deadlifts and hip hinges.", answer: "What is the gluteus maximus?", revealed: false },
      { points: 800, question: "This machine targets the latissimus dorsi with a handle you pull down from overhead.", answer: "What is the lat pulldown machine?", revealed: false },
    ],
  },
];
