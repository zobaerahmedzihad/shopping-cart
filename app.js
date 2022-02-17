function updateProductNumber(product, price, isIncreasing) {
  const productNumber = document.getElementById(product + "-number");
  let productQuantity = productNumber.value;

  if (isIncreasing == true) {
    productQuantity = parseInt(productQuantity) + 1;
  } else if (productQuantity > 0) {
    productQuantity = parseInt(productQuantity) - 1;
  }
  productNumber.value = productQuantity;
  // total calculation
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productQuantity * price;

  calculationTotal();
}

// SUB TOTAL , TAX AND GRAND TOTAL
function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productTotal = parseInt(productInput.value);
  return productTotal;
}

function calculationTotal() {
  const phoneTotal = getInputValue("iphone") * 1219;
  const caseTotal = getInputValue("case") * 59;

  // SUB TOTAL
  const subTotal = phoneTotal + caseTotal;
  document.getElementById("sub-total").innerText = subTotal;
  // TAX
  const tax = subTotal / 10;
  document.getElementById("tax").innerText = tax;

  // grand total
  const grandTotal = subTotal + tax;
  document.getElementById("grand-total").innerText = grandTotal;
}

// HANDLE IPHONE INCREASE
document
  .getElementById("iphone-increase")
  .addEventListener("click", function () {
    updateProductNumber("iphone", 1219, true);
  });

// HANDLE IPHONE DECREASE
document
  .getElementById("iphone-decrease")
  .addEventListener("click", function () {
    updateProductNumber("iphone", 1219, false);
  });

// HANDLE CASE INCREASE
document.getElementById("case-increase").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});

// HANDLE CASE DECREASE
document.getElementById("case-decrease").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
