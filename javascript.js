const form1 = document.getElementById('form1');
form1.addEventListener('submit', retriveFormValue1);
function retriveFormValue1(event1) {
    event1.preventDefault();
    const Month = parseFloat(form1.querySelector('[name="Month"]').value);
    let message
    if ((Month <= 2) || (Month === 12)) {
        message = "WINTER";
    }
    else if (Month <= 5) {
        message = "SPRING";
    }
    else if (Month <= 8) {
        message = "SUMMER";
    }
    else {
        message = "AUTUMN";
    }
    let NameMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    alert(NameMonths[Month - 1] + " is a " + message + " month");
}

const form2 = document.getElementById('form2');
form2.addEventListener('submit', retriveFormValue2);
function retriveFormValue2(event2) {
    event2.preventDefault();
    let arr = [parseFloat(form2.querySelector('[name="Num1"]').value), parseFloat(form2.querySelector('[name="Num2"]').value), parseFloat(form2.querySelector('[name="Num3"]').value)];
    if (arr[0] > arr[1]) {
        if (arr[0] > arr[2]) {
            alert("The first maximum value is " + arr[0]);
        }
        else {
            alert("The first maximum value is " + arr[2]);
        }
    }
    else if (arr[1] > arr[2]) {
        alert("The first maximum value is " + arr[1]);
    }
    else if (arr[2] === arr[1] && arr[2] === arr[0]) {
        alert("All values are equal");
    }
    else {
        alert("The first maximum value is " + arr[2]);
    }
    console.log(arr);
    console.log(arr[2]);
}

const form3 = document.getElementById('form3');
form3.addEventListener('submit', retriveFormValue3);
function retriveFormValue3(event3) {
    event3.preventDefault();
    const element1 = form3.querySelector('[name="element1"]'),
        operator = form3.querySelector('input[name="operator"]:checked'),
        element2 = form3.querySelector('[name="element2"]');
    const
        datas = {
            Elm1: parseFloat(element1.value),
            Oper: operator.value,
            Elm2: parseFloat(element2.value)
        };
    let r;
    switch (datas.Oper) {
        case "Summ": r = datas.Elm1 + datas.Elm2;
            alert("The SUM of elements is: " + r);
            break;
        case "Deduct": r = datas.Elm1 - datas.Elm2;
            alert("The RESIDUAL of elements is: " + r);
            break;
        case "Multiply": r = datas.Elm1 * datas.Elm2;
            alert("The PRODUCT of elements is: " + r);
            break;
        case "Divide": if (datas.Elm2 === 0) {
            alert("ERROR. Divisor must not be a zero!");
            break;
        }
        else {
            r = datas.Elm1 / datas.Elm2;
            alert("The QUOTIENT of elements is: " + r);
            break;
        }
    }
}