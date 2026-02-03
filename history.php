<?php
require('PHP/db.php');

$data = query("SELECT * FROM klasifikasiKeuangan ORDER BY nomor DESC");
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/index.css">
   <style>
   .conHis {
     padding: 16px;
   }
 
 .card {
     background: white;
     border-radius: 18px;
     box-shadow: 0 10px 25px rgba(0,0,0,0.08);
     padding: 16px;
     overflow-x: auto;
   }
 
 .card h2 {
     margin-bottom: 12px;
     color: #0f766e;
     font-size: 20px;
   }
 
 table {
     width: 100%;
     border-collapse: collapse;
     min-width: 500px;
   }
 
 thead {
     background: #0f766e;
     color: white;
   }
 
 th, td {
     padding: 12px;
     text-align: center;
     font-size: 14px;
   }
 
 th {
     font-weight: 600;
   }
 
 tbody tr {
     border-bottom: 1px solid #e5e7eb;
     transition: background 0.2s ease;
   }
 
 tbody tr:hover {
     background: #f0fdfa;
   }
 
 .badge {
     padding: 6px 12px;
     border-radius: 999px;
     font-size: 12px;
     font-weight: 600;
     display: inline-block;
     min-width: 90px;
   }
 
   /* Warna kategori */
   .badge-sangat-kecil {
     background: #fee2e2;
     color: #991b1b;
   }
 
   .badge-kecil {
     background: #ffedd5;
     color: #9a3412;
   }
 
   .badge-sedang {
     background: #fef3c7;
     color: #92400e;
   }
 
   .badge-besar {
     background: #dcfce7;
     color: #166534;
   }
 
   .badge-sangat-besar {
     background: #dbeafe;
     color: #1e3a8a;
   }
 </style>
  <title>History KualifikasiApp</title>
</head>

<body>

  <h1>History KualifikasiApp</h1>

  <div class="conHis">
    <div class="card">
      <h2>Riwayat Klasifikasi Keuangan</h2>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Date</th>
            <th>Pemasukan</th>
            <th>Pengeluaran</th>
            <th>Keuntungan</th>
          </tr>
        </thead>
        <tbody>
          <!-- 5 Baris contoh kategori -->
          <?php $no = 1; ?>
<?php foreach($data as $row): ?>
<tr>
  <td><?= $no++; ?></td>
  <td><?= $row['tanggal'] ?></td>
  <td><?= number_format($row['pemasukan']) ?></td>
  <td><?= number_format($row['pengeluaran']) ?></td>
  <td>
    <span class="badge badge-<?= strtolower(str_replace(' ', '-', $row['kategori'])) ?>">
      <?= $row['kategori'] ?>
    </span>
  </td>
</tr>
<?php endforeach; ?>
        </tbody>
      </table>

    </div>
  </div>

</body>
</html>