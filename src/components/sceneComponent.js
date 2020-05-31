import { Engine, Scene } from '@babylonjs/core'
import React, { useEffect, useRef, useState } from 'react'

const SceneComponent = (props) => {
    const reactCanvas = useRef(null);
    const { antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, ...rest } = props;

    const [loaded, setLoaded] = useState(false);
    const [scene, setScene] = useState(null);

    useEffect(() => {
        if (window) {
            const resize = () => {
                if (scene) {
                    scene.getEngine().resize();
                }
            }
            window.addEventListener('resize', resize);

            return () => {
                window.removeEventListener('resize', resize);
            }
        }
    }, [scene]);

    useEffect(() => {
        const engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio);
        const scene = new Scene(engine, sceneOptions);
        setScene(scene);
        if (scene.isReady()) {
            props.onSceneReady(scene)
        } else {
            scene.onReadyObservable.addOnce(scene => props.onSceneReady(scene));
        }

        engine.runRenderLoop(() => {
            if (typeof onRender === 'function') {
                onRender(scene);
            }
            scene.render();
        })

        return () => {
            if (scene !== null) {
                scene.dispose();
            }
        }
    }, [reactCanvas])

    return (
        <canvas ref={reactCanvas} {...rest} />
    );
}

export default SceneComponent;