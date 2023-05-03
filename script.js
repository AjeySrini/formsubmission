function labelcreate(tagname, attrname, attrvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
}


function linebreakers(tagname) {
    var ele = document.createElement(tagname);
    return ele;
}

function inputele(tagname, attrname, attrvalue, attrname1, attrvalue1, attrname2, attrvalue2, attrname3, attrvalue3, attrname4, attrvalue4) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue1);
    ele.setAttribute(attrname2, attrvalue2);
    ele.setAttribute(attrname3, attrvalue3);
    ele.setAttribute(attrname4, attrvalue4);

    return ele;
}

function foodinputele(tagname, attrname, attrvalue, attrname1, attrvalue1, attrname2, attrvalue2, attrname3, attrvalue3, attrname4, attrvalue4) {
    var ele1 = document.createElement(tagname);
    ele1.setAttribute(attrname, attrvalue);
    ele1.setAttribute(attrname1, attrvalue1);
    ele1.setAttribute(attrname2, attrvalue2);
    ele1.setAttribute(attrname3, attrvalue3);
    ele1.setAttribute(attrname4, attrvalue4);
    return ele1;
}
var fname = labelcreate("label", "for", "fname", "First Name:");
var fnameinput = inputele("input", "type", "text", "id", "fname", "name", "fname", "class", "form-control", "placeholder", "First Name");
var lname = labelcreate("label", "for", "lname", "Last Name:");
var lnameinput = inputele("input", "type", "text", "id", "lname", "name", "lname", "class", "form-control", "placeholder", "Last Name");
var address1 = labelcreate("label", "for", "address1", "Address Line 1:");
var address1input = inputele("input", "type", "text", "id", "address1", "name", "address1", "class", "form-control", "placeholder", "Address Line 1:");
var address2 = labelcreate("label", "for", "address2", "Address Line 2:");
var address2input = inputele("input", "type", "text", "id", "address2", "name", "address2", "class", "form-control", "placeholder", "Address Line 2:");
var pin = labelcreate("label", "for", "pin", "PinCode:");
var pininput = inputele("input", "type", "text", "id", "pin", "name", "pin", "class", "form-control", "placeholder", "Pincode:");
var gendermale = labelcreate("label", "for", "gender", "Gender:");
var genderminput = foodinputele("input", "type", "radio", "id", "gender", "name", "gender", "value", "male", "class", "gender m-2 mb-2");

var genderfinput = foodinputele("input", "type", "radio", "id", "gender", "name", "gender", "value", "female", "class", "gender m-2 mb-2");

var food = labelcreate("label", "for", "food", "Choice Of Food:");
var span = labelcreate("span", "class", "span", "(must choose at least 2 out of 5 options)");
var food1input = foodinputele("input", "type", "checkbox", "name", "food", "value", "north Indian", "id", "food", "class", "food m-2");
var food2input = foodinputele("input", "type", "checkbox", "name", "food", "value", "South Indian", "id", "food", "class", "food m-2");
var food3input = foodinputele("input", "type", "checkbox", "name", "food", "value", "Japanese", "id", "food", "class", "food m-2");
var food4input = foodinputele("input", "type", "checkbox", "name", "food", "value", "SeaFood", "id", "food", "class", "food m-2");
var food5input = foodinputele("input", "type", "checkbox", "name", "food", "value", "Chinese", "id", "food", "class", "food m-2");
var state = labelcreate("label", "for", "state", "State:");
var stateinput = inputele("input", "type", "text", "id", "state", "name", "state", "class", "form-control", "placeholder", "State :");
var country = labelcreate("label", "for", "country", "Country:");
var countryinput = inputele("input", "type", "text", "id", "country", "name", "country", "class", "form-control", "placeholder", "Country :");
var subbutton = document.createElement("button");
subbutton.setAttribute("type", "submit");
subbutton.setAttribute("class", "form-control btn btn-secondary");
subbutton.innerHTML = "Submit";
var br1 = linebreakers("br");
var br2 = linebreakers("br");
var br3 = linebreakers("br");
var br4 = linebreakers("br");
var br5 = linebreakers("br");
var br6 = linebreakers("br");
var br7 = linebreakers("br");
var br8 = linebreakers("br");
var br9 = linebreakers("br");
var br10 = linebreakers("br");
var br11 = linebreakers("br");
var br12 = linebreakers("br");


var forms = document.createElement("formtable");
forms.setAttribute("class", "mt-3 mb-5 form-style");
var div = document.createElement("div");
div.setAttribute("class", "margin");
var div1 = document.createElement("div");
div1.setAttribute("class", "row modified d-flex justify-content-between");
var div2 = document.createElement("div");
div2.setAttribute("class", "col-sm-12 col-md-12 col-lg-3");

forms.append(fname, fnameinput, br1, lname, lnameinput, br2, address1, address1input, br2, address2, address2input, br2, pin, pininput, br2, gendermale,br10, genderminput, "Male", br2
    , genderfinput, "Female", br11, food, br3, span, br4, br5, food1input, "North Indian", br12, food2input, "South Indian", br7, food3input, "Japanese", br8, food4input, "Sea Food", br9, food5input, "Chinese", br6, state, br5, stateinput, br2, country, br2, countryinput, br2, subbutton);


var div3 = document.createElement("div");
div3.setAttribute("class", "col col-sm-12 col-md-12 col-lg-8");
var h2 = document.createElement("h2");
h2.innerHTML = "Temporary DataBase";
h2.setAttribute("class", "text-info bg-dark");

var table = document.createElement("table");
table.setAttribute("class", "table table-striped");

var tableh = document.createElement("thead");
tableh.setAttribute("class", "bg-secondary text-dark");

var tr = document.createElement("tr");

var firstname = document.createElement("td");
firstname.innerHTML = "First Name";
var lastname = document.createElement("td");
lastname.innerHTML = "Last Name";
var address = document.createElement("td");
address.innerHTML = "Address";
var pincode1 = document.createElement("td");
pincode1.innerHTML = "Pincode";
var gender = document.createElement("td");
gender.innerHTML = "Gender";
var food1 = document.createElement("td");
food1.innerHTML = "Food";
var state1 = document.createElement("td");
state1.innerHTML = "State";
var country1 = document.createElement("td");
country1.innerHTML = "Country";

tr.append(firstname, lastname, address, pincode1, gender, food1, state1, country1);
tableh.append(tr);

table.append(tableh);
div3.append(h2, table);




subbutton.addEventListener("click", function (e) {
    e.preventDefault();


    let fname3 = document.getElementById("fname");
    let lname3 = document.getElementById("lname");
    let address4 = document.getElementById("address1");
    let address5 = document.getElementById("address2");
    let pin3 = document.getElementById("pin");
    let state3 = document.getElementById("state");
    let country3 = document.getElementById("country");

    let address3 = [];
    address3.push(address4.value);
    address3.push(address5.value);

    let gender3 = document.getElementsByName("gender");
    let genderValue;
    for (let i = 0; i < gender3.length; i++) {
        if (gender3[i].checked) {
            genderValue = gender3[i].value;
        }
    }

    let food3 = document.getElementsByName("food");
    let foodList = []
    let foodCount = 0;
    console.log(food3);
    for (let i = 0; i < food3.length; i++) {
        if (food3[i].checked) {
            foodList.push(food3[i].value);
            foodCount++;
        }
    }
    if (foodList.length >= 2) {
        result = foodList.join(", ")
    } else {
        result = alert("Choose atleast 2 options out of 5 in food");
    }


    createTable(fname3.value, lname3.value, address3.join(" "), pin3.value, genderValue, result, state3.value, country3.value)
    fname3.value = ""
    lname3.value = ""
    address4.value = ""
    address5.value = ""
    pin3.value = ""
    gender3.value = ""
    foodList = [];
    state3.value = ""
    country3.value = ""
}

)



function createTable(fname3, lname3, address3, pincode3, gender3, food3, state3, country3) {
    let tbody = document.createElement("tbody")
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    td1.innerHTML = fname3;
    td2.innerHTML = lname3;
    td3.innerHTML = address3;
    td4.innerHTML = pincode3;
    td5.innerHTML = gender3;
    td6.innerHTML = food3;
    td7.innerHTML = state3;
    td8.innerHTML = country3;
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

    tbody.append(tr);
    table.append(tbody);

}
div2.append(forms);
div1.append(div2, div3);
div.append(div1);
document.body.append(div);