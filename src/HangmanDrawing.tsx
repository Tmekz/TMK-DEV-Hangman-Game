// The drawing that will show up when the user loses
const HEAD = (
  <div className="size-[70px] border-[10px] border-black absolute top-[50px] -right-[30px] rounded-full" />
);
const BODY = (
  <div className="h-[100px] w-[10px] bg-black absolute top-[110px] right-0" />
);

// The base of the drawing
const HangmanDrawing = () => {
  return (
    <div className="relative">
      {HEAD}
      {BODY}
      <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0" />
      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
      <div className="h-[400px] w-[10px] bg-black ml-[120px]" />
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
};

export default HangmanDrawing;
