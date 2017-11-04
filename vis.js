
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
"2017-07" : { vh:578.0,vnv:442.9 },
"2017-08" : { vh:583.6,vnv:444.0 },
"2017-09" : { vh:588.4,vnv:444.6 },
"2017-10" : { vh:588.4,vnv:446.7 }, /* Vantar að uppfæra VH */
};

