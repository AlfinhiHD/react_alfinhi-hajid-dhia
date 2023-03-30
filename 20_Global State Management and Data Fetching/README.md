# (20) Global State Management

### Apa itu Redux?
Redux merupakan salah satu library state management yang saat ini populer digunakan pada React. Redux membantu kita dalam mengelola state pada aplikasi dengan memisahkan state dari komponen React dan menyimpannya pada suatu tempat yang disebut dengan store. Ada 3 Redux Libraries dan Tools :

1. React-Redux
2. Redux Toolkit
3. Redux DevTools Extension


### Kapan saat yang tepat untuk menggunakan Redux?

1. Banyak state yang perlu ditaruh di banyak tempat
2. State pada app sering berubah
3. Logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
5. Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu


### Apa saja komponen penting di Redux?

1. Store: Store merupakan tempat penyimpanan state secara global pada aplikasi. Semua state yang dibutuhkan oleh aplikasi akan disimpan pada store, dan dapat diakses dari berbagai komponen yang terhubung dengan store tersebut.

2. Action: Action adalah objek JavaScript yang mengindikasikan perubahan pada state. Setiap action harus memiliki property type, yang digunakan untuk menentukan tipe perubahan pada state yang akan dilakukan. Action dapat dikirimkan ke store menggunakan fungsi dispatch().

3. Reducer: Reducer adalah fungsi JavaScript yang digunakan untuk mengubah state pada store berdasarkan action yang diterima. Reducer harus menerima dua parameter, yaitu state saat ini dan action yang diterima, dan harus mengembalikan state baru.

