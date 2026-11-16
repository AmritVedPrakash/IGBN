import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Coins,
  Download,
  Eye,
  FileDown,
  RefreshCw,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
  X,
} from "lucide-react";
import "./salesEarningsWorkspace.css";

const salesRows = [
  { book: "Echoes of a New Dawn", language: "English", flag: "🇺🇸", edition: "Original", format: "eBook, Paperback", paidSales: 500, rentals: 15, freeReads: 700, readers: 1100, earnings: 1600 },
  { book: "Echoes of a New Dawn", language: "Hindi", flag: "🇮🇳", edition: "Translation", format: "eBook", paidSales: 220, rentals: 25, freeReads: 400, readers: 700, earnings: 650 },
  { book: "Echoes of a New Dawn", language: "Spanish", flag: "🇪🇸", edition: "Translation", format: "eBook", paidSales: 150, rentals: 20, freeReads: 300, readers: 480, earnings: 450 },
  { book: "Echoes of a New Dawn", language: "French", flag: "🇫🇷", edition: "Translation", format: "eBook", paidSales: 100, rentals: 15, freeReads: 250, readers: 450, earnings: 350 },
  { book: "The Inner Light", language: "English", flag: "🇺🇸", edition: "Original", format: "eBook, Paperback", paidSales: 120, rentals: 10, freeReads: 220, readers: 370, earnings: 400 },
  { book: "The Inner Light", language: "Hindi", flag: "🇮🇳", edition: "Translation", format: "eBook", paidSales: 60, rentals: 15, freeReads: 250, readers: 300, earnings: 140 },
  { book: "The Inner Light", language: "Spanish", flag: "🇪🇸", edition: "Translation", format: "eBook", paidSales: 70, rentals: 20, freeReads: 200, readers: 300, earnings: 210 },
  { book: "The Inner Light", language: "French", flag: "🇫🇷", edition: "Translation", format: "eBook", paidSales: 40, rentals: 20, freeReads: 160, readers: 380, earnings: 180 },
];

const periods = {
  "30": {
    label: "1 Sep 2026 – 15 Oct 2026",
    scale: 1,
    refunds: 18,
    earnings: 3980,
    chart: {
      Daily: {
        sales: [82, 125, 108, 166, 142, 215, 187, 252, 208, 271, 248, 303],
        rentals: [42, 59, 48, 73, 68, 96, 80, 111, 94, 128, 117, 146],
        reads: [115, 145, 130, 176, 171, 224, 205, 264, 242, 306, 286, 330],
        readers: [205, 255, 230, 294, 278, 351, 330, 405, 380, 450, 427, 490],
      },
      Weekly: {
        sales: [78, 105, 132, 170, 192, 235, 260, 303],
        rentals: [40, 51, 65, 75, 91, 112, 124, 146],
        reads: [108, 135, 164, 196, 220, 256, 291, 330],
        readers: [198, 236, 278, 315, 356, 400, 448, 490],
      },
      Monthly: {
        sales: [104, 151, 196, 250, 303, 360],
        rentals: [47, 70, 89, 113, 146, 174],
        reads: [126, 181, 227, 276, 330, 390],
        readers: [225, 286, 347, 411, 490, 565],
      },
    },
  },
  "90": {
    label: "18 Jul 2026 – 15 Oct 2026",
    scale: 2.4,
    refunds: 43,
    earnings: 9552,
  },
  "365": {
    label: "15 Oct 2025 – 15 Oct 2026",
    scale: 8.6,
    refunds: 155,
    earnings: 34228,
  },
};

const countryData = [
  { country: "India", flag: "🇮🇳", share: 28 },
  { country: "United States", flag: "🇺🇸", share: 18 },
  { country: "Germany", flag: "🇩🇪", share: 12 },
  { country: "United Kingdom", flag: "🇬🇧", share: 9 },
  { country: "Canada", flag: "🇨🇦", share: 7 },
  { country: "Australia", flag: "🇦🇺", share: 6 },
  { country: "UAE", flag: "🇦🇪", share: 5 },
  { country: "Others", flag: "🌐", share: 15 },
];

const refunds = [
  { date: "5 Oct 2026", book: "Echoes of a New Dawn", type: "Refund (Sale)", amount: "-$5.99", reason: "Duplicate Purchase" },
  { date: "1 Oct 2026", book: "The Mindful Path", type: "Refund (Rental)", amount: "-$2.99", reason: "Reader Request" },
  { date: "28 Sep 2026", book: "Stories of Resilience", type: "Refund (Sale)", amount: "-$3.99", reason: "Payment Issue" },
];

const revenueItems = [
  { label: "Paid Sales", amount: 2450, color: "#77d891" },
  { label: "Rentals", amount: 920, color: "#84b8f5" },
  { label: "Other (e.g. borrowing)", amount: 270, color: "#ad83ec" },
  { label: "Royalties", amount: 220, color: "#e5bf54" },
  { label: "Bonuses", amount: 120, color: "#96a6b8" },
];

const chartColors = {
  sales: "#f4ca50",
  rentals: "#69b9ff",
  reads: "#b381eb",
  readers: "#7ed991",
};

const chartLabels = {
  Daily: ["1 Sep", "4 Sep", "8 Sep", "12 Sep", "15 Sep", "18 Sep", "22 Sep", "26 Sep", "30 Sep", "4 Oct", "10 Oct", "15 Oct"],
  Weekly: ["1 Sep", "8 Sep", "15 Sep", "22 Sep", "29 Sep", "6 Oct", "12 Oct", "15 Oct"],
  Monthly: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
};

function formatNumber(value) {
  return Math.round(value).toLocaleString("en-US");
}

function formatCurrency(value) {
  return `$${formatNumber(value)}`;
}

function ChartLine({ values, color, max, labels }) {
  const points = values.map((value, index) => {
    const x = 38 + (index * 582) / Math.max(1, values.length - 1);
    const y = 116 - (value / max) * 96;
    return `${x},${y}`;
  }).join(" ");

  return (
    <>
      <polyline points={points} stroke={color} />
      {values.map((value, index) => {
        const x = 38 + (index * 582) / Math.max(1, values.length - 1);
        const y = 116 - (value / max) * 96;
        return <circle key={`${color}-${index}`} cx={x} cy={y} r="2.8" fill={color}><title>{labels[index]}: {value}</title></circle>;
      })}
    </>
  );
}

function PerformanceChart({ period, interval, bookShare }) {
  const source = period.chart || periods["30"].chart;
  const data = source[interval];
  const labels = chartLabels[interval];
  const adjusted = Object.fromEntries(
    Object.entries(data).map(([key, values]) => [key, values.map((value) => value * period.scale * bookShare)]),
  );
  const max = Math.max(...Object.values(adjusted).flat());
  const lines = [
    ["sales", "Paid Sales"],
    ["rentals", "Rentals"],
    ["reads", "Free Reads"],
    ["readers", "Total Readers"],
  ];

  return (
    <div className="author-sales-trend-graph">
      <div className="author-sales-chart-legend">
        {lines.map(([key, label]) => <span key={key}><i style={{ backgroundColor: chartColors[key] }} />{label}</span>)}
      </div>
      <svg viewBox="0 0 640 150" role="img" aria-label={`${interval} sales and reader performance trend`}>
        {[20, 44, 68, 92, 116].map((y, index) => (
          <g key={y}><line x1="38" x2="625" y1={y} y2={y} /><text x="1" y={y + 4}>{formatNumber(max * (4 - index) / 4)}</text></g>
        ))}
        {lines.map(([key]) => <ChartLine key={key} values={adjusted[key]} color={chartColors[key]} max={max} labels={labels} />)}
        {labels.map((label, index) => {
          if (labels.length > 8 && index % 2 !== 0 && index !== labels.length - 1) return null;
          const x = 38 + (index * 582) / Math.max(1, labels.length - 1);
          return <text key={label} x={x} y="142" textAnchor={index === 0 ? "start" : index === labels.length - 1 ? "end" : "middle"}>{label}</text>;
        })}
      </svg>
    </div>
  );
}

function RevenueDonut({ amount }) {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const scale = amount / 3980;
  const items = revenueItems.map((item) => ({ ...item, amount: Math.round(item.amount * scale) }));
  const total = items.reduce((sum, item) => sum + item.amount, 0);
  let offset = 0;

  return (
    <div className="author-sales-revenue-visual">
      <div className="author-sales-donut">
        <svg viewBox="0 0 150 150" aria-label="Revenue breakdown chart" role="img">
          <circle className="author-sales-donut-track" cx="75" cy="75" r={radius} />
          {items.map((item) => {
            const length = (item.amount / total) * circumference;
            const circle = <circle key={item.label} cx="75" cy="75" r={radius} stroke={item.color} strokeDasharray={`${length} ${circumference - length}`} strokeDashoffset={-offset} />;
            offset += length;
            return circle;
          })}
        </svg>
        <div><strong>{formatCurrency(total)}</strong><small>Estimated<br />Earnings</small></div>
      </div>
      <ul className="author-sales-revenue-legend">
        {items.map((item) => (
          <li key={item.label}><i style={{ backgroundColor: item.color }} /><span>{item.label}</span><strong>{formatCurrency(item.amount)}</strong></li>
        ))}
      </ul>
    </div>
  );
}

function downloadCsv(filename, rows) {
  const headers = ["Book", "Language", "Edition Type", "Format", "Paid Sales", "Rentals", "Free Reads", "Total Readers", "Earnings (USD)"];
  const lines = [headers, ...rows.map((row) => [
    row.book,
    row.language,
    row.edition,
    row.format,
    row.paidSales,
    row.rentals,
    row.freeReads,
    row.readers,
    row.earnings,
  ])];
  const csv = lines.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\r\n");
  const file = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function SalesEarningsWorkspace({ books, onOpenBook, onOpenMyBooks }) {
  const [dateRange, setDateRange] = useState("30");
  const [interval, setInterval] = useState("Daily");
  const [bookFilter, setBookFilter] = useState("All Books");
  const [formatFilter, setFormatFilter] = useState("All Formats");
  const [showAllCountries, setShowAllCountries] = useState(false);
  const [showPayoutHistory, setShowPayoutHistory] = useState(false);
  const [notice, setNotice] = useState("");

  const period = periods[dateRange];
  const filteredRawRows = useMemo(() => salesRows.filter((row) => (
    (bookFilter === "All Books" || row.book === bookFilter)
    && (formatFilter === "All Formats" || row.format.includes(formatFilter))
  )), [bookFilter, formatFilter]);
  const tableRows = useMemo(() => {
    const grouped = new Map();
    filteredRawRows.forEach((row) => {
      const key = `${row.language}|${row.edition}|${row.format}`;
      const current = grouped.get(key) || { ...row, paidSales: 0, rentals: 0, freeReads: 0, readers: 0, earnings: 0 };
      ["paidSales", "rentals", "freeReads", "readers", "earnings"].forEach((metric) => {
        current[metric] += row[metric];
      });
      if (bookFilter === "All Books") current.book = "All Books";
      grouped.set(key, current);
    });
    return [...grouped.values()].map((row) => ({
      ...row,
      paidSales: Math.round(row.paidSales * period.scale),
      rentals: Math.round(row.rentals * period.scale),
      freeReads: Math.round(row.freeReads * period.scale),
      readers: Math.round(row.readers * period.scale),
      earnings: Math.round(row.earnings * period.scale),
    }));
  }, [bookFilter, filteredRawRows, period.scale]);

  const metrics = useMemo(() => {
    if (bookFilter === "All Books" && formatFilter === "All Formats") {
      const totals = {
        "30": { paidSales: 1260, rentals: 140, freeReads: 2480, readers: 4080 },
        "90": { paidSales: 3024, rentals: 336, freeReads: 5952, readers: 9792 },
        "365": { paidSales: 10836, rentals: 1204, freeReads: 21328, readers: 35088 },
      }[dateRange];
      return { ...totals, refunds: period.refunds, earnings: period.earnings };
    }

    const totals = filteredRawRows.reduce((result, row) => {
      ["paidSales", "rentals", "freeReads", "readers", "earnings"].forEach((metric) => {
        result[metric] += row[metric];
      });
      return result;
    }, { paidSales: 0, rentals: 0, freeReads: 0, readers: 0, earnings: 0 });
    const share = salesRows.reduce((sum, row) => sum + row.earnings, 0)
      ? totals.earnings / salesRows.reduce((sum, row) => sum + row.earnings, 0)
      : 0;
    return {
      ...Object.fromEntries(Object.entries(totals).map(([key, value]) => [key, Math.round(value * period.scale)])),
      refunds: Math.round(period.refunds * share),
    };
  }, [bookFilter, dateRange, filteredRawRows, formatFilter, period]);

  const bookShare = bookFilter === "All Books"
    ? formatFilter === "All Formats" ? 1 : Math.max(.1, filteredRawRows.length / salesRows.length)
    : Math.max(.08, filteredRawRows.reduce((sum, row) => sum + row.earnings, 0) / 3980);
  const topBooks = books.map((book) => {
    const rows = salesRows.filter((row) => row.book === book.title);
    return {
      book,
      paidSales: rows.reduce((sum, row) => sum + row.paidSales, 0),
      rentals: rows.reduce((sum, row) => sum + row.rentals, 0),
      freeReads: rows.reduce((sum, row) => sum + row.freeReads, 0),
      readers: rows.reduce((sum, row) => sum + row.readers, 0),
      earnings: rows.reduce((sum, row) => sum + row.earnings, 0),
    };
  }).sort((a, b) => b.earnings - a.earnings);

  const exportRows = tableRows.map((row) => ({ ...row, book: row.book || bookFilter }));
  const handleDownload = (name = "sales-performance-report") => {
    downloadCsv(`${name}-${dateRange}-days.csv`, exportRows);
    setNotice(`${name.replaceAll("-", " ")} downloaded as CSV.`);
  };
  const countriesToShow = showAllCountries ? countryData : countryData.slice(0, 6);

  const summaryCards = [
    { icon: Coins, label: "Paid Sales", value: formatNumber(metrics.paidSales), change: "18%", positive: true },
    { icon: BookOpen, label: "Rentals", value: formatNumber(metrics.rentals), change: "12%", positive: true },
    { icon: BookOpen, label: "Free Reads", value: formatNumber(metrics.freeReads), change: "25%", positive: true },
    { icon: Users, label: "Total Readers", value: formatNumber(metrics.readers), change: "20%", positive: true },
    { icon: RefreshCw, label: "Refunds", value: formatNumber(metrics.refunds), change: "5%", positive: false },
    { icon: Wallet, label: "Estimated Earnings", value: formatCurrency(metrics.earnings), change: "22%", positive: true },
  ];

  return (
    <div className="author-sales-page">
      <header className="author-sales-header">
        <div className="author-sales-heading">
          <h1>Sales &amp; Performance Analytics</h1>
          <p>Track how your books are performing across all editions and languages.</p>
        </div>
        <div className="author-sales-header-actions">
          <label className="author-sales-range"><CalendarDays size={16} /><select aria-label="Report date range" value={dateRange} onChange={(event) => setDateRange(event.target.value)}>{Object.entries(periods).map(([value, item]) => <option key={value} value={value}>{item.label}</option>)}</select></label>
          <select aria-label="Filter by book" value={bookFilter} onChange={(event) => setBookFilter(event.target.value)}><option>All Books</option>{books.map((book) => <option key={book.title}>{book.title}</option>)}</select>
          <button className="is-primary" onClick={() => handleDownload()}><Download size={15} /> Download Report</button>
        </div>
      </header>

      <section className="author-sales-summary" aria-label="Sales summary">
        {summaryCards.map(({ icon: Icon, label, value, change, positive }) => (
          <article className={`author-sales-stat ${label === "Refunds" ? "is-refunds" : ""}`} key={label}>
            <span className="author-sales-stat-icon"><Icon size={19} /></span>
            <div className="author-sales-stat-copy"><small>{label}</small><strong>{value}</strong><span className={positive ? "is-positive" : "is-negative"}>{positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}{change}<small>vs previous period</small></span></div>
            <span className="author-sales-info" title={`${label} for ${period.label}`}>i</span>
          </article>
        ))}
      </section>

      <div className="author-sales-grid">
        <section className="author-sales-panel author-sales-performance">
          <div className="author-sales-panel-heading"><h2>Performance Trends</h2><select aria-label="Chart interval" value={interval} onChange={(event) => setInterval(event.target.value)}><option>Daily</option><option>Weekly</option><option>Monthly</option></select></div>
          <PerformanceChart period={period} interval={interval} bookShare={bookShare} />
        </section>

        <section className="author-sales-panel author-sales-edition-sales">
          <div className="author-sales-panel-heading">
            <h2>Sales by Edition &amp; Language</h2>
            <div><select aria-label="Edition sales book filter" value={bookFilter} onChange={(event) => setBookFilter(event.target.value)}><option>All Books</option>{books.map((book) => <option key={book.title}>{book.title}</option>)}</select><select aria-label="Format filter" value={formatFilter} onChange={(event) => setFormatFilter(event.target.value)}><option>All Formats</option><option>eBook</option><option>Paperback</option></select><button aria-label="Export edition sales" onClick={() => handleDownload("edition-language-sales")}><FileDown size={15} /> Export</button></div>
          </div>
          <div className="author-sales-table-scroll">
            <table>
              <thead><tr><th>Language</th><th>Edition Type</th><th>Format</th><th>Paid Sales</th><th>Rentals</th><th>Free Reads</th><th>Total Readers</th><th>Earnings (USD)</th></tr></thead>
              <tbody>{tableRows.map((row, index) => <tr key={`${row.language}-${row.edition}-${row.format}-${index}`}><td>{row.flag} {row.language}</td><td>{row.edition}</td><td>{row.format}</td><td>{formatNumber(row.paidSales)}</td><td>{formatNumber(row.rentals)}</td><td>{formatNumber(row.freeReads)}</td><td>{formatNumber(row.readers)}</td><td>{formatCurrency(row.earnings)}</td></tr>)}</tbody>
              {!tableRows.length && <tfoot><tr><td colSpan="8">No sales data matches these filters.</td></tr></tfoot>}
            </table>
          </div>
        </section>

        <section className="author-sales-panel author-sales-top-books">
          <div className="author-sales-panel-heading"><h2>Top Performing Books</h2><button className="author-sales-text-button" onClick={onOpenMyBooks}>View All <ArrowRight size={13} /></button></div>
          <div className="author-sales-table-scroll"><table><thead><tr><th>Book Title</th><th>Paid Sales</th><th>Rentals</th><th>Free Reads</th><th>Total Readers</th><th>Earnings (USD)</th></tr></thead><tbody>{topBooks.slice(0, 4).map((item) => <tr key={item.book.title}><td><button className="author-sales-book-link" onClick={() => onOpenBook(item.book)}>{item.book.title}<small>{item.book.genre}</small></button></td><td>{formatNumber(item.paidSales)}</td><td>{formatNumber(item.rentals)}</td><td>{formatNumber(item.freeReads)}</td><td>{formatNumber(item.readers)}</td><td>{formatCurrency(item.earnings)}</td></tr>)}</tbody></table></div>
        </section>

        <section className="author-sales-panel author-sales-countries">
          <div className="author-sales-panel-heading"><h2>Sales by Country</h2><button className="author-sales-text-button" onClick={() => setShowAllCountries((current) => !current)}>{showAllCountries ? "Show Less" : "View All"} <ArrowRight size={13} /></button></div>
          <div className="author-sales-country-content">
            <div className="author-sales-world-map" aria-hidden="true">
              <svg viewBox="0 0 240 140">
                <path d="M17 33 32 21 51 24 61 34 57 43 47 46 42 57 32 54 28 44 18 42ZM48 62 61 66 66 77 61 94 55 111 49 103 51 89 43 80ZM82 36 93 29 104 31 107 38 101 45 93 43ZM103 48 117 44 128 53 130 69 121 84 115 104 106 98 105 81 96 69ZM129 35 148 28 175 31 196 42 188 52 172 49 164 58 147 55 139 63 126 55ZM176 72 188 71 195 80 192 89 182 91 175 82ZM207 98 218 96 223 102 217 108 208 106Z" />
                <path className="author-sales-map-highlight" d="M137 43 148 40 158 45 156 53 146 55 138 51Z" />
                <path className="author-sales-map-highlight" d="M52 34 59 32 62 38 58 43 52 41Z" />
              </svg>
            </div>
            <div className="author-sales-country-list">{countriesToShow.map((item) => <div className="author-sales-country-row" key={item.country}><span>{item.flag} {item.country}</span><div><i style={{ width: `${item.share}%` }} /></div><small>{item.share}%</small></div>)}</div>
          </div>
        </section>

        <section className="author-sales-panel author-sales-revenue">
          <div className="author-sales-panel-heading"><h2>Revenue Breakdown</h2></div>
          <RevenueDonut amount={metrics.earnings} />
        </section>

        <section className="author-sales-panel author-sales-refunds">
          <div className="author-sales-panel-heading"><h2>Refunds &amp; Adjustments</h2><button className="author-sales-text-button" onClick={() => setNotice("Showing refunds and adjustments for the selected date range.")}>View All <ArrowRight size={13} /></button></div>
          <div className="author-sales-table-scroll"><table><thead><tr><th>Date</th><th>Book Title</th><th>Type</th><th>Amount (USD)</th><th>Reason</th></tr></thead><tbody>{refunds.map((refund) => <tr key={`${refund.date}-${refund.book}`}><td>{refund.date}</td><td>{refund.book}</td><td>{refund.type}</td><td className="is-refund-amount">{refund.amount}</td><td>{refund.reason}</td></tr>)}</tbody></table></div>
        </section>

        <section className="author-sales-panel author-sales-engagement">
          <div className="author-sales-panel-heading"><h2>Reader Engagement</h2></div>
          <div className="author-sales-engagement-grid">
            <article><Eye size={17} /><small>Page Views</small><strong>{formatNumber(metrics.readers * 2.14)}</strong><span><TrendingUp size={13} />32%</span></article>
            <article><Users size={17} /><small>Unique Readers</small><strong>{formatNumber(metrics.readers)}</strong><span><TrendingUp size={13} />20%</span></article>
            <article><Clock3 size={17} /><small>Avg. Read Time</small><strong>28 mins</strong><span><TrendingUp size={13} />15%</span></article>
            <article><BookOpen size={17} /><small>Completed Reads</small><strong>{formatNumber(metrics.readers * .37)}</strong><span><TrendingUp size={13} />18%</span></article>
          </div>
        </section>

        <section className="author-sales-panel author-sales-quick-actions">
          <div className="author-sales-panel-heading"><h2>Quick Actions</h2></div>
          <button onClick={() => handleDownload("detailed-sales-report")}><Download size={15} />Download Detailed Sales Report</button>
          <button onClick={() => handleDownload("royalty-statement")}><Coins size={15} />Download Royalty Statement</button>
          <button onClick={() => setShowPayoutHistory(true)}><Wallet size={15} />View Payout History</button>
        </section>
      </div>

      {notice && <p className="author-sales-notice" role="status">{notice}<button onClick={() => setNotice("")} aria-label="Dismiss message"><X size={15} /></button></p>}
      {showPayoutHistory && <div className="author-sales-modal" role="presentation" onClick={() => setShowPayoutHistory(false)}><section role="dialog" aria-modal="true" aria-labelledby="author-sales-payout-title" onClick={(event) => event.stopPropagation()}><button className="author-sales-modal-close" aria-label="Close payout history" onClick={() => setShowPayoutHistory(false)}><X size={18} /></button><Wallet size={28} /><h2 id="author-sales-payout-title">Payout History</h2><p>Recent royalty transfers for your published books.</p><ul><li><span>15 Oct 2026</span><strong>$1,250.00</strong><small>Paid · Bank transfer</small></li><li><span>30 Sep 2026</span><strong>$980.00</strong><small>Paid · Bank transfer</small></li><li><span>15 Sep 2026</span><strong>$760.00</strong><small>Paid · Bank transfer</small></li></ul><button className="is-primary" onClick={() => setShowPayoutHistory(false)}>Done</button></section></div>}
    </div>
  );
}
