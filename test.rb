require 'selenium-webdriver'
require 'test-unit'
require 'YAML'

class AqTest < Test::Unit::TestCase

  def setup
    @driver = Selenium::WebDriver.for :chrome
    @url = "https://demo.formular.1177.se/etjanst/167ff6e4-d4c7-4b39-879d-077c4155229e"
    @driver.manage.timeouts.implicit_wait = 10 
    @wait = Selenium::WebDriver::Wait.new(:timeout => 10) # seconds
    @testscript = YAML.load(File.open(__dir__ + "/output/LPFS-BF_2020-11-30_testfile.yml", "r"))
  end

  def test_aq 

    first_button = '/html/body/div/div/div/div[2]/div/div[2]/span[1]/button'
    second_button = '/html/body/div/div/div/div[2]/div/form/div[1]/div/div[4]/span[2]/button'
    save_form_button = '/html/body/div/div/div/div[2]/div/div/div[2]/span[1]/button'
    # general section
    @driver.get(@url)
    # sida 1
    
    @driver.find_element(:xpath => first_button).click
    # sida 2
    # @wait.until {@driver.find_element(:xpath => second_button) }
    sleep 2
    @driver.action.send_keys([:tab, :space]).perform
    

    @testscript.shift # remove first instance of page
      @testscript.each do |item| 
        @driver.action.send_keys([:tab, :space]).perform
        sleep 4 if item["type"] == "page"
      end                                                                                                                                 
    # final save
    @driver.action.send_keys([:tab, :space]).perform 
    sleep 4
    # Double tap to rid from printing results
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

