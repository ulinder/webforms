html = File.new('./mini.html','r')

new_html = []
pattern = /\<h3\>.+\<\/h3\>/
first_find = true
id_list = []

html.each.with_index do |line, index|
  match = pattern.match(line)

  if match
    matchstr = match[0].split("<h3>")[1].split("</h3>")[0]
  
    matchstr.downcase!
    matchstr.delete!(" ")
    matchstr.delete!(".")
    matchstr = "div_#{matchstr}"
    id_list << matchstr
     
    new_html << "\n\t</div>\n\t<div class='collapse questionblock' id='#{matchstr}'>\n"
  end

  new_html << line 
  
end

File.open('mini_v2.html','w'){|f|
  f.write new_html.join("\n")
}

File.open('unique_ids','w'){|f|
  f.write id_list.join("\n")
}
