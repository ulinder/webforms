rule test0
when
  field : Field();
then
  globalContainer.put('total', 0.0 );
end

rule test1
when
  field: Field( get('q1') == 1 ||
                get('q2') == 1 ||
                get('q3') == 1 ||
                get('q4') == 1 ||
                get('q5') == 1 ||
                get('q6') == 1 ||
                get('q7') == 1 
               )
then
  Double total = ( Double ) globalContainer.get('total');
  total = total + 1;
  globalContainer.put('total', total );
end

rule total
when
  field : Field();
then
  Double total = ( Double ) globalContainer.get('total');
  result.add(total);
end



rule schizotyp
when
  f: Field();
then

Double total = ( 
( (f.get('q49')==1 || f.get('q50')==1 || f.get('q51')==1) ? 1.0: 0.0) + 
( (f.get('q52')==1 || f.get('q53')==1 || f.get('q54')==1) ? 1.0: 0.0) + 
( (f.get('q55')==1 || f.get('q56')==1 || f.get('q57')==1) ? 1.0: 0.0) + 
( (f.get('q41')==1 || f.get('q42')==1 || f.get('q43')==1 || f.get('q44')==1 || f.get('q48')==1) ? 1.0: 0.0) + 
((f.get('q58')==1) ? 1.0: 0.0) + 
((f.get('q59')==1) ? 1.0: 0.0) 
);
result.add(total);
end

