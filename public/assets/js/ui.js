window.addEventListener("load",function(){$(document).ready(function(){function n(){return $(window).outerWidth()<=992}var r=$("#nav");r.find(".nav__top-level__i").each(function(e,a){var t=$(a);t.find(".nav__top-level__i__inner").click(function(){var e=t.hasClass("nav__top-level__i--open");r.addClass("nav--open"),r.find(".nav__top-level__i").removeClass("nav__top-level__i--open"),n()&&e||t.addClass("nav__top-level__i--open")}),t.find(".nav__second-level .nav__second-level__i").click(function(){n()&&(t.removeClass("nav__top-level__i--open"),r.find(".nav__top-level__i").removeClass("nav__top-level__i--selected"),$navIem.addClass("nav__top-level__i--selected"))})}),$("body").find("#header__home").click(function(){r.removeClass("nav--open"),r.find(".nav__top-level__i").removeClass("nav__top-level__i--open")})})}),window.addEventListener("load",function(){$(document).ready(function(){function e(e){var a="";switch(e){case"fb":a="https://www.facebook.com/sharer/sharer.php?u="+window.location.href;break;case"tw":a="https://twitter.com/intent/tweet?text="+$('meta[name="twitter:description"]').attr("content")}var t="width=650,height=500,left="+(window.screenX+(window.outerWidth-650)/2)+",top="+(window.screenY+(window.outerHeight-500)/2)+",status=no,resizable=yes,toolbar=no,menubar=no,scrollbars=yes";return window.open(a,"sharePopup"+Math.random(),t)}$wrap=$("#share"),$wrap.find(".share__i--facebook").click(function(){e("fb")}),$wrap.find(".share__i--twitter").click(function(){e("tw")})})}),$(window).ready(function(){window.tableFunctionality=function(){var a=$(".table-data"),o=[],n=[];a.find(".table__head .table__th").each(function(){n.push($(this).attr("data-name"))}),a.find(".table__body .table__row").each(function(){var t={data:{},html:$(this).clone()};$(this).find(".table__td").each(function(e,a){t.data[n[e]]="rank"==n[e]?parseInt($(a).text(),10):$(a).text()}),o.push(t)});var i=[];for(var t in a.find(".table-filter").each(function(){i.push({name:$(this).attr("data-name"),ele:$(this),value:""})}),i)!function(){var e=t,a=i[t];a.ele.change(function(){i[e].value=a.ele.val(),l()})}();var d={for:"",direction:1},r=a.find(".table__head .table__th");function l(){var n=[];for(var r in o)!function(){var e=o[r],a=!0;for(var t in i)""!=i[t].value&&e.data[i[t].name]!=i[t].value&&(a=!1);a&&n.push(e)}();""!=d.for&&"string"==typeof n[0].data[d.for]&&0==n[0].data[d.for].indexOf("$")?n=n.sort(function(e,a){var t=parseInt(e.data[d.for].replace("$","").replaceAll(",",""),10),n=parseInt(a.data[d.for].replace("$","").replaceAll(",",""),10);return 1==d.direction?t==n?0:n<t?1:-1:t==n?0:n<t?-1:1}):""!=d.for&&(n=n.sort(function(e,a){return 1==d.direction?e.data[d.for]==a.data[d.for]?0:e.data[d.for]>a.data[d.for]?1:-1:e.data[d.for]==a.data[d.for]?0:e.data[d.for]>a.data[d.for]?-1:1}));var e=$("<div></div>");for(var r in n)e.append(n[r].html);a.find(".table__body").html(e.html())}r.data("order",0),r.eq(0).data("order",1),r.click(function(e){switch($(e.target).data("order")){case 0:r.removeClass("table__th--reverse"),r.data("order",0),$(e.target).data("order",1),d.for=$(e.target).attr("data-name"),d.direction=1;break;case 1:r.removeClass("table__th--reverse"),r.data("order",0),$(e.target).addClass("table__th--reverse").data("order",-1),d.for=$(e.target).attr("data-name"),d.direction=-1;break;case-1:r.removeClass("table__th--reverse"),r.data("order",0),$(e.target).removeClass("table__th--reverse").data("order",1),d.for=$(e.target).attr("data-name"),d.direction=1}l()})}}),String.prototype.replaceAll=function(e,a){return this.replace(new RegExp(e,"g"),a)},"object"==typeof jQuery&&(jQuery.fn.outerHTML=function(e){return e?this.before(e).remove():jQuery("<p>").append(this.eq(0).clone()).html()});