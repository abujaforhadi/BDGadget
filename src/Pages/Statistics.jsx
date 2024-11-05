import BarChartPage from "../Components/BarChartPage";
import Heading from "../Components/Heading";

function Statistics() {
  return (
    <div>
      <div className="bg-customPurple py-5">
        <Heading
          title="Statistics"
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
      </div>
      <BarChartPage></BarChartPage>
    </div>
  );
}
export default Statistics;
