function cek() {
    //   if (namaKaryawan.value == "" || gajiPokok.value == "") {
    //     alert("Kolom Kosong. Harap diisi !!!!");
    //     exit;
    if (namaKaryawan.value === "") {
      alert("Kolom Kosong. Harap diisi !!!!");
    } else if (gajiPokok.value === "") {
      alert("GAJI POKOKNYA DIISI DULU !!!!");
    }
  }

  function hitungGaji() {
    cek();
    // Mendapatkan input dari pengguna
    var namaKaryawan = document.getElementById("namaKaryawan").value;
    var gajiPokok = parseFloat(
      document.getElementById("gajiPokok").value
    );

    // Menghitung tunjangan (20% dari gaji pokok)
    var tunjangan = 0.2 * gajiPokok;

    // Menghitung pajak (15% dari gaji pokok ditambah tunjangan)
    var pajak = 0.15 * (gajiPokok + tunjangan);

    // Menghitung gaji bersih
    var gajiBersih = gajiPokok + tunjangan - pajak;

    // Menampilkan hasil di elemen dengan id "hasilGaji"
    document.getElementById("hasilGaji").innerHTML =
      "Nama Karyawan: " + namaKaryawan + "<br>Gaji Bersih: " + gajiBersih;
  }
  // function refresh(){
  //   document.getElementById("ttl").reset();
  // }
