export const WritingButton = ({
  className = "",
  // onClick,
}: {
  className?: string;
  // onClick?: () => void;
}) => {
  return (
    <img
      src="/ui/writing-button.png"
      className={className}
    // onClick={() => onClick?.()/
    />
  );
};