const Tag = {
  isHealthy: "tag1",
  isProtein: "tag2",
  isSweet: "tag3",
};

var photoList = [
  {
    name: "Salad",
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    des: "This is good for losing weight.",
    tag: [Tag.isHealthy],
  },
  {
    name: "Pizza",
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80",
    des: "This is not good for losing weight.",
    tag: [Tag.isProtein],
  },
  {
    name: "Cake",
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
    des: "This is sweet.",
    tag: [Tag.isSweet],
  },
  {
    name: "Burger",
    src: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    des: "This is not good for losing weight.",
    tag: [Tag.isProtein],
  },
  {
    name: "Toast",
    src: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80",
    des: "This is good.",
    tag: [Tag.isSweet],
  },
  {
    name: "Pasta",
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    des: "This is spaghetti.",
    tag: [],
  },
  {
    name: "Ice cream",
    src: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    des: "This is sweet.",
    tag: [Tag.isSweet],
  },
  {
    name: "Meat ball",
    src: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
    des: "This is meat.",
    tag: [Tag.isProtein],
  },
  {
    name: "Alcohol",
    src: "https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    des: "This is drink.",
    tag: [],
  },
  {
    name: "Dumpling",
    src: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    des: "This is good.",
    tag: [Tag.isProtein],
  },
  {
    name: "Beef",
    src: "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80",
    des: "This is meat.",
    tag: [Tag.isHealthy, Tag.isProtein],
  },
  {
    name: "Taco",
    src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1380&q=80",
    des: "This is Mexican food.",
    tag: [Tag.isProtein],
  },
  {
    name: "Salmon",
    src: "https://images.unsplash.com/photo-1601314002592-b8734bca6604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80",
    des: "This is meat.",
    tag: [Tag.isHealthy, Tag.isProtein],
  },
  {
    name: "Yogurt",
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    des: "This is sour.",
    tag: [Tag.isHealthy, Tag.isProtein, Tag.isSweet],
  },
  {
    name: "Ramen",
    src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    des: "This is Japanese food.",
    tag: [Tag.isProtein],
  },
  {
    name: "Soup",
    src: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    des: "This is good.",
    tag: [Tag.isHealthy],
  },
  {
    name: "Shrimp",
    src: "https://images.unsplash.com/photo-1559742811-822873691df8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    des: "This is good meat.",
    tag: [Tag.isHealthy, Tag.isProtein],
  },
  {
    name: "Egg",
    src: "https://images.unsplash.com/photo-1593584785033-9c7604d0863f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
    des: "This is good protein.",
    tag: [Tag.isHealthy, Tag.isProtein],
  },
];


var container = document.querySelector(".container");
addPhotoObject(container, photoList); 
addFilp();


function showorhide() {
	if (document.querySelector('.tags').classList.contains('show')) {
		document.querySelector('.tags').classList.remove('show');
	}
	else {
		document.querySelector('.tags').classList.add('show');
	}
}

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
