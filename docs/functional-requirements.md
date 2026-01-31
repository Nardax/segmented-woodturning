# Functional Requirements: Segmented Bowl Designer (v1.0)

## 1. Project Goal

To provide woodturners with a web-based CAD tool to design closed-segment bowls, providing precise cutting dimensions and a 3D visualization of the finished piece.

## 2. Technical Stack

* **Language:** C#
* **Framework:** Blazor (WebAssembly or Server)
* **Methodology:** Specification-Driven Development (SpecKit)

---

## 3. Functional Requirements

### 3.1 Project Lifecycle & Global State

* **FR-1.1: Unit System:** The system must support both Imperial (inches) and Metric (mm) measurements.
* **FR-1.2: Safety Buffer:** The system shall provide a global "Safety Buffer" variable (defaulting to 0.25" or 6mm). This value is added to the radial width of segments to account for material lost during the rounding process on the lathe.
* **FR-1.3: Precision:** Miter angles must be calculated to at least two decimal places of precision.

### 3.2 Vessel Profile (The "Silhouette")

* **FR-2.1: 2D Path Editor:** Users shall define the exterior silhouette of the bowl using a series of coordinate points (X, Y).
* **FR-2.2: Wall Thickness:** The user shall define a uniform wall thickness. The system will automatically derive the interior profile by offsetting the exterior path.
* **FR-2.3: Base Layer:** The first layer (Layer 0) is strictly defined as a solid disk. The system must calculate its diameter based on the starting points of the 2D profile.

### 3.3 Segment & Ring Logic

* **FR-3.1: Ring Stack:** The bowl is composed of horizontal rings stacked along the Y-axis. Each ring’s height is determined by the "Board Thickness."
* **FR-3.2: Closed Segments:** For v1.0, all rings must be 360° closed circles.
* **FR-3.3: Miter Calculation:** The system shall calculate the miter angle based on the number of segments () using the formula: .
* **FR-3.4: Segment Dimensions:** For every ring, the system must output:
* **Long Edge:** The outermost length of the segment.
* **Short Edge:** The innermost length of the segment.
* **Breadth (Width):** The radial depth of the segment (calculated from the widest part of the profile within that ring's height + Safety Buffer).



### 3.4 3D Visualization

* **FR-4.1: Real-time Lathe Rendering:** The app shall render a 3D model using a lathe geometry (revolving the 2D profile 360°).
* **FR-4.2: Texture Mapping:** A generic wood grain texture shall be applied to the 3D model.
* **FR-4.3: Visual Segment Lines:** The 3D model should optionally display vertical lines representing the glue joints between segments.

---

## 4. Output Requirements (The "Shop Report")

* **OR-1: Summary Table:** A printable or exportable table containing the following for each ring:
* Ring Number (Base = 0)
* Number of Segments
* Miter Angle
* Board Thickness
* Segment Length (Long Edge)
* Segment Width (Breadth)



---

## 5. SpecKit Validation Rules (Constraints)

* **VAL-1:** A ring cannot have fewer than 3 segments.
* **VAL-2:** The total height of the ring stack must equal the total height of the 2D profile.
* **VAL-3:** The "Base" diameter must be greater than zero.

---