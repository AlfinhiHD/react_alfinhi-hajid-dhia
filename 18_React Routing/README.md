# (17) React Routing

### Apa itu Router?
Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA(Single Page Application). SPA merupakan salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.

Adapun cara menggunakan Router dalam ReactJs yaitu dengan cara menggunakan library npm install react-router-dom atau yarn.

### Apa itu parameter URL?
Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman. 

Adapun kegunaan URL Parameter yaitu :
1. Paginasi
2. Penyortiran dan Penyaringan
3. Pencarian
4. Menggambarkan

### Apa saja komponen yang ada pada Hook Routing?

1. useHistory : Memberi kita akses ke instance riwayat yang dapat digunakan untuk bernavigasi

2. useParams : mengembalikan objek pasangan kunci/nilai parameter URL. Gunakan untuk mengakses match.params dari <Route> saat ini.

3. useRouteMatch : Digunakan untuk mencocokkan URL saat ini dengan cara yang sama seperti <Route>. Sebagian besar digunakan untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>