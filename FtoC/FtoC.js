let Farenheit = Number(prompt("Farenheit"));
if (!Number.isNaN(Farenheit)){
        console.log("Farenheit = " + Farenheit)
        console.log("Celsius = " + (Farenheit-32)*5/9);}
else {
   
while (Number.isNaN(Farenheit)){
    console.log("not a number");
    let Farenheit = Number(prompt("Farenheit"));
    if (!Number.isNaN(Farenheit)){
        console.log("Farenheit = " + Farenheit)
        console.log("Celsius = " + (Farenheit-32)*5/9);
        break}} }
		