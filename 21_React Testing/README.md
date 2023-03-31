# (21) React Testing

### Apa itu Testing?
Testing adalah proses untuk memverifikasi bahwa test assertions kita benar dan bahwa code kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

Manfaat testing antara lain yaitu :
1. Aplikasi kita memiliki coverage yang baik
2. Mengurangi bug pada aplikasi


### Apa saja kategori dalam react testing?
Secara umum, react testing dapat dibagi menjadi dua kategori utama: unit testing dan integration testing.

1. Unit Testing
Unit testing adalah jenis pengujian yang dilakukan untuk menguji setiap unit kode secara terpisah. Dalam konteks React, unit testing dilakukan pada komponen React. Tujuan dari unit testing adalah untuk memastikan bahwa setiap komponen berperilaku dengan semestinya dalam situasi yang diharapkan. Contoh pengujian unit pada komponen React meliputi:

- Menguji apakah komponen dapat merender dengan benar.
- Menguji apakah props yang diberikan ke komponen dapat ditangani dengan benar.
- Menguji apakah state komponen berperilaku dengan semestinya saat props atau input berubah.

2. Integration Testing
Integration testing adalah jenis pengujian yang dilakukan untuk menguji bagaimana setiap komponen bekerja bersamaan dalam aplikasi yang sebenarnya. Dalam konteks React, integration testing dilakukan pada bagian-bagian aplikasi yang terdiri dari beberapa komponen. Tujuan dari integration testing adalah untuk memastikan bahwa setiap komponen bekerja dengan semestinya saat digunakan dalam aplikasi yang sebenarnya. Contoh pengujian integrasi pada aplikasi React meliputi:

- Menguji apakah komponen yang berbeda dapat berinteraksi dengan benar.
- Menguji apakah perubahan pada satu komponen memengaruhi perilaku komponen lain dengan benar.
- Menguji apakah aplikasi bekerja dengan semestinya dalam berbagai situasi penggunaan.


### Apa saja tools yang digunakan dalam react testing?

1. Jest: Sebuah kerangka kerja (framework) pengujian (testing) yang sering digunakan untuk pengujian React. Jest menyediakan fitur-fitur seperti pengujian unit, integrasi, snapshot testing, mocking, dan lain-lain.

2. React Testing Library: Sebuah utilitas pengujian (testing) yang dirancang untuk memudahkan pengujian aplikasi React dengan memberikan API yang sederhana dan mudah digunakan. React Testing Library mengikuti prinsip-prinsip pengujian yang berfokus pada pengujian pada perilaku (behavior) dari komponen daripada struktur (structure) dari komponen.

