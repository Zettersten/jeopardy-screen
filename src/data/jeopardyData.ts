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
    name: "INTERNET 1.0",
    questions: [
      {
        points: 100,
        question: "This greeting was heard every time you signed on to AOL.",
        answer: "What is \"You've Got Mail\"?",
        revealed: false,
      },
      {
        points: 200,
        question: "Before Google, you could ask this polite butler to search the web for you.",
        answer: "Who is Jeeves?",
        revealed: false,
      },
      {
        points: 300,
        question: "Shawn Fanning created this peer-to-peer file sharing service that Metallica famously sued.",
        answer: "What is Napster?",
        revealed: false,
      },
      {
        points: 400,
        question: "Before Facebook, this social network was king, and Tom was everyone's first friend.",
        answer: "What is MySpace?",
        revealed: false,
      },
      {
        points: 500,
        question: "This 3D rendered infant became an early viral sensation, grooving to 'Hooked on a Feeling'.",
        answer: "What is the Dancing Baby?",
        revealed: false,
      },
      {
        points: 600,
        question: "This screeching noise was the soundtrack to connecting to the internet via phone lines.",
        answer: "What is dial-up?",
        revealed: false,
      },
      {
        points: 700,
        question: "This website featured rows of animated rodents dancing to a sped-up country song.",
        answer: "What is the Hamster Dance?",
        revealed: false,
      },
      {
        points: 800,
        question: "A badly translated cutscene from the game Zero Wing gave us this catchphrase about bases.",
        answer: "What is \"All your base are belong to us\"?",
        revealed: false,
      },
    ],
  },
  {
    name: "CARTOON NETWORK CLASSICS",
    questions: [
      {
        points: 100,
        question: "This boy genius fights with his sister Dee Dee in his secret facility.",
        answer: "Who is Dexter?",
        revealed: false,
      },
      {
        points: 200,
        question: "Blossom, Bubbles, and Buttercup are known as this crime-fighting trio.",
        answer: "Who are The Powerpuff Girls?",
        revealed: false,
      },
      {
        points: 300,
        question: "This pink dog lives in the Middle of Nowhere with Muriel and Eustace.",
        answer: "Who is Courage the Cowardly Dog?",
        revealed: false,
      },
      {
        points: 400,
        question: "This pompadoured tough guy loves his mama but strikes out with every woman he meets.",
        answer: "Who is Johnny Bravo?",
        revealed: false,
      },
      {
        points: 500,
        question: "Ed, Edd, and Eddy constantly scam the neighborhood kids to buy these giant candies.",
        answer: "What are Jawbreakers?",
        revealed: false,
      },
      {
        points: 600,
        question: "A samurai warrior is flung into the future by the shape-shifting master of darkness, Aku.",
        answer: "Who is Samurai Jack?",
        revealed: false,
      },
      {
        points: 700,
        question: "After losing a limbo game, the Grim Reaper became best friends for life with these two kids.",
        answer: "Who are Billy and Mandy?",
        revealed: false,
      },
      {
        points: 800,
        question: "This is the only phrase Dexter can say in the episode 'The Big Cheese', which makes him wildly popular.",
        answer: "What is \"Omelette du fromage\"?",
        revealed: false,
      },
    ],
  },
  {
    name: "ONE-HIT WONDERS",
    questions: [
      {
        points: 100,
        question: "In 2000, the Baha Men released this barking anthem asking for the identity of the canine liberator.",
        answer: "What is \"Who Let The Dogs Out\"?",
        revealed: false,
      },
      {
        points: 200,
        question: "Chumbawamba sang about getting knocked down and getting up again in this boozy hit.",
        answer: "What is \"Tubthumping\"?",
        revealed: false,
      },
      {
        points: 300,
        question: "Lou Bega listed Monica, Erica, Rita, and Tina in this number-focused mambo track.",
        answer: "What is \"Mambo No. 5\"?",
        revealed: false,
      },
      {
        points: 400,
        question: "Three brothers with long hair sang this gibberish chorus in 1997.",
        answer: "What is \"MMMBop\"?",
        revealed: false,
      },
      {
        points: 500,
        question: "Deep Blue Something wrote this song about an Audrey Hepburn film.",
        answer: "What is \"Breakfast at Tiffany's\"?",
        revealed: false,
      },
      {
        points: 600,
        question: "The New Radicals declared 'You've got the music in you' in this 1998 song.",
        answer: "What is \"You Get What You Give\"?",
        revealed: false,
      },
      {
        points: 700,
        question: "The group Len featured a brother and sister duo in this sunny summertime hit.",
        answer: "What is \"Steal My Sunshine\"?",
        revealed: false,
      },
      {
        points: 800,
        question: "Eiffel 65 created a world where everything was this color, da ba dee da ba di.",
        answer: "What is Blue?",
        revealed: false,
      },
    ],
  },
  {
    name: "SNACK ATTACK",
    questions: [
      {
        points: 100,
        question: "These kangaroo-shaped cookies came with a small tub of frosting for dipping.",
        answer: "What are Dunkaroos?",
        revealed: false,
      },
      {
        points: 200,
        question: "Coca-Cola launched this citrus soda to compete with Mountain Dew, urging fans to 'Feed the Rush'.",
        answer: "What is Surge?",
        revealed: false,
      },
      {
        points: 300,
        question: "Pepsi released this transparent cola in the early 90s, set to the tune of Van Halen's 'Right Now'.",
        answer: "What is Crystal Pepsi?",
        revealed: false,
      },
      {
        points: 400,
        question: "Doritos launched a puffed, triangular version of their chips in the late 90s marketed as this dimension.",
        answer: "What is 3D?",
        revealed: false,
      },
      {
        points: 500,
        question: "Heinz released their EZ Squirt ketchup in unlikely colors like green and this royal hue.",
        answer: "What is purple?",
        revealed: false,
      },
      {
        points: 600,
        question: "General Mills made a cereal shaped like tiny slices of bread that tasted like this breakfast dish.",
        answer: "What is French Toast Crunch?",
        revealed: false,
      },
      {
        points: 700,
        question: "This rolled fruit snack from General Mills was feet long and featured a variety of flavors.",
        answer: "What is Fruit by the Foot?",
        revealed: false,
      },
      {
        points: 800,
        question: "This hollow chocolate sphere contained candy and stickers, but was once banned for being a choking hazard.",
        answer: "What is a Wonder Ball?",
        revealed: false,
      },
    ],
  },
  {
    name: "SCHOOL SUPPLIES",
    questions: [
      {
        points: 100,
        question: "This brand was famous for neon colors and psychedelic animal designs on folders and stickers.",
        answer: "Who is Lisa Frank?",
        revealed: false,
      },
      {
        points: 200,
        question: "Every cool kid had this brand of binder with a Velcro flap to keep papers secure.",
        answer: "What is a Trapper Keeper?",
        revealed: false,
      },
      {
        points: 300,
        question: "These gel pens by Sakura were especially coveted for their ability to write on black paper.",
        answer: "What are Milky Pens (or Gelly Rolls)?",
        revealed: false,
      },
      {
        points: 400,
        question: "These markers had scents like cherry, grape, and licorice, leading many kids to sniff them.",
        answer: "What are Mr. Sketch?",
        revealed: false,
      },
      {
        points: 500,
        question: "Paper Mate created this line of erasable ballpoint pens that often smeared or tore the paper.",
        answer: "What is Erasermate?",
        revealed: false,
      },
      {
        points: 600,
        question: "This Texas Instruments graphing calculator was a math class staple (and gaming device).",
        answer: "What is the TI-83?",
        revealed: false,
      },
      {
        points: 700,
        question: "These rubbery, spiky tubes were put on pencils to make writing 'more comfortable' (or just cooler).",
        answer: "What are pencil grips?",
        revealed: false,
      },
      {
        points: 800,
        question: "This plastic pencil box had a textured lid and bumps to stack them, often called 'Spacemaker'.",
        answer: "What is a Spacemaker box?",
        revealed: false,
      },
    ],
  },
  {
    name: "COMPUTER LAB",
    questions: [
      {
        points: 100,
        question: "In this game, your goal was to travel west without dying of dysentery.",
        answer: "What is The Oregon Trail?",
        revealed: false,
      },
      {
        points: 200,
        question: "This globe-trotting thief in a red trench coat taught geography to millions.",
        answer: "Who is Carmen Sandiego?",
        revealed: false,
      },
      {
        points: 300,
        question: "This art software let you stamp dynamite to blow up your drawing.",
        answer: "What is Kid Pix?",
        revealed: false,
      },
      {
        points: 400,
        question: "This fictional instructor taught touch-typing on a keyboard.",
        answer: "Who is Mavis Beacon?",
        revealed: false,
      },
      {
        points: 500,
        question: "In this MECC game, you moved a green creature around a grid to eat prime numbers.",
        answer: "What is Number Munchers?",
        revealed: false,
      },
      {
        points: 600,
        question: "This educational programming language featured a turtle that drew lines based on commands.",
        answer: "What is Logo?",
        revealed: false,
      },
      {
        points: 700,
        question: "Before Wikipedia, this Microsoft CD-ROM encyclopedia was the go-to for research.",
        answer: "What is Encarta?",
        revealed: false,
      },
      {
        points: 800,
        question: "This Apple software allowed users to create 'stacks' of interactive cards.",
        answer: "What is HyperCard?",
        revealed: false,
      },
    ],
  },
  {
    name: "Y2K FASHION",
    questions: [
      {
        points: 100,
        question: "Britney Spears popularized jeans with this waistline that sat dangerously close to the hips.",
        answer: "What are low-rise jeans?",
        revealed: false,
      },
      {
        points: 200,
        question: "Justin Timberlake and Mark McGrath rocked this hairstyle with bleached ends.",
        answer: "What are frosted tips?",
        revealed: false,
      },
      {
        points: 300,
        question: "Girls wore these insect-shaped clips in their hair, often with springs so the wings would move.",
        answer: "What are butterfly clips?",
        revealed: false,
      },
      {
        points: 400,
        question: "This stretchy plastic necklace looked like a black tattoo around the neck.",
        answer: "What is a tattoo choker?",
        revealed: false,
      },
      {
        points: 500,
        question: "These practical pants had zippers at the knee to convert them into shorts.",
        answer: "What are zip-off pants?",
        revealed: false,
      },
      {
        points: 600,
        question: "This footwear brand put wheels in the heels of sneakers, banned in many schools.",
        answer: "What are Heelys?",
        revealed: false,
      },
      {
        points: 700,
        question: "Paris Hilton made these matching velour sweat suits by Juicy Couture a fashion staple.",
        answer: "What are tracksuits?",
        revealed: false,
      },
      {
        points: 800,
        question: "These shirts looked tiny and crinkled like doll clothes but expanded to fit any size.",
        answer: "What are popcorn shirts?",
        revealed: false,
      },
    ],
  },
];
