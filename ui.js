/*

   ui.js

   User interface functions for the index.html page of
   the website LániðMitt.is

   Copyright (C) 2017 by Miðeind ehf. / Vilhjálmur Þorsteinsson
   See the LICENSE file at https://github.com/vthorsteinsson/Greidslusedill
   for licensing information.

*/

"use strict";

// True if we are displaying the UI as one scrolling column;
// false if the UI is wide with the entry form fixed to the left
// and the results scrolling to the right
var narrowUI = false;
var defaults = {
   amount : 18000000,
   interest : 4.6,
   year : 2006,
   month : 7,
   numpmt : 300
};

function showStatus(id, err) {
   // Show the validation status of a field depending on
   // whether num is a valid number or not
   var field = $("#" + id + "-status");
   if (err) {
      // Error status
      field.addClass("has-error");
      $("span.form-control-feedback", field)
         .html('<i class="material-icons">clear</i>');
   }
   else {
      field.removeClass("has-error");
      $("span.form-control-feedback", field)
         .html("");
   }
}

function validateAmount() {
   // Returns the amount entered or NaN if not valid
   var amt = asCurrency($.trim($("#amount").val()));
   showStatus("amount", isNaN(amt));
   return amt;
}

function validateNumPmt() {
   // Returns the number of payments entered or NaN if not valid
   var num = asInteger($.trim($("#numpmt").val()));
   if (num > 600)
      // 50 years absolute maximum
      num = NaN;
   showStatus("numpmt", isNaN(num));
   return num;
}

function validateInterest() {
   // Returns the interest percentage entered or NaN if not valid
   var i = asPercent($.trim($("#interest").val()));
   if (i > 20.0)
      // 20 percent maximum
      i = NaN;
   showStatus("interest", isNaN(i));
   return i;
}

var initialUpdate = true;

function checkAndUpdate(inflatedOnly) {
   // Validate the current input and calculate the loan if OK
   // Only display the interest panel if the wrong interest calculation
   // is being used
   var wrong = $("#wrong").is(":checked");
   var $interest = $("#results-interest");
   $interest.toggleClass("result", wrong);
   if (initialUpdate)
      // No fancy schmancy sliding on the first update
      $interest.css("display", wrong ? "block" : "none");
   else
   if (wrong) {
      if ($interest.css("display") == "none")
         $interest.slideDown(600);
   }
   else
   if ($interest.css("display") == "block")
      $interest.slideUp(600);
   var amt = validateAmount();
   if (isNaN(amt))
      return "#amount";
   var num = validateNumPmt();
   if (isNaN(num))
      return "#numpmt";
   var interest = validateInterest();
   if (isNaN(interest))
      return "#interest";
   // Everything validates OK: calculate the loan and display the results
   var year = parseInt($("#taken-year").val());
   var month = parseInt($("#taken-month").val());
   var futureInflation = parseFloat($("#inflation-future").val()) || 0.0;
   // Encode the parameters in the hash part of the URL
   location.hash = [amt, interest, num, wrong, year,
      ("0" + month).slice(-2,2), futureInflation].join("+");
   var ctx = calcLoan(amt, interest, num, wrong,
      year, month, futureInflation);
   if (inflatedOnly) {
      // Only update the inflation-based graphs
      displayPrincipalGraph(ctx, true);
      displayPaymentGraph(ctx, true);
   }
   else
      // Update everything
      displayLoan(ctx);
   initialUpdate = false;
}

function submit() {
   // Validate input fields; if error, focus on the error field.
   // Otherwise, update the displayed data.
   var errField = checkAndUpdate(false);
   if (errField !== undefined)
      $(errField).focus();
}

function update() {
   // Update the current view, if everything validates OK
   checkAndUpdate(false);
}

function mediaMinWidth992(mql) {
   if (mql.matches) {
      // Take action when min-width exceeds 992
      narrowUI = false;
   }
   else {
      narrowUI = true;
   }
}

function initMediaListener() {
   // Install listener functions for media changes
   var mql = window.matchMedia("(min-width: 992px)");
   if (mql) {
      mediaMinWidth992(mql);
      mql.addListener(mediaMinWidth992);
   }
}

function setContainerHeight() {
   // Adjust the results container column so that
   // it extends to the bottom of the window
   var c = $("div.results-container");
   var h = Math.max(0, window.innerHeight - c.offset().top);
   c.height(h);
}

function init() {
   // Handle the submit button and the Enter key
   $("#submit").click(function(e) { e.preventDefault(); submit(); });
   $(document).keypress(
      function(e) {
         if (e.which == 13) {
            e.preventDefault();
            submit();
         }
      }
   );
   // Implement collapsible panel headers
   $(document).on('click', '.panel-heading.clickable',
      function(e) {
         var $this = $(this);
         if (!$this.hasClass('panel-collapsed')) {
            // Collapse the panel
            $this.parents('.panel').find('.panel-body').slideUp();
            $this
               .addClass('panel-collapsed')
               .find('span i')
                  .removeClass('glyphicon-chevron-up')
                  .addClass('glyphicon-chevron-down');
         }
         else {
            // Open the panel
            $this.parents('.panel').find('.panel-body').slideDown();
            $this
               .removeClass('panel-collapsed')
               .find('span i')
                  .removeClass('glyphicon-chevron-down')
                  .addClass('glyphicon-chevron-up');
         }
      }
   );
   // Initialize the list of years
   var yearControl = $("#taken-year");
   var currentYear = new Date().getFullYear();
   for (var year = 1988; year <= currentYear; year++) {
      var ystr = year.toString();
      var opt = $("<option>").attr("value", ystr).text(ystr);
      if (year == defaults.year)
         // Set an initial default value of 2006
         opt.attr("selected", "");
      yearControl.append(opt);
   }

   // Add explanation
   $("#explain-wrong").attr("title",
      "ÍLS og bankarnir gefa vexti upp sem 12 * mánaðarvexti.\n" +
      "Afhakaðu hér ef vextirnir eru ársvextir.");
   // Put in default values from the location hash, if any
   if (location.hash && location.hash.charAt(0) == "#") {
      var p = location.hash.slice(1).split("+");
      if (p[0] !== undefined)
         $("#amount").val(toCurrency(parseInt(p[0]) || defaults.amount));
      if (p[1] !== undefined)
         $("#interest").val(toFixed(parseFloat(p[1]) || defaults.interest, 2));
      if (p[2] !== undefined)
         $("#numpmt").val(toFixed(parseInt(p[2]) || defaults.numpmt, 0));
      if (p[3] !== undefined)
         $("#wrong").prop("checked", p[3] != "false");
      if (p[4] !== undefined)
         $("#taken-year").val(toFixed(parseInt(p[4]) || defaults.year, 0));
      if (p[5] !== undefined)
         $("#taken-month").val(toFixed(100 + (parseInt(p[5]) || defaults.month), 0).slice(-2));
      if (p[6] !== undefined)
         $("#inflation-future").val(p[6]);
   }
   // Add amount validation and formatting
   $("#amount").blur(function(e) {
      var amt = validateAmount();
      if (!isNaN(amt)) {
         $(this).val(toCurrency(amt));
         update();
      }
   })
   .focus();
   // Number of payments
   $("#numpmt").blur(function(e) {
      var num = validateNumPmt();
      if (!isNaN(num)) {
         $(this).val(toFixed(num, 0));
         update();
      }
   });
   // Interest percentage
   $("#interest").blur(function(e) {
      var i = validateInterest();
      if (!isNaN(i)) {
         $(this).val(toFixed(i, 2));
         update();
      }
   });
   // Wrong
   $("#wrong").change(function(e) { update(); });
   // Year
   $("#taken-year").change(function(e) { update(); });
   // Month
   $("#taken-month").change(function(e) { update(); });
   // Future inflation assumption
   $("#inflation-future").change(function(e) {
      // Update inflation graphs only
      checkAndUpdate(true);
   });
   $(".to-github")
      .attr("title", "Smelltu til að skoða frumforrit þessa vefjar á GitHub")
      .click(function(e) {
         window.open("https://github.com/vthorsteinsson/Greidslusedill", "_blank");
      });
   // Start listening for media changes
   initMediaListener();
   // Set the results container height
   setContainerHeight();
   // Update container height and redraw graphs on window resize
   $(window).resize(function() {
      setContainerHeight();
      update();
   });
   // Display the initial data, if everything validates OK
   update();
   // Make sure that collapsible planels that are by default closed
   // are initially hidden (this should be done after update()
   // since the panel widths are not available if display is none)
   $(".clickable.panel-collapsed")
      .parents(".panel")
      .find(".panel-body")
      .css("display", "none");
}

$(document).ready(init);

