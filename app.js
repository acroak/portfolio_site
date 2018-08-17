$(()=>{

//Change Email Social Icon on hover
  $(document).ready(function(){
    $("#email-icon").mouseover(function(){
      $(this).attr("src", "public/if_mail_email_envelope_send_message_blk.png");
    });
    $("#email-icon").mouseout(function(){
      $(this).attr("src", "public/if_email_mail_envelope_send_message_1011336.png");
    });
  })


//Change GitHub Social Icon on hover
  $(document).ready(function(){
    $("#github-icon").mouseover(function(){
      $(this).attr("src", "public/if_social_media_logo_github_blk.png");
    });
    $("#github-icon").mouseout(function(){
      $(this).attr("src", "public/if_github_social_media_logo_1221583.png");
    });
  })

//Change LinkedIn Social Icon on hover
  $(document).ready(function(){
    $("#linkedin-icon").mouseover(function(){
      $(this).attr("src", "public/if_linked_in_online_social_media_blk.png");
    });
    $("#linkedin-icon").mouseout(function(){
      $(this).attr("src", "public/if_online_social_media_linked_in_734383.png");
    });
  })

//Change Instagram Social Icon on hover
  $(document).ready(function(){
    $("#instagram-icon").mouseover(function(){
      $(this).attr("src", "public/if_instagram_online_social_media_photo_blk.png");
    });
    $("#instagram-icon").mouseout(function(){
      $(this).attr("src", "public/if_instagram_online_social_media_734394.png");
    });
  })



  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
}); //close on doc ready function
