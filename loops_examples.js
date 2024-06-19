var num=1;
while(num<=10){
console.log(num);
num=num+1;}
console.log("while loop completed");


//=========================================================

var num2=1;
console.log("print odd num between 1 to 20");
while(num2<=20){
    console.log(num2);
    num2=num2+2;
}
//==================================
console.log("print num betwwn 1 to 10");

for(var num3=1;num3<=10;num3++){
    console.log(num3)
}
//===================================
console.log("print all the num in array  using FOR EACH loop");
var array1=[4,5,6,7,8,9,10];
for (var num of array1)
    {
        console.log(num);
    }

    //==============
    console.log("print all num in array1 using for loop");
    for(var i=0;i< array1.length;i++)
        {
            console.log(array1[i]);
        }