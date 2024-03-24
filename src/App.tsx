import type { Component } from 'solid-js';

import { Input } from '@/components/ui/input';

const App: Component = () => {
  return (
    <>
      <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
      <Input type="text" id="text" placeholder="Wallet Address" />
    </>
  );
};

export default App;
