require 'selenium-webdriver'
require 'test-unit'
require 'YAML'

DOCUMENTATION = "https://github.com/SeleniumHQ/selenium/wiki/Ruby-Bindings"
CHROME_DOCUMENTATION = "https://www.selenium.dev/selenium/docs/api/rb/Selenium/WebDriver/Chrome/Driver.html"
TESTNAME = ARGV.shift

class AqTest < Test::Unit::TestCase
  
  def setup
    # GENERAL SETTINGS
    raise 'No test' if TESTNAME.nil?
    puts "Loading #{TESTNAME}"
    
    @webform_json = JSON.parse(File.open("#{__dir__}/output/#{TESTNAME}.json", "r").read)
    Selenium::WebDriver::Chrome::Service.driver_path = __dir__ + "/lib/chromedriver"
    @driver = Selenium::WebDriver.for :chrome
    # @driver.manage.timeouts.implicit_wait = 8 # meaning how long the driver will wait to find an element
    @wait = Selenium::WebDriver::Wait.new(:timeout => 60) # seconds
  end

  def test_body

    first_page_next = '/html/body/div/div/main/div/div[3]/div[2]/button[1]'
    inside_form_next = '/html/body/div/div/main/div/div[2]/form/div[1]/div/div[3]/div[3]/div/div/button[1]'
    save_form_button = '/html/body/div/div/main/div/div[2]/div/div[3]/button[1]'
    save_form_button_element = '<button type="button" class="ic-forms__button iu-mt-500 iu-fr">Bekräfta dina svar</button>'
    # general section 
    
    # sida 1 
    @driver.get(@webform_json["testURL"])   
    @wait.until{ @driver.find_element(class: "ic-forms__button")}
    @driver.find_element(xpath: first_page_next).click
    
    @wait.until{ @driver.find_element(id: "b1q1")}
    @n_pages = @webform_json["pages"].count
    @webform_json["pages"].each do |page|  
      @driver.action.send_keys(:tab).perform # step into page with a tab
      page["page"]["questionBlocks"].each do |block|
        block["questions"].each do |question|

            next unless question["questionSuperior"].nil? # asume we can skip all follow-ups

            case question["input"]
              when "radio"
                (0).times do 
                  @driver.action.send_keys(:arrow_down).perform        
                end
                @driver.action.send_keys(:space).perform
              when "number"
                # @driver.find_element(id: "input-b1q#{block_q_id}").click
                @driver.action.send_keys( question["answerMin"].to_s.split("") ).perform
              when "checkbox" 
                  n_tabs = (question["answerAlternatives"].count-1)
                  tabs = Array.new(n_tabs, :tab)
                  @driver.action.send_keys(tabs).perform                
              when "textarea"
                @driver.action.send_keys( "Hej hej hej" ).perform
              when "text"
                @driver.action.send_keys( "5" ).perform
            end # case 
        
            @driver.action.send_keys(:tab).perform # common step away from all inputs with a tab

        end # questions
      end # blocks
      @driver.action.send_keys(:space).perform # asume we land on Nästa after each block/page end
      @wait.until{ test_page_counter(page["page"]["pageNumber"]+1) }
    end # pages

    # final save
    @driver.action.send_keys([:tab, :space]).perform 
    sleep 1.5
    # Double tap to rid from printing results
    @driver.save_screenshot("./output/#{TESTNAME}-results.png")

    @driver.find_element(:xpath => save_form_button).click
    sleep 10

    # @wait.until {@driver.find_element(:xpath => save_form_button) }
    # @driver.find_element(:xpath => save_form_button).click
    # sleep 1.5  

    @driver.save_screenshot('./output/exit-printscreen.png')

  end

  def teardown
    @driver.quit if @driver
  end
  
  private

    def test_page_counter(pagenr)
      target = "Sida #{pagenr} av #{@n_pages}"
      search = @driver.find_element(class: "iu-text-center").text
      puts "target: #{target}"
      puts "search: #{search}"
      
      Digest::MD5.hexdigest(target).eql? Digest::MD5.hexdigest(search)
    end


end
