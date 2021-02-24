require 'selenium-webdriver'
require 'test-unit'
require 'YAML'

class AqTest < Test::Unit::TestCase

  def setup
    
    # 1. POINT TO TESTFILE
    @testname = "testpaket"

    # GENERAL SETTINGS
    @test_instructions = YAML.load(File.open(__dir__ + "/output/testfiles/#{@testname}_testfile.yaml", "r"))
    @driver = Selenium::WebDriver.for :chrome
    @driver.manage.timeouts.implicit_wait = 10 
    @wait = Selenium::WebDriver::Wait.new(:timeout => 10) # seconds
  end

  def test_aq 

    first_button = '/html/body/div/div/div/div[2]/div/div[2]/span[1]/button'
    second_button = '/html/body/div/div/div/div[2]/div/form/div[1]/div/div[4]/span[2]/button'
    save_form_button = '/html/body/div/div/div/div[2]/div/div/div[2]/span[1]/button'
    # general section 
    @driver.get(@test_instructions["url"])
    # sida 1 
    
    @driver.find_element(:xpath => first_button).click
    # sida 2 
    # @wait.until {@driver.find_element(:xpath => second_button) }
    sleep 4 
    @driver.action.send_keys([:tab, :space]).perform
    

    @test_instructions["frågor"].shift # remove first instance of page
    # Start iterating each item in test files: item => {type, id, testValue}
    @test_instructions["frågor"].each do |item| 
      
      # Steps activate question box
      @driver.action.send_keys([:tab, :space]).perform        
      if item["type"] == "page"
        sleep 4 
      else
        (item["testValue"] - 1).times do 
          @driver.action.send_keys(:arrow_down).perform        
        end
      end # if page/question

    end # items

    # final save
    @driver.action.send_keys([:tab, :space]).perform 
    sleep 4
    # Double tap to rid from printing results
    @driver.save_screenshot("./output/#{@testname}-results.png")

    @driver.find_element(:xpath => save_form_button).click
    sleep 5

    # @wait.until {@driver.find_element(:xpath => save_form_button) }
    # @driver.find_element(:xpath => save_form_button).click
    # sleep 2  

    @driver.save_screenshot('./output/exit-printscreen.png')

  end

  def teardown
    @driver.quit  
  end
  
  private



end

