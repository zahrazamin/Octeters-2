"use client";

const font = "var(--font-rethink-sans), 'Rethink Sans', sans-serif";

const variants = {
  light: {
    background: "#E6E3E0",
    color: "#000000",
    hoverBg: "#D4D0CD",
  },
  dark: {
    background: "#000000",
    color: "#ffffff",
    hoverBg: "#1E1E1E",
  },
};

interface ButtonProps {
  variant?: "light" | "dark";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ variant = "light", children, onClick, className }: ButtonProps) {
  const v = variants[variant];

  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        background: v.background,
        color: v.color,
        fontSize: "23px",
        lineHeight: "26px",
        fontWeight: 400,
        padding: "18px 41px",
        borderRadius: "9999px",
        border: "none",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        fontFamily: font,
        transition: "background 0.15s ease, transform 0.15s ease",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.background = v.hoverBg;
        el.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.background = v.background;
        el.style.transform = "translateY(0)";
      }}
    >
      {children}
    </button>
  );
}
