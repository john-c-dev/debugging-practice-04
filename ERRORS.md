# List of Errors and Hints

This document contains all the errors intentionally introduced into the Product Catalog website along with hints on how to fix them. Try to find and fix the errors on your own before looking at this list.

## HTML Errors

1. **Missing closing </head> tag**
   - Hint: The opening `<head>` tag needs to be properly closed.

2. **Unclosed span element in the cart count**
   - Hint: Check the cart count span element for proper closing tags.

3. **Unclosed div elements in the controls container**
   - Hint: Each opening `<div>` needs a corresponding closing `</div>` tag.

4. **Missing closing tag for sort-container and controls-container divs**
   - Hint: Check the nesting and closing of the container divs.

## CSS Errors

1. **Missing closing bracket for background-color property**
   - Hint: Check the `body` selector's properties.

2. **Missing closing bracket for `.cart-icon`**
   - Hint: CSS rules need opening and closing curly braces.

3. **Missing closing parenthesis in transform property**
   - Hint: Check the `:hover` effect for the product card.

## JavaScript Errors

1. **Wrong property name in product card creation**
   - Hint: It's `className` not `classname`.

2. **Assignment instead of comparison in filter function**
   - Hint: Look at the filter condition; `=` is for assignment, `===` is for comparison.

3. **Missing semicolon in sort function**
   - Hint: Check the sort function for missing semicolons.

4. **Event listeners not attached properly**
   - Hint: Ensure that all event listeners are added after the DOM elements exist.

## How to Debug

1. **For HTML errors:**
   - Use the browser's developer tools to inspect the DOM
   - Look for elements highlighted in red or warnings about unclosed tags
   - Check for proper nesting of elements

2. **For CSS errors:**
   - Check the browser's developer tools for styles that aren't being applied
   - Look for warnings in the console about CSS parsing errors
   - Use a CSS validator

3. **For JavaScript errors:**
   - Check the browser console for error messages
   - Add console.log statements to trace the flow of execution
   - Use the browser's debugger to set breakpoints and step through the code

Remember that most modern browsers have excellent debugging tools built in. Press F12 or right-click and select "Inspect" to open the developer tools.
