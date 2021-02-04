# worldwidewidget

## Parcel
Most of the weirdness or difference in this repo will come from the fast that we're using **Parcel** insted of webpack. It's not a bad idea to [read the docs](https://v2.parceljs.org/getting-started/webapp/) if you can skim over them.

Note that we're using v2 of Parcel, make sure you have the right docs.

## Dev setup
Because we are using parcel as our bundler the setup is a little bit different than normal.

1. Don't forget to `npm install`
2. `npm run dev` will launch a development server running at `localhost:1234`. It is configured to forward the requests to the `/api/` path to the server.
3. You can `npm run dev:watch` to get behaviour more similar to our other projects where node will serve our application at port 3000

<sup>please use your linter please i beg of you</sup>

## Using CSS modules

Define style for a particular component in a file named the same as the component it is for.

`styles/myComponent.module.css`
```css
.heading {
  color: red;
}
```

Import that into any component with the name `style`. This imported version will be specific to that component. i.e. `myComponent.module.css` and `myOtherComponent.module.css` can both have a rule for .heading, but they won't conflict when used in different components.

`components/MyComponent.jsx`
```jsx
  import style from '../styles/myComponent.module.css'

  export default function MyComponent () {

    return (
      <h2 className={style.heading}>Component</h2>
    )
  }
```

## Reused CSS
### Global
CSS for the whole app can be defined in `styles/global.css`. Generally avoid using this for classes, but it's good for global tags like `<h1>` or even `<html>` or `<body>`

### Commonly used classes
Write these into `utils.module.css` and import them into each file where they are used.

## Assets
Consider running image assets through our bundle as well. It's worth looking at the [docs for the image loader included with parcel](https://v2.parceljs.org/recipes/image/) as there are some transformation options that might be useful.

`myImage.jsx`
```jsx
  import imageUrl from "url:../images/image.jpeg?as=webp&width=250";
  ...
  return (
    <img src={imageUrl} />
  )
```

Note: for M1 macs we will have to install a dependancy for the images processor locally using `brew install vips`

For other assets or static paths we can modify `.proxyrc` to add more paths besides `/api/` to forward to node, and serve with a static path.

**Avoid putting files in the dist folder** like we do with the public folder in our other projects. These files will not be served by `parcel serve` which is referenced in our `npm run dev` command.