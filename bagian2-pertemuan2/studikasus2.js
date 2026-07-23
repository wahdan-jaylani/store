class Produk {
    constructor(nama, harga) {
        this.nama = nama;
        this.harga = harga;
    }

    tampilkan() {
        console.log(`Produk: ${this.nama}`);
        console.log(`Harga: Rp${this.harga}`);
    }
}

const produk1 = new Produk("Laptop", 7000000);
const produk2 = new Produk("Mouse", 150000);
const produk3 = new Produk("Keyboard", 300000);

produk1.tampilkan();
produk2.tampilkan();
produk3.tampilkan();