let a=3;
let b=5;
let c;

let result='let a=3;\n';
result+='let b=5;\n';
result+='let c;\n';
result+='----------\n';
result+='a + b = ' + (a+b) + '\n';
result+='a - b = ' + (a-b) + '\n';
result+='a * b = ' + (a*b) + '\n';
result+='a / b = ' + (a/b) + '\n';
result+='a % b = ' + (a%b) + '\n';
result+='(a += b): ' + (a+=b) + '\n';
result+='(a -= b): ' + (a-=b) + '\n';
result+='(a *= b): ' + (a*=b) + '\n';
result+='(a /= b): ' + (a/=b) + '\n';
result+='(a %= b): ' + (a%=b) + '\n';
result+='(a == b): ' + (a==b) + '\n';
result+='(a != b): ' + (a!=b) + '\n';
result+='(a > b): ' + (a>b) + '\n';
result+='(a < b): ' + (a<b) + '\n';
result+='(!a && !c): ' + (!a&&!c) + '\n';
result+='(!a || !c): ' + (!a||!c) + '\n';

alert(result);

let first_name="Allan";
let last_name="Mathew Sebastian";
let email="seba0031@algonquinlive.com";
let output;

output="My name is " + first_name + " " + last_name + ". You can contact me at " + email + ".";
console.log(output);
