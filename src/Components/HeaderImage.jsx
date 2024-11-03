import img from "../assets/hreoimg.jpg"
function HeaderImage() {
  return (
    <div className="flex justify-center items-center">
        <img className="w-2/3 rounded-xl" src={img} alt="" srcset="" />
    </div>
  )
}
export default HeaderImage