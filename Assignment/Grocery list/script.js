function calcTotal() {
    var priceElements = document.querySelectorAll('td[data-ns-test="price"]');
      
    var grandTotal = 0;
    for (var i = 0; i < priceElements.length; i++) {
        grandTotal += parseInt(priceElements[i].textContent);
    }

    var grandTotalRow = document.createElement('tr');
    grandTotalRow.setAttribute('data-ns-test', 'grandTotalRow');
    grandTotalRow.innerHTML = '<td>Grand Total</td><td data-ns-test="grandTotal">' + grandTotal + '</td>';

    
    var previousGrandTotalRow = document.querySelector('tr[data-ns-test="grandTotalRow"]');
    if (previousGrandTotalRow) {
        previousGrandTotalRow.remove();
    }

    document.querySelector('tbody').appendChild(grandTotalRow);
}