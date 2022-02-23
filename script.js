var pennies, dollars, quarters, dimes, nickels, pennies;

function calculate(){
   pennies = document.getElementById("pennyInput").value;

    dollars = Math.floor((pennies / 100));
    document.getElementById("dollarsNeeded").innerHTML = dollars;
    pennies %= 100;

    quarters = Math.floor((pennies / 25));
    document.getElementById("quartersNeeded").innerHTML = quarters;
    pennies %= 25;

    dimes = Math.floor((pennies / 10));
    document.getElementById("dimesNeeded").innerHTML = dimes;
    pennies %= 10;

    nickels = Math.floor((pennies / 5));
    document.getElementById("nickelsNeeded").innerHTML = nickels;
    pennies %= 5;

    document.getElementById("penniesNeeded").innerHTML = pennies;

}
