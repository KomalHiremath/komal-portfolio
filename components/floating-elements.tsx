"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating particles */}
      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400/25 rounded-full animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      />
      <div
        className="absolute top-2/3 right-1/3 w-1 h-1 bg-green-400/20 rounded-full animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
      />

      {/* Floating geometric shapes */}
      <div
        className="absolute top-1/5 right-1/5 w-8 h-8 border border-blue-400/10 rotate-45 animate-spin"
        style={{ animationDuration: "20s" }}
      />
      <div className="absolute bottom-1/5 left-1/5 w-6 h-6 border border-purple-400/10 animate-pulse" />
      <div
        className="absolute top-3/5 left-1/6 w-4 h-4 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full animate-ping"
        style={{ animationDuration: "4s" }}
      />
    </div>
  )
}
