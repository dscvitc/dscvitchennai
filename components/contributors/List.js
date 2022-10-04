const CardItem = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt="Placeholder" />
      <h1>{item.name}</h1>
    </div>
  );
};

export default function CardList() {
  return <CardItem />;
}
