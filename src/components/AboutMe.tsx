import profile from "@/assets/images/shady-profile.jpg";
import Image from "next/image";
import Card from "./Card";

const AboutMe = () => {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col gap-8">
          <div>
            <Image src={profile} alt="profile pic" />
          </div>
          <div>
            <div>
              <Card></Card>
              <Card></Card>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid non quibusdam totam voluptate deserunt nulla, minima
                ipsam? Maxime, dicta. Est molestias beatae labore magnam cumque
                perferendis suscipit, placeat quisquam vero?
              </p>
            </div>
            <div>
              <button>Let's talk</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
