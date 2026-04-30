import { Box, Button, Group } from "@mantine/core";

function App() {
  return (
    <Box>
      <Group justify="space-between">
        <h3>Bench</h3>
        <p>Weight</p>
        <p>SetxReps</p>
      </Group>
      <Group>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </Group>
      <Group justify="space-between">
        <h3>Military Press</h3>
        <p>Weight</p>
        <p>SetxReps</p>
      </Group>
      <Group>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </Group>
    </Box>
  );
}

export default App;
