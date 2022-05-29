import type { NextPage } from 'next';
import { TextInput, Group } from '@mantine/core';

const Home: NextPage = () => {
  return (
    <Group direction="column" spacing="xl">
      <TextInput label="What are you doing?" placeholder="Demo" />
      <TextInput label="How often do you do that?" placeholder="Every Week" />
    </Group>
  );
}

export default Home;