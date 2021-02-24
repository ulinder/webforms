module.exports = [
    {
      calculationId: "Fobisk",
      subject: "Fobisk",
      descriptionCareActor: "Indikation på fobisk",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `Double score = ( 
                ((q.get('q1')==1) ? 1.0: 0.0) +
                ((q.get('q2')==1) ? 1.0: 0.0) +
                ((q.get('q3')==1) ? 1.0: 0.0) +
                ((q.get('q4')==1) ? 1.0: 0.0) +
                ((q.get('q5')==1) ? 1.0: 0.0) +
                ((q.get('q6')==1) ? 1.0: 0.0) +
                ((q.get('q7')==1) ? 1.0: 0.0)
                );
                if (score > 3) outcome.set( score );
                `
    },    
    {
      calculationId: "Osjälvständig",
      subject: "Osjälvständig",
      descriptionCareActor: "Indikation på Osjälvständig",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `Double score = (
                ((q.get('q8')==1) ? 1.0: 0.0) +
                ((q.get('q9')==1) ? 1.0: 0.0) +
                ((q.get('q10')==1) ? 1.0: 0.0) +
                ((q.get('q11')==1) ? 1.0: 0.0) +
                ((q.get('q12')==1) ? 1.0: 0.0) +
                ((q.get('q13')==1) ? 1.0: 0.0) +
                ((q.get('q14')==1) ? 1.0: 0.0) +
                ((q.get('q15')==1) ? 1.0: 0.0)
                );
                if (score > 4) outcome.set( score );
                `
    },    
    {
      calculationId: "Tvångsmässig",
      subject: "Tvångsmässig",
      descriptionCareActor: "Indikation på Tvångsmässig",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `Double score = (
                ((q.get('q16')==1) ? 1.0: 0.0) +
                ((q.get('q17')==1) ? 1.0: 0.0) +
                ((q.get('q18')==1) ? 1.0: 0.0) +
                ((q.get('q19')==1) ? 1.0: 0.0) +
                ((q.get('q20')==1) ? 1.0: 0.0) +
                ((q.get('q21')==1) ? 1.0: 0.0) +
                ((q.get('q22')==1) ? 1.0: 0.0) +
                ( (q.get('q23')==1 || q.get('q24')==1) ? 1.0: 0.0)
                );
                if (score > 3) outcome.set( score );
                `
    },
    {
      calculationId: "Passiv-Aggressiv",
      subject: "Passiv-Aggressiv",
      descriptionCareActor: "Indikation på Passiv-Aggressiv",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `Double score = (
                ( (q.get('q25')==1 || q.get('q26')==1) ? 1.0: 0.0) +
                ((q.get('q27')==1) ? 1.0: 0.0) +
                ((q.get('q28')==1) ? 1.0: 0.0) +
                ((q.get('q29')==1) ? 1.0: 0.0) +
                ((q.get('q30')==1) ? 1.0: 0.0) +
                ((q.get('q31')==1) ? 1.0: 0.0) +
                ((q.get('q32')==1) ? 1.0: 0.0)
                );
                if (score > 3) outcome.set( score );
                `
    },
    {
      calculationId: "Depressiv",
      subject: "Depressiv",
      descriptionCareActor: "Indikation på Depressiv",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `Double score = (
                ((q.get('q33')==1) ? 1.0: 0.0) +
                ((q.get('q34')==1) ? 1.0: 0.0) +
                ((q.get('q35')==1) ? 1.0: 0.0) +
                ((q.get('q36')==1) ? 1.0: 0.0) +
                ( (q.get('q37')==1 || q.get('q38')==1) ? 1.0: 0.0) +
                ((q.get('q39')==1) ? 1.0: 0.0) +
                ((q.get('q40')==1) ? 1.0: 0.0)
                );
                if (score > 4) outcome.set( score );
                `
    },
    {
      calculationId: "Paranoid",
      subject: "Paranoid",
      descriptionCareActor: "Indikation på Paranoid",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `Double score = (
                ((q.get('q41')==1) ? 1.0: 0.0) +
                ((q.get('q42')==1) ? 1.0: 0.0) +
                ((q.get('q43')==1) ? 1.0: 0.0) +
                ((q.get('q44')==1) ? 1.0: 0.0) +
                ( (q.get('q45')==1 || q.get('q46')==1) ? 1.0: 0.0) +
                ((q.get('q47')==1) ? 1.0: 0.0) +
                ((q.get('q48')==1) ? 1.0: 0.0)
                );
                if (score > 3) outcome.set( score );
                `
    },
    {
      calculationId: "Schizotyp",
      subject: "Schizotyp",
      descriptionCareActor: "Indikation på Schizotyp",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `Double score = (
                ( (q.get('q49')==1 || q.get('q50')==1 || q.get('q51')==1) ? 1.0: 0.0) +
                ( (q.get('q52')==1 || q.get('q53')==1 || q.get('q54')==1) ? 1.0: 0.0) +
                ( (q.get('q55')==1 || q.get('q56')==1 || q.get('q57')==1) ? 1.0: 0.0) +
                ( (q.get('q41')==1 || q.get('q42')==1 || q.get('q43')==1 || q.get('q44')==1 || q.get('q48')==1) ? 1.0: 0.0) +
                ((q.get('q58')==1) ? 1.0: 0.0) +
                ((q.get('q59')==1) ? 1.0: 0.0)
                );
                if (score > 3) outcome.set( score );
                `
    },
    {
      calculationId: "Schizoid",
      subject: "Schizoid",
      descriptionCareActor: "Indikation på Schizoid",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `Double score = (
                ((q.get('q60')==1) ? 1.0: 0.0) +
                ((q.get('q61')==1) ? 1.0: 0.0) +
                ((q.get('q62')==1) ? 1.0: 0.0) +
                ((q.get('q63')==1) ? 1.0: 0.0) +
                ((q.get('q58')==1) ? 1.0: 0.0) +
                ((q.get('q64')==1) ? 1.0: 0.0) +
                ((q.get('q65')==1) ? 1.0: 0.0)
                );
                if (score > 3) outcome.set( score );
                `
    },
    {
      calculationId: "Histrionisk",
      subject: "Histrionisk",
      descriptionCareActor: "Indikation på Histrionisk",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `Double score = (
                ((q.get('q66')==1) ? 1.0: 0.0) +
                ((q.get('q67')==1 || q.get('q68')==1) ? 1.0: 0.0) +
                ((q.get('q69')==1) ? 1.0: 0.0) +
                ((q.get('q70')==1) ? 1.0: 0.0) +
                ((q.get('q71')==1) ? 1.0: 0.0) +
                ((q.get('q72')==1) ? 1.0: 0.0)
                );
                if (score > 2) outcome.set( score );
                `
    },
    {
      calculationId: "Narcissistisk",
      subject: "Narcissistisk",
      descriptionCareActor: "Indikation på Narcissistisk",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `Double score = (
                ((q.get('q73')==1 || q.get('q74')==1) ? 1.0: 0.0) +
                ((q.get('q75')==1 || q.get('q76')==1) ? 1.0: 0.0) +
                ((q.get('q77')==1 || q.get('q78')==1) ? 1.0: 0.0) +
                ((q.get('q79')==1 ) ? 1.0: 0.0) +
                ((q.get('q80')==1 || q.get('q81')==1) ? 1.0: 0.0) +
                ((q.get('q82')==1 || q.get('q83')==1 || q.get('q84')==1) ? 1.0: 0.0) +
                ((q.get('q85')==1 || q.get('q86')==1) ? 1.0: 0.0) +
                ((q.get('q87')==1 || q.get('q88')==1) ? 1.0: 0.0) +
                ((q.get('q89')==1) ? 1.0: 0.0)
                );
                if (score > 4) outcome.set( score );
                `
    },
    {
      calculationId: "Borderline",
      subject: "Borderline",
      descriptionCareActor: "Indikation på Borderline",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `Double score = (
                ((q.get('q90')==1 ) ? 1.0: 0.0) +
                ((q.get('q91')==1 ) ? 1.0: 0.0) +
                ((q.get('q92')==1 || q.get('q93')==1 || q.get('q94')==1 || q.get('q95')==1) ? 1.0: 0.0) +
                ((q.get('q96')==1) ? 1.0: 0.0) +
                ((q.get('q97')==1 || q.get('q98')==1) ? 1.0: 0.0) +
                ((q.get('q99')==1) ? 1.0: 0.0) +
                ((q.get('q100')==1) ? 1.0: 0.0) +
                ((q.get('q101')==1 || q.get('q102')==1 || q.get('q103')==1) ? 1.0: 0.0) +
                ((q.get('q104')==1) ? 1.0: 0.0)
                );
                if (score > 4) outcome.set( score );
                `
    },
    {
      calculationId: "Antisocial",
      subject: "Antisocial",
      descriptionCareActor: "Indikation på Antisocial",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `Double score = (
                ((q.get('q105')==1) ? 1.0: 0.0) +
                ((q.get('q106')==1) ? 1.0: 0.0) +
                ((q.get('q107')==1) ? 1.0: 0.0) +
                ((q.get('q108')==1) ? 1.0: 0.0) +
                ((q.get('q109')==1) ? 1.0: 0.0) +
                ((q.get('q110')==1) ? 1.0: 0.0) +
                ((q.get('q111')==1) ? 1.0: 0.0) +
                ((q.get('q112')==1) ? 1.0: 0.0) +
                ((q.get('q113')==1) ? 1.0: 0.0) +
                ((q.get('q114')==1) ? 1.0: 0.0) +
                ((q.get('q115')==1) ? 1.0: 0.0) +
                ((q.get('q116')==1) ? 1.0: 0.0) +
                ((q.get('q117')==1) ? 1.0: 0.0) +
                ((q.get('q118')==1) ? 1.0: 0.0) +
                ((q.get('q119')==1) ? 1.0: 0.0)
                );
                if (score > 1) outcome.set( score );
                `
    }
];