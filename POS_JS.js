let Dashboard = document.getElementById("Home");
let Customer = document.getElementById("Customer");
let Store = document.getElementById("Store");
let Order = document.getElementById("Order");
let Order_History = document.getElementById("Order_history");

let Dashboard_sec = document.getElementById("Dashboard");
let Customer_sec = document.getElementById("Customer_Sec");
let Store_sec = document.getElementById("Item_Sec");
let Order_sec = document.getElementById("Order_Sec");
let OrderHistory = document.getElementById("HistoryOfOrder");

Dashboard_sec.style.display = "block";
Customer_sec.style.display = "none";
Store_sec.style.display = "none";
Order_sec.style.display = "none";
OrderHistory.style.display = "none";

Dashboard.addEventListener("click", function (){
    Dashboard_sec.style.display = "block";
    Customer_sec.style.display = "none";
    Store_sec.style.display = "none";
    Order_sec.style.display = "none";
    OrderHistory.style.display = "none";
});

Customer.addEventListener("click", function (){
    Dashboard_sec.style.display = "none";
    Customer_sec.style.display = "block";
    Store_sec.style.display = "none";
    Order_sec.style.display = "none";
    OrderHistory.style.display = "none";
});

Store.addEventListener("click", function (){
    Dashboard_sec.style.display = "none";
    Customer_sec.style.display = "none";
    Store_sec.style.display = "block";
    Order_sec.style.display = "none";
    OrderHistory.style.display = "none";
});

Order.addEventListener("click", function (){
    Dashboard_sec.style.display = "none";
    Customer_sec.style.display = "none";
    Store_sec.style.display = "none";
    Order_sec.style.display = "block";
    OrderHistory.style.display = "none";
});

Order_History.addEventListener("click", function (){
    Dashboard_sec.style.display = "none";
    Customer_sec.style.display = "none";
    Store_sec.style.display = "none";
    Order_sec.style.display = "none";
    OrderHistory.style.display = "block";
});

///////////////////////////////////////////////////////
/*Customer Save & Table update*/
//////////////////////////////////////////////////////

let CustomerDB = [];

$("#SaveCustomer").on("click", function() {
    let First_Name = $("#firstName").val();
    let Last_Name = $("#lastName").val();
    let Email = $("#email").val();
    let Phone_Number = $("#mobile").val();
    let Cus_Address = $("#address").val();

    console.log()

    let customerData = {
        id : CustomerDB.length + 1,
        FirstName : First_Name,
        LastName : Last_Name,
        CusEmail : Email,
        PhoneNumber : Phone_Number,
        CustomerAddress : Cus_Address
    }


    CustomerDB.push(customerData);

    customerTable();
});

const customerTable = () => {
    $("#CustomerTable").empty();
    CustomerDB.map((item,index) => {
        let Data = `<tr>
            <td>${item.id}</td>
            <td>${item.FirstName}</td>
            <td>${item.LastName}</td>
            <td>${item.CusEmail}</td>
            <td>${item.CustomerAddress}</td>
            <td>${item.PhoneNumber}</td>
            </tr>`
        $("#CustomerTable").append(Data);
    });
}

///////////////////////////////////////////////////////
/*Item Save & Table update*/
//////////////////////////////////////////////////////

let ItemDB = [];

$("#SaveItem").on("click", function() {
    let Item_Name = $("#itemName").val();
    let Item_Price = $("#price").val();
    let Item_Quantity = $("#qty").val();

    console.log()

    let itemData = {
        id : ItemDB.length + 1,
        ItemName : Item_Name,
        ItemPrice : Item_Price,
        ItemQuantity : Item_Quantity
    }

    ItemDB.push(itemData);
    itemTable();
});

const itemTable = () => {
    $("#ItemTable").empty();
    ItemDB.map((item,index) => {
        let Data = `<tr>
            <td>${item.id}</td>
            <td>${item.ItemName}</td>
            <td>${item.ItemQuantity}</td>
            <td>${item.ItemPrice}</td>
            </tr>`
        $("#ItemTable").append(Data);
    });
}

