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
      { points: 100, question: "This organ releases an egg during ovulation.", answer: "What is an ovary?", revealed: false },
      { points: 200, question: "This tube carries sperm from the epididymis toward the urethra.", answer: "What is the vas deferens?", revealed: false },
      { points: 300, question: "This pituitary hormone surges to trigger ovulation.", answer: "What is luteinizing hormone (LH)?", revealed: false },
      { points: 400, question: "This fold of tissue covers and protects the glans of the clitoris.", answer: "What is the clitoral hood?", revealed: false },
      { points: 500, question: "This fluid-filled sac surrounds a fetus during pregnancy.", answer: "What is the amniotic sac?", revealed: false },
      { points: 600, question: "This is the medical term for having a period.", answer: "What is menstruation?", revealed: false },
      { points: 700, question: "These coiled structures inside the testes are where sperm are produced.", answer: "What are the seminiferous tubules?", revealed: false },
      { points: 800, question: "This is the uterine lining where implantation typically occurs.", answer: "What is the endometrium?", revealed: false },
    ],
  },
  {
    name: "Jiz' The Season",
    questions: [
      { points: 100, question: "This over-the-counter option is commonly used as emergency contraception after unprotected sex.", answer: "What is Plan B (levonorgestrel)?", revealed: false },
      { points: 200, question: "This reusable barrier method sits over the cervix and is used with spermicide.", answer: "What is a diaphragm?", revealed: false },
      { points: 300, question: "This molecule signals blood vessels to relax during an erection.", answer: "What is nitric oxide?", revealed: false },
      { points: 400, question: "Name the Christmas song that begins, “It’s the most wonderful time of the year.”", answer: "What is 'It’s the Most Wonderful Time of the Year'?", revealed: false },
      { points: 500, question: "This is the term for the release of semen from the penis.", answer: "What is ejaculation?", revealed: false },
      { points: 600, question: "This virus is preventable with a vaccine and can cause several types of cancer.", answer: "What is HPV (human papillomavirus)?", revealed: false },
      { points: 700, question: "Name the Christmas song that includes the line “Rockin’ around the Christmas tree.”", answer: "What is 'Rockin’ Around the Christmas Tree'?", revealed: false },
      { points: 800, question: "Name the Christmas carol that starts, “On the first day of Christmas…”", answer: "What is 'The Twelve Days of Christmas'?", revealed: false },
    ],
  },
  {
    name: "Pen Is Mightier",
    questions: [
      { points: 100, question: "This author wrote The Hobbit and The Lord of the Rings.", answer: "Who is J.R.R. Tolkien?", revealed: false },
      { points: 200, question: "This George Orwell novel introduced the phrase “Big Brother is watching you.”", answer: "What is 1984?", revealed: false },
      { points: 300, question: "This author wrote To Kill a Mockingbird.", answer: "Who is Harper Lee?", revealed: false },
      { points: 400, question: "In Moby-Dick, this obsessed captain hunts the white whale.", answer: "Who is Captain Ahab?", revealed: false },
      { points: 500, question: "“Call me Ishmael” is the famous opening line of this novel.", answer: "What is Moby-Dick?", revealed: false },
      { points: 600, question: "This author created detective Sherlock Holmes.", answer: "Who is Arthur Conan Doyle?", revealed: false },
      { points: 700, question: "This Hemingway novella follows an aging fisherman battling a giant marlin.", answer: "What is The Old Man and the Sea?", revealed: false },
      { points: 800, question: "This novel by Gabriel García Márquez follows generations of the Buendía family.", answer: "What is One Hundred Years of Solitude?", revealed: false },
    ],
  },
  {
    name: "Music and Movies",
    questions: [
      { points: 100, question: "This Disney animated film features Simba, Mufasa, and Scar.", answer: "What is The Lion King?", revealed: false },
      { points: 200, question: "This 1997 blockbuster includes the line, “I’m the king of the world!”", answer: "What is Titanic?", revealed: false },
      { points: 300, question: "This 1999 teen comedy is based on Shakespeare’s The Taming of the Shrew.", answer: "What is 10 Things I Hate About You?", revealed: false },
      { points: 400, question: "This artist released the best-selling album Thriller.", answer: "Who is Michael Jackson?", revealed: false },
      { points: 500, question: "“Over the Rainbow” is sung by Dorothy in this classic film.", answer: "What is The Wizard of Oz?", revealed: false },
      { points: 600, question: "This 2010 film features dream-sharing and a spinning top.", answer: "What is Inception?", revealed: false },
      { points: 700, question: "“Do-Re-Mi” and “My Favorite Things” are songs from this musical.", answer: "What is The Sound of Music?", revealed: false },
      { points: 800, question: "“May the Force be with you” comes from this film franchise.", answer: "What is Star Wars?", revealed: false },
    ],
  },
  {
    name: "Artificial Intelligence",
    questions: [
      { points: 100, question: "This subfield of AI focuses on systems that learn patterns from data.", answer: "What is machine learning?", revealed: false },
      { points: 200, question: "This common acronym refers to a “Large Language Model.”", answer: "What is an LLM?", revealed: false },
      { points: 300, question: "This training approach uses human feedback to reward preferred model outputs.", answer: "What is RLHF (reinforcement learning from human feedback)?", revealed: false },
      { points: 400, question: "In neural networks, these learned numeric values are adjusted during training.", answer: "What are weights?", revealed: false },
      { points: 500, question: "This research company built AlphaGo, the program that defeated a Go world champion.", answer: "What is DeepMind?", revealed: false },
      { points: 600, question: "This neural network architecture was popularized by the 2017 paper “Attention Is All You Need.”", answer: "What is the Transformer?", revealed: false },
      { points: 700, question: "This dataset split is commonly used to tune hyperparameters during development.", answer: "What is the validation set?", revealed: false },
      { points: 800, question: "This metric summarizes a classifier’s performance across thresholds by plotting true positive rate vs. false positive rate.", answer: "What is the ROC curve?", revealed: false },
    ],
  },
  {
    name: "History Buff",
    questions: [
      { points: 100, question: "The year the United States declared independence.", answer: "What is 1776?", revealed: false },
      { points: 200, question: "This 1914 assassination helped spark World War I.", answer: "What is the assassination of Archduke Franz Ferdinand?", revealed: false },
      { points: 300, question: "This aviator was the first woman to fly solo across the Atlantic Ocean.", answer: "Who is Amelia Earhart?", revealed: false },
      { points: 400, question: "This treaty, signed in 1919, formally ended World War I.", answer: "What is the Treaty of Versailles?", revealed: false },
      { points: 500, question: "This leader is closely associated with India’s independence movement and nonviolent resistance.", answer: "Who is Mahatma Gandhi?", revealed: false },
      { points: 600, question: "The Pilgrims traveled to North America in 1620 on this ship.", answer: "What is the Mayflower?", revealed: false },
      { points: 700, question: "The famous lighthouse of ancient Alexandria was known by this name.", answer: "What is the Pharos?", revealed: false },
      { points: 800, question: "This 1789 upheaval in France is often cited as a turning point in modern political history.", answer: "What is the French Revolution?", revealed: false },
    ],
  },
  {
    name: "Where's The Gym?",
    questions: [
      { points: 100, question: "This full-body move typically includes a squat, a plank, and a jump.", answer: "What is a burpee?", revealed: false },
      { points: 200, question: "This muscle is the primary target of a standard biceps curl.", answer: "What is the biceps brachii?", revealed: false },
      { points: 300, question: "This ball-and-socket joint connects the femur to the pelvis.", answer: "What is the hip joint?", revealed: false },
      { points: 400, question: "This fitness acronym stands for the soreness that often peaks a day or two after training.", answer: "What is DOMS (delayed onset muscle soreness)?", revealed: false },
      { points: 500, question: "This device is commonly worn on the wrist or chest to track beats per minute during exercise.", answer: "What is a heart rate monitor?", revealed: false },
      { points: 600, question: "This strength sport centers on three competition lifts: squat, bench press, and deadlift.", answer: "What is powerlifting?", revealed: false },
      { points: 700, question: "This term refers to the heaviest weight you can lift for a single repetition.", answer: "What is a one-rep max (1RM)?", revealed: false },
      { points: 800, question: "This prominent calf muscle forms the bulge on the back of the lower leg.", answer: "What is the gastrocnemius?", revealed: false },
    ],
  },
];
