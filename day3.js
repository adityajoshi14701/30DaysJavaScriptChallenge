// Activity 1
let num = 0;
if(num>0)
  console.log("positive");
else if(num<0)
    console.log("negative");
else
console.log("zero");


let age =20;
if(age>=18)
    console.log("Eligible");
else
console.log("Not Eligible");
// Activity 2
let x= 1,y=2,z=3;
if(x>y &&x>z)
  console.log(x);
else if(y>x && y>z)
  console.log(y);
else if(z>x&&z>y)
   console.log(z);
// Activity 3
let a=5;
switch (a) {
    case 1:
      console.log('Monday');
        break;
    case 2:
      console.log("Tuesday");
        break;
   case 3:
    console.log("Wednesday");
        break;
    case 4:
      console.log("Thursday");
        break;
        case 5:
          console.log("Friday");
          break;
          case 6:
            console.log("Saturday");
            break;
            case 7:
              console.log("Sunday");
              break;
    default:
      console.log("default case executed");
}
// Activity 4
let p = 2;
let ans = (p%2==0)?"Even":"Odd";
console.log(ans);
// Activity 5
let year = 2000;
if(year%4==0)
   {
    if(year%400==0)
       console.log("Leap Year")
     else 
     console.log("Not Leap Year")
   }