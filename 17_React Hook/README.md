# (17) React Hook

### Apa itu React Hooks?
React Hooks adalah sebuah fitur pada React yang memungkinkan kita untuk menggunakan state dan lifecycle pada functional component. Sebelum adanya React Hooks, state hanya dapat digunakan pada class component menggunakan constructor dan setState(), sedangkan lifecycle hanya dapat digunakan pada class component dengan menggunakan lifecycle methods seperti componentDidMount(), componentDidUpdate(), dan componentWillUnmount().

Adapun macam-macam hooks yaitu :
- useState
- useEffect
- useContext
- useReducer
- useRef

### Implementasi useState & useEffect di Component?
1. useState merupakan salah satu hook pada React yang digunakan untuk membuat state pada functional component. State adalah data yang digunakan oleh komponen untuk memperbarui tampilan dan memengaruhi perilaku dari komponen tersebut. 

2. useEffect adalah salah satu hook pada React yang digunakan untuk mengelola siklus hidup atau lifecycle dari komponen. useEffect memungkinkan kita untuk mengeksekusi kode tertentu setelah komponen di-mount atau di-update.

### Apa itu custom hooks?
Custom hooks adalah salah satu fitur yang ada pada React yang memungkinkan kita untuk mengelola logika terkait dengan state atau efek samping (side effects) dalam komponen yang terpisah dari komponen itu sendiri. Dengan menggunakan custom hooks, kita dapat membagikan logika tertentu kepada beberapa komponen yang berbeda dan mencegah terjadinya duplikasi kode.

Untuk membuat custom hooks, kita cukup membuat sebuah fungsi JavaScript yang mengandung logika yang kita inginkan, dan memanggil hook bawaan dari React seperti useState atau useEffect. Nama dari custom hook biasanya diawali dengan kata use.