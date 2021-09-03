# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: [Add solution URL here](https://github.com/Briancarlo24/FAQ-accordion-card.git)
- Live Site URL: [Add live site URL here](https://briancarlo24.github.io/FAQ-accordion-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SCSS
- Flexbox

### What I learned

Layering and Layouting multiple images. I Learned about how to properly position the images using the css position property. Learning to cut out the edge of the image using Overflow. Also it is my first time building a responsive FAQ challenge and I had to do it on javascript to make the content of the FAQ appear. It was very challenging at first. I could have used an alternative HTML Element like <detailes> <summary> but i didn't know about it at first.

To see how you can add code snippets, see below:

```html
<div class="image-container col">
  <div class="cut-image-overflow">
    <img class="shadow-image" src="images/bg-pattern-desktop.svg" alt="" />
    <img
      class="shadow-image-mobile"
      src="images/bg-pattern-mobile.svg"
      alt=""
    />
    <img
      class="hero-image"
      src="images/illustration-woman-online-desktop.svg"
      alt=""
    />
    <img
      class="hero-image-mobile"
      src="images/illustration-woman-online-mobile.svg"
      alt=""
    />
  </div>
  <img class="box-image" src="images/illustration-box-desktop.svg" alt="" />
</div>
```

```css
.col {
        flex: 1;
        min-width: 245px;
      }

      .image-container {
        position: relative;
        margin: 40px 0;
        height: 120px;

        .shadow-image-mobile {
          display: block;
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%, -45%);
          width: 215px;
        }

        .cut-image-overflow {
          position: relative;
          overflow: visible;
          padding: 0;
          width: 95%;

          .hero-image-mobile {
            display: block;
            margin: 0 auto;
            padding: 0;
            z-index: 50;
            transform: translate(-12px, -61%);
            width: 240px;
          }
        }
      }
}
```

```js
linkBoxes.forEach((items, index) => {
  items.addEventListener("click", function () {
    rotateArrow(index);
  });
});
};
```

### Continued development

I would like to master the image positioning. How to properly make the image still even when the dimension are resize. Also make the image grow and shrink as I change the dimension of the section.

### Useful resources

-w3cschools.com
-stackoverflow.com
-somerandomblogs about using flexbox property because i kept forgetting it
-google.com

## Author

- Website - [Brian Carlo Birondo](https://github.com/Briancarlo24)
- Frontend Mentor - [@Briancarlo24](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

As always, thank you google for everything. Also I would like to thank those people who give time to comment on the finish product of this challenge. They give really good options on how to do things differently. Also, I just enjoy reading their comments overall. Very nice community indeed.
