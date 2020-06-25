import React from 'react';
import { useSelector } from 'react-redux'
import { ArcRotateCamera, Vector3, HemisphericLight, Axis, MeshBuilder, Color4 } from '@babylonjs/core'
import SceneComponent from 'babylonjs-hook';

const getSegments = (ring, aggregateHeight) => {
    let angle = 180/ring.segments;
    let ringOffset = (angle * (ring.offset / 100)) * 2 * Math.PI/180;
    let innerDiameter = ring.outerDiameter - ring.width;
    let outerLength = ring.outerDiameter * Math.tan(angle * Math.PI/180);
    let innerLength = innerDiameter * Math.tan(angle * Math.PI/180);

    let a = new Vector3(innerDiameter, aggregateHeight, innerLength * -1);
    let b = new Vector3(ring.outerDiameter, aggregateHeight, outerLength * -1);
    let c = new Vector3(ring.outerDiameter, aggregateHeight, outerLength);
    let d = new Vector3(innerDiameter, aggregateHeight, innerLength);

    let segments = []
    for (let i = 0; i < ring.segments; i++) {
        segments[i] = {
            id: `${ring.id}-${i}`,
            vectors: [a, b, c, d], offset: (i * angle * 2 * Math.PI/180) + ringOffset
        };
    }

    return segments;
};

const onSceneReady = (scene) => {
    let camera = new ArcRotateCamera('Camera', Math.PI / 2, Math.PI / 180 * 60, 60, Vector3.Zero(), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(scene.getEngine().getRenderingCanvas(), true);

    let light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    let aggregateHeight = 0;
    Object.keys(rings).map(key => {
        let ring = rings[key];
        let segments = getSegments(ring, aggregateHeight)
        aggregateHeight += ring.height;
        segments.forEach(s => {
            let polygon = MeshBuilder.ExtrudePolygon(s.id, { shape: s.vectors, depth: ring.height }, scene);
            polygon.enableEdgesRendering();    
            polygon.edgesWidth = 4.0;
            polygon.edgesColor = new Color4(0, 0, 0, 1);
            polygon.rotate(Axis.Y, s.offset);
            polygon.movePOV(0, aggregateHeight, 0);
        });
    });
}

let rings;

const Visualizer = () => {
    rings = useSelector(state => state.vessel.rings);
    let seneComponentKey = new Date().getTime();

    return (
        <SceneComponent key={seneComponentKey} antialias onSceneReady={onSceneReady} className="visualizer" />
    );
}

export default Visualizer;
