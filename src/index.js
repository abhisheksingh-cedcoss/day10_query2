var productArr = [];

$(document).ready(function(){

    $("#addition").click(function(){
        add();
    });

    $("#display_table").click(function(){
        display();
    });

    $("#edit").click(function(){
      $("#addition").hide()
      $("#delete").hide()
        edit();
    });

    $("#delete").click(function(){
      Delete();
    });

    $("#update").click(function(){
      $("#edit").hide()
      $("#delete").show()
        update();
    });


});

function add(){

  var id = document.getElementById("id").value;
  var name = document.getElementById("fname").value;
  var price = document.getElementById("price").value;
  var quantity = document.getElementById("quantity").value;

  var obj = {
      id: id,
      name: name,
      price: price,
      quantity: quantity
  };


  productArr.push(obj);

  console.log(productArr);
}

function edit(){
  var e_dit = document.getElementById("id").value;
  for(var i =0; i<productArr.length; i++){
    if(productArr[i]== e_dit){
      $('#fname').val(productArr[i].name);
      $('#price').val(productArr[i].price);
			$('#quantity').val(productArr[i].quantity);

    }
  }
}


function update(){
  var u_id =document.getElementById("id").value;
	// console.log(u_id);
	for (var i = 0; i < productArr.length; i++) {
		if (productArr[i].id == u_id) {
			productArr[i].name = document.getElementById('fname').value;
			productArr[i].price = document.getElementById('price').value;
			productArr[i].quantity = document.getElementById('quantity').value;
			// console.log(productArr[i].name);
			// console.log(productArr[i].price);
		}
	}

  // display();
}




function Delete() {
	var d_id = document.getElementById("id").value;
	for (var i = 0; i < productArr.length; i++) {
		if (productArr[i].id == d_id) {
            if (confirm('Are you sure you want to delete'+ productArr[i].id +' row')) {
                   productArr.splice(i,1)
            }
		}
	}
}

function display(){
  var dis = '<table><tr><th>Id</th><th>Name</th><th>Price</th><th>Quantity</th></tr>';
	for (var i = 0; i < productArr.length; i++) {
		dis +=
			'<tr><td>' +
			productArr[i].id +
			'</td><td>' +
			productArr[i].name +
			'</td><td>' +
			productArr[i].price +
			'</td><td>' +
			productArr[i].quantity +
			'</td></tr>';
	}

	dis += '</table>';
	document.getElementById('display').innerHTML = dis;



}