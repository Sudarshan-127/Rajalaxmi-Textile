function addRow() {
    const slno = document.getElementById('slno').value;
    const item = document.getElementById('item').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const discount = parseFloat(document.getElementById('discount').value);

    if (slno && item && quantity && rate >= 0 && discount >= 0) {
        const totalAmount = calculateTotal(quantity, rate, discount);

        const tableBody = document.getElementById('table-body');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${slno}</td>
            <td>${item}</td>
            <td>${quantity}</td>
            <td>${rate.toFixed(2)}</td>
            <td>${discount.toFixed(2)}</td>
            <td>${totalAmount.toFixed(2)}</td>
        `;

        tableBody.appendChild(row);

        updateTotalAmount(totalAmount);

        // Reset the inputs after adding the row
        document.getElementById('slno').value = '';
        document.getElementById('item').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('rate').value = '';
        document.getElementById('discount').value = '';
    } else {
        alert("Please fill out all fields correctly!");
    }
}

function calculateTotal(quantity, rate, discount) {
    return (quantity * rate) - discount;
}

let totalAmount = 0;

function updateTotalAmount(amount) {
    totalAmount += amount;
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

document.getElementById('generate-bill').addEventListener('click', function() {
    alert(`Bill Generated! Total: ₹${totalAmount.toFixed(2)}`);
});
