// Component that renders error message.
const Error = ({ message }) => (
  message ? <div className="error">{message}</div> : null
);


export default Error;
