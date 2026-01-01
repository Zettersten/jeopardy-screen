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
    name: "KIDS' CARTOONS (90S/00S)",
    questions: [
      {
        points: 100,
        question: "A cheerful fry cook lives in a pineapple under the sea in this Nickelodeon series that debuted in 1999.",
        answer: "What is SpongeBob SquarePants?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "Four pizza-loving brothers trained by a rat and named for Renaissance artists fight crime in a long-running franchise.",
        answer: "What are the Teenage Mutant Ninja Turtles?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "Nickelodeon followed a diapered trio—Tommy, Chuckie, and twins—with big imaginations in this animated series.",
        answer: "What is Rugrats?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "The Warner siblings (and their sister) wreak havoc after being discovered in a studio water tower on this series.",
        answer: "What is Animaniacs?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "A fourth-grader with a football-shaped head lives in a city boarding house with his grandparents in this Nickelodeon show.",
        answer: "What is Hey Arnold!?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This MTV cartoon features two dimwitted metalhead teens who frequently comment on music videos between misadventures.",
        answer: "What is Beavis and Butt-Head?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "A time-displaced warrior battles the shape-shifting villain Aku in this Cartoon Network action series.",
        answer: "What is Samurai Jack?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "A 1990s/00s phenomenon with gym badges and a handheld game craze, its mascot is an electric mouse.",
        answer: "What is Pokémon?",
        revealed: false,
      },
    ],
  },
  {
    name: "INTERNET BEFORE SOCIAL MEDIA",
    questions: [
      {
        points: 100,
        question:
          "This dial-up service popularized the phrase “You’ve got mail!” and flooded inboxes with trial CDs in the 1990s.",
        answer: "What is AOL?",
        revealed: false,
      },
      {
        points: 200,
        question: "A common chat abbreviation meaning you stepped away from the keyboard.",
        answer: "What is AFK?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This early 2000s peer-to-peer music downloader had a swirly logo and a name that’s also a citrus fruit.",
        answer: "What is LimeWire?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "In the 2000s, “friend lists” and “communities” were core features of this long-running journaling platform.",
        answer: "What is LiveJournal?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This three-letter web syndication format let you subscribe to site updates in a reader like Google Reader.",
        answer: "What is RSS?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Minimalist and mostly text-based, this classifieds site started in the mid-1990s as an email list for a U.S. city.",
        answer: "What is Craigslist?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This early social network was known for custom profile music and the drama of choosing a “Top 8.”",
        answer: "What is Myspace?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "Its name sounds like “I seek you,” and it was one of the first widely used instant-messaging services.",
        answer: "What is ICQ?",
        revealed: false,
      },
    ],
  },
  {
    name: "GADGETS & GAME CHANGERS",
    questions: [
      {
        points: 100,
        question:
          "Apple marketed this 2001 portable music player with the slogan “1,000 songs in your pocket.”",
        answer: "What is the iPod?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "Nintendo introduced this 2004 handheld with two screens and a stylus, making touch controls mainstream for portable gaming.",
        answer: "What is the Nintendo DS?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "Microsoft entered the console market in 2001 with this system whose name includes a single letter.",
        answer: "What is the Xbox?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "Sony’s CD-based console launched in the mid-1990s and became one of the best-selling game systems ever.",
        answer: "What is the PlayStation?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "Nintendo’s 2006 console pushed motion controls into living rooms and has a three-letter name.",
        answer: "What is the Wii?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Amazon’s 2007 e-reader helped popularize buying and carrying digital books on a dedicated device.",
        answer: "What is the Kindle?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "Google’s open-source mobile operating system, whose releases are famously named after desserts.",
        answer: "What is Android?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "Unveiled in 2007, Apple’s first multitouch smartphone launched without an App Store (which arrived the following year).",
        answer: "What is the iPhone?",
        revealed: false,
      },
    ],
  },
  {
    name: "BEST PICTURE (90S/00S)",
    questions: [
      {
        points: 100,
        question:
          "This 1997 epic romance set aboard a doomed ocean liner won 11 Oscars, including Best Picture.",
        answer: "What is Titanic?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "A 2000 swords-and-sandals epic about a Roman general turned enslaved fighter won Best Picture.",
        answer: "What is Gladiator?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This 2001 Best Picture winner is a biopic of mathematician John Nash and his struggles with mental illness.",
        answer: "What is A Beautiful Mind?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "Steven Spielberg directed this 1993 Holocaust drama shot largely in black-and-white, winner of Best Picture.",
        answer: "What is Schindler's List?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "The 2003 finale of a Middle-earth film trilogy swept 11 Oscars and won Best Picture.",
        answer: "What is The Lord of the Rings: The Return of the King?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "A 1999 Best Picture winner about suburban malaise features an iconic scene with a plastic bag floating in the wind.",
        answer: "What is American Beauty?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "A 2006 Best Picture winner about rival moles inside Boston’s police and organized crime was directed by Martin Scorsese.",
        answer: "What is The Departed?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "A 2008 Best Picture winner follows a teen from Mumbai whose life experiences help him on a TV quiz show.",
        answer: "What is Slumdog Millionaire?",
        revealed: false,
      },
    ],
  },
  {
    name: "SPORTS NOSTALGIA (90–09)",
    questions: [
      {
        points: 100,
        question:
          "In 1996, this NBA team posted a 72–10 regular-season record behind Michael Jordan and Scottie Pippen.",
        answer: "Who are the Chicago Bulls?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "In 2004, this MLB team came back from a 0–3 deficit to win the ALCS and went on to end an 86-year title drought.",
        answer: "Who are the Boston Red Sox?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "She won her first Grand Slam singles title at the 1999 U.S. Open, beginning an era-defining tennis career.",
        answer: "Who is Serena Williams?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "He completed the “Tiger Slam” around 2000 and won the 2000 U.S. Open by 15 strokes.",
        answer: "Who is Tiger Woods?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This South Florida MLB franchise won the 1997 World Series in just its fifth season of existence.",
        answer: "Who are the Florida Marlins?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This French football star scored twice in the 1998 World Cup final at Stade de France.",
        answer: "Who is Zinedine Zidane?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "At the 2008 Beijing Olympics, he won 8 gold medals in a single Games.",
        answer: "Who is Michael Phelps?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "He won the 2009 NBA Finals MVP after his team beat Orlando in five games.",
        answer: "Who is Kobe Bryant?",
        revealed: false,
      },
    ],
  },
  {
    name: "BOOKS YOU READ (THEN WATCHED)",
    questions: [
      {
        points: 100,
        question:
          "In a 1998 novel, Stanley Yelnats is sent to a mysterious desert camp where boys dig all day for “character building.”",
        answer: "What is Holes?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "A 2008 dystopian novel features a televised fight-to-the-death competition in a nation called Panem.",
        answer: "What is The Hunger Games?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "In this Meg Cabot series, a New York teen discovers she’s heir to a European principality and gets a makeover in the film adaptation.",
        answer: "What is The Princess Diaries?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "A 2003 thriller novel follows a Harvard symbologist unraveling a murder mystery tied to secret societies and religious history.",
        answer: "What is The Da Vinci Code?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "A 1996 novel features an unnamed narrator who starts an underground brawling club that spirals into chaos.",
        answer: "What is Fight Club?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This 1996 novel—later adapted into a 2001 film—follows a London singleton navigating career, friendship, and romance with diary entries.",
        answer: "What is Bridget Jones's Diary?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "A 1996 romance novel by Nicholas Sparks inspired a 2004 film starring Ryan Gosling and Rachel McAdams.",
        answer: "What is The Notebook?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "Cormac McCarthy wrote this 2005 novel later adapted into a 2007 film about a drug deal gone wrong and a relentless hitman.",
        answer: "What is No Country for Old Men?",
        revealed: false,
      },
    ],
  },
  {
    name: "2000s POP & HIP-HOP",
    questions: [
      {
        points: 100,
        question:
          "In 2004, he told you to “drop it like it’s hot” on a chart-topping single featuring Pharrell.",
        answer: "Who is Snoop Dogg?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "A 2002 hit with a famous piano riff begins with the words “making my way downtown.”",
        answer: "Who is Vanessa Carlton?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "Her 2008 single “Paper Planes” features a hook with cash-register sounds and gunshot effects.",
        answer: "Who is M.I.A.?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This Atlanta duo released the 2003 smash “Hey Ya!” and told you to “shake it like a Polaroid picture.”",
        answer: "Who are Outkast?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This British singer’s 2006 album Back to Black helped fuel a major soul-pop revival.",
        answer: "Who is Amy Winehouse?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "The boy band behind “Bye Bye Bye” topped charts in 2000 and featured members like Justin Timberlake and JC Chasez.",
        answer: "Who are *NSYNC?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "He released 808s & Heartbreak in 2008 and later interrupted an awards speech at the 2009 MTV VMAs.",
        answer: "Who is Kanye West?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This singer broke through in 2006 and sang “Love Story” on her 2008 album Fearless.",
        answer: "Who is Taylor Swift?",
        revealed: false,
      },
    ],
  },
];
