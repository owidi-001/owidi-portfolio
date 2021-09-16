// randomize enabling techs
var svgs = document.querySelectorAll('#rand i');
console.log(svgs)
svgs.forEach((svgs) => {
	svgs.style.marginLeft = Math.random() * 50 + 'px'
	svgs.style.marginTop = Math.random() * 50 + 'px'
});


var isSidebarOpen = false;
var sidebar = document.querySelector('aside');
var menu = document.getElementById('menu');


// toggle bars and nav close
sidebar.addEventListener('click', () => {
	if (isSidebarOpen) {
		menu.innerHTML = '<i class="fa fa-bars"></i>'
		sidebar.style.display = 'none';
		isSidebarOpen = !isSidebarOpen;
	}
});

// display side nav on small devices
function show_aside() {
	if (!isSidebarOpen) {
		console.log(sidebar)
		menu.innerHTML = '<i class="fa fa-times"></i>'
		sidebar.style.position = 'fixed';
		sidebar.style.zIndex = '10';
		sidebar.style.display = 'block';
		sidebar.style.width = '75%';
		sidebar.style.border = 'none';
	} else {
		sidebar.style.display = 'none';
		menu.innerHTML = '<i class="fa fa-bars"></i>'
	}
	isSidebarOpen = !isSidebarOpen;
}


//locate all the navigation links
var quickLinks = document.querySelectorAll(".nav a");


for (var i = 0; i < quickLinks.length; i++) {
	quickLinks[i].addEventListener('click', function (event) {

		//disable scroll listener after clicking on nav link
		document.removeEventListener('scroll', true);

		isActive = document.getElementsByClassName('is-active')[0];

		if (isActive != undefined) {
			isActive.classList.remove('is-active');
		}

		this.classList.add('is-active');

		//re-enable scroll event 1 second after is-active class is added
		setTimeout(function () {
			document.addEventListener("scroll", true);
		}, 1000);

	});

}