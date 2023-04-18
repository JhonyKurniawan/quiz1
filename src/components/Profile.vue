<template>
  <div class="bg-image">
    <h1 style="margin-right: 50px">Welcome to my Website</h1>
    <div class="text-center d-flex align-items-center justify-content-center">
    </div>
    <div class="card" style="width: 30rem;">
      <img src="/foto.png" class="card-img-top" alt="foto" >
      <div class="card-body" style="text-align: center;">
        <h5 class="card-title"></h5>
        <h3 class="card-text">Nama saya Jhony Kurniawan</h3>
        <p>Saya adalah Mahasiswa Uin Suska Riau</p>
        <p>Fakultas Sains dan Teknologi</p>
        <p>Jurusan Teknik Informatika</p>
        <a href="/about" class="btn btn-primary">About me</a>
      </div>
    </div>
  </div>
</template>

<style>
p {
  max-width: 500px;
  text-align: center;
}

.d-flex {
  display: flex;
  flex-direction: column;
}

.bg-image {
  background-image: url('/bg2.jpg');
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-center {
  text-align: center;
}
.card{
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-img-top {
  width: 70%;
  height: auto;
}
</style>
