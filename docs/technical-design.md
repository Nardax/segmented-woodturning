# Design Document: Segmented Bowl Designer (v1.0)

## 1. Architectural Overview

The application follows a **Reactive State Pattern**. The Blazor UI dispatches changes to a central `BowlProject` state, which triggers a recalculation of the segment dimensions and refreshes the 3D render.

* **State Store:** A C# class containing the "Ingredients" (Profile points, ring heights, segment counts).
* **Engine:** A stateless service that accepts the `BowlProject` and returns a `CuttingList`.
* **View Layer:** Blazor components that visualize the state via SVG (2D) and Three.js/Babylon.js (3D).

---

## 2. Data Schema (The State)

This is the core object SpecKit will validate.

```csharp
public record BowlProject
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Name { get; set; } = "New Project";
    public MeasurementUnit Units { get; set; } = MeasurementUnit.Imperial;
    public double SafetyBuffer { get; set; } = 0.25;

    // The 2D Profile (Exterior points)
    public List<Vector2> ExteriorProfile { get; set; } = new();
    public double WallThickness { get; set; } = 0.5;

    // The Stack Definition
    public List<RingDefinition> Rings { get; set; } = new();
}

public record RingDefinition
{
    public int SegmentCount { get; set; } = 12;
    public double Thickness { get; set; } = 0.75; // Board height
}

```

---

## 3. The Calculation Engine (Logic Design)

The engine must perform three primary transformations to satisfy the requirements:

### 3.1 Profile Interpolation

Since the user defines the profile via a Bezier curve, but rings have a fixed thickness, the engine must "sample" the profile at the top and bottom of each ring.

* **Logic:** For each ring at height , find  (the widest radius) between  and .
* **Why:** This ensures the segment is wide enough to contain the entire curve of the bowl wall.

### 3.2 Trigonometric Transformation

For each ring, we derive the cutting parameters:

* **Miter Angle:** 
* **Edge Lengths:** Using the Law of Sines/Cosines based on the sampled radii from the profile.

---

## 4. Component Hierarchy (Blazor)

To keep the code clean for SpecKit, we will decouple the UI into specific responsibilities:

| Component | Responsibility | Interactivity |
| --- | --- | --- |
| `ProfileCanvas` | SVG-based editor for the Bezier path. | Drag-and-drop nodes. |
| `RingManager` | Grid/Table for editing segment counts and thicknesses. | Input fields. |
| `VesselViewport` | 3D Canvas (JSInterop) for the lathe model. | Read-only / Rotate. |
| `CuttingReport` | Generates the final table of dimensions. | Print / Export. |

---

## 5. SpecKit Integration Strategy

We will use SpecKit to define **Invariants**. These are rules that the system must never violate.

* **Geometric Invariant:** `Ring.OuterRadius` must always be  `Ring.InnerRadius`.
* **Physical Invariant:** `SegmentCount` must be .
* **Structural Invariant:** The sum of all `RingDefinition.Thickness` must equal the total  height of the `ExteriorProfile`.

---

## 6. 3D Rendering Pipeline

1. **Generate Lathe Points:** Convert the 2D points into a 3D point cloud by rotating them around the Y-axis.
2. **Facet Generation:** Instead of a smooth circle, we facet the geometry based on the `SegmentCount` to show the "blocky" nature of a segmented bowl before it is turned.
3. **Texture:** Apply a seamless wood texture using a standard UV wrap.