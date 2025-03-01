import { Button, Container, Flex, Modal, Title } from "@mantine/core";
import { BasicLayout } from "./layouts/BasicLayout";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { ItemsList } from "./components/ItemsList";
import { ItemsForm } from "./components/ItemsForm";
import { useLocalStorage } from "./hooks/useLocalStorage";
import * as z from "zod";

const formSchema = z
  .string()
  .min(3, { message: "El item debe tener al menos 3 caracteres" });

export const App = () => {
  const [items, setItems] = useLocalStorage<string[]>("items", []);
  const [itemName, setItemName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  const handleOnDelete = (id: number) => {
    const filteredItems = items.filter((_, index) => index !== id);
    setItems(filteredItems);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setItemName(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const resultado = formSchema.safeParse(itemName);

    if (resultado.success && itemName.trim()) {
      setItems([...items, itemName]);
      setItemName("");
      setError(null);
      close();
    } else {
      setError(resultado.error?.issues[0]?.message || "El item no es válido");
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
              error={error}
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
