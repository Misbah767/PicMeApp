import BasicIcon from "../../assets/icons/PLansIcons/BasicPlanIcon";
import EssentialIcon from "../../assets/icons/PLansIcons/EssentialPlanIcon";
import PremiumIcon from "../../assets/icons/PLansIcons/PremiumPlanIcon";

const packageData = [
  {
    id: "basic",
    icon: BasicIcon,
    title: "Basic Plan",
    price: "10",
    listItems: ["2 Days Package", "Upto 8 Photos", "Upto 1 Video"],
    buttonText: "Continue",
  },
  {
    id: "essential",
    icon: EssentialIcon,
    title: "Essential Plan",
    price: "25",
    listItems: ["4 Days Package", "Upto 35 Photos", "Upto 4 Videos"], 
    buttonText: "Continue",
  },
  {
    id: "premium",
    icon: PremiumIcon,
    title: "Premium Plan",
    price: "49",
    listItems: ["6 Days Package", "Upto 40 Photos", "Upto 6 Videos"],
    buttonText: "Continue",
  },
];

export default packageData;
