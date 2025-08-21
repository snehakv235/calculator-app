let main=document.querySelector(".container");
let inputs=document.querySelector(".input");
let buttons=document.querySelectorAll(".button")
let final=document.querySelector(".equal")
let clear=document.querySelector(".clear");
let theme=document.querySelector("#theme");
let dark=document.querySelector(".dark");
let back=document.querySelector(".back");
let square=document.querySelector(".square");
let operator=document.querySelector(".operator");


final.addEventListener("click",()=>{//this block works when we click on enter/=
   
   let currentNumber="";
let numbers=[];
let operators=[];
for(let i=0;i<inputs.value.length;i++){
   let char=inputs.value[i];
   if(char==="+"||char==="-"||char==="*"||char==="/"||char==="%")
      {
      numbers.push(Number(currentNumber))
      operators.push(char);
      currentNumber="";
   }else{
      currentNumber+=char
   }
}
//handling multiplication,division etc like higher priority operations
numbers.push(Number(currentNumber))
let result;
let i=0;
while(i<operators.length){
let operator=operators[i];
if(operator==="*"||operator=="/"||operator=="%"){
const num1=numbers[i];
const num2=numbers[i+1]
if(operator=="*"){
   result=num1*num2;
}else if(operator=="/"){
   result=num1/num2;
}else if(operator=="%"){
if(num2=="0"){
  result= "error";
}else{
   result=num1%num2;
}
}
numbers.splice(i,2,result);//splice method helps to remove the previous values from input box and display result
operators.splice(i,1);//operator also get removed
continue;
   }
      
   i++;
 }
 //handling addition and subtraction
result=numbers[0];
 for(let j=0;j<operators.length;j++){
   if(operators=="+"||operators=="-"){
      
      if(operators[j]=="+"){
         result+=numbers[j+1]
      }else if(operators[j]=="-"){
         result-=numbers[j+1] 
       
        
       }
   }
   }
 document.querySelector(".input").value=result;
})
//enabling enter key to perform equaloperation
document.addEventListener("keydown",function(event){
   if(event.key==="Enter"){
      event.preventDefault();
      final.click();
   }
})
//each value will be displayed in the input box
buttons.forEach(button => {
   button.addEventListener("click",()=>{
      inputs.value+=button.innerHTML;
   })
   
});


clear.addEventListener("click",()=>{
   inputs.value="";//this assign input value as empty when we click on AC
})
back.addEventListener("click",()=>{
inputs.value=inputs.value.slice(0,-1);//returns sliced values inside input box
})

square.addEventListener("click",()=>{
   let num=Number(inputs.value);//converting input to number
inputs.value=num**2;
})