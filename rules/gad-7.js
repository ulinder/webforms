module.exports = [
    {
      calculationId: "summa",
      subject: "summa",
      descriptionCareActor: "Summering av alla frågor",
      descriptionSubjectOfCare: "",
      approvedForSubjectOfCare: false,
      formula: `outcome.set(
                (q.get('q1')-1)+
                (q.get('q2')-1)+
                (q.get('q3')-1)+
                (q.get('q4')-1)+
                (q.get('q5')-1)+
                (q.get('q6')-1)+
                (q.get('q7')-1)
                );`
    }]