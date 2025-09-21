

function orderItem(itemName) {
    const orderList = document.getElementById('orderList');

    
    const li = document.createElement('li');
    li.textContent = `✔️ ${itemName} added to your order`;

    orderList.appendChild(li);
}



window.addEventListener('load', () => {
    const items = document.querySelectorAll('.menu-items .item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }, index * 200); 
    });
});



