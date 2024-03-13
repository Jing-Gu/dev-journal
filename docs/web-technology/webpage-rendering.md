# Web page rendering
## How do browsers render a web page

1. Get resources - including html, css, images etc
2. Parse HTML and create a DOM tree - The DOM is formed from the HTML that is received from a server.
3. Create **Render tree** from DOM tree - Render tree reflects the DOM structure except for invisible elements `display:none;`
4. Layout - For each render tree element, its coordinates are calculated, which is called "layout".
5. Painting - display all

## Repaint

When changing element styles which don't affect the element's position on a page (such as background-color, border-color, visibility), the browser just repaints the element again with the new styles applied

## Reflow

When the changes affect document contents or structure, or element position, a reflow (or relayout) happens. These changes are usually triggered by:

- DOM manipulation (element addition, deletion, altering, or changing element order);
- Contents changes, including text changes in form fields;
- Calculation or altering of CSS properties;
- Adding or removing style sheets;
- Changing the "class" attribute;
- Browser window manipulation (resizing, scrolling);
- Pseudo-class activation (:hover).