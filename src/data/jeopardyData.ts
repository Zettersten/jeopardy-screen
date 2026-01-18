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
    name: "TV THEME SONGS",
    questions: [
      {
        points: 100,
        question:
          "“I’ll be there for you / (When the rain starts to pour)” is the theme to this NBC sitcom.",
        answer: "What is Friends?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "“In West Philadelphia born and raised / On the playground was where I spent most of my days.”",
        answer: "What is The Fresh Prince of Bel-Air?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "“You’re not the boss of me now / And you’re not so big” introduces this chaotic family sitcom.",
        answer: "What is Malcolm in the Middle?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "“Somebody save me / Let your warm hands break right through” plays before this Superman prequel series.",
        answer: "What is Smallville?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "“Everywhere you look, everywhere you go / There’s a heart (there’s a heart), a hand to hold onto.”",
        answer: "What is Full House?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "“California, here we come / Right back where we started from” sets the mood for this teen drama.",
        answer: "What is The O.C.?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "“I don’t want to wait / For our lives to be over” by Paula Cole opens this Capeside drama.",
        answer: "What is Dawson's Creek?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "“Hangin’ out / Down the street / The same old thing / We did last week” introduces this Wisconsin-set show.",
        answer: "What is That '70s Show?",
        revealed: false,
      },
    ],
  },
  {
    name: "TOYS & CRAZES",
    questions: [
      {
        points: 100,
        question:
          "These pellet-filled plush animals came with heart-shaped tags and were promised to be valuable investments.",
        answer: "What are Beanie Babies?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "A cardboard milk cap game that involved stacking and slamming, popular in the mid-90s.",
        answer: "What are Pogs?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This robotic owl-like creature would “learn” English the more you played with it, often waking up in the middle of the night.",
        answer: "What is a Furby?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "These digital pets on a keychain required feeding and cleaning up droppings to keep them alive.",
        answer: "What are Tamagotchis?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This red Sesame Street plush giggled and vibrated, causing a massive holiday shopping frenzy in 1996.",
        answer: "What is Tickle Me Elmo?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "These small plastic dolls came in compact cases that opened to reveal tiny houses and worlds.",
        answer: "What is Polly Pocket?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This sophisticated robot dog by Sony was released in 1999 and became a high-tech status symbol.",
        answer: "What is AIBO?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This aluminum folding scooter with red wheels became a ubiquitous mode of transport for kids in 2000.",
        answer: "What is a Razor Scooter?",
        revealed: false,
      },
    ],
  },
  {
    name: "SCHOLASTIC BOOK FAIR",
    questions: [
      {
        points: 100,
        question:
          "R.L. Stine wrote this horror anthology series with titles like “Welcome to Dead House” and “The Haunted Mask.”",
        answer: "What is Goosebumps?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This series about a boy wizard introduced terms like “Muggle” and “Quidditch” to the world.",
        answer: "What is Harry Potter?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "K.A. Applegate’s sci-fi series featured teens who could morph into animals to fight alien slugs.",
        answer: "What are Animorphs?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This “captain” in tighty-whities hypnotized his principal in a graphic novel series by Dav Pilkey.",
        answer: "What is Captain Underpants?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "A series of unfortunate events plagues the Baudelaire orphans in novels by this author (a pen name).",
        answer: "Who is Lemony Snicket?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Ann M. Martin created this series about a group of friends running a childcare business in Stoneybrook.",
        answer: "What is The Baby-Sitters Club?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This interactive series let you make decisions that led to different endings, often gruesome ones.",
        answer: "What is Choose Your Own Adventure?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "Brian Jacques wrote this fantasy series featuring warrior mice, badgers, and other woodland creatures at an abbey.",
        answer: "What is Redwall?",
        revealed: false,
      },
    ],
  },
  {
    name: "POP PUNK & EMO",
    questions: [
      {
        points: 100,
        question:
          "This trio asked “What’s my age again?” and sang about “All the Small Things.”",
        answer: "Who are Blink-182?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "Fronted by Billie Joe Armstrong, this band’s Dookie album was a 90s staple, followed by American Idiot in 2004.",
        answer: "Who are Green Day?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This band combined rap and rock on “In the End” and “Numb,” led by Chester Bennington and Mike Shinoda.",
        answer: "Who are Linkin Park?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "“The Middle” by this Arizona band told listeners that “it just takes some time.”",
        answer: "Who are Jimmy Eat World?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This Canadian singer wore a tie over a tank top and asked a “Sk8er Boi” to see her later.",
        answer: "Who is Avril Lavigne?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Gerard Way led this theatrical emo band known for “Welcome to the Black Parade.”",
        answer: "Who are My Chemical Romance?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This band, led by Hayley Williams, declared “Misery Business” in 2007.",
        answer: "Who are Paramore?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "“Sugar, We’re Goin Down” was a breakout hit for this band featuring Pete Wentz and Patrick Stump.",
        answer: "Who are Fall Out Boy?",
        revealed: false,
      },
    ],
  },
  {
    name: "CONSOLE GAMING GEMS",
    questions: [
      {
        points: 100,
        question:
          "In this N64 shooter, you play as James Bond completing missions based on the 1995 film.",
        answer: "What is GoldenEye 007?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This plumber jumped into 3D for the first time on the N64, exploring Peach’s Castle.",
        answer: "What is Super Mario 64?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "Master Chief battles the Covenant in this Xbox launch title that revolutionized console FPS games.",
        answer: "What is Halo?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "You gotta catch ’em all in Red and Blue versions of this Game Boy RPG.",
        answer: "What is Pokémon?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This PS2 game let you skateboard through open levels, collecting tapes and performing special moves.",
        answer: "What is Tony Hawk's Pro Skater?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Cloud Strife wields a massive sword against Sephiroth in this defining RPG for the original PlayStation.",
        answer: "What is Final Fantasy VII?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This 2001 “Auto” game allowed 3D open-world chaos in Liberty City.",
        answer: "What is Grand Theft Auto III?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "Link creates a time paradox by pulling the Master Sword from its pedestal in this 1998 classic.",
        answer: "What is The Legend of Zelda: Ocarina of Time?",
        revealed: false,
      },
    ],
  },
  {
    name: "SUMMER BLOCKBUSTERS",
    questions: [
      {
        points: 100,
        question:
          "Will Smith and Jeff Goldblum fight alien invaders on July 4th in this 1996 sci-fi hit.",
        answer: "What is Independence Day?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "“I see dead people,” whispers Haley Joel Osment in this 1999 M. Night Shyamalan thriller.",
        answer: "What is The Sixth Sense?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "Tobey Maguire spins webs and kisses upside down in this 2002 superhero origin story.",
        answer: "What is Spider-Man?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "Keanu Reeves learns that his reality is a simulation in this 1999 sci-fi action film.",
        answer: "What is The Matrix?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "“Life finds a way” in this 1993 dinosaur adventure directed by Steven Spielberg.",
        answer: "What is Jurassic Park?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Agents J and K police extraterrestrial activity in this 1997 action-comedy.",
        answer: "What is Men in Black?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "Jim Carrey discovers his entire life is a 24-hour reality TV show in this 1998 film.",
        answer: "What is The Truman Show?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "Pixar’s first feature film, released in 1995, brought toys to life when humans weren’t around.",
        answer: "What is Toy Story?",
        revealed: false,
      },
    ],
  },
  {
    name: "REALITY TV BEGINNINGS",
    questions: [
      {
        points: 100,
        question:
          "“The tribe has spoken” is the catchphrase used when extinguishing torches on this survival competition.",
        answer: "What is Survivor?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "Simon Cowell, Paula Abdul, and Randy Jackson judged singers in this search for a superstar.",
        answer: "What is American Idol?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "Seven strangers are picked to live in a house and have their lives taped in this MTV pioneer.",
        answer: "What is The Real World?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "Wealthy socialites Paris Hilton and Nicole Richie try manual labor in this fish-out-of-water series.",
        answer: "What is The Simple Life?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "Tyra Banks teaches aspiring models to “smize” (smile with their eyes) in this competition.",
        answer: "What is America's Next Top Model?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Ozzy Osbourne and his family opened their home to cameras in this MTV reality sitcom.",
        answer: "What is The Osbournes?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "Bachelors hand out roses to women they want to keep dating in this ABC dating show.",
        answer: "What is The Bachelor?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "Xzibit heard you like cars, so he put a car in your car in this MTV vehicle makeover show.",
        answer: "What is Pimp My Ride?",
        revealed: false,
      },
    ],
  },
];
