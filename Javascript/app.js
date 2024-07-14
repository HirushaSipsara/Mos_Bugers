function loginform() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "Admin" && password === "Admin@123") {
        window.location.href ='../HTML/OwnerHomePage.html';

    } else if (username === "Cashier" && password === "Cashier@123") {
        window.location.href = '../HTML/CashierHomePage.html';
    } else {
        alert("Wrong login");
    }
}

function logout() {
    window.location.href = '../index.html';
}

function goback() {
    window.history.back();
}

function vieworderpage(){
    window.location.href = '../HTML/CashierViewOrder.html'
}

function addcustomerpage(){
    window.location.href = '../HTML/CashierAddCustomer.html'
}

function viewcustomerpage(){
    window.location.href = '../HTML/CashierViewCustomers.html'
}

//Cashier Main Buttons

function cashierplaceorderpage(){
    window.location.href = '../HTML/cashierplaceorder.html'
}
function cashierviewmenupage(){
    window.location.href = '../HTML/CashierViewMenu.html'
}

//Cashier Sub Buttons

function cashierordercheckoutpage(){
    window.location.href = '../HTML/CashierCheackOut.html'
}

function cashierordercheckoutpage(){
    window.location.href = '../HTML/CashierCheackOut.html'
}

function cashierupdateorderpage(){
    window.location.href = '../HTML/CashierUpdateOrder.html'
}

function cashierdeleteorderpage(){
    window.location.href = '../HTML/CashierDeleteOrder.html'
}

function cashierupdatecustomerpage(){
    window.location.href = '../HTML/CashierUpdateCustomer.html'
}

//Owner Main Buttons

function ownermanageinventory(){
    window.location.href = '../HTML/OwnerManageInventory.html'
}

function ownergenatereport(){
    window.location.href = '../HTML/OwnerGenarateReport.html'
}

function owneraddcashiers(){
    window.location.href = '../HTML/OwnerAddCashier.html'
}

function ownerviewcashiers(){
    window.location.href = '../HTML/OwnerViewCashiers.html'
}

//Owner Sub Buttons

function ownerviewinventory(){
    window.location.href = '../HTML/OwnerViewInventory.html'
}

function owneradditem(){
    window.location.href = '../HTML/OwnerAddInventory.html'
}

function ownerupdateitem(){
    window.location.href = '../HTML/OwnerUpdateInventory.html'
}

function ownerdeleteitem(){
    window.location.href = '../HTML/OwnerDeleteInventory.html'
}

function ownerupdatecashierpage(){
    window.location.href = '../HTML/OwnerCashierUpdate.html'
}

