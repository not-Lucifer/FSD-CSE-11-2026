import Saman from "./Saman";
import reactImage from "../assets/react.svg";
import productImage from "../assets/hero.png";

const Home = () => {
  const itemData = [
    {
      id: 1,
      title: "React JS",
      price: 756,
      image: reactImage,
    },
    {
      id: 3,
      title: "Node JS",
      price: 599,
      image: productImage,
    },
    {
      id: 2,
      title: "Node JS",
      price: 599,
      image: productImage,
    },
     {
      id: 4,
      title: "React JS",
      price: 756,
      image: reactImage,
    },
    {
      id: 5,
      title: "React JS",
      price: 756,
      image: reactImage,
    },{
      id: 6,
      title: "React JS",
      price: 756,
      image: reactImage,
    },
  ];

  return (
    <div className="home">
      <div className="items-grid">
        {itemData.map((item) => (
          <Saman
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
