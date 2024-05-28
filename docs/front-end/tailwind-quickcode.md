---
sidebar_position: 1
---

# Tailwind Quickcode
## Not last child
```css
[&:not(:last-child)]
```

## Hover on the parent and change the child svg color
Use class `group` and `group-hover` to change fill on the svg, but do not give any fill on svg itself
```html
<li class="group">
  <a>
    <svg class="fill-pink-500 group-hover:fill-white" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M14.7095 15.8805L10.8295 12.0005L14.7095 8.12047C15.0995 7.73047 15.0995 7.10047 14.7095 6.71047C14.3195 6.32047 13.6895 6.32047 13.2995 6.71047L8.70945 11.3005C8.31945 11.6905 8.31945 12.3205 8.70945 12.7105L13.2995 17.3005C13.6895 17.6905 14.3195 17.6905 14.7095 17.3005C15.0895 16.9105 15.0995 16.2705 14.7095 15.8805Z" />
    </svg>
  </a>
</li>
```