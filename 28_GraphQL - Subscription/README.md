# (28) GraphQL – Subscription

### Apa itu Subscription dalam GraphQL?
Subscription pada GraphQL adalah fitur yang memungkinkan client untuk melakukan subscribe pada suatu data di server dan menerima notifikasi secara real-time ketika terjadi perubahan pada data tersebut. Dengan menggunakan Subscription, client dapat menerima perubahan data secara langsung tanpa perlu melakukan polling atau request terus-menerus ke server untuk memeriksa apakah ada perubahan data.


### Apa itu web socket pada subscription?
WebSocket adalah protokol komunikasi dua arah (bidirectional) yang memungkinkan komunikasi real-time antara client dan server melalui satu koneksi tunggal (single connection) yang persisten. Dalam konteks Subscription pada GraphQL, WebSocket digunakan sebagai teknologi transport yang memungkinkan server mengirimkan data real-time secara langsung kepada client.

Dengan WebSocket, server dapat mengirimkan data kepada client tanpa perlu menunggu request dari client terlebih dahulu, sehingga memungkinkan komunikasi real-time secara efisien antara client dan server. WebSocket juga mendukung koneksi yang persisten, artinya koneksi antara client dan server tetap terjaga meskipun tidak ada data yang dikirimkan.

### Apa keuntungan dan kekurangan menggunakan subscription pada GraphQL?

Keuntungan menggunakan Subscription pada GraphQL antara lain:

1. Real-time data: Subscription memungkinkan aplikasi untuk menerima data secara real-time dan secara otomatis diperbarui saat terjadi perubahan data di server. Hal ini memungkinkan aplikasi untuk memberikan pengalaman pengguna yang lebih responsif dan dinamis.

2. Efisiensi: Dengan menggunakan Subscription, aplikasi hanya akan menerima perubahan data yang relevan dengan permintaan terakhirnya, sehingga menghemat penggunaan bandwidth dan mempercepat waktu respon.

3. Skalabilitas: Subscription memungkinkan aplikasi untuk memperbarui data pada skala besar dengan cepat dan efisien, sehingga cocok untuk digunakan pada aplikasi yang kompleks dan membutuhkan pembaruan data yang cepat dan konstan.

Namun, penggunaan Subscription pada GraphQL juga memiliki beberapa kekurangan, antara lain:

1. Kompleksitas: Penggunaan Subscription pada GraphQL membutuhkan konfigurasi dan pemrograman yang lebih kompleks dibandingkan dengan penggunaan Query dan Mutation.

2. Kompatibilitas: Beberapa server GraphQL mungkin tidak mendukung Subscription, sehingga penggunaan fitur ini bergantung pada implementasi server.

3. Keamanan: Penggunaan Subscription memungkinkan aplikasi untuk menerima data secara real-time, sehingga memerlukan perhatian khusus dalam mengamankan akses ke data agar tidak disalahgunakan atau dicuri oleh pihak yang tidak berwenang.
