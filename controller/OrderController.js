import {CustomerDB,ItemDB, OrderDB} from "../db/database.js";
import ItemModel from "../Model/itemModel.js";
import OrderModel from "../Model/orderModel.js";
import CustomerModel from "../Model/customerModel.js";

/////////////////////////////////////////////////////////////////
/*Populate Customer in Order CustomerID Selection */
/////////////////////////////////////////////////////////////////

function populateCustomerDropdown() {
    const customerSelect = document.getElementById("customer1");

    // Clear existing options if any
    customerSelect.innerHTML = "";

    // Loop through CustomerDB to create option elements
    CustomerDB.forEach(customer => {
        const option = document.createElement("option");
        option.value = customer.id;
        option.textContent = customer.id;
        customerSelect.appendChild(option);
    });

}
function handleCustomerSelection() {
    const customerSelect = document.getElementById("customer1");
    const nameField = document.getElementById("name1");
    const addressField = document.getElementById("address1");

    // Find the selected customer from CustomerDB
    const selectedCustomerId = customerSelect.value;

    const customer = CustomerDB.find(c => {
        return String(c.id) === String(selectedCustomerId);
    });
    // Update name and address fields if a customer is found
    if (customer) {
        nameField.value = customer.firstName;
        addressField.value = customer.address;
    } else {
        nameField.value = "";
        addressField.value = "";
    }
}

$("#customer1").on("click",function (){
    handleCustomerSelection();
});

/////////////////////////////////////////////////////////////////
/*Populate Item in Order ItemID Selection */
/////////////////////////////////////////////////////////////////

function populateItemDropdown(){
    const itemSelect = document.getElementById("item");

    itemSelect.innerHTML = "";

    ItemDB.forEach(item => {
        const option = document.createElement("option");
        option.value = item.Itemid;
        option.textContent = item.Itemid;
        itemSelect.appendChild(option);
    });
}

function handleItemSelection(){
    const itemSelect = document.getElementById("item");
    const ItemName = document.getElementById("itemName1");
    const price = document.getElementById("price1");
    const qty = document.getElementById("qty1");

    const selectedItemId = itemSelect.value;

    const item = ItemDB.find(i => {
        return String(i.Itemid) === String(selectedItemId);
    });


    if (item) {
        ItemName.value = item.itemName;
        price.value = item.price;
        qty.value = item.qty;
    } else {
        ItemName.value = "";
        price.value = "";
        qty.value = "";
    }
}
$("#item").on("click", function (){
   handleItemSelection();
});

/////////////////////////////////////////////////////////////////
/*Genarate Order Id */
/////////////////////////////////////////////////////////////////

function genarateOrderId () {
    if (OrderDB.length === 0) return 'O001'

    const lastOrderId = OrderDB[OrderDB.length - 1].orderId;
    const lastIdNum = parseInt(lastOrderId.slice(1),10);
    return 'O' + String(lastIdNum + 1).padStart(3, '0');
}

/////////////////////////////////////////////////////////////////
/*Content Load */
/////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    const orderIdField = document.getElementById("orderID");
    if (orderIdField) {
        orderIdField.value = genarateOrderId();
    } else {
        console.error("Order ID field not found");
    }


});

$("#Order").on("click",function (){
    populateCustomerDropdown();
    populateItemDropdown();
});
