//Ticket Pricing:
function getTicketPrice() {
    const age = parseInt(prompt("Please enter your age:"));
    let price;
    if (age <= 12) {
        price = 10; 
    } else if (age >= 13 && age <= 17) {
        price = 15; 
    } else if (age >= 18) {
        price = 20; 
    } else {
        alert("Invalid age entered.");
        return; 
    }
    alert(`Your ticket price is $${price}`);
}

//Weather Clothing Adviser:
function clothingAdviser() {
    const temperature = parseFloat(prompt("la temperature actuellement °C:"));
    const raining = confirm("Is it raining?");
    let advice;
    
    if (temperature < 0) {
        advice = "Attention il fait froid , habille toi bien !";
    } else if (temperature >= 0 && temperature < 15) {
        advice = "il fait frais quand meme une petite veste et un hoodie bien chaud fait l'affaire ";
    } else if (temperature >= 15 && temperature < 25) {
        advice = "Tu peut partir sur un t-shirt et une veste.";
    } else {
        advice = "Il fait bien chaud , mets le moins d'habits que tu puisse.";
    }

    if (raining) {
        advice += " et n'oublie pas your umbrella";
    }
    alert(advice);
}

//Power Function:

function power(x, n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 1 / power(x, -n);
  } else {
    return x * power(x, n - 1);
  }
}

//Fibonacci Sequence:
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
