<template>
  <div class="bg-image">
    <div class="text-center">
      <h1 class="contact-heading">Contact Me</h1>
      <p>Hubungi Saya jika ada pertanyaan lebih lanjut</p>
      <div class="contact-links">
        <a href="https://t.me/kurkur78"><i class="fab fa-telegram"></i>
          <img src="/public/contact/tele.png" alt="Telegram">
        </a>
        <a href="https://wa.me/+6289696052172"><i class="fab fa-whatsapp"></i>
          <img src="/public/contact/wa.png" alt="Whatsapp">
        </a>
        <a href="https://www.instagram.com/jhony.kurniawan78/"><i class="fab fa-instagram"></i>
          <img src="/public/contact/ig.png" alt="Instagram">
        </a>
        <a href="https://github.com/JhonyKurniawan"><i class="fab fa-github"></i>
          <img src="/public/contact/github.png" alt="Github">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

.contact-links a img {
  width: 80px;
  height: 80px;
  margin-right: 40px;
}

.contact-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
}

.contact-links a {
  color: #333;
  transition: color 0.2s ease-in-out;
}

.contact-links a:hover {
  color: #007bff;
}

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

.contact-heading {
  text-align: center;
  margin-top: 20px;
}
</style>