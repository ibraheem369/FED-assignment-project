const CART_KEY = "hoh_cart_v1";
function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
}
function updateCartCount(){
    const cart = getCart();
    const count = cart.reduce((sum, it) => sum + (it.qty || 1), 0);
    const el = document.getElementById("cartCount");
    if (el) el.textContent = String(count);
    
    if (el && count === 0) {
        el.style.display = 'none';
    } else if (el && count > 0) {
        el.style.display = 'flex';
    }
}
updateCartCount();