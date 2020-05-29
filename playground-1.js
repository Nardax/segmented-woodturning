var createRing = function (outerDiameter, width, height, numberOfSegments) {
    var angle = 180/numberOfSegments;
    var innerDiameter = outerDiameter - width;
    var outerLength = outerDiameter * Math.tan(angle * Math.PI/180);
    var innerLength = innerDiameter * Math.tan(angle * Math.PI/180);

    var a = new BABYLON.Vector3(innerDiameter, 0, innerLength * -1);
    var b = new BABYLON.Vector3(outerDiameter, 0, outerLength * -1);
    var c = new BABYLON.Vector3(outerDiameter, 0, outerLength);
    var d = new BABYLON.Vector3(innerDiameter, 0, innerLength);

    var segments = []
    for (let i = 0; i < numberOfSegments; i++) {
        segments[i] = {
            vectors: [a, b, c, d], offset: i * angle * 2 * Math.PI/180
        };
    }

    let ring = {
        id: "ring0",
        offset: 0,
        segments:segments
    };

    return ring;
};

var createScene = function () {
    var showAxis = function(size) {
        var makeTextPlane = function(text, color, size) {
        var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
        dynamicTexture.hasAlpha = true;
        dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color , "transparent", true);
        var plane = new BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
        plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
        plane.material.backFaceCulling = false;
        plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
        plane.material.diffuseTexture = dynamicTexture;
        return plane;
        };
    
        var axisX = BABYLON.Mesh.CreateLines("axisX", [ 
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0), 
        new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
        ], scene);
        axisX.color = new BABYLON.Color3(1, 0, 0);
        var xChar = makeTextPlane("X", "red", size / 10);
        xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
        var axisY = BABYLON.Mesh.CreateLines("axisY", [
            new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( -0.05 * size, size * 0.95, 0), 
            new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( 0.05 * size, size * 0.95, 0)
            ], scene);
        axisY.color = new BABYLON.Color3(0, 1, 0);
        var yChar = makeTextPlane("Y", "green", size / 10);
        yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
        var axisZ = BABYLON.Mesh.CreateLines("axisZ", [
            new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0 , -0.05 * size, size * 0.95),
            new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0, 0.05 * size, size * 0.95)
            ], scene);
        axisZ.color = new BABYLON.Color3(0, 0, 1);
        var zChar = makeTextPlane("Z", "blue", size / 10);
        zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
    };

    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera('Camera', Math.PI / 2, 0, 50, BABYLON.Vector3.Zero(), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    let ring = createRing(10, 2, 2, 16);
    ring.segments.forEach(s => {
        let polygon = BABYLON.Mesh.ExtrudePolygon(ring.id, s.vectors, 2, scene);
        polygon.rotate(BABYLON.Axis.Y, s.offset);
    });
        
    showAxis(5);

    return scene;
};