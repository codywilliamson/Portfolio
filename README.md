<!-- BEGIN README -->
<p align="center">
  <a href="https://yooneek.0kra.com/">
    <img alt="Yooneek" src="src/assets/logos/yooneekOrange.svg" width="160" />
  </a>
</p>

## What's inside?

A quick look at the top-level files and directories you'll see in this project.

    .
    ├── node_modules/
    ├── src/
    ├── static/
    ├── .prettierrc
    ├── .gitignore
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── resources.md
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

## Resources Useful to This Project

1. [Gatsby Image API](https://www.gatsbyjs.org/docs/gatsby-image/)
1. [Useful start to finish YT course](https://www.youtube.com/watch?v=8t0vNu2fCCM&feature=youtu.be)
1. [Filter GraphQl Queries Based On Frontmatter](https://dev.to/p0oker/using-graphql-queries-to-separate-pages-and-blog-posts-in-gatsby-1ke2)
1. [Conditonally show React Components](https://reactjs.org/docs/conditional-rendering.html)
1. [onClick functions](https://reactjs.org/docs/handling-events.html)
1. [onClick types of functions: note: inline](https://upmostly.com/tutorials/react-onclick-event-handling-with-examples#call-inline-function-onclick-event-handler)
1. [Styling Svg Strokes](https://css-tricks.com/svg-line-animation-works/)
1. [SVG optimizer -- Useful for manipulating large svgs](http://petercollingridge.appspot.com/svg-editor)
1. [dangerouslySetInnerHtml follows the syntax {{ __html: html }}](https://github.com/gatsbyjs/gatsby/issues/10510)
1. [building react image slider basis](https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4)

## Get Started

Clone the repo, install dependencies, start dev server

```shell
    git clone https://github.com/mindvolt/yooneek.git
    cd yooneek
    npm install
    npm run develop
```
At
```
  localhost:8000
```
is your development server.


&
```
  localhost:8000/___graphql
```
is your graphiql playground.

## Issues?

Some common, but not so common issues you might run across:

  * if it has been awhile since you've ran the project, you might have to run ```npm install``` to get going. Sometimes this will throw an ```ELIFECYCLE``` error and running ```gatsby clean``` might say command not found. 
  
  If this happens, your npm error message should tell you which plugin broke. For me, it was the sharp/ plugin. Remove this from your node_modules/ folder and reinstall. Then reinstall gatsby-cli. Voila, this should work!
    * If this didn't work, delete the repo and reclone.
 s
