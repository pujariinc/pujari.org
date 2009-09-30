<%@ language=JavaScript%>
<HTML>
	<HEAD>
		<title>Tennis 2005 Registration</title><base target="_self">
		<meta content="Microsoft FrontPage 4.0" name="GENERATOR">
		<meta content="FrontPage.Editor.Document" name="ProgId">
		<LINK href="../stylesheet.css" type="text/css" rel="stylesheet">
			<script language="javascript">
		function Validate()
		{
			if (document.tennisfrm1.name1.value == "" )
			{
				AbortEntry(document.tennisfrm1.name1, "Player 1 Name");
				return;
			}
			else if (document.tennisfrm1.name2.value == "" )
			{
				AbortEntry(document.tennisfrm1.name1, "Player 2 Name");
				return;
			}
			else if (document.tennisfrm1.addr11.value == "" )
			{
				AbortEntry(document.tennisfrm1.addr11, "Player 1 Address");
				return;
			}
			else if (document.tennisfrm1.addr21.value == "" )
			{
				AbortEntry(document.tennisfrm1.addr21, "Player 2 Address");
				return;
			}
			else if (document.tennisfrm1.phone1.value == "" )
			{
				AbortEntry(document.tennisfrm1.phone1, "Player 1 Phone");
				return;
			}
			else if (document.tennisfrm1.phone2.value == "" )
			{
				AbortEntry(document.tennisfrm1.phone2, "Player 2 Phone");
				return;
			}
			else if (document.tennisfrm1.email1.value == "" )
			{
				AbortEntry(document.tennisfrm1.email1, "Player 1 Email");
				return;
			}
			else if (document.tennisfrm1.email2.value == "" )
			{
				AbortEntry(document.tennisfrm1.email2, "Player 2 Email");
				return;
			}
			else
			{
				if (echeck(document.tennisfrm1.email1.value)==false)
				{
					AbortEntry(document.tennisfrm1.email1, "Player 1 Email");
					return;
				}
				else if (echeck(document.tennisfrm1.email2.value)==false)
				{
					AbortEntry(document.tennisfrm1.email2, "Player 2 Email");
					return;
				}
				else if (!confirm("Do you want to register now?")) return;
				tennisfrm1.submit();	
			
			}
			
		}
		function echeck(str) {

		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   //alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   //alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    //alert("Invalid E-mail ID")
		    return false
		}

		 if (str.indexOf(at,(lat+1))!=-1){
		    //alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    //alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    //alert("Invalid E-mail ID")
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		    //alert("Invalid E-mail ID")
		    return false
		 }

 		 return true					
	}
		
		function AbortEntry(fld, fldtxt)
		{
			alert("Invalid entry for " + fldtxt);
			fld.focus();
			return;
		
		}
		
		
			</script>
	</HEAD>
	<body>
		<table cellSpacing="0" cellPadding="5" border="0">
			<tr bgColor="#ffff99">
				<td vAlign="bottom" align="center"><a href="http://www.pujari.org/activity/yr2005tennistournament.htm"><font face="Arial" size="3"><STRONG>2005 
								SOUTH ASIAN COMMUNITY TENNIS TOURNAMENT</STRONG> </a></FONT>
					<P></P>
					<P align="center"><FONT face="Comic Sans MS,Arial" size="3">Organized by Pujari</FONT></P>
					<P align="center"><FONT face="Arial" size="3">TEAM REGISTRATION FORM</FONT></P>
					<P align="center"><font face="Arial" size="1" color="#ff3333">You need Internet 
							Explorer with (Cookies and POPUP enabled). In case you face problem in Paypal 
							part, do not worry. We then will have your info in our database. Contact 
							sudiptoo@hotmail.com or amitesh@bellsouth.net </font>&nbsp;</P>
				</td>
				<td>
				</td>
			</tr>
			<tr>
				<td align="center">
					<form name="tennisfrm1" action="tennis_reg_db.asp" method="post">
						<table cellSpacing="0" cellPadding="5" border="0" ID="Table2">
							<tr>
								<td vAlign="top" colspan="2" align="center"><P><FONT size="2" color="#000099"><b>Player 1</b></FONT></P>
								</td>
								<td vAlign="top" colspan="2" align="center"><P><FONT size="2" color="#000099"><b>Player 2</b></FONT></P>
								</td>
							</tr>
							<tr>
								<td vAlign="top" width="10%"><FONT size="2" color="#000000">Name:&nbsp;</FONT></td>
								<td vAlign="top" align="left" width="40%"><input type="text" name="name1" size="35" maxlength="50"></td>
								<td vAlign="top" width="10%"><FONT size="2" color="#000000">Name:&nbsp;</FONT></td>
								<td vAlign="top" align="left" width="40%"><input type="text" name="name2" size="35" maxlength="50" ID="Text16"></td>
							</tr>
							<tr>
								<td vAlign="top" width="10%"><FONT size="2" color="#000000">Address:&nbsp;</FONT></td>
								<td vAlign="top" align="left" width="40%"><input type="text" name="addr11" size="35" maxlength="50" ID="Text17"></td>
								<td vAlign="top" width="10%"><FONT size="2" color="#000000">Address:&nbsp;</FONT></td>
								<td vAlign="top" align="left" width="40%"><input type="text" name="addr21" size="35" maxlength="50" ID="Text18"></td>
							</tr>
							<tr>
								<td vAlign="top" width="10%"><FONT size="2" color="#000000">&nbsp;</FONT></td>
								<td vAlign="top" align="left" width="40%"><input type="text" name="addr12" size="35" maxlength="50" ID="Text19"></td>
								<td vAlign="top" width="10%"><FONT size="2" color="#000000">&nbsp;</FONT></td>
								<td vAlign="top" align="left" width="40%"><input type="text" name="addr22" size="35" maxlength="50" ID="Text20"></td>
							</tr>
							<tr>
								<td vAlign="top" width="10%"><FONT size="2" color="#000000">&nbsp;</FONT></td>
								<td vAlign="top" align="left" width="40%"><input type="text" name="addr13" size="25" maxlength="50" ID="Text1"></td>
								<td vAlign="top" width="10%"><FONT size="2" color="#000000">&nbsp;</FONT></td>
								<td vAlign="top" align="left" width="40%"><input type="text" name="addr23" size="25" maxlength="50" ID="Text2"></td>
							</tr>
							<tr>
								<td vAlign="top" width="10%"><FONT size="2" color="#000000">Contact Phone#&nbsp;</FONT></td>
								<td vAlign="top"><P><FONT size="2" color="#000000"><input type="text" name="phone1" size="25" maxlength="50" ID="Text5">&nbsp; 
											Type&nbsp;
											<select name="contact_type1">
												<option value="H" selected>Home</option>
												<option value="W">Work</option>
												<option value="C">Cell</option>
											</select>
										</FONT>
									</P>
								</td>
								<td vAlign="top" width="10%"><FONT size="2" color="#000000">Contact Phone#&nbsp;</FONT></td>
								<td vAlign="top"><P><FONT size="2" color="#000000"><input type="text" name="phone2" size="25" maxlength="50" ID="Text6">&nbsp; 
											Type&nbsp;
											<select name="contact_type2" ID="Select1">
												<option value="H" selected>Home</option>
												<option value="W">Work</option>
												<option value="C">Cell</option>
											</select>
										</FONT>
									</P>
								</td>
							</tr>
							<tr>
								<td vAlign="top" width="10%"><FONT size="2" color="#000000">Email&nbsp;</FONT></td>
								<td vAlign="top" align="left" width="40%"><input type="text" name="email1" size="25" maxlength="50" ID="Text3"></td>
								<td vAlign="top" width="10%"><FONT size="2" color="#000000">Email&nbsp;</FONT></td>
								<td vAlign="top" align="left" width="40%"><input type="text" name="email2" size="25" maxlength="50" ID="Text4"></td>
							</tr>
							<tr>
								<td colspan="2" vAlign="top"><FONT size="2" color="#000000">Have you participated in 
										any ALTA tournaments during the past two years?&nbsp;
										<select name="played_alta1" ID="Select2">
											<option value="YES">Yes</option>
											<option value="NO" selected>No</option>
										</select></FONT>
								</td>
								<td colspan="2" vAlign="top"><FONT size="2" color="#000000">Have you participated in 
										any ALTA tournaments during the past two years?&nbsp;
										<select name="played_alta2" ID="Select3">
											<option value="YES">Yes</option>
											<option value="NO" selected>No</option>
										</select>
									</FONT>
								</td>
							</tr>
							<tr>
								<td colspan="2" vAlign="top">
									<FONT size="2" color="#000000">If Yes,&nbsp;Laegue&nbsp;
										<select name="alta_league1" ID="Select3">
											<option value="Men" selected>Men's</option>
											<option value="Women">Women's</option>
											<option value="Mixed Doubles">Mixed Doubles</option>
											<option value="Senior Women">Senior Women's</option>
											<option value="Senior Men">Senior Men's</option>
											<option value="Senior Mixed Doubles">Senior Mixed Doubles</option>
										</select>
										&nbsp;and&nbsp;Last&nbsp;Level&nbsp;<input type="text" name="alta_last_level1" size="2" maxlength="3" ID="Text4">
									</FONT>
								</td>
								<td colspan="2" vAlign="top">
									<FONT size="2" color="#000000">If Yes,&nbsp;Laegue&nbsp;
										<select name="alta_league2" ID="Select3">
											<option value="Men" selected>Men's</option>
											<option value="Women">Women's</option>
											<option value="Mixed Doubles">Mixed Doubles</option>
											<option value="Senior Women">Senior Women's</option>
											<option value="Senior Men">Senior Men's</option>
											<option value="Senior Mixed Doubles">Senior Mixed Doubles</option>
										</select>
										&nbsp;and&nbsp;Last&nbsp;Level&nbsp; <input type="text" name="alta_last_level2" size="2" maxlength="3" ID="Text4">
									</FONT>
								</td>
							</tr>
							<tr>
								<td colspan="2" vAlign="top">
									<FONT size="2" color="#000000">Please visit the following web site bellow to 
										provide a self-rated NTRP rating reflecting your typical playing level:
										<select name="self_level1" ID="Select3">
											<option value="1.0" selected>1.0</option>
											<option value="1.5">1.5</option>
											<option value="2.0">2.0</option>
											<option value="2.5">2.5</option>
											<option value="3.0">3.0</option>
											<option value="3.5">3.5</option>
											<option value="4.0">4.0</option>
											<option value="4.5">4.5</option>
											<option value="5.0">5.0</option>
											<option value="5.5">5.5</option>
											<option value="6.0">6.0</option>
											<option value="6.5">6.5</option>
											<option value="7.0">7.0</option>
										</select>
										<BR>
										<a target="_blank" href="http://www.usta.com/leagues/custom.sps?iType=931&amp;icustompageid=1655">
											http://www.usta.com/leagues/custom.sps?iType=931&amp;icustompageid=1655</a></FONT></td>
								<td colspan="2" vAlign="top">
									<FONT size="2" color="#000000">Please visit the following web site bellow to 
										provide a self-rated NTRP rating reflecting your typical playing level:
										<select name="self_level2" ID="Select3">
											<option value="1.0" selected>1.0</option>
											<option value="1.5">1.5</option>
											<option value="2.0">2.0</option>
											<option value="2.5">2.5</option>
											<option value="3.0">3.0</option>
											<option value="3.5">3.5</option>
											<option value="4.0">4.0</option>
											<option value="4.5">4.5</option>
											<option value="5.0">5.0</option>
											<option value="5.5">5.5</option>
											<option value="6.0">6.0</option>
											<option value="6.5">6.5</option>
											<option value="7.0">7.0</option>
										</select>
										<BR>
										<a target="_blank" href="http://www.usta.com/leagues/custom.sps?iType=931&amp;icustompageid=1655">
											http://www.usta.com/leagues/custom.sps?iType=931&amp;icustompageid=1655</a> </FONT>
								</td>
							</tr>
							<tr>
								<td colSpan="4" align="center">
									<input type="button" onclick="javascript:Validate()" value="Register">
								</td>
							</tr>
							<tr>
								<td colSpan="4">
									<P><font size="2" color="#ff0099">**** Tournament Entry Fee is $25.00 per Team. Pay 
											using Paypal in the subsequent Page for complete registration ****</font></P>
								</td>
							</tr>
						</table>
					</form>
				</td>
			</tr>
		</table>
	</body>
</HTML>
