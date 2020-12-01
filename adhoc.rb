require 'YAML'

@testscript = YAML.load(File.open(__dir__ + "/output/AQ_testfile.yml", "r"))
# @testscript.shift # remove first instance of page

p @testscript.count