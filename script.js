function conversaoDolar() {
  // Get the values from the input fields and parse them as floats
  var real = parseFloat(document.getElementById('real').value);
  var dolar = parseFloat(document.getElementById('dolar').value);

  // Check if the input values are valid numbers
  if (isNaN(real) || isNaN(dolar)) {
    alert('Por favor, insira valores numéricos válidos.');
    return;
  }

  // Calculate the conversion based on the exchange rate and round to 2 decimal places
  var cotacao = (real * dolar).toFixed(2);
  
  // Display the result in an element with the id 'cotacao'
  document.getElementById('cotacao').innerHTML = "O valor do dólar é: " + cotacao;

  // Clear the input fields
  limpaCampos();
}

function limpaCampos() {
  // Clear the values in the input fields with the ids 'real' and 'dolar'
  document.getElementById('real').value = '';
  document.getElementById('dolar').value = '';
}