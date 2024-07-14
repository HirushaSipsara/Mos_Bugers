function loginform() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "Admin" && password === "Admin@123") {
        window.location.href ='../OwnerHomePage.html';

    } else if (username === "Cashier" && password === "Cashier@123") {
        window.location.href = '../CashierHomePage.html';
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
    window.location.href = '../CashierViewOrder.html'
}

function addcustomerpage(){
    window.location.href = '../CashierAddCustomer.html'
}

function viewcustomerpage(){
    window.location.href = '../CashierViewCustomers.html'
}

//Cashier Main Buttons

function cashierplaceorderpage(){
    window.location.href = '../cashierplaceorder.html'
}
function cashierviewmenupage(){
    window.location.href = '../CashierViewMenu.html'
}

//Cashier Sub Buttons

function cashierordercheckoutpage(){
    window.location.href = '../CashierCheackOut.html'
}

function cashierordercheckoutpage(){
    window.location.href = '../CashierCheackOut.html'
}

function cashierupdateorderpage(){
    window.location.href = '../CashierUpdateOrder.html'
}

function cashierdeleteorderpage(){
    window.location.href = '../CashierDeleteOrder.html'
}

function cashierupdatecustomerpage(){
    window.location.href = '../CashierUpdateCustomer.html'
}

//Owner Main Buttons

function ownermanageinventory(){
    window.location.href = '../OwnerManageInventory.html'
}

function ownergenatereport(){
    window.location.href = '../OwnerGenarateReport.html'
}

function owneraddcashiers(){
    window.location.href = '../OwnerAddCashier.html'
}

function ownerviewcashiers(){
    window.location.href = '../OwnerViewCashiers.html'
}

//Owner Sub Buttons

function ownerviewinventory(){
    window.location.href = '../OwnerViewInventory.html'
}

function owneradditem(){
    window.location.href = '../OwnerAddInventory.html'
}

function ownerupdateitem(){
    window.location.href = '../OwnerUpdateInventory.html'
}

function ownerdeleteitem(){
    window.location.href = '../OwnerDeleteInventory.html'
}

function ownerupdatecashierpage(){
    window.location.href = '../OwnerCashierUpdate.html'
}

