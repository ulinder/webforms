/*
Koden används för att skapa ett gränsvärde för varje område på samma sätt som SCID-II sammanfattningsprotokoll.
Om patienten gett fler jakande svar än gränsvärdet motiverar detta vidare utredning av personlighetssyndrom.

Observera att formuläret medvetet är överinklusivt (ger avsiktligt ett antal falskt positiva svar).
D v s för att vara säker på att fånga alla med en personlighetsstörning så är gränsen för trolig diagnos avsiktligt lågt.
*/


//Resultatnamn: SCID-II Fobisk

rule efsob
when
  field: Field()
then
  result.add(
(3- field.get("q1")) +
(3- field.get("q2")) +
(3- field.get("q3")) +
(3- field.get("q4")) +
(3- field.get("q5")) +
(3- field.get("q6")) +
(3- field.get("q7"))
-7
);

end

/* Info till behandlare_
SCID-II Personlighetsformulär är endast förberedande frågor inför personlighetsintervju,
och är inte ett självständigt personlighetstest.

Om patienten svarar över gränsvärdet, i detta fall 4 av 7 kriterier, bör uppföljande personlighetsintervju övervägas.
*/


//Resultatnamn: SCID-II Osjälvständig

rule efsob
when
  field: Field()
then
  result.add(
(3- field.get("q1")) +
(3- field.get("q2")) +
(3- field.get("q3")) +
(3- field.get("q4")) +
(3- field.get("q5")) +
(3- field.get("q6")) +
(3- field.get("q7")) +
(3- field.get("q8"))
-8
);

end

/* Info till behandlare_
SCID-II Personlighetsformulär är endast förberedande frågor inför personlighetsintervju,
och är inte ett självständigt personlighetstest.

Om patienten svarar över gränsvärdet, i detta fall 5 av 8 kriterier, bör uppföljande personlighetsintervju övervägas.
*/

//Resultatnamn: SCID-II Tvångsmässig

rule efsob
when
  field: Field()
then
  result.add(
(3- field.get("q1")) +
(3- field.get("q2")) +
(3- field.get("q3")) +
(3- field.get("q4")) +
(3- field.get("q5")) +
(3- field.get("q6")) +
(3- field.get("q7")) +
(3- field.get("q8")) +
(3- field.get("q8"))
-8
);

end

/* Info till behandlare_
SCID-II Personlighetsformulär är endast förberedande frågor inför personlighetsintervju,
och är inte ett självständigt personlighetstest.

Om patienten svarar över gränsvärdet, i detta fall 5 av 8 kriterier, bör uppföljande personlighetsintervju övervägas.
*/




1
1
1
1
1
1
1
2
2

=11
-9 =2
