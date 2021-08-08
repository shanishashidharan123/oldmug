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
//---------------   END LOCALIZEABLE   ---------------
function MM_changeProp(objId,x,theProp,theValue) { //v9.0
  var obj = null; with (document){ if (getElementById)
  obj = getElementById(objId); }
  if (obj){
    if (theValue == true || theValue == false)
      eval("obj.style."+theProp+"="+theValue);
    else eval("obj.style."+theProp+"='"+theValue+"'");
  }
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//end