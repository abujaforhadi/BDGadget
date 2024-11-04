import Heading from "../Components/Heading";

function Dashboard() {
  return (
    <div>
      <div className="bg-customPurple py-5">
        <Heading
          title="Dashboard"
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
        <div className="flex justify-center gap-4">
          <button className="btn btn-outline">Cart</button>
          <button className="btn btn-outline">Wishlist</button>
        </div>
      </div>

    </div>
  );
}
export default Dashboard;
