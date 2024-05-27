function calculateTotal() {
    var americanoPrice = 4500;
    var lattePrice = 5000;
    var smoothiePrice = 5500;
    var milkshakePrice = 5000;
    var grapefruitPrice = 4000;
    
    var americanoQty = document.getElementById('americano').value;
    var latteQty = document.getElementById('latte').value;
    var smoothieQty = document.getElementById('smoothie').value;
    var milkshakeQty = document.getElementById('milkshake').value;
    var grapefruitQty = document.getElementById('grapefruit').value;
    
    var total = (americanoPrice * americanoQty) +
                (lattePrice * latteQty) +
                (smoothiePrice * smoothieQty) +
                (milkshakePrice * milkshakeQty) +
                (grapefruitPrice * grapefruitQty);
    
    document.getElementById('total').innerHTML = `Total: ${total} 원`;
}
