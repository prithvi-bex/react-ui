type Props = {
  name: string;
};

export function HelloWorld(props: Props) {
  return <h1 className="text-red-500" data-testid="h1">Hello {props.name}</h1>;
}
