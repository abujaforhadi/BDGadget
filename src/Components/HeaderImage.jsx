import img from "../assets/hreoimg.jpg";
function HeaderImage() {
  return (
    <div className=" flex justify-center items-center">
      <img
        className="box-border bg-[#FFFFFF4D] p-3 w-2/3 rounded-xl"
        src={img}
      />
    </div>
  );
}
export default HeaderImage;
