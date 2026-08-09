import { useRef, useState } from "react"
import { Plus, Trash2 } from "lucide-react"
import { useApp } from "../../context/AppContext"
import FadeIn from "../../components/Common/FadeIn"

export default function AdminGallery() {
  const { galleryImgs, addGalleryImg, removeGalleryImg } = useApp()
  const [urlInput, setUrlInput] = useState("")
  const [error, setError] = useState("")
  const inputRef = useRef(null)

  const handleAdd = (e) => {
    e.preventDefault()
    const url = urlInput.trim()
    if (!url) return
    if (galleryImgs.includes(url)) { setError("Image already exists."); return }
    addGalleryImg(url)
    setUrlInput("")
    setError("")
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-[15px] font-extrabold text-primary sm:text-xl">Gallery</h2>
        <p className="mt-0.5 text-[9px] text-muted-foreground sm:text-sm">{galleryImgs.length} images</p>
      </div>

      {/* Add image */}
      <FadeIn className="rounded-2xl border border-border bg-card p-4 sm:rounded-3xl sm:p-6">
        <h3 className="mb-3 text-[11px] font-bold text-primary sm:text-sm">Add Image by URL</h3>
        <form onSubmit={handleAdd} className="flex gap-2">
          <input
            ref={inputRef}
            value={urlInput}
            onChange={(e) => { setUrlInput(e.target.value); setError("") }}
            placeholder="https://example.com/image.jpg or /images/gallery-1.png"
            className="flex-1 rounded-xl border border-border bg-background px-3 py-2.5 text-[10px] text-primary placeholder:text-muted-foreground focus:border-teal focus:outline-none sm:rounded-2xl sm:text-sm"
          />
          <button
            type="submit"
            className="flex items-center gap-1.5 rounded-xl bg-teal px-3 py-2.5 text-[10px] font-bold text-white transition hover:bg-teal-dark sm:rounded-2xl sm:px-4 sm:text-sm"
          >
            <Plus className="size-3.5" /> Add
          </button>
        </form>
        {error && <p className="mt-1.5 text-[8px] text-red-500 sm:text-xs">{error}</p>}
      </FadeIn>

      {/* Grid */}
      {galleryImgs.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-10 text-center sm:rounded-3xl">
          <p className="text-sm text-muted-foreground">No images yet. Add one above.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {galleryImgs.map((src, i) => (
            <FadeIn key={src} delay={i * 0.04}>
              <div className="group relative aspect-square overflow-hidden rounded-xl border border-border sm:rounded-2xl">
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-75"
                  onError={(e) => { e.target.src = "/placeholder-logo.svg" }}
                />
                <button
                  onClick={() => removeGalleryImg(src)}
                  title="Remove"
                  className="absolute right-2 top-2 grid size-7 place-items-center rounded-full bg-red-500 text-white opacity-0 shadow transition hover:bg-red-600 group-hover:opacity-100"
                >
                  <Trash2 className="size-3.5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2 opacity-0 transition group-hover:opacity-100">
                  <p className="truncate text-[7px] text-white sm:text-[9px]">{src.split("/").pop()}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  )
}
