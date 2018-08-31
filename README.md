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
### 11 Integration Tests in React & Cleanup
- create NewMovie.js & MovieForm.js
- Insert MovieForm.js into NewMovie
```js
<NewMovie>
  ...
  <MovieForm />
  ...
</NewMovie>
```
- just rendering NewMovie will render MovieForm too ~
```js
const wrapper = render(<NewMovie />);
```
### 12 Snapshot Testing
- get container from wrapper

You should do snapshot testing for something that will not change frequently
```js
expect(wrapper.container).toMatchSnapshot();
```

### 13 Spying and Mocking
... still don't get why spying and mocking is useful ...

- define wrapper with prop passing down
```js
const wrapper = render(<MovieForm handleSubmit={handleSubmit} />);
```

- define mock? spying? function on top 
```js
const handleSubmit = jest.fn();
```

then you can test function have been called with how many times
with `toHaveBeenCalledTimes`
```js
expect(handleSubmit).toHaveBeenCalledTimes(1);
```

### 14 - Form Events With Controlled Inputs
- Now I understand why jest.fn() is useful.
- getAttribute to get props value at html
```js
const handleSubmit = jest.fn();
const wrapper = render(<MovieForm handleSubmit={handleSubmit} />);

const submitBtn = wrapper.getByTestId(testids.SUBMIT_BUTTON_AT_MOVIE_FORM);
const input = wrapper.getByTestId(testids.INPUT_AT_MOVIE_FORM);

fireEvent.change(input, { target: { value: 'hi' } });
fireEvent.click(submitBtn);

expect(input.getAttribute('value')).toBe('hi');
expect(handleSubmit).toHaveBeenCalledWith('hi');
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

