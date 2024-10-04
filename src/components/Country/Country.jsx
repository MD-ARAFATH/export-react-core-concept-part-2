import "./Country.css";
import PropTypes from "prop-types";
export default function Country({ country }) {
  if (!country) return null;
  const { name, email } = country;
  return (
    <div className="country">
      <h2>Name: {name}</h2>
      <p>Email:{email}</p>
    </div>
  );
}

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
