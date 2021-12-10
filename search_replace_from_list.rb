# replace all occurances of given fromWord -> toWord
# according to a list where orders are given one per row.

target_to_change = ARGV.shift
order_list = ARGV.shift
raise 'Not enough arguments: search_replace_from_list.rb filetochange.txt orderlist.txt' if target_to_change.nil? or order_list.nil? 

def read_file(file)
  
end

target = File.open(Dir.pwd + ("/#{target_to_change}")).read

# IO.foreach("testfile") {|x| print "GOT ", x }
# start search and replace
IO.foreach(order_list) {|order| 
  pair = order.split(" ")
  target.gsub!(pair[0], pair[1])
}

File.open('gsubbed_file',"w"){|f| f.write target }
