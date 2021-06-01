module.exports = [
{
      calculationId: "summa",
      subject: "summa",
      descriptionCareActor: "Summering av frågor",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: [ 
        "outcome.set(",
        "(f.get('q1') > 2) ? 1.0: 0.0)",
        ");"
        ]
  }
];