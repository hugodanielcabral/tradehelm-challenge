import { Button, Group, TextInput } from "@mantine/core";

interface ItemsFormProps {
  itemName: string;
  handleOnSubmit: (e: React.FormEvent) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ItemsForm = ({
  itemName,
  handleOnSubmit,
  handleOnChange,
}: ItemsFormProps) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <Group mt="xl" justify="center" grow>
        <TextInput
          aria-label="Nombre del producto a agregar"
          placeholder="Puré de tomate"
          value={itemName}
          onChange={handleOnChange}
        ></TextInput>
        <Button type="submit">Agregar</Button>
      </Group>
    </form>
  );
};
