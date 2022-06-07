import "./UI.css";

type ErrorHandlerComponentProps = {
  message?: string;
};

export const ErrorHandlerComponent = ({
  message,
}: ErrorHandlerComponentProps) => {
  if (message)
    return (
      <h4 style={{ color: "GrayText" }}>
        {message ?? "Default error message"}
      </h4>
    );

  return (
    <div className="error-container">
      <h3>
        Something went wrong with this card, it will disappear in a moment !
      </h3>
    </div>
  );
};
