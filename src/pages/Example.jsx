import React from 'react';

import { Card, H3, Divider } from 'ui-neumorphism';
import { FitnessApp } from '../examples';

class Example extends React.Component {
  render() {
    const { dark } = this.props;
    return (
        // <Card flat className="my-12">
          <FitnessApp dark={dark} />
        // <Divider dense />
    );
  }
}

export default Example;
