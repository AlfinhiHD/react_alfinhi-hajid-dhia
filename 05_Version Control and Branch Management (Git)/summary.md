# (5) Version Control and Branch Managements (Git)

### Versioning
Jadi sering kali kita jika sedang membuat sesuatu pasti banyak revisian, jadi perlu diadakan versioning, apa itu versioning? versioning berfungsi untuk mengatur versi dari source code program. Tools yang dipakai yaitu ada Version Control System (VCS), Source Code Manager (SCM), dan Revision Control System (RCS). Salah satu VCS yang terkenal yaitu Git.

### Git
Git merupakan salah satu VCS populer yang digunakan para developer untuk mengembangkan software secara bersama-sama. Jadi dengan bantuan git ini kita dapat membuat repository remote yang ada pada github menjadi repository lokal. Hosting service git bernama github.com, yang merupakan layanan cloud berbasi dekstop yang dapat berguna untuk menyimpan sebuah repository secara remote. Terdapat beberapa command git yang sering digunakan yaitu :

1. git add 
Merupakan perintah yang digunakan untuk menambah file barup pada repository.

2. git commit
Git commit digunakan untuk menyimpan apabila terjadi perubahan yang dilakukan pada repository

3. git push
Perintah yang digunakan untuk mentransfer perubahan file ke repository setelah melakukan perubahan


### Workflow Collaboration
Cara kita untuk mengoptimasi workflow dengan github yaitu dengan cara membuat branch diluar dari branch master/main dikarenakan branch master/main merupakan branch yang sudah fix atau tidak mempunyai bug. Adapun hal-hal yang harus diperhatikan yaitu :

- Let the **master branch** undisturbed
- Avoid **direct edit** on development
- Apply the **feature** to development only
- Apply development to **master** when it's done