# (26) Introduction GraphQL and Apollo Client Setup

### Apa itu GraphQL?
GraphQL adalah bahasa kueri (query language) dan juga sistem runtime untuk mengambil dan memanipulasi data dari berbagai sumber oleh aplikasi web atau mobile. Dalam GraphQL, klien mengirimkan permintaan untuk data ke server melalui query yang ditulis dalam format GraphQL. Server kemudian memproses permintaan tersebut dan mengembalikan respons dalam format JSON atau bentuk lain yang diminta klien. GraphQL memiliki kelebihan dalam hal fleksibilitas dan efisiensi, karena memungkinkan klien untuk memilih dan mendapatkan hanya data yang diperlukan dari sumber yang tersedia, serta dapat mempercepat pengembangan aplikasi karena tidak perlu melakukan multiple request ke server.


### 3 Operasi utama dalam GraphQL

1. Query
Query adalah operasi yang digunakan untuk mengambil data dari server. Dalam query, klien hanya melakukan operasi baca (read) terhadap data yang ada di server. Query pada GraphQL diwakili oleh struktur tree-like (mirip dengan JSON) yang menggambarkan data yang diinginkan, serta data-data terkait yang akan dikembalikan oleh server.

2. Mutation
Mutation adalah operasi yang digunakan untuk mengubah data pada server. Dalam mutation, klien dapat melakukan operasi tulis (write) terhadap data yang ada di server, seperti menambahkan, mengubah, atau menghapus data. Mutation pada GraphQL memiliki struktur yang mirip dengan query, namun dilakukan melalui operasi tulis.

3. Subscription 
Subscription adalah operasi yang digunakan untuk mengatur pengiriman data secara real-time dari server ke klien. Dalam subscription, klien dapat berlangganan pada data yang berubah-ubah (misalnya, data sensor yang terus diperbarui) dan menerima notifikasi dari server ketika ada perubahan pada data yang telah dilangganan.

Dengan adanya operasi query, mutation, dan subscription, GraphQL memungkinkan pengembang untuk melakukan berbagai operasi pada data secara efisien dan fleksibel.

### Apa itu Apollo Client?
Apollo Client adalah sebuah library open source untuk JavaScript yang digunakan untuk mengelola state dan melakukan pengambilan data pada aplikasi web atau mobile yang menggunakan GraphQL. Apollo Client memiliki banyak fitur berguna dalam mengembangkan aplikasi GraphQL, seperti caching, error handling, dan management state. Dengan adanya Apollo Client, pengembang dapat mempercepat pengembangan aplikasi web atau mobile yang menggunakan GraphQL, karena Apollo Client menyediakan banyak fitur yang dapat membantu dalam mengelola data dan state aplikasi.