import UseGenres from "@/hooks/UseGenres";

const GenreList = () => {
  const { data } = UseGenres();
  return (
    <div>
      <ul>
        {data.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
