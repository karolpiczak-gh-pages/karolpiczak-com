/*
 * tweetable 1.3 - jQuery twitter feed generator plugin
 *
 * Copyright (c) 2009 Philip Beel (http://www.theodin.co.uk/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Revision: $Id: jquery.tweetable.js 2009-08-20 $ 
 *
 * ******
 * Revised by Nicolae Gabriel
 * Now it only retrieves a single tweet and add's it in the right place
 *
 */
 
(function($){
	$.fn.tweetable=function(options){
		var defaults={
			limit:1,
			username:'ermarkstudio',
			callback: function(){}
		};
		
		var options=$.extend(defaults,options);
		return this.each(
			function(options){
			var act=$(this);
			var api="http://twitter.com/statuses/user_timeline/";
			var count="?count=";
			
			$.getJSON(api+defaults.username+".json"+count+defaults.limit+"&callback=?",act,function(data){
				$.each(data,function(i,item){
					var created = item.created_at.substr(4,16);
					var twitt = item.text.replace(/#(.*?)(\s|$)/g,' ')
										 .replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,'<a href="$&">$&</a> ');
					
					$(act).html(twitt);
					defaults.callback();
				})}
			)}
		)}
		
	})(jQuery);