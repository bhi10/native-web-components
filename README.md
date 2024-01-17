# `<my-element>`

- Custom web component built with JavaScript that represents a simple counter element.
- Automatically increments its counter value every second and shows on display.
- Clicking on the counter logs the current counter value.

## Installation

### NPM

You can install my-element using npm:

```shell
npm install native-web-components-1
```

Then, import it in your project:

```js
import "native-web-components-1";
```

### CDN

Include the following script tag in your HTML file to use my-element directly from a CDN:

```js
<script src="https://unpkg.com/native-web-components-1"></script>
```

## Usage

To use the `my-element` component, include the following script tag in your HTML file:

```html
<script type="module" src="path/native-web-components-1"></script>
```

Once the script is included, you can use the my-element tag in your HTML:

```html
<my-element initial-value="100"></my-element>
```

## Attributes

| Name            | Description                                        |
| --------------- | -------------------------------------------------- |
| `initial-value` | Specifies the initial counter value. Default is 0. |

## Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MyElement Example</title>
    <script src="https://unpkg.com/native-web-components-1"></script>
  </head>
  <body>
    <my-element initial-value="100"></my-element>
  </body>
</html>
```
