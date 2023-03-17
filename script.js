const cards = document.querySelectorAll(".work-item");
// const image = document.getElementById("hero-image");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);

// observer.observe(image);
console.log(content);
cards.forEach((card) => {
  observer.observe(card);
});
// var boxItems = document.querySelectorAll(".box-item")
// var array = ["/", "]", "+", "/", "]", "+", "/", "]", "+", "+"]

// boxItems.forEach(box => {

// 	box.addEventListener("mouseover", function() {
// 		let count = 0
// 		setInterval(function() {
// 			if (count < 10 ) {
// 			box.innerHTML = array[count]
// 			count += 1
// 			}

// 		}, 50)

// 	})

// })
