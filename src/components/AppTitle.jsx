export default function AppTitle(props) {
  const {
    title = "Know Your Show",
    subTitle = "Are you looking for a movie or actor?",
  } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
}
