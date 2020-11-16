import "./CustomButton.css";

const CustomButton = ({
  children,
  isGitHubSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
        isGitHubSignIn ? 'github-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;