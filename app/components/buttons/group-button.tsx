export const GroupButton = ({
  className = "",
  // onClick,
}: {
  className?: string;
  // onClick?: () => void;
}) => {
  return (
    <img
      src="/ui/group-button.png"
      className={className}
    // onClick={() => onClick?.()/
    />
  );
};
