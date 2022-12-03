type PersonProps = {
  first: string;
  last: string;
};

type PersonListProps = {
  names: Array<PersonProps>;
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name, index) => (
        <h2 key={index}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};
