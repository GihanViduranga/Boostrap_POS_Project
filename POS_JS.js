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
})