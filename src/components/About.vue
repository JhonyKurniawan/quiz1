<template>
  <div class="bg-image">
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <h1 style="margin-right: 50px">About me</h1>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Pengalaman dan Keahlian
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            pengalaman saya tidak terlalu luas di bidang ini, maka dari itu saya akan terus memperluas pengetahuan
            saya dalam bidang saya agar kedepannya bisa memperoleh penghasilan di bidang saya
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Passion dan Interest
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            Hobi saya biasanya jika ada waktu saya akan menonton film atau bermain game yang bisa bermain online.
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style>
.bg-image  {
  background-image: url('/bg2.jpg');
  background-size: cover;
  background-repeat: repeat-y;
  min-height: 100vh;
}
.text-center {
  text-align: center;
  padding-top: 50px;
}
.accordion-item {
  max-height: 200px;
  max-width: 1000px;
}

</style>