//Accordion Content script: By Dynamic Drive, at http://www.dynamicdrive.com
//Created: Jan 7th, 08'

var ddaccordion={
	
	contentclassname:{}, //object to store corresponding contentclass name based on headerclass

	expandone:function(headerclass, selected){ //PUBLIC function to expand a particular header
		this.toggleone(headerclass, selected, "expand")
	},

	collapseone:function(headerclass, selected){ //PUBLIC function to collapse a particular header
		this.toggleone(headerclass, selected, "collapse")
	},

	expandall:function(headerclass){ //PUBLIC function to expand all headers based on their shared CSS classname
		var $headers=$('.'+headerclass)
		$('.'+this.contentclassname[headerclass]+':hidden').each(function(){
			$headers.eq(parseInt($(this).attr('contentindex'))).click()
		})
	},

	collapseall:function(headerclass){ //PUBLIC function to collapse all headers based on their shared CSS classname
		var $headers=$('.'+headerclass)
		$('.'+this.contentclassname[headerclass]+':visible').each(function(){
			$headers.eq(parseInt($(this).attr('contentindex'))).click()
		})
	},

	toggleone:function(headerclass, selected, optstate){ //PUBLIC function to expand/ collapse a particular header
		var $targetHeader=$('.'+headerclass).eq(selected)
		var $subcontent=$('.'+this.contentclassname[headerclass]).eq(selected)
		if (typeof optstate=="undefined" || optstate=="expand" && $subcontent.is(":hidden") || optstate=="collapse" && $subcontent.is(":visible"))
			$targetHeader.click()
	},

	expandit:function($targetHeader, $targetContent, config){
		$targetContent.slideDown(config.animatespeed)
		this.transformHeader($targetHeader, config, "expand")
	},

	collapseit:function($targetHeader, $targetContent, config){
		$targetContent.slideUp(config.animatespeed)
		this.transformHeader($targetHeader, config, "collapse")
	},

	transformHeader:function($targetHeader, config, state){
		$targetHeader.addClass((state=="expand")? config.cssclass.expand : config.cssclass.collapse) //alternate btw "expand" and "collapse" CSS classes
		.removeClass((state=="expand")? config.cssclass.collapse : config.cssclass.expand)
		if (config.htmlsetting.location=='src'){ //Change header image (assuming header is an image)?
			$targetHeader=($targetHeader.is("img"))? $targetHeader : $targetHeader.find('img').eq(0) //Set target to either header itself, or first image within header
			$targetHeader.attr('src', (state=="expand")? config.htmlsetting.expand : config.htmlsetting.collapse) //change header image
		}
		else if (config.htmlsetting.location=="prefix") //if change "prefix" HTML, locate dynamically added ".accordprefix" span tag and change it
			$targetHeader.find('.accordprefix').html((state=="expand")? config.htmlsetting.expand : config.htmlsetting.collapse)
		else if (config.htmlsetting.location=="suffix")
			$targetHeader.find('.accordsuffix').html((state=="expand")? config.htmlsetting.expand : config.htmlsetting.collapse)
	},

	getCookie:function(Name){ 
		var re=new RegExp(Name+"=[^;]+", "i") //construct RE to search for target name/value pair
		if (document.cookie.match(re)) //if cookie found
			return document.cookie.match(re)[0].split("=")[1] //return its value
		return null
	},

	setCookie:function(name, value){
		document.cookie = name + "=" + value
	},

	init:function(config){
	document.write('<style type="text/css">\n')
	document.write('.'+config.contentclass+'{display: none}\n') //generate CSS to hide contents
	document.write('<\/style>')
	$(document).ready(function(){
		ddaccordion.contentclassname[config.headerclass]=config.contentclass //remember contentclass name based on headerclass
		config.cssclass={collapse: config.toggleclass[0], expand: config.toggleclass[1]} //store expand and contract CSS classes as object properties
		config.htmlsetting={location: config.togglehtml[0], collapse: config.togglehtml[1], expand: config.togglehtml[2]} //store HTML settings as object properties
		var lastexpanded={} //object to hold reference to last expanded header and content (jquery objects)
		var expandedindices=(config.persiststate)? ddaccordion.getCookie(config.headerclass) : config.defaultexpanded
		expandedindices=(typeof expandedindices=='string')? expandedindices.replace(/c/ig, '').split(',') : config.defaultexpanded //test for valid cookie ('string'), otherwise (null, or 1st page load), default to defaultexpanded setting
		var $subcontents=$('.'+config["contentclass"])
		if (config["collapseprev"] && expandedindices.length>1)
			expandedindices=[expandedindices.pop()] //return last array element as an array (for sake of jQuery.inArray())
		$('.'+config["headerclass"]).each(function(index){ //loop through all headers
			if (/(prefix)|(suffix)/i.test(config.htmlsetting.location) && $(this).html()!=""){ //add a SPAN element to header depending on user setting and if header is a container tag
				$('<span class="accordprefix"></span>').prependTo(this)
				$('<span class="accordsuffix"></span>').appendTo(this)
			}
			$(this).attr('headerindex', index+'h') //store position of this header relative to its peers
			$subcontents.eq(index).attr('contentindex', index+'c') //store position of this content relative to its peers
			var $subcontent=$subcontents.eq(index)
			if (jQuery.inArray(index, expandedindices)!=-1){ //check for headers that should be expanded automatically
				if (config.animatedefault==false)
					$subcontent.show()
				ddaccordion.expandit($(this), $subcontent, config)
				lastexpanded={$header:$(this), $content:$subcontent}
			}  //end check
			else{
				$subcontent.hide()
				ddaccordion.transformHeader($(this), config, "collapse")
			}
		})
		$('.'+config["headerclass"]).click(function(){ //assign behavior when headers are clicked on
				var $subcontent=$subcontents.eq(parseInt($(this).attr('headerindex'))) //get subcontent that should be expanded/collapsed
				if ($subcontent.css('display')=="none"){
					ddaccordion.expandit($(this), $subcontent, config)
					if (config["collapseprev"] && lastexpanded.$header && $(this).get(0)!=lastexpanded.$header.get(0)){ //collapse previous content?
						ddaccordion.collapseit(lastexpanded.$header, lastexpanded.$content, config)
					}
					lastexpanded={$header:$(this), $content:$subcontent}
				}
				else{
					ddaccordion.collapseit($(this), $subcontent, config)
				}
				return false
 	})
		$(window).bind('unload', function(){ //clean up and persist on page unload
			$('.'+config["headerclass"]).unbind('click')
			var expandedindices=[]
			$('.'+config["contentclass"]+":visible").each(function(index){ //get indices of expanded headers
				expandedindices.push($(this).attr('contentindex'))
			})
			if (config.persiststate==true){ //persist state?
				expandedindices=(expandedindices.length==0)? '-1c' : expandedindices //No contents expanded, indicate that with dummy '-1c' value?
				ddaccordion.setCookie(config.headerclass, expandedindices)
			}
		})
	})
	}
}