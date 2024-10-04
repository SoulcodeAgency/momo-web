# Improvements

Next.js and Uniform project setup

This covers all refined architecture and helpers, regarding the project work for this kind of setup.

## DONE

### CanvasProps

A Generic, which helps to define the Component props for Canvas components.
See [text](lib/typeHelpers.ts).

## TODO

Ideas or things to check and do still:

* Should we do default export?
* Should we always use functions or const ? (functions can be default exported in 1 line)
* Should we name all canvas components with "Canvas" prefix? Which could help identifying them and handling imports like "Card" component.
  (Canvas `Card` component which uses our `Card` component, which uses shadcn `Card` component)
* UniformComponentResolver
  Can we improve this / automate this somehow, like vue did it.
