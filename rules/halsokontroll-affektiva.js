// CUSTOM RULES SECTION
let ruleArray = [

  {
      calculationId: "fys1",
      subject: "Fysisk aktivitet",
      descriptionCareActor: "Vid positivt utfall på dålig fysisk aktivitet, uppmanas patienten läsa på mer om fysisk aktivitet på 1177.",
      descriptionSubjectOfCare: "Utifrån hur du har svarat, märker vi att det är av vikt att ytterligare uppmärksamma ditt förhållande till fysisk aktivitet. På 1177 kan du läsa mer om betydelsen av fysisk aktivitet för hälsan samt ta del av en del praktiska tips på hur du skulle kunna förändra din vardag och dina vanor: \n\n\n https://www.1177.se/Vastra-Gotaland/liv--halsa/traning-och-fysisk-halsa/",
      approvedForSubjectOfCare: true,
      formula: [
        "if(q.get('anamnes-affektiva-q1',0) == 1 || q.get('anamnes-affektiva-q2',0) < 4 || q.get('anamnes-affektiva-q3',0) < 7)", 
        "{outcome.set(1.0);}"
        ]
  },

  {
      calculationId: "kost1",
      subject: "Kost",
      descriptionCareActor: "Vid positivt utfall (>11 poäng), uppmanas patienten läsa på mer om kostvanor på 1177.",
      descriptionSubjectOfCare: "Utifrån hur du har svarat, märker vi att det är av vikt att ytterligare uppmärksamma dina kostvanor. På 1177 kan du läsa mer om hur din fysiska hälsa påverkas av dina kostvanor, samt en del praktiska tips på hur du skulle kunna förändra dina matvanor: \n\n\nhttps://www.1177.se/Vastra-Gotaland/liv--halsa/ata-for-att-ma-bra/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=q.get('anamnes-affektiva-q4',0);", 
        "Double q2=q.get('anamnes-affektiva-q5',0);", 
        "Double q3=q.get('anamnes-affektiva-q6',0);", 
        "Double q4=(5-q.get('anamnes-affektiva-q7',0));",
        "Double sum = q1+q2+q3+q4;",
        "if(sum>11)",
        "{outcome.set(sum);}"
        ]
  },

  {
      calculationId: "sleep1",
      subject: "Sömn",
      descriptionCareActor: "Vid positivt utfall på dålig sömn, uppmanas patienten läsa på mer om sömn på 1177.",
      descriptionSubjectOfCare: "Utifrån hur du har svarat, märker vi att det är av vikt att ytterligare uppmärksamma dina sömnvanor. På 1177 kan du läsa mer om hur din fysiska hälsa påverkas av sömnen, samt några råd om hur du skulle kunna få bättre sömnvanor:\n\n\nhttps://www.1177.se/Vastra-Gotaland/liv--halsa/stresshantering-och-somn/somnsvarigheter/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=q.get('anamnes-affektiva-q9',0);", 
        "if(q1<3)",
        "{outcome.set(q1);}" 
        ]
  },
  {
      calculationId: "hjarta:karlkramp",
      subject: "Hjärt-/kärlsjukdom: Kärlkramp",
      descriptionCareActor: "Vid tecken på avvikande hjärt-/kärl-status (fler än ett symptom angivet), får patienten information om detta för att söka vidare hjälp. Följs upp vid nästkommande besök på mottagningen.",
      descriptionSubjectOfCare: "Utifrån dina svar på formuläret kan det finnas anledning att undersöka din hälsa närmre, och vi rekommenderar dig att följa länken nedan för att läsa mer. Om du känner igen dig i den beskrivning som ges ber vi dig kontakta din vårdcentral för ytterligare undersökning.\n\n\nhttps://www.1177.se/Vastra-Gotaland/Fakta-och-rad/Sjukdomar/Karlkramp/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=(q.get('anamnes-affektiva-q10',1) == 3 ? 1.0 : 0);", 
        "Double q2=(q.get('anamnes-affektiva-q11',1) == 3 ? 1.0 : 0);", 
        "Double q3=(q.get('anamnes-affektiva-q12',1) == 3 ? 1.0 : 0);", 
        "Double q4=(q.get('anamnes-affektiva-q13',1) == 3 ? 1.0 : 0);", 
        "Double q5=(q.get('anamnes-affektiva-q14',1) == 3 ? 1.0 : 0);", 
        "Double q6=(q.get('anamnes-affektiva-q15',1) == 3 ? 1.0 : 0);", 
        "Double q7=(q.get('anamnes-affektiva-q16',1) == 3 ? 1.0 : 0);", 
        "Double sum = q1+q2+q3+q4+q5+q6+q7;",
        "if(sum > 1)",
        "{outcome.set(sum);}" 
        ]
  },  
  {
      calculationId: "hjarta:flimmer",
      subject: "Hjärt-/kärlsjukdom: Flimmer",
      descriptionCareActor: "Vid tecken på avvikande flimmer-status (ett eller fler symptom angivet), får information om detta för att söka vidare hjälp. Följs upp vid nästkommande besök på mottagningen.",
      descriptionSubjectOfCare: "Utifrån dina svar på formuläret kan det finnas anledning att undersöka din hälsa närmre, och vi rekommenderar dig att följa länken nedan för att läsa mer. Om du känner igen dig i den beskrivning som ges ber vi dig kontakta din vårdcentral för ytterligare undersökning.\n\n\nhttps://www.1177.se/Vastra-Gotaland/Fakta-och-rad/Sjukdomar/Formaksflimmer-attackvis/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=(q.get('anamnes-affektiva-q17',1) == 3 ? 1.0 : 0);", 
        "Double q2=(q.get('anamnes-affektiva-q18',1) == 3 ? 1.0 : 0);", 
        "Double sum = q1+q2;",
        "if(sum > 0)",
        "{outcome.set(sum);}" 
        ]
  },  
  {
      calculationId: "hjarta:hjartsvikt",
      subject: "Hjärt-/kärlsjukdom: Hjärtsvikt",
      descriptionCareActor: "Vid tecken på avvikande hjärtsvikt-status (fler än ett symptom angivet), får pat information om detta för att söka vidare hjälp. Följs upp vid nästkommande besök på mottagningen.",
      descriptionSubjectOfCare: "Utifrån dina svar på formuläret kan det finnas anledning att undersöka din hälsa närmre, och vi rekommenderar dig att följa länken nedan för att läsa mer. Om du känner igen dig i den beskrivning som ges ber vi dig kontakta din vårdcentral för ytterligare undersökning.\n\n\nhttps://www.1177.se/Vastra-Gotaland/Fakta-och-rad/Sjukdomar/Hjartsvikt/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=(q.get('anamnes-affektiva-q19',1) == 3 ? 1.0 : 0);", 
        "Double q2=(q.get('anamnes-affektiva-q20',1) == 3 ? 1.0 : 0);", 
        "Double q3=(q.get('anamnes-affektiva-q21',1) == 3 ? 1.0 : 0);", 
        "Double q4=(q.get('anamnes-affektiva-q22',1) == 3 ? 1.0 : 0);", 
        "Double q5=(q.get('anamnes-affektiva-q23',1) == 3 ? 1.0 : 0);", 
        "Double q6=(q.get('anamnes-affektiva-q24',1) == 3 ? 1.0 : 0);", 
        "Double q7=(q.get('anamnes-affektiva-q25',1) == 3 ? 1.0 : 0);", 
        "Double sum = q1+q2+q3+q4+q5+q6+q7;",
        "if(sum > 1)",
        "{outcome.set(sum);}" 
        ]
  },  
  {
      calculationId: "andning:kol",
      subject: "Andningsvägar: KOL",
      descriptionCareActor: "Vid tecken på KOL (ett eller fler symptom angivet), får pat information om detta för att söka vidare hjälp. Följs upp vid nästkommande besök på mottagningen.",
      descriptionSubjectOfCare: "Utifrån dina svar på formuläret kan det finnas anledning att undersöka din hälsa närmre, och vi rekommenderar dig att följa länken nedan för att läsa mer. Om du känner igen dig i den beskrivning som ges ber vi dig kontakta din vårdcentral för ytterligare undersökning.\n\n\nhttps://www.1177.se/vastra-gotaland/sjukdomar--besvar/lungor-och-luftvagar/andningssvarigheter-och-andningsuppehall/kol--kroniskt-obstruktiv-lungsjukdom/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=(q.get('anamnes-affektiva-q33',1) == 3 ? 1.0 : 0);", 
        "Double q2=(q.get('anamnes-affektiva-q34',1) == 3 ? 1.0 : 0);", 
        "Double q3=(q.get('anamnes-affektiva-q35',1) == 3 ? 1.0 : 0);", 
        "Double q4=(q.get('anamnes-affektiva-q36',1) == 3 ? 1.0 : 0);", 
        "Double q5=(q.get('anamnes-affektiva-q37',1) == 3 ? 1.0 : 0);", 
        "Double q6=(q.get('anamnes-affektiva-q38',1) == 3 ? 1.0 : 0);", 
        "Double q7=(q.get('anamnes-affektiva-q39',1) == 3 ? 1.0 : 0);", 
        "Double sum = q1+q2+q4+q5+q6+q7; //fråga 3 är exkluderad",
        "if(sum > 0)",
        "{outcome.set(sum);}" 
        ]
  },  
  {
      calculationId: "tandvard",
      subject: "Tandvård",
      descriptionCareActor: "Vid tecken på bristande tandhälsa (nekande till fråga 1 eller symptom på följande frågor) uppmuntras pat att boka tid till tandläkare.",
      descriptionSubjectOfCare: "Vi rekommenderar dig att snarast möjligt boka en tid för ditt årliga kontrollbesök hos tandläkare. ",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=(q.get('anamnes-affektiva-q33',1) == 3 ? 1.0 : 0);", 
        "Double q2=(q.get('anamnes-affektiva-q34',1) == 3 ? 1.0 : 0);", 
        "Double q3=(q.get('anamnes-affektiva-q35',1) == 3 ? 1.0 : 0);", 
        "Double q4=(q.get('anamnes-affektiva-q36',1) == 3 ? 1.0 : 0);", 
        "if(q1 == 0 || (q2+q3+q4) > 0 )",
        "{outcome.set(1.0);}" 
        ]
  },  
  {
    calculationId: "cancer",
    subject: "Cancer",
    descriptionCareActor: "Vid tecken på cancerliknande symptom (ett eller fler symptom angivet), får pat information om detta för att söka vidare hjälp. Följs upp vid nästkommande besök på mottagningen.",
    descriptionSubjectOfCare: "Utifrån hur du har svarat vore det bra att undersöka dig lite närmare. Boka tid för undersökning hos din vårdcentral.",
    approvedForSubjectOfCare: true,
    formula: [ 
      "Double q1=(q.get('anamnes-affektiva-q46',1) == 3 ? 1.0 : 0);", 
      "Double q2=(q.get('anamnes-affektiva-q47',1) == 3 ? 1.0 : 0);", 
      "Double q3=(q.get('anamnes-affektiva-q48',1) == 3 ? 1.0 : 0);", 
      "Double q4=(q.get('anamnes-affektiva-q49',1) == 3 ? 1.0 : 0);", 
      "Double q5=(q.get('anamnes-affektiva-q50',1) == 3 ? 1.0 : 0);", 
      "Double q6=(q.get('anamnes-affektiva-q51',1) == 3 ? 1.0 : 0);", 
      "Double q7=(q.get('anamnes-affektiva-q52',1) == 3 ? 1.0 : 0);", 
      "Double q8=(q.get('anamnes-affektiva-q53',1) == 3 ? 1.0 : 0);", 
      "Double q9=(q.get('anamnes-affektiva-q54',1) == 3 ? 1.0 : 0);", 
      "Double q10=(q.get('anamnes-affektiva-q55',1) == 3 ? 1.0 : 0);", 
      "Double sum = q1+q2+q3+q4+q5+q6+q7+q8+q9+q10;",
      "if(sum > 0)",
      "{outcome.set(sum);}" 
      ]
},  
  {
    calculationId: "cancer-woman",
    subject: "Cancer:kvinnor",
    descriptionCareActor: "Vid positivt utfall (ett svar eller fler): uppmuntras patienten att boka tid till gynekolog.",
    descriptionSubjectOfCare: "Vi rekommenderar dig att snarast möjligt boka en tid hos en gynekolog för undersökning. ",
    approvedForSubjectOfCare: true,
    formula: [ 
      "Double q1=(q.get('anamnes-affektiva-q57',1) == 2 ? 1.0 : 0);", 
      "Double q2=(q.get('anamnes-affektiva-q58',2) == 1 ? 1.0 : 0);", 
      "Double q3=(q.get('anamnes-affektiva-q59',2) == 1 ? 1.0 : 0);", 
      "if((q1+q2+q3) > 0)",
      "{outcome.set(sum);}" 
      ]
},  

  {
      calculationId: "stress1",
      subject: "Stress",
      descriptionCareActor: "Vid avvikande resultat på stress (höga svar på fråga 1 och 2) uppmanas patienten läsa på mer om stress på 1177.",
      descriptionSubjectOfCare: "Utifrån hur du har svarat, märker vi att det är av vikt att ytterligare uppmärksamma hur och när du blir stressad. På 1177 kan du läsa mer hur stress påverkar den fysiska hälsan och få en del praktiska tips på hur du skulle kunna förändra din vardag och dina vanor för att försöka minska stressen.\n\n\nhttps://www.1177.se/Vastra-Gotaland/liv--halsa/stresshantering-och-somn/stress/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=q.get('anamnes-affektiva-q26',1);", 
        "Double q2=q.get('anamnes-affektiva-q27',1);", 
        "if(q1>4 || q2 > 4 )",
        "{outcome.set(q1+q2);}" 
        ]
  },
  {
      calculationId: "alkohol1",
      subject: "Alkohol",
      descriptionCareActor: "Vid avvikande resultat på alkohol (höga svar på fråga 1 och 2) uppmanas patienten läsa på mer om alkoholmissbruk på 1177.",
      descriptionSubjectOfCare: "Utifrån hur du har svarat, märker vi att det är av vikt att ytterligare uppmärksamma dina alkoholvanor. På 1177 kan du läsa mer om hur din fysiska hälsa påverkas av dina alkoholvanor och några råd om hur du skulle kunna minska din alkoholkonsumtion – samt vart du kan vända sig för att få ytterligare hjälp om du önskar ta tag i detta.\n\n\nhttps://www.1177.se/Vastra-Gotaland/liv--halsa/tobak-och-alkohol/sa-kan-du-andra-dina-alkoholvanor/\n\n\nhttps://www.1177.se/Vastra-Gotaland/sjukdomar--besvar/psykiska-sjukdomar-och-besvar/beroende-och-skadligt-bruk/alkoholberoende/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=q.get('anamnes-affektiva-q41',1);", 
        "Double q2=q.get('anamnes-affektiva-q42',1);", 
        "if(q1>4 || q2 > 3 )",
        "{outcome.set(q1+q2);}" 
        ]
  },

  {
      calculationId: "tobak1",
      subject: "Tobak",
      descriptionCareActor: "Vid avvikande resultat på tobak (höga svar på fråga 1 och 2) uppmanas patienten läsa på mer om tobak på 1177.",
      descriptionSubjectOfCare: "Utifrån hur du har svarat, märker vi att det är av vikt att ytterligare uppmärksamma dina tobaksvanor. På 1177 kan du läsa mer om hur din fysiska hälsa påverkas av tobaksbruk, samt några råd om hur du skulle kunna minska din tobakskonsumtion – samt vart du skulle kunna vända sig för att få ytterligare hjälp om du önskar ta tag i detta:\n\n\nhttps://www.1177.se/Vastra-Gotaland/liv--halsa/tobak-och-alkohol/\n\n\nhttps://www.1177.se/Vastra-Gotaland/liv--halsa/tobak-och-alkohol/rokning-och-snusning/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=q.get('anamnes-affektiva-q42',1);", 
        "Double q2=q.get('anamnes-affektiva-q44',1);", 
        "if(q1>3 || q2>3)",
        "{outcome.set(q1+q2);}" 
        ]
  },
  {
      calculationId: "motivation1",
      subject: "Motivation",
      descriptionCareActor: "Om patienten svarar högre än medel på motivation att ändra vanor hänvisas denne till Hälsocoach online.",
      descriptionSubjectOfCare: "Utifrån dina ovanstående svar kan vi rekommendera tjänsten Hälsocoach online. Observera att detta är en tjänst som erbjuds alla invånare i Västra Götalandsregionen och är inte direkt kopplad till den vård som du får inom vuxenpsykiatrin på Sahlgrenska.\n\n Hälsocoach online är en individanpassad tjänst som erbjuder motiverande videomöten i mobilen eller surfplattan för att förbättra levnadsvanor. Tjänsten innefattar coachning och rådgivning gällande fysisk aktivitet, mat, tobak och alkohol.\n\n Du kan läsa mer om hälsocoach online på 1177:\n\nhttps://www.1177.se/Vastra-Gotaland/sa-fungerar-varden/att-valja-vardmottagning/besok-halsocoach-online/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double m1=q.get('anamnes-affektiva-q61',0);", 
        "if( m1 > 5)",
        "{outcome.set(m1);}"
        ]

  }
]; // custom rules array

module.exports = ruleArray;