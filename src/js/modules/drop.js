import { postData } from "../services/requests.js";

const drop = () => {
     const inputs = document.querySelectorAll("[name='upload']");

     ["drop", "dragleave", "dragstart", "dragenter", "dragover"].forEach(eventName => {
          inputs.forEach(input => {
               input.addEventListener(eventName, preventDefault, false);
          });
     });

     function preventDefault(e) {
          e.preventDefault();
          e.stopPropagation();
     }

     function highlight(item) {
          item.closest(".file_upload").style.border = '2px solid yellow';
          item.closest(".file_upload").style.background = 'blue';
     }

     function unhighlight(item, color) {
          (item.closest(".popup-content")) ? color = '#ededed' : color = "#f7e7e6";

          item.closest(".file_upload").style.border = '0';
          item.closest(".file_upload").style.background = color;
     }

     ["dragenter", "dragover"].forEach(eventName => {
          inputs.forEach(input => {
               input.addEventListener(eventName, () => highlight(input), false);
          });
     });

     ["drop", "dragleave"].forEach(eventName => {
          inputs.forEach(input => {
               input.addEventListener(eventName, () => unhighlight(input), false);
          });
     });

     inputs.forEach(input => {
          input.addEventListener("drop", function (e) {
               input.files = e.dataTransfer.files;
               let dots;
               const arr = input.files[0].name.split(".");
               (arr[0].length > 6) ? dots = "..." : ".";
               const name = arr[0].substring(0, 7) + dots + arr[1];
               input.previousElementSibling.textContent = name;

               if (input.closest(".col-md-3")) {
                    let form = new FormData();
                    [...input.files].forEach(item => {
                         form.append("image", item);
                    });
                    postData("./assets/server.php", form)
                         .then(text => {
                              console.log("te", text)
                         })
                         .catch(err => {
                              console.log(err)
                         })
                         .finally(() => {
                              input.previousElementSibling.textContent = "Файл отправлен !";
                         });
               }
          });
     });
};

export default drop;