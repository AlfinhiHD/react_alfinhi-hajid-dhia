
const form = document.querySelector('#productForm');
const nameInput = document.querySelector('#productName');
const cathegoryInput = document.querySelector('#productCathegory');
const imageInput = document.querySelector('#imageProduct');
const radioButtons = document.getElementsByName('freshness');
const descInput = document.querySelector('#productDesc');
const priceInput = document.querySelector('#productPrice');

const nameError = document.getElementById('nameError');
const cathegoryError = document.getElementById('cathegoryError');
const imageError = document.getElementById('imageError');
const freshnessError = document.getElementById('freshnessError');
const descError = document.getElementById('descError');
const priceError = document.getElementById('priceError');

var data = [];
var counter = 0;

function readData() {

    // Mengambil tabel dan loop untuk menambahkan setiap data ke dalam tabel
    var table = document.getElementById("data-table");
    var tbody = table.getElementsByTagName("tbody")[0];
    // Membersihkan tbody sebelum menambahkan data baru
    tbody.innerHTML = ""; 

    for (var i = 0; i < data.length; i++) {
        var row = tbody.insertRow();
        var noCell = row.insertCell(0);
        var nameCell = row.insertCell(1);
        var cathegoryCell = row.insertCell(2);
        var imageCell = row.insertCell(3);
        var freshnessCell = row.insertCell(4);
        var descCell = row.insertCell(5);
        var priceCell = row.insertCell(6);

        noCell.innerHTML = data[i].no;
        nameCell.innerHTML = data[i].name;
        cathegoryCell.innerHTML = data[i].cathegory;
        imageCell.innerHTML = data[i].image;
        freshnessCell.innerHTML = data[i].freshness;
        descCell.innerHTML = data[i].desc;
        priceCell.innerHTML = data[i].price;
    }
}

function hapusData() {
    // Menghapus nilai paling akhir pada array data
    data.pop();
    counter--;

    readData();
}

function cariData() {
    var inputCari = document.getElementById("inputCari");
    var nameKey = inputCari.value.toLowerCase();
    var notFoundData = true;

    for (var i = 0; i < data.length; i++) {
        // Memeriksa apakah data sesuai dengan kata kunci pencarian
        if (data[i].name.toLowerCase() === nameKey) {
            // Jika sesuai, maka menambahkan data ke alert
            alert("Data Produk yang dicari\n \nNo : " + data[i].no
            + "\nNama : " + data[i].name
            + "\nCathegory : " + data[i].cathegory
            + "\nImage : " + data[i].image
            + "\nFreshness : " + data[i].freshness
            + "\nDecription : " + data[i].desc
            + "\nPrice : " + data[i].price)

            // Mengeset variabel notFoundData menjadi salah
            notFoundData = false;
        }
    }

    // Jika data tidak ada maka akan mengeluarkan alert
    if(notFoundData) {
        alert("Mohon maaf data tidak ditemukan!")
    }
}

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

            //Menghilangkan checked pada radiobutton saat sudah submit
            radioButtons[i].checked = false;
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
    } else if (parseInt(priceInput.value) <= 0) {
        priceError.textContent = 'Harap masukan harga product yang valid.';
        priceInput.classList.remove("is-valid");
        priceInput.classList.add("is-invalid");
    } else {
        priceError.textContent = '';
        priceInput.classList.remove("is-invalid");
        priceInput.classList.add("is-valid");
    }

    // Jika semua input valid, submit form
    if (nameError.textContent === '' && cathegoryError.textContent === '' && imageError.textContent === '' && freshnessError.textContent === '' && descError.textContent === '' && priceError.textContent === '') {

        // Remove class valid tiap form
        nameInput.classList.remove("is-valid");
        cathegoryInput.classList.remove("is-valid");
        imageInput.classList.remove("is-valid");
        descInput.classList.remove("is-valid");
        priceInput.classList.remove("is-valid");

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

        // Membersihkan input fields setelah data ditambahkan
        nameInput.value = "";
        cathegoryInput.value = "";
        imageInput.value = "";
        descInput.value = "";
        priceInput.value = "";

        readData();
    }

});

