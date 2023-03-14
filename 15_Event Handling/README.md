# (15) Event Handling

### Apa itu State?
State merupakan suatu data private pada sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak dapat diakses pada component lain. State juga dapat disebut sebagai penyimpanan data sementara. 

State :
1. Data yang bisa dimodifikasi menggunakan state
2. Setiap terjadi modifikasi akan terjadi render ulang
3. Bersifat Asynchronous
4. Dipakai dalam class

### Perbedaan Stateful dan Stateless
Adapun class pada bootstrap yaitu :

| Stateless | Statefull |
| ----------- | ----------- |
| Tidak tahu tentang aplikasi | Mengerti tentang aplikasi |
| Tidak melakukan data fetching (pengambilan data) | Melakukan data fetching (pengambilan data) |
| Tujuan utamanya adalah visualisasi | Berinteraksi dengan aplikasi |
| Dapat digunakan kembali | Tidak dapat digunakan kembali |
| Hanya berkomunikasi dengan induk langsungnya | Meneruskan status dan data ke anak-anaknya |


### Event handling dalam react
Event handling adalah suatu metode untuk menangani sebuah event / aksi yang diberikan pengguna kepada suatu komponen. 

Contoh list event :
- onChange, onSubmit
- onClick, onDoubleClick, onMouseOver
- onError, onLoad
