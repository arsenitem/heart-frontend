var settings_btn = document.querySelector(".settings_btn");
	var profile_slider = document.querySelector(".profile_slider");

	settings_btn.addEventListener("click", function(){
		profile_slider.classList.toggle("active");
        this.classList.toggle("active");
        var hist_btn = document.querySelector(".hist_btn");
	    var profile_slider = document.querySelector(".profile_slider");

        hist_btn.addEventListener("click", function(){
            profile_slider.classList.toggle("active");
            this.classList.toggle("active");
        })
    })
    var sost_btn = document.querySelector(".sost_btn ");
	var profile_slider = document.querySelector(".profile_slider");

	sost_btn .addEventListener("click", function(){
		profile_slider.classList.toggle("active");
		this.classList.toggle("active");
    })
    var prog_btn = document.querySelector(".prog_btn ");
	var profile_slider = document.querySelector(".profile_slider");

	prog_btn .addEventListener("click", function(){
		profile_slider.classList.toggle("active");
		this.classList.toggle("active");
    })
    var data_btn = document.querySelector(".data_btn ");
	var profile_slider = document.querySelector(".profile_slider");

	data_btn .addEventListener("click", function(){
		profile_slider.classList.toggle("active");
		this.classList.toggle("active");
	})