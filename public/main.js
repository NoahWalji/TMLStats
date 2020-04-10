// Noah Walji

// ======================
// ----> Next Game <----
// ======================
//$("#awayImg").attr("src", "/teams/" + $("#awayID").text() + ".png");
//$("#homeImg").attr("src", "/teams/" + $("#homeID").text() + ".png");

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var gameDate = new Date($("#gameDate").text());
var gameDay = days[gameDate.getDay()];
var gameHour = gameDate.getHours();
var gameMin = gameDate.getMinutes();
var stringMin = gameMin.toString();

if (gameMin <= 9)
{
	stringMin = "0" + stringMin;
}

if (gameHour > 12)
{
	gameHour = gameHour - 12;
	var gameTime = gameDay + " @ " + gameHour + ":" + stringMin + "PM";
}

else
{
	var gameTime = gameDay + " @ " + gameHour + ":" + gameMin + "AM";

}

//$("#gameTime").text(gameTime);




// ======================
// ----> Sticky Nav <----
// ======================

// Selecting Navbar
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

// Running Function to Make NavBar sticky when scrolling
function stickyNav()
{
	if (window.pageYOffset >= sticky)
	{
		document.body.style.paddingTop = navbar.offsetHeight + 'px';
		navbar.classList.add("nav-sticky");
	}

	else
	{
		document.body.style.paddingTop = 0;
		navbar.classList.remove("nav-sticky");
	}
}

// Use stickyNav Function to run event
window.addEventListener('scroll', stickyNav)

// ===============================
// ----> Animated Scroll Nav <----
// ===============================

$("#roster-nav").click(function(event)
{
    event.preventDefault();

    $('html, body').animate({scrollTop: $("#roster").offset().top}, 1000);
});

$("#home-nav").click(function(event)
{
    event.preventDefault();

    $('html, body').animate({scrollTop: $("#title").offset().top}, 1000);
});

$("#advstats-nav").click(function(event)
{
    event.preventDefault();

    $('html, body').animate({scrollTop: $("#advstats").offset().top}, 1000);
});


// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
btn[0].onclick = function() {
    modal[0].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
