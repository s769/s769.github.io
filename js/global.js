$(document).ready(function () {
    var var_sidebar = `<nav id="sidebar">
    <div class="sidebar-header"> 
                        <a href="/"> 
                            <img title="Home" class="img-fluid" src="/images/logo.png" alt="NCSU Logo" style="margin-top:3em;"> 
                        </a> 
                    </div> 
         
                    <ul class="list-unstyled components"> 
                        <li id="sidehome"> 
                            <a href="/" class="sidelink">Home</a> 
                        </li>
                        
                        <li id="sidewwd"> 
                            <a href="/what_we_do.html" class="sidelink">What We Do</a> 
                        </li> 

                        <li id="sideteam"> 
                            <a href="/team.html" class="sidelink">Team</a> 
                        </li> 

                        <li id="sidegroup"> 
                            <a href="/working_groups.html" class="sidelink">Working Groups</a> 
                        </li> 

                        <li id="sidepubs"> 
                            <a href="/publications.html" class="sidelink">Publications</a> 
                        </li> 
                       
                        <li id="sidetalks"> 
                            <a href="/talks_and_tutorials.html" class="sidelink">Talks and Tutorials</a> 
                        </li> 
                    </ul> 
         
                     
                </nav>
    `;
    
    


    var var_imgModal = `<div id="myModal" class="modal"> 
         
                <span class="close"><i class="fas fa-window-close" aria-hidden="true"></i></span> 
         
                <img class="modal-content" id="img01"> 
         
                <div id="caption"></div> 
                </div>`;

    var var_scroll = `<a id="back-to-top" href="#" class="btn btn-dark btn-lg back-to-top sidelink" role="button"><i class="fas fa-chevron-up"></i></a>`;
    var var_overlay = `<div class="overlay"></div>`

    var var_button = `<button type="button" id="sidebarCollapse" class="btn btn-info pull-left" style="margin-top:5px;">
                                Menu <i class="fas fa-align-justify"></i>
                            </button>`;

    $(var_sidebar).prependTo($("#main"));
    $(var_imgModal).prependTo($("#main"));
    $(var_scroll).prependTo($("#main"));
    $(var_overlay).prependTo($("#main"));
    $(var_button).prependTo($("#content"));

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"

    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('.imgModal').on('click', function () {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });

    $('.close').on('click', function () {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    })

    $(window).on('click', function (e) {
        var modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {

        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});   
