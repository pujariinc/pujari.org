<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:html="http://www.w3.org/TR/xhtml1">
<xsl:template match="//sitemap:urlset">
<html>
<head>
<title>XML Sitemap for http://www.automapit.com/</title>
<style type="text/css">
<![CDATA[
* {margin: 0px; padding: 0px;}
body {background: #ffffff; color: #000000; font-family: arial, sans-serif;}
h1 {width: 100%; padding: 4px 20px;}
caption {margin: 5px;}
table {width: 100%;}
th, th a {padding: 4px 12px; text-decoration: none;}
td {padding: 4px 12px;}
td#tablehead {text-align: center; font-weight: bold;}
a {color: #0000cc;}
a:hover {color: #0000ff;}
tr#header, tr#header a {background: #cccccc; color: #000000;}
#footer {width: 100%; text-align: center; padding: 20px;}
.alternateRow {background: #eeeeee; color: #000000;}
]]>
</style>
<script type="text/javascript">
<![CDATA[
var stIsIE=false
sorttable={
init: function(){
if(arguments.callee.done)return
arguments.callee.done=true
if(_timer)clearInterval(_timer)
if(!document.createElement || !document.getElementsByTagName)return
sorttable.DATE_RE=/^(\d\d?)[\/\.-](\d\d?)[\/\.-]((\d\d)?\d\d)$/
forEach(document.getElementsByTagName('table'),function(table){
if(table.className.search(/\bsortable\b/)!=-1){
sorttable.makeSortable(table)}
})
},
makeSortable: function(table){
if(table.getElementsByTagName('thead').length==0){
the=document.createElement('thead')
the.appendChild(table.rows[0])
table.insertBefore(the,table.firstChild)}
if(table.tHead==null)table.tHead=table.getElementsByTagName('thead')[0]
if(table.tHead.rows.length !=1)return
sortbottomrows=[]
for(var i=0;i<table.rows.length;i++){
if(table.rows[i].className.search(/\bsortbottom\b/)!=-1){
sortbottomrows[sortbottomrows.length]=table.rows[i]}}
if(sortbottomrows){
if(table.tFoot==null){
tfo=document.createElement('tfoot')
table.appendChild(tfo)}
for(var i=0;i<sortbottomrows.length;i++){
tfo.appendChild(sortbottomrows[i])}
delete sortbottomrows}
headrow=table.tHead.rows[0].cells
for(var i=0;i<headrow.length;i++){
if(!headrow[i].className.match(/\bsorttable_nosort\b/)){
mtch=headrow[i].className.match(/\bsorttable_([a-z0-9]+)\b/)
if(mtch){override=mtch[1];}
if(mtch&&typeof sorttable["sort_"+override]=='function'){
headrow[i].sorttable_sortfunction=sorttable["sort_"+override]
}else{
headrow[i].sorttable_sortfunction=sorttable.guessType(table,i)}
headrow[i].sorttable_columnindex=i
headrow[i].sorttable_tbody=table.tBodies[0]
dean_addEvent(headrow[i],"click",function(e){
if(this.className.search(/\bsorttable_sorted\b/)!=-1){
sorttable.reverse(this.sorttable_tbody)
this.className=this.className.replace('sorttable_sorted',
'sorttable_sorted_reverse')
this.removeChild(document.getElementById('sorttable_sortfwdind'))
sortrevind=document.createElement('span')
sortrevind.id="sorttable_sortrevind"
sortrevind.innerHTML=stIsIE ? '&nbsp;<img src="data:image/gif;base64,R0lGODlhCgAKAMIEAAAAAODg4DMzM+bm5v///////////////yH+FUNyZWF0ZWQgd2l0aCBUaGUgR0lNUAAh+QQBFAAEACwAAAAACgAKAAADFyi6zBEtyicrUOAKPfYYV7eAgNh8VZQAADs=" width="10" height="10" />' : '&nbsp;&#x25B4;'
this.appendChild(sortrevind)
return}
if(this.className.search(/\bsorttable_sorted_reverse\b/)!=-1){
sorttable.reverse(this.sorttable_tbody)
this.className=this.className.replace('sorttable_sorted_reverse',
'sorttable_sorted')
this.removeChild(document.getElementById('sorttable_sortrevind'))
sortfwdind=document.createElement('span')
sortfwdind.id="sorttable_sortfwdind"
sortfwdind.innerHTML=stIsIE ? '&nbsp;<img src="data:image/gif;base64,R0lGODlhCgAKAMIEAAAAAODg4DMzM+bm5v///////////////yH5BAEUAAQALAAAAAAKAAoAAAMXKLrMM00NAOCCdQoLFPVRqASBaArkySQAOw==" width="10" height="10" />' : '&nbsp;&#x25BE;'
this.appendChild(sortfwdind)
return}
theadrow=this.parentNode
forEach(theadrow.childNodes,function(cell){
if(cell.nodeType==1){
cell.className=cell.className.replace('sorttable_sorted_reverse','')
cell.className=cell.className.replace('sorttable_sorted','')}
})
sortfwdind=document.getElementById('sorttable_sortfwdind')
if(sortfwdind){sortfwdind.parentNode.removeChild(sortfwdind);}
sortrevind=document.getElementById('sorttable_sortrevind')
if(sortrevind){sortrevind.parentNode.removeChild(sortrevind);}
this.className+=' sorttable_sorted'
sortfwdind=document.createElement('span')
sortfwdind.id="sorttable_sortfwdind"
sortfwdind.innerHTML=stIsIE ? '&nbsp;<img src="data:image/gif;base64,R0lGODlhCgAKAMIEAAAAAODg4DMzM+bm5v///////////////yH5BAEUAAQALAAAAAAKAAoAAAMXKLrMM00NAOCCdQoLFPVRqASBaArkySQAOw==" width="10" height="10" />' : '&nbsp;&#x25BE;'
this.appendChild(sortfwdind)
row_array=[]
col=this.sorttable_columnindex
rows=this.sorttable_tbody.rows
for(var j=0;j<rows.length;j++){
row_array[row_array.length]=[sorttable.getInnerText(rows[j].cells[col]),rows[j]]}
row_array.sort(this.sorttable_sortfunction)
tb=this.sorttable_tbody
for(var j=0;j<row_array.length;j++){
tb.appendChild(row_array[j][1])}
delete row_array
})}}
},
guessType: function(table,column){
sortfn=sorttable.sort_strlen
for(var i=0;i<table.tBodies[0].rows.length;i++){
text=sorttable.getInnerText(table.tBodies[0].rows[i].cells[column])
if(text !=''){
if(text.match(/^-?[$]?[\d,.]+%?$/)){
return sorttable.sort_numeric}
possdate=text.match(sorttable.DATE_RE)
if(possdate){
first=parseInt(possdate[1])
second=parseInt(possdate[2])
if(first>12){
return sorttable.sort_ddmm
}else if(second>12){
return sorttable.sort_mmdd
}else{
sortfn=sorttable.sort_ddmm}}}}
return sortfn
},
getInnerText: function(node){
hasInputs=(typeof node.getElementsByTagName=='function')&&
node.getElementsByTagName('input').length
if(node.getAttribute("sorttable_customkey")!=null){
return node.getAttribute("sorttable_customkey")}
else if(typeof node.textContent !='undefined'&&!hasInputs){
return node.textContent.replace(/^\s+|\s+$/g,'')}
else if(typeof node.innerText !='undefined'&&!hasInputs){
return node.innerText.replace(/^\s+|\s+$/g,'')}
else if(typeof node.text !='undefined'&&!hasInputs){
return node.text.replace(/^\s+|\s+$/g,'')}
else{
switch(node.nodeType){
case 3:
if(node.nodeName.toLowerCase()=='input'){
return node.value.replace(/^\s+|\s+$/g,'')}
case 4:
return node.nodeValue.replace(/^\s+|\s+$/g,'')
break
case 1:
case 11:
var innerText=''
for(var i=0;i<node.childNodes.length;i++){
innerText+=sorttable.getInnerText(node.childNodes[i])}
return innerText.replace(/^\s+|\s+$/g,'')
break
default:
return ''}}
},
reverse: function(tbody){
newrows=[]
for(var i=0;i<tbody.rows.length;i++){
newrows[newrows.length]=tbody.rows[i]}
for(var i=newrows.length-1;i>=0;i--){
tbody.appendChild(newrows[i])}
delete newrows
},
sort_numeric: function(a,b){
aa=parseFloat(a[0].replace(/[^0-9.-]/g,''))
if(isNaN(aa))aa=0
bb=parseFloat(b[0].replace(/[^0-9.-]/g,''))
if(isNaN(bb))bb=0
return aa-bb
},
sort_alpha: function(a,b){
if(a[0]==b[0])return 0
if(a[0]<b[0])return-1
return 1
},
sort_strlen: function(a,b){
if(a.length==b.length)return 0
if(a.length<b.length)return-1
return 1
},
sort_ddmm: function(a,b){
mtch=a[0].match(sorttable.DATE_RE)
y=mtch[3];m=mtch[2];d=mtch[1]
if(m.length==1)m='0'+m
if(d.length==1)d='0'+d
dt1=y+m+d
mtch=b[0].match(sorttable.DATE_RE)
y=mtch[3];m=mtch[2];d=mtch[1]
if(m.length==1)m='0'+m
if(d.length==1)d='0'+d
dt2=y+m+d
if(dt1==dt2)return 0
if(dt1<dt2)return-1
return 1
},
sort_mmdd: function(a,b){
mtch=a[0].match(sorttable.DATE_RE)
y=mtch[3];d=mtch[2];m=mtch[1]
if(m.length==1)m='0'+m
if(d.length==1)d='0'+d
dt1=y+m+d
mtch=b[0].match(sorttable.DATE_RE)
y=mtch[3];d=mtch[2];m=mtch[1]
if(m.length==1)m='0'+m
if(d.length==1)d='0'+d
dt2=y+m+d
if(dt1==dt2)return 0
if(dt1<dt2)return-1
return 1
},
shaker_sort: function(list,comp_func){
var b=0
var t=list.length-1
var swap=true
while(swap){
swap=false
for(var i=b;i<t;++i){
if(comp_func(list[i],list[i+1])>0){
var q=list[i];list[i]=list[i+1];list[i+1]=q
swap=true}}
t--
if(!swap)break
for(var i=t;i>b;--i){
if(comp_func(list[i],list[i-1])<0){
var q=list[i];list[i]=list[i-1];list[i-1]=q
swap=true}}
b++}}}
if(document.addEventListener){
document.addEventListener("DOMContentLoaded",sorttable.init,false)}
if(/WebKit/i.test(navigator.userAgent)){
var _timer=setInterval(function(){
if(/loaded|complete/.test(document.readyState)){
sorttable.init()}
},10)}
window.onload=sorttable.init
function dean_addEvent(element,type,handler){
if(element.addEventListener){
element.addEventListener(type,handler,false)
}else{
if(!handler.$$guid)handler.$$guid=dean_addEvent.guid++
if(!element.events)element.events={}
var handlers=element.events[type]
if(!handlers){
handlers=element.events[type]={}
if(element["on"+type]){
handlers[0]=element["on"+type]}}
handlers[handler.$$guid]=handler
element["on"+type]=handleEvent}}
dean_addEvent.guid=1
function removeEvent(element,type,handler){
if(element.removeEventListener){
element.removeEventListener(type,handler,false)
}else{
if(element.events&&element.events[type]){
delete element.events[type][handler.$$guid]}}}
function handleEvent(event){
var returnValue=true
event=event || fixEvent(((this.ownerDocument || this.document || this).parentWindow || window).event)
var handlers=this.events[event.type]
for(var i in handlers){
this.$$handleEvent=handlers[i]
if(this.$$handleEvent(event)===false){
returnValue=false}}
return returnValue}
function fixEvent(event){
event.preventDefault=fixEvent.preventDefault
event.stopPropagation=fixEvent.stopPropagation
return event}
fixEvent.preventDefault=function(){
this.returnValue=false}
fixEvent.stopPropagation=function(){
this.cancelBubble=true}
if(!Array.forEach){
Array.forEach=function(array,block,context){
for(var i=0;i<array.length;i++){
block.call(context,array[i],i,array)}}}
Function.prototype.forEach=function(object,block,context){
for(var key in object){
if(typeof this.prototype[key]=="undefined"){
block.call(context,object[key],key,object)}}}
String.forEach=function(string,block,context){
Array.forEach(string.split(""),function(chr,index){
block.call(context,chr,index,string)
})}
var forEach=function(object,block,context){
if(object){
var resolve=Object
if(object instanceof Function){
resolve=Function
}else if(object.forEach instanceof Function){
object.forEach(block,context)
return
}else if(typeof object=="string"){
resolve=String
}else if(typeof object.length=="number"){
resolve=Array}
resolve.forEach(object,block,context)}}
function clearsearch(){
if( document.getElementById("idquery").value == 'Search this site'){
document.getElementById("idquery").value = '';
}
return 1;
}
function keepsearch(){
if( document.getElementById("idquery").value == ''){
document.getElementById("idquery").value = 'Search this site';
}
return 1;
}

]]>
</script>
</head>
<body>

<h1>XML Sitemap for http://www.pujari.org/</h1>
<table class="sortable">
<caption style="caption-side: top;"><xsl:value-of select="count(sitemap:url)"/> URLs in this sitemap</caption>
<thead>
<tr id="header">
<th class="sorttable_numeric">URL</th>
<th class="sorttable_numeric">Last-Modified</th>
<th class="sorttable_alpha">Change Frequency</th>
<th class="sorttable_numeric">Priority</th>
</tr>
</thead>
<tbody id="tbod">
<xsl:apply-templates select="sitemap:url">
<xsl:sort select="string-length(sitemap:loc)" data-type="number" order="ascending" id="xslsort" /> 
</xsl:apply-templates>
</tbody>
</table>
<div id="footer">
<br />
<a href="http://www.automapit.com/" title="Google Sitemap Generator">
<img src="http://www.automapit.com/images/banners/automapit88x31.gif" alt="Google Sitemap Generator" width="88" height="31" />
</a>
<br />
<a href="http://www.automapit.com/" title="XML Sitemap Generator">XML Sitemap by AutoMapIt.com</a>
<br />
</div>
</body>
</html>
</xsl:template>

<xsl:template match="sitemap:url">
<xsl:variable name="urlink"><xsl:value-of select="sitemap:loc"/></xsl:variable>
<xsl:if test="position()  mod 2 = 1">
<tr>
<td class="text"><a href="{$urlink}"><xsl:value-of select="sitemap:loc"/></a></td>
<td class="numeric"><xsl:if test="string-length(sitemap:lastmod) &gt; 0"><xsl:value-of select="sitemap:lastmod"/></xsl:if></td>
<td class="text"><xsl:if test="string-length(sitemap:changefreq) &gt; 0"><xsl:value-of select="sitemap:changefreq"/></xsl:if></td>
<td class="numeric"><xsl:if test="string-length(sitemap:priority) &gt; 0"><xsl:value-of select="sitemap:priority"/></xsl:if></td>
</tr>
</xsl:if>
<xsl:if test="position()  mod 2 = 0">
<tr class="alternateRow">
<td class="text"><a href="{$urlink}"><xsl:value-of select="sitemap:loc"/></a></td>
<td class="numeric"><xsl:if test="string-length(sitemap:lastmod) &gt; 0"><xsl:value-of select="sitemap:lastmod"/></xsl:if></td>
<td class="text"><xsl:if test="string-length(sitemap:changefreq) &gt; 0"><xsl:value-of select="sitemap:changefreq"/></xsl:if></td>
<td class="numeric"><xsl:if test="string-length(sitemap:priority) &gt; 0"><xsl:value-of select="sitemap:priority"/></xsl:if></td>
</tr>
<xsl:variable name="altern">1</xsl:variable>
</xsl:if>
</xsl:template>





</xsl:stylesheet>