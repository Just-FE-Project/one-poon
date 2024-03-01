import Image from 'next/image';

interface IProps {
  title?: string;
  size?: 'md' | 'lg';
}

export function ActivityMissionZone({ title, size = 'md' }: IProps) {
  const sizeClass = {
    md: { imgSize: 50, progressHeight: 'h-6', textSize: 'text-md' },
    lg: { imgSize: 70, progressHeight: 'h-8', textSize: 'text-lg' }
  }[size];

  return (
    <div className="flex flex-col gap-14 px-6 py-20">
      {title && <h3 className="text-2xl font-bold">{title}</h3>}
      <div className="relative">
        <Image
          className="absolute left-[-8px] top-[-32%] z-10"
          src={'/lv1.svg'}
          width={sizeClass.imgSize}
          height={sizeClass.imgSize}
          alt="lv1 캐릭터"></Image>
        <div className="flex w-full flex-col items-center gap-2">
          <progress className={`progress progress-error ${sizeClass.progressHeight}`} value={80} max="100"></progress>
          <div className={`font-bold text-gray-600 ${sizeClass.textSize}`}>
            <span className="text-error">80p</span>
            <span>&nbsp;/&nbsp;</span>
            <span>100p</span>
          </div>
        </div>
        <Image
          className="absolute right-[-13px] top-[-32%] z-10"
          src={'/lv2.svg'}
          width={sizeClass.imgSize}
          height={sizeClass.imgSize}
          alt="lv1 캐릭터"></Image>
      </div>
    </div>
  );
}
