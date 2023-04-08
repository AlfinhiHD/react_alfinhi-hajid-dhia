# (22) Introduction Restfull API

### Apa itu API?
API adalah singkatan dari "Application Programming Interface" atau antarmuka pemrograman aplikasi dalam bahasa Indonesia. API digunakan untuk memungkinkan komunikasi antara dua atau lebih sistem atau aplikasi yang berbeda. API dapat digunakan untuk memungkinkan penggunaan data atau fungsi dari satu aplikasi ke aplikasi lainnya. Dalam pengembangan perangkat lunak, API adalah kunci penting dalam memungkinkan integrasi dan koneksi antara sistem atau aplikasi yang berbeda.


### Apa itu REST?
REST adalah singkatan dari "Representational State Transfer". REST adalah arsitektur untuk pembangunan aplikasi web yang menggunakan protokol HTTP untuk berkomunikasi antara klien dan server.

Pada arsitektur REST, setiap sumber daya pada server memiliki URI yang unik. URI tersebut dapat digunakan oleh klien untuk mengakses dan memanipulasi sumber daya tersebut menggunakan metode HTTP yang sesuai, seperti GET, POST, PUT, DELETE, dan lainnya. Setiap permintaan HTTP untuk sumber daya tertentu diidentifikasi oleh URI tersebut, dan dapat digunakan untuk melakukan operasi seperti membaca data, menambah data, mengubah data, atau menghapus data.


### Apa itu JSON?
JSON adalah singkatan dari "JavaScript Object Notation" atau notasi objek JavaScript dalam bahasa Indonesia. JSON adalah format data yang digunakan untuk pertukaran data antara aplikasi web dan sistem yang berbeda. JSON sering digunakan sebagai pengganti format XML karena lebih ringan, lebih mudah dibaca dan ditulis oleh manusia, serta lebih mudah diproses oleh mesin. Contoh :

```
{
  "name": "John",
  "age": 30,
  "isMarried": true,
  "hobbies": ["reading", "traveling"],
  "address": {
    "city": "New York",
    "zipCode": 10001
  }
}
```

