let ogrenci = {
    ad: 'Can',
    yas: 29,
    email: 'cnboz@hotmail.com',
    sinif: 12,
    dersler: [
        { isim: 'matematik', puan: 90 },
        { isim: 'fizik', puan: 80 },
        { isim: 'kimya', puan: 85 },],

    // login() {
    //     console.log('Öğrenci giriş yaptı');
    // },

    // logout() {
    //     console.log('Öğrenci giriş yaptı');
    // },

    printLessons() {
        console.log(this.dersler); //(3) ['matematik', 'fizik', 'kimya']
        // console.log(this); //object: bu fonk.nun objectte yani nesnede bulunduğunu anlatır. 
        this.dersler.forEach(ders => {
            console.log(ders.isim, ders.puan);
        });
    }
    // matematik 90
    //  fizik 80
    //  kimya 85
};
// console.log(this); //çıktı: window 
ogrenci.printLessons();
// ogrenci.login();
// ogrenci.logout();