---
sidebar_position: 2
---

# CSS Styling

## grid layout
This is an all-purpose grid layout without media query, let the browser decides the layout based on the available space.

```css
grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
```

The `repeat()` function is to repeat a certain pattern, such as `auto-fit`, which instructs the browser to automatically adjust the number of columns based on the available space.

The `minmax()` function is particularly useful in responsive layouts, as it allows columns to grow and shrink dynamically based on the viewport size. The first parameter, `min(100%, 200px)`, sets the minimum size of each column to be the maximum of 100% of the container width or 200px. This means that each column will be at least 200px wide, but they can grow larger if there's more space available. The second parameter, `1fr`, instructs the browser to distribute any remaining space among the columns evenly, with each column taking up an equal share of the available space.

This flexible layout can be extremely useful when you have a tons of cards and you want them to flow like flex-wrap. Cards’ contents may vary, but they will all have the same height in the grid. This is because the height of the grid rows will be determined by the content of the tallest item in each row.

[See the codepen example](https://codepen.io/jing-gu/pen/RwOwMNJ)