function displayCart() {
  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price;

    const div = document.createElement("div");
    div.innerText = `${item.name} - $${item.price}`;
    cartContainer.appendChild(div);
  });

  const totalDiv = document.createElement("h3");
  totalDiv.innerText = "Total: $" + total;
  cartContainer.appendChild(totalDiv);
}
