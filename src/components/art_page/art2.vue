<template>
    <div class="bg-image">
    <div class="text-center">
      <h1>My Ilustration Art</h1>
      <div class="container overflow-hidden">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3 border bg-light">Ilustration Art 04</div>
              <img src="/art/art4.jpg" style="max-width: 100%; height: auto;">
              <button type="button" class="btn btn-success" style="margin-top: 30px">Buy 10$</button>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">Ilustration Art 05</div>
            <img src="/art/art5.jpg" style="max-width: 100%; height: auto;">
            <button type="button" class="btn btn-success" style="margin-top: 30px">Buy 10$</button>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">Ilustration Art 06</div>
            <img src="/art/art6.jpg" style="max-width: 100%; height: auto;">
            <button type="button" class="btn btn-success" style="margin-top: 30px">Buy 10$</button>
          </div>
          <nav aria-label="Page navigation example" >
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="/portopolio" tabindex="-1" aria-disabled="false">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="/portopolio">1</a></li>
              <li class="page-item"><a class="page-link" href="/art_page/art2">2</a></li>
              <li class="page-item"><a class="page-link" href="/art_page/art3">3</a></li>
              <li class="page-item">
                <a class="page-link" href="/art_page/art3">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: "art2"
}
</script>

<style scoped>
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
</style>