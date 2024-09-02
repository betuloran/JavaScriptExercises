let ogrenci={
    ad: 'Can',
    yas: 29,
    email: 'cnboz@hotmail.com',
    sinif: 12,
    dersler: ['matematik', 'fizik', 'kimya'],

    login: function () {  
        console.log('Öğrenci giriş yaptı');

    },
    
//VEYA BİR DİĞER KULLANIMI: 
// login() {  
//     console.log('Öğrenci giriş yaptı');

// },

    logout: function () {
        console.log('Öğrenci çıkış yaptı');
    },

    // logout() {  
    //     console.log('Öğrenci giriş yaptı');
    // },

};

ogrenci.login();
ogrenci.logout();