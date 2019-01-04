function printEvents() {
  var dates = $("#mdp-demo").multiDatesPicker("getDates");
  $("#events-row .col-md-12").remove();
  $.map(dates, function(item, index) {
    item = item.split(" ");
    $("#events-row").append(`
     <div class="col-md-12">
       <div class="content__events d-flex flex-row">
         <div class="content__events__date">
           <p>${item[1]}</p>
           <p>${item[0]}</p>
         </div>
         <div class="content__events__info">
           <div class="content__events__title">
             <p>Admissions Coffee and Tour</p>
           </div>
           <div class="content__events__body">
             <p>Our coffee-and-tour sessions are a great way for parents, local business leaders, and other members of the community to get to know our school! </p>
           </div>
           <div class="content__events__footer d-sm-flex d-md-flex flex-row">
             <div class="content__time">
               <p> <span><i class="fas fa-map-marker-alt"></i> </span> Admission Office</p>
               <p> <span><i class="fa fa-clock"></i> </span> 10:00 AM to 11:00 AM</p>
             </div>
             <div class="content__reademore d-none d-sm-block float-right">
               <a href="#">Read More <span class="read_more_icon"></span> </a>
             </div>

           </div>
         </div>
       </div>
     </div>
     `);
  });
}

$(document).ready(function() {
  $("#mdp-demo").multiDatesPicker({
    dateFormat: "M dd",
    onSelect: function(date) {
      printEvents();
    }
  });

  $(".main-menu li .header__submenu")
    .parent()
    .hover(function() {
      var submenu = $(this).children(".header__submenu");
      if ($(submenu).is(":hidden")) {
        $(submenu).show();
      } else {
        $(submenu).hide();
      }
    });

  $(".header__toggle").click(function() {
    $(".mobile-tablet-menu").show(250);
  });

  $(".mobile-tablet-menu__close").click(function() {
    $(".mobile-tablet-menu").hide(250);
  });
});
