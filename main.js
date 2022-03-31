$(document).ready(function(){
    $("#yes").click(function(){
        $(".potea").hide();
        $("#checkout").hide();
        $(".address").show();
    });

});

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

    $(".bulbul").show();
    quantity.innerHTML = (number);
    sizes.innerHTML = (size);
    toppingss.innerHTML = (topping);
    crusts.innerHTML = (crust);
    totals.innerHTML = totalPrice();
    summary.innerHTML = totalPrice();

    formReset();



 });

 const totalPrice = function () {
    let sizess = $("#size option:selected").val();
    let crustss = $("#crust option:selected").val();
    let toppingsz = $("#toppings option:selected").val();
    let numberss = $("#number").val();
    let total = ((parseInt(sizess) + parseInt(crustss) + parseInt(toppingsz)) * numberss);
    return total;
 };

 let complete = document.getElementById("complete");

 complete.addEventListener("click", function (event){
    event.preventDefault();
    let address = document.getElementById("swali").value;
    let approval = document.getElementById("khalid");
    let delivery = 200;
    let summaries = document.getElementById("summary");

    $(".address").hide();


    approval.innerHTML = "Your order has been received! We Are dispatching our nduthi to, " + address;
   



 });