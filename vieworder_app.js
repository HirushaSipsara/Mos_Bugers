let itemlist=JSON.parse(localStorage.getItem("Item"));

window.onload = function viewitem(){
    let itemlist=JSON.parse(localStorage.getItem("Item"));

    let burgerbody= document.getElementById("burgers");
    let submarinesbody= document.getElementById("Submarines");
    let friesbody= document.getElementById("fries");
    let pastabody= document.getElementById("pasta");
    let chickenbody= document.getElementById("chicken");
    let beveragesbody= document.getElementById("beverages");
    let viewitembody= document.getElementById("viewinventory");

    let burgers=``;
    let submarines=``;
    let fries=``;
    let pasta=``;
    let chicken=``;
    let beverages=``;
    let viewinventory=``;

    itemlist.forEach(data => {
        console.log(data);
        if (data.Itcategory === "Burgers") {
            burgers+=`
                    <tr>
                        <td>${data.Itid}</td>
                        <td>${data.Itname}</td>
                        <td>${data.Itprice}</td>
                    </tr>
                        `
        }
        if (data.Itcategory =="Submarines") {
            submarines+=`
            <tr>
                <td>${data.Itid}</td>
                <td>${data.Itname}</td>
                <td>${data.Itprice}</td>
            </tr>
                `
        }
        if (data.Itcategory ==="Fries") {
            fries+=`
            <tr>
                <td>${data.Itid}</td>
                <td>${data.Itname}</td>
                <td>${data.Itprice}</td>
            </tr>
                `
        }
        if (data.Itcategory ==="Pasta") {
            pasta+=`
            <tr>
                <td>${data.Itid}</td>
                <td>${data.Itname}</td>
                <td>${data.Itprice}</td>
            </tr>
                `
        }
        if (data.Itcategory ==="Chicken") {
            chicken+=`
            <tr>
                <td>${data.Itid}</td>
                <td>${data.Itname}</td>
                <td>${data.Itprice}</td>
            </tr>
                `
        }
        if (data.Itcategory ==="Beverage") {
            beverages+=`
            <tr>
                <td>${data.Itid}</td>
                <td>${data.Itname}</td>
                <td>${data.Itprice}</td>
            </tr>
                `
        }
    });

    

    burgerbody.innerHTML=burgers;
    submarinesbody.innerHTML=submarines;
    friesbody.innerHTML=fries;
    pastabody.innerHTML=pasta;
    chickenbody.innerHTML=chicken;
    beveragesbody.innerHTML=beverages;
    viewitembody.innerHTML=viewinventory;
}

window.onload = function(){
    let itemlist=JSON.parse(localStorage.getItem("Item"));
    let viewitembody= document.getElementById("viewinventory");
    let viewinventory=``;

    itemlist.forEach(data => {
        viewinventory+=`
            <tr>
                <td>${data.Itid}</td>
                <td>${data.Itname}</td>
                <td>${data.Itcategory}</td>
                <td>${data.Itbday}</td>
                <td>${data.Itqty}</td>
                <td>${data.Itprice}</td>
            </tr>
                `
    });
    viewitembody.innerHTML=viewinventory;
}