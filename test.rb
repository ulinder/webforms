require 'selenium-webdriver'
require 'test-unit'
require 'YAML'

class AqTest < Test::Unit::TestCase

  def setup
    @driver = Selenium::WebDriver.for :chrome
    @url = "https://demo.formular.1177.se/etjanst/b638b166-f32e-4eba-a03b-7276d7c6ed05"
    @driver.manage.timeouts.implicit_wait = 10 
    @wait = Selenium::WebDriver::Wait.new(:timeout => 10) # seconds
    @testscript = YAML.load(File.open(__dir__ + "/output/AQ_2020-11-25T12:28:37.036Z_testfile.yml", "r"))
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
    @wait.until {@driver.find_element(:xpath => second_button) }
    @driver.find_element(:xpath => second_button).click
    sleep 2

    @testscript.shift # remove first instance of page
    @testscript.each_index do |index| 
      end_after_this = @testscript[index + 1].nil?
      give_input
      return if end_after_this
      sleep 2 if @testscript[index + 1]["type"] == "page"
    end
    # final save
    give_input
    sleep 5

    @wait.until {@driver.find_element(:xpath => save_form_button) }
    @driver.find_element(:xpath => save_form_button).click
    sleep 2  

    @driver.save_screenshot('ruby-printscreen.png')

  end

  def teardown
    @driver.quit  
  end
  
  private

    def give_input(value = 1)
      @driver.action.send_keys([:tab, :space]).perform
    end

end

