function conversaoDolar(){
  // Get the values from the input fields
  var real = document.getElementById('real').value;
  var dolar = document.getElementById('dolar').value;

  // Calculate the conversion based on the exchange rate and round to 2 decimal places
  var cotacao = (real * dolar).toFixed(2);
  
  // Display the result in an element with the id 'cotação'
 document.getElementById('cotacao').innerHTML = "O valor do dólar é: " + cotacao;

  // Clear the input fields
  limpaCampos();
}

function limpaCampos(){
  // Clear the values in the input fields with the ids 'real' and 'dolar'
  document.getElementById('real').value = '';
  document.getElementById('dolar').value = '';
}