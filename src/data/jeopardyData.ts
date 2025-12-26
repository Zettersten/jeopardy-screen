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
      { points: 100, question: "This male reproductive organ produces testosterone and sperm.", answer: "What are the testes?", revealed: false },
      { points: 200, question: "Fertilization most commonly happens in this tube that connects the ovary to the uterus.", answer: "What is the fallopian tube?", revealed: false },
      { points: 300, question: "After ovulation, this hormone helps maintain the uterine lining.", answer: "What is progesterone?", revealed: false },
      { points: 400, question: "This lower, narrow part of the uterus opens into the vagina and dilates during labor.", answer: "What is the cervix?", revealed: false },
      { points: 500, question: "These glands produce milk to feed an infant after birth.", answer: "What are the mammary glands?", revealed: false },
      { points: 600, question: "This is the term for the release of an egg from an ovary.", answer: "What is ovulation?", revealed: false },
      { points: 700, question: "This gland contributes fluid to semen and surrounds the urethra below the bladder.", answer: "What is the prostate gland?", revealed: false },
      { points: 800, question: "This hormone is known for triggering uterine contractions and milk letdown.", answer: "What is oxytocin?", revealed: false },
    ],
  },
  {
    name: "Jiz' The Season",
    questions: [
      { points: 100, question: "This barrier method is commonly used to help prevent pregnancy and reduce STI transmission risk.", answer: "What is a condom?", revealed: false },
      { points: 200, question: "This method uses cycle tracking to estimate fertile days and plan or avoid unprotected sex.", answer: "What is fertility awareness (the rhythm method)?", revealed: false },
      { points: 300, question: "This bacterial STI is often treated with antibiotics and may have no symptoms at first.", answer: "What is chlamydia?", revealed: false },
      { points: 400, question: "“All I Want for Christmas Is You” became a yearly staple thanks to this singer.", answer: "Who is Mariah Carey?", revealed: false },
      { points: 500, question: "This long-acting contraceptive is placed in the uterus and can last for years.", answer: "What is an IUD?", revealed: false },
      { points: 600, question: "In the movie Elf, Buddy believes he was raised at the North Pole by these workers.", answer: "What are elves?", revealed: false },
      { points: 700, question: "This vaccine is commonly recommended to prevent infections from certain cancer-linked HPV types.", answer: "What is the HPV vaccine (Gardasil)?", revealed: false },
      { points: 800, question: "In A Christmas Story, Ralphie begs for this iconic present.", answer: "What is a Red Ryder BB gun?", revealed: false },
    ],
  },
  {
    name: "Pen Is Mightier",
    questions: [
      { points: 100, question: "This Jane Austen novel begins, “It is a truth universally acknowledged…”", answer: "What is Pride and Prejudice?", revealed: false },
      { points: 200, question: "Guy Montag is a “fireman” who burns books in this Ray Bradbury novel.", answer: "What is Fahrenheit 451?", revealed: false },
      { points: 300, question: "Victor Frankenstein creates a living creature in this classic by Mary Shelley.", answer: "What is Frankenstein?", revealed: false },
      { points: 400, question: "“Sing, goddess, the anger of Peleus’ son Achilles” opens this epic poem.", answer: "What is The Iliad?", revealed: false },
      { points: 500, question: "Nick Carraway narrates the rise and fall of Jay Gatsby in this novel.", answer: "What is The Great Gatsby?", revealed: false },
      { points: 600, question: "This Nobel Prize-winning author wrote Beloved.", answer: "Who is Toni Morrison?", revealed: false },
      { points: 700, question: "“To be, or not to be” comes from this Shakespeare play.", answer: "What is Hamlet?", revealed: false },
      { points: 800, question: "This Russian author wrote Crime and Punishment.", answer: "Who is Fyodor Dostoevsky?", revealed: false },
    ],
  },
  {
    name: "Music and Movies",
    questions: [
      { points: 100, question: "This Pixar film features a cooking rat named Remy in Paris.", answer: "What is Ratatouille?", revealed: false },
      { points: 200, question: "“Rolling in the Deep” was a massive hit for this British singer.", answer: "Who is Adele?", revealed: false },
      { points: 300, question: "This 1942 classic includes the line, “Here’s looking at you, kid.”", answer: "What is Casablanca?", revealed: false },
      { points: 400, question: "In the Marvel Cinematic Universe, this hero is known as the “God of Thunder.”", answer: "Who is Thor?", revealed: false },
      { points: 500, question: "This band recorded “Bohemian Rhapsody.”", answer: "Who is Queen?", revealed: false },
      { points: 600, question: "The song “Shallow” appears in this 2018 film starring Lady Gaga.", answer: "What is A Star Is Born?", revealed: false },
      { points: 700, question: "This show features Eleven, Hawkins, and the Upside Down.", answer: "What is Stranger Things?", revealed: false },
      { points: 800, question: "“Why so serious?” is a quote associated with this 2008 Batman film.", answer: "What is The Dark Knight?", revealed: false },
    ],
  },
  {
    name: "Artificial Intelligence",
    questions: [
      { points: 100, question: "In 2001: A Space Odyssey, this AI calmly tells Dave, “I’m sorry, Dave…”", answer: "What is HAL 9000?", revealed: false },
      { points: 200, question: "This Apple voice assistant can set timers, send texts, and answer questions.", answer: "What is Siri?", revealed: false },
      { points: 300, question: "In the Terminator franchise, this defense network AI becomes self-aware and triggers Judgment Day.", answer: "What is Skynet?", revealed: false },
      { points: 400, question: "Tony Stark’s AI assistant is commonly called by this name.", answer: "What is JARVIS?", revealed: false },
      { points: 500, question: "This 2013 Spike Jonze film centers on a man who falls for an AI operating system.", answer: "What is Her?", revealed: false },
      { points: 600, question: "In The Matrix, these AI machines hunt humans outside the simulation.", answer: "What are Sentinels?", revealed: false },
      { points: 700, question: "This widely used AI chatbot from OpenAI helped make “prompting” a mainstream term.", answer: "What is ChatGPT?", revealed: false },
      { points: 800, question: "In WALL-E, this ship’s autopilot AI keeps the Axiom on its long cruise.", answer: "What is AUTO?", revealed: false },
    ],
  },
  {
    name: "History Buff",
    questions: [
      { points: 100, question: "This ancient wonder was a monumental tomb built at Halicarnassus.", answer: "What is the Mausoleum at Halicarnassus?", revealed: false },
      { points: 200, question: "This barrier fell in 1989, symbolizing the end of Cold War division in Germany.", answer: "What is the Berlin Wall?", revealed: false },
      { points: 300, question: "This French leader was exiled to Elba before returning for the Hundred Days.", answer: "Who is Napoleon Bonaparte?", revealed: false },
      { points: 400, question: "The 1944 Allied invasion of Normandy is commonly known as this.", answer: "What is D-Day?", revealed: false },
      { points: 500, question: "This anti-apartheid leader became South Africa’s president in 1994 after 27 years in prison.", answer: "Who is Nelson Mandela?", revealed: false },
      { points: 600, question: "Montezuma II ruled this empire when the Spanish arrived in the early 1500s.", answer: "What is the Aztec Empire?", revealed: false },
      { points: 700, question: "Signed in 1215, this document limited the power of the English king.", answer: "What is the Magna Carta?", revealed: false },
      { points: 800, question: "China’s first emperor commissioned the Terracotta Army during this dynasty.", answer: "What is the Qin dynasty?", revealed: false },
    ],
  },
  {
    name: "Where's The Gym?",
    questions: [
      { points: 100, question: "This bodyweight move trains chest and triceps from a plank position.", answer: "What is a push-up?", revealed: false },
      { points: 200, question: "This type of muscle action happens when a muscle lengthens under tension.", answer: "What is an eccentric contraction?", revealed: false },
      { points: 300, question: "This long metal bar is used for lifts like squats, presses, and deadlifts.", answer: "What is a barbell?", revealed: false },
      { points: 400, question: "Workout intensity is often tracked by training in these percentage-of-max ranges.", answer: "What are heart rate zones?", revealed: false },
      { points: 500, question: "These muscles on the back of the thigh help bend the knee and extend the hip.", answer: "What are the hamstrings?", revealed: false },
      { points: 600, question: "This cylindrical tool is used for self-massage and mobility work after training.", answer: "What is a foam roller?", revealed: false },
      { points: 700, question: "This training style alternates short bursts of high effort with rest periods.", answer: "What is HIIT (high-intensity interval training)?", revealed: false },
      { points: 800, question: "Deadlifts and kettlebell swings rely on mastering this movement pattern.", answer: "What is the hip hinge?", revealed: false },
    ],
  },
];
