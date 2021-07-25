DATA = 
[
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": "A. EGENTLIG DEPRESSIONSEPISOD",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (=> BETYDER: GÅ DIREKT TILL DIAGNOSRUTAN, RINGA IN NEJ I DIAGNOSRUTAN OCH FORTSÄTT MED NÄSTA AVSNITT)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "A1",
        "subid": "a",
        "text": "Har du någonsin varit deprimerad eller nere, eller känt dig ledsen, tom eller uppgiven  under större delen av dagen, nästan varje dag under 2 veckor?",
        "title": null,
        "rules":  "OM NEJ, KODA NEJ FÖR A1b; OM JA, FRÅGA:",
        "answer":
        [
            "NEJ              JA"
        ]
    },
   
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "A1",
        "subid": "b",
        "text": "Under de senaste 2 veckorna, har du varit deprimerad eller nere, eller känt dig ledsen,  tom eller uppgiven under större delen av dagen, nästan varje dag?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
 
    {
        "id": "A2",
        "subid": "a",
        "text": "Har du någonsin tappat intresset för det mesta omkring dig eller inte kunnat ha riktigt  nöje av sådant du brukar tycka om under den största delen av tiden under 2 veckor?",
        "title": null,
        "rules": " OM NEJ, KODA NEJ FÖR A2b; OM JA, FRÅGA:",
        "answer":
        [
            "NEJ              JA"
        ]
    },
    
 
    {
        "id": null,
        "subid": "b",
        "text": "Har du under den största delen av tiden under de senaste 2 veckorna varit mycket mindre intresserad för det mesta omkring dig jämfört med andra, eller inte kunnat ha riktigt nöje av sådant du vanligen brukar tycka om?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
   
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": " HAR A1a ELLER A2a KODATS JA? ",
        "answer":
        [
            "NEJ              JA"
        ]
    },

    {
        "id": "A3",
        //rules hamnar fel, den ska ligga längst upp - men kan inte ha regler i samma del som något annat element utan att den hamnar sist
        "rules": " OM A1b ELLER A2b = JA: EFTERFRÅGA DEN PÅGÅENDE OCH DEN SVÅRASTE TIDIGARE EPISODEN, ELLER OM A1b OCH A2b = NEJ: EFTERFRÅGA ENBART DEN SVÅRASTE TIDIGARE EPISODEN",


        "subid": " ",
        "text": " Under tvåveckorsperioden, när du kände dig deprimerad eller ointresserad:",


        "title": null,

      
        "answer": null
    },

    { 
        //Dessa textavsnitt måste läggas i separata objekt för att de ska skrivas ut
      //I vilket fall blir ju detta skumt då dessa är rubriker på kolumner med ja/nej svar på frågorna nedan  
        "id": null,
        "subid": null,
        "text": "Senaste 2 veckorna",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "text": "Tidigare episod",
        "subid": null,
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "a",
        "text": "Hade du minskad eller ökad aptit nästan varje dag? Minskade eller ökade du oavsiktligt i vikt (d.v.s. med ± 5% av kroppsvikten, eller ± 3,5 kg eller ±8 lb för en person som väger 160 lb/70 kg, på en månad)?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
   
    {
        "id": null,
        "subid": null,
        "text": " VID JA PÅ NÅGON AV DESSA FRÅGOR, KODA JA.",
        "title": null,
        "rules": null,
        "answer": null,
    },
    {
        "id": null,
        "subid": "b",
        "text": "Hade du problem med sömnen nästan varje natt (svårt att somna in, vaknade upp mitt i natten, vaknade alldeles för tidigt på morgonen eller sov alldeles för mycket)?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
   
    {
        "id": null,
        "subid": "c",
        "text": "Pratade eller rörde du dig långsammare än vanligt eller var du rastlös eller hade svårt att sitta still nästan varje dag? Märkte någon detta?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
   
    {
        "id": null,
        "subid": "d",
        "text": "Kände du dig trött eller orkeslös nästan varje dag? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": "e",
        "text": "Kände du dig värdelös eller hade skuldkänslor nästan varje dag?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " OM JA, BE OM EXEMPEL. LETA EFTER VANFÖRESTÄLLNINGAR OM MISSLYCKANDEN, BRISTER, UNDERGÅNG  ELLER SKULD, ELLER OM BEHOV AV BESTRAFFNING, ELLER VANFÖRESTÄLLNINGAR OM SJUKDOM ELLER DÖD, ELLER NIHILISTISKA ELLER KROPPSLIGA VANFÖRESTÄLLNINGAR. EXEMPLEN ÖVERENSSTÄMMER MED EN VANFÖRESTÄLLNING. ",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": "Pågående episod",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " Tidigare episod",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": "f",
        "text": "Hade du svårt att koncentrera dig, tänka eller fatta beslut nästan varje dag? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": "g",
        "text": "Tänkte du ofta på döden (RÄDSLA FÖR ATT DÖ RÄKNAS INTE HÄR), eller hade tankar på att ta livet av dig, eller hade du avsikter eller planer på att ta ditt liv? Försökte du ta ditt liv? VID JA PÅ NÅGON AV DESSA FRÅGOR, KODA JA.",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
   
  
    {
        "id": "A4",
        "subid": " " ,
        "text": "Orsakade dessa symtom påtagliga besvär eller problem hemma, i arbetet, i dina studier, socialt, i relationer, eller på något annat viktigt sätt, och innebär de en förändring mot hur du fungerat tidigare?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },

    {
        "id": "A5",
        "subid": " " ,
        "text": "Mellan 2 depressionsepisoder, hade du någonsin ett fritt intervall om minst 2 månader utan någon påtaglig depression eller ointresse?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ        Ej tillämpligt"
        ]
    },
 
   
  
    {
        "id": "EGENTLIG OCH DEPRESSIONSEPISOD",
        "subid": " ",
        "text": " ",
        "title": null,
        "rules": " HAR 5 ELLER FLER SVAR (A1–A3) KODATS JA, OCH HAR A4 KODATS JA FÖR DEN AKTUELLA TIDSPERIODEN OCH HAR ”UTESLUT ORGANISK ORSAK (O2-SUMMERING)” KODATS JA? ANGE OM EPISODEN ÄR PÅGÅENDE OCH/ELLER TIDIGARE. OM A5 KODATS JA, KODA JA FÖR RECIDIVERANDE", 
         "answer":
        [
            "NEJ             JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": null,
        "answer": 
        [ 
        "PÅGÅENDE TIDIGARE RECIDIVERANDE"
        ]
    },

    {
        "id": "A6",
        "subid": "a",
        "text": "Hur många depressionsepisoder har du haft under ditt liv? ____________________",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Mellan varje episod måste det gå minst 2 månader utan påtaglig depression.",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": " B. SUICIDALITET",
        "subid": " ",
        "text": "Under den senaste månaden:",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": "B1",
        "subid": " ",
        "text": " Har du varit med om en olyckshändelse? Detta inbegriper att råka ta för många tabletter.",
        "title": null,
        "rules": " OM B1 BESVARATS MED NEJ, HOPPA TILL B2; OM JA, STÄLL FRÅGAN B1a:",
        "answer":
        [
            "NEJ   JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 0",
        "answer": null
    },

    {
        "id": "B1",
        "subid": "a",
        "text": "Planerade eller avsåg du att skada dig själv i någon olyckshändelse, antingen genom att inte undvika en risk eller att avsiktligt orsaka olyckan?",
        "title": null,
        "rules": "OM B1a BESVARATS MED NEJ, HOPPA TILL B2: OM JA, STÄLL FRÅGAN B1b:",
        "answer":
        [
            "NEJ   JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 0",
        "answer": null
    },
    
 
    {
        "id": "B1",
        "subid": "b",
        "text": "Avsåg du att dö som en följd av någon olyckshändelse?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 0",
        "answer": null
    },

    {
        "id": "B2",
        "subid": " ",
        "text": " Har du (om ens för ett ögonblick) tänkt att det vore bättre om du var död eller önskat att du var tvungen att vara död?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 1",
        "answer": null
    },

    {
        "id": "B3",
        "subid": " ",
        "text": " Har du (om ens för ett ögonblick) tänkt på att skada eller göra illa dig själv", 
        "title": null,
        "rules": null,
        "answer": null,
       
    },



    {
        "id": null,
        "subid": null,
        "text": "– med åtminstone en viss avsikt eller medvetenhet om att du kunde dö som följd",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " – eller har du funderat på självmord (d.v.s. att ta ditt liv)?",
        "title": null,
        "rules": null,
        "answer":  [
            "NEJ   JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 6",
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " OM B2 + B3 BESVARAS MED NEJ, HOPPA TILL B4. I ANNAT FALL FRÅGA OM:",
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Frekvens/Intensitet",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Då och då/ Mild",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Ofta/ Måttlig",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Mycket ofta/ Svår",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "B4",
        "subid": " ",
        "text": " Har du hört en röst eller röster som säger till dig att ta livet av dig, eller har du haft drömmar som på något sätt är relaterade till självmord?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 4",
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Om JA, var det det ena eller båda [] var det en röst eller röster [] var det en dröm?",
        "answer": null
    },
   
    {
        "id": "B5",
        "subid": " ",
        "text": " Har du tänkt ut ett sätt att ta ditt liv (dvs. hur)?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 8",
        "answer": null
    },

    {
        "id": "B6",
        "subid": " ",
        "text": " Har du tänkt ut ett hjälpmedel att ta ditt liv med (dvs. med vad)?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 8",
        "answer": null
    },

    {
        "id": "B7",
        "subid": " ",
        "text": " Har du tänkt ut någon plats för att ta ditt liv (dvs. var någonstans)? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 8",
        "answer": null
    },

    {
        "id": "B8",
        "subid": " ",
        "text": " Har du planerat någon dag eller tidsram för att ta ditt liv (dvs. när)? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 8",
        "answer": null
    },

    {
        "id": "B9",
        "subid": " ",
        "text": " Har du tänkt på någonting du skulle vilja göra klart innan du försöker ta ditt liv? (t.ex. skriva ett självmordsbrev)",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 8",
        "answer": null
    },


    {
        "id": "B10",
        "subid": " ",
        "text": " Har du haft för avsikt att agera i enlighet med dina tankar på att ta ditt liv?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },

        {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 8",
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Om JA, markera det ena eller båda:",
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": "[] hade du för avsikt att göra det vid just det tillfället?",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": "[] hade du för avsikt att göra det någon gång i framtiden?",
        "title": null,
        "rules": null,
        "answer": null
    },
   
    {
        "id": "B11",
        "subid": " ",
        "text": " Har du haft för avsikt att dö som resultat av en självmordshandling? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 8",
        "answer": null
    },

      {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Om JA, markera det ena eller båda:",
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": " [] hade du för avsikt att dö genom självmord vid just det tillfället",
        "title": null,
        "rules": null,
        "answer": null
    },

     {
        "id": null,
        "subid": null,
        "title": null,
        "rules": null,
        "answer": null
    },
 
    {
        "id": null,
        "subid": null,
        "text": " [] hade du för avsikt att dö genom självmord någon gång i framtiden?",
        "title": null,
        "rules": null,
        "answer": null
    },
  
    {
        "id": "B12",
        "subid": " ",
        "text": " Har du känt behovet eller impulsen att ta livet av dig eller att planera att ta livet av dig snart hellre än senare?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Om JA, markera det ena eller båda",
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "[] var det att begå självmord (ta livet av dig)? ",
        "title": null,
        "rules": null,
        "answer": null
    },
    
    {
        "id": null,
        "subid": null,
        "text": "[] var det att planera att begå självmord (ta livet av dig)?",
        "title": null,
        "rules": null,
        "answer": null
    },

     {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Om JA, markera det ena eller båda",
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": "[] var det i princip oprovocerat?",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": "[] var det provocerat?",
        "title": null,
        "rules": null,
        "answer": null
    },
 
 
    {
        "id": null,
        "subid": null,
        "text": " FÖR ATT BEDÖMA HURUVIDA DETTA VAR I PRINCIP OPROVOCERAT, FRÅGA: ”5 minuter innan den här impulsen, hade du kunnat förutsäga att den skulle komma?”",
        "title": null,
        "rules": null,
        "answer": null
    },
   
    {
        "id": "B13",
        "subid": " ",
        "text": " Har du haft svårt att stå emot dessa impulser?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 8",
        "answer": null
    },

    {
        "id": "B14",
        "subid": " ",
        "text": " Har du aktivt förberett något självmordsförsök i förväntan eller avsikt att dö (inklusive saker du  gjort eller avsiktligt låtit bli att göra som fört dig närmare ett självmordsförsök)? Detta innefattar de gånger då du avsåg att ta ditt liv men blev avbruten eller avbröt dig själv innan du hann skada dig.",
        "title": null,
        "rules": null,
         "answer":
        [
            "NEJ      JA"
        ]
    },
  
  
  
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " OM B14 BESVARAS MED NEJ, HOPPA TILL B15.",
        "answer": null
    },
    {
        "id": "B14",
        "subid": "a ",
        "text": "Har du gjort aktiva förberedelser för att ta ditt liv, men utan att påbörja självmordsförsöket?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },

       {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 9",
        "answer": null
    },

    {
        "id": "B14",
        "subid": " b",
        "text": "Har du gjort aktiva förberedelser för att ta ditt liv, men hindrat dig själv precis innan du gjorde dig någon skada (ställde in)?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
   {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 10",
        "answer": null
    },

    {
        "id": "B14",
        "subid": "c",
        "text": "Har du gjort aktiva förberedelser för att ta ditt liv, men blivit hindrad av någon eller någonting precis innan du hann skada dig själv (blev avbruten)?",
        "title": null,
        "rules": null,
         "answer":
        [
            "NEJ      JA"
        ]
    },

       {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 11",
        "answer": null
    },

   
    {
        "id": "B15",
        "subid": " ",
        "text": " Har du skadat dig själv avsiktligt, utan att du haft för avsikt att dö?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },

       {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 0",
        "answer": null
    },

    {
        "id": "B16",
        "subid": " ",
        "text": " Har du försökt begå självmord (ta livet av dig)? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": null, 
        "title": null,
        "rules": " OM B16 BESVARAS MED NEJ, HOPPA TILL B17.",
        "answer": null
    },

    {
        "id": "B16",
        "subid": "a",
        "text": "Har du inlett ett självmordsförsök (för att ta livet av dig), men beslutat att avbryta och inte fullföljt försöket?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },

       {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 12",
        "answer": null
    },

 
    {
        "id": "B16",
        "subid": "b",
        "text": "Har du inlett ett självmordsförsök (för att ta livet av dig) men blivit avbruten och inte fullföljt försöket?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },

       {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 13",
        "answer": null
    },

  
    {
        "id": "B16",
        "subid": "c",
        "text": "Har du genomfört ett försök att begå självmord (ta livet av dig) helt och hållet så som du hade för avsikt att göra?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },

       {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 14",
        "answer": null
    },

 
    {
        "id": null,
        "subid": null,
        "text": " Med självmordsförsök menas att du gjort något som skulle kunna skada dig och med åtminstone en viss avsikt att dö.",
        "title": null,
        "rules": null,
        "answer": null
    },
 
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " OM NEJ, HOPPA TILL B17:",
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "[]  Hoppades på att bli räddad/överleva",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "[] Förväntade sig/avsåg att dö",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "B17",
        "subid": " ",
        "text": " TID, DAGLIGEN TILLBRINGAD MED SUICIDALA IMPULSER, TANKAR ELLER HANDLINGAR:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Tid, vanligen tillbringad per dag: ____ timmar ____ minuter.",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Minsta tid, tillbringad per dag: ____ timmar ____ minuter.",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Mesta tid, tillbringad per dag: ____ timmar ____ minuter.",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Under din livstid:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "B18",
        "subid": " ",
        "text": " Har du någonsin försökt begå självmord (ta livet av dig)?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },

       {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 4",
        "answer": null
    },

      {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Om JA:",
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text":  "Hur många gånger? ____________",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "När var det senaste självmordsförsöket?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Pågående: under de senaste 12 månaderna []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " I tidig remission: för 12 till 24 månader sedan []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " I remission: för mer än 24 månader sedan []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ”Självmordsförsök är ett självskadande beteende med åtminstone viss avsikt (>0) att dö som följd av handlingen. Evidens för att individen åtminstone till en viss grad hade för avsikt att ta sitt liv, kan vara explicita eller uttydas från beteendet eller omständigheterna. Det definieras som ett suicidförsök, t.ex. om det uppenbarligen inte är fråga om en olyckshändelse eller om personen tror att handlingen kan vara dödlig, även om avsikt förnekas.” (FDA Guidance for Industry Suicidal Ideation and Behavior Document [Vägledningsdokument för suicidala tankar och självmordsbeteende] 2012 och C-CASA definitionen) Posner K et al. Am J Psychiatry 2007; 164 (7): 1035-1043 & http://www.fda.gov/Drugs/GuidanceComplianceRegulatoryInformation/Guidances/default.htm/",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "B19",
        "subid": " ",
        "text": " Hur sannolikt är det att du kommer försöka ta ditt liv inom de kommande 3 månaderna, på en skala från  0–100 % ______%",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": " ALL SANNOLIKHET > 0 % VID B19 SKA KODAS SOM JA",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },

           {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " Poäng 13",
        "answer": null
    },



    {
        "id": "SUICIDALITET",
        "subid": " ",
        "text": " HAR MINST 1 AV OVANSTÅENDE FRÅGOR (UTOM B1) KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " OM JA, ADDERA DE SAMMANRÄKNADE POÄNGEN FÖR DE SVAR (B1–B19) SOM KODATS ”JA”, OCH SPECIFICERA GRADEN AV SUICIDALITET I DIAGNOSRUTAN:",
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": " 1–8 poäng Låg []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 9–16 poäng Måttlig []",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": " ≥17 poäng Hög []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " VISA OM SUICIDALITETEN ÄR PÅGÅENDE (SENASTE MÅNADEN) ELLER GÄLLER ETT FÖRSÖK NÅGONSIN I LIVET, ELLER BÅDA, GENOM ATT MARKERA I RÄTT RUTA ELLER GENOM ATT LÄMNA EN ELLER BÅDA TOMMA PÅGÅENDE = POSITIVT SVAR TILL NÅGON AV FRÅGORNA B1a TILL B16c ELLER NÅGON TID TILLBRINGAD PÅ FRÅGA B17. NÅGONSIN = B18 KODADES JA. SANNOLIKT INOM DEN NÄRMASTE TIDEN = B19 KODADES JA.",
        "title": null,
        "rules": null,
        "answer": null

    },

    {
        "id": null,
        "subid": null,
        "text": "Pågående []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Någonsin []",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": "Sannolikt inom den närmsta tiden []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "KOMMENTERA NEDAN VAD GÄLLER DIN BEDÖMNING AV DENNA PATIENTS AKTUELLA OCH NÄRA FRAMTIDA SUICIDALITET:",
        "title": null,
        "rules": null,
        "answer": null
    },


    {
        "id": "SUICIDALT BETEENDE",
        "subid": " ",
        "text": null,
        "title": null,
        "rules": " HAR B18 KODATS JA? ",
        "answer":
        [
            "NEJ                JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text":  null,
        "title": null,
        "rules": " OCH ETT JAKANDE SVAR PÅ",
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Inleddes den suicidala handlingen när patienten inte var i ett tillstånd av förvirring eller delirium?",
        "title": null,
        "rules": null,
        "answer": null
    },
  
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " OCH ETT JAKANDE SVAR PÅ",
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": " Begicks den suicidala handlingen utan politiska eller religiösa motiv?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OM JA, ANGE OM STÖRNINGEN ÄR PÅGÅENDE, I TIDIG REMISSION, ELLER I REMISSION.",
        "title": null,            
        "rules": null,
        "answer": null
    },

        {
        "id": null,
        "subid": null,
        "text": "Pågående []",
        "title": null,
        "rules": null,
        "answer": null
    },

        {
        "id": null,
        "subid": null,
        "text": " I tidig remission []",
        "title": null,
        "rules": null,
        "answer": null
    },

        {
        "id": null,
        "subid": null,
        "text": " I remission []",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": "C. MANISK/HYPOMAN EPISOD",
        "subid": " ",
        "text": null,
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ",
        "title": null,
        "rules": " (=> BETYDER: GÅ DIREKT TILL DIAGNOSRUTORNA, RINGA IN NEJ I DIAGNOSRUTORNA FÖR MANISK OCH HYPOMAN OCH FORTSÄTT MED NÄSTA AVSNITT)",
        "answer": null,
    },
  
    {
        "id": null,
        "subid": null,
        "text": " Har någon i din familj haft eller har manisk depressiv sjukdom eller bipolärt syndrom, eller har någon i din familj haft svängningar i humöret som behandlats med läkemedel såsom litium (Lithionit), valproat (Ergenyl, Absenor, Orfiril) eller lamotrigin (Lamictal)? DENNA FRÅGA ÄR INTE ETT KRITERIUM FÖR BIPOLÄRT SYNDROM MEN STÄLLS FÖR ATT ÖKA KLINIKERNS VAKSAMHET RÖRANDE RISK FÖR BIPOLÄRT SYNDROM.",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " OM JA, ANGE VEM: ______________________________________________________",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "C1",
        "subid": "a",
        "text": "Har du någon gång haft en period när du känt dig ”uppvarvad”, ”hög” eller ”hyper”, och så aktiv eller full av energi eller så uppfylld av dig själv att du råkat illa ut, eller så att andra tyckt att du inte var dig lik? (Alkohol- eller drogpåverkan räknas ej.) OM PATIENTEN ÄR FÖRBRYLLAD ELLER OSÄKER PÅ VAD DU MENAR MED ”UPPVARVAD” ELLER ”HÖG” ELLER ”HYPER”, FÖRTYDLIGA ENLIGT FÖLJANDE: Med ”uppvarvad” eller ”hög” eller ”hyper” menar jag: att vara upprymd, ha ökad energi eller aktivitet, behöva mindre sömn, ha snabb tankeverksamhet, vara full av idéer, ha ökad prestationsförmåga, motivation, kreativitet eller impulsivt beteende, ringa eller arbeta vet mycket eller spendera mer pengar.",
        "title": null,
        "rules": null,
         "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " OM NEJ, KODA NEJ PÅ C1b; OM JA, FRÅGA:",
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "Känner du dig för närvarande ”uppvarvad”, ”hög”, ”hyper” eller full av energi? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": "C2",
        "subid": "a", 
        "text": "Har du någon gång upplevt återkommande irritation under flera dagar så att du varit med i gräl eller slagsmål eller skrikit åt personer utanför din egen familj? Har du eller andra märkt att du varit mer lättretlig eller överreagerat, jämfört med andra? Detta gäller även situationer där du tyckte att din reaktion varit berättigad.",
        "title": null,
        "rules": null,
         "answer":
        [
            "NEJ              JA"
        ]
    },
    
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": "OM NEJ, KODA NEJ PÅ C2b; OM JA, FRÅGA:",
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "Upplever du en återkommande känsla av retlighet för närvarande? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": " HAR C1a ELLER C2a KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },

        {
        "id": null,
        "subid": null,
        "text": " =>", //Om nej - Nej i diagnosruta, sen nästa avsnitt
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": "C3",
        "subid": " ",
        "text": null,
        "title": null,
        "rules": " OM C1b ELLER C2b = JA: UNDERSÖK PÅGÅENDE EPISOD FÖRST OCH SEDAN DEN SVÅRASTE TIDIGARE EPISODEN, ANNARS",
        "title": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": null,        
        "rules": " OM C1b OCH C2b = NEJ: UNDERSÖK ENBART DEN SVÅRASTE TIDIGARE EPISODEN",
        "title": null,

        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " VID UNDERSÖKNING AV PÅGÅENDE EPISOD, INLED VARJE FRÅGA SOM FÖLJER:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Under de senaste dagarna, inklusive idag, när du kände dig upprymd och full av energi eller retlig:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " VID UNDERSÖKNING AV TIDIGARE EPISOD, INLED VARJE FRÅGA SOM FÖLJER:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Under en tidigare period på några dagar när du kände dig mest upprymd och mest full av energi eller mest retlig:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": null,
        "title":"Pågående episod ", //Gör om till kolumn
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": null,
        "title":"Tidigare episod", //Gör om till kolumn
        "answer": null
    },
    {
        "id": null,
        "subid": "a",
        "text": "Upplevde du att du kunde göra sådant som andra inte kunde, eller att du var en särskilt viktig person? OM JA, BE OM EXEMPEL.", //Ev. kanske man vill spränga in en anteckningsruta för sånt här 
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": " EXEMPLEN ÖVERENSSTÄMMER MED EN VANFÖRESTÄLLNING.",
        "title": null,
        "rules": null,  
        "answer": null
    },

        {
        "id": null,
        "subid": null,
        "text": "Pågående episod [] Nej [] Ja",
        "title": null,
        "rules": null,
        "answer": null
    },

    {


        "id": null,
        "subid": null,
        "text": " Tidigare episod [] Nej [] Ja",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "Behövde du mindre sömn (t.ex. att du kände dig utvilad efter bara några timmars sömn)? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": "c",
        "text": "Pratade du för mycket utan uppehåll, eller kände dig tvingad att fortsätta prata? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": "d",
        "text": "Märkte du att dina tankar gick väldigt fort eller löpte samman eller rusade eller rörde sig väldigt snabbt från ett ämne till ett annat?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },

    {
        "id": null,
        "subid": "e",
        "text": "Blev du lätt distraherad så att varje liten störning kunde få dig att tappa tråden? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": "f",
        "text": "Fick du en påtaglig ökning av intresse eller aktivitet, gällande arbete/studier, eller socialt eller sexuellt, eller blev du fysiskt eller psykiskt rastlös? Denna ökning av aktiviteten kan vara med eller utan något syfte.",
        "title": null,
        "rules": null,
         "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": "g",
        "text": "Var du så inriktad på att njuta av livet och ha roligt att du struntade i risker och konsekvenser (t.ex. överdriven shopping, vårdslös bilkörning eller ansvarslöst sexuellt beteende)?",
        "title": null,
        "rules": null,
         "answer":
        [
            "NEJ     JA"
        ]
    },

    {
        "id": "C3",
        "subid": " SUMMERING: ",
        "text": null,
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "RÖRANDE PÅGÅENDE EPISOD: ",
        "title": null,
        "rules": " OM C1b ÄR NEJ, HAR 4 ELLER FLER C3-SVAR INKLUSIVE C3f KODATS JA?",
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " OM C1b ÄR JA, HAR 3 ELLER FLER C3-SVAR INKLUSIVE C3f KODATS JA?",
         "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " RÖRANDE TIDIGARE EPISOD:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text":  null,
        "title": null,
        "rules": " OM C1a ÄR NEJ, HAR 4 ELLER FLER C3-SVAR INKLUSIVE C3f KODATS JA?",
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text":  null,
        "title": null,
        "rules": " OM C1a ÄR JA, HAR 3 ELLER FLER C3-SVAR INKLUSIVE C3f KODATS JA?",
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " KODA JA ENDAST OM OVANSTÅENDE 3 ELLER 4 SYMTOM INTRÄFFADE UNDER SAMMA TIDSPERIOD.",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " REGEL: UPPRYMT/EXPANSIVT HUMÖR KRÄVER BARA 3 C3-SYMTOM MEDAN ENBART RETLIGHET KRÄVER 4 C3-SYMTOM.",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": "C4",
        "subid": " ",
        "text": " Vilken är den längsta tidsperiod som dessa symtom har hållit i sig (större delen av dagen, nästan varje dag)? FASTSTÄLL DENNA VARAKTIGHET UTIFRÅN ALLRA FÖRSTA BÖRJAN TILLS DESS SYMTOMEN UPPHÖRT HELT, INTE BARA KULMINATIONEN.",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " a) Högst 3 dagar [] []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " b) 4 dagar eller längre [] []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " c) 7 dagar eller längre [] []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "C5",
        "subid": " ",
        "text": " Blev du intagen på sjukhus för dessa problem? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " OM JA, RINGA IN JA VID MANISK EPISOD FÖR DEN TIDSPERIODEN OCH GÅ TILL C7.",
        "answer": null
    },
    {
        "id": "C6",
        "subid": " ",
        "text": " Orsakade dessa symtom påtagliga problem hemma, på arbetet, socialt, i relationer, i dina studier eller på något annat viktigt sätt?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },

    {
        "id": "C7",
        "subid": " ",
        "text": " Hängde symtomen samman med en tydlig förändring i sättet du fungerat hittills, och som var annorlunda från sättet du vanligtvis är på?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
     {
        "id": " MANISK EPISOD",
        "subid": " ",
        "text": null,
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " HAR C3-SUMMERING OCH C7 OCH (C4c ELLER C5 ELLER C6 ELLER NÅGOT PSYKOTISKT SYMTOM VID K1 TILL OCH MED K8) KODATS JA",
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OCH",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " HAR ”UTESLUT ORGANISK ORSAK (O2-SUMMERING)” KODATS JA?",
        "answer":
        [
            "NEJ                 JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": " ANGE OM EPISODEN ÄR PÅGÅENDE OCH/ELLER TIDIGARE.",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " PÅGÅENDE []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " TIDIGARE []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "HYPOMAN EPISOD",
        "subid": " ",
        "text": null,
        "title": null,
        "rules": " HAR C3-SUMMERING KODATS JA OCH HAR C5 OCH C6 KODATS NEJ OCH C7 KODATS JA, HYPOMAN EPISOD OCH HAR ANTINGEN C4b ELLER C4c KODATS JA?",
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " OCH", 
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text":  null,
        "title": null,
        "rules": " HAR ”UTESLUT ORGANISK ORSAK (O2-SUMMERING)” KODATS JA?",
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " OCH",
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " HAR ALLA PSYKOTISKA SYMTOM VID K1 TILL OCH MED K8 KODATS NEJ?",
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": " ANGE OM EPISODEN ÄR PÅGÅENDE OCH/ELLER TIDIGARE.",
        "title": null,
        "rules": null,
        "answer": null
    },

        {
        "id": null,
        "subid": null,
        "text": " PÅGÅENDE [] NEJ [] JA",
        "title": null,
        "rules": null,
        "answer": null
    },

        {
        "id": null,
        "subid": null,
        "text": " TIDIGARE [] NEJ [] JA [] EJ UNDERSÖKT",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " OM JA FÖR PÅGÅENDE MANISK EPISOD, KODA NEJ FÖR PÅGÅENDE HYPOMAN EPISOD.", 
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " OM JA FÖR TIDIGARE MANISK EPISOD, KODA TIDIGARE HYPOMAN EPISOD SOM EJ UNDERSÖKT.",
        "answer": null
    },

    {
        "id": "HYPOMANA SYMTOM",
        "subid": " ",
        "text": null,
        "title": null,
        "rules": " HAR C3-SUMMERING OCH C4a KODATS JA OCH HAR C5 KODATS NEJ?", 
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null, 
        "rules": " ANGE OM EPISODEN ÄR PÅGÅENDE OCH/ELLER TIDIGARE.",
        "answer": null
    },

 
    {
        "id": null,
        "subid": null,
        "text":  null, 
        "title": null,
        "rules": " OM JA FÖR PÅGÅENDE MANISK ELLER HYPOMAN EPISOD, KODA NEJ FÖR NUVARANDE HYPOMANA SYMTOM.",
        "answer": null
    },


    {
        "id": null,
        "subid": null,
        "text": null, 
        "title": null,
        "rules": " OM JA FÖR TIDIGARE MANISK EPISOD ELLER TIDIGARE HYPOMAN EPISOD, KODA TIDIGARE HYPOMANA SYMTOM SOM EJ UNDERSÖKTA",
        "answer": null
    },   

    {
        "id": null,
        "subid": null,
        "text": " PÅGÅENDE [] NEJ [] JA",
        "title": null,
        "rules": null,
        "answer": null
    },

        {
        "id": null,
        "subid": null,
        "text": " TIDIGARE [] NEJ [] JA [] EJ UNDERSÖKT",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": "C8",
        "subid": " ",
        "text": " a) OM MANISK EPISOD HAR FÖRELEGAT, ANTINGEN PÅGÅENDE ELLER TIDIGARE, FRÅGA:",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": " Har du haft minst 2 av dessa (maniska) episoder som varat 7 dagar eller längre (C4c) i ditt liv (inklusive den pågående episoden om sådan föreligger)?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ            JA"
        ]
    },
 
    {
        "id": null,
        "subid": null,
        "text": " b) OM MANISK ELLER HYPOMAN EPISOD HAR FÖRELEGAT, ANTINGEN PÅGÅENDE ELLER TIDIGARE, FRÅGA:",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": " Har du haft minst 2 av dessa (hypomana) episoder som varat 4 dagar eller mer (C4b) i ditt liv (inklusive den pågående episoden)?",
        "title": null,
        "rules": null,
        "answer": 
        [
            "NEJ            JA"
        ]
    },
 
    {
        "id": null,
        "subid": null,
        "text": " c) OM KATEGORIN TIDIGARE ”HYPOMANA SYMTOM” FÖRELIGGER, FRÅGA: ",
        "title": null,
        "rules": null,
        "answer": null,

        
    },
    {
        "id": null,
        "subid": null,
        "text": " Har du haft de här hypomana symtomen som pågår under enbart 1 till 3 dagar (C4a) 2 eller fler gånger i ditt liv (inklusive den pågående episoden om sådan föreligger)?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ            JA"
        ]
    },
  
    {
        "id": null,
        "subid": null,
        "text": " D. PANIKSYNDROM",
        "title": "D. PANIKSYNDROM",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (=> BETYDER: GÅ DIREKT TILL DIAGNOSRUTAN, RINGA IN NEJ OCH FORTSÄTT MED NÄSTA AVSNITT)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " => ",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "D1",
        "subid": "a",
        "text": "Har du, vid mer än ett enstaka tillfälle, upplevt perioder eller attacker av plötslig ängslan, stark rädsla, obehag eller olust även i situationer där de flesta andra inte skulle känna så?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": " => ",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "Kulminerade attackerna inom 10 minuter från starten? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "D2",
        "subid": " ",
        "text": " Har det vid något tillfälle hänt att en sådan period eller attack börjat oväntat eller varit helt  oförutsägbar eller oprovocerad?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
  
    {
        "id": "D3",
        "subid": " ",
        "text": " Har du någon gång haft en sådan attack och därefter gått en månad eller mer med ihållande rädsla för att få en ny attack eller oro över följderna av attacken? Eller gjorde du någon betydande förändring i ditt beteende på grund av attackerna (t.ex. som att undvika ovana situationer, eller undvika att lämna hemmet, eller att undvika att gå och handla ensam, eller att göra saker för att undvika en panikattack, eller att oftare söka läkarvård eller akut sjukvård)?",
        "title": null,
        "rules": null,
        "answer":   
        [
            "NEJ      JA"
        ]
    },
    {
        "id": "D4",
        "subid": " ",
        "text": "Under den svåraste attack du kan komma ihåg:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": " ",
        "subid": "a",
        "text": "Slog hjärtat ojämnt, alldeles för fort eller bankande? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
    {
        "id": " ",
        "subid": "b",
        "text": "Blev händerna klibbiga eller svettades du? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
    {
        "id": null,
        "subid": "c",
        "text": "Blev du darrig eller skakig? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
    {
        "id": null,
        "subid": "d",
        "text": "Blev du andfådd eller hade svårt att andas eller en kvävande känsla? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
    {
        "id": null,
        "subid": "e",
        "text": "Fick du kväljningskänsla eller klump i halsen? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
    {
        "id": null,
        "subid": "f",
        "text": "Hade du värk, tryck- eller obehagskänsla i bröstet? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
    {
        "id": null,
        "subid": "g",
        "text": "Blev du illamående, hade magbesvär eller plötslig diarré? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
    {
        "id": null,
        "subid": "h",
        "text": "Kände du dig yr, ostadig, snurrig eller svimfärdig? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
    {
        "id": null,
        "subid": "i",
        "text": "Fick du värmevallningar eller köldrysningar? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
    {
        "id": null,
        "subid": "j",
        "text": "Fick du krypningar eller domningskänslor i kroppen? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
    {
        "id": null,
        "subid": "k",
        "text": "Kändes omgivningen konstig, overklig, lösryckt eller främmande, eller kändes det som om du var utanför eller helt eller delvis avskärmad från din kropp?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
  
    {
        "id": null,
        "subid": "l",
        "text": "Var du rädd att du höll på att tappa kontrollen eller bli galen? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
    {
        "id": null,
        "subid": "m",
        "text": "Var du rädd att du höll på att dö? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },
 
    {
        "id": "D5",
        "subid": null,
        "text": " HAR BÅDE D3 OCH 4 ELLER FLER D4-SVAR KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },


    {
        "id": null,
        "subid": null,
        "text": " PANIKSYNDROM NÅGONSIN",
        "title": null,
        "rules": null,
        "answer": null
    },

 
    {
        "id": "D6",
        "subid": null,
        "text": " Har du under den senaste månaden haft ihållande oro för att få ytterligare en attack eller oroat dig för följderna av attackerna, eller har du ändrat ditt beteende på något sätt på grund av attackerna?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ      JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": " PANIKSYNDROM PÅGÅENDE",
        "title": null,
        "rules": null,
        "answer": null
    },


    {
        "id": "PANIKSYNDROM",
        "subid": " ",
        "text": " HAR ANTINGEN D5 ELLER D6 KODATS JA, OCH HAR ”UTESLUT ORGANISK ORSAK (O2-SUMMERING)” KODATS JA?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ            JA"
        ]

    } ,   
  
    {
        "id": null,
        "subid": null,
        "text": " NÅGONSIN []",
        "title": null,
        "rules": null,
        "answer": null
    }, 

    {
        "id": null,
        "subid": null,
        "text": "PÅGÅENDE []",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": "E. AGORAFOBI",
        "subid": " ",
        "text": null,
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": " (=> BETYDER: GÅ DIREKT TILL DIAGNOSRUTAN, RINGA IN NEJ OCH FORTSÄTT MED NÄSTA AVSNITT)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "E1",
        "subid": " ",
        "text": " Känner du dig ängslig eller illa till mods på platser eller i situationer där, om du skulle få en panikattack eller panikartade eller generande symtom, det kanske inte finns tillgång till hjälp eller där det kan vara svårt att komma undan: till exempel i folksamlingar, köer, på öppna platser eller broar, när du är hemifrån på egen hand eller är hemma ensam, när du åker buss, tåg, bil eller allmänna färdmedel? =>",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": "E2",
        "subid": " ",
        "text": " HAR 2 ELLER FLER E1-SITUATIONER KODATS JA?",
        "title": null,
        "rules": null,
          "answer":
        [
            "NEJ         JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "E2",
        "subid": null,
        "text": " Framkallar sådana situationer nästan alltid rädsla eller ångest? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },

       {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": "E3",
        "subid": " ",
        "text": " Är du så rädd för dessa situationer att du undviker dem eller lider dig igenom dem, eller behöver ha sällskap med dig för att kunna stå ut?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },


    {
        "id": "E4",
        "subid": " ",
        "text": " Är den här rädslan eller ångesten överdriven eller oproportionerlig i förhållande till hur farlig situationen faktiskt är?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "E5",
        "subid": " ",
        "text": " Varade det här undvikande beteendet, eller den här rädslan eller ångesten i minst 6 månader?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "E6",
        "subid": " ",
        "text": " Orsakade dessa symtom påtagliga besvär eller problem hemma, på arbetet, i dina studier socialt eller på något annat viktigt sätt?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },

    {
        "id": " AGORAFOBI PÅGÅENDE",
        "subid": " ",
        "text": " HAR E6 KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                JA"
        ]
    },


    {
        "id": "F. SOCIAL ÅNGEST (Social fobi)",
        "subid": " ",
        "text": " (=> BETYDER: GÅ DIREKT TILL DIAGNOSRUTAN, RINGA IN NEJ OCH FORTSÄTT MED NÄSTA AVSNITT)",
        "title": null,
        "rules": null,
        "answer": null
    },
 
    {
        "id": "F1",
        "subid": null,
        "text": " Under den senaste månaden, har du haft ihållande rädsla och påtaglig ångest inför att iakttas eller stå i centrum för uppmärksamheten eller för att bli förödmjukad, utskämd eller avvisad? Detta gäller sådant som att tala inför andra, att äta inför eller med andra, att skriva när någon ser på, prestera något inför andra eller att umgås med andra.",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                   JA"
        ]
    },

       {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },

 
    {
        "id": null,
        "subid": null,
        "text": " EXEMPEL PÅ DYLIKA SOCIALA SITUATIONER ÄR",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " • INLEDA ELLER UNDERHÅLLA ETT SAMTAL",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " • DELTA I SMÅ GRUPPER",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " • DEJTA",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " • TALA INFÖR PERSONER I HÖG STÄLLNING",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " • GÅ PÅ FESTER",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " • TALA INFÖR PUBLIK",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " • ÄTA INFÖR ANDRA",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " • PRESTERA NÅGOT INFÖR ANDRA,",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " • ATT URINERA PÅ EN OFFENTLIG TOALETT, ETC",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": "F2",
        "subid": " ",
        "text": " Framkallar sådana sociala situationer nästan alltid rädsla eller ångest? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "F3",
        "subid": " ",
        "text": " Är du så rädd för dessa sociala situationer att du undviker dem eller lider dig igenom dem, eller behöver ha sällskap med dig för att kunna stå ut?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                   JA"
        ]
    },

    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "F4",
        "subid": " ",
        "text": " Är den här sociala rädslan eller ångesten överdriven eller orimlig i de här sociala situationerna?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                   JA"
        ]
    },
  
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "F5",
        "subid": " ",
        "text": " Har det här sociala undvikandet, rädslan eller ångesten varat i minst 6 månader? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "F6",
        "subid":  " ",
        "text": " Orsakade dessa sociala rädslor påtagliga besvär eller påverkade de din förmåga  att fungera på arbetet, i dina studier, socialt, i relationer, eller på något annat viktigt sätt?",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                   JA"
        ]
    },
  
    {
        "id": "SOCIAL ÅNGEST (Social fobi) PÅGÅENDE",
        "subid": " ",
        "text": null,
        "title": null,
        "rules": " HAR F6 KODATS JA",
         "answer": null,
        
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " och",
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": null,
        "title": null,
        "rules": " HAR ”UTESLUT ORGANISK ORSAK (O2-SUMMERING)” KODATS JA?",
        "answer": 
        [
            "NEJ                           JA"
        ]
    },


    {
        "id": null,
        "subid": null,
        "text": " ANMÄRKNING TILL INTERVJUAREN: VÄNLIGEN ANGE OM PATIENTENS RÄDSLA ÄR BEGRÄNSAD TILL ATT TALA ELLER FRAMTRÄDA INFÖR ANDRA.",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": null,
        "subid": null,
        "text": " BEGRÄNSAD TILL SOCIAL ÅNGEST ENDAST I SAMBAND MED FFRAMTRÄDANDEN []",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": " G. TVÅNGSSYNDROM",
        "subid": " "
        "text": " (=> BETYDER: GÅ DIREKT TILL DIAGNOSRUTAN, RINGA IN NEJ OCH FORTSÄTT MED NÄSTA AVSNITT)",
        "title": null,
        "rules": null,
        "answer": null
    },

    {
        "id": "G1",
        "subid": "a",
        "text": "Under den senaste månaden, har du besvärats av återkommande tankar, impulser, eller ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ          JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " inre bilder som var oönskade, motbjudande, olämpliga, påträngande eller obehagliga? ",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (T.ex. en känsla av att vara smutsig, förorenad eller ha baciller, eller rädsla för att smitta HOPPA TILL",
        "title": "T.ex. en känsla av att vara smutsig, förorenad eller ha baciller, eller rädsla för att smitta       HOPPA TILL",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " andra, eller rädsla för att skada någon fast det stör eller besvärar dig, eller rädsla för att G3a",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " reagera på någon impuls, eller rädsla eller vidskeplighet för att ha ansvar för sådant som",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " blir fel, eller sexfixering (tankar, bilder eller impulser), eller religiösa tvångstankar.)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "G1",
        "subid": "b",
        "text": "Under den senaste månaden, har du försökt att undertrycka de här tankarna, impulserna ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ          JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " eller bilderna, eller att neutralisera eller förminska dem med hjälp av någon annan tanke ",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " eller handling? HOPPA TILL",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " G3a",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (TA INTE MED SÅDANT SOM HELT ENKELT ÄR ÖVERDRIVEN ORO FÖR VERKLIGA PROBLEM.",
        "title": "M.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " INKLUDERA INTE OBSESSIONER SOM ÄR KLART RELATERAT TILL SAMLARBETEENDE,",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HÅRPLOCKNING, HUDPLOCKNING, DYSMORFOFOBI, ÄTSTÖRNINGAR, SEXUELLA AVVIKELSER,",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " SPELMANI ELLER ALKOHOL- ELLER DROGMISSBRUK. DETTA EFTERSOM PATIENTEN KAN HA NÖJE",
        "title": "K. DETTA EFTERSOM PATIENTEN KAN HA NÖJE",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " AV AKTIVITETEN OCH VILJA MOTSTÅ DEN ENBART PÅ GRUND AV DESS NEGATIVA KONSEKVENSER.)",
        "title": "R.)",
        "rules": null,
        "answer": null
    },
    {
        "id": "G2",
        "subid": null,
        "text": " Dök de upp i ditt medvetande om och om igen trots att du försökte strunta i dem eller bli ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ          JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " av med dem?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " obsessioner",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "G3",
        "subid": "a",
        "text": "Under den senaste månaden, har du – på grund av en fixering eller för att följa en strikt ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ          JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " regel – känt dig tvungen att göra något gång på gång, som att tvätta eller städa",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " överdrivet mycket, att räkna eller kontrollera saker om och om igen, eller att upprepa",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " eller arrangera saker, eller andra vidskepliga ritualer?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "G3",
        "subid": "b",
        "text": "Utförs de här ritualerna för att förebygga eller minska ångest eller obehag eller för att ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ          JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " hindra något dåligt från att hända och är de överdrivna eller orimliga?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " tvång",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR (G1a OCH G1b OCH G2) ELLER (G3a OCH G3b) KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ          JA"
        ]
    },
    {
        "id": "G4",
        "subid": null,
        "text": " Under den senaste månaden, har dessa tvångstankar och/eller tvångshandlingar ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                     JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " orsakat påtagliga besvär eller stört din förmåga att fungera hemma, på arbetet, i dina",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " studier, socialt eller i relationer, eller på något annat viktigt sätt, eller tog de mer än en TVÅNGSSYNDROM",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " timme om dagen i anspråk? PÅGÅENDE",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " INSIKT:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " och",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " GOD ELLER HYGGLIG []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR ”UTESLUT ORGANISK ORSAK (O2-SUMMERING)” KODATS JA? BRISTANDE []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (UNDERSÖK OM DET FINNS TVÅNGSSYMTOM SOM UPPKOMMIT INOM TRE VECKOR INGEN []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " EFTER EN INFEKTION) VANFÖRESTÄLLNINGAR []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ANGE GRADEN AV INSIKT OCH OM EPISODEN ÄR TICS-RELATERAD. TICS-RELATERAD []",
        "title": "D.                                          TICS-RELATERAD                []",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " H. POSTTRAUMATISKT STRESSYNDROM (PTSD)",
        "title": "H. POSTTRAUMATISKT STRESSYNDROM (PTSD)",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (=> BETYDER: GÅ DIREKT TILL DIAGNOSRUTAN, RINGA IN NEJ OCH FORTSÄTT MED NÄSTA AVSNITT)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "H1",
        "subid": null,
        "text": " Har du någonsin varit med om, eller varit vittne till eller varit tvungen att hantera en ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " extremt traumatisk händelse som inneburit dödsfall, dödshot, allvarlig skada eller",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " sexuellt våld mot dig eller någon annan?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " EXEMPEL PÅ TRAUMATISKA HÄNDELSER: ALLVARLIGA OLYCKSHÄNDELSER, SEXUELL",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ELLER FYSISK MISSHANDEL, TERRORISTATTACK, GISSLANTAGANDE, KIDNAPPNING,",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ELDSVÅDA, UPPTÄCKA ETT LIK, KRIG ELLER NATURKATASTROF, BEVITTNA ANHÖRIGS",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " VÅLDSAMMA ELLER PLÖTSLIGA DÖD, ELLER EN LIVSHOTANDE SJUKDOM.",
        "title": "M.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "H2",
        "subid": null,
        "text": " Efter den traumatiska händelsen, har du upprepade gånger återupplevt denna händelse ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " på ett ofrivilligt och psykiskt obehagligt sätt (som i återkommande drömmar relaterade",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " till händelsen, påträngande minnesbilder eller flashbacks som om det hände en gång till)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " eller har du fått intensiva fysiska eller psykiska reaktioner när du påmints om händelsen",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " eller utsatts för en liknande händelse?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "H3",
        "subid": null,
        "text": " Under den senaste månaden:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "a",
        "text": "Har du ansträngt dig för att undvika att tänka på eller minnas plågsamma detaljer eller ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " känslor som är relaterade till händelsen?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "Har du ansträngt dig för att undvika människor, samtal, platser, situationer, aktiviteter ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " eller saker som väcker obehagliga minnen av händelsen?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR 1 ELLER FLERA H3-SVAR KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": "H4",
        "subid": null,
        "text": " Under den senaste månaden:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "a",
        "text": "Har du haft svårigheter att minnas någon väsentlig del av traumat? (men inte p.g.a. eller ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " relaterat till huvudskada, alkohol eller droger).",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "Har du haft ihållande och orimligt negativa tankar om dig själv, om andra eller om ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " världen?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "c",
        "text": "Har du ständigt skuldbelagt dig själv eller andra på ett orimligt sätt för den traumatiska ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " händelsen?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "d",
        "text": "Har dina känslor alltid varit negativa (såsom rädsla, skräck, ilska, skuld eller skam)? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": "e",
        "text": "Har ditt intresse för att delta i aktiviteter som tidigare var betydelsefulla för dig minskat ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " betydligt?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "f",
        "text": "Har du känt dig isolerad från eller främmande inför andra människor? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": "g",
        "text": "Har du varit oförmögen att uppleva positiva känslor (såsom lycka, tillfredsställelse eller ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " kärlek)?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR 2 ELLER FLERA H4-SVAR KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": "H5",
        "subid": null,
        "text": " Under den senaste månaden:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "a",
        "text": "Har du varit särskilt irritabel eller fått vredesutbrott redan vid liten eller obefintlig ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " provokation?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "Har du varit mer vårdslös eller självdestruktiv? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": "c",
        "text": "Har du varit mer nervös eller överdrivet vaksam? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": "d",
        "text": "Har du varit mer lättskrämd? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": "e",
        "text": "Har du haft svårare att koncentrera dig? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ          JA"
        ]
    },
    {
        "id": null,
        "subid": "f",
        "text": "Har du haft svårare att sova? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ          JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR 2 ELLER FLER H5-SVAR KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ          JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "H6",
        "subid": null,
        "text": " Började alla de här problemen efter den traumatiska händelsen och pågick de i mer än ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ          JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " en månad?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "H7",
        "subid": null,
        "text": " Under den senaste månaden, har dessa problem orsakat påtagliga besvär eller stört din ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                 JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " förmåga att fungera hemma, på arbetet, i dina studier, socialt, i dina relationer, eller på",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " något annat viktigt sätt? POSTTRAUMATISKT",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " STRESSYNDROM (PTSD)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " och",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " PÅGÅENDE",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR ”UTESLUT ORGANISK ORSAK (O2-SUMMERING)” KODATS JA?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " MED",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ANGE OM DEPERSONALISATION, DEREALISATION ELLER EN FÖRDRÖJD DEBUT ÄR EN DEPERSONALISATION []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " DEL AV TILLSTÅNDET. DEREALISATION []",
        "title": "T.                                                                           DEREALISATION        []",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " FÖRDRÖJD DEBUT []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " I. ALKOHOLBRUKSYNDROM",
        "title": "I. ALKOHOLBRUKSYNDROM",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (=> BETYDER: GÅ DIREKT TILL DIAGNOSRUTAN, RINGA IN NEJ OCH FORTSÄTT MED NÄSTA AVSNITT)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "I1",
        "subid": null,
        "text": " Under de senaste 12 månaderna, har du druckit 3 eller fler glas alkoholhaltig dryck inom ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " en 3-timmarsperiod vid 3 eller fler tillfällen?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "I2",
        "subid": null,
        "text": " Under de senaste 12 månaderna:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "a",
        "text": "När du drack alkohol, brukade det bli så att du drack mer än du hade tänkt från början? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": "b",
        "text": "Har du upprepade gånger velat minska eller kontrollera din användning av alkohol? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " Har du försökt minska eller kontrollera din användning av alkohol, men misslyckats?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " VID JA PÅ NÅGON AV DESSA FRÅGOR, KODA JA.",
        "title": "A.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "c",
        "text": "De dagar du drack, lade du ner avsevärd tid på att skaffa alkohol, dricka eller att ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " återhämta dig från alkoholeffekterna?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "d",
        "text": "Kände du ett sug eller starkt begär eller längtan efter att dricka alkohol? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": "e",
        "text": "Ägnade du mindre tid åt att sköta dina plikter på arbetet, i dina studier eller hemma på ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " grund av ditt återkommande drickande?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "f",
        "text": "Om ditt drickande ledde till problem med din familj eller andra människor, fortsatte du ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " att dricka ändå?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "g",
        "text": "Har du varit alkoholpåverkad mer än en gång i någon situation där du eller andra varit ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " utsatt för en fysisk risk, exempelvis när du kört bil, motorcykel, båt, hanterat maskiner",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " etc.?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "h",
        "text": "Fortsatte du använda alkohol, även fast det var tydligt att alkoholen orsakade eller ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " förvärrade psykiska eller fysiska problem?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "i",
        "text": "Minskade du på, eller slutade helt med, viktiga arbetsuppgifter, sociala aktiviteter eller ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " fritidsnöjen på grund av ditt drickande?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "j",
        "text": "Behövde du dricka mycket mer för att få samma effekt som du fick när du först började ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " dricka alkohol eller fick du mycket mindre effekt med fortsatt användning av samma",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " mängd?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " k1 När du minskade på intensivt eller varaktigt drickande, fick du då något av följande: ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " 1. ökad svettning eller förhöjd puls []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 2. skakiga händer eller ”dille” []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 3. svårt att sova []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 4. illamående eller kräkningar []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 5. hörde eller såg du saker som andra människor inte kunde höra",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " eller se, eller hade du oförklarliga förnimmelser i huden []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 6. oro []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 7. ångest []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 8. krampanfall []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " VID JA PÅ 2 ELLER FLER AV DE OVANSTÅENDE 8, KODA k1 SOM JA.",
        "title": "A.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " k2 Drack du alkohol för att minska eller undvika abstinenssymtom eller för att undvika ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " baksmälla?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " k-SUMMERING: OM JA PÅ k1 ELLER k2, KODA JA ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ     JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR 2 ELLER FLER I2-SVAR FR.O.M. I2a T.O.M. I2j OCH I2k-SUMMERING KODATS ",
        "title": "R.O.M. I",
        "rules": null,
        "answer":
        [
            "NEJ                 JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " JA?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ALKOHOLBRUKSYNDROM",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " GÅNGNA 12 MÅNADERNA",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " DEFINITIONER FÖR ALKOHOLBRUKSYNDROM: ANGE OM:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " LINDRIG = 2–3 AV DE 12 SYMTOMEN LINDRIG []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " MEDELSVÅR = 4–5 AV DE 12 SYMTOMEN MEDELSVÅR []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " SVÅR = 6 ELLER FLER AV DE 12 SYMTOMEN SVÅR []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " I TIDIG REMISSION = KRITERIER HAR INTE UPPFYLLTS PÅ 3 TILL 12 MÅNADER",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " I VARAKTIG REMISSION = KRITERIER HAR INTE UPPFYLLTS PÅ 12 MÅNADER",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " I TIDIG REMISSION []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ELLER MER (BÅDA MED UNDANTAG FÖR KRITERIUM d. – (BEGÄR) OVAN). I VARAKTIG REMISSION []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " I KONTROLLERAD MILJÖ = DÄR TILLGÅNGEN PÅ ALKOHOL ÄR BEGRÄNSAD I KONTROLLERAD MILJÖ []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " J. SUBSTANSBRUKSYNDROM (EJ ALKOHOL)",
        "title": "J. SUBSTANSBRUKSYNDROM (EJ ALKOHOL)",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (=> BETYDER: GÅ DIREKT TILL DIAGNOSRUTAN, RINGA IN NEJ OCH FORTSÄTT MED NÄSTA AVSNITT)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Nu ska jag visa dig/läsa upp en lista på missbruksmedel eller läkemedel.",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "J1",
        "subid": "a",
        "text": "Har du under de senaste 12 månaderna tagit något av dessa medel mer än en enstaka ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " gång för att bli ”hög”, euforisk, påtänd, eller för att förändra ditt humör?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " RINGA IN VARJE MEDEL SOM ANVÄNTS:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Stimulantia: Amfetamin, metamfetamin, tjack, fattigmanskola, dos, speed, crystal, Dexedrine, Ritalin/Ritalina,",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " bantningspiller",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Kokain: Koks, kola, koka, base, diesel, rocks, crack",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Opiater: Heroin, varor, gryn, horse, jonk, smack, morfin, opium, metadon, kodein, China white, crocodile, metta,",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Fortalgesic, Dilaudid, Treo Comp, Citodon, Fentanyl, Subutex, OxyContin",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Hallucinogener: LSD, syra, meskalin, peyote, psilocybin, STP, svampar, ecstasy",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Dissociativa droger: PCP (fencyklidin, angel dust), eller ketamin, GHB, GHL, Q-benz, hawaiiansk, mexikansk",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Sniffningsmedel: Butan, boffa, lim, etylklorid, kväveoxidul, lustgas, amylnitrat, butylnitrat, poppers, bensin",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Cannabis: Hasch, röka, brunt, B, brass, holk, grönt, ganja, joint",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Sedativa: Stesolid, Sobril, Temesta, Xanor, Halcion, Rohypnol, roppar, flunitrazepam, fludder, bens, piller",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Diverse: Anabola steroider, dek, ryssfemmor, 4 comp, Khat, receptfria sömn- eller bantningspiller. Hostmedicin? Något",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " annat?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " VILKET/VILKA AV DESSA MEDEL HAR ANVÄNTS MEST? ________________________________________________",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " VILKET/VILKA AV DESSA MEDEL HAR SKAPAT MEST PROBLEM? _________________________________________",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " UNDERSÖK FÖRST KRITERIERNA NEDAN FÖR DEN DROGKLASS SOM GIVIT UPPHOV TILL STÖRST PROBLEM OCH MEST SANNOLIKT UPPFYLLER KRITERIERNA",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " FÖR SUBSTANSBRUKSYNDROM. OM FLERA DROGKLASSER HAR MISSBRUKATS, UNDERSÖK SÅ MÅNGA ELLER SÅ FÅ SOM KRÄVS FÖR PROTOKOLLET.",
        "title": "M. OM FLERA DROGKLASSER HAR MISSBRUKATS, UNDERSÖK SÅ MÅNGA ELLER SÅ FÅ SOM KRÄVS FÖR PROTOKOLLET.",
        "rules": null,
        "answer": null
    },
    {
        "id": "J2",
        "subid": null,
        "text": " Angående ditt bruk av (NAMNET PÅ VALD DROG/DROGKLASS), under de senaste 12",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " månaderna:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "a",
        "text": "De gånger då du använde drogen, blev det så att du använde mer ( NAMN PÅ VALD",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " DROG/DROGKLASS) än vad du hade tänkt från början?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": "b",
        "text": "Har du upprepade gånger försökt använda mindre av eller kontrollera din användning av",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (NAMN PÅ VALD DROG/DROGKLASS)? Har du försökt att använda mindre av eller kontrollera din",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " användning av (NAMN PÅ VALD DROG/DROGKLASS), men inte lyckats med detta?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " VID JA PÅ NÅGON AV DESSA FRÅGOR, KODA JA. ",
        "title": "A.                                                             NEJ              JA",
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": "c",
        "text": "De dagar då du använde mer (NAMN PÅ VALD DROG/DROGKLASS), lade du ner avsevärt med tid",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " på att skaffa eller använda (NAMN PÅ VALD DROG/DROGKLASS ) eller att återhämta dig från",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " verkningarna?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": "d",
        "text": "Kände du ett sug eller ett starkt begär eller längtan efter att använda (NAMN PÅ VALD",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " DROG/DROGKLASS)?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": "e",
        "text": "Ägnade du mindre tid åt att sköta dina plikter på arbetet, i dina studier eller hemma på",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " grund av din upprepade användning av (NAMN PÅ VALD DROG/DROGKLASS)?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": "f",
        "text": "Om din användning av (NAMN PÅ VALD DROG/DROGKLASS) ledde till problem med din familj",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " eller andra människor, fortsatte du att använda den ändå?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": "g",
        "text": "Har du använt drogen mer än en gång i någon situation där du eller andra varit utsatt för",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " en fysisk risk, exempelvis när du kört bil, motorcykel, båt, hanterat maskiner etc.?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": "h",
        "text": "Fortsatte du använda (NAMN PÅ VALD DROG/DROGKLASS), även fast det var tydligt att (NAMN PÅ",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " VALD DROG/DROGKLASS) orsakade eller förvärrade psykiska eller fysiska problem?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": "i",
        "text": "Minskade du på, eller slutade helt med, viktiga arbetsuppgifter, sociala aktiviteter eller",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " fritidsnöjen på grund av din användning av (NAMN PÅ VALD DROG/DROGKLASS)?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": "j",
        "text": "Behövde du använda (NAMN PÅ VALD DROG/DROGKLASS) mycket mer för att få samma effekt",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " som du fick när du först började använda den eller fick du mycket mindre effekt med",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " fortsatt användning av samma mängd?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " DET HÄR KRITERIET SKA KODAS NEJ OM LÄKEMEDLET ÄR FÖRSKRIVET OCH ANVÄNDS ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " UNDER MEDICINSKT ÖVERINSEENDE.",
        "title": "E.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " k1 När du minskade på intensiv eller varaktig användning av drogen, fick du då något av",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " följande abstinenssymtom:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " VID JA PÅ ERFORDERLIGT ANTAL ABSINENSSYMTOM FÖR VARJE DROGKLASS, KODA J2k1 SOM JA. ",
        "title": "A.           NEJ   JA",
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " DET HÄR KRITERIET SKA KODAS NEJ OM LÄKEMEDLET ÄR FÖRSKRIVET OCH ANVÄNDS",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " UNDER MEDICINSKT ÖVERINSEENDE.",
        "title": "E.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Sedativ, hypnotisk eller anxiolytisk (2 eller fler)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 1. ökad svettning eller förhöjd puls []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 2. skakiga händer eller ”dille” []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 3. svårt att sova []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 4. illamående eller kräkningar []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 5. hörde eller såg du saker som andra människor inte kunde höra",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " eller se, eller hade du oförklarliga förnimmelser i huden []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 6. oro []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 7. ångest []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 8. krampanfall []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Opiater (3 eller fler)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 1. nedstämdhet []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 2. illamående eller kräkningar []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 3. muskelvärk []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 4. rinnande näsa eller tårögdhet []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 5. vidgade pupiller, gåshud eller ”ståpäls”, eller svettningar []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 6. diarré []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 7. gäspningar []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 8. värmevallning []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 9. svårt att sova []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Stimulantia (2 eller fler)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 1. trötthet []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 2. livliga eller obehagliga drömmar []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 3. svårt att sova eller för mycket sömn []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 4. ökad aptit []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 5. känsla av eller enligt omgivningen fysisk eller mental tröghet []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Cannabis (3 eller fler)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 1. retlighet, ilska eller aggression []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 2. nervositet eller ångest []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 3. svårt att sova []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 4. minskad vikt eller aptit []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 5. rastlöshet []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 6. nedstämdhet []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 7. påtagliga besvär från något av följande:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " magont, skakningar eller ”dille”, svettningar, värmevallningar, frossa, huvudvärk []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " k2 Använde du (NAMN PÅ VALD DROG/DROGKLASS) för att minska eller undvika abstinenssymtom? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " J2k-SUMMERING: VID JA PÅ J2k1 ELLER J2k2, KODA JA ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR 2 ELLER FLER J2-SVAR FRÅN J2a TILL OCH MED J2k-SUMMERING KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                 JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " (J2k1 OCH J2k2 TILLSAMMANS RÄKNAS SOM ETT BLAND DESSA ALTERNATIV)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " SUBSTANSBRUKSYNDROM",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (namn på drog/drogklass)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " GÅNGNA 12 MÅNADERNA",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " DEFINITIONER FÖR SUBSTANSBRUKSYNDROM: ANGE OM:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " LINDRIG = 2–3 AV SYMTOMEN UNDER J2 LINDRIG []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " MEDELSVÅR = 4–5 AV SYMTOMEN UNDER J2 MEDELSVÅR []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " SVÅR = 6 ELLER FLER AV SYMTOMEN UNDER J2 SVÅR []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " I TIDIG REMISSION = KRITERIER HAR INTE UPPFYLLTS PÅ 3 TILL 12 MÅNADER",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " I VARAKTIG REMISSION = KRITERIER HAR INTE UPPFYLLTS PÅ 12 MÅNADER",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " I TIDIG REMISSION []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ELLER MER (BÅDA MED UNDANTAG FÖR KRITERIUM d. – (BEGÄR) OVAN). I VARAKTIG REMISSION []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " I EN KONTROLLERAD MILJÖ = DÄR TILLGÅNGEN PÅ SUBSTANSER/DROGER ÄR I KONTROLLERAD MILJÖ []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " BEGRÄNSAD",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " K. PSYKOTISKA SYNDROM OCH AFFEKTIVA SYNDROM MED PSYKOTISKA SYMTOM",
        "title": "K. PSYKOTISKA SYNDROM OCH AFFEKTIVA SYNDROM MED PSYKOTISKA SYMTOM",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "BE OM ETT EXEMPEL FÖR VARJE FRÅGA SOM BEJAKAS. KODA JA ENBART OM EXEMPLEN TYDLIGT VISAR PÅ TANKE- ELLER PERCEPTIONSMÄSSIG VANFÖRESTÄLLNING",
        "title": "S. KODA JA ENBART OM EXEMPLEN TYDLIGT VISAR PÅ TANKE- ELLER PERCEPTIONSMÄSSIG VANFÖRESTÄLLNING",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "ELLER OM DE ÄR KULTURELLT AVVIKANDE. SYFTET MED DETTA AVSNITT ÄR ATT KUNNA UTESLUTA PATIENTER MED PSYKOTISKA SYNDROM. DETTA AVSNITT KRÄVER",
        "title": "E. SYFTET MED DETTA AVSNITT ÄR ATT KUNNA UTESLUTA PATIENTER MED PSYKOTISKA SYNDROM. DETTA AVSNITT KRÄVER",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "ERFARENHET.",
        "title": "T.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Nu ska jag fråga dig om ovanliga upplevelser som en del människor har.",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "K1",
        "subid": "a",
        "text": "Har du någon gång trott att folk spionerade på dig, eller att någon konspirerade mot dig ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " eller försökte skada dig?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ANMÄRKNING: BE OM EXEMPEL FÖR ATT UTESLUTA ATT PATIENTEN FAKTISKT ÄR FÖRFÖLJD.",
        "title": "D.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "OM JA: Tror du för närvarande att det är så? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": "K2",
        "subid": "a",
        "text": "Har du någonsin trott att någon läste dina tankar eller kunde höra dina tankar eller att ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " du själv faktiskt kunde läsa någons tankar eller höra vad någon annan person tänkte?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "OM JA: Tror du för närvarande att det är så? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": "K3",
        "subid": "a",
        "text": "Har du någonsin trott att någon person eller kraft utanför dig själv satte in tankar i ditt ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " huvud som inte var dina egna, eller fick dig att bete dig på ett sätt som kändes",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " främmande för dig? Har du någonsin känt dig som om du vore besatt?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " KLINIKER: BE OM EXEMPEL OCH UTESLUT ALLT SOM INTE ÄR PSYKOTISKT.",
        "title": "T.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "OM JA: Tror du för närvarande att det är så? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": "K4",
        "subid": "a",
        "text": "Har du någonsin trott att du fått speciella meddelanden på TV, i radio, internet, ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " dagstidningar, tidskrifter eller böcker, eller att någon person som du inte varit",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " personligen bekant med varit särskilt intresserad av dig?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "OM JA: Tror du för närvarande att det är så? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": "K5",
        "subid": "a",
        "text": "Har dina vänner eller släktingar någonsin tyckt att sådant som du tror på är konstigt eller ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " ovanligt?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " INTERVJUARE: BE OM EXEMPEL. KODA JA ENBART OM EXEMPLEN ÄR UPPENBARA VANFÖRESTÄLLNINGAR",
        "title": "L. KODA JA ENBART OM EXEMPLEN ÄR UPPENBARA VANFÖRESTÄLLNINGAR",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " SOM INTE UNDERSÖKTS I K1–K4 SOM T.EX. RELIGIÖSA, DÖDS- ELLER SJUKDOMSRELATERADE ELLER",
        "title": "T.EX. RELIGIÖSA, DÖDS- ELLER SJUKDOMSRELATERADE ELLER",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " SOMATISKA VANFÖRESTÄLLNINGAR ELLER VANFÖRESTÄLLNINGAR OM GRANDIOSITET, SVARTSJUKA ELLER",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " SKULD, ELLER OM MISSLYCKANDE, BRIST, UNDERGÅNG ELLER NÖD, ELLER NIHILISTISKA",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " VANFÖRESTÄLLNINGAR.",
        "title": "R.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "OM JA: Tycker de för närvarande att det du tror är konstigt eller ovanligt? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": "K6",
        "subid": "a",
        "text": "Har du någonsin hört saker som andra inte kunnat höra, såsom röster? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " OM JA FÖR HÖRSELHALLUCINOS: Hörde du en röst som kommenterade dina tankar eller ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " ditt beteende, eller hörde du två eller fler röster som pratade med varandra?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "OM JA FÖR K6a: Har du hört ljud/röster under den senaste månaden? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " OM JA FÖR HÖRSELHALLUCINOS: Hörde du en röst som kommenterade dina tankar eller ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " ditt beteende, eller hörde du två eller fler röster som pratade med varandra?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "K7",
        "subid": "a",
        "text": "Har du någonsin haft syner i vaket tillstånd eller någon gång sett saker som andra inte ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " kunnat se?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " KLINIKER: UNDERSÖK OM DESSA ÄR KULTURELLT AVVIKANDE.",
        "title": "E.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "OM JA: Har du sett något sådant under den senaste månaden? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " KLINIKERNS BEDÖMNING",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "K8",
        "subid": "a",
        "text": "HAR PATIENTEN NÅGONSIN I DET FÖRFLUTNA UPPVISAT OSORTERAT, SPLITTRAT ELLER ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " URSPÅRAT TAL, ELLER MARKANT UPPLUCKRADE ASSOCIATIONER?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "K8",
        "subid": "b",
        "text": "UPPVISAR PATIENTEN FÖR NÄRVARANDE SPLITTRING, OSORTERAT ELLER URSPÅRAT TAL ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " ELLER MARKANT UPPLUCKRADE ASSOCIATIONER?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "K9",
        "subid": "a",
        "text": "HAR PATIENTEN NÅGONSIN I DET FÖRFLUTNA UPPVISAT DESORGANISERAT ELLER ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " KATATONT BETEENDE?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "K9",
        "subid": "b",
        "text": "VISAR PATIENTEN FÖR NÄRVARANDE DESORGANISERAT ELLER KATATONT BETEENDE? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": "K10",
        "subid": null,
        "text": "a HAR PATIENTEN NÅGONSIN I DET FÖRFLUTNA HAFT NEGATIVA SYMTOM, T.EX. ",
        "title": "T.EX.                         NEJ              JA",
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " BETYDANDE MINSKNING AV KÄNSLOUTTRYCK, KÄNSLOMÄSSIG AVTRUBBNING,",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " SPRÅKLIG TORFTIGHET (ALOGI) ELLER OFÖRMÅGA ATT STARTA ELLER FORTSÄTTA MED",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " MÅLINRIKTADE AKTIVITETER (AVOLITION)?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "K10",
        "subid": null,
        "text": "b ÄR NEGATIVA SCHIZOFRENISYMTOM SÅSOM PÅTAGLIG MINSKNING I KÄNSLOUTTRYCK ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " ELLER KÄNSLOMÄSSIG AVTRUBBNING, TORFTIGT SPRÅK (ALOGI) ELLER OFÖRMÅGA ATT",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " STARTA ELLER FORTSÄTTA MED MÅLINRIKTADE AKTIVITETER (AVOLITION),",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " FRAMTRÄDANDE UNDER INTERVJUN?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "K11",
        "subid": null,
        "text": "a HAR 1 ELLER FLERA ”a”-FRÅGOR FRÅN K1a TILL K7a KODATS JA?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OCH HAR ANTINGEN:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " EGENTLIG DEPRESSIONSEPISOD (PÅGÅENDE, ÅTERKOMMANDE ELLER TIDIGARE)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ELLER",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " MANISK ELLER HYPOMAN EPISOD (PÅGÅENDE ELLER TIDIGARE) KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": "  K13",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HUR LÄNGE VARADE FÖRSTÄMNINGSEPISODEN? _________",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HUR LÄNGE VARADE DEN PSYKOTISKA EPISODEN? _________",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OM EN SÅDAN FÖRSTÄMNINGSEPISOD FÖRELIGGER, MÅSTE DEN FÖRELIGGA UNDER",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " MERPARTEN AV DE PSYKOTISKA SYMTOMENS SAMMANLAGDA TID, INNEFATTANDE",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " AKTIVA PERIODER OCH RESTTILLSTÅND. KODA ANNARS NEJ PÅ K11a.",
        "title": "D. KODA ANNARS NEJ PÅ K",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OM SVARET ÄR NEJ PÅ K11a RINGA IN NEJ I BÅDA DIAGNOSRUTORNA",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " FÖR ”FÖRSTÄMNINGSSYNDROM MED PSYKOTISKA SYMTOM” OCH GÅ TILL K13.",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "Du berättade tidigare för mig att du har haft en period eller perioder när du känt dig ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                    JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " (deprimerad/upprymd/ständigt retlig).",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Var de uppfattningar och erfarenheter som du nyss beskrev (SYMTOM KODADE JA FRÅN FÖRSTÄMNINGS-",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " K1a TILL K7a) helt begränsade till tider då du kände dig deprimerad/upprymd/retlig? SYNDROM MED",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " PSYKOTISKA SYMTOM",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OM PATIENTEN NÅGONSIN HAFT EN PERIOD SOM VARAT I MINST 2 VECKOR MED DESSA",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " UPPFATTNINGAR ELLER ERFARENHETER (PSYKOTISKA SYMTOM) UTAN ATT SAMTIDIGT",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " VARA DEPRIMERAD/UPPSTÄMD/RETLIG, KODA NEJ FÖR DETTA SYNDROM. NÅGONSIN",
        "title": "M.                                     NÅGONSIN",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OM SVARET ÄR NEJ FÖR DENNA GRUPP AV SYNDROM, RINGA OCKSÅ IN NEJ FÖR K12",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OCH GÅ TILL K13.",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "K12",
        "subid": null,
        "text": "a HAR 1 ELLER FLERA ”b”-FRÅGOR FRÅN K1b TILL K7b KODATS JA OCH HAR ANTINGEN: ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " EGENTLIG DEPRESSIV EPISOD (PÅGÅENDE)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ELLER FÖRSTÄMNINGS-",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " MANISK ELLER HYPOMAN EPISOD (PÅGÅENDE) KODATS JA? SYNDROM MED",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " PSYKOTISKA SYMTOM",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OM SVARET ÄR JA FÖR DETTA SYNDROM (NÅGONSIN ELLER PÅGÅENDE), RINGA IN NEJ",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " FÖR K13 OCH K14 OCH GÅ VIDARE TILL NÄSTA AVSNITT.",
        "title": "T.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " PÅGÅENDE",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "K13",
        "subid": null,
        "text": " HAR 1 ELLER FLERA ”b”-FRÅGOR FRÅN K1b TILL K8b KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " OCH",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " PSYKOTISKT SYNDROM",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR 2 ELLER FLER ”b”-FRÅGOR FRÅN K1b TILL K10b KODATS JA?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " PÅGÅENDE",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OCH INTRÄFFADE MINST TVÅ AV DE PSYKOTISKA SYMTOMEN UNDER EN",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ENMÅNADSPERIOD?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OCH",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR ”UTESLUT ORGANISK ORSAK (O2-SUMMERING)” KODATS JA?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "K14",
        "subid": null,
        "text": " HAR K13 KODATS JA ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ              JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " ELLER",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " PSYKOTISKT SYNDROM",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (HAR 1 ELLER FLERA ”a”-FRÅGOR FRÅN K1a TILL K8a KODATS JA?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " NÅGONSIN",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OCH",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR 2 ELLER FLER ”a”-FRÅGOR FRÅN K1a TILL K10a KODATS JA",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OCH INTRÄFFADE MINST TVÅ AV DE PSYKOTISKA SYMTOMEN UNDER EN",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ENMÅNADSPERIOD?)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OCH",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR ”UTESLUT ORGANISK ORSAK (O2-SUMMERING)” KODATS JA?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " L. ANOREXIA NERVOSA",
        "title": "L. ANOREXIA NERVOSA",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (=> BETYDER: GÅ DIREKT TILL DIAGNOSRUTAN, RINGA IN NEJ OCH FORTSÄTT MED NÄSTA AVSNITT)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "L1",
        "subid": "a",
        "text": "Hur lång är du? ft tum",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " cm",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "Vad vägde du som lägst under de senaste 3 månaderna? pund",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " kg",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "c",
        "text": "VÄGER PATIENTEN LIKA MYCKET ELLER MINDRE ÄN TRÖSKELVÄRDET MOTSVARANDE ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ             JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " HANS/HENNES LÄNGD? (SE TABELLEN NEDAN)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Under de senaste 3 månaderna:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "L2",
        "subid": null,
        "text": " Har du, trots att du vägt så lite, försökt att inte gå upp i vikt eller att begränsa ditt matintag? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                  JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "L3",
        "subid": null,
        "text": " Har du varit väldigt rädd för att gå upp i vikt eller för att bli tjock fast du var underviktig? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ             JA"
        ]
    },
    {
        "id": "L4",
        "subid": "a",
        "text": "Har du tyckt att du varit för stor/tjock eller att någon del av din kropp varit för stor/tjock? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ             JA"
        ]
    },
    {
        "id": null,
        "subid": "b",
        "text": "Har din vikt eller kroppsform påverkat din självkänsla i hög grad? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ             JA"
        ]
    },
    {
        "id": null,
        "subid": "c",
        "text": "Har du upplevt din nuvarande låga vikt som normal eller för hög? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ             JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "L5",
        "subid": null,
        "text": " HAR 1 ELLER FLER L4-FRÅGOR KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ             JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR L5 KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                    JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " ANOREXIA NERVOSA",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " PÅGÅENDE",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " 2",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " M. BULIMIA NERVOSA",
        "title": "M. BULIMIA NERVOSA",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (=> BETYDER: GÅ DIREKT TILL DIAGNOSRUTORNA, RINGA IN NEJ I SAMTLIGA OCH FORTSÄTT MED NÄSTA AVSNITT)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "M1",
        "subid": null,
        "text": " Under de senaste tre månaderna, har du hetsätit eller proppat i dig stora mängder mat ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ             JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " under loppet av en 2-timmarsperiod?  M3",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "M2",
        "subid": null,
        "text": " När du hetsåt, kände du då att du förlorat kontrollen över ditt ätande? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ             JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "M3",
        "subid": null,
        "text": " Gjorde du något för att motverka eller förhindra att du gick upp i vikt, som att kräkas, ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ             JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " fasta, motionera eller ta laxermedel, lavemang, vätskedrivande medel eller andra",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " läkemedel? Gjorde du detta så ofta som en gång i veckan?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " KODA JA PÅ M3 ENDAST OM SVARET PÅ BÅDA DESSA M3-FRÅGOR ÄR JA.",
        "title": "A.",
        "rules": null,
        "answer": null
    },
    {
        "id": "M3",
        "subid": null,
        "text": "a Antal episoder per vecka av olämpliga kompensatoriska beteenden: _______",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Antal dagar per vecka med olämpliga kompensatoriska beteenden: _______",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "M4",
        "subid": null,
        "text": " Under de senaste 3 månaderna, har du hetsätit så ofta som en gång i veckan? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ             JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "M5",
        "subid": null,
        "text": " Påverkar din vikt eller kroppsform i hög grad din självkänsla? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ             JA"
        ]
    },
    {
        "id": "M6",
        "subid": null,
        "text": " UPPFYLLER PATIENTENS SYMTOM KRITERIERNA FÖR ANOREXIA NERVOSA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ             JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " ",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Hoppa till M8",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "M7",
        "subid": null,
        "text": " Inträffar hetsätandet bara när du väger under (__________pund/kg)? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ             JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " INTERVJUARE: I PARENTESEN OVAN, FYLL I TRÖSKELVÄRDET FÖR PATIENTENS LÄNGD ENLIGT",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " LÄNGD/VIKTTABELLEN I AVSNITTET OM ANOREXIA NERVOSA.",
        "title": "A.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                    JA"
        ]
    },
    {
        "id": "M8",
        "subid": null,
        "text": " HAR M5 KODATS JA OCH HAR ANTINGEN M6 ELLER M7 KODATS NEJ?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " BULIMIA NERVOSA",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " PÅGÅENDE",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR M7 KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                    JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " ANOREXIA NERVOSA",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Med",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " hetsätning/självrensning",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " PÅGÅENDE",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " UPPFYLLER PATIENTENS SYMTOM KRITERIERNA FÖR ANOREXIA NERVOSA?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                       JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " OCH",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ANOREXIA NERVOSA",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR M2 OCH M3 KODATS NEJ?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Med självsvält",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " PÅGÅENDE",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " DEFINITIONER FÖR ÄTSTÖRNING: ANGE OM:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " LINDRIG = 1–3 EPISODER AV OLÄMPLIGA KOMPENSATORISKA BETEENDEN LINDRIG []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " MEDELSVÅR = 4–7 EPISODER AV OLÄMPLIGA KOMPENSATORISKA BETEENDEN MEDELSVÅR []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " SVÅR = 8–13 EPISODER AV OLÄMPLIGA KOMPENSATORISKA BETEENDEN SVÅR []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " MYCKET SVÅR = 14 ELLER FLER EPISODER AV OLÄMPLIGA KOMPENSATORISKA MYCKET SVÅR []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " BETEENDEN",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " MB. HETSÄTNINGSSTÖRNING",
        "title": "B. HETSÄTNINGSSTÖRNING",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (=> BETYDER: GÅ DIREKT TILL DIAGNOSRUTAN, RINGA IN NEJ I DIAGNOSRUTAN OCH FORTSÄTT MED NÄSTA AVSNITT)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "MB 1 UPPFYLLER PATIENTENS SYMTOM KRITERIERNA FÖR ANOREXIA NERVOSA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "MB 2 UPPFYLLER PATIENTENS SYMTOM KRITERIERNA FÖR BULIMIA NERVOSA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "MB 3 M2 HAR KODATS JA ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "MB 4 M3 HAR KODATS JA ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "MB 5 M4 HAR KODATS JA ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " Under de senaste 3 månaderna av hetsätandet:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "MB 6a Åt du fortare än vanligt? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": "MB 6b Åt du tills du var obehagligt mätt? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": "MB 6c Åt du stora mängder mat fastän du inte var hungrig? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": "MB 6d Åt du i ensamhet därför att du skämdes över hur mycket du åt? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": "MB 6e Kände du dig skamsen, deprimerad eller äcklad över dig själv efter hetsätandet? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR 3 ELLER FLER MB6-FRÅGOR KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ               JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": "MB 7 Besvärar dig ditt hetsätande mycket? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ           JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": "MB 8 Antal episoder av hetsätande per vecka: ______",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Antal dagar av hetsätande per vecka: ______",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR MB7 KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                  JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " HETSÄTNINGSSTÖRNING",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " PÅGÅENDE",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " DEFINITIONER FÖR ÄTSTÖRNING: ANGE OM:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " LINDRIG = 1–3 EPISODER AV HETSÄTANDE PER VECKA LINDRIG []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " MEDELSVÅR = 4–7 EPISODER AV HETSÄTANDE PER VECKA MEDELSVÅR []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " SVÅR = 8–13 EPISODER AV HETSÄTANDE PER VECKA SVÅR []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " MYCKET SVÅR = 14 ELLER FLER EPISODER AV HETSÄTANDE PER VECKA MYCKET SVÅR []",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " N. GENERALISERAT ÅNGESTSYNDROM",
        "title": "N. GENERALISERAT ÅNGESTSYNDROM",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (=> BETYDER: GÅ DIREKT TILL DIAGNOSRUTAN, RINGA IN NEJ OCH FORTSÄTT MED NÄSTA AVSNITT)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "N1",
        "subid": "a",
        "text": "Har du varit överdrivet oroad eller ängslig för flera rutinsaker under de senaste 6 ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " månaderna?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OM PATIENTEN ÄR OSÄKER PÅ VAD DU MENAR, UNDERSÖK GENOM ATT FRÅGA (Tycker",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " andra att du är ”en som oroar sig”?) OCH BE OM EXEMPEL.",
        "title": "L.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "Infinner sig denna ängslan och oro de flesta dagar? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ÄR PATIENTENS ÄNGSLAN OCH ORO UTESLUTANDE BEGRÄNSAD TILL, ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " ELLER FÖRKLARAS DEN BÄTTRE AV, NÅGOT TIDIGARE GENOMGÅNGET SYNDROM?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "N2",
        "subid": null,
        "text": " Tycker du att det är svårt att kontrollera denna oro? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": "N3",
        "subid": null,
        "text": " KODA NEJ FÖR FÖLJANDE FRÅGOR OM SYMTOMEN ÄR BEGRÄNSADE TILL SYMTOM AV NÅGOT TIDIGARE",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " GENOMGÅNGET SYNDROM.",
        "title": "M.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " När du var ängslig under de senaste 6 månaderna, var det så att du för det mesta:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "a",
        "text": "Kände dig rastlös, uppskruvad eller spänd? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": "b",
        "text": "Hade du muskelspänningar? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": "c",
        "text": "Kände dig trött, svag eller lätt blev uttröttad? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": "d",
        "text": "Hade svårt att koncentrera dig eller blev alldeles tom i huvudet? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": "e",
        "text": "Kände du dig retlig? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": "f",
        "text": "Hade du problem med sömnen (svårt att somna, vaknade upp mitt i natten, vaknade ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " alldeles för tidigt på morgonen eller sov alldeles för mycket)?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR 3 ELLER FLER N3-SVAR KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ         JA"
        ]
    },
    {
        "id": "N4",
        "subid": null,
        "text": " Stör denna oro och dessa bekymmer avsevärt din förmåga att arbeta, att fungera socialt ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ                   JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " eller i relationer eller i andra viktiga områden av ditt liv, eller orsakar de avsevärda",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " besvär för dig? GENERALISERAT",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ÅNGESTSYNDROM",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR ”UTESLUT ORGANISK ORSAK (O2-SUMMERING)” KODATS JA?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " PÅGÅENDE",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " O. UTESLUTNING AV MEDICINSK, ORGANISK ELLER DROGRELATERAD GENES FÖR ALLA SYNDROM",
        "title": "O. UTESLUTNING AV MEDICINSK, ORGANISK ELLER DROGRELATERAD GENES FÖR ALLA SYNDROM",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OM PATIENTEN KODAT POSITIVT FÖR NÅGOT PÅGÅENDE SYNDROM ELLER EGENTLIG",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " DEPRESSIONSEPISOD ELLER FÖR MANISK ELLER HYPOMAN EPISOD, FRÅGA:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " Strax innan dessa symtom började:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "O1",
        "subid": "a",
        "text": "Tog du då några droger eller mediciner eller hade abstinens från några sådana? [] Nej [] Ja [] Osäkert",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "O1",
        "subid": "b",
        "text": "Hade du någon medicinsk sjukdom? [] Nej [] Ja [] Osäkert",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "O2",
        "subid": null,
        "text": " OM O1a ELLER O1b HAR KODATS JA, ÄR NÅGOT AV DEM EN SANNOLIK ORSAK TILL",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " PATIENTENS TILLSTÅND, ENLIGT KLINIKERNS BEDÖMNING? VID BEHOV STÄLLS ÖPPNA",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " TILLÄGGSFRÅGOR. [] Nej [] Ja [] Osäkert",
        "title": "R.                                                                            [] Nej     [] Ja   [] Osäkert",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " O2-SAMMANFATTNING: HAR EN ORGANISK/MEDICINSK ELLER DROGRELATERAD GENES",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " UTESLUTITS [] Nej [] Ja [] Osäkert",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " OM O2 HAR BESVARATS JA, DÅ BLIR O2-SUMMERING NEJ. OM O2 HAR BESVARATS NEJ, DÅ",
        "title": "J. OM O",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " BLIR O2-SUMMERING JA.",
        "title": "A.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " I ÖVRIGA FALL ÄR DET OSÄKERT.",
        "title": "T.",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " P. PERSONLIGHETSSYNDROM, ANTISOCIAL",
        "title": "P. PERSONLIGHETSSYNDROM, ANTISOCIAL",
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " (=> BETYDER: GÅ DIREKT TILL DIAGNOSRUTAN OCH RINGA IN NEJ)",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": "P1",
        "subid": null,
        "text": " Före 15 års ålder, hände det att du:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "a",
        "text": "Upprepade gånger skolkade från skolan eller rymde hemifrån över natten eller stannade ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ        JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " ute på kvällen/natten mot dina föräldrars regler?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "Upprepade gånger ljög, fuskade, lurade andra eller stal eller bröt dig in i någons bostad ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ        JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " eller bil?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "c",
        "text": "Startade slagsmål eller mobbade, hotade eller skrämde andra? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ        JA"
        ]
    },
    {
        "id": null,
        "subid": "d",
        "text": "Avsiktligt förstörde saker eller anlade bränder? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ        JA"
        ]
    },
    {
        "id": null,
        "subid": "e",
        "text": "Avsiktligt gjorde djur eller människor illa? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ        JA"
        ]
    },
    {
        "id": null,
        "subid": "f",
        "text": "Tvingade någon till en sexuell handling? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ        JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " =>",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " HAR 2 ELLER FLER P1-SVAR KODATS JA? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ        JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " KODA INTE JA FÖR NEDANSTÅENDE BETEENDEN OM DE ENBART BETINGAS AV POLITISKA",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " ELLER RELIGIÖSA MOTIV.",
        "title": "V.",
        "rules": null,
        "answer": null
    },
    {
        "id": "P2",
        "subid": null,
        "text": " Efter 15 års ålder, har det hänt att du:",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "a",
        "text": "Gjort olagliga saker eller saker som man kan bli gripen för, antingen du åkte fast eller ej ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ        JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " (till exempel vandalisering, snatteri, stöld, narkotikahandel eller något ännu grövre",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " brott)?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "b",
        "text": "Ofta ljugit eller bedragit andra människor för att du haft lust eller för vinnings skull eller ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ        JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " ljugit bara för skojs skull?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "c",
        "text": "Varit impulsiv och inte brytt dig om att planera framåt? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ        JA"
        ]
    },
    {
        "id": null,
        "subid": "d",
        "text": "Varit i slagsmål upprepade gånger eller angripit andra (inklusive slagsmål med din ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ        JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " maka/make/sambo eller dina barn)?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "e",
        "text": "Utsatt andra eller dig själv för fara utan att bry dig? ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ        JA"
        ]
    },
    {
        "id": null,
        "subid": "f",
        "text": "Upprepade gånger gjort sådant som andra skulle betrakta som ansvarslöst, som att inte ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ        JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " betala vad du är skyldig, avsiktligt struntat i att behärska dig eller avsiktligt låtit bli att",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": null,
        "text": " försörja dig?",
        "title": null,
        "rules": null,
        "answer": null
    },
    {
        "id": null,
        "subid": "g",
        "text": "Inte haft samvetskval efter att ha skadat andra, behandlat andra illa, ljugit, stulit eller ",
        "title": null,
        "rules": null,
        "answer":
        [
            "NEJ        JA"
        ]
    },
    {
        "id": null,
        "subid": null,
        "text": " vandaliserat?",
        "title": null,
        "rules": null,
        "answer": null
    }
]