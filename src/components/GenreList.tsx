import UseGenres from "@/hooks/UseGenres";

const GenreList = () => {
  const { genres } = UseGenres();
  return (
    <div>
      <ul>
        {genres.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
