// src/types/counter.ts
export interface CountItem {
  icon: string
  value?: string | number   // ← added ? → now optional
  description: string
}