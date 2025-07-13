const courseList = {
  CSE: [
    { code: "HS361TA", title: "Entrepreneurship and IPR" },
    { code: "CS362IA", title: "Network Programming and Security" },
    { code: "CS363IA", title: "Compiler Design" },
    { code: "IS364TA", title: "Software Engg. with Agile Tech" },
    { code: "CS365TDB", title: "Operations Research" },
    { code: "CS365TDC", title: "Web Frameworks" },
    { code: "CS365TDF", title: "Cryptography & Network Security" },
    { code: "AI365TDD", title: "Generative AI" }
  ],

  ECE: [
    { code: "HS261TA", title: "Principles of Management & Economics" },
    { code: "EC362IA", title: "SystemVerilog for Design and Verification" },
    { code: "EC363IA", title: "Computer Networks and Protocols" },
    { code: "EC364TA", title: "Digital Signal Processing with ML" },
    { code: "EC367P", title: "Interdisciplinary Project" },

    // Core Electives (Group D)
    { code: "EC365TD1", title: "Low Power VLSI Design" },
    { code: "EC365TD2", title: "6G Technology and Beyond" },
    { code: "EC365TD3", title: "Real-Time Systems" },
    { code: "EC365TD4", title: "Digital CMOS Design" }
  ],

  Institutional: [
    { code: "XX26TEX", title: "Institutional Elective" },

    // Common Electives
    { code: "CS266TED", title: "Robotic Process Automation (RPA)" },
    { code: "EC266TEH", title: "Human Machine Interface (HMI)" },
    { code: "MA266TEU", title: "Mathematical Modelling" }
  ]
};

export default courseList;
