import type { ChapterDef, SceneDef, SubtitleCue } from '@/data/productionData'

export const CANVAS_WIDTH = 1920
export const CANVAS_HEIGHT = 1080

/**
 * Minimal cross-platform 2D context interface satisfied by both
 * browser CanvasRenderingContext2D and @napi-rs/canvas SKRSContext2D.
 */
export interface CanvasCtx {
  canvas: { width: number; height: number }
  fillStyle: string | CanvasGradient | CanvasPattern
  strokeStyle: string | CanvasGradient | CanvasPattern
  lineWidth: number
  lineCap: CanvasLineCap
  lineJoin: CanvasLineJoin
  miterLimit: number
  globalAlpha: number
  globalCompositeOperation: GlobalCompositeOperation
  font: string
  textAlign: CanvasTextAlign
  textBaseline: CanvasTextBaseline
  shadowColor: string
  shadowBlur: number
  shadowOffsetX: number
  shadowOffsetY: number
  save(): void
  restore(): void
  translate(x: number, y: number): void
  rotate(angle: number): void
  scale(x: number, y: number): void
  transform(a: number, b: number, c: number, d: number, e: number, f: number): void
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void
  beginPath(): void
  closePath(): void
  moveTo(x: number, y: number): void
  lineTo(x: number, y: number): void
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void
  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number,
  ): void
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean,
  ): void
  ellipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean,
  ): void
  rect(x: number, y: number, w: number, h: number): void
  fill(fillRule?: CanvasFillRule): void
  stroke(): void
  clip(fillRule?: CanvasFillRule): void
  clearRect(x: number, y: number, w: number, h: number): void
  fillRect(x: number, y: number, w: number, h: number): void
  strokeRect(x: number, y: number, w: number, h: number): void
  fillText(text: string, x: number, y: number, maxWidth?: number): void
  strokeText(text: string, x: number, y: number, maxWidth?: number): void
  measureText(text: string): { width: number }
  setLineDash(segments: number[]): void
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient
  createRadialGradient(
    x0: number,
    y0: number,
    r0: number,
    x1: number,
    y1: number,
    r1: number,
  ): CanvasGradient
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  drawImage(image: any, ...args: number[]): void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RenderAssets = Record<string, any>

export interface FrameState {
  frame: number
  time: number
  fps: number
  scene: SceneDef
  sceneIndex: number
  prevScene: SceneDef | null
  sceneTime: number
  sceneDuration: number
  sceneProgress: number
  transitionAlpha: number
  chapter: ChapterDef
  chapterIndex: number
  chapterProgress: number
  subtitle: SubtitleCue | null
  subtitleProgress: number
  subtitleTime: number
  rms: number
  rmsSmooth: number
  rmsDelta: number
  beatPulse: number
  isRoastMoment: boolean
}

export interface RenderOptions {
  showSubtitles?: boolean
  showHud?: boolean
  fontFamily?: string
  monoFontFamily?: string
}

export interface CharacterPlacement {
  x: number
  y: number
  scale: number
  flip?: boolean
  visible?: boolean
  propOverride?: 'none' | 'phone' | 'pen' | 'book' | 'einstein_wig' | 'grad_cap' | 'crown'
}
