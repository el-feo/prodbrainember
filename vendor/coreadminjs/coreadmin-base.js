// NOT ACTIVE OR USED!!!!
// For reference from the example app for initialization

this.Theme = (function() {
  function Theme() {}

  Theme.colors = {
    darkGreen: "#779148",
    red: "#C75D5D",
    green: "#96c877",
    blue: "#6e97aa",
    orange: "#ff9f01",
    gray: "#6B787F",
    lightBlue: "#D4E5DE"
  };

  return Theme;

})();

$(function() {
  $('.icheck').iCheck({
    checkboxClass: 'icheckbox_flat-aero',
    radioClass: 'iradio_flat-aero'
  });
  $.uniform.defaults.fileButtonHtml = '+';
  $(".sparkline").each(function() {
    var barSpacing, barWidth, color, height;
    color = $(this).attr("data-color") || "red";
    height = "18px";
    if ($(this).hasClass("big")) {
      barWidth = "5px";
      barSpacing = "2px";
      height = "30px";
    }
    return $(this).sparkline("html", {
      type: "bar",
      barColor: Theme.colors[color],
      height: height,
      barWidth: barWidth,
      barSpacing: barSpacing,
      zeroAxis: false
    });
  });
  $('.tip, [rel=tooltip]').tooltip({
    gravity: 'n',
    fade: true,
    html: true
  });
  $('.datepicker').datepicker({
    todayBtn: true,
    format: "yyyy-mm-dd",
    weekStart: 0
  });
  $("form.validatable").validationEngine({
    promptPosition: "topLeft"
  });

  $(".chzn-select").select2();

  $('.textarea-html5').wysihtml5({
    "font-styles": true,
    "emphasis": true,
    "lists": true,
    "html": false,
    "link": true,
    "image": true,
    "color": false,
    stylesheets: false
  });

  $.extend($.fn.dataTableExt.oStdClasses, {
    "sWrapper": "dataTables_wrapper form-inline"
  });
  $(".dTable").dataTable({
    bJQueryUI: false,
    bAutoWidth: false,
    sPaginationType: "full_numbers",
    sDom: "<\"table-header\"fl>t<\"table-footer\"ip>"
  });
  $(".dTable-small").dataTable({
    iDisplayLength: 5,
    bJQueryUI: false,
    bAutoWidth: false,
    sPaginationType: "full_numbers",
    sDom: "<\"table-header\"fl>t<\"table-footer\"ip>"
  });
  $("select.uniform, input:file, .dataTables_length select").uniform();
  $(".iButton-icons").iButton({
    labelOn: "<i class='icon-ok'></i>",
    labelOff: "<i class='icon-remove'></i>",
    handleWidth: 30
  });
  $(".iButton-enabled").iButton({
    labelOn: "ENABLED",
    labelOff: "DISABLED",
    handleWidth: 30
  });
  $(".iButton").iButton();
  $(".iButton-icons-tab").each(function() {
    if ($(this).is(":visible")) {
      return $(this).iButton({
        labelOn: "<i class='icon-ok'></i>",
        labelOff: "<i class='icon-remove'></i>",
        handleWidth: 30
      });
    }
  });
  return $('[data-toggle="tab"]').on('shown', function(e) {
    var id;
    id = $(e.target).attr("href");
    return $(id).find(".iButton-icons-tab").iButton({
      labelOn: "<i class='icon-ok'></i>",
      labelOff: "<i class='icon-remove'></i>",
      handleWidth: 30
    });
  });
});

$(".toggle-primary-sidebar").click(function(e) {
  return $.sparkline_display_visible();
});

$(".closable-chat-box textarea").click(function() {
  $(this).closest(".closable-chat-box").addClass("open");
  return $(this).wysihtml5({
    "font-styles": true,
    "emphasis": true,
    "lists": true,
    "html": false,
    "link": true,
    "image": true,
    "color": false,
    stylesheets: false
  });
});
