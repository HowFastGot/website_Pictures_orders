const accordion = (triggerSelector, contentSelector) => {
     const btns = document.querySelectorAll(triggerSelector),
          blocks = document.querySelectorAll(contentSelector)

     btns.forEach(btn => {
          btn.addEventListener("click", function (e) {

               if (!this.classList.contains("active")) {
                    btns.forEach(btn => btn.classList.remove("active"));
                    blocks.forEach(block => {
                         block.classList.remove("active-content");
                         block.style.maxHeight = "0px";
                    });
               }

               this.classList.toggle("active");
               this.nextElementSibling.classList.toggle("active-content");

               if (this.classList.contains("active")) {
                    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
               } else {
                    this.nextElementSibling.style.maxHeight = "0px";
               }
          });
     });




     /*	blocks.forEach(block => {
               block.classList.add("animated", "fadeInUp");
          });
     
          btns.forEach(btn => {
               btn.addEventListener("click", function(e) {
                    if (!this.classList.contains("active")) {
                         btns.forEach(item => {
                              item.classList.remove("active")
                         });
                         this.classList.add("active");
                    } else {
                         this.classList.remove("active");
                    }
               });
          });*/
};

export default accordion;