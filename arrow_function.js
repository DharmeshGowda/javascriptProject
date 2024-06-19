var add=(num1,num2)=> num1+num2;
console.log(add(5,6))

var welcome=()=>"welcome to JS";
var square=(num3)=>num3*num3;
var greeting=(name)=> "hello "+name;
var power = (num1, num2) => Math.pow(num1, num2);

console.log(welcome());
console.log(square(3));
console.log(greeting("dharmesh"));
console.log(add(5,5));
console.log(power(2,3));
//======================================

var isprimenum=(num)=>{
    var isprime=true;
    if(typeof num!=="number"){
        console.log(num+ " It is not a number");
    }
    else if (num==1){
        console.log(num+ " it is not a prime num or composite ");
    }
    else if (num>1)
        {
            for (var i=2;i<=num/2;i++)
                {
                    if (num%i==0){
                        isprime=false;
                        break;
                    }
                }
                
        }
else {
    console.log(num+ "its a negative number ");
}
return isprime;
}

console.log(isprimenum(12));
