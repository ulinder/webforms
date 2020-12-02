# Inera formulärtjänst modifieringsverktyg
### Ett mini-ramverk för att skapa och redigera formulärfiler för formulärtjänst på 1177

För närvarande finns följande funktioner:
- Läsa in webformulär i JSON-format 
- Automatisk taggning av varje fråga med IDn av två olika format.
- Utskrift av testöverblick
- Möjlighet att applicera beräkningsregler till test
- Export av test-fil för automatiserad testning via test.rb
- Automatiserad UI-test av skattningar via Selenium WebDriver. 

## Tekniska baskrav
  - nodejs > 11.0
  - ruby 2.6+
  - Selenium::WebDriver



*Varningar*
"Number" som utgör värden för olika svar i ett webformulär modifieras för att ges andra värden är de givna, då dessa är index-styrda. 


