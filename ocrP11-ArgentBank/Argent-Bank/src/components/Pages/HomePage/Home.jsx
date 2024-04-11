import chatIcon from "../../../assets/img/icon-chat.webp";
import moneyIcon from "../../../assets/img/icon-money.webp";
import securityIcon from "../../../assets/img/icon-security.webp";
import Hero from "../../Hero/Hero";
import Features from "./Features/Features";

const ListOfFeatures = [
  {
    id: 1,
    title: "You are our #1 priority",
    description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    icon: chatIcon
  },
  {
    id: 2,
    title: "More savings means higher rates",
    description: "The more you save with us, the higher your interest rate will be!",
    icon: moneyIcon
  },
  {
    id: 3,
    title: "Security you can trust",
    description: "We use top of the line encryption to make sure your data and money is always safe.",
    icon: securityIcon
  },
];

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>

          {ListOfFeatures.map((feature) =>(
            <Features
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
