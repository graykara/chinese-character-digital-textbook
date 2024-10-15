type Props = {
  onClick: () => void;
  className?: string;
};

export const AdditionalDataButton = ({ onClick, className = "" }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      <img src="/ui/additional-data-button.png" alt="부가자료" />
    </button>
  );
};
