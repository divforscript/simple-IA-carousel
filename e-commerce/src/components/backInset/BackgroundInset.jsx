


export default function BackgroundInset({bgColor="bg-black",zIndex,closeNavMob}) {
  return(
    <div
        id="background-inset"
        className={`${bgColor} opacity-75 h-screen absolute inset-0 ${zIndex}`}
        onClick={closeNavMob}
    >

    </div>
  );
}