

var blocks = document.querySelectorAll(".services-box__img");

blocks.forEach(function(block,i) {
  // do whatever
  block.addEventListener("mouseover", function(){
  let newSrc = block.dataset.img;
  let newDat = block.src;
  block.src = newSrc;
  block.dataset.img = newDat;
  });
  
  block.addEventListener("mouseout", function(){
  let newSrc = block.dataset.img;
  let newDat = block.src;
  block.src = newSrc;
  block.dataset.img = newDat;
  });
});

