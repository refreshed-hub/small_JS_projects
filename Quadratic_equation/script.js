function equation() {
    let a = document.getElementById('firstNumber').value;
    let b = document.getElementById('secondNumber').value;
    let c = document.getElementById('thirdNumber').value;
    let discriminant = (b * b) - 4 * (a * c);
    let rootOfDiscriminant = Math.sqrt(discriminant);
    document.getElementById('answer').value = discriminant;
    if (a == 0 && b == 0 && c == 0){
      document.getElementById('secondAnswer').value = "რაღაც არასწორად მოხდა!";
    }
    else if (discriminant < 0){
      document.getElementById('secondAnswer').value = "არ არის ამოხსნა.";
      document.getElementById('thirdAnswer').value = "-";
    }else if (discriminant == 0){
      document.getElementById('secondAnswer').value = "არ არის ამოხსნა.";
      document.getElementById('thirdAnswer').value = ((- b - rootOfDiscriminant) / (2 * a));
    }else if (discriminant > 0){
      document.getElementById('secondAnswer').value = "შესაძლებელია ჰქონდეს ორი ფესვი.";
      document.getElementById('thirdAnswer').value = ((- b + rootOfDiscriminant) / (2 * a)) + ";     " + ((- b - rootOfDiscriminant) / (2 * a));
    }
  }
  function cancel() {
    document.getElementById('firstNumber').value = null;
    document.getElementById('secondNumber').value = null;
    document.getElementById('thirdNumber').value = null;
    document.getElementById('answer').value = null;
    document.getElementById('secondAnswer').value = null;
    document.getElementById('thirdAnswer').value = null;
  }
  
