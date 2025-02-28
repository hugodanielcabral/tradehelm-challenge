import { AppShell, Group, Image } from "@mantine/core";
import tradeHelmLogo from "../../public/logo.svg";

interface BasicLayoutProps {
  children: React.ReactNode;
}

export const BasicLayout = ({ children }: BasicLayoutProps) => {
  return (
    <AppShell
      padding={{ base: 10, sm: 15, lg: "xl" }}
      bg="var(--mantine-color-dark-3)"
      header={{ height: 60 }}
    >
      <AppShell.Header bg="var(--mantine-color-dark-5)">
        <Group justify="center" h="100%" px="md">
          <Image radius="md" h={40} fit="contain" src={tradeHelmLogo} />
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
