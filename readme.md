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