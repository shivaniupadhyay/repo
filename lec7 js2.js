var x;
function hello() {
var y=2;
return function main()
{
    x=y;

}
}
hello()();
console.log(x);

