"use client";
import { useEffect, useState } from "react";
import slugify from "@/app/latest-news/slugify";

export default function AdminNews() {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({
    title: "",
    summary: "",
    image: "",
    tag: "",
    time: "",
    readTime: "",
    content: "",
  });
  const [editSlug, setEditSlug] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [notification, setNotification] = useState(null);

  // ✅ Show notification
  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // ✅ Load all news with cache-busting
  const loadNews = async () => {
    try {
      const res = await fetch("/api/news", {
        method: "GET",
        cache: "no-store", // Disable caching
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "Pragma": "no-cache",
          "Expires": "0",
        },
      });
      
      if (!res.ok) {
        throw new Error("Failed to fetch news");
      }
      
      let data = await res.json();

      const fixedData = data
        .map((n) => ({
          ...n,
          content: n.content || n.description || "",
        }))
        .filter((n) => n.title?.trim() && n.slug?.trim());

      setNews(fixedData);
    } catch (err) {
      console.error("Failed to load news:", err);
      showNotification("❌ Failed to load news.", "error");
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  // ✅ Validation helper
  const isValid = (obj) => {
    if (!obj.title?.trim()) return false;
    if (!obj.content?.trim()) return false;
    return true;
  };

  // ✅ Handle image file upload and convert to base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      showNotification("⚠️ Please upload a valid image file.", "error");
      return;
    }

    // Validate file size (max 5MB for better performance)
    if (file.size > 5 * 1024 * 1024) {
      showNotification("⚠️ Image size should be less than 5MB.", "error");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setForm({ ...form, image: base64String });
      setImagePreview(base64String);
      showNotification("✅ Image uploaded successfully!", "success");
    };
    reader.readAsDataURL(file);
  };

  // ✅ Replace/Remove image
  const handleRemoveImage = () => {
    setForm({ ...form, image: "" });
    setImagePreview(null);
    showNotification("🗑 Image removed successfully!", "success");
  };

  // ✅ Add news
  const handleAdd = async () => {
    const newNews = { ...form, slug: slugify(form.title) };

    if (!isValid(newNews)) {
      showNotification("⚠️ Title and Content are required.", "error");
      return;
    }

    try {
      const response = await fetch("/api/news", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify(newNews),
      });

      if (!response.ok) {
        throw new Error("Failed to add news");
      }

      resetForm();
      await loadNews(); // Wait for reload to complete
      showNotification("✅ News added successfully!", "success");
    } catch (err) {
      console.error("Add failed:", err);
      showNotification("❌ Failed to add news.", "error");
    }
  };

  // ✅ Update news
  const handleUpdate = async () => {
    if (!isValid(form)) {
      showNotification("⚠️ Title and Content are required.", "error");
      return;
    }

    const updatedNews = {
      ...form,
      slug: editSlug,
    };

    try {
      const response = await fetch("/api/news", {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify(updatedNews),
      });

      if (!response.ok) {
        throw new Error("Failed to update news");
      }

      resetForm();
      await loadNews(); // Wait for reload to complete
      showNotification("✅ News updated successfully!", "success");
    } catch (err) {
      console.error("Update failed:", err);
      showNotification("❌ Failed to update news.", "error");
    }
  };

  // ✅ Delete news
  const handleDelete = async (slug) => {
    if (!slug) {
      if (!confirm("Delete empty/invalid entries?")) return;
    } else {
      if (!confirm("Are you sure you want to delete this news?")) return;
    }

    try {
      const response = await fetch("/api/news", {
        method: "DELETE",
        headers: { 
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify({ slug }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete news");
      }

      await loadNews(); // Wait for reload to complete
      showNotification("🗑 News deleted successfully!", "success");
    } catch (err) {
      console.error("Delete failed:", err);
      showNotification("❌ Failed to delete news.", "error");
    }
  };

  // ✅ Edit news
  const handleEdit = (n) => {
    setForm({
      title: n.title,
      summary: n.summary,
      image: n.image,
      tag: n.tag,
      time: n.time,
      readTime: n.readTime,
      content: n.content || n.description || "",
    });
    setEditSlug(n.slug);
    setImagePreview(n.image || null);
  };

  // ✅ Reset form
  const resetForm = () => {
    setForm({
      title: "",
      summary: "",
      image: "",
      tag: "",
      time: "",
      readTime: "",
      content: "",
    });
    setEditSlug(null);
    setImagePreview(null);
  };

  return (
    <div className="p-4 border rounded mb-8 bg-gray-50">
      <h1 className="text-xl font-bold mb-4">📰 Manage News</h1>

      {/* ✅ NOTIFICATION TOAST */}
      {notification && (
        <div
          className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 animate-slide-in ${
            notification.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          <span className="text-lg font-medium">{notification.message}</span>
          <button
            onClick={() => setNotification(null)}
            className="ml-2 text-white hover:text-gray-200 font-bold text-xl"
          >
            ×
          </button>
        </div>
      )}

      {/* FORM */}
      <div className="mb-6 grid gap-3">
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title *"
          className="border p-2 w-full rounded"
        />
        <textarea
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
          placeholder="Summary"
          className="border p-2 w-full rounded"
        />

        {/* ✅ IMAGE UPLOAD SECTION */}
        <div className="border p-3 rounded bg-white">
          <label className="block text-sm font-medium mb-2">Image</label>

          {imagePreview ? (
            <div className="space-y-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full max-w-xs h-40 object-cover rounded border"
              />
              <div className="flex gap-2">
                <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition">
                  🔄 Replace Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  🗑 Remove
                </button>
              </div>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-blue-500 transition">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF (MAX. 5MB)</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          )}
        </div>

        <input
          value={form.tag}
          onChange={(e) => setForm({ ...form, tag: e.target.value })}
          placeholder="Tag"
          className="border p-2 w-full rounded"
        />
        <input
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          placeholder="Time"
          className="border p-2 w-full rounded"
        />
        <input
          value={form.readTime}
          onChange={(e) => setForm({ ...form, readTime: e.target.value })}
          placeholder="Read Time"
          className="border p-2 w-full rounded"
        />
        <textarea
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          placeholder="Full Content (HTML allowed) *"
          rows={6}
          className="border p-2 w-full rounded"
        />

        {editSlug ? (
          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              ✅ Update News
            </button>
            <button
              onClick={resetForm}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              ❌ Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded w-fit"
          >
            ➕ Add News
          </button>
        )}
      </div>

      {/* LIST */}
      <div className="max-h-64 overflow-y-auto border rounded p-2 bg-white">
        <ul className="space-y-3">
          {news.map((n) => (
            <li
              key={n.slug || Math.random()}
              className="flex justify-between items-start border p-3 rounded bg-gray-50 shadow-sm"
            >
              <div className="flex gap-3 flex-1">
                {n.image && (
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                )}
                <div>
                  <strong className="block">{n.title}</strong>
                  <p className="text-sm text-gray-600">{n.summary}</p>
                  <p className="text-xs text-gray-400">
                    {n.tag} • {n.time} • {n.readTime}
                  </p>
                  {n.content && (
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {n.content.replace(/<[^>]+>/g, "").slice(0, 100)}...
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(n)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(n.slug)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  🗑 Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ ADD ANIMATION STYLES */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
