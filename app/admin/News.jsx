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
  const [uploading, setUploading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });

  // ✅ Show notification
  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000);
  };

  // ✅ Load all news
  const loadNews = async () => {
    try {
      const res = await fetch("/api/news");
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
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  const isValid = (obj) => {
    if (!obj.title?.trim()) return false;
    if (!obj.content?.trim()) return false;
    return true;
  };

  // ✅ Add news
  const handleAdd = async () => {
    const newNews = { ...form, slug: slugify(form.title) };

    if (!isValid(newNews)) {
      showNotification("⚠️ Title and Content are required.", "error");
      return;
    }

    try {
      await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNews),
      });

      resetForm();
      await loadNews(); // ✅ Auto-refresh
      showNotification("✅ News added successfully!");
    } catch (err) {
      console.error("Add failed:", err);
      showNotification("❌ Failed to add news", "error");
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
      await fetch("/api/news", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedNews),
      });

      resetForm();
      await loadNews(); // ✅ Auto-refresh
      showNotification("✅ News updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      showNotification("❌ Failed to update news", "error");
    }
  };

  // ✅ Delete news
  const handleDelete = async (slug) => {
    if (!confirm("Are you sure you want to delete this news?")) return;

    try {
      await fetch("/api/news", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      await loadNews(); // ✅ Auto-refresh
      showNotification("✅ News deleted successfully!");
    } catch (err) {
      console.error("Delete failed:", err);
      showNotification("❌ Failed to delete news", "error");
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
  };

  // ✅ Remove image
  const removeImage = () => {
    setForm({ ...form, image: "" });
  };

  return (
    <div className="p-4 border rounded mb-8 bg-gray-50">
      <h1 className="text-xl font-bold mb-4">📰 Manage News</h1>

      {/* ✅ NOTIFICATION */}
      {notification.show && (
        <div
          className={`mb-4 p-3 rounded ${
            notification.type === "error"
              ? "bg-red-100 text-red-700 border border-red-300"
              : "bg-green-100 text-green-700 border border-green-300"
          }`}
        >
          {notification.message}
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

        {/* ✅ IMAGE UPLOAD with Remove/Replace buttons */}
        <div className="border p-4 rounded bg-white">
          <label className="block text-sm font-medium mb-2">
            Upload Image {uploading && "(Processing...)"}
          </label>

          {form.image ? (
            <div className="space-y-2">
              <img
                src={form.image}
                alt="Preview"
                className="w-32 h-32 object-cover rounded"
              />
              <div className="flex gap-2">
                <button
                  onClick={removeImage}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                >
                  🗑 Remove Image
                </button>
                <label className="bg-blue-500 text-white px-3 py-1 rounded text-sm cursor-pointer">
                  🔄 Replace Image
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={uploading}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      if (file.size > 5000000) {
                        showNotification("Image too large! Max 5MB", "error");
                        return;
                      }

                      setUploading(true);
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setForm({ ...form, image: reader.result });
                        setUploading(false);
                        showNotification("✅ Image replaced!");
                      };
                      reader.readAsDataURL(file);
                    }}
                  />
                </label>
              </div>
            </div>
          ) : (
            <input
              type="file"
              accept="image/*"
              disabled={uploading}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;

                if (file.size > 5000000) {
                  showNotification("Image too large! Max 5MB", "error");
                  return;
                }

                setUploading(true);
                const reader = new FileReader();
                reader.onloadend = () => {
                  setForm({ ...form, image: reader.result });
                  setUploading(false);
                };
                reader.readAsDataURL(file);
              }}
              className="border p-2 w-full rounded"
            />
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
    </div>
  );
}
