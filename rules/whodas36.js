module.exports = [
    {
      calculationId: "totalsumma",
      subject: "Summa av samtliga frågor",
      descriptionCareActor: "Summering av alla frågor",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                q.get('q1',1) - 1 + 
                q.get('q2',1) - 1 + 
                q.get('q3',1) - 1 + 
                q.get('q4',1) - 1 + 
                q.get('q5',1) - 1 + 
                q.get('q6',1) - 1 + 
                q.get('q7',1) - 1 + 
                q.get('q8',1) - 1 + 
                q.get('q9',1) - 1 + 
                q.get('q10',1) - 1 + 
                q.get('q11',1) - 1 + 
                q.get('q12',1) - 1 + 
                q.get('q13',1) - 1 + 
                q.get('q14',1) - 1 + 
                q.get('q15',1) - 1 + 
                q.get('q16',1) - 1 + 
                q.get('q17',1) - 1 + 
                q.get('q18',1) - 1 + 
                q.get('q19',1) - 1 + 
                q.get('q20',1) - 1 + 
                q.get('q21',1) - 1 + 
                q.get('q22',1) - 1 + 
                q.get('q23',1) - 1 + 
                q.get('q24',1) - 1 + 
                q.get('q25',1) - 1 + 
                q.get('q26',1) - 1 + 
                q.get('q27',1) - 1 + 
                q.get('q28',1) - 1 + 
                q.get('q29',1) - 1 + 
                q.get('q30',1) - 1 + 
                q.get('q31',1) - 1 + 
                q.get('q32',1) - 1 + 
                q.get('q33',1) - 1 + 
                q.get('q34',1) - 1 + 
                q.get('q35',1) - 1 + 
                q.get('q36',1) - 1   
                );`
    }
];