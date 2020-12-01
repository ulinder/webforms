module.exports = [
    {
      calculationId: "summa",
      subject: "summa",
      descriptionCareActor: "Summering av alla frågor",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (q.get('q1'))+
                (q.get('q2'))+
                (q.get('q3'))+
                (q.get('q4'))+
                (q.get('q5'))+
                (q.get('q6'))+
                (q.get('q7'))+
                (q.get('q8'))+
                (q.get('q9'))+
                (q.get('q10'))+
                (q.get('q11'))+
                (q.get('q12'))+
                (q.get('q13'))+
                (q.get('q14'))+     
                (q.get('q15'))+
                (q.get('q16'))+
                (q.get('q17'))+
                (q.get('q18'))
                );`
    },
    {
      calculationId: "ouppmärksamhet",
      subject: "ouppmärksamhet",
      descriptionCareActor: "ouppmärksamhet",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (q.get('q1'))+
                (q.get('q3'))+
                (q.get('q5'))+
                (q.get('q7'))+
                (q.get('q9'))+
                (q.get('q11'))+
                (q.get('q13'))+
                (q.get('q15'))+     
                (q.get('q17'))
                );`
    },    
    {
      calculationId: "hyperaktimpuls",
      subject: "Hyperaktivitet-Impulskontroll",
      descriptionCareActor: "Hyperaktivitet-Impulskontroll",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (q.get('q2'))+
                (q.get('q4'))+
                (q.get('q6'))+
                (q.get('q8'))+
                (q.get('q10'))+
                (q.get('q12'))+
                (q.get('q14'))+     
                (q.get('q16'))+
                (q.get('q18'))
                );`
    }
];