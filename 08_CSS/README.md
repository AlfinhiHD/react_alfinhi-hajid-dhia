# (7) CSS

### Apa itu CSS?
Cascading Style Sheets (CSS) biasanya digunakan untuk mengatur tampilan elemen yang tertulis dalam bahasa markup, seperti HTML. CSS berfungsi untuk memisahkan konten dari tampilan visualnya di situs. CSS dapat **menghias** halaman web seperti (color, size, font, background, width, height, dll.). CSS juga dapat mengatur **posisi** pada halaman web (float, align, display, position, dll.).

### Bagaimana cara menambahkan CSS?
Ada 3 cara menambahkan file CSS ke dalam HTML :

- External CSS
```
  <link rel="stylesheet" href="main.css">
```
Syntax ini disisipkan ke dalam tag head pada HTML. Format file CSS adalah .css

- Internal CSS
```
<style>
  body {
    background-color: #19355f;
  }
  h1 {
    color: #f47523;
    margin-left: 40px;
  }
</style>

```
Syntax ini dapat digunakan di dalam satu file HTML. Didefinisikan di dalam elemen style, di dalam bagian head atau di dalam bagian body.

- Inline CSS 
```
  <h1 style="color: #19355f;">Hello World</h1>
```
Syntax ini dapat digunakan untuk elemen tunggal pada HTML. Diprioritaskan untuk menerapkan style yang unik.


### CSS Selector
Penanda HTML ke dalam CSS. Dapat menggunakan selector ID dan Class.

1. ID -> (#)
- Setia
- p elemen hanya dapat memiliki satu tag id
- Dalam satu halaman tidak boleh ada dua penamaan id yang berbeda

2. Class -> (.)
- Tag class dengan nama yang sama dapat dipakai berulang-ulang pada satu halaman.
- Satu elemen boleh memiliki lebih dari satu Class yang berbeda-beda.