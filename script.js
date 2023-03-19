let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function find_label(label_id) {
	var labels = document.getElementsByTagName('label');
	for(var i=0; i<labels.length; ++i) {
		if(labels[i].htmlFor == label_id) {
			return labels[i];
		}
	}
	return "none";
}

function VerifyFormFields() {
	const inputs = document.getElementById("request_call_form").elements;
	let is_valid = true;
	let error_message = "заполните все поля помеченные \"*\"";
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
			if(inputs[i].className.includes("mandatory")) {
				var label_to_change = find_label(inputs[i].id);
				if(label_to_change == "none") {
					console.log("ERROR! unable to find label by id = " + inputs[i].id);
					continue;
				}
				label_to_change.style.color = "";
				if(inputs[i].value == "") {
					console.log("field not set" + inputs[i].id);
					is_valid = false;
					label_to_change.style.color	= "red";
				}
			}
		}
	}

	return {is_valid, error_message};
}

function VerifyAndSubmit() {
	var modal=document.getElementById("myModal");
	modal.style.display = "flex";
	var modal_text = document.getElementById("modal_text");
	modal_text.innerHTML = "Заявка принята. Менеджер свяжется с вами в ближайшее освободившееся время";
	result = VerifyFormFields();
	if(!result.is_valid) {
		modal_text.innerHTML = "Внимание! " + result.error_message;
	}
}

function CloseModal() {
	var modal=document.getElementById("myModal");
	modal.style.display = "none";
}

window.onclick = function(event) {
	var modal = document.getElementById("myModal");
	if(event.target == modal) {
		modal.style.display = "none";
	}
}