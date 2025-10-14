import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";

export default function NocCanada2025WithAllLevels() {
  // Table state
  const [nocRows, setNocRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [sortCol, setSortCol] = useState("Level");
  const [sortDir, setSortDir] = useState("asc");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  // Fetch and process JSON from /public
  useEffect(() => {
    fetch("/csvjson.json")
      .then((res) => res.json())
      .then((data) => {
        // Accept all levels, ensure proper field mapping
        const mapped = data.map((row, i) => ({
          level: row.Level,
          structure: row["Hierarchical structure"] || "",
          code: String(row["Code - NOC 2021 V1.0"] ?? ""),
          title: row["Class title"] || "",
        }));
        setNocRows(mapped);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.error("Error loading NOC data", e);
      });
  }, []);

  // Filtering
  const filtered = useMemo(() => {
    if (!filter) return nocRows;
    return nocRows.filter(
      (row) =>
        row.level.toString().includes(filter) ||
        row.structure.toLowerCase().includes(filter.toLowerCase()) ||
        row.code.toString().includes(filter) ||
        row.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [nocRows, filter]);

  // Sorting
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      let aVal = a[sortCol.toLowerCase()];
      let bVal = b[sortCol.toLowerCase()];
      if (sortCol === "Level") {
        aVal = Number(aVal);
        bVal = Number(bVal);
      } else {
        aVal = (aVal || "").toString().toLowerCase();
        bVal = (bVal || "").toString().toLowerCase();
      }
      if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
  }, [filtered, sortCol, sortDir]);

  // Pagination
  const totalEntries = sorted.length;
  const totalPages = Math.ceil(totalEntries / perPage);
  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    return sorted.slice(start, start + perPage);
  }, [sorted, page, perPage]);

  // Table header click for sorting
  const handleSort = (col) => {
    if (sortCol === col) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortCol(col);
      setSortDir("asc");
    }
  };

  // Pagination controls
  const gotoPage = (p) => setPage(p);
  const handlePerPage = (e) => {
    setPerPage(Number(e.target.value));
    setPage(1);
  };

  return (
    <section className="noc-2025-section" style={{ padding: "2rem", background: "#f8fafc" }}>
      {/* Main Heading */}
      <h1 style={{
        marginBottom: "1rem",
        color: "#d32f2f",
        fontWeight: "bold",
        fontSize: "2rem"
      }}>
        NOC Canada 2025 – Find Your Occupation In-Demand List
      </h1>

      {/* Intro Section */}
      <div className="noc-2025-container" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
        <div className="noc-2025-image" style={{ flex: "0 0 280px", maxWidth: "320px", minWidth: "220px" }}>
          <Image
            src="/find-my-national-occupation-classification-canada-vjc.webp"
            alt="National Occupational Codes List - Vjc Overseas"
            width={320}
            height={240}
            style={{ borderRadius: "12px", objectFit: "cover", width: "100%", height: "auto", boxShadow: "0 2px 8px rgba(0,0,0,0.09)" }}
            priority
            unoptimized
          />
        </div>

        <div className="noc-2025-content" style={{ flex: "1 1 340px", minWidth: "260px" }}>
          <h2 style={{ marginTop: 0, color: "#333", fontWeight: 500 }}>
            Explore Your Canadian Immigration Path with the Latest NOC Updates
          </h2>
          <p style={{ fontSize: "1.1rem", margin: "1rem 0 0.7rem 0" }}>
            Canada continues to be a top destination for skilled professionals who want to build a secure future abroad. If you are planning to apply for Canadian immigration in 2025, the first step is to check where your profession stands in the updated <strong style={{color:"#000"}}>Canada NOC Code List</strong>. This system identifies occupations that are in demand across the country, helping immigrants align their skills with the needs of the Canadian economy.
          </p>
         <p style={{ 
    fontSize: "1.1rem", 
    margin: "0.7rem 0", 
    color: "#333", 
    lineHeight: 1.6 
  }}>
    At <strong style={{color:"#000"}}>VJC Overseas</strong>, we specialize in evaluating your eligibility, identifying the right NOC code for your profile, and guiding you throughout the visa application process. Whether you’re applying through <a href="https://www.vjcoverseas.com" style={{color:"orange"}}><strong>Best Visa Immigration Consultants</strong></a>, Express Entry, a Provincial Nominee Program (PNP), or other pathways, our experts simplify the journey and help you secure a bright future in Canada.
  </p>


        </div>
      </div>

      {/* NOC 2025 Table Section */}
      <div style={{ margin: "2.5rem auto 0", maxWidth: "1100px" }}>
        <h2 style={{ color: "#d32f2f", marginBottom: "1rem" }}>
          NOC 2025 – All Levels, Codes, and Class Titles
        </h2>

        <div style={{padding:"1rem 0"}}>
          <label style={{marginRight: 8}}>Filter items</label>
          <input
            value={filter}
            onChange={e => { setFilter(e.target.value); setPage(1); }}
            style={{padding: 4, fontSize:"1rem", border:"1px solid #aaa", borderRadius:4, marginRight:16, width:180}}
            placeholder="Search by any column"
          />
          <span style={{marginRight:8}}>Showing {Math.min((page-1)*perPage+1, totalEntries)} to {Math.min(page*perPage, totalEntries)} of {totalEntries} entries</span>
          <label style={{marginRight:4}}>Show</label>
          <select value={perPage} onChange={handlePerPage} style={{padding: 2, fontSize:"1rem", marginRight:4}}>
            {[10, 25, 50, 100].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          entries
        </div>

        <div style={{
          overflowX: "auto",
          background: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          borderRadius: "8px"
        }}>
          <style>{`
            .noc-table-custom thead th {
              background:rgb(255, 136, 0);
              transition: background 0.2s;
            }
            .noc-table-custom tbody tr {
              transition: background 0.2s;
            }
            .noc-table-custom tbody tr:hover {
              background: #fde68a;
            }
            .noc-table-custom tbody tr:active {
              background: #bfdbfe;
            }
          `}</style>
          <table className="noc-table-custom" style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "1.08rem"
          }}>
            <thead>
              <tr>
                <th style={{ padding: "14px", border: "1px solid #e0e0e0", textAlign: "left", cursor: "pointer" }}
                    onClick={() => handleSort('Level')}>
                  Level
                  <span style={{marginLeft:4}}>{sortCol==="Level"?(sortDir==="asc"?"↑":"↓"):"⇅"}</span>
                </th>
                <th style={{ padding: "14px", border: "1px solid #e0e0e0", textAlign: "left", cursor: "pointer" }}
                    onClick={() => handleSort('structure')}>
                  Hierarchical Structure
                  <span style={{marginLeft:4}}>{sortCol==="structure"?(sortDir==="asc"?"↑":"↓"):"⇅"}</span>
                </th>
                <th style={{ padding: "14px", border: "1px solid #e0e0e0", textAlign: "left", cursor: "pointer" }}
                    onClick={() => handleSort('code')}>
                  NOC Code
                  <span style={{marginLeft:4}}>{sortCol==="code"?(sortDir==="asc"?"↑":"↓"):"⇅"}</span>
                </th>
                <th style={{ padding: "14px", border: "1px solid #e0e0e0", textAlign: "left", cursor: "pointer" }}
                    onClick={() => handleSort('title')}>
                  Class Title
                  <span style={{marginLeft:4}}>{sortCol==="title"?(sortDir==="asc"?"↑":"↓"):"⇅"}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={4} style={{padding:20, textAlign:"center"}}>Loading...</td></tr>
              ) : paginated.length === 0 ? (
                <tr><td colSpan={4} style={{padding:20, textAlign:"center"}}>No entries found.</td></tr>
              ) : paginated.map((row, idx) => (
                <tr key={row.code + row.title + row.level}
                    style={{background: idx % 2 === 1 ? "#f7f7f7" : "#fff"}}>
                  <td style={{ padding: "12px 14px", border: "1px solid #e0e0e0" }}>{row.level}</td>
                  <td style={{ padding: "12px 14px", border: "1px solid #e0e0e0" }}>{row.structure}</td>
                  <td style={{ padding: "12px 14px", border: "1px solid #e0e0e0" }}>{row.code}</td>
                  <td style={{ padding: "12px 14px", border: "1px solid #e0e0e0" }}>{row.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "1.5rem 0"}}>
          <button onClick={() => gotoPage(page-1)} disabled={page===1} style={{padding:"0.3rem 0.9rem", marginRight:4, borderRadius:4, border:"1px solid #bbb", background:"#fafafa", cursor:page===1?"not-allowed":"pointer"}}>{"<"}</button>
          {[...Array(Math.min(5, totalPages)).keys()].map(i => {
            let p = i+1;
            if (page > 3 && totalPages > 5) p = page <= totalPages-2 ? page - 3 + i + 1 : totalPages - 4 + i;
            if (p < 1 || p > totalPages) return null;
            return (
              <button
                key={p}
                onClick={() => gotoPage(p)}
                style={{
                  padding:"0.3rem 0.9rem",
                  margin: "0 2px",
                  borderRadius:4,
                  border:"1px solid #bbb",
                  background: p===page ? "#1976d2" : "#fafafa",
                  color: p===page ? "#fff" : "#222",
                  fontWeight: p===page ? "bold" : "normal",
                  cursor: p===page ? "default" : "pointer"
                }}
                disabled={p===page}
              >
                {p}
              </button>
            );
          })}
          {totalPages > 5 && page < totalPages-2 && (
            <span style={{margin:"0 6px"}}>...</span>
          )}
          <button onClick={() => gotoPage(page+1)} disabled={page===totalPages} style={{padding:"0.3rem 0.9rem", marginLeft:4, borderRadius:4, border:"1px solid #bbb", background:"#fafafa", cursor:page===totalPages?"not-allowed":"pointer"}}>{">"}</button>
        </div>
      </div>

      {/* Content Below Table */}
      <div style={{ margin: "2.5rem auto 0", maxWidth: "900px" }}>
        <p style={{ fontSize: "1.08rem", color: "#444" }}>
          For applicants planning to apply for a <a href="https://www.vjcoverseas.com/pr-visas/canada-pr" style={{color:"orange"}}><strong>Canada PR Visa</strong></a>, understanding the NOC classification is the foundation of a successful immigration plan. With expert guidance from <a href="https://www.vjcoverseas.com" style={{color:"orange"}}><strong>VJC Overseas</strong></a>, you can identify your best opportunities and proceed with confidence.
        </p>

        <div style={{ margin: "1.5rem 0" }}>
          <strong>Why the NOC 2025 Update is Important</strong>
          <p style={{ margin: "0.3rem 0 0 0" }}>
            Canada uses the NOC system to assess whether your job role and experience meet labor market requirements. The 2025 update brings significant changes, including restructured classifications and newly added occupations. This updated list is a key tool in determining eligibility for skilled workers planning to apply for permanent residency.
          </p>
        </div>

        <div style={{ margin: "1.5rem 0" }}>
          <strong>Key Highlights of the NOC 2025:</strong>
          <ul style={{ marginLeft: "1.5rem" }}>
            <li>Updated job categories and industry alignments</li>
            <li>More opportunities for skilled workers</li>
            <li>Expanded roles in healthcare, IT, trades, and services</li>
            <li>Enhanced pathways through <strong style={{color:"#000"}}>Express Entry PR Visa Process</strong> and PNP programs</li>
          </ul>
        </div>

        <div style={{ margin: "1.5rem 0" }}>
          <strong>Who Can Benefit From the 2025 NOC List?</strong>
          <p style={{ margin: "0.3rem 0 0 0" }}>
            Professionals in industries experiencing labor shortages will benefit the most. Our <a href="https://www.vjcoverseas.com/pr-visas" style={{color:"orange"}}><strong>PR Visa Consultants</strong></a> can help match your qualifications with the right code to improve your CRS score and strengthen your profile.
          </p>
        </div>

        <div style={{ margin: "1.5rem 0" }}>
          <strong>In-Demand Occupations for 2025 Include:</strong>
          <ul style={{ marginLeft: "1.5rem" }}>
            <li>Healthcare & Nursing Professionals</li>
            <li>IT & Software Developers</li>
            <li>Engineers & Construction Specialists</li>
            <li>Finance & Accounting Experts</li>
            <li>Educators & Social Service Providers</li>
            <li>Logistics & Supply Chain Managers</li>
          </ul>
        </div>

        <div style={{ margin: "1.5rem 0" }}>
          <strong>How We Help You Navigate the NOC System</strong>
          <ul style={{ marginLeft: "1.5rem" }}>
            <li>Personalized identification of your correct NOC code</li>
            <li>Occupation-based eligibility assessment</li>
            <li>Profile building and CRS points calculation</li>
            <li>Guidance for the complete application process</li>
            <li>Support for job-matching and career alignment in Canada</li>
          </ul>
        </div>

        <div style={{ margin: "1.5rem 0" }}>
          <strong>Start Your Canadian Immigration Journey Today</strong>
          <p style={{ margin: "0.3rem 0 0 0" }}>
           Understanding the NOC classification is the foundation of a successful immigration plan With <a href="https://www.vjcoverseas.com/pr-visas/canada-pr/national-occupational-codes-list" style={{color:"orange"}}><strong>Canada NOC Code List</strong></a> and guidance from <strong style={{color:"#000"}}>VJC Overseas</strong>, you can identify your opportunities and proceed confidently. Partner with us today and let us help you secure your future in Canada through the right immigration pathway.
          </p>
        </div>
      </div>
    </section>
  );
}