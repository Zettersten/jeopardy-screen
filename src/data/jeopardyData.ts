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
      { points: 100, question: "This hormone is primarily responsible for male characteristics.", answer: "What is testosterone?", revealed: false },
      { points: 200, question: "The average human has 206 of these, regardless of gender.", answer: "What are bones?", revealed: false },
      { points: 300, question: "This French philosopher said 'One is not born, but rather becomes, a woman.'", answer: "Who is Simone de Beauvoir?", revealed: false },
      { points: 400, question: "In 1920, this amendment gave women the right to vote in the US.", answer: "What is the 19th Amendment?", revealed: false },
      { points: 500, question: "This term describes the statistical pay difference between men and women.", answer: "What is the gender pay gap?", revealed: false },
      { points: 600, question: "Marie Curie was the first woman to win this prestigious award, twice.", answer: "What is the Nobel Prize?", revealed: false },
      { points: 700, question: "This ancient Greek goddess represented wisdom and warfare.", answer: "Who is Athena?", revealed: false },
      { points: 800, question: "This percentage of Fortune 500 CEOs were women in 2023.", answer: "What is approximately 10%?", revealed: false },
    ],
  },
  {
    name: "Jiz' The Season",
    questions: [
      { points: 100, question: "This holiday falls on December 25th.", answer: "What is Christmas?", revealed: false },
      { points: 200, question: "The Jewish Festival of Lights lasting 8 days.", answer: "What is Hanukkah?", revealed: false },
      { points: 300, question: "This beverage is traditionally made with eggs, cream, and nutmeg.", answer: "What is eggnog?", revealed: false },
      { points: 400, question: "Kwanzaa celebrates this many principles.", answer: "What is seven?", revealed: false },
      { points: 500, question: "This reindeer has a very shiny nose.", answer: "Who is Rudolph?", revealed: false },
      { points: 600, question: "The Nutcracker was composed by this Russian composer.", answer: "Who is Tchaikovsky?", revealed: false },
      { points: 700, question: "This plant is known for its white berries and holiday kisses.", answer: "What is mistletoe?", revealed: false },
      { points: 800, question: "Boxing Day is celebrated on this date.", answer: "What is December 26th?", revealed: false },
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
