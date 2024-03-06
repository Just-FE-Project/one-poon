interface IProps {
  targetAmount?: number;
  currentAmount?: number;
  unit?: string;
  isColumn?: boolean;
}

export const ProgressBar = ({ targetAmount = 0, currentAmount = 0, isColumn, unit = '원' }: IProps) => {
  const newTargetAmount = unit === '원' ? targetAmount?.toLocaleString() : targetAmount;
  const newCurrentAmount = unit === '원' ? currentAmount?.toLocaleString() : currentAmount;
  return (
    <div className={`flex ${isColumn ? 'flex-col' : ''} items-center justify-center ${isColumn ? 'gap-8' : 'gap-3'}`}>
      <progress
        className="progress progress-success w-56"
        value={100 / (targetAmount / currentAmount)}
        max="100"></progress>
      <p className="text-gray-400">{`${newTargetAmount}${unit} / ${newCurrentAmount}${unit}`}</p>
    </div>
  );
};
