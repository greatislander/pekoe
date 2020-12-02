# Accordion

An accordion can be created from a containing element with at least one header. Here's an example:

```html
<div class="accordion">
    <h2>Your first accordion</h2>
    <p>Your first accordion should probably be an upright grand piano.</p>
</div>
```

This accordion can then be initialized with the following JavaScript:

```javascript
const accordion = new window.Pekoe.accordion('.accordion', {});
```

This will wrap the content between successive headers (in this case, `<h2>` elements) in a containing panel element and
hide the panel content. It will also create a button within each header which can be used to toggle the visibility of
the header's associated panel content.

The first parameter is required, and most take the form of a selector which will be used to identify accordion
containers. In this example, the selector is `.accordion`, so any elements with a class of `accordion` will be targeted
by the script.

The second parameter is optional. If provided, it must take the form of an object. The following properties can be provided:

| Name | Description | Type | Default |
| -----|-------------|------|---------|
| header | A selector which will be used to identify the accordion panel header elements. | string | `h2` |
| exclusive | Whether or not expanding a panel should collapse all others. | boolean | `false` |
| icon | An HTML snippet containing an icon image which will be appended to each panel control. SVG is recommended. | string\|boolean | `false` |
| onCreate | A callback function to be run when an accordion is created. The accordion element will be available within the function as `this.accordion`. | function | null |
| onExpand | A callback function to be run when an accordion panel is expanded. The header and panel elements will be available within the function as `this.header` and `this.panel`. | function\|null | null |
| onCollapse | A callback function to be run when an accordion panel is collapsed. The header and panel elements will be available within the function as `this.header` and `this.panel`. | function\|null | null |
