const h1 = document.getElementById("h1")

const container = document.querySelector(".container")


// sepet.forEach( urun => {
//     const h1 = document.createElement('h1')
//     h1.textContent = `Sepetinizde ${urun.title} adlı ürün bulundu.`

//     container.append(h1)

// })

if (sepetLocal !== null) {
    sepet = JSON.parse(sepetLocal);
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
    }

            // HTML üzerinden görsel olarak da kaldırıyoruz
            this.parentElement.remove();
};


imgDiv.appendChild(img)

div.appendChild(imgDiv)
div.appendChild(title)
div.appendChild(price)
div.appendChild(button)

container.appendChild(div)

    })
} else {
    const h4 = document.createElement("h1")
    h4.innerHTML = "Seçim yapmadınız.";
    container.appendChild(h4)
}