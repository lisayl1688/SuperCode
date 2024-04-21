



const gallery = document.getElementById("gallery")
gallery.innerHTML = '<figure class="figure1"><img class="katze1" src="./assets/img/michael-sum-LEpfefQf4rU-unsplash.jpg" alt=""><p class="text1"></p></figure><figure class="figure2"><img class="katze2" src="./assets/img/michael-sum-LEpfefQf4rU-unsplash.jpg" alt=""><p class="text2"></p></figure><figure class="figure3"><img class="katze3" src="./assets/img/michael-sum-LEpfefQf4rU-unsplash.jpg" alt=""><p class="text3"></p></figure>';

const fig1 = document.querySelector(".katze1")
fig1.style.width ="50%";
const text1 = document.querySelector(".text1")
text1.innerHTML = "Fig1";

const fig2 = document.querySelector(".katze2")
fig2.style.width ="50%";
const text2 = document.querySelector(".text2")
text2.innerHTML = "Fig2";

const fig3 = document.querySelector(".katze3")
fig3.style.width ="50%";
const text3 = document.querySelector(".text3")
text3.innerHTML = "Fig3";