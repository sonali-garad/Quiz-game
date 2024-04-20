
const questionJSON =[
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      options: ['Two', 'Three', 'Four', 'Five'],
      question:
        "How many pieces   of bun are in a Mcdonald's Big Mac?",
    },
    {
      category: 'nation',
      id: 'qa-2',
      correctAnswer: 'Delhi',
      options: ['Delhi', 'Mumbai', 'Pune', 'Paranda'],
      question:
        "What is the capital of india?",
    },
    {
      category: 'nation',
      id: 'qa-3',
      correctAnswer: 'Rupee',
      options: ['pound', 'euro', 'dollar', 'Rupee'],
      question:
        "What is the currency of india?",
    },
    {
      category: 'gk',
      id: 'qa-4',
      correctAnswer: 'United States',
      options: ['Japan', 'Burundi', 'United States', 'China'],
      question:
        "What is the name of richest country in the world?",
    },
  ];

    let score=0;
    let currenQuestion = 0 ;
    const totalScore=questionJSON.length;
    let nextbtn = document.querySelector('#next');
    let rule = document.querySelector('.rule');
    let quetionEle = document.querySelector('#question');


    displayScreen();
    nextbtn.addEventListener('click',()=>
    {
      scoreEle.innerText=`Score : ${score} /${totalScore}`;
      nextQuestion();
    
    });

    function displayScreen()
    {
      const {correctAnswer, options, question} = questionJSON[currenQuestion];
      let shuffleOptions1 = shuffleOptions(options) ;



    quetionEle.innerText=question;

    optionEle = document.querySelector('#options');
    scoreEle = document.querySelector('#score');

  //populating all options 
    shuffleOptions1.forEach((opt) =>
  {
    const btn = document.createElement('button');
    btn.innerText = opt;
    optionEle.appendChild(btn);
 
//Event handling on button ..
btn.addEventListener('click', ()=>{
if(opt === correctAnswer)
{
  score++;
  //console.log(scr);
}
else
{
  score = score-0.25;
 // console.log(scr);
}

scoreEle.innerText=`Score : ${score} /${totalScore}`;
rule.textContent="";
nextQuestion();
// quetionEle.innerText=`Quiz Completed`;
// optionEle.innerText="";



// console.log(score);
// console.log(opt);

})

});
}

//
function nextQuestion()
{
  optionEle.innerText="";

  currenQuestion++;
// console.log(currenQuestion);

if (currenQuestion >= questionJSON.length)
{
  // nextbtn.remove();
  quetionEle.innerText=`Quiz Completed`;
optionEle.innerText="";
nextbtn.remove();

}
else
{
  displayScreen();
}
}
//shuffling the options 
function shuffleOptions(options)
{
for (let i =options.length-1 ; i>=0 ; i--)
{
  let j = Math.floor(Math.random()*i+1);

  [options[i],options[j]]=[options[j],options[i]];
  console.log(options);
}
return options;
}

//NEXT BUTTON HANDLING ..







