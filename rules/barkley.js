module.exports = [
    {
      calculationId: "nuvarande-ADHD-totalt",
      subject: "ADHD-totalt nuvarande symptom",
      descriptionCareActor: "",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (q.get('barkley-2.1.1',1)-1)+
                (q.get('barkley-2.1.2',1)-1)+
                (q.get('barkley-2.1.3',1)-1)+
                (q.get('barkley-2.1.4',1)-1)+
                (q.get('barkley-2.1.5',1)-1)+
                (q.get('barkley-2.1.6',1)-1)+
                (q.get('barkley-2.1.7',1)-1)+
                (q.get('barkley-2.1.8',1)-1)+
                (q.get('barkley-2.1.9',1)-1)+
                (q.get('barkley-2.1.10',1)-1)+
                (q.get('barkley-2.1.11',1)-1)+
                (q.get('barkley-2.1.12',1)-1)+
                (q.get('barkley-2.1.13',1)-1)+
                (q.get('barkley-2.1.14',1)-1)+     
                (q.get('barkley-2.1.15',1)-1)+
                (q.get('barkley-2.1.16',1)-1)+
                (q.get('barkley-2.1.17',1)-1)+
                (q.get('barkley-2.1.18',1)-1)
                );`
    },
    {
      calculationId: "nuvarande-attention",
      subject: "Poäng för Ouppmärksamhet idag",
      descriptionCareActor: "",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (q.get('barkley-2.1.1',1)-1)+
                (q.get('barkley-2.1.3',1)-1)+
                (q.get('barkley-2.1.5',1)-1)+
                (q.get('barkley-2.1.7',1)-1)+
                (q.get('barkley-2.1.9',1)-1)+
                (q.get('barkley-2.1.11',1)-1)+
                (q.get('barkley-2.1.13',1)-1)+
                (q.get('barkley-2.1.15',1)-1)+     
                (q.get('barkley-2.1.17',1)-1)
                );`
    },    
    {
      calculationId: "nuvarande-hyperaktimpuls",
      subject: "Poäng för Hyperaktivitet-Impulskontroll idag",
      descriptionCareActor: "",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (q.get('barkley-2.1.2',1)-1)+
                (q.get('barkley-2.1.4',1)-1)+
                (q.get('barkley-2.1.6',1)-1)+
                (q.get('barkley-2.1.8',1)-1)+
                (q.get('barkley-2.1.10',1)-1)+
                (q.get('barkley-2.1.12',1)-1)+
                (q.get('barkley-2.1.14',1)-1)+     
                (q.get('barkley-2.1.16',1)-1)+
                (q.get('barkley-2.1.18',1)-1)
                );`
    },
    {
      calculationId: "nuvarande-trotssyndrom",
      subject: "Poäng för Trotssyndrom idag",
      descriptionCareActor: "",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (q.get('barkley-4.1.1',1)-1)+
                (q.get('barkley-4.1.2',1)-1)+
                (q.get('barkley-4.1.3',1)-1)+
                (q.get('barkley-4.1.4',1)-1)+
                (q.get('barkley-4.1.5',1)-1)+
                (q.get('barkley-4.1.6',1)-1)+
                (q.get('barkley-4.1.7',1)-1)+
                (q.get('barkley-4.1.8',1)-1)
                );`
    },
    {
      calculationId: "barndom-ADHD-totalt",
      subject: "ADHD-totalt symptom barndom",
      descriptionCareActor: "",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (q.get('barkley-5.1.1',1)-1)+
                (q.get('barkley-5.1.2',1)-1)+
                (q.get('barkley-5.1.3',1)-1)+
                (q.get('barkley-5.1.4',1)-1)+
                (q.get('barkley-5.1.5',1)-1)+
                (q.get('barkley-5.1.6',1)-1)+
                (q.get('barkley-5.1.7',1)-1)+
                (q.get('barkley-5.1.8',1)-1)+
                (q.get('barkley-5.1.9',1)-1)+
                (q.get('barkley-5.1.10',1)-1)+
                (q.get('barkley-5.1.11',1)-1)+
                (q.get('barkley-5.1.12',1)-1)+
                (q.get('barkley-5.1.13',1)-1)+
                (q.get('barkley-5.1.14',1)-1)+     
                (q.get('barkley-5.1.15',1)-1)+
                (q.get('barkley-5.1.16',1)-1)+
                (q.get('barkley-5.1.17',1)-1)+
                (q.get('barkley-5.1.18',1)-1)
                );`
    },
    {
      calculationId: "barndom-attention",
      subject: "Poäng för Ouppmärksamhet barndom",
      descriptionCareActor: "",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (q.get('barkley-5.1.1',1)-1)+
                (q.get('barkley-5.1.3',1)-1)+
                (q.get('barkley-5.1.5',1)-1)+
                (q.get('barkley-5.1.7',1)-1)+
                (q.get('barkley-5.1.9',1)-1)+
                (q.get('barkley-5.1.11',1)-1)+
                (q.get('barkley-5.1.13',1)-1)+
                (q.get('barkley-5.1.15',1)-1)+     
                (q.get('barkley-5.1.17',1)-1)
                );`
    },    
    {
      calculationId: "barndom-hyperaktimpuls",
      subject: "Poäng för Hyperaktivitet-Impulskontroll barndom",
      descriptionCareActor: "",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (q.get('barkley-5.1.2',1)-1)+
                (q.get('barkley-5.1.4',1)-1)+
                (q.get('barkley-5.1.6',1)-1)+
                (q.get('barkley-5.1.8',1)-1)+
                (q.get('barkley-5.1.10',1)-1)+
                (q.get('barkley-5.1.12',1)-1)+
                (q.get('barkley-5.1.14',1)-1)+     
                (q.get('barkley-5.1.16',1)-1)+
                (q.get('barkley-5.1.18',1)-1)
                );`
    },
    {
      calculationId: "barndom-trotssyndrom",
      subject: "Poäng för Trotssyndrom barndom",
      descriptionCareActor: "",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (q.get('barkley-7.1.1',1)-1)+
                (q.get('barkley-7.1.2',1)-1)+
                (q.get('barkley-7.1.3',1)-1)+
                (q.get('barkley-7.1.4',1)-1)+
                (q.get('barkley-7.1.5',1)-1)+
                (q.get('barkley-7.1.6',1)-1)+
                (q.get('barkley-7.1.7',1)-1)+
                (q.get('barkley-7.1.8',1)-1)
                );`
    },
    {
      calculationId: "barndom-uppforandestorning",
      subject: "Poäng för uppförandestörning barndom",
      descriptionCareActor: "",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                ((q.get('barkley-8.1.1',1)==1)? 1.0: 0.0)+
                ((q.get('barkley-8.1.2',1)==1)? 1.0: 0.0)+
                ((q.get('barkley-8.1.3',1)==1)? 1.0: 0.0)+
                ((q.get('barkley-8.1.4',1)==1)? 1.0: 0.0)+
                ((q.get('barkley-8.1.5',1)==1)? 1.0: 0.0)+
                ((q.get('barkley-8.1.6',1)==1)? 1.0: 0.0)+
                ((q.get('barkley-8.1.7',1)==1)? 1.0: 0.0)+
                ((q.get('barkley-8.1.8',1)==1)? 1.0: 0.0)+
                ((q.get('barkley-8.1.9',1)==1)? 1.0: 0.0)+
                ((q.get('barkley-8.1.10',1)==1)? 1.0: 0.0)+
                ((q.get('barkley-8.1.11',1)==1)? 1.0: 0.0)+
                ((q.get('barkley-8.1.12',1)==1)? 1.0: 0.0)+
                ((q.get('barkley-8.1.13',1)==1)? 1.0: 0.0)+
                ((q.get('barkley-8.1.15',1)==1)? 1.0: 0.0)+
                ((q.get('barkley-8.1.17',1)==1)? 1.0: 0.0)
                );`
    }
];