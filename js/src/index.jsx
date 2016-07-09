import React from 'react';
import {render} from 'react-dom';

import Presenters from './components/Presenters.jsx';
import Logistics from './components/Logistics.jsx';
import Mentions from './components/Mentions.jsx';

render(<Presenters />, document.getElementById('presenters-app'));
render(<Logistics />, document.getElementById('logistics-app'));
render(<Mentions />, document.getElementById('mentions-app'));
