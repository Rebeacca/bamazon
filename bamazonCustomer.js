var mysql = require("mysql");
var inquirer = require("inquirer");

// Connects to the database.
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Root is default username.
    user: "root",
    // Password is empty string.
    password: "finGerginger215$",
    database: "bamazon_DB"
});


function store(){
    //prints the items for sale and their details
    connection.query('SELECT * FROM products', function(err, res){
      if(err) throw err;
    
      console.log('Bamazon')
    
      for(var i = 0; i<res.length;i++){
        console.log("ID: " + res[i].id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock);
        console.log('----------------------------------------------------------------------------------------')
      }
    
      console.log(' ');
      inquirer.prompt([
        {
          type: "input",
          name: "id",
          message: "Using the ID number, what would you like?",
          validate: function(value){
            if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
              return true;
            } else{
              return false;
            }
          }
        },
        {
          type: "input",
          name: "qty",
          message: "How many do you want?",
          validate: function(value){
            if(isNaN(value)){
              return false;
            } else{
              return true;
            }
          }
        }
        ]).then(function(ans){
          var purchasing = (ans.id)-1;
          var totalquantity = parseInt(ans.qty);
          var billedTotal = parseFloat(((res[purchasing].price)*totalquantity).toFixed(2));
    
          //check if quantity is sufficient
          if(res[purchasing].stock >= totalquantity){
            //after purchase, updates quantity in Products
            connection.query("UPDATE products SET ? WHERE ?", [
            {stock: (res[purchasing].stock - totalquantity)},
            {id: ans.id}
            ], function(err, result){
                if(err) throw err;
                console.log("Your total is $" + billedTotal.toFixed(2) + " ");
            });
    
            connection.query("SELECT * FROM department_name", function(err, deptRes){
              if(err) throw err;
            //   var index;
              for(var i = 0; i < deptRes.length; i++){
                if(deptRes[i].department_name === res[purchasing].department_name){
                    index = i;
                }
              }
              
              //updates totalSales in departments table
              connection.query("UPDATE department_name SET ? WHERE ?", [
              {department_name: res[purchasing].department_name}
              ], function(err, deptRes){
                  if(err) throw err;
                  console.log("Updated Dept Sales.");
              });
            });
    
          } else{
            console.log("Sorry, insufficient quantity!");
          }
    
          reprompt();
        })
    })
    }
    
    //asks if they would like to purchase another item
    function reprompt(){
      inquirer.prompt([{
        type: "confirm",
        name: "reply",
        message: "Would you like to purchase another item?"
      }]).then(function(ans){
        if(ans.reply){
          store();
        } else{
          console.log("See you soon!");
        }
      });
    }
    
    store();
    