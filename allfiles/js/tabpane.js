function showtab(btnid,tabid,tabnumber)
{
	for (i = 1;i<=tabnumber;i++)
	{
		document.getElementById(tabid+"_btn"+i).className = "tabpane";
		document.getElementById(tabid+"_sub"+i).className = "hide";
	}
	document.getElementById(tabid+"_btn"+btnid).className = "select";
	document.getElementById(tabid+"_sub"+btnid).className = "";
}