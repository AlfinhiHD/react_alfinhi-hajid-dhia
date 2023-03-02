const form = document.querySelector('#productForm');
const nameInput = document.querySelector('#productName');
const cathegoryInput = document.querySelector('#productCathegory');
const imageInput = document.querySelector('#imageProduct');
const radioButtons = document.getElementsByName('freshness');
const descInput = document.querySelector('#productDesc');
const priceInput = document.querySelector('#productPrice');

// Errors id on tag p 
const nameError = document.getElementById('nameError');
const cathegoryError = document.getElementById('cathegoryError');
const imageError = document.getElementById('imageError');
const freshnessError = document.getElementById('freshnessError');
const descError = document.getElementById('descError');
const priceError = document.getElementById('priceError');

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
        cathegoryError.textContent = 'Kota tidak boleh kosong.';
    } else {
        cathegoryError.textContent = '';
    }

    // Validasi input File
    if (imageInput.value === '') {
        imageError.textContent = 'File tidak boleh kosong.';
    } else {
        imageError.textContent = '';
    }

    // Validasi input Freshness
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            freshnessError.textContent = '';
          break;
        } else {
            freshnessError.textContent = 'Jenis freshness harus dipilih.';
        }
      }

    // Validasi input Dekripsi
    if (descInput.value === '') {
        descError.textContent = 'Deskripsi product tidak boleh kosong.';
    } else {
        descError.textContent = '';
    }

    // Validasi input price
    if (priceInput.value === '') {
        priceError.textContent = 'Harga product tidak boleh kosong.';
    } else {
        priceError.textContent = '';
    }

    // Jika semua input valid, submit form
    if (nameError.textContent === '' && cathegoryError.textContent === '' && imageError.textContent === '' && freshnessError.textContent === '' && descError.textContent === '' && priceError.textContent === '') {
        form.submit();
    }
    
});
