const replaceByHover = (blockSelector) => {
     const blocks = document.querySelectorAll(blockSelector);

     function showImg(block) {
          let img = block.querySelector("img");
          let puth = img.getAttribute("src").slice(0, -4);
          img.setAttribute("src", `${puth}-1.png`);
          block.querySelectorAll("p:not(.sizes-hit)").forEach(p => {
               p.style.display = "none";
          });
     }

     function hideImg(block) {
          let img = block.querySelector("img");
          let puth = img.getAttribute("src").slice(0, -6);
          img.setAttribute("src", `${puth}.png`);
          block.querySelectorAll("p:not(.sizes-hit)").forEach(p => {
               p.style.display = "block";
          });
     }

     blocks.forEach(block => {
          block.addEventListener("mouseover", () => {
               showImg(block)
          });
          block.addEventListener("mouseout", () => {
               hideImg(block)
          });
     });
}

export default replaceByHover;