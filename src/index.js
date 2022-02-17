var products = [];


$(document).ready(function () {


  $("#addition").click(function () {

    var id = document.getElementById("id").value;
    var name = document.getElementById("fname").value;
    var price = document.getElementById("price").value;
    var quan = document.getElementById("quantity").value;

    var product = {
      id: id,
      name: name,
      price: price,
      quantity: quan,
    };

    products.push(product);

    console.log(products);

    console.log(display(products))
 });
$("#delete").click(function(){
   var x = document.getElementById("id").value;
    for(var i=0; i<products.length; i++){
        alert("show")
        if(products[i].id == x){
            alert("sure to delete")
            products.splice(i,1);
        }
    }
   
})


function display(products){
    var html = "<table> <tr><td>ID</td> <td>Name</td> <td>Price</td> <td>quantity</td>"

    for(var i=0; i<products.length; i++){
        html +=
        "<tr><td>" +
        products[i].id +
        "</td><td>" +
        products[i].name +
        "</td><td>" +
        "$" +
        products[i].price +
        "</td><td>" +
        products[i].quantity +
        '</td>';

    }
    html += "</table>";

    document.getElementById("products_list").innerHTML=html;







}

$("display_table").click(function(){
})

$("#update_product").click(function () {
    var v_id = document.getElementById("id").value;
    var v_name = document.getElementById("fname").value;
    var v_price = document.getElementById("price").value;
    var v_quantity = document.getElementById("quantity").value;
  
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == v_id) {
        products[i].id = v_id;
        products[i].name = v_name;
        products[i].price = v_price;
        products[i].quantity = v_quantity;
      }
    }
  });















});
