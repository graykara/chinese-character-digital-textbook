export const BuddyButton = ({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <img
      src="/ui/buddy-icon.png"
      className={className}
      onClick={() => onClick?.()}
    />
  );
};
