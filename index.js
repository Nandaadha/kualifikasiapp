function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const btn = document.getElementById("start");

btn.addEventListener("click", () => {
  btn.classList.add("clicked");

  setTimeout(() => {
    btn.classList.remove("clicked");
  }, 1000); // 300ms (0.3 detik)
});

document.getElementById("start").addEventListener("click",inti);


async function inti(){
  document.getElementById("con41").innerHTML = "";
document.getElementById("con42").innerHTML = "";
  let pemasukan = +document.getElementById("inptPemasukan").value;
  let pengeluaran = +document.getElementById("inptPengeluaran").value;
  if (isNaN(pemasukan) || isNaN(pengeluaran) || pemasukan <= 0 || pengeluaran < 0) {
  alert("Input tidak valid. Masukkan angka yang benar!");
  return;
}
  await kualifikasiPemasukan(pemasukan);
  await kualifikasiPengeluaran(pengeluaran);
  ;
  insertDb(pemasukan,pengeluaran,await keuntungan(pemasukan, pengeluaran));
}
async function kualifikasiPemasukan(inpt){
  let output = "";
  let prediksi = 0;
  let bobot = 0.5;
  let eror = 0;
  let rate = 0.01;
  let target = 0;
  let kat = "";
  let kategory = ["sangat kecil","kecil","sedang","besar","sangat besar"];
  
  prediksi = inpt * bobot / 100;
  if(prediksi > 4){
    target = 4;
  } else{
  target = Math.round(prediksi);
}
if(prediksi == 1){
    target++;
  }
  if(prediksi > target){
    eror = prediksi - target;
    for(let i = 0; eror > 0.01 && i < 1000; i++){
      bobot = bobot-(rate * eror);
      prediksi = inpt * bobot / 100;
      eror = prediksi - target;
      output = `<p>Iterasi ke-${i}</p><p>Prediksi: ${prediksi.toFixed(4)}</p>
	    <p>Bobot: ${bobot.toFixed(4)}</p>
	    <p>Error: ${eror.toFixed(4)}</p>
	    <p>_ _ _ _ _ _ _ _</p>`;
  document.getElementById("con41").innerHTML= output;
  await sleep(100);
    }
  } else {
    eror = target - prediksi;
    for(let i = 0; eror > 0.01 && i < 1000; i++){
      bobot = bobot+(rate * eror);
      prediksi = inpt * bobot / 100;
      eror = target - prediksi;
      output = `<p>Iterasi ke-${i}</p><p>Prediksi: ${prediksi.toFixed(4)}</p>
	    <p>Bobot: ${bobot.toFixed(4)}</p>
	    <p>Error: ${eror.toFixed(4)}</p>
	    <p>_ _ _ _ _ _ _ _</p>`;
  document.getElementById("con41").innerHTML= output;
  await sleep(100);
    }
  }
  output = `<p>Prediksi: ${prediksi.toFixed(4)}</p>
	    <p>Bobot: ${bobot.toFixed(4)}</p>
	    <p>Error: ${eror.toFixed(4)}</p>
	    <p>_ _ _ _ _ _ _ _</p><p>Kategori: ${kategory[target]}`;
  document.getElementById("con41").innerHTML= output;
  console.log("Bobot: " + bobot + "\n" + "Prediksi: " + prediksi + "\n" + "Error: " + eror + "\n" + "Kategori: " + kategory[target])
}
async function kualifikasiPengeluaran(inpt){
  let output = "";
    let prediksi = 0;
  let bobot = 0.5;
  let eror = 0;
  let rate = 0.01;
  let target = 0;
  let kat = "";
  let kategory = ["sangat kecil","kecil","sedang","besar","sangat besar"];
  
  prediksi = inpt * bobot / 100;
  if(prediksi > 4){
    target = 4;
  } else {
  target = Math.round(prediksi);
  }
  
  if(prediksi > target){
    eror = prediksi - target;
    for(let i = 0; eror > 0.01 && i < 1000; i++){
      bobot = bobot-(rate * eror);
      prediksi = inpt * bobot / 100;
      eror = prediksi - target;
      output = `<p>Iterasi ke-${i}</p><p>Prediksi: ${prediksi.toFixed(4)}</p>
	    <p>Bobot: ${bobot.toFixed(4)}</p>
	    <p>Error: ${eror.toFixed(4)}</p>
	    <p>_ _ _ _ _ _ _ _</p>`;
  document.getElementById("con42").innerHTML= output;
  await sleep(100);
    }
  } else {
    eror = target - prediksi;
    for(let i = 0; eror > 0.01 && i < 1000; i++){
      bobot = bobot+(rate * eror);
      prediksi = inpt * bobot / 100;
      eror = target - prediksi;
      output = `<p>Iterasi ke-${i}</p><p>Prediksi: ${prediksi.toFixed(4)}</p>
	    <p>Bobot: ${bobot.toFixed(4)}</p>
	    <p>Error: ${eror.toFixed(4)}</p>
	    <p>_ _ _ _ _ _ _ _</p>`;
  document.getElementById("con42").innerHTML= output;
  await sleep(100);
    }
  }
  output = `<p>Prediksi: ${prediksi.toFixed(4)}</p>
	    <p>Bobot: ${bobot.toFixed(4)}</p>
	    <p>Error: ${eror.toFixed(4)}</p>
	    <p>_ _ _ _ _ _ _ _</p><p>Kategori: ${kategory[target]}</p>`;
  document.getElementById("con42").innerHTML= output;
  console.log("Bobot: " + bobot + "\n" + "Prediksi: " + prediksi + "\n" + "Error: " + eror + "\n" + "Kategori: " + kategory[target]);
}

async function keuntungan(pemasukan,pengeluaran){
  let inpt = pemasukan-pengeluaran;
  let output = "";
    let prediksi = 0;
  let bobot = 0.5;
  let eror = 0;
  let rate = 0.01;
  let target = 0;
  let kat = "";
  let kategory = ["sangat kecil","kecil","sedang","besar","sangat besar"];
  
  prediksi = inpt * bobot / 100;
  
  if(prediksi > 4){
    target = 4;
  } else {
  target = Math.round(prediksi);
  }
  
  
  if(prediksi > target){
    eror = prediksi - target;
    for(let i = 0; eror > 0.01 && i < 1000; i++){
      bobot = bobot-(rate * eror);
      prediksi = inpt * bobot / 100;
      eror = prediksi - target;
      output = `<p>Iterasi ke-${i}</p><p>Prediksi: ${prediksi.toFixed(4)}</p>
	    <p>Bobot: ${bobot.toFixed(4)}</p>
	    <p>Error: ${eror.toFixed(4)}</p>
	    <p>_ _ _ _ _ _ _ _</p>`;
  document.getElementById("con51").innerHTML= output;
  await sleep(100);
    }
  } else {
    eror = target - prediksi;
    for(let i = 0; eror > 0.01 && i < 1000; i++){
      bobot = bobot+(rate * eror);
      prediksi = inpt * bobot / 100;
      eror = target - prediksi;
      output = `<p>Iterasi ke-${i}</p><p>Prediksi: ${prediksi.toFixed(4)}</p>
	    <p>Bobot: ${bobot.toFixed(4)}</p>
	    <p>Error: ${eror.toFixed(4)}</p>
	    <p>_ _ _ _ _ _ _ _</p>`;
  document.getElementById("con51").innerHTML= output;
  await sleep(100);
    }
  }
  output = `<p>Prediksi: ${prediksi.toFixed(4)}</p>
	    <p>Bobot: ${bobot.toFixed(4)}</p>
	    <p>Error: ${eror.toFixed(4)}</p>
	    <p>_ _ _ _ _ _ _ _</p><p>Keuntungan: ${kategory[target]}</p>`;
  document.getElementById("con51").innerHTML= output;
  console.log("Bobot: " + bobot + "\n" + "Prediksi: " + prediksi + "\n" + "Error: " + eror + "\n" + "Kategori: " + kategory[target]);
  return kategory[target];
}

function insertDb(pemasukan,pengeluaran,kategori){
  let hasil = [pemasukan,pengeluaran,kategori];

  fetch("PHP/db.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `pemasukan=${encodeURIComponent(pemasukan)}&pengeluaran=${encodeURIComponent(pengeluaran)}&kategori=${encodeURIComponent(kategori)}`
  })
  .then(res => res.text())
  .then(res => {
    document.getElementById("debug").innerText = res;
    console.log("Response PHP:", res);
  })
  .catch(err => {
    document.getElementById("debug").innerText = "Error: " + err;
  });
}





