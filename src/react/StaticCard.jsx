/** @jsxImportSource react */
import React from 'react';

export default function ReactStaticCard({ title, message }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{message}</p>
      <small>Rendered statically with React</small>
    </div>
  );
}