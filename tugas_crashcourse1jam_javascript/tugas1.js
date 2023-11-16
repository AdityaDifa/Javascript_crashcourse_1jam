/*
1. promp untuk mengetahui saldo akhir dari apa yang diinputkan user
2. menentukan hari dan tanggal yang ada saat ini di pc kalian
*/
var menu_utama = 1;
var tanggal_sekarang = new Date();

var database_saldo = [0];
var saldo_total = 0;
var tanggal = tanggal_sekarang.getDate(); 
var bulan = (tanggal_sekarang.getMonth() + 1).toString().padStart(2, '0');
var tahun = tanggal_sekarang.getFullYear();
var database_date = [[tanggal, bulan, tahun]]; //tanggal-bulan-tahun


fungsi_menu_utama();


function menu1()
{

    let text = ``;
    let jumlah_database = database_saldo.length;
    //membuat text berisi kumpulan database
    for(var i = 0;i < jumlah_database;i++)
    {
        text += `${database_date[i][0]} - ${database_date[i][1]} - ${database_date[i][2]} saldo = ${database_saldo[i]}\n`;
    }
    alert(`berikut merupakan history saldo anda : \n${text}\nsaldo total = ${saldo_total} tekan ok untuk kembali ke menu utama`);
    
}

function menu2()
{
    var date_sekarang = new Date();
    tanggal = date_sekarang.getDate();
    bulan = (date_sekarang.getMonth() + 1).toString().padStart(2, '0');
    tahun = date_sekarang.getFullYear();

    database_date.push([tanggal,bulan,tahun]);

    let saldo_sementara;
    saldo_sementara = parseInt(prompt("masukan nilai saldo anda : "));
    saldo_total += saldo_sementara;
    database_saldo.push(saldo_sementara);
    alert(`saldo anda sekarang bertambah ${saldo_total}`);
}


function fungsi_menu_utama()
{
    while(menu_utama == 1)
    {
        menu_utama = parseInt(prompt("menu utama : \n1. cek histori\n2. tambah saldo\n3.exit\n\nmasukan menu yang anda inginkan : "));
        switch(menu_utama){
            case 1:
                menu1();
                menu_utama = 1;
                break;
            case 2:
                menu2();
                menu_utama = 1;
                break;
            case 3:
                menu_utama = 3;
                alert("terima kasih menggunakan layanan kami");
                break;
            default:
                alert("masukan menu yang benar!!!");
                menu_utama = 1;
        }
    }
}
