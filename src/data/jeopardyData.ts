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
    name: "MODERN MOVIES",
    questions: [
      {
        points: 100,
        question:
          "This 2023 film about a doll living in a perfect world became the highest-grossing film of the year.",
        answer: "What is Barbie?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "He played the father of the atomic bomb in Christopher Nolan's 2023 biopic.",
        answer: "Who is Cillian Murphy?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This multiverse-hopping A24 film swept the Oscars in 2023, winning Best Picture.",
        answer: "What is Everything Everywhere All At Once?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "Timothée Chalamet plays the lead in this sci-fi epic set on the desert planet Arrakis.",
        answer: "What is Dune?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This 2022 sequel saw Tom Cruise return to the cockpit after more than 30 years.",
        answer: "What is Top Gun: Maverick?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "In 2019, this South Korean thriller became the first non-English language film to win Best Picture.",
        answer: "What is Parasite?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "Joaquin Phoenix won an Oscar for his portrayal of this Batman villain in a 2019 standalone film.",
        answer: "Who is the Joker?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This director known for “Get Out” released the UFO horror film “Nope” in 2022.",
        answer: "Who is Jordan Peele?",
        revealed: false,
      },
    ],
  },
  {
    name: "CELEBRITY BUZZ",
    questions: [
      {
        points: 100,
        question:
          "This pop star's “Eras Tour” became the highest-grossing concert tour of all time.",
        answer: "Who is Taylor Swift?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "She released the album “Cowboy Carter” in 2024, exploring country roots.",
        answer: "Who is Beyoncé?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This actor and former wrestler is known globally as “The Rock.”",
        answer: "Who is Dwayne Johnson?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "He famously slapped Chris Rock on stage at the 2022 Oscars ceremony.",
        answer: "Who is Will Smith?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This reality star and business mogul founded the shapewear brand SKIMS.",
        answer: "Who is Kim Kardashian?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This former One Direction member won a Grammy for “Watermelon Sugar.”",
        answer: "Who is Harry Styles?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "She played Wednesday Addams in the hit Netflix series and starred in “Beetlejuice Beetlejuice.”",
        answer: "Who is Jenna Ortega?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This British actor plays Spider-Man in the MCU and is dating Zendaya.",
        answer: "Who is Tom Holland?",
        revealed: false,
      },
    ],
  },
  {
    name: "THRILLERS & MYSTERIES",
    questions: [
      {
        points: 100,
        question:
          "Daniel Craig plays detective Benoit Blanc in this “Knives Out” mystery series.",
        answer: "What is Knives Out (or Glass Onion)?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This author wrote “Gone Girl” and “Sharp Objects,” both adapted for the screen.",
        answer: "Who is Gillian Flynn?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "In this 2014 film, Rosamund Pike frames her husband, played by Ben Affleck, for her murder.",
        answer: "What is Gone Girl?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This Netflix series follows a charming book lover named Joe Goldberg who obsesses over women.",
        answer: "What is You?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This HBO series features a luxury resort where a murder mystery unfolds each season.",
        answer: "What is The White Lotus?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This 2022 film features a remote island restaurant where the chef prepares a sinister menu.",
        answer: "What is The Menu?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This 2017 Jordan Peele film sees a photographer visiting his girlfriend's family estate with horrifying results.",
        answer: "What is Get Out?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "“The Girl on the Train” by this author features an alcoholic protagonist who witnesses something strange.",
        answer: "Who is Paula Hawkins?",
        revealed: false,
      },
    ],
  },
  {
    name: "CURRENT SPORTS",
    questions: [
      {
        points: 100,
        question:
          "This Argentine soccer superstar won the World Cup in 2022 and later joined Inter Miami.",
        answer: "Who is Lionel Messi?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This NFL quarterback has won multiple Super Bowls with the Kansas City Chiefs in the 2020s.",
        answer: "Who is Patrick Mahomes?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "She is the most decorated gymnast in history and returned to the Olympics in 2024.",
        answer: "Who is Simone Biles?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This NBA player became the league's all-time leading scorer in 2023, passing Kareem Abdul-Jabbar.",
        answer: "Who is LeBron James?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This Dutch Formula 1 driver has dominated the grid with Red Bull Racing in recent years.",
        answer: "Who is Max Verstappen?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Caitlin Clark became a household name and the all-time leading scorer in NCAA history in this sport.",
        answer: "What is Basketball?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "Shohei Ohtani, a two-way superstar, signed a record-breaking contract with this MLB team in 2023.",
        answer: "Who are the Los Angeles Dodgers?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This Swiss tennis legend retired in 2022 after playing his final match alongside rival Rafael Nadal.",
        answer: "Who is Roger Federer?",
        revealed: false,
      },
    ],
  },
  {
    name: "TECH TRENDS",
    questions: [
      {
        points: 100,
        question:
          "This AI research organization, led by Sam Altman, released ChatGPT in late 2022.",
        answer: "What is OpenAI?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "Formerly known as Twitter, this social media platform was rebranded to this single letter by Elon Musk.",
        answer: "What is X?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This short-form video app owned by ByteDance faces scrutiny over its Chinese ownership.",
        answer: "What is TikTok?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "Apple entered the “spatial computing” market with this headset released in 2024.",
        answer: "What is the Apple Vision Pro?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This cryptocurrency exchange collapsed in 2022, leading to the conviction of Sam Bankman-Fried.",
        answer: "What is FTX?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "“Threads” was launched by this parent company of Facebook and Instagram as a text-based app.",
        answer: "What is Meta?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This term refers to a persistent, online, 3D universe that combines multiple virtual spaces.",
        answer: "What is the Metaverse?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "NVIDIA became a multi-trillion dollar company largely due to the demand for chips powering this technology.",
        answer: "What is Artificial Intelligence (AI)?",
        revealed: false,
      },
    ],
  },
  {
    name: "WORLD EVENTS",
    questions: [
      {
        points: 100,
        question:
          "This European country was invaded by Russia in February 2022, sparking a major ongoing conflict.",
        answer: "What is Ukraine?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "Charles III was officially crowned King of this country in May 2023.",
        answer: "What is the United Kingdom?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This virus caused a global pandemic that was officially declared over by the WHO in 2023.",
        answer: "What is COVID-19?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "In 2021, she became the first female Vice President of the United States.",
        answer: "Who is Kamala Harris?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This country officially left the European Union in 2020, a process known as “Brexit.”",
        answer: "What is the United Kingdom (or Britain)?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Massive wildfires in 2023 turned the sky orange in New York, with smoke drifting from this northern neighbor.",
        answer: "What is Canada?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "Following a general election in July 2024, he became the Prime Minister of the United Kingdom.",
        answer: "Who is Keir Starmer?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This annual global climate summit hosted by the UN is known by this three-letter acronym.",
        answer: "What is COP?",
        revealed: false,
      },
    ],
  },
  {
    name: "STREAMING HITS",
    questions: [
      {
        points: 100,
        question:
          "“Stranger Things,” a sci-fi horror series set in the 80s, is a flagship show for this service.",
        answer: "What is Netflix?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This “Star Wars” series features a helmeted bounty hunter and his charge, Grogu.",
        answer: "What is The Mandalorian?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "“The Bear,” a frantic drama set in a Chicago sandwich shop, streams on this platform in the US.",
        answer: "What is Hulu?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "Jason Sudeikis plays an optimistic American football coach managing a British soccer team in this hit.",
        answer: "What is Ted Lasso?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This period drama produced by Shonda Rhimes follows the romantic lives of eight wealthy siblings in Regency-era London.",
        answer: "What is Bridgerton?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This prequel series returned viewers to Westeros to witness the dance of dragons within House Targaryen.",
        answer: "What is House of the Dragon?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This South Korean survival drama became Netflix's most-watched series of all time.",
        answer: "What is Squid Game?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This dystopian series, based on a novel by Margaret Atwood, depicts a totalitarian society called Gilead.",
        answer: "What is The Handmaid's Tale?",
        revealed: false,
      },
    ],
  },
];
