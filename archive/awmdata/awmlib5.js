//****** AllWebMenus Libraries Version # 626 ******

// Copyright (c) Likno Software 2000-2006
// The present javascript code is property of Likno Software.
// This code can only be used inside Internet/Intranet web sites located on *web servers*, as the outcome of a licensed AllWebMenus application only. 
// This code *cannot* be used inside distributable implementations (such as demos, applications or CD-based webs), unless this implementation is licensed with an "AllWebMenus License for Distributed Applications". 
// Any unauthorized use, reverse-engineering, alteration, transmission, transformation, facsimile, or copying of any means (electronic or not) is strictly prohibited and will be prosecuted.
// ***Removal of the present copyright notice is strictly prohibited***

var awmav=navigator.appVersion,awmAfter5Incl=(parseFloat(awmav.substring(awmav.indexOf("MSIE")+5,awmav.indexOf("MSIE")+8)))>=5,awmprp,awmhd=200,awmdst="",n=null,awmcrm,awmcre,awmmo,awmso,awmctm=n,awmuc,awmud,awmctu,awmun,awmdid,awmsht="",awmsoo=0,awmlsx=document.body.scrollLeft, awmlsy=document.body.scrollTop,awmIEMacOffsetX,awmIEMacOffsetY,awmIEMac4OffsetX,awmIEMac4OffsetY,awmRTLSupport,awmRelativeCorner,awmRightToLeftFrame,awmalt=["left","center","right"],awmplt=["absolute","relative"],awmvlt=["visible","hidden","inherit"],awmctlt=["default","hand","crosshair","help","move","text","wait"],SI=["687474703A2F2F7777772E","6C696B6E6F","2E636F6D2F","4448544D4C","4A415641534352495054","44524F50444F574E","44524F502D444F574E","646F63756D656E742E6C696E6B73","4D454E55"],aL=eval(aue(SI[7])),mpi,awmlssx=document.body.scrollLeft,awmlssy=document.body.scrollTop,awmSelectedItem,awmCoordId,vl,vt,vr,vb,awmSepr,awmHide2ID,awmHideID,awmCollID;if (awmso>0){awmsoo=awmso+1;}else  {var awmsc=new Array();}aCo();var dtype=((document.doctype&&document.doctype.name.indexOf(".dtd")>-1))?1:0;var awmIEMac=(navigator.appVersion.indexOf("Mac")!=-1)?1:0,aRsF;if (!awmun) awmun=0;if (awmcre>=0); else  awmcre=0;window.onunload=awmwu;if (typeof(aRsF)=="undefined") aRsF=window.onresize;window.onresize = awmwr;function awmhidediv(){}function awmshowdiv(){}function aue(s){s2=s.split("");s1="";for(var i=0;i<s.length;i++){s1+="%"+s2[i]+s2[i+1];i++;}return unescape(s1);}function aLf(){for(var i=0;i<aL.length;i++){var aa=aL[i];if (aa.href.substr(0,20)+"/"==aue(SI[0]+SI[1]+SI[2])&&aLg(aa.innerHTML)) return 1;}}function aLg($){$$=$.toUpperCase();if ($$.search(aue(SI[8]))<6) return 0;for(var i=3;i<7;i++) if ($$.search(aue(SI[i]))>-1) return 1;}function awmiht (image){return "<img src='"+awmMenuPath+awmImagesPath+"/"+awmImagesColl[image*3]+"'"+((awmImagesColl[image*3+1])?(" width='"+awmImagesColl[image*3+1])+"'":"")+((awmImagesColl[image*3+2])?(" height='"+awmImagesColl[image*3+2])+"'":"")+" align='absmiddle'>";}function awmatai (text,image,algn){if (text==null) text="";var i=0;while(text.charAt(0)==" "){i++;text=text.substring(1);}while(i>0){text="&nbsp;"+text;i--;}i=0;while(text.charAt(text.length-1)==" "){i++;text=text.substring(0,text.length-1);}while(i>0){text+="&nbsp;";i--;}var s1=(text!=""&&text!=null&&(algn==0||algn==2)&&image!=null)?"<br>":"";var s2=(image!=n)?awmiht (image):"";return "<nobr>"+((algn==0||algn==3)?s2+s1+text:text+s1+s2)+"</nobr>";}function awmCreateCSS (pos,vis,algnm,fgc,bgc,bgi,fnt,tdec,bs,bw,bc,pd,crs){if (awmso>=0) awmso++; else  awmso=0;var pdr;if (typeof(pd)=="number"){pdr=pdt=pdb=pdl=pd;} else  {var pda = pd.split("px ");pdt=parseInt(pda[0]);pdr=parseInt(pda[1]);pdb=parseInt(pda[2]);pdl=parseInt(pda[3]);}var style={ id:"AWMST"+awmso,id2:"AWMSTTD"+awmso,id3:"AWMSTBG"+awmso,id3a:"AWMSTBGa"+awmso,id3b:"AWMSTBGb"+awmso,id4:"AWMSTCBG"+awmso,pos:pos,vis:vis,algnm:algnm,fgc:fgc,bgc:bgc,bgi:bgi,fnt:fnt,tdec:tdec,bs:bs,bw:(bs=="none")?0:bw,bc:bc,zi:awmzindex,pd:0,crs:crs,pdt:pdt,pdr:pdr,pdb:pdb,pdl:pdl};awmsht+="."+style.id+" {position:absolute; visibility:"+awmvlt[vis]+"; "+"text-align:"+awmalt[algnm]+"; "+((fnt!=n)?"font:"+fnt+"; ":"")+((tdec!=n)?"text-decoration:"+tdec+"; ":"")+((fgc!=n)?"color:"+fgc+"; ":"")+"background-color:"+((bgc!=n)?bgc+";":"transparent;")+((bs!=n)?"border-style:"+bs+"; ":"")+((bw!=n)?"border-width:"+bw+"px; ":"")+((bc!=n)?"border-color:"+bc+"; ":"")+"cursor:"+awmctlt[crs]+"; z-index:"+style.zi+"}";awmsht+="."+style.id2+" {border-style:none;border-width:0px;text-align:"+awmalt[algnm]+"; padding:"+pd+"px;"+((fnt!=n)?" font:"+fnt+"; ":"")+((tdec!=n)?"text-decoration:"+tdec+"; ":"")+((fgc!=n)?"color:"+fgc+"; ":"")+"background-color:transparent;"+"}";awmsht+="."+style.id3+" {position:absolute; visibility:"+awmvlt[vis]+"; "+"text-align:"+awmalt[algnm]+"; "+((fnt!=n)?"font:"+fnt+"; ":"")+((tdec!=n)?"text-decoration:"+tdec+"; ":"")+((fgc!=n)?"color:"+fgc+"; ":"")+"background-color:transparent;"+((bs!=n)?"border-style:"+bs+"; ":"")+((bw!=n)?"border-width:"+bw+"px; ":"")+((bc!=n)?"border-color:"+bc+"; ":"")+"cursor:"+awmctlt[crs]+"; z-index:"+style.zi+"}";awmsht+="."+style.id4+" {"+((bgi!=n)?"background-image:url(\""+awmMenuPath+awmImagesPath+"/"+awmImagesColl[bgi*3]+"\");":"")+" position:absolute; visibility:"+awmvlt[vis]+"; "+"text-align:"+awmalt[algnm]+"; "+((fnt!=n)?"font:"+fnt+"; ":"")+((tdec!=n)?"text-decoration:"+tdec+"; ":"")+((fgc!=n)?"color:"+fgc+"; ":"")+"background-color:"+((bgc!=n)?bgc+";":"transparent;")+((bs!=n)?"border-style:"+bs+"; ":"")+((bw!=n)?"border-width:"+bw+"px; ":"")+((bc!=n)?"border-color:"+bc+"; ":"")+"cursor:"+awmctlt[crs]+";}";if (bgi!=n){awmsht+="."+style.id3a+" {background-image:url(\""+awmMenuPath+awmImagesPath+"/"+awmImagesColl[bgi*3]+"\")}";awmsht+="."+style.id3b+" {position:absolute;left:0px;top:0px;"+((bs!=n)?"border-style:"+bs+"; ":"")+((bw!=n)?"border-width:"+bw+"px; ":"")+((bc!=n)?"border-color:"+bc+";":"")+"background-color:"+((bgc!=n)?bgc+";":"transparent;")+"z-index:-1;}";}awmsc[awmsc.length]=style;}function awmCreateMenu (cll,swn,swr,mh,ud,sa,mvb,dft,crn,dx,dy,ss,ct,cs,dbi,ew,eh,jcoo,jcoc,opc,elemRel,groupID,offX2,offY2){if (awmmo>=0) awmmo++; else  {awmm=new Array(); awmmo=0};var me={ ind:awmmo,nm:awmMenuName,cn:new Array(),fl:!awmsc[cs].pos,cll:cll,mvb:mvb,dft:dft,crn:crn,dx:(ct<2)?dx:0,dy:dy,ss:ss,sht:"<STYLE>.awmGeneric{background-color:transparent}"+awmsht+"</STYLE>",rep:0,mio:0,st:awmOptimize?2:3,submenusFrameOffset:awmSubmenusFrameOffset,selectedItem:(typeof(awmSelectedItem)=='undefined')?0:awmSelectedItem,offX:(awmIEMacOffsetX)?awmIEMacOffsetX:0,offY:(awmIEMacOffsetY)?awmIEMacOffsetY:0,offX2:(offX2)?offX2:0,offY2:(offY2)?offY2:0,rtls:(awmRTLSupport)?awmRTLSupport:0,rtlf:(awmRightToLeftFrame)?awmRightToLeftFrame:0,rc:(awmRelativeCorner)?awmRelativeCorner:0,elemRel:elemRel,awmD:(typeof(awmD)=='undefined')?0:awmD,addSubmenu:awmas,ght:awmmght,whtd:awmmwhttd,buildMenu:awmbmm,cm:awmmcm};awmIEMacOffsetX=awmIEMacOffsetY=awmRTLSupport=awmRelativeCorner=awmRightToLeftFrame=0;me.pm=me;me.addSubmenu(ct,swn,swr,mh,ud,sa,1,cs,dbi,ew,eh,jcoo,jcoc,0,0,groupID);me.cn[0].pi=null;if (mvb) document.onmousemove=awmoimm;awmm[awmmo]=me;awmsht="";return me.cn[0];}function awmas (ct,swn,swr,shw,ud,sa,od,cs,dbi,ew,eh,jcoo,jcoc,opc,alO,groupID){cnt={ id:"AWMEL"+(awmcre++),it:new Array(),ct:ct,swn:swn,swr:swr,shw:(shw>2)?2:shw,ud:ud,sa:sa,od:od,cs:awmsc[cs+awmsoo],dbi:dbi,ew:ew,eh:eh,jcoo:jcoo,jcoc:jcoc,pi:this,pm:this.pm,pm:this.pm,siw:0,wtd:false,argd:0,ft:0,mio:0,hsid:null,uid:null,dox:0,doy:0,alO:alO,groupID:"gr"+groupID,addItem:awmai,addItemWithImages:awmaiwi,show:awmcs,fe:awmcfe,arr:awmca,ght:awmcght,pc:awmpc,unf:awmcu,hdt:awmchdt,onmouseover:awmocmo,onmouseout:awmocmot};this.sm=cnt;cnt.pm.cn[cnt.ind=cnt.pm.cn.length]=cnt;cnt.cd=(cnt.ind==0&&cnt.pm.cll==0)?0:1;return cnt;}function awmai (st0,st1,st2,in0,in1,in2,tt,sbt,jc0,jc1,jc2,url,tf,mnW,mnH,iHF,hSp,sWt,sC1,sC2){var itm={ id:"AWMEL"+(awmcre++),style:[(st0==n)?n:awmsc[st0+awmsoo],(st1==n)?n:awmsc[st1+awmsoo],(st2==n)?n:awmsc[st2+awmsoo]],inlineStyle:["","",""],inm:[in0,(in1==n)?in0:in1,(in2==n)?in0:in2],ii:[n,n,n],ia:[n,n,n],hsi:[n,n,n],rI:[n,n,n],lI:[n,n,n],bIP:[0,0,0],tt:tt,sbt:sbt,jc:[jc0,jc1,jc2],tf:tf,top:0,left:0,layer:[n,n,n],bglayer:[n,n,n],ps:this,pm:this.pm,sm:null,mnH:(mnH)?mnH:0,mnW:(mnW)?mnW:0,iHF:iHF,hSp:hSp,sWt:(hSp)?((awmSepr)?awmSepr[hSp*4]:sWt):"",sC1:(hSp)?((awmSepr)?awmSepr[hSp*4+1]:sC1):"",sC2:(hSp)?((awmSepr)?awmSepr[hSp*4+2]:sC2):"",sMg:(hSp)?((awmSepr)?awmSepr[hSp*4+3]:3):0,sMs:1,ght:awmight,shst:awmiss,addSubmenu:awmas,onmouseover:awmoimo,onmouseout:awmoimot,onmousedown:awmoimd,onmousemove:awmoimm,onmouseup:awmoimu};if (awmAfter5Incl)for (var q=0; q<itm.pm.st; q++)itm.inlineStyle[q]="style='"+((itm.style[q].fnt!=n)?"font:"+itm.style[q].fnt+"; ":"")+((itm.style[q].tdec!=n)?"text-decoration:"+itm.style[q].tdec+"; ":"")+((itm.style[q].fgc!=n)?"color:"+itm.style[q].fgc+"; ":"")+"'";if (url!=null){if ((url.search("://")<0)&&(url.substring(0,7)!="mailto:")&&(url.substring(0,1)!="/")){if (awmprp){if (awmprp==" ") url="../mrp.html"; else  url=awmprp+"\\"+url;} else  url=awmMenuPath+"/"+url;}if (awmprp&&url.substring(0,1)=="/") url="../rrp.html";}itm.url=url;if (hSp>0&&itm.sC2) itm.sMs=0;this.it[itm.ind=this.it.length]=itm;return itm;}function awmaiwi (st0,st1,st2,in0,in1,in2,tt,ii0,ii1,ii2,ia0,ia1,ia2,hsi0,hsi1,hsi2,sbt,jc0,jc1,jc2,url,tf,mnW,mnH,iHF,lI0,lI1,lI2,rI0,rI1,rI2,bIP0,bIP1,bIP2,hSp,sWt,sC1,sC2){var itm=this.addItem (st0,st1,st2,in0,in1,in2,tt,sbt,jc0,jc1,jc2,url,tf,mnW,mnH,iHF,hSp,sWt,sC1,sC2);itm.ii=[ii0,ii1,ii2];itm.lI=[lI0,lI1,lI2];itm.rI=[rI0,rI1,rI2];itm.ia=[ia0,ia1,ia2];itm.hsi=[hsi0,hsi1,hsi2];itm.bIP=[bIP0,bIP1,bIP2];return itm;}function awmmght(cnt){for (var cno=0; cno<this.cn.length; cno++)this.cn[cno].ght();}function awmcght(){var hct="";for (p=0;p<this.it.length;p++){var t=this.it[p];this.siw=Math.max(this.siw,Math.max(((t.hsi[0]!=n)?awmImagesColl[t.hsi[0]*3+1]:0),Math.max(((t.hsi[1]!=n)?awmImagesColl[t.hsi[1]*3+1]:0),((t.hsi[2]!=n)?awmImagesColl[t.hsi[2]*3+1]:0))));}if (this.pm.fl||this.pi!=null) hct=" style='left:0px; top:0px; visibility:hidden;'";this.htx="<div id='"+this.id+"'"+hct+" class='"+this.cs.id+" noprint' onMouseOver='this.prc.onmouseover();' onMouseOut='this.prc.onmouseout();'>";for (p=0; p<this.it.length; p++){this.htx+=this.it[p].ght();}this.htx+="</div>";return this.htx;}function awmight(){var htx=(awmAfter5Incl)?"<td class='awmGeneric' id='"+this.id+"'>":"";for (var q=0; q<this.pm.st; q++){htx+=(awmAfter5Incl)?"<table id='"+this.id+"_"+q+"' title='"+this.tt+"' class='"+this.style[q].id3+"' "+((q>0)?"style='visibility:hidden'":"")+"border='0' cellpadding='0' cellspacing='0'><td class='"+this.style[q].id2+"' align='"+awmalt[this.style[q].algnm]+"' valign='middle'"+((this.ps.siw>0&&this.iHF==2)?" STYLE='padding-right:0px'":"")+">"+awmatai(this.inm[q],this.ii[q],this.ia[q])+"</td>":"<div id='"+this.id+"_"+q+"' title='"+this.tt+"' class='"+this.style[q].id+"'><table border='0' cellpadding='0' cellspacing='0' class='awmGeneric' "+((awmAfter5Incl)?this.inlineStyle[q]:"height='100%'")+"><tr class='awmGeneric'><td class='"+this.style[q].id2+"' valign='middle' align="+awmalt[this.style[q].algnm]+">"+awmatai(this.inm[q],this.ii[q],this.ia[q])+"</td>";if (this.ps.siw>0&&this.iHF==2){htx+="<td class='"+this.style[q].id2+"' STYLE='padding-left:0px;' width='"+(this.ps.siw+this.style[q].pdr)+"'>";if (this.hsi[q]!=n) htx+=awmiht(this.hsi[q]);htx+="</td>";}htx+=(awmAfter5Incl)?"</table>":"</tr></table></div>";}if(this.url!=null&&this.tf=="new") htx+="<a href='"+this.url+"' target='_blank'>";htx+="<img border='0' id='"+this.id+"_4' title='"+this.tt+"' width=100% height=100% style='position:absolute; cursor:"+awmctlt[this.style[0].crs]+"; z-index:"+awmzindex+";' src='"+awmMenuPath+awmLibraryPath+"/dot.gif' onMouseOver='this.pi.onmouseover();return true' onMouseOut='this.pi.onmouseout();' onMouseDown='this.pi.onmousedown();' onMouseUp='this.pi.onmouseup();' onMouseMove='this.pi.onmousemove();'>";if(this.url!=null&&this.tf=="new") htx+="</a>";for (var q=0; q<this.pm.st; q++){htx+="<table class='"+((this.bIP[q])?this.style[q].id3b:this.style[q].id4)+"'"+((q>0)?" style='visibility:hidden'":"")+" width='1' height='1' id='"+this.id+"_"+q+"a' border='0' cellpadding='0' cellspacing='0'><tr>";if (this.lI[q]!=n){htx+="<td width='"+awmImagesColl[this.lI[q]*3+1]+"'>"+awmiht(this.lI[q])+"</td>";htx+="<td"+((this.bIP[q])?" class='"+this.style[q].id3a+"'":"")+" width=100%></td>";}if (this.rI[q]!=n){if (this.lI[q]==n) htx+="<td"+((this.bIP[q])?" class='"+this.style[q].id3a+"'":"")+" width=100%></td>";htx+="<td width='"+awmImagesColl[this.rI[q]*3+1]+"'>"+awmiht(this.rI[q])+"</td>";}if (this.rI[q]==n&&this.lI[q]==n)htx+="<td"+((this.bIP[q])?" class='"+this.style[q].id3a+"'":"")+"><img src='"+awmMenuPath+awmLibraryPath+"/dot.gif'></td>";htx+="</tr></table>";}if (this.hSp){if (this.ps.ct==0){htx+="<table id='"+this.id+"_5' style='position:absolute' width='100%' height='"+parseInt(this.sMg*2+2-this.sMs+this.ps.dbi)+"' border='0' cellpadding='0' cellspacing='0'><tr><td><center><table border='0' cellpadding='0' cellspacing='0' width='"+this.sWt+"%'><tr><td height='"+parseInt(1*this.sMg+1*this.ps.dbi)+"'></td></tr><tr><td height='1' bgcolor='"+this.sC1+"'></td></tr><tr><td height='1'"+((this.sC2)?" bgcolor='"+this.sC2+"'":"")+"></td></tr><tr><td height='"+this.sMg+"'></td></tr></table></center></td></tr></table>";} else  {htx+="<table id='"+this.id+"_5' style='position:absolute' height='100%' width='"+parseInt(this.sMg*2+2-this.sMs+this.ps.dbi)+"' border='0' cellpadding='0' cellspacing='0'><tr width='100%'><td height="+parseInt((100-this.sWt)/2)+"% width='0%'></td></tr><tr><td height="+this.sWt+"% width='"+this.sMg+"'></td><td width='1' bgcolor='"+this.sC1+"'></td><td width='1'"+((this.sC2)?" bgcolor="+this.sC2:"")+"></td><td width='"+parseInt(1*this.sMg+1*this.ps.dbi)+"'></td></tr><tr><td height='"+parseInt((100-this.sWt)/2)+"%'></td></tr></table>";}}htx+=(awmAfter5Incl)?"</td>":"";return htx;}function awmmwhttd(){var s="",crc;document.write(this.sht);for (var i=0; i<this.cn.length; i++) s+=this.cn[i].htx;document.write(s);}function awmcfe(){if (this.ft) return;this.layer=document.all[this.id];this.layer.prc=this;for (var p=0; p<this.it.length; p++){this.it[p].elr=document.all[this.it[p].id+"_4"];this.it[p].elr.pi=this.it[p];for (var q=this.pm.st-1; q>=0; q--){this.it[p].layer[q]=document.all[this.it[p].id+"_"+q];this.it[p].layer[q].pi=this.it[p];this.it[p].bglayer[q]=document.all[this.it[p].id+"_"+q+"a"];}if (this.it[p].hSp){this.it[p].splayer=document.all[this.it[p].id+"_5"];}}this.ft=1;}function awmca(){if (this.argd) return;var mbw;var iw, ih, mwt=0, mht=0, nl=0, nt=0;this.wts=new Array();this.hts=new Array();for (var p=0; p<this.it.length; p++){iw=ih=0;iw=this.it[p].mnW+((this.it[p].style[0].bs=="none")?0:2*this.it[p].style[0].bw);ih=this.it[p].mnH+((this.it[p].style[0].bs=="none")?0:2*this.it[p].style[0].bw);for (var q=this.pm.st-1; q>=0; q--){mbw=2*this.it[p].style[q].bw;iw=Math.max(iw,((awmAfter5Incl)?this.it[p].layer[q].children[0].offsetWidth:this.it[p].layer[q].children[0].style.pixelWidth)+mbw);ih=Math.max(ih,((awmAfter5Incl)?this.it[p].layer[q].children[0].offsetHeight:this.it[p].layer[q].children[0].style.pixelHeight)+mbw);iw=Math.max(iw,this.it[p].bglayer[q].children[0].offsetWidth+mbw);ih=Math.max(ih,this.it[p].bglayer[q].children[0].offsetHeight+mbw);mwt=Math.max(iw,mwt);mht=Math.max(ih,mht);}this.wts[p]=iw;this.hts[p]=ih;}if (this.ew) for (var p=0; p<this.it.length; p++) this.wts[p]=mwt;if (this.eh) for (var p=0; p<this.it.length; p++) this.hts[p]=mht;for (var p=0; p<this.it.length; p++){for (var q=0; q<this.pm.st; q++){mbw=2*this.it[p].style[q].bw;if (this.ct==0)this.it[p].layer[q].style.pixelTop=this.it[p].bglayer[q].style.pixelTop=nt;else this.it[p].layer[q].style.pixelLeft=this.it[p].bglayer[q].style.pixelLeft=nl;this.it[p].layer[q].style.pixelWidth=this.it[p].bglayer[q].style.pixelWidth=this.wts[p]-((awmAfter5Incl&&!dtype)?0:mbw);this.it[p].layer[q].style.pixelHeight=this.it[p].bglayer[q].style.pixelHeight=this.hts[p]-((awmAfter5Incl&&!dtype)?0:mbw);}this.it[p].elr.style.pixelLeft=nl;this.it[p].elr.style.pixelTop=nt;this.it[p].elr.style.pixelWidth=this.wts[p];this.it[p].elr.style.pixelHeight=this.hts[p];if (this.ct==0) nt+=this.hts[p]+this.dbi; else  nl+=this.wts[p]+this.dbi;if (this.it[p].hSp){if (this.ct==0){this.it[p].splayer.style.pixelTop=(nt-this.dbi);this.it[p].splayer.style.pixelLeft=nl;this.it[p].splayer.style.pixelWidth=this.wts[p];nt+=parseInt(2*this.it[p].sMg+2-this.it[p].sMs+this.dbi);} else  {this.it[p].splayer.style.pixelLeft=nl;this.it[p].splayer.style.pixelTop=nt;this.it[p].splayer.style.pixelHeight=this.hts[p];nl+=parseInt(2*this.it[p].sMg+2-this.it[p].sMs+this.dbi);}}}if (this.cs.bgi!=n) this.layer.style.backgroundImage="url("+awmMenuPath+awmImagesPath+"/"+awmImagesColl[this.cs.bgi*3]+")";if (this.ct==0){this.layer.style.pixelWidth=mwt+((awmAfter5Incl&&!dtype)?2*this.cs.bw:0);this.layer.style.pixelHeight=nt-this.dbi+((awmAfter5Incl&&!dtype)?2*this.cs.bw:0);} else  {this.layer.style.pixelWidth=nl-this.dbi+((awmAfter5Incl&&!dtype)?2*this.cs.bw:0);this.layer.style.pixelHeight=mht+((awmAfter5Incl&&!dtype)?2*this.cs.bw:0);}if (this.ct==2) this.layer.style.pixelWidth=document.body.clientWidth-2*this.cs.bw;this.argd=1;}function awmcs(sf,x,y){if (sf){if (mpi||aLf()){this.cd=0;this.fe();this.arr();if (arguments.length==1) this.pc();else  {this.left=this.layer.style.pixelLeft=x;this.top=this.layer.style.pixelTop=y;}this.layer.style.visibility="visible";if (this.shw>0&&!awmun&&awmAfter5Incl) this.unf();if (this.jcoo!=null) eval(this.jcoo);if (this.ind==0) if (this.pm.selectedItem>0) this.it[this.pm.selectedItem-1].shst(2);}} else  {if (!this.ft||this.mio||this.cd) return;this.layer.style.visibility="hidden";clearInterval (this.uid);awmun=0;if (this.pi!=null) if (this.pm.selectedItem<1){this.pi.shst(0);}else  {if (this.pi.ind==this.pm.selectedItem-1&&this.pi.ps.ind==0){this.pi.shst(2);} else  {this.pi.shst(0);}}if (this.jcoc!=null&&! this.cd) eval(this.jcoc);this.cd=1;}}function awmchdt(flg){var p;for (p=0; p<this.it.length; p++){if (this.it[p].sm!=n) this.it[p].sm.hdt(0);}if (arguments.length==1) this.show(0);}function awmmcm(flg){if (this.mio&&!flg) return;for (var cno=(this.cll&&awmctm==null)?0:1; cno<this.cn.length; cno++){if (flg){this.cn[cno].mio=0;}this.cn[cno].show(0);}if (awmSubmenusFrame!=""){for (p=0; p<this.cn[0].it.length; p++){if (this.cn[0].it[p].sm!=n) this.cn[0].it[p].sm.pm.cm(flg);}}}function awmodmd(){for (mno=0; mno<awmm.length; mno++){awmm[mno].cm(0);}}function awmocmo(){clearTimeout(awmHide2ID);this.mio=1;this.pm.mio=1;if (this.pi!=null) this.pi.shst((this.swn==0)?1:2);if (this.ind>0) clearTimeout(this.pi.ps.hsid);clearTimeout(this.hsid);}function awmocmot(){this.mio=0;this.pm.mio=0;if (!this.pm.ss){clearTimeout(awmCollID);awmCollID=setTimeout("awmm["+this.pm.ind+"].cm(0);",awmhd);if (awmSubmenusFrame==""){this.hsid=setTimeout("awmm["+this.pm.ind+"].cn["+this.ind+"].hdt("+((this.ind==0)?"":"0")+");",awmhd);awmHideID=this.hsid;}}}function awmiss(sts){if (!this.ps.layer) return;if (this.ps.layer.style.visibility!="visible") return;if (sts==2&&this.pm.st==2) sts=1;if (sts==0){if (this.layer[0]) this.layer[0].style.visibility="inherit";if (this.bglayer[0]) this.bglayer[0].style.visibility="inherit";}for (q=1; q<this.pm.st; q++){if (q==sts){if (this.layer[0]){this.layer[0].style.visibility="hidden";this.bglayer[0].style.visibility="hidden";this.layer[q].style.visibility="visible";this.bglayer[q].style.visibility="visible";}} else  {if (this.layer[q]) this.layer[q].style.visibility="hidden";if (this.bglayer[q]) this.bglayer[q].style.visibility="hidden";}}}function awmoimo(){if (awmctm!=null) return;if (awmSubmenusFrame!=""){eval ("var frex=parent."+awmSubmenusFrame);if (frex){eval("this.sm=parent."+awmSubmenusFrame+".awm"+this.pm.nm+"_sub_"+(this.ind+1));if (this.sm){this.sm.pi=this;this.sm.pm.ss=this.pm.ss;} else  this.sm=null;}}this.ps.mio=1;this.pm.mio=1;this.ps.hdt();this.shst(1);status=this.sbt;if (this.sm!=n) if (!this.sm.swn){clearTimeout(this.sm.hsid);this.sm.show(1);}if (this.jc[1]!=null) eval(this.jc[1]);}function awmoimot(){if (this.sm==null||(this.sm!=null&&this.sm.cd)){if (this.pm.selectedItem<1){this.shst(0);}else  {if (this.ps.ind==0&&this.ind==this.pm.selectedItem-1){this.shst(2);} else  {this.shst(0);}}}if (!this.pm.ss){if (this.sm!=n&&awmSubmenusFrame==""){this.sm.hsid=setTimeout("awmm["+this.pm.ind+"].cn["+this.sm.ind+"].hdt(0);",awmhd);awmHideID=this.sm.hsid;}}status=awmdst;if (this.jc[0]!=null) eval(this.jc[0]);}function awmoimd(){this.shst(2);if (this.iHF==1){this.pm.mio=0;awmctm=this.ps;this.pm.cm(0);this.pm.mio=1;awmmox=event.clientX-awmctm.layer.offsetLeft;awmmoy=event.clientY-awmctm.layer.offsetTop;awmml=awmctm.layer.offsetLeft-awmctm.layer.style.pixelLeft;awmmt=awmctm.layer.offsetTop-awmctm.layer.style.pixelTop;} else  {if (this.sm!=n) if (this.sm.swn){clearTimeout(this.sm.hsid);this.sm.show(1);}if (this.jc[2]!=null) eval(this.jc[2]);if (this.url!=null){if(event.shiftKey) window.open(this.url);else  if (this.tf==null) window.location=this.url;else  if (this.tf=="new") ;else  if (this.tf=="top") window.top.location=this.url;else  eval("parent."+this.tf+".location=this.url");}}}function awmoimu(){if (awmctm!=null){awmctm.pm.rep=1;awmctm=null;}this.shst(1);}function awmoimm(){if (awmctm!=null){awmctm.pm.rep=1;awmctm.left=awmctm.layer.style.pixelLeft=event.clientX-awmmox;awmctm.top=awmctm.layer.style.pixelTop=event.clientY-awmmoy;}}function awmpc(flg){if (!this.ft) return;var me=this.pm;if (this.pi==null){var tmpEl=(document.all["awmAnchor-"+this.pm.nm])?document.all["awmAnchor-"+this.pm.nm]:null;if (tmpEl){x=tmpEl.offsetLeft+parseInt((document.body.currentStyle.marginLeft)?document.body.currentStyle.marginLeft.replace(/px/, ""):document.body.leftMargin)+this.pm.offX2;y=tmpEl.offsetTop+parseInt((document.body.currentStyle.marginTop)?document.body.currentStyle.marginTop.replace(/px/, ""):document.body.topMargin)+this.pm.offY2;if (tmpEl.tagName!="TD") z=tmpEl.offsetParent; else  z=tmpEl.parentElement;while (z!=null){x+=z.offsetLeft;y+=z.offsetTop;z=z.offsetParent;}var crn=me.rc;if (crn==4||crn==6||crn==8) y-=this.layer.offsetHeight/2;if (crn==5||crn==7||crn==8) x-=this.layer.offsetWidth/2;if (crn==1||crn==2||crn==6) x-=this.layer.offsetWidth;if (crn==2||crn==3||crn==7) y-=this.layer.offsetHeight;if (tmpEl.tagName!="SPAN"){crn=me.crn;if (crn==1||crn==2||crn==6) x+=tmpEl.offsetWidth;if (crn==2||crn==3||crn==7) y+=tmpEl.offsetHeight;if (crn==5||crn==7||crn==8) x+=tmpEl.offsetWidth/2;if (crn==4||crn==6||crn==8) y+=tmpEl.offsetHeight/2;}x+=((awmIEMac4OffsetX>-9000)?awmIEMac4OffsetX:this.pm.offX);y+=((awmIEMac4OffsetY>-9000)?awmIEMac4OffsetY:this.pm.offY);} else  {var crn=me.crn;var x=this.pm.offX,y=this.pm.offY;x+=(crn==0||crn==4||crn==3)?(me.dx):((crn==1||crn==6||crn==2)?vr-vl-this.layer.offsetWidth-me.dx:(vr-vl-this.layer.offsetWidth)/2);y+=(crn==0||crn==5||crn==1)?(me.dy):((crn==3||crn==7||crn==2)?vb-vt-this.layer.offsetHeight-me.dy:(vb-vt-this.layer.offsetHeight)/2);}if ((this.left!=x+awmlssx||this.top!=y+awmlssy)&&!this.pm.rep){x+=(this.pm.dft==1||this.pm.dft==3||this.pm.dft==4||this.pm.dft==6)?vl:0;y+=(this.pm.dft==1||this.pm.dft==2||this.pm.dft==4||this.pm.dft==5)?vt:0;this.layer.style.pixelLeft=this.left=x;this.layer.style.pixelTop=this.top=y;}} else  {var psl=this.pi.ps.layer;var pil=this.pi.layer[0];this.lod=this.od;var parentBorder=this.pi.ps.cs.bw;if (this.lod==0){if (this.pi.ps.ct==0){if (this.pm.rtls)this.lod=((psl.offsetLeft-this.swr-this.layer.offsetWidth>vl)?2:1);else this.lod=((psl.offsetLeft+psl.offsetWidth+this.swr+this.layer.offsetWidth>vr)&&(psl.offsetLeft-this.swr-this.layer.offsetWidth>vl))?2:1;} else  {this.lod=((psl.offsetTop+psl.offsetHeight+this.swr+this.layer.offsetHeight>vb)&&(psl.offsetTop-this.swr-this.layer.offsetHeight>vl))?2:1;}}if (this.pi.ps.ct==0){this.left=this.layer.style.pixelLeft=(this.lod==1)?((this.pm.submenusFrameOffset>-9000&&this.ind==0)?vl:psl.style.pixelLeft+psl.offsetWidth)+this.swr:psl.style.pixelLeft-this.layer.offsetWidth-this.swr;if (this.pm.submenusFrameOffset>-9000&&this.ind==0&&((this.pm.rtls&&this.pm.rtlf!=2)||this.pm.rtlf==1)){this.left=this.layer.style.pixelLeft=document.body.clientWidth-this.layer.offsetWidth-this.swr;}this.top=((this.sa==0)?psl.style.pixelTop+pil.style.pixelTop+parentBorder:((this.sa==1)?psl.style.pixelTop:((this.sa==2)?psl.style.pixelTop+psl.offsetHeight-this.layer.offsetHeight:psl.style.pixelTop+(psl.offsetHeight-this.layer.offsetHeight)/2)));if (this.top+this.layer.offsetHeight>vb) this.top=vb-this.layer.offsetHeight;this.layer.style.pixelTop=this.top+=((this.pm.submenusFrameOffset>-9000&&this.ind==0)?this.pm.submenusFrameOffset-this.pi.ps.doy+vt:0)+this.alO;if (this.top<vt) this.layer.style.pixelTop=this.top=vt;} else {this.left=(this.sa==0)?(psl.style.pixelLeft+pil.style.pixelLeft+parentBorder+((this.pm.rtls)?(pil.style.pixelWidth-this.layer.style.pixelWidth):0)):((this.sa==1)?psl.style.pixelLeft:((this.sa==2)?psl.style.pixelLeft+psl.offsetWidth-this.layer.offsetWidth:psl.style.pixelLeft+(psl.offsetWidth-this.layer.offsetWidth)/2));if (this.left+this.layer.offsetWidth>vr) this.left=vr-this.layer.offsetWidth;this.layer.style.pixelLeft=this.left+=((this.pm.submenusFrameOffset>-9000&&this.ind==0)?this.pm.submenusFrameOffset-this.pi.ps.dox+vl:0)+this.alO;this.top=this.layer.style.pixelTop=(this.lod==1)?((this.pm.submenusFrameOffset>-9000&&this.ind==0)?vt:psl.style.pixelTop+psl.offsetHeight)+this.swr:psl.style.pixelTop-this.layer.offsetHeight-this.swr;}}}function awmu(){if (awmuc>10){clearInterval (awmctu.uid);awmun=0;return;}var layer=awmctu.layer;switch (awmud){case 1: if (awmctu.shw==1){layer.style.pixelLeft=awmctu.left-layer.offsetWidth*(10-awmuc)/10;layer.style.clip="rect(0px,"+layer.offsetWidth+"px,"+layer.offsetHeight+"px,"+Math.round(layer.offsetWidth*(10-awmuc)/10)+"px)";} else  layer.style.clip="rect(0px,"+Math.round(layer.offsetWidth*awmuc/10)+"px,"+layer.offsetHeight+"px,0px)";break;case 2: if (awmctu.shw==1){layer.style.pixelLeft=awmctu.left+layer.offsetWidth*(10-awmuc)/10;layer.style.clip="rect(0px,"+Math.round(layer.offsetWidth*awmuc/10)+"px,"+layer.offsetHeight+"px,0px)";} else  layer.style.clip="rect(0px,"+layer.offsetWidth+"px,"+layer.offsetHeight+"px,"+layer.offsetWidth*(10-awmuc)/10+"px)";break;case 3: if (awmctu.shw==1){layer.style.pixelTop=awmctu.top-layer.offsetHeight*(10-awmuc)/10;layer.style.clip="rect("+Math.round(layer.offsetHeight*(10-awmuc)/10)+"px,"+layer.offsetWidth+"px,"+layer.offsetHeight+"px,0px)";} else  layer.style.clip="rect(0px,"+layer.offsetWidth+"px,"+Math.round(layer.offsetHeight*awmuc/10)+"px,0px)";break;case 4: if (awmctu.shw==1){layer.style.pixelTop=awmctu.top+layer.offsetHeight*(10-awmuc)/10;layer.style.clip="rect(0px,"+layer.offsetWidth+"px,"+Math.round(layer.offsetHeight*awmuc/10)+"px,0px)";} else  layer.style.clip="rect("+Math.round(layer.offsetHeight*(10-awmuc)/10)+"px,"+layer.offsetWidth+"px,"+layer.offsetHeight+"px,0px)";break;case 5: if (awmctu.shw==1){layer.style.pixelLeft=awmctu.left-layer.offsetWidth*(10-awmuc)/10;layer.style.pixelTop=awmctu.top-layer.offsetHeight*(10-awmuc)/10;layer.style.clip="rect("+Math.round(layer.offsetHeight*(10-awmuc)/10)+"px,"+layer.offsetWidth+"px,"+layer.offsetHeight+"px,"+Math.round(layer.offsetWidth*(10-awmuc)/10)+"px)";} else  layer.style.clip="rect(0px,"+Math.round(layer.offsetWidth*awmuc/10)+"px,"+Math.round(layer.offsetHeight*awmuc/10)+"px,0px)";break;case 6: if (awmctu.shw==1){layer.style.pixelLeft=awmctu.left-layer.offsetWidth*(10-awmuc)/10;layer.style.pixelTop=awmctu.top+layer.offsetHeight*(10-awmuc)/10;layer.style.clip="rect(0px,"+layer.offsetWidth+"px,"+Math.round(layer.offsetHeight*awmuc/10)+"px,"+Math.round(layer.offsetWidth*(10-awmuc)/10)+"px)";} else  layer.style.clip="rect("+Math.round(layer.offsetHeight*(10-awmuc)/10)+"px,"+Math.round(layer.offsetWidth*awmuc/10)+"px,"+layer.offsetHeight+"px,0px)";break;case 7: if (awmctu.shw==1){layer.style.pixelLeft=awmctu.left+layer.offsetWidth*(10-awmuc)/10;layer.style.pixelTop=awmctu.top-layer.offsetHeight*(10-awmuc)/10;layer.style.clip="rect("+Math.round(layer.offsetHeight*(10-awmuc)/10)+"px,"+Math.round(layer.offsetWidth*awmuc/10)+"px,"+layer.offsetHeight+"px,0px)";} else  layer.style.clip="rect(0px,"+layer.offsetWidth+"px,"+Math.round(layer.offsetHeight*awmuc/10)+"px,"+layer.offsetWidth*(10-awmuc)/10+"px)";break;case 8: if (awmctu.shw==1){layer.style.pixelLeft=awmctu.left+layer.offsetWidth*(10-awmuc)/10;layer.style.pixelTop=awmctu.top+layer.offsetHeight*(10-awmuc)/10;layer.style.clip="rect(0px,"+Math.round(layer.offsetWidth*awmuc/10)+"px,"+Math.round(layer.offsetHeight*awmuc/10)+"px,0px)";} else  layer.style.clip="rect("+Math.round(layer.offsetHeight*(10-awmuc)/10)+"px,"+layer.offsetWidth+"px,"+layer.offsetHeight+"px,"+layer.offsetWidth*(10-awmuc)/10+"px)";break;}awmuc+=2;}function awmcu(){clearInterval(this.uid);this.layer.style.clip='rect(0px,0px,0px,0px)';this.layer.style.visibility="visible";awmuc=0;if (typeof(this.lod=="undefined")) this.lod=(this.od==0)?1:this.od;awmud=(this.ud!=0)?this.ud:(this.lod+((this.pi.ps.ct==0)?0:2));awmctu=this;awmun=1;this.uid=setInterval("awmu()",30);}function awmcm(){var n=null,crc;for (var i=0; i<awmsc.length; i++) awmsc[i]=n;for (var i=0; i<awmm.length; i++){for (var j=0; j<awmm[i].cn.length; j++){crc=awmm[i].cn[j];for (var k=0; k<crc.it.length; k++){crc.it[k].pm=n;crc.it[k].ps=n;crc.it[k].sm=n;if (crc.ft){crc.it[k].elr.pi=n;crc.it[k].elr=n;}for (var l=0; l<awmm[i].st; l++){if (crc.ft){crc.it[k].layer[l].pi=n;crc.it[k].layer[l]=n;}crc.it[k].style[l]=n;}crc.it[k]=null;}if (crc.ft){crc.layer.prc=n;crc.layer=n;}crc.cs=n;crc.pi=n;crc.pm=n;crc.pm=n;awmm[i].cn[j]=n;}awmm[i].sm=n;awmm[i].pm=n;awmm[i]=n;}}function awmwr(){if (aRsF!=n) aRsF();if (typeof(awmm)=="undefined") return;if (awmAfter5Incl){setTimeout("awmTest();",200);}else  {if (!(awmSubmenusFrameOffset>-9000)){for (var mno=0; mno<awmm.length; mno++){if (!awmm[mno].rep) awmm[mno].cn[0].pc();if (awmm[mno].cn[0].ct==2) awmm[mno].cn[0].layer.style.pixelWidth=document.body.clientWidth;}}}}function awmTest(){if (!(awmSubmenusFrameOffset>-9000)){for (var mno=0; mno<awmm.length; mno++){if (!awmm[mno].rep) awmm[mno].cn[0].pc();if (awmm[mno].cn[0].ct==2) awmm[mno].cn[0].layer.style.pixelWidth=document.body.clientWidth;}}}function awmwu(){clearInterval(awmdid);if (typeof(awmm)=="undefined") return;if (awmSubmenusFrameOffset>-9000){for (var mno=0; mno<awmm.length; mno++){if (awmm[mno].cn[0].pi!=null){awmm[mno].cn[0].pi.shst(0);awmm[mno].cn[0].pi.sm=null;}}}awmcm();}function awmDriftSmooth(){var clientX=document.body.clientWidth;var clientY=document.body.clientHeight;var sx=10;var sy=10;var divider=5;var snx,sny;if (vl!=awmlssx||vt!=awmlssy){for (var mno=0; mno<awmm.length; mno++){var crm=awmm[mno];if (crm.cn[0].ft&&crm.cll==0){if ((crm.dft==4||crm.dft==6)&&vl!=awmlssx){crm.mio=0;crm.cm(0);snx=Math.abs(vl-awmlssx)/(vl-awmlssx);if((Math.round(Math.abs(vl-awmlssx)/divider))>=sx) sx=Math.round(Math.abs(vl-awmlssx)/divider);if (Math.abs(vl-awmlssx)<sx) sx=Math.abs(vl-awmlssx);crm.cn[0].left=crm.cn[0].layer.style.pixelLeft+=snx*sx;if (awmSubmenusFrame!=''&&crm.cn[0].ct>0) crm.cn[0].dox=vl;}if ((crm.dft==4||crm.dft==5)&&vt!=awmlssy){crm.mio=0;crm.cm(0);sny=Math.abs(vt-awmlssy)/(vt-awmlssy);if((Math.round(Math.abs(vt-awmlssy)/divider))>=sy) sy=Math.round(Math.abs(vt-awmlssy)/divider);if (Math.abs(vt-awmlssy)<sy) sy=Math.abs(vt-awmlssy);crm.cn[0].top=crm.cn[0].layer.style.pixelTop+=sny*sy;if (awmSubmenusFrame!=''&&crm.cn[0].ct==0) crm.cn[0].doy=vt;}}}if (vl!=awmlssx) awmlssx+=snx*sx;if (vt!=awmlssy) awmlssy+=sny*sy;}}function awmd(){if (vl!=awmlsx ||vt!=awmlsy){for (var mno=0; mno<awmm.length; mno++){var crm=awmm[mno];if (crm.cll==0){crm.mio=0;crm.cm(0);if (crm.dft==1||crm.dft==3){crm.cn[0].left=crm.cn[0].layer.style.pixelLeft+=vl-awmlsx;if (awmSubmenusFrame!=''&&crm.cn[0].ct>0) crm.cn[0].dox=vl;}if (crm.dft==1||crm.dft==2){crm.cn[0].top=crm.cn[0].layer.style.pixelTop+=vt-awmlsy;if (awmSubmenusFrame!=''&&crm.cn[0].ct==0) crm.cn[0].doy=vt;}}}awmlsx=vl;awmlsy=vt;}awmDriftSmooth();for (var mno=0; mno<awmm.length; mno++) if (awmm[mno].cll==0) awmm[mno].cn[0].pc();}function aCo(){vl=document.body.scrollLeft;vt=document.body.scrollTop;vr=vl+document.body.clientWidth;vb=vt+document.body.clientHeight;}function awmdb(mi){if (awmm[mi].awmD)for (var i=0;i<awmImagesColl.length;i=i+3)if (awmImagesColl[i+1]==0||awmImagesColl[i+2]==0){setTimeout("awmdb("+mi+")",10);return;}var crc=awmm[mi].cn[0];crc.fe();crc.arr();if (!awmm[mi].cll){if ((!awmm[mi].elemRel||document.all["awmAnchor-"+awmm[mi].nm])&&(mpi||aLf())) crc.show(1);else  setTimeout("awmdb("+mi+")",10);}}function awmHideMenu(mNm){var ml=awmm;if (ml){var i=0;document.onmousedown=null;while (i<ml.length){if (ml[i].nm==mNm||mNm==null){ml[i].cm(1);ml[i].cn[0].show(0);}i++;}ml=null;}}function awmbmm(){if (typeof(awmTarget)!='undefined'&&this.ind>0) return;if(this.awmD) if(cH[0]!=aue(cJ[0])&&cH[cH.length-1]!=cI&&cH[cH.length-1]!=aue(cJ[1])) return;this.pspn=(document.all["awmAnchor-"+this.nm])?document.all["awmAnchor-"+this.nm]:null;document.onmousedown=awmodmd;status="."+(this.ind+1);this.ght();this.whtd();awmdb(this.ind);status=awmdst;clearInterval(awmCoordId);awmCoordId=setInterval("aCo()",25);clearInterval(awmdid);awmdid=setInterval("awmd()",75);awmsoo=awmso+1;}function awmShowMenu (mNm,x,y,frame){var ml;if (arguments.length<4||frame==null) ml=awmm;else  {eval ("var frex=parent."+awmSubmenusFrame);if (!frex) return;eval("ml=parent."+frame+".awmm;");}if (ml){var i=0;while (ml[i].nm!=mNm&&i<ml.length-1) i++;if (ml[i].nm==mNm){if (arguments.length<3||x==null||y==null) ml[i].cn[0].show(1);else  {ml[i].cn[0].pm.rep=1;ml[i].cn[0].show(1,x,y);}}ml=null;}}function awmHideGroup(){if (typeof(awmTarget)!='undefined') return;clearTimeout(awmHide2ID);awmHide2ID=setTimeout("awmHideMenu();",awmhd);}function awmShowGroup(gNm,gCr,eCr,ofX,ofY){if (typeof(awmTarget)!='undefined') return;var tmp,i,j,imgs,x,y,z;var mNm=gNm.split("-")[0];gNm=gNm.split("-")[1];clearTimeout(awmCollID);clearTimeout(awmHideID);awmHideMenu(mNm);clearTimeout(awmHide2ID);for(i=0;i<awmm.length; i++){for (j=0;j<awmm[i].cn.length;j++){if (awmm[i].cn[j].groupID==gNm) if (mNm==awmm[i].nm||mNm==n) tmp=awmm[i].cn[j];if (tmp){imgs=document.getElementById("awmAnchor-"+mNm+"-"+gNm);if (imgs==n){if (gNm=="gr0"){tmp.cd=0;tmp.fe();tmp.arr();tmp.show(1);setTimeout("document.onmousedown=awmodmd",0);}return;}x=imgs.offsetLeft;x+=parseInt(document.body.leftMargin);y=imgs.offsetTop;y+=parseInt(document.body.topMargin);z=imgs.offsetParent;while (z!=null){x+=z.offsetLeft;y+=z.offsetTop;z=z.offsetParent;}tmp.cd=0;tmp.fe();tmp.arr();if (gCr!=null&&eCr!=null){if (eCr==1||eCr==2||eCr==6) x+=imgs.offsetWidth;if (eCr==2||eCr==3||eCr==7) y+=imgs.offsetHeight;if (eCr==5||eCr==7||eCr==8) x+=imgs.offsetWidth/2;if (eCr==4||eCr==6||eCr==8) y+=imgs.offsetHeight/2;if (gCr==1||gCr==2||gCr==6) x-=tmp.layer.offsetWidth;if (gCr==2||gCr==3||gCr==7) y-=tmp.layer.offsetHeight;if (gCr==5||gCr==7||gCr==8) x-=tmp.layer.offsetWidth/2;if (gCr==4||gCr==6||gCr==8) y-=tmp.layer.offsetHeight/2;} else  {if (tmp.pi){if (tmp.pi.ps.ct==0){x+=(imgs.offsetWidth+tmp.swr);y+=tmp.alO;} else  {x+=tmp.alO;y+=(imgs.offsetHeight+tmp.swr);}} else  {y+=imgs.offsetHeight;}}if (ofX) x+=ofX;if (ofY) y+=ofY;y=Math.min(y,vb-tmp.layer.offsetHeight);x=Math.min(x,vr-tmp.layer.offsetWidth);y=Math.max(y,vt);x=Math.max(x,vl);tmp.show(1,x,y);setTimeout("document.onmousedown=awmodmd",0);return;}}}}/*19*/