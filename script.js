var pennies, dollars, quarters, dimes, nickels, pennies;

function calculate(){
   pennies = document.getElementById("pennyInput").value;

    dollars = (pennies / 100).toFixed(0);
    document.getElementById("dollarsNeeded").innerHTML = dollars;
    pennies %= 100;

    quarters = (pennies / 25).toFixed(0);
    document.getElementById("quartersNeeded").innerHTML = quarters;
    pennies %= 25;

    dimes = (pennies / 10).toFixed(0);
    document.getElementById("dimesNeeded").innerHTML = dimes;
    pennies %= 10;

    nickels = (pennies / 5).toFixed(0);
    document.getElementById("nickelsNeeded").innerHTML = nickels;
    pennies %= 5;

    document.getElementById("penniesNeeded").innerHTML = pennies;

}
