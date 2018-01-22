window.addEventListener("load", function () {

    function getCoords(elem) {

        var box;
        box = elem.getBoundingClientRect();

        var body = document.body;
        var docEl = document.documentElement;

        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;

        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;

        return {
            top:Math.round(top),
            left:Math.round(left)
        };
    }


    var menu_li = document.getElementById("menu_list");
    var menu_img = document.getElementById("mimg");

    menu_li.addEventListener("click", fxClick, false);
    menu_img.addEventListener("click", imgClick, false);

        function fxClick(e) {

            if (e.target !== e.currentTarget) {

                var section = document.getElementById(e.target.id.slice(0, 4) + "_link");

                var toY = getCoords(section).top;

                TweenLite.to(window, 1.02, {
                    scrollTo : {
                        y : toY
                    }
                });

            }
        }

    function imgClick(e) {

        if (e.target == e.currentTarget) {

            var section = document.getElementById(e.target.id.slice(0, 4) + "_link");

            var toY = getCoords(section).top;

            TweenLite.to(window, 1.02, {
                scrollTo : {
                    y : toY
                }
            });

        }
    }

    var about_button = document.getElementById("abou_li");
    about_button.addEventListener("click", buttonClick, false);

    function buttonClick(e) {

        if (e.target == e.currentTarget) {

            var section = document.getElementById(e.target.id.slice(0, 7) + "nk");

            var toY = getCoords(section).top;

            TweenLite.to(window, 1.02, {
                scrollTo : {
                    y : toY
                }
            });

        }
    }



    var category = document.querySelectorAll(".projects_category")[0];
    category.addEventListener("click", catClick, false);

    function catClick(e) {

        if (e.target !== e.currentTarget) {

        var all_projects = document.getElementsByClassName("project");

            var all = Array.prototype.concat.apply([], all_projects);

            var targ = e.target;
            switch (targ.id)    {

               case "all_category" :

                   all.forEach(function (x, i, arr) {

                           x.classList.remove("hide");

                   });

                   TweenLite.to(e.target, 0.1, {
                       css : {
                           borderBottom: "3px solid #00D9FF"

                       }
                   });

                   var arr = e.currentTarget.children;
                   var arrlength = arr.length;

                   for (var i = 0; i < arrlength; i++)    {

                       if(arr[i]!== targ)   {

                           TweenLite.to(arr[i], 0, {
                               css : {
                                   borderBottom: "3px solid transparent"

                               }
                           });
                       }

                   }
                   break;


               case "python_app" :
               case "python_sites" :
               case "wordpress_sites" :

                   all.forEach(function (x, i, arr) {

                       if (!x.classList.contains("projects_" + targ.id))   {
                           x.classList.add("hide");
                       }
                       else {
                           x.classList.remove("hide");
                       }
                   });

                   TweenLite.to(e.target, 0.1, {
                       css : {
                           borderBottom: "3px solid #00D9FF"

                       }
                   });

                    var arr = e.currentTarget.children;
                    var arrlength = arr.length;

                     for (var i = 0; i < arrlength; i++)    {

                        if(arr[i]!== targ)   {

                            TweenLite.to(arr[i], 0, {
                                css : {
                                    borderBottom: "3px solid transparent"

                                }
                            });
                        }

                    }
                   break;

                 }

             }
        }




    window.addEventListener("scroll", scrollEffect, false);

    function scrollEffect(e) {

        var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop,
            windHeight = window.innerHeight,
            sections = document.querySelectorAll("body article"),
            buttons = document.querySelectorAll(".menu ul li");



    for (var j = 0, sectionTop; j < buttons.length; j++) {

        sectionTop = sections[j+1].getBoundingClientRect().top;

        buttons[j].style.color = (

            sectionTop >=  - (1 / 2 * windHeight) &&  sectionTop < 1 / 4 * windHeight) ? "#00D9FF" : null;

    }


    }



    var nav = document.querySelectorAll("nav")[0];
    console.log(nav);
    nav.addEventListener("click", navClick, false);

    var nav_button = document.getElementsByClassName("menu-toggle")[0];
    var nav_list = document.getElementById("menu_list_mini");

    function navClick(e) {

        if (e.target !== e.currentTarget) {

          if ((e.target == nav_button)&&(!nav_button.classList.contains("button_x"))) {
             nav_list.style.cssText = "display : block";
             nav_button.classList.add("button_x")
          }

            else if ((e.target == nav_button)&&(nav_button.classList.contains("button_x"))) {
              nav_list.style.cssText = "display : none";
              nav_button.classList.remove("button_x")
          }


        }
    }

}, false);



