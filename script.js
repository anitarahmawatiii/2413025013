const scriptURL = 'https://script.google.com/macros/s/AKfycbw4w5CNGwkej9UxeaZlY9v4AbO6w5YktbaHT9h_nleVogUXtj8Yg4f5wu6azPjm0vi_tQ/exec'
const form = document.forms['submit-to-google-sheet']
const btnSend = document.querySelector('.submit');
const load = document.querySelector('.loading');
const buttons = document.querySelector('.btnSection');
const button = document.querySelectorAll('.btnS');
let article = document.querySelectorAll(".article");
button[0].classList.add('bg-pink-400');
form.addEventListener('submit', e => {
  e.preventDefault();
  load.classList.toggle('hidden');
  btnSend.classList.toggle('hidden');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      load.classList.toggle('hidden');
      btnSend.classList.toggle('hidden');
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been successfully sent.',
        icon: 'Success',
        confirmButtonText: 'Ok'
      });
    })
    .catch(error => console.error('Error!', error.message));
});
let bar = document.getElementsByClassName('fa-bars')[0];
let close = document.getElementsByClassName('close')[0];
let navbar = document.getElementsByClassName('navbar')[0];

function toggle() {
  navbar.classList.toggle('hidden');
  close.classList.toggle('hidden');
}

function toggle2() {
  navbar.classList.toggle('hidden');
  close.classList.toggle('hidden');
}

close.addEventListener('click', toggle);
bar.addEventListener('click', toggle);
document.getElementById('btn').addEventListener('click', function() {
  window.location.href = '#about';
});
buttons.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  
  if (id) {
    button.forEach(function (bt) {
      bt.classList.remove("bg-pink-400");
      e.target.classList.add("bg-pink-400");
    });
    article.forEach(function (art) {
      art.classList.add("hidden");
    });
    const element = document.getElementById(id);
    console.log(element);
    element.classList.remove("hidden");
    console.log(element);
  }
});

const cardItems = [
  {
    img1:"img/projek1.png" ,
    title1: "Tokoh Perintis Grafika Komputer",
    miniTitle: "Alvy Ray Smith",
    desc1:"Pelopor Grafika Komputer dan Co-Founder Pixar.",
    link1:"https://drive.google.com/file/d/1h0Inq6fImmWx-dUb8ue_6DIzAbmay8fD/view?usp=sharing",
    docLink1: "https://docs.google.com/document/d/1E3L8YAbRIs0AivNAQWHmKVI2br2sedWb/edit?usp=sharing&ouid=110257049743951823549&rtpof=true&sd=true ",
    docLink2: "https://drive.google.com/file/d/1bCLqKoJInC5Zf-n8hMv9yZ14gdniVel7/view?usp=sharing "
  },
  { img1: "img/projek2.png", 
    title1: "Algoritma Pembentukan Garis",
    miniTitle: "DDA & Bresenham",
    desc1: "Dua algoritma yang umum digunakan untuk menggambar garis adalah Digital Differential Analyzer (DDA) dan Bresenham's Line Algorithm.",
    link2: " https://drive.google.com/drive/folders/1ZNzwNhpCYwk2xL8IsCE3rtWYEKvuqZSO?usp=drive_link",
    docLink3: "https://drive.google.com/file/d/1DFvKads-CqQLk3IESdqGbr775JBJy9Ab/view?usp=sharing"
  },
  { img1: "img/projek3.png", 
    title1: "Algoritma Pembentukan Lingkaran",
    miniTitle: "Bresenham & Midpoint",
    desc1: "Algoritma Bresenham dan Algoritma Midpoint digunakan untuk menggambar lingkaran dengan efisien. Kedua metode ini bekerja dengan menentukan titik-titik yang membentuk lingkaran tanpa perlu perhitungan yang kompleks.",
    link3: " https://youtu.be/IkOsiYkpA-0?si=vTrDDft7H5JbDkTb",
    docLink4: "https://drive.google.com/file/d/1wjiavdV-RIVc1ATQikbr-8mDHcSILY0Y/view?usp=sharing"
  }
];

window.addEventListener("DOMContentLoaded", function () {
  displayCards(cardItems); // Memanggil fungsi untuk menampilkan semua kartu
});

function displayCards(cardItems) {
  let display = cardItems.map(function (item) {
    return `
    <div class="mx-auto grid pb-9 rounded-md 2md:grid-cols-2 bg-zinc-900 border border-zinc-700 w-[90%] sm:px-9 px-0 2md:px-7 py-5 my-5">
      <div class="w-[100%] ">
        <img class="rounded-lg mx-auto 2md:hidden w-[85%] sm:w-[90%]" src="${item.img2 ? item.img2 : item.img1}" alt="">
        <img class="hidden 2md:grid rounded-lg xl:w-[80%] lg:w-[85%]" src="${item.img1 ? item.img1 : item.img2}" alt="">
        <div class="mx-auto md:mx-9 sm:mx-10 pt-3 w-5/6 ">
          <div class="flex flex-row text-white sm:ml-[-16px] font-custom">
          </div>
        </div>
      </div>
      <div>
        <div class="mx-auto w-[85%] md:w-[90%] lg:w-[110%] text-white py-3 xl:ml-[-14%] lg:ml-[-10%] 2md:ml-[5%] 2md:w-[90%] sm:ml-[24px] font-custom text-lg">
          <h1 class="font-medium text-2xl text-pink-500">${item.title1 ? item.title1 : item.title2}</h1>
          <p class="text-pink-200 text-lg">${item.miniTitle}</p>
          <p class="font-custom">${item.desc1}</p>
        </div>
        <div class="lg:ml-[-80px] 2md:ml-[-10px] xl:ml-[-105px] text-white 2md:px-9 md:px-5 px-7">
          
          <!-- Tombol Video -->
          ${item.link1 ? `
            <button class="hover:bg-transparent hover:border hover:border-white bg-pink-700 px-5 py-2 font-custom rounded-lg">
              <a href="${item.link1}" target="_blank">Video</a>
            </button>
          ` : ''}

          ${item.link2 ? `
            <button class="hover:bg-transparent hover:border hover:border-white bg-pink-700 px-5 py-2 font-custom rounded-lg">
              <a href="${item.link2}" target="_blank">Video</a>
            </button>
          ` : ''}

          ${item.link3 ? `
            <button class="hover:bg-transparent hover:border hover:border-white bg-pink-700 px-5 py-2 font-custom rounded-lg">
              <a href="${item.link3}" target="_blank">Video</a>
            </button>
          ` : ''}

          <!-- Tombol Dokumen -->
          ${item.docLink1 ? `
            <button class="border hover:bg-pink-700 hover:border-0 border-pink-200 px-5 py-2 ml-2 font-custom rounded-lg">
              <a href="${item.docLink1}" target="_blank">Word</a>
            </button>
          ` : ''}

          ${item.docLink2 ? `
            <button class="border hover:bg-pink-700 hover:border-0 border-pink-200 px-5 py-2 ml-2 font-custom rounded-lg">
              <a href="${item.docLink2}" target="_blank">PDF</a>
            </button>
          ` : ''}

          ${item.docLink3 ? `
            <button class="border hover:bg-pink-700 hover:border-0 border-pink-200 px-5 py-2 ml-2 font-custom rounded-lg">
              <a href="${item.docLink3}" target="_blank">PDF</a>
            </button>
          ` : ''}

          ${item.docLink4 ? `
            <button class="border hover:bg-pink-700 hover:border-0 border-pink-200 px-5 py-2 ml-2 font-custom rounded-lg">
              <a href="${item.docLink4}" target="_blank">PDF</a>
            </button>
          ` : ''}

        </div>
      </div>
    </div>
    `;
  });

  let container = document.querySelector(".containerCard");
  container.innerHTML = display.join(""); // Gunakan join() agar tidak ada "undefined"
}
