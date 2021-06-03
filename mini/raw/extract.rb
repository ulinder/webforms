Encoding.default_internal = 'utf-8'
require 'json'
require 'yaml'

EXP_QUESTION_ID = /^[A-Z][0-9]+ /
EXP_TITLE = /[A-Z]\.\D*/
EXP_SUB_ID = /\s{2,}[a-z]\s{2,}/
EXP_NEJ = /(NEJ\s+JA)\D+/

@questions = []
@questions2 = []
@lines = []
@line = {id: nil, subid: nil, text: nil, title: nil, answer: nil}

@out = File.open("out.json", "w:UTF-8")
f = File.open("MINI_stripped.txt", "r:UTF-8")
@questions2 = []
@collect_array = []

def proc_line line # IDENTIFY WHAT KIND OF LINE AND BREAK APART INTO TYPES
  q = @line.clone 

   title = line.scan(EXP_TITLE).first
   qid = line.scan(EXP_QUESTION_ID).first
   subid = line.scan(EXP_SUB_ID).first
   answer = line.scan(EXP_NEJ).first

  line.sub!(EXP_QUESTION_ID,"")  
  line.sub!(EXP_SUB_ID,"")  
  line.sub!(EXP_NEJ,"")  

  line.gsub!(/\s{3,}/," ")
  line.gsub!(/\n/,"")

  q[:id] = qid.strip                    unless qid.nil?
  q[:title] = title.strip               unless title.nil?
  q[:subid] = subid.strip               unless subid.nil?
  q[:answer] = answer                   unless answer.nil?
  q[:text] = line                       unless line.nil?
  @questions << q 
end


# first iteration - build array from lines
f.each_line{ |line| proc_line line }

# second iteration 
@questions.each_index { |i| 
 
  # only include lines with something in either 
  unless ( @questions[i][:id].nil? and 
           @questions[i][:title].nil? and 
           @questions[i][:subid].nil? and 
           @questions[i][:answer].nil? and 
           @questions[i][:text].empty? ) 

          unless (@questions[i][:id].nil? or @questions[i][:subid].nil? or @questions[i][:title].nil?)
            @questions2 << @questions[i] # if @collect_array.count > 0
            @collect_array = [] 
            @collect_array << i 
          else 
            @questions2 << @questions[i] # if @collect_array.count > 0
            @collect_array << i 
          end
  end

}

@out << JSON.dump(@questions2)
@out.close


