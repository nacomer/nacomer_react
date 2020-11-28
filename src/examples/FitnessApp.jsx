import React from 'react';

import Icon from '@mdi/react';
import {
  mdiRun,
  mdiYoga,
  mdiPlus,
  mdiHome,
  mdiBell,
  mdiTicket,
  mdiAccount,
  mdiArmFlex,
  mdiDumbbell,
  mdiChartLine,
  mdiChevronRight,
} from '@mdi/js';

import {
  H4,
  H5,
  H6,
  Card,
  Body2,
  Caption,
  Subtitle2,
  IconButton,
  withResize,
  ToggleButton,
  ProgressCircular,
} from 'ui-neumorphism';

class FitnessApp extends React.Component {
  render() {
    const { dark, size } = this.props;
    return (
      <Card flat dark={dark} className="fitness-app-container">
          <Card
            flat
            width={300}
            height={600}
            className={`fitness-app ${
              size === 'xs' ? 'fitness-app--small' : ''
            } overflow-hidden`}
          >
            <H4 style={{ fontWeight: '500', marginTop: '8px' }}>Nacomer</H4>
            <H6 style={{ margin: '24px 0px 16px 0px' }}></H6>
            <Card rounded={false} elevation={2} style={{ padding: '16px' }}>
              
              <div
                style={{
                  display: 'flex',
                }}
              >
                <Card
                  outlined
                  dark={dark}
                  style={{ padding: '4px', width: '46px', height: '46px' }}
                >
                  <Icon path={mdiTicket} size={1.5} color="var(--primary)" />
                </Card>
                <Card
                  flat
                  dark={dark}
                  style={{ marginLeft: '12px', overflow: 'unset' }}
                >
                  <Subtitle2 style={{ margin: '0px 0px' }}>
                    Courses I attended
                  </Subtitle2>
                  <Card
                    flat
                    style={{
                      display: 'flex',
                      overflow: 'unset',
                      alignItems: 'center',
                    }}
                  >
                  </Card>
                </Card>
              </div>
            </Card>
          </Card>
      </Card>
    );
  }
}

export default withResize(FitnessApp);
