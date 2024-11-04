function Heading({title,subTitle}) {
  return (
    <div className="md:mx-36 ">
      <h1 className="font-bold text-center text-white text-3xl">{title}</h1>
      <p className="font-normal py-4  text-center text-white">{subTitle}</p>
    </div>
  )
}
export default Heading