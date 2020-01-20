function Welcome() {
    var name = prompt("Type your name here");
    document.getElementById("output_name").innerHTML = "Hi " + name + " ." + "<br /><br />" + " Welcome to RAINCOUVER-QUIZ !!!" + "<br />" + " First I goint to give one tip !!!" + "<br /><br />" + "When you want come back to home page just click on the image in the corne ." + "<br />" + " Now for you start the game, please click on 'next' !";
};


function Celsius() {
    var celsius = document.getElementById("celsius").value;
    result_celsius = ((celsius * 9/5)+32);
    document.getElementById("output_quiz").innerHTML = "The temperature in Fahrenheit is " + result_celsius.toFixed(0);
};
  
function Fahrenheit() {
    fahrenheit = document.getElementById("Fahrenheit").value;
    result_fahrenheit = ((fahrenheit -32)*5/9);
    document.getElementById("output_quiz").innerHTML = "The temperature in Celsius is " + result_fahrenheit.toFixed(0);
};

function refresh_1() {
    document.getElementById("output_quiz").innerHTML = " Give me another temperatures one more time . ";
    document.getElementById("celsius").value = "";
    document.getElementById("Fahrenheit").value = "";
};


function askAge() {
    let num = Number(prompt("How old are you?"));
    if (num<=20){
        document.getElementById("output_askAge").innerHTML = "You need to study hard !" ;           
    } else if(num<=30 && num>20) {
        document.getElementById("output_askAge").innerHTML = "Get Married !" ;
    } else if(num<=40 && num>30){
        document.getElementById("output_askAge").innerHTML = "Make a lot of money ! " ;
    } else if(num<=50 && num>40){
        document.getElementById("output_askAge").innerHTML = "Be successful !" ;
    } else {
        document.getElementById("output_askAge").innerHTML = "Travel a lot !" ;
    }
        
}

function refresh_2() {
    document.getElementById("output_askAge").innerHTML = " Say me your age one more time !";
};

function Sum() {
    var sum = 0;
    var a;
    var b;

    a = Number(document.getElementById("number1").value);
    b = Number(document.getElementById("number2").value);

    for (var i = a; i <= b; i++) {
      sum = sum + i;
    };
    document.getElementById("output").innerHTML = "The result is " + sum + " .";

};

function refresh_3() {
    document.getElementById("output").innerHTML = " Say me another numbers one more time !";
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
};

function prime(){
    var y=parseInt(prompt("Give me a number"));
    var i;
    var z=0;

    for (i=2; i<=y; i++ ) {
        if (y%i==0) {
        z++;
        }
    }
    if (z==1) {
        document.getElementById("output_prime").innerHTML="It is a prime number .";
    } else {
        document.getElementById("output_prime").innerHTML="It is not a prime number .";
    }
}

function refresh_4() {
    document.getElementById("output_prime").innerHTML = " Say me another number one more time !";
};

function Fibonacci(){
    // var num = parseInt(prompt("Tell me a number?"));
    // var var1 = 1;
    // var var2 = 1;
    // var var3; 

    // document.write(var1 + "<br />");
    // document.write(var2 + "<br />");

    // for(var i = 2; i < num; i++){
    //     var3 = var1 + var2;
    //     var1 = var2;
    //     var2 = var3;
    //     document.write(var3 + "<br />");
    var var1 = 1;
    var var2 = 1;
    var var3;
    var num = prompt("Tell me a number?");
    document.getElementById("output_fibonacci").innerHTML =  (var1 + ", ") + (var2 + ", ");
    for(var i = 2; i < num; i++){
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
        const html = document.getElementById("output_fibonacci").innerHTML ;
        document.getElementById("output_fibonacci").innerHTML = html + var3 + ". ";
    }
};

function refresh_5() {
    document.getElementById("output_fibonacci").innerHTML = " Say me another number one more time !";
};