# (14) React Fundamental

### Apa itu JSX?
JSX merupakan singkatan dari Javascript XML. JSX merupakan ekstensi pada javascript yang memungkinkan kita untuk menulis kode HTML di dalam JavaScript. Dengan menggunakan JSX, kita dapat membuat komponen React dengan lebih mudah dan cepat. Salah satu perbedaan yang menonjol yaitu ada pada penggunaan nama "class" menjadi "className".

### Apa itu React Component?
React Component adalah bagian kode yang dapat digunakan kembali untuk menentukan tampilan, behavior, dan state dari sebagian UI. React Component dibagi dua yaitu :

1. Functional Component
Komponen yang didefinisikan dengan sebuah fungsi JavaScript dan mengembalikan sebuah elemen React. Functional component merupakan komponen yang sederhana, mudah dibuat dan digunakan.

2. Class Component
Komponen yang didefinisikan dengan sebuah class JavaScript yang extends ke React.Component dan mengimplementasikan method render(). Class component lebih kompleks dan dapat memiliki lebih banyak method seperti lifecycle method dan state.


### Apa itu props?
1. Singkatan dari properties, membuat kita dapat memberikan argumen/data pada component.
2. Props membantu untuk membuat komponen menjadi lebih dinamis.
3. Props dioper ke component sama seperti memberikan atribut pada tag HTML.
4. Props pada component adalah read-only dan tidak dapat diubah.