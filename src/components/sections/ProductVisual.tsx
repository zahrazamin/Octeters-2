import { Table2 } from "lucide-react";

export default function ProductVisual() {
  return (
    <div
      style={{
        backgroundColor: "#161616",
        padding: "0 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1495px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            height: "500px",
            background: "#1C1C1C",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px 12px 0 0",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Fake browser chrome */}
          <div
            style={{
              height: "40px",
              flexShrink: 0,
              background: "#222222",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#FF5F57",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#FEBC2E",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#28C840",
              }}
            />
          </div>

          {/* Content area */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Table2 size={64} color="rgba(255,255,255,0.12)" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </div>
  );
}
