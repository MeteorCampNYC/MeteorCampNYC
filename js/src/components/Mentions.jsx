import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import _ from 'lodash';

class Mentions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentions: null,
      visibleTweets: null,
    };
  }

  componentDidMount() {
    $.get('https://rea2jzeoh4.execute-api.us-east-1.amazonaws.com/prd/get-mention', (res) => {
      const allTweets =  res.response.statuses.map((tweet, i) => {
        const twitterUrl = 'https://www.twitter.com/' + tweet.user.screen_name;
        return (
          <div className="col-md-4 col-sm-4 col-xs-12" key={i}>
            <div className="panel" style={{ height: '240px' }}>
              <div className="panel-body">
                <a href={twitterUrl} target="_blank">
                  <h4>{tweet.user.screen_name}</h4>
                </a>
                <a href={twitterUrl} target="_blank">
                  <img src={tweet.user.profile_image_url}
                    height="60"
                    className="img-circle"/>
                </a>
                <br/>
                <br/>
                <p>{tweet.text}</p>
              </div>
            </div>
          </div>
        );
      });

      this.setState({
        allTweets,
        visibleTweets: this.getNewBatchOfTweets(allTweets),
      });
    });

    setInterval(() => this.setState({
      visibleTweets: this.getNewBatchOfTweets(this.state.allTweets),
    }), 8000);
  }

  getNewBatchOfTweets(allTweets) {
    let selectedPanels = [];
    _.times(3, () => {
      selectedPanels.push(_.sample(allTweets));
    });

    return selectedPanels;
  }

  render() {
    const tweets = this.state.visibleTweets ? this.state.visibleTweets : null;
    return (
      <div className="container" style={{
          'padding-right': '1rem',
          'padding-left': '1rem',
          'margin-right': 'auto',
          'margin-left': 'auto',
        }}>
        <TransitionGroup
          transitionName="tweet"
          transitionAppear={true}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {tweets}
        </TransitionGroup>
      </div>
    );
  }
}

export default Mentions;
