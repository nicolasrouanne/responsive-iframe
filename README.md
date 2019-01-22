# Responsive `<iframe />` 🖼

## Description
Showcase project embedding an `<iframe />` displayed in full height in host document.

`<iframe />` is the way to go when **embedding your website into any non third-party website** with no configuration and while sandboxing style 🎨and security 🔒.
However, building **a responsive _iframe_** 💻📱is pretty tricky. Especially **_displaying the `iframe` in full height_** in the host document.

## Explanation
1. The **`<iframe />` window calculates its _height_ 📏 and sends a message 📫(with a _specific syntax_) to its _parent_** using the [`postMessage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API.
2. The parent **has a listener** 👂to this message 📬 and dynamically sets the height of the `<iframe />`

## Demo
This project is hosted on [**CodeSandbox**](https://codesandbox.io/s/github/nicolasrouanne/responsive-iframe).

## Source
This project is inspired 💡& "forked" 🌱from the [_Making IFrames Responsive_](https://bitsofco.de/iframe-responsive/) article from _bitsofcode_ and the related [source code](https://github.com/ireade/demo.bitsofco.de/tree/gh-pages/responsive-iframe).
