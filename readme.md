# Inera formulärtjänst modifieringsverktyg
### Ett mini-ramverk för att skapa och redigera formulärfiler för formulärtjänst på 1177

För närvarande finns följande funktioner:
- Läsa in de exporterade json-filerna 
- Automatisk taggning av varje fråga med IDn av två olika format.
- Utskrift av testöverblick
- Applicera beräkningsregler till test
- Export av test-fil för automatiserad testning via test.rb
- Automatiserad UI-test av skattningar via Selenium WebDriver. 

## Tekniska baskrav
  - nodejs > 11.0
  - ruby 2.6+
  - Selenium::WebDriver

## FORM Structure
base > page > block > question > answer_alternative

## Bugs
+ Form extractor ger EN fråga för mycket

## Beräkningar - exempel
  when
  q: Questions()
  then
  Double score = ( 
  ( (q.get('q2',1)  == 2) ? 0 : (q.get('q1',1)-1) )+
  ( (q.get('q4',1)  == 2) ? 0 : (q.get('q3',1)-1) )+
  ( (q.get('q6',1)  == 2) ? 0 : (q.get('q5',1)-1) )+
  ( (q.get('q8',1)  == 2) ? 0 : (q.get('q7',1)-1) )+
  ( (q.get('q10',1) == 2) ? 0 : (q.get('q9',1)-1) )+
  ( (q.get('q12',1) == 2) ? 0 : (q.get('q11',1)-1) )+
  ( (q.get('q14',1) == 2) ? 0 : (q.get('q13',1)-1) )+
  ( (q.get('q16',1) == 2) ? 0 : (q.get('q15',1)-1) )+
  ( (q.get('q18',1) == 2) ? 0 : (q.get('q17',1)-1) ) 
  );
  outcome.set( score );
  end