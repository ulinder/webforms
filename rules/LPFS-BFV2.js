module.exports = [
    {
      calculationId: "Summa",
      subject: "Summa",
      descriptionCareActor: "Summa av alla poäng",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (q.get('q1',1))+
                (q.get('q2',1))+
                (q.get('q3',1))+
                (q.get('q4',1))+
                (q.get('q5',1))+
                (q.get('q6',1))+     
                (q.get('q7',1))+
                (q.get('q8',1))+
                (q.get('q9',1))+
                (q.get('q10',1))+
                (q.get('q11',1))+
                (q.get('q12',1))  
                );`
    },    
    {
      calculationId: "SelfFunctioning",
      subject: "SelfFunctioning",
      descriptionCareActor: "Self-functioning",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (q.get('q1',1))+
                (q.get('q2',1))+
                (q.get('q3',1))+
                (q.get('q4',1))+
                (q.get('q5',1))+
                (q.get('q6',1))     
                );`
    },    
    {
      calculationId: "InterpersonalFunctioning",
      subject: "Interpersonalfunctioning",
      descriptionCareActor: "Interpersonal functioning",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (q.get('q7',1))+
                (q.get('q8',1))+
                (q.get('q9',1))+
                (q.get('q10',1))+
                (q.get('q11',1))+
                (q.get('q12',1))     
                );`
    }
];