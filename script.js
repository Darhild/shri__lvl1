'use strict';

(function() {
  const onoffswitch = document.querySelector(".onoffswitch"),
        themeBlocks = new Set([...document.querySelectorAll(".theme_color_project-default"), ...document.querySelectorAll(".theme_color_project-inverse"), ...document.querySelectorAll(".image")]);

  document.addEventListener('click', function(e) {
    const target = e.target;

    if(target.closest(".onoffswitch")) {

      themeBlocks.forEach((block) => {
        block.classList.toggle("theme_color_project-inverse");
        block.classList.toggle("theme_color_project-default");
      });
    }

    if(target.closest(".e-accordion__short")) {

      target.closest(".e-accordion__short").nextElementSibling.classList.toggle("e-accordion__more");

    }

  });

})();
