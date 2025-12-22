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
      { points: 100, question: "This author wrote 'Romeo and Juliet'.", answer: "Who is William Shakespeare?", revealed: false },
      { points: 200, question: "The first amendment protects this freedom.", answer: "What is freedom of speech/press?", revealed: false },
      { points: 300, question: "This document begins with 'We the People'.", answer: "What is the US Constitution?", revealed: false },
      { points: 400, question: "Martin Luther King Jr. wrote this letter from a Birmingham jail.", answer: "What is 'Letter from Birmingham Jail'?", revealed: false },
      { points: 500, question: "This ancient writing system used wedge-shaped marks.", answer: "What is cuneiform?", revealed: false },
      { points: 600, question: "Thomas Paine's pamphlet that inspired American independence.", answer: "What is 'Common Sense'?", revealed: false },
      { points: 700, question: "This Russian author wrote 'War and Peace'.", answer: "Who is Leo Tolstoy?", revealed: false },
      { points: 800, question: "The Rosetta Stone helped decode this ancient script.", answer: "What are Egyptian hieroglyphics?", revealed: false },
    ],
  },
  {
    name: "Music and Movies",
    questions: [
      { points: 100, question: "This 1997 film features the song 'My Heart Will Go On'.", answer: "What is Titanic?", revealed: false },
      { points: 200, question: "The King of Pop who moonwalked his way to fame.", answer: "Who is Michael Jackson?", revealed: false },
      { points: 300, question: "This film franchise features a wizard named Harry.", answer: "What is Harry Potter?", revealed: false },
      { points: 400, question: "Freddie Mercury was the lead singer of this rock band.", answer: "What is Queen?", revealed: false },
      { points: 500, question: "This 1994 film has Morgan Freeman and Tim Robbins in prison.", answer: "What is The Shawshank Redemption?", revealed: false },
      { points: 600, question: "This composer wrote the scores for Star Wars and Indiana Jones.", answer: "Who is John Williams?", revealed: false },
      { points: 700, question: "The first feature-length animated Disney film.", answer: "What is Snow White and the Seven Dwarfs?", revealed: false },
      { points: 800, question: "This Swedish group gave us 'Dancing Queen'.", answer: "Who is ABBA?", revealed: false },
    ],
  },
  {
    name: "Artificial Intelligence",
    questions: [
      { points: 100, question: "This test determines if a machine can exhibit intelligent behavior.", answer: "What is the Turing Test?", revealed: false },
      { points: 200, question: "GPT stands for this.", answer: "What is Generative Pre-trained Transformer?", revealed: false },
      { points: 300, question: "This company created ChatGPT.", answer: "What is OpenAI?", revealed: false },
      { points: 400, question: "The AI that defeated the world champion in Go.", answer: "What is AlphaGo?", revealed: false },
      { points: 500, question: "This branch of AI mimics the human brain's neural networks.", answer: "What is deep learning?", revealed: false },
      { points: 600, question: "HAL 9000 appeared in this Stanley Kubrick film.", answer: "What is 2001: A Space Odyssey?", revealed: false },
      { points: 700, question: "This scientist is known as the father of artificial intelligence.", answer: "Who is John McCarthy?", revealed: false },
      { points: 800, question: "LLM stands for this type of AI model.", answer: "What is Large Language Model?", revealed: false },
    ],
  },
  {
    name: "History Buff",
    questions: [
      { points: 100, question: "This wall divided East and West Berlin.", answer: "What is the Berlin Wall?", revealed: false },
      { points: 200, question: "The year World War II ended.", answer: "What is 1945?", revealed: false },
      { points: 300, question: "This ancient wonder was located in Egypt.", answer: "What is the Great Pyramid of Giza?", revealed: false },
      { points: 400, question: "Napoleon met his final defeat at this battle.", answer: "What is Waterloo?", revealed: false },
      { points: 500, question: "This empire was ruled by Genghis Khan.", answer: "What is the Mongol Empire?", revealed: false },
      { points: 600, question: "The assassination of Archduke Franz Ferdinand sparked this war.", answer: "What is World War I?", revealed: false },
      { points: 700, question: "This civilization built Machu Picchu.", answer: "What is the Inca civilization?", revealed: false },
      { points: 800, question: "The Treaty of Versailles ended this conflict.", answer: "What is World War I?", revealed: false },
    ],
  },
  {
    name: "Where's The Gym?",
    questions: [
      { points: 100, question: "This exercise targets the biceps using a barbell or dumbbells.", answer: "What is a curl?", revealed: false },
      { points: 200, question: "The recommended daily step count for health.", answer: "What is 10,000 steps?", revealed: false },
      { points: 300, question: "This muscle group is located on the back of the upper arm.", answer: "What are the triceps?", revealed: false },
      { points: 400, question: "HIIT stands for this type of training.", answer: "What is High-Intensity Interval Training?", revealed: false },
      { points: 500, question: "This compound lift is known as the 'King of Exercises'.", answer: "What is the squat?", revealed: false },
      { points: 600, question: "The largest muscle in the human body.", answer: "What is the gluteus maximus?", revealed: false },
      { points: 700, question: "This Greek physician is considered the father of medicine.", answer: "Who is Hippocrates?", revealed: false },
      { points: 800, question: "VO2 max measures this aspect of fitness.", answer: "What is cardiovascular endurance?", revealed: false },
    ],
  },
];
