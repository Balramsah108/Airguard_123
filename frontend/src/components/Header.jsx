import React from "react";
import { User } from "lucide-react";

export default function Header({ onOpenProfile, userProfile }) {
  const hasCustomProfile = userProfile?.groups?.some(g => g !== "general");

  return (
    <header style={{
      background:   "var(--bg-secondary)",
      borderBottom: "1px solid var(--border)",
      padding:      "0 16px",
      position:     "sticky",
      top:          0,
      zIndex:       100
    }}>
      <div style={{
        maxWidth:      "900px",
        margin:        "0 auto",
        height:        "60px",
        display:       "flex",
        alignItems:    "center",
        justifyContent: "space-between"
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "22px" }}>🌿</span>
          <div>
            <h1 style={{
              fontSize:   "18px",
              fontWeight: "700",
              color:      "var(--text-primary)",
              lineHeight: "1.1"
            }}>
              AirGuard
            </h1>
            <p style={{ fontSize: "11px", color: "var(--text-muted)", lineHeight: "1" }}>
              Know before you breathe
            </p>
          </div>
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
            Powered by&nbsp;
            <span style={{ color: "#ff9900", fontWeight: "600" }}>AWS</span>
          </span>

          {/* WhatsApp Bot Button */}
          <a
            href="https://wa.me/15556447862"
            target="_blank"
            rel="noopener noreferrer"
            title="Text 'Delhi AQI' to get air quality on WhatsApp"
            aria-label="Open WhatsApp bot"
            style={{
              display:        "flex",
              alignItems:     "center",
              gap:            "6px",
              background:     "rgba(37,211,102,0.12)",
              border:         "1px solid rgba(37,211,102,0.4)",
              borderRadius:   "8px",
              padding:        "6px 12px",
              color:          "#25D366",
              fontSize:       "13px",
              fontWeight:     "600",
              textDecoration: "none",
              cursor:         "pointer",
              transition:     "all 0.2s",
              whiteSpace:     "nowrap"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(37,211,102,0.22)";
              e.currentTarget.style.borderColor = "#25D366";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(37,211,102,0.12)";
              e.currentTarget.style.borderColor = "rgba(37,211,102,0.4)";
            }}
          >
            <span style={{ fontSize: "15px" }}>💬</span>
            WhatsApp Bot
          </a>

          <button
            onClick={onOpenProfile}
            title="Set your health profile for personalized advice"
            aria-label="Open health profile settings"
            style={{
              display:      "flex",
              alignItems:   "center",
              gap:          "6px",
              background:   hasCustomProfile ? "rgba(16,185,129,0.15)" : "var(--bg-primary)",
              border:       `1px solid ${hasCustomProfile ? "#10b981" : "var(--border)"}`,
              borderRadius: "8px",
              padding:      "6px 12px",
              color:        hasCustomProfile ? "#10b981" : "var(--text-muted)",
              fontSize:     "13px",
              cursor:       "pointer",
              transition:   "all 0.2s"
            }}
          >
            <User size={14} />
            {hasCustomProfile
              ? `Profile: ${userProfile.groups.filter(g => g !== "general").join(", ")}`
              : "Set profile"
            }
          </button>
        </div>
      </div>
    </header>
  );
}
