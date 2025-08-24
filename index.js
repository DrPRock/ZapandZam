// Get all taglines and hide them

    const taglines = document.querySelectorAll('.tagline');
    taglines.forEach(tagline => {
      tagline.style.display = 'none';
});

// Pick a random tagline and show it

    const randomIndex = Math.floor(Math.random() * taglines.length);
    taglines[randomIndex].style.display = 'block';

// Parallax effect
window.addEventListener("scroll", function() {
  var y = window.scrollY;
  document.querySelector(".css-slideshow").style.transform = "translateY(" + y * -0.5 + "px)";
});

// The JavaScript part to create the seamless loop
  document.addEventListener("DOMContentLoaded", function() {
    const scroller = document.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scroller.children);

  // This is the key part: we clone the items and append them to the scroller.
  // This creates a duplicated list of items, which is what allows the seamless loop.
  // The CSS animation scrolls the first half, and by the time it's done,
  // the second (cloned) half is in place, and the animation resets.
    scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        // We add an attribute to the cloned items to hide them from screen readers.
        duplicatedItem.setAttribute("aria-hidden", true);
        scroller.appendChild(duplicatedItem);
    });
});

