import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Button } from '@szd/ui';
import {Input} from "../../ui/src/components/ui/input";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">UI Playground</h1>
      <div className="flex gap-2">
        <Input />
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    </div>
  </React.StrictMode>
);
