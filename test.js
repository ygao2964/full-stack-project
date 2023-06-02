async function main() {
  const response = await fetch("http://localhost:3000/api/items");
  const photoList = await response.json();
  //console.log(photoList);

  var container = document.querySelector(".container");
  addPhotoObject(container, photoList); 
  addFilp();

  const form = document.querySelector("form");
  const submitButton = document.querySelector("button[type=submit]");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    var values = [];
    var filteredList = [];

      for (const input of form.querySelectorAll("input[type=checkbox]")) {
        if (input.checked) {
          values.push(input.id);
        }
    }

    for (var object of photoList) {
      if (containsList(object.tag, values)) {
        filteredList.push(object);
      }
    }

    container.innerHTML = "";
    addPhotoObject(container, filteredList);
    addFilp(); 
  });
}

function showorhide() {
	if (document.querySelector('.tags').classList.contains('show')) {
		document.querySelector('.tags').classList.remove('show');
	}
	else {
		document.querySelector('.tags').classList.add('show');
	}
}

function addPhotoObject(container, list) {
	for (var i = 0; i < list.length; i++) {
		var boxDiv = document.createElement("div");
		var frontDiv = document.createElement("div");
		var backDiv = document.createElement("div");
	    var img = document.createElement("img");
	    var p = document.createElement("p");
		boxDiv.className = "box";
		frontDiv.className = "front";
		backDiv.className = "back";
		p.innerText = list[i].des;
		img.src = list[i].src;
		img.alt = list[i].name;
		
		frontDiv.appendChild(img);
		backDiv.appendChild(p);
		boxDiv.appendChild(frontDiv);
		boxDiv.appendChild(backDiv);
		container.appendChild(boxDiv);
	}
}

function addFilp() {
	const boxes = document.querySelectorAll('.box');
	[...boxes].forEach((box)=>{
		box.addEventListener('click', function(){
			box.classList.toggle('flipped');
		});
	});
}

function containsList(list, sublist) {
  return sublist.every(element => list.includes(element));
}


main();
