import React from 'react';
import Presenter from './Presenter.jsx';

import presentersJson from '../../../etc/presenters.json';

class Presenters extends React.Component {
  render() {
    const presenters = presentersJson.meteorcamp.map((presenter, i) => {
      if (presenter.confirmed) {
        return (
          <Presenter key={i} presenter={presenter}/>
        );
      }
    });

    return (
      <div>
        {presenters}
      </div>
    );
  }
}

export default Presenters;
