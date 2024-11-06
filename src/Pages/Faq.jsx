import { useEffect } from "react";
import Heading from "../Components/Heading";

function Faq() {
  useEffect(() => {
    document.title="FAQ | BDGadget"
  },[])
  return (
    <div className="">
      <div className="bg-customPurple py-4 pb-32 ">
      <div className="py-5 flex justify-center">
            <img className="w-1/5 rounded-lg" src="https://cdn.shopify.com/app-store/listing_images/be8e18fe7fd62b265563360c2986633d/promotional_image/CLHpktmI5_QCEAE=.jpeg?height=720&quality=90&width=1280" alt="" />
          </div>
        <Heading
          title="FAQ"
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
        
      </div>

      <div className="flex justify-center pb-96">
        <div className=" flex absolute -mt-20  flex-col p-4  gap-4 bg-white rounded-lg">
          
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is the warranty period for gadgets?
            </div>
            <div className="collapse-content">
              <p>
                Our gadgets come with a standard warranty period of one year,
                covering manufacturing defects.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Do you offer returns and exchanges?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we accept returns and exchanges within 30 days of purchase
                if the product is unused and in its original packaging.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How can I track my order?
            </div>
            <div className="collapse-content">
              <p>
                You can track your order using the tracking link provided in the
                confirmation email.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What payment methods do you accept?
            </div>
            <div className="collapse-content">
              <p>
                We accept various payment methods, including credit/debit cards,
                PayPal, and bank transfers.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I cancel my order?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can cancel your order within 24 hours of placing it.
                Please contact our customer support for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Faq;
