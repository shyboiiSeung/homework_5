function calculateTotal() {
    let americanoPrice = 4500;
    let lattePrice = 5000;
    let smoothiePrice = 5500;
    let milkshakePrice = 5000;
    let grapefruitPrice = 4000;
    
    let americanoQty = document.getElementById('americano').value;
    let latteQty = document.getElementById('latte').value;
    let smoothieQty = document.getElementById('smoothie').value;
    let milkshakeQty = document.getElementById('milkshake').value;
    let grapefruitQty = document.getElementById('grapefruit').value;
    
    let total = (americanoPrice * americanoQty) +
                (lattePrice * latteQty) +
                (smoothiePrice * smoothieQty) +
                (milkshakePrice * milkshakeQty) +
                (grapefruitPrice * grapefruitQty);
    
    document.getElementById('total').innerHTML = `Total: ${total} 원`;
}
