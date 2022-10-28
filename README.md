# Reproduction steps

1. Clone this repository
2. Run `yarn install`
3. Run `yarn build`
4. In Firefox, install this as a temporary add-on (go to `about:debugging#/runtime/this-firefox`, click "Load Temporary Add-on..." in the top right, select the `dist/`-dir)
5. Click "Inspect" on the "Parcel Bug Web Ext Polyfill" add-on, you should see
   an error message like

   > Uncaught Error: Cannot find module 'e9CmB'

   (The module name may vary)


This error is not browser dependent and also happens in Chrome.

# Workaround

Instead of running `yarn build`, run `yarn start --no-hmr`. This creates a
bundle that works, even without the dev server running in the background.
