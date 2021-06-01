require 'selenium-webdriver'
require 'test-unit'
require 'YAML'

DOCUMENTATION = "https://github.com/SeleniumHQ/selenium/wiki/Ruby-Bindings"
CHROME_DOCUMENTATION = "https://www.selenium.dev/selenium/docs/api/rb/Selenium/WebDriver/Chrome/Driver.html"

class AqTest < Test::Unit::TestCase

  def setup
    
    # 1. POINT TO TESTFILE
    @testname = "pmm-skattningspaket"

    # GENERAL SETTINGS
    @test_instructions = YAML.load(File.open(__dir__ + "/output/testfiles/#{@testname}_testfile.yaml", "r"))
    Selenium::WebDriver::Chrome::Service.driver_path = __dir__ + "/lib/chromedriver"
    @driver = Selenium::WebDriver.for :chrome
    @driver.manage.timeouts.implicit_wait = 10 
    @wait = Selenium::WebDriver::Wait.new(:timeout => 10) # seconds
  end

  def test_aq 

    # first_button = '/html/body/div/div/div/div[2]/div/div[2]/span[1]/button'
    # second_button = '/html/body/div/div/div/div[2]/div/form/div[1]/div/div[4]/span[2]/button'
    save_form_button = '/html/body/div/div/main/div/div[2]/div/div[3]/button[1]'
    save_form_button_element = '<button type="button" class="ic-forms__button iu-mt-500 iu-fr">Bekräfta dina svar</button>'
    # general section 
    
    # sida 1 
    @driver.get(@test_instructions["url"])   
    sleep 1.5
    @driver.action.send_keys([:tab, :space]).perform # move past initial intro-screen 
    sleep 1.5
    
    # sida 2 
    @driver.action.send_keys([:tab, :space]).perform # move past SECOND consent-screen 
    @test_instructions["frågor"].shift # remove first instance of page
    sleep 1.5
    

    # Start iterating each item in test files: item => {type, id, testValue}
    @test_instructions["frågor"].each do |item| 
      
      # Steps activate question box
      @driver.action.send_keys([:tab, :space]).perform        
      if item["type"] == "page"
        sleep 1.5
      else
        (item["testValue"] - 1).times do 
          @driver.action.send_keys(:arrow_down).perform        
        end
      end # if page/question

    end # items

    # final save
    @driver.action.send_keys([:tab, :space]).perform 
    sleep 1.5
    # Double tap to rid from printing results
    @driver.save_screenshot("./output/#{@testname}-results.png")

    @driver.find_element(:xpath => save_form_button).click
    sleep 5

    # @wait.until {@driver.find_element(:xpath => save_form_button) }
    # @driver.find_element(:xpath => save_form_button).click
    # sleep 1.5  

    @driver.save_screenshot('./output/exit-printscreen.png')

  end

  def teardown
    @driver.quit  
  end
  
  private



end

