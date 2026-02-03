<?php
$pemasukan   = $_POST['pemasukan'] ?? null;
$pengeluaran = $_POST['pengeluaran'] ?? null;
$kategori    = $_POST['kategori'] ?? null;

//echo "OK: pemasukan=$pemasukan, pengeluaran=$pengeluaran, kategori=$kategori";

// KONEKSI DATABASE
$conn = mysqli_connect("localhost", "root", "", "project");
function query($query) {
  global $conn;
  $result = mysqli_query($conn, $query);
  $rows = [];
  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }
  return $rows;
}




if (!$conn) {
  die("Koneksi gagal: " . mysqli_connect_error());
}



// AUTO TANGGAL
$tanggal = date("Y-m-d");

// JIKA DATA ADA, LAKUKAN INSERT
if ($pemasukan !== null && $pengeluaran !== null && $kategori !== null) {

  $query = "INSERT INTO klasifikasiKeuangan 
            (tanggal, pemasukan, pengeluaran, kategori)
            VALUES (?, ?, ?, ?)";

  $stmt = mysqli_prepare($conn, $query);
  mysqli_stmt_bind_param($stmt, "siis", 
    $tanggal,
    $pemasukan,
    $pengeluaran,
    $kategori
  );

  if (mysqli_stmt_execute($stmt)) {
    /*echo json_encode([
      "status" => "success",
      "message" => "Data berhasil disimpan"
    ]); */
  } else {
   /* echo json_encode([
      "status" => "error",
      "message" => mysqli_error($conn)
    ]);*/
  } 

  mysqli_stmt_close($stmt);
}