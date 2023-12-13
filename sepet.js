document.addEventListener("DOMContentLoaded", function () {
    const cartElement = document.querySelector('#sepetListesi');

    // Local storage'dan sepet verilerini alma
    const productsInCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Fonksiyon: Ürün kartlarını oluştur
    function createProductCard(product) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item', 'bg-danger', 'text-white', 'fw-bold', 'rounded-2', 'p-3', 'text-center', 'mb-3'); // Stilleri ayarla

        // Ürün resmi
        const productImage = document.createElement('img');
        productImage.src = product.img; // Ürün resmi
        productImage.alt = product.katana_isim; // Resim alt etiketi
        productImage.style.width = '100%'; // Resmin boyutunu ayarla
        productImage.style.maxHeight = '100%'; // Resmin maksimum yüksekliği
        productImage.classList.add('mb-3'); // Boşluk ekleyerek düzeni düzelt

        const productName = document.createElement('h3');
        productName.textContent = product.katana_isim; // Ürün ismi

        const productPrice = document.createElement('p');
        productPrice.textContent = `Fiyat: ${product.fiyat}$`; // Ürün fiyatı

        const productLength = document.createElement('p');
        productLength.textContent = `Uzunluk: ${product.uzunluk_cm} cm`; // Ürün uzunluğu

        // Oluşturulan içerikleri kart elementine ekleme
        cartItem.appendChild(productImage);
        cartItem.appendChild(productName);
        cartItem.appendChild(productPrice);
        cartItem.appendChild(productLength);

        return cartItem;
    }

    // Sepette ürün varsa
    if (productsInCart.length > 0) {
        productsInCart.forEach(product => {
            const productCard = createProductCard(product);
            cartElement.appendChild(productCard);
        });
    } else {
        // Sepette ürün yoksa, kullanıcıya bilgi verilebilir
        const emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'Sepetinizde ürün bulunmamaktadır.';
        cartElement.appendChild(emptyCartMessage);
    }

    // Ekran boyutlarına göre düzenleme yap
    function adjustLayout() {
        const windowWidth = window.innerWidth;

        // Kartları temizle
        cartElement.innerHTML = '';

        if (windowWidth >= 992) {
            // Büyük ekranlar (Desktop)
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row', 'row-cols-3');

            productsInCart.forEach(product => {
                const productCard = createProductCard(product);
                const colDiv = document.createElement('div');
                colDiv.classList.add('col');
                colDiv.appendChild(productCard);
                rowDiv.appendChild(colDiv);
            });

            cartElement.appendChild(rowDiv);
        } else if (windowWidth >= 576) {
            // Orta büyüklükte ekranlar (Tablet)
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row', 'row-cols-2');

            productsInCart.forEach(product => {
                const productCard = createProductCard(product);
                const colDiv = document.createElement('div');
                colDiv.classList.add('col');
                colDiv.appendChild(productCard);
                rowDiv.appendChild(colDiv);
            });

            cartElement.appendChild(rowDiv);
        } else {
            // Küçük ekranlar (Mobil)
            productsInCart.forEach(product => {
                const productCard = createProductCard(product);
                cartElement.appendChild(productCard);
            });
        }
    }

    // Sayfa yüklendiğinde ve ekran boyutu değiştiğinde düzeni ayarla
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});

function calculateTotalPrice() {
    const productsInCart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    productsInCart.forEach(product => {
        totalPrice += product.fiyat;
    });

    return totalPrice;
}

// Toplam fiyatı ekrana yazdır
function displayTotalPrice() {
    const totalPrice = calculateTotalPrice();
    totalPriceElement.textContent = `Toplam Fiyat: ${totalPrice}$`;
}

displayTotalPrice(); // Sayfa yüklendiğinde toplam fiyatı göster

// Ödeme yap butonuna tıklama işlemi
odemeYapButton.addEventListener('click', function () {
    const totalPrice = calculateTotalPrice();
    // Ödeme işlemleri burada yapılabilir
    alert(`Toplam ödenecek miktar: ${totalPrice}$`);
});
