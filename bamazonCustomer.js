const inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "finGerginger215$",
  database: "bamazon_DB"
});

function bamazon() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Items For Sale",
      choices: ["Post", "Bid", "Exit"]
    })
    .then(ans => {
      console.log(ans);
      switch (ans.action) {
        case "Post":
          inquirer
            .prompt([
              {
                name: "item",
                type: "input",
                message: "What item do you want to post?"
              },
              {
                name: "initial_bid",
                type: "input",
                message: "What is the starting bid for your item?"
              }
            ])
            .then(ans => {
              postItem(ans.item, ans.initial_bid * 1);
            });
          break;
        case "Bid":
          inquirer
            .prompt([
              {
                name: "item",
                type: "input",
                message: "What item do you want to bid?"
              },
              {
                name: "bid",
                type: "input",
                message: "How much do you want to bid?"
              }
            ])
            .then(ans => {
              console.log(ans.item);
              bidItem(ans.item, ans.bid * 1);
            });
          break;
        case "Exit":
          console.log("Good Bye");
          connection.end();
          break;
      }
    });
}

const postItem = (item, initial_bid) => {
  // need item's name and min bid amount
  let query = connection.query(
    "INSERT INTO items SET ? ",
    {
      item,
      initial_bid,
      highest_bid: initial_bid
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + "Item inserted! \n");
    }
  );
  bamazon();
};

const bidItem = (item, bidAmount) => {
  console.log(item);
  let query = connection.query(
    "SELECT * FROM items WHERE item= ? ",
    [item],
    function(err, res) {
      if (err) throw err;

      console.log(res);
      if (bidAmount > res[0].highest_bid) {
        updateHighestBid(item, bidAmount);
        console.log("Your bid is the highest one!");
      } else {
        console.log("Bid again!");
        bamazon();
      }
    }
  );
};

const updateHighestBid = (item, bidAmount) => {
  let query = connection.query(
    "UPDATE items SET ? WHERE ?",
    [
      {
        highest_bid: bidAmount
      },
      {
        item
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + "Item inserted! \n");
    }
  );
  bamazon();
};

bamazon();
