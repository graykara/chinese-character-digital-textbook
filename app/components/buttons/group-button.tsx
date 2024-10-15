export const GroupButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    // <button>
    <img src="/ui/group-button.png" onClick={() => onClick?.()} />
    // </button>
  );
};
