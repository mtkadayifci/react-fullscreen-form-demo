import React from 'react';
import FForm from './containers/FForm/FForm';
import Frame from './components/Frames/Frame/Frame';

const App = () => (
  <FForm title="Fullscreen Form React Demo">
    <Frame title="What's your name?">
      <input type="string" required />
    </Frame>
    <Frame title="What's your email address?" show={false}>
      <input type="email" placeholder="mtkadayifci@gmail.com" required />
    </Frame>
    <Frame title="What's your phone number?">
      <input type="phone" required />
    </Frame>
    <Frame title="How old are you?">
      <input type="number" required />
    </Frame>
  </FForm>
);

export default App;
