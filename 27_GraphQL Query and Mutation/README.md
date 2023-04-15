# (27) GraphQL Query and Mutation

### Apa itu Mutation dalam GraphQL?
Mutation dalam GraphQL adalah operasi yang digunakan untuk memodifikasi atau mengubah data pada server. Sama seperti Query, Mutation juga didefinisikan di dalam schema GraphQL.

Dalam operasi Mutation, kita dapat menentukan input argument yang dibutuhkan untuk memodifikasi data, dan juga menentukan output data yang akan dikembalikan oleh server setelah proses modifikasi selesai dilakukan.


### 3 Operasi utama dalam GraphQL
Berikut adalah beberapa jenis operasi Mutation pada GraphQL:

1. CREATE (INSERT): Operasi Mutation jenis ini digunakan untuk menambahkan data baru ke dalam database. Contohnya, menambahkan sebuah produk baru pada tabel produk.

2. UPDATE: Operasi Mutation jenis ini digunakan untuk memperbarui data yang sudah ada pada database. Contohnya, mengubah harga produk yang sudah ada pada tabel produk.

3. DELETE: Operasi Mutation jenis ini digunakan untuk menghapus data dari database. Contohnya, menghapus sebuah produk dari tabel produk.

### Contoh syntax mutation dalam GraphQL

- Insert
```
InsertProduct = gql`
  mutation MyMutation($object: Product_insert_input!) {
    insert_Product_one(object: $object) {
      id
      name
      description
    }
  }
`
```

- Update
```
UpdateProduct = gql`
mutation MyMutation($id: String!, $object: Product_set_input!) {
    update_Product_by_pk(pk_columns: {id: $id}, 
    _set: $object) {
        id
        name
        price
    }
    }
`;
```

- Delete
```
HapusProduct = gql`
    mutation MyQuery($id: String!) {
    delete_Product_by_pk(id: $id) {
        id
    }
    }
`;
```