var galleryInfo = [
    {
        "title": "Glimmer"
        , "type": "Dev"
        , "view": "glimmer/index.html"
        , "tab": "assets/image/glimmerTab.jpg"
        , "pic1": "assets/image/glimmer1.png"
        , "pic2": "assets/image/glimmer2.png"
        , "pic3": "assets/image/glimmer3.png"
        , "desc": "Catch fireflies until you have enough to brighten the scene.Built using HTML5 Canvas, this web app utilizes JS Module pattern. Nature simulation in the form of firefly movement was implemented. "
        }
    
    , {
        "title": "Green Heron Growers"
        , "type": "Dev/Des"
        , "view": "http://www.greenherongrowers.com"
        , "tab": "assets/image/growerstab.jpg"
        , "pic1": "assets/image/growers1.jpg"
        , "pic2": "assets/image/growers2.jpg"
        , "pic3": "assets/image/growers3.jpg"
        , "desc": "Work for the Green Heron Growers has been with a variety of media. This includes a redesign and complete reprogramming of their current site  using html and css. Iframes were utilized for the inclusion of Google calendars and a mailing list sign up. Beyond that, farm store item labels were created using photoshop and avery label software."
        }
    
    , {
        "title": "BreakBoard"
        , "type": "Dev"
        , "tab": "assets/image/breakboardTab.jpg"
        , "pic1": "assets/image/breakboard1.png"
        , "pic2": "assets/image/breakboard2.png"
        , "pic3": "assets/image/breakboard3.png"
        , "desc": " This web app is intended for a break room display or a browser home page, to keep viewers up to date with weather and news. World Weather Online and Feedzilla api's were utilized to provide up to date news and weather via ajax implementation. HTML5 user location was used to get weather most accurate to your area. "
        }
    
    , {
        "title": "onPoint Mobile App"
        , "type": "Des"
        , "view": "assets/image/onPoint.pdf"
        , "tab": "assets/image/onpointtab.jpg"
        , "pic1": "assets/image/onpoint1.png"
        , "pic2": "assets/image/onpoint2.png"
        , "pic3": "assets/image/onpoint3.png"
        , "desc": "The onPoint mobile app brings all of the ingredients of staying up to date into one place. While college is a place of learning, there are many distractions which draw students away from their coursework, especially when good study habits have not been formed. This is a mobile app which helps plan and track progress for coursework.Using Photoshop, the app idea has been developed from idea stage through design document and annotated states. Contextual research, persona creation, and an interaction plan were included in the project."
        }
    
    , {
        "title": "Arts & Crafts Brochure"
        , "type": "Des"
        , "view": "assets/image/acbroch.pdf"
        , "tab": "assets/image/acbrochtab.jpg"
        , "pic1": "assets/image/acbroch1.jpg"
        , "pic2": "assets/image/acbroch2.jpg"
        , "pic3": "assets/image/acbroch3.jpg"
        , "desc": "The Arts and Crafts Festival in Westfield, New York is a part of the summer atmosphere. This brochure was used during the festival as a helpful, informative pamphlet for those attending the festival. inDesign was used for the creation of the brochure and Illustrator was used to create the vector images which are featured throughout. "
        }
    
    , {
        "title": "Unplugged"
        , "type": "Dev"
        , "view": "assets/image/unplugged.swf"
        , "tab": "assets/image/unpluggedtab.jpg"
        , "pic1": "assets/image/unplugged.png"
        , "pic2": "assets/image/unplugged2.png"
        , "pic3": "assets/image/unplugged3.png"
        , "desc": "The creation of this storybook app involved the animation of the storybook Unplugged which is written and illustrated by Jenna Jablonski.The interactions were programmed with young readers in mind; changes in color or position are quite playful. The biggest challenge of this project was adjusting the page layout to accomodate both illustration and text- initially these aspects were on seperate pages. In order to overcome this issue, I created a bar which drops down after the animation is played, providing spotlight for both text and images. This menu moves back up when clicked to allow further exploration of the page."
        }
    
    , {
        "title": "Public Speaking Contest"
        , "type": "Des"
        , "view": "assets/image/tiger.pdf"
        , "tab": "assets/image/tigertab.jpg"
        , "pic1": "assets/image/tiger1.jpg"
        , "pic2": "assets/image/tiger2.jpg"
        , "pic3": "assets/image/tiger3.jpg"
        , "desc": "This design was intended for a public speaking contest at Rochester Institute of Technology. The tiger design is original, translated from my sketch to a vector image via adobe illustrator. The poster takes a pump up approach to drawing in participants for the contest."
        }
    
    , {
        "title": "Adventure Poster"
        , "type": "Des"
        , "view": "assets/image/AdventurePoster.pdf"
        , "tab": "assets/image/postertab.jpg"
        , "pic1": "assets/image/adventure.jpg"
        , "pic2": "assets/image/adventure2.jpg"
        , "pic3": "assets/image/adventure3.jpg"
        , "desc": "Intended for poster format, this piece plays on the context of it's quote, making the font cut out appear as a window to the adventure which is literally out there. Included photography is original."
        }


    ];

$(document).ready(function () {

    init();
});

function init() {

    //$.getJSON( "js/projects.json", function( data ) {
    //galleryInfo=data.projects;
    $('a[href^="about.html"]').click(function () {
        $('html, body').animate({
            scrollTop: $('#AboutSection').position().top
        }, 'slow');
    });

    runApp();
    //});

}

function runApp() {


    var li, $li, img, $img, $href, featured, $hover, div, $title, h1;
    $('.featured').hide();
    for (var i = 0; i < galleryInfo.length; i++) {

        $li = $(document.createElement('li'));
        $li.css('position', 'relative');
        $img = $(document.createElement('img'));
        $li.append($img);
        $li.data('num', i);
        $img.attr('src', galleryInfo[i].tab);
        $img.attr('width', '325');
        $img.attr('height', '325');
        //$img.attr('class', 'col-md-4');
        $li.append($img);
        $hover = $(document.createElement('div'));
        $hover.attr('class', 'info_bar');
        $hover.css('position', 'absolute');
        $hover.css('top', '0');
        $hover.css('left', '0');
        $title = $(document.createElement('h2'));
        $title.text(galleryInfo[i].title);
        $hover.append($title);

        $li.append($hover);
        $li.css('z-index', 0);
        $hover.hide();
        $li.hover(getInfo, leaveInfo);
        //$li.mouseleave(function(){$hover.hide();});
        $li.click(runFeatured);
        $('#galleryspace').append($li);
    }
}

function getInfo() {
    var hoverblurb = $(this).children('.info_bar');
    //$hoverblurb.css('z-index',0) ;
    hoverblurb.show();
}

function leaveInfo() {
    var hoverblurb = $(this).children('.info_bar');
    hoverblurb.hide();
}

function runFeatured() {

    var $featured, $featuredImg, $featuredDesc, $featuredTitle, $featuredLink, $p;

    var current = $(this).data('num');
    $featured = $('.featured');
    $featured.show();
    $featuredImg = $('#featuredImg');
    $featuredImg2 = $('#featuredImg2');
    $featuredImg3 = $('#featuredImg3');
    $featuredTitle = $('#featuredTitle');
    $featuredDesc = $('#featuredDesc');
    $featuredLink = $('#featuredLink');
    $featuredImg.attr('src', galleryInfo[current].pic1);
    $featuredImg2.attr('src', galleryInfo[current].pic2);
    $featuredImg3.attr('src', galleryInfo[current].pic3);
    $featuredImg.attr('alt', galleryInfo[current].title);
    $featuredImg2.attr('alt', galleryInfo[current].title);
    $featuredImg3.attr('alt', galleryInfo[current].title);
    $featuredTitle.text(galleryInfo[current].title);
    $featuredDesc.text(galleryInfo[current].desc);
    if (galleryInfo[current].view != null) {
        $featuredLink.attr('href', galleryInfo[current].view);
        $featuredLink.css('color', 'blue');
        $featuredLink.show();
    }
    if (galleryInfo[current].view == null) {
        $featuredLink.hide();
    }

    $('html, body').animate({
        scrollTop: 0
    }, 'slow');

}

$(window).on("scroll touchmove", function () {
    $('header').toggleClass('tiny', $(document).scrollTop() > 0);
    // $('#myCarousel').toggleClass('upper', $(document).scrollTop() > 0);
});