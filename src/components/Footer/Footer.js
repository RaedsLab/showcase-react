import React from 'react';
import Typography from '@material-ui/core/Typography';

const Footer = props => {
  return (
    <div className={props.classes.footer}>
      <Typography variant="caption" color="inherit">
        Made with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>{' '}
        in Nice, France, by <a href="https://raed.it/">Raed</a>.
      </Typography>
    </div>
  );
};
export default Footer;
