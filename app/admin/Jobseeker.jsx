"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
 
export default function VisaDashboard() {
  const [visas, setVisas] = useState([]);
  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    info: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    image: "", // Only ONE image field
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [uploading, setUploading] = useState(false);
 
  useEffect(() => {
    fetch("/api/visas")
      .then((res) => res.json())
      .then(setVisas);
  }, []);
 
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
 
  const handleInfoHtmlFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const text = await file.text();
    setForm({ ...form, info: text });
  };
 
  // Upload/Replace image
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
 
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
 
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
     
      const data = await res.json();
     
      if (data.url) {
        const urlWithTimestamp = `${data.url}?t=${Date.now()}`;
        setForm({ ...form, image: urlWithTimestamp });
        alert("✅ Image uploaded successfully!");
      } else if (data.error) {
        alert("❌ Upload failed: " + data.error);
      }
    } catch (error) {
      alert("❌ Upload failed. Check console for details.");
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };
 
  // Clear/Remove image
  const handleClearImage = () => {
    setForm({ ...form, image: "" });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    const visaData = { ...form };
 
    if (editingIndex !== null) {
      await fetch("/api/visas", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ index: editingIndex, visa: visaData }),
      });
    } else {
      await fetch("/api/visas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(visaData),
      });
    }
 
    const updated = await fetch("/api/visas").then((r) => r.json());
    setVisas(updated);
    setForm({
      name: "",
      slug: "",
      description: "",
      info: "",
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
      image: "",
    });
    setEditingIndex(null);
   
    alert("✅ Visa saved successfully! Changes are now live.");
  };
 
  const handleEdit = (index) => {
    const v = visas[index];
    setForm({
      name: v.name || "",
      slug: v.slug || "",
      description: v.description || "",
      info: v.info || "",
      metaTitle: v.metaTitle || "",
      metaDescription: v.metaDescription || "",
      metaKeywords: v.metaKeywords || "",
      image: v.image || "",
    });
    setEditingIndex(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 
  const handleCancelEdit = () => {
    setForm({
      name: "",
      slug: "",
      description: "",
      info: "",
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
      image: "",
    });
    setEditingIndex(null);
  };
 
  const handleDelete = async (index) => {
    if (!confirm("Are you sure you want to delete this visa?")) return;
   
    await fetch("/api/visas", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ index }),
    });
    const updated = await fetch("/api/visas").then((r) => r.json());
    setVisas(updated);
   
    alert("✅ Visa deleted successfully!");
  };
 
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Visa Dashboard</h1>
 
      {editingIndex !== null && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4 rounded">
          <p className="font-semibold text-yellow-800">
            ✏️ Editing Mode: You are currently editing a visa entry
          </p>
        </div>
      )}
 
      <form
        onSubmit={handleSubmit}
        className="space-y-3 bg-gray-100 p-4 rounded-lg mb-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Visa Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="slug"
          placeholder="Path (slug)"
          value={form.slug}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="metaTitle"
          placeholder="Meta Title"
          value={form.metaTitle}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="metaDescription"
          placeholder="Meta Description"
          value={form.metaDescription}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="metaKeywords"
          placeholder="Meta Keywords (comma separated)"
          value={form.metaKeywords}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
 
        {/* Single Image Section */}
        <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 bg-white">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            📸 Visa Image
          </label>
 
          <input
            type="text"
            name="image"
            placeholder="Image URL (paste link or upload below)"
            value={form.image}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
          />
 
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <label
              className={`${
                uploading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 cursor-pointer"
              } text-white px-5 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2`}
            >
              <span>{uploading ? "⏳ Uploading..." : form.image ? "🔄 Replace Image" : "📁 Choose File"}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                disabled={uploading}
              />
            </label>
           
            {form.image && (
              <button
                type="button"
                onClick={handleClearImage}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all"
              >
                🗑️ Remove Image
              </button>
            )}
           
            <span className="text-sm text-gray-600">
              {form.image ? "Click 'Replace Image' to upload a new one" : "Upload from your computer"}
            </span>
          </div>
 
          {form.image && (
            <div className="mt-3 border rounded-lg p-2 bg-gray-50">
              <p className="text-xs text-gray-500 mb-2">Current Image Preview:</p>
              <Image
                src={form.image}
                alt="Visa Image"
                width={120}
                height={80}
                style={{ objectFit: "cover", borderRadius: "8px" }}
                unoptimized
                key={form.image}
              />
              <p className="text-xs text-gray-400 mt-1 break-all">{form.image}</p>
            </div>
          )}
        </div>
 
        <textarea
          name="description"
          placeholder="Main Heading Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="2"
        />
 
        <textarea
          name="info"
          placeholder="Bottom Info Box Content (HTML allowed)"
          value={form.info}
          onChange={handleChange}
          className="w-full p-3 border rounded h-40"
        />
        <input
          type="file"
          accept=".html,.htm,.txt"
          onChange={handleInfoHtmlFileChange}
          className="w-full p-2 border rounded"
        />
 
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-semibold"
          >
            {editingIndex !== null ? "💾 Update Visa" : "➕ Add Visa"}
          </button>
         
          {editingIndex !== null && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition font-semibold"
            >
              ❌ Cancel Edit
            </button>
          )}
        </div>
      </form>
 
      {/* List */}
      <h2 className="text-xl font-semibold mb-2">All Visas</h2>
      {visas.length === 0 ? (
        <p className="text-gray-500">No visas added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Slug</th>
                <th className="border p-2">Meta Title</th>
                <th className="border p-2">Meta Description</th>
                <th className="border p-2">Meta Keywords</th>
                <th className="border p-2">Image</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visas.map((visa, index) => (
                <tr key={index} className={editingIndex === index ? "bg-yellow-50" : ""}>
                  <td className="border p-2">{visa.name}</td>
                  <td className="border p-2">/{visa.slug}</td>
                  <td className="border p-2">{visa.metaTitle}</td>
                  <td className="border p-2">{visa.metaDescription}</td>
                  <td className="border p-2">{visa.metaKeywords}</td>
                  <td className="border p-2">
                    {visa.image && (
                      <Image
                        src={visa.image}
                        alt={visa.name}
                        width={60}
                        height={40}
                        style={{ objectFit: "cover", borderRadius: "4px" }}
                        unoptimized
                        key={visa.image}
                      />
                    )}
                  </td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                      disabled={editingIndex === index}
                    >
                      {editingIndex === index ? "✏️ Editing..." : "✏️ Edit"}
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
 
 