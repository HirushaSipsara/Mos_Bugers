function loginform1() {
    let username = document.getElementById("username1").value;
    let password = document.getElementById("password1").value;

    if (username === "Admin" && password === "Admin123") {
        window.location.href ='./OwnerHomePage.html';

    } else if (username === "Cashier" && password === "Cashier123") {
        window.location.href = './CashierHomePage.html';
    } else {
        alert("Wrong login");
    }
}
function loginform2() {
    let username = document.getElementById("username2").value;
    let password = document.getElementById("password2").value;

    if (username === "Admin" && password === "Admin123") {
        window.location.href ='./OwnerHomePage.html';

    } else if (username === "Cashier" && password === "Cashier123") {
        window.location.href = './CashierHomePage.html';
    } else {
        alert("Wrong login");
    }
}
function loginform3() {
    let username = document.getElementById("username3").value;
    let password = document.getElementById("password3").value;

    if (username === "Admin" && password === "Admin123") {
        window.location.href ='./OwnerHomePage.html';

    } else if (username === "Cashier" && password === "Cashier123") {
        window.location.href = './CashierHomePage.html';
    } else {
        alert("Wrong login");
    }
}

function logout() {
    window.location.href = './index.html';
}

function goback() {
    window.history.back();
}

function vieworderpage(){
    window.location.href = './CashierViewOrder.html'
}

function addcustomerpage(){
    window.location.href = './CashierAddCustomer.html'
}

function viewcustomerpage(){
    window.location.href = './CashierViewCustomers.html'
}

//Cashier Main Buttons

function cashierplaceorderpage(){
    window.location.href = './cashierplaceorder.html'
}
function cashierviewmenupage(){
    window.location.href = './CashierViewMenu.html'
}

//Cashier Sub Buttons

function cashierordercheckoutpage(){
    window.location.href = './CashierCheackOut.html'
}

function cashierordercheckoutpage(){
    window.location.href = './CashierCheackOut.html'
}

function cashierupdateorderpage(){
    window.location.href = './CashierUpdateOrder.html'
}

function cashierdeleteorderpage(){
    window.location.href = './CashierDeleteOrder.html'
}

function cashierupdatecustomerpage(){
    window.location.href = './CashierUpdateCustomer.html'
}

//Owner Main Buttons

function ownermanageinventory(){
    window.location.href = './OwnerManageInventory.html'
}

function ownergenatereport(){
    window.location.href = './OwnerGenarateReport.html'
}

function owneraddcashiers(){
    window.location.href = './OwnerAddCashier.html'
}

function ownerviewcashiers(){
    window.location.href = './OwnerViewCashiers.html'
}

//Owner Sub Buttons

function ownerviewinventory(){
    window.location.href = './OwnerViewInventory.html'
}

function owneradditem(){
    window.location.href = './OwnerAddInventory.html'
}

function ownerupdateitem(){
    window.location.href = './OwnerUpdateInventory.html'
}

function ownerdeleteitem(){
    window.location.href = './OwnerDeleteInventory.html'
}

function ownerupdatecashierpage(){
    window.location.href = './OwnerCashierUpdate.html'
}


let tempitem =JSON.parse(localStorage.getItem("ItemList")) || [
        {index:1,Itid:"IT1001",Itname:"Classic Burger(Large)",Itcategory:"Burgers",Itprice:1500,Itdiscount:0,Itqty:15,Itbday:"2025-07-04"},
        {index:2,Itid:"IT1002",Itname:"Classic Burger(Regular)",Itcategory:"Burgers",Itprice:750,Itdiscount:15,Itqty:15,Itbday:"2025-07-04"},
        {index:3,Itid:"IT1003",Itname:"Turkey Burger",Itcategory:"Burgers",Itprice:1600,Itdiscount:0,Itqty:10,Itbday:"2025-07-04"},
        {index:4,Itid:"IT1004",Itname:"Chicken Burger(Large)",Itcategory:"Burgers",Itprice:1400,Itdiscount:0,Itqty:15,Itbday:"2025-07-04"},
        {index:5,Itid:"IT1005",Itname:"Chicken Burger(Regular)",Itcategory:"Burgers",Itprice:800,Itdiscount:20,Itqty:15,Itbday:"2025-07-04"},
        {index:6,Itid:"IT1006",Itname:"Cheese Burger(Large)",Itcategory:"Burgers",Itprice:1000,Itdiscount:0,Itqty:10,Itbday:"2025-07-04"},
        {index:7,Itid:"IT1007",Itname:"Cheese Burger(Regular)",Itcategory:"Burgers",Itprice:600,Itdiscount:0,Itqty:20,Itbday:"2025-07-04"},
        {index:8,Itid:"IT1008",Itname:"Bacon Burger",Itcategory:"Burgers",Itprice:650,Itdiscount:15,Itqty:15,Itbday:"2025-07-04"},
        {index:9,Itid:"IT1009",Itname:"Shawarma Burger",Itcategory:"Burgers",Itprice:800,Itdiscount:0,Itqty:15,Itbday:"2025-07-04"},
        {index:10,Itid:"IT1010",Itname:"Olive Burger",Itcategory:"Burgers",Itprice:1800,Itdiscount:0,Itqty:15,Itbday:"2025-07-04"},
        {index:11,Itid:"IT1011",Itname:"Double-Cheese Burger",Itcategory:"Burgers",Itprice:1250,Itdiscount:20,Itqty:15,Itbday:"2025-07-04"},
        {index:12,Itid:"IT1012",Itname:"Crispy Chicken Burger(Regular)",Itcategory:"Burgers",Itprice:1200,Itdiscount:0,Itqty:15,Itbday:"2025-07-04"},
        {index:13,Itid:"IT1013",Itname:"Crispy Chicken Burger(Large)",Itcategory:"Burgers",Itprice:1600,Itdiscount:10,Itqty:15,Itbday:"2025-07-04"},
        {index:14,Itid:"IT1014",Itname:"Paneer Burger",Itcategory:"Burgers",Itprice:900,Itdiscount:0,Itqty:15,Itbday:"2025-07-04"},
    
        {index:15,Itid:"IT1015",Itname:"Crispy Chicken Submarine(Large)",Itcategory:"Submarines",Itprice:2000,Itdiscount:0,Itqty:15,Itbday:"2025-07-15"},
        {index:16,Itid:"IT1016",Itname:"Crispy Chicken Submarine(Regular)",Itcategory:"Submarines",Itprice:1500,Itdiscount:0,Itqty:15,Itbday:"2025-07-15"},
        {index:17,Itid:"IT1017",Itname:"Chicken Submarine(Large)",Itcategory:"Submarines",Itprice:1800,Itdiscount:3,Itqty:15,Itbday:"2025-07-15"},
        {index:18,Itid:"IT1018",Itname:"Chicken Submarine(Regular)",Itcategory:"Submarines",Itprice:1400,Itdiscount:0,Itqty:15,Itbday:"2025-07-15"},
        {index:19,Itid:"IT1019",Itname:"Grinder Submarine",Itcategory:"Submarines",Itprice:2300,Itdiscount:0,Itqty:15,Itbday:"2025-07-15"},
        {index:20,Itid:"IT1020",Itname:"Cheese Submarine",Itcategory:"Submarines",Itprice:2200,Itdiscount:0,Itqty:15,Itbday:"2025-07-15"},
        {index:21,Itid:"IT1021",Itname:"Double Cheese n Chicken Submarine",Itcategory:"Submarines",Itprice:1900,Itdiscount:16,Itqty:15,Itbday:"2025-07-15"},
        {index:22,Itid:"IT1022",Itname:"Special Horgie Submarine",Itcategory:"Submarines",Itprice:2800,Itdiscount:0,Itqty:15,Itbday:"2025-07-15"},
        {index:23,Itid:"IT1023",Itname:"BQ Special Submarine",Itcategory:"Submarines",Itprice:3000,Itdiscount:0,Itqty:15,Itbday:"2025-07-15"},
    
        {index:24,Itid:"IT1024",Itname:"Steak Fries(Large)",Itcategory:"Fries",Itprice:1200,Itdiscount:0,Itqty:10,Itbday:"2025-07-20"},
        {index:25,Itid:"IT1025",Itname:"Steak Fries(Medium)",Itcategory:"Fries",Itprice:600,Itdiscount:0,Itqty:10,Itbday:"2025-07-20"},
        {index:26,Itid:"IT1026",Itname:"French Fries(Large)",Itcategory:"Fries",Itprice:800,Itdiscount:0,Itqty:10,Itbday:"2025-07-20"},
        {index:27,Itid:"IT1027",Itname:"French Fries(Medium)",Itcategory:"Fries",Itprice:650,Itdiscount:0,Itqty:10,Itbday:"2025-07-20"},
        {index:28,Itid:"IT1028",Itname:"French Fries(Small)",Itcategory:"Fries",Itprice:450,Itdiscount:0,Itqty:10,Itbday:"2025-07-20"},
        {index:29,Itid:"IT1029",Itname:"Sweet Potato Fries(Large)",Itcategory:"Fries",Itprice:600,Itdiscount:0,Itqty:10,Itbday:"2025-07-20"},
    
        {index:30,Itid:"IT1030",Itname:"Chicken n Cheese Pasta",Itcategory:"Pasta",Itprice:1600,Itdiscount:15,Itqty:5,Itbday:"2025-07-02"},
        {index:31,Itid:"IT1031",Itname:"Chicken Penne Pasta",Itcategory:"Pasta",Itprice:1700,Itdiscount:0,Itqty:5,Itbday:"2025-07-02"},
        {index:32,Itid:"IT1032",Itname:"Ground Turkey Pasta Bake",Itcategory:"Pasta",Itprice:2900,Itdiscount:10,Itqty:5,Itbday:"2025-07-02"},
        {index:33,Itid:"IT1033",Itname:"Creamy Shrimp Pasta",Itcategory:"Pasta",Itprice:2000,Itdiscount:0,Itqty:5,Itbday:"2025-07-02"},
        {index:34,Itid:"IT1034",Itname:"Lemon Butter Pasta",Itcategory:"Pasta",Itprice:1950,Itdiscount:0,Itqty:5,Itbday:"2025-07-02"},
        {index:35,Itid:"IT1035",Itname:"Tagliatelle Pasta",Itcategory:"Pasta",Itprice:2400,Itdiscount:1,Itqty:5,Itbday:"2025-07-02"},
        {index:36,Itid:"IT1036",Itname:"Baked Ravioli",Itcategory:"Pasta",Itprice:2000,Itdiscount:1,Itqty:5,Itbday:"2025-07-02"},
    
        {index:37,Itid:"IT1037",Itname:"Fried Chicken(Small)",Itcategory:"Chicken",Itprice:1200,Itdiscount:0,Itqty:10,Itbday:"2025-07-25"},
        {index:38,Itid:"IT1038",Itname:"Fried Chicken(Regular)",Itcategory:"Chicken",Itprice:2300,Itdiscount:10,Itqty:10,Itbday:"2025-07-25"},
        {index:39,Itid:"IT1039",Itname:"Fried Chicken(Large)",Itcategory:"Chicken",Itprice:3100,Itdiscount:5,Itqty:10,Itbday:"2025-07-25"},
        {index:40,Itid:"IT1040",Itname:"Hot Wings(Large)",Itcategory:"Chicken",Itprice:2400,Itdiscount:0,Itqty:10,Itbday:"2025-07-25"},
        {index:41,Itid:"IT1041",Itname:"Devilled Chicken(Large)",Itcategory:"Chicken",Itprice:900,Itdiscount:0,Itqty:10,Itbday:"2025-07-25"},
        {index:42,Itid:"IT1042",Itname:"BBQ Chicken(Regular)",Itcategory:"Chicken",Itprice:2100,Itdiscount:0,Itqty:10,Itbday:"2025-07-25"},
    
        {index:43,Itid:"IT1043",Itname:"Pepsi(330ml)",Itcategory:"Beverage",Itprice:990,Itdiscount:5,Itqty:20,Itbday:"2026-07-25"},
        {index:44,Itid:"IT1044",Itname:"Coca-Cola(330ml)",Itcategory:"Beverage",Itprice:1230,Itdiscount:0,Itqty:20,Itbday:"2026-07-25"},
        {index:45,Itid:"IT1045",Itname:"Sprite(330ml)",Itcategory:"Beverage",Itprice:1500,Itdiscount:3,Itqty:20,Itbday:"2026-07-25"},
        {index:46,Itid:"IT1046",Itname:"Mirinda(330ml)",Itcategory:"Beverage",Itprice:850,Itdiscount:7,Itqty:20,Itbday:"2026-07-25"}
    
    ];
    localStorage.setItem("Item",JSON.stringify(tempitem));



if(document.getElementById("result")!=null){
    let tblCustomer = document.getElementById("result");
    let tblBody = `<thead class="thead-dark table-dark">
                    <tr>
                        <th>Item Code</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price(Rs.)</th>
                        <th>Discount</th>
                        <th>Expire Date</th>
                    </tr>
                </thead>`;  
    let Temp = JSON.parse(localStorage.getItem("Item"));
    Temp.forEach(element =>{
        tblBody+=`<tbody class="table" id="customertablebody">
                    <tr>
                        <td> ${element.Itid}</td>
                        <td> ${element.Itcategory}</td>
                        <td> ${element.Itname}</td>
                        <td> ${element.Itqty}</td>
                        <td> ${element.Itprice}</td>
                        <td> ${discount(element.Itdiscount)}</td>
                        <td style="${isexpired(element.Itbday)}
                    </tr>
                </tbody>`;
    });
    tblCustomer.innerHTML = tblBody;
}