module.exports = [
{
      calculationId: "summamaniskperiod",
      subject: "Summa period av mani",
      descriptionCareActor: "Summering av hur många 'ja'-svar som angetts på fråga 3. Generellt indikerar 14 eller fler 'ja'-svar hypomana eller maniska svårigheter.",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: [ 
        `outcome.set(
          ( (q.get('hcl32-3.3.1', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.2', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.3', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.4', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.5', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.6', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.7', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.8', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.9', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.10', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.11', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.12', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.13', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.14', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.15', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.16', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.17', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.18', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.19', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.20', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.21', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.22', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.23', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.24', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.25', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.26', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.27', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.28', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.29', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.30', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.31', 1) == 1) ? 1.0 : 0.0 ) +
          ( (q.get('hcl32-3.3.32', 1) == 1) ? 1.0 : 0.0 ) 
        );`
        ]
  }
];
