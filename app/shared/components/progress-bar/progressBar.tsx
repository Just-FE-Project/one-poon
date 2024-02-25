type Props = {
  value: number;
  targetAmount?: number;
  currentAmount?: number;
  unit?: string;
  isColumn?: boolean;
};

export const ProgressBar = ({ value, targetAmount, currentAmount, isColumn, unit = '원' }: Props) => {
  const newTargetAmount = unit === '원' ? targetAmount?.toLocaleString() : targetAmount;
  const newCurrentAmount = unit === '원' ? currentAmount?.toLocaleString() : currentAmount;
  return (
    <div className={`flex ${isColumn ? 'flex-col' : ''} items-center justify-center ${isColumn ? 'gap-8' : 'gap-3'}`}>
      <progress className="progress progress-success w-56" value={value} max="100"></progress>
      <p className="text-gray-400">{`${newTargetAmount}${unit} / ${newCurrentAmount}${unit}`}</p>
    </div>
  );
};
