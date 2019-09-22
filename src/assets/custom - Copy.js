jQuery(document).ready(function () {
	//jQuery(".form-element .form-control").val("");
	/*if ($(".form-group .bootstrap-select .dropdown-menu li").hasClass("selected")) {
  			alert("hell");
	} */
	$(function () {
		$('.selectpicker').on('change', function () {
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
	/* input upload with thumnail */
	$('.file-input1').on('change', function (e) { //on file input change
		if (window.File && window.FileReader && window.FileList && window.Blob) //check File API supported browser
		{
			var fileName = e.target.files[0].name;
			$(this).parent().find(".custom-file-label").html(fileName);
			var path = $(this).closest(".form-group").find(".thum-pic-hms").html(''); //clear html of output element 
			var data = $(this)[0].files; //this file data
			$.each(data, function (index, file) { //loop though each file
				if (/(\.|\/)(gif|jpe?g|png)$/i.test(file.type)) { //check supported file type
					var fRead = new FileReader(); //new filereader
					fRead.onload = (function (file) { //trigger function on successful read
						return function (e) {
							var img = $('<img/>').addClass('thumb').attr('src', e.target.result); //create image element 
							$(path).append(img); //append image to output element
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
	$('.file-input2').on('change', function (e) { //on file input change
		if (window.File && window.FileReader && window.FileList && window.Blob) //check File API supported browser
		{
			var fileName = e.target.files[0].name;
			$(this).parent().find(".custom-file-label").html(fileName);
			var path = $(".thum-pic-hms1").html(''); //clear html of output element 
			var data = $(this)[0].files; //this file data
			$.each(data, function (index, file) { //loop though each file
				if (/(\.|\/)(gif|jpe?g|png)$/i.test(file.type)) { //check supported file type
					var fRead = new FileReader(); //new filereader
					fRead.onload = (function (file) { //trigger function on successful read
						return function (e) {
							var img = $('<img/>').addClass('thumb').attr('src', e.target.result); //create image element 
							$(path).append(img); //append image to output element
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
	$(function () {
		$(".datepicker").datepicker({
			autoclose: true,
			todayHighlight: true
		})
	});
	// input move up on enter value
	jQuery(".form-element .form-control").val("");
	jQuery(".form-element .form-control").change(function () {
		if (jQuery(this).val() != "") {
			jQuery(this).addClass("has-content");
		} else {
			jQuery(this).removeClass("has-content");
		}
	});
	// bank details copy
	$(".add-bnk").click(function () {
		$("#show-bank").show();
	});
	$(".close-btn").click(function () {
		$("#show-bank").hide();
	});
	$("#add-kyc1").click(function () {
		$("#show-new-kyc").show();
	});
	/* other bank display*/
	$("#Bank_Name").change(function () {
		if ($(this).val() == "Other_Bank") {
			$("#other-bank").show();
		} else {
			$("#other-bank").hide();
		}
	})
	$("#dApprovalStatus").change(function () {
		if ($(this).val() == "dsaford-to") {
			$("#dsaford-to").show();
		} else {
			$("#dsaford-to").hide();
		}
	})
	// right side upload images 
	$('#file-input').on('change', function () { //on file input change
		if (window.File && window.FileReader && window.FileList && window.Blob) //check File API supported browser
		{
			$('#thumb-output').html(''); //clear html of output element
			var data = $(this)[0].files; //this file data
			$.each(data, function (index, file) { //loop though each file
				if (/(\.|\/)(gif|jpe?g|png)$/i.test(file.type)) { //check supported file type
					var fRead = new FileReader(); //new filereader
					fRead.onload = (function (file) { //trigger function on successful read
						return function (e) {
							var img = $('<img/>').addClass('thumb').attr('src', e.target.result); //create image element 
							$('#thumb-output').append(img); //append image to output element
						};
					})(file);
					fRead.readAsDataURL(file); //URL representing the file's data.
				}
			});
		} else {
			alert("Your browser doesn't support File API!"); //if File API is absent
		}
	});

/*--TAb--*/
$(".tabl-form-controll .tab-pane").last().addClass("last-child");
$(".tabl-form-controll .tab-panefirst").addClass("first-child");
/*$("#clone-co-application").click(function(){
							var applicopy = $("#apllicant1").clone();

							$('#apllicant2').html(applicopy).find(".box-header h4").text("Co-Applicant");

						});*/
$("#myWizard").find("#next").click(function () {
	
	if ($(".active").hasClass("last-child")) {
		// similar behavior as clicking on a link
		window.location.href = "finish-page.php";
	}
	if ($("#myWizard .tabl-form-controll > .tab-pane:nth-last-child(3)").hasClass("active")) {
		$(this).hide();
		$(".tab-button").append("<button class=' btn btn-lg btn-primary mx-1' id='final_update'><i class='ti-save'></i> <span>Save</span></button>")
	}
	$("#Previous").show();
	//$("#myWizard").find(".tabl-form-controll").find(".active").removeClass("active").next(".tab-pane").addClass("active").addClass("show");
	$("#myWizard").find(".tabl-form-controll").children(".active").removeClass("active").next(".tab-pane").addClass("active").addClass("show");
	$(".new-mnnu-main").find(".menu-open").removeClass("menu-open").next().addClass("menu-open");
});
$("#myWizard").find("#Previous").click(function () {
	alert();
	if ($(".active").hasClass("first-child")) {
		$("#Previous").hide();
	}
	$("#myWizard").find(".tabl-form-controll > .active").removeClass("active").prev(".tab-pane").addClass("active").addClass("show");
	$(".new-mnnu-main").find(".menu-open").removeClass("menu-open").prev().addClass("menu-open");
	if ($("#myWizard .tabl-form-controll > .tab-pane:nth-child(2)").hasClass("active")) {
		$("#Previous").hide();
	}
});
//var linkid = $(".new-mnnu-main li a").attr("href");
$(".new-mnnu-main li a").click(function () {
	var hall = $(this).attr("href")
		//alert(hall);
	$("#myWizard .tabl-form-controll .first-tab").removeClass("active");
	$("#myWizard .tabl-form-controll #" + hall).addClass("active");
});

 $('.new-mnnu-main').slimScroll({
      height: '90vh',
      alwaysVisible:  ,
    });
    

}); /* document ready*/


$('#roles_manager').DataTable();
$('#example, #example1, .data_table_showallrow').DataTable({
	paging: false
});
$('#my_task').DataTable();

