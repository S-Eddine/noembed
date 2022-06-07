import "./UI.css";

type SubmitProps = {
  onSubmit: () => void;
  isLoading: boolean;
};
export const Submit = ({ onSubmit, isLoading }: SubmitProps) => {
  return (
    <span className="bar-container">
      {isLoading ? (
        <div className="loader" />
      ) : (
        <input
          type="submit"
          value="Submit"
          onClick={onSubmit}
          className="Submit-button"
          disabled={isLoading}
        />
      )}
    </span>
  );
};
