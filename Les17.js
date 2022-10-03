function focOn(atr) {
    atr.style.color = '#000000';
    const fld = document.getElementById(`fld${atr.name}`);
    fld.style.border = "1.5px solid #05E4CB";
    if ((atr.value === "Text") || (atr.value === "")) {
        atr.value = "";
        atr.style.color = '#000000'
    }
}

function focOff(atr) {
    const fld = document.getElementById(`fld${atr.name}`);
    fld.style.border = "1px solid #cad8f1";
    const img = document.getElementById(`img${atr.name}`)
    if ((atr.value === "") || (atr.value == 0)) {
        switch (atr.name) {
            case 'name': atr.value = "Text"; break;
            case 'debtor': atr.value = "Text"; break;
            case 'amount': atr.value = 0; break;
            case 'dueDate': atr.value = ""; break;
        }
        atr.style.color = "#D3D3D3";
        img.style.display = "none";
    }
    else {
        atr.style.color = '#000000';
        img.style.display = "inline-block";
    }
}

const form1 = document.getElementById('formAddRefund');
form1.onsubmit = function submit(event) {
    event.preventDefault();
    const formData = new FormData(form1);
    const name = formData.get('name') || '';
    const debtor = formData.get('debtor') || '';
    const amount = formData.get('amount') || '';
    const dueDate = formData.get('dueDate') || '';
    AddRefund(name, debtor, amount, dueDate);
    form1.reset();
    fildReset();
}

function fildReset() {
    const fildArr = ['name', 'debtor', 'amount', 'dueDate'];
    fildArr.forEach(item => {
        const fld = document.getElementById(item);
        fld.style.color = "#D3D3D3";
        const img = document.getElementById(`img${item}`);
        img.style.display = "none";
    })
}

async function AddRefund(name, debtor, amount, dueDate) {
    try {
        const resp = await fetch('https://oijv97k0l6.execute-api.eu-central-1.amazonaws.com/test/refunds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                debtor: debtor,
                amount: amount,
                dueDate: dueDate,
            })
        });
        if (resp.status >= 400) {
            getStatus(`Error ${resp.status}`);
            return Promise.reject(resp);
        }
        else if (resp.status = 200) {
            getStatus(`${resp.status} OK`);
        }
        return await resp.json();
    }
    catch (err) {
        console.log('Error: ', err);
    }
}
function getStatus(msg) {
    const today = new Date();
    document.getElementById('status').innerHTML = `Last Add Refound STATUS: ${msg} on: ${today.toLocaleString()}`;
}


const getRefoundBtn = document.getElementById('getRefund');
getRefoundBtn.onclick = createListRef;

function delRecListRef(atr) {
    if (confirm("Do you want to delete Refunds list record?")) {
        editListRef(atr.name);
    }
}

async function editListRef(idEdit) {
    try {
        const resp = await fetch('https://oijv97k0l6.execute-api.eu-central-1.amazonaws.com/test/refunds', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: idEdit
            })
        });
        if (resp.status >= 400) return Promise.reject(resp);
        createListRef();
        return await resp.json();

    }
    catch (err) {
        console.log('Error: ', err);
    }
}

async function createListRef() {
    const datas = await getRefund();
    const tableDatas = document.getElementById('wrapTableDatas');
    tableDatas.replaceChildren();
    datas.Items.sort((a, b) => {
        let datA = new Date(a.dueDate);
        let datB = new Date(b.dueDate);
        return datA - datB;
    });
    datas.Items.forEach(item => {
        tableDatas.appendChild(createTableRecord(item.name, 'Name'));
        tableDatas.appendChild(createTableRecord(item.debtor, 'Debtor'));
        tableDatas.appendChild(createTableRecord(item.amount, 'Amount'));
        tableDatas.appendChild(createTableRecord(item.dueDate, 'Date'));
        tableDatas.appendChild(createBtnEdt(item.id, 'Edit'));
    });
}

function createTableRecord(item, atr) {
    const listItem = document.createElement('div');
    listItem.setAttribute('class', 'tableDatas ' + atr);
    const textNode = document.createTextNode(item || "");
    listItem.appendChild(textNode);
    return listItem;
}
function createBtnEdt(item, atr) {
    const listBtn = document.createElement('button');
    listBtn.setAttribute('class', 'edtBtn');
    listBtn.setAttribute('name', item);
    listBtn.setAttribute('onclick', 'delRecListRef(this)');
    const textNode = document.createTextNode('Delete');
    listBtn.appendChild(textNode);
    const listItem = document.createElement('div');
    listItem.setAttribute('class', 'tableDatas ' + atr);
    listItem.appendChild(listBtn);
    return listItem;
}

async function getRefund() {
    try {
        const resp = await fetch('https://oijv97k0l6.execute-api.eu-central-1.amazonaws.com/test/refunds', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (resp.status >= 400) return Promise.reject(resp);
        return await resp.json();
    }
    catch (err) {
        console.log('Error: ', err);
    }
}







