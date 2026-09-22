const RoutePage = ({ title, message }) => {
  return (
    <main className="home route-page">
      <h2>{title}</h2>
      <p>{message}</p>
    </main>
  );
};

export default RoutePage;