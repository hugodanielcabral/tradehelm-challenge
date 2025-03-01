import { Button, Container, Flex, Modal, Title } from "@mantine/core";
import { BasicLayout } from "./layouts/BasicLayout";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { ItemsList } from "./components/ItemsList";
import { ItemsForm } from "./components/ItemsForm";
import { useLocalStorage } from "./hooks/useLocalStorage";

export const App = () => {
  const [items, setItems] = useLocalStorage<string[]>("items", []);
  const [itemName, setItemName] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const handleOnDelete = (id: number) => {
    const filteredItems = items.filter((_, index) => index !== id);
    setItems(filteredItems);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (itemName.trim()) {
      setItems([...items, itemName]);
      setItemName("");
      close();
    }
  };

  return (
    <BasicLayout>
      <Container size="responsive">
        <Flex
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Title order={1} c={"white"}>
            SuperMarket List
          </Title>
          <Title order={3} c={"white"}>
            {items.length} items(s)
          </Title>

          <Modal opened={opened} onClose={close} title="Agregar item" centered>
            <ItemsForm
              itemName={itemName}
              handleOnSubmit={handleOnSubmit}
              handleOnChange={handleOnChange}
            />
          </Modal>

          <ItemsList items={items} handleOnDelete={handleOnDelete} />
          <Button variant="filled" size="lg" onClick={open}>
            Agregar item
          </Button>
        </Flex>
      </Container>
    </BasicLayout>
  );
};
