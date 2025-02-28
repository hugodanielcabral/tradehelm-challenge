import { Container } from "@mantine/core";
import { BasicLayout } from "./layouts/BasicLayout";

export const App = () => {
  return (
    <BasicLayout>
      <Container
        size="responsive"
        bg="var(--mantine-color-blue-light)"
      ></Container>
    </BasicLayout>
  );
};
