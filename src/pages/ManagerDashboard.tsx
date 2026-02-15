import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Hotel, LayoutDashboard, BedDouble, Calendar, DollarSign,
  MessageSquare, Settings, LogOut, Menu, X, Bell, TrendingUp,
  TrendingDown, Star, Users, ChevronDown, Plus,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/manager" },
  { icon: BedDouble, label: "Rooms", path: "/manager/rooms" },
  { icon: Calendar, label: "Reservations", path: "/manager/reservations" },
  { icon: DollarSign, label: "Revenue", path: "/manager/revenue" },
  { icon: MessageSquare, label: "Reviews", path: "/manager/reviews" },
  { icon: Settings, label: "Settings", path: "/manager/settings" },
];

const stats = [
  { title: "Occupancy Rate", value: "87%", change: "+3.2%", trend: "up", icon: BedDouble, color: "from-primary to-accent" },
  { title: "Today's Revenue", value: "$4,280", change: "+18%", trend: "up", icon: DollarSign, color: "from-green-500 to-emerald-500" },
  { title: "Active Guests", value: "42", change: "-2", trend: "down", icon: Users, color: "from-orange-500 to-amber-500" },
  { title: "Avg. Rating", value: "4.8", change: "+0.1", trend: "up", icon: Star, color: "from-purple-500 to-pink-500" },
];

const todayReservations = [
  { guest: "Alice Martin", room: "Suite 301", checkIn: "14:00", status: "arriving" },
  { guest: "Robert Kim", room: "Deluxe 205", checkIn: "15:00", status: "arriving" },
  { guest: "Sophie Chen", room: "Standard 112", checkIn: "—", status: "departing" },
  { guest: "James Wilson", room: "Suite 402", checkIn: "16:00", status: "arriving" },
];

const ManagerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {mobileSidebarOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden" onClick={() => setMobileSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full bg-card border-r border-border z-50 transition-all duration-300",
        sidebarOpen ? "w-64" : "w-20",
        mobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="h-20 flex items-center justify-between px-4 border-b border-border">
          <Link to="/manager" className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-xl shrink-0">
              <Hotel className="h-5 w-5 text-primary-foreground" />
            </div>
            {sidebarOpen && <span className="text-xl font-bold text-gradient animate-fade-in-left">Manager</span>}
          </Link>
          <button onClick={() => setMobileSidebarOpen(false)} className="lg:hidden p-2 hover:bg-secondary rounded-lg">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                  isActive ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <item.icon className={cn("h-5 w-5 shrink-0", isActive && "text-primary")} />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors">
            <LogOut className="h-5 w-5 shrink-0" />
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className={cn("transition-all duration-300", sidebarOpen ? "lg:ml-64" : "lg:ml-20")}>
        <header className="h-20 border-b border-border glass-strong sticky top-0 z-30">
          <div className="h-full px-4 sm:px-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button onClick={() => setMobileSidebarOpen(true)} className="lg:hidden p-2 hover:bg-secondary rounded-lg">
                <Menu className="h-5 w-5" />
              </button>
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="hidden lg:flex p-2 hover:bg-secondary rounded-lg">
                <Menu className="h-5 w-5" />
              </button>
              <h2 className="text-lg font-semibold hidden sm:block">Hotel Manager Panel</h2>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2.5 hover:bg-secondary rounded-xl transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-green-500 rounded-full" />
              </button>
              <div className="flex items-center gap-3 pl-3 border-l border-border">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary-foreground">MG</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">Maria Garcia</p>
                  <p className="text-xs text-muted-foreground">Hotel Manager</p>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8 space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-in-up">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Good morning, Maria 👋</h1>
              <p className="text-muted-foreground">Here's your hotel overview for today.</p>
            </div>
            <Button variant="hero">
              <Plus className="h-4 w-4 mr-2" /> Add Room
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <Card key={stat.title} className="relative overflow-hidden hover-lift animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
                      <div className="flex items-center gap-1 mt-2">
                        {stat.trend === "up" ? <TrendingUp className="h-4 w-4 text-green-500" /> : <TrendingDown className="h-4 w-4 text-destructive" />}
                        <span className={`text-sm font-medium ${stat.trend === "up" ? "text-green-500" : "text-destructive"}`}>{stat.change}</span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shrink-0`}>
                      <stat.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Today's Reservations */}
          <Card className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <CardHeader>
              <CardTitle>Today's Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Guest</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Room</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground hidden sm:table-cell">Time</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todayReservations.map((r, i) => (
                      <tr key={i} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                        <td className="py-3 px-4 font-medium">{r.guest}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{r.room}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground hidden sm:table-cell">{r.checkIn}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                            r.status === "arriving" ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500"
                          }`}>
                            {r.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default ManagerDashboard;
