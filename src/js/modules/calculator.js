const calculator = (size, material, options, promo, result) => {
     let sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promoBlock = document.querySelector(promo),
          resultBlock = document.querySelector(result);

     function calcSum() {
          let sum = 0;

          sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

          if (sizeBlock.value === "" || materialBlock.value === "") {
               resultBlock.textContent = "Пожалуйста выберите размер и материал картины. Спасибо!";
          } else if (promoBlock.value === "IWANTPOPART") {
               resultBlock.textContent = sum * 0.7;
          } else {
               resultBlock.textContent = sum;
          }
     }

     sizeBlock.addEventListener("change", calcSum);
     materialBlock.addEventListener("change", calcSum);
     optionsBlock.addEventListener("change", calcSum);
     promoBlock.addEventListener("input", calcSum);

};

export default calculator;