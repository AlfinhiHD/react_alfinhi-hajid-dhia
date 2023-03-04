
const form = document.querySelector('#productForm');
const nameInput = document.querySelector('#productName');
const cathegoryInput = document.querySelector('#productCathegory');
const imageInput = document.querySelector('#imageProduct');
const radioButtons = document.getElementsByName('freshness');
const descInput = document.querySelector('#productDesc');
const priceInput = document.querySelector('#productPrice');

//button class
// const submitButton = document.getElementById('submitButton');

// Errors id on tag p 
const nameError = document.getElementById('nameError');
const cathegoryError = document.getElementById('cathegoryError');
const imageError = document.getElementById('imageError');
const freshnessError = document.getElementById('freshnessError');
const descError = document.getElementById('descError');
const priceError = document.getElementById('priceError');

var data = [];
var counter = 0;


form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validasi input Nama
    if (nameInput.value === '') {
        nameError.textContent = 'Nama tidak boleh kosong.';
        nameInput.classList.remove("is-valid");
        nameInput.classList.add("is-invalid");
    } else if (nameInput.value.length > 25) {
        nameError.textContent = 'Nama tidak boleh lebih dari 25 karakter.';
        nameInput.classList.remove("is-valid");
        nameInput.classList.add("is-invalid");
    } else if (/[^a-zA-Z0-9\-\/ ]/.test(nameInput.value)) {
        nameError.textContent = 'Nama tidak boleh mengandung simbol.';
        nameInput.classList.remove("is-valid");
        nameInput.classList.add("is-invalid");
    } else {
        nameError.textContent = '';
        nameInput.classList.remove("is-invalid");
        nameInput.classList.add("is-valid");
    }

    // Validasi input Cathegory
    if (cathegoryInput.value === '') {
        cathegoryError.textContent = 'Kategori tidak boleh kosong.';
        cathegoryInput.classList.remove("is-valid");
        cathegoryInput.classList.add("is-invalid");
    } else {
        cathegoryError.textContent = '';
        cathegoryInput.classList.remove("is-invalid");
        cathegoryInput.classList.add("is-valid");
    }

    // Validasi input File
    if (imageInput.value === '') {
        imageError.textContent = 'File tidak boleh kosong.';
        imageInput.classList.remove("is-valid");
        imageInput.classList.add("is-invalid");
    } else {
        imageError.textContent = '';
        imageInput.classList.remove("is-invalid");
        imageInput.classList.add("is-valid");
    }

    // Validasi input Freshness
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            freshnessError.textContent = '';
            selectedValue = radioButtons[i].value;
            break;
        } else {
            freshnessError.textContent = 'Jenis freshness harus dipilih.';
        }
    }

    // Validasi input Dekripsi
    if (descInput.value === '') {
        descError.textContent = 'Deskripsi product tidak boleh kosong.';
        descInput.classList.remove("is-valid");
        descInput.classList.add("is-invalid");
    } else {
        descError.textContent = '';
        descInput.classList.remove("is-invalid");
        descInput.classList.add("is-valid");
    }

    // Validasi input price
    if (priceInput.value === '') {
        priceError.textContent = 'Harga product tidak boleh kosong.';
        priceInput.classList.remove("is-valid");
        priceInput.classList.add("is-invalid");
    } else {
        priceError.textContent = '';
        priceInput.classList.remove("is-invalid");
        priceInput.classList.add("is-valid");
    }

    // Jika semua input valid, submit form
    if (nameError.textContent === '' && cathegoryError.textContent === '' && imageError.textContent === '' && freshnessError.textContent === '' && descError.textContent === '' && priceError.textContent === '') {

        // alert("Data Produk\n \nNama : " + nameInput.value 
        // + "\nCathegory : " + cathegoryInput.value
        // + "\nImage : " + imageInput.value
        // + "\nFreshness : " + selectedValue
        // + "\nDecription : " + descInput.value
        // + "\nPrice : " + priceInput.value)


        // Mengambil data
        var name = nameInput.value;
        var cathegory = cathegoryInput.value;
        var image = imageInput.value;
        var freshness = selectedValue;
        var desc = descInput.value;
        var price = priceInput.value;

        // Menambahkan data ke dalam objek
        var newData = {
            no: ++counter,
            name: name,
            cathegory: cathegory,
            image: image,
            freshness: freshness,
            desc: desc,
            price: price
        };
        data.push(newData);

        // alert(JSON.stringify(data));

        // Membersihkan input fields setelah data ditambahkan
        nameInput.value;
        cathegoryInput.value = "";
        imageInput.value = "";
        selectedValue = "";
        descInput.value = "";
        priceInput.value = "";

        // Mengambil tabel dan loop untuk menambahkan setiap data ke dalam tabel
        var table = document.getElementById("data-table");
        var tbody = table.getElementsByTagName("tbody")[0];
        tbody.innerHTML = ""; // Membersihkan tbody sebelum menambahkan data baru

        for (var i = 0; i < data.length; i++) {
            var row = tbody.insertRow();
            var noCell = row.insertCell(0);
            var nameCell = row.insertCell(1);
            var cathegoryCell = row.insertCell(2);
            var imageCell = row.insertCell(3);
            var freshnessCell = row.insertCell(4);
            var descCell = row.insertCell(5);
            var priceCell = row.insertCell(6);

            noCell.innerHTML = data[i].counter;
            nameCell.innerHTML = data[i].name;
            cathegoryCell.innerHTML = data[i].cathegory;
            imageCell.innerHTML = data[i].image;
            freshnessCell.innerHTML = data[i].freshness;
            descCell.innerHTML = data[i].desc;
            priceCell.innerHTML = data[i].price;
        }
    }

});

//Tambahan button disabled
//Fungsi onkeyup
