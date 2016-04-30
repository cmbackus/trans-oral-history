  // DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');

  // Create a DataSet (allows two way data-binding)
  var items = new vis.DataSet([
      {
          id: 1
          , content: '1952 - Christine Jorgensen Becomes First American to Have a Sex Change'
          , start: '1952-01-01'
            }, {
          id: 2
          , content: 'August 1966 - Riots at Compton’s Cafeteria'
          , start: '1966-08-01'
            }, {
          id: 3
          , content: '1966 “The Transsexual Phenomenon”'
          , start: '1966-10-01'
            }, {
          id: 4
          , content: 'June 1969 The Stonewall Riots'
          , start: '1969-01-01'
            }, {
          id: 5
          , content: '1970 Gay Liberation Front in Rochester'
          , start: '1970-01-01'
            }, {
          id: 6
          , content: '1970 The Street Transvestite Action Revolutionaries'
          , start: '1970-02-01'
            }, {
          id: 7
          , content: 'January 1971 The Empty Closet first published'
          , start: '1971-01-01'
            }, {
          id: 8
          , content: '1973 Gay Alliance Founded'
          , start: '1973-01-01'
            }, {
          id: 9
          , content: '1973 Homosexuality Removed from DSM'
          , start: '1973-01-01'
            }, {
          id: 10
          , content: '1974 September 30th Transexuals and Transvestites Unite!'
          , start: '1974-09-30'
            }, {
          id: 11
          , content: '1974 December 13th Leah Wilder Murdered'
          , start: '1974-12-13'
            }, {
          id: 12
          , content: '1975 Transgender Protections in Minneapolis'
          , start: '1975-01-01'
            }, {
          id: 13
          , content: 'October 1975 Fantasia Fair Founded '
          , start: '1975-10-01'
            }, {
          id: 14
          , content: '1976 February Frankenstein in Drag'
          , start: '1976-02-01'
            }, {
          id: 15
          , content: '1976 October TV / TS Support Group by Gay Brotherhood of Rochester'
          , start: '1976-10-01'
            }, {
          id: 16
          , content: 'August 1977 Renee Richards'
          , start: '1977-08-01'
            }, {
          id: 17
          , content: '1977 September Last Publication by Renee Joy Hughson'
          , start: '1977-09-01'
            }, {
          id: 18
          , content: '1985 Transvestites Anonymous '
          , start: '1985-01-01'
            }, {
          id: 19
          , content: '1987 Gender Identity Disorder '
          , start: '1987-01-01'
            }, {
          id: 20
          , content: '1987 International Foundation of Gender Education '
          , start: '1987-01-01'
            }, {
          id: 21
          , content: '1987 November Use of LGBT Acronym'
          , start: '1987-11-01'
            }, {
          id: 22
          , content: 'September 1989 Crossdresser’s Network'
          , start: '1989-09-01'
            }, {
          id: 23
          , content: 'August 1992 First International Conference on Transgender Law and Employment Policy'
          , start: '1992-08-01'
            }, {
          id: 24
          , content: '1993 First State Protections'
          , start: '1993-01-01'
            }, {
          id: 25
          , content: '1994 The Gazebo Chat Room'
          , start: '1994-01-01'
            }, {
          id: 26
          , content: '1995 Transgender Lobbying'
          , start: '1995-01-01'
            }, {
          id: 27
          , content: '1995 Rochester Transgender Organization '
          , start: '1995-01-01'
            }, {
          id: 28
          , content: '1995 Susans.org'
          , start: '1995-01-01'
            }, {
          id: 29
          , content: '1997 June RTO Marches in Rochester Pride Parade'
          , start: '1997-06-01'
            }, {
          id: 30
          , content: '1999 Transgender Day of Remembrance'
          , start: '1999-06-01'
            }, {
          id: 31
          , content: '2001 Rochester Non-Discrimination Ordinance '
          , start: '2001-01-01'
            }, {
          id: 32
          , content: 'December 2001 FTM Group'
          , start: '2001-12-01'
            }, {
          id: 33
          , content: '2002 Transgender Law Center'
          , start: '2002-01-01'
            }, {
          id: 34
          , content: '2003 GENDA introduced to NYS Assembly and Senate'
          , start: '2003-01-01'
            }, {
          id: 35
          , content: 'May 29, 2003 First Transgender Person Officially Visits White House'
          , start: '2003-05-29'
            }, {
          id: 36
          , content: 'June 2004 A March of Our Own'
          , start: '2004-06-01'
            }, {
          id: 37
          , content: '2005 Rochester Trans Group'
          , start: '2005-01-01'
            }, {
          id: 38
          , content: '2005 California Bans Insurance Discrimination Against Transgender Patients'
          , start: '2005-01-01'
            }, {
          id: 39
          , content: '2007 Lobby Day in Albany'
          , start: '2007-01-01'
            }, {
          id: 40
          , content: 'September 2008 Diane Schroer'
          , start: '2008-09-01'
            }, {
          id: 41
          , content: 'November 2008 A Transgender Mayor'
          , start: '2008-11-01'
            }, {
          id: 42
          , content: 'April 2009 Murder of Transgender Woman Labeled a Hate Crime'
          , start: '2009-05-01'
            }, {
          id: 43
          , content: 'June 2009 Chaz Bono'
          , start: '2009-06-01'
            }, {
          id: 44
          , content: '2009 Presidential Appointees'
          , start: '2009-07-01'
            }, {
          id: 45
          , content: 'August 2010 Trans Action Group'
          , start: '2010-08-01'
            }, {
          id: 46
          , content: 'October 17, 2010 First Openly Transgender Judge'
          , start: '2010-10-17'
            }, {
          id: 47
          , content: 'November 2010 College Sports'
          , start: '2010-12-17'
            }, {
          id: 48
          , content: 'August 2011 Genesee Valley Gender Variants'
          , start: '2011-08-01'
            }, {
          id: 49
          , content: '2012 Title VII Applies to Transgender Employees'
          , start: '2012-01-01'
            }, {
          id: 50
          , content: '2012 Meeting of the Groups'
          , start: '2012-01-01'
            }, {
          id: 51
          , content: 'June 2012 Buffalo and Syracuse Pride Parades'
          , start: '2012-06-01'
            }, {
          id: 52
          , content: 'November 2012 Trans March & Transgender Day of Recognition'
          , start: '2012-10-01'
            }, {
          id: 53
          , content: '2013 Trans Alliance of Greater Rochester'
          , start: '2013-01-01'
            }, {
          id: 54
          , content: '2013 Gender Dysphoria'
          , start: '2013-01-01'
            }, {
          id: 55
          , content: '2013 Rochester Non-Discrimination Ordinance Updated'
          , start: '2013-01-01'
            }, {
          id: 56
          , content: 'May 30 2013 Fatima Woods Murdered'
          , start: '2013-05-30'
            }, {
          id: 57
          , content: 'April 2014 Transgender Studies Quarterly'
          , start: '2014-04-01'
            }, {
          id: 58
          , content: 'May 17 2014 City of Rochester Employees Receive Transition Coverage'
          , start: '2014-05-17'
            }, {
          id: 59
          , content: 'May 22 2014 Kimberly & Beck Fired'
          , start: '2014-05-22'
            }, {
          id: 60
          , content: 'May 2014 A Medicare Exclusion Reversed'
          , start: '2014-05-01'
            }, {
          id: 61
          , content: 'June 2014 Laverne Cox on TIME Magazine'
          , start: '2014-06-01'
            }, {
          id: 62
          , content: 'December 2014 Changes at the Department of Justice '
          , start: '2014-12-01'
            }, {
          id: 63
          , content: 'June 1 2015 Caitlyn Jenner Introduces Herself '
          , start: '2015-06-01'
            }, {
          id: 64
          , content: 'June 26 2015 Obergefell vs. Hodges '
          , start: '2015-06-26'
            }, {
          id: 65
          , content: 'August 18 2015 White House Hires an Openly Transgender Staff Member '
          , start: '2015-08-18'
            }, {
          id: 66
          , content: 'January 20th 2016 Gov. Cuomo expands transgender protections in NYS'
          , start: '2016-01-20'
            }



  ]);

  // Configuration for the Timeline
  var options = {
      height: '300px'
  };

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, options);
  timeline.on('select', function (properties) {
      console.log(this);
      console.log(properties.items[0]);
      indexNum = properties.items[0]
      $('#timelineSlide').carousel(indexNum - 1);
  });