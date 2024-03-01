import Image from 'next/image';

// import lv2 from '/lv2.svg';
export function ActivityMissionZone() {
  return (
    <div className="flex flex-col gap-12 px-6 py-12">
      <h3 className="text-2xl font-bold">활동미션 영역</h3>
      <div className="relative">
        <Image
          className="absolute left-[-8px] top-[-32%] z-10"
          src={'/lv1.svg'}
          width={50}
          height={50}
          alt="lv1 캐릭터"></Image>
        <div className="flex w-full flex-col items-center gap-2">
          <progress className="progress progress-error h-6" value={80} max="100"></progress>
          <div className="text-md font-bold text-gray-600">
            <span className="text-error">80p</span>
            <span>&nbsp;/&nbsp;</span>
            <span>100p</span>
          </div>
        </div>
        <Image
          className="absolute right-[-13px] top-[-32%] z-10"
          src={'/lv2.svg'}
          width={50}
          height={50}
          alt="lv1 캐릭터"></Image>
      </div>
    </div>
  );
}
