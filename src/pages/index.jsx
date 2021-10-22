import React from 'react';
import BaseLayout from '../components/BaseLayout';
import Card from '../components/Card';
import '../styles/main.scss';

export default function Home() {
  return (
    <div className="Home">
      <BaseLayout>
        <h1>Hello world!</h1>
        <Card
          img="https://image.shutterstock.com/image-vector/image-preview-icon-picture-placeholder-260nw-1716511726.jpg"
          title="Teste de prop"
          desc="prop test"
        />
      </BaseLayout>
    </div>
  );
}
