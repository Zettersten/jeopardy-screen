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
    name: "90S TV TIME",
    questions: [
      {
        points: 100,
        question: "Central Perk is the coffee-shop hangout on this NBC sitcom that debuted in 1994.",
        answer: "What is Friends?",
        revealed: false,
      },
      {
        points: 200,
        question: "FBI agents Mulder and Scully investigate the paranormal on this series that premiered in 1993.",
        answer: "What is The X-Files?",
        revealed: false,
      },
      {
        points: 300,
        question: "This Nickelodeon adventure game show filmed at Universal Studios Florida featured a talking head named Olmec.",
        answer: "What is Legends of the Hidden Temple?",
        revealed: false,
      },
      {
        points: 400,
        question: "On Family Matters, this bespectacled neighbor often asked, “Did I do that?”",
        answer: "Who is Steve Urkel?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "Keenen Ivory Wayans created this 1990–1994 sketch comedy series that helped launch Jim Carrey and Jamie Foxx.",
        answer: "What is In Living Color?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This HBO drama debuted in 1999, following a New Jersey mob boss in therapy; its title is plural.",
        answer: "What is The Sopranos?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This 1993–2004 NBC sitcom set in Seattle stars a radio psychiatrist and is a spinoff of Cheers.",
        answer: "What is Frasier?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "“Not that there’s anything wrong with that” is repeated in the episode “The Outing” of this NBC sitcom.",
        answer: "What is Seinfeld?",
        revealed: false,
      },
    ],
  },
  {
    name: "Y2K TECH & THE WEB",
    questions: [
      {
        points: 100,
        question:
          "Founded in 1998 by two Stanford PhD students, this search engine’s name riffs on 10^100.",
        answer: "What is Google?",
        revealed: false,
      },
      {
        points: 200,
        question: "This peer-to-peer music sharing service launched in 1999 and was associated with Shawn Fanning.",
        answer: "What is Napster?",
        revealed: false,
      },
      {
        points: 300,
        question: "Microsoft released this operating system in 2001; its default wallpaper is often called “Bliss.”",
        answer: "What is Windows XP?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This collaboratively edited online encyclopedia launched in 2001 and was co-founded by Jimmy Wales.",
        answer: "What is Wikipedia?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "Google launched this email service on April 1, 2004, famously advertising 1 GB of storage at launch.",
        answer: "What is Gmail?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Apple introduced this portable music player in 2001 with the slogan “1,000 songs in your pocket.”",
        answer: "What is the iPod?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "Founded in 2005, this video-sharing site was acquired by Google the following year.",
        answer: "What is YouTube?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "When Apple unveiled the first iPhone in 2007, it ran this operating system name before it was later renamed for the whole device line.",
        answer: "What is iPhone OS?",
        revealed: false,
      },
    ],
  },
  {
    name: "BLOCKBUSTERS (90S/00S)",
    questions: [
      {
        points: 100,
        question: "In this 1999 sci-fi film, Morpheus offers a red pill and a blue pill.",
        answer: "What is The Matrix?",
        revealed: false,
      },
      {
        points: 200,
        question: "Released in 1995, this Pixar film was the first feature-length movie made entirely with CGI.",
        answer: "What is Toy Story?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This 2001 fantasy film opens with a prologue about the forging of rings and the fate of one in particular.",
        answer: "What is The Lord of the Rings: The Fellowship of the Ring?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "A meteor threatens Earth in this 1998 blockbuster whose soundtrack includes Aerosmith’s “I Don’t Want to Miss a Thing.”",
        answer: "What is Armageddon?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This 2001 animated film won the first Academy Award for Best Animated Feature and stars an ogre and a donkey.",
        answer: "What is Shrek?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This 2000 thriller tells its story out of order as a man with anterograde amnesia hunts for a killer.",
        answer: "What is Memento?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This 2006 crime drama set in Boston won Best Picture and features rival moles in the police and the mob.",
        answer: "What is The Departed?",
        revealed: false,
      },
      {
        points: 800,
        question: "The 1999 film adaptation of Fight Club was based on a novel by this author.",
        answer: "Who is Chuck Palahniuk?",
        revealed: false,
      },
    ],
  },
  {
    name: "90S/00S MUSIC DEEP CUTS",
    questions: [
      {
        points: 100,
        question: "This Seattle band’s 1991 album Nevermind includes “Smells Like Teen Spirit.”",
        answer: "Who is Nirvana?",
        revealed: false,
      },
      {
        points: 200,
        question: "The 1998 album The Miseducation of Lauryn Hill is credited to this artist.",
        answer: "Who is Lauryn Hill?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This French duo released the 2001 album Discovery, which includes “Harder, Better, Faster, Stronger.”",
        answer: "Who is Daft Punk?",
        revealed: false,
      },
      {
        points: 400,
        question: "The 1997 hit “Tubthumping” (“I get knocked down…”) was by this UK band.",
        answer: "Who is Chumbawamba?",
        revealed: false,
      },
      {
        points: 500,
        question: "“Hey Ya!” (2003) was released by this duo from Atlanta.",
        answer: "Who is Outkast?",
        revealed: false,
      },
      {
        points: 600,
        question: "“Stan” (2000), featuring Dido, appears on this Eminem album.",
        answer: "What is The Marshall Mathers LP?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "The hook of “Crazy in Love” (2003) samples “Are You My Woman? (Tell Me So)” by this Chicago soul group.",
        answer: "Who are The Chi-Lites?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "Pearl Jam’s 1991 album Ten takes its name from the jersey number worn by this NBA player.",
        answer: "Who is Mookie Blaylock?",
        revealed: false,
      },
    ],
  },
  {
    name: "GAMES & CONSOLES",
    questions: [
      {
        points: 100,
        question: "Nintendo’s 1996 home console was named for its 64-bit architecture.",
        answer: "What is the Nintendo 64?",
        revealed: false,
      },
      {
        points: 200,
        question: "This Sega console, launched in North America in 1999, was Sega’s final home console.",
        answer: "What is the Dreamcast?",
        revealed: false,
      },
      {
        points: 300,
        question: "This Blizzard MMORPG launched in 2004 and is set in Azeroth.",
        answer: "What is World of Warcraft?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "A 1998 Nintendo 64 shooter starring a British secret agent, this game was based on a 1995 film.",
        answer: "What is GoldenEye 007?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "Released in 2001, Halo: Combat ____ was a flagship title for Microsoft’s original Xbox.",
        answer: "What is Evolved?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This 2001 GameCube launch title has the hero using a vacuum to capture ghosts in a haunted mansion.",
        answer: "What is Luigi’s Mansion?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "The “Konami Code” became widely known in the U.S. through this 1988 NES run-and-gun that offered 30 lives.",
        answer: "What is Contra?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "Time travel, Lavos, and the Kingdom of Zeal are key elements of this 1995-era SNES role-playing game.",
        answer: "What is Chrono Trigger?",
        revealed: false,
      },
    ],
  },
  {
    name: "HEADLINES 1990–2009",
    questions: [
      {
        points: 100,
        question: "Operation Desert Storm was the combat phase of this 1990–1991 conflict.",
        answer: "What is the Gulf War?",
        revealed: false,
      },
      {
        points: 200,
        question: "Signed in 1998 on Good Friday, this agreement helped bring peace to Northern Ireland.",
        answer: "What is the Good Friday Agreement?",
        revealed: false,
      },
      {
        points: 300,
        question: "In 1997, the UK handed over sovereignty of this territory to China.",
        answer: "What is Hong Kong?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "Euro coins and banknotes entered circulation in 2002, but the currency began for electronic use in this year.",
        answer: "What is 1999?",
        revealed: false,
      },
      {
        points: 500,
        question: "This 2005 hurricane devastated New Orleans and much of the U.S. Gulf Coast.",
        answer: "What is Hurricane Katrina?",
        revealed: false,
      },
      {
        points: 600,
        question: "In 2003, a U.S.-led invasion toppled Saddam Hussein, leader of this country.",
        answer: "What is Iraq?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "In 2008, this investment bank filed the largest bankruptcy in U.S. history at the time.",
        answer: "What is Lehman Brothers?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "In 1994, this country held its first multiracial national elections, making Nelson Mandela president.",
        answer: "What is South Africa?",
        revealed: false,
      },
    ],
  },
  {
    name: "BRANDS & BUZZ (90S/00S)",
    questions: [
      {
        points: 100,
        question: "This egg-shaped virtual pet from Bandai had kids feeding pixels in the late 1990s.",
        answer: "What is a Tamagotchi?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "A 1990s collectible craze, these plush toys were sold with heart-shaped tags and often given “birthdays.”",
        answer: "What are Beanie Babies?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "The slogan “Got Milk?” was created for the Milk Processor Board of this U.S. state in 1993.",
        answer: "What is California?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "Premiering in 2000, this reality competition show asked contestants to outwit, outplay, and outlast.",
        answer: "What is Survivor?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "Founded in 1997 as a DVD-by-mail company, this service introduced streaming to the U.S. in 2007.",
        answer: "What is Netflix?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Founded in 2003 and acquired by News Corp in 2005, this social network was a major pre-Facebook hub for music and profiles.",
        answer: "What is Myspace?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "Apple introduced this media-management app in 2001; it later became closely tied to syncing early iPods.",
        answer: "What is iTunes?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "The original iMac G3 debuted in 1998 in a translucent color named for a famous beach suburb of Sydney.",
        answer: "What is Bondi Blue?",
        revealed: false,
      },
    ],
  },
];
