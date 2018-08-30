# React Test Course from Level Up Tuts


## 9 ~ 10 Testing with testid & use fireEvent
Use `react-testing-library`
It has `getByTestId`.

So you can use
```js
<button onClick={this.handleOnClick} data-testid="test-button">
```
and grab by 
```js
wrapper.getByTestId('test-button');
```

- interesting way of doing setState
```js
handleOnClick = () => {
  this.setState(prevState => ({
    count: prevState.count + 1,
  }));
};
```


---
side note
---
- `npm install --save-dev @types/jest` to enable jest auto complete
- at .eslintrc add `globals` to get rid of eslint error related to jest func
```js
rules: {
  'react/jsx-filename-extension': 0,
  'function-paren-newline': 0,
},
globals: {
  test: true,
  expect: true,
  afterEach: true,
},
```

