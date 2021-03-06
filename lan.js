/*

   lan.js

   Functions used by the index.html page of
   the website LániðMitt.is

   Copyright (C) 2017 by Miðeind ehf. / Vilhjálmur Þorsteinsson
   See the LICENSE file at https://github.com/vthorsteinsson/Greidslusedill
   for licensing information.

*/

"use strict";

var months = [
   "jan", "feb", "mar", "apr", "maí", "jún", "júl", "ágú", "sep", "okt", "nóv", "des"
];
var monthsUC = months.map(function(m) { return m.charAt(0).toUpperCase() + m.slice(1); });

// The current year and month
var now = new Date();
var yearNow = now.getFullYear();
var monthNow = now.getMonth(); // 0-based

// The last year and month for which index data is available
var keyLast;
// The first year and month for which housing price index data is available
var keyVhFirst;
for (var key in vis) {
   if (keyLast === undefined || key > keyLast)
      keyLast = key;
   if (vis[key].vh !== undefined) {
      if (keyVhFirst === undefined || key < keyVhFirst)
         keyVhFirst = key;
   }
}
var yearLast = parseInt(keyLast.slice(0, 4));
var monthLast = parseInt(keyLast.slice(-2)) - 1;
var yearVhFirst = parseInt(keyVhFirst.slice(0, 4));
var monthVhFirst = parseInt(keyVhFirst.slice(-2)) - 1;
var vnvLast = vis[keyLast].vnv;
var vhLast = vis[keyLast].vh;

// Input validation
// Accepted currency formats:
// 18000000
// 18.000.000
// 18.000
// 18,000,000 (but not 18,000)
var reCurrency = /(?:^(\d+)$)|(?:^\d{1,3}(?:\.\d\d\d)*$)|(?:^\d{1,3}(?:\,\d\d\d){2,}$)/;
var reInteger = /^[1-9]\d{0,2}$/;
var rePercent = /^\d{1,2}(?:[\.\,]\d{1,2})?$/;

var TOOLTIP_HEIGHT = 48; // Tooltip hover distance above datapoint (2-line legend)
var TOOLTIP_HEIGHT_2 = 66; // Tooltip hover distance above datapoint (3-line legend)


function asCurrency(str) {
   // Returns true if the string str is valid as a currency amount
   if (!reCurrency.test(str))
      return NaN;
   str = str.split(".").join("").split(",").join("");
   return parseInt(str);
}

function asInteger(str) {
   // Returns true if the string str is valid as a nonzero integer
   if (!reInteger.test(str))
      return NaN;
   return parseInt(str);
}

function asPercent(str) {
   // Returns true if the string str is valid as a percentage
   if (!rePercent.test(str))
      return NaN;
   str = str.split(",").join(".");
   return parseFloat(str);
}

function toCurrency(num) {
   var sign = (num < 0) ? "-" : "";
   var s = Math.round(Math.abs(num)).toFixed(0);
   var a = [];
   // Insert thousand separators
   for (var i = s.length; i > 3; i = i - 3)
      a.push(s.substr(i - 3, 3));
   if (i)
      a.push(s.substr(0, i));
   return sign + a.reverse().join(".");
}

function toFixed(num, decimals) {
   return num.toFixed(decimals).replace(".", ",");
}

// Calculate the annuity payment of a loan.
// Parameters:
//    amount : the initial amount of the loan.
//    periods : the total number of periods that the
//       annuity lasts. For instance, a 40-year loan
//       with montly payments has 480 periods.
//    freq : the number of payments within a single
//       interest period. For instance, a loan with
//       monthly payments but a p.a. (per annum)
//       interest rate has a freq of 12.
//    rate : the interest rate in percent, i.e.
//       4.6 if the interest is 4.6% p.a.
//    exponential : true if the interest rate for each
//       period is calculated as rp=(1+r)^(1/freq)-1,
//       or false (or undefined) if it is calculated
//       as rp=r/freq. The former method is more
//       correct mathematically, but the latter is
//       (alas) often seen in the real world.
function annuity(amount, periods, freq, rate, exponential) {
   // r is the compounding interest rate for each period
   var r = exponential ?
      Math.pow(1 + rate / 100, 1 / freq) - 1 :
      rate / 100 / freq;
   // m is the future value multiplication factor
   var m = Math.pow(1 + r, periods);
   // Calculate and return the annuity payment
   return amount * r * m / (m - 1);
}

function keyYM (year, month) {
   // Convert (year, month (0-based)) to a key string of the form "2006-07"
   return year.toFixed(0) + "-" + (month + 101).toString().substr(-2, 2);
}

function lookupVNV(year, month, offset, futureInflation) {
   // Lookup consumer price index
   return lookupVis(year, month, offset,
      vnvLast, futureInflation,
      function(d) { return d.vnv; });
}

function lookupVH(year, month, offset, futureInflation) {
   // Lookup housing price index
   return lookupVis(year, month, offset,
      vhLast, futureInflation,
      function(d) { return d.vh; });
}

function lookupVis(year, month, offset, indexLast, futureInflation, dataFunc) {
   // Return the index for the given year and month (0-based)
   // First, apply the offset
   var last = yearLast * 12 + monthLast;
   var i = year * 12 + month + (offset || 0);
   year = Math.floor(i / 12);
   month = i % 12;
   if (i <= last)
      // Past index value: look it up in the table
      return dataFunc(vis[keyYM(year, month)]) || 100.0;
   // Future index: use the last available index plus future inflation
   var f = (futureInflation || 0.0) / 100;
   return indexLast * Math.pow(1 + f, (i - last) / 12);
}

function setInflationOptions(id, inflSoFar) {
   // Initialize the inflation future premises
   // 10 year inflation
   var infl10year = Math.pow(vnvLast / lookupVNV(yearLast, monthLast, - 10 * 12), 12 / (10 * 12));
   // 12 month inflation
   var infl12month = vnvLast / lookupVNV(yearLast, monthLast, -12);
   // Convert from (1 + p) to percentage
   infl10year = (infl10year - 1) * 100;
   infl12month = (infl12month - 1) * 100;
   var opt = [
      [0.0, "Engin; nota verðlag dagsins í dag (0,00%)"],
      [2.5, "Verðbólgumarkmið Seðlabankans (2,50%)"],
      [4.0, "Efri mörk verðbólgumarkmiðs Seðlabankans (4,00%)"],
      [infl10year, "Meðalverðbólga sl. 10 ár (" + toFixed(infl10year, 2) + "%)"],
      [infl12month, "Meðalverðbólga sl. 12 mánuði (" + toFixed(infl12month, 2) + "%)"],
      [inflSoFar, "Sú sama og á lánstímanum til þessa (" + toFixed(inflSoFar, 2) + "%)"]
   ];
   // Sort the options in increasing order by percentage
   opt.sort(function(a, b) {
      if (a[0] < b[0])
         return -1;
      if (a[0] > b[0])
         return 1;
      return 0;
   });
   var ctrl = $(id);
   ctrl.html("");
   for (var j = 0; j < opt.length; j++) {
      var o = opt[j];
      ctrl.append(
         $("<option>")
            .attr("value", o[0].toString())
            .text(o[1])
      );
   }
}

function calcLoan(amount, interest, n, wrong, year, month, futureInflation) {
   // Calculate the loan information and return it in a context object.
   // amount is the original loan amount in ISK.
   // interest is the quoted (purportedly) annual interest rate in percent.
   // n is the number of payments, for instance 480 for 40 years.
   // wrong is true if the monthly interest should be calculated as r/12.
   // year and month is the initial date of the loan. The month is 1-based.
   // futureInflation is the assumed future annual inflation rate, in percent.

   // The context being created
   var ctx = {
      amount : amount,
      interest : interest,
      n : n,
      wrong : wrong,
      year : year,
      month : month - 1,
      // Use the inflation index (VNV) of the month previous
      // to the loan origination date
      baseVNV : lookupVNV(year, month - 1, -1),
      baseVH : lookupVH(year, month - 1, -1),
      futureInflation : futureInflation || 0.0
   };

   if (wrong) {
      // The Icelandic banks quote annual interest wrongly,
      // i.e. they use the percentage / 12 as a monthly
      // accrual rate, not the percentage ^ (1/12)
      ctx.monthlyInterest = interest / 12;
      ctx.effectiveInterest = (Math.pow(1 + ctx.monthlyInterest / 100, 12) - 1) * 100;
   }
   else {
      ctx.monthlyInterest = (Math.pow(1 + interest / 100, 1 / 12) - 1) * 100;
      ctx.effectiveInterest = interest;
   }
   var inflNow = vnvLast / ctx.baseVNV;
   var r = ctx.monthlyInterest / 100;
   // The running principal amount
   var G = amount;
   // Annuity payment
   ctx.payment = annuity(amount, n, 12, interest, !wrong);
   // Inflation calculations
   ctx.months = (yearLast - year) * 12 + monthLast - (month - 1) + 1;
   ctx.monthlyInflation = ctx.months > 0 ?
      Math.pow(inflNow, (1 / ctx.months)) : 1.0;
   ctx.annualInflation = (Math.pow(ctx.monthlyInflation, 12) - 1) * 100;
   // Amount already paid and left to be paid
   ctx.monthsPaid = Math.min(ctx.months, n);
   ctx.monthsLeft = n - ctx.monthsPaid;
   ctx.amountPaid = ctx.monthsPaid * ctx.payment;
   ctx.amountLeft = ctx.monthsLeft * ctx.payment;
   // The original loan amount, in today's króna
   ctx.amountStart = amount * inflNow;
   ctx.amountNow = 0.0;
   // Generate all payments as well as a final sentinel state
   // with amt == newAmt == 0
   var a = [];
   var totalInterest = 0.0;
   var totalPaid = 0.0;
   for (var i = 0; i <= n; i++) {
      var vx = G * r;
      var nG = (i == n) ? G : G + vx - ctx.payment;
      var thisMonth = month - 1 + i;
      var thisYear = year + Math.floor(thisMonth / 12);
      thisMonth %= 12;
      if (thisYear == yearLast && thisMonth == monthLast)
         // Remember the principal as it stands now
         // (after the last available index period)
         ctx.amountNow = nG;
      var vnv = lookupVNV(thisYear, thisMonth, 0, ctx.futureInflation);
      var vh = lookupVH(thisYear, thisMonth, 0, ctx.futureInflation);
      var infl = vnv / ctx.baseVNV; // Inflation ratio at this point
      var valueNow = ctx.amountStart * (vh / ctx.baseVH) / infl;
      a.push(
         {
            ix : i + 1,
            year : thisYear,
            month : thisMonth,
            date : new Date(thisYear, thisMonth), // Month is 0-based
            amt : G, // The króna at the origination date
            amtInflated : G * infl, // The króna at the time
            amtNow : G * inflNow, // Today's króna
            // Calculate the value of the property in today's króna,
            // by multiplying the base loan amount in today's króna
            // with the increase in property prices and dividing by
            // the increase in consumer prices.
            valueNow : valueNow,
            // Appreciation in value, in today's króna
            apprNow : valueNow - ctx.amountStart,
            // Accumulated interest to date, in today's króna
            interestNow : totalInterest,
            // Accumulated payments to date, in today's króna
            paidNow : totalPaid,
            vx : vx,
            newAmt : nG,
            vnv : vnv,
            vnvRel : 1 / infl
         }
      );
      // Update running principal
      G = nG;
      // Add up the total interest paid
      totalInterest += vx * inflNow;
      // Add up the total amount paid
      totalPaid += ctx.payment * inflNow;
   }
   ctx.a = a;
   return ctx;
}

function displayLoan(ctx) {
   // Fill in informational fields
   $(".result-interest").text(toFixed(ctx.effectiveInterest, 4));
   $("#result-monthly-interest").text(toFixed(ctx.monthlyInterest, 4));
   $("#result-basevnv").text(toFixed(ctx.baseVNV, 1));
   $("#result-vnv-now").text(toFixed(vnvLast, 1));
   $(".result-inflation").text(toFixed(ctx.annualInflation, 2));
   $(".result-pmt").text(toCurrency(ctx.payment));
   $(".result-pmt-now").text(toCurrency(ctx.payment * vnvLast / ctx.baseVNV));
   // Months and amounts paid and remaining
   $(".result-months-paid").text(toFixed(ctx.monthsPaid, 0));
   $(".result-months-left").text(toFixed(ctx.monthsLeft, 0));
   $(".result-amount-paid").text(toCurrency(ctx.amountPaid));
   $(".result-amount-left").text(toCurrency(ctx.amountLeft));
   $(".result-inflated-paid").text(toCurrency(ctx.amountPaid * vnvLast / ctx.baseVNV));
   $(".result-inflated-left").text(toCurrency(ctx.amountLeft * vnvLast / ctx.baseVNV));
   // Show principal
   $(".result-principal").text(toCurrency(ctx.amount));
   $(".result-principal-now").text(toCurrency(ctx.amountStart));
   $(".result-now").text(toCurrency(ctx.amountNow));
   // Amount owed as it currently stands
   var inflatedNow = ctx.amountNow * vnvLast / ctx.baseVNV;
   $(".result-inflated-now").text(toCurrency(inflatedNow));
   // Value of asset in today's króna
   var valueNow = ctx.amount * vhLast / ctx.baseVH;
   $(".result-value-now").text(toCurrency(valueNow));
   $(".result-equity-now").text(toCurrency(valueNow - inflatedNow));
   // Hide the past-future legend if the loan is not currently open
   $("#legend-principal").css("display", ctx.monthsLeft > 0 ? "block" : "none");
   // Hide the past-future legend if the loan is not currently open
   $("#legend-inflated").css("display", ctx.monthsLeft > 0 ? "block" : "none");
   // Show total amount repaid
   var totalRepaid = ctx.payment * ctx.n;
   $("#result-total").text(toCurrency(totalRepaid));
   var totalNow = totalRepaid * vnvLast / ctx.baseVNV;
   $("#result-total-now").text(toCurrency(totalNow));
   // Inner rent
   $(".result-inner-rent").text(toCurrency((totalNow - ctx.amountStart) / ctx.n));
   // Nominal interest
   $("#result-interest-nominal").text(toFixed(ctx.interest, 2));
   $(".legend-amort").css("display", ctx.monthsLeft > 0 ? "block" : "none");
   // Hide the future inflation select box if the loan is not currently open
   $("#inflation-div").css("display", ctx.monthsLeft > 0 ? "block" : "none");
   var yCorrect = annuity(ctx.amount, ctx.n, 12, ctx.interest, true);
   var totalCorrect = yCorrect * ctx.n * vnvLast / ctx.baseVNV;
   $("#result-total-correct").text(toCurrency(totalCorrect));
   $("#result-total-diff").text(toCurrency(totalNow - totalCorrect));
   // The divs must have display: block for width calculations to work
   $("div.result").css("visibility", "hidden").css("display", "block");
   displayPayments(ctx);
   displayGraphs(ctx);
   // Everything is ready: show it
   $("div.result").css("visibility", "visible");
}

function displayPayments(ctx) {
   // Display a tabular payment schedule
   // with an expansion button in the middle
   var y = ctx.payment;
   var a = ctx.a.slice(0, -1); // Display all except final sentinel
   var $payments = $("#payments");
   $payments.html("");
   var len = a.length;
   var middleBar = false;
   $.each(a, function(index, val) {
      var tr;
      var middle = !(index < 12 || index >= (len - 12));
      if (!middleBar && middle) {
         // We don't yet have a middle bar: insert it
         tr = $("<tr>")
            .attr("class", "middle-bar")
            .append(
               $("<td>")
                  .attr("colspan", "7")
                  .append($("<button>")
                     .attr("type", "submit")
                     .attr("class", "btn btn-info")
                     .text(" Smelltu hér til að sjá alla gjalddaga")
                     .prepend($("<i>")
                        .attr("class", "material-icons")
                        .text("zoom_in")
                     )
                  )
            );
         $payments.append(tr);
         middleBar = true;
      }
      tr = $("<tr>");
      if (middle)
         tr.attr("class", "middle");
      tr.append($("<td>").text(val.ix.toFixed(0)));
      tr.append($("<td>").attr("class", "date").text(monthsUC[val.month] + " " + val.year.toFixed(0)));
      tr.append($("<td>").text(toCurrency(val.amt)));
      tr.append($("<td>").text(toCurrency(y - val.vx)));
      tr.append($("<td>").text(toCurrency(val.vx)));
      tr.append($("<td>").text(toCurrency(y)));
      tr.append($("<td>").text(toCurrency(val.newAmt)));
      $payments.append(tr);
   });
   // Only the first and last 12 months are visible by default
   $("tr.middle").css("display", "none");
   // Button to expand the table to cover all payments
   $("tr.middle-bar button")
      .click(function(e) {
         $("tr.middle-bar").css("display", "none");
         $("tr.middle").css("display", "table-row");
      });
}

function displayGraphs(ctx) {
   // Display the various graphs
   displayPrincipalGraph(ctx, false);
   displayPaymentGraph(ctx, false);
   // Display purchasing power of ISK
   displayInflationGraph(ctx, false);
   // Display inverse of purchasing power of ISK
   displayInflationGraph(ctx, true);
   // Display inflated principal
   displayPrincipalGraph(ctx, true);
   // Display inflated payments
   displayPaymentGraph(ctx, true);
   // Initialize the select control for inflation premises
   setInflationOptions("#inflation-future", ctx.annualInflation);
   // Display ratio graphs
   displayRatioGraphs(ctx);
   // Display equity outcome graph
   displayOutcomeGraph(ctx, false);
   // Display rent outcome graph
   displayOutcomeGraph(ctx, true);
}

function displayRatioGraph(id, cls, item1, item2, text1, text2, unit, decimals) {
   // Display a graph of ratios between two numbers
   var $canvas = $("#" + id);
   var MARGIN = 10;
   var BAR_HEIGHT = 30;
   var HEIGHT = 2 * MARGIN + 2 * BAR_HEIGHT;
   var margin = { top: MARGIN, right: 10, bottom: MARGIN, left: 10 },
      width = $canvas.width() - margin.right - margin.left,
      height = HEIGHT - margin.top - margin.bottom;
   // The graphics canvas
   $canvas.html("");

   var g = d3.select("#" + id)
      .append("svg")
         .attr("width", width + margin.right + margin.left)
         .attr("height", height + margin.top + margin.bottom)
      .append("g")
         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

   // Color the graph background
   g.append("rect")
      .attr("class", "background")
      .attr("x", -margin.left)
      .attr("y", -margin.top)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

   var x = d3.scaleLinear()
      .domain([0, d3.max([item1, item2])])
      .range([0, width]);

   var a = [ { data: item1, text: text1 }, { data: item2, text: text2 } ];

   // Draw two horizontal bars
   var bars = g.selectAll("rect.ratio." + cls)
      .data(a)
      .enter();
   bars
      .append("rect")
         .attr("class", function(d, i) { return "ratio " + cls + " r" + (i + 1); })
         .attr("x", function(d) { return x(0); })
         .attr("width", function(d) { return x(d.data); })
         .attr("y", function(d, i) { return BAR_HEIGHT * i; })
         .attr("height", function(d, i) { return BAR_HEIGHT; });
   bars
      .append("text")
         .attr("class", "ratio")
         .attr("x", function(d) { return x(0) + 12; })
         .attr("y", function(d, i) { return BAR_HEIGHT * i; })
         .attr("dy", "1.5em")
         .text(function(d) {
            return d.text + ": " +
               (decimals > 0 ? toFixed(d.data, decimals) : toCurrency(d.data)) +
               (unit ? " " + unit : "");
         });
}

function displayRatioGraphs(ctx) {
   // Display four graphs
   displayRatioGraph("canvas-ratio-1", "vnv",
      ctx.baseVNV,
      vnvLast,
      "Upphafleg vísitala neysluverðs",
      "Vísitala neysluverðs núna", "", 1);
   displayRatioGraph("canvas-ratio-2", "principal",
      ctx.amount,
      ctx.amount * vnvLast / ctx.baseVNV,
      "Upphaflegur höfuðstóll lánsins",
      "Höfuðstóllinn á núverandi verðlagi", "kr.", 0);
   displayRatioGraph("canvas-ratio-3", "payment",
      ctx.payment,
      ctx.payment * vnvLast / ctx.baseVNV,
      "Jafngreiðsla á upphaflegu verðlagi",
      "Jafngreiðsla á núverandi verðlagi", "kr.", 0);
   displayRatioGraph("canvas-ratio-4", "repayment",
      ctx.payment * ctx.n,
      ctx.payment * ctx.n * vnvLast / ctx.baseVNV,
      "Endurgreiðslur á upphaflegu verðlagi",
      "Endurgreiðslur á núverandi verðlagi", "kr.", 0);
}

function displayPrincipalGraph(ctx, inflated) {

   var a = ctx.a;
   var y = ctx.payment;

   var canvasId = inflated ? "#canvas-inflated" : "#canvas-principal";
   // Determine the drawing surface
   var $canvas = $(canvasId);
   var HEIGHT = inflated ? 300 : 280;
   var margin = { top: 10, right: 20, bottom: 20, left: 50 },
      width = $canvas.width() - margin.right - margin.left,
      height = HEIGHT - margin.top - margin.bottom;
   // The graphics canvas
   $canvas.html("");

   // Create the time scale for the x-axis
   var x = d3.scaleTime()
      .domain(d3.extent(a, function(d) { return d.date; }))
      .rangeRound([0, width]);

   var xAxis = d3.axisBottom(x)
      .tickFormat(function(d) {
         if (d.getMonth() == 0)
            // January: return the year
            return d.getFullYear().toFixed(0);
         // Otherwise, return the month name
         return monthsUC[d.getMonth()];
      });

   // Create tooltip div
   var tooltip = d3.select(canvasId)
      .append("div")
         .attr("class", "tooltip");
   var tooltipText = tooltip.append("div");

   var g = d3.select(canvasId)
      .append("svg")
         .attr("width", width + margin.right + margin.left)
         .attr("height", height + margin.top + margin.bottom)
      .append("g")
         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

   // Color the graph background
   g.append("rect")
      .attr("class", "background")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height);

   // Draw the X axis (time series by months)
   g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

   // Draw the Y axis legend
   g.append("g")
      .attr("class", "legend-y")
      .append("text")
         .attr("x", 6)
         .attr("y", -margin.left)
         .attr("dy", "0.8em")
         .attr("transform", "rotate(270)")
         .style("text-anchor", "end")
         .text("m.kr.");

   var valueFunc = function(d) {
      // Return the principal of the loan, either inflated or fixed
      return inflated ? d.amtInflated : d.amt;
   };

   var y = d3.scaleLinear()
      .domain([0, d3.max(a, valueFunc)])
      .range([height, 0])
      .nice();

   var yAxis = d3.axisLeft(y)
      .tickFormat(function(d) {
         // Show Y-axis ticks in millions with one decimal
         return toFixed(d / 1000000, 1);
      });

   // Draw the Y axis (amounts)
   g.append("g")
      .attr("class", "y axis")
      .call(yAxis);

   var widthFunc = function(d, i) {
      // Make the bar wide enough to reach to the next date
      if (i + 1 >= a.length)
         // Last (sentinel) bar: its height is always 0; return width 0
         return 0;
      return Math.max(1, x(a[i+1].date) - x(a[i].date));
   };

   var makeBars = function(cls, barId, valueFunc, inflated) {
      // Draw bars representing the principal of the loan
      var bars = g.selectAll("rect.bar." + cls)
         .data(a, function(d) { return d.date.toISOString(); }); // Key function

      bars
         // New bars: create
         .enter().append("rect")
            .attr("class", function(d) {
               if (d.year == yearNow && d.month == monthNow)
                  return "bar now " + cls;
               if (d.year < yearNow || (d.year == yearNow && d.month < monthNow))
                  return "bar past " + cls;
               return "bar " + cls;
            })
            .attr("x", function(d) { return x(d.date); })
            .attr("width", widthFunc)
            .attr("id", function(d) { return barId + "-" + keyYM(d.year, d.month); })
            .on("mouseover", function(d, i) {
               tooltip.transition()
                  .duration(100)
                  .style("opacity", .8);
               tooltipText
                  .html("<b>" + monthsUC[d.month] + " " + d.year + "</b><br>" +
                     toCurrency(valueFunc(d)) + "<br>");
               tooltip
                  .style("left", (x(d.date) + widthFunc(d, i) / 2 + margin.left - 23) + "px")
                  .style("top", (y(valueFunc(d)) - TOOLTIP_HEIGHT) + "px");
               if (inflated) {
                  // Also highlight the same month on the inverse inflation graph
                  $("#inv-" + keyYM(d.year, d.month)).addClass("hover");
                  // ...and on the uninflated overlay graph
                  $("#po-" + keyYM(d.year, d.month)).addClass("hover");
               }
            })
            .on("mouseout", function(d) {
               tooltip.transition()
                  .duration(100)
                  .style("opacity", 0);
               if (inflated) {
                  // Remove highlight from the same month on the inverse inflation graph
                  $("#inv-" + keyYM(d.year, d.month)).removeClass("hover");
                  $("#po-" + keyYM(d.year, d.month)).removeClass("hover");
               }
            })
         // New and existing bars: update
         .merge(bars)
            .attr("y", function(d) { return y(valueFunc(d)); })
            .attr("height", function(d) { return Math.max(0, y(0) - y(valueFunc(d))); })
   };

   makeBars(inflated ? "inflated" : "principal",
      inflated ? "pi" : "p",
      valueFunc, inflated);
   if (inflated) {
      // Overlay another bar graph with the original, un-inflated loan
      makeBars("principal", "po", function(d) { return d.amt; }, false);
      // Modify the inflation premise text
      if (ctx.futureInflation == 0.0)
         $("span.inflation-premise").text("Frá deginum í dag er lánið sýnt án verðbólgu")
      else
         $("span.inflation-premise").text("Frá deginum í dag er reiknað með " +
            toFixed(ctx.futureInflation, 2) + "% árlegri verðbólgu");
   }
}

function displayPaymentGraph(ctx, inflated) {

   var a = ctx.a;
   var payment = ctx.payment;
   var canvasId = inflated ? "#canvas-payments-inflated" : "#canvas-payments";

   // Determine the drawing surface
   var $canvas = $(canvasId);
   var HEIGHT = inflated ? 300 : 280;
   var margin = { top: 10, right: 20, bottom: 20, left: 50 },
      width = $canvas.width() - margin.right - margin.left,
      height = HEIGHT - margin.top - margin.bottom;
   // The graphics canvas
   $canvas.html("");

   // Create the time scale for the x-axis
   var x = d3.scaleTime()
      .domain(d3.extent(a, function(d) { return d.date; }))
      .rangeRound([0, width]);

   var xAxis = d3.axisBottom(x)
      .tickFormat(function(d) {
         if (d.getMonth() == 0)
            // January: return the year
            return d.getFullYear().toFixed(0);
         // Otherwise, return the month name
         return monthsUC[d.getMonth()];
      });

   // Create tooltip div
   var tooltip = d3.select(canvasId)
      .append("div")
         .attr("class", "tooltip");
   var tooltipText = tooltip.append("div");

   var g = d3.select(canvasId)
      .append("svg")
         .attr("width", width + margin.right + margin.left)
         .attr("height", height + margin.top + margin.bottom)
      .append("g")
         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

   var amortFunc = function(d) {
      var amort = payment - d.vx;
      return inflated ? amort / d.vnvRel : amort;
   };

   var interestFunc = function(d) {
      return inflated ? d.vx / d.vnvRel : d.vx;
   };

   var totalFunc = function(d) {
      return inflated ? payment / d.vnvRel : payment;
   };

   var yMax = inflated ? d3.max(a, totalFunc) : payment;

   var y = d3.scaleLinear()
      .domain([0, yMax])
      .range([height, 0])
      .nice();

   var yAxis = d3.axisLeft(y)
      .tickFormat(function(d) {
         // Show Y-axis ticks in thousands
         return toCurrency(d / 1000);
      });

   // Draw the X axis (time series by months)
   g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

   // Draw the Y axis (amounts)
   g.append("g")
      .attr("class", "y axis")
      .call(yAxis);

   // Draw the Y axis legend
   g.append("g")
      .attr("class", "legend-y")
      .append("text")
         .attr("x", 6)
         .attr("y", -margin.left)
         .attr("dy", "0.8em")
         .attr("transform", "rotate(270)")
         .style("text-anchor", "end")
         .text("þús.kr.");

   var widthFunc = function(d, i) {
      // Make the bar wide enough to reach to the next date
      if (i + 1 >= a.length)
         // Last (sentinel) bar: its height is always 0; return width 0
         return 0;
      return Math.max(1, x(a[i+1].date) - x(a[i].date));
   };

   // Draw bars representing the monthly amortization
   g.selectAll("rect.bar.amort")
      .data(a, function(d) { return d.date.toISOString(); }) // Key function
   .enter().append("rect")
      .attr("class", function(d) {
         if (d.year == yearNow && d.month == monthNow)
            return "bar amort now";
         if (d.year < yearNow || (d.year == yearNow && d.month < monthNow))
            return "bar amort past";
         return "bar amort";
      })
      .attr("x", function(d) { return x(d.date); })
      .attr("y", function(d) { return y(amortFunc(d)); })
      .attr("width", widthFunc)
      .attr("height", function(d) { return Math.max(0, y(0) - y(amortFunc(d))); })
      .on("mouseover", function(d, i) {
         tooltip.transition()
            .duration(100)
            .style("opacity", .8);
         tooltipText
            .html("<b>" + monthsUC[d.month] + " " + d.year + "</b><br>" + toCurrency(amortFunc(d)) + "<br>");
         tooltip
            .style("left", (x(d.date) + widthFunc(d, i) / 2 + margin.left - 23) + "px")
            .style("top", (y(amortFunc(d)) - TOOLTIP_HEIGHT) + "px");
         if (inflated)
            // Also highlight the same month on the inverse inflation graph
            $("#inv-" + keyYM(d.year, d.month)).addClass("hover");
      })
      .on("mouseout", function(d) {
         tooltip.transition()
            .duration(100)
            .style("opacity", 0);
         if (inflated)
            // Remove highlight on the same month on the inverse inflation graph
            $("#inv-" + keyYM(d.year, d.month)).removeClass("hover");
      });

   // Draw bars representing the monthly interest
   var yTop = y(yMax);

   g.selectAll("rect.bar.interest")
      .data(a, function(d) { return d.date.toISOString(); }) // Key function
   .enter().append("rect")
      .attr("class", function(d) {
         if (d.year == yearNow && d.month == monthNow)
            return "bar interest now";
         if (d.year < yearNow || (d.year == yearNow && d.month < monthNow))
            return "bar interest past";
         return "bar interest";
      })
      .attr("x", function(d) { return x(d.date); })
      .attr("y", function(d) { return y(totalFunc(d)); })
      .attr("width", widthFunc)
      .attr("height", function(d) { return Math.max(0, y(amortFunc(d)) - y(totalFunc(d))); })
      .on("mouseover", function(d, i) {
         tooltip.transition()
            .duration(100)
            .style("opacity", .8);
         tooltipText
            .html("<b>" + monthsUC[d.month] + " " + d.year + "</b><br>" + toCurrency(interestFunc(d)) + "<br>");
         tooltip
            .style("left", (x(d.date) + widthFunc(d, i) / 2 + margin.left - 23) + "px")
            .style("top", (y(totalFunc(d)) - TOOLTIP_HEIGHT) + "px");
         if (inflated)
            // Also highlight the same month on the inverse inflation graph
            $("#inv-" + keyYM(d.year, d.month)).addClass("hover");
      })
      .on("mouseout", function(d) {
         tooltip.transition()
            .duration(100)
            .style("opacity", 0);
         if (inflated)
            // Remove highlight on the same month on the inverse inflation graph
            $("#inv-" + keyYM(d.year, d.month)).removeClass("hover");
      });

   // Draw the interest legend in the upper left corner
   g.append("g")
      .attr("class", "text-interest")
      .append("text")
         .attr("x", 24)
         .attr("y", y(totalFunc(a[0])) + 8)
         .attr("dy", "1.4em")
         .text("Vextir");

   // Draw the amortization legend in the lower right corner
   g.append("g")
      .attr("class", "text-amort")
      .append("text")
         .attr("x", width - 24)
         .attr("y", y(0) - 52)
         .attr("dy", "1.4em")
         .text("Afborganir");
}

function displayInflationGraph(ctx, inverse) {

   var canvasId = inverse ? "#canvas-inverse" : "#canvas-inflation";
   var barId = inverse ? "inv" : "infl";
   // Determine the drawing surface
   var $canvas = $(canvasId);
   var HEIGHT = 230;
   var margin = { top: 10, right: 20, bottom: 20, left: 50 },
      width = $canvas.width() - margin.right - margin.left,
      height = HEIGHT - margin.top - margin.bottom;
   // The graphics canvas
   $canvas.html("");

   // Create the data array to be displayed
   var a = [];
   var start = ctx.year * 12 + ctx.month;
   var end = yearLast * 12 + monthLast;
   for (var i = start; i <= end; i++) {
      var thisYear = Math.floor(i / 12);
      var thisMonth = i % 12;
      var vnv = lookupVNV(thisYear, thisMonth);
      a.push({
         year : thisYear,
         month : thisMonth,
         date : new Date(thisYear, thisMonth),
         vnvRel : inverse ?
            1000.0 * vnv / ctx.baseVNV - 1000 :
            1000.0 * ctx.baseVNV / vnv
      });
   }
   // Create the time scale for the x-axis
   var x = d3.scaleTime()
      .domain(d3.extent(a, function(d) { return d.date; }))
      .rangeRound([0, width]);

   var xAxis = d3.axisBottom(x)
      .tickFormat(function(d) {
         if (d.getMonth() == 0)
            // January: return the year
            return d.getFullYear().toFixed(0);
         // Otherwise, return the month name
         return monthsUC[d.getMonth()];
      });

   // Create tooltip div
   var tooltip = d3.select(canvasId)
      .append("div")
         .attr("class", "tooltip");
   var tooltipText = tooltip.append("div");

   var g = d3.select(canvasId)
      .append("svg")
         .attr("width", width + margin.right + margin.left)
         .attr("height", height + margin.top + margin.bottom)
      .append("g")
         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

   // Color the graph background
   g.append("rect")
      .attr("class", "background")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height);

   var yDomain = inverse ? d3.extent(a, function(d) { return d.vnvRel; }) : [0, 1000];
   var y = d3.scaleLinear()
      .domain(yDomain)
      .range([height, 0])
      .nice();

   var yAxis = d3.axisLeft(y)
      .tickFormat(function(d) {
         // Show Y-axis ticks in ISK
         return toCurrency(d);
      });

   // Draw the X axis (time series by months)
   g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

   // Draw the Y axis (amounts)
   g.append("g")
      .attr("class", "y axis")
      .call(yAxis);

   var widthFunc = function(d, i) {
      // Make the bar wide enough to reach to the next date
      if (i >= a.length - 1)
         return 0;
      return Math.max(1, x(a[i+1].date) - x(a[i].date));
   };

   // Draw bars representing the depreciation of the ISK over time
   g.selectAll("rect.bar.infl")
      .data(a, function(d) { return d.date.toISOString(); }) // Key function
   .enter().append("rect")
      .attr("class", function(d) {
         if (d.year < yearNow || (d.year == yearNow && d.month < monthNow))
            return "bar infl";
         if (d.year == yearNow && d.month == monthNow)
            return "bar infl now";
         return "bar infl future";
      })
      .attr("id", function(d) { return barId + "-" + keyYM(d.year, d.month); })
      .attr("x", function(d) { return x(d.date); })
      .attr("y", function(d) { return y(Math.max(0, d.vnvRel)); })
      .attr("width", widthFunc)
      .attr("height", function(d) { return Math.abs(y(0) - y(d.vnvRel)); })
      .on("mouseover", function(d, i) {
         tooltip.transition()
            .duration(100)
            .style("opacity", .8);
         tooltipText
            .html("<b>" + monthsUC[d.month] + " " + d.year + "</b><br>" + toCurrency(d.vnvRel) + "<br>");
         tooltip
            .style("left", (x(d.date) + widthFunc(d, i) / 2 + margin.left - 23) + "px")
            .style("top", (y(Math.max(0, d.vnvRel)) - TOOLTIP_HEIGHT) + "px");
      })
      .on("mouseout", function(d) {
         tooltip.transition()
            .duration(100)
            .style("opacity", 0);
      });
}

function displayOutcomeGraph(ctx, showRent) {

   var a = ctx.a;

   var canvasId = showRent ? "#canvas-rent" : "#canvas-outcome";
   // Determine the drawing surface
   var $canvas = $(canvasId);
   var HEIGHT = 280;
   var margin = { top: 10, right: 20, bottom: 20, left: 50 },
      width = $canvas.width() - margin.right - margin.left,
      height = HEIGHT - margin.top - margin.bottom;
   // The graphics canvas
   $canvas.html("");

   // Create the time scale for the x-axis
   var x = d3.scaleTime()
      .domain(d3.extent(a, function(d) { return d.date; }))
      .rangeRound([0, width]);

   var xAxis = d3.axisBottom(x)
      .tickFormat(function(d) {
         if (d.getMonth() == 0)
            // January: return the year
            return d.getFullYear().toFixed(0);
         // Otherwise, return the month name
         return monthsUC[d.getMonth()];
      });

   // Create tooltip div
   var tooltip = d3.select(canvasId)
      .append("div")
         .attr("class", "tooltip");
   var tooltipText = tooltip.append("div");

   var g = d3.select(canvasId)
      .append("svg")
         .attr("width", width + margin.right + margin.left)
         .attr("height", height + margin.top + margin.bottom)
      .append("g")
         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

   // Color the graph background
   g.append("rect")
      .attr("class", "background")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height);

   // Draw the X axis (time series by months)
   g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

   // Draw the Y axis legend
   g.append("g")
      .attr("class", "legend-y")
      .append("text")
         .attr("x", 6)
         .attr("y", -margin.left)
         .attr("dy", "0.8em")
         .attr("transform", "rotate(270)")
         .style("text-anchor", "end")
         .text("m.kr.");

   var yExtent = showRent ?
      d3.extent(a, function(d) { return d.interestNow - d.apprNow; }) :
      [0, d3.max(a, function(d) { return Math.max(d.valueNow, d.amtNow); })];
   var y = d3.scaleLinear()
      .domain(yExtent)
      .range([height, 0])
      .nice();

   var yAxis = d3.axisLeft(y)
      .tickFormat(function(d) {
         // Show Y-axis ticks in millions with one decimal
         return toFixed(d / 1000000, 1);
      });

   // Draw the Y axis (amounts)
   g.append("g")
      .attr("class", "y axis")
      .call(yAxis);

   var widthFunc = function(d, i) {
      // Make the bar wide enough to reach to the next date
      if (i + 1 >= a.length)
         // Last (sentinel) bar: its height is always 0; return width 0
         return 0;
      return Math.max(1, x(a[i+1].date) - x(a[i].date));
   };

   // Draw bars representing the equity or the cost of the loan
   var drawBars = function(cls, hoverClass, topFunc, bottomFunc, tooltipLocFunc, tooltipFunc) {
      var bars = g.selectAll("rect.bar." + cls)
         .data(a, function(d) { return d.date.toISOString(); }); // Key function
      var e = bars
         // New bars: create
         .enter().append("rect")
            .attr("class", function(d) {
               if (d.year == yearNow && d.month == monthNow)
                  return "bar now " + cls;
               if (d.year < yearNow || (d.year == yearNow && d.month < monthNow))
                  return "bar past " + cls;
               return "bar " + cls;
            })
            .attr("x", function(d) { return x(d.date); })
            .attr("width", widthFunc)
            .attr("id", function(d) { return cls + "-" + keyYM(d.year, d.month); });
      if (tooltipFunc)
         e.on("mouseover", function(d, i) {
            tooltip.transition()
               .duration(100)
               .style("opacity", .8);
            tooltipText
               .html(tooltipFunc(d));
            tooltip
               .style("left", (x(d.date) + widthFunc(d, i) / 2 + margin.left - 23) + "px")
               .style("top", (y(tooltipLocFunc(d)) - TOOLTIP_HEIGHT_2) + "px");
            if (hoverClass)
               // Highlight the equity portion
               $("#" + hoverClass + "-" + keyYM(d.year, d.month)).addClass("hover");
         })
         .on("mouseout", function(d) {
            tooltip.transition()
               .duration(100)
               .style("opacity", 0);
            if (hoverClass)
               // De-highlight the equity portion
               $("#" + hoverClass + "-" + keyYM(d.year, d.month)).removeClass("hover");
         });
      // New and existing bars: update
      e.merge(bars)
         .attr("y",
            function(d) {
               return y(Math.max(topFunc(d), bottomFunc(d)));
            }
         )
         .attr("height",
            function(d) {
               var top = topFunc(d);
               var bottom = bottomFunc(d);
               // Find the higher data value, i.e. the one with the lower y-coordinate
               var topVal = Math.max(top, bottom);
               // Find the lower data value, i.e. the one with the higher y-coordinate
               var bottomVal = Math.min(top, bottom);
               // Calculate the height
               return Math.max(0, y(bottomVal) - y(topVal));
            }
         )
         .classed("neg", function(d) { return topFunc(d) < bottomFunc(d); });
   };

   if (showRent) {
      // Draw bars for total cost of loan (interest - value appreciation)
      drawBars("cost", null,
         function(d) { return d.interestNow - d.apprNow; }, // topFunc
         function(d) { return 0; }, // bottomFunc
         function(d) { return Math.max(0, d.interestNow - d.apprNow); }, // tooltipLoc
         function(d) {
            // Tooltip text
            var rent = 0.0;
            if (d.ix > 1)
               rent = (d.interestNow - d.apprNow) / (d.ix - 1);
            return "Leiga til<br><b>" + months[d.month] + " " + d.year + "</b>:<br>"
               + toCurrency(rent) + "<br>";
         }
      );
   }
   else {
      // Draw bars for amount owed at each point in time
      var tooltipLocFunc = function(d) { return Math.max(d.valueNow, d.amtNow); };
      var tooltipTextFunc =
         function(d) {
            // Tooltip text
            return "<b>" + monthsUC[d.month] + " " + d.year +
               "</b><br>Eigið fé:<br>" +
               toCurrency(d.valueNow - d.amtNow) + "<br>";
         };
      drawBars("loan", "equity",
         function(d) { return d.amtNow; }, // topFunc
         function(d) { return 0; }, // bottomFunc
         tooltipLocFunc,
         tooltipTextFunc
      );
      drawBars("equity", null,
         function(d) { return d.valueNow; }, // topFunc
         function(d) { return d.amtNow; }, // bottomFunc
         tooltipLocFunc,
         tooltipTextFunc
      );
      // Draw valuation line on top
      var line = d3.line()
         .curve(d3.curveCatmullRom) // Smoothing algorithm
         .x(function(d) { return x(d.date); })
         .y(function(d) { return y(d.valueNow); });
      g.append("path")
         .attr("class", "line")
         .attr("d", line(a));
   }

}

