# Improvements

Next.js and Uniform project setup

This covers all refined architecture and helpers, regarding the project work for this kind of setup.

## TODO

Ideas and topics in progress, or to sync and share about:

* Should we do default export? Suggestion `NO` : Because it allows to use `any` Name when importing it, making it harder to identify or mess up the code base.
  * ✅ If rename is required, it can still be done on named export, this way, the component name is still always reachable over a global search (`Card as SpecialFeature`)
  * ❌ default import would allow any name - easier for typing wrong name and therefore possibly making it harder to maintain

* Should we always use functions or const?
  * `export function abc(){ ... }`
  * ✅ functions can be default exported as well (`export default abc`)
  * ✅ or even on the same line (⚠️this of course will remove the named export) (`export default function abc()`)
  * ✅ less code to write, forces imports to use correct name always

* Should we name all *canvas* components with "Canvas" prefix? Which could help identifying them and handling imports like "Card" component.
  * ⌛Trial in progress...
  * Issue was related to: (Canvas `Card` component which uses our `Card` component/module, which uses shadcn's `Card` component)

* **UniformComponentResolver**  
  Can we improve / automate this somehow?!:
  * ✅ Remove need of defining mappers (maybe keep optional)
  * ✅ Remove the need of having an index file and a component file
  * ✅ Remove the need of defining the components in the component resolver.
  * ❌ HMR seems to be broken with this now. Means developer needs to refresh the uniform page manually. 😥
  * Share / contribute idea / code with Uniform?
    * Uniform examples sometimes do have HOC components (like `withoutContainer`) and therefore also changes in the mapper.
      * My suggestion would be, to rather solved this issue with introducing just a separate "component"-file doing the HOC
      * or keeping it possible to still export mappings.

## DONE

### CanvasProps

A Generic, which helps to define the Component props for Canvas components.
See [text](lib/typeHelpers.ts).

## Future

Ideas for the far future

* shadcn install "template" (json) for the base setup