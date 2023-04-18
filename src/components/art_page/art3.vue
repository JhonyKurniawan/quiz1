<template>
  <div class="bg-image">
    <div class="text-center">
      <h1>My Ilustration Art</h1>
      <div class="container overflow-hidden">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3 border bg-light">Ilustration Art 07</div>
              <img src="/art/art7.jpg" style="max-width: 100%; height: auto;">
              <button type="button" class="btn btn-success" style="margin-top: 30px">Buy 10$</button>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">Ilustration Art 08</div>
            <img src="/art/art8.jpg" style="max-width: 100%; height: auto;">
            <button type="button" class="btn btn-success" style="margin-top: 30px">Buy 10$</button>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">Ilustration Art 09</div>
            <img src="/art/art9.jpg" style="max-width: 100%; height: auto;">
            <button type="button" class="btn btn-success" style="margin-top: 30px">Buy 10$</button>
          </div>
          <nav aria-label="Page navigation example" >
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="/art_page/art2" tabindex="-1" aria-disabled="true" >Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="/portopolio">1</a></li>
              <li class="page-item"><a class="page-link" href="/art_page/art2">2</a></li>
              <li class="page-item"><a class="page-link" href="/art_page/art3">3</a></li>
              <li class="page-item disabled">
                <a class="page-link" href="#">Next</a>
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
  name: "art3"
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