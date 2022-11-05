
const name=(n)=> {
     console.log(n)
 }
 console.log("My Name")
 name('laiba')
 
 console.log("--------")
 
 const separate=(...args)=>{
 let s=args.length;    
 console.log("Total args = "+s)
 console.log(args)
 
 let even=[]
 let odd=[]
 
 for(let i=0;i<args.length;i++){
     if(args[i] %2===0){
         even.push(args[i]); 
     }
     else{
         odd.push(args[i])
     }
 }
 
 console.log("--------")
 console.log("Even Args");
 console.log(even)
 console.log("--------")
 console.log("Odd Args");
 console.log(odd)
 console.log("--------")
 console.log("Dividied Even Args by 2")
 let neweven=even.map(divide)
 function divide(num){
     return num / 2;
 }
 console.log(neweven)
 console.log("--------")
 console.log("Multiplied Odd Args by 2")
 let newodd=odd.map(multiply)
 function multiply(num){
     return num *2;
 }
 console.log(newodd)
 
 var obj={
     odd_num:odd,
     even_num:even
 }
 console.log("--------")
 console.log("Object of Odd and Even")
 console.log(obj)
 
 return obj;
 }
 
 separate(2,3,4,5,6,7,8)
 