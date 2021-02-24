module.exports = [
    {
      calculationId: "frekvens",
      subject: "Totalpoäng droganvändning",
      descriptionCareActor: "En summering av antalet droger och den frekvens som patienten uppgett användning.\n\nSvaren för varje drogtyp värderas som 0, 1, 2, 3, 4, eller 5. Man kan summera alla svar (uteslut tobak) och då är maximala poängantalet 45.\n\nSubstanser där patient anger att svar enbart gäller vid återfall ger 0 poäng vid denna beräkning.",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `Double score = ( 
                (q.get(“q2“,0) == 1) ? 0 : (q.get(“q1“,1)-1) +
                (q.get(“q4“,0) == 1) ? 0 : (q.get(“q3“,1)-1) +
                (q.get(“q6“,0) == 1) ? 0 : (q.get(“q5“,1)-1) +
                (q.get(“q8“,0) == 1) ? 0 : (q.get(“q7“,1)-1) +
                (q.get(“q10“,0) == 1) ? 0 : (q.get(“q9“,1)-1) +
                (q.get(“q12“,0) == 1) ? 0 : (q.get(“q11“,1)-1) +
                (q.get(“q14“,0) == 1) ? 0 : (q.get(“q13“,1)-1) +
                (q.get(“q16“,0) == 1) ? 0 : (q.get(“q15“,1)-1) +
                (q.get(“q18“,0) == 1) ? 0 : (q.get(“q17“,1)-1) 
                );
                outcome.set( score );
                `
    }
]