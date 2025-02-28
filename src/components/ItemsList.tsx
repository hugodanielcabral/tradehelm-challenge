import { Button, Card, Group, Text, Stack } from "@mantine/core";

interface ItemsListProps {
  items: string[];
  handleOnDelete: (id: number) => void;
}

export const ItemsList = ({ items, handleOnDelete }: ItemsListProps) => {
  return (
    <Stack w="100%" align="center">
      {items.map((item, index) => (
        <Card
          key={index}
          shadow="sm"
          padding="sm"
          radius="md"
          w="80%"
          withBorder
        >
          <Group justify="space-between">
            <Text size="xl" fw={500}>
              {item}
            </Text>
            <Button
              color="red"
              variant="light"
              onClick={() => handleOnDelete(index)}
            >
              Eliminar
            </Button>
          </Group>
        </Card>
      ))}
      {items.length === 0 && (
        <Text c="white" fs="italic">
          No hay elementos en la lista
        </Text>
      )}
    </Stack>
  );
};
