// var boxItem = document.querySelectorAll(".box-item")

// var array = ["a", "b", "c", "d", "e"]

// boxItem.forEach(box => {
//   box.addEventListener('click', function handleClick(event) {
//     console.log('box clicked');
//     for (var i = 0; i < array.length; i ++){
//     	(function(i) {
//         setInterval(function() {
//             box.innerHTML = array[i]
//         }, 500)
//     })(i);

//     }
//   });
// });

var boxItems = document.querySelectorAll(".box-item")
var array = ["/", "]", "+", "/", "]", "+", "/", "]", "+", "+"]

boxItems.forEach(box => {

	box.addEventListener("mouseover", function() {
		let count = 0
		setInterval(function() {
			if (count < 10 ) {
			box.innerHTML = array[count]
			count += 1
			}


		}, 50)



	})

})

