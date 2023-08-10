import {
  DockviewReact,
  DockviewReadyEvent,
} from "dockview";
import "./App.css";
import { Excalidraw } from "@excalidraw/excalidraw";

const components = {
  default: () => {
    return (
      <div style={{ padding: "20px", color: "white" }}>
        Panel_1
      </div>
    );
  },
  excalidraw: () => {
    return (
      <Excalidraw/>
    )
  }
};

export const App: React.FC = (props: { theme?: string }) => {
  const onReady = (event: DockviewReadyEvent) => {
    event.api.addPanel({
      id: "Panel_1",
      component: "default",
    });

    event.api.addPanel({
      id: "Panel_2",
      component: "excalidraw",

    });
  };

  return (
    <DockviewReact
      components={components}
      onReady={onReady}
      className={props.theme || "dockview-theme-abyss"}
    />
  );
};

export default App;
