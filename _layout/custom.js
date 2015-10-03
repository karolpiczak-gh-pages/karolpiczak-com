	
	/**
	 **  DOM Initialisation
	 **/		
	 
	$(function(){

		/**
		 **  Attaching the tooltips
		 **/
		 
		$('.social a').tipsy({gravity: 'n', offset: 10});
		
		
		/**
		 **  Attach the countdown event
		 **/		
		 
		$('.countdown').countdown({until: new Date(2011, 10, 25), format: 'dHMS'});
		
		
		/**
		 **  Load the latest tweet
		 **/		
		
		var twitter_username = 'weboxeur';	// change the twitter account
		
		$('.tweet span').tweetable({'username':twitter_username, 'callback':function(){
			$('.tweet').fadeIn('slow');
		}});
			
			
			
		/**
		 **  Clear the field when the user clicks on the field
		 **/		
		 
		$('.subscribe .mail').click(function(){
			$('.subscribe .mail').attr('value','');
		});
		
		
		
		/**
		 **  Send the subscribed mail to subscribe.php and confirm
		 **/		
		 
		$('.subscribe a').click(function(){
		
			//Get e-mail field value
			var frmMail = $('.subscribe .mail').attr('value');
			$('.subscribe>span').fadeOut(function(){
				$(this).removeClass('red');
			});
			
			//Send data using ajax
			$.post("subscribe.php", {action: "subscribe", mail: frmMail},
			function(data){ 
				if (data.success == '1'){
					//If the mail was sent show the "success" message

					$('.subscribe .mail').attr('value','');
					
					$('.subscribe>div').fadeOut(function(){
						$('.subscribe>span').html(data.message).fadeIn();
					});
					
				}else{
				
					//If the mail has failed show the error message
					$('.subscribe>span').addClass('red').html(data.message).fadeIn();
				}
			});
			
			return false;
		});	// subscribe click

		
	});	// dom load
	
