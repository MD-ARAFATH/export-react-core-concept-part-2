import PropTypes from "prop-types";

export default function Friend({ friend }) {
  if (!friend) return null;
  const { name, email } = friend;
  return (
    <div className="box">
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
    </div>
  );
}

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
