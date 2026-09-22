const Saman = ({ title, price, image }) => {
  return (
    <div className="items">
      <img className="item-image" src={image} alt={title} />
      <h2>{title}</h2>
      <h3>₹{price}</h3>
      <button>Add To Cart</button>
    </div>
  );
};

export default Saman;
