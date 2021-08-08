// JavaScript Document

function openSTs() {
	MM_changeProp('SurTrtms1','','display','block','DIV');
	MM_changeProp('Hdesk','','display','none','DIV')
}
function openFSTs() {
	MM_changeProp('SurTrtms1','','display','block','DIV');
	MM_changeProp('Hdesk','','display','none','DIV')
}
function openBSTs() {
	MM_changeProp('SurTrtms1','','display','block','DIV');
	MM_changeProp('Hdesk','','display','none','DIV')
}
function openHd() {
	MM_changeProp('SurTrtms1','','display','none','DIV');
	MM_changeProp('Hdesk','','display','block','DIV')
}

function closeall() {
	MM_changeProp('SurTrtms1','','display','none','DIV');
	MM_changeProp('Hdesk','','display','none','DIV')
}

function openclose(elem1,elem2) {
	MM_changeProp(elem1,'','display','none','DIV');
	MM_changeProp(elem2,'','display','block','DIV');
}
function close_div(elemDiv) {
	MM_changeProp(elemDiv,'','display','none','DIV');
}
//--------------- LOCALIZEABLE GLOBALS ---------------
var d=new Date();
var monthname=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
//Ensure correct for language. English is "January 1, 2004"
var TODAY = monthname[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
//end