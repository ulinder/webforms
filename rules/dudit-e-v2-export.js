module.exports = [
    {
      calculationId: "frekvens",
      subject: "Totalpoäng droganvändning",
      descriptionCareActor: "En summering av antalet droger och den frekvens som patienten uppgett användning.",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `Double score = ( 
                (q.get(“q2“) == 1) ? 0 : (q.get(“q1“)-1) +
                (q.get(“q4“) == 1) ? 0 : (q.get(“q3“)-1) +
                (q.get(“q6“) == 1) ? 0 : (q.get(“q5“)-1) +
                (q.get(“q8“) == 1) ? 0 : (q.get(“q7“)-1) +
                (q.get(“q10“) == 1) ? 0 : (q.get(“q9“)-1) +
                (q.get(“q12“) == 1) ? 0 : (q.get(“q11“)-1) +
                (q.get(“q14“) == 1) ? 0 : (q.get(“q13“)-1) +
                (q.get(“q16“) == 1) ? 0 : (q.get(“q15“)-1) +
                (q.get(“q18“) == 1) ? 0 : (q.get(“q17“)-1) 
                );
                outcome.set( score );
                `
    },
    {
      calculationId: "positiv",
      subject: "Positiva påståenden",
      descriptionCareActor: "Visar totalpoäng för positiva påståenden om droger. Maximalt poängantal är 68.",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `
                outcome.set( 
                (q.get("q21")-1)+
                (q.get("q22")-1)+
                (q.get("q23")-1)+
                (q.get("q24")-1)+
                (q.get("q25")-1)+
                (q.get("q26")-1)+
                (q.get("q27")-1)+
                (q.get("q28")-1)+
                (q.get("q29")-1)+
                (q.get("q30")-1)+
                (q.get("q31")-1)+
                (q.get("q32")-1)+
                (q.get("q33")-1)+
                (q.get("q34")-1)+
                (q.get("q35")-1)+
                (q.get("q36")-1)+
                (q.get("q37")-1)
                ); 
                `
    },
    {
      calculationId: "negativ",
      subject: "Negativa påståenden",
      descriptionCareActor: "Visar totalpoäng för negativa påståenden om droger. Maximalt poängantal är 68",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `
                outcome.set( 
                (q.get("q38")-1)+
                (q.get("q39")-1)+
                (q.get("q40")-1)+
                (q.get("q41")-1)+
                (q.get("q42")-1)+
                (q.get("q43")-1)+
                (q.get("q44")-1)+
                (q.get("q45")-1)+
                (q.get("q46")-1)+
                (q.get("q47")-1)+
                (q.get("q48")-1)+
                (q.get("q49")-1)+
                (q.get("q50")-1)+
                (q.get("q51")-1)+
                (q.get("q52")-1)+
                (q.get("q53")-1)+
                (q.get("q54")-1)
                ); 
                `
    },
    {
      calculationId: "motivationsindex",
      subject: "Motivationsindex",
      descriptionCareActor: "Obs! Motivationsindex har ännu inte utvärderats psykometriskt och anvisningarna nedan är preliminära.\nMotivationsindex:  Poäng på motivationsindexet kan bli negativa eller positiva. Motivationen går att sortera ungefär på följande sätt:\n -2 till +3,99 poäng: låg motivation +4 till +9,99 poäng: mellanhög motivation +10 till +14,00 poäng: hög motivation", 
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `
                Double et = (
                (q.get("q56")-1) +
                (q.get("q57")-1) +
                (q.get("q58")-1) +
                (q.get("q59")-1) +
                (q.get("q62")-1) -
                (q.get("q55")-1) -
                (q.get("q63")-1) );
                
                Double pos = (
                (q.get("q21")-1)+
                (q.get("q22")-1)+
                (q.get("q23")-1)+
                (q.get("q24")-1)+
                (q.get("q25")-1)+
                (q.get("q26")-1)+
                (q.get("q27")-1)+
                (q.get("q28")-1)+
                (q.get("q29")-1)+
                (q.get("q30")-1)+
                (q.get("q31")-1)+
                (q.get("q32")-1)+
                (q.get("q33")-1)+
                (q.get("q34")-1)+
                (q.get("q35")-1)+
                (q.get("q36")-1)+
                (q.get("q37")-1)
                );

                Double neg = (
                (q.get("q38")-1)+
                (q.get("q39")-1)+
                (q.get("q40")-1)+
                (q.get("q41")-1)+
                (q.get("q42")-1)+
                (q.get("q43")-1)+
                (q.get("q44")-1)+
                (q.get("q45")-1)+
                (q.get("q46")-1)+
                (q.get("q47")-1)+
                (q.get("q48")-1)+
                (q.get("q49")-1)+
                (q.get("q50")-1)+
                (q.get("q51")-1)+
                (q.get("q52")-1)+
                (q.get("q53")-1)+
                (q.get("q54")-1)
                );
                  outcome.set(neg/pos*et); 
                `
    }
    
    ]