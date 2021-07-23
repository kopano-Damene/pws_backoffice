var modal = document.getElementById("create_l_modal");
var btn = document.getElementById("create-link");
var close_M_btn = document.getElementsByClassName("close")[0];
btn.onclick = function() {
	modal.style.display = "block";
}
close_M_btn.onclick = function() {
	modal.style.display = "none";
}
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
function createRow() {
  document.querySelector('#links').insertAdjacentHTML(
		'afterbegin',`<div class="row row_1" id="f_row" style="background-color:red">row test</div>`
	);
}
function createCard() {
	document.querySelector('.row_1').insertAdjacentHTML(
		'afterbegin',`
			<div class="col-md-3">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">Test Title</h5>
						<a href="https://www.byupathway.org/sign-in" class="btn btn-secondary btn-lg btn-responsive" role="button" target="_blank">Button test</a>
					</div>
				</div>
			</div>
		`
	);
};
var row_count = document.getElementById("links").childElementCount;
var m_create_btn = document.getElementById("create");
m_create_btn.onclick = function() {
	if (row_count == 0) {
		var card_count = document.getElementById("links").childElementCount;
		row_count++;
		createRow();
		console.log("you have "+row_count+" rows");
		if (card_count == 0) {
			card_count++;
			createCard();
		}
	} else {
		if (card_count !== 4) {
			card_count++;
			createCard();
			alert("you have rows already some rows!");
		}
	}
	// var imput_title_vel = document.getElementById("link-title").value;
	// var imput_link_vel = document.getElementById("link").value;
	modal.style.display = "none";
	// alert("hey kopano, the title of your linki is !" + imput_title_vel + " and your actual link is !" + imput_link_vel );
}