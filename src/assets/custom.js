jQuery(document).ready(function () {
	//jQuery(".form-element .form-control").val("");
	/*if (jQuery(".form-group .bootstrap-select .dropdown-menu li").hasClass("selected")) {
  			alert("hell");
	} */
	
	/*
	jQuery(function () {
		jQuery('.selectpicker').on('change', function () {
			if (jQuery(this).val() != "") {
				jQuery(this).addClass("has-content");
				jQuery(this).parents(".form-group").addClass("has-select");
			} else {
				jQuery(this).removeClass("has-content");
				jQuery(this).parents(".form-group").removeClass("has-select");
			}
			// if selected
		});
	});
	*/
	/* input upload with thumnail */
	jQuery('.file-input1').on('change', function (e) { //on file input change
		if (window.File && window.FileReader && window.FileList && window.Blob) //check File API supported browser
		{
			var fileName = e.target.files[0].name;
			jQuery(this).parent().find(".custom-file-label").html(fileName);
			var path = jQuery(this).closest(".form-group").find(".thum-pic-hms").html(''); //clear html of output element 
			var data = jQuery(this)[0].files; //this file data
			jQuery.each(data, function (index, file) { //loop though each file
				if (/(\.|\/)(gif|jpe?g|png)jQuery/i.test(file.type)) { //check supported file type
					var fRead = new FileReader(); //new filereader
					fRead.onload = (function (file) { //trigger function on successful read
						return function (e) {
							var img = jQuery('<img/>').addClass('thumb').attr('src', e.target.result); //create image element 
							jQuery(path).append(img); //append image to output element
						};
					})(file);
					fRead.readAsDataURL(file); //URL representing the file's data.
				}
			});
		} else {
			alert("Your browser doesn't support File API!"); //if File API is absent
		}
	});
	/* input upload with thumnail for task*/
	jQuery('.file-input2').on('change', function (e) { //on file input change
		if (window.File && window.FileReader && window.FileList && window.Blob) //check File API supported browser
		{
			var fileName = e.target.files[0].name;
			jQuery(this).parent().find(".custom-file-label").html(fileName);
			var path = jQuery(".thum-pic-hms1").html(''); //clear html of output element 
			var data = jQuery(this)[0].files; //this file data
			jQuery.each(data, function (index, file) { //loop though each file
				if (/(\.|\/)(gif|jpe?g|png)jQuery/i.test(file.type)) { //check supported file type
					var fRead = new FileReader(); //new filereader
					fRead.onload = (function (file) { //trigger function on successful read
						return function (e) {
							var img = jQuery('<img/>').addClass('thumb').attr('src', e.target.result); //create image element 
							jQuery(path).append(img); //append image to output element
						};
					})(file);
					fRead.readAsDataURL(file); //URL representing the file's data.
				}
			});
		} else {
			alert("Your browser doesn't support File API!"); //if File API is absent
		}
	});
	// date picker
	jQuery(function () {
		jQuery(".datepicker").datepicker({
			autoclose: true,
			todayHighlight: true
		})
	});
	// input move up on enter value
	/*
	jQuery(".form-element .form-control").val("");
	jQuery(".form-element .form-control").change(function () {
		if (jQuery(this).val() != "") {
			jQuery(this).addClass("has-content");
		} else {
			jQuery(this).removeClass("has-content");
		}
	}); */
	// bank details copy
	jQuery(".add-bnk").click(function () {
		jQuery("#show-bank").show();
	});
	jQuery(".close-btn").click(function () {
		jQuery("#show-bank").hide();
	});
	jQuery("#add-kyc1").click(function () {
		jQuery("#show-new-kyc").show();
	});
	/* other bank display*/
	jQuery("#Bank_Name").change(function () {
		if (jQuery(this).val() == "Other_Bank") {
			jQuery("#other-bank").show();
		} else {
			jQuery("#other-bank").hide();
		}
	})
	jQuery("#dApprovalStatus").change(function () {
		if (jQuery(this).val() == "dsaford-to") {
			jQuery("#dsaford-to").show();
		} else {
			jQuery("#dsaford-to").hide();
		}
	})
	// right side upload images 
	jQuery('#file-input').on('change', function () { //on file input change
		if (window.File && window.FileReader && window.FileList && window.Blob) //check File API supported browser
		{
			jQuery('#thumb-output').html(''); //clear html of output element
			var data = jQuery(this)[0].files; //this file data
			jQuery.each(data, function (index, file) { //loop though each file
				if (/(\.|\/)(gif|jpe?g|png)jQuery/i.test(file.type)) { //check supported file type
					var fRead = new FileReader(); //new filereader
					fRead.onload = (function (file) { //trigger function on successful read
						return function (e) {
							var img = jQuery('<img/>').addClass('thumb').attr('src', e.target.result); //create image element 
							jQuery('#thumb-output').append(img); //append image to output element
						};
					})(file);
					fRead.readAsDataURL(file); //URL representing the file's data.
				}
			});
		} else {
			alert("Your browser doesn't support File API!"); //if File API is absent
		}
	});

/*--TAb-- 
jQuery(".tabl-form-controll .tab-pane").last().addClass("last-child");
jQuery(".tabl-form-controll .tab-panefirst").addClass("first-child");
  
jQuery("#myWizard").find("#next").click(function () {
	
	if (jQuery(".active").hasClass("last-child")) {
		// similar behavior as clicking on a link
		window.location.href = "finish-page.php";
	}
	if (jQuery("#myWizard .tabl-form-controll > .tab-pane:nth-last-child(3)").hasClass("active")) {
		jQuery(this).hide();
		jQuery(".tab-button").append("<button class=' btn btn-lg btn-primary mx-1' id='final_update'><i class='ti-save'></i> <span>Save</span></button>")
	}
	jQuery("#Previous").show();
	//jQuery("#myWizard").find(".tabl-form-controll").find(".active").removeClass("active").next(".tab-pane").addClass("active").addClass("show");
	jQuery("#myWizard").find(".tabl-form-controll").children(".active").removeClass("active").next(".tab-pane").addClass("active").addClass("show");
	jQuery(".new-mnnu-main").find(".menu-open").removeClass("menu-open").next().addClass("menu-open");
});

jQuery("#myWizard").find("#Previous").click(function () {
	alert();
	if (jQuery(".active").hasClass("first-child")) {
		jQuery("#Previous").hide();
	}
	jQuery("#myWizard").find(".tabl-form-controll > .active").removeClass("active").prev(".tab-pane").addClass("active").addClass("show");
	jQuery(".new-mnnu-main").find(".menu-open").removeClass("menu-open").prev().addClass("menu-open");
	if (jQuery("#myWizard .tabl-form-controll > .tab-pane:nth-child(2)").hasClass("active")) {
		jQuery("#Previous").hide();
	}
});
//var linkid = jQuery(".new-mnnu-main li a").attr("href");
jQuery(".new-mnnu-main li a").click(function () {
	var hall = jQuery(this).attr("href")
		//alert(hall);
	jQuery("#myWizard .tabl-form-controll .first-tab").removeClass("active");
	jQuery("#myWizard .tabl-form-controll #" + hall).addClass("active");
});
*/
 jQuery('.new-mnnu-main').slimScroll({
      height: '90vh',
      always:Visible,
    });
    

}); /* document ready*/


jQuery('#roles_manager').DataTable();
jQuery('#example, #example1, .data_table_showallrow').DataTable({
	paging: false
});
jQuery('#my_task').DataTable();

