module.exports = [
    {
      calculationId: "SelfFunctioning",
      subject: "Medelvärde - Självfunktion ",
      descriptionCareActor: "Gräns för sannolik personlighetsproblematik => 1,5 poäng. Allt under innebär sannolikt inte en problematik.",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (
                (q.get('lpfs-bf-2.1.1',1)-1)+
                (q.get('lpfs-bf-2.1.2',1)-1)+
                (q.get('lpfs-bf-2.1.3',1)-1)+
                (q.get('lpfs-bf-2.1.4',1)-1)+
                (q.get('lpfs-bf-2.1.5',1)-1)+
                (q.get('lpfs-bf-2.1.6',1)-1)+
                (q.get('lpfs-bf-2.1.11',1)-1) 
                ) /7
                );`
    },    
    {
      calculationId: "InterpersonalFunctioning",
      subject: "Medelvärde - Mellanmänsklig funktion",
      descriptionCareActor: "Gräns för sannolik problematik => 1,5 poäng. Allt under innebär sannolikt inte en problematik.",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (
                (q.get('lpfs-bf-2.1.7',1)-1)+ 
                (q.get('lpfs-bf-2.1.8',1)-1)+ 
                (q.get('lpfs-bf-2.1.9',1)-1)+ 
                (q.get('lpfs-bf-2.1.10',1)-1)+ 
                (q.get('lpfs-bf-2.1.11',1)-1)+ 
                (q.get('lpfs-bf-2.1.12',1)-1) 
                ) / 6
                );` 
    }
];