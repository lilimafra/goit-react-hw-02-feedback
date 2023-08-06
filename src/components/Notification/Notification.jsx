import { TextNotify } from './Notification.syled';
import PropTypes from 'prop-types'; // ES6

export const Notification = ({ message }) => {
  return <TextNotify>{message}</TextNotify>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
