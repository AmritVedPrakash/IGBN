import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UploadNewBook from "./UploadNewBook";
import {
  ArrowRight,
  Bell,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  CloudUpload,
  Coins,
  Eye,
  Globe2,
  Headphones,
  Languages,
  LogOut,
  Megaphone,
  Menu,
  MessageSquareText,
  Plus,
  Settings,
  Star,
  TrendingUp,
  UserRound,
  Users,
  Wallet,
  X,
} from "lucide-react";
import "./authorDashboard.css";

const bookCovers = [
  {
    image:
      "https://images.unsplash.com/photo-1540921002383-b2a7ff6a716d?auto=format&fit=crop&w=600&q=85",
    title: "Echoes of a New Dawn",
    genre: "Fiction",
    languages: "English + 3",
    readers: "12.5K",
    rating: "4.8",
    status: "Published",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554788625-51d9860bdb28?auto=format&fit=crop&w=600&q=85",
    title: "The Inner Light",
    genre: "Self-Help",
    languages: "English + 5",
    readers: "8.2K",
    rating: "4.6",
    status: "Published",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503685374561-caac80ea1399?auto=format&fit=crop&w=600&q=85",
    title: "Beyond the Horizon",
    genre: "Inspirational",
    languages: "English + 2",
    readers: "—",
    rating: "—",
    status: "Under Review",
  },
  {
    image:
      "https://images.unsplash.com/photo-1747792607295-ada93d1b320c?auto=format&fit=crop&w=600&q=85",
    title: "Silent Rivers",
    genre: "Poetry",
    languages: "English",
    readers: "—",
    rating: "—",
    status: "Draft",
  },
];

const statGroups = [
  [
    { icon: BookOpen, value: "12", label: "Total Books", color: "gold" },
    { icon: BookOpen, value: "3", label: "Drafts", color: "amber" },
    { icon: Clock3, value: "2", label: "Under Review", color: "violet" },
    { icon: Check, value: "5", label: "Published", color: "green" },
  ],
  [
    {
      icon: TrendingUp,
      value: "28,450",
      label: "Total Readers",
      color: "blue",
    },
    { icon: Users, value: "18K", label: "Followers", color: "gold" },
    { icon: Coins, value: "₹ 19,950", label: "Total Earnings", color: "green" },
    {
      icon: Wallet,
      value: "₹ 8,550",
      label: "Pending Payout",
      color: "orange",
    },
  ],
];

const notifications = [
  {
    icon: Check,
    color: "green",
    title: "Your book “Echoes of a New Dawn” has been published.",
    time: "2 hours ago",
  },
  {
    icon: Languages,
    color: "blue",
    title: "Translations for “The Inner Light” are ready for your review.",
    time: "1 day ago",
  },
  {
    icon: Megaphone,
    color: "violet",
    title: "A reader gave your book a new 5-star review.",
    time: "2 days ago",
  },
  {
    icon: Coins,
    color: "orange",
    title: "₹ 4,250 has been added to your earnings.",
    time: "3 days ago",
  },
  {
    icon: Users,
    color: "blue",
    title: "You gained 120 new readers this week.",
    time: "4 days ago",
  },
];

const navigation = [
  ["Dashboard", Globe2],
  ["My Books", BookOpen],
  ["Upload New Book", CloudUpload],
  ["Translations", Languages],
  ["Sales & Earnings", TrendingUp],
  ["Reader Reviews", Star],
  ["Marketing Tools", Megaphone],
  ["Profile Settings", UserRound],
  ["Payments & Payouts", Wallet],
  ["Help & Support", Headphones],
];

function StatCard({ icon: Icon, value, label, color }) {
  return (
    <article className="author-dashboard-stat">
      <span className={`author-dashboard-stat-icon ${color}`}>
        <Icon size={25} />
      </span>
      <span className="author-dashboard-stat-copy">
        <strong>{value}</strong>
        <small>{label}</small>
      </span>
      <ChevronRight className="author-dashboard-stat-arrow" size={19} />
    </article>
  );
}

export default function AuthorDashboard({ initialView = "Dashboard" }) {
  const { state: profile } = useLocation();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(initialView);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const authorName = profile?.name || "Aditi Sharma";
  const authorPhoto = profile?.photo;
  const initials = authorName
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="author-dashboard-page">
      <header className="author-dashboard-topbar">
        <div className="author-dashboard-brand">
          <span className="author-dashboard-brand-mark">
            <Globe2 size={32} />
          </span>
          <span>
            <strong>
              IGBN <em>PUBLISHERS</em>
            </strong>
            <small>AUTHOR DASHBOARD</small>
          </span>
        </div>
        <div className="author-dashboard-banner">
          <span>YOUR STORIES. GLOBAL READERS. REAL IMPACT.</span>
          <strong>
            Write. Publish. Translate.
            <br />
            Be discovered worldwide.
          </strong>
        </div>
        <div className="author-dashboard-top-actions">
          <button
            aria-label="Notifications"
            onClick={() => setNotificationsOpen((open) => !open)}
          >
            <Bell size={20} />
            <i>3</i>
          </button>
          <button
            className="author-dashboard-user"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {authorPhoto ? (
              <img src={authorPhoto} alt="" />
            ) : (
              <span>{initials}</span>
            )}
            <b>
              {authorName}
              <small>Author</small>
            </b>
            <ChevronDown size={16} />
          </button>
          {menuOpen && (
            <div className="author-dashboard-menu">
              <button onClick={() => setActiveNav("Profile Settings")}>
                <Settings size={16} /> Profile settings
              </button>
              <button onClick={() => navigate("/publishers")}>
                <LogOut size={16} /> Back to publishers
              </button>
            </div>
          )}
        </div>
      </header>

      <div className={`author-dashboard-layout ${activeNav === "Upload New Book" ? "is-uploading" : ""}`}>
        <aside
          className={`author-dashboard-sidebar ${sidebarOpen ? "is-open" : ""}`}
        >
          <button
            className="author-dashboard-mobile-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
          <nav aria-label="Author dashboard">
            {navigation.map(([label, Icon]) => (
              <button
                key={label}
                className={activeNav === label ? "is-active" : ""}
                onClick={() => {
                  setActiveNav(label);
                  setSidebarOpen(false);
                }}
              >
                <Icon size={21} />
                <span>{label}</span>
              </button>
            ))}
          </nav>
          <div className="author-dashboard-help">
            <Headphones size={24} />
            <strong>Need help?</strong>
            <p>Our team is here for you.</p>
            <button onClick={() => setActiveNav("Help & Support")}>
              Contact support <ArrowRight size={16} />
            </button>
          </div>
        </aside>

        <section className={`author-dashboard-main ${activeNav === "Upload New Book" ? "is-uploading" : ""}`}>
          {activeNav === "Upload New Book" ? (
            <UploadNewBook embedded profile={profile} onBack={() => setActiveNav("Dashboard")} />
          ) : (
            <>
          <div className="author-dashboard-welcome">
            <div className="author-dashboard-welcome-profile">
              {authorPhoto ? (
                <img src={authorPhoto} alt={authorName} />
              ) : (
                <span>{initials}</span>
              )}
            </div>
            <div className="author-dashboard-welcome-copy">
              <p>Welcome back,</p>
              <h1>
                {authorName} <span aria-hidden="true">👋</span>
              </h1>
              <small>
                Author&nbsp; | &nbsp;Speaker&nbsp; | &nbsp;Storyteller
              </small>
              <blockquote>
                “Stories have the power to connect cultures and create a more
                understanding world.”
              </blockquote>
            </div>
            <div className="author-dashboard-welcome-actions">
              <button
                className="author-dashboard-primary"
                onClick={() => setActiveNav("Upload New Book")}
              >
                <Plus size={19} /> Upload new book
              </button>
              <button
                className="author-dashboard-outline"
                onClick={() => setActiveNav("My Books")}
              >
                Continue editing <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="author-dashboard-stat-groups">
            {statGroups.map((group, index) => (
              <div className="author-dashboard-stat-grid" key={index}>
                {group.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </div>
            ))}
          </div>

          <section
            className="author-dashboard-section author-dashboard-books"
            id="my-books"
          >
            <div className="author-dashboard-section-heading">
              <h2>
                <i />
                My Books
              </h2>
              <button onClick={() => setActiveNav("My Books")}>
                View all books <ArrowRight size={16} />
              </button>
            </div>
            <div className="author-dashboard-book-grid">
              {bookCovers.map((book) => (
                <article className="author-dashboard-book" key={book.title}>
                  <div className="author-dashboard-book-art">
                    <img
                      src={book.image}
                      alt={`Cover art for ${book.title}`}
                      loading="lazy"
                    />
                    <span
                      className={`author-dashboard-book-status ${book.status.toLowerCase().replaceAll(" ", "-")}`}
                    >
                      {book.status}
                    </span>
                    <strong>{book.title}</strong>
                    <small>{authorName}</small>
                  </div>
                  <h3>{book.title}</h3>
                  <p>
                    {book.genre} <span>|</span> {book.languages}
                  </p>
                  <div className="author-dashboard-book-metrics">
                    <span>
                      <Eye size={15} /> {book.readers}
                    </span>
                    <span>
                      <Star size={15} /> {book.rating}
                    </span>
                  </div>
                  <button
                    className="author-dashboard-book-button"
                    onClick={() =>
                      setActiveNav(
                        book.status === "Draft"
                          ? "Upload New Book"
                          : "My Books",
                      )
                    }
                  >
                    {book.status === "Draft"
                      ? "Continue editing"
                      : book.status === "Under Review"
                        ? "View status"
                        : "View details"}
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="author-dashboard-section author-dashboard-quick-actions">
            <div className="author-dashboard-section-heading">
              <h2>
                <i />
                Quick Actions
              </h2>
            </div>
            <div className="author-dashboard-action-grid">
              {[
                [CloudUpload, "Upload New Book", "Upload"],
                [Languages, "Manage Translations", "Translations"],
                [TrendingUp, "View Sales Report", "Sales & Earnings"],
                [UserRound, "Update Profile", "Profile Settings"],
                [Megaphone, "Marketing Tools", "Marketing Tools"],
                [Wallet, "Request Payout", "Payments & Payouts"],
              ].map(([Icon, label, target]) => (
                <button key={label} onClick={() => setActiveNav(target)}>
                  <Icon size={24} />
                  <span>{label}</span>
                  <ChevronRight size={15} />
                </button>
              ))}
            </div>
          </section>
            </>
          )}
        </section>

        {activeNav !== "Upload New Book" && <aside className="author-dashboard-right">
          <section className="author-dashboard-reach">
            <div className="author-dashboard-reach-globe">
              <Globe2 size={45} />
            </div>
            <div>
              <h2>
                Reach readers in <em>21+ countries</em>
              </h2>
              <p>
                Your stories can be translated and made available in multiple
                languages.
              </p>
              <button onClick={() => setActiveNav("Translations")}>
                Explore <ChevronRight size={16} />
              </button>
            </div>
          </section>
          <section className="author-dashboard-panel author-dashboard-notifications">
            <div className="author-dashboard-section-heading">
              <h2>
                <i />
                Recent Notifications
              </h2>
              <button onClick={() => setNotificationsOpen((open) => !open)}>
                {notificationsOpen ? "Show less" : "View all"}{" "}
                <ArrowRight size={14} />
              </button>
            </div>
            <ul>
              {(notificationsOpen
                ? [
                    ...notifications,
                    {
                      icon: MessageSquareText,
                      color: "blue",
                      title: "Your author profile was viewed by new readers.",
                      time: "5 days ago",
                    },
                  ]
                : notifications
              ).map(({ icon: Icon, color, title, time }) => (
                <li key={title}>
                  <span className={`author-dashboard-notice-icon ${color}`}>
                    <Icon size={17} />
                  </span>
                  <p>
                    {title}
                    <small>{time}</small>
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section className="author-dashboard-panel author-dashboard-earnings">
            <div className="author-dashboard-section-heading">
              <h2>
                <i />
                Earnings Overview
              </h2>
              <button onClick={() => setActiveNav("Sales & Earnings")}>
                View details <ArrowRight size={14} />
              </button>
            </div>
            <select aria-label="Earnings period" defaultValue="6">
              {" "}
              <option value="6">Last 6 months</option>
              <option value="12">Last 12 months</option>
            </select>
            <div className="author-dashboard-chart">
              <div className="author-dashboard-y-axis">
                <span>15K</span>
                <span>10K</span>
                <span>5K</span>
                <span>0</span>
              </div>
              <div className="author-dashboard-chart-bars">
                {[
                  [40, "Apr"],
                  [56, "May"],
                  [65, "Jun"],
                  [78, "Jul"],
                  [71, "Aug"],
                  [92, "Sep"],
                ].map(([height, month]) => (
                  <div key={month}>
                    <span style={{ height: `${height}%` }} />
                    <small>{month}</small>
                  </div>
                ))}
              </div>
            </div>
            <div className="author-dashboard-payout">
              <Coins size={15} />
              <span>
                <strong>₹ 8,550</strong>
                <small>Pending payout</small>
              </span>
            </div>
          </section>
          <section className="author-dashboard-panel author-dashboard-global">
            <div className="author-dashboard-section-heading">
              <h2>
                <i />
                Global Reach
              </h2>
            </div>
            <div className="author-dashboard-world">
              <Globe2 size={68} />
              <div>
                <strong>21+ countries</strong>
                <small>Readers across the world</small>
              </div>
            </div>
            <p>
              Your stories are reaching readers in 21+ countries with multiple
              language support.
            </p>
            <button onClick={() => setActiveNav("Translations")}>
              View insights <ArrowRight size={15} />
            </button>
          </section>
        </aside>}
      </div>
      <button
        className="author-dashboard-menu-toggle"
        aria-label="Open navigation"
        onClick={() => setSidebarOpen((open) => !open)}
      >
        <Menu size={20} />
      </button>
      <div className="author-dashboard-float-help" aria-label="Help">
        <CircleHelp size={20} />
      </div>
    </main>
  );
}
