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
    name: "MODERN CINEMA",
    questions: [
      {
        points: 100,
        question:
          "This 2024 sequel to a Pixar classic introduces new emotions like Anxiety and Ennui.",
        answer: "What is Inside Out 2?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "He played the titular chocolatier in the 2023 musical film “Wonka”.",
        answer: "Who is Timothée Chalamet?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "Emma Stone won Best Actress for her role as Bella Baxter in this 2023 surrealist fantasy.",
        answer: "What is Poor Things?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This 2023 romantic comedy revived the genre, starring Sydney Sweeney and Glen Powell.",
        answer: "What is Anyone But You?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This Japanese monster movie won the Oscar for Best Visual Effects in 2024.",
        answer: "What is Godzilla Minus One?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Zendaya stars as a tennis prodigy turned coach in this 2024 sports drama by Luca Guadagnino.",
        answer: "What is Challengers?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This 2024 biopic stars Marisa Abela as the late singer Amy Winehouse.",
        answer: "What is Back to Black?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This 2024 disaster film is a standalone sequel to a 1996 hit about storm chasers.",
        answer: "What is Twisters?",
        revealed: false,
      },
    ],
  },
  {
    name: "POP CULTURE ICONS",
    questions: [
      {
        points: 100,
        question:
          "This NFL tight end hosted “Saturday Night Live” and started a high-profile romance with Taylor Swift.",
        answer: "Who is Travis Kelce?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This singer of “Espresso” and “Please Please Please” became a breakout pop star in 2024.",
        answer: "Who is Sabrina Carpenter?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This actor became “The Internet's Daddy” thanks to roles in “The Mandalorian” and “The Last of Us”.",
        answer: "Who is Pedro Pascal?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "She produced and starred as the titular doll in the 2023 blockbuster “Barbie”.",
        answer: "Who is Margot Robbie?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This “The Bear” actor stripped down for a viral Calvin Klein underwear campaign in 2024.",
        answer: "Who is Jeremy Allen White?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This singer performed the Super Bowl LVII Halftime Show while pregnant with her second child.",
        answer: "Who is Rihanna?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This “Euphoria” star faced backlash but found box office success with “Anyone But You” and “Immaculate”.",
        answer: "Who is Sydney Sweeney?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This Irish actor played a deceptive student in “Saltburn” and the villain in “Gladiator II”.",
        answer: "Who is Barry Keoghan?",
        revealed: false,
      },
    ],
  },
  {
    name: "DARK MYSTERIES",
    questions: [
      {
        points: 100,
        question:
          "This 2024 Netflix hit follows a comedian stalked by a woman who calls him by the show's title animal name.",
        answer: "What is Baby Reindeer?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "In this 2023 film, a family's vacation is interrupted by an apocalyptic cyberattack; produced by the Obamas.",
        answer: "What is Leave the World Behind?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This hit Hulu series features a trio of podcasters solving murders in their New York apartment building.",
        answer: "What is Only Murders in the Building?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "Jodie Foster investigates scientists vanishing from an Alaskan research station in this “True Detective” season.",
        answer: "What is Night Country (or Season 4)?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "Nicolas Cage plays a satanic serial killer pursued by the FBI in this 2024 horror film with a leggy title.",
        answer: "What is Longlegs?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Andrew Scott plays a grifting con artist in Italy in this black-and-white Netflix adaptation of a Patricia Highsmith novel.",
        answer: "What is Ripley?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "In this Apple TV+ thriller, employees undergo a procedure to surgically divide their work memories from personal ones.",
        answer: "What is Severance?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This 2024 M. Night Shyamalan thriller is set at a pop concert where a father is hiding a dark secret.",
        answer: "What is Trap?",
        revealed: false,
      },
    ],
  },
  {
    name: "SPORTS ARENA",
    questions: [
      {
        points: 100,
        question:
          "This NFL team won back-to-back Super Bowls in 2023 and 2024, led by Patrick Mahomes.",
        answer: "Who are the Kansas City Chiefs?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This WNBA rookie for the Indiana Fever broke attendance and viewership records in 2024.",
        answer: "Who is Caitlin Clark?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This Spanish tennis prodigy won Wimbledon 2023 and the French Open 2024, seen as Nadal's successor.",
        answer: "Who is Carlos Alcaraz?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This MLB superstar signed a $700 million contract with the LA Dodgers in late 2023.",
        answer: "Who is Shohei Ohtani?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This NBA team won the 2024 Championship, powered by Jayson Tatum and Jaylen Brown.",
        answer: "Who are the Boston Celtics?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This F1 driver made headlines by announcing a move from Mercedes to Ferrari starting in 2025.",
        answer: "Who is Lewis Hamilton?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This American gymnast returned to the Olympics in Paris 2024, cementing her GOAT status.",
        answer: "Who is Simone Biles?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This college football team won the National Championship in 2024, defeating Washington.",
        answer: "Who are the Michigan Wolverines?",
        revealed: false,
      },
    ],
  },
  {
    name: "FUTURE TECH",
    questions: [
      {
        points: 100,
        question:
          "Apple released this “spatial computing” headset in early 2024, priced at $3,499.",
        answer: "What is the Apple Vision Pro?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This text-based social app from Meta launched in 2023 as a direct competitor to X (Twitter).",
        answer: "What is Threads?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "The iPhone 15 finally adopted this universal charging port standard, replacing Lightning.",
        answer: "What is USB-C?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This cybersecurity firm caused a massive global IT outage in July 2024 with a faulty update.",
        answer: "What is CrowdStrike?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This Google AI model was rebranded from “Bard” to match its underlying technology in 2024.",
        answer: "What is Gemini?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Sam Altman was briefly fired and then reinstated as CEO of this AI giant in November 2023.",
        answer: "What is OpenAI?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This brain-computer interface company by Elon Musk performed its first human implant in 2024.",
        answer: "What is Neuralink?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This orange, handheld AI device launched in 2024 was widely panned for failing to live up to the hype.",
        answer: "What is the Rabbit R1?",
        revealed: false,
      },
    ],
  },
  {
    name: "WORLD NEWS",
    questions: [
      {
        points: 100,
        question:
          "The 2024 Summer Olympics were hosted by this European capital city.",
        answer: "What is Paris?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "In 2023, this OceanGate submersible imploded while attempting to visit the most famous shipwreck in the Atlantic.",
        answer: "What is the Titan?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This monarch revealed a cancer diagnosis in early 2024, stepping back from some public duties.",
        answer: "Who is King Charles III?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This Nordic country officially joined NATO in 2024, following Finland's accession.",
        answer: "What is Sweden?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "A massive container ship collided with and collapsed the Francis Scott Key Bridge in this US city.",
        answer: "What is Baltimore?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This WikiLeaks founder reached a plea deal with the US and returned to Australia in 2024.",
        answer: "Who is Julian Assange?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This weight-loss drug became a cultural phenomenon and economic driver for Denmark's Novo Nordisk.",
        answer: "What is Ozempic (or Wegovy)?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "In 2023, this country became the fourth nation to successfully land a spacecraft on the Moon.",
        answer: "What is India?",
        revealed: false,
      },
    ],
  },
  {
    name: "STREAMING NOW",
    questions: [
      {
        points: 100,
        question:
          "This Amazon Prime series based on a video game franchise features a Vault Dweller venturing into the wasteland.",
        answer: "What is Fallout?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This FX/Hulu series set in feudal Japan won critical acclaim for its authenticity and scope in 2024.",
        answer: "What is Shōgun?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "The final season of this royal drama covered the death of Princess Diana and the early romance of William and Kate.",
        answer: "What is The Crown?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This Disney+ animated series revived a beloved 90s superhero cartoon in 2024.",
        answer: "What is X-Men '97?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This Netflix adaptation of a Chinese sci-fi novel involves a VR game and an alien invasion threat.",
        answer: "What is 3 Body Problem?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Rosario Dawson stars as a dual-wielding Jedi seeking Grand Admiral Thrawn in this 2023 “Star Wars” series.",
        answer: "What is Ahsoka?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "Based on a novel, this Netflix series tells the decades-spanning love story of Dex and Em on the same date each year.",
        answer: "What is One Day?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This Apple TV+ war drama, produced by Hanks and Spielberg, follows the 100th Bomb Group in WWII.",
        answer: "What is Masters of the Air?",
        revealed: false,
      },
    ],
  },
];
