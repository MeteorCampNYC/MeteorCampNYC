import React from 'react';

class PresenterSocialLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socialLinks: this.parseSocialLinks()
    };
  }
  // return an array of socialLinks for current presenter
  parseSocialLinks() {
    let socialLinks = [];
    for (let key in this.props.socialLinks) {
      if (this.props.socialLinks[key].length > 1) {
        const socialLink = {
          type: key,
          url: this.props.socialLinks[key]
        };
        socialLinks.push(socialLink);
      }
    }
    return socialLinks;
  }
  // identify which fa icon should be used
  getIconClass(type) {
    switch (type) {
      case 'blog':
        return 'icon-pencil';
        break;
      case 'website':
        return 'fa fa-wpforms';
        break;
      case 'email':
        return 'fa fa-envelope';
        break;
      default:
        return `icon-${type}`;
    }
  }
  // get list of social link jsx elements
  getSocialLinks() {
    return this.state.socialLinks.map((socialLink, i) => {
      const href = socialLink.type === 'email' ? `mailto:${socialLink.url}` : socialLink.url;
      const iconClass = this.getIconClass(socialLink.type);

      return (
        <a key={i} target="_blank" href={href}>
          <i className={iconClass}></i>
        </a>
      );
    });
  }
  render() {
    return (
      <p>
        {this.getSocialLinks()}
      </p>
    );
  }
}

export default PresenterSocialLinks;
