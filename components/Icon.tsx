// Compatibility shim: provide the same named exports used with
// `@phosphor-icons/react` but backed by `lucide-react` icons.
// This keeps the rest of the codebase unchanged while migrating icons.

import React from "react"
import * as Lucide from "lucide-react"

const I = Lucide as any

// Helper that returns a React wrapper component which forwards any props
// (including legacy `weight` prop) to the selected Lucide icon.
function wrap(name: string | string[], fallback?: string | string[]) {
  const names = Array.isArray(name) ? name : [name]
  const fallbacks = fallback ? (Array.isArray(fallback) ? fallback : [fallback]) : []

  const candidates = [...names, ...fallbacks]

  return (props: any) => {
    // find the first lucide export that exists
    let Comp: any = null
    for (const n of candidates) {
      if (n && I[n]) {
        Comp = I[n]
        break
      }
    }

    if (Comp) return <Comp {...props} />

    // Fallback: render a simple outlined cube SVG so the icon area is never empty
    const size = props?.size ?? 18
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path d="M12 2L3 6v11l9 4 9-4V6l-9-4z" />
        <path d="M3 6l9 4 9-4" />
        <path d="M12 22V10" />
      </svg>
    )
  }
}

// Export wrappers for the Phosphor names used in the codebase.
export const ArrowRight = wrap("ArrowRight")
export const ArrowLeft = wrap("ArrowLeft")
export const ArrowUpRight = wrap("ArrowUpRight")
export const ChevronLeft = wrap("ChevronLeft")
export const ChevronRight = wrap("ChevronRight")

export const Play = wrap("Play")
export const Pause = wrap("Pause")
export const X = wrap("X")
export const Pulse = wrap("Activity", "Zap")
export const UsersThree = wrap("Users")
export const Cube = wrap(["Cube", "Box", "Package", "Archive"])
export const Plug = wrap("Plug")

export const SpeakerHigh = wrap("Volume2", "Volume")
export const ArrowsOut = wrap("Maximize2", "Maximize")

export const ArrowLeftIcon = wrap("ArrowLeft")
export const ArrowRightIcon = wrap("ArrowRight")

export const ShieldCheck = wrap("ShieldCheck", "Shield")
export const Eye = wrap("Eye")
export const EyeSlash = wrap("EyeOff")
export const Camera = wrap("Camera")
export const CameraSlash = wrap("CameraOff")
export const CreditCard = wrap("CreditCard")
export const EnvelopeSimple = wrap("Mail", "Envelope")
export const ShieldWarning = wrap("ShieldAlert", "Shield")
export const Lock = wrap("Lock")
export const ArrowCircleDown = wrap("CircleArrowDown", "ArrowDown")
export const Storefront = wrap("Store", "Shop")
export const CheckCircle = wrap("CheckCircle", "Check")
export const XCircle = wrap("XCircle", "X")
export const Info = wrap("Info")
export const Warning = wrap("TriangleAlert", "AlertTriangle")
export const Person = wrap("User", "Person")
export const Globe = wrap("Globe")
export const Database = wrap("Database")
export const Clock = wrap("Clock")
export const Fingerprint = wrap("Fingerprint")

export const Phone = wrap("Phone")
export const PaperPlaneRight = wrap(["SendHorizontal", "Send"])
export const ChatText = wrap(["MessageSquare", "MessageCircle"])
export const Buildings = wrap("Building", "Buildings")
export const CloudWarning = wrap("CloudAlert", "Cloud")
export const HardDrive = wrap("HardDrive")
export const Lightning = wrap("Zap", "Lightning")
export const MapPin = wrap("MapPin")
export const Monitor = wrap("Monitor")
export const Prohibit = wrap("Ban", "Prohibit")
export const Shield = wrap("Shield")
export const Siren = wrap("Siren", "Bell")
export const Star = wrap("Star")
export const UserCircle = wrap("User", "UserCircle")
export const WifiX = wrap("WifiOff", "Wifi")
export const Wrench = wrap("Wrench")
export const ClipboardText = wrap("Clipboard", "ClipboardList")

export default I
