function formReset() {
    document.getElementById("form").reset();
 }
 let select = document.getElementById("checkout");

 checkout.addEventListener("click", function (event){
    event.preventDefault();
    let size = $("#size option:selected").text();
    let crust = $("#crust option:selected").text();
    let topping = $("#toppings option:selected").text();
    let number = $("#number").val();
    let sizes = document.getElementById("sizes");
    let toppingss = document.getElementById("toppingss");
    let crusts = document.getElementById("crusts");
    let totals = document.getElementById("totals");
    let summary = document.getElementById("summary");
    // const delivery = 200;

    $(".bulbul").show();
    // $("#mum").show();
    quantity.innerHTML = (number);
    // qty.innerHTML = (number);
    sizes.innerHTML = (size);
    // pizzaSize.innerHTML = (size);
    toppingss.innerHTML = (topping);
    // toping.innerHTML = (topping);
    crusts.innerHTML = (crust);
    // sharif.innerHTML = (crust);
    // deliveries.innerHTML = (delivery);
    // shariff.innerHTML = (delivery);
    totals.innerHTML = totalPrice();
    summary.innerHTML = totalPrice();
    // sharifu.innerHTML = totalPrice();

    formReset();



 });

 const totalPrice = function () {
    let sizess = $("#size option:selected").val();
    let crustss = $("#crust option:selected").val();
    let toppingsz = $("#toppings option:selected").val();
    let numberss = $("#number").val();
    // let delivery = 200;
    let total = ((parseInt(sizess) + parseInt(crustss) + parseInt(toppingsz)) * numberss);
    return total;
 };