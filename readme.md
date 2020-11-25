# Inera webformulär hackverktyg
*Här beskrivs hur mini-ramverket för att skapa och manipulera och test filer från Webbformuläret på 1177*

För närvarande finns följande funktioner:
- Läsa in exporterat webformulär som automatiskt taggas med IDn.
- Som sedan kan redigeras via text-editor
- Möjlighet att applicera regler på fil
- Export av test-fil för automatiserad testning via test.rb
- Automatiserad UI-test av skattningar via Selenium WebDriver. 

## Tekniska baskrav
  - nodejs > 11.0
  - ruby 2.6+
  - Selenium::WebDriver



### Varningar
"Number" som utgör värden för olika svar i ett webformulär modifieras för att ges andra värden är de givna, då dessa är index-styrda. 


