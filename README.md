alm-page-extensions-admin
=========================

This is a React-based version of the extensions admin page. It also conforms to
the contract laid out by the[Core Page Framework](https://github.com/RallySoftware/alm-viewport/tree/master/src/pageframework).
The page makes use of the following open source tools from facebook:
* [React](http://facebook.github.io/react/) for view rendering
* [Flux](http://facebook.github.io/flux/) for one-directional data flow architecture
* [Jest](http://facebook.github.io/jest/) for _painless_ unit testing


## Development
```
cd ~/projects
git clone https://github.com/ggamble-rally/alm-page-extensions-admin.git
npm install
npm link
```
Then in ```~/projects/alm-webapp```
```
npm link alm-page-extensions-admin
grunt webpack:viewport
```
The above commands will give ```alm-webapp``` the latest changes to this repository.

> ### Note
> - ```grunt webpack:viewport``` does not watch the files in this repo. you can use ```grunt webpack-dev-server``` for that.

## Testing
- You'll probably want to have the Jest CLI installed globally - run ```npm install -g jest-cli```
- Run all tests with ```jest```
- Run individual specs with ```jest <specName>```

> ### Notes
> - Jest searches for tests in ```__tests__``` directories (should be a sibling of production code).
> - The argument to the jest command is a regular expression, so ... yeah, keep that in mind.

## Deployment
When happy with the changes:
- Commit to alm-page-iteration-status,
- unlink the project using ```npm unlink alm-page-iteration-status``` in alm-webapp (if you're done developing),
- submit a pull request to this repository,
- update alm-page-iteration-staus dependency in alm-webapp/package.json and finally,
- submit a pull request to alm with the above change

#### Happy Coding!
