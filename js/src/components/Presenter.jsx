import React from 'react';
import PresenterSocialLinks from './PresenterSocialLinks.jsx';

class Presenter extends React.Component {
  getSocialLinks() {
    return (
      <PresenterSocialLinks socialLinks={this.props.presenter.socialLinks}/>
    );
  }
  render() {
    const {
      name,
      headshot,
      organization,
      bio,
    } = this.props.presenter;

    return (
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 team">
        <img className="img-circle" src={headshot} height="90" width="90" />
        <h4>{name}</h4>
        <h5>
          <i>{organization}</i>
        </h5>
        <p>{bio.short.length > 1 ? bio.short : 'Description to follow'}</p>
        <p>
          {this.getSocialLinks()}
        </p>
      </div>
    );
  }
}

export default Presenter;
