# hello-animation-transformation

This is my assignment for **Module 3 Design - UI Accessibility**

- Go to the [guide](https://io.tskoli.dev/guides/5f1321b0b279dc27c467ca67)
- Go to my [website]()

## What did I do?

I re-created a full-screen **loading animation** from the [Cygni template](http://preview.themeforest.net/item/cygni-interactive-portfolio-wordpress-theme/full_screen_preview/27917817?_ga=2.164354936.613568388.1635071376-1708789936.1610465670).

## Animated elements on their own

For this I created animated lines:

- **Line 1** (_on the left_) and **line 3** (_on the right_) are animated with **@keyframes "from ... to"** -> "_The animation is created by gradually changing from one set of CSS styles to another._"

```CSS
@keyframes animationName {
  from {
    height: 0%;
  }
  to {
    height: 100%;
  }
}
```

- **Line 2** (_in the middle_) is animated with JS in order to be a **progression bar**:

```javascript
function move() {
  var elem = document.getElementById("myBar");
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
    }
  }
}
```

## Animated elements upon interaction

## Resources

- [CSS @keyframes Rule](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp)
- [W3.CSS Progress Bars](https://www.w3schools.com/w3css/w3css_progressbar.asp)
- [xx](xx)
