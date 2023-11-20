const katanaListesi = [
  {
    "katana_isim": "Yıldırım Kılıcı",
    "fiyat": 250,
    "uzunluk_cm": 65,
    "img": "https://img.fruugo.com/product/4/27/986555274_max.jpg"
  },
  {
    "katana_isim": "Kızıl Ejder",
    "fiyat": 180,
    "uzunluk_cm": 70,
    "img": "https://img.fruugo.com/product/7/18/794355187_max.jpg"
  },
  {
    "katana_isim": "Gök Gürültüsü",
    "fiyat": 270,
    "uzunluk_cm": 68,
    "img": "https://katana.store/cdn/shop/products/black-wooden-katana-433.jpg?v=1683811427&width=2048"
  },
  {
    "katana_isim": "Buz Pınarı",
    "fiyat": 200,
    "uzunluk_cm": 63,
    "img": "https://img.fruugo.com/product/1/10/200038101_max.jpg"
  },
  {
    "katana_isim": "Rüzgar Kesici",
    "fiyat": 150,
    "uzunluk_cm": 71,
    "img": "https://sc04.alicdn.com/kf/H5f80f1e0f3e34f41adf9316c218024ce4.jpg"
  },
  {
    "katana_isim": "Kan Gözyaşı",
    "fiyat": 280,
    "uzunluk_cm": 67,
    "img": "https://img.joomcdn.net/265e3401e627d837020e7966833c2c5c6b8cb4e7_original.jpeg"
  },
  {
    "katana_isim": "Gece Yıldızı",
    "fiyat": 190,
    "uzunluk_cm": 69,
    "img": "https://www.maveraosgb.com.tr/uploads/44551/Bleach-kurosaki-ichigo-katana-anime-cosplay-ah%C5%9Fap-1.jpeg"
  },
  {
    "katana_isim": "Gökyüzü Kanı",
    "fiyat": 260,
    "uzunluk_cm": 72,
    "img": "https://preview.free3d.com/img/2015/11/2279440263254377711/yj20j1n6.jpg"
  },
  {
    "katana_isim": "Ay Işığı",
    "fiyat": 230,
    "uzunluk_cm": 66,
    "img": "https://borkim.com.tr/thumbs/211204/Ah%C5%9Fap-k%C4%B1l%C4%B1%C3%A7-bleach-aikawa-robu-japon-katana-cosplay-6-img.jpg"
  },
  {
    "katana_isim": "Güneş Rüzgarı",
    "fiyat": 270,
    "uzunluk_cm": 64,
    "img": "https://aselicyapi.com.tr/4-Anime-cosplay-2nd-nesil-kitetsu-zoro-k%C4%B1l%C4%B1%C3%A7-silah_thumb/58403-upload.jpg"
  },
  {
    "katana_isim": "Zehirli Ok",
    "fiyat": 210,
    "uzunluk_cm": 73,
    "img": "https://www.dhresource.com/webp/m/0x0/f2/albu/g17/M00/C1/1B/rBVa4l__8VSAFDbwAAWqxIySgq0078.jpg"
  },
  {
    "katana_isim": "Gölgelerin Dansı",
    "fiyat": 195,
    "uzunluk_cm": 68,
    "img": "https://thepeppystore.in/cdn/shop/files/WhatsAppImage2023-06-06at11.56.56AM_22c5b402-29d9-4f48-8216-ed95f219e776_800x.jpg?v=1697636979"
  },
  {
    "katana_isim": "Kum Fırtınası",
    "fiyat": 150,
    "uzunluk_cm": 70,
    "img": "https://sc04.alicdn.com/kf/H52edbe31c97c4ab3823d13765ca05a764.jpg"
  },
  {
    "katana_isim": "Sis Savaşçısı",
    "fiyat": 280,
    "uzunluk_cm": 67,
    "img": "https://aselicyapi.com.tr/3-Kimetsu-hi%C3%A7bir-yaiba-orijinal-anime-katana-cosplay_thumb/226450-upload.jpg"
  },
  {
    "katana_isim": "Yılan Gözü",
    "fiyat": 190,
    "uzunluk_cm": 71,
    "img": "https://img.joomcdn.net/7f1ce6cba184afd909f029e67afed9254745aee9_original.jpeg"
  },
  {
    "katana_isim": "Kara Yıldız",
    "fiyat": 200,
    "uzunluk_cm": 65,
    "img": "https://dragostipmerkezi.com.tr/1_80-cm-cosplay-anime-kimetsu-hi%C3%A7bir-yaiba-katana-silah-upload/133939_imgs.jpeg"
  },
  {
    "katana_isim": "Kızıl Yol",
    "fiyat": 265,
    "uzunluk_cm": 68,
    "img": "https://sampiyonkurslari.com.tr/share-6_Yeni-iblis-avc%C4%B1s%C4%B1-76-cm-104-cm-1-1-katana-k%C4%B1l%C4%B1%C3%A7/104112-pics.jpg"
  },
  {
    "katana_isim": "Kızıl Yol",
    "fiyat": 220,
    "uzunluk_cm": 68,
    "img": "https://www.organizegrup.com.tr/content_5-Ah%C5%9Fap-cosplay-k%C4%B1l%C4%B1%C3%A7-sim%C3%BCle-animasyon-prop-silah/146195_img.jpg"
  }
];


// Fonksiyon: Ürünü yerel depolama alanına ekleme
function addToCart(katana) {
  let cart = localStorage.getItem('cart');
  cart = cart ? JSON.parse(cart) : [];

  // Ürünü sepete ekleme
  cart.push(katana);

  // Güncellenmiş sepeti yerel depolama alanına kaydetme
  localStorage.setItem('cart', JSON.stringify(cart));
}


document.addEventListener("DOMContentLoaded", function () {
  const row = document.querySelector("#row");

  katanaListesi.forEach(katana => {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 col-sm-12 mt-5';

    const card = document.createElement('div');
    card.className = 'card align-items-center bg-danger';
    card.style.width = '100%';
    card.style.height = "100%"

    const img = document.createElement('img');
    img.src = katana.img;
    img.className = 'card-img-top';
    img.alt = 'Katana';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title fw-bold text-white';
    cardTitle.textContent = katana.katana_isim;

    const cardText = document.createElement('p');
    cardText.className = 'card-text fw-bold';

    const priceLine = document.createElement('span');
    priceLine.textContent = `Fiyat: ${katana.fiyat}$`;

    const breakLine = document.createElement('br');

    const lengthLine = document.createElement('span');
    lengthLine.textContent = `Uzunluk: ${katana.uzunluk_cm} cm`;

    cardText.appendChild(priceLine);
    cardText.appendChild(breakLine);
    cardText.appendChild(lengthLine);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Sepete Ekle';
    addToCartButton.className = 'btn btn-dark text-danger fw-bold d-block';
    addToCartButton.addEventListener('click', () => {
      // Buraya eklenecek olan sepete ekleme işlemi kodları gelecek
      // Örnek olarak:
      // addToCart(katana); // addToCart fonksiyonu ile sepete ekleme işlemi yapılabilir

      addToCart(katana);
    });

    cardText.appendChild(addToCartButton);


    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    card.appendChild(img);
    card.appendChild(cardBody);

    col.appendChild(card);
    row.appendChild(col);
  });
});

localStorage.clear()

