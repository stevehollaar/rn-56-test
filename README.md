# React Native 0.56.0 test project

This project was created with `react-native init` to test some remaining issues with jest tests.

- Clone this repo
- Change to repo directory
- `yarn`
- `yarn test`

*Expected behavior*:

Both test files pass, as they do in 0.55.4.

*Actual behavior*:

`UtilsTests.js` passes.
`AppTests.js` fails with an invalid token error in Platform.ios.js.

