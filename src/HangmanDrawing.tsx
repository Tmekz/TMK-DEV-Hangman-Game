// The drawing that will show up when the user loses

const BAR = (
  <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0" />
);
const HEAD = (
  <div className="size-[70px] border-[10px] border-black absolute top-[50px] -right-[30px] rounded-full" />
);
const BODY = (
  <div className="h-[120px] w-[10px] bg-black absolute top-[120px] right-0" />
);
const RIGHT_ARM = (
  <div className="h-[10px] w-[100px] bg-black absolute top-[150px] -right-[100px] -rotate-[30deg] origin-bottom-left" />
);
const LEFT_ARM = (
  <div className="h-[10px] w-[100px] bg-black absolute top-[150px] right-[10px] rotate-[30deg] origin-bottom-right" />
);
const RIGHT_LEG = (
  <div className="h-[10px] w-[100px] bg-black absolute top-[230px] -right-[90px] rotate-[50deg] origin-bottom-left" />
);
const LEFT_LEG = (
  <div className="h-[10px] w-[100px] bg-black absolute top-[230px] right-[0px] -rotate-[50deg] origin-bottom-right" />
);

// The base of the drawing
const HangmanDrawing = () => {
  return (
    <div className="relative">
      {BAR}
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
      <div className="h-[400px] w-[10px] bg-black ml-[120px]" />
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
};

export default HangmanDrawing;
