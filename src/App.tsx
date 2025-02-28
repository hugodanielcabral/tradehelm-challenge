import {
  Button,
  Container,
  Flex,
  Group,
  Modal,
  TextInput,
  Title,
} from "@mantine/core";
import { BasicLayout } from "./layouts/BasicLayout";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

export const App = () => {
  const [items, setItems] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <BasicLayout>
      <Container size="responsive" bg="var(--mantine-color-blue-light)">
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
            <form>
              <Group mt="xl" justify="center" grow>
                <TextInput
                  aria-label="Nombre del producto a agregar"
                  placeholder="Puré de tomate"
                ></TextInput>
                <Button>Agregar</Button>
              </Group>
            </form>
          </Modal>

          <Button variant="filled" size="lg" onClick={open}>
            Agregar item
          </Button>
        </Flex>
      </Container>
    </BasicLayout>
  );
};
