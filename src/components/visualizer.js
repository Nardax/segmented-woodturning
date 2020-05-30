import React from 'react';
import { ArcRotateCamera, Vector3, HemisphericLight, Axis, Mesh } from '@babylonjs/core'
import SceneComponent from 'babylonjs-hook';

const createRing = (outerDiameter, width, height, numberOfSegments) => {
    let angle = 180/numberOfSegments;
    let innerDiameter = outerDiameter - width;
    let outerLength = outerDiameter * Math.tan(angle * Math.PI/180);
    let innerLength = innerDiameter * Math.tan(angle * Math.PI/180);

    let a = new Vector3(innerDiameter, 0, innerLength * -1);
    let b = new Vector3(outerDiameter, 0, outerLength * -1);
    let c = new Vector3(outerDiameter, 0, outerLength);
    let d = new Vector3(innerDiameter, 0, innerLength);

    let segments = []
    for (let i = 0; i < numberOfSegments; i++) {
        segments[i] = {
            vectors: [a, b, c, d], offset: i * angle * 2 * Math.PI/180
        };
    }

    let ring = {
        id: "ring0",
        height: height,
        offset: 0,
        segments:segments
    };

    return ring;
};

const onSceneReady = scene => {
    let camera = new ArcRotateCamera('Camera', Math.PI / 2, Math.PI / 180 * 80, 50, Vector3.Zero(), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(scene.getEngine().getRenderingCanvas(), true);

    let light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    let ring = createRing(10, 2, 2, 16);
    ring.segments.forEach(s => {
        let polygon = Mesh.ExtrudePolygon(ring.id, s.vectors, 2, scene);
        polygon.rotate(Axis.Y, s.offset);
    });
}

const onRender = scene => {
}

const Visualizer = () => {
    return (
        <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} className="visualizer" />
    );
}

export default Visualizer;
