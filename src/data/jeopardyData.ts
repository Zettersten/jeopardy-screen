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
    name: "WENDY",
    questions: [
      {
        points: 100,
        question: "The birthday girl is turning this age today — everyone raise a glass!",
        answer: "What is 37?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "Wendy has been chasing this sport since childhood and would probably still outrun you on the field.",
        answer: "What is soccer?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This 1989 Tom Petty classic — a dreamy love letter to a free-spirited California girl — is Wendy's all-time favorite song.",
        answer: "What is \"Free Fallin'\"?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "Keeping up with the kids gets her out of bed early, but left to her own devices Wendy is actually this type of person.",
        answer: "What is a night owl?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "Wendy earned her degree at this Virginia university, home of the Dukes and nestled in the Shenandoah Valley.",
        answer: "What is James Madison University?",
        revealed: false,
      },
      {
        points: 600,
        question: "Wendy grew up in a seriously large household — she has this many siblings total.",
        answer: "What is 10?",
        revealed: false,
      },
      {
        points: 700,
        question: "In her famously large family, Wendy holds this specific birth-order position.",
        answer: "What is 6th?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "Before Instagram, Wendy roamed the internet under this AIM-era screen name.",
        answer: "What is shordee?",
        revealed: false,
      },
    ],
  },
  {
    name: "Y2K BABY",
    questions: [
      {
        points: 100,
        question:
          "This feared computer glitch — tied to how older software stored only the last two digits of a year — had the world bracing for catastrophic systems failure at midnight on January 1, 2000.",
        answer: "What is the Y2K bug?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This heiress and socialite defined early-2000s celebrity culture with velour tracksuits, trucker hats, and the catchphrase \"That's hot.\"",
        answer: "Who is Paris Hilton?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This ultra-slim flip phone, released in 2004 and famous for its razor-thin profile, became the mid-2000s' defining status-symbol handset.",
        answer: "What is the Motorola Razr?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This social networking site, launched in 2003, let users rank their \"Top 8\" contacts and embed autoplay songs on their profiles.",
        answer: "What is MySpace?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "Steve Jobs unveiled this device in October 2001 with the promise of \"1,000 songs in your pocket,\" revolutionizing portable music forever.",
        answer: "What is the iPod?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This fashion label — named after a legendary custom pinstriper from California — became the defining celebrity trucker hat brand of the early 2000s.",
        answer: "What is Von Dutch?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This pioneering peer-to-peer music service amassed roughly 80 million registered users before being ordered to shut down in 2001 following lawsuits from Metallica and the RIAA.",
        answer: "What is Napster?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "Founded in 1997 by Pamela Skaist-Levy and Gela Nash-Taylor, this California fashion brand's velour tracksuits became the unofficial celebrity uniform of the early 2000s.",
        answer: "What is Juicy Couture?",
        revealed: false,
      },
    ],
  },
  {
    name: "00S BANGERS",
    questions: [
      {
        points: 100,
        question:
          "Beyoncé's 2008 anthem, performed with two backup dancers in matching leotards, commanded a certain relationship status to put a ring on it.",
        answer: "What is \"Single Ladies\"?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This rapper's 2003 debut single opened with \"Go shorty, it's your birthday\" and became one of the defining party anthems of the decade.",
        answer: "Who is 50 Cent?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This British singer's 2006 album contained the Grammy-winning single \"Rehab\" and her soul-drenched title ballad about returning to old habits.",
        answer: "What is \"Back to Black\"?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "Justin Timberlake's 2002 breakout solo single featured a moody music video with a woman who bore a striking resemblance to his famous ex-girlfriend.",
        answer: "What is \"Cry Me a River\"?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This 2004 Kanye West debut sampled sped-up soul records and produced hits like \"All Falls Down\" — reportedly inspired by its creator's satirical take on higher education.",
        answer: "What is \"The College Dropout\"?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This 2003 OutKast hit urged listeners to shake something \"like a Polaroid picture\" — even as Polaroid publicly advised against doing exactly that to its film.",
        answer: "What is \"Hey Ya!\"?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This singer-songwriter, the daughter of Indian sitar master Ravi Shankar, personally swept five Grammy Awards in 2003 for her jazz-inflected debut album \"Come Away with Me.\"",
        answer: "Who is Norah Jones?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This 2001 album by a French electronic duo produced anthems like \"One More Time\" and \"Harder, Better, Faster, Stronger\" and was later brought to life as the animated film \"Interstella 5555.\"",
        answer: "What is \"Discovery\"?",
        revealed: false,
      },
    ],
  },
  {
    name: "PAGE TURNERS",
    questions: [
      {
        points: 100,
        question:
          "In this Gillian Flynn bestseller, a woman named Amy vanishes on her wedding anniversary, leaving her husband as the prime suspect in a national media frenzy.",
        answer: "What is \"Gone Girl\"?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This Paula Hawkins thriller follows a daily train commuter who witnesses something suspicious from her window seat and becomes entangled in a missing-woman mystery.",
        answer: "What is \"The Girl on the Train\"?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This Liane Moriarty novel — adapted into an HBO series starring Reese Witherspoon and Nicole Kidman — follows three women in Monterey, California hiding explosive secrets.",
        answer: "What is \"Big Little Lies\"?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "Suzanne Collins' dystopian trilogy about televised survival competitions in a future North America became a four-film franchise starring Jennifer Lawrence.",
        answer: "What is \"The Hunger Games\"?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "Taylor Jenkins Reid's 2017 novel follows a fictional 79-year-old Hollywood icon recounting her scandalous life story through a series of magazine interviews.",
        answer: "What is \"The Seven Husbands of Evelyn Hugo\"?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "Delia Owens' debut novel about a reclusive North Carolina coastal girl known as the \"Marsh Girl\" became a publishing phenomenon and a 2022 major studio film.",
        answer: "What is \"Where the Crawdads Sing\"?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "In this 2019 Alex Michaelides debut, a therapist becomes obsessed with uncovering why a famous painter shot her husband five times — then went permanently mute.",
        answer: "What is \"The Silent Patient\"?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "Celeste Ng's second novel, set in the meticulously planned Ohio suburb of Shaker Heights, explores class and race tensions and became a 2020 Hulu series with Reese Witherspoon.",
        answer: "What is \"Little Fires Everywhere\"?",
        revealed: false,
      },
    ],
  },
  {
    name: "COCKTAIL HOUR",
    questions: [
      {
        points: 100,
        question:
          "This brunch-staple cocktail blends vodka with tomato juice, Worcestershire sauce, and hot sauce, typically garnished with a celery stalk.",
        answer: "What is a Bloody Mary?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This classic cocktail is shaken with tequila, fresh lime juice, and triple sec, then served in a glass rimmed with salt.",
        answer: "What is a Margarita?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This Cuban cocktail muddled fresh mint and sugar with white rum and lime juice, then topped it with soda water — endlessly copied, rarely bettered.",
        answer: "What is a Mojito?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This Italian bitters-and-Prosecco cocktail, served over ice with an orange slice, became the dominant social-media drink of the late 2010s.",
        answer: "What is an Aperol Spritz?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This Kentucky Derby signature drink is built with bourbon, fresh mint, simple syrup, and crushed ice in a distinctive silver or pewter cup.",
        answer: "What is a Mint Julep?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This Italian aperitivo — made with equal parts gin, sweet vermouth, and Campari — is said to have been invented when a Florentine count asked for something stronger than an Americano.",
        answer: "What is a Negroni?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "According to cocktail legend, Trader Vic Bergeron's Tahitian guests exclaimed \"Maita'i roa ae!\" — \"out of this world\" — upon tasting this rum, orgeat, and curaçao tiki classic.",
        answer: "What is a Mai Tai?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This French Champagne aperitif is made by adding a splash of blackcurrant liqueur to a flute of bubbly — named after a WWII Resistance fighter who later became mayor of Dijon.",
        answer: "What is a Kir Royale?",
        revealed: false,
      },
    ],
  },
  {
    name: "MOM BRAIN",
    questions: [
      {
        points: 100,
        question:
          "This infamous toddler phase, marked by tantrums and boundary-testing, takes its name from the age at which it typically peaks.",
        answer: "What are the Terrible Twos?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This pediatric sleep-training approach, developed at Boston Children's Hospital in the 1980s, guides parents through timed intervals of supervised crying to teach infants to self-soothe.",
        answer: "What is the Ferber method?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This parenting style — named after an airborne vehicle that hovers overhead — involves closely supervising every detail of a child's academic and social life.",
        answer: "What is helicopter parenting?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This modern child-rearing philosophy emphasizes empathy, firm limits without punishment, and validating children's emotions over traditional discipline approaches.",
        answer: "What is gentle parenting?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This educational philosophy, developed by an early-20th-century Italian physician, emphasizes child-led exploration, hands-on learning materials, and mixed-age classroom environments.",
        answer: "What is Montessori?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This 2011 parenting book by Dr. Daniel Siegel and Tina Payne Bryson teaches parents to \"connect and redirect\" — acknowledging a child's emotions before correcting behavior.",
        answer: "What is \"The Whole-Brain Child\"?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This 1980 parenting classic by Adele Faber and Elaine Mazlish focuses on communication strategies that help children feel genuinely understood and heard.",
        answer: "What is \"How to Talk So Kids Will Listen & Listen So Kids Will Talk\"?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "Psychologist John Bowlby developed this foundational developmental theory describing the emotional bond between infants and caregivers, later elaborated by Mary Ainsworth into four distinct styles.",
        answer: "What is attachment theory?",
        revealed: false,
      },
    ],
  },
  {
    name: "WELLNESS ERA",
    questions: [
      {
        points: 100,
        question:
          "This fat-soluble nutrient, produced naturally when skin is exposed to sunlight, is one of the most commonly deficient in the adult population.",
        answer: "What is Vitamin D?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This transitional phase — which can begin as early as the late 30s — is defined by fluctuating estrogen levels and irregular periods in the years leading up to menopause.",
        answer: "What is perimenopause?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This ancient Ayurvedic root, also called \"Indian ginseng,\" has become one of the most popular adaptogens for reducing cortisol and managing chronic stress.",
        answer: "What is ashwagandha?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This essential mineral — often supplemented in glycinate or citrate form — participates in over 300 enzymatic reactions and is widely recommended for sleep support and anxiety.",
        answer: "What is magnesium?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This patient-centered medical approach focuses on identifying root causes of chronic disease rather than managing symptoms with medication, often using advanced lab work to personalize treatment.",
        answer: "What is functional medicine?",
        revealed: false,
      },
      {
        points: 600,
        question:
          "This vast ecosystem of bacteria, fungi, and microorganisms living in the digestive tract has been linked by research to mood regulation, immunity, and metabolic health.",
        answer: "What is the gut microbiome?",
        revealed: false,
      },
      {
        points: 700,
        question:
          "This structural protein — the most abundant in the human body — has become a popular supplement added to coffee and smoothies for skin elasticity, joint support, and lining integrity.",
        answer: "What is collagen?",
        revealed: false,
      },
      {
        points: 800,
        question:
          "This stress hormone, produced by the adrenal glands, when chronically elevated by poor sleep and high sugar intake, is a key driver of inflammation, weight gain, and hormonal disruption.",
        answer: "What is cortisol?",
        revealed: false,
      },
    ],
  },
];
