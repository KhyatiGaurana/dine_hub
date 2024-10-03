import FeaturedItems from "@/components/featuredItems";
import Offers from "@/components/offer";
import Slider from "@/components/slider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Slider/>
      <FeaturedItems/>
      <Offers/>
    </div>
  );
}
