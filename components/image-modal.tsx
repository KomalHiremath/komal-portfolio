"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

interface ImageModalProps {
  src: string
  alt: string
  title: string
}

export function ImageModal({ src, alt, title }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Trigger */}
      <div className="relative cursor-pointer group" onClick={() => setIsOpen(true)}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={400}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Zoom overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100">
            <ZoomIn className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 hover:scale-110 transform duration-200"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Title */}
            <div className="absolute -top-12 left-0 text-white font-medium text-lg animate-in slide-in-from-left duration-500">
              {title}
            </div>

            {/* Image */}
            <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                width={800}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
