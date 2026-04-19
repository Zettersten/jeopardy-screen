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
    name: "LABOR & DELIVERY",
    questions: [
      {
        points: 100,
        question:
          "This organ — delivered shortly after the baby — nourishes and oxygenates the fetus throughout pregnancy, passing nutrients and filtering waste through the umbilical cord.",
        answer: "What is the placenta?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This numerical scale, from -5 to +5, describes how far a baby's presenting part has descended in the pelvis relative to a bony maternal landmark.",
        answer: "What is fetal station?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This serious pregnancy complication — defined by high blood pressure and protein in the urine after 20 weeks — can escalate to life-threatening seizures if untreated.",
        answer: "What is preeclampsia?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This hormone, released naturally by the posterior pituitary, drives uterine contractions during labor and is also produced synthetically as the drug Pitocin.",
        answer: "What is oxytocin?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This birth preparation philosophy — named for a French obstetrician and built on conditioned relaxation — uses controlled breathing and visualization to retrain a laboring person's response to pain.",
        answer: "What is the Lamaze method?",
        revealed: false,
      },
    ],
  },
  {
    name: "NEW TESTAMENT",
    questions: [
      {
        points: 100,
        question:
          "In Matthew 5–7, Jesus delivered this famous hillside teaching that covers the Lord's Prayer, the Golden Rule, and the dangers of worry.",
        answer: "What is the Sermon on the Mount?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This sister of Lazarus and Martha poured an entire pint of expensive perfume on Jesus's feet at a dinner — an act Jesus defended when Judas called it wasteful.",
        answer: "Who is Mary of Bethany?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "Paul lists nine characteristics in Galatians 5:22–23 — including love, joy, peace, and self-control — that result from the Holy Spirit's presence in a believer's life.",
        answer: "What is the fruit of the Spirit?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This shortest letter in the Pauline corpus — just 25 verses — appeals to a wealthy church leader to welcome back his runaway enslaved servant Onesimus as a brother in Christ.",
        answer: "What is Philemon?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This New Testament letter, addressed to \"the twelve tribes scattered among the nations,\" opens with the call to \"consider it pure joy\" when facing trials of many kinds.",
        answer: "What is James?",
        revealed: false,
      },
    ],
  },
  {
    name: "OLD TESTAMENT",
    questions: [
      {
        points: 100,
        question:
          "This tower, described in Genesis 11, was built in an attempt to reach heaven — prompting God to confuse humanity's language and scatter the people across the earth.",
        answer: "What is the Tower of Babel?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "God tested Abraham's faith by commanding him to sacrifice this beloved son on Mount Moriah, then stopped him at the last moment and provided a ram caught in a thicket.",
        answer: "Who is Isaac?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This wife of the prophet Hosea was repeatedly unfaithful — their marriage serving as a deliberate prophetic picture of Israel's spiritual unfaithfulness to God.",
        answer: "Who is Gomer?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This judge of Israel made a rash vow before battle — promising to sacrifice whatever first came out of his house — and was required to keep it when his own daughter ran out to greet him.",
        answer: "Who is Jephthah?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This Persian queen was deposed by King Ahasuerus for refusing to display herself before his nobles at a royal banquet, opening the throne to a Jewish woman.",
        answer: "Who is Vashti?",
        revealed: false,
      },
    ],
  },
  {
    name: "SWEAT IT OUT",
    questions: [
      {
        points: 100,
        question:
          "This compound movement — pulling a loaded barbell from the floor to hip height using a hip-hinge pattern — is one of the three main lifts in competitive powerlifting.",
        answer: "What is a deadlift?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This fundamental training principle — systematically increasing weight, volume, or resistance over time — is the primary mechanism by which muscles grow stronger.",
        answer: "What is progressive overload?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This measure of aerobic capacity, expressed in milliliters of oxygen consumed per kilogram of body weight per minute, is the gold standard for assessing cardiovascular fitness.",
        answer: "What is VO2 max?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This process — in which muscle fibers damaged during resistance training are rebuilt thicker and stronger during recovery — is the biological basis for getting stronger over time.",
        answer: "What is muscle hypertrophy?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This Swedish training method — whose name translates to \"speed play\" — involves spontaneous surges of pace during a run over natural terrain, with no fixed intervals or distances.",
        answer: "What is fartlek training?",
        revealed: false,
      },
    ],
  },
  {
    name: "THROWBACK JAMS",
    questions: [
      {
        points: 100,
        question:
          "This Atlanta duo — discovered by Jermaine Dupri and famous for wearing their clothes backwards — scored a #1 hit in 1992 with the energetic rap track \"Jump.\"",
        answer: "Who are Kris Kross?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "Lauryn Hill's landmark 1998 solo debut followed her departure from this group, whose 1996 cover of \"Killing Me Softly\" launched them to mainstream fame.",
        answer: "Who are the Fugees?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This 1999 Destiny's Child anthem about financial self-sufficiency repeatedly poses a question about monetary obligations — later sampled and referenced by countless artists.",
        answer: "What is \"Bills, Bills, Bills\"?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This 2003 OutKast double-disc release — one side each for André 3000 and Big Boi — includes both \"Hey Ya!\" and \"The Way You Move\" and is widely considered one of hip-hop's greatest albums.",
        answer: "What is Speakerboxxx/The Love Below?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This 1999 Santana comeback album, featuring Rob Thomas on the lead single \"Smooth,\" won nine Grammy Awards and became one of the best-selling records of the decade.",
        answer: "What is Supernatural?",
        revealed: false,
      },
    ],
  },
  {
    name: "CRUNCHY HOME",
    questions: [
      {
        points: 100,
        question:
          "This practice — securing an infant against a caregiver's body using a structured carrier or woven wrap — is associated with reduced crying and stronger parent-child attachment.",
        answer: "What is babywearing?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This parenting philosophy — characterized by co-sleeping, breastfeeding on demand, immediate response to all cries, and extended physical closeness — was popularized by Dr. William Sears.",
        answer: "What is attachment parenting?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This fermented tea drink — brewed using a live SCOBY culture — has become a fridge staple in natural-living households for its purported probiotic and gut health benefits.",
        answer: "What is kombucha?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This popular wellness product category — marketed through companies like Young Living and doTERRA — involves concentrated plant extracts that adherents diffuse, apply topically, or ingest for health support.",
        answer: "What are essential oils?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This ancient food preservation method — using only salt, water, and time to create an anaerobic environment — produces probiotic-rich foods like sauerkraut and kimchi without any heat or vinegar.",
        answer: "What is lacto-fermentation?",
        revealed: false,
      },
    ],
  },
];
