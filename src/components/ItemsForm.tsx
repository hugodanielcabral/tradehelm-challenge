import { Button, Group, Text, TextInput } from "@mantine/core";

interface ItemsFormProps {
  itemName: string;
  handleOnSubmit: (e: React.FormEvent) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
}

export const ItemsForm = ({
  itemName,
  handleOnSubmit,
  handleOnChange,
  error,
}: ItemsFormProps) => {
  return (
    <form onSubmit={handleOnSubmit}>
      {error && (
        <Text c="red" mb="md" size="sm">
          {error}
        </Text>
      )}
      <Group mt="md" justify="center" grow>
        <TextInput
          aria-label="Nombre del producto a agregar"
          placeholder="Puré de tomate"
          value={itemName}
          onChange={handleOnChange}
          error={error ? true : false}
        />
        <Button type="submit" disabled={!!error}>
          Agregar
        </Button>
      </Group>
    </form>
  );
};