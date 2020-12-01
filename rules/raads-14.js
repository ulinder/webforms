module.exports = [
    {
      calculationId: "summa",
      subject: "summa",
      descriptionCareActor: "Summering av alla frågor",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (5-q.get('q1'))+
                (5-q.get('q2'))+
                (5-q.get('q3'))+
                (5-q.get('q4'))+
                (5-q.get('q5'))+
                (5-q.get('q6'))+
                (5-q.get('q7'))+
                (5-q.get('q8'))+
                (5-q.get('q9'))+
                (5-q.get('q10'))+
                (5-q.get('q11'))+
                (5-q.get('q12'))+
                (5-q.get('q13'))+
                (5-q.get('q14'))     
                );`
    },    
    {
      calculationId: "mentalisering",
      subject: "mentalisering",
      descriptionCareActor: "Mentaliseringssvårigheter",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (5-q.get('q1'))+
                (5-q.get('q4'))+
                (5-q.get('q6'))+
                (5-q.get('q9'))+
                (5-q.get('q11'))+
                (5-q.get('q12'))+
                (5-q.get('q13'))+
                (5-q.get('q14'))     
                );`
    },
    {
      calculationId: "socialangest",
      subject: "socialangest",
      descriptionCareActor: "Social ångest",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (5-q.get('q3'))+
                (5-q.get('q5'))+
                (5-q.get('q6'))+
                (5-q.get('q8'))     
                );`
    },    
    {
      calculationId: "sensoriskreaktivitet",
      subject: "sensoriskreaktivitet",
      descriptionCareActor: "Sensorisk reaktivitet",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (5-q.get('q2'))+
                (5-q.get('q7'))+
                (5-q.get('q10'))    
                );`
    },
];