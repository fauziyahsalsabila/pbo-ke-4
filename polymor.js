// Superclass 1
class Tiket {
    constructor(nama) {
        this.nama = nama;
    }
    hargatiket() {
        console.log("Harga tiket adalah" + this.nama);
    }
}
// Subclass 1
class TiketEkonomi extends Tiket {
    constructor(nama) {
        super(nama);
    }
    hargatiket() {
        console.log("Harga tiket Ekonomi: " + this.nama);
    }
}
// Superclass 2
class Penumpang {
    constructor(nama) {
        this.nama = nama;
    }
    infoPenumpang() {
        console.log("Nama penumpang: " + this.nama);
    }
}
// Subclass 2
class PenumpangDewasa extends Penumpang {
    constructor(nama) {
        super(nama);
    }
    infoPenumpang() {
        console.log("Nama penumpang dewasa: " + this.nama);
    }
}
// Superclass 3
class Kapal {
    constructor(namaKapal) {
        this.namaKapal = namaKapal;
    }
    infoKapal() {
        console.log("Nama kapal: " + this.namaKapal);
    }
}
// Subclass 3
class KapalFerry extends Kapal {
    constructor(namaKapal) {
        super(namaKapal);
    }
    infoKapal() {
        console.log("Nama kapal ferry: " + this.namaKapal);
    }
}
// Superclass 4
class Rute {
    constructor(namaRute) {
        this.namaRute = namaRute;
    }
    infoRute() {
        console.log("Rute perjalanan: " + this.namaRute);
    }
}
// Subclass 4
class RuteDomestik extends Rute {
    constructor(namaRute) {
        super(namaRute);
    }
    infoRute() {
        console.log("Rute domestik: " + this.namaRute);
    }
}
// Superclass 5
class Pelayanan {
    constructor(namaPelayanan) {
        this.namaPelayanan = namaPelayanan;
    }
    infoPelayanan() {
        console.log("Jenis pelayanan: " + this.namaPelayanan);
    }
}
// Subclass 5
class PelayananMakanan extends Pelayanan {
    constructor(namaPelayanan) {
        super(namaPelayanan);
    }
    infoPelayanan() {
        console.log("Jenis pelayanan makanan: " + this.namaPelayanan);
    }
}

// Membuat objek dari masing-masing kelas
const tiketEkonomi = new TiketEkonomi("1.000.000");
const penumpangDewasa = new PenumpangDewasa("Fauziyah Salsabila");
const kapalFerry = new KapalFerry("Ferry VIP");
const ruteDomestik = new RuteDomestik("Jakarta - Surabaya");
const pelayananMakanan = new PelayananMakanan("Khas Indonesia");

// Memanggil metode untuk setiap objek
tiketEkonomi.hargatiket();           
penumpangDewasa.infoPenumpang();     
kapalFerry.infoKapal();              
ruteDomestik.infoRute();             
pelayananMakanan.infoPelayanan();    
