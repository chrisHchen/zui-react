import React from 'react';
import './test.css';

const a = 1;
const b = ['a', 'b'];

export default function Hello() {
  return (
    <h1 className="test-wrap" title={a} name={b}>
      <span className="test-inner">Hello World</span>
    </h1>
  );
}
