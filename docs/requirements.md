# Segmented Woodturning Design Tool — Requirements

**Version:** 0.1 (draft)
**Date:** March 12, 2026
**Author:** Ryan P.

---

## 1. Project Overview

A modern, web-based design and calculation tool for segmented woodturning. The tool supports woodturners ranging from novices building their first simple segmented vessel all the way through experienced artisans designing complex multi-step feature rings. This is not a tutorial or instructional platform — it assumes the user understands the craft and needs precise, visual design assistance.

The product is web-first, free at launch, and will evolve across multiple releases toward deeper mathematical features, additional ring types, community/sharing capabilities, and AI-assisted design.

---

## 2. Goals

- Provide a clean, modern, intuitive design canvas that replaces aging desktop-only tools (Woodturner PRO, Segmented Project Planner, SegTurn)
- Be accessible from any device with a browser — no installation required
- Allow users to visually design segmented vessel profiles and ring stacks with real-time 3D feedback
- Produce a printable cut list sufficient to take to the shop
- Persist projects online so users can move between devices seamlessly
- Remain free at launch, with a path to a sustainable model in future versions

## 3. Non-Goals (v1)

- NOT a woodturning tutorial or instructional product
- NOT a community, gallery, or social platform (future)
- NOT supporting stave, open segment, compound miter, or feature ring types (future)
- NOT metric unit support (future)
- NOT AI-assisted design (future)
- NOT a detailed wood waste / materials cost optimizer (future)
- NOT a native mobile app

---

## 4. Target Users

| Persona | Description |
|---|---|
| **Novice turner** | Has basic turning skills, building first segmented bowl. Needs guided ring setup and visual confirmation before cutting. |
| **Intermediate turner** | Comfortable with segmented construction, wants to iterate on designs quickly and get precise cut dimensions without manual calculation. |
| **Expert turner** | Designs complex pieces with many rings, varied segment counts per ring. Wants full control with no limitations on ring count or complexity. |

---

## 5. Version Roadmap Summary

| Feature Area | v1 | v2 | v3+ |
|---|---|---|---|
| Closed segment rings | ✅ | | |
| Stave / open / compound rings | | ✅ | |
| Feature rings | | ✅ | |
| Vessel profile editor (Bezier + presets) | ✅ | | |
| Real-time 3D visualization | ✅ | | |
| Basic printable cut list | ✅ | | |
| Online project storage (cross-device) | ✅ | | |
| Mobile cut list tracker | ✅ | | |
| Metric units | | ✅ | |
| Deep math (kerf, board-feet, waste) | | ✅ | |
| Community / gallery / sharing | | | ✅ |
| AI-assisted design | | | ✅ |

---

## 6. Functional Requirements

### 6.1 Authentication & Accounts

- Users must be able to create a free account using email/password or OAuth (Google, GitHub)
- Projects are stored per-user account in cloud storage
- Users can access all their projects from any device/browser
- Guest/unauthenticated mode: allow designing without an account, but prompt to save before closing

### 6.2 Project Management

- Users can create, rename, duplicate, and delete projects
- Each project represents a single vessel design
- Project dashboard shows thumbnail previews of saved vessel designs
- Auto-save while working; explicit save/checkpoint also available
- Projects stored as structured JSON documents

### 6.3 Vessel Profile Designer

**Preset starter shapes:**
- A curated library of common vessel profiles: bowl, platter, vase, cylinder, goblet form, closed-top vessel
- Selecting a starter shape populates a default ring stack and profile curve
- Dimensions (max diameter, height) are configurable on the preset

**Bezier curve editor:**
- Users can drag control points on an outer profile curve to define a custom vessel shape (outer wall)
- Profile view shows both outer and inner wall based on a configurable wall thickness
- Profile aspect ratio is maintained when height is scaled
- Min/max radius per ring is derived from the profile and shown alongside the ring stack

### 6.4 Ring Stack

- A vessel is composed of a vertical stack of rings (minimum 2, no maximum)
- Each ring defines:
  - Height (thickness of the ring blank)
  - Number of segments
  - Outer diameter (derived from profile or manually overridden)
  - Inner diameter (derived from wall thickness or manually overridden)
  - Wood species / color (from library or custom color picker)
- Rings can be added, removed, reordered, and duplicated
- Bulk operations: change height or segment count across multiple selected rings at once
- The ring stack drives the 3D visualization in real time

### 6.5 Segment Calculations (v1 — Closed Segments)

For each ring, the tool calculates and displays:

- **Miter angle** = 90° − (180° / number of segments)
- **Segment outer width** (arc length at outer diameter)
- **Segment inner width** (arc length at inner diameter)
- **Segment length** (radial depth = (outer diameter − inner diameter) / 2)
- **Minimum board width** required to cut all segments from a single strip

All calculations use **Imperial units** (inches) in v1.

Kerf compensation, board-feet estimation, and wood cost are deferred to v2.

### 6.6 3D Visualization

- A real-time, interactive 3D view of the vessel is rendered and updated as the user edits the design
- The 3D view shows the vessel **as it will look after turning** (smooth outer profile, turned inner profile)
- An additional 3D "stack" view shows the un-turned ring stack (pre-lathe form) for verification
- A 2D top-down ring view shows the segment layout for the currently selected ring
- Users can rotate, zoom, and pan the 3D view with mouse/touch
- Each ring's assigned wood color/texture is rendered in the 3D view

### 6.7 Cut List & Export

**Cut list view (web):**
- Per-ring table showing: ring number, segment count, miter angle, segment outer width, segment inner width, segment length, wood species, quantity
- Summary header: vessel name, total rings, overall height, max diameter
- Designed to be clean and printable (print stylesheet included)
- Export to PDF via browser print

**Mobile cut list tracker:**
- A mobile-optimized view of the cut list (responsive layout)
- Each ring row has a checkbox / tap-to-mark-complete state
- Completion state is persisted per-project so the user can track what has and hasn't been cut across shop sessions
- No separate app installation — accessed via the same web URL on a phone/tablet

### 6.8 Wood Library

- A built-in library of common wood species with representative colors for visual rendering (e.g., Walnut, Cherry, Maple, Oak, Padauk, Purpleheart, Yellowheart)
- Users can also define custom "woods" with a name and a hex color
- Wood assignments are per-ring

---

## 7. Non-Functional Requirements

| Category | Requirement |
|---|---|
| **Performance** | 3D view must maintain 60fps during interactive editing on a mid-range laptop |
| **Browser support** | Latest two versions of Chrome, Firefox, Edge, Safari |
| **Responsiveness** | Full design tool optimized for desktop (≥1280px wide). Cut list view fully usable on mobile (≥375px) |
| **Accessibility** | WCAG 2.1 AA for all non-canvas UI elements |
| **Offline** | Not required in v1. Browser tab may become non-functional without connectivity |
| **Data privacy** | No project data shared with third parties. Users own their designs |
| **Security** | Auth via established OAuth provider or secure password hashing. OWASP Top 10 compliance |

---

## 8. Pages & Views

| Route | Page | Description |
|---|---|---|
| `/` | Landing | Product overview, feature highlights, call-to-action to sign up or try without account |
| `/login` | Sign In / Sign Up | Authentication — email/password + OAuth |
| `/dashboard` | My Projects | Grid of user's saved projects with thumbnails, creation date, last modified |
| `/design/:id` | Design Canvas | Main tool — profile editor, ring stack, 3D view, properties panel |
| `/design/:id/cutlist` | Cut List | Printable cut list; mobile-optimized tracking view |
| `/settings` | Settings | Account details, default units, default wall thickness, preferred wood |

---

## 9. Design Canvas Layout

The design canvas is a multi-panel layout:

```
┌─────────────────────────────────────────────────────────────────┐
│  Toolbar: vessel name | undo/redo | save | export cut list       │
├──────────────┬──────────────────────────┬────────────────────────┤
│              │                          │                        │
│  Ring Stack  │   3D Vessel Preview      │  Profile Editor        │
│  (left panel)│   (center, primary)      │  (right panel)         │
│              │                          │                        │
│  - ring list │   interactive 3D canvas  │  - Bezier curve editor │
│  - add/remove│                          │  - OR preset picker    │
│  - ring props│                          │  - height / diameter   │
│              │                          │                        │
├──────────────┴──────────────────────────┴────────────────────────┤
│  Selected Ring Detail: segment count | miter angle | wood | dims  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 10. Recommended Tech Stack

### Rationale
Choices prioritize best user experience, richness of the 3D ecosystem, developer velocity, and a free/low-cost hosting path consistent with the free-at-launch model.

### Frontend

| Concern | Choice | Rationale |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** with TypeScript | SSR for landing/SEO, client-side for the design canvas; large ecosystem; Vercel-native |
| UI Components | **shadcn/ui** + **Tailwind CSS** | Modern, accessible component primitives; highly customizable; no runtime style overhead |
| 3D Rendering | **React Three Fiber** + **@react-three/drei** | Declarative Three.js in React; `drei` provides camera controls, helpers, and environment maps out of the box |
| State Management | **Zustand** | Lightweight, ideal for complex editor state (undo/redo, ring stack, selections) without Redux boilerplate |
| Math / Geometry | Custom TypeScript modules | Segment calculations are pure math; no library dependency needed |

### Backend / Infrastructure

The user has an existing Azure subscription. All infrastructure is hosted on Azure.

| Concern | Choice | Rationale |
|---|---|---|
| Hosting | **Azure Static Web Apps** | Native Next.js support; built-in CI/CD from GitHub; free tier available; integrated routing for API functions |
| API / Backend | **Azure Functions** (integrated with Static Web Apps) | Serverless API routes for project CRUD, auth callbacks; scales to zero cost when idle |
| Auth | **Azure Static Web Apps built-in Auth** + **Azure AD B2C** | Static Web Apps provides easy OAuth (Google, GitHub, AAD) out of the box; AD B2C provides email/password and custom identity flows when more control is needed |
| Database | **Azure Cosmos DB for NoSQL** | Native JSON document storage; scales from free tier (1000 RU/s free); well-suited for vessel project documents; global distribution available later |
| File / Blob Storage | **Azure Blob Storage** | For any future binary exports (PDFs, images); extremely low cost |
| Project file format | **JSON documents in Cosmos DB** | Projects are structured documents; maps directly to the data model; no ORM needed |
| Secrets / Config | **Azure Key Vault** | Store connection strings and API keys securely; integrates with Static Web Apps app settings |

### Key Libraries

| Library | Purpose |
|---|---|
| `three` | Underlying 3D engine |
| `@react-three/fiber` | React renderer for Three.js |
| `@react-three/drei` | Camera controls, environment, helpers |
| `zustand` | Application state |
| `@azure/cosmos` | Cosmos DB client for project storage |
| `@azure/identity` | Azure credential management |
| `zod` | Schema validation for project JSON |
| `immer` | Immutable state updates for undo/redo |

---

## 11. Data Model (v1 Sketch)

```typescript
// Top-level project document stored in Supabase
interface VesselProject {
  id: string;
  userId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  units: "imperial";            // metric added in v2
  vessel: VesselDefinition;
}

interface VesselDefinition {
  maxDiameter: number;          // inches, outer
  totalHeight: number;          // inches
  wallThickness: number;        // inches
  profile: BezierProfile | PresetProfile;
  rings: Ring[];
}

interface Ring {
  id: string;
  height: number;               // inches
  segmentCount: number;
  outerDiameter: number;        // derived or overridden
  innerDiameter: number;        // derived or overridden
  wood: WoodAssignment;
  cutComplete: boolean;         // for mobile cut tracker
}

interface WoodAssignment {
  source: "library" | "custom";
  speciesId?: string;           // reference to wood library
  customName?: string;
  customColor?: string;         // hex
}

interface BezierProfile {
  type: "bezier";
  controlPoints: { x: number; y: number }[];
}

interface PresetProfile {
  type: "preset";
  presetId: string;             // e.g. "bowl", "vase", "platter"
  heightScale: number;
  diameterScale: number;
}
```

---

## 12. Future Versions (Parking Lot)

### v2
- Additional ring types: stave, open segment, compound miter
- Feature rings with multi-wood pattern editor
- Metric unit support
- Kerf (saw blade width) compensation in calculations
- Board-feet and stock length estimation per ring
- Wood cost estimation
- Export to CSV

### v3+
- Community gallery: publish and browse designs from other users
- Design sharing via link (read-only shareable URL)
- Comments and ratings on community designs

### v4+
- AI design assistant: natural language input ("make a tall vase with a Southwest diamond band")
- AI segment count optimization for a given profile
- AI wood pairing suggestions based on contrast and grain compatibility
