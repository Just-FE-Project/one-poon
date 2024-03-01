export function BudgetTracker() {
  return (
    <div className="flex flex-col gap-10 px-6 py-12">
      <h3 className="text-2xl font-bold">목표금액</h3>
      <div className="flex items-center justify-between">
        <progress className="progress progress-success w-3/6" value={50} max="100"></progress>
        <div className="text-sm text-gray-600">
          <span>250,000원</span>
          <span>&nbsp;/&nbsp;</span>
          <span>500,000원</span>
        </div>
      </div>
    </div>
  );
}
