function countTax() {
    incomeEl = document.getElementById('income');
    wealthEl = document.getElementById('wealth');
    taxEl = document.getElementById('tax');
    
    // Using EPSILON to get correct round value.
    taxEl.value = (Math.round(((Number(incomeEl.value) * 0.35) + Number.EPSILON) * 100) + Math.round(((Number(wealthEl.value) * 0.25) + Number.EPSILON) * 100)) / 100;
}