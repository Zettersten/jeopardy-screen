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
          "The average full-term human pregnancy lasts approximately this many weeks.",
        answer: "What is 40 weeks?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This synthetic version of a natural labor hormone is administered through an IV drip to start or accelerate contractions.",
        answer: "What is Pitocin?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This pain management technique, delivered through a catheter placed near the spine, is the most commonly requested form of relief during labor in the United States.",
        answer: "What is an epidural?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This cervical measurement, checked in centimeters during labor, tells the care team how open the birth canal has become — reaching 10 means it's time to push.",
        answer: "What is dilation?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This five-criterion newborn scoring system, evaluated at one and five minutes after delivery, determines whether a baby needs immediate medical attention.",
        answer: "What is the Apgar score?",
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
          "Jesus performed his first recorded miracle at a wedding in this city, turning water into wine.",
        answer: "What is Cana?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This apostle, known as \"the beloved,\" traditionally authored the fourth Gospel and stood at the foot of the cross during the crucifixion.",
        answer: "Who is John?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "These nine statements from the Sermon on the Mount, each beginning with \"Blessed are...,\" outline the qualities God honors in his people.",
        answer: "What are the Beatitudes?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "Paul wrote the famous passage \"Love is patient, love is kind\" in this New Testament letter addressed to a church in Greece.",
        answer: "What is 1 Corinthians?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This parable, unique to Luke's Gospel, describes a compassionate father who runs to embrace his wayward son returning after squandering his entire inheritance.",
        answer: "What is the Parable of the Prodigal Son?",
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
          "God parted this body of water so Moses could lead the Israelites out of Egypt and into the wilderness.",
        answer: "What is the Red Sea?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This prophet initially fled his calling, was swallowed by a great fish, and eventually obeyed God by preaching repentance in Nineveh.",
        answer: "Who is Jonah?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This Moabite woman pledged \"Where you go, I will go\" to her mother-in-law and followed her back to Bethlehem after both became widows.",
        answer: "Who is Ruth?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This youngest son of Jesse, a shepherd boy who felled a Philistine giant with a sling and a single stone, later became Israel's greatest king.",
        answer: "Who is David?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This ruler of a wealthy southern kingdom made a famous journey to test Solomon's legendary wisdom, arriving with a great caravan of spices, gold, and precious stones.",
        answer: "Who is the Queen of Sheba?",
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
          "This foundational lower-body exercise involves pushing the hips back and bending both knees to lower the body as if sitting into a chair.",
        answer: "What is a squat?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This component of physical fitness — improved by yoga and static stretching — determines how far a muscle can move a joint through its full range of motion.",
        answer: "What is flexibility?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This training method alternates short bursts of all-out effort with brief rest periods, keeping the heart rate elevated for maximum calorie burn in minimum time.",
        answer: "What is HIIT (High-Intensity Interval Training)?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This macronutrient, found in chicken, eggs, and Greek yogurt, is the primary building block the body uses to repair and grow muscle tissue after exercise.",
        answer: "What is protein?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This distance-race pacing strategy — completing the second half faster than the first — is widely considered the most effective approach for endurance events.",
        answer: "What is a negative split?",
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
          "This Florida boy band released \"I Want It That Way\" in 1999, becoming one of the best-selling musical acts of all time.",
        answer: "Who are the Backstreet Boys?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "Alanis Morissette's 1995 major-label breakthrough launched with the raw breakup anthem \"You Oughta Know\" and also produced the irony-heavy hit \"Ironic\" — name this album.",
        answer: "What is \"Jagged Little Pill\"?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This Canadian pop-punk singer-songwriter released \"Complicated\" and \"Sk8er Boi\" on her 2002 debut album \"Let Go.\"",
        answer: "Who is Avril Lavigne?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "Kelly Clarkson won the inaugural season of this Fox singing competition in 2002, launching her career with \"A Moment Like This.\"",
        answer: "What is American Idol?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This 2000 Eminem track, told through the unhinged letters of an obsessive fan, gave pop culture a new word for a dangerously devoted superfan.",
        answer: "What is \"Stan\"?",
        revealed: false,
      },
    ],
  },
  {
    name: "TRAD WIFE",
    questions: [
      {
        points: 100,
        question:
          "This type of homemade bread — leavened by a living culture of wild yeast instead of commercial packets — has become a symbol of the from-scratch homemaking revival.",
        answer: "What is sourdough?",
        revealed: false,
      },
      {
        points: 200,
        question:
          "This home preservation technique — sealing food in sterilized jars using a boiling water bath or pressure cooker — lets homemakers enjoy summer harvests all winter long.",
        answer: "What is canning?",
        revealed: false,
      },
      {
        points: 300,
        question:
          "This beloved television host, famous for her exuberant personality and love of butter, popularized classical French cooking techniques for American home kitchens starting in the 1960s.",
        answer: "Who is Julia Child?",
        revealed: false,
      },
      {
        points: 400,
        question:
          "This former Juilliard ballet student became a viral homesteading icon through her \"Ballerina Farm\" brand, her large Utah family, and a widely-discussed magazine cover story.",
        answer: "Who is Hannah Neeleman?",
        revealed: false,
      },
      {
        points: 500,
        question:
          "This iconic homemaking cookbook, first published in 1950 and named for a fictional female spokesperson, has sold tens of millions of copies across its many updated editions.",
        answer: "What is the Betty Crocker Cookbook?",
        revealed: false,
      },
    ],
  },
];
