import { useState } from "react";
import { useRef } from "react";
import "rsuite/dist/rsuite.min.css";
import { ButtonGroup, Button } from "rsuite";
import { MetaProvider, MetaEditor, Hooks, Context } from "pixel-streaming";


const PlayerView = () => {
    const refPlayer = useRef(null);
  
    // context
    const global = Context.global();
    const stream = Context.stream();
  
    // hooks
    const actions = Hooks.actions();
  
    return (
      <MetaEditor
        ref={refPlayer}
        debugMode="on"
        showToolbar={true}
        onLoad={() => {
          console.log("@".repeat(30));
          console.dir(refPlayer.current);
          console.dir(global);
          console.dir(stream);
          console.dir(actions);
        }}
        psHost="ws://127.0.0.1:80"
        psConfig={{
          autoPlay: true,
          autoConnect: false,
          startMuted: true,
          hoveringMouse: true,
          fakeMouseWithTouches: true,
          matchViewportRes: true
        }}
      >
        <Button onClick={() => actions.emitUi({ action: "ui_command" })}>
          Send action
        </Button>
      </MetaEditor>
    );
  };


const StreamPage = () => {
    return (
        <MetaProvider>
            <PlayerView />
        </MetaProvider>
    );
};


export default StreamPage;