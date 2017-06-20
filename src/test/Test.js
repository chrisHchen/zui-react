import React from 'react';
import Button from '../Button/Button';

export default function Hello() {
  return (
    <div>
      <Button />
      <Button type="info" />
      <Button type="success" />
      <Button type="warning" />
      <Button type="danger" />
      <Button type="text" />
      <Button disabled={true} />
    </div>
  );
}
