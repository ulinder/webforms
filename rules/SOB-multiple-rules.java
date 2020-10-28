rule Fobisk
when
  f: Field();
then
Double total = (
((f.get('q1')==1) ? 1.0: 0.0) +
((f.get('q2')==1) ? 1.0: 0.0) +
((f.get('q3')==1) ? 1.0: 0.0) +
((f.get('q4')==1) ? 1.0: 0.0) +
((f.get('q5')==1) ? 1.0: 0.0) +
((f.get('q6')==1) ? 1.0: 0.0) +
((f.get('q7')==1) ? 1.0: 0.0) +
);
result.add(total);
end

rule Osjälvständig
when
  f: Field();
then
Double total = (
((f.get('q8')==1) ? 1.0: 0.0) +
((f.get('q9')==1) ? 1.0: 0.0) +
((f.get('q10')==1) ? 1.0: 0.0) +
((f.get('q11')==1) ? 1.0: 0.0) +
((f.get('q12')==1) ? 1.0: 0.0) +
((f.get('q13')==1) ? 1.0: 0.0) +
((f.get('q14')==1) ? 1.0: 0.0) +
((f.get('q15')==1) ? 1.0: 0.0)
);
result.add(total);
end

rule Tvångsmässig
when
  f: Field();
then
Double total = (
((f.get('q16')==1) ? 1.0: 0.0) +
((f.get('q17')==1) ? 1.0: 0.0) +
((f.get('q18')==1) ? 1.0: 0.0) +
((f.get('q19')==1) ? 1.0: 0.0) +
((f.get('q20')==1) ? 1.0: 0.0) +
((f.get('q21')==1) ? 1.0: 0.0) +
((f.get('q22')==1) ? 1.0: 0.0) +
( (f.get('q23')==1 || f.get('q24')==1) ? 1.0: 0.0) +
);
result.add(total);
end

rule Passiv-Aggressiv
when
  f: Field();
then
Double total = (
( (f.get('q25')==1 || f.get('q26')==1) ? 1.0: 0.0) +
((f.get('q27')==1) ? 1.0: 0.0) +
((f.get('q28')==1) ? 1.0: 0.0) +
((f.get('q29')==1) ? 1.0: 0.0) +
((f.get('q30')==1) ? 1.0: 0.0) +
((f.get('q31')==1) ? 1.0: 0.0) +
((f.get('q32')==1) ? 1.0: 0.0)

);
result.add(total);
end

rule Depressiv
when
  f: Field();
then
Double total = (
((f.get('q33')==1) ? 1.0: 0.0) +
((f.get('q34')==1) ? 1.0: 0.0) +
((f.get('q35')==1) ? 1.0: 0.0) +
((f.get('q36')==1) ? 1.0: 0.0) +
( (f.get('q37')==1 || f.get('q38')==1) ? 1.0: 0.0) +
((f.get('q39')==1) ? 1.0: 0.0) +
((f.get('q40')==1) ? 1.0: 0.0)

);
result.add(total);
end

rule Paranoid
when
  f: Field();
then
Double total = (
((f.get('q41')==1) ? 1.0: 0.0) +
((f.get('q42')==1) ? 1.0: 0.0) +
((f.get('q43')==1) ? 1.0: 0.0) +
((f.get('q44')==1) ? 1.0: 0.0) +
( (f.get('q45')==1 || f.get('q46')==1) ? 1.0: 0.0) +
((f.get('q47')==1) ? 1.0: 0.0) +
((f.get('q48')==1) ? 1.0: 0.0)

);
result.add(total);
end

rule Schizotyp
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

rule Schizoid
when
  f: Field();
then
Double total = (
((f.get('q60')==1) ? 1.0: 0.0) +
((f.get('q61')==1) ? 1.0: 0.0) +
((f.get('q62')==1) ? 1.0: 0.0) +
((f.get('q63')==1) ? 1.0: 0.0) + 
((f.get('q58')==1) ? 1.0: 0.0) +
((f.get('q64')==1) ? 1.0: 0.0) +
((f.get('q65')==1) ? 1.0: 0.0)

);
result.add(total);
end

rule Histrionisk
when
  f: Field();
then
Double total = (
((f.get('q66')==1) ? 1.0: 0.0) +
((f.get('q67')==1 || f.get('q68')==1) ? 1.0: 0.0) +
((f.get('q69')==1) ? 1.0: 0.0) +
((f.get('q70')==1) ? 1.0: 0.0) +
((f.get('q71')==1) ? 1.0: 0.0) +
((f.get('q72')==1) ? 1.0: 0.0)


);
result.add(total);
end
