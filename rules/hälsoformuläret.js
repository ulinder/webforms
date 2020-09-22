// CUSTOM RULES SECTION
let ruleArray = [
  {
      calculationId: "allm1",
      subject: "Allmän hälsa",
      descriptionCareActor: "Avvikande hälsosvar",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: [
        "Double q1 = q.get('1.1.1',0);", 
        "if(q1 > 4){outcome.set(q1);}"
        ]
  },

  {
      calculationId: "fys1",
      subject: "Fysisk aktivitet",
      descriptionCareActor: "Låg fysisk aktivitet",
      descriptionSubjectOfCare: "Utifrån hur du har svarat, märker vi att det är av vikt att ytterligare uppmärksamma ditt förhållande till fysisk aktivitet. På 1177 kan du läsa mer om betydelsen av fysisk aktivitet för hälsan samt ta del av en del praktiska tips på hur du skulle kunna förändra din vardag och dina vanor: \n\n\n https://www.1177.se/Vastra-Gotaland/liv--halsa/traning-och-fysisk-halsa/",
      approvedForSubjectOfCare: true,
      formula: [
        "if(q.get('2.1.1',0) == 1 || q.get('2.1.2',0) < 4 || q.get('2.1.3',0) < 7)", 
        "{outcome.set(1.0);}"
        ]
  },

  {
      calculationId: "kost1",
      subject: "Kost",
      descriptionCareActor: "Avviktande resultat kost",
      descriptionSubjectOfCare: "Utifrån hur du har svarat, märker vi att det är av vikt att ytterligare uppmärksamma dina kostvanor. På 1177 kan du läsa mer om hur din fysiska hälsa påverkas av dina kostvanor, samt en del praktiska tips på hur du skulle kunna förändra dina matvanor: \n\n\nhttps://www.1177.se/Vastra-Gotaland/liv--halsa/ata-for-att-ma-bra/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=q.get('3.1.1',0);", 
        "Double q2=q.get('3.1.2',0);", 
        "Double q3=q.get('3.1.3',0);", 
        "Double q4=(5-q.get('3.1.4',0));",
        "Double sum = q1+q2+q3+q4;",
        "if(sum>12)",
        "{outcome.set(q1+q2+q3+q4);}"
        ]
  },

  {
      calculationId: "sleep1",
      subject: "Sömn",
      descriptionCareActor: "Avvikande resultat Sömn",
      descriptionSubjectOfCare: "Utifrån hur du har svarat, märker vi att det är av vikt att ytterligare uppmärksamma dina sömnvanor. På 1177 kan du läsa mer om hur din fysiska hälsa påverkas av sömnen, samt några råd om hur du skulle kunna få bättre sömnvanor:\n\n\nhttps://www.1177.se/Vastra-Gotaland/liv--halsa/stresshantering-och-somn/somnsvarigheter/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=q.get('5.1.1',0);", 
        "if(q1<3)",
        "{outcome.set(q1);}" 
        ]
  },
  {
      calculationId: "stress1",
      subject: "Stress",
      descriptionCareActor: "Avvikande resultat Stress",
      descriptionSubjectOfCare: "Utifrån hur du har svarat, märker vi att det är av vikt att ytterligare uppmärksamma hur och när du blir stressad. På 1177 kan du läsa mer hur stress påverkar den fysiska hälsan och få en del praktiska tips på hur du skulle kunna förändra din vardag och dina vanor för att försöka minska stressen.\n\n\nhttps://www.1177.se/Vastra-Gotaland/liv--halsa/stresshantering-och-somn/stress/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=q.get('6.1.1',0);", 
        "Double q2=q.get('6.1.2',0);", 
        "if(q1>4 || q2 > 4 )",
        "{outcome.set(q1+q2);}" 
        ]
  },
  {
      calculationId: "alkohol1",
      subject: "Alkohol",
      descriptionCareActor: "Avvikande resultat Alkohol",
      descriptionSubjectOfCare: "Utifrån hur du har svarat, märker vi att det är av vikt att ytterligare uppmärksamma dina alkoholvanor. På 1177 kan du läsa mer om hur din fysiska hälsa påverkas av dina alkoholvanor och några råd om hur du skulle kunna minska din alkoholkonsumtion – samt vart du kan vända sig för att få ytterligare hjälp om du önskar ta tag i detta.\n\n\nhttps://www.1177.se/Vastra-Gotaland/liv--halsa/tobak-och-alkohol/sa-kan-du-andra-dina-alkoholvanor/\n\n\nhttps://www.1177.se/Vastra-Gotaland/sjukdomar--besvar/psykiska-sjukdomar-och-besvar/beroende-och-skadligt-bruk/alkoholberoende/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=q.get('7.1.1',0);", 
        "Double q2=q.get('7.1.2',0);", 
        "if(q1>4 || q2 > 3 )",
        "{outcome.set(q1+q2);}" 
        ]
  },

  {
      calculationId: "tobak1",
      subject: "Tobak",
      descriptionCareActor: "Avvikande resultat tobak",
      descriptionSubjectOfCare: "Utifrån hur du har svarat, märker vi att det är av vikt att ytterligare uppmärksamma dina tobaksvanor. På 1177 kan du läsa mer om hur din fysiska hälsa påverkas av tobaksbruk, samt några råd om hur du skulle kunna minska din tobakskonsumtion – samt vart du skulle kunna vända sig för att få ytterligare hjälp om du önskar ta tag i detta:\n\n\nhttps://www.1177.se/Vastra-Gotaland/liv--halsa/tobak-och-alkohol/\n\n\nhttps://www.1177.se/Vastra-Gotaland/liv--halsa/tobak-och-alkohol/rokning-och-snusning/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=q.get('7.2.1',0);", 
        "Double q2=q.get('7.2.3',0);", 
        "if(q1>3 || q2>3)",
        "{outcome.set(q1+q2);}" 
        ]
  },

  {
      calculationId: "allm2",
      subject: "Allmän Hälsa",
      descriptionCareActor: "Avvikande allmän hälsa. Siffran visar antal jakande svar som getts.",
      descriptionSubjectOfCare: "Utifrån hur du har svarat på enkäten vill vi råda dig att ta kontakt med din vårdcentral för en fördjupad undersökning. Om du känner dig osäker på vad i dina svar som borde föranleda en fördjupad somatisk undersökning på vårdcentralen, eller om du känner dig osäker på hur du ska gå till väga för att kontakta din vårdcentral, får du gärna kontakta vår mottagning för hjälp (gärna via 1177).",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=q.get('8.1.1',0);", 
        "Double q2=q.get('8.1.2',0);", 
        "Double q3=q.get('8.1.3',0);", 
        "Double q4=q.get('8.1.4',0);", 
        "Double q5=q.get('8.1.5',0);", 
        "Double q6=q.get('8.1.6',0);", 
        "Double q8=q.get('8.1.8',0);", 
        "Double q9=q.get('8.1.9',0);", 
        "Double q10=q.get('8.1.10',0);", 
        "Double q11=q.get('8.1.11',0);", 
        "Double q12=q.get('8.1.12',0);", 
        "Double q13=q.get('8.1.13',0);", 
        "Double q14=q.get('8.1.14',0);", 
        "Double q15=q.get('8.1.15',0);", 
        "Double q16=q.get('8.1.16',0);", 
        "if(q1==1||q3==1||q6==1||q8==1||q9==1||q10==1||q11==1||q12==1||q14==1||q15==1||q16==1)",
        "{outcome.set(1.0);}"
        ]
  },
  {
      calculationId: "tand1",
      subject: "Tandhälsa",
      descriptionCareActor: "Indikation på tandproblem. Resultatsiffran visar hur många jakande påståenden som gavs.",
      descriptionSubjectOfCare: "Utifrån hur du har svarat på enkäten vill vi råda dig att ta kontakt med din Folktandvård eller tandläkare för att boka en tid för undersökning avseende de besvär du har bejakat i våra frågor. Om du är intresserad av mer fördjupad information om tandhälsa kan du gå in på 1177:s hemsida och läsa mer:\n\n\n https://www.1177.se/Vastra-Gotaland/liv--halsa/tandhalsa/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q1=q.get('9.1.1',0);", 
        "Double q2=q.get('9.1.2',0);", 
        "Double q3=q.get('9.1.3',0);", 
        "Double q4=q.get('9.1.4',0);", 
        "Double q5=q.get('9.1.5',0);", 
        "Double q6=q.get('9.1.6',0);", 
        "Double q7=q.get('9.1.7',0);", 
        "Double q8=q.get('9.1.8',0);", 
        "if( q1==2 || q2==1 || q3==1 || q4==1 || q5==1 || q6==1 || q7==1 || q8==1 )",
        "{outcome.set(1.0);}"
        ]

  },
  {
      calculationId: "gender1",
      subject: "Könsspecifika frågor",
      descriptionCareActor: "Indikation på könsspecifika avvikelser",
      descriptionSubjectOfCare: "Utifrån hur du har svarat på enkäten vill vi råda dig att ta kontakt med din vårdcentral för att boka en tid för en fördjupad undersökning (exempelvis cellprov, mammografi, aortascreening). Om du känner dig osäker på vad i dina svar som borde föranleda en fördjupad somatisk undersökning på vårdcentralen – eller om du känner dig osäker på hur du ska gå till väga för att kontakta din vårdcentral, får du gärna kontakta vår mottagning för att få hjälp (gärna via 1177).",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double q412=q.get('4.1.2',0);", 
        "Double q413=q.get('4.1.3',0);", 
        "Double q414=q.get('4.1.4',0);", 
        "Double q415=q.get('4.1.5',0);", 
        "if( q412 == 2 || q413 == 1 || q414 == 2 || q415 == 2 )",
        "{outcome.set(1.0);}"
        ]

  },
  {
      calculationId: "motivation1",
      subject: "Motivation",
      descriptionCareActor: "Pat visar motivation till att förändra sin livsstil, min 0, max 10",
      descriptionSubjectOfCare: "Utifrån dina ovanstående svar kan vi rekommendera tjänsten Hälsocoach online. Observera att detta är en tjänst som erbjuds alla invånare i Västra Götalandsregionen och är inte direkt kopplad till den vård som du får inom vuxenpsykiatrin på Sahlgrenska.\n\n Hälsocoach online är en individanpassad tjänst som erbjuder motiverande videomöten i mobilen eller surfplattan för att förbättra levnadsvanor. Tjänsten innefattar coachning och rådgivning gällande fysisk aktivitet, mat, tobak och alkohol.\n\n Du kan läsa mer om hälsocoach online på 1177:\n\nhttps://www.1177.se/Vastra-Gotaland/sa-fungerar-varden/att-valja-vardmottagning/besok-halsocoach-online/",
      approvedForSubjectOfCare: true,
      formula: [ 
        "Double m1=q.get('10.2.1',0);", 
        "if( m1 > 5)",
        "{outcome.set(m1);}"
        ]

  }
]; // custom rules array

module.exports = ruleArray;