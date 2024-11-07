# Improvements

Next.js and Uniform project setup

This covers all refined architecture and helpers, regarding the project work for this kind of setup.

## TODO

Ideas and topics in progress:

- Inline editing looks like doesn't support modifying the `entry`, which is linked over the resource or loaded over a `loop`-ing resource.
- Should we name all _canvas_ components with "Canvas" prefix? Which could help identifying them and handling imports like "Card" component.

  - ⌛Trial in progress... Looks like fine
  - 🧙 Issue was related to: (Canvas `Card` component which uses our `Card` component/module, which uses shadcn's `Card` component)

- **UniformComponentResolver**  
  Can we improve / automate this somehow?!:
  - ✅ Remove need of defining mappers (maybe keep optional)
  - ✅ Remove the need of having an index file and a component file
  - ✅ Remove the need of defining the components in the component resolver.
  - 🤩 Share / contribute idea / code with Uniform?
    - Uniform examples sometimes do have HOC components (like `withoutContainer`) and therefore also changes in the mapper.
      - My suggestion would be, to rather solved this issue with introducing just a separate "component"-file doing the HOC
      - or keeping it possible to still export mappings.

## DONE

### Use function definition

Should we always use functions or const?

- `export function abc(){ ... }`
- ✅ functions can be default exported as well (`export default abc`)
- ✅ or even on the same line (⚠️this of course will remove the named export) (`export default function abc()`)
- ✅ less code to write, forces imports to use correct name always

### Canvas components - use NAMED exports

Should we do default exports?

- ✅ If component rename is required, it can still be done on named export, this way, the component name is still always reachable over a global search (`Card as SpecialFeature`)
- ❌ default import would allow any name - easier for typing wrong name and therefore possibly making it harder to maintain

### CanvasProps

A Generic, which helps to define the Component props for Canvas components.
See [text](lib/typeHelpers.ts).

### Async props helper

- ✅ `lib\typeHelpers.ts` holds some generic type helper and props function for simpler handling of async props on async server components. Simpler resolving and type handling options.

## Future

Ideas for the far future

- shadcn install "template" (json) for the base setup
- Introduce the starter kit components
- Check Theming
