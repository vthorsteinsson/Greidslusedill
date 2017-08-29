
// Vísitölur húsnæðisverðs og neysluverðs
var vis = {
"1988-05" : { vnv: 100.0 },
"1988-06" : { vnv: 103.4 },
"1988-07" : { vnv: 107.0 },
"1988-08" : { vnv: 109.3 },
"1988-09" : { vnv: 110.0 },
"1988-10" : { vnv: 110.4 },
"1988-11" : { vnv: 110.5 },
"1988-12" : { vnv: 110.7 },
"1989-01" : { vnv: 112.6 },
"1989-02" : { vnv: 114.2 },
"1989-03" : { vnv: 117.4 },
"1989-04" : { vnv: 119.9 },
"1989-05" : { vnv: 122.3 },
"1989-06" : { vnv: 125.9 },
"1989-07" : { vnv: 126.8 },
"1989-08" : { vnv: 128.5 },
"1989-09" : { vnv: 131.1 },
"1989-10" : { vnv: 133.7 },
"1989-11" : { vnv: 135.7 },
"1989-12" : { vnv: 138.6 },
"1990-01" : { vnv: 139.3 },
"1990-02" : { vnv: 141.5 },
"1990-03" : { vnv: 142.7 },
"1990-04" : { vnv: 143.1 },
"1990-05" : { vnv: 144.4 },
"1990-06" : { vnv: 145.4 },
"1990-07" : { vnv: 146.4 },
"1990-08" : { vnv: 146.8 },
"1990-09" : { vnv: 146.8 },
"1990-10" : { vnv: 147.2 },
"1990-11" : { vnv: 148.2 },
"1990-12" : { vnv: 148.6 },
"1991-01" : { vnv: 149.5 },
"1991-02" : { vnv: 150.0 },
"1991-03" : { vnv: 150.3 },
"1991-04" : { vnv: 151.0 },
"1991-05" : { vnv: 152.8 },
"1991-06" : { vnv: 154.9 },
"1991-07" : { vnv: 156.0 },
"1991-08" : { vnv: 157.2 },
"1991-09" : { vnv: 158.1 },
"1991-10" : { vnv: 159.3 },
"1991-11" : { vnv: 160.0 },
"1991-12" : { vnv: 159.8 },
"1992-01" : { vnv: 160.2 },
"1992-02" : { vnv: 160.4 },
"1992-03" : { vnv: 160.6 },
"1992-04" : { vnv: 160.6 },
"1992-05" : { vnv: 160.5 },
"1992-06" : { vnv: 161.1 },
"1992-07" : { vnv: 161.4 },
"1992-08" : { vnv: 161.4 },
"1992-09" : { vnv: 161.3 },
"1992-10" : { vnv: 161.4 },
"1992-11" : { vnv: 161.4 },
"1992-12" : { vnv: 162.2 },
"1993-01" : { vnv: 164.1 },
"1993-02" : { vnv: 165.3 },
"1993-03" : { vnv: 165.4 },
"1993-04" : { vnv: 165.9 },
"1993-05" : { vnv: 166.3 },
"1993-06" : { vnv: 166.2 },
"1993-07" : { vnv: 167.7 },
"1993-08" : { vnv: 169.2 },
"1993-09" : { vnv: 169.8 },
"1993-10" : { vnv: 170.8 },
"1993-11" : { vnv: 170.8 },
"1993-12" : { vnv: 169.9 },
"1994-01" : { vh:100,vnv:169.3 },
"1994-02" : { vh:99.6517,vnv:169.5 },
"1994-03" : { vh:102.034,vnv:169.7 },
"1994-04" : { vh:100.833,vnv:169.9 },
"1994-05" : { vh:99.8038,vnv:169.9 },
"1994-06" : { vh:101.947,vnv:170.1 },
"1994-07" : { vh:101.047,vnv:170.4 },
"1994-08" : { vh:99.2795,vnv:170.5 },
"1994-09" : { vh:98.9889,vnv:171 },
"1994-10" : { vh:98.5611,vnv:170.8 },
"1994-11" : { vh:98.4656,vnv:170.7 },
"1994-12" : { vh:99.3963,vnv:170.8 },
"1995-01" : { vh:96.5188,vnv:172.1 },
"1995-02" : { vh:96.0455,vnv:172.3 },
"1995-03" : { vh:97.3928,vnv:172 },
"1995-04" : { vh:98.3393,vnv:171.8 },
"1995-05" : { vh:95.443,vnv:172.1 },
"1995-06" : { vh:97.1992,vnv:172.3 },
"1995-07" : { vh:95.8738,vnv:172.8 },
"1995-08" : { vh:95.8449,vnv:173.5 },
"1995-09" : { vh:97.164,vnv:174.1 },
"1995-10" : { vh:96.4715,vnv:174.9 },
"1995-11" : { vh:96.6302,vnv:174.3 },
"1995-12" : { vh:93.8311,vnv:174.2 },
"1996-01" : { vh:94.602,vnv:174.9 },
"1996-02" : { vh:95.4123,vnv:175.2 },
"1996-03" : { vh:95.2183,vnv:175.5 },
"1996-04" : { vh:96.1316,vnv:175.8 },
"1996-05" : { vh:95.8633,vnv:176.9 },
"1996-06" : { vh:96.9505,vnv:176.7 },
"1996-07" : { vh:97.7691,vnv:176.9 },
"1996-08" : { vh:98.9743,vnv:178 },
"1996-09" : { vh:96.2029,vnv:178.4 },
"1996-10" : { vh:96.8643,vnv:178.5 },
"1996-11" : { vh:96.0411,vnv:178.6 },
"1996-12" : { vh:98.1749,vnv:177.8 },
"1997-01" : { vh:96.2053,vnv:178.4 },
"1997-02" : { vh:97.3194,vnv:178.5 },
"1997-03" : { vh:97.2898,vnv:178.4 },
"1997-04" : { vh:99.6171,vnv:179.7 },
"1997-05" : { vh:98.9348,vnv:179.4 },
"1997-06" : { vh:99.1194,vnv:179.8 },
"1997-07" : { vh:98.7712,vnv:180.1 },
"1997-08" : { vh:98.5527,vnv:180.6 },
"1997-09" : { vh:98.1346,vnv:181.3 },
"1997-10" : { vh:99.9253,vnv:181.9 },
"1997-11" : { vh:99.9955,vnv:181.7 },
"1997-12" : { vh:100.043,vnv:181.4 },
"1998-01" : { vh:100.677,vnv:182.4 },
"1998-02" : { vh:102.484,vnv:182 },
"1998-03" : { vh:103.31,vnv:182.7 },
"1998-04" : { vh:104.203,vnv:183.1 },
"1998-05" : { vh:104.621,vnv:183.7 },
"1998-06" : { vh:104.986,vnv:184 },
"1998-07" : { vh:105.015,vnv:183.6 },
"1998-08" : { vh:105.377,vnv:182.6 },
"1998-09" : { vh:108.115,vnv:182.8 },
"1998-10" : { vh:107.143,vnv:183.6 },
"1998-11" : { vh:106.379,vnv:184.1 },
"1998-12" : { vh:107.856,vnv:183.7 },
"1999-01" : { vh:110.794,vnv:184.8 },
"1999-02" : { vh:112.025,vnv:184.5 },
"1999-03" : { vh:115.219,vnv:185.4 },
"1999-04" : { vh:116.648,vnv:186.4 },
"1999-05" : { vh:119.292,vnv:187.3 },
"1999-06" : { vh:121.622,vnv:188.8 },
"1999-07" : { vh:125.117,vnv:189.5 },
"1999-08" : { vh:126.214,vnv:190.2 },
"1999-09" : { vh:127.286,vnv:191.8 },
"1999-10" : { vh:128.239,vnv:193.3 },
"1999-11" : { vh:129.98,vnv:193.3 },
"1999-12" : { vh:131.772,vnv:194 },
"2000-01" : { vh:132.894,vnv:195.5 },
"2000-02" : { vh:139.155,vnv:194.9 },
"2000-03" : { vh:139.239,vnv:196.4 },
"2000-04" : { vh:140.114,vnv:197.6 },
"2000-05" : { vh:140.893,vnv:198.4 },
"2000-06" : { vh:142.279,vnv:199.1 },
"2000-07" : { vh:143.701,vnv:200.1 },
"2000-08" : { vh:145.377,vnv:199.1 },
"2000-09" : { vh:146.102,vnv:199.5 },
"2000-10" : { vh:145.432,vnv:201.5 },
"2000-11" : { vh:149.091,vnv:202.1 },
"2000-12" : { vh:149.36,vnv:202.1 },
"2001-01" : { vh:148.049,vnv:202.4 },
"2001-02" : { vh:152.971,vnv:202.8 },
"2001-03" : { vh:152.53,vnv:204 },
"2001-04" : { vh:154.317,vnv:206.5 },
"2001-05" : { vh:149.904,vnv:209.4 },
"2001-06" : { vh:152.952,vnv:212.6 },
"2001-07" : { vh:152.328,vnv:214.2 },
"2001-08" : { vh:149.756,vnv:214.9 },
"2001-09" : { vh:150.447,vnv:216.3 },
"2001-10" : { vh:151.885,vnv:217.7 },
"2001-11" : { vh:152.828,vnv:218.5 },
"2001-12" : { vh:153.992,vnv:219.5 },
"2002-01" : { vh:155.002,vnv:221.5 },
"2002-02" : { vh:156.247,vnv:220.9 },
"2002-03" : { vh:156.602,vnv:221.8 },
"2002-04" : { vh:153.986,vnv:221.9 },
"2002-05" : { vh:157.891,vnv:221.8 },
"2002-06" : { vh:155.95,vnv:222.8 },
"2002-07" : { vh:158.012,vnv:223 },
"2002-08" : { vh:158.904,vnv:221.8 },
"2002-09" : { vh:160.575,vnv:222.9 },
"2002-10" : { vh:163.722,vnv:224.1 },
"2002-11" : { vh:164.367,vnv:223.7 },
"2002-12" : { vh:165.567,vnv:223.9 },
"2003-01" : { vh:168.974,vnv:224.7 },
"2003-02" : { vh:170.172,vnv:224.3 },
"2003-03" : { vh:173.525,vnv:226.7 },
"2003-04" : { vh:171.834,vnv:227 },
"2003-05" : { vh:175.937,vnv:226.6 },
"2003-06" : { vh:179.085,vnv:226.8 },
"2003-07" : { vh:179.985,vnv:226.5 },
"2003-08" : { vh:182.612,vnv:226.3 },
"2003-09" : { vh:180.849,vnv:227.9 },
"2003-10" : { vh:183.972,vnv:229 },
"2003-11" : { vh:185.204,vnv:229.3 },
"2003-12" : { vh:180.551,vnv:230 },
"2004-01" : { vh:183.067,vnv:230.1 },
"2004-02" : { vh:185.907,vnv:229.4 },
"2004-03" : { vh:190.278,vnv:230.7 },
"2004-04" : { vh:194.941,vnv:232 },
"2004-05" : { vh:195.986,vnv:233.9 },
"2004-06" : { vh:196.838,vnv:235.7 },
"2004-07" : { vh:202.629,vnv:234.6 },
"2004-08" : { vh:200.003,vnv:234.6 },
"2004-09" : { vh:206.695,vnv:235.6 },
"2004-10" : { vh:209.32,vnv:237.4 },
"2004-11" : { vh:217.294,vnv:237.9 },
"2004-12" : { vh:222.696,vnv:239 },
"2005-01" : { vh:234.127,vnv:239.2 },
"2005-02" : { vh:245.72,vnv:239.7 },
"2005-03" : { vh:251.588,vnv:241.5 },
"2005-04" : { vh:261.419,vnv:242 },
"2005-05" : { vh:271.356,vnv:240.7 },
"2005-06" : { vh:273.2,vnv:242.4 },
"2005-07" : { vh:282.432,vnv:242.7 },
"2005-08" : { vh:280.707,vnv:243.2 },
"2005-09" : { vh:283.257,vnv:246.9 },
"2005-10" : { vh:285.598,vnv:248.4 },
"2005-11" : { vh:294.419,vnv:248 },
"2005-12" : { vh:291.745,vnv:248.9 },
"2006-01" : { vh:293.303,vnv:249.7 },
"2006-02" : { vh:299.1,vnv:249.5 },
"2006-03" : { vh:304.239,vnv:252.3 },
"2006-04" : { vh:307.698,vnv:255.2 },
"2006-05" : { vh:307.147,vnv:258.9 },
"2006-06" : { vh:308.963,vnv:261.9 },
"2006-07" : { vh:303.598,vnv:263.1 },
"2006-08" : { vh:311.005,vnv:264 },
"2006-09" : { vh:313.054,vnv:265.6 },
"2006-10" : { vh:306.146,vnv:266.2 },
"2006-11" : { vh:308.427,vnv:266.1 },
"2006-12" : { vh:306.305,vnv:266.2 },
"2007-01" : { vh:313.4,vnv:266.9 },
"2007-02" : { vh:314.188,vnv:268 },
"2007-03" : { vh:321.814,vnv:267.1 },
"2007-04" : { vh:324.043,vnv:268.7 },
"2007-05" : { vh:335.68,vnv:271 },
"2007-06" : { vh:337.398,vnv:272.4 },
"2007-07" : { vh:342.1,vnv:273 },
"2007-08" : { vh:344.703,vnv:273.1 },
"2007-09" : { vh:347.457,vnv:276.7 },
"2007-10" : { vh:357.3,vnv:278.1 },
"2007-11" : { vh:351.888,vnv:279.9 },
"2007-12" : { vh:352.104,vnv:281.8 },
"2008-01" : { vh:357.428,vnv:282.3 },
"2008-02" : { vh:354.113,vnv:286.2 },
"2008-03" : { vh:352.7,vnv:290.4 },
"2008-04" : { vh:346.7,vnv:300.3 },
"2008-05" : { vh:348.5,vnv:304.4 },
"2008-06" : { vh:348.3,vnv:307.1 },
"2008-07" : { vh:351,vnv: 310 },
"2008-08" : { vh:350.1,vnv:312.8 },
"2008-09" : { vh:349.4,vnv:315.5 },
"2008-10" : { vh:348.7,vnv:322.3 },
"2008-11" : { vh:347.7,vnv:327.9 },
"2008-12" : { vh:343.2,vnv:332.9 },
"2009-01" : { vh:337.6,vnv:334.8 },
"2009-02" : { vh:335.5,vnv:336.5 },
"2009-03" : { vh:322.6,vnv:334.5 },
"2009-04" : { vh:314.2,vnv:336 },
"2009-05" : { vh:312,vnv:339.8 },
"2009-06" : { vh:310.7,vnv:344.5 },
"2009-07" : { vh:311.7,vnv:345.1 },
"2009-08" : { vh:314.1,vnv:346.9 },
"2009-09" : { vh:313.9,vnv:349.6 },
"2009-10" : { vh:313.7,vnv:353.6 },
"2009-11" : { vh:309,vnv:356.2 },
"2009-12" : { vh:302.1,vnv:357.9 },
"2010-01" : { vh:303.3,vnv:356.8 },
"2010-02" : { vh:302.1,vnv:360.9 },
"2010-03" : { vh:303.5,vnv:362.9 },
"2010-04" : { vh:303,vnv:363.8 },
"2010-05" : { vh:308.9,vnv:365.3 },
"2010-06" : { vh:306.7,vnv:364.1 },
"2010-07" : { vh:302.8,vnv:361.7 },
"2010-08" : { vh:302.8,vnv:362.6 },
"2010-09" : { vh:303.9,vnv:362.6 },
"2010-10" : { vh:306.5,vnv:365.3 },
"2010-11" : { vh:306.3,vnv:365.5 },
"2010-12" : { vh:302.6,vnv:366.7 },
"2011-01" : { vh:304.9,vnv:363.4 },
"2011-02" : { vh:308.1,vnv:367.7 },
"2011-03" : { vh:309.2,vnv:371.2 },
"2011-04" : { vh:311.3,vnv:374.1 },
"2011-05" : { vh:319.6,vnv:377.6 },
"2011-06" : { vh:321.2,vnv:379.5 },
"2011-07" : { vh:320.8,vnv:379.9 },
"2011-08" : { vh:321.8,vnv:380.9 },
"2011-09" : { vh:326.1,vnv:383.3 },
"2011-10" : { vh:329.5,vnv:384.6 },
"2011-11" : { vh:329.5,vnv:384.6 },
"2011-12" : { vh:332.5,vnv:386 },
"2012-01" : { vh:333,vnv:387.1 },
"2012-02" : { vh:332.2,vnv:391 },
"2012-03" : { vh:336.2,vnv:395.1 },
"2012-04" : { vh:335.3,vnv:398.2 },
"2012-05" : { vh:336.4,vnv:398.1 },
"2012-06" : { vh:341.3,vnv:400.1 },
"2012-07" : { vh:344.3,vnv:397.2 },
"2012-08" : { vh:343.5,vnv:396.6 },
"2012-09" : { vh:345.8,vnv:399.6 },
"2012-10" : { vh:348.8,vnv:400.7 },
"2012-11" : { vh:350.2,vnv:402 },
"2012-12" : { vh:351.7,vnv:402.2 },
"2013-01" : { vh:350.7,vnv:403.3 },
"2013-02" : { vh:351.5,vnv:409.9 },
"2013-03" : { vh:351.5,vnv:410.7 },
"2013-04" : { vh:353.8,vnv:411.5 },
"2013-05" : { vh:358.4,vnv:411.3 },
"2013-06" : { vh:364.9,vnv:413.5 },
"2013-07" : { vh:367.3,vnv:412.4 },
"2013-08" : { vh:366.8,vnv:413.8 },
"2013-09" : { vh:370.1,vnv:415.2 },
"2013-10" : { vh:376.2,vnv:415.2 },
"2013-11" : { vh:377.5,vnv:416.7 },
"2013-12" : { vh:375.7,vnv:418.9 },
"2014-01" : { vh:376.8,vnv:415.9 },
"2014-02" : { vh:382.2,vnv:418.7 },
"2014-03" : { vh:390.5,vnv:419.7 },
"2014-04" : { vh:393.4,vnv:421 },
"2014-05" : { vh:392.9,vnv:421.3 },
"2014-06" : { vh:389.7,vnv:422.8 },
"2014-07" : { vh:390.8,vnv:422.1 },
"2014-08" : { vh:400.8,vnv:423.1 },
"2014-09" : { vh:401.2,vnv:422.6 },
"2014-10" : { vh:401.1,vnv:423.2 },
"2014-11" : { vh:403.7,vnv:421 },
"2014-12" : { vh:411.9,vnv:422.3 },
"2015-01" : { vh:416.1,vnv:419.3 },
"2015-02" : { vh:423.5,vnv:422.1 },
"2015-03" : { vh:424.9,vnv:426.4 },
"2015-04" : { vh:423.9,vnv:427 },
"2015-05" : { vh:428.5,vnv:428.2 },
"2015-06" : { vh:428.5,vnv:429.3 },
"2015-07" : { vh:432.3,vnv:430 },
"2015-08" : { vh:433.3,vnv:432.3 },
"2015-09" : { vh:438.5,vnv:430.6 },
"2015-10" : { vh:441.2,vnv:430.9 },
"2015-11" : { vh:442.5,vnv:429.4 },
"2015-12" : { vh:448.5,vnv:430.8 },
"2016-01" : { vh:451.4,vnv:428.3 },
"2016-02" : { vh:453.2,vnv:431.2 },
"2016-03" : { vh:456.5,vnv:432.8 },
"2016-04" : { vh:459.8,vnv:433.7 },
"2016-05" : { vh:465.1,vnv:435.5 },
"2016-06" : { vh:475.3,vnv:436.3 },
"2016-07" : { vh:485.8,vnv:434.9 },
"2016-08" : { vh:490.2,vnv:436.4 },
"2016-09" : { vh:491.8,vnv:438.5 },
"2016-10" : { vh:501.4,vnv:438.5 },
"2016-11" : { vh:508.2,vnv:438.4 },
"2016-12" : { vh:515.7,vnv:439.0 },
"2017-01" : { vh:524.8,vnv:436.5 },
"2017-02" : { vh:537.7,vnv:439.6 },
"2017-03" : { vh:552.1,vnv:439.9 },
"2017-04" : { vh:564.2,vnv:442.1 },
"2017-05" : { vh:574.6,vnv:443.0 },
"2017-06" : { vh:576.0,vnv:443.0 },
"2017-07" : { vh:576.0,vnv:442.9 }, // !!! TODO: update vh
"2017-08" : { vh:576.0,vnv:442.9 }, // !!! Must end with current month
};

var months = [
   "jan", "feb", "mar", "apr", "maí", "jún", "júl", "ágú", "sep", "okt", "nóv", "des"
];
var monthsUC = months.map(function(m) { return m.charAt(0).toUpperCase() + m.slice(1); });

// The current year and month
var now = new Date();
var yearNow = now.getFullYear();
var monthNow = now.getMonth(); // 0-based
// Accepted currency formats:
// 18000000
// 18.000.000
// 18.000
// 18,000,000 (but not 18,000)
var reCurrency = /(?:^(\d+)$)|(?:^\d{1,3}(?:\.\d\d\d)*$)|(?:^\d{1,3}(?:\,\d\d\d){2,}$)/;
var reInteger = /^[1-9]\d{0,2}$/;
var rePercent = /^\d{1,2}(?:[\.\,]\d{1,2})?$/;


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
   var s = Math.round(num).toFixed(0);
   var a = [];
   var length = s.length;
   var i;

   // Insert thousand separators
   for (i = length; (i - 3) > 0; i = i - 3)
      a.push(s.substr(i - 3, 3));
   if (i)
      a.push(s.substr(0, i));
   return a.reverse().join(".");
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
//       (alas) sometimes seen in the real world.
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

function lookupVNV(year, month, offset) {
   // Return the inflation index for the given year and month (0-based)
   // First, apply the offset
   var i = year * 12 + month + (offset || 0);
   year = Math.floor(i / 12);
   month = i % 12;
   if (year < yearNow || (year == yearNow && month < monthNow))
      // Past VNV: look it up in the table
      return vis[keyYM(year, month)].vnv;
   // Present or future VNV: use the current (newest) VNV
   return vis[keyYM(yearNow, monthNow)].vnv;
}

function calcLoan(amount, interest, n, wrong, year, month) {
   // Calculate and display the loan information.
   // amount is the original loan amount in ISK.
   // interest is the quoted (purportedly) annual interest rate in percent.
   // n is the number of payments, for instance 480 for 40 years.
   // wrong is true if the monthly interest should be calculated as r/12.
   // year and month is the initial date of the loan. The month is 1-based.

   // Use the inflation index (VNV) of the previous month
   var baseVNV = lookupVNV(year, month - 1, -1) || 100.0;
   var nowVNV = lookupVNV(yearNow, monthNow);
   var monthlyInterest;
   var effectiveInterest;
   if (wrong) {
      // The Icelandic banks quote annual interest wrongly,
      // i.e. they use the percentage / 12 as a monthly
      // accrual rate, not the percentage ^ (1/12)
      monthlyInterest = interest / 12;
      effectiveInterest = (Math.pow(1 + monthlyInterest / 100, 12) - 1) * 100;
   }
   else {
      monthlyInterest = (Math.pow(1 + interest / 100, 1 / 12) - 1) * 100;
      effectiveInterest = interest;
   }
   var r = monthlyInterest / 100;
   // The running principal amount
   var G = amount;
   // Annuity payment
   var y = annuity(amount, n, 12, interest, !wrong);
   // Fill in informational fields
   $(".result-interest").text(toFixed(effectiveInterest, 4));
   $("#result-monthly-interest").text(toFixed(monthlyInterest, 4));
   $("#result-basevnv").text(toFixed(baseVNV, 1));
   $("#result-vnv-now").text(toFixed(nowVNV, 1));
   var months = (yearNow - year) * 12 + monthNow - (month - 1) + 1;
   var monthlyInflation = months > 0 ? Math.pow(nowVNV / baseVNV, (1 / months)) : 1.0;
   var annualInflation = (Math.pow(monthlyInflation, 12) - 1) * 100;
   $("#result-inflation").text(toFixed(annualInflation, 2));
   $(".result-pmt").text(toCurrency(y));
   $(".result-pmt-now").text(toCurrency(y * nowVNV / baseVNV));
   // Show principal
   $("#result-principal").text(toCurrency(amount));
   var principalNow = amount * nowVNV / baseVNV;
   $("#result-principal-now").text(toCurrency(principalNow));
   // Show total amount repaid
   $("#result-total").text(toCurrency(y * n));
   var totalNow = y * n * nowVNV / baseVNV;
   $("#result-total-now").text(toCurrency(totalNow));
   // Display cost of using wrong (r/12) monthly interest?
   $("li#wrong-cost").css("display", wrong ? "list-item" : "none");
   $("#result-interest-nominal").text(toFixed(interest, 2));
   var yCorrect = annuity(amount, n, 12, interest, true);
   var totalCorrect = yCorrect * n * nowVNV / baseVNV;
   $("#result-total-correct").text(toCurrency(totalCorrect));
   $("#result-total-diff").text(toCurrency(totalNow - totalCorrect));
   // Generate all payments as well as a final sentinel state
   // with amt == newAmt == 0
   var a = [];
   for (var i = 0; i <= n; i++) {
      var vx = G * r;
      var nG = (i == n) ? G : G + vx - y;
      var thisMonth = month - 1 + i;
      var thisYear = year + Math.floor(thisMonth / 12);
      thisMonth %= 12;
      var vnv = lookupVNV(thisYear, thisMonth) || 100.0;
      a.push(
         {
            ix : i + 1,
            year : thisYear,
            month : thisMonth,
            date : new Date(thisYear, thisMonth), // Month is 0-based
            amt : G,
            amtInflated : G * vnv / baseVNV,
            vx : vx,
            newAmt : nG,
            vnv : vnv,
            vnvRel : baseVNV / vnv
         }
      );
      // Update running principal
      G = nG;
   }
   // The divs must have display: block for width calculations to work
   $("div.result").css("visibility", "hidden").css("display", "block");
   displayPayments(y, a.slice(0, -1)); // Display all except final sentinel
   // Create a context object with loan information
   var ctx = {
      year : year,
      month : month - 1,
      baseVNV : baseVNV,
      payment : y,
      a : a
   };
   displayGraphs(ctx);
   // Everything is ready: show it
   $("div.result").css("visibility", "visible");
}

function displayPayments(y, a) {
   // Display a tabular payment schedule
   // with an expansion button in the middle
   $payments = $("#payments");
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
                     .attr("class", "btn btn-danger")
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
}

function displayPrincipalGraph(ctx, inflated) {

   var a = ctx.a;
   var y = ctx.payment;

   var canvasId = inflated ? "#canvas-inflated" : "#canvas-principal";
   // Determine the drawing surface
   $canvas = $(canvasId);
   var HEIGHT = 300;
   var margin = { top: 30, right: 20, bottom: 20, left: 50 },
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

   // Draw bars representing the principal of the loan
   var bars = g.selectAll("rect.bar.principal")
      .data(a, function(d) { return d.date.toISOString(); }); // Key function

   bars
      // New bars: create
      .enter().append("rect")
         .attr("class", function(d) {
            if (d.year == yearNow && d.month == monthNow)
               return "bar principal now";
            if (d.year < yearNow || (d.year == yearNow && d.month < monthNow))
               return "bar principal past";
            return "bar principal";
         })
         .attr("x", function(d) { return x(d.date); })
         .attr("width", widthFunc)
         .on("mouseover", function(d, i) {
            tooltip.transition()
               .duration(100)
               .style("opacity", .8);
            tooltipText
               .html("<b>" + monthsUC[d.month] + " " + d.year + "</b><br>" +
                  toCurrency(valueFunc(d)) + "<br>");
            tooltip
               .style("left", (x(d.date) + widthFunc(d, i) / 2 + margin.left - 23) + "px")
               .style("top", (y(valueFunc(d)) - 30) + "px");
            if (inflated)
               // Also highlight the same month on the inverse inflation graph
               $("#inv-" + keyYM(d.year, d.month)).addClass("hover");
         })
         .on("mouseout", function(d) {
            tooltip.transition()
               .duration(100)
               .style("opacity", 0);
            if (inflated)
               // Remove highlight from the same month on the inverse inflation graph
               $("#inv-" + keyYM(d.year, d.month)).removeClass("hover");
         })
      // New and existing bars: update
      .merge(bars)
         .attr("y", function(d) { return y(valueFunc(d)); })
         .attr("height", function(d) { return Math.max(0, height - y(valueFunc(d))); })

}

function displayPaymentGraph(ctx, inflated) {

   var a = ctx.a;
   var payment = ctx.payment;
   var canvasId = inflated ? "#canvas-payments-inflated" : "#canvas-payments";

   // Determine the drawing surface
   $canvas = $(canvasId);
   var HEIGHT = 300;
   var margin = { top: 30, right: 20, bottom: 20, left: 50 },
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
      .attr("height", function(d) { return Math.max(0, height - y(amortFunc(d))); })
      .on("mouseover", function(d, i) {
         tooltip.transition()
            .duration(100)
            .style("opacity", .8);
         tooltipText
            .html("<b>" + monthsUC[d.month] + " " + d.year + "</b><br>" + toCurrency(amortFunc(d)) + "<br>");
         tooltip
            .style("left", (x(d.date) + widthFunc(d, i) / 2 + margin.left - 23) + "px")
            .style("top", (y(amortFunc(d)) - 30) + "px");
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
            .style("top", (y(totalFunc(d)) - 30) + "px");
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
      .attr("class", "legend-interest")
      .append("text")
         .attr("x", 24)
         .attr("y", y(totalFunc(a[0])) + 8)
         .attr("dy", "1.4em")
         .text("Vextir");

   // Draw the amortization legend in the lower right corner
   g.append("g")
      .attr("class", "legend-amort")
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
   $canvas = $(canvasId);
   var HEIGHT = 250;
   var margin = { top: 30, right: 20, bottom: 20, left: 50 },
      width = $canvas.width() - margin.right - margin.left,
      height = HEIGHT - margin.top - margin.bottom;
   // The graphics canvas
   $canvas.html("");

   // Create the data array to be displayed
   var a = [];
   var start = ctx.year * 12 + ctx.month;
   var end = yearNow * 12 + monthNow;
   for (var i = start; i <= end; i++) {
      var thisYear = Math.floor(i / 12);
      var thisMonth = i % 12;
      var vnv = lookupVNV(thisYear, thisMonth) || 100.0;
      a.push({
         year : thisYear,
         month : thisMonth,
         date : new Date(thisYear, thisMonth),
         vnvRel : inverse ? 1000.0 * vnv / ctx.baseVNV : 1000.0 * ctx.baseVNV / vnv
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
      .range([height, 0]);
   if (inverse)
      y = y.nice();

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
      .attr("y", function(d) { return y(d.vnvRel); })
      .attr("width", widthFunc)
      .attr("height", function(d) { return Math.max(0, height - y(d.vnvRel)); })
      .on("mouseover", function(d, i) {
         tooltip.transition()
            .duration(100)
            .style("opacity", .8);
         tooltipText
            .html("<b>" + monthsUC[d.month] + " " + d.year + "</b><br>" + toCurrency(d.vnvRel) + "<br>");
         tooltip
            .style("left", (x(d.date) + widthFunc(d, i) / 2 + margin.left - 23) + "px")
            .style("top", (y(d.vnvRel) - 30) + "px");
      })
      .on("mouseout", function(d) {
         tooltip.transition()
            .duration(100)
            .style("opacity", 0);
      });

}

