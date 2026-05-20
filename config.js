// =============================================
// SHINTAKU WORKS システム設定
// ⚠️ URLやIDが変わった時はここだけ書き換えてください
// =============================================
const CONFIG = {

  // ===== API設定 =====
  GAS_URL: "https://script.google.com/macros/s/AKfycbxP7Xw2nUEUhdh8Nqtr7fOo7qz2VcJfOwy83Sh6nGv3NnfxaBpbPMUpskXy8B1wqGg0/exec",
  LIFF_ID_SHIFT:      "2010136950-3fse6ErK",
  LIFF_ID_ATTENDANCE: "2010136950-uGfcZEcw",

  // ===== デザイン設定 =====
  // ここを変えると全ページのデザインが変わります
  DESIGN: {
    // --- フォント ---
    FONT_DISPLAY: "'Syne', sans-serif",   // 見出し・ブランド名
    FONT_BODY:    "'DM Sans', sans-serif", // 本文

    // --- ベースカラー ---
    COLOR_BG:      "#f0f0ec",  // ページ背景
    COLOR_CARD:    "#ffffff",  // カード背景
    COLOR_BRAND:   "#1a1a1a",  // ヘッダー・ブランド色
    COLOR_TEXT:    "#1a1a1a",  // メインテキスト
    COLOR_SUBTEXT: "#888888",  // サブテキスト
    COLOR_DIVIDER: "#e8e8e4",  // 区切り線

    // --- ステータスカラー（index.html）---
    COLOR_OK:          "#1a6644",
    COLOR_OK_BG:       "#edfaf3",
    COLOR_OK_BORDER:   "#a3d9bf",
    COLOR_ERROR:       "#9b1c1c",
    COLOR_ERROR_BG:    "#fff1f1",
    COLOR_ERROR_BORDER:"#f5a8a8",

    // --- シフトスロットカラー（shift.html）---
    SLOT_OPEN:       "#22c55e",  // 予約可
    SLOT_OPEN_TXT:   "#ffffff",
    SLOT_MINE:       "#1a1a1a",  // 自分の予約
    SLOT_MINE_TXT:   "#ffffff",
    SLOT_OTHER:      "#d1d5db",  // 他人の予約
    SLOT_OTHER_TXT:  "#6b7280",
    SLOT_FIXED:      "#38bdf8",  // 確定済み
    SLOT_FIXED_TXT:  "#ffffff",
    SLOT_CHANGE:     "#f59e0b",  // 変更申請
    SLOT_CHANGE_TXT: "#ffffff",
    SLOT_LOCK:       "#ef4444",  // ロック
    SLOT_LOCK_TXT:   "#ffffff",
    SLOT_PAST:       "#e5e7eb",  // 過去・期間外
    SLOT_PAST_TXT:   "#9ca3af",
  },
};

// =============================================
// CSS変数をページに適用（自動実行）
// =============================================
(function applyDesign() {
  const d = CONFIG.DESIGN;
  const vars = {
    "--font-display":    d.FONT_DISPLAY,
    "--font-body":       d.FONT_BODY,
    "--bg":              d.COLOR_BG,
    "--card":            d.COLOR_CARD,
    "--brand":           d.COLOR_BRAND,
    "--text-main":       d.COLOR_TEXT,
    "--text-sub":        d.COLOR_SUBTEXT,
    "--divider":         d.COLOR_DIVIDER,
    "--ok":              d.COLOR_OK,
    "--ok-bg":           d.COLOR_OK_BG,
    "--ok-border":       d.COLOR_OK_BORDER,
    "--error":           d.COLOR_ERROR,
    "--error-bg":        d.COLOR_ERROR_BG,
    "--error-border":    d.COLOR_ERROR_BORDER,
    "--slot-open":       d.SLOT_OPEN,
    "--slot-open-txt":   d.SLOT_OPEN_TXT,
    "--slot-mine":       d.SLOT_MINE,
    "--slot-mine-txt":   d.SLOT_MINE_TXT,
    "--slot-other":      d.SLOT_OTHER,
    "--slot-other-txt":  d.SLOT_OTHER_TXT,
    "--slot-fixed":      d.SLOT_FIXED,
    "--slot-fixed-txt":  d.SLOT_FIXED_TXT,
    "--slot-change":     d.SLOT_CHANGE,
    "--slot-change-txt": d.SLOT_CHANGE_TXT,
    "--slot-lock":       d.SLOT_LOCK,
    "--slot-lock-txt":   d.SLOT_LOCK_TXT,
    "--slot-past":       d.SLOT_PAST,
    "--slot-past-txt":   d.SLOT_PAST_TXT,
  };
  const root = document.documentElement;
  for (const [k, v] of Object.entries(vars)) {
    root.style.setProperty(k, v);
  }

  // フォントをbodyにも適用
  document.addEventListener("DOMContentLoaded", () => {
    document.body.style.fontFamily = d.FONT_BODY;
  });
})();
