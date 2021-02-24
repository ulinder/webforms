module.exports = [
    {
      calculationId: "PHQTotal",
      subject: "Summering",
      descriptionCareActor: "0-4 Ingen/minimal depression\n5-9 Mild depression\n10-14 Måttlig depression\n15-19 Medelsvår depression\n20-27 Svår depression",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `Double score = ( 
                (q.get("q1")-1)+
                (q.get("q2")-1)+
                  (q.get("q3")-1)+
                  (q.get("q4")-1)+
                  (q.get("q5")-1)+
                  (q.get("q6")-1)+
                  (q.get("q7")-1)+
                  (q.get("q8")-1)+
                  (q.get("q9")-1)
                );
                outcome.set( score );
                `
    },{
      calculationId: "dödstankar",
      subject: "dödstankar",
      descriptionCareActor: "0= Inga dödstankar eller suicidtankar\n1= Dödstankar eller suicidtankar flera dagar de senaste två veckorna\n2= Dödstankar eller suicidtankar mer än hälften av dagarna de senaste två veckorna\n3= Dödstankar eller suicidtankar nästan varje dag",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `
                if(q.get("q9")>1) outcome.set( q.get("q9")-1 );               
                `
    }
    
    ]